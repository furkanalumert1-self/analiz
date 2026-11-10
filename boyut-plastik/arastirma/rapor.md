# Boyut Plastik — B2B Süreç Otomasyonu Ön Analizi

Erişim / analiz tarihi: 10 Kasım 2026 · Hedef site: https://boyutplastik.com.tr/
Görüşme bağlamı: Sajmir Bey'e gönderilen e-posta. Konu: B2B müşteri araştırması, potansiyel alıcılarla ilk temas, teklif hazırlama, müşteri takibi ve raporlama süreçlerini, mevcut sistemler değiştirilmeden otomatikleştirmek.

> Akış: Kanıt → Fırsat → İş etkisi → Önerilen aksiyon → Ölçüm.
> Boyut Plastik'in iç süreçleri (CRM, ERP, teklif, sipariş, raporlama) dışarıdan görünmüyor. Aşağıdaki otomasyon fırsatları, herkese açık kanıtlara dayanan **hipotezlerdir** ve toplantıda doğrulanmalıdır. Hiçbir süre, maliyet veya verimlilik kazancı rakamı üretilmedi.

---

## 1. Kısa yönetici özeti

- Boyut Plastik, mobilya ve kapı üretiminde kullanılan **PVC, ABS ve PP kenar bandı** üreten bir **B2B üretici**. 2005'te kuruldu, 2010'dan beri Alim Grup bünyesinde. İstanbul Hadımköy/Arnavutköy merkezli.
- Satış yapısı birkaç kanaldan oluşuyor: mobilya üreticileri, distribütörler, bayiler ve 50'den fazla ülkeye ihracat. Belgrad'da dağıtım şirketi, Karadağ Bar'da grup deposu var. Bu yapı, müşteri araştırması, ilk temas, teklif, takip ve raporlama işlerinin birden çok dil, ülke ve kanalda yürüdüğüne işaret ediyor.
- 2025'te üç uluslararası fuara katıldılar (Interzum Köln, Interzum Guangzhou, Intermob İstanbul). Fuar haberlerinde "yeni ve potansiyel müşterilerle ilk görüşmeler" açıkça hedef olarak geçiyor.
- Teklifin temel girdisi dışarıdan görülebiliyor: Müşteri, panel üreticisinin dekor kodunu veriyor (ör. Kastamonu Entegre D126), Boyut bunu kendi koduna eşliyor (0100). Sitede bu eşleşme için 346 kayıt var. Katalogda yaklaşık 8.000 dekorluk arşiv ve farklı kalınlık/yüzey seçenekleri belirtiliyor.
- Sitede numune veya teklif talep formu görülmedi; talepler genel iletişim formu, telefon ve e-posta üzerinden geliyor gibi görünüyor.
- **En güçlü 5 fırsat (hipotez):**
  1. Gelen talepten teklif taslağı hazırlama
  2. Fuar sonrası ilk temas ve takip
  3. Yeni ihracat pazarlarında B2B müşteri araştırması
  4. Numune ve müşteri takibi
  5. Satış ve ihracat raporlaması
- Öneri: Tek bir süreçle 30 günlük pilot. Önce süreç haritası ve başlangıç ölçümü yapılır. Ardından mevcut sistemlere yalnızca okuma erişimiyle prototip kurulur, insan onaylı paralel çalıştırılır ve aynı ölçütlerle değerlendirilir.

---

## 2. Tarama yöntemi ve durumu

| Adım | Sonuç |
|---|---|
| Apify `website-content-crawler` giriş şeması (build 0.3.102) | İncelendi |
| robots.txt | `Allow: /`. Tarama robots kurallarına uyumlu yapıldı |
| Çalıştırma 1 (`cheerio`) | **Başarısız.** 9/9 istek TLS hatası verdi. Platform durumu "SUCCEEDED" görünse de 0 sayfa alındı, başarılı sayılmadı |
| Çalıştırma 2 (`playwright:firefox`) | **Başarılı.** 50/50 sayfa HTTP 200 döndü |
| Ek kontrol | İletişim, Bant Bulucu, Kataloglar ve ürün listeleri HTML'den kontrol edildi. sitemap.xml (838 URL) ve 2026 İngilizce katalog (16 sayfa) incelendi |
| Kayıtlar | `tarama-kayitlari.json` (URL, tarih, durum, başlık, özet). Menü, footer ve çerez metni ayıklandı |

---

## 3. İş modeli — doğrulama tablosu

| Konu | Bulgu | Kanıt | Durum |
|---|---|---|---|
| Faaliyet | PVC, ABS ve PP termoplastik kenar bandı üretimi; ekstrüzyon, baskı ve gofraj hatları | [Ana sayfa](https://boyutplastik.com.tr/), [Şirket Profili](https://boyutplastik.com.tr/kurumsal/sirket-profilimiz), [Katalog 2026](https://boyutplastik.com.tr/uploads/main/260303152042_boyut-katalog-ing-2026-h.pdf) | Doğrulanmış (firma beyanı) |
| Müşteri tipi | Mobilya üreticileri ve distribütörler. Mobilya ve kapı üretimi | Ana sayfa, Şirket Profili | Doğrulanmış |
| Kendi markası | "Boyut markasıyla ürettiğimiz" | [Intermob 2022](https://boyutplastik.com.tr/medya/fuarlar/intermob-2022) | Doğrulanmış |
| Bayi yapısı | "Bayi Girişi" bağlantısı Moka ödeme sistemi giriş sayfasına gidiyor. Kalite politikasında "bayilerimiz" ifadesi geçiyor | Ana sayfa HTML, [Kalite Politikası](https://boyutplastik.com.tr/kurumsal/politikalarimiz/kalite-politikasi) | Bayi kanalı var. Portalın amacı (ödeme/tahsilat?) toplantıda doğrulanacak |
| Online satış | Sepet veya online sipariş yok | — | Online satış yok (dışarıdan görünen) |
| İhracat | 50+ ülke. Öncelik Avrupa ve Balkanlar, ayrıca Orta Doğu | Ana sayfa, [CEO Mesajı](https://boyutplastik.com.tr/kurumsal/ceonun-mesaji), Katalog | Doğrulanmış (beyan). Ülke listesi sitede yok |
| Bölgesel yapı | Belgrad'da Boyut Import-Export D.o.o. (2.000 m²). Karadağ Bar Serbest Bölgesi'nde 12.000 m² grup deposu | Katalog, [Tarihçe](https://boyutplastik.com.tr/kurumsal/tarihce) | Doğrulanmış (beyan) |
| Büyüme hedefi | "Mevcut, yeni ve karlı pazarlara ihracatı artırarak global oyuncu olmak" | [Amaçlarımız](https://boyutplastik.com.tr/kurumsal/amaclarimiz) | Doğrulanmış |
| Fuarlar | 2025'te Interzum Köln, Interzum Guangzhou ve Intermob. 2024'te Materials & Finishes Show (Birmingham) ve Intermob | [Fuarlar](https://boyutplastik.com.tr/medya/fuarlar) | Doğrulanmış |
| Teklif girdisi | Panel üreticisi dekor kodu → Boyut kodu eşleşmesi (346 kayıt, ~24 panel üreticisi) | [Bant Bulucu](https://boyutplastik.com.tr/bant-bulucu), [örnek](https://boyutplastik.com.tr/bant-bulucu/keas-cappucino) | Doğrulanmış |
| Ürün çeşitliliği | ~8.000 dekor arşivi. Stok programı ağırlıklı 0,4 mm ve 0,8 mm. Super Matt'tan High Gloss'a yüzeyler. Özel talepler için dilimlenmemiş stok | Katalog | Doğrulanmış (beyan) |
| Talep kanalı | İletişim formu (ad, e-posta, telefon, konu, mesaj, güvenlik kodu), telefon, faks, e-posta. Numune veya teklif formu görülmedi | [İletişim](https://boyutplastik.com.tr/iletisim) | Doğrulanmış (dışarıdan) |
| Kapasite | Farklı ifadeler var: 7 bin ton/yıl (EN), "Türkiye'nin en büyük ikinci", 25.000 m² (katalog), 20 bin m² (tarihçe) | Ana sayfa, [EN](https://boyutplastik.com.tr/main-page), Katalog, Tarihçe | Toplantıda doğrulanacak |
| CRM, ERP, teklif süreci, ekip yapısı, MOQ, fiyat, teslim süresi | Dışarıdan görünmüyor | — | **İç veri gerekli.** Eksik kabul edilmedi |
| Görüşülen kişi | Sajmir Bey'in rolü ve sorumluluk alanı | — | Toplantıda doğrulanacak |

---

## 4. Dışarıdan görünen B2B satış akışı

Format: Aşama | Gözlem | Kanıt | Durum | Olası otomasyon alanı

| Aşama | Gözlem | Kanıt | Durum | Olası alan |
|---|---|---|---|---|
| Müşteri araştırması | Yeni pazarlara ihracat hedefi var; 50+ ülkeye satış | Amaçlarımız, CEO Mesajı | Doğrulanmış (hedef). Bugünkü yöntem: iç veri gerekli | Hedef ülke bazlı alıcı listesi ve ön eleme |
| İlk temas | Fuarlarda yeni ve potansiyel müşterilerle görüşmeler hedefleniyor | Fuar haberleri 2022–2025 | Doğrulanmış (fuar kanalı). Fuar sonrası takip yöntemi: iç veri gerekli | Fuar temaslarının kaydı ve kişiselleştirilmiş takip taslakları |
| Talep | Genel iletişim formu, telefon, e-posta; yapılandırılmış talep formu yok | İletişim | Doğrulanmış (dışarıdan) | Gelen e-posta/form içeriğinden talep alanlarını çıkarma |
| Teklif | Girdi: panel dekor kodu → Boyut kodu, malzeme, kalınlık, genişlik, metraj | Bant Bulucu, Katalog | Girdiler doğrulanmış. Hazırlama süreci: iç veri gerekli | Kod eşleştirme ve teklif taslağı (fiyat mevcut sistemden, insan onayıyla) |
| Numune / sipariş | Özel talepler için stok, hazır stok programı | Katalog | Beyan. Süreç: iç veri gerekli | Numune gönderimi sonrası hatırlatma ve takip |
| Bayi / tahsilat | Bayi girişi bir ödeme sistemine gidiyor | Ana sayfa HTML | Hipotez | Toplantıda sorulacak |
| Raporlama | Çok ülkeli ve çok kanallı satış | Katalog, CEO Mesajı | İç veri gerekli | Ülke, kanal ve temsilci bazlı haftalık rapor |

---

## 5. Öncelikli 5 fırsat

Her fırsat bir hipotezdir. Hangisinin öncelikli olduğuna toplantıda birlikte karar verilmeli.

### F1. Gelen talepten teklif taslağına
- **Kanıt:** Müşteriler panel üreticisi dekor koduyla geliyor ve Boyut bu kodları kendi kodlarına eşliyor (346 kayıt). Talepler serbest metinle geliyor (form, e-posta).
- **Doğrulanacak varsayım:** Teklifin manuel hazırlandığı, kod eşleştirme ile fiyat/stok kontrolünün zaman aldığı ve hangi sistemde tutulduğu (ERP/Excel).
- **Örnek akış:** Gelen e-posta → firma, ülke, dekor kodu, malzeme, kalınlık × genişlik, metraj alanları çıkarılır → Bant Bulucu verisiyle Boyut kodu bulunur → eksik bilgiler işaretlenir → fiyat ve stok mevcut sistemden okunur → teklif taslağı satış temsilcisinin onayına düşer.
- **Mevcut sistemlere etkisi:** Başlangıçta yalnızca okuma erişimi; gönderim her zaman insan onayıyla.
- **Gerekli bilgi:** Örnek talepler (anonimleştirilmiş), teklif şablonu, fiyat listesi kaynağı. Sorumlu: Satış / Satış operasyonu.
- **Başarı ölçütü (birlikte belirlenecek):** Talebe ilk yanıt süresi, teklif hazırlama süresi, eksik bilgi nedeniyle geri dönüş sayısı.

### F2. Fuar sonrası ilk temas ve takip
- **Kanıt:** 2025'te 3 uluslararası fuar. Haberlerde yeni ve potansiyel müşterilerle görüşmeler öne çıkıyor.
- **Doğrulanacak varsayım:** Fuar temaslarının nasıl kaydedildiği (kartvizit, Excel, CRM) ve takip e-postalarının kim tarafından, ne kadar sürede gönderildiği.
- **Örnek akış:** Kartvizit/temas listesi → tek tabloda toplanır → firma bilgisi kamu kaynaklarından tamamlanır → görüşme notuna göre müşterinin dilinde takip e-postası taslağı hazırlanır → 7 ve 21 gün sonrası için hatırlatma kurulur.
- **Gerekli bilgi:** Son fuarın temas listesi (örnek), takip şablonları. Sorumlu: İhracat / Pazarlama.
- **Başarı ölçütü:** Fuar sonrası takip edilen temas oranı, ilk takip süresi.

### F3. Yeni ihracat pazarlarında B2B müşteri araştırması
- **Kanıt:** "Yeni ve karlı pazarlara ihracat" hedefi. Katalogda Avrupa, Balkanlar ve Orta Doğu öncelikli.
- **Doğrulanacak varsayım:** Hedef ülkeler, ideal müşteri profili (mobilya üreticisi mi, distribütör mü) ve bugünkü araştırma yöntemi.
- **Örnek akış:** Hedef ülke + profil → kamu kaynaklarından firma listesi → ölçek ve ürün uyumu notlarıyla ön eleme → satış ekibine öncelikli liste → onaylananlar için ilk temas e-postası taslağı.
- **Not:** Doğrudan pazarlama e-postalarında KVKK/GDPR ve alıcı ülke kuralları dikkate alınmalı.
- **Başarı ölçütü:** Satış ekibinin uygun bulduğu firma oranı, ilk temas sayısı.

### F4. Numune ve müşteri takibi
- **Kanıt:** Özel talepler için stok ve hazır stok programı (katalog).
- **Doğrulanacak varsayım:** Numune taleplerinin sıklığı ve numune sonrası takibin nasıl yapıldığı.
- **Örnek akış:** Numune gönderimi kaydı → belirli gün sonra takip e-postası taslağı → yanıt yoksa temsilciye hatırlatma.
- **Başarı ölçütü:** Takipsiz kalan numune sayısı.

### F5. Satış ve ihracat raporlaması
- **Kanıt:** Çok ülkeli ve çok kanallı yapı (üretici, distribütör, bayi, Belgrad dağıtımı).
- **Doğrulanacak varsayım:** Raporların bugün nasıl hazırlandığı (ERP çıktısı + Excel?), sıklığı ve kimin hazırladığı.
- **Örnek akış:** Mevcut ERP/Excel çıktıları → haftalık otomatik rapor (ülke, kanal, açık teklifler, takip bekleyenler) → yöneticiye e-posta.
- **Başarı ölçütü:** Rapor hazırlama süresi, raporun zamanında ulaşması.

---

## 6. Mevcut sistemlerle çalışma ilkeleri

- Mevcut ERP, CRM, e-posta ve Excel yapısı korunur. Önce yalnızca okuma erişimiyle başlanır.
- Müşteriye giden her e-posta ve teklif, insan onayı olmadan gönderilmez.
- Fiyat, stok ve teslim bilgisi yalnızca Boyut Plastik'in kendi sistemlerinden alınır, otomasyon bu bilgileri üretmez.
- Kişisel veriler KVKK/GDPR çerçevesinde işlenir. Erişim yetkileri pilotun sonunda gözden geçirilir.

---

## 7. Sektör bağlamı (müşteri araştırmasında rakip analizine destek)

Türkiye'de benzer ürünleri üreten ve doğrulanabilen firmalar: EGGER Dekor A.Ş./ROMA, Gebze ([egger.com/edging](https://www.egger.com/edging), [Yapı Kataloğu](https://yapikatalogu.com/en/roma-kenar-bantlari)); TECE, Bursa ([tece.com.tr](https://tece.com.tr/en)). Portakal Plastik (Çayırova) yalnızca fuar kaydından kısmen doğrulandı ([Intermob](https://www.intermobistanbul.com/en/exhibitor-list/portakal-plastik-uretim-paz-san-ve-tic-as-149159-3175)). Berkfa doğrulanmadı. Gerçek rakip listesi toplantıda Boyut Plastik'ten alınmalı.

---

## 8. 30 günlük pilot

| Hafta | İş |
|---|---|
| 1 — Süreç haritası ve başlangıç ölçümü | Seçilen sürecin (öneri: F1 veya F2) adım adım haritası, kullanılan sistemler, örnek veriler, başarı ölçütlerinin birlikte belirlenmesi ve mevcut durumun ölçülmesi |
| 2 — Prototip | Okuma erişimiyle prototip akış, örnek/anonim verilerle test, şablonların hazırlanması |
| 3 — Paralel çalıştırma | Gerçek taleplerde mevcut süreçle paralel çalıştırma, her çıktı insan onaylı, hata ve eksiklerin kaydı |
| 4 — Değerlendirme | Aynı ölçütlerle karşılaştırma, ekip geri bildirimi, devam / genişletme / durdurma kararı |

Başarı kriterleri başlangıçta birlikte belirlenir. Sonuçlar garanti edilmez. Kısa pilot dönemindeki değişimler kalıcı verimlilik veya satış artışı kanıtı olarak sunulmaz.

---

## 9. Doğrulanamayan veya erişim bekleyen kısımlar

- İç süreçler, sistemler (CRM/ERP), ekip yapısı, talep ve teklif hacmi: İç veri gerekli.
- Bayi girişinin (Moka) amacı, MOQ, fiyat, teslim süresi, kapasite rakamları: Toplantıda doğrulanacak.
- Sajmir Bey'in rolü: Toplantıda doğrulanacak.
- Apify çalıştırma 1 başarısız (TLS). Çalıştırma 2 başarılı.
- Vercel dağıtımı yapılmadı (kimlik bilgisi yok).
