# Mail Şablonları: Hangi Meslek Grubuna, Ne Zaman, Hangi Mail

Bu dosyadaki şablonlar doğrudan Apollo sequence'ına kopyalanabilir. Her başlıktaki **[Link]** kodu `apollo-linkleri.md` dosyasındaki listeyi gösterir.

---

## 1. Gönderim takvimi: kime, ne zaman?

| Hafta | Gruplar (Apollo link kodu) | Günlük hacim | Amaç |
|---|---|---|---|
| 0 | — | Isınma | Ayrı gönderim alan adı, 3–4 inbox ısınması, İYS kaydı |
| 1–3 | **İhracatçı: 1B Tekstil + 1C Makine** · **2 Lojistik** · **3 Gümrük** | inbox başı 30–40 | Dalga 1 testi: her gruba 150–300 kişi |
| 3 | 1D Gıda + 1E Mobilya (1B/1C yanıt veriyorsa) | aynı | İhracatçı segmentini genişletme |
| 4 | Karar haftası | — | En yüksek olumlu yanıt oranı veren grup beachhead olur |
| 5–8 | **4 Sigorta** · **5 Toptancı** · **6 Satın alma** | aynı | Dalga 2 |
| 9+ | 7 Gayrimenkul · 8A/8B İK · 9 Teknik servis · 10 Oto galeri | aynı | Dalga 3 |
| Fırsatçı | 11 Müteahhit · 12 Spor · 13 İhale | düşük | Sadece Dalga 1–3 kapasite bırakırsa |
| Vaka çalışması sonrası | K1 Ajanslar | düşük | Kanal ortaklığı |

**Kural:** Aynı anda en fazla 3 grup. Her grup için ayrı Apollo sequence aç; yanıt oranı gruplar arasında karışmasın.

---

## 2. Her mail için ortak kurallar

- **Uzunluk:** 60–110 kelime. Telefonda tek ekranda okunmalı.
- **Link:** 1. mailde link yok. 2. ve 3. mailde en fazla 1 link.
- **Konu satırı:** 2–4 kelime, küçük harf ağırlıklı, şirket adı içerebilir. "AI", "yapay zeka", "otomasyon", "ücretsiz", "fırsat" kelimeleri konu satırında olmasın; spam filtresine takılır.
- **Tek CTA:** "30 dakikalık görüşme" ya da "örnek göstereyim mi?" Demo linki, takvim linki ve fiyat ilk mailde olmasın.
- **Dil:** "Siz" hitabı. Kurumsal ama sade; jargon yok.
- **Kişiselleştirme:** Apollo değişkenleri `{{first_name}}`, `{{company}}`, `{{city}}`. Her grupta en az bir **gerçek sinyal** kullan (iş ilanı, fuar, şehir, ürün grubu).
- **Ritim:** Gün 0 → Gün 3 → Gün 7 → Gün 12. Salı–Perşembe, 08:30–10:30.
- **Yanıt geldiğinde:** Sequence otomatik dursun (Apollo ayarı). Olumlu yanıta 2 saat içinde dönülsün.

**Her mailin altına eklenecek yasal satır (İYS / 6563):**
```
Furkan Alumert — CallypsoTech · İstanbul · callypsotech.com
Bu e-postayı tacir/işletme sıfatınızla gönderiyorum. Almak istemezseniz "çıkar" yazmanız yeterli; listeden aynı gün çıkarırım.
```

**Ortak 4. adım (breakup), tüm gruplarda aynı:**
> {{first_name}}, sizi daha fazla meşgul etmeyeyim. Tekrar eden operasyon işlerini azaltmak ileride gündeminize gelirse bu maile "evet" yazmanız yeterli; 30 dakikada sizin için bir iş yükü haritası çıkarırım.

---

## 3. DALGA 1

### 3.1 İhracatçı üreticiler [Link 1A–1E]

**Açı:** Dış ticaret ekibinin zamanı, yabancı dilde gelen sorulara, proformaya ve fuar takibine gidiyor.
**Ek değişken:** `{{sector}}` (tekstil/makine/gıda/mobilya), varsa `{{fair_name}}`.

**Mail 1 · Gün 0** · Konu: `{{company}} yurt dışı talepleri`
> Merhaba {{first_name}},
>
> {{sector}} ihracatçılarıyla konuştuğumuzda dış ticaret ekibinin gününün büyük kısmı aynı işlere gidiyor: farklı dillerde gelen fiyat sorularını cevaplamak, proforma hazırlamak, "siparişim ne durumda" maillerine dönmek.
>
> Bu işleri AI agent'lara devrediyoruz. Agent gelen talebi her dilde okuyor, kataloğunuz ve fiyat listenizden cevap ile proforma taslağı hazırlıyor; ekibiniz sadece kontrol edip gönderiyor.
>
> {{company}}'de hangi işlerin bu şekilde devredilebileceğini 30 dakikada çıkarıp size bir rapor hazırlayabilirim. Uygun olur mu?

**Mail 2 · Gün 3** · Konu: `fuar sonrası kartvizitler`
> {{first_name}}, ihracatçıların çoğunda aynı tablo var: fuardan 150–200 kartvizitle dönülüyor, sipariş yoğunluğu araya giriyor, takip mailleri ancak bir kısmına gidiyor.
>
> Kartvizit fotoğrafından kişiyi CRM'e ekleyip 48 saat içinde kendi dilinde 3 adımlı takip başlatan bir akış kuruyoruz. Bir sonraki fuarınızdan önce kurmak ister misiniz?

*Fuar sinyali varsa ilk cümle:* "{{fair_name}} sonrası ekibinizin elinde epey kartvizit kalmıştır diye tahmin ediyorum."

**Mail 3 · Gün 7** · aynı thread
> {{first_name}}, kısa bir hesap: haftada 40 yabancı dilde soru × 20 dakika, ayda 50 saatten fazla ediyor. Bu, bir dış ticaret uzmanının mesaisinin üçte biri. Bu kısmı otomatiğe bağlayınca ekip yeni pazar ve müşteri bulmaya vakit ayırabiliyor. 1 örnekle göstermemi ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

### 3.2 Lojistik / uluslararası nakliye [Link 2]

**Açı:** Teklif talepleri ve "yüküm nerede?" soruları.
**Ek değişken:** `{{hiring_role}}` (açık iş ilanı varsa).

**Mail 1 · Gün 0** · Konu: `{{company}} teklif talepleri`
> Merhaba {{first_name}},
>
> Nakliye firmalarıyla konuştuğumuzda en çok duyduğumuz şey şu: operasyon ekibinin gününün yarısı teklif taleplerini okumak, eksik ölçü/ağırlık bilgisini sormak ve Excel'e girmekle geçiyor.
>
> Bu kısmı bir AI agent'a devrediyoruz. Agent mail ve WhatsApp'tan gelen talebi okuyor, eksikleri müşteriye kendisi soruyor, ekibinize sadece fiyatlanmaya hazır talebi bırakıyor.
>
> {{company}} için hangi işlerin devredilebileceğini 30 dakikada çıkarabilirim. Uygun olur mu?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, günde 30 teklif talebi × talep başına 12 dakika, ayda yaklaşık 120 saat ediyor; neredeyse bir operasyon uzmanının tüm mesaisi.
>
> *(İlan varsa)* {{hiring_role}} ilanınızı gördüm. Yeni kişiyi alırken bu tekrar eden kısmı otomatiğe bağlamak, yeni gelenin gerçek operasyona odaklanmasını sağlar.
> *(İlan yoksa)* Ekip büyütmeden bu yükü azaltmak isteyen firmalarla çalışıyoruz. Nasıl çalıştığını bir örnekle gösterebilirim.

**Mail 3 · Gün 7** · Konu: `"yüküm nerede?" soruları`
> {{first_name}}, müşterilerinizden günde kaç kez "yüküm nerede?" telefonu ya da WhatsApp'ı geliyor? Bunu referans numarasıyla 7/24, Türkçe, İngilizce, Almanca ve Arapça yanıtlayan bir asistan kuruyoruz; ekibiniz sadece istisnalarla ilgileniyor. Bakmak ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

### 3.3 Gümrük müşavirliği [Link 3]

**Açı:** Müşteriden gelen fatura/çeki listesi verisinin beyannameye elle girilmesi ve eksik evrak kovalamak.

**Mail 1 · Gün 0** · Konu: `beyanname veri girişi`
> Merhaba {{first_name}},
>
> Gümrük müşavirliği firmalarında en çok zaman alan işlerden biri, müşteriden PDF, Excel ya da fotoğraf olarak gelen fatura ve çeki listelerindeki GTİP, miktar, ağırlık ve kıymet bilgisini sisteme elle girmek.
>
> Bu işi bir AI agent'a devrediyoruz. Agent evraktan alanları çıkarıyor, tutarsızlıkları (ağırlık–miktar uyumsuzluğu, eksik GTİP) işaretliyor, beyanname taslağına hazır hale getiriyor. Uzmanınız kontrol edip onaylıyor.
>
> {{company}}'de dosya başına ne kadar süre kazanılabileceğini 30 dakikada birlikte hesaplayalım mı?

**Mail 2 · Gün 3** · Konu: `eksik evrak takibi`
> {{first_name}}, bir de şu taraf var: dosyada eksik evrak olduğunda müşteriyi arayıp mail atıp beklemek. Eksik evrakı otomatik tespit edip müşteriye WhatsApp/mail ile hatırlatan, gelince dosyaya ekleyen bir akış kuruyoruz. Bu sizde ne kadar zaman alıyor?

**Mail 3 · Gün 7** · aynı thread
> {{first_name}}, günde 25 dosya × dosya başına 15 dakika veri girişi, ayda 120 saatin üzerinde ediyor. Yoğun sezonda bu, fazla mesai ya da geciken dosya demek. Kendi evraklarınızdan biriyle nasıl çalıştığını göstermemi ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

## 4. DALGA 2

### 4.1 Sigorta acenteleri & brokerler [Link 4]

**Açı:** Maliyet tasarrufu değil, **kaçan yenilemeleri geri kazanmak**.

**Mail 1 · Gün 0** · Konu: `{{company}} yenileme dönemi`
> Merhaba {{first_name}},
>
> Acentelerle konuştuğumuzda iki konu hep öne çıkıyor: teklif için ruhsat ve TC bilgisini WhatsApp'tan tek tek toplamak ve bitişi yaklaşan poliçeleri zamanında arayamamak.
>
> Bu iki işi bir AI asistana devrediyoruz. Asistan ruhsat fotoğrafından teklif bilgilerini çıkarıyor; poliçe bitişine 30, 15 ve 7 gün kala müşteriyi kendisi hatırlatıyor ve ilgilenenleri temsilcinize aktarıyor.
>
> {{company}}'nin portföyünde bunun kaç yenilemeyi kurtarabileceğini 30 dakikada birlikte hesaplayalım mı?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, basit bir hesap: 2.000 poliçelik bir portföyde yenilemelerin %5'ini ek olarak tutmak 100 poliçe demek. Bunun için yeni kişi almak yerine hatırlatma ve bilgi toplama işini otomatiğe bağlıyoruz. Örnek akışı göndereyim mi?

**Mail 3 · Gün 7** · Konu: `mesai dışı hasar ihbarları`
> {{first_name}}, gece veya hafta sonu gelen hasar aramaları sizde nasıl karşılanıyor? 7/24 ilk kaydı alan, dosyayı açan ve sabah temsilciye özet bırakan bir sesli asistan kuruyoruz. Size uygun bir senaryo olabilir mi?

**Mail 4 · Gün 12** · ortak breakup

---

### 4.2 Toptancı / distribütör [Link 5]

**Açı:** Bayilerden her formatta gelen siparişlerin ERP'ye elle girilmesi.
**Ek değişken:** `{{erp}}` (Logo / Mikro / Netsis; Apollo teknoloji alanında görünüyorsa).

**Mail 1 · Gün 0** · Konu: `bayi siparişleri`
> Merhaba {{first_name}},
>
> Distribütör firmalarda sipariş ekibinin işi genelde aynı: bayilerden WhatsApp mesajı, fotoğraf, PDF ve mail olarak gelen siparişleri tek tek okuyup ürün koduyla eşleştirmek ve ERP'ye girmek.
>
> Bu işi bir AI agent'a devrediyoruz. Agent her formattaki siparişi okuyor, ürün kodlarınızla eşleştiriyor, ERP'de taslak sipariş açıyor. Ekibiniz sadece kontrol ediyor.
>
> {{company}}'de günde kaç siparişin bu şekilde işlenebileceğini 30 dakikada çıkaralım mı?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, bir de bayilerden gelen "stokta var mı, fiyatı ne?" soruları var. Stok ve fiyat listenize bağlı, bayilere 7/24 WhatsApp'tan cevap veren bir asistan da kuruyoruz. Sipariş ekibinizin telefonu ciddi şekilde sessizleşiyor. İlgilenir misiniz?

**Mail 3 · Gün 7** · aynı thread
> {{first_name}}, günde 80 sipariş × sipariş başına 6 dakika, günde 8 saat ediyor; yani tam zamanlı bir kişi. Üstüne yanlış kod girişi kaynaklı iadeler de var. Kendi sipariş örneklerinizden biriyle göstermemi ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

### 4.3 Üretim firmalarında satın alma birimleri [Link 6]

**Açı:** Tedarikçilerden teklif toplamak, karşılaştırmak ve termin takibi.

**Mail 1 · Gün 0** · Konu: `tedarikçi teklif karşılaştırma`
> Merhaba {{first_name}},
>
> Satın alma ekiplerinde zamanın önemli kısmı aynı döngüye gidiyor: 4–5 tedarikçiye teklif isteği göndermek, farklı formatta gelen teklifleri tek tabloya dökmek, termin yaklaşan siparişleri tek tek kovalamak.
>
> Bu döngüyü bir AI agent'a devrediyoruz. Agent talebi tedarikçilere gönderiyor, gelen teklifleri okuyup fiyat, termin ve ödeme şartına göre karşılaştırma tablosu hazırlıyor, gecikme riski olan siparişleri önceden uyarıyor.
>
> {{company}}'de bunun haftada kaç saat kazandıracağını 30 dakikada birlikte bakalım mı?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, karar yine sizde kalıyor; agent sadece teklif toplama ve tabloya dökme kısmını üstleniyor. Ayda 60 talep × talep başına 1,5 saat, ayda 90 saat ediyor. Örnek bir karşılaştırma tablosu göndereyim mi?

**Mail 3 · Gün 7** · Konu: `termin takibi`
> {{first_name}}, geciken bir hammadde siparişi üretim planını ne sıklıkla etkiliyor? Termine 5 gün kala tedarikçiye otomatik teyit soran, cevap gelmezse sizi uyaran bir akış kuruyoruz. Bakmak ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

## 5. DALGA 3

### 5.1 Gayrimenkul proje satış [Link 7]

**Mail 1 · Gün 0** · Konu: `{{company}} reklam formları`
> Merhaba {{first_name}},
>
> Proje satış ekipleriyle konuştuğumuzda en büyük kaybın, reklamdan gelen form ve WhatsApp mesajlarına geç dönülmesi olduğunu görüyoruz: lead soğuyor, reklam bütçesi boşa gidiyor.
>
> Bunu bir AI asistanla çözüyoruz. Asistan form geldiği ilk dakika içinde WhatsApp'tan yazıyor, gerekirse arıyor; bütçe, oda sayısı ve ödeme şeklini soruyor; sadece hazır olanı randevuyla danışmanınıza aktarıyor. Yabancı yatırımcılarla kendi dillerinde konuşuyor.
>
> Mevcut lead akışınızda nasıl çalışacağını 30 dakikada gösterebilirim. Uygun mu?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, ayda 600 lead'de sadece %2 ek ziyaret, 12 yeni görüşme demek; tek bir satış yıllık hizmet bedelini karşılıyor. Akışın ekran görüntülerini paylaşabilirim.

**Mail 3 · Gün 7** · Konu: `hafta sonu gelen lead'ler`
> {{first_name}}, cumartesi akşamı gelen bir form sizde ne zaman aranıyor? Çoğu ekipte pazartesi. Bu boşluğu kapatmak için kuruyoruz. Kısa bir demo yapalım mı?

**Mail 4 · Gün 12** · ortak breakup

---

### 5.2 İK yoğun işverenler, mavi yaka [Link 8A]

**Açı:** Yüzlerce başvuruyu telefonla ön elemek.
**Ek değişken:** `{{open_roles}}` (açık ilan sayısı / pozisyon).

**Mail 1 · Gün 0** · Konu: `{{company}} başvuru ön eleme`
> Merhaba {{first_name}},
>
> {{open_roles}} gibi mavi yaka pozisyonlarda İK ekibinin en çok zamanı aynı işe gidiyor: yüzlerce başvuranı tek tek arayıp vardiya, lokasyon ve deneyim sormak; çoğu zaman telefona çıkmayan adayı tekrar tekrar aramak.
>
> Bu ilk eleme aşamasını bir AI asistana devrediyoruz. Asistan başvurana WhatsApp'tan ya da telefonla soruları soruyor, puanlıyor, uygun adaylara mülakat randevusu veriyor. Ekibiniz sadece mülakata gelenlerle görüşüyor.
>
> {{company}}'de bunun ayda kaç saat kazandıracağını 30 dakikada hesaplayalım mı?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, ayda 500 başvuru × aday başına 8 dakika telefon, ayda 65 saat ediyor; buna ulaşılamayan adaylara tekrar aramalar ekleniyor. Asistan mesai dışında da çalıştığı için akşam başvuran aday ertesi sabah değil, aynı akşam elemeden geçiyor. Örnek bir akış göndereyim mi?

**Mail 3 · Gün 7** · Konu: `mülakata gelmeyen adaylar`
> {{first_name}}, randevu verilen adayların ne kadarı mülakata gelmiyor? Bir gün önce ve 2 saat önce otomatik teyit/hatırlatma gönderen, gelmeyecek adayın yerine sıradakini çağıran bir akış kuruyoruz. İlgilenir misiniz?

**Mail 4 · Gün 12** · ortak breakup

### 5.3 İşe alım / İK ajansları [Link 8B]

Mail 1–3 aynı, şu farklarla:
- Mail 1, 2. paragraf: "...ekibiniz sadece mülakata gelenlerle görüşüyor" yerine **"danışmanlarınız aynı sürede 2 kat daha fazla pozisyon yönetebiliyor"**.
- Mail 2'ye ekle: **"Asistanı kendi markanızla müşterilerinize de sunabilirsiniz."** (beyaz etiket açısı)

---

### 5.4 Teknik servis / saha servis [Link 9]

**Açı:** Arıza kaydı, servis formu yazma, periyodik bakım hatırlatması.

**Mail 1 · Gün 0** · Konu: `servis formları ve arıza kayıtları`
> Merhaba {{first_name}},
>
> Teknik servis firmalarında ofis tarafının işi genelde şu: telefonla arıza kaydı almak, teknisyene iletmek, teknisyenin sahadan dönünce yazdığı servis formunu sisteme geçirmek.
>
> Bu işleri bir AI asistana devrediyoruz. Asistan arıza kaydını telefon ya da WhatsApp'tan 7/24 alıp teknisyene atıyor; teknisyen işi bitirince 30 saniyelik bir sesli not bırakıyor, asistan bundan imzalı servis formu PDF'i hazırlıyor.
>
> {{company}}'de bunun günde kaç saat kazandıracağını 30 dakikada birlikte bakalım mı?

**Mail 2 · Gün 3** · Konu: `periyodik bakım hatırlatmaları`
> {{first_name}}, periyodik bakım tarihi gelen müşterileri siz mi arıyorsunuz, yoksa müşteri arıza olunca mı arıyor? Bakım tarihi yaklaşan müşteriye otomatik hatırlatma yapıp randevu alan bir akış kuruyoruz. Bu, ayrıca düzenli bir gelir kalemi. İlgilenir misiniz?

**Mail 3 · Gün 7** · aynı thread
> {{first_name}}, günde 20 iş emri × form başına 10 dakika, ayda 70 saat ediyor; buna mesai dışı kaçan arıza aramaları ekleniyor. Nasıl çalıştığını kısa bir örnekle gösterebilirim.

**Mail 4 · Gün 12** · ortak breakup

---

### 5.5 Oto galeri / bayi [Link 10]

**Mail 1 · Gün 0** · Konu: `ilan sitelerinden gelen sorular`
> Merhaba {{first_name}},
>
> Galericilerle konuştuğumuzda en çok kaçan müşterinin, ilan sitelerinden akşam ve hafta sonu gelen "araç hâlâ satılık mı, son fiyat ne, takas olur mu?" sorularından çıktığını görüyoruz.
>
> Bu soruları 7/24 WhatsApp'tan anında cevaplayan, ciddi alıcıyı tespit edip test sürüşü randevusu veren bir AI asistan kuruyoruz. Satış ekibiniz sadece randevuyla gelen müşteriyle ilgileniyor.
>
> {{company}}'nin ilan akışında nasıl çalışacağını 30 dakikada gösterebilirim. Uygun mu?

**Mail 2 · Gün 3** · aynı thread
> {{first_name}}, ayda 300 ilan sorusundan 10'unun daha randevuya dönüşmesi bile birkaç araç satışı demek. Asistanın gerçek bir konuşma örneğini göndereyim mi?

**Mail 3 · Gün 7** · Konu: `satış sonrası takip`
> {{first_name}}, araç satıldıktan sonra sigorta, muayene ve bakım hatırlatmaları sizde kim tarafından yapılıyor? Bunları otomatik yapıp müşteriyi takas zamanında size geri getiren bir akış da kuruyoruz. Bakmak ister misiniz?

**Mail 4 · Gün 12** · ortak breakup

---

## 6. DALGA 4 (fırsatçı)

### 6.1 Müteahhit, muhasebe/satın alma [Link 11]

**Mail 1** · Konu: `irsaliye ve fatura eşleştirme`
> Merhaba {{first_name}},
>
> İnşaat firmalarının muhasebe ve satın alma ekiplerinde ay sonu hep aynı iş birikiyor: şantiyeden gelen yüzlerce irsaliyeyi tedarikçi faturalarıyla tek tek eşleştirmek, eksik ya da fazla faturalananları bulmak.
>
> Bunu bir AI agent'a devrediyoruz. Agent irsaliye fotoğrafını okuyor, malzeme, miktar ve tedarikçiyi çıkarıyor, e-faturayla eşleştiriyor; uyuşmayanları listeliyor. Ekibiniz sadece istisnalara bakıyor.
>
> {{company}}'de ay sonu kapanışını kaç gün kısaltabileceğini 30 dakikada bakalım mı?

**Mail 2** · aynı thread
> {{first_name}}, ayda 800 irsaliye × 4 dakika, ayda 50 saatten fazla ediyor; fazla faturalanan kalemlerin yakalanması ise doğrudan tasarruf. Örnek bir eşleştirme raporu göndereyim mi?

**Mail 3** · ortak breakup

### 6.2 Spor salonu & pilates zincirleri [Link 12]

**Mail 1** · Konu: `deneme dersine gelmeyenler`
> Merhaba {{first_name}},
>
> Stüdyo zincirlerinde en büyük gelir kaybı iki yerden çıkıyor: deneme dersi için form doldurup gelmeyenler ve üyeliği bitip yenilemeyenler.
>
> Bu ikisini bir AI asistanla takip ediyoruz. Asistan form gelir gelmez WhatsApp'tan yazıp deneme dersi randevusu veriyor; üyeliği bitmek üzere olanlara kişisel mesajla dönüyor, kararsızları ekibinize aktarıyor.
>
> {{company}} şubelerinde bunun ayda kaç üye kazandırabileceğini 30 dakikada hesaplayalım mı?

**Mail 2** · aynı thread
> {{first_name}}, ayda 200 deneme formundan 15'inin daha gelmesi ve 10 eski üyenin geri dönmesi, şube başına ciddi bir aylık gelir demek. Örnek konuşma akışını göndereyim mi?

**Mail 3** · ortak breakup

### 6.3 Kamu ihalesine giren firmalar [Link 13]

**Mail 1** · Konu: `EKAP takibi`
> Merhaba {{first_name}},
>
> İhale ekiplerinde zamanın büyük kısmı ihaleye hazırlanmaya değil, uygun ihaleyi bulmaya gidiyor: her gün EKAP'ı taramak, şartnameleri açıp okumak, son tarihleri takip etmek.
>
> Bu işi bir AI agent'a devrediyoruz. Agent her sabah firmanıza uygun ihaleleri özetliyor, şartnameden yeterlik evrak listesini çıkarıyor ve tarihleri hatırlatıyor.
>
> Faaliyet alanınıza göre örnek bir haftalık özet hazırlamamı ister misiniz?

**Mail 2** · aynı thread
> {{first_name}}, özellikle şartnameden evrak listesi çıkarma kısmı ekiplerin en çok vakit kaybettiği yer. Örnek özet için faaliyet alanınızı yazmanız yeterli.

**Mail 3** · ortak breakup

---

## 7. KANAL: Dijital ajanslar, beyaz etiket [Link K1]

**Ne zaman:** En az 2–3 vaka çalışması hazır olduktan sonra. Ajanslara "ne yaptığını göster" yaklaşımı gerekir.

**Mail 1** · Konu: `müşterilerinize AI agent`
> Merhaba {{first_name}},
>
> Ajans müşterilerinin son dönemde en çok sorduğu şeylerden biri "AI ile operasyonumuzu nasıl hafifletiriz?" sorusu. Çoğu ajansın bunu kuracak ekibi yok.
>
> Biz işletmeler için AI agent ve otomasyon sistemleri kuruyoruz (örnek: {{case_study}}). Bunu sizin markanızla müşterilerinize sunmanızı sağlayan bir ortaklık modelimiz var: kurulumu ve bakımı biz yapıyoruz, müşteri ilişkisi ve kâr marjı sizde kalıyor.
>
> {{company}}'nin müşteri portföyüne uyar mı, 20 dakikada konuşalım mı?

**Mail 2** · aynı thread
> {{first_name}}, ortaklıkta her yeni müşteriden kurulum bedelinin bir kısmı ve aylık işletme bedelinden düzenli pay alıyorsunuz. Mevcut retainer'larınıza ek gelir kalemi oluyor. Örnek teklif dokümanını göndereyim mi?

**Mail 3** · ortak breakup

---

## 8. Yanıtlara hazır cevaplar

| Gelen yanıt | Cevap |
|---|---|
| "Fiyat nedir?" | "Süreçten sürece değişiyor; tek bir süreçle başlayan pilotlar genelde ₺30–75 bin bandında. Önce 30 dakikada hangi sürecin en çok kazandıracağına bakalım, net rakamı ona göre vereyim. Bu hafta hangi gün uygun?" |
| "Şu an ihtiyacımız yok." | "Anlıyorum. Yoğun dönem başlamadan [fuar/yenileme sezonu/kayıt dönemi] öncesinde tekrar yazmamın sakıncası var mı?" → 60–90 gün sonra hatırlatma |
| "Biz zaten bir program kullanıyoruz." | "Harika, biz mevcut sistemin yerine geçmiyoruz; onun üstünde, şu an elle yapılan kısmı otomatiğe bağlıyoruz. Hangi programı kullanıyorsunuz?" |
| "Doğru kişi ben değilim." | "Teşekkürler! Bu konuda kiminle konuşmam doğru olur?" → yönlendirilen kişiye "{{referrer}} sizinle görüşmemi önerdi" ile başla |
| "Bilgi/broşür gönderin." | Tek sayfalık PDF (sektöre özel 3 örnek akış + ROI hesabı) + "15 dakikalık bir görüşmede sizin sürecinize uyarlayarak anlatayım mı?" |
| "Verilerimiz güvende mi / KVKK?" | "Veriler Türkiye/AB lokasyonunda tutulur, KVKK kapsamında veri işleme sözleşmesi imzalıyoruz, agent sadece sizin belirlediğiniz verilere erişir." |
| "Listeden çıkarın." | Aynı gün çıkar, İYS'de ret olarak işle, tek satır teyit: "Çıkardım, kusura bakmayın." |
