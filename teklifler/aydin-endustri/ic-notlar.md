# İç notlar: Aydın Endüstri teklifi (müşteriye gönderilmez)

## Rakamların kaynağı

| Rakam | Kaynak | Durum |
|---|---|---|
| 1.038 oturum, 746 ziyaretçi, 796 görüntüleme, 37 sepet, 2 satış | Toplantı notu (Homedius, dün) | Müşteri rakamı |
| Sleeptown "durum aynı" | Toplantı notu | **Rakam yok**, hesaba katılmadı |
| ~1.050 terk sepet / ay | 35 × 30 | Tek günden türetildi. 30 günlük veriyle teyit et |
| 7.499 TL | Mocca Tek Kişilik, homedius.com ana sayfa (7 Ekim 2026) | Katalog fiyatı. **Ortalama sepet tutarı değil**, müşteriden iste |
| Pop-up kapalı, 23 tükenmiş ürün, 0 yorum, ~19 Meta reklamı, CRM aracı yok | `claude/aydin-endustri-growth-analysis-m94prw` dalı, analiz 3 Ekim 2026 | Herkese açık sayfadan doğrulandı |

**Göndermeden önce müşteriye sorulacak (tek mesaj):**
"Teklifi sizin rakamlarınızla hazırlıyorum. İki rakam rica edeceğim: son 30 günde Homedius ve Sleeptown'un ortalama sepet tutarı, sepete ekleme ve sipariş sayısı (T-Soft panelinden)."
Rakam gelirse: Durum satırındaki 7.499 TL ve 1.050'yi güncelle, Sleeptown'u ekle.

## Maliyet (aylık, iki site, USD → TL ≈ 48 varsayımıyla)

| Kalem | Başlangıç | Büyüme | Tam |
|---|---|---|---|
| Sunucu (Vercel Pro, pay) | $20 | $20 | $20 |
| Veritabanı (Supabase Pro + compute) | $35 | $45 | $60 |
| E-posta gönderimi (Resend, dahil adet) | $20–35 (50k) | $90–110 (150k) | $160–200 (300k) |
| İzleme, log, alan adı | $15 | $15 | $20 |
| AI (mesaj metni / öneri üretimi) | $10 | $20 | $30 |
| **Toplam** | **~$100–115** | **~$190–210** | **~$290–330** |
| **TL karşılığı** | **~4.800–5.500** | **~9.100–10.100** | **~13.900–15.800** |
| Aylık ücret | 45.000 TL | 65.000 TL | 90.000 TL |
| **Kat** | **8,2–9,4×** | **6,4–7,1×** | **5,7–6,5×** |

- Fiyat kuralında [X] = **5** varsaydım. Her pakette aylık ücret maliyetin en az 5,7 katı.
- SMS ve WhatsApp ileti ücretleri maliyete dahil değil, çünkü teklifte kapsam dışında (müşteriye yansıyor). Aylık ücrete katılırsa hacim büyüdükçe marj erir.
- Callypso Engage'in açık fiyat sayfasında Growth planı $49/ay yazıyor. Müşteri bunu görürse: aylık ücret lisans değil. İçinde iki marka, İYS desteği (Scale planı), T-Soft bağlantısının bakımı, kampanya kurulumu ve raporlama var.

## Fiyat kontrolleri

Teklifte liste fiyatı (üstü çizili) ve "Size özel kurulum" gösteriliyor. İndirimin nedeni teklifte yazmıyor, müşteri sorarsa sözlü anlat.

| | Başlangıç | Büyüme | Tam |
|---|---|---|---|
| Liste kurulum | 180.000 TL | 300.000 TL | 440.000 TL |
| **Size özel kurulum** | **122.500 TL ($2.500)** | **157.000 TL (~$3.200)** | **220.500 TL ($4.500)** |
| İndirim | %32 | %48 | %50 |
| Aylık (değişmedi) | 45.000 TL | 65.000 TL | 90.000 TL |
| Kurulum / aylık (kural 3–5×) | 2,7× ✗ | 2,4× ✗ | 2,45× ✗ |
| Aylık > maliyet × 5 | ✓ | ✓ | ✓ |

- Kur: 1 $ ≈ 49 TL (1 Ekim 2026).
- Kurulum/aylık kuralı bilerek bozuldu: indirim tek seferlik ücrette, tekrarlayan aylık gelir korunuyor. Aylıkları düşürme.
- Büyüme kurulumu tek başına 5.000 $ altında (~$3.200). İlk yıl toplamı (kurulum + ~11 ay aylık) yaklaşık 872.000 TL, 5.000 $ çok üstünde.
- Büyüme: 157.000 TL ÷ 210–260 saat ≈ 600–750 TL/saat. Bir sonraki T-Soft müşterisinde liste fiyatına (300.000 TL) dön.
- Ödeme takvimi aşama oranıyla bölündü (Aşama 1 %60, Aşama 2 %40): 47.100 + 47.100 + 31.400 + 31.400 = 157.000 TL.
- Pazarlıkta "size özel" fiyattan daha fazla indirim verme. İndirim istenirse kapsamı ayarla.

## Projeksiyon varsayımları (teklif bölüm 4)

| Varsayım | Muhafazakâr | Baz | İyimser |
|---|---|---|---|
| Terk sepetten tanınan pay | %20 | %30 | %40 |
| Tanınan sepetten satın alan | %4 | %6 | %8 |
| Pop-up kayıt oranı (ziyaretçi) | %2 | %3 | %4 |
| Kayıttan 30 günde ilk sipariş | %1,5 | %2,5 | %3,5 |

- Yalnızca Homedius ve Aşama 1. Sleeptown ile Aşama 2-3 bilerek dışarıda bırakıldı, projeksiyonu muhafazakâr tutuyor.
- Sepet tutarı yine 7.499 TL referansı. Müşteri gerçek AOV'yi verince 4. bölümdeki ciro satırlarını güncelle.
- Oranlar sektör aralığı varsayımı, müşteri verisi değil. Teklifte de bu şekilde yazıyor.

## Takvim (teklifte tarih yok, sadece iş günü)

- Onaydan sonra: 3 iş günü analiz + 12 iş günü kurulum = Aşama 1, 15. iş gününde canlı. Aşama 2: +15 iş günü (onaydan 30 iş günü). Aşama 3: +20 iş günü (onaydan 50 iş günü).
- 11.11 için onay en geç 19 Ekim'de gelmeli (Aşama 1 ~10 Kasım). Black Friday (27 Kasım) için Aşama 2'ye yetişmek isteniyorsa onay en geç 14 Ekim. Bunu teklifte yazmıyoruz, takip mesajında sözlü aciliyet olarak kullan.
- 28 Ekim yarım gün, 29 Ekim resmi tatil, iş günü hesabına dikkat.
- WhatsApp Business doğrulaması ve şablon onayı Meta tarafında birkaç gün sürebilir. Analiz günlerinde başvur.
- Engage'de T-Soft için hazır bağlantı yok. Connector kurulumun içinde, biz geliştiriyoruz.
- Engage'de web push yok, teklifte kapsam dışı.
- "6 ay sözleşme" maddesi şablonda yoktu, ben ekledim. İstemezsen ödeme ve şartlar bölümünden çıkar.

## Takip

Teklif 5.000 $ üstü. Karar 1–2 hafta sürebilir (ortak, muhasebe, karar verici). Haftada bir takip et: 14 Ekim, 21 Ekim. Aşama 1'in 11.11'e yetişmesi için son onay tarihi 19 Ekim.
