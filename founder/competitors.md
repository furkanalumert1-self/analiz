# Rakipler: Callypso Export Agent ve Callypso Engage (Türkiye)

Araştırma tarihi 24 Kasım 2026. Yalnızca herkese açık kaynaklar kullanıldı ve her bilgi kaynağına bağlı. Ham tablo `founder/competitors.csv` dosyasında.

**İki soru cevaplanıyor:**
1. Türkiye'de Export Agent'ın doğrudan bir muadili var mı?
2. Engage'in hedef kitlesi için ikas, Ticimax ve Shopify'ın payı ne?

---

## 1. Export Agent: Türkiye'de doğrudan muadil var mı?

**Kısa cevap: Bulduğum kadarıyla tam bir muadil yok.** Export Agent'ın yaptığı şu: Türk ihracatçıya gelen yabancı dildeki talebi okumak, eksik bilgiyi bulmak, katalog fiyatından teklif hazırlamak, onaya sunmak ve takibi yapmak. Bu akışın tamamını Türk üreticiye sunan bir ürün bulamadım. Ama bu işin **parçalarını** yapan Türk ürünleri var ve en yakın olanı bu boşluğu kolayca kapatabilir.

### Tablo (en doğrudan rakipten başlayarak)

| Ürün | Tür | Ne yapıyor | Export Agent'tan farkı | Fiyat |
| --- | --- | --- | --- | --- |
| [Teklif Robotu (Intelligence AI)](https://www.intelligence.com.tr/teklif-robotu/) | **En yakın doğrudan rakip** (yalnızca teklif adımı) | Excel, taranmış ya da el yazısı teklif talebini okuyor, kataloğa eşleştiriyor ve kurumsal PDF teklif üretiyor. Satış ekibi gözden geçirip gönderiyor. Kendi iddiası %95 eşleştirme başarısı. | İhracata özgü değil. Yabancı dilde gelen e-posta, Incoterm, eksik bilgi sorma ve takip görevi anlatılmıyor. | Açık değil (demo talebi) |
| [Asistflow M.E.R.V.E](https://asistflow.com/merve) | Dolaylı (giden satış) | "AI Dış Ticaret Asistanınız". Hedef pazarlarda distribütör buluyor, 0–100 arası skorluyor, İngilizce teklif maili yazıp gönderiyor, cevapları takip ediyor. Telegram ve Excel ile raporluyor. | **Gelen** talebi işlemiyor, **yeni alıcı** buluyor. Export Agent'ın dondurulması önerilen "Müşteri Bulma" modülünün olgun hali. | Açık değil (ücretsiz demo) |
| [asistanim.ai İhracat](https://ihracat.asistanim.ai/tr) | Dolaylı (sesli kanal) | İhracatçılar için 7/24 çok dilli yapay zekâ çağrı merkezi: RFQ alma, proforma takibi, sevkiyat sorusu. SAP, Logo Tiger, Netsis, Salesforce ve HubSpot entegrasyonu iddia ediyor. | Kanalı telefon, e-posta değil. Teklif hesaplama akışı yok. | Açık değil |
| [ExportAlfa](https://www.exportalfa.com/) | Dolaylı (kapsamı belirsiz) | Ana sayfada "Yapay Zeka Destekli İhracat Asistanı" yazıyor. | Ücretlendirme ve tanıtım sayfaları 404 verdi, ürünün ne yaptığı doğrulanamadı. Bir arama özeti yıllık 1.000–3.000 $ fiyattan söz etti ama kaynağını bulamadım; **doğrulanmamış**. | Doğrulanamadı |
| [Alibaba.com Smart Assistant Agent](https://seller.alibaba.com/smart-assistant) | Dolaylı (platforma bağlı) | Alibaba satıcıları için alıcı talebini analiz ediyor, cevap ve takip planı taslağı yazıyor, RFQ'lara teklif mektubu üretiyor. | Yalnızca Alibaba.com içine gelen talepler için çalışıyor. Üreticinin kendi e-postası, fuar kontakları ve web sitesi kapsam dışında. Bölgesel bir Alibaba sayfasına göre Gold/Verified üyelikle birlikte geliyor ([kaynak](https://seller.alibaba.com/id/smart-assistant-agent)); Türkiye için doğrulanmadı. | Üyeliğe dahil (doğrulanmadı) |
| [Hexa](https://www.hexaagents.com/sales), [Distro](https://distro.app/), [RFQ AutoPilot](https://rfqautopilot.com/) | Doğrudan ama global | RFQ'dan kalemleri çıkarıp kataloğa eşleştiriyor ve onaya hazır teklif üretiyor. RFQ AutoPilot bunu Gmail ve Outlook içinde bir Chrome eklentisi olarak yapıyor. | İngilizce arayüz, ABD'deki distribütörlere yönelik. Türkçe çalışma ve ihracat terimleri (EXW/DAP, MOQ) odakta değil. Fiyatlarına bakılmadı. | Kontrol edilmedi |
| ChatGPT / genel yapay zekâ + Excel + Gmail | **Ana ikame** | İhracat müdürü talebi genel bir yapay zekâ aracına yapıştırıyor, cevabı oradan alıyor, teklifi Excel'de tutuyor. | Katalog, fiyat, onay ve takip hafızası yok; her şey elle. Ama ucuz ve hazır. Export Agent'ın asıl yenmesi gereken bu. | Genel abonelik |
| Tercüman / ek dış ticaret elemanı | İkame | Yabancı dildeki yazışmayı ve teklif hazırlığını insan yapıyor. | Pahalı ve yavaş ama güvenilir. Maaş verisi araştırılmadı. | Araştırılmadı |

**Fiyat aralığı hesaplanamadı.** Türk rakiplerin hiçbiri fiyatını açıklamıyor; hepsi demo talebiyle satıyor. Global tarafta fiyatlara bakılmadı. `/founder-pricing` için fiyat çıpasını ikameler oluşturacak: genel yapay zekâ aboneliği ile ek eleman maliyeti arası.

### Konumlandırma haritası (metinle)

İki eksen:
- **Talep yönü:** gelen talep ↔ giden arama
- **İhracata özgülük:** genel B2B ↔ Türk ihracatçıya özel

```
                     Türk ihracatçıya özel
                              │
     asistanim.ai (sesli,     │   [BOŞ KÖŞE: Export Agent]
     gelen çağrı)             │   gelen e-posta → teklif → onay → takip
                              │
  Asistflow M.E.R.V.E ────────┼──────────────────────────── gelen talep
  (giden, distribütör bulma)  │   Alibaba Smart Assistant (yalnızca Alibaba içi)
                              │
                              │   Teklif Robotu (Türk, genel B2B teklif)
                              │   Hexa / Distro / RFQ AutoPilot (global)
                       genel B2B
```

### Müşteri şikâyetleri

**Bulunamadı.** Türk rakiplerin hiçbirinin Google, G2, Capterra ya da şikayetvar gibi bir sitede değerlendirmesine rastlamadım. Ürünler yeni ve demo talebiyle satılıyor. Bu yüzden şikâyet temaları çıkarılamadı. Bu da bir bulgu: kategori o kadar yeni ki henüz kamuya açık müşteri sesi yok. `/founder-consumer` itirazları simüle buyer'larla üretmek zorunda kalacak.

### Boşluk

Kanıta dayanarak, **Türkçe çalışan, Türk ihracatçının kendi gelen kutusuna gelen yabancı dildeki talebi uçtan uca işleyen bir ürün bulamadım.** Bu akış talebi okumak, eksik bilgiyi (model, teslim şehri, Incoterm) sormak, katalog ve EXW fiyatından teklif hazırlamak, onaya sunmak ve takip etmek demek. Mevcut ürünlerin her biri bu akışın bir parçasını yapıyor:

- **Teklif Robotu** teklifi hazırlıyor ama ihracata özel değil.
- **Asistflow** yabancı alıcıya yazıyor ama gelen talebe değil, kendi bulduğu alıcıya.
- **asistanim.ai** gelen talebi karşılıyor ama telefonda.
- **Alibaba** aynı akışı yapıyor ama yalnızca kendi platformundaki talepler için.

### Tehdit: kim en hızlı kopyalar?

1. **Intelligence AI (Teklif Robotu).** Okuma ve eşleştirme motoru zaten var. "Yabancı dilde e-posta + Incoterm + takip" katmanını eklemesi kısa sürer. En ciddi tehdit bu.
2. **Asistflow.** İhracatçıyla zaten konuşuyor ve İngilizce teklif maili yazıyor. Gelen cevapları da takip ettiği için gelen talebe geçmesi doğal bir adım.
3. **Alibaba.** Alibaba'da satan Türk üreticiler için bu iş zaten kısmen ücretsiz yapılıyor. Kendi e-postası ve fuarlarıyla satan üretici ise kapsam dışında kalıyor.
4. **ERP üreticileri (Logo, Netsis).** Katalog ve fiyat verisi zaten onlarda. Bir yapay zekâ teklif modülü ekleyebilirler. Bu, şu an görünen bir ürün değil, bir olasılık.

**Sonuç:** Boşluk gerçek ama dar. Callypso'nun avantajı teknoloji değil, odak ve hız olmalı. İnegöl gibi tek bir kümede ilk müşterileri ve teklif verisini rakiplerden önce toplaması gerekiyor. Kurulun koşulları bu bulguyla örtüşüyor.

---

## 2. Engage: ikas, Ticimax ve Shopify'ın Türkiye'deki payı

**Kısa cevap: Resmî bir pazar payı verisi yok.** Bağımsız tarayıcıların saydığı mağaza sayıları birbirinden farklı. Hepsi aynı tabloya işaret ediyor:
- **Shopify, Ticimax ve ikas aynı ligde.** Shopify mağaza sayısında biraz önde ama ziyareti yüksek Türk mağazalarında yerli platformlar baskın.
- **WooCommerce ve özel yazılım** da büyük bir dilim.

### Mağaza sayıları (kaynağa göre)

| Platform | [AfterShip](https://www.aftership.com/ecommerce/statistics/regions/tr) (Türkiye, 98,7 bin mağaza) | [StoreLeads](https://storeleads.app/reports/technology/Cloudflare/country/TR) (yalnızca Cloudflare kullanan Türk mağazaları) |
| --- | ---: | ---: |
| WooCommerce | 36,17 bin · %36,7 | 7.175 |
| Özel yazılım (Custom Cart) | 12,42 bin · %12,6 | 12.887 · %18,0 |
| **Shopify** | **11,37 bin · %11,5** | **18.693 · %26,2** |
| Wix | 10,1 bin · %10,2 | 7.782 |
| **Ticimax** | **8,89 bin · %9,0** | **9.315 · %13,0** |
| OpenCart | 7,49 bin · %7,6 | 823 |
| IdeaSoft | 5,16 bin · %5,2 | 4.225 |
| **ikas** | **3,69 bin · %3,7** | **8.574 · %12,0** |
| T-Soft | listede yok | 574 |

**Diğer kaynaklar:**
- **[Eticaret Radarı, Eylül 2026](https://eticaretradari.com/blog/turkiye-e-ticaret-altyapi-raporu-2026/):** Türkiye'de en çok ziyaret edilen sitelerden altyapısı tanınan 5.841 online mağazanın **%63,2'si yerli hazır altyapıda** (3.689 mağaza). Rapor firma adı vermiyor. Aynı rapora göre mağazaların **%59,2'si ana sayfasından WhatsApp'a bağlanıyor**; canlı destek aracı kullananlar ise %13,7. Bu, Engage için WhatsApp odağını destekleyen bir bulgu.
- **[BuiltWith](https://trends.builtwith.com/shop/Ticimax):** Ticimax'ı Türkiye'de "eCommerce Enabler" kategorisinin en popüler teknolojisi olarak gösteriyor (11 Kasım 2026 verisi).
- **[TechnologyChecker](https://technologychecker.io/technology/ikas):** ikas satıcılarının %94'ü Türkiye'de ve ikas'ın Türk pazarında ciddi bir platform olduğunu yazıyor. Satıcıların %45'i 2020'lerde kurulmuş şirketler, yani genç markalar.

**Nasıl okunmalı:**
- **Shopify'ın sayısı büyük olasılıkla şişkin.** AfterShip ve StoreLeads mağazayı ülkeye göre sayıyor. Türkiye'den yurt dışına satan (e-ihracat) ve dropshipping mağazaları Shopify'da yoğun olabilir. Bu bir hipotez, doğrulanmadı. Ziyaret ağırlıklı ölçümde (Eticaret Radarı) yerli altyapılar öne geçiyor.
- **ikas hızla büyüyor ama sayısı kaynağa göre çok oynuyor:** AfterShip'te 3,7 bin, StoreLeads'in yalnızca Cloudflare alt kümesinde 8,6 bin. İkincisi daha yeni bir tarama.
- **Engage için anlamı:** Tek bir entegrasyonla pazarın küçük bir kısmına ulaşılır. "Önce Ticimax + ikas" ile "önce Shopify" arasında seçim yapmak gerekiyor:
  - **Shopify** müşterisi Klaviyo'ya zaten bir tık uzakta. [Klaviyo](https://www.klaviyo.com/pricing) ücretsiz başlıyor; e-posta planı ayda 20 $'dan, e-posta + SMS planı 25 $'dan başlıyor.
  - **Ticimax ve ikas** müşterisi global araçların zayıf kaldığı yerli bir ekosistemde.

  Rakam değil yorum olarak: kurulun "ikas için WhatsApp + İYS sepet kurtarma" önerisi bu tabloyla uyumlu.

### Pazaryeri riski (kurulun açık sorusu)

Markaların cirosunun ne kadarının kendi sitesinden geldiğine dair **güvenilir bir veri bulamadım.** Pazaryeri payları için kaynaklar arasında büyük fark var: Trendyol için %27'den ([HSBC araştırması, eski](https://girisimlab.com/hsbc-e-ticaret-pazar-paylari-raporu/)) %55'e (kaynaksız bir blog) kadar rakamlar dolaşıyor. Ölçülebilir tek yeni veri kargo hacmi: BTK 2026 verisine göre Trendyol kargo hacminin %30,89'unu taşıyor ([ShiftDelete](https://shiftdelete.net/trendyol-hepsiburada-kargo-pazar-payi-2026)). Bu bir satış payı değil. Engage'in hedef kitlesinin büyüklüğü açık soru olarak kalıyor (`/founder-consumer`).

### Engage'in rakipleri (kısa)

- **[Klaviyo](https://www.klaviyo.com/pricing):** Fiyatları herkese açık ve düşük. Shopify tarafında doğal rakip.
- **Türk kökenli kurumsal oyuncular, fiyatları açık değil:** [Insider](https://insiderone.com/insider-one-vs-klaviyo-roi/), [Netmera](https://netmera.com/) (fiyat sayfası 404 verdi) ve [Segmentify](https://segmentify.com/pricing) (fiyat sayfasında rakam yok).

Bu yapı Engage'e bir boşluk bırakıyor olabilir: alt segmentte, fiyatı açık ve TL ile satılan, kurulumu yapılan bir hizmet. Ancak alt segmentte ikas ve Ticimax'ın kendi pazarlama modülleri var mı, araştırılmadı. Bir sonraki turda bakılmalı.

---

## Bu turda yapılmayanlar (dürüst sınırlar)

- Rakiplerin hiçbirinin müşteri yorumu bulunamadı. Şikâyet temaları ve alıntılar yok.
- Global RFQ araçlarının fiyatlarına ve Mailchimp'in fiyatına bakılmadı.
- İhracat destek programlarının yazılım maliyetini karşılayıp karşılamadığına bakılmadı.
- ikas ve Ticimax'ın kendi e-posta/SMS/WhatsApp modüllerine bakılmadı. Engage için en kritik açık soru bu.
- Teklif Robotu, Asistflow ve asistanim.ai ile demo görüşmesi yapılmadı. Gerçek kapsamları satıcının tanıtımından okundu.
