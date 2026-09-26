"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Card, CardTitle, FilterRow, ProductLink, SectionHeader, StatusPill, TagBadge } from "../ui";
import { categoryCounts, products, replenishment, stats, suggestions, tl } from "@/lib/data";
import type { ProductStatus } from "@/lib/types";

type StatusFilter = "all" | ProductStatus | "personalized";
type Sort = "price-desc" | "price-asc" | "name";

export default function ProductIntel() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [sort, setSort] = useState<Sort>("price-desc");
  const [limit, setLimit] = useState(40);

  const rows = useMemo(() => {
    const needle = q.trim().toLocaleLowerCase("tr-TR");
    return products
      .filter((p) => (cat === "all" ? true : p.categories.includes(cat)))
      .filter((p) =>
        status === "all" ? true : status === "personalized" ? p.personalization.length > 0 : p.status === status,
      )
      .filter((p) => !needle || p.name.toLocaleLowerCase("tr-TR").includes(needle))
      .sort((a, b) =>
        sort === "name" ? a.name.localeCompare(b.name, "tr") : sort === "price-asc" ? a.price - b.price : b.price - a.price,
      );
  }, [q, cat, status, sort]);

  return (
    <section>
      <SectionHeader
        no="03 — Product Intelligence"
        title={`${stats.total} ürünün tamamı: fiyat, stok, ilişki ve tekrar fırsatı`}
        intro={
          <>
            Fiyat, stok ve kategori <b>doğrulanmış</b> site verisidir. Cross-sell / upsell önerileri, elle kürate edilmiş ilişki haritası (★) veya kategori +
            fiyat bandı kurallarıyla üretilmiştir; tekrar satın alma penceresi özel gün döngüsüne dayalı <b>varsayımdır</b>.
          </>
        }
      />

      <Card>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Ürün ara</span>
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ürün ara (örn. konuşan, logolu, bebek)"
                className="w-full rounded-xl border border-[var(--line)] bg-white py-2.5 pl-9 pr-3 text-[13px] outline-none focus:border-cocoa-400"
              />
            </label>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              aria-label="Kategori"
              className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[13px] outline-none focus:border-cocoa-400"
            >
              <option value="all">Tüm kategoriler</option>
              {categoryCounts.map((c) => (
                <option key={c.raw} value={c.raw}>
                  {c.name} ({c.count})
                </option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              aria-label="Sıralama"
              className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[13px] outline-none focus:border-cocoa-400"
            >
              <option value="price-desc">Fiyat: yüksek → düşük</option>
              <option value="price-asc">Fiyat: düşük → yüksek</option>
              <option value="name">İsim</option>
            </select>
          </div>
          <FilterRow
            label="Durum"
            value={status}
            onChange={(v) => {
              setStatus(v);
              setLimit(40);
            }}
            options={[
              { value: "all", label: `Tümü (${stats.total})` },
              { value: "in_stock", label: `Stokta (${stats.inStock})` },
              { value: "low", label: `Düşük stok (${stats.low})` },
              { value: "quote", label: `0 TL · teklif (${stats.quote})` },
              { value: "out_of_stock", label: `Tükendi (${stats.outOfStock})` },
              { value: "personalized", label: `Kişiselleştirilebilir (${stats.personalized})` },
            ]}
          />
        </div>
      </Card>

      <Card className="mt-4">
        <CardTitle
          aside={
            <div className="flex flex-wrap gap-2">
              <TagBadge tag="VERIFIED" />
              <span className="text-[11px] text-ink-3">fiyat · stok · kategori</span>
              <TagBadge tag="INFERRED" />
              <span className="text-[11px] text-ink-3">öneri · tekrar penceresi</span>
            </div>
          }
        >
          {rows.length} ürün
        </CardTitle>
        <div className="table-wrap">
          <table className="tbl !min-w-[980px]">
            <thead lang="en">
              <tr>
                <th className="w-[24%]">Product</th>
                <th>Category</th>
                <th className="text-right">Price</th>
                <th>Stock</th>
                <th className="w-[19%]">Potential cross-sell</th>
                <th className="w-[15%]">Potential upsell</th>
                <th className="w-[14%]">Replenishment / tekrar</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, limit).map((p) => {
                const s = suggestions(p);
                return (
                  <tr key={p.id}>
                    <td>
                      <ProductLink p={p} showPrice={false} className="font-medium" />
                      {p.personalization.length > 0 && (
                        <p className="mt-1 text-[11.5px] text-cocoa-600">✎ {p.personalization.join(", ")}</p>
                      )}
                    </td>
                    <td className="text-ink-2">
                      {p.categories.length ? p.categories.map((c) => c.replace(" HEDİYE", "")).join(" · ") : "—"}
                    </td>
                    <td className="whitespace-nowrap text-right tabular-nums">{tl(p.price)}</td>
                    <td>
                      <StatusPill status={p.status} stock={p.stock} />
                    </td>
                    <td className="text-[12.5px]">
                      {s.cross.length ? (
                        <ul className="space-y-1">
                          {s.cross.map((c) => (
                            <li key={c.id}>
                              {s.curated && <span className="text-gold-600">★ </span>}
                              <ProductLink p={c} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-ink-3">—</span>
                      )}
                    </td>
                    <td className="text-[12.5px]">
                      {s.up.length ? s.up.map((c) => <ProductLink key={c.id} p={c} />) : <span className="text-ink-3">{p.price === 0 ? "Adet kademesi (B2B)" : "—"}</span>}
                    </td>
                    <td className="text-[12.5px] text-ink-2">{replenishment(p)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {rows.length > limit && (
          <div className="mt-4 text-center">
            <button type="button" className="btn-filter" onClick={() => setLimit((l) => l + 60)}>
              {rows.length - limit} ürün daha göster
            </button>
          </div>
        )}
      </Card>
    </section>
  );
}
