"use client";

import { useState } from "react";
import clsx from "clsx";
import { Clock, GitBranch, LogOut, Mail, MessageSquare, MousePointerClick, Phone, Target, Zap } from "lucide-react";
import { Card, CardTitle, LevelMeter, ProductLink, SectionHeader, TagBadge } from "../ui";
import { productById, tl } from "@/lib/data";
import { browseScenarios, cartTimingOptions, journeys, noDiscountLevers, repeatWindows, winback } from "@/data/strategy";

function channelIcon(c: string) {
  const l = c.toLowerCase();
  if (l.includes("whatsapp") && !l.includes("sms")) return MessageSquare;
  if (l.includes("sms")) return Phone;
  if (l.includes("email")) return Mail;
  if (l.includes("event") || l.includes("form")) return Zap;
  if (l.includes("retarget")) return Target;
  return MousePointerClick;
}

export default function Journeys() {
  const [id, setId] = useState(journeys[0].id);
  const j = journeys.find((x) => x.id === id)!;
  const product = j.productId ? productById.get(j.productId) : undefined;

  return (
    <section>
      <SectionHeader
        no="06 — Automation Journeys"
        title="Görsel workflow'lar — gerçek ChocChic ürünleriyle"
        intro="Her akış tetikleyici → bekleme → kanal → mesaj → çıkış kuralı şeklinde tasarlandı. Yeşil 'İndirimsiz' etiketi, adımın kupon içermediğini gösterir."
      />

      <div className="no-print -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {journeys.map((x) => (
          <button key={x.id} type="button" className="btn-filter whitespace-nowrap" aria-pressed={x.id === id} onClick={() => setId(x.id)}>
            {x.name.split(" — ")[0]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <p lang="en" className="eyebrow">Journey</p>
          <h3 className="mt-1 font-serif text-2xl leading-snug text-ink">{j.name}</h3>
          <div className="mt-3">
            <TagBadge tag={j.tag} />
          </div>
          {product && (
            <div className="mt-5 flex gap-3 rounded-xl bg-cocoa-50 p-3">
              {product.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.image} alt={product.name} className="h-16 w-16 shrink-0 rounded-lg object-cover" loading="lazy" />
              )}
              <div className="min-w-0 text-[13px]">
                <ProductLink p={product} showPrice={false} className="font-semibold" />
                <p className="text-ink-2">{tl(product.price)}</p>
                <p className="text-[11.5px] text-ink-3">{product.categories.join(" · ")}</p>
              </div>
            </div>
          )}
          <dl className="mt-5 space-y-3 text-[13px]">
            <div>
              <dt className="text-ink-3">Tetikleyici</dt>
              <dd className="font-medium text-ink">{j.trigger}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Hedef</dt>
              <dd className="font-medium text-ink">{j.goal}</dd>
            </div>
            <div className="flex items-start gap-2 rounded-lg border border-dashed border-cocoa-200 p-2.5 text-[12.5px] text-ink-2">
              <LogOut size={14} className="mt-0.5 shrink-0 text-cocoa-500" />
              {j.exitRule}
            </div>
          </dl>
        </Card>

        <Card className="lg:col-span-2">
          <CardTitle>Workflow</CardTitle>
          <ol className="relative">
            {j.steps.map((s, i) => {
              const Icon = channelIcon(s.channel);
              const last = i === j.steps.length - 1;
              return (
                <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                  {!last && <span aria-hidden className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-cocoa-200" />}
                  <div className={clsx("flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2", i === 0 ? "border-cocoa-800 bg-cocoa-800 text-white" : "border-cocoa-200 bg-white text-cocoa-700")}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0 flex-1 rounded-xl border border-[var(--line)] p-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-cocoa-50 px-2 py-0.5 text-[11.5px] font-semibold text-cocoa-800">
                        <Clock size={11} /> {s.delay === "0" ? "Anında" : s.delay}
                      </span>
                      <span className="text-[12px] font-medium text-ink-2">{s.channel}</span>
                      {s.noDiscount && <span className="chip border-emerald-200 bg-emerald-50 text-emerald-800">İndirimsiz</span>}
                    </div>
                    <p className="mt-2 text-[14px] font-semibold text-ink">{s.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-2">{s.message}</p>
                    {s.condition && (
                      <p className="mt-2 flex items-center gap-1.5 text-[12px] text-amber-800">
                        <GitBranch size={12} /> Koşul: {s.condition}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Card>
      </div>

      {/* Cart timing */}
      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="INFERRED" />}>Sepet terk — tetikleme zamanı seçenekleri</CardTitle>
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Zaman</th>
                <th>Kullanım</th>
                <th>Artı</th>
                <th>Eksi</th>
                <th>ChocChic önerisi</th>
              </tr>
            </thead>
            <tbody>
              {cartTimingOptions.map((c) => (
                <tr key={c.timing}>
                  <td className="whitespace-nowrap font-semibold">{c.timing}</td>
                  <td className="text-ink-2">{c.use}</td>
                  <td className="text-ink-2">{c.pro}</td>
                  <td className="text-ink-2">{c.con}</td>
                  <td className="font-medium text-cocoa-800">{c.recommended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle>İndirim vermeden sepeti kurtaran kaldıraçlar</CardTitle>
          <ul className="space-y-3">
            {noDiscountLevers.map((l) => (
              <li key={l.lever} className="flex items-start justify-between gap-3 border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-[13.5px] font-semibold text-ink">{l.lever}</p>
                  <p className="text-[12.5px] text-ink-2">{l.example}</p>
                </div>
                <TagBadge tag={l.tag} />
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle aside={<TagBadge tag="INFERRED" />}>Product view → no purchase senaryoları</CardTitle>
          <ul className="space-y-3">
            {browseScenarios.map((b) => (
              <li key={b.scenario} className="border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cocoa-600">{b.tactic}</p>
                <p className="mt-0.5 text-[13px] text-ink">{b.scenario}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Repeat purchase */}
      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="REQUIRES DATA" />}>Repeat purchase prediction — başlangıç varsayımları</CardTitle>
        <p className="-mt-2 mb-4 rounded-lg bg-slate-50 p-3 text-[12.5px] text-slate-700">
          Bu tahmin için gerçek sipariş verisi gereklidir. Aşağıdaki pencereler ürün kullanım yapısı ve özel gün takvimine göre önerilen başlangıç
          değerleridir; ilk 90 günde gerçek tekrar süreleriyle kalibre edilmelidir.
        </p>
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Ürün / grup</th>
                <th>Tahmini döngü</th>
                <th>Hatırlatma</th>
                <th>Dayanak</th>
              </tr>
            </thead>
            <tbody>
              {repeatWindows.map((r) => (
                <tr key={r.item}>
                  <td>
                    <p className="font-medium">{r.item}</p>
                    <div className="mt-1 flex flex-wrap gap-x-3 text-[12px]">
                      {r.productIds.map((pid) => (
                        <ProductLink key={pid} p={productById.get(pid)} />
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap font-semibold text-cocoa-800">{r.cycle}</td>
                  <td className="text-ink-2">{r.reminder}</td>
                  <td className="text-ink-2">{r.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Win-back */}
      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="REQUIRES DATA" />}>Win-back — Trigger → Segment → Message → Channel → Offer → Timing → Impact</CardTitle>
        <div className="table-wrap">
          <table className="tbl !min-w-[960px]">
            <thead>
              <tr>
                <th>Tetikleyici</th>
                <th>Segment</th>
                <th>Mesaj</th>
                <th>Kanal</th>
                <th>Teklif</th>
                <th>Zamanlama</th>
                <th>Etki</th>
              </tr>
            </thead>
            <tbody>
              {winback.map((w) => (
                <tr key={w.window}>
                  <td className="whitespace-nowrap font-semibold">{w.window}</td>
                  <td>{w.segment}</td>
                  <td className="text-ink-2">{w.message}</td>
                  <td>{w.channel}</td>
                  <td className="text-ink-2">{w.offer}</td>
                  <td className="text-ink-2">{w.timing}</td>
                  <td>
                    <LevelMeter level={w.impact} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}
