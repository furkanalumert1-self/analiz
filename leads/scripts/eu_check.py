"""Check Turkish-HQ brand sites for EU storefront signals (hreflang / locale paths). Cached."""
import json, os, re, sys, requests
from concurrent.futures import ThreadPoolExecutor
CACHE = os.path.join(os.path.dirname(__file__), "..", "cache"); F = os.path.join(CACHE, "eu_check.json")
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"}
PATHS = ["/de", "/de-de", "/en-de", "/nl", "/nl-nl", "/fr", "/fr-fr", "/en-gb", "/eu", "/en", "/int"]
def chk(d):
    out = {"hreflang": [], "paths": []}
    try:
        h = requests.get(f"https://www.{d}", headers=UA, timeout=20).text
        out["hreflang"] = sorted(set(re.findall(r'hreflang="([a-zA-Z-]+)"', h)))[:40]
        out["ship_eu"] = bool(re.search(r"(germany|deutschland|netherlands|nederland|europe|avrupa|almanya|hollanda)", h, re.I))
    except Exception as e:
        out["err"] = str(e)[:60]
    for p in PATHS:
        try:
            r = requests.get(f"https://www.{d}{p}", headers=UA, timeout=15, allow_redirects=True)
            if r.status_code == 200 and len(r.text) > 5000 and re.search(p.strip('/').split('-')[0], r.url, re.I):
                out["paths"].append(p)
        except Exception:
            pass
    return d, out
doms = sys.argv[1:]
res = json.load(open(F)) if os.path.exists(F) else {}
with ThreadPoolExecutor(12) as ex:
    for d, o in ex.map(chk, [d for d in doms if d not in res]):
        res[d] = o
json.dump(res, open(F, "w"))
for d in doms: print(d, res[d].get("hreflang"), res[d].get("paths"), res[d].get("ship_eu"), res[d].get("err",""))
