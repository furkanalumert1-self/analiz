"""Step 2: root-domain extraction + dedup from search cache (+ seed list)."""
import json, os, re
from urllib.parse import urlparse

CACHE = os.path.join(os.path.dirname(__file__), "..", "cache")

MULTI = {"co.uk", "org.uk", "com.tr", "co.at", "or.at", "com.au", "co.nl", "com.de"}
BLOCK = re.compile(r"(google|facebook|instagram|youtube|linkedin|wikipedia|amazon|ebay|etsy|pinterest|tiktok|twitter|x\.com|"
                   r"reddit|tripadvisor|trustpilot|yelp|zalando|otto\.de|bol\.com|trendyol|hepsiburada|aboutyou|idealo|"
                   r"kaufland|marktplaats|cdiscount|fnac|temu|aliexpress|shein|alibaba|quora|medium|reuters|bloomberg|"
                   r"forbes|spiegel|zeit\.de|welt\.de|faz\.net|handelsblatt|nos\.nl|bbc|theguardian|telegraph|lemonde|"
                   r"statista|gelbeseiten|kompass|northdata|dnb\.com|crunchbase|zoominfo|glassdoor|indeed|stepstone|"
                   r"apple\.com|wiki|blog|news|magazin|forum|gutefrage|chefkoch|booking|expedia|groupon|mydealz|"
                   r"allekorting|kieskeurig|tweakers|beslist|vergelijk|check24|shopify\.com|wix|jimdo|squarespace|"
                   r"tchibo|lidl|aldi|rewe|edeka|carrefour|tesco|sainsburys|asda|ocado|waitrose|albertheijn|jumbo\.com|"
                   r"delhaize|colruyt|billa|spar\.|hofer|interspar|ikea|xxxlutz|home24|wayfair|made\.com|johnlewis|"
                   r"notonthehighstreet|selfridges|harrods|ubuy|joom|wish\.com|hmgroup|hm\.com|zara)", re.I)


def root(url):
    h = (urlparse(url).hostname or "").lower().lstrip(".")
    parts = h.split(".")
    if len(parts) >= 3 and ".".join(parts[-2:]) in MULTI:
        return ".".join(parts[-3:])
    return ".".join(parts[-2:])


def main():
    q = json.load(open(os.path.join(CACHE, "searched_queries.json")))
    seeds = json.load(open(os.path.join(CACHE, "seed_domains.json"))) if os.path.exists(os.path.join(CACHE, "seed_domains.json")) else {}
    out = {}
    for key, res in q.items():
        cc, term = key.split("|", 1); cc = cc if cc != "deep" else ""
        for r in res:
            u = r.get("url") or ""
            d = root(u)
            if not d or BLOCK.search(d):
                continue
            e = out.setdefault(d, {"domain": d, "urls": [], "titles": [], "countries": [], "queries": []})
            if u not in e["urls"]:
                e["urls"].append(u)
            e["titles"].append((r.get("title") or "")[:100])
            if cc not in e["countries"]:
                e["countries"].append(cc)
            e["queries"].append(term)
    for d, info in seeds.items():
        e = out.setdefault(d, {"domain": d, "urls": [info.get("url") or f"https://{d}"], "titles": [info.get("name", "")],
                               "countries": [info.get("cc", "")], "queries": ["seed"]})
        e["seed"] = info
    json.dump(out, open(os.path.join(CACHE, "discovered_domains.json"), "w"), ensure_ascii=False, indent=0)
    print("discovered domains:", len(out))


if __name__ == "__main__":
    main()
