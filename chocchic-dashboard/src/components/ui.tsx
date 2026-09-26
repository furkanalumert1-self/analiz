"use client";

import { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ShieldCheck, Lightbulb, Database, ExternalLink } from "lucide-react";
import type { Level, Priority, Product, Tag } from "@/lib/types";
import { tl } from "@/lib/data";

export function SectionHeader({ no, title, intro }: { no: string; title: string; intro?: React.ReactNode }) {
  return (
    <header className="mb-8 max-w-3xl">
      <p lang="en" className="eyebrow">{no}</p>
      <h2 className="h-section mt-2">{title}</h2>
      {intro && <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{intro}</p>}
    </header>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("card p-5 sm:p-6", className)}>{children}</div>;
}

export function CardTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <h3 className="h-card">{children}</h3>
      {aside}
    </div>
  );
}

const tagStyle: Record<Tag, { cls: string; icon: React.ElementType; label: string }> = {
  VERIFIED: { cls: "border-emerald-200 bg-emerald-50 text-emerald-800", icon: ShieldCheck, label: "Verified" },
  INFERRED: { cls: "border-amber-200 bg-amber-50 text-amber-800", icon: Lightbulb, label: "Inferred" },
  "REQUIRES DATA": { cls: "border-slate-300 bg-slate-50 text-slate-700", icon: Database, label: "Requires data" },
};

export function TagBadge({ tag, className }: { tag: Tag; className?: string }) {
  const s = tagStyle[tag];
  const Icon = s.icon;
  return (
    <span className={clsx("chip whitespace-nowrap", s.cls, className)} title={tag}>
      <Icon size={11} strokeWidth={2.4} aria-hidden />
      {s.label}
    </span>
  );
}

const priorityStyle: Record<Priority, string> = {
  P0: "border-cocoa-800 bg-cocoa-800 text-white",
  P1: "border-cocoa-600 bg-cocoa-600 text-white",
  P2: "border-cocoa-300 bg-cocoa-100 text-cocoa-800",
  P3: "border-[var(--line)] bg-white text-ink-2",
};

export function PriorityBadge({ p }: { p: Priority }) {
  return <span className={clsx("chip font-semibold", priorityStyle[p])}>{p}</span>;
}

const levelDots: Record<Level, number> = { Low: 1, Medium: 2, High: 3 };
const levelTr: Record<Level, string> = { Low: "Low", Medium: "Medium", High: "High" };

/** Three-dot meter with the word always visible (never color alone). */
export function LevelMeter({ level, invert }: { level: Level; invert?: boolean }) {
  const n = levelDots[level];
  const good = invert ? n === 1 : n === 3;
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] text-ink-2">
      <span className="inline-flex gap-0.5" aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={clsx("h-1.5 w-3 rounded-full", i <= n ? (good ? "bg-cocoa-700" : "bg-cocoa-400") : "bg-cocoa-100")}
          />
        ))}
      </span>
      {levelTr[level]}
    </span>
  );
}

export function Stat({ label, value, sub, tag }: { label: string; value: React.ReactNode; sub?: string; tag?: Tag }) {
  return (
    <div className="card flex flex-col justify-between p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[12px] font-medium text-ink-2">{label}</p>
        {tag && <TagBadge tag={tag} className="scale-90 origin-top-right" />}
      </div>
      <p className="mt-3 font-serif text-3xl tabular-nums text-ink sm:text-[34px]">{value}</p>
      {sub && <p className="mt-1 text-[12px] text-ink-3">{sub}</p>}
    </div>
  );
}

export function Expandable({
  summary,
  children,
  defaultOpen,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div className="min-w-0 flex-1">{summary}</div>
        <ChevronDown size={18} className={clsx("mt-1 shrink-0 text-ink-3 transition", open && "rotate-180")} />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function FilterRow<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <span className="mr-1 text-[11px] font-semibold uppercase tracking-wider text-ink-3">{label}</span>
      {options.map((o) => (
        <button key={o.value} type="button" className="btn-filter" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ProductLink({ p, showPrice = true, className }: { p?: Product; showPrice?: boolean; className?: string }) {
  if (!p) return null;
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className={clsx("group inline-flex items-baseline gap-1 text-ink decoration-cocoa-300 underline-offset-2 hover:underline", className)}
    >
      <span>{p.name}</span>
      {showPrice && <span className="whitespace-nowrap text-ink-3">· {tl(p.price)}</span>}
      <ExternalLink size={11} className="shrink-0 self-center text-ink-3 opacity-0 transition group-hover:opacity-100" aria-hidden />
    </a>
  );
}

export function StatusPill({ status, stock }: { status: Product["status"]; stock: number }) {
  const map = {
    in_stock: { cls: "border-emerald-200 bg-emerald-50 text-emerald-800", label: `Stokta (${stock})` },
    low: { cls: "border-amber-200 bg-amber-50 text-amber-800", label: `Düşük stok (${stock})` },
    quote: { cls: "border-sky-200 bg-sky-50 text-sky-800", label: "0 TL · teklif" },
    out_of_stock: { cls: "border-rose-200 bg-rose-50 text-rose-800", label: "Tükendi" },
  } as const;
  const s = map[status];
  return <span className={clsx("chip whitespace-nowrap", s.cls)}>{s.label}</span>;
}

export function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[12px] text-ink-2">
      <TagBadge tag="VERIFIED" /> <span className="mr-2">Site/API üzerinden doğrulandı</span>
      <TagBadge tag="INFERRED" /> <span className="mr-2">Mevcut veriden çıkarım / öneri</span>
      <TagBadge tag="REQUIRES DATA" /> <span>Müşteri verisi olmadan kesinleşemez</span>
    </div>
  );
}
