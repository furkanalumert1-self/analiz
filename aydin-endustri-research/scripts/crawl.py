"""Fallback site crawler (used because the Apify account hit its monthly hard limit).
Mirrors website-content-crawler output: one JSON record per URL with title, meta,
headings, cleaned text, plus structured product data (JSON-LD) and tracking signals.
Usage: python3 crawl.py <domain> <out.json>
"""
import sys, re, json, html, gzip, time, concurrent.futures as cf
import urllib.request

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"

def get(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"})
            with urllib.request.urlopen(req, timeout=40) as r:
                b = r.read()
                if r.headers.get("Content-Encoding") == "gzip":
                    b = gzip.decompress(b)
                return r.status, b.decode("utf-8", "ignore")
        except Exception as e:
            err = e
            time.sleep(1.5 * (i + 1))
    return 0, ""

def locs(xml):
    return [html.unescape(x.strip()) for x in re.findall(r"<loc>([^<]+)</loc>", xml)]

TRACK = {
    "Google Analytics 4": r"\bG-[A-Z0-9]{8,12}\b",
    "Google Tag Manager": r"GTM-[A-Z0-9]{5,8}",
    "Google Ads": r"\bAW-\d{6,}",
    "Meta Pixel": r"fbq\(|connect\.facebook\.net",
    "TikTok Pixel": r"analytics\.tiktok\.com|ttq\.load",
    "Criteo": r"static\.criteo\.net|criteo\.com/js",
    "Hotjar": r"static\.hotjar\.com",
    "Microsoft Clarity": r"clarity\.ms",
    "Yandex Metrica": r"mc\.yandex\.ru",
    "Insider": r"useinsider|api\.useinsider",
    "Segmentify": r"segmentify",
    "Klaviyo": r"klaviyo",
    "Euromsg / Related Digital": r"euromsg|relateddigital",
    "OneSignal": r"onesignal",
    "WhatsApp link": r"wa\.me/|api\.whatsapp\.com",
    "Tawk.to": r"tawk\.to",
    "Zendesk/Zopim": r"zopim|zendesk",
    "Trustpilot": r"trustpilot",
    "Yotpo": r"yotpo",
    "Pinterest Tag": r"pintrk|s\.pinimg\.com/ct",
    "Snapchat Pixel": r"sc-static\.net/scevent",
    "Bing UET": r"bat\.bing\.com",
    "Google reCAPTCHA": r"recaptcha",
    "T-Soft consent (TSOFT_CONSENT)": r"TSOFT_CONSENT",
    "T-Soft platform": r"tsoftstatic\.com|T-Soft",
    "Sentry": r"sentry",
    "iyzico": r"iyzico",
    "PayTR": r"paytr",
    "Google Merchant / Reviews": r"merchantwidget|surveyoptin",
    "Callypso": r"callypso",
}

def clean_text(t):
    t = re.sub(r"<(script|style|noscript|svg)[^>]*>.*?</\1>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    return re.sub(r"\s+", " ", html.unescape(t)).strip()

def jsonld(t):
    out = []
    for m in re.finditer(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', t, flags=re.S):
        try:
            d = json.loads(m.group(1).strip())
        except Exception:
            continue
        stack = [d]
        while stack:
            x = stack.pop()
            if isinstance(x, list):
                stack.extend(x)
            elif isinstance(x, dict):
                out.append(x)
                for k in ("@graph",):
                    if k in x:
                        stack.append(x[k])
    return out

def meta(t, name):
    m = re.search(r'<meta[^>]+(?:name|property)=["\']%s["\'][^>]+content=["\']([^"\']*)' % re.escape(name), t, flags=re.I)
    return html.unescape(m.group(1)) if m else None

def parse(url, kind, status, t):
    rec = {"url": url, "kind": kind, "status": status}
    m = re.search(r"<title[^>]*>(.*?)</title>", t, flags=re.S | re.I)
    rec["title"] = clean_text(m.group(1)) if m else None
    rec["metaDescription"] = meta(t, "description")
    rec["h1"] = [clean_text(x) for x in re.findall(r"<h1[^>]*>(.*?)</h1>", t, flags=re.S | re.I)][:3]
    rec["h2"] = [clean_text(x) for x in re.findall(r"<h2[^>]*>(.*?)</h2>", t, flags=re.S | re.I)][:15]
    lds = jsonld(t)
    prods = [x for x in lds if x.get("@type") == "Product"]
    crumbs = [x for x in lds if x.get("@type") == "BreadcrumbList"]
    faqs = [x for x in lds if x.get("@type") == "FAQPage"]
    if crumbs:
        rec["breadcrumbs"] = [i.get("name") or (i.get("item") or {}).get("name") for i in crumbs[0].get("itemListElement", [])]
    if faqs:
        rec["faq"] = [{"q": q.get("name"), "a": clean_text((q.get("acceptedAnswer") or {}).get("text", ""))[:400]} for q in faqs[0].get("mainEntity", [])]
    if prods:
        p = prods[0]
        offers = p.get("offers") or {}
        if isinstance(offers, list):
            offers = offers[0] if offers else {}
        rec["product"] = {
            "name": p.get("name"),
            "sku": p.get("sku"),
            "mpn": p.get("mpn"),
            "gtin": p.get("gtin13") or p.get("gtin"),
            "brand": (p.get("brand") or {}).get("name") if isinstance(p.get("brand"), dict) else p.get("brand"),
            "category": p.get("category"),
            "image": (p.get("image") or [None])[0] if isinstance(p.get("image"), list) else p.get("image"),
            "price": offers.get("price") or offers.get("lowPrice"),
            "highPrice": offers.get("highPrice"),
            "currency": offers.get("priceCurrency"),
            "availability": (offers.get("availability") or "").split("/")[-1],
            "rating": (p.get("aggregateRating") or {}).get("ratingValue"),
            "reviewCount": (p.get("aggregateRating") or {}).get("reviewCount") or (p.get("aggregateRating") or {}).get("ratingCount"),
            "description": clean_text(p.get("description") or "")[:900],
            "variants": [],
        }
        hv = p.get("hasVariant") or []
        for v in hv[:60]:
            o = v.get("offers") or {}
            rec["product"]["variants"].append({"name": v.get("name"), "sku": v.get("sku"), "price": o.get("price"), "availability": (o.get("availability") or "").split("/")[-1]})
        # T-Soft old price / discount markers in html
        m = re.search(r'"(?:sell_price|discounted_price|price_sell)"\s*:\s*"?([\d.,]+)', t)
        olds = re.findall(r'class="[^"]*(?:product-price-not-discounted|old-price|price-old|line-through)[^"]*"[^>]*>\s*([^<]{1,30})<', t)
        if olds:
            rec["product"]["oldPriceText"] = clean_text(olds[0])
    # T-Soft dataLayer product info (prices incl. discounts)
    m = re.search(r"PRODUCT_DATA'\]\.push\((\{.*?\})\);", t, flags=re.S)
    if m:
        try:
            rec["tsoftProduct"] = json.loads(m.group(1))
        except Exception:
            rec["tsoftProductRaw"] = m.group(1)[:1500]
    rec["tracking"] = sorted({k for k, rx in TRACK.items() if re.search(rx, t, flags=re.I)})
    rec["ids"] = sorted(set(re.findall(r"\b(?:G-[A-Z0-9]{8,12}|GTM-[A-Z0-9]{5,8}|AW-\d{6,})\b", t)))
    links = set(re.findall(r'href="(https?://[^"#]+)"', t))
    rec["externalLinks"] = sorted(l for l in links if not re.search(r"homedius\.com|sleeptown\.com\.tr|tsoftstatic", l))[:80]
    text = clean_text(t)
    rec["textLength"] = len(text)
    rec["text"] = text[:12000]
    return rec

def main(domain, out):
    base = f"https://www.{domain}"
    _, idx = get(base + "/sitemap.xml")
    maps = locs(idx)
    urls = {base + "/": "home"}
    for sm in maps:
        kind = sm.rsplit("/", 1)[-1].replace(".xml", "")
        _, x = get(sm)
        lst = locs(x)
        if kind == "blog":
            lst = lst[:40]
        for u in lst:
            urls.setdefault(u.rstrip("/") if u != base + "/" else u, kind)
    for extra, k in [("/sepet", "cart"), ("/uye-girisi-sayfasi", "account"), ("/uye-ol", "account"), ("/kampanyalar", "campaign"), ("/arama?q=yatak", "search"), ("/sss", "page"), ("/iletisim", "page")]:
        urls.setdefault(base + extra, k)
    print(domain, len(urls), "unique urls", file=sys.stderr)
    recs = []
    def work(item):
        u, k = item
        s, t = get(u)
        return parse(u, k, s, t) if t else {"url": u, "kind": k, "status": s}
    with cf.ThreadPoolExecutor(8) as ex:
        for r in ex.map(work, urls.items()):
            recs.append(r)
    # dedupe products by sku/name
    seen = set()
    for r in recs:
        p = r.get("product")
        if p:
            key = (p.get("sku") or p.get("name"), r["url"])
            r["duplicate"] = key in seen
            seen.add(key)
    json.dump({"domain": domain, "crawledAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "method": "fallback-python-crawler (Apify monthly hard limit exceeded)", "count": len(recs), "pages": recs}, open(out, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
