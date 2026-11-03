# İhracatçı A-B-C Sequence'ları (3 mail, her biri en fazla 100 kelime)

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

Yurt dışından gelen bir fiyat talebine kaç saatte dönebiliyorsunuz?

Alıcı aynı talebi 4–5 tedarikçiye birden gönderiyor; ilk dönen kazanıyor. Ama talepler farklı dillerde geliyor, bilgi eksik oluyor, proforma elle hazırlanıyor ve dönüş 1–2 günü buluyor.

Bu kısmı bir AI agent'a devrediyoruz: talebi her dilde okuyor, eksik bilgiyi müşteriye soruyor, kataloğunuzdan cevap ve proforma taslağı hazırlıyor. Uzmanınız sadece onaylıyor.

{{company}} için nasıl çalışacağını 30 dakikada gösterebilirim. Uygun olur mu?

### A2 · Gün 4 · aynı thread

{{first_name}}, daha kısa bir yol önereyim.

İsim ve fiyatları karartılmış bir yabancı müşteri mailinizi iletin; agent'ın hazırlayacağı cevabı ve proforma taslağını 24 saatte göndereyim.

Yükümlülüğü yok, işe yarayıp yaramadığına kendiniz karar verirsiniz.

### A3 · Gün 9 · aynı thread

{{first_name}}, son kez yazıyorum.

Haftada 40 talep ve talep başına 20 dakika, ayda 50 saatten fazla ediyor; geç dönülen her talep de rakibe giden bir sipariş ihtimali.

Kendi rakamlarınızla bakmak isterseniz 30 dakika yeterli. Şu an öncelik değilse "sonra" yazın, 3 ay sonra hatırlatırım.

---

## SEQUENCE B: Fuar takibi

### B1 · Gün 0 · Konu: `fuardan dönen kartvizitler`

Merhaba {{first_name}},

Fuara ciddi bütçe ayrılıyor, ama asıl getiri dönüşten sonraki iki haftada belli oluyor.

Çoğu ihracatçıda 150–200 kartvizitle dönülüyor, sipariş yoğunluğu araya giriyor ve takip ancak bir kısmına yapılıyor. Kalan alıcı diğer tedarikçiyle devam ediyor.

Bunun için bir sistem kuruyoruz: kartvizitin fotoğrafını çekiyorsunuz, sistem kişinin kendi dilinde takip maili hazırlıyor ve cevap gelene kadar takip ediyor. Cevap verenler ekibinize düşüyor.

Bir sonraki fuarınızdan önce kurmak ister misiniz?

### B2 · Gün 4 · aynı thread

{{first_name}}, aynı sistem fuar dışındaki talepler için de çalışıyor: web sitenizden ve mailden gelen yabancı dilde sorulara kataloğunuzdan cevap taslağı hazırlıyor.

Test etmek isterseniz isimleri karartılmış birkaç kartvizit ya da müşteri maili iletin; takip mesajlarını 24 saatte göndereyim.

### B3 · Gün 9 · aynı thread

{{first_name}}, son bir not.

Fuar takibinde kritik süre dönüşten sonraki ilk 48 saat; sistemin fuardan önce kurulu olması gerekiyor.

Bir sonraki fuarınızın tarihini yazarsanız üç hafta öncesinde hatırlatırım. Gündeminizde değilse "çıkar" yazmanız yeterli.

---

## SEQUENCE C: Ekip kapasitesi ve kişi bağımlılığı (sahip / genel müdür)

### C1 · Gün 0 · Konu: `{{company}} dış ticaret ekibi`

Merhaba {{first_name}},

İyi bir dış ticaret uzmanı bulmak zor ve pahalı. Bulunduğunda da zamanı yeni müşteriye değil; yazışmaya, proformaya ve sipariş takibine gidiyor. Müşteri bilgisi birkaç kişinin mail kutusunda kalıyor; o kişi ayrılınca işler aksıyor.

Biz bu tekrarlayan kısmı AI agent'lara devrediyoruz: talepler her dilde cevaplanıyor, proformalar otomatik hazırlanıyor, yazışma geçmişi tek yerde kalıyor. Ekibiniz aynı kadroyla daha fazla iş çıkarıyor.

{{company}}'de bunun ne kadar kapasite açacağını 30 dakikada çıkarabilirim. Uygun olur mu?

### C2 · Gün 4 · aynı thread

{{first_name}}, riski düşük tutmak için tek bir süreçle başlıyoruz.

Örneğin sadece yabancı dilde gelen fiyat talepleri için 2–3 haftalık bir pilot. Başarı ölçütünü baştan birlikte belirliyoruz; sonuç beklendiği gibi değilse devam etmek zorunda değilsiniz.

Bu hafta 30 dakikanız olur mu?

### C3 · Gün 9 · aynı thread

{{first_name}}, son kez yazıyorum.

Bu konu dış ticaret müdürünüzün gündemindeyse adını yazmanız yeterli, onunla iletişime geçerim.

Şu an öncelik değilse "sonra" yazın; 3 ay sonra hatırlatırım.

---

## Yanıt geldiğinde

| Yanıt | Yapılacak |
|---|---|
| Test için mail/kartvizit gönderdi | 24 saat içinde çıktıyı gönder + "Bunu 15 dakikalık bir görüşmede sizin ekibe göre nasıl uyarlarız, konuşalım mı?" |
| "Fiyat nedir?" | "Tek süreçle başlayan pilot ₺30–75 bin bandında; netini 30 dakikalık görüşmede verebilirim." |
| C3'te başka kişiye yönlendirdi | Yönlendirilen kişiye A1'i gönder; ilk cümle: "{{referrer}} Bey/Hanım sizinle görüşmemi önerdi." |
| "Sonra" | Apollo'da 90 gün sonrasına görev oluştur |
| "Çıkar" | Aynı gün çıkar, İYS'de ret olarak işle |
