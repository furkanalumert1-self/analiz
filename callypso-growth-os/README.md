# Callypso Growth OS

Callypso için büyüme, güven ve satış takip paneli. Analiz verileri 20 Kasım 2026'da toplandı.

Bölümler: Yönetici Özeti · Site, SEO & GEO Denetimi · Engage Stratejisi · Export Agent Stratejisi · Rakip İstihbaratı · Güven & CRO Listesi · Satış Hunisi · Inbound Büyüme · 5 Günlük Plan · 30/60/90 Yol Haritası.

Özellikler: görev ve kontrol listesi işaretleme, görev notları, ürün filtresi, öncelik ve etki puanları, haftalık satış metrikleri, kaynak bağlantıları, doğrulama etiketleri (Doğrulandı / Çıkarım / Örnek). İlerleme tarayıcının LocalStorage'ında saklanır; sunucu veya veritabanı yoktur.

Uzun rapor: `../reports/callypso-growth-analizi.md`

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

## İçeriği güncelleme

Tüm içerik `lib/data.ts` dosyasında. Yeni bulgu, görev veya rakip eklemek için ilgili diziye bir satır ekleyin. `status` alanı bulgunun kanıt durumunu gösterir:

- `dogrulandi`: doğrudan gözlem
- `cikarim`: yorum, sahada doğrulanmalı
- `ornek`: öneri veya örnek metin

## Vercel'e yayınlama

1. Vercel → **Add New → Project** → bu repoyu seçin.
2. **Root Directory** olarak `callypso-growth-os` seçin. Framework otomatik olarak Next.js algılanır.
3. **Deploy**'a basın. Ortam değişkeni gerekmez.

CLI ile:

```bash
npx vercel --cwd callypso-growth-os --prod
```

Panel arama motorlarına kapalıdır (`noindex` ve `robots.txt`). Ancak bağlantıyı bilen herkes açabilir. İç strateji içerdiği için gerekirse Vercel → Settings → Deployment Protection ile parola koruması açın.
