# 07 — 90 Günlük (13 Haftalık) Büyüme Planı

> **Kapasite varsayımı:** Kurucu hafta içi 09:00–17:00 başka bir işte çalışıyor. **Haftada 12 saat** ayırabildiği varsayıldı: Pazartesi–Perşembe akşam 2,5 saat + Cuma 2 saat. Hafta sonu zorunlu değil.
> **Toplam:** 13 × 12 = **156 saat**. Daha düşük kapasite (6 saat/hafta) için sade alternatif en altta.

## Hedefler (90 gün sonunda, gerçekçi)

| Metrik | Hedef |
|---|---|
| Keşif görüşmesi | 15 |
| Başlayan pilot | 3–5 |
| Ücretli müşteri | 1–3 |
| İzinli vaka çalışması | 1–2 |

10 ücretli müşteri hedefi **90 günde garanti değil**; aşağıdaki aşama kapısına bakın.

## Haftalık plan

Saat sütunu: Ürün / Satış / Güven-hukuk / Pilot operasyonu.

| Hf | Hedef | İşler | Saat (Ü/S/G/P) | Çıktı | Başarı metriği | Bağımlılık | Karar noktası |
|---|---|---|---|---|---|---|---|
| 1 | Güven zemini | Kurgusal sosyal kanıtı kaldır; Türkçe/TL; niş başlık; şirket ve güven sayfası; 60 sn kurucu videosu; gönderim alan adı al ve ısınmayı başlat | 3/3/6/0 = **12** | Temiz landing, video, alan adı | Sayfada doğrulanamayan iddia = 0 | — | — |
| 2 | Veri girişi + liste | CSV sipariş içe aktarma; Supabase Auth; 60 şirketlik kozmetik listesi (Apollo + elle doğrulama) | 8/4/0/0 = **12** | İçe aktarma çalışıyor; liste | 60 doğrulanmış şirket | Supabase projesi | Liste kalitesi yetersizse (< 40) kaynak değiştir |
| 3 | Segment motoru + dalga 1 | İkinci alım, tükenme zamanı, pasif ve VIP SQL'leri; 20 kişiselleştirilmiş temas | 7/5/0/0 = **12** | Segment raporu (örnek CSV üzerinde) | 20 temas | Hf 2 | — |
| 4 | Gönderim + dalga 1 tamam | Resend ile gönderim, abonelikten çıkış, onay kaydı; 20 temas daha; takipler; ilk keşif görüşmeleri | 7/5/0/0 = **12** | Uçtan uca test gönderimi | 40 temas; ≥4 görüşme talebi | Alan adı DNS | **Karar 1:** <2 görüşme → mesaj/segment değişikliği (bkz. durdurma kriterleri) |
| 5 | Holdout + hukuk | Rastgele %10 kontrol grubu ve 30 günlük rapor şablonu; avukat görüşü (B2B e-posta/İYS, DPA, yurt dışı aktarım); görüşmeler | 6/4/2/0 = **12** | Holdout raporu; DPA taslağı | ≥4 görüşme tamamlandı | Avukat | — |
| 6 | Pilot 1 başlangıcı | RLS çapraz erişim testi; güvenlik notu; pilot 1 veri alımı ve kurulum | 5/4/0/3 = **12** | Pilot 1 canlı | ≥1 pilot başladı | Hf 5 | **Karar 2:** 0 pilot → teklifi değiştir (ücretsiz → süre/kapsam) |
| 7 | Dalga 2 | 40 temas (birincil + alt. 1); pilot 2 kurulumu; hata düzeltmeleri | 3/5/0/4 = **12** | 2 pilot canlı | Toplam 80 temas | — | — |
| 8 | Öğrenme | Pilot geri bildirimiyle ürün düzeltmeleri; görüşmeler; fiyat soruları | 4/5/0/3 = **12** | Değişiklik günlüğü | ≥10 görüşme (toplam) | — | — |
| 9 | Pilot 3 | Pilot 3 kurulumu; temaslar ve takipler | 4/5/0/3 = **12** | 3 pilot | ≥3 pilot | — | **Karar 3:** Birincil segment dönüşümü alt. 1'den düşükse odağı değiştir |
| 10 | Partner deneyi | 10 ajans/danışman teması; pilot ara raporları | 2/5/2/3 = **12** | Partner listesi | ≥2 partner görüşmesi | — | — |
| 11 | Sonuç raporları | Pilot 1 sonuç raporu (30+14 gün); partner görüşmeleri | 2/4/2/4 = **12** | İlk sonuç raporu | Rapor teslim | Pilot 1 süresi | — |
| 12 | Kapanış | Ücretli teklif; vaka çalışması taslağı (onay için); temaslar | 2/3/3/4 = **12** | Teklif + vaka taslağı | ≥1 ücretli müşteri | Hf 11 | **Karar 4:** 0 ücretli → değer önerisi ve fiyatı yeniden test et |
| 13 | Gözden geçirme | ICP puanlarını güncelle; fiyat ve ARPA gözden geçirme; sonraki 90 günün planı; vaka çalışması yayını (onaylıysa) | 3/4/2/3 = **12** | Güncellenmiş [02](02-musteri-ve-icp-analizi.md) ve [06](06-fiyatlandirma-ve-gelir-modeli.md) | Karar dokümanı | — | Devam / pivot |

**Saat toplamları:** Ürün 56 + Satış 56 + Güven/hukuk 17 + Pilot 27 = **156 saat** = 13 × 12 ✔

## İlk 30 günün ayrıntılı takvimi

| Gün | Pzt (2,5 s) | Sal (2,5 s) | Çar (2,5 s) | Per (2,5 s) | Cum (2 s) |
|---|---|---|---|---|---|
| **Hf 1** | Kurgusal logo/yorum/"2.400+" metinlerini kaldır; başlığı nişe çevir | Şirket ve güven sayfası: kurucu, iletişim, entegrasyon durum tablosu | Türkçe/TL düzeltmeleri (ayarlar, landing fiyatları, segment tanımları) | 60 sn kurucu videosu çek ve sayfaya koy; gönderim alan adını al, SPF/DKIM/DMARC | ICP filtrelerini Apollo'da kur; ilk 15 şirketi bul |
| **Hf 2** | CSV içe aktarma: şema eşleme (sipariş, müşteri, ürün) | CSV içe aktarma: doğrulama ve hata mesajları | Supabase Auth'a geçiş; demo ile gerçek hesap ayrımı | 25 şirket daha + karar verici doğrulama | 20 şirket daha; liste kalite kontrolü (60) |
| **Hf 3** | Segment: ikinci alım ve ürün bazlı tükenme süresi | Segment: pasif, VIP ve "tekrar alım zamanı" | 10 şirket için problem araştırması + ilk e-postalar | 10 şirket daha + ilk e-postalar | Segment raporunu örnek veride doğrula |
| **Hf 4** | Resend gönderim modülü | Abonelikten çıkış ve onay kaydı (`consent_events`) | 20 yeni temas | Hf 3 temaslarına takip; olumlu yanıtlara video | Keşif görüşmeleri (1–2) + Karar 1 |

## Aşamalar ve geçiş koşulları

| Aşama | Odak | Geçiş koşulu (bir sonrakine) | Tahmini zaman [Varsayım] |
|---|---|---|---|
| **0 → 10 müşteri** | Problem ve ödeme isteğini doğrulama; elle yürütülen pilotlar | ≥10 ücretli; ≥2 yayımlanmış vaka; 3 ay aylık churn ≤ %5; pilot→ücretli ≥ %40 | 4–8 ay |
| **10 → 25** | Tek yerleşik entegrasyon (en çok kullanılan altyapı); otomasyon motoru; SMS; referral programı | ≥25 ücretli; müşterilerin ≥%30'u referans/partnerden; CAC ≤ 3 × ARPA | +4–6 ay |
| **25 → 50** | Altyapı uygulama mağazası; yıllık plan; yarı zamanlı destek | ≥50; net gelir tutma ≥ %100; destek ≤ müşteri başına ayda 1 saat | +6 ay |
| **50 → 100** | Tam zamanlı kurucu veya satış işe alımı; ikinci niş veya Avrupa değerlendirmesi ([04](04-guven-olusturma-stratejisi.md) GDPR hazırlığı) | ≥100 ≈ 10k USD MRR (baz senaryo) | +6–12 ay |

## Deneyler için durdurma / değiştirme / sürdürme kriterleri

| Deney | Sürdür | Değiştir | Durdur |
|---|---|---|---|
| Cold e-posta (40 temaslık dalga) | ≥%5 olumlu yanıt | %2–5: konu satırı/gözlem/teklif değiştir | <%2 ve ikinci dalgada da <%2: segment değiştir |
| Kurucu videosu (A/B) | Görüşme kabulünde ≥1,5 kat fark | Fark yok: yalnız toplantı sonrası kullan | Hazırlık >15 dk ve etki yok: bırak |
| Ücretsiz tasarım ortağı | 3 pilot dolarsa | — | 3 dolduktan sonra ücretsiz pilot sunma |
| Ücretli pilot (₺4.990) | ≥%30 kabul | %10–30: fiyatı/kapsamı değiştir | <%10: mahsuplu indirimli pilot ya da ücretsiz + taahhütlü abonelik |
| Partner kanalı | ≥1 pilot | 0 pilot ama ilgi var: teklifi değiştir | 10 temasta 0 görüşme: 25. müşteriye kadar ertele |

## Düşük kapasite alternatifi (6 saat/hafta)

Aynı sıra, iki kat süre:
- **Hf 1–2:** Güven zemini.
- **Hf 3–6:** CSV, segment ve e-posta. Yerleşik bir e-posta aracı (ör. markanın kendi Shopify Email veya Mailchimp hesabı) ile **elle yürütülen pilot**: Callypso segment CSV'sini üretir, gönderimi markanın aracı yapar.
- **Hf 3–13 boyunca:** Haftada 15–20 temas.
- **Hedef:** 90 günde 8 görüşme, 1–2 pilot.
- **Atlanacaklar:** Holdout raporunun otomasyonu (elle hesaplanır), partner deneyi.

## Belirsizlikler

- Kurucunun gerçek haftalık kapasitesi.
- P0 ürün geliştirme eforu. Tahminler aralık; aşım olursa satış saatleri korunmalı, ürün kapsamı küçültülmeli.

## Sonraki aksiyon

1. haftanın Pazartesi işi: Kurgusal sosyal kanıtın kaldırılması.
