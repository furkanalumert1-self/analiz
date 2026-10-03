"""Merge crawl + enrichment into a clean, deduplicated catalog (data/catalog.json)."""
import json, re
ld = {}
for f in ["homedius", "sleeptown"]:
    for p in json.load(open(f"data/{f}.json"))["pages"]:
        if p.get("product"):
            ld[p["url"]] = p["product"]
FAM = ["Mocca", "Magic", "Melisa", "Mila", "Notre", "Valeria", "Bella", "Fiesta", "Sofa Bed", "Rumy", "Vetta", "Eco Vetta", "Ecovetta", "Muse", "Loop", "Calina", "Coop", "Sally", "Nesly", "Poffi", "Asia",
       "Base 7 Zone", "Base Zone", "Base", "Hybrid 5 Zone", "Hybrid", "Organic Comfort", "Helix", "Latex Pocket", "Duplex", "Deluxe", "Nanna", "Cloud", "Neva", "Celia", "Cooly", "Cosmic", "Cozypaws", "Dual Comfort", "HyperSoft", "Visco Gell", "Reflux", "Bedform"]
def family(name):
    n = name.replace("Homedius ", "").replace("Sleeptown ", "")
    for f in sorted(FAM, key=len, reverse=True):
        if re.search(r"\b" + re.escape(f) + r"\b", n, flags=re.I):
            return "Eco Vetta" if f.lower() in ("ecovetta",) else f
    return None
def num(x):
    try: return float(x)
    except Exception: return None
out = []
for d in json.load(open("data/products.json")):
    l = ld.get(d["url"], {})
    name = (d.get("name") or d.get("ldName") or l.get("name") or "").strip()
    price = num(d.get("total_sale_price")) or num(l.get("price"))
    lst = num(d.get("total_base_price"))
    if lst and price and lst < price: lst = None
    cat = (d.get("ldCategory") or l.get("category") or "").replace(" >", " > ").replace(">", " > ")
    cat = re.sub(r"\s+>\s+", " > ", re.sub(r"\s+", " ", cat)).strip()
    parts = [c.strip() for c in cat.split(">") if c.strip()]
    vs = []
    for v in d["variants"]:
        vs.append({"size": v["type"], "price": num(v["price"]), "list": num(v.get("listPrice")), "stock": int(v["stock"]) if (v.get("stock") or "").lstrip("-").isdigit() else None})
    stock = d.get("quantity")
    if vs and all(v["stock"] is not None for v in vs): stock = sum(max(v["stock"], 0) for v in vs)
    out.append({
        "brand": d["brand"], "name": name, "url": d["url"], "sku": d.get("code") or l.get("sku"), "gtin": d.get("barcode") or l.get("gtin"),
        "category": parts[0] if parts else None, "subcategory": parts[-1] if len(parts) > 1 else None, "categoryPath": cat,
        "family": family(name), "price": price, "listPrice": lst,
        "discountPct": round((1 - price / lst) * 100) if (price and lst) else None,
        "inStock": (d.get("availability") or l.get("availability")) == "InStock", "stockQty": stock,
        "rating": round(float(d["rating"]), 2) if d.get("rating") else None, "reviewCount": int(d["reviewCount"]) if d.get("reviewCount") else 0,
        "variants": vs, "image": d.get("image") or l.get("image"),
        "bankTransferDiscountPct": d.get("bankTransferDiscountPct"),
        "bundleWidget": "Bu Ürünleri Birlikte Satın alın %10 İndirim kazanın" in d.get("sections", []),
        "isMultipack": bool(re.search(r"\b\d+['’]?(li|lı|lu|lü)\b", name)),
        "description": (d.get("description") or "")[:500],
    })
seen = set(); final = []
for p in out:
    k = (p["brand"], p["url"])
    if k in seen: continue
    seen.add(k); final.append(p)
json.dump(final, open("data/catalog.json", "w"), ensure_ascii=False, indent=1)
import collections
for b in ["Homedius", "Sleeptown"]:
    X = [p for p in final if p["brand"] == b]
    print("====", b, len(X), "noPrice", sum(1 for p in X if not p["price"]), "nofam", [p["name"] for p in X if not p["family"]][:60])
    fam = collections.defaultdict(list)
    for p in X: fam[(p["category"], p["family"] or p["subcategory"])].append(p)
    for (c, f), L in sorted(fam.items(), key=lambda kv: (kv[0][0] or "", kv[0][1] or "")):
        pr = [p["price"] for p in L if p["price"]]
        print(f"  {c} | {f} | n={len(L)} | {min(pr) if pr else None}-{max(pr) if pr else None} | oos={sum(1 for p in L if not p['inStock'])} | stock={[p['stockQty'] for p in L][:8]} | rev={sum(p['reviewCount'] for p in L)} | disc={sorted(set(p['discountPct'] for p in L if p['discountPct'] is not None))} | {L[0]['name'][:70]}")
