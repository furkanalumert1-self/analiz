// Checks the public Meta Ad Library for each verified brand via apify/facebook-ads-scraper.
// Only public ad-library data is stored; no spend, reach or performance data exists there.
//
// Usage: APIFY_API_KEY=... node scripts/ads.mjs
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TOKEN = process.env.APIFY_API_KEY;
if (!TOKEN) { console.error('APIFY_API_KEY is not set.'); process.exit(1); }

const QUERIES = [
  { brand: 'deda-pack', q: 'Deda Pack' },
  { brand: 'deda-gida', q: 'Deda Gıda' },
  { brand: 'deda-makina', q: 'Deda Makina' },
  { brand: 'adana-konteyner', q: 'Adana Konteyner' },
];
const libUrl = (q) => `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${encodeURIComponent(q)}&search_type=keyword_exact_phrase&media_type=all`;

const input = { startUrls: QUERIES.map(({ q }) => ({ url: libUrl(q) })), resultsLimit: 10, isDetailsPerAd: false };
const res = await fetch(`https://api.apify.com/v2/acts/apify~facebook-ads-scraper/run-sync-get-dataset-items?maxTotalChargeUsd=0.3&timeout=280`, {
  method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(input),
});
const items = res.ok ? await res.json() : [];
const observedAt = new Date().toISOString();
const out = QUERIES.map(({ brand, q }) => {
  // One dataset item per library URL; its `results` array holds the ads (empty when none).
  const item = items.find((it) => (it.inputUrl || '').includes(encodeURIComponent(q)));
  const ads = item?.results ?? [];
  return {
    brand, query: q, source: 'Meta Ad Library (apify/facebook-ads-scraper)', libraryUrl: libUrl(q), observedAt,
    httpStatus: res.status, totalCount: item?.totalCount ?? null, isResultComplete: item?.isResultComplete ?? null, adsFound: ads.length,
    ads: ads.map((a) => ({
      pageName: a.pageName ?? a.snapshot?.page_name ?? null,
      adArchiveId: a.adArchiveID ?? a.adArchiveId ?? null,
      startDate: a.startDateFormatted ?? a.startDate ?? null,
      isActive: a.isActive ?? null,
      body: a.snapshot?.body?.text ?? null,
      cta: a.snapshot?.cta_text ?? null,
      linkUrl: a.snapshot?.link_url ?? null,
      platforms: a.publisherPlatform ?? null,
    })),
  };
});
await writeFile(path.join(ROOT, 'data', 'ads-raw.json'), JSON.stringify({ observedAt, rawItemCount: items.length, results: out }, null, 2));
console.log(out.map((o) => `${o.brand}: ${o.adsFound}`).join('\n'), `\nraw items: ${items.length}, http ${res.status}`);
