"use client";

import { AlertTriangle, ArrowUpRight, Building2, Gift, LineChart, Megaphone, Sparkles } from "lucide-react";
import { Card, CardTitle, Legend, PriorityBadge, Stat, TagBadge } from "../ui";
import { stats, tl } from "@/lib/data";
import { research } from "@/data/findings";
import { topOpportunities, opportunityScore } from "@/data/opportunities";

const headline = [
  {
    icon: Megaphone,
    title: "Reklam bütçesi müşteri verisini Trendyol'a taşıyor",
    body: "Meta'daki 4 aktif reklamın hiçbiri chocchic.com'a gitmiyor (3'ü Trendyol, 1'i Instagram DM). Callypso Engage'in besleneceği e-posta/telefon havuzu reklamdan büyümüyor.",
    tag: "VERIFIED" as const,
  },
  {
    icon: Building2,
    title: "B2B talebi yapılandırılmamış: 30 ürün 0,00 TL",
    body: "Kurumsal ürünlerin 27'si 0 TL fiyatla sepete eklenebiliyor. 'Teklif Al' + kurumsal nurturing ile Yılbaşı sezonu (Kasım–Aralık) için en büyük ciro kaldıracı.",
    tag: "VERIFIED" as const,
  },
  {
    icon: Gift,
    title: "Tekrar satın almanın motoru 'özel gün', tüketim değil",
    body: "256 ürünün büyük kısmı özel gün kategorilerinde (Sevgiliye 44, Yeni Yıl 36, Bayram 29…). Replenishment yerine yıllık 'özel gün hatırlatıcısı' kurgusu öneriyoruz.",
    tag: "INFERRED" as const,
  },
  {
    icon: LineChart,
    title: "Ölçümleme ve güven altyapısı eksik",
    body: "GA4/GTM/Google Ads etiketi yok, sadece Meta Pixel PageView doğrulandı; 256 üründe 0 yorum. Otomasyonların etkisini ölçmek ve sosyal kanıt üretmek ilk 30 günün işi.",
    tag: "VERIFIED" as const,
  },
];

export default function Executive() {
  const top = topOpportunities(5);
  return (
    <section>
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-cocoa-900 px-6 py-10 text-white sm:px-10 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        />
        <p lang="en" className="eyebrow !text-gold-400">01 — Executive Summary</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.1] sm:text-5xl">ChocChic Growth &amp; Automation Analysis</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cocoa-200">
          chocchic.com’un tamamı (256 ürün, 39 kategori), kampanya alanları ve public reklam kütüphaneleri tarandı. Öneriler ChocChic’in gerçek
          ürünleri, fiyatları, stok durumu ve kişiselleştirme yapısı üzerine kuruldu. Sipariş/müşteri verisi olmadan sayısal ciro tahmini yapılmadı.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-cocoa-200">
          <span className="rounded-full border border-white/15 px-3 py-1">{research.platform}</span>
          <span className="rounded-full border border-white/15 px-3 py-1">Kuruluş: {research.founded}</span>
          <span className="rounded-full border border-white/15 px-3 py-1">Araştırma: {research.researchedAt}</span>
        </div>
      </div>

      <div className="mb-4">
        <Legend />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        <Stat label="Products Analyzed" value={stats.total} sub={`${stats.purchasable} satın alınabilir`} tag="VERIFIED" />
        <Stat label="Categories" value={stats.categoriesInSitemap} sub={`${stats.emptyCategories} kategori boş`} tag="VERIFIED" />
        <Stat label="Automation Opportunities" value={stats.opportunities} sub="ürün bazlı senaryo" tag="INFERRED" />
        <Stat label="High Priority (P0–P1)" value={stats.highPriority} sub={`${stats.p0} adet P0`} tag="INFERRED" />
        <Stat label="Callypso Engage" value={stats.callypso} sub="Email · SMS · segment · journey" tag="INFERRED" />
        <Stat label="AI / Other" value={stats.other} sub="AI · WhatsApp · analytics · CRO" tag="INFERRED" />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {headline.map((h) => (
          <Card key={h.title}>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-cocoa-50 p-2.5 text-cocoa-700">
                <h.icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="h-card">{h.title}</h3>
                  <TagBadge tag={h.tag} />
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{h.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardTitle>Website Overview</CardTitle>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-[13px]">
            {[
              ["Fiyat aralığı", `${tl(stats.minPrice)} – ${tl(stats.maxPrice)}`],
              ["Medyan fiyat", tl(stats.medianPrice)],
              ["Kişiselleştirilebilir", `${stats.personalized} ürün`],
              ["0 TL / teklif ürünü", `${stats.zeroPrice} ürün`],
              ["Düşük stok (≤3)", `${stats.low} ürün`],
              ["Tükendi", `${stats.outOfStock} ürün`],
              ["Aktif indirim", "Yok"],
              ["Yorum / puan", "0"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-ink-3">{k}</dt>
                <dd className="mt-0.5 font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-[12px] leading-relaxed text-amber-900">
            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
            Estimated automation potential sayısal olarak verilmedi: trafik, sipariş ve dönüşüm verisi olmadan tahmin uydurulmaz. Potansiyel,
            her fırsat için Low / Medium / High olarak işaretlendi.
          </p>
        </Card>

        <Card className="lg:col-span-3">
          <CardTitle aside={<span className="text-[12px] text-ink-3">Skor: Impact, satış potansiyeli, zorluk, entegrasyon</span>}>
            Priority Actions
          </CardTitle>
          <ol className="space-y-3">
            {top.map((o, i) => (
              <li key={o.id} className="flex items-start gap-3 rounded-xl border border-[var(--line)] p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cocoa-800 text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[14px] font-semibold text-ink">{o.title}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-[12.5px] text-ink-2">{o.example}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <PriorityBadge p={o.priority} />
                  <span className="text-[11px] tabular-nums text-ink-3">{opportunityScore(o)}/27</span>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <Card className="mt-4">
        <CardTitle>Main Opportunities</CardTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Sepet & kişiselleştirme terk", d: "44 kişiselleştirilebilir ürün; indirimsiz, teslim tarihi odaklı akış", p: "P0" },
            { t: "Özel gün hatırlatıcısı", d: "Doğum günü, yıldönümü, öğretmenler günü → yıllık tekrar", p: "P0" },
            { t: "B2B teklif & nurturing", d: "30 adet 0 TL ürün, min. 250 adetlik logolu siparişler", p: "P0" },
            { t: "First-party veri", d: "Reklamı siteye çek, İYS izinli lead havuzu kur", p: "P0" },
          ].map((m) => (
            <div key={m.t} className="rounded-xl bg-cocoa-50 p-4">
              <div className="flex items-center justify-between">
                <Sparkles size={16} className="text-cocoa-600" />
                <span className="text-[11px] font-semibold text-cocoa-700">{m.p}</span>
              </div>
              <p className="mt-3 text-[14px] font-semibold text-ink">{m.t}</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-2">{m.d}</p>
            </div>
          ))}
        </div>
        <a href="#roadmap" className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-cocoa-700 hover:underline">
          Tam önceliklendirme ve yol haritası <ArrowUpRight size={14} />
        </a>
      </Card>
    </section>
  );
}
