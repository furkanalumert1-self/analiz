// Normalises the raw crawl files into data/pages.json and detects public martech
// signals from the raw HTML snapshots into data/technologies.json.
//
// Usage: node scripts/extract.mjs
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
const readJson = async (p) => JSON.parse(await readFile(path.join(DATA, p), 'utf8'));

const DOMAIN_ENTITY = {
  'dedagroup.com': 'deda-group', 'dedagida.com': 'deda-gida', 'dedapack.com': 'deda-pack',
  'dedamakina.com': 'deda-makina', 'dedaplast.com': 'deda-plast', 'adanakonteyner.com.tr': 'adana-konteyner',
};

const PAGE_TYPES = [
  [/wp-login\.php/, 'account'],
  [/iletisim|contact|kommunikation|comunica|communication|تواصل|اتصالات|коммуникация/i, 'contact'],
  [/kariyer|career|karriere|carre|insan-kaynaklari|حياة|карьера/i, 'careers'],
  [/kurumsal|corporate|institu|corporativ|المؤسسية|корпоратив/i, 'about'],
  [/politika|polic|politik|سياسات|политика|cevre/i, 'policy'],
  [/sertifika|certifi|zertifikat|شهادات|сертификат|album\/3|belgeler/i, 'certificates'],
  [/katalog|catalog|catálogo|الكتالوج|каталог/i, 'catalog'],
  [/uretim|production|produktion|produc|إنتاج|производство/i, 'production'],
  [/fuar/i, 'trade-fairs'],
  [/galeri|gallery|album/i, 'gallery'],
  [/site-haritasi|bilgi-toplumu/i, 'utility'],
  [/urunler|products|produkte|produtos|productos|des-produits|منتجات|продукты/i, 'product-listing'],
  [/urun\/|canta|bag|beutel|tute|saco|bolsa|sac-|أكياس|حقيبة|пакет|сумка|konteyner\/|-konteyner|evler|villalar/i, 'product-detail'],
];
const pageType = (url) => {
  const u = decodeURIComponent(url);
  const p = new URL(u).pathname;
  if (p === '/' || /\/(home|startseite|pagina-inicial|pagina-de-inicio|page-daccueil)\/?$/.test(p) || /الصفحة-الرئيسية|домашняя/.test(p)) return 'home';
  for (const [re, t] of PAGE_TYPES) if (re.test(u)) return t;
  return 'other';
};
const langOf = (url, code) => {
  const m = new URL(url).pathname.match(/^\/(en|de|ar|ru|pt|es|fr|tr)\//);
  return m ? m[1] : (code || 'tr').slice(0, 2);
};
const isBotCheck = (r) => /One moment, please/i.test(r.title || '') || /request is being verified/i.test(r.text || '');

const files = (await readdir(path.join(DATA, 'crawls'))).filter((f) => f.endsWith('.json'));
const seen = new Map();
for (const f of files) {
  const collector = f.includes('fallback') ? 'direct-http' : f.startsWith('retry-') ? 'apify/website-content-crawler (browser retry)' : 'apify/website-content-crawler';
  for (const r of await readJson(`crawls/${f}`)) {
    const url = r.loadedUrl || r.url;
    const domain = new URL(url).hostname.replace(/^www\./, '');
    const key = url.replace(/^http:/, 'https:').replace('://www.', '://').replace(/\/$/, '');
    if (seen.has(key) && seen.get(key).status === 'ok') continue;
    const status = r.httpStatusCode >= 400 ? 'http-error' : isBotCheck(r) ? 'bot-check' : 'ok';
    seen.set(key, {
      id: `pg-${seen.size + 1}`,
      entityId: DOMAIN_ENTITY[domain], domain, url,
      title: (r.title || '').split(/ – | — | \| /)[0].trim() || null,
      fullTitle: r.title, pageType: pageType(url), lang: langOf(url, r.languageCode),
      httpStatus: r.httpStatusCode, status, textLength: (r.text || '').length,
      excerpt: status === 'ok' ? (r.text || '').replace(/\s+/g, ' ').slice(0, 280) : null,
      collector, collectedAt: r.collectedAt,
    });
  }
}
const pages = [...seen.values()];
await writeFile(path.join(DATA, 'pages.json'), JSON.stringify(pages, null, 1));

// --- martech detection on raw HTML snapshots ---
const RULES = [
  ['Google Analytics 4', /gtag\/js\?id=(G-[A-Z0-9]+)/, 'analytics'],
  ['Google Tag Manager', /gtm\.js\?id=|googletagmanager\.com\/ns\.html\?id=(GTM-[A-Z0-9]+)/, 'tag-management'],
  ['Meta Pixel', /connect\.facebook\.net\/[^"']*fbevents|fbq\(/, 'advertising'],
  ['Meta SDK / Facebook script', /connect\.facebook\.net/, 'advertising'],
  ['Contact Form 7', /wp-content\/plugins\/contact-form-7/, 'forms'],
  ['Google reCAPTCHA', /g-recaptcha|recaptcha\/api\.js/, 'forms'],
  ['Click to Chat for WhatsApp', /plugins\/click-to-chat-for-whatsapp/, 'chat'],
  ['WhatsApp link', /api\.whatsapp\.com\/send|wa\.me\//, 'chat'],
  ['Call Now Button', /plugins\/call-now-button/, 'contact'],
  ['WordPress', /<meta name="generator" content="WordPress ([0-9.]+)/, 'cms'],
  ['Elementor', /<meta name="generator" content="Elementor ([0-9.]+)/, 'cms'],
  ['Elementor Pro', /plugins\/elementor-pro/, 'cms'],
  ['Slider Revolution', /Slider Revolution ([0-9.]+)/, 'cms'],
  ['Polylang (multilingual)', /connect-polylang-elementor|polylang/, 'cms'],
  ['WooCommerce-style account login (theme)', /security-login|Lost your password\?/, 'account'],
  ['jQuery (legacy 2.x)', /jquery-(2\.[0-9.]+)/, 'frontend'],
  ['Bootstrap', /bootstrap(\.min)?\.css/, 'frontend'],
  ['Cookie consent platform', /cookieyes|cookie-law-info|complianz|cookiebot|borlabs|cookie-notice|onetrust|cmplz/i, 'consent'],
  ['Hotjar / Clarity', /hotjar|clarity\.ms/, 'analytics'],
  ['Live chat widget', /tawk\.to|jivosite|tidio|livechatinc|zopim|crisp\.chat/, 'chat'],
];
const SNAP_ENTITY = (f) => Object.entries(DOMAIN_ENTITY).find(([d]) => f.includes(d))?.[1];
const snaps = (await readdir(path.join(DATA, 'raw-html'))).filter((f) => f.endsWith('.html'));
const tech = new Map();
const scanned = {};
for (const f of snaps) {
  const html = await readFile(path.join(DATA, 'raw-html', f), 'utf8');
  const entityId = SNAP_ENTITY(f);
  const url = 'https://' + f.replace(/\.html$/, '').replace(/_/g, '/').replace(/\/+$/, '/');
  (scanned[entityId] ||= []).push(url);
  for (const [name, re, category] of RULES) {
    const m = html.match(re);
    if (!m) continue;
    const key = `${entityId}|${name}`;
    if (!tech.has(key)) tech.set(key, { id: `tech-${tech.size + 1}`, entityId, technology: name, category, evidence: (m[1] ? `${m[0].slice(0, 60)}` : m[0].slice(0, 60)), detectedOn: [], detectionMethod: 'Pattern match in raw HTML snapshot', confidence: 'Verified' });
    tech.get(key).detectedOn.push(url);
  }
}
// Explicit "not observed" records so absence is shown honestly (never as "does not exist").
const notObserved = [];
for (const [entityId, urls] of Object.entries(scanned)) {
  for (const name of ['Google Analytics 4', 'Google Tag Manager', 'Meta Pixel', 'Cookie consent platform', 'Live chat widget']) {
    if (![...tech.values()].some((t) => t.entityId === entityId && t.technology === name)) {
      notObserved.push({ entityId, technology: name, scannedPages: urls, status: 'Not observed during public research' });
    }
  }
}
await writeFile(path.join(DATA, 'technologies.json'), JSON.stringify({ detected: [...tech.values()], notObserved }, null, 1));
console.log(`pages: ${pages.length} (ok ${pages.filter((p) => p.status === 'ok').length}), technologies: ${tech.size}, not-observed records: ${notObserved.length}`);
