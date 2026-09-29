# ScrapeGraphAI ile otomatik lead üretimi

ScrapeGraphAI v2 API'si ([dokümantasyon](https://docs.scrapegraphai.com/introduction)) üzerine kurulu, haftalık otomatik çalışan bir B2B lead hattı. Varsayılan ICP: **WhatsApp / conversational commerce otomasyonuna uygun Türk D2C e-ticaret markaları**. ICP, sorgular ve skor kuralları `config.json` üzerinden değiştirilir; kod değişikliği gerekmez.

Strateji ve gerekçeler için: [`../reports/scrapegraphai-lead-generation.html`](../reports/scrapegraphai-lead-generation.html)

## Akış

```
 ┌────────────┐   /search (+prompt+schema)    ┌──────────────┐  /scrape html+links+json  ┌───────────┐
 │ Sorgular + │ ─────────────────────────────▶ │ Aday şirket  │ ────────────────────────▶ │ Firma     │
 │ seed URL'ler│  /extract (dizin sayfaları)  │ (domain, ad) │  (+ /extract iletişim)    │ profili   │
 └────────────┘                                └──────────────┘                           └─────┬─────┘
        ▲                                        SQLite dedup                                    │ kurallar
        │ /monitor (haftalık, webhook)                                                           ▼
 ┌────────────┐                                ┌──────────────┐        webhook         ┌───────────┐
 │ Dizin/liste│                                │ CSV + CRM /  │ ◀───────────────────── │ ICP skoru │
 │ sayfaları  │                                │ n8n / Slack  │   (sıcak + ılık)       │ 0-100     │
 └────────────┘                                └──────────────┘                        └───────────┘
```

1. **discover** – Her sorgu için `POST /api/search` (`locationGeoCode: "tr"`, `prompt` + `schema`) ile arama sonuçlarındaki markalar ve resmi siteleri çıkarılır. Pazaryerleri, sosyal ağlar vb. `excluded_domains` ile elenir; alan adı bazında tekilleştirilir.
2. **enrich** – Her yeni aday için tek `POST /api/scrape` çağrısı: `html` (altyapı/chat/pixel parmak izi), `links` (iletişim sayfası bulma), `json` (LLM ile firma profili). E-posta/telefon bulunamazsa iletişim sayfasına `POST /api/extract` ile gidilir.
3. **score** – `config.json → scoring.rules` ile 0-100 skor; `sıcak` / `ılık` / `soğuk` etiketi ve skor gerekçeleri.
4. **export** – `data/leads.csv` (Excel uyumlu) + `LEADGEN_WEBHOOK_URL` tanımlıysa sıcak/ılık lead'ler tek tek POST edilir (her lead bir kez).
5. **monitors** – `monitors.urls` içindeki dizin/liste sayfaları için `POST /api/monitor` ile haftalık izleme; değişiklikte webhook tetiklenir → n8n'de `discover` yeniden çalıştırılabilir.

## Kurulum

```bash
cd lead-gen
cp config.example.json config.json      # ICP'ye göre düzenleyin
export SGAI_API_KEY=sgai-...            # https://scrapegraphai.com/dashboard
python3 leadgen.py credits --config config.json
python3 leadgen.py run --config config.json
```

Harici bağımlılık yoktur (yalnızca Python ≥ 3.10 standart kütüphanesi). API anahtarı olmadan uçtan uca denemek için:

```bash
python3 leadgen.py run --config config.example.json --mock
```

Komutlar tek tek de çalıştırılabilir: `discover`, `enrich`, `score`, `export`, `monitors`, `credits`.

## Zamanlama

`.github/workflows/lead-gen.yml` her pazartesi 09:00 (TR) çalışır. Gerekli repo secret'ları:

| Secret | Açıklama |
| - | - |
| `SGAI_API_KEY` | ScrapeGraphAI API anahtarı |
| `LEADGEN_WEBHOOK_URL` | (opsiyonel) n8n / Make / Zapier webhook'u |

CSV çıktı olarak (artifact) yüklenir; `leads.db` Actions önbelleğinde tutulur, repoya kişisel/iletişim verisi commit edilmez.

## n8n ile bağlama (önerilen)

`LEADGEN_WEBHOOK_URL` → **Webhook** node'u → **IF** (`tier == "sıcak"`) →
- **HubSpot / Pipedrive** “Create or update company” (alan adı ile eşleştir),
- **Slack** “#yeni-lead” bildirimi (`sales_hook` + `score_reasons`),
- **Google Sheets** append (ılık lead'ler için nurture listesi).

Kod yazmadan kurmak isterseniz aynı akış n8n'in resmi `n8n-nodes-scrapegraphai` community node'u ile de kurulabilir (yalnızca self-hosted n8n).

## Kredi tahmini

| Adım | Birim maliyet | Varsayılan config ile / hafta |
| - | - | - |
| Search (+prompt) | 5 kredi / sonuç | 11 sorgu × 10 sonuç ≈ 550 |
| Scrape (html + links + json) | ≈ 1 + 1 + 5 kredi (json formatının kesin maliyetini dashboard'da doğrulayın) | 40 şirket ≈ 280 |
| Extract (iletişim yedeği) | 5 kredi | ~%30 şirket ≈ 60 |
| **Toplam** | | **≈ 900 kredi / hafta ≈ 3.600 / ay** |

→ **Starter** planı (17 $/ay, 10.000 kredi) yeterli; ayda ~160 zenginleştirilmiş şirket. Free plan (500 kredi) ile denemek için `queries` sayısını 2'ye, `results_per_query`'yi 5'e, `max_companies_per_run`'ı 10'a düşürün.

## KVKK / ticari ileti notları

- Enrichment prompt'u ve `fingerprints.role_based_emails` yalnızca **rol tabanlı kurumsal adresleri** (info@, destek@, satis@ …) tutar; çalışanlara ait kişisel e-postalar elenir.
- LinkedIn gibi giriş gerektiren / kişisel profil barındıran kaynaklar hedeflenmez.
- 6563 sayılı Kanun ve Ticari İletiler Yönetmeliği esnaf/tacirlere belirli koşullarda önceden onaysız ticari ileti gönderimine izin verir ancak **ret (opt-out) hakkı** her iletide sunulmalıdır. Kampanya öncesi hukuki teyit alın.
- `robots.txt` ve sitelerin kullanım koşullarına uyun; talep eden firmaları `excluded_domains`'e ekleyin.
