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

## Uçtan uca akış (API ile)

```bash
export APIFY_TOKEN=...   # asla dosyaya/commit'e yazma

# 1) İşletmeler (şehir başına bir run, yorum çekmeden: işletme başı ~$0.004)
python3 tools/apify_run.py compass~crawler-google-places in_istanbul.json places_istanbul.json --max-usd 0.75

# 2) Yorumlar: reviewsFilterString TAM KELİME eşleştirir ve sadece eşleşen yorum ücretlenir.
#    Bu yüzden her çekimli kelime için ayrı run aç (telefonu, telefonlara, açmıyor, ulaşamadım,
#    ulaşılamıyor, dönüş, cevap, aradım, whatsapp, answer ...). 26 kelime x 255 işletme ≈ $0.80.
python3 tools/apify_run.py compass~google-maps-reviews-scraper in_kw00.json rev_kw00.json --max-usd 0.5

# 3) Filtre (sadece ≤3 yıldızlı yorumlar) + site iletişim bilgisi (ücretsiz)
python3 tools/maps_unreachable_filter.py places_*.json rev_kw*.json -o sicak.csv --months 36
python3 tools/site_contacts.py base.csv -o base_contacts.csv
```

Notlar: Free planda aynı anda en fazla 5 run çalışır ve run başı harcama tavanı en az $0.50 olmalıdır.
Regex eşleşmeleri yine de elle okunmalı; `leads/` altındaki liste elle doğrulanmıştır.

## LinkedIn karar vericileri (giriş yapmadan)

```bash
python3 tools/linkedin_xray.py queries base_contacts.csv -o in_linkedin.json          # klinik başına 1 Google sorgusu
python3 tools/apify_run.py apify~google-search-scraper in_linkedin.json serp.json --max-usd 1.5   # ~$0.0045/sorgu
python3 tools/linkedin_xray.py parse base_contacts.csv serp.json -o karar.csv          # rol + şirket eşleşmesi
```

E-posta için `harvestapi~linkedin-profile-scraper` ("Profile details + email search", ~$0.01/profil).
Free planda run başına en fazla 10 profil; `urls` alanına düz URL string'leri ver. Bulunan adresler
çoğunlukla catch-all alan adlarında "risky" döner — göndermeden önce doğrula.
