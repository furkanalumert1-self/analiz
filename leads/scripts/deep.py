"""Fetch SERP pages 2-3 for the highest-yield queries (Google URLs with start=, pages 2-3 only)."""
import json, os, sys
from urllib.parse import quote_plus
sys.path.insert(0, os.path.dirname(__file__))
from apify import run_actor, usage
C = os.path.join(os.path.dirname(__file__), "..", "cache"); QF = os.path.join(C, "searched_queries.json")
GL = {"de": "google.de", "nl": "google.nl", "be": "google.be", "at": "google.at", "fr": "google.fr", "gb": "google.co.uk"}
top = json.load(open(os.path.join(C, "deep_queries.json")))[:45]
done = json.load(open(QF))
urls = []
for k in top:
    cc, t = k.split("|", 1)
    for st in (10, 20):
        key = f"{cc}|{t}|p{st//10+1}"
        if key not in done:
            urls.append((key, f"https://www.{GL[cc]}/search?q={quote_plus(t)}&start={st}"))
run, items = run_actor("apify~google-search-scraper", {"queries": "\n".join(u for _, u in urls), "maxPagesPerQuery": 1, "saveHtmlToKeyValueStore": False})
m = {u: k for k, u in urls}
for it in items:
    sq = it.get("searchQuery") or {}
    key = m.get(sq.get("url")) or f"deep|{sq.get('term')}|{sq.get('page')}"
    done[key] = [{"url": r.get("url"), "title": r.get("title"), "desc": (r.get("description") or "")[:200]} for r in it.get("organicResults", [])]
json.dump(done, open(QF, "w"), ensure_ascii=False)
print(run["status"], len(items), "usage$", round(usage(), 3))
