// Loads each homepage once in a 390px-wide mobile viewport and records simple, observable
// signals (viewport meta, horizontal overflow, load time, visible contact CTAs).
// Requires Playwright (globally installed in this environment, or `npm i -D playwright`).
//
// Usage: node scripts/mobile-check.mjs
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  ['deda-group', 'https://www.dedagroup.com/'],
  ['deda-pack', 'https://www.dedapack.com/'],
  ['deda-gida', 'https://dedagida.com/'],
  ['deda-makina', 'https://www.dedamakina.com/'],
  ['adana-konteyner', 'https://www.adanakonteyner.com.tr/'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const results = [];
for (const [entityId, url] of TARGETS) {
  const page = await ctx.newPage();
  const t0 = Date.now();
  let rec = { entityId, url, checkedAt: new Date().toISOString(), viewport: '390x844' };
  try {
    const resp = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    rec.httpStatus = resp?.status() ?? null;
    rec.loadMs = Date.now() - t0;
    Object.assign(rec, await page.evaluate(() => {
      const visible = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
      return {
        title: document.title,
        botCheck: /One moment, please/i.test(document.title),
        viewportMeta: document.querySelector('meta[name="viewport"]')?.content ?? null,
        scrollWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        telLinks: [...document.querySelectorAll('a[href^="tel:"]')].filter(visible).length,
        whatsappLinks: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"],[class*="ht-ctc"]')].filter(visible).length,
        forms: document.querySelectorAll('form').length,
      };
    }));
  } catch (e) {
    rec.error = String(e.message).split('\n')[0];
  }
  results.push(rec);
  console.log(entityId, JSON.stringify(rec));
  await page.close();
}
await browser.close();
await writeFile(path.join(ROOT, 'data', 'mobile-check.json'), JSON.stringify(results, null, 2));
