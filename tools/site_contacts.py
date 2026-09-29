#!/usr/bin/env python3
"""Lead CSV'sindeki web sitelerinden e-posta, Instagram ve WhatsApp bilgisini toplar.

Apify'ın ücretli "contact enrichment" eklentisi yerine ana sayfa + iletişim sayfasını
kendimiz tarar. `web` sütunu olan bir CSV alır, aynı CSV'ye sütun ekleyerek yazar.

  python3 site_contacts.py sicak_leadler.csv -o sicak_leadler_iletisim.csv
"""

import argparse
import csv
import re
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor

EMAIL_RE = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
INSTAGRAM_RE = re.compile(r"instagram\.com/([A-Za-z0-9_.]{2,30})")
WHATSAPP_RE = re.compile(r"(?:wa\.me/|api\.whatsapp\.com/send\?phone=|whatsapp\.com/send/?\?phone=)(\+?\d{10,15})")
CONTACT_PATHS = ["", "iletisim", "contact", "bize-ulasin", "iletisim.html", "contact-us"]
SKIP_EMAIL = ("example.", "sentry", "wixpress", "@2x", ".png", ".jpg", ".webp", ".svg", "domain.com", "email.com")
SKIP_IG = {"p", "reel", "explore", "accounts", "share", "stories", "tv"}
GENERIC_PREFIX = ("info", "iletisim", "contact", "hello", "merhaba", "bilgi", "destek", "support", "admin", "noreply", "no-reply")


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; lead-research)"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read(800_000).decode("utf-8", errors="replace")
    except Exception:
        return ""


def scan(site):
    if not site:
        return {}
    parsed = urllib.parse.urlparse(site if "://" in site else "https://" + site)
    root = f"{parsed.scheme}://{parsed.netloc}/"
    emails, igs, was = set(), set(), set()
    for path in CONTACT_PATHS:
        html = fetch(urllib.parse.urljoin(root, path))
        if not html:
            continue
        html = html.replace("&#64;", "@").replace("[at]", "@")
        for e in EMAIL_RE.findall(html):
            e = e.lower().strip(".")
            if not any(s in e for s in SKIP_EMAIL):
                emails.add(e)
        igs.update(h for h in INSTAGRAM_RE.findall(html) if h.lower() not in SKIP_IG)
        was.update(n.lstrip("+") for n in WHATSAPP_RE.findall(html))
        if emails and path:
            break
    personal = sorted(e for e in emails if not e.split("@")[0].startswith(GENERIC_PREFIX))
    generic = sorted(emails - set(personal))
    return {
        "email_kisisel": ", ".join(personal[:3]),
        "email_genel": ", ".join(generic[:3]),
        "instagram_site": ", ".join(sorted(igs)[:2]),
        "whatsapp": ", ".join(sorted(was)[:2]),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input")
    ap.add_argument("-o", "--output", required=True)
    args = ap.parse_args()

    with open(args.input, encoding="utf-8-sig") as f:
        rows = list(csv.DictReader(f))
    with ThreadPoolExecutor(max_workers=12) as pool:
        results = list(pool.map(lambda r: scan(r.get("web", "")), rows))
    extra = ["email_kisisel", "email_genel", "instagram_site", "whatsapp"]
    for row, res in zip(rows, results):
        for k in extra:
            row[k] = res.get(k, "")
    with open(args.output, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)
    found = sum(1 for r in rows if r["email_kisisel"] or r["email_genel"])
    print(f"{found}/{len(rows)} işletmede e-posta bulundu -> {args.output}")


if __name__ == "__main__":
    main()
