# ChocChic — Growth & Automation Analysis Dashboard

Next.js 15 + React 19 + Tailwind + Recharts dashboard presenting the ChocChic
(https://www.chocchic.com) e-commerce analysis: Callypso Engage automation
opportunities (built on real ChocChic products), other AI / automation
opportunities, prioritisation, roadmap and meeting questions.

## Data

All data in `src/data/` was collected on 26 Sep 2026:

| File | Source |
| --- | --- |
| `products.json` | 256 product pages from the product sitemap (price, stock, categories, personalization fields, similar products) |
| `categories.json` | 39 category pages from the category sitemap |
| `meta-ads.json` | Meta Ad Library via Apify `facebook-ads-scraper` |
| `crawl-summary.json` | Apify `website-content-crawler` run (434 requests, 360 pages) |
| `findings.ts`, `opportunities.ts`, `strategy.ts` | Analysis — every item tagged `VERIFIED`, `INFERRED` or `REQUIRES DATA` |

No order, customer or analytics data was available, so no revenue figures or
rates are shown.

### Refreshing the crawl

```bash
cp .env.example .env          # add APIFY_API_KEY (server-side only, never NEXT_PUBLIC_)
set -a; . ./.env; set +a
npm run crawl                 # writes data/raw/*.json (git-ignored)
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## Deploying to Vercel

The app lives in the `chocchic-dashboard/` sub-directory of this repository.

- **Dashboard import:** New Project → import the repo → set **Root Directory** to
  `chocchic-dashboard` → Framework preset: Next.js → Deploy.
- **CLI:** `cd chocchic-dashboard && npx vercel --prod`

The dashboard itself does not need any environment variable. `APIFY_API_KEY`
is only used by `npm run crawl`; if you want it available in Vercel, add it as
a (non-public) environment variable.
