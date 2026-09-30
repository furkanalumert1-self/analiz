# Kremi Beauty × Callypso Engage Analizi

`kremi-callypso-engage-analizi.html` dosyasını tarayıcıda açarak görüntüleyebilirsiniz. Rapor; site/katalog analizi, 12 başlıkta Callypso Engage otomasyon senaryoları, Callypso dışı AI/e-ticaret fırsatları, yol haritası ve toplantı sorularını içerir.

# Avonni Growth & Automation Analysis

`avonni-growth-automation-analysis.html` dosyasını tarayıcıda açın (12 sayfalı etkileşimli dashboard; masaüstü ve mobil uyumlu, açık/koyu tema).

Veri toplama (30.09.2026):

- **Ürünler:** avonni.com.tr sitemap'indeki 1.212 ürün URL'sinin tamamı (sayfaya gömülü `productDetailModel`: fiyat, indirim, stok, teslim süresi, görseller, ölçü/ampul tabloları, varyasyonlar).
- **Kategoriler/etiketler:** Ticimax ürün listesi API'si ile 35 kategori, 10 etiket ve platform bayrakları (çok satan, vitrin, ücretsiz kargo).
- **İçerik sayfaları:** Apify `website-content-crawler` (Playwright, TR residential proxy) ile 68 ticari sayfa. Çalışma Apify hesabının aylık kullanım limitine ulaşınca durdu.
- **Reklam:** Google Ads Transparency Center (avonni.com.tr, Türkiye). Meta Ad Library ve Trendyol oturumsuz erişime kapalıydı (403).

Ham veriler `avonni-data/` klasöründe:

| Dosya | İçerik |
| --- | --- |
| `products.json` | 1.212 ürün kartı, türetilmiş alanlarla (aile, tip, oda, stil, kaplama, ölçü, ampul) |
| `categories_labels.json` | Kategori ve etiket sayfaları, ürün sayıları ve ürün ID'leri |
| `platform_flags.json` | Ticimax bayrakları (IsBestSeller, IsShowcaseProduct, IsShippingFree…) |
| `google_ads_transparency.json` | 11 Google Ads kreatifi (reklamveren, format, tarih aralığı) |
| `apify_website_content_crawler.json` | Apify ile render edilen 68 sayfanın markdown içeriği |

API anahtarları repoya konmadı; Apify anahtarı yalnızca oturum ortamında kullanıldı.
