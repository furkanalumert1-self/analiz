"use client";

import { useEffect, useMemo, useState } from "react";
import {
  COMPETITORS,
  COMPETITOR_ANSWERS,
  FINDINGS,
  FUNNEL,
  INBOUND,
  META,
  OPPORTUNITIES,
  PLAN,
  PRODUCT_LABEL,
  ROADMAP,
  SALES_ASSETS,
  SEO_GEO_ACTIONS,
  SOURCES,
  STRATEGY,
  TEMPLATES,
  TRUST_CHECKLIST,
  ARCHITECTURE,
  DEMO_FLOW,
  DEMO_FIXES,
  EXPORT_MAGNET,
  PRO_LOOK,
  LEAD_CAPTURE,
  type Product,
} from "@/lib/data";
import { resetAll, usePersistent, type CheckMap, type NoteMap } from "@/lib/store";
import { Card, Check, CopyButton, NoteBox, PriorityBadge, Progress, Score, SectionTitle, StatusBadge, Tag } from "./ui";

type Filter = "all" | Product;

const SECTIONS = [
  { id: "dashboard", label: "Yönetici Özeti" },
  { id: "audit", label: "Site, SEO & GEO Denetimi" },
  { id: "engage", label: "Engage Stratejisi" },
  { id: "export", label: "Export Agent Stratejisi" },
  { id: "competitors", label: "Rakip İstihbaratı" },
  { id: "trust", label: "Güven & CRO Listesi" },
  { id: "site", label: "Site & Lead Sistemi" },
  { id: "funnel", label: "Satış Hunisi" },
  { id: "inbound", label: "Inbound Büyüme" },
  { id: "plan", label: "5 Günlük Plan" },
  { id: "roadmap", label: "30/60/90 Yol Haritası" },
] as const;
type SectionId = (typeof SECTIONS)[number]["id"];

const matches = (f: Filter, p: string) => f === "all" || p === f;

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" });
}

export default function GrowthOS() {
  const [section, setSection] = useState<SectionId>("dashboard");
  const [filter, setFilter] = usePersistent<Filter>("filter", "all");
  const [checks, setChecks] = usePersistent<CheckMap>("checks", {});
  const [notes, setNotes] = usePersistent<NoteMap>("notes", {});

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "") as SectionId;
      if (SECTIONS.some((s) => s.id === h)) setSection(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const go = (id: SectionId) => {
    setSection(id);
    history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: 0 });
  };

  const toggle = (id: string, v: boolean) => setChecks((c) => ({ ...c, [id]: v }));
  const note = (id: string, v: string) => setNotes((n) => ({ ...n, [id]: v }));
  const ctx = { filter, checks, toggle, notes, note, go };

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
      <aside className="border-b border-line bg-surface lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:border-r lg:border-b-0">
        <div className="px-4 pt-4 pb-3 lg:px-5 lg:pt-6">
          <div className="text-xs font-medium uppercase tracking-wider text-muted">CallypsoTech</div>
          <div className="text-lg font-semibold">Growth OS</div>
          <div className="mt-1 text-xs text-muted">Analiz: {new Date(META.analysisDate).toLocaleDateString("tr-TR")}</div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:px-3">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                if (el && section === s.id) el.scrollIntoView({ block: "nearest", inline: "nearest" });
              }}
              onClick={() => go(s.id)}
              className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm whitespace-nowrap transition ${
                section === s.id ? "bg-accent-soft font-medium text-accent" : "text-muted hover:bg-surface-2 hover:text-ink"
              }`}
            >
              <span className="mr-2 tabular-nums text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </button>
          ))}
        </nav>
        <div className="hidden px-5 pt-4 text-xs text-muted lg:block">
          <p className="mb-2 font-medium text-ink">Etiketler</p>
          <div className="space-y-1.5">
            <div><StatusBadge status="dogrulandi" /> doğrudan gözlem</div>
            <div><StatusBadge status="cikarim" /> yoruma dayalı, sahada doğrula</div>
            <div><StatusBadge status="ornek" /> örnek/öneri, gerçek sonuç değil</div>
          </div>
          <button
            onClick={() => {
              if (confirm("Tüm işaretler ve notlar silinsin mi?")) {
                resetAll();
                location.reload();
              }
            }}
            className="mt-6 text-xs underline underline-offset-2 hover:text-danger"
          >
            İlerlemeyi sıfırla
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-10 lg:py-8">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted">Ürün filtresi:</span>
          {(["all", "sirket", "engage", "export"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1 text-xs ${filter === f ? "border-accent bg-accent text-white" : "border-line text-muted hover:text-ink"}`}
            >
              {f === "all" ? "Tümü" : PRODUCT_LABEL[f]}
            </button>
          ))}
        </div>

        {section === "dashboard" && <Dashboard {...ctx} />}
        {section === "audit" && <Audit {...ctx} />}
        {section === "engage" && <ProductStrategy product="engage" {...ctx} />}
        {section === "export" && <ProductStrategy product="export" {...ctx} />}
        {section === "competitors" && <Competitors {...ctx} />}
        {section === "trust" && <Trust {...ctx} />}
        {section === "site" && <SiteLead {...ctx} />}
        {section === "funnel" && <Funnel {...ctx} />}
        {section === "inbound" && <Inbound {...ctx} />}
        {section === "plan" && <Plan {...ctx} />}
        {section === "roadmap" && <Roadmap {...ctx} />}

        <footer className="mt-12 border-t border-line pt-4 text-xs text-muted">
          <p className="mb-2 font-medium text-ink">Kaynaklar</p>
          <ul className="grid gap-1 sm:grid-cols-2">
            {SOURCES.map((s) => (
              <li key={s.id} className="truncate">
                <a href={s.url} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
          <p className="mt-3">Veriler {META.analysisDate} tarihinde toplandı · {META.analyst}. İlerleme ve notlar yalnızca bu tarayıcıda saklanır.</p>
        </footer>
      </main>
    </div>
  );
}

type Ctx = {
  filter: Filter;
  checks: CheckMap;
  toggle: (id: string, v: boolean) => void;
  notes: NoteMap;
  note: (id: string, v: string) => void;
  go: (id: SectionId) => void;
};

/* ----------------------------------------------------------------- 1 */
function Dashboard({ checks, go, notes, note }: Ctx) {
  const planDone = PLAN.filter((t) => checks[t.id]).length;
  const p0 = FINDINGS.filter((f) => f.priority === "P0");
  const p0Done = p0.filter((f) => checks[f.id]).length;
  const trustDone = TRUST_CHECKLIST.filter((t) => checks[t.id]).length;
  const geoDone = SEO_GEO_ACTIONS.filter((t) => checks[t.id]).length;
  const nextTask = PLAN.find((t) => !checks[t.id]);

  const metrics = ["Gönderilen e-posta", "Yanıt", "Olumlu yanıt", "Loom izlenme", "Toplantı", "Pilot teklifi", "Kazanılan pilot"];

  return (
    <div>
      <SectionTitle
        title="Yönetici Özeti"
        subtitle="Kanıta dayalı sonuç: Satış sorunu yalnızca e-posta metni değil. Kırık alan adı, kanıtsız sosyal kanıt, odaksız konumlandırma ve demodaki eksik bir sonraki adım, olumlu yanıtı satışa dönüştürmeyi engelliyor."
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card><div className="text-xs text-muted">Kritik (P0) sorunlar</div><div className="mt-1 text-2xl font-semibold tabular-nums">{p0Done}/{p0.length}</div><div className="mt-2"><Progress value={p0Done / p0.length} /></div></Card>
        <Card><div className="text-xs text-muted">5 günlük plan</div><div className="mt-1 text-2xl font-semibold tabular-nums">{planDone}/{PLAN.length}</div><div className="mt-2"><Progress value={planDone / PLAN.length} /></div></Card>
        <Card><div className="text-xs text-muted">Güven listesi</div><div className="mt-1 text-2xl font-semibold tabular-nums">{trustDone}/{TRUST_CHECKLIST.length}</div><div className="mt-2"><Progress value={trustDone / TRUST_CHECKLIST.length} /></div></Card>
        <Card><div className="text-xs text-muted">SEO & GEO aksiyonları</div><div className="mt-1 text-2xl font-semibold tabular-nums">{geoDone}/{SEO_GEO_ACTIONS.length}</div><div className="mt-2"><Progress value={geoDone / SEO_GEO_ACTIONS.length} /></div></Card>
      </div>

      {nextTask && (
        <Card className="mt-4 border-accent">
          <div className="text-xs font-medium text-accent">Sıradaki görev · Gün {nextTask.day} · {formatDate(nextTask.date)}</div>
          <div className="mt-1 font-semibold">{nextTask.title}</div>
          <p className="mt-1 text-sm text-muted">{nextTask.why}</p>
          <button onClick={() => go("plan")} className="mt-3 rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white">Plana git</button>
        </Card>
      )}

      <h3 className="mt-8 mb-3 font-semibold">Ne, kime, nasıl satılacak?</h3>
      <div className="grid gap-4 lg:grid-cols-2">
        {STRATEGY.map((s) => (
          <Card key={s.product}>
            <div className="flex items-center justify-between gap-2">
              <div className="font-semibold">{PRODUCT_LABEL[s.product]}</div>
              <StatusBadge status={s.status} />
            </div>
            <div className="mt-0.5 text-xs font-medium text-accent">{s.role}</div>
            <dl className="mt-3 space-y-2.5 text-sm">
              <div><dt className="text-xs text-muted">Müşteri</dt><dd>{s.customer}</dd></div>
              <div><dt className="text-xs text-muted">Değer önerisi</dt><dd className="font-medium">{s.valueProp}</dd></div>
              <div><dt className="text-xs text-muted">Kanal</dt><dd>{s.channel}</dd></div>
              <div><dt className="text-xs text-muted">Teklif</dt><dd>{s.offer}</dd></div>
              <div><dt className="text-xs text-muted">Neden</dt><dd className="text-muted">{s.whyFirst}</dd></div>
            </dl>
          </Card>
        ))}
      </div>

      <h3 className="mt-8 mb-3 font-semibold">Kritik (P0) bulgular · {p0.length}</h3>
      <div className="space-y-2">
        {p0.map((f) => (
          <Card key={f.id} className="!p-3.5">
            <div className="flex flex-wrap items-center gap-2"><PriorityBadge p={f.priority} /><Tag>{f.area}</Tag><StatusBadge status={f.status} /><span className="text-xs text-muted">{f.effort}</span></div>
            <p className="mt-1.5 text-sm font-medium">{f.problem}</p>
            <p className="mt-1 text-sm text-muted">→ {f.solution}</p>
          </Card>
        ))}
      </div>

      <h3 className="mt-8 mb-1 font-semibold">Haftalık satış metrikleri</h3>
      <p className="mb-3 text-xs text-muted">Kendi sayılarınızı girin; yalnızca bu tarayıcıda saklanır. Hedefler satış hunisi bölümünde.</p>
      <Card>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {metrics.map((m) => (
            <label key={m} className="text-xs text-muted">
              {m}
              <input
                inputMode="numeric"
                value={notes["metric:" + m] ?? ""}
                onChange={(e) => note("metric:" + m, e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="0"
                className="mt-1 w-full rounded-lg border border-line bg-bg px-2 py-1.5 text-base font-semibold tabular-nums text-ink outline-none focus:border-accent"
              />
            </label>
          ))}
        </div>
        <RateLine notes={notes} />
      </Card>
    </div>
  );
}

function RateLine({ notes }: { notes: NoteMap }) {
  const n = (k: string) => Number(notes["metric:" + k] || 0);
  const rate = (a: number, b: number) => (b > 0 ? `%${((a / b) * 100).toFixed(1)}` : "—");
  return (
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
      <span>Olumlu yanıt oranı: <b className="tabular-nums">{rate(n("Olumlu yanıt"), n("Gönderilen e-posta"))}</b> <span className="text-muted">(hedef ≥ %3)</span></span>
      <span>Olumlu → toplantı: <b className="tabular-nums">{rate(n("Toplantı"), n("Olumlu yanıt"))}</b></span>
      <span>Toplantı → pilot: <b className="tabular-nums">{rate(n("Kazanılan pilot"), n("Toplantı"))}</b></span>
    </div>
  );
}

/* ----------------------------------------------------------------- 2 */
function Audit({ filter, checks, toggle, notes, note }: Ctx) {
  const [area, setArea] = useState("Tümü");
  const areas = useMemo(() => ["Tümü", ...Array.from(new Set(FINDINGS.map((f) => f.area)))], []);
  const list = FINDINGS.filter(
    (f) => (filter === "all" || f.product === filter || (filter === "sirket" && (f.product === "instagram" || f.product === "eposta"))) && (area === "Tümü" || f.area === area),
  );
  const order = { P0: 0, P1: 1, P2: 2 };
  list.sort((a, b) => order[a.priority] - order[b.priority]);

  return (
    <div>
      <SectionTitle
        title="Site, SEO & GEO Denetimi"
        subtitle="Şirket sitesi, iki ürün demosu, Instagram ve e-posta DNS kayıtları incelendi (Playwright, REA web-bundle analizi, Apify, dns.google). Her bulgu: Problem → Satışa etkisi → Çözüm → Öncelik → Süre."
      />
      <div className="mb-4 flex flex-wrap gap-1.5">
        {areas.map((a) => (
          <button key={a} onClick={() => setArea(a)} className={`rounded-md px-2.5 py-1 text-xs ${area === a ? "bg-ink text-bg" : "bg-surface-2 text-muted hover:text-ink"}`}>{a}</button>
        ))}
      </div>
      <div className="space-y-3">
        {list.map((f) => (
          <Card key={f.id}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted">{f.id}</span>
              <PriorityBadge p={f.priority} />
              <Tag>{f.area}</Tag>
              <Tag>{f.product === "instagram" ? "Instagram" : f.product === "eposta" ? "E-posta altyapısı" : PRODUCT_LABEL[f.product]}</Tag>
              <StatusBadge status={f.status} />
              <span className="ml-auto text-xs text-muted">Süre: {f.effort}</span>
            </div>
            <p className="mt-2 font-medium">{f.problem}</p>
            <dl className="mt-3 grid gap-3 text-sm md:grid-cols-3">
              <div><dt className="text-xs font-medium text-muted">Kanıt</dt><dd className="mt-0.5">{f.evidence}</dd></div>
              <div><dt className="text-xs font-medium text-muted">Satışa etkisi</dt><dd className="mt-0.5">{f.impact}</dd></div>
              <div><dt className="text-xs font-medium text-muted">Çözüm</dt><dd className="mt-0.5">{f.solution}</dd></div>
            </dl>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <Check checked={!!checks[f.id]} onChange={(v) => toggle(f.id, v)} label="Çözüldü" />
              {f.source && (
                <a className="text-xs text-accent underline-offset-2 hover:underline" href={SOURCES.find((s) => s.id === f.source)?.url} target="_blank" rel="noreferrer">Kaynağı aç ↗</a>
              )}
            </div>
            <NoteBox value={notes[f.id] ?? ""} onChange={(v) => note(f.id, v)} />
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 3 & 4 */
function ProductStrategy({ product, checks, toggle }: Ctx & { product: Product }) {
  const s = STRATEGY.find((x) => x.product === product)!;
  const opps = OPPORTUNITIES.filter((o) => o.product === product).sort((a, b) => b.value + b.impact - b.cost - (a.value + a.impact - a.cost));
  const findings = FINDINGS.filter((f) => f.product === product);
  const comps = COMPETITORS.filter((c) => c.product === product);
  const tpls = TEMPLATES.filter((t) => t.product === product);
  return (
    <div>
      <SectionTitle title={`${PRODUCT_LABEL[product]} Büyüme Stratejisi`} subtitle={s.role} />
      <Card>
        <div className="grid gap-4 text-sm md:grid-cols-2">
          <div><div className="text-xs text-muted">Hedef müşteri</div><p className="mt-0.5">{s.customer}</p></div>
          <div><div className="text-xs text-muted">Değer önerisi</div><p className="mt-0.5 font-medium">{s.valueProp}</p></div>
          <div><div className="text-xs text-muted">Kanal</div><p className="mt-0.5">{s.channel}</p></div>
          <div><div className="text-xs text-muted">Giriş teklifi</div><p className="mt-0.5">{s.offer}</p></div>
        </div>
        <p className="mt-4 border-t border-line pt-3 text-sm text-muted">{s.whyFirst}</p>
      </Card>

      <h3 className="mt-8 mb-1 font-semibold">Özellik ve iyileştirme önerileri (puanlı)</h3>
      <p className="mb-3 text-xs text-muted">Müşteri değeri ve satış etkisi: yüksek iyi. Geliştirme maliyeti: düşük iyi. Sıralama: değer + etki − maliyet.</p>
      <div className="overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-surface-2 text-left text-xs text-muted">
            <tr><th className="p-3">Öneri</th><th className="p-3">Müşteri değeri</th><th className="p-3">Geliştirme maliyeti</th><th className="p-3">Satış etkisi</th><th className="p-3">Yapıldı</th></tr>
          </thead>
          <tbody>
            {opps.map((o) => (
              <tr key={o.id} className="border-t border-line">
                <td className="p-3">{o.title}</td>
                <td className="p-3"><Score value={o.value} /></td>
                <td className="p-3"><Score value={o.cost} invert /></td>
                <td className="p-3"><Score value={o.impact} /></td>
                <td className="p-3"><input type="checkbox" aria-label={`${o.title} yapıldı`} className="h-4 w-4 accent-[var(--accent)]" checked={!!checks[o.id]} onChange={(e) => toggle(o.id, e.target.checked)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 mb-3 font-semibold">Bu ürüne ait denetim bulguları</h3>
      <div className="space-y-2">
        {findings.map((f) => (
          <div key={f.id} className="flex items-start gap-2 rounded-lg border border-line bg-surface p-3 text-sm">
            <PriorityBadge p={f.priority} />
            <div><span className="font-medium">{f.problem}</span><div className="mt-0.5 text-muted">→ {f.solution}</div></div>
          </div>
        ))}
      </div>

      <h3 className="mt-8 mb-3 font-semibold">Rakipler kısaca</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {comps.map((c) => (
          <Card key={c.name} className="!p-4">
            <div className="flex items-center justify-between"><a href={c.url} target="_blank" rel="noreferrer" className="font-medium hover:underline">{c.name} ↗</a><Tag>{c.region}</Tag></div>
            <p className="mt-1 text-sm text-muted">{c.value}</p>
            <p className="mt-2 text-sm"><span className="text-xs text-muted">Boşluk: </span>{c.gap}</p>
          </Card>
        ))}
      </div>

      <h3 className="mt-8 mb-3 font-semibold">Hazır metinler</h3>
      <Templates list={tpls} />
    </div>
  );
}

function Templates({ list }: { list: typeof TEMPLATES }) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {list.map((t) => (
        <Card key={t.id} className="!p-4">
          <div className="flex items-center justify-between gap-2"><div className="font-medium">{t.title}</div><div className="flex items-center gap-2"><StatusBadge status="ornek" /><CopyButton text={t.body} /></div></div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm text-muted">{t.body}</pre>
        </Card>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------- 5 */
function Competitors({ filter }: Ctx) {
  const list = COMPETITORS.filter((c) => filter === "all" || filter === "sirket" || c.product === filter);
  const rows: [keyof (typeof COMPETITORS)[number], string][] = [
    ["target", "Hedef müşteri"],
    ["value", "Değer önerisi"],
    ["trust", "Güven yöntemi"],
    ["onboarding", "Demo / başlangıç"],
    ["pricing", "Fiyat"],
    ["content", "İçerik & inbound"],
    ["gap", "Callypso fırsatı"],
  ];
  return (
    <div>
      <SectionTitle title="Rakip İstihbaratı" subtitle="Fiyatlar resmi sayfa veya üçüncü taraf kaynaktan; çelişkili olanlar ‘Çıkarım’ etiketli. Kanıt bulunamayan fiyat yazılmadı." />
      {(["engage", "export"] as Product[]).filter((p) => list.some((c) => c.product === p)).map((p) => (
        <div key={p} className="mb-8">
          <h3 className="mb-3 font-semibold">{PRODUCT_LABEL[p]}</h3>
          <div className="overflow-x-auto rounded-xl border border-line bg-surface">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-surface-2 text-left text-xs">
                <tr>
                  <th className="sticky left-0 bg-surface-2 p-3 text-muted">Kriter</th>
                  {list.filter((c) => c.product === p).map((c) => (
                    <th key={c.name} className="p-3"><a href={c.url} target="_blank" rel="noreferrer" className="hover:underline">{c.name} ↗</a><div className="font-normal text-muted">{c.region}</div></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([k, label]) => (
                  <tr key={k} className="border-t border-line align-top">
                    <td className="sticky left-0 bg-surface p-3 text-xs font-medium text-muted">{label}</td>
                    {list.filter((c) => c.product === p).map((c) => (
                      <td key={c.name} className="p-3">
                        {String(c[k])}
                        {k === "pricing" && <div className="mt-1"><StatusBadge status={c.pricingStatus} /></div>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <h3 className="mb-3 font-semibold">Kritik sorular</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {COMPETITOR_ANSWERS.map((a) => (
          <Card key={a.q} className="!p-4"><div className="font-medium">{a.q}</div><p className="mt-1.5 text-sm text-muted">{a.a}</p></Card>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 6 */
function Trust({ filter, checks, toggle }: Ctx) {
  const items = TRUST_CHECKLIST.filter((t) => matches(filter, t.product));
  const groups = Array.from(new Set(items.map((i) => i.group)));
  const done = items.filter((i) => checks[i.id]).length;
  const seoDone = SEO_GEO_ACTIONS.filter((i) => checks[i.id]).length;
  return (
    <div>
      <SectionTitle title="Güven & CRO Kontrol Listesi" subtitle="Bir B2B alıcının görüşmeye girmeden önce kontrol ettiği şeyler. Her madde denetim bulgularından türetildi." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <Progress value={items.length ? done / items.length : 0} label={`Güven listesi · ${done}/${items.length}`} />
          <div className="mt-4 space-y-5">
            {groups.map((g) => (
              <div key={g}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{g}</div>
                <div className="space-y-2">
                  {items.filter((i) => i.group === g).map((i) => (
                    <Check key={i.id} checked={!!checks[i.id]} onChange={(v) => toggle(i.id, v)} label={i.text} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Progress value={seoDone / SEO_GEO_ACTIONS.length} label={`SEO & GEO aksiyonları · ${seoDone}/${SEO_GEO_ACTIONS.length}`} />
          <div className="mt-4 space-y-2.5">
            {SEO_GEO_ACTIONS.map((a) => (
              <div key={a.id} className="flex items-start gap-2">
                <Check checked={!!checks[a.id]} onChange={(v) => toggle(a.id, v)} label={a.title} />
                <span className="ml-auto flex shrink-0 gap-1"><Tag>{a.type}</Tag><PriorityBadge p={a.priority} /></span>
              </div>
            ))}
          </div>
          <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
            GEO (Generative Engine Optimization): ChatGPT, Gemini, Perplexity ve Google AI Özeti gibi yanıt motorlarında doğru tanımlanmak ve alıntılanmak. Bugünkü durum: Google AI Özeti CallypsoTech'i tanıyor ama Engage'i yanlış (WhatsApp ürünü) anlatıyor; üçüncü taraf kaynak yok.
          </p>
        </Card>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 7 */
function Funnel(_: Ctx) {
  return (
    <div>
      <SectionTitle title="Satış Hunisi" subtitle="Cold Email → Reply → Loom → Demo → Meeting → Proposal → Follow-up → Closing → Onboarding → Reference. Hedef oranlar başlangıç varsayımıdır; ilk 50 gönderimle güncelleyin." />
      <div className="space-y-2">
        {FUNNEL.map((f, i) => (
          <Card key={f.stage} className="!p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">{i + 1}</span>
              <div className="font-semibold">{f.stage}</div>
              <span className="ml-auto text-xs text-muted">{f.metric}</span>
            </div>
            <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div><dt className="text-xs text-muted">Güven unsuru</dt><dd>{f.trust}</dd></div>
              <div><dt className="text-xs text-muted">Materyal</dt><dd>{f.material}</dd></div>
              <div><dt className="text-xs text-muted">CTA</dt><dd>{f.cta}</dd></div>
              <div><dt className="text-xs text-muted">Otomasyon</dt><dd>{f.automation}</dd></div>
            </dl>
          </Card>
        ))}
      </div>
      <h3 className="mt-8 mb-3 font-semibold">Satış araçları değerlendirmesi</h3>
      <div className="grid gap-2 md:grid-cols-2">
        {SALES_ASSETS.map((a) => (
          <div key={a.name} className="flex items-start gap-2 rounded-lg border border-line bg-surface p-3 text-sm">
            <PriorityBadge p={a.priority} />
            <div><div className="font-medium">{a.name}</div><div className="text-muted">{a.verdict}</div></div>
          </div>
        ))}
      </div>
      <h3 className="mt-8 mb-3 font-semibold">Şablonlar</h3>
      <Templates list={TEMPLATES} />
    </div>
  );
}

/* ----------------------------------------------------------------- 8 */
function Inbound({ filter, checks, toggle }: Ctx) {
  const list = INBOUND.filter((c) => matches(filter, c.product) || filter === "sirket");
  return (
    <div>
      <SectionTitle title="Inbound Büyüme" subtitle="Engage için Instagram + ücretsiz analiz; Export Agent için LinkedIn + sektörel içerik. Katkı tahminleri çıkarımdır." />
      <div className="grid gap-4 lg:grid-cols-2">
        {list.map((c, ci) => (
          <Card key={c.channel}>
            <div className="flex items-center justify-between gap-2"><div className="font-semibold">{c.channel}</div><Tag>{PRODUCT_LABEL[c.product]}</Tag></div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted"><span>Katkı: <b className="text-ink">{c.contribution}</b></span><span>İş yükü: <b className="text-ink">{c.workload}</b></span></div>
            <div className="mt-3 space-y-2">
              {c.actions.map((a, ai) => {
                const id = `IN-${ci}-${ai}`;
                return <Check key={id} checked={!!checks[id]} onChange={(v) => toggle(id, v)} label={a} />;
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 9 */
function Plan({ filter, checks, toggle, notes, note }: Ctx) {
  const days = [1, 2, 3, 4, 5];
  const all = PLAN.filter((t) => matches(filter, t.product));
  const done = all.filter((t) => checks[t.id]).length;
  return (
    <div>
      <SectionTitle title="5 İş Günlük Uygulama Planı" subtitle={`${formatDate(META.planStart)} – ${formatDate(META.planEnd)}. Hafta sonu yok, günde en fazla 2 ana görev. Sıra: satışa doğrudan etki → güven → dönüşüm → demo → inbound.`} />
      <Card className="mb-4"><Progress value={all.length ? done / all.length : 0} label={`Genel ilerleme · ${done}/${all.length} görev`} /></Card>
      <div className="space-y-6">
        {days.map((d) => {
          const tasks = all.filter((t) => t.day === d);
          if (!tasks.length) return null;
          const dDone = tasks.filter((t) => checks[t.id]).length;
          return (
            <section key={d}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h3 className="font-semibold">Gün {d} · <span className="capitalize">{formatDate(tasks[0].date)}</span></h3>
                <span className="text-xs tabular-nums text-muted">{dDone}/{tasks.length}</span>
              </div>
              <div className="space-y-3">
                {tasks.map((t) => (
                  <Card key={t.id} className={checks[t.id] ? "opacity-70" : ""}>
                    <div className="flex flex-wrap items-center gap-2">
                      <Check checked={!!checks[t.id]} onChange={(v) => toggle(t.id, v)} label={<span className="font-semibold">{t.title}</span>} />
                      <span className="ml-auto flex items-center gap-2 text-xs text-muted"><Tag>{PRODUCT_LABEL[t.product]}</Tag>Etki <Score value={t.impact} /></span>
                    </div>
                    <p className="mt-2 text-sm"><span className="text-xs text-muted">Neden önemli: </span>{t.why}</p>
                    <div className="mt-2 text-sm">
                      <div className="text-xs text-muted">Nasıl yapılır</div>
                      <ol className="mt-1 list-decimal space-y-1 pl-5">{t.how.map((h) => <li key={h}>{h}</li>)}</ol>
                    </div>
                    <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                      <div><dt className="text-xs text-muted">Araçlar</dt><dd>{t.tools}</dd></div>
                      <div><dt className="text-xs text-muted">Süre</dt><dd>{t.duration}</dd></div>
                      <div><dt className="text-xs text-muted">Çıktı</dt><dd>{t.output}</dd></div>
                      <div><dt className="text-xs text-muted">Tamamlanma kriteri</dt><dd>{t.done}</dd></div>
                    </dl>
                    <NoteBox value={notes[t.id] ?? ""} onChange={(v) => note(t.id, v)} placeholder="Görev notu (ör. DNS değişikliği saat 14:00'te yapıldı)" />
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 10 */
function Roadmap({ checks, toggle }: Ctx) {
  return (
    <div>
      <SectionTitle title="30 / 60 / 90 Günlük Yol Haritası" subtitle="5 günde yapılmayanlar buraya taşındı. Her dönem bir iş sonucu hedefiyle bitiyor." />
      <div className="grid gap-4 lg:grid-cols-3">
        {ROADMAP.map((r) => {
          const done = r.items.filter((_, i) => checks[`RM-${r.window}-${i}`]).length;
          return (
            <Card key={r.window}>
              <div className="text-xs font-medium text-accent">{r.window}</div>
              <div className="mt-0.5 font-semibold">{r.goal}</div>
              <div className="mt-3"><Progress value={done / r.items.length} /></div>
              <div className="mt-4 space-y-2">
                {r.items.map((it, i) => {
                  const id = `RM-${r.window}-${i}`;
                  return <Check key={id} checked={!!checks[id]} onChange={(v) => toggle(id, v)} label={it} />;
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- Site & Lead */
function SiteLead({ checks, toggle }: Ctx) {
  const [tab, setTab] = useState<"mimari" | "rontgen" | "gorunum" | "form">("rontgen");
  const tabs = [
    ["rontgen", "İhracat Teklif Röntgeni"],
    ["form", "Form ile e-posta toplama"],
    ["gorunum", "Profesyonel görünüm"],
    ["mimari", "Site yapısı & demo akışı"],
  ] as const;
  const proDone = PRO_LOOK.filter((p) => checks[p.id]).length;
  return (
    <div>
      <SectionTitle
        title="Site & Lead Sistemi"
        subtitle="Tek ana site + ürün sayfaları + iki ücretsiz analiz sayfası (Teklif Röntgeni, Sepet Röntgeni) + KVKK uyumlu formlar. Ziyaretçiyi takvim yerine önce ücretsiz analize, oradan görüşmeye taşır."
      />
      <div className="mb-5 flex flex-wrap gap-1.5">
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} className={`rounded-md px-3 py-1.5 text-sm ${tab === id ? "bg-ink text-bg" : "bg-surface-2 text-muted hover:text-ink"}`}>{label}</button>
        ))}
      </div>

      {tab === "rontgen" && (
        <div className="space-y-4">
          <Card className="border-accent">
            <div className="flex items-center justify-between gap-2"><div className="font-semibold">{EXPORT_MAGNET.name}: oluşturmalı mıyım?</div><StatusBadge status="cikarim" /></div>
            <p className="mt-2 text-sm">{EXPORT_MAGNET.verdict}</p>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            {EXPORT_MAGNET.tiers.map((t) => (
              <Card key={t.title}><div className="font-medium">{t.title}</div><p className="mt-1.5 text-sm text-muted">{t.text}</p></Card>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="font-medium">Sayfa kurgusu (yukarıdan aşağı)</div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{EXPORT_MAGNET.pageSections.map((x) => <li key={x}>{x}</li>)}</ol>
            </Card>
            <Card>
              <div className="flex items-center justify-between"><div className="font-medium">8 soruluk test</div><StatusBadge status="ornek" /></div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{EXPORT_MAGNET.quiz.map((x) => <li key={x}>{x}</li>)}</ol>
            </Card>
            <Card>
              <div className="font-medium">Raporda ne olacak</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{EXPORT_MAGNET.report.map((x) => <li key={x}>{x}</li>)}</ul>
            </Card>
            <Card>
              <div className="font-medium">Takip sekansı</div>
              <ul className="mt-2 space-y-1 text-sm">{EXPORT_MAGNET.followUp.map((x) => <li key={x}>{x}</li>)}</ul>
            </Card>
          </div>
          <Card><div className="text-xs font-medium text-muted">Cold e-postada nasıl kullanılır?</div><p className="mt-1 text-sm">{EXPORT_MAGNET.coldUse}</p></Card>
          <Card>
            <div className="mb-2 font-medium">Uygulama adımları</div>
            <div className="space-y-2">
              {[
                ["SL1", "Test sorularını ve skor hesabını kesinleştir (her soru 0–12,5 puan)"],
                ["SL2", "/teklif-rontgeni sayfasını ana sitede yayınla (form altyapısı sekmesindeki yapı ile)"],
                ["SL3", "Rapor şablonunu hazırla (Google Docs → PDF, 30 dk'da doldurulabilir)"],
                ["SL4", "5 e-postalık takip sekansını kur"],
                ["SL5", "Linki LinkedIn profiline, imzaya ve 2. takip e-postasına ekle"],
              ].map(([id, t]) => <Check key={id} checked={!!checks[id]} onChange={(v) => toggle(id, v)} label={t} />)}
            </div>
          </Card>
        </div>
      )}

      {tab === "form" && (
        <div className="space-y-4">
          <Card>
            <div className="mb-3 font-medium">Form nereye konmalı?</div>
            <div className="space-y-2">
              {LEAD_CAPTURE.placements.map((p) => (
                <div key={p.where} className="flex items-start gap-2 text-sm"><PriorityBadge p={p.priority} /><div><span className="font-medium">{p.where}:</span> {p.what}</div></div>
              ))}
            </div>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card><div className="font-medium">İhracat formu alanları</div><ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{LEAD_CAPTURE.fieldsExport.map((x) => <li key={x}>{x}</li>)}</ul></Card>
            <Card><div className="font-medium">E-ticaret formu alanları</div><ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{LEAD_CAPTURE.fieldsEngage.map((x) => <li key={x}>{x}</li>)}</ul></Card>
          </div>
          <Card>
            <div className="flex items-center justify-between gap-2"><div className="font-medium">KVKK ve ticari ileti kuralları</div><StatusBadge status="cikarim" /></div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{LEAD_CAPTURE.legal.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="mt-2 text-xs text-muted">Hukuki tavsiye değildir; metinleri yayından önce bir hukukçuya kontrol ettirin.</p>
          </Card>
          <Card>
            <div className="mb-2 font-medium">Teknik altyapı seçenekleri</div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="text-left text-xs text-muted"><tr><th className="py-2 pr-3">Seçenek</th><th className="py-2 pr-3">Araçlar</th><th className="py-2">Not</th></tr></thead>
                <tbody>{LEAD_CAPTURE.stack.map((r) => <tr key={r.option} className="border-t border-line align-top"><td className="py-2 pr-3 font-medium">{r.option}</td><td className="py-2 pr-3">{r.tools}</td><td className="py-2 text-muted">{r.note}</td></tr>)}</tbody>
              </table>
            </div>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card><div className="font-medium">Form sonrası akış</div><ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{LEAD_CAPTURE.flow.map((x) => <li key={x}>{x}</li>)}</ol></Card>
            <Card>
              <div className="font-medium">Yapılmaması gerekenler</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{LEAD_CAPTURE.avoid.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="mt-4 font-medium">Ölçülecekler</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">{LEAD_CAPTURE.metrics.map((x) => <li key={x}>{x}</li>)}</ul>
            </Card>
          </div>
        </div>
      )}

      {tab === "gorunum" && (
        <Card>
          <Progress value={proDone / PRO_LOOK.length} label={`Profesyonel görünüm · ${proDone}/${PRO_LOOK.length}`} />
          <div className="mt-4 space-y-3">
            {PRO_LOOK.map((p) => (
              <div key={p.id} className="border-t border-line pt-3 first:border-0 first:pt-0">
                <div className="flex flex-wrap items-start gap-2">
                  <Check checked={!!checks[p.id]} onChange={(v) => toggle(p.id, v)} label={p.text} />
                  <span className="ml-auto flex shrink-0 gap-1"><Tag>{p.area}</Tag><PriorityBadge p={p.priority} /><StatusBadge status={p.status} /></span>
                </div>
                {p.evidence !== "—" && <div className="mt-1 pl-6.5 text-xs text-muted">Kanıt: {p.evidence}</div>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "mimari" && (
        <div className="space-y-4">
          <Card>
            <div className="font-medium">Önerilen yapı: tek ana site, ürünler altında</div>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-surface-2 p-3 text-xs leading-relaxed">{ARCHITECTURE.tree.join("\n")}</pre>
          </Card>
          <div className="grid gap-3 md:grid-cols-2">
            {ARCHITECTURE.principles.map((p) => <Card key={p.title} className="!p-4"><div className="font-medium">{p.title}</div><p className="mt-1 text-sm text-muted">{p.text}</p></Card>)}
          </div>
          <Card>
            <div className="mb-2 font-medium">Demo linkini ne zaman göndermeli?</div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="text-left text-xs text-muted"><tr><th className="py-2 pr-3">Aşama</th><th className="py-2 pr-3">Ne gönderilir</th><th className="py-2">Neden</th></tr></thead>
                <tbody>{DEMO_FLOW.map((r) => <tr key={r.stage} className="border-t border-line align-top"><td className="py-2 pr-3 font-medium">{r.stage}</td><td className="py-2 pr-3">{r.send}</td><td className="py-2 text-muted">{r.why}</td></tr>)}</tbody>
              </table>
            </div>
          </Card>
          <Card>
            <div className="mb-2 font-medium">Demo sayfalarında yapılacaklar</div>
            <div className="space-y-2">{DEMO_FIXES.map((x, i) => <Check key={x} checked={!!checks["DF" + i]} onChange={(v) => toggle("DF" + i, v)} label={x} />)}</div>
          </Card>
        </div>
      )}
    </div>
  );
}
