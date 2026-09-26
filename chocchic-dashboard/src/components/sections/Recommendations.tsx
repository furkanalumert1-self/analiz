"use client";

import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { Card, CardTitle, SectionHeader, TagBadge } from "../ui";
import { productById, tl } from "@/lib/data";
import { crossSells } from "@/data/strategy";
import type { Product, Tag } from "@/lib/types";

const roleStyle: Record<string, string> = {
  "Add-on": "bg-emerald-50 text-emerald-800 border-emerald-200",
  Upsell: "bg-cocoa-800 text-white border-cocoa-800",
  "Cross-sell": "bg-cocoa-50 text-cocoa-800 border-cocoa-200",
  Bundle: "bg-amber-50 text-amber-900 border-amber-200",
  "Next occasion": "bg-sky-50 text-sky-800 border-sky-200",
  "Satın alınan": "bg-white text-ink-2 border-[var(--line)]",
};

const engineLogic: { logic: string; source: string; tag: Tag }[] = [
  { logic: "Viewed together", source: "Sitedeki 'Benzer Ürünler' blokları (ürün başına ≤6) başlangıç sinyali olarak alındı", tag: "VERIFIED" },
  { logic: "Complementary products", source: "Aynı özel gün + farklı format + düşük fiyatlı add-on (Tek Gül 64,99 TL, Mini Happy Birthday 135 TL)", tag: "INFERRED" },
  { logic: "Category affinity", source: "Ürünlerin çoklu kategori etiketleri (ör. Dört Renkli Gül: 5 özel gün)", tag: "VERIFIED" },
  { logic: "Bought after", source: "Yaşam olayı zinciri (bebek → misafir ikramı → ilk yaş günü)", tag: "INFERRED" },
  { logic: "Frequently bought together", source: "Sipariş satırları gerekli", tag: "REQUIRES DATA" },
  { logic: "Customer history / previous purchase", source: "Müşterinin geçmiş özel günleri — sipariş geçmişi gerekli", tag: "REQUIRES DATA" },
  { logic: "RFM", source: "VIP'e premium (Pinyata, Mesajlı Şişe), low-value'ya add-on", tag: "REQUIRES DATA" },
];

function Node({ p, role }: { p?: Product; role?: string }) {
  if (!p) return null;
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-[var(--line)] bg-white p-2 pr-3 transition hover:border-cocoa-300"
    >
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt="" className="h-11 w-11 shrink-0 rounded-lg object-cover" loading="lazy" />
      )}
      <div className="min-w-0">
        {role && <span className={clsx("chip mb-0.5 !py-0 !text-[10px]", roleStyle[role])}>{role}</span>}
        <p className="truncate text-[12.5px] font-medium text-ink group-hover:underline">{p.name}</p>
        <p className="text-[11.5px] tabular-nums text-ink-3">{tl(p.price)}</p>
      </div>
    </a>
  );
}

export default function Recommendations() {
  return (
    <section>
      <SectionHeader
        no="07 — Product Recommendations"
        title={`${crossSells.length} gerçek ürün ilişkisi: A → B → C`}
        intro="Her ilişki ChocChic kataloğundaki gerçek ürünler arasında kuruldu; neden birlikte satılabileceği ve ne zaman önerileceği belirtildi. Sipariş verisi geldiğinde 'frequently bought together' ile doğrulanmalıdır."
      />

      <Card className="mb-4">
        <CardTitle>Öneri motoru mantıkları</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engineLogic.map((e) => (
            <div key={e.logic} className="rounded-xl bg-cocoa-50 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-ink">{e.logic}</p>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-ink-2">{e.source}</p>
              <TagBadge tag={e.tag} className="mt-2" />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 xl:grid-cols-2">
        {crossSells.map((c) => {
          const src = productById.get(c.sourceId);
          return (
            <Card key={c.sourceId} className="!p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-cocoa-50 px-1.5 py-0.5 text-[11px] text-cocoa-700">{c.logic}</span>
                <TagBadge tag="INFERRED" />
              </div>
              <div className="mt-3 grid items-center gap-2 sm:grid-cols-[1fr_auto_1.2fr]">
                <Node p={src} role="Satın alınan" />
                <ArrowRight size={18} className="mx-auto rotate-90 text-cocoa-400 sm:rotate-0" aria-hidden />
                <div className="grid gap-2">
                  {c.targets.map((t) => (
                    <Node key={t.id} p={productById.get(t.id)} role={t.role} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-2">
                <span className="font-semibold text-ink">Neden? </span>
                {c.why}
              </p>
              <p className="mt-1 text-[12px] text-cocoa-700">Zamanlama: {c.timing}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
