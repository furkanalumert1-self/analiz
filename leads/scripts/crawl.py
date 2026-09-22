"""Step 3: deterministic website checks (e-commerce, platform, Turkish + Europe signals).
Only compact signals are cached (cache/sites.json); raw HTML is never stored."""
import json, os, re, sys
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup

CACHE = os.path.join(os.path.dirname(__file__), "..", "cache")
SF = os.path.join(CACHE, "sites.json")
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      "Accept-Language": "de-DE,de;q=0.9,en;q=0.8,nl;q=0.7,fr;q=0.6,tr;q=0.5"}

PLATFORMS = [("Shopify", r"cdn\.shopify\.com|Shopify\.theme|myshopify\.com"),
             ("WooCommerce", r"woocommerce|wc-block|wp-content/plugins/woocommerce"),
             ("Magento / Adobe Commerce", r"Magento_|mage/cookies|/static/version\d+/frontend/|data-mage-init"),
             ("Shopware", r"shopware|sw-|/bundles/storefront/"),
             ("BigCommerce", r"bigcommerce\.com|cdn11\.bigcommerce"),
             ("Salesforce Commerce Cloud", r"demandware|/on/demandware\.store/"),
             ("Other: Ticimax", r"ticimax"), ("Other: IdeaSoft", r"ideasoft|myideasoft"), ("Other: T-Soft", r"tsoft|t-soft"),
             ("Other: PrestaShop", r"prestashop"), ("Other: Lightspeed", r"lightspeed|webshopapp\.com|seoshop"),
             ("Other: CCV Shop", r"ccvshop"), ("Other: JTL", r"jtl-shop|jtl_"), ("Other: plentymarkets", r"plentymarkets|plenty"),
             ("Other: Gambio", r"gambio"), ("Other: OXID", r"oxid"), ("Other: OpenCart", r"route=common/home|catalog/view/theme"),
             ("Other: Wix", r"wixstatic|_wix"), ("Other: Squarespace", r"squarespace"), ("Other: Ecwid", r"ecwid"),
             ("Other: Next.js custom", r"__NEXT_DATA__")]
CART = re.compile(r"add[ _-]?to[ _-]?(cart|bag|basket)|in den warenkorb|warenkorb|in winkelwagen|winkelwagen|winkelmand|"
                  r"ajouter au panier|panier|sepete ekle|sepetim|/cart\b|/checkout|/basket|kasse|afrekenen|checkout", re.I)
PRODUCT = re.compile(r'"@type"\s*:\s*"(Product|Offer|AggregateOffer)"|og:type"\s*content="product|/products?/|/produkt|/urun', re.I)
TURK = re.compile(r"\b(t[üu]rk\w*|turkish|turkse?|turc|turque|turquie|turkey|türkei|türkiye|turkije|istanbul|anatoli\w*|anadolu)\b", re.I)
SELF_TURK = re.compile(r"(founded in (istanbul|turkey|türkiye)|gegründet in (istanbul|der türkei)|opgericht in (istanbul|turkije)|"
                       r"fondée? (à|en) (istanbul|turquie)|turkish (brand|company|family|founder)|türkische (marke|firma|familie|wurzeln)|"
                       r"turks(e)? (merk|bedrijf|familie)|marque turque|entreprise turque|türk (markası|şirketi)|headquartered in (istanbul|turkey)|"
                       r"from (istanbul|turkey|türkiye) to|aus (istanbul|der türkei)|since \d{4} in (turkey|istanbul)|seit \d{4} in (istanbul|der türkei)|"
                       r"türkischer (online[- ]?)?(supermarkt|shop|markt|händler)|turkse (online )?(supermarkt|winkel|webshop)|"
                       r"supermarché turc|épicerie turque|turkish (online )?(supermarket|grocery|store|shop|market)|"
                       r"(istanbul|türkiye|turkey)'?(de|da|den|dan)?\s+(kurulan|kuruldu)|merkezi (istanbul|türkiye))", re.I)
WHOLESALE = re.compile(r"gro(ß|ss)handel|groothandel|grossiste|wholesale|toptan|b2b only|nur für gewerbe", re.I)
VAT = re.compile(r"\b(DE ?\d{9}|ATU ?\d{8}|NL ?\d{9}B\d{2}|BE ?0?\d{9,10}|FR ?[0-9A-Z]{2} ?\d{9}|GB ?\d{9}|KvK|Handelsregister|HRB ?\d+|Companies House|SIRET|n° TVA)\b")
LEGAL = re.compile(r"\b(GmbH|UG|e\.K\.|B\.V\.|BV|BVBA|SRL|SPRL|Ltd|Limited|SAS|SARL|OG|KG)\b")
SIG = {"newsletter": r"newsletter|nieuwsbrief|bülten|abonnieren|subscribe",
       "account": r"mein konto|my account|mijn account|mon compte|hesabım|login|anmelden|inloggen|sign in",
       "wishlist": r"wishlist|wunschliste|merkzettel|verlanglijst|favoris|favorilerim|favorites|favoriten",
       "discount": r"rabatt|sale\b|korting|remise|promo|indirim|discount|% off|gutschein|coupon"}
ABOUT = re.compile(r"über uns|ueber-uns|about|over ons|à propos|a-propos|hakkımızda|hakkimizda|our story|unsere geschichte|wir über uns|impressum|mentions", re.I)


def get(url):
    try:
        r = requests.get(url, headers=UA, timeout=20, allow_redirects=True)
        if r.status_code >= 400:
            return None, None
        return r.url, r.text[:1_500_000]
    except Exception:
        return None, None


def snippet(text, rx, n=160):
    m = rx.search(text)
    if not m:
        return ""
    s = max(0, m.start() - n // 2)
    return re.sub(r"\s+", " ", text[s:s + n]).strip()


def check(domain, url):
    final, html = get(url)
    if not html:
        final, html = get(f"https://www.{domain}")
    if not html:
        return {"domain": domain, "ok": False}
    soup = BeautifulSoup(html, "html.parser")
    lang = (soup.html.get("lang") if soup.html else "") or ""
    title = (soup.title.string or "").strip()[:120] if soup.title and soup.title.string else ""
    desc = (soup.find("meta", attrs={"name": "description"}) or {}).get("content", "")[:250] if soup.find("meta", attrs={"name": "description"}) else ""
    for t in soup(["script", "style", "noscript"]):
        t.extract()
    text = soup.get_text(" ", strip=True)
    links = [(a.get_text(" ", strip=True)[:40], urljoin(final, a["href"])) for a in soup.find_all("a", href=True)]
    host = urlparse(final).hostname or ""
    same = [u for _, u in links if (urlparse(u).hostname or "").endswith(domain)]
    prod_links = {u for u in same if re.search(r"/products?/|/produkt|/p/|/urun|-p-\d+|\.html$", u)}
    about_urls = []
    for t, u in links:
        if (ABOUT.search(t) or ABOUT.search(u)) and (urlparse(u).hostname or "").endswith(domain) and u not in about_urls:
            about_urls.append(u)
    about_text, about_url = "", ""
    for u in about_urls[:2]:
        _, h2 = get(u)
        if h2:
            s2 = BeautifulSoup(h2, "html.parser")
            for t in s2(["script", "style", "noscript"]):
                t.extract()
            about_text += " " + s2.get_text(" ", strip=True)[:40000]
            about_url = about_url or u
    plat = "Unknown"
    for name, rx in PLATFORMS:
        if re.search(rx, html, re.I):
            plat = name
            break
    alltext = text + " " + about_text
    self_turk_about = snippet(about_text, SELF_TURK)
    self_turk_home = snippet(text, SELF_TURK)
    return {
        "domain": domain, "ok": True, "final": final, "host": host, "lang": lang, "title": title, "desc": desc,
        "platform": plat, "cart": bool(CART.search(html)), "product_markup": bool(PRODUCT.search(html)),
        "n_prod_links": len(prod_links), "n_links": len(same),
        "turk_hits": len(TURK.findall(alltext)), "self_turk": self_turk_about or self_turk_home,
        "self_turk_url": about_url if self_turk_about else final if self_turk_home else "",
        "turk_snip": snippet(alltext, TURK), "tr_lang": lang.lower().startswith("tr") or bool(re.search(r'hreflang="tr', html)),
        "wholesale": len(WHOLESALE.findall(alltext)), "vat": snippet(alltext, VAT, 80), "legal": bool(LEGAL.search(alltext)),
        "eur": "€" in alltext or "EUR" in alltext, "gbp": "£" in alltext or "GBP" in alltext,
        "about_url": about_url, **{k: bool(re.search(v, alltext, re.I)) for k, v in SIG.items()},
    }


def safe(a):
    try:
        return check(*a)
    except Exception as e:
        return {"domain": a[0], "ok": False, "err": str(e)[:100]}


def main(domains_file="discovered_domains.json"):
    doms = json.load(open(os.path.join(CACHE, domains_file)))
    sites = json.load(open(SF)) if os.path.exists(SF) else {}
    todo = [(d, v["urls"][0] if v.get("queries") == ["seed"] else f"https://{d}") for d, v in doms.items() if d not in sites]
    print("to crawl:", len(todo))
    with ThreadPoolExecutor(16) as ex:
        for i, res in enumerate(ex.map(safe, todo)):
            sites[res["domain"]] = res
            if i % 25 == 0:
                json.dump(sites, open(SF, "w"), ensure_ascii=False)
    json.dump(sites, open(SF, "w"), ensure_ascii=False)
    print("crawled total:", len(sites), "ok:", sum(1 for s in sites.values() if s.get("ok")))


if __name__ == "__main__":
    main(*sys.argv[1:])
