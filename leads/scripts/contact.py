"""Step 4: for accepted domains only, fetch legal/contact page and extract city + legal entity (deterministic)."""
import json, os, re, sys
from concurrent.futures import ThreadPoolExecutor
import requests
from bs4 import BeautifulSoup

CACHE = os.path.join(os.path.dirname(__file__), "..", "cache")
F = os.path.join(CACHE, "contact.json")
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"}
PATHS = ["/impressum", "/pages/impressum", "/policies/legal-notice", "/pages/contact", "/contact", "/kontakt", "/pages/kontakt",
         "/mentions-legales", "/pages/mentions-legales", "/pages/about-us", "/about-us", "/over-ons", "/pages/over-ons", "/colofon"]
ZIP = [("DE", re.compile(r"\b(\d{5})\s+([A-ZÄÖÜ][a-zäöüß]+(?:[- ][A-ZÄÖÜ][a-zäöüß]+)?)")),
       ("NL", re.compile(r"\b(\d{4}\s?[A-Z]{2})\s+([A-Z][a-z]+(?:[- ][A-Za-z][a-z]+)?)")),
       ("AT", re.compile(r"\b(?:A-)?(\d{4})\s+(Wien|Graz|Linz|Salzburg|Innsbruck|Klagenfurt|Wels|Bregenz|Dornbirn|St\. Pölten|Lauterach|[A-ZÄÖÜ][a-zäöüß]+)")),
       ("BE", re.compile(r"\b(\d{4})\s+(Brussel|Bruxelles|Antwerpen|Gent|Genk|Liège|Charleroi|Schaerbeek|Anderlecht|Hasselt|Beringen|Heusden|[A-Z][a-zé]+)")),
       ("FR", re.compile(r"\b(\d{5})\s+(Paris|Lyon|Strasbourg|Marseille|Lille|Mulhouse|[A-Z][A-Za-zé-]+)")),
       ("GB", re.compile(r"\b(London|Birmingham|Manchester|Leeds|Liverpool|Bristol|Sheffield|Leicester|Enfield|Croydon|Harrow|Ilford|Edmonton|Luton|Reading|Glasgow|Edinburgh|Coventry)\b"))]
ENTITY = re.compile(r"([A-ZÄÖÜ][\w&.\- ]{2,60}?\s(?:GmbH(?: & Co\. KG)?|UG(?: \(haftungsbeschränkt\))?|e\.K\.|B\.V\.|BV|BVBA|SRL|SPRL|Ltd\.?|Limited|SAS|SARL|OG|KG|A\.Ş\.|AG))\b")


def fetch(d, host):
    out = {}
    for p in PATHS:
        try:
            r = requests.get(f"https://{host}{p}", headers=UA, timeout=15)
        except Exception:
            continue
        if r.status_code != 200 or len(r.text) < 2000:
            continue
        s = BeautifulSoup(r.text, "html.parser")
        for t in s(["script", "style", "noscript"]):
            t.extract()
        txt = s.get_text(" ", strip=True)[:60000]
        if not out.get("entity"):
            m = ENTITY.search(txt)
            if m:
                out["entity"], out["entity_url"] = m.group(1).strip()[:80], r.url
        if not out.get("city"):
            for cc, rx in ZIP:
                m = rx.search(txt)
                if m:
                    out["city"], out["city_cc"], out["city_url"] = m.group(m.lastindex), cc, r.url
                    break
        if out.get("city") and out.get("entity"):
            break
    return d, out


def main(domfile):
    todo = json.load(open(domfile))  # {domain: host}
    res = json.load(open(F)) if os.path.exists(F) else {}
    with ThreadPoolExecutor(16) as ex:
        for d, o in ex.map(lambda kv: fetch(*kv), [(d, h) for d, h in todo.items() if d not in res]):
            res[d] = o
    json.dump(res, open(F, "w"), ensure_ascii=False)
    print("contact cached:", len(res), "with city:", sum(1 for v in res.values() if v.get("city")))


if __name__ == "__main__":
    main(sys.argv[1])
