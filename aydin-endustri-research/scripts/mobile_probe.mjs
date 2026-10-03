// Mobile probe: loads each homepage + one PDP at iPhone size, records third-party hosts requested,
// visible pop-ups/banners and takes screenshots.
import { chromium, devices } from '/opt/node-tools/node_modules/playwright/index.mjs';
import fs from 'fs';
const pages = [['homedius_home','https://www.homedius.com/'],['homedius_pdp','https://www.homedius.com/mocca-tekli-petrol-yesili'],['sleeptown_home','https://www.sleeptown.com.tr/'],['sleeptown_pdp','https://www.sleeptown.com.tr/hybrid-mattress-yatak']];
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'], locale: 'tr-TR' });
const out = {};
for (const [n,u] of pages) {
  const p = await ctx.newPage(); const hosts = new Set();
  p.on('request', r => { try { hosts.add(new URL(r.url()).hostname); } catch {} });
  await p.goto(u, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
  await p.waitForTimeout(6000);
  await p.screenshot({ path: `data/ads/${n}_mobile.png` });
  const info = await p.evaluate(() => ({ title: document.title, vw: innerWidth, sw: document.documentElement.scrollWidth,
    fixed: [...document.querySelectorAll('body *')].filter(e => { const s = getComputedStyle(e); return (s.position==='fixed'||s.position==='sticky') && e.offsetHeight>30 && e.offsetWidth>100; }).map(e => (e.innerText||'').trim().slice(0,120)).filter(Boolean).slice(0,8) }));
  out[n] = { ...info, hosts: [...hosts].sort() };
  console.log(n, JSON.stringify(out[n]).slice(0, 1500));
  await p.close();
}
fs.writeFileSync('data/mobile_probe.json', JSON.stringify(out, null, 1));
await b.close();
