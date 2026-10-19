// Runs apify/website-content-crawler for each verified Deda Group domain and stores
// the raw dataset items under data/crawls/<domain>.json plus a status record in
// data/crawl-status.json. The token is read from APIFY_API_KEY (server-side only).
//
// Usage: APIFY_API_KEY=... node scripts/crawl.mjs [domain ...]
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
const TOKEN = process.env.APIFY_API_KEY;
if (!TOKEN) {
  console.error('APIFY_API_KEY is not set. Copy .env.example to .env and export it.');
  process.exit(1);
}

// Only domains linked from the official www.dedagroup.com header/footer.
const TARGETS = {
  'dedagroup.com': 'https://www.dedagroup.com/',
  'dedagida.com': 'https://dedagida.com/',
  'dedaplast.com': 'http://dedaplast.com/',
  'dedapack.com': 'https://www.dedapack.com/',
  'dedamakina.com': 'https://www.dedamakina.com/',
  // Listed as the group's 'Konteyner Fabrika' on dedagida.com/tr/iletisim.
  'adanakonteyner.com.tr': 'https://www.adanakonteyner.com.tr/',
};

// 'retry-blocked' re-fetches, with a real browser, only the pages that returned the
// site's JavaScript check page or nothing in earlier runs (listed in data/pages.json).
const RETRY = 'retry-blocked';
const retryUrls = async () => JSON.parse(await readFile(path.join(DATA, 'pages.json'), 'utf8'))
  .filter((p) => p.status === 'bot-check').map((p) => p.url);

const ACTOR = 'apify~website-content-crawler';
const api = (p) => `https://api.apify.com/v2${p}`;
const auth = { Authorization: `Bearer ${TOKEN}` };

// CRAWLER_TYPE=playwright:firefox (or playwright:chrome) renders pages in a real browser,
// for sites that serve a JavaScript check page to plain HTTP clients.
async function runCrawl(domain, startUrl) {
  const startUrls = domain === RETRY ? await retryUrls() : [startUrl];
  const input = {
    startUrls: startUrls.map((url) => ({ url })),
    crawlerType: process.env.CRAWLER_TYPE || 'cheerio',
    maxCrawlPages: domain === RETRY ? startUrls.length : Number(process.env.MAX_PAGES || 80),
    maxCrawlDepth: domain === RETRY ? 0 : 4,
    respectRobotsTxtFile: true,
    excludeUrlGlobs: [
      { glob: '**/wp-admin/**' }, { glob: '**/wp-json/**' }, { glob: '**/feed/**' },
      { glob: '**/imunify-bot-check**' }, { glob: '**/*.pdf' }, { glob: '**/xmlrpc.php**' },
      { glob: '**/elementor-hf/**' }, { glob: '**/author/**' }, { glob: '**/shopio-breadcrumb/**' }, { glob: '**/mail-sablonu/**' },
    ],
    saveHtml: true,
    saveMarkdown: true,
    removeCookieWarnings: true,
    proxyConfiguration: { useApifyProxy: true },
  };
  const started = new Date().toISOString();
  const res = await fetch(api(`/acts/${ACTOR}/runs?waitForFinish=60&memory=${process.env.CRAWLER_TYPE?.startsWith('playwright') ? 4096 : 1024}`), {
    method: 'POST', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`start failed: HTTP ${res.status}`);
  let run = (await res.json()).data;
  while (['READY', 'RUNNING'].includes(run.status)) {
    const r = await fetch(api(`/actor-runs/${run.id}?waitForFinish=60`), { headers: auth });
    run = (await r.json()).data;
    console.log(`[${domain}] ${run.status} pages=${run.stats?.requestsFinished ?? '?'}`);
  }
  const items = await (await fetch(api(`/datasets/${run.defaultDatasetId}/items?clean=true&format=json`), { headers: auth })).json();
  const collectedAt = new Date().toISOString();
  const rows = items.map((it) => ({
    url: it.url,
    loadedUrl: it.crawl?.loadedUrl ?? it.url,
    httpStatusCode: it.crawl?.httpStatusCode ?? null,
    depth: it.crawl?.depth ?? null,
    title: it.metadata?.title ?? null,
    description: it.metadata?.description ?? null,
    languageCode: it.metadata?.languageCode ?? null,
    text: it.text ?? '',
    markdown: it.markdown ?? '',
    html: it.html ?? '',
    collectedAt,
  }));
  await writeFile(path.join(DATA, 'crawls', `${domain}.json`), JSON.stringify(rows, null, 1));
  return { domain, startUrl: domain === RETRY ? `${startUrls.length} blocked URLs` : startUrl, crawlerType: input.crawlerType, actor: 'apify/website-content-crawler', runId: run.id, status: run.status,
    startedAt: started, finishedAt: collectedAt, itemCount: rows.length };
}

await mkdir(path.join(DATA, 'crawls'), { recursive: true });
const statusFile = path.join(DATA, 'crawl-status.json');
let status = [];
try { status = JSON.parse(await readFile(statusFile, 'utf8')); } catch {}

const wanted = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(TARGETS);
// Sequential on purpose: keeps Apify memory/concurrency and spend low.
for (const domain of wanted) {
  let rec;
  try {
    rec = await runCrawl(domain, TARGETS[domain]);
  } catch (e) {
    rec = { domain, startUrl: TARGETS[domain], actor: 'apify/website-content-crawler', status: 'ERROR',
      error: String(e.message).slice(0, 300), finishedAt: new Date().toISOString(), itemCount: 0 };
  }
  console.log(`[${domain}] done: ${rec.status} items=${rec.itemCount}`);
  status = status.filter((s) => s.domain !== domain).concat(rec);
}
status.sort((a, b) => a.domain.localeCompare(b.domain));
await writeFile(statusFile, JSON.stringify(status, null, 2));
