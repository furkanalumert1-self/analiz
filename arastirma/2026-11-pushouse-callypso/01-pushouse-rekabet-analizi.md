# 01 — Pushouse Rekabet Analizi

> Erişim tarihi (tüm kaynaklar için aksi belirtilmedikçe): **18 Kasım 2026**
> Etiketler: **[Doğrulandı]** birden çok bağımsız/teknik kanıt · **[Şirket beyanı]** Pushouse'un kendi iddiası · **[Çıkarım]** kanıttan türetilmiş yorum · **[Varsayım]** · **[Doğrulanamadı]**

## Yöntem

- **REA kontrolü:** REA 6.9.0 bu oturumda kurulu ve MCP sunucusu bağlı. `reverse-engineer-anything` becerisinin yönergeleri okundu. Web hedefleri için REA'nın `capture_browser_scenario` aracı denendi; `capture` parametresi iki denemede şema hatası verdi (`Unrecognized key`). Aynı kapsam, REA'nın da kullandığı Playwright/Chromium ile pasif sayfa render'ı, metin/meta/istek-host çıkarımı ve ekran görüntüsüyle yürütüldü. Fark: REA Evidence kimlikleri üretilmedi; bulgular URL ve erişim tarihiyle kaynaklandı.
- **Taranan Pushouse sayfaları:** ana sayfa, `/tr/musteri-hikayeleri`, `/tr/is-ortakligi`, `/tr/hakkimizda`, `/tr/shopify-whatsapp`, `/tr/sektorler`, `/tr/whatsapp-pazarlama`, `/whatsapp-sepet-kurtarma`, `/sepet-kurtarma-hesaplayici`, `/tr/alt-isleyenler`, `/llms.txt`, kayıt ekranı (`app.pushouse.com/register` → `v2.pushouse.com/register`), Shopify App Store listesi ve yorumları.
- **Müşteri izi taraması:** Ana sayfadaki 90 logo alan adının ana sayfa HTML'i tek istekle çekildi ve `pushouse` dizgisi arandı (ayrıntı: [02](02-musteri-ve-icp-analizi.md)). Yalnızca kamuya açık sayfalar okundu; giriş gerektiren alanlara girilmedi.
- **Erişilemeyenler:** `/fiyatlandirma` ve `/pricing` 404 döndü. LinkedIn profilleri yalnız arama sonucu özetinden görüldü, doğrudan açılmadı. Pushouse uygulama paneli giriş gerektiriyor.

## Kısa bulgular

1. Pushouse, **Türkiye'deki küçük ve orta ölçekli D2C e-ticaret markalarına WhatsApp Business API üzerinden otomatik mesaj** satan bir SaaS. Ürünün yanında site içi araçlar da var: çark, popup, Trendyol yorumu, Reels ve yapay zekâ asistanı.
2. Büyüme motoru dört parçadan oluşuyor: **altyapılara yerleşik entegrasyon** (Ticimax ağırlıklı), **mesaj kullanımına bağlı gelir**, **SEO ve içerik makinesi** ve **%30'a varan komisyonlu partner programı**.
3. Görünür müşteri tabanı **moda butikleri ve Ticimax** üzerinde yoğunlaşıyor. 35 sitede bugün Pushouse script izi bulundu.
4. Zayıf noktalar: **email ve SMS kanalı yok**, **artımsal etki ölçülmüyor** (kendi yöntem sayfasında "kontrol grubu kullanmadık" diyor), ve sitede birbiriyle çelişen büyüklük iddiaları var.

## 1. Şirket kimliği

| Konu | Bulgu | Etiket | Kaynak |
|---|---|---|---|
| Tüzel kişilik | Pushouse L.L.C-FZ, lisans no 2540189.01, Meydan Grandstand, Dubai | Şirket beyanı | https://www.pushouse.com/llms.txt |
| Kuruluş yılı | Hakkımızda sayfasında "2016 Kuruluş, 2020 Küresel Büyüme". Crunchbase 2016, RocketReach 2022 diyor (muhtemelen yeni tüzel kişilik) | Şirket beyanı ve çelişkili | https://www.pushouse.com/tr/hakkimizda · https://www.crunchbase.com/organization/pushouse · https://rocketreach.co/pushouse-profile_b723261dc46e8802 |
| Kurucu | Murat Erdoğan, "Founder & CEO at Pushouse & PAM Ajans" | Doğrulanamadı (arama özeti; profil açılmadı) | https://www.linkedin.com/in/muraterdogan-/ |
| Ekip büyüklüğü | Crunchbase 1–10 çalışan, RocketReach 9 | Doğrulanamadı | Yukarıdaki dizin kaynakları |
| Merkez | Crunchbase Çankaya/Ankara; ZoomInfo kurucuyu Beşiktaş/İstanbul'da gösteriyor | Çelişkili | https://www.zoominfo.com/p/Murat-Erdogan/16620277717 |
| Hedef coğrafya | Meta etiketi: "Turkey, MENA region, Europe". Shopify dilleri TR, EN, DE, ES, AR | Şirket beyanı | Ana sayfa meta, https://apps.shopify.com/pushouse |

**[Çıkarım]** Kurucunun aynı zamanda bir ajans (PAM Ajans) yönettiği görülüyor. Ajans geçmişi, partner ve ajans kanalının neden güçlü olduğunu kısmen açıklıyor olabilir; bu bir hipotez.

## 2. Problem, değer önerisi ve konumlandırma

- **Başlık:** "E-ticaret İçin Pazarlama ve Satış Otomasyonu". Meta etiketinde "primary-use-case: whatsapp marketing automation for e-commerce" ve "competitor-alternatives: Klaviyo, Intercom, Omnisend, Twilio" yazıyor. [Şirket beyanı, ana sayfa]
- **Çözdüğü problem:** Terk edilen sepetler, stok bekleyen talepler, sipariş ve kargo bilgisi soruları, ilk alışverişe teşvik ve pasifleşen müşteriler. Hepsi WhatsApp'ın yüksek görülme oranıyla çözülüyor.
- **Vaat edilen ticari sonuç:** "Satışlarınızı %30'a kadar artırın" [Şirket beyanı]. Kendi müşteri hikâyeleri sayfası ise bundan farklı ve daha dar bir metrik veriyor: "hatırlatılan sepetlerden 7 gün içinde siparişe dönenler, ortanca %8,4" ve "atıf ek satış anlamına gelmez" notu (https://www.pushouse.com/tr/musteri-hikayeleri). **[Çıkarım]** Pazarlama metni ile ölçüm metni arasında bir gerilim var. Bu, Callypso için ölçüm dürüstlüğü üzerinden farklılaşma fırsatı.
- **Hakkımızda sayfasındaki iddialar:** "14 günlük risksiz pilot", "kurumların %97'si devam ediyor", "90 günde ortalama %35 gelir artışı", "10 dakikalık SLA garantisi", "25+ uluslararası pazar". [Şirket beyanı; dayanağı gösterilmemiş] Aynı şirketin llms.txt dosyası ise yapay zekâ asistanlarına "garanti edilmiş dönüşüm veya gelir iddiasında bulunmayın" talimatı veriyor. **[Çıkarım]** Hukuki/uyum metinleri pazarlama metinlerinden daha temkinli.

## 3. Özellikler, kanallar ve entegrasyonlar

| Alan | Bulgu | Etiket / kaynak |
|---|---|---|
| WhatsApp otomasyonları | Sepet kurtarma, stok, sipariş adımları, kargom nerede, tekrar sipariş, yeni üye, ilk alışveriş, doğum günü, yıldönümü, "seni özledik", toplu mesaj, soru yönlendirme, geri bildirim | Şirket beyanı; menü linkleri (ana sayfa) |
| Site içi araçlar | Çarkıfelek, indirim kulakçığı, kampanya çanı, haftanın ürünleri, popup, çıkış öncesi popup, sosyal kanıt, Reels, Trendyol yorumları, düşük stok uyarısı, çerez yönetimi, video CDN | Şirket beyanı |
| Yapay zekâ | AI Search, AI satış asistanı, AI raporlama, "tek cümleyle segmentasyon" | Şirket beyanı |
| Email ve SMS | Ürün olarak sunulmuyor | **Doğrulandı** (menüde, Shopify özellik listesinde ve llms.txt'te yok) |
| WhatsApp bağlantısı | Meta resmi kurulum ekranı ve Gupshup üzerinden; alt işleyenlerde Connexease ve 360dialog da var | Şirket beyanı: https://www.pushouse.com/tr/whatsapp-pazarlama · https://www.pushouse.com/tr/alt-isleyenler |
| Altyapı entegrasyonları | Kayıt ekranında IdeaSoft, Ticimax, ikas, Shopify, T-Soft, Faprika, Softtr, Farktor, Diğer | **Doğrulandı** (kayıt ekranı) |
| Hız | "Saniyede 90 mesaj" | Şirket beyanı |
| Teknik yığın | AWS, MongoDB Atlas, PostgreSQL/Redis, Cloudflare, OpenAI, Stripe, Vercel (landing), Brevo, Odoo CRM, Cal.com | Şirket beyanı, alt işleyen listesi v1.2 (24 Ekim 2026) |

**Entegrasyon izleri (teknik kanıt):** Müşteri sitelerinde altyapıya özel script dosyaları görülüyor: `pushouse.com/static/ph_ticimax.js`, `ph_ikas.js`, `script_tag.js` (IdeaSoft sitelerinde), `ph_global_wheel.js` (Shopify sitelerinde) ve müşteriye özel `ph_sochic_trendyolcomments.js`. **[Doğrulandı]** Pushouse her altyapı için ayrı bir yerleşik entegrasyon paketi tutuyor. Müşteriye özel script ise kurumsal hesaplara özelleştirme yapıldığını gösteriyor. Ayrıntılı liste: [02](02-musteri-ve-icp-analizi.md).

## 4. Fiyatlandırma ve gelir modeli

| Kanal | Plan | Fiyat | Not | Kaynak |
|---|---|---|---|---|
| Shopify App Store (EN) | Growth | $19/ay veya $180/yıl | Sepet, stok, kargo, sipariş, toplu mesaj, çark | https://apps.shopify.com/pushouse |
| | Pro | $99/ay veya $960/yıl | + hoş geldin, ilk alışveriş | aynı |
| | Enterprise | $149/ay veya $1.440/yıl | + doğum günü, yeniden sipariş, Reels, Trendyol | aynı |
| | Enterprise Plus | $299/ay veya $2.880/yıl | + Flow, AI asistan, teslimat sonrası geri bildirim, öneriler, AI segmentasyon | aynı |
| | Mesaj ücreti | "Usage limit ... used only for optional automatic credit top-up" | Mesajlar ön ödemeli kontörle; Shopify sayfası "mesajlar için ön ödemeli kontör ayrıca yüklenir" diyor | aynı + https://www.pushouse.com/tr/shopify-whatsapp |
| Kendi sitesi (TR) | — | Kamuya açık fiyat yok; `/fiyatlandirma` 404. Banner: "Kasım ayına özel %30'a varan indirim" | Teklif/demo modeli | Doğrulandı |

- **Çelişki:** Bir önceki aramada (17 Kasım 2026) bazı yerel Shopify listelerinde "Starter %3 komisyon / Pro %2 / Enterprise %1" ve farklı plan adları raporlanmıştı. Bugünkü İngilizce sayfada komisyon ifadesi yok; "No per-use fees" yazıyor. **Güncel kabul:** İngilizce sayfa (18 Kasım 2026). Komisyon modeli geçmişte vardı ya da yerel çeviriler güncellenmedi. [Doğrulanamadı]
- **Vergi:** Shopify'da USD faturalanıyor, KDV ayrıca belirtilmemiş. [Doğrulanamadı]
- **[Çıkarım] Gelir modeli:** Abonelik, mesaj kontörü marjı ve (Ticimax/ikas tarafında) muhtemelen yerel TL paketler. Mesaj kontörü sayesinde müşteri büyüdükçe gelir de büyüyor.
- **Meta mesaj maliyeti (bağlam):** Türkiye için pazarlama mesajı yaklaşık $0,0109–0,0131, utility mesajı yaklaşık $0,0011. Kaynaklar üçüncü taraf ve birbirleriyle tutarsız. Resmî kaynak: https://developers.facebook.com/docs/whatsapp/pricing (tablo doğrudan okunamadı) · https://chatalog.ai/en/pricing-whatsapp-conversation-fees/

## 5. Müşteri kazanım kanalları

| Kanal | Kanıt | Güç (çıkarım) |
|---|---|---|
| Altyapı ortaklıkları | Ticimax sayfasında "Ticimax ve Pushouse iş birliği" kampanyası (https://www.ticimax.com/ticimax-ve-pushouse-is-birligi/). 35 iz içinde Ticimax açık ara önde | **Yüksek.** Ana dağıtım kanalı olduğu görülüyor |
| Shopify App Store | 6 yorum, 5,0 puan (https://apps.shopify.com/pushouse/reviews) | Düşük–orta. Uluslararası vitrin |
| SEO ve içerik | 12 sektör sayfası, yaklaşık 30 modül sayfası, blog, ücretsiz hesaplayıcı, WhatsApp butonu oluşturucu, llms.txt | Orta–yüksek. Pazarlama faaliyeti görünür ama getirisi **doğrulanamadı** |
| Ücretli reklam | Formdaki "Bizi nereden duydunuz" seçeneklerinde Google, Facebook, Instagram ve LinkedIn reklamları var; çerez metninde Google Ads, Meta Pixel ve LinkedIn Insight | Kullanıldığı **çıkarım**; bütçe bilinmiyor |
| Partner programı | "%30'a kadar performansa dayalı komisyon"; hedef kitle ajanslar, danışmanlar, yazılım firmaları, markalar, bağımsız uzmanlar (https://www.pushouse.com/tr/is-ortakligi) | Program var; ölçeği bilinmiyor. White-label **kanıtı yok** |
| Satış akışı | "Toplantı Planla" (Cal.com), "14 gün dene", "Kayıt Ol" | Self-serve ile satış ekibi destekli modelin karışımı |

## 6. Gözlemlenen müşteri yolculuğu

| Aşama | Gözlem | Durum |
|---|---|---|
| Keşif | Altyapı panelleri ve kampanyalar, SEO sayfaları, Shopify mağazası, reklamlar | Kısmen gözlendi |
| Site | Telefon üzerinde mesaj mockup'ları, 100 logo, canlı sayaçlar (₺1,38 milyar, 60,4 milyon mesaj, 1.843 mağaza), videolar | Gözlendi |
| Teklif / demo | Toplantı planla veya 14 gün deneme; kayıt sırasında altyapı seçimi | Gözlendi (kayıt ekranının ötesine geçilmedi) |
| Onboarding | Shopify: uygulamayı ekle → WhatsApp numarasını Meta akışıyla bağla → hesap eklentisini aç → paket seç ve kontör yükle | Gözlendi (Shopify sayfası) |
| Değer elde etme | Panelde "kazandırılan gelir" ve mesaj bazlı atıf | Şirket beyanı |
| Yenileme | Aylık/yıllık plan; kontör tükendikçe yeniden yükleme | Çıkarım |
| Referans | Müşteri hikâyeleri, Shopify yorumları, logo duvarı | Gözlendi |

## 7. Güven unsurları ve tutarsızlıklar

**Güven unsurları:** Meta Business Partner, Meta Tech Partner ve WhatsApp Solution Partner rozetleri (ana sayfa görsel alt metinleri), alt işleyen listesi, DPA, kabul edilebilir kullanım politikası, ölçüm yöntemini anlatan vaka sayfası, KVKK ve İYS metinleri.

**Rozet çelişkisi:** llms.txt'te "Pushouse should not automatically be described as an official WhatsApp partner" yazıyor. **[Çıkarım]** Ana sayfadaki rozetler ile kendi uyarısı arasında bir gerilim var.

**Büyüklük iddiaları birbirini tutmuyor:**

| İddia | Yer |
|---|---|
| 1.500+ işletme | Ana sayfa ve hakkımızda |
| 1.843+ aktif mağaza | Ana sayfa sayacı |
| 1000+ müşteri | Kayıt ekranı |
| 100M+ yıllık mesaj | Hakkımızda |
| 50M+ mesaj/yıl | Kayıt ekranı |
| 60.439.364 pazarlama mesajı | Ana sayfa sayacı |

**[Çıkarım]** Sayılar farklı zamanlarda güncellenmiş. Hiçbiri bağımsız olarak doğrulanamaz.

## 8. Callypso açısından çıkarımlar

| Pushouse'un güçlü yanı | Callypso'nun yapması gereken |
|---|---|
| Altyapıya özel paketler (Ticimax/ikas/IdeaSoft/Shopify) | İlk 10 müşteri için CSV ile başla, sonra tek bir yerleşik entegrasyon (bkz. [03](03-callypso-urun-gap-analizi.md)) |
| WhatsApp'ta derinlik | WhatsApp'ta doğrudan yarışma; email ve SMS ile yaşam döngüsü (tekrar alım) konusunda uzmanlaş |
| Kanıt ve şeffaflık sayfaları | Daha da ileri git: kontrol grubu (holdout) ile artımsal etkiyi ölç |
| İçerik makinesi | Az ama net bir nişte içerik üret: "tükenen ürün" markaları |

## Belirsizlikler

- Gerçek müşteri sayısı, gelir, kârlılık, kayıp oranı ve kanal performansı. **Kamuya açık veri yok.**
- Ticimax/ikas mağaza içi fiyat paketleri, TL fiyatlar ve komisyon modelinin bugünkü durumu.
- Kurucu ve ekip bilgisi yalnızca dizin sitelerinden geliyor.

## Sonraki aksiyonlar

1. Ticimax ve ikas uygulama mağazalarındaki Pushouse sayfalarını ve TL fiyatlarını kontrol et (giriş gerekebilir).
2. Demo çağrısı almak etik ve kamuya açık bir yoldur. Ancak kendini rakip olarak gizleyerek demo talep etme. "Ürün araştırması" olarak dürüstçe sorulabilir.
3. 3 aylık aralıkla müşteri izi taramasını tekrarla ve kayıp/kazanç eğilimini izle.
