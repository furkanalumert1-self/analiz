# Deda Group — Büyüme Analizi Dashboard'u

Deda Group (www.dedagroup.com — Adana merkezli Türk sanayi grubu) için kanıta dayalı iş zekâsı, sorun noktası keşfi ve büyüme otomasyonu dashboard'u. Canlı müşteri toplantısında kullanılmak üzere hazırlandı.

> **Not:** www.dedagroup.com, İtalya merkezli BT şirketi **Dedagroup S.p.A.** (dedagroup.it) değildir. Analiz yalnızca www.dedagroup.com'dan bağlanan Türk grup şirketlerini kapsar.

## Ne var?

| Bölüm | İçerik |
|---|---|
| Yönetici Özeti | Veri setlerinden hesaplanan KPI'lar, en güçlü 8 fırsat, öne çıkan doğrulanmış bulgular |
| Ekosistem & İş Modeli | Grup → şirketler → markalar → siteler → teklifler; ilişki türü ve güven seviyesi |
| Web & Martech | Site bazlı analiz, tespit edilen/gözlenmeyen teknolojiler, 390px mobil kontrol |
| Ürün & Hizmetler | 23 kayıtlı katalog (filtreli), çapraz satış / çapraz marka haritası |
| Müşteri Yolculuğu | Şirket bazlı aşamalar; aşama seçince kanıt, sorun ve fırsatlar |
| Sorunlar & Otomasyon | 29 bulgu; 8 filtre; Kanıt → Sorun → Sonuç → Çözüm → Otomasyon → Veri → Etki → Ölçüm zinciri; 4 sütunlu çözüm yolu karşılaştırması |
| Callypso Engage | Tetikleyici, segment, olay, entegrasyon, örnek mesaj; 13 segment |
| Harici, AI & Puanlama | Engage dışı çözümler, etki/uygulanabilirlik matrisi, skor tablosu |
| Canlı Simülasyon | Gerçek bir ürün/hizmet seçilerek B2B, distribütör, destek, servis veya iç operasyon akışı |
| Reklam İstihbaratı | Meta Reklam Kütüphanesi ve Google arama (Apify) sonuçları, organik sinyaller, reklam→CRM→satış haritası |
| 30/60/90 | Fırsatlara bağlı yol haritası |
| Keşif Soruları | 18 soru; ilk 5'i toplantı hazırlığı |
| Evidence Explorer | 44 kanıt kaynağı + 267 sayfa kaydı (244 okunabilir), aranabilir |
| Sınırlamalar | Tarama durumu, eksik veri, iç erişim gerektiren bulgular |

## Yerelde çalıştırma

Statik bir sitedir; derleme bağımlılığı yoktur (Node ≥ 18).

```bash
cd deda-group
node scripts/build.mjs        # veri setlerini doğrular ve data/bundle.js üretir
npx serve -l 8765 .           # veya: python3 -m http.server 8765
# http://localhost:8765
```

`index.html` doğrudan dosya olarak da açılabilir (veri `data/bundle.js` içinde gömülüdür).

## Ortam değişkenleri

`.env.example` dosyasını `.env` olarak kopyalayın (asla commit etmeyin):

| Değişken | Açıklama |
|---|---|
| `APIFY_API_KEY` | Apify API token'ı — yalnızca toplama betikleri kullanır, tarayıcıya/bundle'a girmez |
| `MAX_PAGES` | Alan adı başına sayfa sınırı (varsayılan 80) |
| `PLAYWRIGHT_PATH` | Mobil kontrol için Playwright yolu (isteğe bağlı) |

`scripts/build.mjs`, bundle içinde Apify token kalıbı bulursa derlemeyi durdurur.

## Veri toplama ve yenileme

```bash
set -a; . ./.env; set +a
node scripts/crawl.mjs                 # apify/website-content-crawler → data/crawls/*.json + data/crawl-status.json
node scripts/crawl.mjs dedapack.com    # tek alan adı
CRAWLER_TYPE=playwright:firefox node scripts/crawl.mjs dedamakina.com   # JS doğrulaması olan site (gerçek tarayıcı)
CRAWLER_TYPE=playwright:firefox node scripts/crawl.mjs retry-blocked    # pages.json'da doğrulama sayfası kalan URL'ler
node scripts/presence.mjs              # Google arama görünürlüğü + Instagram → data/search-presence.json, data/social-profiles.json
node scripts/ads.mjs                   # Meta Reklam Kütüphanesi → data/ads-raw.json
node scripts/mobile-check.mjs          # 390px mobil kontrol → data/mobile-check.json
node scripts/extract.mjs               # data/pages.json + data/technologies.json (data/raw-html/ üzerinden)
node scripts/build.mjs                 # doğrulama + skor hesaplama + data/bundle.js
```

- Tarayıcı `robots.txt`'ye uyar; giriş gerektiren sayfalara girmez, CAPTCHA çözücü kullanmaz. JavaScript doğrulaması isteyen sayfalar Apify'nin gerçek tarayıcı modu ile açılır.
- `scripts/fetch-fallback.mjs`: Apify kullanılamadığında yalnızca sitemap URL'lerini 1,5 sn aralıkla dener, doğrulama sayfasında durur.
- Analiz veri setleri (`pain-points.json`, `opportunities.json` vb.) elle yazılmış analizlerdir; her kayıt `source-registry.json`'daki kaynaklara bağlıdır ve build adımında referans bütünlüğü kontrol edilir.

### Veri setleri (`data/`)

`company-ecosystem.json`, `brands.json`, `source-registry.json`, `catalog.json`, `offerings.json`, `product-relationships.json`, `pages.json`, `technologies.json`, `crawl-status.json`, `crawls/*.json`, `raw-html/`, `ads-raw.json`, `search-presence.json`, `social-profiles.json`, `campaigns.json`, `mobile-check.json`, `website-analysis.json`, `journeys.json`, `pain-points.json`, `opportunities.json`, `segments.json`, `discovery-questions.json`, `roadmap.json`, `scenarios.json`, `limitations.json`.

### Puanlama

Her fırsat 5 bileşende 1–5 puanlanır: `0.30×Etki + 0.20×Kanıt + 0.20×İlgi + 0.15×Uygulanabilirlik + 0.15×Uyum`. ≥ 3.80 Yüksek, ≥ 3.00 Orta, aksi Düşük. Skor build adımında ve tarayıcıda bileşenlerden hesaplanır. Etki nitel bir tahmindir; gelir/ROI/dönüşüm tahmini yapılmadı.

## Vercel'e dağıtım

Bu klasör proje kökü olarak dağıtılır (`.vercelignore` ham tarama dosyalarını ve betikleri dışarıda bırakır):

```bash
cd deda-group && npx vercel --prod
```

veya Vercel panelinde repoyu içe aktarıp **Root Directory = `deda-group`**, Framework = *Other*, Build Command boş bırakın (`data/bundle.js` repoda hazır).

## Sınırlamalar (özet)

- Tüm siteler Apify ile tarandı (Deda Makina ve doğrulama sayfası dönen 18 URL gerçek tarayıcı moduyla). Instagram, Apify profil isteğini engelledi.
- dedaplast.com DNS'te çözümlenmedi.
- Callypso Engage dokümantasyonu bu ortamda yoktu; Engage önerileri teyit gerektirir.
- CRM, ERP, sipariş, trafik ve reklam hesabı verisi yoktur; segment büyüklüğü, gelir veya ROI tahmini yapılmadı.
- Tam liste: dashboard → *Sınırlamalar & Erişim*, `data/limitations.json`.
