# Boyut Plastik — GeoAdra Müşteri Analizi

Hazırlayan: GeoAdra by CallypsoTech · Erişim / analiz tarihi: 10 Kasım 2026
Hedef site: https://boyutplastik.com.tr/

> Akış: Kanıt → Fırsat → İş etkisi → Önerilen aksiyon → Ölçüm.
> Bu rapordaki AI görünürlüğü bölümü bir **ölçüm planıdır**; henüz hiçbir AI platformunda ölçüm çalıştırılmadı.

---

## 1. Kısa yönetici özeti

- Boyut Plastik, mobilya ve kapı üretiminde kullanılan **PVC, ABS ve PP kenar bandı** üreten, Alim Grup bünyesinde (2010'dan beri) çalışan, 2005 kuruluşlu, İstanbul Hadımköy/Arnavutköy merkezli bir **B2B üreticidir**. Site ve katalog 50'den fazla ülkeye ihracat beyan ediyor.
- Sitenin en değerli varlığı **"Bant Bulucu"**: ~24 panel üreticisinin (Kastamonu Entegre, Yıldız Entegre, Egger, Kronospan, AGT, Çamsan, Starwood vb.) dekorlarını Boyut ürün koduna eşleyen araç. Sitemap'te bunun için 346 ayrı sayfa var. Bu sayfalarda yalnızca dekor adı, panel kodu, Boyut kodu ve desen tipi var. Kalınlık, genişlik, malzeme seçeneği veya talep yönlendirmesi yok.
- Ürün kategori sayfalarındaki açıklama metinleri kısa (çoğu 1–2 cümle). Kalınlık, genişlik, rulo, yüzey seçenekleri gibi teknik bilgiler sitede HTML metni olarak yok; bir kısmı yalnızca İngilizce PDF katalogda (ör. stok programı 0,4 mm ve 0,8 mm).
- Yapılandırılmış veri (schema.org), canonical ve hreflang etiketleri yok. İngilizce içerik yalnızca tek bir sayfada (`/main-page`); ürün sayfaları yalnızca Türkçe. Sitemap'te listelenen 3D, Platinum ve Boyanabilir kenar bandı sayfaları başlıksız ve boş dönüyor.
- Sitede "teklif al" ya da "numune talebi" akışı görülmedi; talep kanalı genel iletişim formu, telefon ve e-posta. Bayi Girişi bağlantısı var, yani bayi/distribütör yapısı mevcut.
- **En güçlü 5 fırsat:** (1) Bant Bulucu eşleşme sayfalarını AI'ın okuyabileceği ürün sayfalarına dönüştürmek, (2) PVC/ABS/PP kategori sayfalarına teknik bilgi ve SSS eklemek, (3) İngilizce ihracat ve tedarikçi sayfaları, (4) PVC–ABS–PP seçim rehberi, (5) numune/teklif talep akışı ile şema işaretlemesi.
- İçerik eksikliği ile AI platformlarında görünmeme arasında **nedensellik kanıtı yok**. Pilotun amacı bunu aynı soru seti ve aynı yöntemle önce ve sonra ölçmek.

---

## 2. Tarama yöntemi ve durumu

| Adım | Sonuç |
|---|---|
| Apify `website-content-crawler` giriş şeması (build 0.3.102) | İncelendi. `maxCrawlPages`, `respectRobotsTxtFile`, `removeElementsCssSelector` vb. kullanıldı |
| robots.txt | `User-agent: * / Allow: /`. Kısıt yok, tarama robots'a uyumlu yapıldı |
| Çalıştırma 1 — `cheerio` | **Başarısız.** 9/9 istek TLS el sıkışma hatası verdi. Platform "SUCCEEDED" gösterse de 0 sayfa alındı, başarılı sayılmadı |
| Çalıştırma 2 — `playwright:firefox` | **Başarılı.** 50/50 benzersiz sayfa, HTTP 200 |
| Menü/footer/çerez metni | `nav, footer, header` kaldırıldı. Her sayfada tekrar eden çerez uyarısı kayıtlardan ayıklandı |
| Ek doğrulama | Apify metninin boş kaldığı sayfalar (İletişim, Bant Bulucu, Kataloglar, ürün listeleri) doğrudan HTML'den kontrol edildi. `sitemap.xml` (838 URL) ve 2026 İngilizce katalog PDF'i (16 sayfa) okundu |
| Kayıtlar | `tarama-kayitlari.json`: her sayfa için URL, erişim tarihi, HTTP durumu, başlık, meta açıklama, temizlenmiş metin uzunluğu ve özet |

Sınırlar: 50 sayfa sınırı yüzünden 346 Bant Bulucu detay sayfasının yalnızca örnekleri incelendi. Mobil uygulama (katalogda App Store ve Google Play'de olduğu yazıyor) incelenmedi. Sitede uygulama bağlantısı bulunamadı.

---

## 3. İş modeli — doğrulama tablosu

| Konu | Bulgu | Kanıt | Durum |
|---|---|---|---|
| Üretici mi? | PVC, ABS ve PP termoplastik kenar bandı üreticisi. Ekstrüzyon, baskı ve gofraj hatları var | [Ana sayfa](https://boyutplastik.com.tr/), [Şirket Profili](https://boyutplastik.com.tr/kurumsal/sirket-profilimiz), [Katalog 2026](https://boyutplastik.com.tr/uploads/main/260303152042_boyut-katalog-ing-2026-h.pdf) | Doğrulanmış (firma beyanı) |
| Kendi markası | "Boyut markasıyla ürettiğimiz" kenar bandı ve dekoratif folyo | [Intermob 2022](https://boyutplastik.com.tr/medya/fuarlar/intermob-2022) | Doğrulanmış (2022 beyanı) |
| Ürün grupları (menüde) | PVC ve ABS altında: Düz Renk, Desen, High Gloss Düz, High Gloss Desen, Fantezi, Simli, Soft Touch. Ayrıca Textures (16 doku kodu) | [Ürünler](https://boyutplastik.com.tr/urunler/kenar-bandi), [Bant Bulucu](https://boyutplastik.com.tr/bant-bulucu) | Doğrulanmış |
| PP kenar bandı | Ana sayfada ve katalogda var, ürün menüsünde ayrı sayfası yok | Ana sayfa, Katalog | Doğrulanmış, sayfası yok |
| 3D, Platinum, Boyanabilir, PMMA, dekoratif folyo | Sitemap'te URL'leri var ama sayfalar boş. PMMA yalnızca Guangzhou 2025 haberinde, folyo 2022 haberinde geçiyor | [sitemap.xml](https://boyutplastik.com.tr/sitemap.xml), [Guangzhou 2025](https://boyutplastik.com.tr/medya/fuarlar/boyut-plastik-interzum-guangzhou-2025te-kuresel-gucunu-sergiledi) | **Toplantıda doğrulanacak** (güncel ürün mü?) |
| B2B müşteri tipi | Mobilya üreticileri ve distribütörler. Mobilya ve kapı üretimi | Ana sayfa, Şirket Profili | Doğrulanmış |
| B2C | Sitede perakende satış görülmedi | — | B2C yok (dışarıdan görünen) |
| Online satış | Sepet yok. Ana sayfada bir ödeme sistemi giriş bağlantısı (Moka POS) var, bu online satış kanıtı sayılmadı | Ana sayfa HTML | Online satış yok / ödeme kanalının amacı toplantıda doğrulanacak |
| Bayi / distribütör | "Bayi Girişi" bağlantısı var. Kalite politikasında "bayilerimiz" geçiyor. Sırbistan'da Boyut Import-Export D.o.o. dağıtım yapıyor | [Kalite Politikası](https://boyutplastik.com.tr/kurumsal/politikalarimiz/kalite-politikasi), Katalog | Doğrulanmış. Bayi yapısının ayrıntısı toplantıda doğrulanacak |
| Özel üretim | "Özel müşteri projeleri", "customized, customer-specific solutions", özel talepler için dilimlenmemiş stok | Ana sayfa, Katalog | Doğrulanmış (beyan). Kapsamı ve MOQ toplantıda doğrulanacak |
| İhracat | 50+ ülke. Avrupa ve Balkanlar öncelikli, Orta Doğu da var. EN meta açıklamasında "üretimin yarısı ihraç ediliyor" yazıyor | Ana sayfa, CEO Mesajı, [EN sayfa](https://boyutplastik.com.tr/main-page) | Doğrulanmış (beyan). Ülke listesi sitede metin olarak yok ([İhracat Noktaları](https://boyutplastik.com.tr/kurumsal/ihracat-noktalari) boş) |
| Lojistik | Karadağ Bar Serbest Bölgesi'nde 12.000 m² depo (Alim Grup), Belgrad'da 2.000 m² tesis | [Tarihçe](https://boyutplastik.com.tr/kurumsal/tarihce), Katalog | Doğrulanmış (beyan) |
| Kapasite | EN meta: yıllık 7 bin ton. TR ana sayfa: "Türkiye'nin en büyük ikinci" kapasitesi. Katalog: 25.000 m² kapalı alan. Tarihçe: 20 bin m² (2016, grup binası) | EN sayfa, Ana sayfa, Katalog, Tarihçe | **Toplantıda doğrulanacak.** Rakamlar sayfalar arasında farklı ve bağımsız kaynakla doğrulanmadı |
| Stok / kalınlık | Hazır stok programı çoğunlukla 0,4 mm ve 0,8 mm. ~8.000 dekor arşivi, 1.000+ baskı silindiri | Katalog s. 5 | Doğrulanmış (beyan). Genişlik ve rulo seçenekleri sitede yok |
| Yüzeyler | Super Matt, Soft Touch, High Gloss, Embossed. Matt'tan Mirror Gloss'a kadar parlaklık seviyesi | Katalog | Doğrulanmış (beyan) |
| Belgeler | Kataloglar sayfasında "Yeşil Enerji Sertifikası" görseli var. ISO vb. sertifika sitede görülmedi | [Kataloglar](https://boyutplastik.com.tr/kataloglar) | Sertifikalar **toplantıda doğrulanacak** (eksik kabul edilmedi) |
| Hedef bölge, MOQ, fiyat, teslim süresi | Sitede yok | — | Toplantıda doğrulanacak / iç veri gerekli |
| Yasal unvan | Fuar kataloğunda "BOYUT PL.PROFİL VE FOLYO İML.SAN.TİC.A.Ş." | [Intermob katılımcı sayfası](https://www.intermobistanbul.com/en/exhibitor-list/boyut-plprofil-ve-folyo-imlsanticas-149369-3175) | Üçüncü taraf kaynak. Toplantıda doğrulanacak |

İletişim (sitede açık): Ömerli Mah. Arefe Sok. 21-23 Arnavutköy 34555 İstanbul · +90 850 425 22 98 · boyut@boyutplastik.com.tr ([İletişim](https://boyutplastik.com.tr/iletisim)).

Karıştırılmaması gerekenler: "Boyut" adlı başka plastik/ambalaj firmaları bu analize dahil edilmedi. Footer'daki lizbon.com.tr bağlantısı web ajansı olarak görünüyor, analize dahil edilmedi.

---

## 4. GeoAdra bulguları

Format: Gözlem | Kanıt URL'si | Durum | Olası etkisi | Aksiyon | Başarı ölçütü

| # | Gözlem | Kanıt | Durum | Olası etkisi | Aksiyon | Başarı ölçütü |
|---|---|---|---|---|---|---|
| G1 | Ürün kategori sayfalarındaki açıklamalar 1–2 cümle; teknik özellik metni yok | [PVC](https://boyutplastik.com.tr/urunler/kenar-bandi/pvc-kenar-bandi), [ABS](https://boyutplastik.com.tr/urunler/kenar-bandi/abs-kenar-bandi), [Simli](https://boyutplastik.com.tr/urunler/kenar-bandi/pvc-kenar-bandi/simli) | Doğrulanmış | AI yanıtlarında ürünün nasıl tarif edileceğine dair kaynak az olabilir (hipotez) | Kategori başına teknik tablo, kullanım alanı ve SSS | Onaylı içerik yayında + yeniden ölçümde ilgili sorularda kaynak gösterilme |
| G2 | Bant Bulucu: 346 eşleşme sayfası, her biri panel dekoru → Boyut kodu | [Bant Bulucu](https://boyutplastik.com.tr/bant-bulucu), [örnek: Keas Cappucino](https://boyutplastik.com.tr/bant-bulucu/keas-cappucino) | Doğrulanmış | "X dekoruna uyumlu kenar bandı" gibi sorular için güçlü ve benzersiz kaynak | Sayfa başlığı, açıklama metni, malzeme/kalınlık seçenekleri, talep butonu | Pilot dekor sayfalarında yeniden ölçümde anılma/kaynak gösterilme |
| G3 | Yapılandırılmış veri (Organization, Product) yok; canonical, hreflang, og etiketleri yok | Ana sayfa ve ürün sayfaları HTML | Doğrulanmış | Kurumsal kimlik ve ürün bilgisinin makinece okunması zorlaşabilir (hipotez) | Organization + Product + BreadcrumbList şeması | Şema doğrulama aracında hatasız |
| G4 | İngilizce yalnızca `/main-page`. Ürün sayfaları ve ihracat bilgisi yalnızca TR, 2026 katalog yalnızca EN | [EN sayfa](https://boyutplastik.com.tr/main-page), [Kataloglar](https://boyutplastik.com.tr/kataloglar) | Doğrulanmış | 50+ ülkedeki alıcıların İngilizce sorularında kaynak sınırlı olabilir (hipotez) | Öncelikli ürünler için EN sayfalar + hreflang | EN pilot sorularında kaynak gösterilme |
| G5 | "İhracat Noktaları" sayfasında metin içerik yok | [İhracat Noktaları](https://boyutplastik.com.tr/kurumsal/ihracat-noktalari) | Doğrulanmış | Hizmet verilen bölge bilgisi okunamıyor | Bölge/ülke listesi, lojistik (Bar, Belgrad) metni | Sayfa metin olarak indeksleniyor |
| G6 | Sitemap'teki 3D, Platinum, Boyanabilir sayfaları boş | [sitemap.xml](https://boyutplastik.com.tr/sitemap.xml) | Doğrulanmış | Tarayıcılar boş sayfa görüyor | Güncel ürünse içerik, değilse sitemap'ten çıkar | Boş URL sayısı 0 |
| G7 | Meta açıklamalar genel ("Düz Kenar Bantları \| Boyut Plastik") | Ürün sayfaları | Doğrulanmış | Arama ve AI özetlerinde ayırt edici bilgi az | Sayfa bazlı açıklama | Tüm ürün sayfalarında özgün meta |
| G8 | Teklif/numune akışı görülmedi; genel form + telefon + e-posta | [İletişim](https://boyutplastik.com.tr/iletisim) | Doğrulanmış (dışarıdan) | AI'dan gelen alıcının talebe geçişi uzun olabilir. Gerçek talep kanalları iç veri gerektiriyor | Ürün ve Bant Bulucu sayfalarında "Numune / Teklif İste" formu | Form gönderimleri (analitik erişimi varsa) |
| G9 | Kapasite ve konum beyanları sayfalar arasında farklı (7 bin ton, 25.000 / 20.000 m², "en büyük ikinci") | Ana sayfa, EN sayfa, Katalog, Tarihçe | Doğrulanmış (tutarsızlık) | AI yanıtlarında çelişkili rakam görülebilir (hipotez) | Tek, onaylı "kurumsal künye" metni | Tüm sayfalarda aynı rakamlar |
| G10 | Kalite/çevre/İSG politikaları var. Sertifika numarası, test standardı sitede yok | [Kalite Politikası](https://boyutplastik.com.tr/kurumsal/politikalarimiz/kalite-politikasi) | İç veri gerekli | Tedarikçi değerlendirmesinde belge sorusu sık geçer (hipotez) | Varsa belgeleri sayfa olarak yayınla | Onaylı belge sayfası |
| G11 | Fuar haberleri düzenli (Interzum Köln/Guangzhou 2025, Intermob 2025) | [Fuarlar](https://boyutplastik.com.tr/medya/fuarlar) | Doğrulanmış | Üçüncü taraf fuar kayıtlarıyla tutarlı kurumsal iz | Haberlerden ürün sayfalarına iç bağlantı | İç bağlantı sayısı |
| G12 | Mobil "edgeband finder" uygulaması katalogda var; sitede bağlantısı yok | Katalog s. 16 | Doğrulanmış (katalog) / Hipotez (uygulama durumu) | Kullanılmayan keşif kanalı olabilir | Siteye uygulama bağlantısı | Toplantıda doğrulanacak |

Not: CRM, reklam performansı, üretim kapasitesi, fiyat ve satış süreçleri dışarıdan görünmüyor. Bunlar "eksik" sayılmadı, "iç veri gerekli" olarak işaretlendi.

---

## 5. Müşteri soruları (14) ve pilot seti

Markasız keşif sorularına Boyut Plastik adı eklenmedi. Markalı sorular ayrı tutuldu.

| # | Amaç | Soru | Dil | Pilot |
|---|---|---|---|---|
| S1 | Üretici keşfi | Türkiye'de PVC kenar bandı üreten firmalar hangileri? | TR | ✔ |
| S2 | Üretici keşfi | Which Turkish manufacturers supply ABS edgebanding to furniture makers in Europe? | EN | ✔ |
| S3 | Tedarikçi keşfi | İstanbul'da mobilya üretimi için toptan kenar bandı tedarik edebileceğim üreticiler hangileri? | TR | |
| S4 | Tedarikçi keşfi | Edgeband supplier with stock in Serbia or the Balkans for a furniture factory? | EN | ✔ |
| S5 | Malzeme seçimi | Mobilya için PVC mi ABS mi kenar bandı tercih edilmeli? Farkları neler? | TR | ✔ |
| S6 | Ürün seçimi | Kastamonu Entegre veya Egger dekorlarıyla birebir uyumlu kenar bandını nasıl bulurum? | TR | ✔ |
| S7 | Ürün seçimi | High gloss veya süper mat panel için kenar bandı seçerken nelere dikkat etmeliyim? | TR | |
| S8 | Teknik | PP kenar bandı nedir, hangi projelerde tercih edilir? | TR | |
| S9 | Karşılaştırma | Kenar bandı tedarikçilerini renk uyumu, stok ve teslimat açısından nasıl karşılaştırırım? | TR | |
| S10 | Özel üretim | Panel numunesine göre özel renk eşleştirmeli kenar bandı üreten Türk firmaları hangileri? | TR | ✔ |
| S11 | Toptan/teklif | Kenar bandı siparişinde minimum sipariş, rulo uzunluğu ve kalınlık seçenekleri nasıl değerlendirilir? | TR | |
| S12 | Teknik | 0,4 mm ile 0,8 mm kenar bandı arasındaki fark nedir, hangi mobilyada hangisi kullanılır? | TR | |
| M1 | Markalı | Boyut Plastik hangi kenar bandı ürünlerini üretiyor? | TR | ✔ (marka kontrolü) |
| M2 | Markalı | Is Boyut Plastik a reliable edgeband supplier for export to Europe? | EN | ✔ (marka kontrolü) |

Pilot seti: 6 markasız (S1, S2, S4, S5, S6, S10) + 2 markalı kontrol (M1, M2). S5 ve S12 bilgilendirme sorusudur, marka anılmaması başarısızlık sayılmaz.

---

## 6. AI ölçümü

**Durum: Ölçüm planı hazır, henüz çalıştırılmadı.** Bu oturumda ChatGPT, Gemini veya Claude için ölçüm amaçlı sağlayıcı erişimi tanımlı değildi. Bu yüzden hiçbir görünürlük puanı veya AI yanıtı üretilmedi.

Ölçüm planı:
- Platformlar: ChatGPT (OpenAI API, web araması açık), Gemini (Google arama desteği açık), Claude (web araması açık). İsteğe bağlı olarak Perplexity.
- Her soru × her platform × 3 tekrar. TR sorular TR, EN sorular EN.
- Kayıt alanları: tarih/saat, platform, model kimliği, web araması açık/kapalı, soru, ham yanıt, kaynak URL'leri, hata durumu.
- Metrikler (ayrı ayrı): **Anılma** (Boyut Plastik adı geçiyor mu), **Önerilme** (seçenek olarak öneriliyor mu), **Kaynak gösterilme** (boyutplastik.com.tr bağlantısı var mı), rakiplerin anılması.
- Geçerlilik: Raporda "geçerli yanıt / beklenen yanıt" gösterilir (ör. 70/72). Başarısız çağrılar sıfır görünürlük sayılmaz.
- Uyarılar: API sonuçları tüketici uygulamalarındaki sonuçlarla birebir aynı değildir. 8 soruluk örneklem pazarı temsil etmez. Yeniden ölçüm aynı soru seti, aynı ayarlar ve aynı tekrar sayısıyla yapılır.

---

## 7. Rakipler (ürün ve müşteri tipi benzer, Türkiye merkezli kenar bandı üreticileri)

Haber siteleri, dizinler ve fuar platformları rakip sayılmadı, yalnızca kaynak olarak kullanıldı. AI görünürlüğü karşılaştırması yapılmadı (ölçüm yok).

| Firma | Web | Ortak ürünler | Müşteri tipi / bölge | Dışarıdan görülen içerik | Kaynak | Doğrulama |
|---|---|---|---|---|---|---|
| EGGER Dekor A.Ş. (ROMA kenar bantları) | egger.com | PVC, ABS (ayrıca PMMA, alüminyum) | Mobilya üreticileri. Gebze üretimi, 70+ ülke (üçüncü taraf beyanı) | EGGER global sitesinde ayrı kenar bandı ürün sayfaları var | [EGGER edging](https://www.egger.com/edging), [Yapı Kataloğu](https://yapikatalogu.com/en/roma-kenar-bantlari) | Doğrulanmış (üretim ve ürün). Rakamlar üçüncü taraf beyanı |
| TECE | [tece.com.tr](https://tece.com.tr/en) | PVC, ABS, alüminyum kenar bandı | Mobilya üreticileri. Bursa | EN site, kod ile arama, WhatsApp bağlantısı, ISO 9001/45001 ifadesi, Organization şeması (HTML'de görüldü) | [tece.com.tr/en](https://tece.com.tr/en) | Doğrulanmış (site) |
| Portakal Plastik | Resmî site doğrulanamadı | PVC, ABS, akrilik kenar bandı | Çayırova/Kocaeli. 60+ ülke (beyan) | — | [Intermob katılımcı sayfası](https://www.intermobistanbul.com/en/exhibitor-list/portakal-plastik-uretim-paz-san-ve-tic-as-149159-3175) | Kısmen doğrulanmış (üçüncü taraf) |
| Berkfa | Site erişilemedi | Ön yapıştırmalı PVC kenar bandı (beyan) | — | — | Yalnızca arama özeti | **Aday, doğrulanmadı.** Toplantıda sorulacak |

Toplantıda sorulacak: Boyut Plastik'in kendi gözünde gerçek rakipleri (yurt içi ve Avrupa'daki ihracat pazarı ayrı ayrı).

---

## 8. Öncelikli 5 aksiyon

### A1. Bant Bulucu eşleşme sayfalarını AI'ın okuyabileceği hâle getirmek
- Soru: S6 · Ürün: Bant Bulucu dekor eşleşmeleri (ör. Kastamonu Entegre "Keas Cappucino" → Boyut 0100)
- Kanıt: 346 sitemap URL'si. Detay sayfasında yalnızca panel kodu, ad, Boyut kodu ve desen var.
- Doğrulanacak varsayım: Eşleşmelerin güncel olduğu ve her dekorun hangi malzeme/kalınlıkta üretildiği.
- **Öncesi:** "D126 · Ürün İsmi Keas Cappucino · Boyut Kodu 0100 · Desen Düz Renk"
- **Sonrası (taslak):** "Kastamonu Entegre Keas Cappucino (D126) ile uyumlu kenar bandı — Boyut kodu 0100. Düz renk dekor; [PVC / ABS] seçenekleri, [0,4 / 0,8 / … mm] kalınlıklar [müşteri onayı]. Numune veya teklif için panel kodunu ve ihtiyacınız olan metrajı iletin. → Numune / Teklif İste"
- Gerekli bilgi: Dekor × malzeme × kalınlık matrisi (Ürün/Ar-Ge sorumlusu)
- Adım: Pilot için en çok talep gören 20 dekorla başla. Şablon onaylanırsa diğerlerine genişlet.
- Başarı ölçütü: S6 yeniden ölçümünde boyutplastik.com.tr kaynak gösterilme sayısı (başlangıçla karşılaştırmalı)

### A2. PVC / ABS / PP kategori sayfalarına teknik bilgi ve SSS
- Soru: S1, S5, S8, S12
- Kanıt: Kategori sayfası metinleri 1–2 cümle. Teknik bilgi yalnızca EN katalogda.
- **Öncesi (PVC):** "Boyut Plastik PVC Kenar Bantıları, solvent ve UV ışınlara karşı dayanıklılıklarıyla ön plana çıkmaktadır. ABS Kenar Bantları'na göre daha ekonomik ve pratik bir çözümdür."
- **Sonrası (taslak):** "PVC kenar bandı — mobilya ve kapı üretiminde ahşap bazlı panellerin kenarlarını kaplamak için. Seriler: Solid (düz renk), Wood (ağaç deseni), Fantasy (taş, mermer, tekstil). Yüzeyler: Super Matt, Soft Touch, High Gloss, Embossed. Hazır stok: ağırlıklı 0,4 mm ve 0,8 mm. Diğer kalınlık/genişlikler: [müşteri onayı]. Panel üreticisinin dekor koduyla eşleşme için → Bant Bulucu. SSS: PVC mi ABS mi? · Minimum sipariş? [onay] · Numune nasıl istenir?"
- Gerekli bilgi: Kalınlık/genişlik aralığı, rulo boyu, MOQ yaklaşımı (Satış + Üretim)
- Başarı ölçütü: İçerik onaylı ve yayında. S1/S5 yeniden ölçümünde kaynak gösterilme

### A3. İngilizce ihracat / tedarikçi sayfaları
- Soru: S2, S4, M2
- Kanıt: EN yalnızca `/main-page`, ihracat sayfası boş, katalog yalnızca EN PDF.
- **Sonrası (taslak, EN):** "Edgeband manufacturer from Istanbul, Türkiye — PVC, ABS and PP edgebands matched to leading panel décors. Exports to 50+ countries, focused on Europe and the Balkans. Regional stock and distribution: Belgrade (Serbia), Bar Free Zone logistics (Montenegro, Alim Grup). Request samples or a quotation →"
- Gerekli bilgi: Öncelikli ihracat ülkeleri ve bölgesel stok noktaları (İhracat müdürü)
- Başarı ölçütü: EN pilot sorularında anılma/kaynak gösterilme (başlangıçla karşılaştırmalı)

### A4. "PVC, ABS ve PP kenar bandı: hangisi, ne zaman?" seçim rehberi
- Soru: S5, S8, S9
- Kanıt: Sitede zaten bir pazar gözlemi var: "Avrupa ABS'yi, ülkemiz ve Asya PVC'yi tercih ediyor; ABD'de ikisi de satılıyor." ([Kenar Bandı](https://boyutplastik.com.tr/urunler/kenar-bandi)). Katalogda ABS'nin klor içermediği yazıyor.
- Teknik iddialar (ör. "yandığında zehirli gaz çıkarmaz", "doğada kısa sürede kaybolur") yayından önce test belgesine bağlanmalı veya müşteri onayıyla yumuşatılmalı.
- Başarı ölçütü: Rehber yayında. Bilgilendirme sorularında kaynak gösterilme (anılmama başarısızlık sayılmaz)

### A5. Numune / teklif talep akışı ve şema işaretlemesi
- Soru: S3, S10, S11
- Kanıt: Teklif veya numune akışı görülmedi. Yapılandırılmış veri yok.
- **Sonrası (taslak form):** Firma · Ülke · Panel üreticisi ve dekor kodu · Malzeme (PVC/ABS/PP) · Kalınlık × genişlik · Tahmini metraj · Numune mi, teklif mi?
- Teknik: Organization (unvan, adres, telefon, logo), Product (seri, malzeme) ve BreadcrumbList şeması. Boş sitemap URL'lerinin temizlenmesi.
- Gerekli bilgi: Talebi kim karşılayacak, yanıt süresi hedefi (Satış)
- Başarı ölçütü: Analitik erişimi varsa form gönderimleri ve ürün sayfasından forma geçiş

---

## 9. ChatGPT reklamları (organik görünürlükten ayrı)

- Resmî kaynak durumu: OpenAI yardım sayfaları bu oturumda erişime kapalıydı (HTTP 403). Bu yüzden **Türkiye'nin self-servis reklam için uygun olup olmadığı resmî kaynaktan doğrulanamadı.**
- Üçüncü taraf kaynaklar (Ekim 2026): Ads Manager'ın self-servis olarak 89 ülkede açıldığını, Avrupa ve MENA'nın ilk açılan bölgeler arasında olduğunu, reklamların Free ve Go planlarında gösterildiğini ve kampanya başına günlük minimum 25 USD bütçe olduğunu yazıyor ([PPC Land](https://ppc.land/advertisers-in-26-more-countries-gain-chatgpt-ads-bringing-the-total-to-89/), [AirOps](https://www.airops.com/blog/does-chatgpt-have-ads)). Bunlar resmî kaynak değildir.
- Yapılacak: Toplantı öncesinde OpenAI Ads Manager uygunluk sayfasında Türkiye'yi ve Boyut Plastik'in fatura kesilen tüzel kişiliğini kontrol et.

**Konsept A — Ürün ve tedarikçi keşfi** (konsept taslağı, aktif kampanya değildir)
- Hedef: PVC/ABS kenar bandı tedarikçisi arayan mobilya üreticileri
- Başlık: "Panel Dekorunuza Uyumlu Kenar Bandı"
- Metin: "Boyut Plastik'in PVC ve ABS kenar bantlarını panel üreticisi ve dekor koduna göre inceleyin. Numune veya teklif talep edin."
- Hedef sayfa: Bant Bulucu / ilgili kategori sayfası (A1–A2 sonrası)

**Konsept B — İhracat ve kurumsal satın alma** (EN)
- Hedef: Avrupa ve Balkanlar'daki satın alma yetkilileri
- Başlık: "PVC & ABS Edgebands from Türkiye"
- Metin: "Explore Boyut Plastik's edgeband ranges matched to leading panel décors. Request samples or a quotation for your production."
- Hedef sayfa: EN ihracat/tedarikçi sayfası (A3 sonrası)

GeoAdra'nın kapsamı analiz ve taslak hazırlamaktır. Reklam yayınlama, hedefleme kurulumu veya satış artışı garantisi bu kapsamda yoktur.

---

## 10. 30 günlük pilot

| Hafta | İş |
|---|---|
| 1 — Araştırma ve başlangıç ölçümü | Ürün/kategori analizi, rakip doğrulama, 8 pilot sorunun onayı, erişim varsa 3 platformda başlangıç ölçümü, talep akışlarının değerlendirilmesi |
| 2 — Taslaklar | Öncelikli ürün grubu seçimi (öneri: PVC + Bant Bulucu 20 dekor), kategori sayfası, seçim rehberi, SSS, EN sayfa ve reklam konsepti taslakları |
| 3 — Onay ve uygulama | Teknik bilgilerin Boyut Plastik tarafından onayı, onaylı içeriklerin yayını, iç bağlantılar, numune/teklif yönlendirmesi, şema |
| 4 — Yeniden ölçüm | Aynı soru seti ve yöntemle tekrar ölçüm, geçerli yanıtlar üzerinden anılma/önerilme/kaynak karşılaştırması, analitik erişimi varsa talep aksiyonları, sonraki dönem önerileri |

Başarı kriterleri başlangıçta müşteriyle birlikte belirlenir. Ölçüm sonuçları garanti edilmez. Kısa dönemdeki değişimler nedensel etki veya satış artışı kanıtı olarak sunulmaz.

---

## 11. Çalışmayan, doğrulanamayan veya erişim bekleyen kısımlar

- AI görünürlük ölçümü: Sağlayıcı erişimi yok, ölçüm çalıştırılmadı.
- ChatGPT reklam uygunluğu (Türkiye): Resmî OpenAI sayfaları 403 verdi.
- Apify çalıştırma 1 (cheerio) TLS hatasıyla başarısız oldu. Çalıştırma 2 (Playwright) başarılı.
- Portakal Plastik ve Berkfa resmî siteleri doğrulanamadı.
- Mobil uygulama, Bayi Girişi arkası, ödeme portalı incelenmedi (giriş gerekiyor / kapsam dışı).
- Kapasite, MOQ, fiyat, teslim süresi, sertifikalar, öncelikli pazarlar: Toplantıda doğrulanacak.
- Sitemap'teki 3D, Platinum, Boyanabilir ve PMMA ürünlerinin güncel olup olmadığı: Toplantıda doğrulanacak.
