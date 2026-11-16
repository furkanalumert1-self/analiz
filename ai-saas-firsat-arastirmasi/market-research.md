# ABD'de Kanıtlanmış AI SaaS ve Otomasyon Ürünleri: Pazar Araştırması

**Tarih:** 16 Kasım 2026
**Kapsam:** ABD'de para kazandığı kanıtlanmış 33 ürünün ayrıntılı profili ve 15 ürünlük ek kanıt tablosu. Her ürün için Türkiye ve Avrupa'daki karşılığı da incelendi.

---

## 0. Yöntem ve güvenilirlik notu (önce bunu okuyun)

**Canlı araştırma yapıldı.** Veriler, 16 Kasım 2026'da Apify `google-search-scraper` aktörüyle 4 turda çalıştırılan yaklaşık 130 Google sorgusundan toplandı. Sorgular İngilizce, Türkçe ve Almanca yazıldı. Kaynaklar arasında şirket blogları, basın bültenleri, TechCrunch/CNBC/Forbes, Sacra/GetLatka/Growjo tahminleri, G2/Capterra/Reddit/Indie Hackers sayfaları ve Türk resmî kurumları (Ticaret Bakanlığı, TÜRMOB, GİB/AA, TİM) var.

**Sınırlamalar:**

- Çoğu iddia, arama sonucundaki başlık ve özet metnine (snippet) dayanıyor. Sayfaların tamamı tek tek açılıp okunmadı. Kritik rakamlar için birincil kaynak bağlantısı verildi; yatırım kararından önce bunların açılıp kontrol edilmesi gerekir.
- Google'ın "AI Overview" özetleri **kaynak sayılmadı**. Bir rakam yalnızca orada geçiyorsa ⚠️ ile işaretlendi.
- Product Hunt ve Capterra sayfaları doğrudan kazınmadı. Kullanıcı şikâyetleri G2, Capterra ve Reddit sonuçlarının özetlerinden alındı.
- Kişisel/özel şirketlerin gelir rakamları çoğunlukla şirketin kendi beyanıdır ve denetlenmemiştir.

**Kanıt etiketleri:**

| Etiket | Anlamı |
|---|---|
| ✅ | Birincil kaynak: şirketin kendi duyurusu, halka açık şirket raporu, resmî kurum ya da büyük basın kuruluşu |
| 🟡 | Üçüncü taraf tahmini (Sacra, GetLatka, Growjo, Tracxn, ZoomInfo) ya da şirketin pazarlama sayfasındaki iddia |
| ⚠️ | Doğrulanmadı: yalnızca AI özeti, sosyal medya paylaşımı veya kaynağı belirsiz rakam |
| (bilinen) | Genel sektör bilgisi; bu çalışmada ayrıca doğrulanmadı |

---

## 1. Özet: araştırmadan çıkan 8 ana bulgu

1. **Ödeme isteği en güçlü, "kaçan geliri geri kazandıran" ürünlerde.** Örnekler: AI resepsiyonistler (Retell $100M gelir hızı, Goodcall, Rosie), yerel işletme mesajlaşması (Podium'da yalnızca AI ajan ürünleri $150M ARR) ve müşteri bulma araçları (Clay $100M, Apollo $150M+). Müşteri, ürünü "bir kişilik maaş" ya da "kaçan sipariş" ile karşılaştırıyor.
2. **Küçük ekipler ve dışarıdan sermaye almayan şirketler de büyüyebiliyor:** Chatbase (tek kurucu, yaklaşık $10M ARR), Instantly, lemlist, Smartlead, Tally ($6M ARR, 10 kişi), Senja ($90K MRR). Bu, 1–3 kişilik ekip hedefini destekliyor.
3. **Tam otonom "AI çalışan" vaadi sorunlu.** 11x'in şişirilmiş ARR skandalı (TechCrunch) ve Reddit'teki "AI SDR kullanıcılarının %50–70'i 3 ayda bırakıyor" tartışmaları bunu gösteriyor. Kazanan model, insanın onayladığı ve sonucu ölçülebilen yarı otomasyon.
4. **Sonuç bazlı fiyatlandırma yayılıyor ama şikâyet de getiriyor.** Intercom Fin çözüm başına $0,99, Zendesk $1,50–2,00, Gorgias yaklaşık $0,90 alıyor. Kullanıcılar bunu "AI vergisi" olarak eleştiriyor ve faturaların öngörülemediğinden yakınıyor. Bu, **sabit ve öngörülebilir fiyatlı yerel alternatiflere** yer açıyor.
5. **Türkiye'de bazı nişler şimdiden doymuş.** Trendyol soru-cevap otomasyonunda Celer, Replix, qsup, SellerPilot ve Veriscope var; fiyatlar ayda ₺199'a kadar inmiş. Yatay Türkçe sesli asistanlarda da Sesla, AI Calls, AI Agent TR ve Q-PLAN var. "Rakip az" sanılan alanların bir kısmı aslında kalabalık.
6. **Türkiye'de işletme iletişimi WhatsApp üzerinden yürüyor**, ABD'de ise telefon ve SMS. ABD ürünlerinin Türkiye'ye uyarlanmasında kanal WhatsApp ve Instagram DM olmalı. Ancak **1 Ekim 2026'dan itibaren Meta, WhatsApp servis mesajlarını da ücretlendiriyor** (numara başına aylık 1.000 ücretsiz mesajdan sonra). Bu durum birim maliyeti artırıyor ✅ ([Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages), [Twilio](https://help.twilio.com/articles/53100480177819-Notice-Changes-to-WhatsApp-s-Pricing-October-2026)).
7. **Türkiye'de CRM kullanımı düşük:** firmaların yaklaşık %11'i CRM kullanıyor, AB ortalaması %33 🟡 ([Ekonomim/Vodafone](https://www.ekonomim.com/sirketler/vodafonedan-kobiler-icin-dijitallesme-yol-haritasi-haberi-653304)). Süreçler hâlâ Excel, WhatsApp ve telefonla yürüyor; boşluk bu nedenle büyük. Öte yandan aynı veri, ödeme isteğinin düşük olduğuna da işaret ediyor.
8. **AB'de düzenleme bir fırsat ve aynı zamanda bir yük.** AI Act Madde 50 kapsamındaki chatbot şeffaflık yükümlülüğü 2 Ağustos 2026'da yürürlüğe girdi ✅ ([Avrupa Komisyonu](https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en)). Polonya'da KSeF e-fatura zorunluluğu Şubat/Nisan 2026'da, Belçika'da Peppol zorunluluğu 2026'da başladı 🟡 ([Taxually](https://www.taxually.com/blog/e-invoicing-mandates-by-country-2026)).

---

## 2. Özet tablo: 33 ürün

| # | Ürün | Kategori | Kanıtlanmış ölçek | Kanıt |
|---|---|---|---|---|
| 1 | Clay | B2B veri zenginleştirme / müşteri bulma | $100M ARR (2025), 17.000+ müşteri, $7,1B değerleme | ✅ |
| 2 | Apollo.io | B2B satış veritabanı + otomasyon | $150M ARR (Mayıs 2025); Sacra: $265M (Eyl 2026) | ✅ / 🟡 |
| 3 | Instantly | Soğuk e-posta (cold email) | $20M gelir (Mart 2024, raporlanan); dışarıdan sermaye yok | 🟡 |
| 4 | lemlist | Soğuk e-posta + çok kanallı akış | Sermaye almadan $10M+ ARR | 🟡 |
| 5 | Smartlead | Soğuk e-posta (ajans odaklı) | Latka tahmini ~$14M (2024); %1.200 yıllık büyüme beyanı | 🟡 |
| 6 | Artisan (Ava) | AI satış geliştirme temsilcisi (AI SDR) | ~$9M ARR (Nis 2026), $25M Seri A | ⚠️/🟡 |
| 7 | 11x | AI SDR (**olumsuz örnek**) | ~$10M "ARR" iddiası; müşteri ve gelir şişirme haberi | ✅ (TechCrunch) |
| 8 | Intercom Fin | AI müşteri hizmetleri ajanı | Çözüm başına $0,99; 12.000+ ekip; ~$100M ARR | 🟡/⚠️ |
| 9 | Sierra | Kurumsal AI müşteri ajanı | $100M ARR (Kas 2025), $150M+ (2026 başı) | ✅ |
| 10 | Decagon | Kurumsal AI destek | $131M Seri C; Sacra: $100M yıllık gelir hızı (Tem 2026) | ✅ / 🟡 |
| 11 | Chatbase | KOBİ AI chatbot (tek kurucu) | Sermaye almadan ~$9–10M ARR | 🟡 |
| 12 | Tidio (Lyro) | KOBİ chat + AI | 300.000+ müşteri; ~$29M gelir tahmini | 🟡 |
| 13 | Gorgias | E-ticaret yardım masası | 17.000+ marka | ✅ (site) |
| 14 | Rep AI | Shopify AI satış asistanı | Trafiğe göre fiyat: 10 bin oturumda $104/ay | 🟡 |
| 15 | Retell AI | Sesli AI ajan altyapısı | 17 ayda $10M'dan $100M gelir hızına; sadece $4,6M sermaye | ✅ |
| 16 | Vapi | Sesli AI geliştirici platformu | $50M Seri B, $500M değerleme, 1 milyar arama | ✅ |
| 17 | Goodcall | KOBİ AI telefon resepsiyonisti | $79/ay'dan başlayan planlar | ✅ (site) |
| 18 | Rosie | KOBİ AI telefon resepsiyonisti | $49 / $149 / $299 aylık planlar | ✅ (site) |
| 19 | Smith.ai | Hibrit (AI + insan) resepsiyon | 3.000–5.000+ müşteri; gelir tahminleri $27M–127M | 🟡 |
| 20 | Slang.ai | Restoran sesli AI | $36M Seri B | ✅ |
| 21 | Podium | Yerel işletme mesajlaşma + AI ajan | $150M+ AI'ya özgü ARR, 20.000+ AI ajan | ✅ |
| 22 | Birdeye | Yorum ve itibar yönetimi | $100M+ ARR, 150–200 bin işletme | 🟡 |
| 23 | Weave | Diş/sağlık kliniği iletişimi (borsada) | 2025 geliri $239M (+%17), 39.625 lokasyon | ✅ |
| 24 | Jobber | Saha hizmeti yazılımı | 2023'te ~$150M gelir (Sacra), 100 bin+ müşteri | 🟡 |
| 25 | Housecall Pro – CSR AI | Saha hizmeti için AI müşteri temsilcisi | "CSR AI kullananlar ortalama 2 kat gelir elde ediyor" iddiası | 🟡 |
| 26 | EvenUp | Hukuk (kişisel yaralanma davaları) dikey AI | $150M Seri E, $2B+ değerleme | ✅ |
| 27 | Otter.ai | Toplantı notu | $100M ARR (Mart 2025), 200'den az çalışan | ✅ |
| 28 | Fireflies.ai | Toplantı notu | $1B değerleme, kârlı; toplam $19M sermaye | ✅ / 🟡 |
| 29 | PandaDoc | Teklif ve sözleşme | $100M+ ARR, 50 bin+ müşteri | ⚠️ |
| 30 | Nanonets | Belge işleme (IDP) | 10.000+ müşteri beyanı | 🟡 |
| 31 | n8n | İş akışı otomasyonu (Berlin) | $2,5B (Eki 2025), ardından $5,2B; ~$100M ARR (2026) | ✅ / 🟡 |
| 32 | Lindy | Kodsuz AI ajan oluşturucu | "Yüksek 7 haneli" ARR, 25 çalışan | 🟡 |
| 33 | AgencyAnalytics | Ajans raporlaması | 7.000+ ajans | ✅ (site) |

---

## 3. Ürün profilleri

Her profilde aynı 10 başlık kullanıldı: **Ne yapar / Hedef müşteri / Temel özellikler / Fiyat / Büyüme kanıtı / Neden satın alınıyor / Şikâyetler / TR-AB alternatifleri / Farklılaşma fırsatı / Pazar boşluğu soruları.**

### A. B2B satış ve müşteri bulma

#### 1. Clay — clay.com
- **Problem:** Satış ekipleri potansiyel müşteri listelerini elle araştırıyor ve zenginleştiriyor. Bu iş günler sürüyor.
- **Hedef müşteri:** Satış operasyonu ekipleri, "GTM mühendisleri", büyüme ajansları.
- **Özellikler:** Elektronik tablo arayüzünde 100'den fazla veri sağlayıcısını sırayla deneyen ("waterfall") zenginleştirme, AI araştırma ajanı, CRM ve e-posta aracı entegrasyonları.
- **Fiyat:** Kredi bazlı abonelik (bilinen).
- **Büyüme kanıtı:** ✅ $100M ARR, 2025'te 4 kat büyüme, 17 bin+ müşteri, $7,1B değerleme ([Clay blog](https://www.clay.com/blog/100m-arr), [Seri D](https://www.clay.com/blog/series-d)). 🟡 2024'te $31M ([GetLatka](https://getlatka.com/companies/clay)).
- **Neden alınıyor:** Bir satış temsilcisinin haftalarca yapacağı hedefleme işini dakikalara indiriyor.
- **Şikâyetler:** Pahalı ve öğrenmesi zor. Reddit'te çok sayıda "Clay'in ucuz alternatifi var mı" başlığı var ([r/SaaS](https://www.reddit.com/r/SaaS/comments/1k4pjfe/any_clay_alternatives_but_cheaper/), [r/gtmengineering](https://www.reddit.com/r/gtmengineering/comments/1q592xw/what_are_the_best_alternatives_to_clay_that_are/)). Apollo'nun kredileri %60 kıstığı da aynı başlıklarda geçiyor.
- **TR/AB alternatifleri:** AB'de Cognism ve Dealfront (bilinen). Türkiye'de ihracata yönelik TrueTradeX ve asistanim.ai var ama bunlar daha çok hizmet şeklinde çalışıyor.
- **Fırsat:** Türk ihracatçı KOBİ'ler için Türkçe arayüzlü, ürün ve HS koduyla başlayan, "alıcı bul ve yaz" akışı (bkz. Fırsat #2).
- **Pazar boşluğu soruları:**
  - Problem Türkiye'de var mı? Evet. TİM'e göre 2025'te ~167.779 ihracatçı firma var ⚠️ (AI özeti; TİM raporuyla teyit edilmeli).
  - Mevcut çözüm karmaşık mı? Evet. Clay İngilizce ve teknik kullanıcıya göre tasarlanmış.
  - Excel ile mi yürüyor? Ağırlıklı olarak fuarlar, Alibaba ve elle yapılan LinkedIn araştırması kullanılıyor.

#### 2. Apollo.io — apollo.io
- **Problem:** B2B kişi verisine ulaşmak ve satış dizilerini (sequence) çalıştırmak.
- **Hedef müşteri:** KOBİ'ler ve orta ölçekli şirketlerin satış ekipleri.
- **Özellikler:** 200M+ kişilik veritabanı, e-posta dizileri, arama, AI ile araştırma.
- **Fiyat:** Freemium ve koltuk başı ücret (bilinen).
- **Büyüme kanıtı:** ✅ $150M ARR, 550 bin+ şirket ([Apollo Magazine](https://www.apollo.io/magazine/apollo-reaches-150-million-arr-fueled-by-ai)). 🟡 Eylül 2026'da $265M ARR ([Sacra](https://sacra.com/c/apollo/)).
- **Neden alınıyor:** Veri ve gönderim tek bir yerde, üstelik ucuz.
- **Şikâyetler:** Kredi kesintileri ve Avrupa verisinin kalitesi (Reddit başlıklarında geçiyor; ayrıntılı doğrulama yapılmadı).
- **TR/AB alternatifleri:** Türk firmalarına dair veri zayıf (bilinen). AB'de Cognism ve Lusha.
- **Fırsat:** Doğrudan rakip olunmaz. Apollo'nun API'si, kurulacak ürünün altyapısında **kullanılabilir**.

#### 3. Instantly — instantly.ai
- **Problem:** Toplu soğuk e-postanın spam'e düşmeden ulaştırılması (deliverability) ve e-posta hesaplarının ısıtılması.
- **Hedef müşteri:** Ajanslar, kurucular, satış ekipleri.
- **Özellikler:** Sınırsız gönderen hesabı, e-posta ısıtma (warmup) havuzu, Unibox (birleşik gelen kutusu), lead veritabanı.
- **Fiyat:** Aylık sabit paketler (bilinen; yaklaşık $37'den başlıyor).
- **Büyüme kanıtı:** 🟡 GetLatka'da raporlanan $20M (Mart 2024); dışarıdan sermaye almadı. Kaynak yalnızca arama özeti olduğu için kesin değil.
- **Neden alınıyor:** Hesap başına değil sabit ücret; kurulumu kolay.
- **Şikâyetler:** Isıtma havuzunun kalitesi ve teslim oranının tutarsızlığı ([r/Coldemailing](https://www.reddit.com/r/Coldemailing/comments/1vocl5m/instantly_or_smartlead/)).
- **TR/AB alternatifleri:** lemlist (Fransa).
- **Fırsat:** Ayrı bir ürün yapmaya gerek yok; altyapı olarak kullanılabilir.

#### 4. lemlist — lemlist.com (Fransa)
- **Problem:** Kişiselleştirilmiş, çok kanallı (e-posta + LinkedIn) satış akışı.
- **Büyüme kanıtı:** 🟡 Dışarıdan sermaye almadan $10M+ ARR. Mart 2020'de 8.000 müşteri ve $1M ARR ([integrate.fyi podcast](https://integrate.fyi/podcasts/top-founders/episodes/lemlist-gives-employees-this-bonus-when-5x-revenue-growth-target-hit-e6c545)).
- **Neden önemli:** **Bir Avrupa şirketinin global pazarda sermaye almadan büyüyebildiğinin kanıtı.** Kurucunun içerik üreterek ve kişisel markasıyla satış yapması (founder-led content) dağıtımın merkezindeydi (bilinen).
- **Şikâyet ve fırsat:** Türkçe kişiselleştirme ve Türk pazarı için hazır akışlar yok.

#### 5. Smartlead — smartlead.ai
- **Büyüme kanıtı:** 🟡 Latka tahmini ~$14M (Haz 2024). Kurucu "12 ayda %1.200 büyüme" ve "API'mizin üzerine kurulu 18 adet $1M ARR firma var" diyor ([LinkedIn](https://www.linkedin.com/posts/vaibhavnamburi_smartlead-grew-1200-last-12-months-despite-activity-7179658958494728192-HYfM)).
- **Önemli bulgu:** Smartlead'in API'si üzerine kurulmuş, yılda $1M+ ciro yapan **ajanslar** var. Bu da "araçları birleştirip hizmet olarak satan" (productized service) iş modelinin işlediğini gösteriyor.
- **Hedef müşteri:** Lead üretim ajansları (beyaz etiket, alt hesaplar).

#### 6. Artisan — artisan.co
- **Problem:** Satış geliştirme temsilcisi (SDR) maliyeti.
- **Büyüme kanıtı:** ⚠️ ~$9M ARR (Nis 2026, ARR Club'a atfediliyor; AI özeti). $25M Seri A ✅ (birden çok haber).
- **Şikâyetler:** Bir danışmanın yorumunda yanıt oranı %3,43 ve sözleşmeden çıkış zorluğu anlatılıyor ([inscaler](https://www.inscaler.com/blog/i-tried-canceling-ai-sdr-contract-with-11x)). Reddit'te genel kanı: "AI SDR'ın yazdığı mesajlar jenerik" ([r/sales](https://www.reddit.com/r/sales/comments/1t63m4o/any_good_result_with_ai_sdr_im_thinking_about/), [r/gtmengineering](https://www.reddit.com/r/gtmengineering/comments/1pindu0/70_of_ai_sdr_users_quit_within_3_months_what/)).
- **Ders:** "AI çalışan" mesajı satış getiriyor ama müşteriyi elde tutmuyor (churn yüksek). Ürün **insan onaylı** ve **dar bir segmente** odaklı olmalı.

#### 7. 11x — 11x.ai (olumsuz örnek)
- ✅ TechCrunch: 11x, müşterisi olmayan şirketlerin logolarını kullanmış. Bir pilot müşteri "ürün, SDR'larımızdan belirgin şekilde kötü performans gösterdi" demiş ([TechCrunch](https://techcrunch.com/2025/03/24/a16z-and-benchmark-backed-11x-has-been-claiming-customers-it-doesnt-have/)).
- **Ders:** "Sözleşmeli ARR" (CARR) gibi metriklere güvenmeyin. Bizim planımızda da **ödeyen ve kalan müşteri** tek başarı ölçütü olacak.

### B. AI destekli müşteri hizmetleri

#### 8. Intercom Fin — fin.ai
- **Problem:** Destek taleplerinin yüksek maliyeti.
- **Fiyat:** Çözüm (resolution) başına $0,99, ayrıca koltuk ücreti 🟡 ([Reddit](https://www.reddit.com/r/AIStartupAutomation/comments/1sn23rk/honestly_most_ai_support_bots_in_2026_are_either/)).
- **Büyüme kanıtı:** 🟡 Çözüm oranı %25'ten %65 garantiye çıktı; yeni müşteride net gelir tutma (NRR) %112'den %146'ya ([Kyle Poyar/LinkedIn](https://www.linkedin.com/posts/kyle-poyar_the-ai-growth-re-acceleration-at-intercom-activity-7342964507259920384-EHPU)). ⚠️ $100M ARR (AI özeti).
- **Şikâyetler:** ✅ "Intercom faturam %120 arttı, $9 bine çıktı" ([r/SaaS](https://www.reddit.com/r/SaaS/comments/1au13kp/my_intercom_billing_shot_up_by_120_it_was_because/)) ve "AI vergisi" analizi ([r/SaaS](https://www.reddit.com/r/SaaS/comments/1p8c4cx/the_ai_tax_is_real_i_analyzed_215_recent_intercom/)).
- **Fırsat:** KOBİ'ler **sabit fiyat** ve **Türkçe kalite** istiyor.

#### 9. Sierra — sierra.ai
- ✅ Yedi çeyrekte $100M ARR ve $10B değerleme; ardından $950M yatırım ve $15,8B değerleme ([CNBC](https://www.cnbc.com/2026/05/04/bret-taylor-sierra-fundraise-openai.html), [Sierra](https://sierra.ai/uk/blog/year-two-in-review)).
- **Bizim için anlamı:** Kurumsal segmentte devler var. Küçük ekip bu alanda rekabet **edemez**. Sierra yalnızca talebin kanıtı olarak işe yarıyor.

#### 10. Decagon — decagon.ai
- ✅ $131M Seri C ve $1,5B değerleme ([Decagon](https://decagon.ai/blog/series-c-announcement)). 🟡 Temmuz 2026'da $100M yıllık gelir hızı ([Sacra](https://sacra.com/c/decagon/)).
- **Anlamı:** Sierra ile aynı; kurumsal segment.

#### 11. Chatbase — chatbase.co
- **Problem:** Sitedeki SSS'leri ve ön satış sorularını yanıtlayan, kendi verisiyle eğitilmiş bir chatbot.
- **Hedef müşteri:** KOBİ'ler, SaaS şirketleri, e-ticaret.
- **Büyüme kanıtı:** 🟡 Tek kurucu, sermaye yok, ~$9M ARR ([Solofounders](https://solofounders.com/blog/9m-arr-zero-investors-yasser-elsaid-on-bootstrapping-chatbase-as-a-solo-founder/)), $10M+ ARR iddiası ([LinkedIn](https://www.linkedin.com/posts/elsharkasy_a-single-founder-led-product-engineering-activity-7484222746864889856-qSX8)).
- **Neden alınıyor:** 10 dakikada kurulabiliyor.
- **Şikâyetler:** Capterra'da destek puanı düşük; pahalı ve sınırlı özelleştirme ([Capterra](https://www.capterra.com/p/10012414/Chatbase/reviews/), [G2](https://www.g2.com/products/chatbase-chatbase/reviews?qs=pros-and-cons)).
- **Fırsat:** **Tek kişinin AI chatbot ile $10M ARR yapabildiğinin kanıtı.** Ancak yatay chatbot pazarı artık metalaştı; **dikey** bir uyarlama gerekiyor.

#### 12. Tidio — tidio.com (Polonya kökenli)
- 🟡 300 bin+ müşteri, ~$29M gelir tahmini ([ZoomInfo](https://www.zoominfo.com/c/tidio-llc/357901742)). Lyro, ortalama %75 çözüm oranı beyan ediyor ([Tidio](https://www.tidio.com/)).
- **Anlamı:** **Avrupa'dan çıkıp KOBİ'ye global satan** bir chat şirketi örneği. Türkçe desteği var (bilinen); bu nedenle yatay chat'te Türkiye'de de rakip.

#### 13. Gorgias — gorgias.com
- **Problem:** Shopify markalarında destek talepleri ve iade/kargo soruları.
- ✅ 17.000+ marka ([Gorgias](https://www.gorgias.com/)).
- **Şikâyetler:** G2'de talep (ticket) hacmine göre fiyatlamadan kaynaklanan öngörülemeyen faturalar; Trustpilot puanı 2,1 🟡 ([G2](https://www.g2.com/products/gorgias/reviews), [Kayako analizi](https://kayako.com/tools/gorgias-review/)). AI Agent çözüm başına ~$0,90 🟡 ([Chatarmin](https://chatarmin.com/en/blog/gorgias-alternative)).
- **TR alternatifleri:** qsup ve Etkin.ai (ikas/Ticimax/IdeaSoft/Trendyol entegrasyonlu). Insider ve Segmentify ise pazarlama odaklı.
- **Fırsat:** Türk e-ticaretinde destek WhatsApp ve Instagram DM'den geliyor; Shopify payı düşük. Yerel altyapılara (ikas, Ticimax, IdeaSoft) entegre AI destek ajanı yapılabilir (Fırsat #8).

#### 14. Rep AI — hellorep.ai
- 🟡 Ziyaretçi trafiğine göre fiyat: 10 bin oturumda $104/ay, 80 bin oturumda $578/ay ([eesel](https://www.eesel.ai/blog/rep-ai-review)). Kendi verisine göre "AI ile konuşan ziyaretçi 4 kat daha fazla dönüşüyor" 🟡.
- **Anlamı:** **Satışa dönük** AI asistanının ROI'si gösterilebiliyor. Türk e-ticaretinde ürün önerisi ve sepet terk akışlarında karşılığı var.

### C. Sesli AI ve AI resepsiyonist

#### 15. Retell AI — retellai.com
- ✅ "17 ayda $10M'dan $100M gelir hızına, $4,6M sermayeyle" ([Retell/LinkedIn](https://www.linkedin.com/posts/retellai_100m-in-revenue-run-rate-and-were-just-activity-7526697767088390144-Zq-G)).
- **Anlamı:** Sesli AI altyapısı hazır. Kurulacak ürün **Retell ya da Vapi'nin üstüne inşa edilebilir**, sıfırdan ses teknolojisi geliştirmek gerekmez. Retell'in gelirinin büyük kısmı onun üzerine ürün kuran ajans ve geliştiricilerden geliyor (bilinen).

#### 16. Vapi — vapi.ai
- ✅ $50M Seri B, $500M değerleme, 1 milyar arama ([TechCrunch](https://techcrunch.com/2026/05/12/vapi-hits-500m-valuation-as-amazon-ring-chose-its-ai-platform-over-40-rivals/), [GlobeNewswire](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html)).

#### 17. Goodcall — goodcall.com
- **Problem:** Küçük işletme telefonu kaçırıyor; kaçan arama kaçan müşteri demek.
- **Fiyat:** ✅ $79/ay'dan başlıyor, dakika ücreti yok ([Goodcall](https://www.goodcall.com/)).
- **Hedef müşteri:** Tesisatçı, kuaför, oto servis gibi yerel hizmet işletmeleri.
- **Şikâyetler:** Reddit'te "iyi kurulmuş bir AI resepsiyonist ayda $1.000'dan az" yorumu ve kalite konusunda karışık görüşler ([r/AIReceptionists](https://www.reddit.com/r/AIReceptionists/comments/1rw7t37/is_an_ai_receptionist_for_small_business_actually/)).

#### 18. Rosie — heyrosie.com
- ✅ $49 (250 dk) / $149 (1.000 dk) / $299 (2.000 dk) ([Rosie fiyat](https://heyrosie.com/pricing)).
- **Anlamı:** ABD'de KOBİ sesli AI'da fiyat tabanı ayda ~$50.

#### 19. Smith.ai — smith.ai
- 🟡 AI + 500'den fazla insan temsilci, 3.000–5.000 müşteri. Gelir tahminleri arasında büyük fark var: $26,7M (Latka) ile $127M (Growjo) ([Growjo](https://growjo.com/company/Smith.ai)).
- **Anlamı:** **Hibrit model** (AI karşılar, gerekirse insan devralır) hukuk ve sağlık gibi hassas sektörlerde kabul görüyor.
- **Ek kanıt:** Reddit'te bir kullanıcı "8 ayda AI resepsiyonist satarak $250K kazandım" diyor ⚠️ ([r/AIReceptionists](https://www.reddit.com/r/AIReceptionists/comments/1xhykyd/i_made_over_250000_in_8_months_selling_ai/)); doğrulanamaz.

#### 20. Slang.ai — slang.ai
- ✅ $36M Seri B; restoran rezervasyonu ve telefon karşılama; 97 dil ([TamRadar](https://www.tamradar.com/funding-rounds/slang-ai-series-b-36m)).
- **Dikey örnek:** Loman (restoran siparişi) "telefon gelirinde %22'ye kadar artış" iddia ediyor 🟡 ([Loman](https://loman.ai/blog/ai-order-taking-restaurants-cost-roi)).

### D. Yerel işletme ve dikey SaaS

#### 21. Podium — podium.com
- ✅ 2,5 yılda **$150M+ AI'ya özgü ARR**, 20.000+ AI ajan; otomotiv, ev hizmetleri, estetik ve sağlık sektörlerinde ([Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/podium-surpasses-150m-ai-agent-174300683.html)).
- **Şikâyetler:** Reddit'te "Podium dolandırıcılık, sözleşmeye bağlıyorlar sonra ilgilenmiyorlar" gibi yorumlar ve agresif satış eleştirisi ([r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/148oqsy/podiumcom/)).
- **Anlamı:** **Yerel işletmeye AI ajan satmak, ABD'nin en hızlı büyüyen AI gelir kalemlerinden biri.** Uzun sözleşme ve agresif satış ise taklit edilmemesi gereken bir zayıflık.

#### 22. Birdeye — birdeye.com
- 🟡 $100M+ ARR ve 150 bin+ işletme ([PRNewswire](https://www.prnewswire.com/news-releases/birdeyes-annual-state-of-online-reviews-unveils-emerging-trends-in-online-reputation-302075352.html)).
- **TR karşılığı:** Google yorumlarına yanıtı genellikle ajanslar veya serbest çalışanlar veriyor ([örnek](https://www.burakmaden.com/google-yorum-otomasyonu)). Yemeksepeti, Trendyol ve Şikayetvar'ı tek yerde toplayan bir araç bulunamadı. Bu, Fırsat #4'ün çıkış noktası.

#### 23. Weave — getweave.com (NYSE: WEAV)
- ✅ 2025 geliri $239,0M (+%17), 39.625 lokasyon ([Weave 10-Q](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001609151/fca1d78a-b759-4e08-b729-1996744c8a06.html), [Q4 özet](https://intellectia.ai/news/stock/weave-communications-reports-strong-q4-2025-earnings-with-record-growth)).
- **Anlamı:** **Diş ve sağlık kliniklerinin iletişim yazılımına yüksek ödeme yaptığı** borsa verisiyle kanıtlı.
- **TR karşılığı:** DentalBulut, DentSoft, Macrodental ve Dr.DENTES kayıt ve randevu odaklı. AI iletişim katmanı zayıf görünüyor.

#### 24. Jobber — getjobber.com
- 🟡 2023'te ~$150M gelir ([Sacra](https://sacra.com/c/jobber/)). Fiyatlar $29–$399 ([TradePicked](https://tradepicked.com/reviews/jobber-pricing)).
- **Şikâyetler:** Ek ücretler ve özellik kilitleme ([r/Contractor](https://www.reddit.com/r/Contractor/comments/1ov71ky/is_jobber_worth_it_for_small_teams/)).
- **TR karşılığı:** SerPro, TeknikPlus (yıllık ₺750!), Servis Pozitif, Saha Servis. **Türkiye'de fiyatlar çok düşük; ödeme isteği zayıf.**

#### 25. Housecall Pro – CSR AI — housecallpro.com
- 🟡 "CSR AI kullanan ustalar ortalama 2 kat gelir elde ediyor" ([Housecall Pro](https://www.housecallpro.com/features/ai-team/)). ServiceTitan'ın 2026 mali yılı geliri ✅ $961M ([r/StockTitan](https://www.reddit.com/r/StockTitan/comments/1rs1wxi/ttan_servicetitan_announces_fiscal_fourth_quarter/)).
- **Anlamı:** Saha hizmeti yazılımları **AI telefon/mesaj karşılayıcıyı ek modül olarak** satıyor. Türk servis yazılımlarında bu modül yok (Fırsat #6).

#### 26. EvenUp — evenuplaw.com
- ✅ $150M Seri E ve $2B+ değerleme ([EvenUp](https://www.evenuplaw.com/products/demands/)).
- **Şikâyet:** "Talep mektubunu aslında dış kaynaklı paralegaller yazıyor" ([r/Lawyertalk](https://www.reddit.com/r/Lawyertalk/comments/1g1nwbi/whos_tried_evenup_for_demand_letters/)).
- **Ders:** Başarılı dikey AI şirketleri arka planda **insan + AI** ile çalışıyor. Bu, küçük ekip için de uygun bir başlangıç modeli. Hukuk alanının kendisi Türkiye'de düzenleme ve ödeme isteği açısından zor; kapsam dışı bırakıldı.

### E. Toplantı ve ses kaydı

#### 27. Otter.ai — otter.ai
- ✅ Mart 2025'te $100M ARR, 200'den az çalışanla ([Otter blog](https://otter.ai/blog/otter-ai-breaks-100m-arr-barrier-and-transforms-business-meetings-launching-industry-first-ai-meeting-agent-suite)).
- **Şikâyetler:** Toplantıya izinsiz katılan bot ve gizlilik; açılmış toplu dava ([r/legaltech](https://www.reddit.com/r/legaltech/comments/1ulvwxg/if_your_app_records_meetings_the_otter_class/), [r/projectmanagement](https://www.reddit.com/r/projectmanagement/comments/1j0cfei/do_not_join_otterai_unless_you_want_your_whole/)).

#### 28. Fireflies.ai — fireflies.ai
- ✅ Kârlı ve $1B değerleme ([Fireflies](https://fireflies.ai/blog/fireflies-1-billion-valuation)). 🟡 $19M toplam sermaye, ~$10,9M ARR (2024) ([GetLatka](https://getlatka.com/companies/firefliesai)). 🟡 Fathom: 2025'te $30M ARR.
- **TR değerlendirmesi:** Fireflies ve Notta Türkçeyi destekliyor ([Notta TR](https://www.notta.ai/tr)). **Türkçe toplantı notu pazarında yerel boşluk yok → elendi.**

### F. Belge, teklif ve finans otomasyonu

#### 29. PandaDoc — pandadoc.com
- ⚠️ $100M+ ARR (AI özeti). ✅ Fiyat: $19 / $49 koltuk başı, belge başına $5 ([PandaDoc](https://www.pandadoc.com/pricing/)).
- **Şikâyetler:** CRM entegrasyonu ve onay akışı üst paketlere kilitli ([G2](https://www.g2.com/products/pandadoc/reviews)).
- **TR karşılığı:** Paraşüt teklif modülü, Bitrix24 ve Canva şablonları; teklifler çoğunlukla Excel ve Word ile hazırlanıyor. **B2B üreticilerde gelen fiyat talebinden (RFQ) teklif çıkarma süreci elle yürüyor** (Fırsat #5). İlgili örnek: Responsive (RFP yazılımı) 2.000+ müşteriye sahip ✅ ([Responsive](https://www.responsive.io/)).

#### 30. Nanonets — nanonets.com
- 🟡 10.000+ müşteri ve 1 milyar+ belge beyanı ([Nanonets](https://nanonets.com/about)); Growjo'nun tahmini ise $3,3M. Beyan ile tahmin arasında büyük fark var.
- **Benzerleri:** Rossum (Çekya; Peppol ve AB e-fatura uyumluluğuna yöneliyor ✅ [Procurement Mag](https://procurementmag.com/news/rossum-integrated-einvoicing)) ve Docsumo (4.000+ müşteri 🟡).
- **TR karşılığı:** Evrako, DocMach ve Kalfa Asist mali müşavirlere AI ile fiş okuma sunuyor. Türkiye'de ~1,94 milyon e-Fatura mükellefi var ✅ ([AA](https://www.aa.com.tr/tr/ekonomi/mukellefler-dijital-vergi-dairesinde-gecen-yil-20-9-milyona-yakin-islem-yapti/3884692)). Faturalar zaten yapısal veri (XML) olduğu için OCR ihtiyacı **kâğıt fiş, ÖKC/Z raporu, banka dekontu ve gider belgesi** gibi belgelerde kalıyor (Fırsat #3).

### G. Otomasyon ve AI ajan platformları

#### 31. n8n — n8n.io (Berlin)
- ✅ $180M Seri C ve $2,5B değerleme (Eki 2025) ([311 Institute](https://www.311institute.com/startups/n8n/)). 🟡 2026'da ~$100M ARR ve SAP yatırımıyla $5,2B ([okara.ai](https://okara.ai/blog/n8n-revenue-growth)).
- **Önemli bulgu:** n8n kullanan ajans ve serbest çalışanlar müşterilere **kurulum ücreti + aylık bakım** modeliyle satış yapıyor ([r/n8n](https://www.reddit.com/r/n8n/comments/1tksjdl/how_much_does_it_actually_cost_per_month_to_keep/)).
- **Anlamı:** Avrupa'dan çıkan bir otomasyon devi. Bizim için **altyapı ve MVP hızlandırıcı** görevi görür.

#### 32. Lindy — lindy.ai
- 🟡 "AI çalışan" konumlandırmasından "AI'ın Zapier'i" konumlandırmasına geçince yüksek 7 haneli ARR; 25 çalışan ([SaaS Club](https://saasclub.io/podcast/lindy-flo-crivello-450/)).
- **Ders:** **Konumlandırma dili satışı belirliyor.** "Seni değiştirecek AI" mesajı korku yaratıyor; "işini kolaylaştıran araç" mesajı satıyor.
- **Diğerleri:** Gumloop ($50M Seri B, ilk müşterilerini viral demo videolarıyla buldu ✅ [Dealroom](https://app.dealroom.co/news/feed/gumloop-raises-24-5m-moves-to-sf)) ve Relevance AI ($24M Seri B ✅ [TechCrunch](https://techcrunch.com/2025/05/06/relevance-ai-raises-24m-series-b-to-help-anyone-build-teams-of-ai-agents/)). Yatay ajan platformları sermaye yoğun → küçük ekip için uygun değil.

### H. Raporlama ve mikro SaaS

#### 33. AgencyAnalytics — agencyanalytics.com
- ✅ 7.000+ ajans ([AgencyAnalytics](https://agencyanalytics.com/company/customers)).
- **Şikâyetler:** Pahalı; MySQL entegrasyonu için ayda $700 ek ücret ([r/digital_marketing](https://www.reddit.com/r/digital_marketing/comments/1ijcae2/any_solid_alternatives_to_agency_analytics_with/)); Looker Studio ücretsiz ([r/DigitalMarketing](https://www.reddit.com/r/DigitalMarketing/comments/1pcirdq/need_software_that_unifies_data_from_campaigns/)).
- **TR fırsatı:** Türkçe, Trendyol Reklam + Meta + Google + TikTok verisini birleştiren, AI ile yorum yazan beyaz etiketli rapor (Fırsat #9).

---

## 4. Ek kanıt tablosu (kısa profiller)

| Ürün | Ne yapar | Kanıt | Kaynak |
|---|---|---|---|
| Bland AI | Kurumsal sesli ajan | $50M Seri C, toplam $100M+ sermaye ✅ | [Bland](https://www.bland.ai/blog/series-c) |
| Loman | Restoran telefon siparişi | %22'ye kadar telefon geliri artışı iddiası 🟡 | [Loman](https://loman.ai/blog/ai-order-taking-restaurants-cost-roi) |
| ServiceTitan | Saha hizmeti (borsada) | 2026 mali yılı geliri $961M ✅ | [r/StockTitan](https://www.reddit.com/r/StockTitan/comments/1rs1wxi/ttan_servicetitan_announces_fiscal_fourth_quarter/) |
| Abridge | Tıbbi kayıt asistanı (scribe) | $100M gelir (2025) 🟡 | [Sacra](https://sacra.com/c/abridge/filings/) |
| Fathom | Toplantı notu | $30M ARR (2025) ⚠️ | AI özeti |
| Responsive | RFP yanıt otomasyonu | 2.000+ ekip ✅ | [Responsive](https://www.responsive.io/) |
| Rossum | Fatura belge işleme (IDP) | SAP ortağı, AB e-faturasına yöneliyor ✅ | [SAP](https://www.sap.com/products/financial-management/partners/rossum-czech-republic-sro-rossum-ai-invoice-processing-solution.html) |
| Docsumo | Belge işleme | 4.000+ müşteri 🟡 | [Slashdot](https://slashdot.org/software/comparison/Docsumo-vs-Multimodal/) |
| Make (Celonis) | Otomasyon (Çekya) | 3,1M kullanıcı ✅ | [Make](https://www.make.com/blog/2024-automation-wrap-up) |
| Gumloop | AI iş akışı | $50M Seri B ✅ | [Tracxn](https://tracxn.com/d/companies/gumloop/__W_Rm13RIiWZmGWc9RlDuZvnjwkOXHj37wKA4HLWV4oY) |
| Julius AI | Veriyle konuşarak analiz | ~$1M gelir tahmini ⚠️ | AI özeti |
| Senja | Müşteri referansı (testimonial) toplama | Sermaye almadan $90K MRR ⚠️/🟡 | [r/micro_saas](https://www.reddit.com/r/micro_saas/comments/1xgw3el/senja_took_6_months_to_reach_1k_mrr_and_28_months/) |
| Tally | Form oluşturucu (Belçika) | Sermaye almadan $6M ARR, 10 kişi ✅ | [Tally blog](https://blog.tally.so/6-years-in-6-million-far/) |
| Attio | AI-öncelikli CRM (Londra) | $52M Seri B, "ARR'yi 4 katına çıkarma yolunda" ✅ | [Attio](https://attio.com/blog/attio-raises-52m-series-b) |
| Zendesk AI | Destek AI ajanı | Çözüm başına $1,50–2,00 🟡 | [cosupport](https://cosupport.ai/articles/zendesk-pricing) |

---

## 5. Türkiye ve Avrupa pazar verileri

| Veri | Değer | Kanıt |
|---|---|---|
| Türkiye e-ticaret hacmi (2025) | ₺4,57 trilyon (+%52,2) | ✅ [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/turkiyede-e-ticaret-hacmi-2025te-4-6-trilyon-liraya-ulasti) |
| E-ticaret yapan işletme sayısı | ~634 bin | ⚠️ AI özeti ([rapor PDF](https://ticaret.gov.tr/data/6a02f2c7269de183c0b98bc4/T%C3%BCrkiye'de%20E-Ticaretin%20G%C3%B6r%C3%BCn%C3%BCm%C3%BC%20Raporu%202025.pdf) ile teyit edilmeli) |
| Trendyol satıcı sayısı | 170 bin (2025 ilk yarı) | ✅ [TradingView/Matriks](https://tr.tradingview.com/news/matriks:5848523:0/) |
| Sağlık turizmi | 1,5 milyon hasta, $3,0B (2024) | ✅ [Ticaret Bakanlığı](https://ticaret.gov.tr/haberler/ticaret-bakanligindan-hizmetler-ihracati-bilancosu-saglik-hizmeti-ihracatimiz-2024-yilinda-1-5-milyon-saglik-turisti-ile-3-milyar-dolar-gelire-ulasti-20-06-2025) |
| Sağlık turizmi yetki belgeli kuruluş | ~5.364 | ⚠️ AI özeti (liste: [USHAŞ](https://htsonuc.ushas.com.tr)) |
| TÜRMOB meslek mensubu | 136.685; aktif serbest SM+SMMM ~59.958 | 🟡 [İktisadi Dayanışma](https://www.iktisadidayanisma.com/SMMM-ve-YMM-sayilari-ve-sorunlarina-bir-bakis/Haber/6b7bdec7-7da0-43cc-be68-bf24ba3f46af.aspx), [TÜRMOB tablo](https://www.turmob.org.tr/istatistikler/c8172e63-2bef-4919-a863-86e403bfdf0a/meslek-mensubu-dagilim-tablosu--sm-smmm-) |
| e-Fatura mükellefi | 1.937.308 (2025 sonu) | ✅ [AA](https://www.aa.com.tr/tr/ekonomi/mukellefler-dijital-vergi-dairesinde-gecen-yil-20-9-milyona-yakin-islem-yapti/3884692) |
| İhracatçı firma sayısı | 167.779 (2025) | ⚠️ AI özeti, TİM faaliyet raporuyla teyit edilmeli |
| Yurt dışı fuar desteği üst limiti (2026) | Milyonlarca TL'ye varan limitler | 🟡 [Rota Danışmanlık](https://www.rotadanismanlik.net/duyuru-6) |
| CRM kullanımı | TR %11, AB %33 | 🟡 [Ekonomim](https://www.ekonomim.com/sirketler/vodafonedan-kobiler-icin-dijitallesme-yol-haritasi-haberi-653304) |
| AB'de AI kullanan işletme (10+ çalışan) | ~%20 (2025) | 🟡 [Arab Spectrum (Eurostat'a atfen)](https://arabspectrum.com/ai-adoption-surges-among-eu-companies-in-2025/) |
| Paraşüt | 100 bin kullanıcı | ✅ [Dünya](https://www.dunya.com/sirketler/parasut-100-bin-kullaniciya-ulasti-haberi-326935) |
| Verimor bulut santral | 9.000+ firma | 🟡 [Verimor FB](https://www.facebook.com/verimor.telekomunikasyon/posts/%EF%B8%8F-verimorun-bulut-santral-altyap%C4%B1s%C4%B1n%C4%B1-kullanan-m%C3%BC%C5%9Fteri-say%C4%B1s%C4%B1-9000-firmay%C4%B1-a%C5%9Ft%C4%B1p/1271014221694517/) |
| WhatsApp API servis mesajı ücreti | 1 Ekim 2026'dan itibaren aylık 1.000 ücretsiz mesajdan sonra ücretli | ✅ [Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages) |
| KVKK yurt dışı aktarım | Mart 2024 değişikliği, 1 Eylül 2024'te yürürlükte | ✅ [KVKK Rehberi](http://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi) |
| AB AI Act Madde 50 | 2 Ağustos 2026'da yürürlükte | ✅ [Avrupa Komisyonu](https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en) |

### Türkiye'de tespit edilen yerel rakipler (kategoriye göre)

| Kategori | Yerel oyuncular | Yoğunluk |
|---|---|---|
| Trendyol soru-cevap AI | Celer (₺199–799/ay), Replix (₺1.999–3.499+/ay), qsup, SellerPilot, Veriscope | **Doymuş** |
| Türkçe sesli AI asistan | Sesla ($129,99+), AI Calls ($59,99/100 dk), AI Agent TR (₺5.900+), Q-PLAN, JasNow | Kalabalık (yatay) |
| Sağlık turizmi CRM | iriCRM (~$20/kullanıcı 🟡), MetoCRM, Planports, Risamed, Projemed, Webklinik, Connectico ($699/ay + ~$2.000 kurulum ✅) | Orta |
| Mali müşavir evrak AI | Evrako, DocMach (kontör bazlı), Kalfa Asist | Orta-erken |
| İhracat müşteri bulma | TrueTradeX (teklif usulü), ihracat.asistanim.ai | Düşük-orta, hizmet ağırlıklı |
| Teknik servis yazılımı | SerPro, TeknikPlus (₺750/yıl), Servis Pozitif, Saha Servis | Kalabalık ama AI katmanı yok |
| Diş kliniği yazılımı | DentalBulut, DentSoft, Macrodental, Dr.DENTES | Kalabalık ama AI iletişim katmanı zayıf |
| Emlak CRM | RE-OS, OfisCRM, Arveya | Orta |
| Pazaryeri entegrasyonu | Sentos (₺9.500–59.000/yıl), Dopigo (₺24.999–74.999) | Olgun |
| Google yorum yanıtı | Ajans ve serbest çalışan hizmetleri, Menuviel aracı | Düşük, ürünleşmemiş |

---

## 6. Ürünlerden çıkan genel desenler

| Desen | ABD örneği | TR/AB'ye uyarlama |
|---|---|---|
| Kaçan geliri yakalama (arama, mesaj, lead) | Podium, Goodcall, Rosie, Housecall Pro CSR AI, Loman | Telefon yerine **WhatsApp + Instagram DM**; sağlık turizmi, klinik ve servis |
| Müşteri bulmayı ucuzlatma | Clay, Apollo, Instantly | **İhracatçı** için çok dilli alıcı araştırma ve yazışma |
| Belgeyi veriye dönüştürme | Nanonets, Rossum, EvenUp | **Mali müşavir** evrak toplama; AB'de e-fatura uyumluluğu |
| Yorum ve itibar | Birdeye, Podium | Google + **Şikayetvar + Yemeksepeti + Trendyol** |
| Teklif hızlandırma | PandaDoc, Responsive | **RFQ'dan teklife** (B2B üretici, ihracatçı) |
| Tek kişi / sermayesiz büyüme | Chatbase, Tally, Senja, lemlist | 1–3 kişilik ekip hedefini destekliyor |

> **Sonraki adım:** Bu bulgulardan türetilen 10 fırsat ve puanlaması için `opportunity-ranking.md` dosyasına bakın.
