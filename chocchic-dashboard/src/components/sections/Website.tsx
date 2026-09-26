"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { ExternalLink, PlayCircle, LayoutGrid } from "lucide-react";
import { Card, CardTitle, FilterRow, SectionHeader, TagBadge, LevelMeter } from "../ui";
import { ColumnChart, RowChart } from "../charts";
import { categoryCounts, categories, metaAds, personalizationCounts, priceBands, stats, productById, tl } from "@/lib/data";
import { adChannels, conversionOpportunities, siteStructure, websiteFindings } from "@/data/findings";
import type { Level } from "@/lib/types";

export default function Website() {
  const [sev, setSev] = useState<"all" | Level>("all");
  const findings = useMemo(() => websiteFindings.filter((f) => sev === "all" || f.severity === sev), [sev]);
  const statusData = [
    { name: "Stokta", count: stats.inStock },
    { name: "Düşük stok ≤3", count: stats.low },
    { name: "0 TL · sepete eklenebilir", count: stats.quote },
    { name: "Tükendi", count: stats.outOfStock },
  ];
  const pinyata = productById.get(657);

  return (
    <section>
      <SectionHeader
        no="02 — Website & Ads Analysis"
        title="Site yapısı, katalog, kampanya ve reklam sinyalleri"
        intro="Tüm veriler 26 Eylül 2026'da chocchic.com üzerinden (sitemap, 256 ürün sayfası, kategori sayfaları, politika sayfaları) ve Meta / Google public reklam kütüphanelerinden toplandı."
      />

      {/* Structure */}
      <Card>
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>Site structure — 4 ana menü, 33 alt kategori</CardTitle>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteStructure.map((g) => (
            <div key={g.group} className="rounded-xl border border-[var(--line)] p-4">
              <div className="flex items-center gap-2">
                <LayoutGrid size={14} className="text-cocoa-500" />
                <p className="text-[13px] font-semibold text-ink">{g.group}</p>
              </div>
              <p className="mt-1 text-[12px] text-ink-3">{g.role}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.children.length ? (
                  g.children.map((c) => (
                    <span key={c} className="rounded-md bg-cocoa-50 px-2 py-0.5 text-[11.5px] text-ink-2">
                      {c}
                    </span>
                  ))
                ) : (
                  <span className="text-[12px] text-ink-3">4 ürün (Dubai çikolata, ÇokoStick, Melek Saçlı, Çıtır But)</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] text-ink-2">
          Ek alanlar: Yeni Ürünler (9), Popüler Ürünler (2), İndirimli / Sponsor ürünler (boş), paket sayfası “IWF” (Yılbaşı ürün seti), Blog ve Haberler
          (boş), Hakkımızda / Kurumsal / Ses Kaydı sayfaları (içeriksiz).
        </p>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle aside={<TagBadge tag="VERIFIED" />}>Ürün sayısı — kategori bazlı (ilk 16)</CardTitle>
          <RowChart data={categoryCounts.slice(0, 16)} label="name" value="count" labelWidth={170} />
          <p className="mt-2 text-[12px] text-ink-3">Bir ürün birden fazla kategoride olabilir. Ürünlerin %{Math.round((categoryCounts.find((c) => c.raw === "SEVGİLİYE HEDİYE")!.count / stats.total) * 100)}’ı Sevgiliye kategorisinde.</p>
        </Card>
        <div className="grid gap-4">
          <Card>
            <CardTitle aside={<TagBadge tag="VERIFIED" />}>Fiyat dağılımı</CardTitle>
            <ColumnChart data={priceBands} x="band" y="count" height={210} />
            <p className="mt-2 text-[12px] text-ink-3">
              Medyan {tl(stats.medianPrice)} · en düşük {tl(stats.minPrice)} (Tek Gül / Çelenk Paskalya) · en yüksek {tl(stats.maxPrice)} (Logolu Madlen, 250 adet)
            </p>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardTitle>Stok durumu</CardTitle>
              <RowChart data={statusData} label="name" value="count" labelWidth={128} />
            </Card>
            <Card>
              <CardTitle>Kişiselleştirme alanı</CardTitle>
              <RowChart data={personalizationCounts} label="name" value="count" labelWidth={128} color="var(--chart-2)" />
            </Card>
          </div>
        </div>
      </div>

      {/* Campaigns */}
      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>Campaigns & lead capture</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["İndirimli ürünler", "Ürün bulunamadı", "Aktif indirim yok"],
            ["Çok satanlar", "Boş", "Sosyal kanıt listesi yok"],
            ["Popüler ürünler", "2 ürün", "Çikolatalı Yılbaşı Çamı, Konuşan Kurumsal Çikolata (0 TL)"],
            ["Yeni ürünler", "9 ürün", "Mesajlı Çikolata Şişesi, Bahar Dokunuşu, Tek Gül, İsme Özel Doğum Günü Şarkılı…"],
            ["E-bülten", "Sadece footer", "Teşvik yok, pop-up yok"],
            ["Paket (bundle)", "1 sayfa", "IWF — Yılbaşı ürünlerinin listesi, paket fiyatı yok"],
            ["Ana sayfa vitrini", "14 ürün", "Kurumsal (Bayram) + yeni ürünler karışık"],
            ["Fiyat alarmı / Tavsiye et", "Mevcut", "Otomasyon tetikleyicisi olarak kullanılabilir"],
          ].map(([k, v, d]) => (
            <div key={k} className="rounded-xl bg-cocoa-50 p-3.5">
              <p className="text-[12px] text-ink-3">{k}</p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">{v}</p>
              <p className="mt-1 text-[12px] leading-snug text-ink-2">{d}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Findings */}
      <Card className="mt-4">
        <CardTitle aside={<FilterRow label="Etki" value={sev} onChange={setSev} options={[{ value: "all", label: "Tümü" }, { value: "High", label: "High" }, { value: "Medium", label: "Medium" }, { value: "Low", label: "Low" }]} />}>
          UX & conversion observations
        </CardTitle>
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th className="w-[130px]">Alan</th>
                <th>Bulgu</th>
                <th className="w-[34%]">Kanıt</th>
                <th className="w-[26%]">Ne anlama geliyor?</th>
                <th>Etki</th>
              </tr>
            </thead>
            <tbody>
              {findings.map((f) => (
                <tr key={f.finding}>
                  <td>
                    <p className="font-medium">{f.area}</p>
                    <TagBadge tag={f.tag} className="mt-1.5" />
                  </td>
                  <td className="font-medium">{f.finding}</td>
                  <td className="text-ink-2">{f.evidence}</td>
                  <td className="text-ink-2">{f.implication}</td>
                  <td>
                    <LevelMeter level={f.severity} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mt-4">
        <CardTitle>Conversion opportunities</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {conversionOpportunities.map((c) => (
            <div key={c.title} className="rounded-xl border border-[var(--line)] p-3.5">
              <TagBadge tag={c.tag} />
              <p className="mt-2 text-[13.5px] font-semibold leading-snug text-ink">{c.title}</p>
              <p className="mt-1 text-[12px] text-cocoa-600">{c.effect}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>SEO — kategori sayfaları</CardTitle>
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            [`${stats.missingMeta}/${categories.length}`, "kategoride meta description boş"],
            [`0/${categories.length}`, "kategoride H1 başlık"],
            [`${stats.emptyCategories}`, "boş kategori sitemap'te (Kına, Mevlit, Nikah, Bebek Çikolata)"],
            ["0", "Product JSON-LD (yalnızca microdata)"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-cocoa-50 p-4">
              <p className="font-serif text-2xl text-ink">{v}</p>
              <p className="mt-1 text-[12px] text-ink-2">{l}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Ads */}
      <div className="mt-12">
        <p lang="en" className="eyebrow">Advertising</p>
        <h3 className="mt-1 font-serif text-2xl text-ink">Public reklam analizi</h3>
        <p className="mt-2 max-w-3xl text-[14px] text-ink-2">
          Doğrudan reklam hesabı API erişimi yok; yalnızca public kütüphaneler kullanıldı. Harcama, gösterim ve ROAS verisi public değildir.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {adChannels.map((c) => (
          <Card key={c.channel}>
            <CardTitle aside={<TagBadge tag={c.tag} />}>
              {c.channel} <span className="ml-2 text-[12px] font-normal text-ink-3">· {c.status}</span>
            </CardTitle>
            <p className="-mt-2 mb-3 text-[11.5px] text-ink-3">Kaynak: {c.source}</p>
            <ul className="space-y-2 text-[13px] leading-relaxed text-ink-2">
              {c.notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cocoa-400" />
                  {n}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="mt-4">
        <CardTitle aside={<TagBadge tag="VERIFIED" />}>Meta Ad Library — aktif reklamlar ({metaAds.length})</CardTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          {metaAds.map((a) => {
            const toTrendyol = /trendyol|ty\.gl/.test(a.linkUrl);
            return (
              <div key={a.adArchiveId} className="flex flex-col rounded-xl border border-[var(--line)] p-4">
                <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-ink-3">
                  <PlayCircle size={14} className="text-cocoa-500" />
                  <span className="font-semibold text-ink">{a.format === "VIDEO" ? "Video" : "Carousel"}</span>·<span>{a.start} → aktif</span>·<span>ID {a.adArchiveId}</span>
                </div>
                <p className="mt-3 line-clamp-5 whitespace-pre-line text-[13px] leading-relaxed text-ink">{a.body}</p>
                <div className="mt-auto pt-4">
                  <div className="grid grid-cols-3 gap-2 text-[12px]">
                    <div>
                      <p className="text-ink-3">CTA</p>
                      <p className="font-medium text-ink">{a.cta}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-ink-3">Landing</p>
                      <p className={clsx("truncate font-medium", toTrendyol ? "text-rose-700" : "text-ink")}>
                        {toTrendyol ? "Trendyol" : "Instagram DM"} · {a.caption}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-[11.5px] text-ink-3">Yerleşim: {a.platforms.join(", ").toLowerCase()}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-xl bg-cocoa-50 p-4 text-[13px] leading-relaxed text-ink-2">
          <p className="font-semibold text-ink">Reklam → ürün sayfası ilişkisi</p>
          <p className="mt-1">
            Reklamlarda öne çıkan ürün {pinyata ? (
              <a href={pinyata.url} target="_blank" rel="noreferrer" className="font-medium text-ink underline decoration-cocoa-300">
                {pinyata.name} ({tl(pinyata.price)}) <ExternalLink size={11} className="inline" />
              </a>
            ) : null}{" "}
            sitede ana sayfa vitrininin ilk ürünü. Hedef kitle: doğum günü hediyesi arayan, kişiye özel/sürpriz deneyim isteyen kullanıcı. Mesaj “kutuyu
            açınca çalan melodi + kırınca çıkan sürpriz” — güçlü. Ancak tıklama chocchic.com yerine Trendyol’da “kalp” arama sonucuna gidiyor: kullanıcı
            ürünün kendisine değil, bir arama listesine düşüyor ve ChocChic müşteri verisini alamıyor.
          </p>
        </div>
      </Card>
    </section>
  );
}
