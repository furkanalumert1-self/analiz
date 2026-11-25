# OmniExport – Satın alma sinyaline göre lead listesi (25.11.2026)

Türkiye'deki üretici ve ihracatçı firmaların son 90 gündeki herkese açık **ihracat büyüme sinyalleri** tarandı. Sinyaller doğrulandı, firmalar araştırıldı, puanlandı ve her biri için kişiselleştirilmiş mesaj taslağı hazırlandı. Bu çalışma, OmniExport MVP akışının elle çalıştırılmış bir ilk sürümüdür. Tüm veriler **gerçektir**, demo verisi yoktur.

## Dosyalar
| Dosya | İçerik |
|---|---|
| `buying-signal-leads.xlsx` | Leadler (84 firma), Sinyaller (88 kayıt), Mesaj Taslakları, Puanlama, Suppression sayfaları |
| `leads.csv` / `signals.csv` | Aynı verilerin CSV hâli (UTF-8; Instantly ve Apollo'ya aktarıma uygun) |
| `scoring_config.json` | Puan ağırlıkları, güncellik ve kaynak güvenilirliği çarpanları. Değiştirilip yeniden hesaplanabilir |

## Yöntem
1. **Sinyal taraması.** Apify Google Search ile son 90 gün filtresinde 115 Türkçe/İngilizce sorgu çalıştırıldı (Google News dahil).
   - İş ilanları: kariyer.net, Indeed, LinkedIn Jobs, secretcv ve yenibiris'in Google'daki sonuçları.
   - Haber ve paylaşım sinyalleri: yeni pazar, distribütör arayışı, fuar, yeni fabrika/kapasite, ihracat hedefi, ticaret heyeti. 10 hedef sektörün hepsi kapsandı.
   - Yalnızca arama sonuçlarındaki başlık ve özetler kullanıldı. Giriş gerektiren sayfalara ve CAPTCHA'lı sayfalara girilmedi.
2. **Doğrulama.** 907 sonuç tek tek okundu. Elenenler: toplu ilan sayfaları, makro sektör haberleri, yabancı firmalar, aracılar, lojistik ve savunma firmaları. Firmaya özgü 88 sinyal kaydedildi. Her kayıtta kaynak URL, kaynaktaki kanıt metni, yayın tarihi, tespit tarihi ve güvenilirlik puanı var.
3. **Firma araştırması.** Telefon, web sitesi ve kurumsal e-posta Apify Google Maps ve firma web sitelerinden toplandı. LinkedIn şirket sayfası ve karar vericiler Google'da `site:linkedin.com` aramasıyla bulundu. Yanlış eşleşmeler elle temizlendi.
4. **Puanlama.** Puan = min(100, Σ her sinyal türü için en yüksek [ağırlık × güncellik × kaynak güvenilirliği] + ICP 5). Aynı kaynaktan çıkan ikinci sinyal %50 sayılır.
   - Ağırlıklar: işe alım 30, yeni pazar 25, distribütör 20, ihracat hedefi 15, fuar 10, kapasite 10.
   - Seviyeler: Sıcak ≥ 30, Ilık ≥ 18, altı Takip.

## Önemli uyarılar
- **Karar vericiler doğrulanmalı.** LinkedIn isim ve unvanları Google özetinden alındı. Kişiyle iletişime geçmeden önce güncel olduğunu kontrol edin.
- **Çalışan sayısı doğrulanmadı.** 11–250 kriteri yalnızca bilinen büyük ve çok uluslu firmaları eleyerek uygulandı. Bu firmalar "ICP dışı olabilir" diye işaretlendi.
- **Mesaj taslakları.** Taslaklar gerçek sinyale dayanır. Göndermeden önce gözden geçirin. LinkedIn DM'leri elle gönderilmelidir. Her e-postada listeden çıkma satırı var. "Çıkar" yanıtı gelen adresi Suppression sayfasına ekleyin.
- **Yasal kurallar.** KVKK ve İYS kurallarına uyun. Kişisel e-posta adresi toplanmadı; yalnızca kurumsal ve genel adresler listede.
