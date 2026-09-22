"""Step 5: LinkedIn company lookup (harvestapi/linkedin-company) for verified companies only. Cached."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from apify import run_actor, usage
from domains import root
import verdicts as V

C = os.path.join(os.path.dirname(__file__), "..", "cache")
F = os.path.join(C, "linkedin_companies.json")
# name-only matches checked by hand (same company; LinkedIn page lacks website or uses sister domain)
NAME_OK = {"bakkalim.co.uk", "turksarayi.com", "samafoods.co.uk", "aytacfood.co.uk",
           "sultandelights.co.uk", "bakal.de", "morgenmarkt.de"}


def norm(s):
    return re.sub(r"[^a-z0-9]", "", (s or "").lower().replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c"))


def main():
    cache = json.load(open(F)) if os.path.exists(F) else {"raw": {}, "done": []}
    todo = {V.V[d][0]: d for d in V.V if d not in cache["done"]}
    if todo:
        run, items = run_actor("harvestapi~linkedin-company", {"searches": list(todo)})
        for it in items:
            q = it.get("originalQuery") or ""
            q = q.get("search") if isinstance(q, dict) else q
            cache["raw"][q or it.get("name")] = {k: it.get(k) for k in ("linkedinUrl", "name", "website", "employeeCount", "employeeCountRange",
                                                                        "locations", "industries", "description", "foundedOn")}
        cache["done"] += list(todo.values())
        json.dump(cache, open(F, "w"), ensure_ascii=False)
        print(run["status"], len(items), "usage$", round(usage(), 3))
    # match: website root == domain, or normalized name contains/equals
    out = {}
    for d, t in V.V.items():
        r = cache["raw"].get(t[0])
        if not r:
            continue
        ws = r.get("website") or ""
        w = root(ws if "//" in ws else "http://" + ws) if ws else ""
        if w == d:
            out[d] = dict(r, match="website")
        elif d in NAME_OK:
            out[d] = dict(r, match="name (manually confirmed: same company, no/related website)")
    json.dump(out, open(os.path.join(C, "linkedin_matched.json"), "w"), ensure_ascii=False)
    print("matched:", len(out), "by website:", sum(1 for v in out.values() if v["match"] == "website"))


if __name__ == "__main__":
    main()
