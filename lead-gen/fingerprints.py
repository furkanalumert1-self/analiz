"""HTML parmak izleri: e-ticaret altyapısı, canlı destek ve WhatsApp tespiti.

LLM çıkarımına ek olarak deterministik (ücretsiz) sinyaller üretir; LLM'in
kaçırdığı script/widget izlerini yakalar.
"""

from __future__ import annotations

import re

PLATFORMS = {
    "shopify": [r"cdn\.shopify\.com", r"myshopify\.com", r"Shopify\.theme"],
    "ikas": [r"ikas\.com", r"cdn\.myikas\.com", r"ikas-"],
    "ticimax": [r"ticimax", r"static\.ticimax\.cloud"],
    "ideasoft": [r"ideasoft", r"myideasoft\.com"],
    "t-soft": [r"tsoft", r"t-soft\.com\.tr"],
    "woocommerce": [r"woocommerce", r"wc-ajax"],
    "magento": [r"Magento_", r"mage/cookies"],
    "opencart": [r"route=product/product", r"catalog/view/theme"],
}

LIVE_CHAT = {
    "callypso": [r"callypso"],
    "tawk.to": [r"embed\.tawk\.to"],
    "intercom": [r"widget\.intercom\.io"],
    "zendesk": [r"static\.zdassets\.com", r"zopim"],
    "tidio": [r"code\.tidio\.co"],
    "crisp": [r"client\.crisp\.chat"],
    "jivochat": [r"code\.jivosite\.com"],
    "livechat": [r"cdn\.livechatinc\.com"],
    "hubspot": [r"js\.hs-scripts\.com"],
    "freshchat": [r"wchat\.freshchat\.com"],
}

TRACKING = {
    "meta_pixel": [r"connect\.facebook\.net/.+/fbevents\.js", r"fbq\("],
    "google_ads": [r"googleadservices\.com", r"AW-\d+"],
    "ga4": [r"gtag\(.config.,\s*.G-", r"googletagmanager\.com/gtag/js\?id=G-"],
    "tiktok_pixel": [r"analytics\.tiktok\.com"],
    "klaviyo": [r"klaviyo\.com"],
    "insider": [r"useinsider\.com"],
}

WHATSAPP = re.compile(r"(?:wa\.me/|api\.whatsapp\.com/send\?phone=|whatsapp://send\?phone=)(\+?\d{10,15})", re.I)
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")

# KVKK: kişiye ait olabilecek adresleri değil, rol tabanlı kurumsal adresleri tutuyoruz.
ROLE_PREFIXES = ("info", "bilgi", "destek", "support", "iletisim", "contact", "hello", "merhaba",
                 "satis", "sales", "musteri", "customer", "siparis", "order", "iletişim", "b2b",
                 "kurumsal", "pazarlama", "marketing", "partnership", "isbirligi", "hr", "ik")


def _match(table: dict[str, list[str]], html: str) -> list[str]:
    return [name for name, pats in table.items() if any(re.search(p, html, re.I) for p in pats)]


def role_based_emails(emails: list[str]) -> list[str]:
    out = []
    for e in emails:
        e = e.strip().lower()
        local = e.split("@", 1)[0]
        if e.endswith((".png", ".jpg", ".webp", ".svg", ".gif")) or "sentry" in e or "example" in e:
            continue
        if local.startswith(ROLE_PREFIXES) and e not in out:
            out.append(e)
    return out


def analyze_html(html: str) -> dict:
    platforms = _match(PLATFORMS, html)
    chats = _match(LIVE_CHAT, html)
    return {
        "fp_platform": platforms[0] if platforms else None,
        "fp_live_chat": chats,
        "fp_tracking": _match(TRACKING, html),
        "fp_whatsapp_numbers": sorted(set(WHATSAPP.findall(html))),
        "fp_emails": role_based_emails(EMAIL.findall(html)),
    }
