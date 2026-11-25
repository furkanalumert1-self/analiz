# OmniExport fiyatlandırması (25 Kasım 2026)

Export Agent artık **OmniExport** adıyla [callypsotech.com/export.html](https://www.callypsotech.com/export.html) adresinde yayında. Hedef: Türkiye'deki ihracatçı üreticiler.

## Önce durum: bu belge neye dayanıyor, neye dayanmıyor

| Girdi | Durum |
| --- | --- |
| Alıcıların fiyat cevapları (`/founder-consumer` paneli veya gerçek anket) | **Yok.** Van Westendorp aralığı hesaplanamadı, bu yüzden bir aralık uydurulmadı. |
| İşin maliyetleri (`founder/numbers.json`, `/founder-cfo`) | **Yok.** Marj ve başabaş hesaplanamadı. |
| Rakip fiyatları (`founder/competitors.md`) | **Kısmen var.** Türk rakiplerin hiçbiri fiyat yayınlamıyor. Yabancı araçların ve ikamelerin fiyatları aşağıda. |

Bu yüzden aşağıdaki rakamlar **karar değil, test edilecek hipotez.** Asıl fiyat, gerçek ihracatçılarla yapılan görüşmelerden ve CFO hesabından çıkacak. Nasıl test edileceği 5. bölümde.

## 1. Fiyattan önce bir konum sorunu

Sitedeki OmniExport sayfası ürünü şu sırayla anlatıyor:
1. Hedef pazar ve müşteri araştırması
2. Kişiselleştirilmiş ilk temas
3. Numune ve fiyat talebi yönetimi
4. Teklif süreci
5. Takip

Yani ürün **giden müşteri bulma** ile öne çıkıyor. Ama:
- Bu alanda [Asistflow M.E.R.V.E](https://asistflow.com/merve) aynı işi yapıyor: distribütör buluyor, skorluyor, İngilizce mail gönderiyor.
- Kurul bu modülü "çekirdek kanıtlanana kadar dondur" diye işaretlemişti (`founder/board.md`).
- Rakip haritasındaki **boşluk** ise 3. ve 4. adımlarda: Türk üreticinin gelen kutusuna düşen yabancı dildeki talebi onaylı teklife çevirmek (`founder/competitors.md`).

Fiyat, ürünün neyle öne çıktığını takip eder. Müşteri bulmayla öne çıkarsanız alıcı sizi M.E.R.V.E ve ajanslarla kıyaslar. Talep→teklifle öne çıkarsanız kıyas bir dış ticaret elemanının maliyetiyle yapılır; bu kıyas sizin lehinize. **Öneri:** Sayfada 3. ve 4. adımları başa alın. Müşteri bulmayı üst pakete ek modül olarak koyun.

## 2. Fiyat çıpaları (alıcı neyle kıyaslayacak)

| İkame / benzer ürün | Maliyet | Not |
| --- | --- | --- |
| Dış ticaret uzmanı (bir kişi) | Ortalama ~44.000–72.000 TL/ay; aralık 57.348–248.538 TL ([yenibiris](https://www.yenibiris.com/maaslar/dis-ticaret-uzmani-maaslari), [kariyer.net](https://www.kariyer.net/pozisyonlar/dis-ticaret-uzmani/maas), [eleman.net](https://www.eleman.net/meslek/uluslararasi-ticaret-uzmani/maas)) | Kullanıcıların kendi beyanı, brüt/net belirsiz. İşverene maliyeti daha yüksek. |
| Genel yapay zekâ aboneliği + Excel + Gmail | Düşük, kişi başı abonelik | Asıl ucuz rakip, ama katalog, onay ve takip hafızası yok. |
| Yabancı teklif araçları | ProcuraPilot 99–199 $/ay ([G2](https://www.g2.com/products/procurapilot/pricing)); SpeedQuoteAI 750–1.500 $/ay ([Capterra](https://www.capterra.com/p/10049486/SpeedQuoteAI/)); AutoRFP.ai 899 $/ay'dan ([autorfp.ai](https://autorfp.ai/pricing)) | Farklı ürünler (RFQ ve RFP). Yalnızca bu tür araçların aylık sabit ücret ve hacim kademesiyle satıldığını gösteriyor. |
| Türk rakipler (Teklif Robotu, M.E.R.V.E, asistanim.ai) | Açık değil, hepsi demo/görüşmeyle satıyor | Görüşmeyle satış bu kategoride norm. |

**Okuma:** OmniExport bir dış ticaret elemanının yerine geçmiyor; onun hızını ve kapasitesini artırıyor. Fiyatın, bir elemanın aylık maliyetinin küçük bir kesri olarak görünmesi gerekiyor. Kesrin ne kadar olacağını görüşmeler söyleyecek.

## 3. Fiyat yapısı (öneri)

**Model: tek seferlik kurulum + aylık abonelik + hacim kademesi.** Kişi başı (koltuk) fiyat önermiyorum: ihracat ekipleri 1–3 kişilik, değer de kişi sayısıyla değil talep ve teklif hacmiyle artıyor.

| Paket | Kime | Ne içerir | Bir üst pakete geçme nedeni |
| --- | --- | --- | --- |
| **Talep Masası** | İhracata yeni başlayan veya ayda az talep alan üretici | Gelen talep okuma, eksik bilgi tespiti, yanıt ve teklif taslağı (onaylı), teklif ve takip paneli. Aylık talep limiti var. | Hacim limiti dolar, ya da numune ve takip akışı gerekir. |
| **İhracat Masası** (ana paket) | Düzenli ihracat yapan, birden çok pazara satan üretici | Talep Masası + daha yüksek limit + çok dil (İngilizce, Almanca, Arapça…) + numune takibi + otomatik takip akışları + CRM/e-posta bağlantısı | Yeni pazara açılmak ister, müşteri bulma gerekir. |
| **Büyüme** | Yeni pazar arayan üretici | İhracat Masası + müşteri bulma (araştırma ve ilk temas kredisi) | — |

**Kurulum ücreti:** Kataloğun, EXW fiyat listesinin, şablonların ve e-posta yönlendirmesinin sizin tarafınızdan yüklendiği "biz kurarız" hizmeti. Kurul bunu bir koşul olarak koymuştu. Bu iş sizin zamanınızı alıyor, bu yüzden bedava verilmemeli. Pilotta abonelikle birlikte paketlenebilir.

**Para birimi:** Alıcı döviz kazanıyor, siz ise TL enflasyonuna maruz kalıyorsunuz. İki seçenek var:
- **TL fiyat, düzenli güncelleme:** Fiyat TL olur ve sözleşmede 3 ya da 6 ayda bir belirli bir endekse göre güncelleme maddesi bulunur.
- **EUR fiyat:** Türkiye'de yerleşikler arasında döviz cinsinden sözleşme yapmanın yasal kısıtları var (32 sayılı Karar ve ilgili tebliğ). İhracatçıyla yapılacak bir yazılım sözleşmesinin buna girip girmediğini bilmiyorum. **Bu seçenek için önce mali müşavirinize danışın.**

**Yıllık peşin:** Peşin ödemede bir ay ya da iki ay ücretsiz olabilir. Peşin ödeme TL'nin değer kaybı riskini de azaltır.

**Sonuca bağlı ücret (kazanılan siparişten pay):** Kurulun Offers lensi bunu önermişti. İlk aşamada **önermiyorum.** Hangi siparişin OmniExport sayesinde geldiğini ölçmek tartışma yaratır. Bunun yerine sonuca bağlı bir **garanti** verin (4. bölüm).

## 4. Açılış teklifi: "kurucu müşteri" pilotu

Sitede "14 gün ücretsiz demo" yazıyor. Demo iyi bir kapı, ama ihracatçının 14 günde gerçek bir talep→teklif döngüsünü yaşaması zor. Kurul da en az bir pilotun **para ödemesini** şart koşmuştu.

**Öneri: ücretli, 90 günlük kurucu müşteri pilotu, en fazla 5 firma.**
- **Kapsam:** Kurulum dahil (katalog ve fiyat listesini siz yüklersiniz). İhracat Masası özellikleri.
- **Fiyat:** Pilot süresince belirgin biçimde indirimli bir aylık ücret. İlk 12 ay boyunca da kurucu müşteri fiyatı sabit kalır. Bu, sahte bir "eski fiyat" çıpası değil, açıkça yazılmış süreli bir teklif.
- **Son tarih:** Sabit bir tarih ya da "ilk 5 firma", hangisi önce gelirse. İndirim beklemeyi alışkanlık haline getirmemek için bu teklif tekrarlanmaz.
- **Garanti (örnek):** "90 gün içinde gelen taleplerinizin X'inde aynı gün onaya hazır taslak çıkmazsa pilot ücretini iade ederiz." X'i ve iadenin size maliyetini `/founder-cfo` hesaplamalı.
- **Karşılığında ne istiyorsunuz:** Ölçüm verisi (yanıt süresi, düzeltmesiz onaylanan taslak oranı, teklife dönen talep sayısı) ve sonuç iyiyse adınızla kullanılabilecek bir referans.

**Devlet destekleri (açık soru, vaat etmeyin):** Ticaret Bakanlığı'nın 2026 e-ihracat desteklerinde bazı kalemler için temel oran %50 ([Para Dergi](https://www.paradergi.com.tr/sektorler/2026/02/09/yeni-pazarlara-acilma-zamani)). Ancak OmniExport'un bu kapsama girdiği doğrulanmadı. Danışmanlık desteği altında alınan yazılım için TÜR Belgesi şartı getirildiği de haberlere yansıdı ([Foreks/AA](https://www.foreks.com/haber/detay/6ae58f8158b1b941c20957dc/AA/tr/ticaret-bakanligi-turk-markalarinin-kuresel-rekabet-gucunu-artiracak-yeni-destekleri-uygulamaya-aldi-31-10-26/)). Bunlar netleşmeden satış görüşmesinde "devlet karşılar" denmemeli. Doğrulanırsa en güçlü fiyat argümanı olur.

## 5. Gerçek alıcılarla ne test edilecek

**a) Her keşif görüşmesinin sonunda dört fiyat sorusu sorun** (Van Westendorp). İhracat Masası paketini anlattıktan sonra:
1. "Aylık hangi ücrette bu hizmet size *o kadar ucuz* gelir ki kalitesinden şüphe edersiniz?"
2. "Hangi ücrette *uygun fiyatlı, iyi bir alım* dersiniz?"
3. "Hangi ücrette *pahalı ama yine de düşünülebilir* dersiniz?"
4. "Hangi ücrette *bu kadar pahalıysa almam* dersiniz?"

Cevapları `founder/pricing-survey.csv` dosyasına `too_cheap,cheap,expensive,too_expensive` sütunlarıyla yazın. 10–15 görüşmeden sonra şu komutu çalıştırın:

```bash
python3 .claude/skills/founder-pricing/van_westendorp.py founder/pricing-survey.csv --out founder/pricing-curve.md
```

Gerçek alıcı cevapları simüle panelden her zaman daha değerlidir.

**b) İki fiyat kartı:** Görüşmelerde İhracat Masası için iki farklı aylık fiyatı sırayla gösterin: tek numaralı görüşmelerde düşük kart, çift numaralılarda yüksek kart. Hangisinde pilota "evet" oranı daha yüksek, ona bakın. İki fiyat, (a)'daki ilk 5–6 görüşmenin "uygun" ve "pahalı" cevaplarının arasından seçilmeli. Şu an elde veri olmadığı için rakam yazmıyorum.

**c) Asıl test ödeme:** Pilota para ödeyen firma sayısı, her iki fiyat testinden daha güçlü bir sinyal.

## 6. Fiyat itirazları

Simüle panel çalışmadığı ve gerçek görüşme verisi olmadığı için **henüz yok.** `/founder-consumer` çalıştırılırsa ya da görüşmelerde not alınırsa ilk üç itiraz buraya yazılacak.

## 7. Sırada ne var

1. `/founder-consumer`: OmniExport'u 100 simüle ihracat müdürüne gösterip ilk fiyat cevaplarını ve itirazları almak. Bu, gerçek görüşmelerden önce hangi fiyatların test edileceğini daraltır.
2. `/founder-cfo`: Talep başına yapay zekâ maliyeti, e-posta altyapısı, firma başına kurulum saatiniz ve müşteri edinme maliyetiyle `founder/numbers.json` dosyasını doldurup marjı ve garantinin maliyetini hesaplamak.
3. Site: OmniExport sayfasında talep→teklif akışını başa almak. "14 gün ücretsiz demo"nun yanına "kurucu müşteri pilotu" çağrısı eklemek.
