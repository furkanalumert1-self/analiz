"""Re-fetch product detail pages and extract T-Soft product JSON + variant options
(size/colour, price, list price, stock), rating, bank-transfer discount, page sections."""
import json, re, html, sys, concurrent.futures as cf
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from crawl import get, jsonld, clean_text

def dec(s):
    # The JSON sits inside a JS single-quoted string, so quotes and backslashes are escaped once more.
    return json.loads(s.replace('\\"', '"').replace('\\\\', '\\'))

def parse(url, brand):
    s, t = get(url)
    if not t:
        return None
    r = {"url": url, "brand": brand}
    m = re.search(r"JSON\.parse\('(\{[^']*total_base_price[^']*\})'\)", t)
    if m:
        try:
            d = dec(m.group(1))
            for k in ["id", "name", "code", "sale_price", "total_base_price", "total_sale_price", "available", "quantity", "category", "category_path", "model", "barcode", "image"]:
                r[k] = d.get(k)
        except Exception as e:
            r["parseError"] = str(e)
    lds = [x for x in jsonld(t) if x.get("@type") == "Product"]
    if lds:
        p = lds[0]
        ar = p.get("aggregateRating") or {}
        r["rating"] = ar.get("ratingValue")
        r["reviewCount"] = ar.get("reviewCount") or ar.get("ratingCount")
        r["ldCategory"] = p.get("category")
        r["description"] = clean_text(p.get("description") or "")[:1200]
        r["ldName"] = p.get("name")
        o = p.get("offers") or {}
        if isinstance(o, list): o = o[0] if o else {}
        r["availability"] = (o.get("availability") or "").split("/")[-1]
    vars_ = []
    for om in re.finditer(r'<option[^>]+data-subproduct-id="[^"]+"[^>]*>', t):
        o = om.group(0)
        g = lambda a: (re.search(a + r'="([^"]*)"', o) or [None, None])[1]
        vars_.append({"type": g("data-type"), "price": g("data-price"), "listPrice": g("data-not-discounted"), "stock": g("data-stock"), "inStock": g("data-instock")})
    # colour/variant swatches as links
    if not vars_:
        for om in re.finditer(r'data-subproduct-id="[^"]+"[^>]*data-type="([^"]+)"[^>]*data-price="([^"]+)"[^>]*data-stock="([^"]+)"', t):
            vars_.append({"type": om.group(1), "price": om.group(2), "stock": om.group(3)})
    r["variants"] = vars_
    m = re.search(r'money-discount-percent"[^>]*>\s*(\d+)', t)
    r["bankTransferDiscountPct"] = int(m.group(1)) if m else None
    sec = [clean_text(x) for x in re.findall(r'<(?:h2|h3|div)[^>]*class="[^"]*(?:title|heading)[^"]*"[^>]*>([^<]{3,60})</', t)]
    r["sections"] = sorted(set(x for x in sec if x))[:25]
    r["hasStockAlarm"] = 'data-toggle="stock-alarm"' in t or "notify_when_instock" in t
    r["hasPriceAlarm"] = 'data-toggle="price-alarm"' in t
    r["hasFavorite"] = 'data-toggle="favourite"' in t or 'data-toggle="favorite"' in t or "add-to-favourite" in t
    r["tags_raw"] = {k: bool(re.search(v, t)) for k, v in {
        "OpenAI Pixel (T-Soft app)": r"OPENAI_PIXEL", "Meta Pixel (consent-gated)": r"fbq\('track'", "GA4": r"G-[A-Z0-9]{8,}", "Google Ads": r"AW-\d{6,}", "TikTok": r"ttq\.", "Criteo loader": r"static\.criteo\.net", "Yandex": r"mc\.yandex", "Hotjar": r"hotjar", "Clarity": r"clarity\.ms"}.items()}
    r["related"] = sorted(set(re.findall(r'<a href="(/[a-z0-9\-]+)" class="w-full block relative aspect-product"', t)))[:30]
    return r

def main():
    out = []
    for dom, brand in [("homedius", "Homedius"), ("sleeptown", "Sleeptown")]:
        P = json.load(open(f"data/{dom}.json"))["pages"]
        urls = sorted({p["url"] for p in P if p["kind"] == "product"})
        with cf.ThreadPoolExecutor(8) as ex:
            out += [x for x in ex.map(lambda u: parse(u, brand), urls) if x]
    seen, ded = set(), []
    for r in out:
        k = (r["brand"], r.get("code") or r["url"])
        if k in seen: continue
        seen.add(k); ded.append(r)
    json.dump(ded, open("data/products.json", "w"), ensure_ascii=False, indent=1)
    print(len(out), "fetched", len(ded), "unique")

main()
