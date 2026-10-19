// Public presence checks via Apify:
//  - apify/google-search-scraper: what a buyer sees when searching the brands (organic + paid)
//  - apify/instagram-profile-scraper: public Instagram profile stats for linked brand accounts
// Writes data/search-presence.json and data/social-profiles.json.
//
// Usage: APIFY_API_KEY=... node scripts/presence.mjs
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TOKEN = process.env.APIFY_API_KEY;
if (!TOKEN) { console.error('APIFY_API_KEY is not set.'); process.exit(1); }

const run = async (actor, input, cap) => {
  const res = await fetch(`https://api.apify.com/v2/acts/${actor}/run-sync-get-dataset-items?maxTotalChargeUsd=${cap}&timeout=280`, {
    method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
  return { status: res.status, items: res.ok ? await res.json() : [] };
};

const QUERIES = [
  { entityId: 'deda-pack', q: 'kraft çanta üreticisi Adana' },
  { entityId: 'deda-pack', q: 'baskılı kağıt çanta üretimi' },
  { entityId: 'deda-pack', q: 'Deda Pack' },
  { entityId: 'deda-makina', q: 'plastik geri dönüşüm makinesi üreticisi' },
  { entityId: 'deda-makina', q: 'Deda Makina' },
  { entityId: 'deda-gida', q: 'Deda Gıda' },
  { entityId: 'deda-group', q: 'Dedagroup Adana' },
];
const OWN = /dedagroup\.com|dedapack\.com|dedagida\.com|dedamakina\.com|dedaplast\.com|adanakonteyner\.com\.tr/;
const ENTITY_DOMAIN = { 'deda-pack': 'dedapack.com', 'deda-makina': 'dedamakina.com', 'deda-gida': 'dedagida.com', 'deda-group': 'dedagroup.com' };

const observedAt = new Date().toISOString();
const search = await run('apify~google-search-scraper', {
  queries: QUERIES.map((x) => x.q).join('\n'), countryCode: 'tr', languageCode: 'tr', maxPagesPerQuery: 1, resultsPerPage: 10, mobileResults: false,
}, 0.5); // the actor refuses caps below $0.50; actual charge is per results page
const searchOut = QUERIES.map(({ entityId, q }) => {
  const page = search.items.find((it) => it.searchQuery?.term === q);
  const organic = (page?.organicResults ?? []).map((r) => ({ position: r.position, title: r.title, url: r.url, own: OWN.test(r.url) }));
  return {
    entityId, query: q, observedAt, source: 'Google (apify/google-search-scraper, TR, desktop, page 1)',
    collected: Boolean(page), paidResults: (page?.paidResults ?? []).map((r) => ({ title: r.title, url: r.url, displayedUrl: r.displayedUrl })),
    ownPosition: organic.find((r) => r.url.includes(ENTITY_DOMAIN[entityId]))?.position ?? null,
    groupPosition: organic.find((r) => r.own)?.position ?? null, organic,
  };
});
await writeFile(path.join(ROOT, 'data', 'search-presence.json'), JSON.stringify({ observedAt, httpStatus: search.status, results: searchOut }, null, 2));
console.log(searchOut.map((s) => `${s.query}: own=${s.ownPosition} paid=${s.paidResults.length} collected=${s.collected}`).join('\n'));

const insta = await run('apify~instagram-profile-scraper', { usernames: ['dedapack'] }, 0.05);
const social = insta.items.map((p) => ({
  entityId: 'deda-pack', platform: 'Instagram', username: p.username, url: p.url ?? `https://www.instagram.com/${p.username}/`,
  followers: p.followersCount ?? null, following: p.followsCount ?? null, posts: p.postsCount ?? null,
  isBusiness: p.isBusinessAccount ?? null, category: p.businessCategoryName ?? null, biography: p.biography ?? null, externalUrl: p.externalUrl ?? null,
  latestPosts: (p.latestPosts ?? []).slice(0, 12).map((x) => ({ date: x.timestamp, type: x.type, likes: x.likesCount, comments: x.commentsCount, caption: (x.caption || '').slice(0, 160) })),
  observedAt, source: 'apify/instagram-profile-scraper',
  error: p.requestErrorMessages ? String(p.requestErrorMessages[0]).split('\n')[0] : null,
}));
await writeFile(path.join(ROOT, 'data', 'social-profiles.json'), JSON.stringify({ observedAt, httpStatus: insta.status, profiles: social }, null, 2));
console.log(social.map((s) => `${s.username}: followers=${s.followers} posts=${s.posts} last=${s.latestPosts[0]?.date}`).join('\n') || `instagram: no data (http ${insta.status})`);
