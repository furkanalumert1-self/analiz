"use client";

import { Globe, Package, Megaphone, Bot, Users, ShoppingBag, Contact, BarChart2, Tag as TagIcon } from "lucide-react";
import { Card, CardTitle, Legend, SectionHeader, TagBadge } from "../ui";
import { research } from "@/data/findings";
import { dataSources } from "@/data/strategy";
import { stats } from "@/lib/data";
import crawl from "@/data/crawl-summary.json";

const icons = [Globe, Package, Bot, Megaphone, Megaphone, Megaphone, TagIcon, Users, ShoppingBag, Contact, BarChart2];

export default function Sources() {
  return (
    <section>
      <SectionHeader
        no="12 — Data Sources"
        title="Hangi veri gerçek, hangisi entegrasyon bekliyor?"
        intro="Dashboard'daki her bilgi üç etiketten biriyle işaretlendi. Müşteri, sipariş ve CRM verisi olmadan hiçbir oran (repeat rate, CVR, LTV) veya ciro rakamı gösterilmedi."
      />
      <div className="mb-5">
        <Legend />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {dataSources.map((d, i) => {
          const Icon = icons[i] ?? Globe;
          return (
            <Card key={d.name} className="!p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-cocoa-50 p-2 text-cocoa-700">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[14px] font-semibold text-ink">{d.name}</p>
                    <TagBadge tag={d.tag} />
                  </div>
                  <p className="mt-0.5 text-[12px] font-medium text-cocoa-700">{d.status}</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-ink-2">{d.detail}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>Apify crawl özeti</CardTitle>
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["Actor", crawl.actor],
            ["Run ID", crawl.runId],
            ["İstek", String(crawl.requests)],
            ["Kaydedilen sayfa", String(crawl.pagesStored)],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-cocoa-50 p-3">
              <p className="text-[11px] text-ink-3">{k}</p>
              <p className="mt-0.5 break-all text-[13px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(crawl.byType as Record<string, number>).map(([k, v]) => (
            <span key={k} className="rounded-md border border-[var(--line)] px-2 py-1 text-[12px] text-ink-2">
              /{k} <b className="text-ink">{v}</b>
            </span>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] text-ink-2">
          Crawl’a ek olarak {stats.total} ürün sayfası doğrudan parse edildi (fiyat, stok adedi, kişiselleştirme alanları). Site: {research.site} · Platform:{" "}
          {research.platform} · Meta Pixel ID {research.metaPixelId}. Apify API anahtarı yalnızca sunucu tarafı script’te (<code>APIFY_API_KEY</code>) kullanılır;
          bu sayfaya gömülü değildir.
        </p>
      </Card>
    </section>
  );
}
