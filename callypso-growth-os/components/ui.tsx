"use client";

import { useState } from "react";
import type { Priority, Status } from "@/lib/data";
import { STATUS_LABEL } from "@/lib/data";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-line bg-surface p-4 sm:p-5 ${className}`}>{children}</div>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {subtitle && <p className="mt-1 max-w-3xl text-sm text-muted">{subtitle}</p>}
    </div>
  );
}

const statusTone: Record<Status, string> = {
  dogrulandi: "bg-ok-soft text-ok",
  cikarim: "bg-warn-soft text-warn",
  ornek: "bg-accent-soft text-accent",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${statusTone[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

const prioTone: Record<Priority, string> = {
  P0: "bg-danger-soft text-danger",
  P1: "bg-warn-soft text-warn",
  P2: "bg-surface-2 text-muted",
};

export function PriorityBadge({ p }: { p: Priority }) {
  return <span className={`inline-flex rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${prioTone[p]}`}>{p}</span>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-md bg-surface-2 px-1.5 py-0.5 text-[11px] text-muted">{children}</span>;
}

export function Progress({ value, label }: { value: number; label?: string }) {
  const pct = Math.round(value * 100);
  return (
    <div>
      {label && (
        <div className="mb-1 flex justify-between text-xs text-muted">
          <span>{label}</span>
          <span className="tabular-nums">%{pct}</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Check({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: React.ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-sm">
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={checked ? "text-muted line-through" : ""}>{label}</span>
    </label>
  );
}

export function NoteBox({ value, onChange, placeholder = "Not ekle…" }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={2}
      className="mt-2 w-full resize-y rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none placeholder:text-muted focus:border-accent"
    />
  );
}

export function Score({ value, max = 5, invert = false }: { value: number; max?: number; invert?: boolean }) {
  const good = invert ? max + 1 - value : value;
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value}/${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`h-2 w-2 rounded-full ${i < value ? (good >= 4 ? "bg-ok" : good >= 3 ? "bg-warn" : "bg-danger") : "bg-surface-2"}`} />
      ))}
    </span>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        });
      }}
      className="rounded-md border border-line px-2 py-1 text-xs text-muted hover:text-ink"
    >
      {done ? "Kopyalandı" : "Kopyala"}
    </button>
  );
}
