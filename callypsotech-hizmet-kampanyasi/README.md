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

| Sektör | Apollo | Tekrar | Ürün uyumu | Ödeme/Karar | ROI | Doygunluk az | **Toplam** |
|---|---|---|---|---|---|---|---|
| **Lojistik / uluslararası nakliye (freight forwarding)** | 5 | 5 | 4 | 4 | 5 | 5 | **28** |
| **Sigorta acenteleri & brokerler** | 4 | 5 | 5 | 4 | 5 | 4 | **27** |
| **Gayrimenkul proje satış / konut pazarlama** | 4 | 4 | 5 | 5 | 4 | 3 | **25** |
| Mali müşavirlik büroları | 4 | 5 | 4 | 2 | 4 | 4 | 23 |
| Araç kiralama & filo kiralama | 3 | 4 | 5 | 4 | 4 | 4 | 24 |
| Özel eğitim / dil okulları / kurslar | 3 | 4 | 5 | 3 | 4 | 3 | 22 |
| E-ticaret (önceki) | 4 | 4 | 5 | 3 | 4 | 1 | 21 |
| Klinikler (önceki) | 2 | 4 | 5 | 3 | 4 | 1 | 19 |

**Öneri:** İlk 3 sektörü (lojistik, sigorta, gayrimenkul) **paralel olarak 3 hafta test et**, en yüksek olumlu yanıt oranını vereni **beachhead** (ilk pazar) seç ve diğer ikisini durdur. Benim önceden tahminim: **Lojistik** — çünkü Türkiye'de LinkedIn'de en aktif KOBİ sektörlerinden biri, iş yükü e-posta/telefon ağırlıklı ve çok dilli (Voice Agent'ın 50+ dil desteği burada gerçek bir avantaj).

---

## 3. Sektör kartları

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

### Yedek sektörler (ilk 3 tutmazsa)
- **Araç / filo kiralama:** rezervasyon, ehliyet-evrak toplama, iade hatırlatma, hasar bildirimi.
- **Mali müşavirlik büroları:** her ay aynı evrakı yüzlerce mükelleften toplama → WhatsApp evrak agent'ı (düşük bütçe ama çok yüksek tekrar; sonra "mali müşavir paketi" ile ölçeklenebilir).
- **Özel eğitim / dil okulları:** kayıt dönemi aramaları, deneme dersi randevusu, ödeme hatırlatma (sezonsal — Ağustos–Eylül ve Ocak).

---

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

**Kurallar:** 60–110 kelime · link yok veya en fazla 1 (ilk mailde hiç olmasın, deliverability için) · görsel/imza bannerı yok · tek CTA · "AI" kelimesini konu satırında kullanma · kişiselleştirme değişkeni en az 1 tane gerçekten şirkete özel olsun.

Apollo değişkenleri: `{{first_name}}`, `{{company}}`, `{{city}}`. Ek özel alan önerisi: `{{hiring_role}}` (işe alım ilanındaki pozisyon), `{{route}}` (lojistik için ana hat: Avrupa, Orta Doğu vb.).

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

## 8. Apify ile yapılabilecek ek veri çalışması (bekleyen)

Sağlanan Apify hesabıyla Google Maps yorum taraması denendi; ancak hesabın bu fatura döneminde kalan kullanım limiti (~$0,21) ücretli actor çalıştırmaya yetmediği için **çalışma yapılamadı**. Limit yenilendiğinde önerilen çalışmalar:

1. **Ağrı kanıtı:** `compass/crawler-google-places` ile hedef sektörlerde (İstanbul, İzmir, Mersin) düşük puanlı yorumları çek; "telefona çıkmıyorlar", "dönüş yapmadılar", "ulaşamadım" geçen yorum oranını sektör bazında hesapla. Bu oran hem sektör seçimini doğrular hem de mail 2. adımında kullanılabilir.
2. **Niyet sinyali:** Kariyer.net / LinkedIn iş ilanı scraper'ı ile "müşteri temsilcisi", "operasyon uzmanı", "call center" ilanı veren şirketleri çekip Apollo listesiyle eşleştir.
3. **Reklam veren gayrimenkul firmaları:** Meta Ad Library scraper ile aktif konut reklamı veren firmaları listele → C sekansının en sıcak segmenti.
