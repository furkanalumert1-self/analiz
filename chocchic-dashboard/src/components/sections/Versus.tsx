"use client";

import { useState } from "react";
import { Bot, MessageCircle, Star, Trophy, Activity, BarChart3 } from "lucide-react";
import { Card, CardTitle, FilterRow, PriorityBadge, SectionHeader, TagBadge } from "../ui";
import OpportunityCard from "../OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { aiSupportExamples, analyticsKpis, churnFeatures, loyaltyProgram, reviewFlow, whatsappScenarios } from "@/data/strategy";

const callypso = opportunities.filter((o) => o.area === "callypso");
const other = opportunities.filter((o) => o.area === "other");

function Column({ title, subtitle, items, accent }: { title: string; subtitle: string; items: typeof opportunities; accent: string }) {
  return (
    <Card>
      <div className={`-mx-5 -mt-5 mb-4 rounded-t-2xl px-5 py-4 sm:-mx-6 sm:-mt-6 sm:px-6 ${accent}`}>
        <p className="font-serif text-xl">{title}</p>
        <p className="text-[12.5px] opacity-80">{subtitle}</p>
      </div>
      <ul className="divide-y divide-[var(--line)]">
        {items
          .slice()
          .sort((a, b) => a.priority.localeCompare(b.priority))
          .map((o) => (
            <li key={o.id} className="flex items-start justify-between gap-3 py-2.5">
              <div className="min-w-0">
                <p className="text-[13.5px] font-medium text-ink">{o.title}</p>
                <p className="text-[11.5px] text-ink-3">{o.group} · {o.channels.join(", ")}</p>
              </div>
              <PriorityBadge p={o.priority} />
            </li>
          ))}
      </ul>
    </Card>
  );
}

export default function Versus() {
  const [tab, setTab] = useState<"support" | "whatsapp" | "review" | "loyalty" | "analytics">("support");
  return (
    <section>
      <SectionHeader
        no="09 — Callypso Engage vs Other Opportunities"
        title="İki katman: iletişim otomasyonu + AI / altyapı"
        intro="Sol sütun Callypso Engage ile uygulanacak lifecycle iletişimini, sağ sütun Callypso Engage dışındaki AI, WhatsApp, analytics, CRO ve altyapı fırsatlarını gösterir."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Column title="Callypso Engage" subtitle="Email · SMS · segmentation · lifecycle · abandoned cart · win-back" items={callypso} accent="bg-cocoa-800 text-white" />
        <Column title="Other AI / Automation" subtitle="AI support · WhatsApp · recommendation · loyalty · churn · analytics" items={other} accent="bg-gold-500/15 text-cocoa-900" />
      </div>

      <div className="mt-12">
        <p lang="en" className="eyebrow">Callypso Engage dışındaki fırsatlar</p>
        <h3 className="mt-1 font-serif text-2xl text-ink">Detaylar</h3>
      </div>

      <Card className="mt-5">
        <FilterRow
          label="Konu"
          value={tab}
          onChange={setTab}
          options={[
            { value: "support", label: "AI Customer Support" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "review", label: "Review" },
            { value: "loyalty", label: "Loyalty" },
            { value: "analytics", label: "RFM · Churn · Analytics" },
          ]}
        />
        <div className="mt-6">
          {tab === "support" && (
            <div>
              <CardTitle aside={<Bot size={18} className="text-cocoa-600" />}>AI asistan — gerçek ürün bilgisiyle örnek cevaplar</CardTitle>
              <div className="grid gap-3 md:grid-cols-2">
                {aiSupportExamples.map((e) => (
                  <div key={e.q} className="rounded-xl border border-[var(--line)] p-4">
                    <p className="text-[13px] font-semibold text-ink">“{e.q}”</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{e.a}</p>
                    <TagBadge tag={e.tag} className="mt-2" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12.5px] text-ink-3">
                Kapsam: ürün soruları, karşılaştırma, kullanım, kargo, sipariş durumu, iade, stok, kampanya, ürün önerisi. Sipariş durumu ve kargo için IdeaSoft
                sipariş API’si gerekir.
              </p>
            </div>
          )}
          {tab === "whatsapp" && (
            <div>
              <CardTitle aside={<MessageCircle size={18} className="text-cocoa-600" />}>WhatsApp Business senaryoları</CardTitle>
              <div className="table-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Senaryo</th>
                      <th>Akış</th>
                      <th>Not</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {whatsappScenarios.map((w) => (
                      <tr key={w.name}>
                        <td className="font-semibold">{w.name}</td>
                        <td>{w.flow}</td>
                        <td className="text-ink-2">{w.note}</td>
                        <td>
                          <TagBadge tag={w.tag} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {tab === "review" && (
            <div>
              <CardTitle aside={<Star size={18} className="text-gold-500" />}>Review & UGC otomasyonu — Purchase → Delivery → X gün → Review</CardTitle>
              <ol className="grid gap-3 md:grid-cols-5">
                {reviewFlow.map((r, i) => (
                  <li key={r.step} className="rounded-xl bg-cocoa-50 p-4">
                    <p className="text-[11px] font-semibold text-cocoa-500">Adım {i + 1}</p>
                    <p className="mt-1 text-[14px] font-semibold text-ink">{r.step}</p>
                    <p className="mt-1 text-[12.5px] leading-snug text-ink-2">{r.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[13px] text-ink-2">
                Başlangıç noktası: 256 ürünün hiçbirinde görünür yorum yok (VERIFIED). Konuşan / müzikli / pinyata ürünleri “kutu açılış” videosu için ideal —
                olumlu yorumlar reklam creative havuzuna, olumsuzlar destek ekibine akar.
              </p>
            </div>
          )}
          {tab === "loyalty" && (
            <div>
              <CardTitle aside={<Trophy size={18} className="text-gold-500" />}>{loyaltyProgram.name}</CardTitle>
              <div className="grid gap-3 md:grid-cols-3">
                {loyaltyProgram.tiers.map((t, i) => (
                  <div key={t.name} className={`rounded-xl p-4 ${i === 2 ? "bg-cocoa-800 text-white" : i === 1 ? "bg-cocoa-100" : "bg-cocoa-50"}`}>
                    <p className="font-serif text-xl">{t.name}</p>
                    <p className="mt-1 text-[12px] opacity-80">{t.rule}</p>
                    <p className="mt-3 text-[13px]">{t.perks}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-4 grid gap-2 text-[13px] text-ink-2 md:grid-cols-2">
                {loyaltyProgram.mechanics.map((m) => (
                  <li key={m}>• {m}</li>
                ))}
              </ul>
            </div>
          )}
          {tab === "analytics" && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <CardTitle aside={<TagBadge tag="REQUIRES DATA" />}>RFM dashboard</CardTitle>
                <ul className="space-y-2 text-[13px] text-ink-2">
                  <li><b className="text-ink">Recency:</b> son siparişten geçen gün — hediye döngüsü nedeniyle 0–60 / 61–180 / 181–365 / 365+ bantları</li>
                  <li><b className="text-ink">Frequency:</b> 12 aydaki sipariş ve farklı özel gün sayısı</li>
                  <li><b className="text-ink">Monetary:</b> 12 aylık ciro; B2B ayrı eşik</li>
                  <li><b className="text-ink">Görseller:</b> segment dağılımı, segment başı gelir, segmentler arası geçiş matrisi</li>
                </ul>
              </div>
              <div>
                <CardTitle aside={<Activity size={18} className="text-cocoa-600" />}>Churn prediction girdileri</CardTitle>
                <ul className="space-y-2 text-[13px]">
                  {churnFeatures.map((c) => (
                    <li key={c.feature}>
                      <b className="text-ink">{c.feature}</b> <span className="text-ink-2">— {c.why}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <CardTitle aside={<BarChart3 size={18} className="text-cocoa-600" />}>Sales & customer analytics KPI’ları</CardTitle>
                <ul className="divide-y divide-[var(--line)] text-[13px]">
                  {analyticsKpis.map((k) => (
                    <li key={k.kpi} className="flex justify-between gap-3 py-1.5">
                      <span className="font-medium text-ink">{k.kpi}</span>
                      <span className="text-right text-[12px] text-ink-3">{k.source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {other.map((o) => (
          <OpportunityCard key={o.id} o={o} />
        ))}
      </div>
    </section>
  );
}
