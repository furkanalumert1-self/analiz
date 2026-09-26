"use client";

import { Card, Expandable, LevelMeter, PriorityBadge, ProductLink, TagBadge } from "./ui";
import { productById } from "@/lib/data";
import { opportunityScore } from "@/data/opportunities";
import type { Opportunity } from "@/lib/types";

const fields: [keyof Opportunity, string][] = [
  ["trigger", "1 · Tetikleyici"],
  ["segment", "2 · Hedef segment"],
  ["action", "3 · Mesaj / aksiyon"],
  ["channels", "4 · Kanal"],
  ["timing", "5 · Zamanlama"],
  ["benefit", "6 · Beklenen ticari fayda"],
  ["dataNeeded", "7 · Gerekli veri"],
  ["integration", "8 · Gerekli entegrasyon"],
];

export default function OpportunityCard({ o, defaultOpen }: { o: Opportunity; defaultOpen?: boolean }) {
  return (
    <Card className="!p-5">
      <Expandable
        defaultOpen={defaultOpen}
        summary={
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-ink-3">{o.id}</span>
              <span className="rounded-md bg-cocoa-50 px-1.5 py-0.5 text-[11px] text-cocoa-700">{o.group}</span>
              <PriorityBadge p={o.priority} />
              <TagBadge tag={o.tag} />
            </div>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-ink">{o.title}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink-2">
              <span className="font-medium text-cocoa-700">Örnek: </span>
              {o.example}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-ink-3">
              <span className="flex items-center gap-1.5">Impact <LevelMeter level={o.impact} /></span>
              <span className="flex items-center gap-1.5">Sales <LevelMeter level={o.sales} /></span>
              <span className="flex items-center gap-1.5">Difficulty <LevelMeter level={o.difficulty} invert /></span>
            </div>
          </div>
        }
      >
        <dl className="grid gap-x-6 gap-y-3 border-t border-[var(--line)] pt-4 text-[13px] sm:grid-cols-2">
          {fields.map(([k, label]) => (
            <div key={k}>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">{label}</dt>
              <dd className="mt-0.5 text-ink">{Array.isArray(o[k]) ? (o[k] as string[]).join(" · ") : String(o[k])}</dd>
            </div>
          ))}
          <div className="sm:col-span-2">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">9 · Örnek ChocChic senaryosu</dt>
            <dd className="mt-0.5 text-ink">{o.example}</dd>
            {o.products && (
              <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px]">
                {o.products.map((id) => (
                  <ProductLink key={id} p={productById.get(id)} />
                ))}
              </dd>
            )}
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">10 · Öncelik & skor</dt>
            <dd className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-6">
              {(
                [
                  ["Impact", <LevelMeter key="i" level={o.impact} />],
                  ["Difficulty", <LevelMeter key="d" level={o.difficulty} invert />],
                  ["Integration", <LevelMeter key="n" level={o.integrationLevel} invert />],
                  ["Sales potential", <LevelMeter key="s" level={o.sales} />],
                  ["Revenue impact", <LevelMeter key="r" level={o.revenue} />],
                  ["Priority · skor", <span key="p" className="flex items-center gap-2"><PriorityBadge p={o.priority} /><span className="text-[12px] tabular-nums text-ink-2">{opportunityScore(o)}/27</span></span>],
                ] as [string, React.ReactNode][]
              ).map(([l, v]) => (
                <div key={l}>
                  <p className="text-[11px] text-ink-3">{l}</p>
                  <div className="mt-1">{v}</div>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </Expandable>
    </Card>
  );
}
