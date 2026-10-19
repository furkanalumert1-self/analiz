// Validates every dataset (required fields, enums, cross-references), computes
// opportunity scores from their component scores and writes data/bundle.js, which the
// dashboard loads. Fails with a non-zero exit code on any validation error.
//
// Usage: node scripts/build.mjs
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = async (f) => JSON.parse(await readFile(path.join(ROOT, 'data', f), 'utf8'));

const D = {
  ecosystem: await load('company-ecosystem.json'),
  brands: (await load('brands.json')).brands,
  sources: (await load('source-registry.json')).sources,
  catalog: await load('catalog.json'),
  offerings: (await load('offerings.json')).offerings,
  relationships: await load('product-relationships.json'),
  painPoints: await load('pain-points.json'),
  opportunities: await load('opportunities.json'),
  segments: await load('segments.json'),
  questions: (await load('discovery-questions.json')).questions,
  journeys: (await load('journeys.json')).journeys,
  websites: (await load('website-analysis.json')).sites,
  campaigns: await load('campaigns.json'),
  roadmap: (await load('roadmap.json')).phases,
  scenarios: await load('scenarios.json'),
  limitations: (await load('limitations.json')).items,
  crawlStatus: await load('crawl-status.json'),
  pages: await load('pages.json'),
  technologies: await load('technologies.json'),
  mobile: await load('mobile-check.json'),
  ads: await load('ads-raw.json'),
};

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const need = (obj, fields, where) => fields.forEach((f) => {
  const v = obj[f];
  if (v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0 && !['opportunityIds', 'painPointIds', 'dependencies', 'requiredEvents'].includes(f))) fail(where, `missing ${f}`);
});
const oneOf = (v, allowed, where, field) => { if (!allowed.includes(v)) fail(where, `${field}="${v}" not in [${allowed.join(', ')}]`); };

const entityIds = new Set(D.ecosystem.entities.map((e) => e.id));
const sourceIds = new Set(D.sources.map((s) => s.id));
const ppIds = new Set(D.painPoints.painPoints.map((p) => p.id));
const oppIds = new Set(D.opportunities.opportunities.map((o) => o.id));
const catIds = new Set(D.catalog.items.map((c) => c.id));
const CONF = ['Verified', 'Inferred', 'Requires Access'];
const LMH = ['Low', 'Medium', 'High'];
const PP_CLASS = Object.keys(D.painPoints.classifications);
const SOL = ['Callypso Engage', 'Engage + Integration', 'External Automation', 'AI Agent', 'Custom AI Solution', 'Discovery Required'];
const refs = (ids, set, where, label) => (ids || []).forEach((id) => { if (!set.has(id)) fail(where, `unknown ${label} ${id}`); });
const unique = (arr, where) => { const s = new Set(); arr.forEach((x) => { if (s.has(x.id)) fail(where, `duplicate id ${x.id}`); s.add(x.id); }); };

unique(D.ecosystem.entities, 'entities'); unique(D.sources, 'sources'); unique(D.painPoints.painPoints, 'painPoints');
unique(D.opportunities.opportunities, 'opportunities'); unique(D.catalog.items, 'catalog'); unique(D.questions, 'questions');

for (const e of D.ecosystem.entities) {
  need(e, ['id', 'name', 'website', 'category', 'businessModels', 'relationshipStatus', 'confidence', 'evidence'], `entity ${e.id}`);
  oneOf(e.relationshipStatus, D.ecosystem.relationshipTypes, `entity ${e.id}`, 'relationshipStatus');
  oneOf(e.confidence, CONF, `entity ${e.id}`, 'confidence');
  refs(e.evidence.map((x) => x.sourceId), sourceIds, `entity ${e.id}`, 'source');
}
for (const s of D.sources) { need(s, ['id', 'entityId', 'url', 'type', 'collectedAt', 'summary', 'confidence'], `source ${s.id}`); refs([s.entityId], entityIds, `source ${s.id}`, 'entity'); oneOf(s.confidence, CONF, `source ${s.id}`, 'confidence'); }
for (const b of D.brands) { refs([b.entityId], entityIds, `brand ${b.id}`, 'entity'); refs(b.sourceIds, sourceIds, `brand ${b.id}`, 'source'); }
for (const c of D.catalog.items) {
  need(c, ['id', 'entityId', 'name', 'category', 'url', 'confidence', 'journey'], `catalog ${c.id}`);
  if (c.price !== null) fail(`catalog ${c.id}`, 'price must be null unless published');
  refs([c.entityId], entityIds, `catalog ${c.id}`, 'entity'); refs(c.sourceIds, sourceIds, `catalog ${c.id}`, 'source');
  oneOf(c.journey, Object.keys(D.scenarios.templates), `catalog ${c.id}`, 'journey');
}
for (const r of D.relationships.relationships) {
  [r.from, r.to].forEach((x) => { if (!catIds.has(x) && !entityIds.has(x)) fail(`relationship ${r.id}`, `unknown node ${x}`); });
  refs(r.sourceIds, sourceIds, `relationship ${r.id}`, 'source');
}
for (const p of D.painPoints.painPoints) {
  need(p, ['id', 'entityId', 'title', 'function', 'category', 'journeyStage', 'evidence', 'sourceIds', 'consequence', 'classification', 'validationQuestion', 'solution', 'automation', 'requiredData', 'integrations', 'complexity', 'impact', 'measurement'], `painPoint ${p.id}`);
  oneOf(p.classification, PP_CLASS, `painPoint ${p.id}`, 'classification');
  oneOf(p.complexity, LMH, `painPoint ${p.id}`, 'complexity'); oneOf(p.impact, LMH, `painPoint ${p.id}`, 'impact');
  refs([p.entityId], entityIds, `painPoint ${p.id}`, 'entity'); refs(p.sourceIds, sourceIds, `painPoint ${p.id}`, 'source');
  refs(p.opportunityIds, oppIds, `painPoint ${p.id}`, 'opportunity');
}
const { weights, thresholds } = D.opportunities.scoring;
for (const o of D.opportunities.opportunities) {
  need(o, ['id', 'entityId', 'title', 'painPointIds', 'solutionCategory', 'journeyStage', 'trigger', 'requiredData', 'integrations', 'complexity', 'impact', 'confidence', 'measurement', 'firstStep', 'scores', 'humanOversight'], `opportunity ${o.id}`);
  oneOf(o.solutionCategory, SOL, `opportunity ${o.id}`, 'solutionCategory');
  oneOf(o.complexity, LMH, `opportunity ${o.id}`, 'complexity'); oneOf(o.impact, LMH, `opportunity ${o.id}`, 'impact');
  oneOf(o.confidence, CONF, `opportunity ${o.id}`, 'confidence');
  refs([o.entityId], entityIds, `opportunity ${o.id}`, 'entity'); refs(o.painPointIds, ppIds, `opportunity ${o.id}`, 'painPoint');
  refs(o.dependencies, oppIds, `opportunity ${o.id}`, 'dependency');
  for (const k of Object.keys(weights)) {
    const v = o.scores[k];
    if (!Number.isInteger(v) || v < 1 || v > 5) fail(`opportunity ${o.id}`, `score ${k}=${v} must be integer 1–5`);
  }
  o.score = Math.round(Object.entries(weights).reduce((s, [k, w]) => s + w * o.scores[k], 0) * 100) / 100;
  o.priority = o.score >= thresholds.high ? 'High' : o.score >= thresholds.medium ? 'Medium' : 'Low';
  // Evidence trail: union of the sources behind the pain points this opportunity addresses.
  o.sourceIds = [...new Set(o.painPointIds.flatMap((id) => D.painPoints.painPoints.find((p) => p.id === id)?.sourceIds ?? []))];
}
for (const q of D.questions) { refs(q.validates, ppIds, `question ${q.id}`, 'painPoint'); refs(q.unlocks, oppIds, `question ${q.id}`, 'opportunity'); }
for (const j of D.journeys) for (const s of j.stages) { refs(s.painPointIds, ppIds, `journey ${j.id}/${s.id}`, 'painPoint'); refs(s.opportunityIds, oppIds, `journey ${j.id}/${s.id}`, 'opportunity'); }
for (const w of D.websites) { refs([w.entityId], entityIds, `website ${w.domain}`, 'entity'); refs(w.sourceIds, sourceIds, `website ${w.domain}`, 'source'); }
for (const c of D.campaigns.observations) refs(c.sourceIds, sourceIds, `campaign ${c.id}`, 'source');
for (const ph of D.roadmap) for (const it of ph.items) refs([it.opportunityId], oppIds, `roadmap ${ph.id}`, 'opportunity');
// Pain point ↔ opportunity links must be symmetric so the dashboard trail is consistent.
for (const p of D.painPoints.painPoints) for (const oid of p.opportunityIds) {
  const o = D.opportunities.opportunities.find((x) => x.id === oid);
  if (o && !o.painPointIds.includes(p.id)) fail(`painPoint ${p.id}`, `${oid} does not list it back`);
}

// Secrets must never reach the bundle.
D.builtAt = new Date().toISOString();
const serialized = JSON.stringify(D);
if (/apify_api_[A-Za-z0-9]{10,}/.test(serialized)) fail('bundle', 'contains an Apify token');

if (errors.length) { console.error(`Validation failed (${errors.length}):\n- ` + errors.join('\n- ')); process.exit(1); }

await writeFile(path.join(ROOT, 'data', 'bundle.js'), `// Generated by scripts/build.mjs — do not edit.\nwindow.DEDA_DATA = ${serialized.replace(/<\/(script)/gi, '<\\/$1')};\n`);
const opp = D.opportunities.opportunities;
console.log(`OK — ${D.ecosystem.entities.length} entities, ${D.sources.length} sources, ${D.pages.length} pages, ${D.catalog.items.length} catalog items, ${D.painPoints.painPoints.length} pain points, ${opp.length} opportunities (${opp.filter((o) => o.priority === 'High').length} high).`);
console.log(opp.slice().sort((a, b) => b.score - a.score).map((o) => `${o.id} ${o.score} ${o.priority} ${o.title}`).join('\n'));
