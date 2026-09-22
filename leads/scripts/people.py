"""Step 6: decision makers for verified companies only (max 2 per company).
A) harvestapi/linkedin-company-employees (title-filtered, short profiles) for companies with a matched LinkedIn page.
B) apify/google-search-scraper 'site:linkedin.com/in' query per company; company name must appear in the result."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from apify import run_actor, usage
import verdicts as V
from li_company import norm

C = os.path.join(os.path.dirname(__file__), "..", "cache")
F = os.path.join(C, "decision_makers.json")
PRIO = [("founder", r"co-?founder|founder|gründer|oprichter|fondat|kurucu"), ("owner", r"owner|inhaber|eigenaar|propriétaire|sahib"),
        ("ceo", r"\bceo\b|chief executive"), ("md", r"managing director|geschäftsführ|directeur|director|zaakvoerder|bedrijfsleider|genel müdür"),
        ("ecom", r"e-?commerce|ecommerce|online shop|webshop"), ("cmo", r"\bcmo\b|chief marketing"), ("mkt", r"head of marketing|marketing (manager|lead|director)"),
        ("crm", r"crm|lifecycle|retention"), ("dig", r"digital marketing")]
TITLES = ["Founder", "Co-Founder", "Owner", "CEO", "Managing Director", "Geschäftsführer", "Inhaber", "Head of E-commerce",
          "E-commerce Manager", "CMO", "Head of Marketing", "Marketing Manager", "CRM Manager", "Digital Marketing Manager", "Oprichter", "Eigenaar"]


def rank(title):
    t = (title or "").lower()
    for i, (_, rx) in enumerate(PRIO):
        if re.search(rx, t):
            return i
    return 99


def main():
    cache = json.load(open(F)) if os.path.exists(F) else {"emp": {}, "serp": {}}
    li = json.load(open(os.path.join(C, "linkedin_matched.json")))
    # A) employees for matched LinkedIn companies
    todo = {v["linkedinUrl"]: d for d, v in li.items() if d not in cache["emp"]}
    if todo:
        run, items = run_actor("harvestapi~linkedin-company-employees",
                               {"companies": list(todo), "profileScraperMode": "Short ($4 per 1k)", "jobTitles": TITLES,
                                "companyBatchMode": "one_by_one", "maxItemsPerCompany": 3, "maxItems": 3 * len(todo)})
        for d in todo.values():
            cache["emp"][d] = []
        for it in items:
            cur = (it.get("currentPosition") or it.get("experience") or [{}])
            cur = cur[0] if isinstance(cur, list) and cur else {}
            comp_url = (cur.get("companyLinkedinUrl") or "").rstrip("/")
            d = next((dd for u, dd in todo.items() if u.rstrip("/").split("/")[-1] in comp_url or norm(li[dd]["name"]) == norm(cur.get("companyName"))), None)
            if not d:
                q = it.get("query") or it.get("originalQuery") or {}
                d = next((dd for u, dd in todo.items() if u in json.dumps(q)), None)
            if d:
                name = " ".join(x for x in (it.get("firstName"), it.get("lastName")) if x)
                cache["emp"][d].append({"name": name, "title": cur.get("position") or it.get("headline"), "url": it.get("linkedinUrl"), "src": "linkedin-company-employees"})
        json.dump(cache, open(F, "w"), ensure_ascii=False)
        print("employees", run["status"], len(items), "usage$", round(usage(), 3))
    # B) Google site:linkedin.com/in per company
    todo = {d: t for d, t in V.V.items() if d not in cache["serp"]}
    if todo:
        qs = {f'site:linkedin.com/in "{t[0].split(" (")[0]}" (founder OR owner OR CEO OR Inhaber OR Geschäftsführer OR oprichter OR eigenaar OR director)': d
              for d, t in todo.items()}
        run, items = run_actor("apify~google-search-scraper", {"queries": "\n".join(qs), "maxPagesPerQuery": 1, "saveHtmlToKeyValueStore": False})
        for it in items:
            d = qs.get((it.get("searchQuery") or {}).get("term"))
            if d:
                cache["serp"][d] = [{"url": r.get("url"), "title": r.get("title"), "desc": (r.get("description") or "")[:200]} for r in it.get("organicResults", [])[:6]]
        for d in todo:
            cache["serp"].setdefault(d, [])
        json.dump(cache, open(F, "w"), ensure_ascii=False)
        print("serp", run["status"], len(items), "usage$", round(usage(), 3))
    # merge + pick top 2
    out = {}
    for d, t in V.V.items():
        key = norm(t[0].split(" (")[0])
        cands = list(cache["emp"].get(d, []))
        for r in cache["serp"].get(d, []):
            u, ti = r.get("url") or "", r.get("title") or ""
            if "linkedin.com/in/" not in u or key not in norm(ti + " " + r.get("desc", "")):
                continue
            parts = re.split(r"\s[-–|]\s", ti.replace(" | LinkedIn", ""))
            name = parts[0].strip()
            title = " - ".join(parts[1:]).strip() or ""
            desc_title = re.search(r"(Founder|Co-Founder|Owner|Inhaber|CEO|Geschäftsführer\w*|Managing Director|Oprichter|Eigenaar|Director)[^.·]{0,40}", r.get("desc", ""), re.I)
            if rank(title) == 99 and desc_title:
                title = desc_title.group(0).strip()
            cands.append({"name": name, "title": title, "url": u.split("?")[0], "src": "google site:linkedin.com/in"})
        seen, best = set(), []
        for c in sorted(cands, key=lambda c: rank(c["title"])):
            if rank(c["title"]) == 99 or not c["name"] or c["url"] in seen:
                continue
            seen.add(c["url"])
            best.append(c)
        out[d] = best[:2]
    json.dump(out, open(os.path.join(C, "decision_makers_final.json"), "w"), ensure_ascii=False)
    print("companies with >=1 DM:", sum(1 for v in out.values() if v))


if __name__ == "__main__":
    main()
