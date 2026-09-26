"use client";

import { useMemo, useState } from "react";
import { FilterRow, PriorityBadge, SectionHeader, Card, LevelMeter, TagBadge } from "../ui";
import OpportunityCard from "../OpportunityCard";
import { opportunities, opportunityScore } from "@/data/opportunities";
import type { Priority } from "@/lib/types";

const callypso = opportunities.filter((o) => o.area === "callypso");
const groups = ["all", ...Array.from(new Set(callypso.map((o) => o.group)))];

export default function CallypsoOpps() {
  const [group, setGroup] = useState("all");
  const [prio, setPrio] = useState<"all" | Priority>("all");
  const [view, setView] = useState<"cards" | "table">("cards");

  const rows = useMemo(
    () =>
      callypso
        .filter((o) => group === "all" || o.group === group)
        .filter((o) => prio === "all" || o.priority === prio)
        .sort((a, b) => a.priority.localeCompare(b.priority) || opportunityScore(b) - opportunityScore(a)),
    [group, prio],
  );

  return (
    <section>
      <SectionHeader
        no="05 — Callypso Engage Opportunities"
        title={`${callypso.length} otomasyon — her biri gerçek ChocChic ürünüyle`}
        intro="Her kart 10 başlığı içerir: tetikleyici, segment, mesaj/aksiyon, kanal, zamanlama, ticari fayda, gerekli veri, entegrasyon, örnek senaryo ve öncelik. Kartı açarak tüm detayları ve ürün linklerini görün."
      />

      <Card className="mb-4">
        <div className="flex flex-col gap-3">
          <FilterRow label="Alan" value={group} onChange={setGroup} options={groups.map((g) => ({ value: g, label: g === "all" ? "Tümü" : g }))} />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <FilterRow
              label="Öncelik"
              value={prio}
              onChange={setPrio}
              options={[{ value: "all", label: "Tümü" }, ...(["P0", "P1", "P2", "P3"] as Priority[]).map((p) => ({ value: p, label: p }))]}
            />
            <FilterRow label="Görünüm" value={view} onChange={setView} options={[{ value: "cards", label: "Kart" }, { value: "table", label: "Tablo" }]} />
          </div>
        </div>
      </Card>

      {view === "cards" ? (
        <div className="grid gap-4 xl:grid-cols-2">
          {rows.map((o, i) => (
            <OpportunityCard key={o.id} o={o} defaultOpen={i === 0} />
          ))}
        </div>
      ) : (
        <Card>
          <div className="table-wrap">
            <table className="tbl !min-w-[1400px]">
              <thead lang="en">
                <tr>
                  <th>Opportunity</th>
                  <th>Trigger</th>
                  <th>Segment</th>
                  <th>Channel</th>
                  <th>Timing</th>
                  <th>Expected benefit</th>
                  <th>Data needed</th>
                  <th>Integration</th>
                  <th>Impact</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((o) => (
                  <tr key={o.id}>
                    <td className="min-w-[220px] font-medium">
                      <span className="mr-1 font-mono text-[11px] text-ink-3">{o.id}</span>
                      {o.title}
                      <div className="mt-1">
                        <TagBadge tag={o.tag} />
                      </div>
                    </td>
                    <td className="text-ink-2">{o.trigger}</td>
                    <td className="text-ink-2">{o.segment}</td>
                    <td>{o.channels.join(", ")}</td>
                    <td className="text-ink-2">{o.timing}</td>
                    <td className="text-ink-2">{o.benefit}</td>
                    <td className="text-ink-2">{o.dataNeeded}</td>
                    <td className="text-ink-2">{o.integration}</td>
                    <td>
                      <LevelMeter level={o.impact} />
                    </td>
                    <td>
                      <PriorityBadge p={o.priority} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </section>
  );
}
