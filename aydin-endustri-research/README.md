# Aydın Endüstri – Growth Analysis research data

Data behind the dashboard at `reports/aydin-endustri/` (served at the Vercel project root).

| Path | What |
|---|---|
| `data/apify_attempt.json` | Apify `website-content-crawler` attempt. The account hit its monthly hard limit, so the fallback crawler was used. |
| `data/homedius.json`, `data/sleeptown.json` | Crawl output (sitemap-driven, 333 + 239 URLs): title, meta, headings, cleaned text, JSON-LD product, tracking signals |
| `data/products.json` | Product detail enrichment: T-Soft product JSON, size variants with price / list price / stock, rating, sections |
| `data/catalog.json` | Clean, deduplicated catalog (231 products) used by the dashboard |
| `data/group_entities.json` | Group / brand relationships with sources |
| `data/ads/*.txt, *.png` | Meta Ad Library captures (TR, active ads, 2026-10-03) and mobile screenshots |
| `data/mobile_probe.json` | Mobile probe: third-party hosts requested, sticky elements, page titles |
| `data/raw/` | Sitemaps |
| `scripts/` | `crawl.py`, `enrich_products.py`, `build_catalog.py`, `export_dashboard_data.py`, `ads.mjs`, `mobile_probe.mjs`, `shot.mjs` |

Rebuild: `python3 scripts/crawl.py homedius.com data/homedius.json` (same for sleeptown.com.tr) → `python3 scripts/enrich_products.py` → `python3 scripts/build_catalog.py` → `python3 scripts/export_dashboard_data.py`.

No API keys are stored in this repository. `APIFY_API_KEY` is read from the environment only.
