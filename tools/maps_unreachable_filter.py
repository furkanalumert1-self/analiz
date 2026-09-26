#!/usr/bin/env python3
"""Google Maps yorumlarından "telefonla ulaşılamıyor" sinyali çıkarır.

Apify'dan indirilen JSON'u okur ve işletme başına puanlanmış bir CSV üretir.
İki çıktı biçimini de kabul eder:
  - compass/crawler-google-places  (her satır bir işletme, içinde `reviews` dizisi)
  - compass/google-maps-reviews-scraper (her satır tek bir yorum)

Kullanım:
  python3 maps_unreachable_filter.py dataset.json -o sicak_leadler.csv
  python3 maps_unreachable_filter.py yerler.json yorumlar.json --months 12 --min-hits 2
"""

import argparse
import csv
import json
import re
import sys
from datetime import datetime, timedelta, timezone

# Türkçe + İngilizce "ulaşamadım" kalıpları. Metin önce normalize edilir
# (küçük harf, Türkçe karakterler ASCII'ye), bu yüzden kalıplar ASCII yazılır.
# "vermediler / vermiyor / vermez" eşleşir, "vermeleri çok hızlı" eşleşmez.
NEG_VERMEK = r"verm(iyor|edi|ez|eyen)"

PATTERNS = {
    "telefon_acilmiyor": r"telefon\w*\s+(\w+\s+){0,3}(ac(m|il?m)|acan\s+yok|bakm)",
    "kimse_acmiyor": r"(kimse|hic\s*kimse)\s+(\w+\s+){0,2}(acm|cevap|bakm)",
    "ulasilamiyor": r"ulas(il)?am(a|i)|ulasilm(a|i)|ulasmak\s+(imkansiz|mumkun\s+degil|zor)",
    "cevap_yok": r"(cevap|yanit)\s+(\w+\s+){0,2}(" + NEG_VERMEK + r"|alam|yok)",
    "donus_yok": r"(geri\s+)?donus\s+(\w+\s+){0,2}(yapm|olmad|yok|alam)|geri\s+donm",
    "mesgul": r"(surekli|hep|hat)\s+mesgul|mesgule\s+(atiyor|dusuyor)",
    "defalarca_aradim": r"(defalarca|kac\s+kere|birc?ok\s+kez|onlarca\s+kez|\d+\s+kez)\s+(\w+\s+){0,2}aradi",
    "randevu_alamadim": r"randevu\s+(\w+\s+){0,2}(alam|" + NEG_VERMEK + r"|olusturam)",
    "mesaj_donmuyor": r"(whatsapp|mesaj|dm)\w*\s+(\w+\s+){0,3}(donm|bakm|(cevap|yanit)\s+" + NEG_VERMEK + r")",
    "en_unreachable": r"(no\s*one|nobody)\s+(ever\s+)?(answer|pick)|(never|didn'?t|don'?t|doesn'?t|won'?t)\s+(answer|pick\s+up|call\s+back|respond)|could\s*n'?t\s+(reach|get\s+through)|unreachable|impossible\s+to\s+reach",
}
COMPILED = {k: re.compile(v) for k, v in PATTERNS.items()}

TR_MAP = str.maketrans("çğıöşüÇĞİIÖŞÜâîû", "cgiosucgiiosuaiu")


def normalize(text):
    return (text or "").translate(TR_MAP).lower()


def parse_date(value):
    if not value:
        return None
    try:
        return datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError:
        return None


def iter_reviews(items):
    """(işletme bilgisi, yorum) çiftleri üretir; iki Apify biçimini de destekler."""
    for item in items:
        if isinstance(item.get("reviews"), list):
            for review in item["reviews"]:
                yield item, review
        elif "text" in item or "textTranslated" in item:
            yield item, item


def place_key(place):
    return place.get("placeId") or place.get("url") or place.get("title")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("inputs", nargs="+", help="Apify JSON export dosya(lar)ı")
    ap.add_argument("-o", "--output", default="sicak_leadler.csv")
    ap.add_argument("--months", type=int, default=12, help="Sadece son N aydaki yorumlar (0 = hepsi)")
    ap.add_argument("--min-hits", type=int, default=1, help="İşletme başına en az kaç eşleşen yorum")
    args = ap.parse_args()

    items = []
    for path in args.inputs:
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        items.extend(data if isinstance(data, list) else [data])

    # İşletme bilgisini (telefon, site) ayrı bir yer datasetinden de tamamlayabilmek için.
    place_info = {}
    for item in items:
        key = place_key(item)
        if key:
            merged = place_info.setdefault(key, {})
            for field, value in item.items():
                if field != "reviews" and value not in (None, "", []) and field not in merged:
                    merged[field] = value

    cutoff = None
    if args.months > 0:
        cutoff = datetime.now(timezone.utc) - timedelta(days=30 * args.months)

    places = {}
    seen_reviews = set()
    for place, review in iter_reviews(items):
        key = place_key(place)
        review_id = review.get("reviewId") or (key, review.get("text"))
        if review_id in seen_reviews:
            continue
        seen_reviews.add(review_id)

        date = parse_date(review.get("publishedAtDate"))
        if cutoff and date and date < cutoff:
            continue

        text = review.get("text") or review.get("textTranslated") or ""
        norm = normalize(text)
        hits = [name for name, rx in COMPILED.items() if rx.search(norm)]
        if not hits:
            continue

        entry = places.setdefault(key, {"hits": 0, "signals": set(), "quotes": [], "latest": None, "stars": []})
        entry["hits"] += 1
        entry["signals"].update(hits)
        entry["stars"].append(review.get("stars"))
        if len(entry["quotes"]) < 2:
            entry["quotes"].append(" ".join(text.split())[:220])
        if date and (entry["latest"] is None or date > entry["latest"]):
            entry["latest"] = date

    rows = []
    for key, entry in places.items():
        if entry["hits"] < args.min_hits:
            continue
        info = place_info.get(key, {})
        recent_bonus = 1 if entry["latest"] and entry["latest"] > datetime.now(timezone.utc) - timedelta(days=90) else 0
        reviews_count = info.get("reviewsCount") or 0
        rows.append({
            "skor": entry["hits"] * 2 + len(entry["signals"]) + recent_bonus + (1 if reviews_count >= 100 else 0),
            "isletme": info.get("title", ""),
            "kategori": info.get("categoryName", ""),
            "sehir": info.get("city", ""),
            "telefon": info.get("phone", ""),
            "web": info.get("website", ""),
            "emails": ", ".join(info.get("emails") or []),
            "instagram": ", ".join(info.get("instagrams") or []),
            "puan": info.get("totalScore", ""),
            "yorum_sayisi": reviews_count,
            "ulasilamiyor_yorum": entry["hits"],
            "sinyaller": ", ".join(sorted(entry["signals"])),
            "son_sikayet": entry["latest"].date().isoformat() if entry["latest"] else "",
            "ornek_yorum": " | ".join(entry["quotes"]),
            "maps_url": info.get("url", ""),
        })

    rows.sort(key=lambda r: (-r["skor"], -int(r["yorum_sayisi"] or 0)))
    if not rows:
        print("Eşleşen işletme bulunamadı.", file=sys.stderr)
        return
    with open(args.output, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)
    print(f"{len(rows)} işletme -> {args.output}")


if __name__ == "__main__":
    main()
