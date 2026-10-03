// Captures public ad-library signals (Meta Ad Library, Google Ads Transparency) via headless Chromium.
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const targets = [
  ['meta_homedius', 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=TR&q=homedius&search_type=keyword_unordered'],
  ['meta_sleeptown', 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=TR&q=sleeptown&search_type=keyword_unordered'],
  ['google_homedius', 'https://adstransparency.google.com/?region=TR&domain=homedius.com'],
  ['google_sleeptown', 'https://adstransparency.google.com/?region=TR&domain=sleeptown.com.tr'],
];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(async () => chromium.launch());
const ctx = await b.newContext({ locale: 'tr-TR', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', viewport: { width: 1366, height: 2000 } });
const fs = await import('fs');
for (const [name, url] of targets) {
  const p = await ctx.newPage();
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await p.waitForTimeout(12000);
    for (let i = 0; i < 4; i++) { await p.mouse.wheel(0, 2500); await p.waitForTimeout(2000); }
    const text = await p.evaluate(() => document.body.innerText);
    fs.writeFileSync(`data/ads/${name}.txt`, text);
    await p.screenshot({ path: `data/ads/${name}.png`, fullPage: false });
    console.log(name, text.length, text.slice(0, 300).replace(/\s+/g, ' '));
  } catch (e) { console.log(name, 'ERR', e.message); }
  await p.close();
}
await b.close();
