# 04 — Güven Oluşturma Stratejisi

> Erişim tarihi: **18 Kasım 2026**. Hukuki konular bilgilendirme amaçlıdır. Kesin uyum değerlendirmesi için KVKK ve ticari ileti alanında uzman bir avukattan görüş alınmalıdır.

## Kısa bulgular

- Tanınmayan bir SaaS'ın ilk güven kaybı genellikle **abartıdan** gelir. Callypso'nun açılış sayfasındaki kurgusal logolar, yorumlar ve "2.400+ marka" ifadesi bugünkü en büyük güven riski (kanıt: [03](03-callypso-urun-gap-analizi.md)).
- Pushouse güveni logo duvarı, sayaçlar, Meta rozetleri ve yöntem sayfasıyla kuruyor. Callypso bu ölçekte rekabet edemez. Bunun yerine **"kurucuyu gör, gerçek ürünü gör, sınırları açıkça yazılmış pilotu dene, sonucu kontrol grubuyla ölç"** zinciriyle güven kurmalı.
- Teknik güvende dürüst cümle şu: "Veri modelimiz workspace bazında ayrılmış (RLS). Pilot öncesi bunu test edip raporlayacağız. Sertifikamız yok." Olmayan sertifika veya SLA iddia edilmemeli.

## A. Web sitesi ve şirket güvenilirliği

| Unsur | Bugün | Yapılacak | Not |
|---|---|---|---|
| Değer önerisi | Dağınık: içerik üreticileri, yerel işletmeler, ajanslar, Mailchimp karşılaştırması | Tek cümle: "Ürünü biten müşteriniz geri gelsin. Kozmetik ve bakım markaları için tekrar alım otomasyonu ve kontrol gruplu ölçüm." | Segment kararı: [02](02-musteri-ve-icp-analizi.md) |
| Şirket bilgisi | Yok. Alan adı `callypsoengage.com` erişilemiyor | Unvan, vergi/MERSİS (varsa), adres veya "uzaktan çalışıyoruz" + şehir, kurucu adı ve fotoğrafı, LinkedIn | Kurumsal e-posta adresi (ad@alanadı) |
| İletişim ve destek | Yok | E-posta, randevu linki, iş saatleri ve yanıt süresi taahhüdü ("1 iş günü"), WhatsApp iş hattı (isteğe bağlı) | "7/24" yazma; gerçekçi süre ver |
| Fiyat | USD ve 2.400+ marka iddiası | TL fiyat aralığı veya "pilot sonrası şeffaf teklif" + pilot ücreti | [06](06-fiyatlandirma-ve-gelir-modeli.md) |
| Entegrasyon durumu | "Shopify — Hazır" (yanlış) | Durum tablosu: **Canlı** (CSV içe aktarma, Resend e-posta), **Beta** (holdout raporu), **Planlanan** (ikas/Ticimax API, Netgsm SMS, WhatsApp) | Her etiketin tarihi olsun |
| Hukuki metinler | Doğrulanamadı | Gizlilik ve KVKK aydınlatma metni, kullanım koşulları, veri işleme sözleşmesi (DPA) taslağı, alt işleyen listesi (Supabase, Vercel, Resend; bölgeleriyle) | **Metin yayımlamak uyum kanıtı değildir.** Avukat incelemesi gerekir |
| Ürün ekranları | Demo var | "DEMO VERİSİ" filigranı veya rozeti kalıcı olarak görünsün | Mevcut demo uyarısı iyi; açılış sayfasına da taşı |

**Ana sayfada güven unsurlarının sırası:**
1. Net vaat ve hedef kitle.
2. Kurucunun 60 saniyelik videosu.
3. 3 adımda nasıl çalışır.
4. Gerçek ürün ekranları (demo etiketli).
5. Ölçüm yöntemi (holdout).
6. Pilot programı ve sınırları.
7. Entegrasyon durum tablosu.
8. Veri ve güvenlik özeti.
9. SSS.
10. Şirket ve iletişim bilgisi.

Gerçek referanslar geldikçe bunlar 2. sıraya eklenir.

**İlk beş içerik/arayüz iyileştirmesi:**
1. Kurgusal logoları, yorumları, "4.9/5 · 2.400+ marka" ifadesini ve "+%30" benzeri iddiaları **tamamen kaldır**.
2. Başlığı ve hedef kitleyi kozmetik/bakım nişine daralt; Mailchimp karşılaştırmasını kaldır.
3. Türkçe ve TL tutarlılığını sağla (ayarlar ekranı, landing, "LTV > $250" gibi tanımlar).
4. Entegrasyon durum tablosunu ekle; "Shopify — Hazır" yazısını düzelt.
5. "Kurucu ve şirket" bölümünü ekle ve kurumsal alan adını çalışır hale getir.

## B. Sosyal kanıt yokken güven

**Yapılmaması gerekenler:** Sahte müşteri, sahte yorum, izinsiz logo, demo sonucunu gerçek sonuç gibi göstermek. Türkiye'de yanıltıcı ticari uygulama ve haksız rekabet riski de taşır; avukata danışılmalı.

**Alternatifler:**

| Alternatif | Nasıl | Efor |
|---|---|---|
| Açıkça demo etiketli ürün turu | Mevcut demo + "Bu veriler örnektir" bandı + 2 dakikalık sesli tur | 3–4 saat |
| Kurucu problem videoları | Bir kozmetik markasının **herkese açık** sitesi üzerinden "tekrar alım akışını şöyle kurardım" anlatımı (marka adı izinsiz kullanılmadan, anonimleştirilerek) | Video başına 1 saat |
| Şeffaf geliştirme günlüğü | Haftalık "bu hafta ne çıktı" notu (LinkedIn + changelog sayfası) | Haftada 30 dakika |
| Tasarım ortağı programı | 3–5 marka, sınırlı kapsam, indirimli/ücretsiz karşılığında görüşme ve izinli vaka çalışması | Bkz. D |
| Yöntemi açıklanmış ilk vaka çalışmaları | Holdout'lu ve müşteri onaylı | Pilot başına 3–4 saat |

### Vaka çalışması şablonu

```
BAŞLIK: [Marka / anonim ise "Bir cilt bakımı markası"] — [Tek cümle sonuç, nedensel değilse "ilişkilendirilmiş" de]

1. Problem: Müşterinin kendi ifadesiyle (alıntı, onaylı).
2. Başlangıç ölçümü: Dönem [gg.aa.yyyy–gg.aa.yyyy]; aktif müşteri sayısı; 90 günlük tekrar alım oranı; e-posta listesi ve onaylı kişi sayısı.
3. Müdahale: Kurulan akışlar (ör. "tükenme zamanı hatırlatması, 2 e-posta"), kanal, sıklık, teklif/kupon.
4. Süre: [X gün]; olgunlaşma penceresi [30 gün].
5. Sonuç:
   - Mesaj alan grup: n = __, sipariş oranı = __%, gelir = __ TL
   - Kontrol grubu (rastgele %10, mesaj almadı): n = __, sipariş oranı = __%, gelir = __ TL
   - Artımsal fark = (oran_A − oran_K) × n_A; %95 güven aralığı = [__, __]
   - İlişkilendirilmiş gelir (UTM/kupon) = __ TL. Bu sayı nedensel ek gelir değildir.
6. Maliyetler: Kupon indirimi = __ TL; mesaj maliyeti = __ TL; abonelik = __ TL; iade/iptal = __ TL.
7. Sınırlamalar: Örneklem büyüklüğü, mevsimsellik, eş zamanlı kampanyalar, tek mağaza; başka mağazalar için garanti değildir.
8. Müşteri onayı: [Ad, unvan, tarih]. Hangi rakamların yayımlanabileceği (tutar mı, oran mı).
```

**Kural:** Kontrol grubu yoksa rakamı "ilişkilendirilmiş" olarak etiketle ve büyük puntoyla öne çıkarma.

## C. Kurucu odaklı güven ve Loom

**Mekanizma (hipotez):** Küçük bir SaaS'ta alıcının asıl riski "şirket yarın kaybolur mu, sorun çıkınca biri cevap verir mi" sorusudur. Kurucuyu görmek bu riski azaltabilir; kendi sitesine özel hazırlanmış bir video da "bu kişi işimi gerçekten inceledi" sinyali verebilir. **Hipotez:** Kişiselleştirilmiş video, olumlu yanıt sonrası veya toplantı öncesi kullanıldığında görüşme katılımını ve pilot kabulünü artırır. İlk temasta ise hazırlık maliyeti yüksek ve tıklama oranı belirsiz olduğu için daha az verimlidir. Bu evrensel bir gerçek değil; test edilmeli.

| Video kullanım anı | Artı | Eksi | Öneri |
|---|---|---|---|
| İlk temas | Dikkat çeker | Hazırlık 10–15 dk/kişi. Linkli ilk e-posta teslim edilebilirliği düşürebilir. Yabancı link tıklama çekincesi yaratır | Yalnız en yüksek potansiyelli 10 hesapta test |
| Olumlu yanıt sonrası | İlgiyi güvene çevirir | Hazırlık süresi | **Varsayılan** |
| Toplantı öncesi | No-show oranını azaltabilir | — | Kısa, 45 sn |
| Toplantı sonrası | Karar vericinin ekip içinde paylaşmasını kolaylaştırır | — | **Varsayılan** |

**Test tasarımı:**
- Birincil segmentten 40 hesap, iki gruba rastgele bölünür.
- **A grubu:** Yalnız metin. **B grubu:** Olumlu yanıt sonrası 60–90 saniyelik kişisel video.
- Ölçülenler: Hazırlık süresi (dakika), olumlu yanıt sonrası görüşme kabul oranı, görüşmeye katılım, pilot kabulü.
- İlk temas videosu ayrıca 10 hesapta denenir.
- **Karar:** Örneklem küçük olduğu için yalnız büyük farklar anlamlıdır (ör. görüşme kabulünde 2 kat). Fark yoksa süre tasarrufu için metinle devam et.
- Teslim edilebilirlik: İlk e-postada link ve görsel kullanma. Video linkini yalnız yanıt geldikten sonra gönder.

### Senaryo 1 — İlk / olumlu yanıt sonrası video (60 sn, Türkçe)

> Kamuya açık gözlem: [köşeli parantezler]. Müşterinin iç verisi hakkında varsayım yapılmaz; soru olarak sorulur.

```
[0–8 sn] Merhaba [Ad], ben Furkan, Callypso Engage'in kurucusuyum. Bu videoyu sadece sizin için çektim.
[8–25 sn] Sitenizde [ürün adı, ör. 50 ml C vitamini serumu] gördüm. Ürün açıklamasında [yaklaşık kullanım süresi/"günlük kullanım"] yazıyor. Bu tür ürünlerde müşterinin ikinci kez alıp almadığı genelde reklam maliyetini belirliyor.
[25–40 sn] Ekranda gördüğünüz gibi, bültene kayıt kutunuz var ama [sitede görünen gözlem, ör. "son kampanya duyurusu Instagram'da"]. Sizin tarafta tekrar alım oranını izleyip izlemediğinizi bilmiyorum, onu sormak isterim.
[40–55 sn] Biz şunu yapıyoruz: Sipariş dosyanızdan ürünü bitmek üzere olan müşterileri bulup doğru zamanda e-posta gönderiyoruz. Sonucu, mesaj göndermediğimiz bir kontrol grubuyla karşılaştırarak ölçüyoruz; yani "gerçekten işe yaradı mı" sorusuna dürüst cevap veriyoruz.
[55–60 sn] Uygunsa 15 dakika konuşalım, sizin için çalışır mı birlikte bakalım. Takvim linki aşağıda. Teşekkürler.
```

### Senaryo 2 — Demo sonrası takip videosu (75 sn)

```
[0–10 sn] [Ad], bugünkü görüşme için teşekkürler. Konuştuklarımızı ekibinizle paylaşabilmeniz için kısa bir özet bırakıyorum.
[10–30 sn] Sizin anlattığınız problem: [müşterinin kendi cümlesi, ör. "ilk siparişten sonra müşteri dönmüyor"]. Elinizde [görüşmede öğrenilen: X aylık sipariş verisi, Y kişilik e-posta listesi] var.
[30–55 sn] Önerdiğimiz pilot: 30 gün; iki akış: ikinci alım ve tükenme zamanı hatırlatması. Siparişlerinizin %10'u kontrol grubu olarak mesaj almayacak; sonunda iki grubu yan yana koyup size raporlayacağız. Sonuç olumsuz çıkarsa bunu da aynı açıklıkla yazacağız.
[55–70 sn] Sizden ihtiyacımız: sipariş ve müşteri dosyası (CSV), gönderim alan adınız için iki DNS kaydı ve onaylı e-posta listesi. Verileriniz pilot sonunda isterseniz silinir.
[70–75 sn] Teklif e-postada. Sorunuz olursa doğrudan bana yazabilirsiniz.
```

## D. Satış sürecinde güven ve kontrollü pilot

**Süreç:** Kişiselleştirilmiş mesaj → gerçek problem üzerinden demo → kapsamı net pilot → kurulum desteği → sonuç raporu → şeffaf teklif → abonelik → referans.

**Pilot süresi neden 30 gün?** 14 günlük pilot başlangıç hipotezi olarak değerlendirildi, ancak tekrar alım döngüsü 30–90 gün olan ürünlerde 14 gün yeterli sipariş üretmeyebilir.
- **Öneri:** 30 gün gönderim ve 14 gün olgunlaşma (son mesajlardan sonra siparişleri izleme).
- Sipariş hacmi düşükse (< 300/ay) **45–60 gün**.
- Yalnız ikinci alım akışı test ediliyorsa 21 gün kabul edilebilir.

### Pilot teklif taslağı

```
CALLYPSO ENGAGE — KONTROLLÜ PİLOT TEKLİFİ (Taslak)

Taraflar: CallypsoTech ("Callypso") ve [Marka] ("Müşteri")
Süre: 30 gün gönderim + 14 gün ölçüm. Başlangıç: [tarih].

Kapsam:
  1) İkinci alım akışı (ilk siparişten [14–21] gün sonra, 1–2 e-posta)
  2) Tükenme zamanı hatırlatması (ürün bazlı tahmini kullanım süresine göre, 1 e-posta)
  Kanal: E-posta (Müşterinin kendi alan adından). SMS/WhatsApp kapsam dışı.

Veri ihtiyacı (veri minimizasyonu):
  Son 12 ayın sipariş dosyası (sipariş no, tarih, müşteri kimliği, e-posta, ürün SKU, adet, tutar)
  ve pazarlama e-postası onay durumu. Adres ve telefon istenmez.

Sorumluluklar:
  Callypso: kurulum, şablon taslakları, segment hesaplama, gönderim, haftalık kısa rapor, sonuç raporu.
  Müşteri: onaylı liste ve onay kanıtının sorumluluğu, metin ve indirim onayı, DNS kayıtları (SPF/DKIM).

Başlangıç metrikleri (pilot öncesi birlikte ölçülür):
  90 günlük tekrar alım oranı, ortalama sipariş tutarı, e-posta onaylı müşteri sayısı.

Başarı kriteri (önceden yazılır):
  Mesaj alan grubun 30+14 günlük sipariş oranı kontrol grubundan istatistiksel olarak yüksekse "başarılı";
  fark yoksa "sonuçsuz"; düşükse "başarısız". Her durumda rapor verilir.

Ücret: [Tasarım ortağı: ücretsiz, izinli vaka çalışması karşılığında] veya [Ücretli pilot: X TL + KDV,
  aboneliğe geçişte ilk aydan düşülür]. Mesaj maliyeti Callypso'ya aittir.

İptal ve veri silme: Müşteri istediği an yazılı bildirimle sonlandırabilir. Pilot bitiminden itibaren 30 gün içinde
  (veya talep üzerine daha erken) Müşteri verileri silinir ve silme teyidi e-postayla gönderilir.

Ücretliye geçiş: Sonuç raporundan sonra 7 gün içinde [paket adı, aylık TL] teklifi. Otomatik yenileme yoktur.

Gizlilik: Sonuçlar Müşterinin yazılı onayı olmadan yayımlanmaz.
```

**Risk azaltıcı seçenekler:**

| Seçenek | Callypso maliyeti | Uygulanabilirlik | Öneri |
|---|---|---|---|
| Ücretsiz tasarım ortaklığı (ilk 3) | Kurucu zamanı + mesaj maliyeti | Yüksek | Evet, yalnız ilk 3 |
| Ücretli pilot, aboneliğe mahsup | Düşük | Yüksek | 4. müşteriden itibaren varsayılan |
| "Sonuçsuzsa ikinci ay ücretsiz" | Bir aylık gelir | Orta | Gerekirse |
| İlk ay iade garantisi (memnuniyet) | Bir aylık gelir | Orta | Abonelikte değerlendirilebilir |
| Gelir/ROI garantisi | Ölçülemez risk | **Önerilmez.** Kanıtlanamaz ve yanıltıcıdır | Hayır |

## E. Teknik güven ve veri sorumluluğu

| Konu | Doğrulanan mevcut kontrol | Eksik kanıt | Gerekli aksiyon | Müşteriye dürüst ifade |
|---|---|---|---|---|
| Veri işleme rolü | — | DPA yok | Callypso'nun veri işleyen, markanın veri sorumlusu olduğu DPA taslağı (avukat incelemesi) | "Verilerinizi yalnız sizin talimatınızla, pilot amacıyla işleriz; sözleşmesi şurada." |
| Veri minimizasyonu | Şema e-posta, telefon ve onay alanları içeriyor | — | Pilotta telefon/adres alma | "Sadece sipariş ve e-posta onayı istiyoruz." |
| Saklama ve silme | — | Silme prosedürü yok | Pilot bitiminden 30 gün sonra silme betiği + teyit e-postası | "30 gün içinde siliyor ve size teyit gönderiyoruz." |
| Çok kiracılı ayrım | RLS politikaları **şemada tanımlı** (`0001_init.sql`) | Test yok | İki test workspace'iyle çapraz erişim testi; sonucu belgele | "Her müşterinin verisi veritabanı seviyesinde ayrılıyor; testi şu tarihte yaptık." |
| Kimlik doğrulama ve erişim | Demo modunda her girişe izin var | Gerçek auth yok | Supabase Auth, en az yetki ilkesi, kurucu dışında erişim yok | "Verilerinize yalnız kurucu erişir; erişimler loglanır." (Loglama kurulduktan sonra) |
| Entegrasyon izinleri | — | — | Pilotta API anahtarı yerine CSV; sonra yalnız okuma yetkili anahtar | "Mağazanıza yazma yetkisi istemiyoruz." |
| Şifreleme | Supabase ve Vercel aktarımda TLS kullanıyor ve diski şifreliyor (sağlayıcı beyanı) | Callypso'ya özel doğrulama yok | Sağlayıcı belgelerine link ver | "Aktarım ve saklamada sağlayıcılarımızın şifrelemesini kullanıyoruz." |
| Loglama | — | Yok | Erişim ve gönderim logları | Kurulana kadar iddia etme |
| Yedekleme ve geri yükleme | Supabase planına bağlı | Doğrulanamadı | Plan seç, geri yükleme testi yap | Test edilene kadar iddia etme |
| Olay yönetimi | — | Yok | 1 sayfalık olay prosedürü; 72 saat içinde müşteriye bildirim hedefi | "Bir ihlal olursa en geç X saat içinde size bildiririz." |
| Alt işleyenler | — | Liste yok | Supabase (bölge), Vercel, Resend; sonra Netgsm/BSP. Yayımla | Liste |
| Yurt dışı aktarım | — | Supabase/Resend/Vercel'in sunucu bölgesi doğrulanmadı | Bölgeyi seç (mümkünse AB). KVKK m.9 kapsamında standart sözleşme gerekip gerekmediğini avukata sor. Standart sözleşmeler imzadan sonra **5 iş günü** içinde Kurum'a bildirilmeli | Avukat görüşü sonrası |
| Destek ve SLA | — | — | "1 iş günü içinde yanıt" hedefi; SLA **garantisi verme** | "Hedefimiz 1 iş günü." |
| Sertifika (ISO 27001, SOC 2) | Yok | — | Şimdilik hedef değil | "Sertifikamız yok." |

### Mevzuat özeti (Türkiye ve AB)

| Alan | Gereklilik | Callypso'ya etkisi | Kaynak | Uzman incelemesi |
|---|---|---|---|---|
| Ticari elektronik ileti (6563 sayılı Kanun ve Yönetmelik) | Tüketiciye (B2C) ticari ileti için **önceden onay** gerekir. **Tacir ve esnafa** önceden onay gerekmez; ancak ret hakkı vardır ve adreslerin gönderimden önce İYS'ye kaydedilmesi gerekir | Markaların müşterilerine gönderim B2C'dir; onay şart. Callypso'nun markalara cold e-postası B2B'dir; İYS kayıt yükümlülüğü değerlendirilmeli | https://www.lexpera.com.tr/mevzuat/yonetmelikler/ticari-iletisim-ve-ticari-elektronik-iletiler-hakkinda-yonetmelik · https://hukukcularevi.com/ticari-elektronik-ileti-iys-izin-6563-reklam/ | **Evet.** B2B cold outreach için İYS kaydının nasıl yapılacağı |
| İYS entegratörlüğü | Onay/ret kaydını İYS'ye işleyen firmaların Bakanlık'tan entegratör yetkisi alması gerekiyor (mevcutlar için 31 Mart 2025) | Callypso müşteri adına İYS'ye kayıt yapacaksa yetki gerekebilir. Alternatif: markanın kendi İYS hesabı veya yetkili entegratör (ör. SMS sağlayıcısı) | https://ticaret.gov.tr/haberler/entegratorluk-yetkisi-basin-aciklamasi | **Evet** |
| İdari para cezaları | 25 Aralık 2025 tebliğiyle yeniden değerleme oranında güncellendi | Uyumsuz gönderim marka için maddi risk; Callypso için itibar riski | https://hukukcularevi.com/ticari-elektronik-ileti-iys-izin-6563-reklam/ (ikincil) | Güncel tutar Resmî Gazete'den teyit edilmeli |
| KVKK — aydınlatma, veri işleyen, yurt dışı aktarım | Veri işleyen sözleşmesi; yurt dışı aktarımda m.9 güvenceleri; standart sözleşme 5 iş günü içinde bildirim | Supabase/Resend/Vercel bölgeleri belirleyici | https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu | **Evet** |
| KVKK — B2B iletişim kişileri | Cold outreach'te kişi adı ve e-posta kişisel veridir; işleme şartı (meşru menfaat) ve aydınlatma gerekir | Apollo vb. kaynaklardan veri alırken kaynak ve hukuki dayanak kaydı tutulmalı | KVKK m.5 ve m.10 | **Evet** |
| GDPR (Avrupa, sonraki aşama) | Veri işleyen sözleşmesi (m.28), alt işleyen listesi; e-posta pazarlamada ülkeye göre ePrivacy onayı | Avrupa'ya açılmadan önce AB veri bölgesi ve DPA | GDPR m.28 (resmî metin: eur-lex.europa.eu) | **Evet** |
| WhatsApp Business | İşletme başlatan mesajlarda Meta onaylı şablon ve kullanıcı opt-in'i gerekir; mesaj başı ücret (Temmuz 2025'ten itibaren) | P2 öncesi politika incelemesi | https://developers.facebook.com/docs/whatsapp/pricing | Politika kontrolü |

## F. Güven aksiyonlarının önceliklendirilmesi

| # | Aksiyon | Hedef itiraz | Kanıt türü | Efor | Maliyet [Varsayım] | Sorumlu | Bağımlılık | İlk yayın | Başarı metriği |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Kurgusal sosyal kanıtı kaldır, Türkçe/TL ve niş mesajı düzelt | "Bunlar dürüst mü?" | Sayfa | 4 saat | 0 | Kurucu | — | **İlk 7 gün** | Sayfada doğrulanamayan iddia kalmaması |
| 2 | Şirket ve güven sayfası (kurucu, iletişim, entegrasyon durumu, veri özeti, alt işleyenler) + kurumsal alan adı ve e-posta | "Kim bunlar?" | Sayfa | 6 saat | Alan adı ~500–1.000 TL/yıl | Kurucu | 1 | **İlk 7 gün** | Görüşmelerde "kimsiniz" sorusunun azalması |
| 3 | Kuruculu kısa video (genel tanıtım, 60–90 sn) | "Arkasında biri var mı?" | Video | 2 saat | 0 (Loom ücretsiz plan) | Kurucu | 1 | **İlk 7 gün** | Video izlenme oranı; görüşme kabulü |
| 4 | Etkileşimli demo (demo etiketli, 2 dk sesli tur) | "Çalışıyor mu?" | Demo | 4 saat | 0 | Kurucu | 1 | İlk 30 gün | Demo sonrası pilot talebi |
| 5 | Kontrollü pilot paketi (teklif, DPA taslağı, silme prosedürü) | "Risk alırsam ne olur?" | Sözleşme ve süreç | 8 saat + avukat | Avukat görüşü ~5.000–15.000 TL [V] | Kurucu + avukat | 2 | İlk 30 gün | Pilot kabul oranı |
| 6 | RLS çapraz erişim testi ve 1 sayfalık güvenlik notu | "Verilerim güvende mi?" | Test raporu | 6 saat | 0 | Kurucu | Supabase kurulumu | İlk 30 gün | Güvenlik sorularına yazılı cevap |
| 7 | İlk 3–5 pilottan izinli vaka çalışması | "Sonuç alır mıyım?" | Vaka | Pilot başına 4 saat | 0 | Kurucu | Pilot tamamlanması | Sonraki 60 gün | ≥2 yayımlanabilir vaka |
| 8 | Haftalık geliştirme günlüğü | "Ürün yaşıyor mu?" | İçerik | Haftada 0,5 saat | 0 | Kurucu | — | İlk 30 gün → sürekli | Düzenlilik (13 haftada 13 not) |

## Belirsizlikler

- Video ve kurucu görünürlüğünün bu segmentte ne kadar etkili olduğu. Test edilecek.
- İYS ve KVKK'nın B2B cold e-posta ve veri işleyen rolüne uygulanması. Uzman görüşü gerekli.
- Supabase/Resend/Vercel bölge seçimleri.

## Sonraki aksiyonlar

1. Aksiyon 1–3'ü ilk hafta içinde tamamla.
2. Avukattan tek seferlik görüş iste: (a) B2B cold e-posta ve İYS, (b) DPA şablonu, (c) yurt dışı aktarım.
3. Video testini ilk 40 hesaplık temas dalgasıyla birlikte başlat.
