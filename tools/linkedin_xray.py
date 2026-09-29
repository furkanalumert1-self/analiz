#!/usr/bin/env python3
"""Google "X-ray" araması ile kliniklerin LinkedIn'deki karar vericilerini bulur.

LinkedIn'e giriş yapmaz; Apify `apify~google-search-scraper` ile
`site:tr.linkedin.com/in "<klinik>"` aramalarını çalıştırır ve sonuçları süzer.

  # 1) Sorguları üret (base.csv: isletme, kategori, il ... sütunları)
  python3 linkedin_xray.py queries base.csv -o in_linkedin.json
  # 2) APIFY_TOKEN=... python3 apify_run.py apify~google-search-scraper in_linkedin.json serp.json --max-usd 1.5
  # 3) Sonuçları kişilere çevir
  python3 linkedin_xray.py parse base.csv serp.json -o karar_vericiler.csv
"""

import argparse
import csv
import json
import re

TR_MAP = str.maketrans("çğıöşüÇĞİIÖŞÜâîû", "cgiosucgiiosuaiu")

# Klinik adından atılacak genel kelimeler; geriye ayırt edici çekirdek kalır.
GENERIC = set("""
ozel agiz ve dis sagligi poliklinigi polikliniği klinigi klinik kliniği clinic clinics dental dent dis
hekimi hekim sac ekimi ekim merkezi merkez center centre hair transplant transplantation estetik estetigi
plastik cerrahi cerrahisi cerrah rekonstruktif guzellik salonu salon beauty lazer laser epilasyon epilation
cilt bakim bakimi hastanesi hastane hospital tip saglik polyclinic turkey turkiye istanbul ankara izmir
antalya the and of best & kuafor spa nail studio sube subesi uzm uzman op opr doc prof dr dt
""".split())
DOCTOR_RE = re.compile(r"\b(?:Prof\.?|Doç\.?|Doc\.?|Op\.?|Opr\.?|Uzm\.?|Dr\.?|Dt\.?)\s*(?:Dr\.?\s*)?(?:Dt\.?\s*)?"
                       r"([A-ZÇĞİÖŞÜ][a-zçğıöşü]+(?:\s+[A-ZÇĞİÖŞÜ][a-zçğıöşüA-ZÇĞİÖŞÜ]+){1,2})")
SECTOR_WORD = [("dis", "diş"), ("sac", "saç"), ("estetik", "estetik"), ("guzellik", "güzellik"), ("lazer", "lazer")]

ROLE_PATTERNS = [
    ("Kurucu / Sahip", r"kurucu|founder|sahibi|\bowner\b|\bpartner\b|sirket ortagi|ortak (dis hekimi|hekim)"),
    ("Üst yönetim", r"\bceo\b|genel mudur|general manager|managing director|yonetim kurulu|chairman|\bcoo\b"),
    ("Başhekim / Mesul müdür", r"bashekim|mesul mudur|medical director|chief medical|tibbi direktor"),
    ("Klinik / Operasyon müdürü", r"klinik mudur|clinic (manager|director)|klinik direktor|operasyon\w*(\s+\w+){0,3}\s+(mudur|yonetici|sorumlu)|operations manager|isletme mudur|idari mudur|practice manager"),
    ("Hasta ilişkileri / Sağlık turizmi", r"hasta (iliskileri|koordinator)|patient (relations|coordinator)|saglik turizmi|health tourism|international patient|call center|cagri merkezi"),
    ("Pazarlama", r"pazarlama|marketing|dijital|digital|sosyal medya|growth"),
]


def norm(s):
    return (s or "").translate(TR_MAP).lower()


# Not: normalize edilince "dış" ile "diş" aynı ("dis") olur; "Vizyon Dış Ticaret" eşleşmesin diye
# tek başına "dis" yerine diş hekimliğine özgü ifadeler kullanılır.
SECTOR_TOKENS = ("agiz", "dis hekim", "dis sag", "dis klin", "dis polik", "dis tedavi", "dent", "sac", "hair", "estetik", "aesthetic", "plastik", "klinik", "clinic",
                 "poliklinik", "guzellik", "beauty", "lazer", "laser", "saglik", "hekim", "doktor", "dr.", "surgeon")


def doctor_name(title):
    m = DOCTOR_RE.search(title or "")
    if not m:
        return ""
    words = [w for w in m.group(1).split() if norm(w) not in GENERIC]
    return " ".join(words[:3]) if len(words) >= 2 else ""


def core_name(title):
    """Klinik adının ayırt edici kısmı: 'Yalı Ağız ve Diş Sağlığı Polikliniği' -> 'Yalı'.

    Ad '|', ' - ', '(' ile bölünmüşse ilk anlamlı parça kullanılır; çekirdek çok
    kısaysa ("in", "99") muğlak olmasın diye bir sonraki kelimeyle birlikte alınır.
    """
    for part in re.split(r"\s[|\-–(/]\s?|\||\(|\)", title or ""):
        tokens = re.findall(r"[\wçğıöşüÇĞİÖŞÜ'&-]+", part)
        words = [w for w in tokens if norm(w) not in GENERIC and len(w) > 1]
        if not words:
            continue
        core = " ".join(words[:3])
        if len(core) <= 3 or core.isdigit():
            i = tokens.index(words[0])
            core = " ".join(tokens[max(0, i - 1):i + 2])
        return core
    return ""


def sector_word(category, title):
    text = norm(category + " " + title)
    for key, word in SECTOR_WORD:
        if key in text:
            return word
    return ""


def build_query(row):
    doc = doctor_name(row["isletme"])
    if doc:
        return doc, f'site:tr.linkedin.com/in "{doc}"'
    core = core_name(row["isletme"])
    if not core:
        return "", ""
    sector = sector_word(row.get("kategori", ""), row["isletme"])
    return core, f'site:tr.linkedin.com/in "{core}" {sector}'.strip()


# LinkedIn'in her profilde gösterdiği kalıp metinler ("Ortak bağlantılarınızı görün" = mutual connections).
BOILERPLATE = re.compile(r"ortak baglantilarinizi gorun|view mutual connections[^.]*|adli (uyenin|kisinin) (tam )?profilini[^.]*"
                         r"|linkedin'de \S+ baglanti|\d+\S* takipci|\d+\S* baglanti|1 milyar uyenin[^.]*")
MEDICAL = ("dr.", "doktor", "doctor", "hekim", "cerrah", "surgeon", "plastic", "plastik", "dermatolog",
           "tip fakultesi", "physician", "dentist", "ortodont", "uzman dr")


def company_match(blob, key):
    """Klinik çekirdeği hemen ardından sektör kelimesiyle geçmeli ("Yalı Ağız ve Diş", "Loya Clinic").

    Böylece "Tuncay Yalı - mermer firması" gibi soyadı çakışmaları elenir.
    """
    k = re.escape(norm(key))
    return re.search(k + r"\W+(\w+\W+){0,3}?(" + "|".join(re.escape(t) for t in SECTOR_TOKENS) + ")", blob) is not None


def role_of(text):
    t = norm(text)
    for label, rx in ROLE_PATTERNS:
        if re.search(rx, t):
            return label
    return ""


def cmd_queries(args):
    rows = list(csv.DictReader(open(args.base, encoding="utf-8-sig")))
    queries = []
    for r in rows:
        _, q = build_query(r)
        if q and q not in queries:
            queries.append(q)
    json.dump({"queries": "\n".join(queries), "maxPagesPerQuery": 1, "resultsPerPage": 10,
               "countryCode": "tr", "languageCode": "tr", "mobileResults": False},
              open(args.output, "w", encoding="utf-8"), ensure_ascii=False)
    print(f"{len(queries)} sorgu -> {args.output}")


def cmd_parse(args):
    rows = list(csv.DictReader(open(args.base, encoding="utf-8-sig")))
    by_query = {}
    for r in rows:
        key, q = build_query(r)
        if q:
            by_query.setdefault(q, []).append((key, r))
    pages = json.load(open(args.serp, encoding="utf-8"))
    out, seen = [], set()
    for page in pages:
        q = page.get("searchQuery", {}).get("term", "")
        for key, clinic in by_query.get(q, []):
            is_doc = bool(doctor_name(clinic["isletme"]))
            for res in page.get("organicResults", []):
                url = res.get("url", "").split("?")[0]
                title, desc = res.get("title", ""), res.get("description", "")
                blob = BOILERPLATE.sub(" ", norm(title + " " + desc))
                if "/in/" not in url or norm(key) not in blob:
                    continue  # anahtar kelime snippet'te yoksa başka biridir
                if is_doc:
                    if not any(t in blob for t in MEDICAL):
                        continue  # aynı isimli doktor olmayan biri
                elif not company_match(blob, key):
                    continue  # soyadı ya da başka sektörden aynı isimli şirket
                name = title.split(" - ")[0].split(" | ")[0].strip()
                if is_doc:
                    # Doktor adlı klinikte sadece o doktorun kendi profili
                    if not all(p in norm(name) for p in norm(key).split()):
                        continue
                    role = "Kurucu / Sahip (klinik adı)"
                else:
                    role = role_of(blob)
                    if not role and not args.all:
                        continue
                ident = (clinic["isletme"], url)
                if ident in seen:
                    continue
                seen.add(ident)
                headline = title.split(" - ", 1)[1].split(" | ")[0].strip() if " - " in title else ""
                out.append({
                    "isletme": clinic["isletme"], "il": clinic.get("il", ""), "ilce": clinic.get("ilce", ""),
                    "kategori": clinic.get("kategori", ""), "telefon": clinic.get("telefon", ""),
                    "web": clinic.get("web", ""), "ad_soyad": name, "unvan": headline, "rol": role,
                    "linkedin": url, "snippet": " ".join(desc.split())[:250],
                })
    order = {lbl: i for i, (lbl, _) in enumerate(ROLE_PATTERNS)}
    out.sort(key=lambda r: (r["isletme"], order.get(r["rol"], -1 if "klinik adı" in r["rol"] else 99)))
    if not out:
        print("Eşleşme yok")
        return
    with open(args.output, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=list(out[0].keys()))
        w.writeheader()
        w.writerows(out)
    print(f"{len(out)} kişi, {len({r['isletme'] for r in out})} işletme -> {args.output}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    q = sub.add_parser("queries")
    q.add_argument("base")
    q.add_argument("-o", "--output", required=True)
    p = sub.add_parser("parse")
    p.add_argument("base")
    p.add_argument("serp")
    p.add_argument("-o", "--output", required=True)
    p.add_argument("--all", action="store_true", help="Unvanı tanınmayan çalışanları da yaz")
    args = ap.parse_args()
    {"queries": cmd_queries, "parse": cmd_parse}[args.cmd](args)


if __name__ == "__main__":
    main()
