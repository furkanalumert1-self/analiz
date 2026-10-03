import { chromium, devices } from '/opt/node-tools/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const out = process.argv[2] || '/tmp/shots';
for (const [name, opts] of [['desk', { viewport: { width: 1440, height: 900 } }], ['mob', { ...devices['iPhone 13'] }]]) {
  const ctx = await b.newContext(opts); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('http://localhost:8765/aydin-endustri/index.html', { waitUntil: 'networkidle' }); await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
  const sw = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth, document.body.scrollHeight]);
  console.log(name, 'scrollWidth/innerWidth/height', sw, 'errors', errs);
  for (const id of ['overview', 'ecosystem', 'websites', 'products', 'journey', 'automations', 'crosssell', 'crossbrand', 'ads', 'simulator']) {
    await p.evaluate(i => document.getElementById(i).scrollIntoView(), id);
    await p.waitForTimeout(150);
    await p.screenshot({ path: `${out}/${name}_${id}.png` });
  }
  await p.click('#sPlay'); await p.waitForTimeout(15500);
  await p.evaluate(() => document.getElementById('sSteps').scrollIntoView());
  await p.screenshot({ path: `${out}/${name}_sim_done.png`, fullPage: false });
  await ctx.close();
}
await b.close();
