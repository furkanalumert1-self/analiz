# Topbaş Group × Callypso Export Agent: Müşteri Analizi

Hazırlayan: CallypsoTech · Tarih: 19 Kasım 2026 · Dil: Türkçe
Canlı sunum: README.md dosyasındaki Vercel bağlantısı
Yöntem: Topbaş Group ve grup şirketlerinin siteleri Apify (website-content-crawler) ile tarandı; TR, EN ve DE dillerinde toplam 162 sayfa incelendi. Ticaret verisi UN Comtrade public API'den, rakip ve segment bilgileri web aramasıyla alındı. Callypso uygulaması Playwright ile tüm modülleri gezilerek ve ağ istekleri izlenerek incelendi.

Analiz akışı: **Kanıt → Ticari fırsat → İş etkisi → Otomasyon senaryosu → Demo → Ölçüm**

---

## 1. Yönetici özeti

- Topbaş Group üç ayrı iş modelini tek çatı altında yürütüyor:
  - **ZİMAŞ:** katalog ve özel zincir, distribütör ve makine üreticisi satışı
  - **TOPÇESAN:** OEM ve Tier 1–2 için çizime özel sıcak dövme, nominasyon ve PPAP süreciyle
  - **ZCF:** soğuk şekillendirilmiş bağlantı elemanları, OEM ve sektörel alıcılar
- Callypso Export Agent'ın bugünkü sürümü **etkileşimli bir demo**. Arayüz ve iş akışı (talep, müşteri, teklif, takip, onay) mevcut. Yapay zekâ, müşteri araştırması, e-posta gönderimi ve ERP/CRM bağlantısı ise yok; uygulama da bunu açıkça belirtiyor.
- Dört senaryo puanlandı. En güçlü iki senaryo:
  1. **Senaryo A:** ZİMAŞ için yeni ihracat müşterileri (30/35)
  2. **Senaryo D:** grup geneli teklif takibi + ZİMAŞ gelen zincir talebinde eksik bilgi kontrolü (28/35)
- Önerilen hedef pazarlar UN Comtrade verisiyle gerekçelendirildi (HS 731511 makaralı zincir, 2023 ithalatı):

  | Pazar | İthalat | Türkiye payı |
  |---|---|---|
  | Almanya | 206,6 milyon USD | %0,25 |
  | İtalya | 63,4 milyon USD | %1,4 |
  | Polonya | 48,5 milyon USD | %0,16 |

- Öneri: **30 günlük, tek şirket, tek ürün grubu ve tek pazarla sınırlı, insan onaylı bir pilot**. Gerçek kullanım için en az şunların geliştirilmesi gerekiyor: LLM bağlantısı, hedef şirket veri kaynağı ve e-posta entegrasyonu ya da dışa aktarım.
- Topbaş'ın satış süreçlerinde sorun olduğu **varsayılmadı**. Aylık talep sayısı, dönüşüm ve sipariş değerleri bilinmiyor; ROI tabloları örnek varsayımdır.

---

## 2. Üç grup şirketinin ayrı analizi

### 2.1 ZİMAŞ Zincir ve Makine San. Tic. A.Ş.

| Başlık | Bulgular (kaynaklı) |
|---|---|
| Kuruluş | 1976, Bursa. Türkiye'de transmisyon zinciri üreten ilk şirket |
| Ölçek | ~250 çalışan, ~3.500 zincir çeşidi / 3.500+ zincir kalıbı, entegre üretim (malzeme hazırlığından ısıl işleme kadar) |
| Altyapı | 1.350 m² ısıl işlem tesisi, 5.000+ ton/yıl kapasite, iki laboratuvar |
| Sertifikalar | IATF 16949, ISO 9001; sektör sayfasında ayrıca ISO 14001 ve ISO 27001; CQI-9 denetimi |
| İhracat | 1983'ten beri Avrupa, Orta Doğu ve komşu ülkelere |
| Ürünler | Makaralı (DIN 8187/8188, ISO 606), zirai, fleyer (ISO 4347; LH/LL/AL serileri), pim makaralı (içi boş pim), pim çıkıntılı, API-rotary (DIN 8182), dıştan makaralı (akümülasyon), kaynak plakalı, kazıyıcı, Gall, yürüyen merdiven zincirleri, stud çivisi (shear stud) |
| Hedef sektörler (sitede) | Çimento, gıda, ambalaj, otomotiv, forklift ve kaldırma, tarım makineleri, maden, petrol ve sondaj, demir-çelik, geri dönüşüm |
| Satış kanalı | Telefon, info@topbasgroup.com.tr, "Hemen sipariş ver" çağrısı, sektör sayfalarında katalog talep formu; TR, EN ve DE site |
| Teklif girdisi | "Doğru Zinciri Nasıl Talep Ederiz?" sayfası: zincir no veya DIN/ISO kodu ya da teknik çizim / numune (en az 3 bakla) + 9 ölçü + kullanım yeri |

**İş modeli değerlendirmesi:** Standart kodlu ürünler (08B, 10A vb.) ile özel üretim birlikte yürüyor. Alıcılar distribütörler, bayi ağları ve makine üreticileri. Bu segmentler kamuya açık kaynaklardan (fuar katılımcı listeleri, sektör dernekleri, firma siteleri) bulunabilir. **Otomasyonla müşteri bulmaya en uygun şirket ZİMAŞ.**

Kaynaklar: zimaszincir.com.tr (ana sayfa, kurumsal, yetkinlikler, ürünler, sektörel çözümler), topbasgroup.com.tr/urunler/*

### 2.2 TOPÇESAN Topbaş Çelik San. ve Tic. A.Ş.

| Başlık | Bulgular |
|---|---|
| Kuruluş | 1987, Bursa (grup sitesinin bir yerinde 1989 geçiyor) |
| Tesis | 22.000 m², dövmehane, kalıphane, ısıl işlem, talaşlı imalat |
| Ölçek | 100+ çalışan |
| İhracat | Ürünlerin %70'i (topcesan.com.tr) / %80'i (grup sitesi) ihraç ediliyor |
| Müşteriler | OEM otomobil üreticileri, Tier 1–2. Grup sitesinde BMW, Tofaş, Fiat ve Beyçelik anılıyor |
| Ürün grupları | Direksiyon ve süspansiyon (ön/arka tekerlek göbeği, mass ring), şasi (motor parçaları, aks somunu, aks taşıyıcı tabla), şanzıman (mil mafsalı, 3 ayaklı mafsal, dişli kutusu birimleri), aftermarket (ağır vasıta yedek parça), alüminyum dövme, kardan, maden ve tarım makinesi parçaları |
| Kalite ekipmanı | Mitutoyo Crysta-Plus CMM, spektrometre, yüzey pürüzlülüğü cihazı, MahrSurf |
| Süreç (yayımlanmış) | RFQ → teknik resim ve şartname incelemesi → fizibilite → maliyet → nominasyon → proje planı (kalıp, aparat, fikstür) → PPAP → SOP+3 ay takip → revizyon süreci |

**İş modeli değerlendirmesi:** Satış, yeni müşteri bulmaktan çok **RFQ'lara doğru ve zamanında yanıt vermeye** dayanıyor. Satın alma döngüsü uzun ve kalite onaylı. Teknik resimler gizli ve maliyet hesabı mühendislik kararı. Otomasyonun güvenli alanı yalnızca RFQ ön işleme: bilgi çıkarma, eksik listesi, yönlendirme ve takip hatırlatması.

Not: Brief'teki "çeki grubu parçaları" ifadesi TOPÇESAN sitesinde **bulunamadı**.

### 2.3 ZCF (Zimaş Cold Forming)

| Başlık | Bulgular |
|---|---|
| Kuruluş | 2015 |
| Başlangıç | ZİMAŞ'a alt komponent üretimi |
| Ürünler | Cıvata, somun, bağlantı elemanları; 200'ün üzerinde ürün çeşidini üretebilecek makine parkuru; kalıplarını kendisi yapıyor |
| Makine parkuru | Cıvata, somun, kılavuz ve ovalama makineleri, %100 kamera destekli ayıklama, fiber çakma, hammadde işleme merkezi |
| Kapasite notu | Tavlama fırını: Ø20'ye kadar 4 ton, Ø20 üstü 2 ton; kullanımın ~%70'i ZİMAŞ yarı mamulleri için |
| Hedef sektörler | OEM ve Tier 1–2, inşaat, beyaz eşya, mobilya, enerji, kalıp, makine imalatı, çelik konstrüksiyon, rüzgâr santralleri, karayolu, havaalanı, demiryolu |

**İş modeli değerlendirmesi:** ZCF'nin ürün sayfası **boş** ve yetkinlikler sayfası ZİMAŞ'ın metnini tekrar ediyor. Dış müşteriye hangi ürün ve ölçülerin önerileceği belirsiz. Ayrıca tavlama kapasitesinin büyük kısmı grup içi işe ayrılmış görünüyor; dış satış için ne kadar kapasite kaldığı **sorulmalı**. Otomasyondan önce ürün kapsamının netleşmesi gerekiyor.

---

## 3. Ürün ve hedef sektör araştırması

### 3.1 Pazar verisi: HS 731511 makaralı zincir (2023, UN Comtrade)

Türkiye'nin HS 731511 ihracatı yaklaşık **6,56 milyon USD**. İlk alıcılar: Rusya 1,63 milyon, Kazakistan 0,94 milyon, İtalya 0,82 milyon, Almanya 0,55 milyon, Belarus 0,27 milyon USD.

| Ülke (ithalatçı) | Toplam ithalat (USD) | Türkiye'den (USD) | TR payı | İlk tedarikçiler |
|---|---|---|---|---|
| Almanya | 206.591.207 | 521.572 | %0,25 | Çin, Romanya, Japonya, İtalya |
| İtalya | 63.350.444 | 905.758 | %1,43 | Almanya, Çin, Japonya, Hollanda |
| Polonya | 48.525.215 | 76.276 | %0,16 | Almanya, Çin, Japonya, İtalya |
| Çekya | 26.940.152 | 1.284 | ~%0 | Japonya, Çin, Almanya |
| Macaristan | 16.525.917 | 35.385 | %0,21 | Almanya, Hollanda, Japonya |
| Romanya | 11.689.657 | 37.717 | %0,32 | Almanya, Fransa, İtalya |
| Kazakistan | 8.200.792 | 75.646 | %0,92 | Rusya, Çin, Almanya |
| S. Arabistan | 6.235.247 | 13.513 | %0,22 | Çin, Almanya, Japonya |
| Bulgaristan | 4.906.820 | 74.631 | %1,52 | Almanya, Çin, Japonya |
| Mısır | 3.390.924 | 6.698 | %0,20 | Çin, Almanya, İtalya |
| Fas | 2.972.649 | 14.444 | %0,49 | Çin, İtalya, Fransa |

Ek veri (HS 731512, diğer mafsallı zincirler, 2023 ithalatı): Almanya 56,8 milyon, İtalya 38,7 milyon, Polonya 17,0 milyon USD.

Uyarılar:
- Ülkelerin beyan ettiği ithalat ile Türkiye'nin beyan ettiği ihracat birbirinden farklı olabilir (ayna istatistik).
- Kazakistan ithalatının bir kısmı ve Türkiye–Rusya akışı farklı raporlama kapsamında. Rusya 2023 ithalatını raporlamamış.
- ZİMAŞ'ın kendi ülke bazlı ihracat dağılımı bilinmiyor.

### 3.2 Önerilen üç hedef pazar (Senaryo A)

1. **Almanya:** Avrupa'nın en büyük makaralı zincir ithalatçısı ve Türkiye'nin payı çok düşük. ZİMAŞ'ın Almanca sitesi var, bu da pazara erişimi kolaylaştırıyor. Segmentler: Antriebstechnik distribütörleri (örnek: Mädler GmbH, zincir ve güç aktarım ürünleri sunuyor), tarım ve konveyör makinesi üreticileri. Rekabet yoğun: iwis ve KettenWulf gibi yerel üreticiler var. Bu nedenle mesaj ikincil tedarik ve özel zincir üzerine kurulmalı.
2. **İtalya:** Türkiye'nin üç pazar içindeki en yüksek payı (%1,4) burada ve İtalya, Türkiye'nin ihracat sıralamasında ilk üçte. Mevcut bir dayanak üzerine büyüme fırsatı sunuyor. Segmentler: güç aktarım distribütörleri (örnek: Chiaravalli Group, Wippermann zincir distribütörü ve kendi katalogu var), ambalaj ve tarım makinesi üreticileri.
3. **Polonya:** 48,5 milyon USD'lik bir pazar ve Türkiye'nin payı çok düşük. Güçlü bir tarım makinesi sanayisi var (Unia, Pronar, SaMASZ büyük üreticiler arasında sayılıyor). Bu segment, ZİMAŞ'ın zirai zincir sayfasında anlattığı "tarım makinesi üreticileri ve yedek parça bayi ağları" konumlandırmasıyla örtüşüyor.

Alternatif: Kazakistan (Türkiye'nin 2. büyük alıcısı, TR payı %0,9) ve Bulgaristan (TR payı %1,5). Mevcut ilişkileri büyütmek için uygun, ancak pazar hacimleri küçük.

### 3.3 İdeal müşteri profilleri (ICP)

| | ZİMAŞ | TOPÇESAN | ZCF |
|---|---|---|---|
| Hedef sektör | Güç aktarım ticareti; tarım, konveyör, forklift, ambalaj, çimento ekipmanı | Otomotiv (süspansiyon, şasi, şanzıman), tarım ve maden ekipmanı | Beyaz eşya, mobilya, rüzgâr ve enerji, çelik konstrüksiyon, otomotiv Tier 2 |
| Müşteri tipi | Distribütör, ithalatçı, OEM | OEM, Tier 1–2 | OEM, Tier 1–2, proje yüklenicisi |
| İlgili ürün | Makaralı, zirai, fleyer, kazıyıcı zincirler | Tekerlek göbeği, mil mafsalı, aks parçaları | Cıvata, somun, özel bağlantı elemanı |
| Hedef ülke | DE, IT, PL (alternatif KZ, BG) | DE, IT, FR, CZ otomotiv kümeleri (doğrulanacak) | DE, PL, TR içi büyük üreticiler (doğrulanacak) |
| Karar verici | Satın alma / kategori müdürü; OEM'de satın alma + Ar-Ge | Commodity buyer (forging), tedarikçi geliştirme, SQE | Satın alma, kalite |
| Satın alma ihtiyacı (hipotez) | İkinci kaynak, özel zincir, maliyet ve termin | Yeni proje RFQ'ları, kapasite ve yerelleşme | Çizime özel parça, hacim |
| Uygunluk kriterleri | DIN/ISO zincir portföyü, Avrupa dışından tedarik geçmişi | Çelik dövme parça kullanımı, IATF şartı | Soğuk dövme parça kullanımı, seri hacim |
| İlk temas | Kod eşleştirme listesi, 3.500 çeşit, özel üretim, numune | Entegre dövme, ısıl işlem ve işleme kabiliyeti, RFQ'ya davet talebi | Kalıp kabiliyeti, %100 optik ayıklama |

Satın alma ihtiyaçları **hipotezdir**. Hiçbir şirket için doğrulanmış bir tedarik ihtiyacı, kişi ya da e-posta adresi sunulmamıştır.

---

## 4. Callypso Export Agent yetenek analizi

İnceleme tarihi: 19.11.2026. Uygulama Next.js ile yazılmış ve kurgusal "Atlas Office Furniture" verisiyle çalışıyor. Ağ izlemesinde yalnızca sayfa (RSC) istekleri görüldü; **harici API ya da yapay zekâ çağrısı yok**.

Uygulamadaki açık beyanlar:
- Ajan sayfası: "Gerçek yapay zekâ bağlı değildir; yanıtlar demo senaryosuna göre önceden tanımlıdır."
- Müşteri Bulma sayfası: "Örnek veri — gerçek araştırma yapılmaz" ve "6 kurgusal adaydan oluşan örnek liste".
- Onay ekranları: "Demo modunda gerçek e-posta gönderilmez."
- Ürünler sayfası: "Katalog düzenleme ve ERP senkronizasyonu bu demonun kapsamı dışındadır."

| # | Kullanım alanı | Uygulamada | Sınıf |
|---|---|---|---|
| 1 | B2B potansiyel müşteri bulma | Ülke, ürün ve müşteri tipi filtreleri; kurgusal adaylar | Demo/simülasyon → gerçek veri için **geliştirme** |
| 2 | İthalatçı / distribütör araştırması | "Hedef pazarda müşteri araştır" komutu | Demo/simülasyon |
| 3 | Müşteri uygunluk analizi | Görünür puanlama yok | **Geliştirme gerektiriyor** |
| 4 | Kişisel ilk temas e-postası | Onay kuyruğunda taslak; düzenle, onayla, reddet | Arayüz mevcut; içerik demo |
| 5 | Gelen yanıtların sınıflandırılması | Talep durumları (Yeni, Teklife hazır, Teklif verildi) | Demo; **e-posta entegrasyonuyla mümkün** |
| 6 | Teklif taleplerinin analizi | Ürün, miktar, ülke, teslim şekli ve eksikler çıkarılmış hâlde | Demo/simülasyon |
| 7 | Teknik dokümandan bilgi çıkarma | Yok | **Geliştirme gerektiriyor** |
| 8 | Teklif taslağı | Katalog fiyatı × miktar (EXW EUR) | Demo; dövme ve özel zincir için uygun değil, fiyat insan kararı |
| 9 | Teklif sonrası takip | Teklif durumu, takip tarihi, geciken görev, takip mesajı taslağı | **Akış mevcut ve doğrulandı**; veri demo |
| 10 | CRM / e-posta entegrasyonu | Yok; ERP kapsam dışı | **Doğrulanamadı / yok**, entegrasyonla mümkün |

Mevcut ve doğrulanmış olanlar: 8 ekranlık bilgi mimarisi (Genel Bakış, Ajan, Talepler, Müşteri Bulma, Müşteriler, Teklifler, Ürünler, Onaylar), 7 adımlı talep→teklif→takip demo akışı, onay kuyruğu mantığı ve "Demoyu sıfırla" işlevi.

---

## 5. Önceliklendirilmiş otomasyon fırsatları

Puanlama: 1–5 arası, 5 en elverişli. "Gerekli entegrasyon" kriterinde 5, en az entegrasyon anlamına gelir.

| Kriter | A · ZİMAŞ ihracat | B · TOPÇESAN RFQ | C · ZCF OEM | D · Teklif takibi |
|---|---|---|---|---|
| Ticari değer | **5**: büyük pazarlar, düşük TR payı, standart ürün | **4**: yüksek proje değeri, ancak RFQ zaten geliyor | **4**: geniş sektör yelpazesi | **4**: takipsiz kalan teklifin geri kazanımı |
| Uygulama kolaylığı | **4**: kamuya açık veri, gizlilik riski yok | **2**: teknik resim, PDF/CAD, gizlilik | **3**: ürün kapsamı belirsiz | **4**: kural tabanlı tarih ve şablon |
| Mevcut ürünle uyum | **4**: Müşteri Bulma + Onaylar akışı | **3**: Talepler ekranı var, teknik çıkarım yok | **3**: aynı akış, ürün verisi eksik | **5**: Teklifler, takip ve onay hazır |
| Gerekli entegrasyon | **4**: veri kaynağı + e-posta | **2**: e-posta, doküman deposu, ERP | **4** | **3**: teklif listesi (ERP/CRM ya da Excel) |
| Veri erişimi | **4**: kamuya açık | **2**: gizli müşteri dokümanları | **3** | **3**: iç veri, dışa aktarımla |
| Pilot uygulanabilirliği | **5**: 30 günde küçük parti | **3**: NDA ve güvenlik onayı gerekir | **3** | **4** |
| Ölçülebilirlik | **4**: uygun aday, yanıt, fırsat | **3**: süre ölçümü zor | **3** | **5**: süre, gecikme, yanıt |
| **Toplam** | **30** | **19** | **23** | **28** |

**Seçilen iki senaryo: A ve D.**
- D'nin kapsamına ZİMAŞ'ın 9 parametrelik gelen zincir talebi kontrolü eklendi. Bu, Senaryo B'nin düşük riskli bir alt kümesi.
- TOPÇESAN RFQ'su (B), bilgi güvenliği çerçevesi netleştikten sonra ikinci faz olarak önerilir. Demo 2 bu sürece talep edildiği için yine de hazırlandı.

---

## 6. Yeni B2B müşteri bulma senaryosu (Senaryo A)

**Kapsam:** ZİMAŞ · bir ürün ailesi (öneri: zirai zincir veya ISO 606 makaralı zincir) · bir pazar (öneri: Polonya veya Almanya).

1. **Ürün grubu seçimi:** ZİMAŞ satış ekibi ürün ailesini ve öne çıkacak kodları belirler.
2. **Hedef ülke:** Comtrade verisi + ekibin mevcut bayi bilgisi. Mevcut müşteriler hariç tutulur.
3. **Aday araştırma:** Fuar katılımcı listeleri (ör. Agritechnica, Hannover Messe, FMB), sektör dernekleri ve firma siteleri. *(Gerçek veri bağlantısı geliştirme gerektirir.)*
4. **Uygunluk analizi:** Her aday için "zincir satıyor/kullanıyor mu, hangi standartlar, hangi segment" gerekçesi ve kaynak bağlantısı. Kanıtı olmayan aday listeye alınmaz.
5. **Kişisel e-posta taslağı:** Aday kendi sitesinde ISO 606 makaralı zincir satıyorsa, taslak ZİMAŞ'ın ilgili serisini ve özel üretim kabiliyetini anlatır. Dil EN, DE veya PL olabilir.
6. **İnsan onayı:** Satış temsilcisi düzenler ve onaylar. **Onaysız gönderim yoktur.** İletişim kişisi kamuya açık kurumsal kanallardan bulunur; kişisel veri kullanımında KVKK/GDPR uyumu gözetilir.
7. **Takip:** 7 ve 14 gün sonra hatırlatma taslağı. Yanıtlar "ilgili, numune istiyor / bilgi istiyor / ilgisiz / yanlış kişi" olarak sınıflandırılır ve satış ekibine bildirilir.

**Ölçüm:** araştırılan aday sayısı, uygun bulma oranı, onaylanan taslak oranı, yanıt oranı, olumlu dönüş, numune ve teklif talebi.

---

## 7. Teknik RFQ ve teklif takip senaryosu (Senaryo D + B alt kümesi)

### 7.1 Gelen talep (ZİMAŞ zincir talebi)

1. E-posta veya form gelir.
2. Ajan şunları çıkarır: zincir no / DIN-ISO kodu, 9 ölçü (p, b1, d3, d1, s1, s2, h, sıra sayısı, ek parçalar), kullanım yeri, miktar, teslim koşulu.
3. **Eksik bilgi kontrolü:** eksik alanlar listelenir ve müşteriye gidecek soru taslağı hazırlanır (satış onayıyla gönderilir).
4. Talep, standart veya özel zincir olarak işaretlenir. Özel zincirler mühendisliğe yönlendirilir.
5. **Teklif:** fiyat ve termin satış ve mühendislik tarafından girilir. Ajan yalnızca yazışma taslağını hazırlar.

### 7.2 TOPÇESAN RFQ (ikinci faz)

1. Gelen RFQ'dan parça adı, malzeme, yıllık hacim, SOP tarihi, teslim koşulları, ekli doküman listesi ve son yanıt tarihi çıkarılır.
2. Eksikler listelenir: teknik resim revizyonu, malzeme normu, ısıl işlem şartı, PPAP seviyesi vb.
3. Talep ilgili proje mühendisine yönlendirilir ve son tarih hatırlatması kurulur.
4. Teknik uygunluk, fizibilite, maliyet, fiyat ve termin kararları **yalnızca yetkili mühendis ve satış ekibine** aittir.

### 7.3 Teklif takibi (grup geneli)

Teklif oluşturuldu → gönderildi → yanıt bekleniyor → takip zamanı (ör. 5. ve 12. iş günü) → hatırlatma taslağı → **satış onayı** → gönderim → yanıt sınıflandırma (kabul / revizyon / ret / soru) → satış ekibine bildirim.

**Veri girişi:** pilotta teklif listesi ERP veya CRM'den dışa aktarım (Excel/CSV) ile alınabilir. Canlı entegrasyon ayrı bir geliştirme konusu.

---

## 8. Rakip analizi

Not: Rakiplerin satış hacimleri, teklif süreçleri ve otomasyon kullanımları **bilinmiyor**. Tablo yalnızca kamuya açık sitelerde ve kataloglarda görülenleri içerir.

| Alan | Şirket | Ürünler | Hedef sektör / pazar | Dijital katalog ve teklif kanalı (görülen) |
|---|---|---|---|---|
| Zincir | **iwis** (Münih, DE) | DIN/ANSI makaralı, bakım gerektirmeyen ve paslanmaz zincirler, özel zincirler | Küresel; otomotiv motor zinciri ve endüstri | Çevrimiçi ürün mağazası ve PDF kataloglar (iwis.com) |
| Zincir | **KettenWulf** (DE, 1925) | Konveyör ve tahrik zincirleri, dişliler; standart + özel | 10 lokasyon, 1.400+ çalışan (kendi beyanı) | DirectIndustry'de PDF kataloglar, distribütör ağı (ör. TYMA CZ) |
| Zincir | **Renold**, **Tsubaki** | Makaralı zincir | Küresel | RS Components gibi çok markalı distribütörlerde listeleniyor |
| Zincir | **Chiaravalli** (IT) | Kendi TPM zincir katalogu + Wippermann distribütörlüğü | İtalya ve Avrupa | Online katalog. Rakip olabileceği gibi hedef distribütör de olabilir |
| Sıcak dövme | **NSK Hot Metal Forging** (Karacabey, Bursa) | Direksiyon ve süspansiyon parçaları, sıcak dövme | OEM/OES, yurt içi ve yurt dışı | Kurumsal site (nskgroup.com.tr) |
| Sıcak dövme | **Sistaş** (İzmir, 1978) | 400 kg'a kadar sıcak dövme çelik parçalar | Otomotiv ve endüstri | DirectIndustry ürün sayfaları |
| Bağlantı elemanı | **Norm Fasteners** (İzmir, 1973) | Cıvata, somun, vida | Otomotiv OEM (VW, Ford, Fiat, Mercedes, Renault anılıyor), ~50 ülke | Kurumsal site; yurt dışı lokasyonlar |
| Bağlantı elemanı | **Standart Cıvata** | Cıvata ve bağlantı elemanı | Endüstri | Kurumsal site |

**Karşılaştırmalı gözlem (yalnızca kamuya açık görünüm):**
- Avrupalı zincir üreticileri (iwis, KettenWulf) kod bazlı çevrimiçi katalog ve distribütör ağıyla çalışıyor.
- ZİMAŞ'ın sitesinde ürün aileleri ve sektör sayfaları zengin, ancak kod ve ölçü bazlı indirilebilir bir katalog kamuya açık görünmüyor; katalog form ile isteniyor.
- Bu bir zayıflık iddiası değil. Satış yaklaşımının farklı olabileceği toplantıda sorulmalı.

---

## 9. Loom metinleri

Ayrı dosya: `loom-metinleri.md`

## 10. Müşteriye özel web sunumu

`index.html` → Vercel (bağlantı README.md dosyasında)

## 11. Toplantı hazırlığı

Ayrı dosya: `toplanti-hazirligi.md` (public sunumdan ayrı, yayınlanmaz)

---

## 12. 30 günlük pilot planı

**Kapsam önerisi:** ZİMAŞ · bir ürün ailesi · bir hedef ülke (Senaryo A) + mevcut açık tekliflerin takibi ve gelen zincir talebinde eksik bilgi kontrolü (Senaryo D).

**Ön koşul geliştirmeler** (demo ile canlı kullanım arasındaki fark):
- LLM bağlantısı
- Aday araştırma veri kaynağı
- 9 parametrelik talep şablonu
- E-posta taslağı dışa aktarımı veya posta kutusu entegrasyonu
- Teklif listesinin Excel/CSV ile içe aktarılması

| Hafta | İşler | Çıktı |
|---|---|---|
| **1 · Araştırma** | Öncelikli şirketin, ürün grubunun ve pazarın teyidi; ICP ve uygunluk kriterleri; mevcut talep ve teklif sürecinin haritası; başlangıç ölçümleri (talep başına ön işlem süresi, açık teklif sayısı, ortalama takip gecikmesi) | Pilot kapsam dokümanı, başlangıç ölçüm tablosu |
| **2 · Yapılandırma** | Hedef liste kaynakları ve veri alanları; 9 parametre şablonu; onay akışı (taslak → temsilci → gönderim); EN, DE ve PL e-posta taslakları; entegrasyon ihtiyacı (dışa aktarımla başlama seçeneği) | Yapılandırılmış çalışma alanı, onaylı şablonlar |
| **3 · Kontrollü uygulama** | Küçük partiler hâlinde insan onaylı ilk temas; açık teklifler için takip taslakları; satış ekibinin her taslağı puanlaması (kullanılabilir / düzeltilmeli / kullanılamaz); hata ve istisna kaydı | Gönderim ve takip kayıtları, hata listesi |
| **4 · Ölçüm** | Yalnızca uygulanan süreçlerin KPI'ları | Pilot raporu, devam / durdur kararı |

**KPI'lar** (yalnızca uygulanırsa raporlanır):
- Araştırılan şirket sayısı ve uygun bulunan şirket sayısı (oranıyla)
- Onaylanan taslak oranı (taslak kalitesinin göstergesi)
- Yanıt oranı ve olumlu dönüş oranı
- Numune veya teklif talebi sayısı (nitelikli fırsat)
- Talep başına ön işlem süresi (1. hafta ölçümüyle karşılaştırmalı)
- Zamanında takip edilen teklif sayısı ve oranı
- Manuel işlem süresi (satış ekibinin kayıtlarıyla)

Not: İlk siparişin 30 gün içinde gelmesi beklenmemeli; numune ve onay süreci daha uzun sürebilir.

---

## 13. ROI analizi (varsayımları belirtilmiş)

> **Tüm girdiler örnek varsayımdır.** Topbaş'tan gerçek veri alınmamıştır. Tablolar, toplantıda gerçek değerlerle yeniden hesaplanmak üzere bir modeldir.

### 13.1 B2B müşteri kazanımı (Senaryo A, 3 aylık dönem)

| Girdi / çıktı | Temkinli | Orta | İyimser | Varsayımın dayanağı |
|---|---|---|---|---|
| Araştırılan şirket | 600 | 600 | 600 | Ayda ~200, insan kontrollü |
| Uygun müşteri oranı | %30 | %40 | %50 | Kanıt şartı nedeniyle temkinli |
| Uygun ve onaylı temas | 180 | 240 | 300 | |
| Yanıt oranı | %4 | %6 | %9 | Soğuk B2B e-posta için temkinli aralık; Topbaş verisiyle güncellenecek |
| Yanıt | 7,2 | 14,4 | 27 | |
| Teklif fırsatına dönüşen yanıt | %30 → 2,2 | %40 → 5,8 | %50 → 13,5 | |
| Satışa dönüşüm | %15 → 0,3 | %20 → 1,2 | %25 → 3,4 | |
| Ortalama ilk sipariş değeri | €10.000 | €15.000 | €20.000 | **Tamamen örnek**; ZİMAŞ verisi yok |
| **Beklenen ilk sipariş değeri** | **~€3.200** | **~€17.300** | **~€67.500** | Tekrar eden siparişler dahil değil |

Yorum:
- Distribütör ilişkilerinde değer genellikle tekrar eden siparişlerden gelir. Bu tablo yalnızca ilk siparişi gösterir.
- Temkinli senaryoda pilotun haklı çıkarılması satıştan değil, **nitelikli fırsat sayısından** olur.

### 13.2 Teklif otomasyonu (Senaryo D, aylık)

| Girdi / çıktı | Temkinli | Orta | İyimser |
|---|---|---|---|
| Aylık teklif talebi | 80 | 120 | 160 |
| Talep başına ön işlem süresi (okuma, bilgi çıkarma, eksik kontrolü, yönlendirme, takip yazışması) | 45 dk | 45 dk | 45 dk |
| Otomasyonla desteklenebilecek oran | %30 | %45 | %60 |
| Desteklenen talep | 24 | 54 | 96 |
| Destekli işlem + insan kontrolü süresi | 20 dk | 15 dk | 12 dk |
| Talep başına tasarruf | 25 dk | 30 dk | 33 dk |
| **Aylık zaman tasarrufu** | **10 saat** | **27 saat** | **52,8 saat** |
| Saatlik tam maliyet (örnek) | ₺600 | ₺800 | ₺1.000 |
| **Aylık operasyonel maliyet etkisi** | **₺6.000** | **₺21.600** | **₺52.800** |

Yorum:
- Mühendislik ve fiyatlama süresi kapsam dışı; o süre değişmez.
- Asıl değer potansiyeli, zamanında takip edilen teklif oranındaki artış olabilir; ancak bu ölçülmeden iddia edilemez.
- Callypso lisans ve kurulum maliyeti bu sunumda **belirtilmedi**. Fiyatlandırma bilgisi elimizde yok.

---

## 14. Vercel HTTPS bağlantısı

README.md dosyasında. HTTP 200 ve HTTPS bağlantısı yayından sonra doğrulandı.

---

## 15. Doğrulanamayan bilgiler listesi

1. TOPÇESAN kuruluş yılı: 1987 (topcesan.com.tr, grup sayfası) mı, 1989 (grup "About us" zaman çizelgesi) mi?
2. TOPÇESAN ihracat payı: %70 (topcesan.com.tr) mı, %80 (grup sitesi) mi?
3. Çalışan sayıları: grup 350, ZİMAŞ 250, ZCF kurumsal sayfasında 260 (muhtemelen grup metni tekrar edilmiş). Güncel değerler bilinmiyor.
4. "Çeki grubu parçaları" (brief'te geçiyor) TOPÇESAN'ın sitesinde bulunamadı.
5. ZCF'nin ürün listesi, ölçü aralıkları ve dış satışa ayrılabilecek kapasite (ürün sayfası boş; tavlama kapasitesinin ~%70'i grup içi).
6. ZCF'nin "pim ve saplama" ürettiği sitede doğrulanmadı. ZİMAŞ'ın stud çivisi (shear stud) ürettiği ise doğrulandı.
7. Sertifikalar: IATF 16949 ve ISO 9001 birden fazla sayfada geçiyor; ISO 14001 ve ISO 27001 yalnızca ZİMAŞ sektör sayfalarında. Belgelerin geçerlilik tarihleri ve kapsamı (hangi şirket, hangi tesis) doğrulanmadı.
8. TOPÇESAN müşteri isimleri (BMW, Tofaş, Fiat, Beyçelik) yalnızca şirketin kendi beyanı; ilişkinin güncelliği doğrulanmadı.
9. ZİMAŞ'ın mevcut ihracat ülkeleri ve distribütör ağı (yalnızca "Avrupa, Orta Doğu, komşu ülkeler" ifadesi var).
10. Grubun kullandığı CRM, ERP ve e-posta altyapısı.
11. Aylık teklif talebi sayısı, teklif hazırlama süresi, dönüşüm oranları, sipariş değerleri.
12. Örnek hedef şirketlerin (Mädler, Chiaravalli, Unia, Pronar, SaMASZ) güncel tedarik ihtiyacı ve satın alma kişileri. Bunlar yalnızca segment örneği.
13. Polonyalı tarım makinesi üreticilerinin "en büyük" sıralamaları; kaynaklar büyük ölçüde şirketlerin kendi beyanı.
14. Rakiplerin satış hacimleri, teklif süreçleri ve otomasyon kullanımı.
15. Callypso'nun canlı yapay zekâ, e-posta, CRM/ERP entegrasyonu, veri barındırma ve güvenlik özellikleri: uygulamada bulunmuyor ya da doğrulanamadı.
16. Callypso fiyatlandırması ve kurulum süresi.

---

## Kaynaklar

- Topbaş Group: https://topbasgroup.com.tr/ · /grup-sirketleri/ · /urunler/ · /yetkinlikler/ · /hakkimizda/ · /en/about-us/ · /yetkinlikler/muhendislik-ve-ar-ge/ · /baglanti-elemanlari/ · /en/products/hot-forming/
- ZİMAŞ: https://www.zimaszincir.com.tr/ · /kurumsal/ · /yetkinlikler/ · /sektorel-endustriyel-zincir-cozumleri/ · /tarim-sektoru-endustriyel-zincir-cozumleri/ (sektör sayfaları) · /dogru-zinciri-nasil-talep-ederiz/ · /urunler/stud-civisi/
- TOPÇESAN: https://topcesan.com.tr/kurumsal/ · /urunler/ · /en/about-us/
- ZCF: https://www.zcf.com.tr/ · /kurumsal/ · /yetkinlikler/ · /urunler/
- UN Comtrade public API (HS 731511/731512, 2023): https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=276&period=2023&cmdCode=731511&flowCode=M (reporterCode 380, 616, 792 için aynı yapı)
- OEC, Türkiye demir zincir ticareti: https://oec.world/profile/bilateral-product/iron-chains/reporter/tur
- iwis: https://www.iwis.com/en-en/shop/roller-chains~c20 · https://www.iwis.com/en-en/about-us
- KettenWulf: https://pdf.directindustry.com/pdf/ketten-wulf/drive-chains/16256-108246.html · https://www.tyma.eu/our-partners/kettenwulf/
- RS Components zincir markaları: https://ie.rs-online.com/web/c/mechanical-power-transmission/roller-chains-accessories/
- Chiaravalli: https://chiaravalli.com/en/products/industrial/wippermann-roller-chain
- Mädler: https://www.fmb-messe.de/en/exhibitors/madler-gmbh-241587/
- Polonya tarım makineleri: https://www.agriland.ie/?p=338811 · https://en.wikipedia.com/wiki/Pronar · https://agriexpo.online/soc/samasz-sp-z-oo-168327.html
- NSK Hot Metal Forging: https://www.nskgroup.com.tr/en
- Sistaş: https://www.directindustry.com/prod/sistas/product-4614691-2801669.html
- Norm Fasteners: https://normfasteners.com/en/biz-kimiz · https://www.forbes.com.tr/life/dunyayi-bir-arada-tutan-gorunmez-guc-norm-holding-in-kuresel-sanayi-yolculugu
- Standart Cıvata: https://standartcivata.com.tr/en/biz-kimiz
- Callypso Export Agent: https://callypsoagent-callypso-export-agent.vercel.app/
