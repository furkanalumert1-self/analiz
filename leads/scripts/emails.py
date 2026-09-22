"""Step 8: company emails published on the company's own site (imprint/contact/footer). Deterministic; cached.
Only addresses shown on the site are kept; nothing is guessed."""
import json, os, re, sys
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlparse, unquote
import requests
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.dirname(__file__))
import verdicts as V

C = os.path.join(os.path.dirname(__file__), "..", "cache")
F = os.path.join(C, "company_emails.json")
S = json.load(open(os.path.join(C, "sites.json")))
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"}
PATHS = ["", "/impressum", "/pages/impressum", "/policies/legal-notice", "/pages/contact", "/contact", "/kontakt", "/pages/kontakt",
         "/contact-us", "/pages/contact-us", "/mentions-legales", "/colofon", "/over-ons", "/pages/about-us", "/about-us", "/iletisim"]
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
BAD = re.compile(r"\.(png|jpe?g|gif|webp|svg)$|example\.|sentry|wixpress|domain\.com|email\.com|yourdomain|shopify\.com|@2x", re.I)
LINK = re.compile(r"kontakt|contact|impressum|imprint|legal|mentions|colofon|iletisim|over-ons|about", re.I)


def fetch(u):
    try:
        r = requests.get(u, headers=UA, timeout=15)
        return r.text if r.status_code == 200 else ""
    except Exception:
        return ""


def scan(d):
    host = S.get(d, {}).get("host") or d
    base = f"https://{host}"
    found, seen, extra = {}, set(), []
    for p in PATHS + extra:
        u = p if p.startswith("http") else base + p
        if u in seen:
            continue
        seen.add(u)
        h = fetch(u)
        if not h:
            continue
        soup = BeautifulSoup(h, "html.parser")
        if p == "":
            extra += [urljoin(base, a["href"]) for a in soup.find_all("a", href=True)
                      if LINK.search(a["href"]) and (urlparse(urljoin(base, a["href"])).hostname or "").endswith(d)][:6]
        cands = [unquote(a["href"][7:].split("?")[0]) for a in soup.find_all("a", href=True) if a["href"].lower().startswith("mailto:")]
        for t in soup(["script", "style"]):
            t.extract()
        txt = soup.get_text(" ").replace("[at]", "@").replace("(at)", "@").replace(" at ", " at ")
        cands += EMAIL.findall(txt)
        for e in cands:
            e = e.strip().strip(".").lower()
            if EMAIL.fullmatch(e) and not BAD.search(e) and e not in found:
                found[e] = u
        if len(found) >= 4:
            break
    # prefer addresses on the company's own domain
    own = {e: u for e, u in found.items() if e.split("@")[1].endswith(d.split(".")[0] + "." + d.split(".", 1)[1]) or d.split(".")[0] in e.split("@")[1]}
    return d, {"emails": list((own or found).items())[:3]}


def main():
    res = json.load(open(F)) if os.path.exists(F) else {}
    todo = [d for d in V.V if d not in res]
    with ThreadPoolExecutor(12) as ex:
        for d, o in ex.map(scan, todo):
            res[d] = o
    json.dump(res, open(F, "w"), ensure_ascii=False, indent=0)
    print("companies with email:", sum(1 for v in res.values() if v["emails"]), "/", len(V.V))


if __name__ == "__main__":
    main()
