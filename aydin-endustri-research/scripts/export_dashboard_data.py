"""Export the deduplicated catalog to the dashboard (reports/aydin-endustri/catalog.js)."""
import json, collections
C = json.load(open("data/catalog.json"))
rows = []
for i, p in enumerate(C):
    rows.append({
        "id": i, "b": p["brand"], "n": p["name"], "u": p["url"], "c": p["category"], "s": p["subcategory"],
        "f": p["family"] or p["subcategory"], "p": p["price"], "lp": p["listPrice"], "d": p["discountPct"],
        "in": p["inStock"], "q": p["stockQty"], "r": p["rating"], "rc": p["reviewCount"],
        "v": [[v["size"], v["price"], v["stock"]] for v in p["variants"]], "img": p["image"],
    })
meta = {
    "generatedAt": "2026-10-03",
    "counts": {b: sum(1 for r in rows if r["b"] == b) for b in ("Homedius", "Sleeptown")},
    "families": {b: len({r["f"] for r in rows if r["b"] == b}) for b in ("Homedius", "Sleeptown")},
}
js = "window.CATALOG=" + json.dumps(rows, ensure_ascii=False, separators=(",", ":")) + ";\nwindow.CATALOG_META=" + json.dumps(meta, ensure_ascii=False) + ";\n"
open("../reports/aydin-endustri/catalog.js", "w").write(js)
print(len(rows), meta, len(js))
