"use client";

import { Crown, ShieldAlert } from "lucide-react";
import { Card, CardTitle, ProductLink, SectionHeader, StatusPill, TagBadge } from "../ui";
import { categoryCounts, products } from "@/lib/data";
import { behaviorSegments, campaignMatrix, discountGuardrails, rfmSegments, vipCriteria, vipPlays } from "@/data/strategy";

const tone: Record<number, string> = {
  700: "bg-cocoa-800 text-white",
  650: "bg-cocoa-700 text-white",
  600: "bg-cocoa-600 text-white",
  500: "bg-cocoa-400 text-white",
  400: "bg-cocoa-200 text-cocoa-900",
  350: "bg-amber-100 text-amber-900",
  300: "bg-cocoa-100 text-cocoa-800",
  250: "bg-slate-100 text-slate-700",
};

const productSegments = [
  { name: "Konuşan Çikolata alıcıları", raw: "KONUŞAN ÇİKOLATALAR", use: "Sesli mesaj seven → Müzikli / Pinyata upsell" },
  { name: "Kurumsal (Kutulu + Logolu + Küçük)", raw: "KUTULU KURUMSAL ÜRÜNLER", use: "B2B nurturing, bayram/yılbaşı yeniden sipariş" },
  { name: "Bebek alıcıları", raw: "BEBEK HEDİYE", use: "Yaşam döngüsü: +7 / +40 / +330 gün" },
  { name: "Sevgiliye alıcıları", raw: "SEVGİLİYE HEDİYE", use: "14 Şubat + ilişki yıldönümü" },
  { name: "Öğretmenler Günü alıcıları", raw: "ÖĞRETMENLER GÜNÜ HEDİYE", use: "Her yıl 24 Kasım — okul çağı veli" },
  { name: "Yeni Yıl alıcıları", raw: "YENİ YIL HEDİYE", use: "Kasım lansmanı, kurumsal çapraz satış" },
  { name: "Bayram alıcıları", raw: "BAYRAM HEDİYE", use: "≈ 6 ayda bir, ikram kutuları" },
  { name: "Taraftar alıcıları", raw: "TARAFTAR ÇİKOLATA", use: "Derbi / sezon başı / Babalar Günü" },
  { name: "Atıştırmalık (kendine alan)", raw: "ATIŞTIRMALIK ÇİKOLATA", use: "Tek gerçek tüketim döngüsü: 21–30 gün" },
  { name: "Fotoğraflı / kişiselleştirilmiş", raw: "FOTOĞRAFLI ÇİKOLATA", use: "Kişiselleştirme akışları, UGC" },
];

export default function Segmentation() {
  const stockWatch = products.filter((p) => p.status === "out_of_stock" || p.status === "low");
  return (
    <section>
      <SectionHeader
        no="08 — Segmentation & Campaigns"
        title="RFM, davranış ve ürün bazlı segmentler — hediye döngüsüne uyarlandı"
        intro="Segment tanımları ChocChic'in hediye odaklı yapısına göre uyarlandı (klasik RFM'deki 30 günlük recency yerine yıllık özel gün döngüsü). Segment büyüklükleri sipariş geçmişi olmadan hesaplanamaz."
      />

      <Card>
        <CardTitle aside={<TagBadge tag="REQUIRES DATA" />}>RFM segmentleri</CardTitle>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rfmSegments.map((s) => (
            <div key={s.name} className={`rounded-xl p-4 ${tone[s.tone]}`}>
              <p className="text-[15px] font-semibold">{s.name}</p>
              <p className="mt-1 text-[12px] opacity-85">{s.rule}</p>
              <p className="mt-3 text-[12.5px] font-medium">→ {s.play}</p>
              <p className="mt-3 text-[11px] opacity-75">Müşteri sayısı: requires order history</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle aside={<TagBadge tag="INFERRED" />}>Davranış bazlı segmentler</CardTitle>
          <ul className="divide-y divide-[var(--line)]">
            {behaviorSegments.map((b) => (
              <li key={b.name} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-[13.5px] font-semibold text-ink">{b.name}</span>
                <span className="text-[12.5px] text-ink-2 sm:text-right">{b.rule}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle aside={<TagBadge tag="VERIFIED" />}>Ürün bazlı segmentler (katalog adedi)</CardTitle>
          <ul className="divide-y divide-[var(--line)]">
            {productSegments.map((s) => {
              const count = categoryCounts.find((c) => c.raw === s.raw)?.count ?? 0;
              return (
                <li key={s.name} className="flex items-start justify-between gap-4 py-2.5">
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink">{s.name}</p>
                    <p className="text-[12px] text-ink-2">{s.use}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-md bg-cocoa-50 px-2 py-0.5 text-[12px] font-semibold tabular-nums text-cocoa-800">{count} ürün</span>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardTitle aside={<TagBadge tag="INFERRED" />}>
            <span className="inline-flex items-center gap-2">
              <Crown size={16} className="text-gold-500" /> VIP / High value kriterleri
            </span>
          </CardTitle>
          <div className="table-wrap">
            <table className="tbl !min-w-[520px]">
              <thead>
                <tr>
                  <th>Kriter</th>
                  <th>B2C</th>
                  <th>B2B</th>
                </tr>
              </thead>
              <tbody>
                {vipCriteria.map((v) => (
                  <tr key={v.criterion}>
                    <td className="font-medium">{v.criterion}</td>
                    <td>{v.b2c}</td>
                    <td>{v.b2b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12px] text-ink-3">Eşikler katalog fiyatlarına göre başlangıç önerisidir; gerçek harcama dağılımıyla (üst %10) kalibre edilmelidir.</p>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle>VIP otomasyonları</CardTitle>
          <ul className="space-y-2.5 text-[13px] text-ink-2">
            {vipPlays.map((v) => (
              <li key={v} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {v}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="INFERRED" />}>Kampanya / indirim otomasyonu — herkese aynı indirim yerine</CardTitle>
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Teklif</th>
                <th>Neden</th>
              </tr>
            </thead>
            <tbody>
              {campaignMatrix.map((c) => (
                <tr key={c.segment}>
                  <td className="whitespace-nowrap font-semibold">{c.segment}</td>
                  <td>{c.offer}</td>
                  <td className="text-ink-2">{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="flex items-center gap-2 text-[13.5px] font-semibold text-amber-900">
            <ShieldAlert size={16} /> Gereksiz indirimi önleyen kurallar
          </p>
          <ul className="mt-2 grid gap-1.5 text-[13px] text-amber-900 sm:grid-cols-2">
            {discountGuardrails.map((g) => (
              <li key={g}>• {g}</li>
            ))}
          </ul>
        </div>
      </Card>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>Back-in-stock & düşük stok izleme listesi ({stockWatch.length} ürün)</CardTitle>
        <p className="-mt-2 mb-4 text-[13px] text-ink-2">
          Senaryo 1: ürün tükendi → kullanıcı bildirim ister → stoğa girer → Email/SMS. Senaryo 2: yüksek talepli ürün stokta → son 30 günde görüntüleyenlere
          bildirim. Aşağıdaki liste 26.09.2026 itibarıyla gerçek stok durumudur.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {stockWatch.map((p) => (
            <div key={p.id} className="flex items-start justify-between gap-3 rounded-xl border border-[var(--line)] p-3 text-[12.5px]">
              <ProductLink p={p} />
              <StatusPill status={p.status} stock={p.stock} />
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
