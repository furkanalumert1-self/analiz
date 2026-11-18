# 09 — Pushouse'un Eksik ve Zayıf Noktaları: Plana Eklemeler

> Erişim tarihi: **18 Kasım 2026**. Etiketler [01](01-pushouse-rekabet-analizi.md) ile aynı.
> Bu rapor, Pushouse'ta **olmayan** veya **müşteri aleyhine işleyen** noktaları tespit eder. Callypso planında zaten karşılananlar elenmiş, yalnız yeni aksiyonlar plana eklenmiştir.

## Kısa bulgular

- **Kamuya açık müşteri şikâyeti bulunamadı.**
  - Şikayetvar'da "pushouse" araması marka sayfası döndürmedi ("Böyle bir sayfa bulamadık"; https://www.sikayetvar.com/sikayetler?k=pushouse).
  - Ekşi Sözlük ve genel web aramasında kayıt çıkmadı.
  - Shopify'daki 6 yorumun tümü 5 yıldız (https://apps.shopify.com/pushouse/reviews).
  - **Sonuç:** "Şikâyet yok" kanıtı değil, **görünür şikâyet yok** demektir. Küçük B2B SaaS'larda memnuniyetsizlik genelde sessiz iptalle sonuçlanır. Ticimax ve ikas mağaza içi yorumları **doğrulanamadı**.
- Zayıf noktaların çoğu **sözleşmeden** çıkıyor. Pushouse B2B SaaS Kullanım Sözleşmesi, Sürüm 3.0, yürürlük 27 Temmuz 2026: https://www.pushouse.com/tr/kullanim-sozlesmesi
  - Dubai hukuku ve DIFC mahkemeleri
  - İade yok; kullanım kredisi dönem sonunda yanıyor
  - Sorumluluk tavanı düşük
  - Destek veya çalışma süresi garantisi yok
  - Veri dışa aktarımında kısa pencere
- Bunlar **müşteri şikâyeti değil, çıkarımdır.** Bir Türk KOBİ'sinin satın alma kararında itiraz konusu olma ihtimali olan noktalardır.

## Bulgular ve Callypso planına etkisi

| # | Pushouse'ta tespit edilen nokta | Kanıt (madde / kaynak) | Etiket | Callypso planında var mı? | Plana eklenen aksiyon |
|---|---|---|---|---|---|
| 1 | Sözleşme tarafı Dubai'deki şirket. BAE/Dubai hukuku uygulanır, **DIFC Mahkemeleri** münhasır yetkili, yargılama dili İngilizce, yorum farkında **İngilizce sürüm esas** | Sözleşme md. 1.5, 18, ve "Türkçe ve İngilizce sürümler" maddesi | Doğrulandı | **Yok** | **YENİ:** Türk tüzel kişiliğiyle sözleşme, Türk hukuku, İstanbul mahkemeleri, Türkçe tek esas metin, TL e-fatura. Güven sayfasında ve teklifte açıkça yazılır. Şirket kurulumu yoksa bu bir **ön koşul** olarak kurucu kararına eklenir (bkz. [08](08-kurucu-karar-raporu.md)). Avukat incelemesi gerekir |
| 2 | **Kullanım kredileri** dönem sonunda sonraki döneme devretmiyor, devredilemiyor, nakde çevrilemiyor | Md. 2.4 ve 6.1 | Doğrulandı | **Yok** | **YENİ:** Kullanılmayan mesaj kredisi **en az 3 ay devreder** [fiyat hipotezi]. Mesaj maliyeti müşteriye yansıtılan modelde düşük maliyetli bir güven farkı (bkz. [06](06-fiyatlandirma-ve-gelir-modeli.md)) |
| 3 | Başlayan dönem, kısmi dönem ve süresi dolan krediler için **iade yok**; abonelik **otomatik yenileniyor** | Md. 6 (iade ve yenileme hükümleri) | Doğrulandı | Kısmen (pilotta "otomatik yenileme yok"; abonelikte "ilk ay iade" yalnızca seçenek olarak) | **YENİ:** Abonelikte **ilk 30 gün koşulsuz iade**, aylık planda istediği an iptal ve **yenilemeden 7 gün önce hatırlatma e-postası** |
| 4 | Plan limitine ulaşılınca kullanım **sınırlanabiliyor** veya aşım ücreti uygulanabiliyor | Md. 6.1(b) | Doğrulandı | **Yok** | **YENİ (ürün):** Limitin %80'inde ve %100'ünde uyarı. **İşlemsel otomasyonlar** (sipariş/kargo bilgilendirme) limit nedeniyle durdurulmaz; yalnız pazarlama gönderimleri bekletilir |
| 5 | Sorumluluk tavanı: son 12 ayda ödenen ücret veya **$100**, hangisi yüksekse. Platform "olduğu gibi" sunuluyor. **Çalışma süresi ve destek seviyesi garanti edilmiyor** | Md. 4.4, 14.2 | Doğrulandı | Var: Callypso'nun "SLA garantisi verme, 1 iş günü hedefi" ilkesi ([04](04-guven-olusturma-stratejisi.md) E) | Değişiklik yok |
| 6 | **Çelişki:** Hakkımızda sayfası "7/24 kurumsal destek, 10 dakikalık SLA garantisi" diyor; sözleşme belirli bir destek seviyesi garanti etmiyor | https://www.pushouse.com/tr/hakkimizda · sözleşme md. 4.4 | Doğrulandı (çelişki) | Var: Callypso'nun "pazarlama metni = sözleşme metni" ilkesi | **YENİ (küçük):** Güven sayfasına "Pazarlama sayfalarındaki her taahhüt sözleşmede de yazılıdır" cümlesi ve yazılı destek taahhüdü eklenir |
| 7 | **Veri dışa aktarımı:** Müşteri abonelik sırasında standart araçlarla dışa aktarmalı; fesihten sonra kopya talebi için **30 gün** var; veriler 90 günde siliniyor | Md. 16 (fesih sonuçları) | Doğrulandı | **Yok** (prompt'ta istenen "taşınabilirlik" henüz ürün aksiyonu değildi) | **YENİ (ürün P1):** Tek tıkla **tam veri dışa aktarma** (müşteriler, segment üyelikleri, onay kayıtları, kampanya ve holdout sonuçları; CSV/JSON). İptalden sonra **60 gün** salt okunur erişim. Kilitlenme yerine taşınabilirlik ([08](08-kurucu-karar-raporu.md) farklılaşma) |
| 8 | İzin, onay kaydı ve İYS yükümlülüğünün tamamı müşteride; Pushouse "uyumu garanti etmez" | Md. 5.3, 7 | Doğrulandı | Kısmen (`consent_events` tablosu, İYS entegrasyonu "planlanan") | **YENİ (ürün P1):** **Onay kanıtı raporu.** Her kişi için onayın zamanı, kaynağı (form/checkout), aydınlatma metni sürümü ve ret geçmişi; denetimde dışa aktarılabilir. Hukuki uyum garantisi **değil**, kayıt aracıdır |
| 9 | Shopify yorumlarının güvenilirliği: 6 yorumun biri "8 minutes using the app" iken "%50 satış artışı" diyor (Rue Les Createurs UK; aynı marka Pushouse logo duvarında). Bir diğeri "21 days using the app" iken "uzun süredir kullanıyoruz" diyor | https://apps.shopify.com/pushouse/reviews | Doğrulandı (metin); yorumun niyeti **çıkarım** | Kısmen (Callypso sahte yorum yasağı var) | **YENİ (güven):** Yorum ve referans yalnızca **en az 60 gün kullanım ve 1 sonuç raporundan sonra** istenir; yorumun yanında kullanım süresi ve tarih gösterilir |
| 10 | Entegrasyon sayısı tutarsız: SSS 6 altyapı, kayıt ekranı 8, Hakkımızda "15+ küresel platform" diyor | Ana sayfa SSS · kayıt ekranı · Hakkımızda | Doğrulandı (çelişki) | Var: canlı/beta/planlanan tablosu ([04](04-guven-olusturma-stratejisi.md) A) | Değişiklik yok |
| 11 | Shopify'da USD faturalama; Türk müşteri için kur riski | https://apps.shopify.com/pushouse | Doğrulandı | Kısmen (TL fiyat var) | **YENİ (küçük):** TL fiyat **12 ay sabit**; artış en az 60 gün önce bildirilir |
| 12 | Email/SMS yok, holdout yok, gelir iddiası ile ölçüm metni çelişkili, kendi sitesinde kamuya açık fiyat yok | [01](01-pushouse-rekabet-analizi.md) | Doğrulandı | **Var** | Değişiklik yok |

## Plana eklenen değişikliklerin özeti

| Alan | Ekleme | Öncelik | Efor [Varsayım] | Zamanlama |
|---|---|---|---|---|
| Hukuk ve şirket | Türk tüzel kişiliği, Türk hukuku, İstanbul mahkemeleri, Türkçe tek esas metin, TL e-fatura | P0 (ilk ücretli müşteriden önce) | Avukat görüşüne dahil + şirket kurulumu (gerekiyorsa) | 5. hafta (mevcut "avukat görüşü" işine eklenir) |
| Ticari koşullar | İlk 30 gün koşulsuz iade, aylık iptal, yenileme hatırlatması, kredi devri (3 ay), TL fiyatın 12 ay sabitlenmesi | P0 (teklif metni) | 1–2 saat | 5. hafta (teklif ve DPA taslağıyla birlikte) |
| Ürün: dışa aktarma | Tam veri dışa aktarma + iptal sonrası 60 gün erişim | P1 | 6–10 saat | 10→25 müşteri aşaması; ilk 90 günde pilotlar için elle CSV dışa aktarma |
| Ürün: onay kanıtı raporu | Onay zamanı, kaynak, metin sürümü, ret geçmişi | P1 | 8–12 saat | 10→25 müşteri aşaması; şema (`consent_events`) hazır |
| Ürün: limit davranışı | %80/%100 uyarısı; işlemsel mesajlar durmaz | P2 | 3–5 saat | Kullanım bazlı faturalama başladığında |
| Güven: yorum politikası | 60 gün + sonuç raporu sonrası yorum; kullanım süresi gösterimi | P1 | 1 saat | 12. hafta (vaka çalışması işine eklenir) |

**Haftalık saat toplamı değişmedi (156 saat).** 5. ve 12. hafta eklemeleri mevcut işlerin içine alındı. Ürün eklemeleri 90 günden sonraki aşamaya yerleştirildi (bkz. [07](07-90-gunluk-buyume-plani.md)).

## Satış görüşmesinde kullanım (dürüst karşılaştırma)

Rakibi kötülemeden, müşterinin sorabileceği sorular üzerinden:

> "Hangi aracı seçerseniz seçin, sözleşmede şu dört maddeye bakmanızı öneririm: hangi ülkenin hukuku geçerli, kullanılmayan kredilere ne oluyor, iptal ederseniz verinizi nasıl alıyorsunuz, iade koşulu ne. Bizde cevapları şunlar: [Türk hukuku / 3 ay devir / tek tıkla dışa aktarma + 60 gün / ilk 30 gün iade]."

**Kural:** Rakip adı anılarak sözleşme maddesi alıntılanmaz. Müşteri kendisi karşılaştırır. Haksız rekabet ve karşılaştırmalı reklam kuralları için avukat görüşü alınmalı.

## Belirsizlikler

- Ticimax/ikas mağaza içi yorumlar ve TL paket koşulları, Shopify sözleşmesinden farklı olabilir. **Doğrulanamadı.**
- Pushouse'un Türkiye'de ayrı bir tüzel kişiliği olup olmadığı. Find.com.tr'de Ankara merkezli "Pushouse Yazılım ve Danışmanlık Ticaret Ltd. Şti." kaydı var (https://www.find.com.tr/Company/pushouseyazilimvedanismanlikticaretlimitedsirketi). SaaS sözleşmesinin tarafı ise Dubai şirketi. **İlişki doğrulanamadı.**
- Callypso için Türk şirket yapısı ve maliyeti kurucunun mevcut durumuna bağlı.

## Sonraki aksiyonlar

1. Avukat görüşü listesine 1. ve 3. maddeleri ekle (5. hafta).
2. Pilot teklifi ve abonelik koşullarına iade, iptal, kredi devri ve fiyat sabitleme maddelerini yaz.
3. Dışa aktarma ve onay kanıtı raporunu 10→25 aşamasının ürün listesine koy.
