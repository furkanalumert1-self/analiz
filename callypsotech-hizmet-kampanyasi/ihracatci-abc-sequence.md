# İhracatçı A-B-C Sequence'ları (3 mail, her biri en fazla 150 kelime)

## Mail kurgusu: acı noktası mı, hizmet bilgisi mi?

İkisi birden, ama sırası ve oranı önemli. Her mail aynı iskeleti izler:

| Bölüm | Oran | Ne yapar |
|---|---|---|
| 1. Acı noktası | ~%40 | Alıcının kendi gününü tanıyacağı somut bir sahne. Bir soru ya da gözlemle açılır. |
| 2. Bedeli | ~%15 | Bu acının neye mal olduğu: kaybedilen sipariş, boşa giden fuar bütçesi, kişi bağımlılığı. |
| 3. Hizmet | ~%30 | **Ne yaptığımız**, teknoloji değil iş akışı olarak: "Agent talebi okuyor → eksikleri soruyor → taslağı hazırlıyor → uzmanınız onaylıyor." |
| 4. Tek CTA | ~%15 | Tek, kolay bir istek. |

**Kural:** Ürün adı, teknik terim ve özellik listesi yok. "Ne değişir" anlatılır, "nasıl yapılır" anlatılmaz.

**Dürüstlük kuralı:** Henüz müşteri yok. "Müşterilerimiz %X kazandı" veya "çoğu firma beğeniyor" gibi kanıtlanmamış iddialar yazılmaz. Rakamlar "kısa bir hesap" olarak, alıcının kendi rakamlarıyla doğrulanacak şekilde verilir. İlk pilottan sonra 2. maile gerçek bir vaka cümlesi eklenir.

---

## İhracatçıların en büyük 3 acı noktası → 3 sequence

| Sequence | Acı noktası | Kime |
|---|---|---|
| **A: Teklif hızı** | Yurt dışından gelen talebe geç dönülüyor. Alıcı aynı talebi 4–5 ülkeye gönderiyor, ilk dönen kazanıyor. | Katman A (ihracat müdürü/uzmanı) |
| **B: Fuar takibi** | Fuar bütçesi harcanıyor ama dönüşte kartvizitlerin çoğu takip edilmiyor. | Katman A (ihracat müdürü/uzmanı) |
| **C: Ekip kapasitesi ve kişi bağımlılığı** | İyi dış ticaret uzmanı zor bulunuyor ve pahalı. Uzmanın zamanı yazışmaya gidiyor, bilgi birkaç kişinin mail kutusunda kalıyor. | Katman B (sahip / genel müdür) |

**Test kurgusu:**
- Katman A listesini rastgele ikiye bölün: yarısına A, yarısına B gitsin. Bu temiz bir A/B testi olur: aynı kişi tipine iki farklı acı noktası.
- C, Katman B'ye gider (farklı kişi tipi, farklı dil).
- Her sequence'a en az 150 kişi.
- 3. haftanın sonunda olumlu yanıt oranı en yüksek olan acı noktası, tüm listede ana mesaj olur.

**Takvim:** Mail 1: Gün 0 · Mail 2: Gün 4 (aynı thread) · Mail 3: Gün 9 (aynı thread).
**Değişkenler:** `{{first_name}}`, `{{company}}`, `{{sector}}` (tekstil / makine / gıda / mobilya).
**İmza (her mailde):** Furkan Alumert, CallypsoTech · callypsotech.com
**Yasal satır (her mailde):** Almak istemezseniz "çıkar" yazmanız yeterli; listeden aynı gün çıkarırım.

---

## SEQUENCE A: Teklif hızı

### A1 · Gün 0 · Konu: `{{company}} teklif dönüş süresi`

Merhaba {{first_name}},

Yurt dışından gelen bir fiyat talebine ortalama kaç saatte dönebiliyorsunuz?

{{sector}} ihracatçılarıyla konuştuğumuzda cevap çoğu zaman "1–2 gün" oluyor. Alıcı ise aynı talebi farklı ülkelerden 4–5 tedarikçiye birden gönderiyor; ilk dönen, masaya ilk oturan oluyor.

Sorun ekipte değil, işin kendisinde: talepler farklı dillerde geliyor, ölçü ve miktar bilgisi eksik oluyor, fiyat listesine bakmak ve proformayı elle hazırlamak gerekiyor.

Biz bu kısmı bir AI agent'a devrediyoruz. Agent gelen talebi her dilde okuyor, eksik bilgiyi müşteriye kendisi soruyor, kataloğunuzdan cevap ve proforma taslağını hazırlıyor. Uzmanınız sadece kontrol edip gönderiyor.

{{company}} için nasıl çalışacağını 30 dakikada gösterebilirim. Bu hafta uygun bir zamanınız olur mu?

### A2 · Gün 4 · aynı thread

{{first_name}}, görüşmeye vakit ayırmak zorsa daha kısa bir yol önereyim.

Yakın zamanda gelmiş bir yabancı müşteri mailini, isim ve fiyatları karartarak bana iletin. Agent'ın o maile hazırlayacağı cevabı ve proforma taslağını 24 saat içinde size göndereyim.

Hiçbir yükümlülüğü yok. Çıktıyı ekibinizin yazacağı cevapla karşılaştırır, işinize yarayıp yaramadığına kendiniz karar verirsiniz.

Uygunsa bu maile yanıt olarak iletmeniz yeterli.

### A3 · Gün 9 · aynı thread

{{first_name}}, son kez yazıyorum.

Kısa bir hesap: haftada 40 yabancı dilde talep ve talep başına 20 dakika, ayda 50 saatten fazla ediyor. Bu, bir dış ticaret uzmanının mesaisinin yaklaşık üçte biri; üstelik yavaş dönülen her talep, rakibe giden bir sipariş ihtimali.

Sizdeki rakamlar farklıysa hesap da değişir. Birlikte bakmak isterseniz 30 dakika yeterli.

Şu an öncelik değilse "sonra" yazmanız yeterli; 3 ay sonra kısa bir hatırlatma yaparım.

---

## SEQUENCE B: Fuar takibi

### B1 · Gün 0 · Konu: `fuardan dönen kartvizitler`

Merhaba {{first_name}},

Bir fuar için ciddi bir bütçe ayrılıyor: stand, uçuş, konaklama, numune. Asıl getiri ise fuardan sonraki iki haftada belli oluyor.

{{sector}} ihracatçılarında sık gördüğümüz tablo şu: 150–200 kartvizitle dönülüyor, sipariş ve üretim yoğunluğu araya giriyor, takip mailleri ancak bir kısmına gidiyor. Takip edilmeyen alıcı, standını ziyaret ettiği diğer tedarikçiyle devam ediyor.

Bunun için bir takip sistemi kuruyoruz. Kartvizitin fotoğrafını çekmeniz yeterli: sistem kişiyi listeye ekliyor, görüşme notunuza göre kişinin kendi dilinde takip maili hazırlıyor ve cevap gelene kadar üç adımda takip ediyor. Cevap verenler ekibinize "sıcak" olarak düşüyor.

{{company}}'nin bir sonraki fuarından önce kurmak ister misiniz? 20 dakikada nasıl çalıştığını gösterebilirim.

### B2 · Gün 4 · aynı thread

{{first_name}}, fuar takibi işin sadece bir kısmı.

Aynı sistem fuar dışında gelen talepler için de çalışıyor: web sitenizden, mailden veya B2B platformlardan gelen yabancı dilde soruları okuyor, kataloğunuzdan cevap taslağı hazırlıyor, uzmanınız onaylayıp gönderiyor.

İsterseniz somut bir test yapalım: geçmiş fuardan isimleri karartılmış birkaç kartvizit ya da bir müşteri maili iletin, sistemin hazırlayacağı takip mesajlarını 24 saat içinde size göndereyim.

### B3 · Gün 9 · aynı thread

{{first_name}}, son bir not bırakıp sizi meşgul etmeyeceğim.

Fuar takibinde en kritik süre, dönüşten sonraki ilk 48 saat; sistemin işe yaraması için fuardan önce kurulu olması gerekiyor.

Bir sonraki fuarınızın adını ve tarihini yazarsanız, üç hafta öncesinde kısa bir hatırlatma yaparım; o zaman birlikte değerlendiririz.

Şu an gündeminizde değilse "çıkar" yazmanız yeterli.

---

## SEQUENCE C: Ekip kapasitesi ve kişi bağımlılığı (sahip / genel müdür)

### C1 · Gün 0 · Konu: `{{company}} dış ticaret ekibi`

Merhaba {{first_name}},

İhracatçı firma sahipleriyle konuştuğumuzda iki konu öne çıkıyor.

Birincisi, iyi bir dış ticaret uzmanı bulmak zor ve pahalı. Bulunduğunda da zamanının çoğu yeni müşteri bulmaya değil; yazışmaya, proformaya ve sipariş takibine gidiyor.

İkincisi, müşteri ve fiyat bilgisi birkaç kişinin mail kutusunda duruyor. O kişi izne çıktığında ya da ayrıldığında işler aksıyor.

Biz bu tekrarlayan kısmı AI agent'lara devrediyoruz. Gelen talepler her dilde cevaplanıyor, proforma ve sipariş durum bildirimleri otomatik hazırlanıyor, tüm yazışma geçmişi tek yerde kalıyor. Ekibiniz aynı kadroyla daha fazla talebi karşılıyor ve satışa odaklanıyor.

{{company}}'de bunun ne kadar kapasite açacağını 30 dakikada somut rakamla çıkarabilirim. Uygun olur mu?

### C2 · Gün 4 · aynı thread

{{first_name}}, riski düşük tutmak için tek bir süreçle başlıyoruz.

Örneğin sadece "yabancı dilde gelen fiyat talepleri" için 2–3 haftalık bir pilot kuruyoruz. Başarı ölçütünü baştan birlikte yazıyoruz: dönüş süresi ve ekibin harcadığı saat. Sonuç beklendiği gibi değilse devam etmek zorunda değilsiniz.

Yeni bir uzman almadan önce mevcut ekibin kapasitesini artırmanın ne kadar mümkün olduğunu bu pilotla netleştirebilirsiniz.

Bu hafta 30 dakikanız olur mu?

### C3 · Gün 9 · aynı thread

{{first_name}}, son kez yazıyorum.

Bu konu sizden çok dış ticaret müdürünüzün gündemindeyse, doğru kişinin adını yazmanız yeterli; onunla iletişime geçip sizi gereksiz yere meşgul etmem.

Şu an öncelik değilse "sonra" yazın; 3 ay sonra kısa bir hatırlatma yaparım.

Teşekkürler, iyi çalışmalar dilerim.

---

## Yanıt geldiğinde

| Yanıt | Yapılacak |
|---|---|
| Test için mail/kartvizit gönderdi | 24 saat içinde çıktıyı gönder + "Bunu 15 dakikalık bir görüşmede sizin ekibe göre nasıl uyarlarız, konuşalım mı?" |
| "Fiyat nedir?" | "Tek süreçle başlayan pilot ₺30–75 bin bandında; netini 30 dakikalık görüşmede verebilirim." |
| C3'te başka kişiye yönlendirdi | Yönlendirilen kişiye A1'i gönder; ilk cümle: "{{referrer}} Bey/Hanım sizinle görüşmemi önerdi." |
| "Sonra" | Apollo'da 90 gün sonrasına görev oluştur |
| "Çıkar" | Aynı gün çıkar, İYS'de ret olarak işle |
