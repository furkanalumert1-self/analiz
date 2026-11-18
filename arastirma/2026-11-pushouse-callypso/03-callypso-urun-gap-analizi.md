# 03 — Callypso Engage Ürün ve Boşluk (Gap) Analizi

> Erişim tarihi: **18 Kasım 2026**

## İncelenen kaynaklar

| Kaynak | Ne görüldü | Sınır |
|---|---|---|
| Canlı uygulama: https://callypso-engage.vercel.app (`/`, `/login`, `/signup`, demo modunda `/dashboard`, `/campaigns`, `/email`, `/sms`, `/whatsapp`, `/audience`, `/automations`, `/forms`, `/templates`, `/analytics`, `/deliverability`, `/settings`) | Arayüz ve demo verisi | Giriş ekranı "Demo modu · Supabase bağlı değil" diyor; gerçek hesap akışı denenmedi |
| Kaynak kod (salt okunur): https://github.com/furkanalumert1-self/callypso_engage, son commit `9bccef1`, 9 Eylül 2026 | Next.js 16, React 19, Supabase istemcisi, 65 TS/TSX dosyası, `supabase/migrations/0001_init.sql` (436 satır), API rotaları: `auth/*`, `integrations/test` | Kodun varlığı canlıda çalıştığını kanıtlamaz. Canlı ortam değişkenleri görülemedi |
| Kurumsal alan adı: `callypsoengage.com` | Sayfa altında adı geçiyor | **Erişilemedi.** Proxy: `connect_unreachable` (DNS veya sunucu yok) |

## Kısa bulgular

1. **Callypso Engage bugün çalışan bir pazarlama otomasyonu değil, iyi tasarlanmış bir arayüz prototipi.** Kodda e-posta/SMS/WhatsApp gönderimi, mağaza senkronu, olay toplama ve gelir atfı **yok**. `integrations/test` rotası yalnız Resend ve Supabase'e erişimi sınıyor. Diğer entegrasyonlar için ortam değişkeninin varlığına bakıyor ve dürüstçe "unverifiable" döndürüyor (`app/api/integrations/test/route.ts`).
2. **Veri modeli sağlam bir başlangıç.** Şemada workspace, üyelik, liste, segment, abone, onay olayları (`consent_events`), kampanya, otomasyon adımları ve email/SMS/WhatsApp şablonları tabloları var. Hepsinde Row Level Security açık ve "üye yalnız kendi workspace'ini görür" politikaları tanımlı. Bu çok kiracılı (multi-tenant) ayrımın **tasarlandığını** gösteriyor; **test edildiği doğrulanamadı**.
3. **Kritik güven riski: açılış sayfasında kurgusal sosyal kanıt var.**
   - "BÜYÜYEN MARKALAR VE YARATICILAR TARAFINDAN KULLANILIYOR" başlığı altında Northwind, Parable, Formwork ve Cedarworks logoları.
   - Maria Gomez, Liam Chen, Nadia Park gibi isimlere dayalı yorumlar ("gelir +%30", "14x ROI").
   - "4.9/5 · 2.400+ marka" ifadesi.
   - Entegrasyon bölümünde "Shopify — Hazır" etiketi.
   Ürün demo modundayken bunlar gerçek değil. Türkiye'de yanıltıcı ticari uygulama riski taşıyor ve keşfedilirse güveni tamamen yok eder. **İlk gün kaldırılmalı** (bkz. [04](04-guven-olusturma-stratejisi.md)).
4. **Konumlandırma dağınık.** Açılış sayfası "E-ticaret markaları, içerik üreticileri, yerel işletmeler, ajanslar" diyor ve Mailchimp ile karşılaştırıyor. Uygulama içi metin ise "E-ticaret retention platformu, cold outreach değil" diyor. Fiyatlar USD ($0 / $49 / Custom), uygulama içindeki rakamlar TL. README'ye göre proje bir starter kit'ten ("GoatStarter kit") türetilmiş.

## Ekran bazında gözlemler

| Alan | Gözlem | Değerlendirme |
|---|---|---|
| Dashboard | KPI kartları (48.920 müşteri, %18,4 tekrar alım, ₺286 LTV, ₺38.140 otomasyon geliri) ve kampanya tablosu | İlk değer anını gösteriyor; ama tümü demo verisi |
| Segmentasyon | VIP (LTV en üst %5), Yüksek LTV (> $250), Terk edilmiş sepet, Churn riski (ortalama sipariş aralığının 2 katı), Pasif (180 gün), **Tekrar alım zamanı**, İlk kez alıcı | Segment tanımları stratejik olarak doğru. "LTV > $250" Türkiye için TL'ye çevrilmeli |
| Otomasyonlar | 6 akış: hoş geldin, terk edilen sepet, geri kazanım, ikinci satın alma, VIP, yeniden etkileşim. Akış adımları: tetikleyici → e-posta → bekle → SMS onayı kontrolü → SMS | Onay kontrolü adımı iyi bir tasarım; çalışan motoru yok |
| E-posta | 8 şablon, kampanya tablosu | Gönderim kodu yok |
| SMS | "İYS-hazır" onay kutusu; "Twilio, Netgsm… bağlanınca gerçek gönderim başlar" | Açıklama dürüst; entegrasyon yok |
| WhatsApp | Meta şablon listesi; "Onaylı (demo)" ve "Meta tarafından gerçekten onaylanmamıştır" uyarısı | Dürüst etiketleme iyi bir örnek |
| Formlar | Popup, gömülü ve açılış sayfası formları; görüntülenme ve dönüşüm istatistikleri | Embed kodu üretimi doğrulanamadı |
| Analitik | Kanal performansı, huni, ROAS, "Değerler demo veri katmanından… Gerçek analitik için sipariş/gelir verinizi bağlayın" notu | Atıf yöntemi tanımlı değil; holdout yok. Demo ortalama sipariş tutarı ₺96 Türkiye için gerçekçi değil |
| Teslim edilebilirlik | SPF/DKIM/DMARC durumları, sağlayıcı ve operatör tabloları | Gerçek DNS kontrolü yok (demo) |
| Ayarlar | Resend, SMS, WhatsApp, Supabase, E-commerce sync, İYS — hepsi "Demo modu". Açıklamalar İngilizce | Dil karışık; bunun dışında dürüst |

## Pushouse ile karşılaştırma

**Durum kodları:**
1. Mevcut ve doğrulandı
2. Kısmen mevcut
3. Planlanmış (açık kanıt var)
4. Eksik (yeterli incelemeyle doğrulandı)
5. Doğrulanamadı

**Geliştirme eforu**, kurucunun akşam saatleriyle kaba aralık olarak verilmiştir [Varsayım].

| Özellik | Pushouse | Callypso durumu | Kanıt | Müşteri değeri | Satış etkisi | Efor | Bağımlılık | Öncelik |
|---|---|---|---|---|---|---|---|---|
| Sipariş/müşteri verisini içe alma | Var (8 altyapı) | **4 Eksik.** "E-commerce sync" demo | `settings`, route kodu | Her şeyin temeli | Satışı engelliyor | CSV içe aktarma: 10–15 saat. Tek bir yerleşik API: 30–50 saat | Supabase | **P0** |
| E-posta gönderimi | Yok | **4 Eksik.** Yalnız Resend erişim testi | `integrations/test/route.ts` | Ana kanal | Satışı engelliyor | 10–20 saat (Resend + şablon + abonelikten çıkış linki) | Alan adı, SPF/DKIM | **P0** |
| Abonelikten çıkış ve onay kaydı | Var (şirket beyanı) | **2 Kısmen.** `consent_events` tablosu var, akış yok | Şema | Yasal zorunluluk | Satışı engelliyor | 6–10 saat | E-posta gönderimi | **P0** |
| Segment hesaplama (RFM, tekrar alım zamanı) | "AI segmentasyon" (şirket beyanı) | **2 Kısmen.** Tanımlar ve UI var, hesaplama motoru yok | Demo verisi | Farklılaşma çekirdeği | Yüksek | 15–25 saat (SQL/görünümler) | Veri içe alma | **P0** |
| Holdout (kontrol grubu) ile artımsal ölçüm | **Yok** (kendi yöntem sayfası) | **4 Eksik** | — | Güven ve farklılaşma | Yüksek | 10–15 saat (rastgele %10 ayır, 30 günlük karşılaştırma raporu) | Segment ve sipariş verisi | **P0** |
| Gelir atfı (son tıklama/kupon) | Var (şirket beyanı) | **4 Eksik.** Panel demo | `analytics` notu | Raporlama | Orta | 10 saat (UTM + kupon eşleme) | Sipariş verisi | P1 |
| Otomasyon motoru (zamanlanmış akış) | Var | **4 Eksik.** UI var, zamanlayıcı yok | Kod | Ürünün kalbi | Yüksek. İlk pilot elle/yarı otomatik yürütülebilir | 25–40 saat | Gönderim, segment | P1 |
| SMS gönderimi + İYS | Yok | **4 Eksik** | `settings` | Türkiye'de güçlü kanal | Orta | 15–25 saat (Netgsm API + İYS kontrolü) | İYS hesabı ve hukuki inceleme | P1 |
| WhatsApp gönderimi | Çekirdek ürün | **4 Eksik.** Şablonlar demo | `whatsapp` sayfası | Rekabetçi | Bu nişte düşük–orta | 30–60 saat + Meta onay süreci | BSP veya Meta Cloud API | P2 (rakibin alanı) |
| Site içi araçlar (çark, popup) | Güçlü | **2 Kısmen.** Formlar arayüzü var | `forms` | Abone toplama | Düşük | 15–25 saat | Script dağıtımı | P2 |
| Altyapı uygulama mağazası listesi (ikas/Ticimax) | Var | **4 Eksik** | — | Dağıtım | 25+ müşteriden sonra yüksek | 40–80 saat + onay süreci | Yerleşik API | P2 |
| Çok kiracılı ayrım (RLS) | Var (şirket beyanı) | **2 Kısmen.** Politikalar yazılmış, test kanıtı yok | `0001_init.sql` | Güvenlik | Güven itirazı | 6–10 saat test | Supabase projesi | **P0** (canlı veriden önce) |
| Kimlik doğrulama | Var | **2 Kısmen.** `lib/server/users.ts` içinde parola hash'i var. Demo modunda her e-posta kabul ediliyor | Kod, login ekranı | Temel | Orta | 4–8 saat (Supabase Auth'a bağlama) | Supabase | **P0** |
| Türkçe ve TL tutarlılığı | Var | **2 Kısmen.** Ayarlar İngilizce, landing'de USD | Ekranlar | Güven | Orta | 3–5 saat | — | **P0** |
| Yapay zekâ asistanı / arama | Var | **4 Eksik** | — | Düşük (bu niş için) | Düşük | — | — | Yapılmamalı (şimdilik) |

## Satışın önünü açan eksikler

Pilot için minimum ürün (yaklaşık 60–90 saat; tahmin):
1. Sahte sosyal kanıtın kaldırılması ve Türkçe/TL tutarlılığı.
2. CSV ile sipariş ve müşteri içe aktarma (tüm altyapılarda çalışır).
3. Segment hesaplama: tekrar alım zamanı, ikinci alım, pasif, VIP.
4. Resend ile e-posta gönderimi, abonelikten çıkış ve onay kaydı.
5. Holdout raporu: 30 günde gönderilen grup ile gönderilmeyen grubun sipariş oranı ve geliri.

**Bilinçli olarak sonraya bırakılabilecekler:** Tam otomatik akış motoru (ilk pilotta haftalık elle tetiklenebilir), SMS, WhatsApp, popup, yerleşik altyapı entegrasyonu, uygulama mağazası, yapay zekâ.

## Belirsizlikler

- Vercel ortam değişkenlerinde gerçek anahtar olup olmadığı. Canlı ekranlarda hepsi "Demo modu" görünüyor.
- Diğer CallypsoTech depolarında (ör. `callypso_inbox`, `CallypsoTech_CRM`) yeniden kullanılabilir gönderim veya entegrasyon kodu olup olmadığı. **İncelenmedi.**
- RLS politikalarının uçtan uca testi.

## Sonraki aksiyonlar

1. P0 listesini 4 haftalık bir sprint planına çevir (bkz. [07](07-90-gunluk-buyume-plani.md)).
2. `callypsoengage.com` alan adını yayına al veya sayfadan kaldır.
3. Pilot öncesi bir "veri akışı diyagramı" hazırla: CSV → Supabase → segment → Resend → holdout raporu (bkz. [04](04-guven-olusturma-stratejisi.md) E bölümü).
