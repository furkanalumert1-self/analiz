"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import { Card, CardTitle, FilterRow, LevelMeter, PriorityBadge, SectionHeader, TagBadge } from "../ui";
import { PriorityStack } from "../charts";
import { opportunities, opportunityScore, scoreFormula, topOpportunities } from "@/data/opportunities";
import { occasions, roadmap } from "@/data/strategy";
import { categoryCounts } from "@/lib/data";
import type { Level } from "@/lib/types";

const RESEARCH_DATE = new Date("2026-09-26T00:00:00");
const oppById = new Map(opportunities.map((o) => [o.id, o]));
const levels: Level[] = ["High", "Medium", "Low"];

export default function Roadmap() {
  const [area, setArea] = useState<"all" | "callypso" | "other">("all");
  const rows = useMemo(
    () =>
      opportunities
        .filter((o) => area === "all" || o.area === area)
        .sort((a, b) => opportunityScore(b) - opportunityScore(a) || a.priority.localeCompare(b.priority)),
    [area],
  );
  const top = topOpportunities(10);
  const prioData = (["P0", "P1", "P2", "P3"] as const).map((p) => ({
    priority: p,
    Callypso: opportunities.filter((o) => o.priority === p && o.area === "callypso").length,
    Other: opportunities.filter((o) => o.priority === p && o.area === "other").length,
  }));

  return (
    <section>
      <SectionHeader
        no="10 — Prioritization & Roadmap"
        title="Ne, hangi sırayla, hangi sezondan önce?"
        intro={<>Ticari önceliklendirme kriteri: <span className="font-medium text-ink">{scoreFormula}</span></>}
      />

      {/* Top 10 */}
      <Card>
        <CardTitle aside={<TagBadge tag="INFERRED" />}>TOP 10 OPPORTUNITIES</CardTitle>
        <ol className="grid gap-3 md:grid-cols-2">
          {top.map((o, i) => (
            <li key={o.id} className="flex items-start gap-3 rounded-xl border border-[var(--line)] p-3.5">
              <span className="font-serif text-2xl leading-none text-cocoa-300 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold leading-snug text-ink">{o.title}</p>
                <p className="mt-1 text-[11.5px] text-ink-3">
                  {o.area === "callypso" ? "Callypso Engage" : "Other AI / automation"} · {o.group}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <PriorityBadge p={o.priority} />
                <span className="text-[11px] tabular-nums text-ink-3">{opportunityScore(o)}/27</span>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardTitle>Öncelik dağılımı</CardTitle>
          <PriorityStack data={prioData} />
        </Card>
        <Card className="lg:col-span-3">
          <CardTitle>Impact × Implementation difficulty</CardTitle>
          <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-1.5 text-[11px]">
            <span />
            {(["Low", "Medium", "High"] as Level[]).map((d) => (
              <span key={d} lang="en" className="pb-1 text-center font-semibold uppercase tracking-wider text-ink-3">
                Zorluk: {d}
              </span>
            ))}
            {levels.map((imp) => (
              <div key={imp} className="contents">
                <span lang="en" className="flex items-center pr-2 font-semibold uppercase tracking-wider text-ink-3 [writing-mode:vertical-rl] rotate-180 sm:[writing-mode:horizontal-tb] sm:rotate-0">
                  Impact: {imp}
                </span>
                {(["Low", "Medium", "High"] as Level[]).map((d) => {
                  const cell = opportunities.filter((o) => o.impact === imp && o.difficulty === d);
                  const sweet = imp === "High" && d === "Low";
                  return (
                    <div
                      key={d}
                      className={clsx("min-h-[84px] rounded-lg p-2", sweet ? "bg-cocoa-800" : imp === "High" || d === "Low" ? "bg-cocoa-100" : "bg-cocoa-50")}
                    >
                      <div className="flex flex-wrap gap-1">
                        {cell.map((o) => (
                          <span
                            key={o.id}
                            title={o.title}
                            className={clsx(
                              "rounded px-1.5 py-0.5 font-mono text-[10.5px]",
                              sweet ? "bg-white/15 text-white" : o.area === "callypso" ? "bg-white text-cocoa-800" : "bg-gold-500/25 text-cocoa-900",
                            )}
                          >
                            {o.id}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-ink-3">Koyu hücre = quick-win bölgesi (yüksek etki, düşük zorluk). C = Callypso Engage, O = Other. Kod üzerine gelince başlık görünür.</p>
        </Card>
      </div>

      {/* Full table */}
      <Card className="mt-4">
        <CardTitle
          aside={
            <FilterRow
              label="Alan"
              value={area}
              onChange={setArea}
              options={[
                { value: "all", label: "Tümü" },
                { value: "callypso", label: "Callypso" },
                { value: "other", label: "Other" },
              ]}
            />
          }
        >
          Opportunity prioritization table
        </CardTitle>
        <div className="table-wrap">
          <table className="tbl !min-w-[900px]">
            <thead lang="en">
              <tr>
                <th>Opportunity</th>
                <th>Impact</th>
                <th>Difficulty</th>
                <th>Integration</th>
                <th>Sales potential</th>
                <th>Revenue impact</th>
                <th>Priority</th>
                <th className="text-right">Skor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o) => (
                <tr key={o.id}>
                  <td className="font-medium">
                    <span className="mr-1.5 font-mono text-[11px] text-ink-3">{o.id}</span>
                    {o.title}
                  </td>
                  <td><LevelMeter level={o.impact} /></td>
                  <td><LevelMeter level={o.difficulty} invert /></td>
                  <td><LevelMeter level={o.integrationLevel} invert /></td>
                  <td><LevelMeter level={o.sales} /></td>
                  <td><LevelMeter level={o.revenue} /></td>
                  <td><PriorityBadge p={o.priority} /></td>
                  <td className="text-right font-semibold tabular-nums">{opportunityScore(o)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12px] text-ink-3">Revenue impact sayısal değildir: sipariş/trafik verisi olmadan TL tahmini yapılmadı.</p>
      </Card>

      {/* Timeline */}
      <div className="mt-12">
        <p lang="en" className="eyebrow">Toplantıda önerilecek yol haritası</p>
        <h3 className="mt-1 font-serif text-2xl text-ink">0–30 / 30–90 / 90+ gün</h3>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {roadmap.map((r, i) => (
          <Card key={r.phase} className={clsx(i === 0 && "ring-2 ring-cocoa-800/80")}>
            <p className="font-mono text-[12px] font-semibold text-cocoa-500">{r.phase}</p>
            <p className="mt-1 font-serif text-2xl text-ink">{r.title}</p>
            <p className="mt-1 text-[12.5px] text-ink-2">{r.window}</p>
            <ul className="mt-4 space-y-2">
              {r.items.map((it) => {
                const o = oppById.get(it.id);
                return (
                  <li key={it.id} className="flex items-start justify-between gap-2 rounded-lg bg-cocoa-50 px-3 py-2">
                    <span className="text-[13px] text-ink">
                      <span className="mr-1.5 font-mono text-[10.5px] text-ink-3">{it.id}</span>
                      {it.text}
                    </span>
                    {o && <PriorityBadge p={o.priority} />}
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>

      {/* Occasion calendar */}
      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} className="text-cocoa-600" /> Özel gün takvimi — otomasyonların zamanlaması (26.09.2026’dan itibaren)
          </span>
        </CardTitle>
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ol className="flex min-w-[900px] gap-2">
            {occasions.map((o) => {
              const days = Math.round((new Date(o.date + "T00:00:00").getTime() - RESEARCH_DATE.getTime()) / 86400000);
              const count = categoryCounts.find((c) => c.raw === o.category)?.count ?? 0;
              return (
                <li key={o.name} className="flex-1 rounded-xl border border-[var(--line)] p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-cocoa-500">
                    {new Date(o.date).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "2-digit" })}
                    {o.approx && " ≈"}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold leading-snug text-ink">{o.name}</p>
                  <p className="mt-2 text-[11.5px] text-ink-2">{days} gün sonra</p>
                  <p className="text-[11.5px] text-ink-3">{count} ürün</p>
                  <p className="mt-2 text-[11px] text-cocoa-700">Kampanya: T-21 / T-5 / T-2</p>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-3 text-[12px] text-ink-3">≈ Dini bayram tarihleri tahminidir, Diyanet takvimiyle teyit edilmelidir. Ürün adetleri kategori etiketlerinden (VERIFIED).</p>
      </Card>
    </section>
  );
}
