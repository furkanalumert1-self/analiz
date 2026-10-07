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

| Kural | Başlangıç | Büyüme | Tam |
|---|---|---|---|
| Kurulum aylığın 3–5 katı | 180k / 45k = 4,0× | 300k / 65k = 4,6× | 440k / 90k = 4,9× |
| Aylık < aylık kayıp (~7,9 M TL terk sepet) | ✓ | ✓ | ✓ |
| Aylığı karşılayan sepet (÷ 7.499) | 6 | 9 | 12 |
| Toplam > 5.000 $ (kurulum, 48 TL/$) | ~$3.750 | **~$6.250** | ~$9.170 |

Başlangıç paketi tek başına 5.000 $ altında. O paket çapa (az hali), satılması beklenen Büyüme.

## Takvim riskleri

- 28 Ekim yarım gün, 29 Ekim resmi tatil. Aşama 1'de 13,5 iş günü var.
- WhatsApp Business doğrulaması ve şablon onayı Meta tarafında birkaç gün sürebilir. Aşama 1'in ilk günü başvur.
- Engage'de T-Soft için hazır bağlantı yok. Connector kurulumun içinde, biz geliştiriyoruz (toplantı hazırlığındaki özellik kontrolü, 4 Ekim 2026).
- Engage'de web push yok, teklifte kapsam dışı olarak yazıldı.
- "6 ay sözleşme" maddesi şablonda yoktu, ben ekledim. İstemezsen 8. bölümden çıkar.

## Takip

Teklif 5.000 $ üstü. Karar 1–2 hafta sürebilir (ortak, muhasebe, karar verici). Haftada bir takip et: 14 Ekim, 21 Ekim. Aşama 1'in 11.11'e yetişmesi için son başlangıç tarihi 19 Ekim.
