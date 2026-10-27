# Gürsan Ofis Mobilyaları × GeoAdra

Hazırlayan: GeoAdra by CallypsoTech · Araştırma tarihi: 27 Ekim 2026

| Dosya | İçerik |
|---|---|
| [`../reports/gursan-geoadra/index.html`](../reports/gursan-geoadra/index.html) | Müşteriye gösterilecek, mobil uyumlu web sunumu (tek dosya, harici bağımlılık yalnızca Google Fonts) |
| [`bulgular-ve-aksiyonlar.md`](bulgular-ve-aksiyonlar.md) | İş modeli, 13 kaynaklı bulgu, rakipler, soru seti, ölçüm planı, 5 aksiyon, reklam taslakları, 30 günlük pilot |
| [`tarama-ozeti.json`](tarama-ozeti.json) | Apify taraması: 50 URL; URL, erişim tarihi, tarama durumu, başlık, tekil metin özeti, ürün HTML denetimi |

Toplantı hazırlık notu (`toplantı-hazirligi.md`) satıcıya özel olduğu ve depo herkese açık olduğu için **Git'e eklenmedi**.

## Yönetici özeti
1. Gürsan'ın elinde sağlam bir temel var: 1976'ya dayanan üretim geçmişi, Altunizade showroom'u, ürün sayfalarında teklif akışı ve 18 rehber yazı.
2. Ürün bilgisi her yerde aynı derinlikte değil. Masa takımlarında ölçü tabloları var; bazı koltuk ve kabin sayfalarında açıklama ya da ölçü yok. İncelenen 21 ürün sayfasının hiçbirinde yapılandırılmış ürün verisi (Product şeması) bulunmuyor.
3. Kurumsal bilgiler birbiriyle çelişiyor: kuruluş "25+ yıl" ve "1976" olarak, marka adı üç farklı biçimde geçiyor, merkez adresi farklı yazılıyor. Proje vaka sayfası da yok.
4. AI görünürlüğü **ölçülmedi**. 7 soruluk pilot ölçüm planı hazır.
5. Öneri: tek ürün grubu ve sabit soru setiyle başlangıç ölçümü → Gürsan'ın onayladığı iyileştirmeler → aynı yöntemle yeniden ölçüm (30 gün).

## Yayın
- Sunum, `reports/` klasörüne bağlı mevcut Vercel projesinin **dal önizlemesinde** `/gursan-geoadra/` yolunda yayınlanır. Ana (production) sayfa değişmez.
- Ayrı bir Vercel projesi açmak için: Vercel'de bu depoyu tekrar içe aktarın ve **Root Directory** olarak `reports/gursan-geoadra` seçin. Klasör bağımsız çalışır.
- Vercel önizlemeleri "Deployment Protection" (Vercel girişi) arkasında. Müşteriye paylaşmadan önce bu proje için korumayı kapatın veya Vercel'den paylaşılabilir bir bağlantı oluşturun.

## Bekleyen / doğrulanamayan kısımlar
- **AI ölçümü çalıştırılmadı.** Ölçüm için sağlayıcı erişimi (OpenAI / Gemini / Anthropic API) yok.
- **ChatGPT reklam uygunluğu** OpenAI'ın resmî sayfalarından doğrulanamadı (bu ortamdan 403). Türkiye bilgisi yalnızca ikincil kaynaklardan.
- Apify taramasında `/fashion-01/` başarısız oldu (sunucu HTTP 500 döndürdü).
- LinkedIn profilleri giriş istiyor; profil bilgileri yalnızca arama sonuçlarından alındı.
- Hedef müşteri, bölge, kanal dağılımı, bayi ağı, gerçek rakipler, Geon Design ilişkisi, form/CRM akışı: toplantıda doğrulanacak.
