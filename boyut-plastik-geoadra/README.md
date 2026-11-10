# Boyut Plastik — GeoAdra müşteri analizi

Mevcut GeoAdra uygulamasından bağımsız, ayrı bir projedir.

| Dosya | İçerik | Paylaşım |
|---|---|---|
| `sunum/index.html` | Müşteriye gösterilecek tek sayfalık sunum (Vercel'e bu klasör yüklenir) | Public |
| `sunum/govde.html` | Aynı sunumun claude.ai Artifact sürümü (doctype'sız gövde) | Public |
| `arastirma/rapor.md` | Kaynaklı bulgular, iş modeli, sorular, ölçüm planı, rakipler, aksiyonlar, pilot, eksikler | İç |
| `arastirma/tarama-kayitlari.json` | Apify tarama kayıtları (50 sayfa: URL, tarih, durum, özet) | İç |
| `toplanti-hazirligi.md` | Açılış, akış, sorular, itiraz cevapları, kapanış | **Özel — sunuma konmaz** |

## Vercel'e yayın

`sunum/` klasörü statik bir sitedir; derleme gerekmez.

```bash
cd boyut-plastik-geoadra/sunum
npx vercel deploy --yes          # preview
```

Yalnızca `sunum/` klasörü yüklenir; `toplanti-hazirligi.md` ve `arastirma/` yayına gitmez.
