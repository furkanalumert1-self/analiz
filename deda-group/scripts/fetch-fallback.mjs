// Fallback collector for a domain where the Apify crawl was stopped by the site's
// bot check. It reads URLs only from the site's public wp-sitemap.xml, honours
// robots.txt Disallow rules for "*", waits between requests and stops as soon as a
// bot-check page is served (it never tries to solve or evade it).
//
// Usage: node scripts/fetch-fallback.mjs dedamakina.com https://www.dedamakina.com
import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [domain, origin] = process.argv.slice(2);
if (!domain || !origin) { console.error('usage: fetch-fallback.mjs <domain> <origin>'); process.exit(1); }

const UA = 'DedaGrowthResearch/1.0 (public-page research; low rate)';
const get = async (u) => { const r = await fetch(u, { headers: { 'User-Agent': UA } }); return { status: r.status, body: await r.text() }; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const SKIP = /\/(elementor-hf|author|shopio-breadcrumb|wp-admin|wp-json|feed)\//;
const isChallenge = (html) => /imunify-bot-check|One moment, please|Please wait while your request is being verified/i.test(html);

const robots = (await get(`${origin}/robots.txt`)).body;
const disallow = [...robots.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
const allowed = (u) => !disallow.some((p) => new URL(u).pathname.startsWith(p));

const index = (await get(`${origin}/wp-sitemap.xml`)).body;
const subs = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let urls = [];
for (const s of subs) urls.push(...[...(await get(s)).body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
urls = [...new Set(urls)].filter((u) => !SKIP.test(u) && allowed(u));

const strip = (html) => html
  .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '–').replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ').trim();

const rows = [];
for (const url of urls) {
  const { status, body } = await get(url);
  if (isChallenge(body)) { console.log(`bot check served at ${url}; stopping`); break; }
  rows.push({
    url, loadedUrl: url, httpStatusCode: status, depth: null,
    title: (body.match(/<title>([^<]*)<\/title>/i) || [])[1]?.replace(/&#8211;/g, '–') ?? null,
    description: (body.match(/<meta name="description" content="([^"]*)"/i) || [])[1] ?? null,
    languageCode: (body.match(/<html[^>]*lang="([^"]+)"/i) || [])[1] ?? null,
    text: strip(body), markdown: '', html: body, collectedAt: new Date().toISOString(),
    collector: 'direct-http-fallback',
  });
  console.log(status, url);
  await sleep(1500);
}
await writeFile(path.join(ROOT, 'data', 'crawls', `${domain}.fallback.json`), JSON.stringify(rows, null, 1));

const statusFile = path.join(ROOT, 'data', 'crawl-status.json');
const all = JSON.parse(await readFile(statusFile, 'utf8'));
const rec = all.find((s) => s.domain === domain) || { domain };
rec.fallback = { collector: 'direct-http-fallback (sitemap URLs, robots.txt honoured, 1.5s delay)', itemCount: rows.length, finishedAt: new Date().toISOString() };
if (!all.includes(rec)) all.push(rec);
await writeFile(statusFile, JSON.stringify(all, null, 2));
