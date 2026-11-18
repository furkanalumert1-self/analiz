# Sinateks × Callypso Export Agent

CallypsoTech'in Sinateks görüşmesi için hazırladığı çalışma.

| Dosya | İçerik | Public |
|---|---|---|
| `index.html` + `img/` | Müşteriye özel web sunumu (mobil uyumlu, tek sayfa) | Evet |
| `analiz-raporu.md` | Tam analiz: şirket, pazar, Callypso özellik değerlendirmesi, senaryolar, rakipler, Loom metni, pilot, ROI, açık konular | Hayır |
| `toplanti-hazirligi.md` | Açılış, 20 dk akış, 8 soru, itiraz cevapları | Hayır |

`.vercelignore` tüm `.md` dosyalarını yayından hariç tutar.

## Yayın

- Geçici paylaşım (private, claude.ai): https://claude.ai/artifact/B1wWWHYc3J1R7d8GhVNCoc
- Vercel: henüz yayınlanmadı — oturumdaki Vercel token proxy tarafından iletilmedi (`missingToken`). Token düzeltilince:

```bash
cd sinateks-callypso && npx vercel deploy --prod
```

Mevcut Callypso Export Agent uygulamasına dokunulmamıştır.
