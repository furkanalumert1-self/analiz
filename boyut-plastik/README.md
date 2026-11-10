# Boyut Plastik — B2B süreç otomasyonu görüşmesi

Bağlam: Sajmir Bey'e gönderilen e-posta. Konu: B2B müşteri araştırması, ilk temas, teklif hazırlama, müşteri takibi ve raporlamayı mevcut sistemleri değiştirmeden otomatikleştirmek.

| Dosya | İçerik | Paylaşım |
|---|---|---|
| `sunum/index.html` | Müşteriye gösterilecek tek sayfalık sunum (Vercel'e bu klasör yüklenir) | Müşteriye açık |
| `sunum/govde.html` | Aynı sunumun claude.ai Artifact sürümü | Müşteriye açık |
| `arastirma/rapor.md` | Kaynaklı bulgular, iş modeli, satış akışı, 5 fırsat, pilot ve eksikler | İç |
| `arastirma/tarama-kayitlari.json` | Apify tarama kayıtları (50 sayfa) | İç |
| `toplanti-hazirligi.md` | Açılış, akış, sorular, itiraz cevapları, kapanış | **Özel — sunuma konmaz** |

## Vercel'e yayın

```bash
cd boyut-plastik/sunum
npx vercel deploy --yes
```

Yalnızca `sunum/` klasörü yüklenir.
