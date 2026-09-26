"use client";

import { useState } from "react";
import clsx from "clsx";
import { Mail, MessageSquare, Monitor, Phone } from "lucide-react";
import { Card, CardTitle, PriorityBadge, SectionHeader, TagBadge } from "../ui";
import { opportunities } from "@/data/opportunities";
import { lifecycle } from "@/data/strategy";

const funnel = [
  { stage: "Visitor", width: 100, ids: ["O01", "O02", "O07", "C10"], note: "Reklam trafiği bugün Trendyol'a gidiyor; siteye gelen ziyaretçiyi tanımlama katmanı yok." },
  { stage: "Product View", width: 88, ids: ["C03", "C04", "C19", "O15"], note: "256 ürün, 33 kategori — özel gün niyeti kategori gezinmesinden okunabilir." },
  { stage: "Cart", width: 74, ids: ["C01", "C02", "C12", "O16"], note: "44 ürün kişiselleştirme istiyor: fotoğraf/logo/isim eksikliği terk sebebi." },
  { stage: "Purchase", width: 60, ids: ["C06", "O04", "O06"], note: "Telefon zorunlu; WhatsApp ile dosya toplama bugün manuel." },
  { stage: "Repeat Purchase", width: 48, ids: ["C05", "C07", "C08", "C18"], note: "Tekrar = bir sonraki özel gün. Hatırlatıcı ve takvim akışları." },
  { stage: "VIP", width: 38, ids: ["C14", "O11", "C09"], note: "B2C çoklu özel gün alıcıları + kurumsal hesaplar." },
  { stage: "At Risk", width: 30, ids: ["C13", "O14"], note: "Beklenen özel gün penceresi kaçtıysa risk." },
  { stage: "Win-back", width: 24, ids: ["C13", "C17"], note: "Önce indirimsiz; teklif yalnızca holdout'lu son adımda." },
];

const oppById = new Map(opportunities.map((o) => [o.id, o]));

export default function Lifecycle() {
  const [active, setActive] = useState(3);
  const f = funnel[active];

  return (
    <section>
      <SectionHeader
        no="04 — Customer Lifecycle"
        title="Ziyaretçiden win-back'e: her aşamada hangi otomasyon?"
        intro="Huni genişlikleri kavramsaldır — aşama hacimleri ve dönüşüm oranları sipariş/analytics verisi olmadan hesaplanamaz (Requires data). Bir aşamaya tıklayarak o aşamadaki otomasyonları görün."
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardTitle aside={<TagBadge tag="REQUIRES DATA" />}>Lifecycle funnel</CardTitle>
          <div className="flex flex-col items-center gap-1.5">
            {funnel.map((s, i) => (
              <button
                key={s.stage}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                style={{ width: `${s.width}%` }}
                className={clsx(
                  "rounded-lg px-3 py-2.5 text-center text-[13px] font-medium transition",
                  active === i ? "bg-cocoa-800 text-white shadow-card" : i >= 6 ? "bg-amber-50 text-amber-900 hover:bg-amber-100" : "bg-cocoa-100 text-cocoa-800 hover:bg-cocoa-200",
                )}
              >
                {s.stage}
              </button>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-3">
          <p lang="en" className="eyebrow">Aşama</p>
          <h3 className="mt-1 font-serif text-2xl text-ink">{f.stage}</h3>
          <p className="mt-2 text-[13.5px] text-ink-2">{f.note}</p>
          <div className="mt-5 space-y-3">
            {f.ids.map((id) => {
              const o = oppById.get(id)!;
              return (
                <div key={id} className="rounded-xl border border-[var(--line)] p-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-ink-3">{o.id}</span>
                    <p className="text-[14px] font-semibold text-ink">{o.title}</p>
                    <PriorityBadge p={o.priority} />
                    <span className={clsx("chip", o.area === "callypso" ? "border-cocoa-200 bg-cocoa-50 text-cocoa-800" : "border-amber-200 bg-amber-50 text-amber-900")}>
                      {o.area === "callypso" ? "Callypso Engage" : "Other AI"}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-ink-2">
                    <span className="text-ink-3">Tetikleyici:</span> {o.trigger}
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-2">
                    <span className="text-ink-3">Kanal / zamanlama:</span> {o.channels.join(", ")} · {o.timing}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="INFERRED" />}>Lifecycle communication map — kanal kullanımı</CardTitle>
        <div className="table-wrap">
          <table className="tbl !min-w-[1000px]">
            <thead>
              <tr>
                <th>Aşama</th>
                <th>Hedef</th>
                <th>
                  <Mail size={12} className="mr-1 inline" /> Email
                </th>
                <th>
                  <Phone size={12} className="mr-1 inline" /> SMS
                </th>
                <th>
                  <MessageSquare size={12} className="mr-1 inline" /> WhatsApp*
                </th>
                <th>
                  <Monitor size={12} className="mr-1 inline" /> Onsite
                </th>
                <th>KPI</th>
              </tr>
            </thead>
            <tbody>
              {lifecycle.map((l) => (
                <tr key={l.stage}>
                  <td className="font-semibold">{l.stage}</td>
                  <td className="text-ink-2">{l.goal}</td>
                  <td>{l.email}</td>
                  <td>{l.sms}</td>
                  <td className="text-ink-2">{l.whatsapp}</td>
                  <td className="text-ink-2">{l.onsite}</td>
                  <td className="text-[12px] text-cocoa-700">{l.kpi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12px] text-ink-3">* WhatsApp, Callypso Engage kapsamında değilse ayrı bir WhatsApp Business API sağlayıcısı ile (bkz. 09).</p>
      </Card>
    </section>
  );
}
