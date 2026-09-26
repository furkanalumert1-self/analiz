# Google Maps "ulaşılamıyor" lead filtresi

Voice Agent için sıcak lead bulur: Google Maps yorumlarında müşterilerin
"telefonu açmıyorlar / ulaşamadım / geri dönmediler" dediği işletmeler.

## Akış

1. **Apify → Google Maps Scraper** (`compass/crawler-google-places`) ile işletmeleri çek
   (yorumsuz, ucuz). `reviewsCount >= 30` ve web sitesi olanları seç.
2. **Apify → Google Maps Reviews Scraper** (`compass/google-maps-reviews-scraper`)
   ile bu işletmelerin son 100 yorumunu çek (`reviewsSort: "newest"`).
3. Her iki datasetin JSON export'unu indir ve çalıştır:

```bash
python3 tools/maps_unreachable_filter.py yerler.json yorumlar.json -o sicak_leadler.csv --months 12
```

Tek adımda (Maps Scraper'da `maxReviews` > 0) çektiysen tek dosya yeterli.

## Çıktı

`skor` sütununa göre sıralı CSV: işletme, telefon, web, e-posta, Instagram, eşleşen
yorum sayısı, sinyal türleri, son şikâyet tarihi ve örnek yorum.

Skor = 2 × eşleşen yorum + farklı sinyal sayısı + son 90 günde şikâyet (+1) + 100+ yorum (+1).

Kalıplar `PATTERNS` sözlüğündedir; yeni ifade eklemek için oraya bir regex ekle
(metin küçük harfe ve ASCII'ye çevrilmiş olarak eşleşir: "ulaşamadım" → "ulasamadim").
