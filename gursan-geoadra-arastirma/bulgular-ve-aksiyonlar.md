# Gürsan Ofis Mobilyaları — GeoAdra Analizi

Hazırlayan: GeoAdra by CallypsoTech · Erişim tarihi: 27 Ekim 2026 · Hedef: https://gursanmobilya.com.tr/

**Etiketler:**
- **Doğrulanmış**: sitede veya kaynakta görüldü, URL'si verildi.
- **Hipotez**: makul bir çıkarım ama kanıtlanmadı.
- **İç veri gerekli**: dışarıdan görülemiyor (CRM, satış, reklam verisi).

> İçerik eksikliği ile AI yanıtlarında görünmeme arasında kanıtlanmış bir neden-sonuç ilişkisi kurulmamıştır. Gerçek AI ölçümü bu çalışmada **henüz çalıştırılmadı** (bkz. §5).

---

## 1. Araştırma kapsamı

| Kalem | Değer |
|---|---|
| Araç | Apify `website-content-crawler` (build 0.3.102), giriş şeması incelendikten sonra çalıştırıldı |
| Seçim | `sitemap_index.xml` (198 ürün, 34 kategori, 18 yazı, 32 sayfa) üzerinden elle seçilmiş **50 benzersiz URL**: 9 kurumsal/özel, 11 kategori, 21 ürün, 9 blog |
| Ayar | Robots kurallarına uyum açık, derinlik 0 (yalnızca listedeki sayfalar), menü/header/footer kaldırıldı, 5+ sayfada tekrar eden satırlar ayıklandı |
| Sonuç | **49 başarılı, 1 başarısız** (`/fashion-01/`: sunucu HTTP 500 döndürdü; elle yeniden denendi, yine 500) |
| Ek doğrulama | 21 ürün sayfasının ham HTML'i ayrıca incelendi; bunun nedeni, okunabilir metin dönüştürücüsünün ölçü tablolarını atlaması |
| Normal web araştırması | Üçüncü taraf profiller, rakip siteleri, ChatGPT reklam koşulları |
| Kayıt | [`tarama-ozeti.json`](tarama-ozeti.json): URL, erişim tarihi, tarama durumu, başlık, tekil metin uzunluğu, özet |

## 2. İş modeli: doğrulananlar

| Rol | Kanıt | Durum |
|---|---|---|
| **Üretici** | "Ofis koltuğu ve metal aksamlar üreterek başladığımız… yüksek kapasitede üretim yapabilen bir tesis" ([hakkımızda](https://gursanmobilya.com.tr/hakkimizda/)); "İstanbul merkezli, yerli üretim" ([ana sayfa](https://gursanmobilya.com.tr/)) | Doğrulanmış (firmanın kendi beyanı). Üretim tesisinin adresi sitede yok: **toplantıda doğrulanacak** |
| **Mağaza / showroom** | "Mağaza Konumları": Altunizade, Mahir İz Cd. No:10, Üsküdar ([iletişim](https://gursanmobilya.com.tr/iletisim/)) | Doğrulanmış |
| **İdari/lojistik merkez** | Hasköy, Beyoğlu; "bugünkü idari ve lojistik merkezimiz olan Hasköy" | Doğrulanmış |
| **Perakende, toptan, ihracat, projelendirme** | "üretim, ihracat, perakende ve toptan satış alanlarına bir yenisini 'projelendirmeyi' ekledik… yurt içi ve yurt dışında büyük ölçekli projeler" (hakkımızda) | Doğrulanmış (beyan). Güncel ağırlıkları **toplantıda doğrulanacak** |
| **Yurt dışı varlık** | İletişim sayfasında "Geon Design – Süleymaniye / Irak"; İngilizce site [/en/](https://gursanmobilya.com.tr/en/) ve USD/EUR seçici | Doğrulanmış (varlık). Geon Design ile ilişkinin niteliği **toplantıda doğrulanacak** |
| **Online satış** | WooCommerce "Sepete Ekle" butonu HTML'de var ama CSS ile gizlenmiş (`display:none`); fiyat gösterilmiyor | **Çalışan online satış kanıtı yok.** Görünen akış teklif ve telefon |
| **Teklif akışı** | Ürün sayfalarında "Teklif Al" açılır formu (İsim, Soyisim, E-posta, Telefon, **Adet**, **Şehir**) + "Ara" (0212 256 62 30) | Doğrulanmış |
| **Katalog akışı** | [Katalog talep formu](https://gursanmobilya.com.tr/katalog-talep-formu/) → teşekkür sayfasında PDF bağlantısı | Doğrulanmış |
| **B2B / B2C** | "Adet" alanı, kurumsal ofis ve genel müdürlük vurguları B2B'yi düşündürüyor; ana sayfada "home office" da geçiyor | Hipotez: **toplantıda doğrulanacak** |
| **Bayi ağı** | Sitede bayi bilgisi bulunamadı | **Toplantıda doğrulanacak** |
| **Hedef müşteri, hizmet bölgesi, öncelikli ürün** | Kesin bir beyan yok | **Toplantıda doğrulanacak** |

**Aynı isimli işletmeler:** "Gür Mobilya" (İnegöl, ev mobilyası; [greatcatalog](https://greatcatalog.net/en/gur-mobilya-b970/)) farklı bir firmadır. Analizde yalnızca gursanmobilya.com.tr ve onun bağlantı verdiği profiller kullanıldı. Firma, kayıtlarda "Gürsan Büro Mobilyaları Metal San. ve Tic. Ltd. Şti." adıyla geçiyor ([LinkedIn](https://tr.linkedin.com/company/g%C3%BCrsan-b%C3%BCro-mobi%CC%87lyalari)); bu unvan sitede yazmıyor.

## 3. GeoAdra bulguları

| # | Gözlem | Kanıt URL'si | Durum | Olası etkisi | Aksiyon | Başarı ölçütü |
|---|---|---|---|---|---|---|
| B1 | İncelenen 21 ürün sayfasının hiçbirinde `Product` yapılandırılmış verisi yok. Kurum şemasında `name` alanı marka adı yerine SEO başlığı ("Ofis Koltukları ve Mobilyaları \| Gursan Mobilya - …"). Adres, telefon ve kuruluş yılı yok; `sameAs` yalnızca Facebook ve Instagram'ı içeriyor | [exec-yonetici-masasi](https://gursanmobilya.com.tr/urun/exec-yonetici-masasi/), [ana sayfa](https://gursanmobilya.com.tr/) | Doğrulanmış | Arama ve AI sistemleri ürün adı, kategori, ölçü ve firma kimliğini yapılandırılmış biçimde alamıyor | Organization + 5 pilot üründe Product şeması (fiyat yoksa `offers` eklenmez) | Şema doğrulayıcıda hatasız; 5/5 pilot ürün |
| B2 | Ürün açıklamaları düzensiz. Calista Pro, Odin ve Ucool'da açıklama yok. Titan Etajer, Moon ve KP13'te yalnızca teklif formu metni var. G-Pod (S) ve G-Pod (L) birebir aynı metni kullanıyor | [calista-pro](https://gursanmobilya.com.tr/urun/calista-pro-yonetici-koltugu/), [odin](https://gursanmobilya.com.tr/urun/odin-toplanti-masasi/), [g-pod S](https://gursanmobilya.com.tr/urun/s-tek-kisilik/), [g-pod L](https://gursanmobilya.com.tr/urun/l-dort-kisilik/) | Doğrulanmış (21 ürünlük örneklem) | "Tek kişilik ve dört kişilik kabin arasındaki fark ne?" gibi soruların cevabı sitede yok | Ürün grubu başına açıklama şablonu | Pilot grupta açıklaması olmayan ürün kalmaması |
| B3 | Ölçü bilgisi masa ve takımlarda var (7/7 ürün tablosu: Exec, Verona, Tefen, Trim ×2, Nord, Odin). İncelenen 14 koltuk, oturma, depolama ve kabin sayfasında ölçü tablosu yok | [exec](https://gursanmobilya.com.tr/urun/exec-yonetici-masasi/), [dove](https://gursanmobilya.com.tr/urun/dove-yonetici-koltugu/) | Doğrulanmış | Ölçüye dayalı karşılaştırma soruları masa dışındaki ürünlerde cevapsız kalıyor | Koltuk ve kabinlere teknik tablo | Pilot sonrası 2. grupta tablo var |
| B4 | Tutarlılık sorunları. Ana sayfada "25+ yıllık üretim tecrübesi" ve "25 yılda 10.000'den fazla ofis", hakkımızda sayfasında 1976 kuruluş yazıyor. Marka adı yerine göre Gürsan Ofis Mobilyaları / Gursan Mobilya / Gürsan Büro olarak geçiyor. İletişim sayfasında "Merkez" başlığı altında Altunizade adresi var. Exec Yönetici Masası açıklaması "Exec Toplantı Masası…" diye başlıyor | [ana sayfa](https://gursanmobilya.com.tr/), [hakkımızda](https://gursanmobilya.com.tr/hakkimizda/), [iletişim](https://gursanmobilya.com.tr/iletisim/), [exec](https://gursanmobilya.com.tr/urun/exec-yonetici-masasi/) | Doğrulanmış | AI özetlerinde çelişkili yıl, adres veya ad görülmesi riski (hipotez) | Tek "marka künyesi" ve tüm sayfalarda aynı bilgiler | Künye onaylanır; 4 çelişki giderilir |
| B5 | Proje ve referans kanıtı görünmüyor. Site "yurt içi ve yurt dışında büyük ölçekli projeler", "referans marka" ve "mimari destek ve özel projeler" diyor; ama sitemap'te ve menüde proje/referans sayfası yok | [hakkımızda](https://gursanmobilya.com.tr/hakkimizda/), [sitemap](https://gursanmobilya.com.tr/page-sitemap.xml) | Doğrulanmış (sayfanın yokluğu). İzin verilebilecek projeler: **iç veri gerekli** | Proje tedarikçisi arayan kurumsal alıcı ve AI, iddiayı doğrulayacak bir vaka bulamıyor | Müşteri onaylı 3 proje vakası | 3 vaka yayında |
| B6 | Blog güçlü bir varlık: 18 yazı; yönetici masası, konferans koltuğu, açık ofis gürültüsü, avukat ofisi, dershane ve banko ölçüsü rehberleri. Yönetici masası rehberinde SSS (Question/Answer) şeması var | [yönetici masası rehberi](https://gursanmobilya.com.tr/yonetici-masasi-modelleri-ve-secim-rehberi/), [açık ofis gürültü](https://gursanmobilya.com.tr/acik-ofiste-gurultu-sorunu-kaynaklar-cozumler-ve-verimlilik-rehberi/) | Doğrulanmış | Bilgilendirme sorularında kaynak gösterilmeye aday içerik | Rehberleri ilgili ürün ve teklif sayfasına bağlamak | Rehberden teklif sayfasına tıklama (iç veri) |
| B7 | Kırık ürün bağlantıları: "En İyi Ofis Sandalyesi Markası" yazısındaki 15 ürün bağlantısından 3'ü 404 veriyor (Active, Range, Relax). Ana sayfa da Active ve Range'den bahsediyor. Konferans rehberi okura "Ankara ve Bursa'daki üreticilerden gelen teklifleri" incelemesini öneriyor | [yazı](https://gursanmobilya.com.tr/en-iyi-ofis-sandalyesi-markasi/), [404 örneği](https://gursanmobilya.com.tr/urun/active-calisma-koltugu/), [konferans rehberi](https://gursanmobilya.com.tr/konferans-koltugu-secim-rehberi/) | Doğrulanmış | Kullanıcı ve tarayıcı için çıkmaz yol; mesaj tutarsızlığı | 3 bağlantı düzeltilir veya yönlendirilir; cümle revize edilir | 0 kırık bağlantı |
| B8 | Tarama hijyeni. Sitemap'te ~19 tema demo/test sayfası var (fashion-01, jewelry-01, skincare-1, plant-1, autopart…). Örneklenen 5 sayfanın 4'ü HTTP 500 veriyor; `/autopart/` Gürsan başlığıyla 200 dönüyor. İç sayfalarda meta açıklama yok. Ana sayfa başlığında yazım hatası var ("Yerli asarımlar") | [page-sitemap](https://gursanmobilya.com.tr/page-sitemap.xml), [autopart](https://gursanmobilya.com.tr/autopart/) | Doğrulanmış | Tarama bütçesi ve marka sinyali gürültüsü (hipotez) | Demo sayfaları kaldır veya noindex yap, sitemap'ten çıkar; meta açıklama ekle | Sitemap'te 0 demo sayfası |
| B9 | Katalog PDF'i **~270 MB** (`content-length: 270.235.577`) | [katalog PDF](https://gursanmobilya.com.tr/wp-content/uploads/2026/08/GRS_Katalog-2027_06.05-DJ.pdf) | Doğrulanmış | Mobilde indirmesi zor; büyük PDF'lerin tarayıcılarca tam işlenmeme ihtimali (hipotez) | Ürün grubu bazında hafif PDF + HTML teknik föy | Grup PDF'leri < 10 MB |
| B10 | Teklif akışı var, ancak kaynağı ölçülüyor mu bilinmiyor. Formdaki gizli alanda `[current_page_url]` ifadesi işlenmeden, düz metin olarak görünüyor | [exec](https://gursanmobilya.com.tr/urun/exec-yonetici-masasi/) (HTML) | Hipotez (talebin hangi ürün sayfasından geldiği kaydedilmiyor olabilir); **iç veri gerekli** | AI'dan gelen ziyaretçi ve talepler ayırt edilemeyebilir | Formda ürün/kaynak alanı + "Bizi nereden duydunuz?" seçeneği ("AI asistanı" dahil) | Pilot süresince kaynak etiketli teklif kaydı |
| B11 | Dil ayarları: /en/ var, ancak TR sayfaların hreflang etiketleri yalnızca `tr` ve `tr-TR`. Menüdeki "French/Japanese" seçeneklerinin karşılığı yok (`/ja/` 404). `/anasayfa-english/` ince bir sayfa | [en](https://gursanmobilya.com.tr/en/), [anasayfa-english](https://gursanmobilya.com.tr/anasayfa-english/) | Doğrulanmış; ihracat önceliği **toplantıda doğrulanacak** | Yabancı alıcı ve İngilizce AI sorgularında eşleşme sorunu (hipotez) | Yalnızca ihracat öncelikse: hreflang tr↔en ve İngilizce pilot sayfalar | — |
| B12 | Üçüncü taraf profiller: LinkedIn (Gürsan Büro Mobilyaları…; ayrıca "Gürsan Geon Ofis Mobilyaları"), Facebook/Instagram `gursanburo`, Manuzone ("Üretici Firma"), Yelp (Altunizade). Adresler kaynaklar arasında farklı (Aynalıkavak / Halıcıoğlu / Hasköy / Altunizade) | [LinkedIn](https://tr.linkedin.com/company/g%C3%BCrsan-b%C3%BCro-mobi%CC%87lyalari), [Manuzone](https://manuzone.com/tr/companies/show/gursan-buro-mobilyalari-metal-sanayi-ve-ticaret-limited-sirketi_VD4Oz2AEO5), [Yelp](https://www.yelp.com/biz/g%C3%BCrsan-b%C3%BCro-mobilyalar%C4%B1-istanbul-3) | Doğrulanmış (arama sonuçlarından; profillerin bir kısmı giriş istiyor) | Dış kaynaklarla sitenin çelişmesi | Künye onaylandıktan sonra profillerin güncellenmesi | Ana profillerde aynı ad, adres ve telefon |
| B13 | Akustik kabin kategori sayfası iyi bir tanıtım metnine sahip. Ürün sayfasında 0,25 sn yankı süresi, 38 mm panel, 4000K ışık ve 2 dakikada bir hava değişimi verilmiş; ses azaltımı (dB), dış ölçü ve kurulum bilgisi yok | [akustik kabinler](https://gursanmobilya.com.tr/urun-kategori/akustik-kabinler/) | Doğrulanmış | Karşılaştırma sorularında (S mi L mi, ne kadar ses keser) somut veri eksik | S/L karşılaştırma tablosu (veriler Gürsan'dan gelir) | Tablo yayında |

## 4. Rakipler

Haber siteleri, dizinler ve "kaynak gösterilen alan adları" rakip sayılmadı. Aşağıdakiler **aday rakiptir**: ürün örtüşmesi ve İstanbul varlığı firmaların kendi sitelerinden kontrol edildi. Müşteri tipi ve ölçek örtüşmesi **toplantıda doğrulanacak**.

| Firma | Kontrol edilen örtüşme | Kaynak |
|---|---|---|
| Özel Metal | Yönetici masası, workstation, toplantı masası; İstanbul (Kağıthane showroom); proje ve teklif | https://www.ozelmetal.com.tr/ |
| Addo | Yönetici masası, akustik, toplantı masası, çalışma koltuğu; İstanbul; export | https://addo.com.tr/ |
| Offe Ofis | Yönetici masası, workstation, toplantı masası; İstanbul (İkitelli); proje | https://www.offeofis.com.tr/ |
| Dianof | Yönetici masası, workstation, toplantı masası, çalışma koltuğu; proje; export | https://dianof.com/ |
| Çalışkan Ofis | Toplantı masası, çalışma koltuğu, akustik; proje; ihracat | https://www.caliskanofis.com/ |
| Nurus (ulusal marka) | Ofis mobilyası ve akustik kabin; İstanbul dahil 10 mağaza (haber kaynağı) | https://www.nurus.com/tr · [Hürriyet](https://www.hurriyet.com.tr/en-cevreci-ofislerin-tercihi-20572514) |

## 5. Müşteri soruları ve ölçüm

### 5.1 Soru seti (13 soru)

Markasız sorulara Gürsan adı eklenmedi. Markalı sorular ayrı değerlendirilecek. Bilgilendirme sorularında markanın anılmaması tek başına başarısızlık sayılmaz.

| # | Amaç | Soru | Dayandığı ürün/içerik | Pilot |
|---|---|---|---|---|
| S1 | Ürün/tedarikçi keşfi | İstanbul'da ofis mobilyası üreten ve ofis yerleşim projesi de yapan hangi firmalarla görüşebilirim? | Üretim + projelendirme beyanı | ✅ |
| S2 | Ürün/tedarikçi keşfi | Yeni ofisim için çalışma masası, yönetici masası ve koltukları tek tedarikçiden alabileceğim İstanbul'daki üreticiler hangileri? | Masalar + ofis koltukları | ✅ |
| S3 | Ürün/tedarikçi keşfi | Açık ofiste telefon görüşmeleri için tek kişilik akustik kabin satan Türk firmaları hangileri? | G-Pod (S) | 2. faz |
| S4 | İhtiyaca uygun çözüm | 20 kişilik açık ofis için workstation masa sistemi seçerken nelere bakmalıyım, hangi üreticileri değerlendirmeliyim? | Trim Workstation | 2. faz |
| S5 | İhtiyaca uygun çözüm | Hukuk bürosu için yönetici masası ve bekleme koltuğu önerir misin? | Avukat ofisi rehberi, yönetici masaları | ✅ |
| S6 | İhtiyaca uygun çözüm | Açık ofiste 4 kişilik toplantı kabini mi, küçük bir toplantı odası mı daha uygun olur? | G-Pod (L), gürültü rehberi | 2. faz |
| S7 | Karşılaştırma (markalı) | Gürsan Ofis Mobilyaları hangi ürünleri üretiyor, nasıl bir firma? | Kurumsal bilgiler | ✅ |
| S8 | Karşılaştırma (markalı) | Yönetici masası için Gürsan Ofis Mobilyaları ile [toplantıda doğrulanan rakip] arasında nasıl seçim yapmalıyım? | Yönetici masaları | Rakip onayından sonra |
| S9 | Proje/teklif | İstanbul'da 50 kişilik bir ofis için mobilya teklifi almak istiyorum; projelendirme desteği veren üreticiler kimler? | Teklif formu, projelendirme | ✅ |
| S10 | Proje/teklif | Genel müdür makam odası için yönetici takımı ve toplantı masasını birlikte alabileceğim firmalar hangileri? | Exec/Verona/Tefen takımları | ✅ |
| S11 | Bilgilendirme | Yönetici masası seçerken ölçü, malzeme ve depolama açısından nelere dikkat etmeliyim? | Yönetici masası rehberi | ✅ |
| S12 | Bilgilendirme | Açık ofiste gürültüyü azaltmak için hangi mobilya çözümleri kullanılabilir? | Gürültü rehberi | 2. faz |
| S13 | Bilgilendirme | Resepsiyon bankosu için standart yükseklik ve ölçüler nelerdir? | Banko ölçüleri yazısı | 2. faz |

**İlk pilot (7 soru, odak: yönetici masaları ve makam takımları + proje talebi):** S1, S2, S5, S7, S9, S10, S11. Gerekçe: sitedeki en güçlü kanıt bu grupta (ölçü tabloları, rehber, SSS şeması), ve kurumsal teklif akışına doğrudan bağlanıyor. Ürün grubu **toplantıda onaylanacak**.

### 5.2 Ölçüm durumu

**Ölçüm planı hazır, henüz çalıştırılmadı.** Bu ortamda ChatGPT, Gemini veya Claude için ölçüm amaçlı sağlayıcı erişimi tanımlı değil. Hiçbir görünürlük puanı veya AI yanıtı üretilmedi.

| Alan | Plan |
|---|---|
| Platformlar | OpenAI (web araması açık), Google Gemini (Google Search grounding açık), Anthropic Claude (web araması açık); erişime göre Perplexity |
| Tekrar | Pilot: 7 soru × 3 platform × 3 tekrar = **63 beklenen yanıt** |
| Kayıt | Tarih/saat, platform, model kimliği, web araması açık mı, soru metni, ham yanıt, kaynak URL'leri, çağrı durumu (geçerli/başarısız) |
| Metrikler (ayrı raporlanır) | (1) **Marka anılması**: yanıtta Gürsan geçiyor mu; (2) **Açık öneri**: Gürsan görüşülecek veya tercih edilecek firma olarak önerilmiş mi; (3) **Kaynak gösterilme**: gursanmobilya.com.tr kaynak listesinde mi; (4) anılan diğer firmalar |
| Paydalar | Oranlar yalnızca **geçerli yanıtlar** üzerinden hesaplanır; "geçerli / beklenen" sayısı her zaman gösterilir. Başarısız çağrılar sıfır görünürlük sayılmaz |
| Uyarılar | API sonuçları ChatGPT, Gemini ve Claude tüketici uygulamalarındaki sonuçlarla birebir aynı değildir. 63 yanıtlık örneklem pazarın tamamını temsil etmez. Önce-sonra karşılaştırması aynı soru seti ve aynı yöntemle yapılır |

## 6. Öncelikli aksiyonlar (5)

### A1. Yönetici masası sayfalarını "karar sayfasına" çevirmek (pilot)
- **Soru:** S2, S10, S11 · **Ürün:** Exec, Verona, Tefen (Yönetici Masaları kategorisi)
- **Kanıt:** Ölçü tabloları var (B3), Product şeması yok (B1), Exec metninde ad hatası var (B4)
- **Doğrulanacak varsayım:** Bu grup Gürsan'ın büyütmek istediği gruplardan biri
- **Öncesi (sitedeki metin):** "Exec Toplantı Masası, ince çizgileri, gösterişli ahşap kaplama renkleriyle ve keskin hatlı ayak yapısıyla dikkat çekici bir tasarımdır… Etajerinde elektronik kilit sistemi ve çekmecelerinde teleskopik frenli ray sistemi kullanılmıştır. Ayrıca… elektronik açılıp kapanan masa üstü priz sistemi bulunmaktadır."
- **Sonrası (taslak; köşeli parantezli alanlar Gürsan onayı bekliyor):**
  > **Exec Yönetici Masası — makam odası takımı**
  > Exec; yönetici masası, etajer, sehpa, konsol, dolap ve toplantı masasından oluşan bir makam takımıdır.
  > **Ölçüler:** Masa 240×100×75 cm · Etajer 80×80×65 / 180×60×65 cm · Sehpa 70×70×45 / 110×60×45 cm · Konsol 180×40×95 / 240×40×95 cm · Dolap 100×40×150 / 120×40×210 / 200×40×200 cm · Toplantı masası 240×110×75 cm · Toplantı eki 150×100×75 cm
  > **Detaylar:** Ahşap kaplama yüzey; etajerde elektronik kilit; çekmecelerde teleskopik frenli ray; elektronik açılır masa üstü priz.
  > **Kimler için:** [Gürsan onayı: ör. genel müdür odası, toplantı alanı olan makam odaları]
  > **Seçenekler:** [kaplama renkleri, özel ölçü imkânı: Gürsan onayı]
  > **Teklif:** Adet ve şehir bilgisiyle teklif isteyin; showroom: Altunizade [ziyaret koşulları: Gürsan onayı].
- **Gerekli bilgi / sorumlu:** Kaplama seçenekleri, özel ölçü politikası, hedef kullanım → Gürsan ürün/satış sorumlusu. Metin ve şema taslağı → GeoAdra. Yayın → Gürsan web sorumlusu
- **Uygulama:** 3 sayfa metni + Product şeması + rehberden bağlantı
- **Başarı ölçütü:** 3/3 sayfa yayında ve şema hatasız; S2, S10 ve S11'de yeniden ölçüm (aynı yöntem)

### A2. Tek marka künyesi + Organization şeması
- **Soru:** S1, S7 · **Kanıt:** B1, B4, B12
- **Taslak künye alanları:** Marka adı: Gürsan Ofis Mobilyaları · Unvan: [Gürsan Büro Mobilyaları Metal San. ve Tic. Ltd. Şti.: doğrulanacak] · Kuruluş: 1976 (hakkımızda) · Merkez: Hasköy, Beyoğlu · Showroom: Altunizade, Üsküdar · Telefonlar · Faaliyet: üretim, projelendirme, perakende/toptan, ihracat · Profiller: LinkedIn, Instagram, Facebook
- **Öncesi:** "25+ yıllık üretim tecrübesi" · **Sonrası (taslak):** "1976'dan bu yana İstanbul'da ofis mobilyası üretimi" [ifade Gürsan onayıyla]
- **Sorumlu:** Gürsan yönetimi (onay), GeoAdra (taslak) · **Ölçüt:** 4 çelişki giderildi; şema hatasız; S7'de doğru bilgi oranı

### A3. Proje/referans vaka sayfaları
- **Soru:** S1, S9 · **Kanıt:** B5
- **Taslak şablon:** Proje tipi · Şehir · Metrekare veya kişi sayısı · Kullanılan ürün grupları (ürün sayfası bağlantılı) · Gürsan'ın rolü (üretim / projelendirme / montaj) · Müşteri onayıyla isim veya anonim · Görseller
- **Gerekli bilgi:** İzinli 3 proje → Gürsan satış/proje ekibi · **Ölçüt:** 3 vaka yayında; S1 ve S9'da kaynak gösterilme kontrolü

### A4. Akustik kabin S/L karşılaştırması (2. faz)
- **Soru:** S3, S6, S12 · **Kanıt:** B2, B13
- **Öncesi:** İki üründe aynı metin · **Sonrası (taslak tablo):** Kapasite (S: tek kişi / L: dört kişi, sitede) · Yankı süresi 0,25 sn (sitede) · Panel 38 mm çift katman alüminyum petek (sitede) · Aydınlatma 4000K (sitede) · Havalandırma: hava 2 dakikada bir yenilenir (sitede) · Dış ölçü [Gürsan] · Ses azaltımı dB [test raporu varsa] · Elektrik/priz [Gürsan] · Kurulum [Gürsan]
- **Ölçüt:** Tablo yayında; kanıtsız performans iddiası yok

### A5. Teknik hijyen paketi
- **Kanıt:** B7, B8, B9, B10
- **Adımlar:** 3 kırık bağlantıyı düzelt · demo sayfaları sitemap'ten çıkar ve noindex yap veya sil · pilot sayfalara meta açıklama yaz · başlık yazım hatasını düzelt · ürün grubu bazında hafif katalog · formda kaynak/ürün alanı
- **Sorumlu:** Gürsan web sorumlusu/ajansı · **Ölçüt:** 0 kırık bağlantı, sitemap'te 0 demo sayfası, form kayıtlarında kaynak alanı dolu

## 7. ChatGPT reklamları (organik görünürlükten ayrı)

**Uygunluk durumu: resmî kaynaktan doğrulanamadı.**
- OpenAI'ın resmî sayfaları ([help.openai.com, ChatGPT ads availability](https://help.openai.com/en/articles/20001245-chatgpt-ads-availability), [openai.com, 26 yeni ülke](https://openai.com/index/chatgpt-ads-expands-26-new-countries/)) bu çalışma ortamından HTTP 403 verdi ve okunamadı.
- İkincil kaynaklar Türkiye'nin Eylül 2026'da Ads Manager self-servis listesine eklendiğini bildiriyor ([soku.ai](https://soku.ai/blog/chatgpt-ads-israel-saudi-turkey-uae-expansion), [detartech](https://detartech.com/en/blog/chatgpt-ads-turkiye-openai-advertising-guide)). Aynı kaynaklara göre uygunluk reklamveren tüzel kişinin ülkesine bağlı, reklamlar Free/Go kullanıcılarına gösteriliyor ve sağlık/finans/hukuk gibi kategoriler kısıtlı. Bunlar **doğrulanmamış** bilgilerdir.
- **Yapılacak:** Toplantıdan önce ads.openai.com ve help.openai.com Türkiye satırı tarayıcıdan elle kontrol edilmeli. Hesap ülkesi, para birimi ve saat dilimi sonradan değiştirilemeyebilir; bu da kontrol edilmeli.
- GeoAdra yalnızca analiz ve taslak hazırlar; reklam yayınlamaz, satış artışı garantisi vermez. Reklam formatı ve karakter sınırları resmî spesifikasyon okunduktan sonra uyarlanacaktır.

| Yaklaşım | İlgili soru | Başlık taslağı | Metin taslağı | Hedef sayfa |
|---|---|---|---|---|
| R1: Kurumsal ofis projesi | S1, S9 | İstanbul'da ofis mobilyası üretimi ve projelendirme | 1976'dan bu yana İstanbul'da üretim. Masa, koltuk ve depolama ürünlerini tek tedarikçiden görün; adet ve şehir bilgisiyle teklif isteyin. [1976 ifadesi künye onayına bağlı] | Önerilen: A3 sonrası "Kurumsal projeler" sayfası; geçici: [Ürün grupları](https://gursanmobilya.com.tr/magaza/) |
| R2: Makam odası / yönetici takımı | S10, S11 | Yönetici masası ve makam takımları | Masa, etajer, konsol ve toplantı masası ölçüleriyle Exec, Verona ve Tefen takımlarını inceleyin; Altunizade showroom'u ziyaret edin veya teklif isteyin. | [Yönetici masaları](https://gursanmobilya.com.tr/urun-kategori/masalar/yonetici-masalari/) (A1 sonrası) |

Kanıtsız fiyat, teslimat süresi, stok, ergonomi sertifikası veya "en iyi" iddiası kullanılmamıştır.

## 8. 30 günlük pilot

| Hafta | İş | Çıktı |
|---|---|---|
| 1 | Ürün grubu, soru seti ve rakip listesinin onayı; **başlangıç ölçümü** (7 soru × 3 platform × 3 tekrar) | Ham yanıt kayıtları, geçerli/beklenen yanıt sayısı |
| 2 | A1 + A2 taslaklarının Gürsan onayına sunulması; Gürsan ekibinin yayınlaması | 3 ürün sayfası + künye |
| 3 | Şema doğrulama, kırık bağlantılar, sitemap temizliği, form kaynak alanı | Teknik kontrol listesi |
| 4 | **Aynı soru seti ve yöntemle yeniden ölçüm**; önce-sonra raporu | Ayrı ayrı anılma, öneri ve kaynak gösterilme oranları |

**Başarı ölçütleri:** (1) Onaylanan içerikler yayında ve şema hatasız; (2) iki ölçümde de geçerli yanıt oranı ≥ %90; (3) anılma, öneri ve kaynak gösterilme oranlarının yönü raporlanır, önceden sayısal hedef konmaz; (4) kaynak etiketli teklif sayısı (iç veri, Gürsan paylaşırsa).
**Not:** 30 gün, AI sistemlerinin yeni içeriği işlemesi için kısa olabilir. Değişim görülmemesi içeriğin etkisiz olduğunu kanıtlamaz; değişim görülmesi de satış artışı anlamına gelmez.

## 9. Ek fırsat (kısa)
Teklif formu sonrası takip süreci zorlanıyorsa (toplantıda doğrulanırsa) Callypso'nun mesajlaşma/otomasyon ürünleri ayrı bir konu olarak konuşulabilir. Bu sunumun odağı GeoAdra'dır.
