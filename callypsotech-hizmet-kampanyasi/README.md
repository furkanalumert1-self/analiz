# CallypsoTech — Hizmet Odaklı Outbound Kampanya Kurgusu

> **Vizyon (geniş):** "İşletmelerin tekrarlayan operasyonlarını AI Agent'lar ve otomasyon sistemleriyle yönetiyor, manuel iş yükünü azaltıyor ve operasyonel verimliliği artırıyoruz."
>
> **İlk pazar (dar):** Tek sektör × tek süreç × tek ölçülebilir sonuç.

---

## 1. Teşhis: Ürün odaklı kampanya neden satış getirmedi?

callypsotech.com incelendiğinde:

| Gözlem | Satışa etkisi |
|---|---|
| 4 ayrı ürün (Voice Agent, Inboxly, Engage, GeoAdra) aynı sayfada | Alıcı "hangisi bana lazım?" sorusunu kendisi çözmek zorunda kalıyor → karar ertelenir. |
| Engage "Klaviyo / Mailchimp alternatifi" olarak konumlanmış | Alıcıyı fiyat ve özellik karşılaştırmasına iter; küçük bir girişimin kazanamayacağı bir oyun. |
| Ürünler `*.vercel.app` alt alan adlarında | Soğuk mailden gelen ziyaretçide güven kaybı yaratır. |
| E-ticaret ve klinikler hedeflendi | İkisi de en çok "AI chatbot / WhatsApp" maili alan sektörler (doygun). Klinik karar vericileri (hekim/sahip) Apollo'da zayıf temsil ediliyor ve LinkedIn'de aktif değil. |
| Mesaj "özellik" anlatıyor (50+ dil, CRM entegrasyonu) | Alıcı özelliği değil, **kaybettiği saati / kaçırdığı müşteriyi** satın alır. |

**Çözüm:** Ürünleri satmayı bırakıp, ürünleri *altyapı* olarak kullanan **"done-for-you" (biz kurarız, biz işletiriz) operasyon otomasyon hizmeti** satmak. Müşteri yazılım değil, *sonuç* alır: "Teklif taleplerinizin %70'i insan dokunmadan 5 dakikada yanıtlanır."

---

## 2. Sektör seçim kriterleri

Her sektörü 6 kritere göre 1–5 arası puanladım:

1. **Apollo'da bulunabilirlik** — Karar vericiler LinkedIn'de mi? Apollo'da doğrulanmış mail oranı yüksek mi?
2. **Tekrarlayan iş hacmi** — Günde onlarca kez aynı şekilde yapılan iş var mı?
3. **Mevcut ürünlerle uyum** — Voice Agent / Inboxly / Engage doğrudan altyapı olabilir mi?
4. **Ödeme gücü & karar hızı** — 10–200 çalışan, sahibi/GM doğrudan karar veriyor mu?
5. **ROI'nin ölçülebilirliği** — "X saat / Y personel / Z kaçan müşteri" net hesaplanabiliyor mu?
6. **Rekabet doygunluğu (ters)** — Bu sektöre AI otomasyon maili az mı gidiyor?

> **Not:** "Ürün uyumu" kriteri artık eleyici değil. Hizmet satıyoruz; gerekirse müşteriye özel agent sıfırdan kurulur. Bu yüzden ürünlerimizle doğrudan ilgisi olmayan ama tekrarlayan işi yoğun meslekler de listede.

| Sektör | Apollo | Tekrar | Ürün uyumu | Ödeme/Karar | ROI | Doygunluk az | **Toplam** |
|---|---|---|---|---|---|---|---|
| **İhracatçı üretici KOBİ'ler (tekstil, makine, gıda, mobilya, yapı malz.)** | 5 | 5 | 4 | 5 | 5 | 5 | **29** |
| **Lojistik / uluslararası nakliye (freight forwarding)** | 5 | 5 | 4 | 4 | 5 | 5 | **28** |
| Gümrük müşavirliği firmaları | 4 | 5 | 2 | 4 | 5 | 5 | 25 |
| Toptancı / distribütör / bayi ağı olan üreticiler | 4 | 5 | 3 | 4 | 5 | 4 | 25 |
| İK yoğun işverenler & işe alım ajansları (mavi yaka) | 4 | 5 | 3 | 4 | 4 | 4 | 24 |
| Teknik servis / saha servis firmaları (klima, asansör, beyaz eşya) | 3 | 5 | 3 | 4 | 4 | 5 | 24 |
| Kamu ihalesine giren firmalar | 3 | 4 | 1 | 4 | 4 | 5 | 21 |
| **Sigorta acenteleri & brokerler** | 4 | 5 | 5 | 4 | 5 | 4 | **27** |
| **Gayrimenkul proje satış / konut pazarlama** | 4 | 4 | 5 | 5 | 4 | 3 | **25** |
| Mali müşavirlik büroları | 4 | 5 | 4 | 2 | 4 | 4 | 23 |
| Araç kiralama & filo kiralama | 3 | 4 | 5 | 4 | 4 | 4 | 24 |
| Özel eğitim / dil okulları / kurslar | 3 | 4 | 5 | 3 | 4 | 3 | 22 |
| E-ticaret (önceki) | 4 | 4 | 5 | 3 | 4 | 1 | 21 |
| Klinikler (önceki) | 2 | 4 | 5 | 3 | 4 | 1 | 19 |

**Güncellenmiş öneri — "Dış Ticaret Operasyonları" beachhead'i:**
İlk pazar tek sektör değil, birbirine bağlı tek bir **ekosistem** olsun: **ihracatçı üretici → nakliye firması → gümrük müşaviri.** Üçü aynı evrakı (proforma, fatura, çeki listesi, konşimento, menşe belgesi), aynı dilleri ve aynı müşteriyi paylaşıyor. Birinde kurduğun "evrak okuma / çok dilli yazışma agent'ı" diğer ikisinde %80 yeniden kullanılır, ve bir ihracatçı müşterin seni kendi forwarder'ına ve gümrükçüsüne tavsiye eder.

Neden ihracatçılar en üstte:
- **Döviz geliri var.** Avro/dolar kazanan bir firma için TL bazlı aylık hizmet bedeli düşük görünür → fiyat itirazı az.
- **Apollo'da çok iyi temsil ediliyorlar.** "Export Manager / Dış Ticaret Müdürü" unvanı LinkedIn'de çok yaygın.
- **Tekrarlayan iş çok ve çok dilli.** Yabancı dilde gelen sorular, proforma hazırlama, fuar sonrası lead takibi, sipariş durum yazışmaları.
- **AI otomasyon maili neredeyse hiç almıyorlar** (hedeflenen hep e-ticaret ve klinikler).

**Test planı:** 3 hafta boyunca paralel olarak **(1) ihracatçı üreticiler, (2) lojistik, (3) sigorta** listelerine gönder. Gayrimenkul 4. sırada yedekte. En yüksek olumlu yanıt oranını veren beachhead olur.

---

## 3. Sektör kartları

### 0) İhracatçı Üretici KOBİ'ler — ⭐ 1 numaralı beachhead adayı

**ICP:** 20–250 çalışanlı, ihracat payı yüksek üreticiler. Sektörler: tekstil & hazır giyim, makine & yedek parça, gıda, mobilya, yapı malzemesi, kimya/plastik, otomotiv yan sanayi. Bölgeler: İstanbul, Bursa, Denizli, Gaziantep, Kayseri, Konya, İzmir, Kocaeli.

**Tekrarlayan operasyonlar:**
| Manuel iş | Bugün nasıl yapılıyor | AI Agent / otomasyon ile |
|---|---|---|
| Yabancı dilde gelen fiyat/ürün soruları (web, mail, Alibaba, WhatsApp) | Dış ticaret uzmanı tek tek çevirir, katalogdan bakar, cevaplar | **Inquiry Agent'ı:** soruyu her dilde anlar, ürün kataloğu/fiyat listesinden cevap taslağı hazırlar, MOQ/teslim süresi/ödeme şartını ekler, uzman sadece onaylar |
| Proforma fatura & teklif hazırlama | Excel/Word şablonu elle doldurulur | Onaylanan talepten otomatik proforma (döviz, Incoterm, banka bilgisi) |
| **Fuar sonrası lead takibi** | 200 kartvizit masada kalır, 2 hafta sonra 20'sine yazılır | Kartvizit fotoğrafı → CRM → kişinin dilinde 3 adımlı takip maili, otomatik |
| Sipariş durum / üretim / sevk soruları | Telefon ve mail trafiği | Müşteriye haftalık otomatik durum raporu; "siparişim nerede" soruları otomatik yanıt |
| İhracat evrakı hazırlama | Fatura, çeki listesi, menşe bilgileri tekrar tekrar elle girilir | Siparişten evrak taslaklarını otomatik üretme, forwarder/gümrükçüye otomatik gönderme |
| Yeni pazar/distribütör araştırma | Google'da tek tek arama | Hedef ülke + ürün için ithalatçı/distribütör listesi çıkaran araştırma agent'ı |

**Apollo filtreleri:**
- *Location:* Turkey (yukarıdaki şehirler)
- *Industry:* Textiles · Apparel & Fashion · Machinery · Food Production · Furniture · Building Materials · Chemicals · Plastics · Automotive · Industrial Automation
- *Keywords (şirket):* `export`, `ihracat`, `manufacturer`, `üretici`, `exporter`, `OEM`, `private label`
- *# Employees:* 20–50, 51–200, 201–500
- *Job titles:* Dış Ticaret Müdürü, İhracat Müdürü, Export Manager, Foreign Trade Manager, Export Sales Manager, Genel Müdür, Kurucu / Yönetim Kurulu Üyesi
- *Niyet sinyalleri:*
  - "Dış Ticaret Uzmanı", "İhracat Sorumlusu", "Export Specialist" iş ilanı açmış firmalar
  - **Yaklaşan fuar katılımcıları** (Heimtextil, Automechanika, Anuga, SIAL, Gulfood, ISH, CPHI…). Fuar katılımcı listeleri Apify ile çekilip Apollo'da zenginleştirilir. Fuardan 1–2 hafta sonra "lead takibi" açısıyla yazılır.
  - TİM "İlk 1000 ihracatçı" listesindeki 100–1000 arası firmalar (büyükler değil, orta ölçek).

**ROI hesabı:** Haftada 40 yabancı dilde soru × soru başına 20 dk = **~13 saat/hafta**; buna fuar sonrası takip edilemeyen lead'ler eklenir. Fuar başına 50.000–150.000 € masraf yapan bir firma için "fuar lead'lerinin %100'ünün 48 saat içinde takip edilmesi" çok güçlü bir vaattir.

### A) Lojistik / Uluslararası Nakliye Firmaları — ⭐ Beachhead adayı

**ICP:** Türkiye merkezli, 11–200 çalışanlı, karayolu/deniz/hava freight forwarder, gümrük müşavirliği ile çalışan, ihracatçılara hizmet veren firmalar. Şehirler: İstanbul, İzmir, Mersin, Kocaeli, Bursa.

**Tekrarlayan operasyonlar (ağrı noktaları):**
| Manuel iş | Bugün nasıl yapılıyor | AI Agent / otomasyon ile |
|---|---|---|
| Navlun teklif talepleri | Operasyon personeli maili okur, ölçü/ağırlık/rota bilgisini Excel'e girer, acenteden fiyat ister, teklif yazar | **Teklif Agent'ı:** maili/WhatsApp'ı okur, eksik bilgiyi otomatik sorar, yapılandırılmış talebi tabloya/CRM'e yazar, standart rotalarda fiyat listesinden taslak teklif hazırlar |
| "Yüküm nerede?" soruları | Telefon ve WhatsApp'tan gün boyu aynı soru | **Takip Agent'ı:** WhatsApp/telefonda (Voice Agent) konşimento/referans no ile durumu söyler |
| Evrak toplama (fatura, çeki listesi, ATR, EUR.1) | Müşteriye tek tek mail/telefon | **Evrak Hatırlatma Akışı:** eksik evrak otomatik tespit + WhatsApp/mail hatırlatma |
| Yabancı dilde gelen aramalar | Dil bilen personele aktarma | Çok dilli Voice Agent ilk karşılama + not alma |

**Apollo filtreleri:**
- *Location:* Turkey (İstanbul, İzmir, Mersin, Kocaeli, Bursa)
- *Industry:* Logistics & Supply Chain · Transportation/Trucking/Railroad · Package/Freight Delivery · Maritime
- *Keywords (şirket):* `freight forwarding`, `uluslararası nakliye`, `international transport`, `lojistik`, `parsiyel`, `gümrük`
- *# Employees:* 11–50, 51–200
- *Job titles:* Kurucu, Genel Müdür, Operasyon Müdürü, COO, Business Development Manager, Satış Müdürü
- *Seniority:* Owner, Founder, C-Suite, Director, Manager
- *Niyet sinyali (önemli):* **Job Postings → "Operasyon Uzmanı", "Müşteri Temsilcisi", "Customer Service", "Dış Ticaret Operasyon"** ilanı olan şirketler. İşe alım yapan = iş yükü artan = sıcak lead.
- *Email status:* Verified only

**ROI hesabı (mailde kullan):** Günde 30 teklif talebi × talep başına 12 dk = **6 saat/gün** ≈ 1 tam zamanlı personel. Teklif Agent'ı bunun %60–70'ini üstlenirse ayda ~120 saat geri kazanılır. *(Rakamlar varsayımdır; keşif görüşmesinde müşterinin kendi rakamlarıyla yeniden hesaplanmalı.)*

---

### B) Sigorta Acenteleri & Brokerler

**ICP:** 5–100 çalışanlı, çok şirketli acenteler; trafik/kasko/DASK/sağlık ağırlıklı. Teklif hacmi yüksek.

**Tekrarlayan operasyonlar:**
| Manuel iş | AI Agent / otomasyon ile |
|---|---|
| Teklif için ruhsat/TC/plaka bilgisi toplama (WhatsApp'tan fotoğraf, telefonla tek tek) | **Bilgi Toplama Agent'ı:** WhatsApp'ta ruhsat fotoğrafını alır, alanları okur, teklif formunu doldurur |
| Poliçe yenileme hatırlatmaları | Bitişe 30/15/7 gün kala otomatik WhatsApp + sesli arama (Engage + Voice Agent) |
| Hasar ihbarı ilk kayıt | 7/24 Voice Agent ilk bilgiyi alır, dosya açar, temsilciye özet geçer |
| "Poliçem ne zaman bitiyor / ne kadar" soruları | Inboxly üzerinde otomatik yanıt |

**Apollo filtreleri:**
- *Industry:* Insurance
- *Keywords:* `sigorta acentesi`, `sigorta aracılık`, `insurance broker`, `brokerlik`, `kasko`
- *# Employees:* 5–200 (küçük acenteleri kaçırmamak için 1–10'u da ayrı listede dene)
- *Titles:* Acente Sahibi, Kurucu, Genel Müdür, Operasyon Müdürü, Satış Müdürü
- *Niyet sinyali:* "Sigorta Satış Temsilcisi", "Müşteri Temsilcisi" ilanı veren acenteler

**ROI hesabı:** Yenilemelerin %10–20'si hatırlatma yapılamadığı için başka acenteye kayıyor *(sektör genelinde sık dile getirilen bir sorun; görüşmede doğrula)*. 2.000 poliçelik bir portföyde %5 ek yenileme bile doğrudan komisyon geliridir — **maliyet tasarrufu değil, gelir kurtarma** hikâyesi anlat.

---

### C) Gayrimenkul Proje Satış Ofisleri & Konut Pazarlama Firmaları

**ICP:** Konut projesi pazarlayan inşaat firmaları, proje satış ofisleri, kurumsal emlak ofisleri (10–200 çalışan). Meta/Google reklamından günde onlarca form/WhatsApp lead'i alıyorlar.

**Tekrarlayan operasyonlar:**
| Manuel iş | AI Agent / otomasyon ile |
|---|---|
| Reklam lead'lerine geri dönüş (genelde saatler sonra) | **Lead Karşılama Agent'ı:** form geldiği 60 sn içinde WhatsApp mesajı + gerekirse Voice Agent araması |
| Ön eleme (bütçe, oda sayısı, kredi/peşin, zaman) | Agent soruları sorar, skorlar, sadece sıcak lead'i satış danışmanına aktarır |
| Ofis/şantiye ziyaret randevusu | Takvime otomatik randevu + hatırlatma |
| Yabancı yatırımcı lead'leri (Arapça, Rusça, İngilizce, Farsça) | Çok dilli WhatsApp + sesli karşılama |

**Apollo filtreleri:**
- *Industry:* Real Estate · Construction
- *Keywords:* `konut projesi`, `gayrimenkul pazarlama`, `proje satış`, `real estate development`, `yabancıya satış`, `vatandaşlık`
- *# Employees:* 11–200
- *Titles:* Satış Direktörü, Satış Müdürü, Pazarlama Müdürü, Genel Müdür, Kurucu Ortak
- *Niyet sinyali:* "Satış Danışmanı", "Call Center", "Müşteri Temsilcisi" ilanı + aktif reklam veren firmalar

**ROI hesabı:** İlk 5 dakikada dönülen lead ile saatler sonra dönülen lead arasında görüşmeye dönüşme farkı çok büyüktür. Ayda 600 lead × %2 ek randevu = 12 ek ziyaret. Tek konut satışı tüm yıllık hizmet bedelini karşılar.

---

### Ürünlerimizden bağımsız, iş yükü çok yüksek diğer meslek grupları

Bunlar Voice Agent / Inboxly / Engage'e ihtiyaç duymaz. Ortak noktaları **belge okuma, veri girişi ve takip** işleri. Bunlar LLM tabanlı agent'larla en kolay otomatikleşen işler.

| Meslek grubu | Tekrarlayan iş | Kurulacak agent | Apollo filtresi (özet) |
|---|---|---|---|
| **Gümrük müşavirliği firmaları** | Müşteriden gelen fatura/çeki listesi PDF'lerinden GTİP, miktar, ağırlık, değer bilgisini beyanname sistemine elle girmek; eksik evrak kovalamak | **Evrak Çıkarma Agent'ı:** PDF/Excel/fotoğraftan alanları çıkarır, kontrol eder, beyanname taslağına aktarır; eksik evrakı müşteriye otomatik sorar | Industry: International Trade & Development, Logistics · Keyword: `gümrük müşavirliği`, `customs broker` · Title: Kurucu, Gümrük Müşaviri, Operasyon Müdürü |
| **Toptancı / distribütör / bayi ağı olan üreticiler** | Bayilerden WhatsApp, mail, PDF ve fotoğrafla gelen siparişleri ERP'ye (Logo, Mikro, Netsis) elle girmek; stok/fiyat sorularına cevap vermek | **Sipariş Giriş Agent'ı:** her formattaki siparişi okur, ürün kodlarıyla eşleştirir, ERP'ye taslak sipariş açar; bayilere 7/24 stok/fiyat cevabı | Industry: Wholesale, Consumer Goods, Building Materials · Keyword: `toptan`, `distribütör`, `bayi` · Title: Satış Müdürü, Operasyon Müdürü, GM |
| **Üretim firmalarında satın alma birimleri** | Tedarikçilerden teklif toplamak, teklifleri karşılaştırma tablosuna dökmek, sipariş ve termin takibi | **Satın Alma Agent'ı:** RFQ'yu tedarikçilere gönderir, gelen teklifleri okuyup karşılaştırma tablosu hazırlar, gecikecek siparişleri uyarır | Industry: Manufacturing alt dalları · Title: Satın Alma Müdürü, Purchasing Manager, Tedarik Zinciri Müdürü · 51–500 çalışan |
| **İK yoğun işverenler & işe alım ajansları** (perakende, üretim, lojistik depo, call center) | Yüzlerce mavi yaka başvurusunu telefonla ön elemek, mülakat ayarlamak | **Ön Eleme Agent'ı:** başvurana WhatsApp/telefonla soru sorar (vardiya, lokasyon, deneyim), puanlar, uygunlara mülakat randevusu verir | Industry: Staffing & Recruiting, Retail, Warehousing · Title: İK Müdürü, İşe Alım Uzmanı, Talent Acquisition · Sinyal: aynı anda 10+ açık ilan |
| **Teknik servis / saha servis firmaları** (klima, asansör, jeneratör, beyaz eşya, güvenlik sistemleri) | Arıza kaydı alma, teknisyen planlama, servis formu yazma, periyodik bakım hatırlatma | **Servis Agent'ı:** arıza kaydını telefon/WhatsApp'tan alır, teknisyene atar; teknisyenin sesli notundan servis formu PDF'i üretir; bakım tarihi gelen müşteriyi arar | Industry: Facilities Services, HVAC, Electrical · Keyword: `teknik servis`, `asansör`, `klima`, `bakım` · Title: Kurucu, Servis Müdürü |
| **Kamu ihalesine giren firmalar** (inşaat, medikal, temizlik, catering, IT) | EKAP'ı her gün taramak, şartname okumak, yeterlik evrakı hazırlamak, son tarih takibi | **İhale Takip Agent'ı:** EKAP ilanlarını tarar, firmaya uygun olanları özetler, şartnameden gerekli evrak listesini çıkarır, tarih hatırlatır | Keyword: `kamu ihale`, `EKAP`, `ihale` · Title: İhale Uzmanı, İhale Müdürü, GM |

### Yedek sektörler (ilk 3 tutmazsa)
- **Araç / filo kiralama:** rezervasyon, ehliyet-evrak toplama, iade hatırlatma, hasar bildirimi.
- **Mali müşavirlik büroları:** her ay aynı evrakı yüzlerce mükelleften toplama → WhatsApp evrak agent'ı (düşük bütçe ama çok yüksek tekrar; sonra "mali müşavir paketi" ile ölçeklenebilir).
- **Özel eğitim / dil okulları:** kayıt dönemi aramaları, deneme dersi randevusu, ödeme hatırlatma (sezonsal — Ağustos–Eylül ve Ocak).

---

## 3B. Meslek grubu × hizmet modeli eşleştirmesi (öncelik sıralı)

### Hizmet modelleri (agent paketleri)

| Kod | Hizmet modeli | Ne yapar |
|---|---|---|
| **M1** | Talep/Teklif Agent'ı | Mail/WhatsApp/web'den gelen (çok dilli) talebi okur, eksikleri sorar, teklif/proforma taslağı hazırlar |
| **M2** | Evrak Çıkarma Agent'ı | PDF, Excel, fotoğraftan alanları çıkarır, kontrol eder, hedef sisteme/şablona aktarır |
| **M3** | Sipariş Giriş Agent'ı | Her formattaki siparişi ürün koduyla eşleştirip ERP'ye (Logo/Mikro/Netsis) taslak açar |
| **M4** | Lead Karşılama & Ön Eleme | Gelen lead'e 60 sn içinde WhatsApp/sesli dönüş, sorularla skorlama, randevu |
| **M5** | Hatırlatma & Takip Akışları | Yenileme, bakım, eksik evrak, fuar sonrası takip, sipariş durum bildirimi |
| **M6** | Outbound / Distribütör Bulma | Hedef pazar listesi çıkarır, zenginleştirir, kişiselleştirilmiş ilk teması ve takibi yürütür |
| **M7** | Aday Ön Eleme (İK) | Başvurana soru sorar, puanlar, mülakat randevusu verir |
| **M8** | Saha Servis Agent'ı | Arıza kaydı alır, teknisyene atar, sesli nottan servis formu üretir |
| **M9** | İhale Takip Agent'ı | EKAP'ı tarar, uygun ihaleleri özetler, evrak listesini çıkarır, tarih hatırlatır |
| **K1** | Ajans beyaz etiket (kanal) | Yukarıdaki agent'ları ajansların kendi müşterilerine satması, gelir paylaşımı |

### Eşleştirme matrisi

● = ana hizmet (ilk mailde satılan) · ○ = upsell (pilot sonrası genişleme)

| Meslek grubu | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 |
|---|---|---|---|---|---|---|---|---|---|
| İhracatçı üretici | ● | ○ |  |  | ● (fuar takibi) | ○ |  |  |  |
| Lojistik / nakliye | ● | ○ |  |  | ● (yük takibi) |  |  |  |  |
| Gümrük müşaviri |  | ● |  |  | ○ (eksik evrak) |  |  |  |  |
| Sigorta acentesi | ○ | ● (ruhsat okuma) |  |  | ● (yenileme) |  |  |  |  |
| Toptancı / distribütör | ○ |  | ● |  | ○ |  |  |  |  |
| Üretim – satın alma | ● (RFQ) | ○ |  |  | ○ (termin) |  |  |  |  |
| Gayrimenkul proje satış |  |  |  | ● | ○ |  |  |  |  |
| İK yoğun işveren / işe alım ajansı |  |  |  |  | ○ |  | ● |  |  |
| Teknik servis |  |  |  |  | ○ (bakım) |  |  | ● |  |
| Oto galeri / bayi |  |  |  | ● | ○ |  |  |  |  |
| Müteahhit (orta ölçek) |  | ● (irsaliye–fatura) |  |  |  |  |  |  |  |
| Kamu ihalesine giren firmalar |  | ○ |  |  |  |  |  |  | ● |
| Spor salonu / pilates zinciri |  |  |  | ● | ● (geri kazanım) |  |  |  |  |

**Ana çıkarım:** 3 çekirdek agent (**M1, M2, M5**) 13 meslek grubunun 9'unu karşılıyor. Önce bu üçünü yeniden kullanılabilir şablonlar olarak kur; her yeni müşteri sıfırdan proje değil, şablonun uyarlaması olsun. Teslimat süresi ve maliyet böyle düşer.

### Öncelik sıralaması

Puan = Sektör puanı (bölüm 2, /30) + Agent yeniden kullanımı (/5) + İlk satışa hız (/5).

| Sıra | Meslek grubu × Ana hizmet | Sektör | Yeniden kullanım | Hız | **Puan** | Dalga |
|---|---|---|---|---|---|---|
| 1 | **İhracatçı × M1 Talep/Proforma + M5 Fuar takibi** | 29 | 5 | 4 | **38** | 1 |
| 2 | **Lojistik × M1 Teklif + M5 Yük takibi** | 28 | 5 | 4 | **37** | 1 |
| 3 | **Gümrük müşaviri × M2 Evrak çıkarma** | 25 | 5 | 4 | **34** | 1 |
| 4 | Sigorta × M5 Yenileme + M2 Ruhsat okuma | 27 | 4 | 3 | **34** | 2 |
| 5 | Toptancı / distribütör × M3 Sipariş girişi | 25 | 3 | 4 | **32** | 2 |
| 6 | Üretim – satın alma × M1 RFQ karşılaştırma | 24* | 5 | 3 | **32** | 2 |
| 7 | Gayrimenkul × M4 Lead karşılama | 25 | 4 | 3 | **32** | 3 |
| 8 | İK / işe alım × M7 Aday ön eleme | 24 | 2 | 4 | **30** | 3 |
| 9 | Teknik servis × M8 Servis agent'ı | 24 | 2 | 3 | **29** | 3 |
| 10 | Oto galeri × M4 Lead karşılama | 21* | 4 | 3 | **28** | 3 |
| 11 | Müteahhit × M2 İrsaliye–fatura eşleştirme | 20* | 5 | 2 | **27** | 4 |
| 12 | Spor salonu zinciri × M4 + M5 | 20* | 4 | 2 | **26** | 4 |
| 13 | Kamu ihalesi × M9 İhale takip | 21 | 1 | 3 | **25** | 4 |
| — | **İhracatçı × M6 Distribütör bulma** | — | — | — | upsell | 1'in genişlemesi |
| — | **Ajans × K1 Beyaz etiket** | — | — | — | kanal | 3 vaka çalışmasından sonra |

\* Bölüm 2 tablosunda olmayanlar için aynı kriterlerle tahmini puan.

### Dalga planı

- **Dalga 1 (Ay 1–2) — "Dış Ticaret Operasyonları":** İhracatçı + lojistik + gümrük müşaviri. M1, M2, M5 şablonları burada olgunlaşır. Hedef: 3 pilot, 2 vaka çalışması. İhracatçı müşterilere ilk upsell M6 (distribütör bulma).
- **Dalga 2 (Ay 3–4) — aynı agent'larla yeni sektörler:** Sigorta (M5+M2), toptancı (M3), satın alma (M1). Yeni geliştirme az; mesaj ve entegrasyon uyarlaması yeterli.
- **Dalga 3 (Ay 5–6) — lead ve müşteri iletişimi:** Gayrimenkul, oto galeri (M4: mevcut Voice Agent + Inboxly), İK (M7), teknik servis (M8).
- **Dalga 4 / fırsatçı:** Müteahhit, ihale, spor salonu zincirleri. Sadece gelen talep veya referans olursa.
- **Kanal (Dalga 1 sonrası paralel):** Vaka çalışmalarıyla dijital ajanslara beyaz etiket teklifi (K1).

## 4. Teklif mimarisi (her sektörde aynı iskelet)

Soğuk mailde **yazılım değil, düşük riskli ilk adım** satılır:

1. **Giriş teklifi (ücretsiz, 30 dk): "Manuel İş Yükü Haritası"**
   Bir görüşmede firmanın en çok tekrar eden 3 sürecini çıkarıp, her biri için "kaç saat / kaç kişi / ne kadar otomasyona uygun" raporu veriyorsun. Mail CTA'sı bu olmalı — demo değil.
2. **Pilot (ücretli, 14–21 gün): Tek süreç otomasyonu**
   Örn. sadece "teklif taleplerinin karşılanması". Başarı kriteri baştan yazılı: "Taleplerin %60'ı insan dokunmadan yapılandırılmış hale gelecek."
   Önerilen fiyat bandı: kurulum ₺30.000–75.000 *(pilot başarısızsa iade/indirim garantisi ile — risk tersine çevirme)*.
3. **Aylık işletme (retainer):** ₺12.500–30.000/ay — agent'ların bakımı, iyileştirme, raporlama, yeni süreç ekleme.
4. **Genişleme:** İkinci, üçüncü süreç → vizyondaki "tüm tekrarlayan operasyonlar".

> Fiyatlar başlangıç önerisidir; ilk 3 müşteride "referans müşteri" indirimi verip vaka çalışması (case study) almak, fiyattan daha değerlidir.

**Site tarafında yapılacak minimum değişiklik:** Soğuk maildeki linkin gideceği tek bir sektör sayfası (örn. `callypsotech.com/lojistik`): başlık = sonuç, 3 otomasyon örneği, ROI hesabı, "Manuel İş Yükü Haritası al" butonu. Ürün sayfalarını `vercel.app` yerine kendi alan adına taşı.

---

## 5. Mail sekansları

> Tüm meslek grupları için güncel ve eksiksiz şablonlar: [`mail-sablonlari.md`](mail-sablonlari.md)

**Kurallar:** 60–110 kelime · link yok veya en fazla 1 (ilk mailde hiç olmasın, deliverability için) · görsel/imza bannerı yok · tek CTA · "AI" kelimesini konu satırında kullanma · kişiselleştirme değişkeni en az 1 tane gerçekten şirkete özel olsun.

Apollo değişkenleri: `{{first_name}}`, `{{company}}`, `{{city}}`. Ek özel alan önerisi: `{{hiring_role}}` (işe alım ilanındaki pozisyon), `{{route}}` (lojistik için ana hat: Avrupa, Orta Doğu vb.).

### 0) İhracatçı üreticiler — 4 adım

**Adım 1 (Gün 0)**
Konu: `{{company}} yurt dışı talepleri`
> Merhaba {{first_name}},
>
> İhracatçı firmalarla konuştuğumuzda dış ticaret ekibinin zamanının büyük kısmının aynı işlere gittiğini görüyoruz: farklı dillerde gelen fiyat sorularını cevaplamak, proforma hazırlamak, "siparişim ne durumda" maillerine dönmek.
>
> Bu işleri AI agent'lara devrediyoruz. Agent gelen talebi her dilde okuyor, kataloğunuzdan ve fiyat listenizden cevap ile proforma taslağı hazırlıyor. Ekibiniz sadece kontrol edip gönderiyor.
>
> {{company}}'nin dış ticaret operasyonunda hangi işlerin bu şekilde devredilebileceğini 30 dakikalık bir görüşmede çıkarıp ücretsiz bir rapor hazırlayabilirim. İlgilenir misiniz?
>
> Furkan — CallypsoTech

**Adım 2 (Gün 3) — Fuar açısı** · Konu: `Fuar sonrası kartvizitler`
> {{first_name}}, ihracatçıların çoğunda aynı sahneyi görüyoruz: fuardan 150–200 kartvizitle dönülüyor, ilk hafta sipariş ve üretim yoğunluğu araya giriyor, takip mailleri ancak bir kısmına gidiyor.
>
> Kartvizit fotoğrafından kişiyi CRM'e ekleyen ve 48 saat içinde kendi dilinde 3 adımlı takip başlatan bir akış kuruyoruz. Bir sonraki fuarınızdan önce kurmak ister misiniz?

*(Kişinin firması yakın tarihli bir fuara katıldıysa ilk cümleyi değiştir: "{{fair_name}} sonrası {{company}} ekibinin elinde epey kartvizit kalmıştır diye tahmin ediyorum.")*

**Adım 3 (Gün 7)** · Konu: aynı thread
> {{first_name}}, basit bir hesap paylaşayım: haftada 40 yabancı dilde soru ve soru başına 20 dakika, ayda 50 saatten fazla ediyor. Bu, bir dış ticaret uzmanının mesaisinin üçte biri. Bu kısmı otomatiğe bağlayınca ekip yeni müşteri bulmaya vakit ayırabiliyor. Kısa bir örnek göstermemi ister misiniz?

**Adım 4 (Gün 12)** — breakup (lojistik ile aynı yapı).

### A) Lojistik — 4 adım

**Adım 1 (Gün 0)**
Konu: `{{company}} teklif talepleri`
> Merhaba {{first_name}},
>
> Nakliye firmalarıyla konuştuğumuzda en çok duyduğumuz şey şu: operasyon ekibinin gününün yarısı gelen teklif taleplerini okumak, eksik ölçü/ağırlık bilgisini sormak ve Excel'e girmekle geçiyor.
>
> Biz bu kısmı bir AI agent'a devrediyoruz: mail ve WhatsApp'tan gelen talebi okuyor, eksikleri müşteriye kendisi soruyor, ekibinize sadece fiyatlanmaya hazır talebi bırakıyor.
>
> {{company}} için hangi işlerin bu şekilde devredilebileceğini 30 dakikada çıkarıp size ücretsiz bir "manuel iş yükü haritası" hazırlayabilirim. Uygun olur mu?
>
> Furkan — CallypsoTech

**Adım 2 (Gün 3)** — Konu: aynı thread
> {{first_name}}, kısa bir rakam paylaşayım: günde 30 teklif talebi ve talep başına ~12 dakika, ayda yaklaşık 120 saat ediyor. Bu, neredeyse bir operasyon uzmanının tüm mesaisi.
>
> {{hiring_role}} pozisyonu için ilan verdiğinizi gördüm — yeni kişiyi alırken bu tekrar eden kısmı otomatiğe bağlamak, yeni gelenin gerçek operasyona odaklanmasını sağlar. İlgilenirseniz nasıl çalıştığını 1 örnekle gösterebilirim.

*(İşe alım sinyali yoksa ikinci paragrafı "Ekip büyümeden bu yükü azaltmak isteyen firmalarla çalışıyoruz." ile değiştir.)*

**Adım 3 (Gün 7)** — Konu: `"Yüküm nerede?" soruları`
> {{first_name}}, teklif tarafı öncelik değilse başka bir yerden sorayım: müşterilerinizden günde kaç kez "yüküm nerede?" telefonu/WhatsApp'ı geliyor?
>
> Bunu referans numarasıyla 7/24 yanıtlayan (Türkçe, İngilizce, Almanca, Arapça…) bir asistan kuruyoruz. Ekibiniz sadece istisnalarla ilgileniyor. Bakmak ister misiniz?

**Adım 4 (Gün 12)** — Konu: aynı thread (breakup)
> {{first_name}}, sizi daha fazla meşgul etmeyeyim. Operasyon tarafında tekrar eden işleri azaltmak ileride gündeminize gelirse bu maile "evet" yazmanız yeterli, haritayı hazırlarım.

### B) Sigorta acenteleri — 4 adım

**Adım 1** — Konu: `{{company}} yenileme dönemi`
> Merhaba {{first_name}},
>
> Acentelerle konuştuğumuzda iki konu hep öne çıkıyor: teklif için ruhsat/TC bilgisini WhatsApp'tan tek tek toplamak ve bitişi yaklaşan poliçeleri zamanında aramaya yetişememek.
>
> Bu iki işi bir AI asistana devrediyoruz: ruhsat fotoğrafını WhatsApp'tan alıp teklif bilgilerini çıkarıyor, poliçe bitişine 30/15/7 gün kala müşteriyi kendisi hatırlatıyor ve sıcak olanları temsilcinize aktarıyor.
>
> {{company}}'nin portföyünde bunun kaç yenilemeyi kurtarabileceğini 30 dakikada birlikte hesaplayalım mı?

**Adım 2 (Gün 3)**
> {{first_name}}, basit bir hesap: 2.000 poliçelik bir portföyde yenilemelerin sadece %5'ini ek olarak tutmak, 100 poliçe demek. Bunun için ekibe yeni kişi almak yerine hatırlatma ve ilk bilgi toplama işini otomatiğe bağlıyoruz. İlgilenirseniz örnek akışı gönderebilirim.

**Adım 3 (Gün 7)** — Konu: `Mesai dışı hasar ihbarları`
> {{first_name}}, gece veya hafta sonu gelen hasar aramaları sizde nasıl karşılanıyor? 7/24 ilk kaydı alan, dosyayı açan ve sabah temsilciye özet bırakan sesli asistan kuruyoruz. Size uygun bir senaryo olabilir mi?

**Adım 4 (Gün 12)** — breakup (lojistik ile aynı yapı).

### C) Gayrimenkul — 4 adım

**Adım 1** — Konu: `{{company}} reklam formları`
> Merhaba {{first_name}},
>
> Proje satış ekipleriyle konuştuğumuzda en büyük kaybın reklamdan gelen form ve WhatsApp mesajlarına geç dönülmesi olduğunu görüyoruz — lead soğuyor, reklam bütçesi boşa gidiyor.
>
> Biz bunu bir AI asistanla çözüyoruz: form geldiği ilk dakika içinde müşteriye WhatsApp'tan yazıyor (gerekirse arıyor), bütçe / oda sayısı / ödeme şeklini soruyor, sadece hazır olanı randevuyla danışmanınıza aktarıyor. Yabancı yatırımcılarla kendi dillerinde konuşuyor.
>
> {{company}}'nin mevcut lead akışında bunun nasıl çalışacağını 30 dakikada gösterebilirim. Uygun mu?

**Adım 2 (Gün 3)**
> {{first_name}}, şöyle düşünürsek: ayda 600 lead'de sadece %2 ek ziyaret, 12 yeni görüşme demek. Tek bir satış, yıllık hizmet bedelinin tamamını karşılıyor. Akışın ekran görüntülerini paylaşabilirim.

**Adım 3 (Gün 7)** — Konu: `Hafta sonu gelen lead'ler`
> {{first_name}}, Cumartesi akşamı gelen bir form sizde ne zaman aranıyor? Çoğu ekipte Pazartesi. Bu boşluğu kapatmak için kuruyoruz — ilgilenirseniz kısa bir demo yapalım.

**Adım 4 (Gün 12)** — breakup.

### LinkedIn eşlik (opsiyonel ama yanıtı 1,5–2 katına çıkarır)
- Gün 1: Mail atılan kişiye **notsuz** bağlantı isteği.
- Gün 5: Kabul ettiyse: "Merhaba {{first_name}}, operasyon otomasyonu üzerine mail atmıştım, burada da bağlantıda olalım istedim." (satış yok)

---

## 6. Apollo & gönderim kurulumu

1. **Liste büyüklüğü:** Her sektör için 300–400 doğrulanmış kişi (toplam ~1.000). Şirket başına en fazla 2 kişi (örn. GM + Operasyon Müdürü), aynı gün değil.
2. **Ayrı gönderim alan adı:** `callypsotech.co` / `trycallypso.com` gibi; SPF, DKIM, DMARC kur. Ana alan adını riske atma.
3. **Isınma:** Yeni inbox'ları 2–3 hafta ısıt; inbox başına günde **30–40 mail** üstüne çıkma. 1.000 kişi × 4 adım için 3–4 inbox yeterli.
4. **Gönderim saati:** Salı–Perşembe, 08:30–10:30 (TR saati).
5. **Sinyal öncelik sırası:** (1) İşe alım ilanı olanlar → (2) Son 90 günde büyüyen çalışan sayısı → (3) Diğerleri. İlk dalgayı sinyalli listeye at.
6. **Etiketleme:** Apollo'da her sekans için ayrı sequence; yanıtları "olumlu / sonra / yanlış kişi / ilgisiz" diye etiketle.

---

## 7. 30 günlük test planı ve karar kuralı

| Hafta | İş |
|---|---|
| 0 (hazırlık) | Gönderim alan adı + inbox ısınması, 3 sektör listesi, sektör landing sayfası (en az lojistik için) |
| 1–3 | 3 sektöre paralel 4 adımlı sekans; her sektörde 2 farklı ilk mail konu satırı A/B testi |
| 4 | Karar: en yüksek **olumlu yanıt oranı** olan sektör beachhead olur, bütçenin %80'i ona kayar |

**Hedef metrikler (sektör başına):**
- Açılma oranı: > %45 (altındaysa deliverability sorunu var, mesajı değil altyapıyı düzelt)
- Yanıt oranı: > %4
- Olumlu yanıt oranı: > %1,5
- 300 kişiden → 4–6 keşif görüşmesi → 1–2 pilot

**Beachhead seçildikten sonra:** İlk 3 pilot müşteriden vaka çalışması al ("X Lojistik teklif yanıt süresini 4 saatten 6 dakikaya indirdi") → bu vaka, aynı sektördeki sonraki tüm maillerin 2. adımına girer. Sektör içinde ağızdan ağıza yayılma başlar; vizyondaki geniş pazara ancak bu referanslarla açılınır.

---

## 8. kopyalanacak-1000.vercel.app analizinden çıkan fikirler

Site, Apify `website-content-crawler` ile tarandı. Sitede **TrustMRR'den (Stripe ile doğrulanmış gelir) seçilmiş 1.000 SaaS** var (435 B2B, 115 karma, 450 B2C). Liste yazılım ürünleri hakkında; ama hangi mesleklerin otomasyon için **gerçekten para ödediğini** gösteren iyi bir talep kanıtı. Ürün/hizmet tanımlarını meslek anahtar kelimelerine göre grupladım. Bizim hizmet modelimize uyan sinyaller:

| Sitedeki kanıt (doğrulanmış gelir) | Ne gösteriyor | Bizim için çıkarım |
|---|---|---|
| **MedPilot** ~$62,6 bin/ay: kliniklere telefon+WhatsApp AI resepsiyonist. **ScaleMove**, **AI voice calls**: 7/24 sesli ajan | Voice Agent kategorisi para kazanıyor, ama yine klinik odaklı | Ürün doğru, **sektör doygun.** Aynı Voice Agent'ı servis firmaları, sigorta ve oto galeriye taşı. |
| **Helios** ~$47 bin/ay: spor salonu/pilates stüdyolarına deneme dersi takibi + WhatsApp geri kazanım | Spor salonları, lead takibi otomasyonuna ödeme yapıyor | **Yeni meslek grubu:** zincir spor salonları ve pilates stüdyoları (yerel; Apollo'dan çok Google Maps ile bulunur). |
| **Calendesk** ~$34,7 bin/ay, **Mypic**: psikolog, diyetisyen, güzellik için randevu + WhatsApp hatırlatma | Randevulu meslekler hatırlatma için ödüyor | Düşük bilet; tek tek değil, **zincir/franchise** merkezlere sat. |
| **Sbl** ~$33 bin/ay, **PipeLime**, **MimikFlow**, **GojiberryAI** ~$407 bin/ay: B2B satış için niyet sinyali + otomatik mesaj | **Outbound satış otomasyonu** çok büyük ve büyüyen bir kategori | **Yeni hizmet fikri:** ihracatçılara "yurt dışı distribütör bulma + otomatik ilk temas" agent'ı. Kendi Apollo/Apify bilgin burada doğrudan satılabilir bir hizmet. |
| **ZUUZ**: gelen e-postalardan teklif/sipariş yakalayıp yanıt taslağı yazan ve CRM'e işleyen araç | Gelen kutusundaki teklif/sipariş otomasyonu ödeme alıyor | İhracatçı & lojistik "Inquiry Agent" hizmetini doğruluyor. |
| **Textwork**: mavi yaka adaylarını WhatsApp'ta ön elemeden geçiren bot. **Hirevire**: video ön mülakat | İK ön elemesi ayrı bir ödeme kalemi | **Yeni meslek grubu:** perakende, depo, üretim işverenleri ve işe alım ajansları. |
| **Valideo**, **Tutti**, **GESWORK**: teknisyenin sesli notundan servis formu/teklif/fatura | Saha servis firmaları belge yükü için ödüyor | **Yeni meslek grubu:** teknik servis firmaları (yukarıdaki tabloya eklendi). |
| **Brinkr**: şantiye irsaliyelerini fotoğraftan okuyup faturayla eşleştirme. **Khosmos** ~$23 bin/ay: ustalara sahada teklif/fatura | İnşaat evrak yükü | **Yeni meslek grubu:** orta ölçekli müteahhitler. İrsaliye–fatura eşleştirme muhasebe birimlerinde çok sık tekrar eden bir iş. |
| **Akal AI**: oto galerilerin ilan sitelerinden gelen sorularına mesai dışı WhatsApp cevabı. **Jozi**: arama kaydı → CRM | Galericiler gece/hafta sonu kaçan lead'e ödüyor | **Yeni meslek grubu:** kurumsal oto galeriler / bayiler (sahibinden.com lead'leri). |
| **Elevum Group**: kamu ihalesi bulma + teklif hazırlama | İhale takibi ücretli bir iş | **Yeni meslek grubu:** EKAP'a giren firmalar (tabloya eklendi). |
| **JourneyFuse** ~$19 bin/ay: seyahat acenteleri için teklif PDF + taksit takibi | Acenteler teklif ve ödeme takibine ödüyor | Turizm acenteleri yedek sektör olabilir (sezonsal). |
| **ChatDash** ~$17 bin/ay: ajansların kendi markasıyla müşterilerine AI asistan sattığı beyaz etiket panel | Ajanslar AI'ı **yeniden satmak** istiyor | **Kanal fikri:** dijital ajanslarla beyaz etiket ortaklığı. Sen kurarsın, ajans kendi müşterisine satar (gelir paylaşımı). Tek tek satıştan daha hızlı ölçeklenir. |
| **Tizy**: tarayıcıdan yurt dışı aramayı canlı çeviren servis (hedef: ihracatçı, emlakçı, sağlık turizmi) | İhracatçılar dil engeli için ödeme yapıyor | Voice Agent'ın çok dilli özelliği ihracatçıya ayrıca satılabilir. |

**Özet:** Site üç yeni meslek grubu (teknik servis, mavi yaka işe alım, oto galeri) ve iki yeni iş modeli fikri getirdi: (1) **ihracatçılara outbound/distribütör bulma hizmeti**, (2) **ajanslarla beyaz etiket ortaklığı**. Ayrıca site, kliniklere sesli AI satan rakiplerin halihazırda iyi gelir yaptığını gösteriyor. Bu da kliniklerin neden zor bir pazar olduğunu doğruluyor.

---

## 9. Apify ile yapılabilecek ek veri çalışması (bekleyen)

`website-content-crawler` (ücretsiz actor, sadece işlem birimi harcıyor) çalıştı. Ancak Google Maps yorum taraması gibi **ücretli actor'lar** hesabın bu dönemki kalan limiti (~$0,21) yetmediği için çalıştırılamadı. Limit yenilendiğinde önerilen çalışmalar:

0. **Fuar katılımcı listeleri (ihracatçılar için en değerli):** Heimtextil, Automechanika, Anuga, SIAL, Gulfood gibi fuarların katılımcı sayfalarını `website-content-crawler` ile tarayıp "Turkey" filtresiyle Türk katılımcıları çıkar → Apollo'da firma adıyla zenginleştir → fuardan 1–2 hafta sonra Adım 2 (fuar) mailiyle başla.

1. **Ağrı kanıtı:** `compass/crawler-google-places` ile hedef sektörlerde (İstanbul, İzmir, Mersin) düşük puanlı yorumları çek; "telefona çıkmıyorlar", "dönüş yapmadılar", "ulaşamadım" geçen yorum oranını sektör bazında hesapla. Bu oran hem sektör seçimini doğrular hem de mail 2. adımında kullanılabilir.
2. **Niyet sinyali:** Kariyer.net / LinkedIn iş ilanı scraper'ı ile "müşteri temsilcisi", "operasyon uzmanı", "call center" ilanı veren şirketleri çekip Apollo listesiyle eşleştir.
3. **Reklam veren gayrimenkul firmaları:** Meta Ad Library scraper ile aktif konut reklamı veren firmaları listele → C sekansının en sıcak segmenti.
