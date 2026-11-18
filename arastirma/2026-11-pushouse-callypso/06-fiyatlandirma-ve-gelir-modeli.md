# 06 — Fiyatlandırma ve Gelir Modeli

> Erişim tarihi: **18 Kasım 2026**.
> **Kur:** 1 USD ≈ **50,26 TL**. Kaynak: TCMB gösterge kuru, 13 Kasım 2026 (ikincil haber): https://www.hisse.net/haber/doviz-kurlarinda-son-durum-13-kasim-guncel-fiyatlar-106876. Resmî değer TCMB'den teyit edilmeli.
> Tüm Callypso fiyatları **hipotezdir**.

## Kısa bulgular

- Pushouse'un doğrulanabilen tek güncel fiyatı Shopify listesinde: **$19 / $99 / $149 / $299 aylık**, USD, 14 gün deneme, mesajlar ön ödemeli kontörle ayrıca ödeniyor. Kendi sitesinde kamuya açık fiyat yok (bkz. [01](01-pushouse-rekabet-analizi.md)).
- Callypso için önerilen başlangıç: **ücretli/mahsuplu pilot → aylık TL abonelik (₺2.990 / ₺5.990 / ₺9.990+)**. Kurulum hizmeti ayrı ve tek seferlik; MRR'ye dahil edilmez.
- **10.000 USD MRR**, tek kurucunun akşam saatleriyle yaptığı cold outreach ile makul bir sürede ulaşılabilir görünmüyor. Baz senaryoda bile ayda 6 yeni müşteri için haftada yaklaşık 460 temas gerekiyor. Ulaşmak için partner/yönlendirme kanalı, daha yüksek dönüşüm veya tam zamanlı satış kapasitesi gerekir.

## 1. Pushouse fiyatları (doğrulanan)

| Plan | Aylık | Yıllık | İçerik | Kullanım / mesaj | Vergi |
|---|---|---|---|---|---|
| Growth | $19 | $180 | Sepet, stok, kargo, sipariş durumu, toplu mesaj, çark | Mesaj kontörü ayrı. "Usage limit up to $2,000 per 30 days, used only for optional automatic credit top-up" | Belirtilmemiş |
| Pro | $99 | $960 | + hoş geldin, ilk alışveriş | Limit $5.000 | — |
| Enterprise | $149 | $1.440 | + doğum günü, yeniden sipariş, Reels, Trendyol | Limit $10.000 | — |
| Enterprise Plus | $299 | $2.880 | + Flow, AI asistan, geri bildirim, öneriler, AI segmentasyon | Limit $10.000 | — |

Kaynak: https://apps.shopify.com/pushouse (18 Kasım 2026).
Ticimax/ikas/IdeaSoft mağazalarındaki TL fiyatlar **doğrulanamadı**. Bazı yerel Shopify listelerinde daha önce %1–4 satış komisyonu görülmüştü; güncel İngilizce sayfada yok. **Çelişkili.**

## 2. Maliyet kalemleri (aylık, aralık)

| Kalem | Varsayım | Kaynak / not |
|---|---|---|
| Altyapı (Supabase, Vercel, alan adı) | $25–70 sabit + müşteri başına $2–5 | Sağlayıcıların plan fiyatları kontrol edilmeli [Varsayım] |
| E-posta gönderimi (Resend vb.) | 10 bin müşterili marka, ayda yaklaşık 20 bin e-posta → müşteri başına $3–10 | Sağlayıcı fiyat sayfası teyit edilmeli [Varsayım] |
| SMS (Netgsm vb.) | Müşteriye **kullanım bazlı yansıtılır**; marj %10–20 | Fiyat teklifle doğrulanmalı [Varsayım] |
| WhatsApp (sonraki aşama) | TR pazarlama mesajı yaklaşık $0,011–0,013 + BSP ücreti; yansıtılır | https://chatalog.ai/en/pricing-whatsapp-conversation-fees/ (ikincil) |
| Destek | Müşteri başına ayda 1–2 saat (ilk 3 ay), sonra 0,5 saat | [Varsayım] |
| Onboarding | Müşteri başına 4–8 saat, tek seferlik | [Varsayım] |
| Partner komisyonu | Referral: ilk ay bedeli. Gelir paylaşımı: %20–30 | Pushouse "%30'a kadar" |
| Ödeme altyapısı | Tahsilatın %2–4'ü (iyzico/Stripe vb.) | [Varsayım] |

**Brüt marj hedefi:** Kurucu zamanı hariç %75–85. Mesaj maliyetleri yansıtıldığı sürece ulaşılabilir [Çıkarım].

## 3. Model karşılaştırması

| Model | Artı | Eksi | Öneri |
|---|---|---|---|
| Kurulum + abonelik | Erken nakit; onboarding emeği karşılanır | Küçük markada karar engeli | Kurulum hizmeti **isteğe bağlı** (₺5.000–10.000); pilot katılımcılarına dahil |
| Growth/Scale paketleri (müşteri sayısı bazlı) | Anlaşılır; Klaviyo benzeri alışkanlık | Kanal maliyeti değişken | **Ana model** |
| Kullanıma dayalı (gönderim başı) | Küçük markaya düşük giriş | Gelir dalgalı; tahmin zor | SMS/WhatsApp için ek olarak |
| Yıllık abonelik | Nakit akışı, düşük kayıp | Erken aşamada güven eksikliği | 6. aydan sonra "2 ay ücretsiz" |
| Ajans modeli | Çoklu müşteri | Destek yükü ve kanal çatışması | Referral ile başla |
| Pilot sonrası abonelik | Güven; ölçülmüş değer | Satış döngüsü uzar (45–60 gün) | **İlk 25 müşteri için ana yol** |
| Gelir komisyonu (Pushouse benzeri) | Değerle hizalı | Ölçüm tartışması; holdout dışında güvenilir değil | **Hayır.** "Satıştan komisyon yok" farklılaştırıcı olarak kullanılabilir |

## 4. Callypso fiyat hipotezleri

KDV hariç, TL. USD karşılıkları 50,26 kurla.

| Paket | Aylık | ≈ USD | Kapsam | Hedef |
|---|---|---|---|---|
| Pilot (ücretli) | ₺4.990 tek sefer (aboneliğe mahsup) | ≈ $99 | 30+14 gün, 2 akış, holdout raporu | 4. müşteriden itibaren |
| Tasarım ortağı | ₺0 | — | Pilotla aynı; izinli vaka çalışması karşılığında | İlk 3 müşteri |
| Growth | ₺2.990 | ≈ $59 | 10 bin müşteriye kadar, e-posta, 4 yaşam döngüsü akışı, aylık holdout raporu | Küçük markalar |
| Scale | ₺5.990 | ≈ $119 | 50 bin müşteriye kadar, tüm akışlar, SMS (kullanım ayrı), çeyreklik strateji görüşmesi | Ana hedef |
| Pro | ₺9.990+ | ≈ $199+ | Özel akışlar, birden fazla marka/mağaza, öncelikli destek | Büyüyen markalar |

**Ticari koşullar.** Pushouse sözleşmesindeki müşteri aleyhine maddelere karşı yazılmıştır; ayrıntı [09](09-pushouse-zayif-noktalar-ve-plan-eklemeleri.md).
- Aylık planda istediği an iptal ve yenilemeden 7 gün önce hatırlatma.
- İlk 30 gün koşulsuz iade.
- Kullanılmayan mesaj kredisi en az 3 ay devreder.
- TL fiyat 12 ay sabit; artış en az 60 gün önceden bildirilir.
- Sözleşme Türk hukukuna tabi, Türkçe ve TL e-faturalı.

**Maliyet notu:** İade ve kredi devri, erken aşamada küçük bir gelir riski taşır. Mesaj maliyeti müşteriye yansıtıldığı için kredi devrinin brüt marja etkisi sınırlı [Çıkarım].

**Doğrulama yöntemi:**
1. **Van Westendorp tarzı 4 soru** (çok ucuz / ucuz / pahalı / çok pahalı) 15 keşif görüşmesinde sorulur.
2. **Ücretli pilot kabul oranı** ölçülür: ₺4.990 teklifine ≥%30 kabul = fiyat makul.
3. Kapanışta paket seçimi dağılımı izlenir. Herkes Growth seçiyorsa Scale'in değer önerisi zayıf demektir.

## 5. 10.000 USD MRR senaryoları

**Formüller:**
- MRR = aktif ücretli müşteri × ARPA (aylık ortalama abonelik geliri). **Kurulum ve pilot gelirleri dahil değil.**
- Gerekli müşteri = ⌈10.000 / ARPA⌉
- Aktif müşteri (ay t+1) = aktif (t) × (1 − aylık churn) + yeni müşteri
- Durağan tavan = yeni müşteri / churn
- Temas/müşteri = 1 / (temastan ücretli müşteriye dönüşüm)
- Edinme maliyeti (CAC) = (kurucu saati × saat değeri + araç ve reklam) / yeni müşteri

| | Muhafazakâr | Baz | İyimser |
|---|---|---|---|
| ARPA | $60 (≈ ₺3.016) | $100 (≈ ₺5.026) | $160 (≈ ₺8.042) |
| Gerekli aktif müşteri | 167 | 100 | 63 |
| Aylık churn | %5 (≈ 8,3 müşteri/ay hedefte) | %4 (4,0) | %3 (1,9) |
| Temastan ücretliye dönüşüm | %0,2 (500 temas/müşteri) | %0,3 (333) | %0,6 (167) |
| Huni varsayımı | %3 olumlu yanıt × %40 görüşme × %35 pilot × %50 ücretli ≈ %0,21 | %4 × %45 × %35 × %50 ≈ %0,32 | %6 × %50 × %40 × %55 ≈ %0,66 |
| Brüt marj | %70 | %78 | %82 |
| CAC (kurucu saati 500 TL varsayımıyla) [Varsayım] | ≈ 60 saat → ₺30.000 | ≈ 40 saat → ₺20.000 | ≈ 20 saat → ₺10.000 |
| Ayda 4 yeni müşteriyle 10k MRR | Ulaşılamaz (tavan 80) | Ulaşılamaz (tavan 100'e asimptotik yaklaşır) | **21 ay** |
| Ayda 6 yeni müşteriyle | Ulaşılamaz (tavan 120 < 167) | **27 ay** | **13 ay** |
| Ayda 10 yeni müşteriyle | **36 ay** | **13 ay** | **7 ay** |
| Ayda 6 yeni müşteri için temas | 3.000/ay (≈ 693/hafta) | 2.000/ay (≈ 462/hafta) | 1.000/ay (≈ 231/hafta) |

Hesaplar `MRR` formülüyle aylık simülasyonla yapıldı (her ay: aktif × (1 − churn) + yeni).

**Kurucu kapasitesi tutarlılık kontrolü:**
- Haftada 12 saatin yaklaşık 5 saati satışa ayrılırsa, şirket başına 6–8 dakikayla haftada **35–40 kişiselleştirilmiş temas** yapılabilir.
- %0,3 dönüşümle bu ayda yaklaşık **0,5 yeni müşteri** demek. %1 dönüşümle (niş ve videolu temasta mümkün olabilir; doğrulanmalı) yaklaşık **1,5 müşteri/ay**.
- **Sonuç:** İlk 10 ücretli müşteri hedefi 3–6 ayda gerçekçi olabilir. 10k USD MRR ise ancak şu kaldıraçlarla gelir:
  - Referans ve ajans kanalı (tek bir temasta birden çok müşteri)
  - Altyapı uygulama mağazası (gelen talep)
  - Daha yüksek ARPA
  - Kurucunun tam zamana geçmesi veya bir satış/operasyon ortağı

Bu senaryolar tahmin veya garanti değildir.

## Belirsizlikler

- Türk D2C kozmetik markalarının ödeme isteği ve kanal maliyetlerinin gerçek fiyatları.
- Churn; pilotla gelen müşterilerde daha düşük olabilir, ölçülmeli.

## Sonraki aksiyonlar

1. 15 görüşmede fiyat sorularını sor (bkz. [07](07-90-gunluk-buyume-plani.md), 4–6. haftalar).
2. Sağlayıcı fiyatlarını (Supabase, Resend, Netgsm) teklifle teyit et ve marj tablosunu güncelle.
3. 10. müşteriden sonra ARPA ve churn'ü gerçek veriyle yeniden hesapla.
