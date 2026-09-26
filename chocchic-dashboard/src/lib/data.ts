import productsJson from "@/data/products.json";
import categoriesJson from "@/data/categories.json";
import adsJson from "@/data/meta-ads.json";
import { crossSells } from "@/data/strategy";
import { opportunities } from "@/data/opportunities";
import type { Category, MetaAd, Product } from "./types";

export const products = productsJson as Product[];
export const categories = categoriesJson as Category[];
export const metaAds = adsJson as MetaAd[];

export const productById = new Map(products.map((p) => [p.id, p]));

export const tl = (n: number) =>
  n === 0
    ? "0,00 TL"
    : n.toLocaleString("tr-TR", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + " TL";

const priced = products.filter((p) => p.price > 0).map((p) => p.price).sort((a, b) => a - b);
const median = priced.length % 2 ? priced[(priced.length - 1) / 2] : (priced[priced.length / 2 - 1] + priced[priced.length / 2]) / 2;

export const stats = {
  total: products.length,
  purchasable: products.filter((p) => p.status !== "out_of_stock").length,
  inStock: products.filter((p) => p.status === "in_stock").length,
  low: products.filter((p) => p.status === "low").length,
  quote: products.filter((p) => p.status === "quote").length,
  outOfStock: products.filter((p) => p.status === "out_of_stock").length,
  zeroPrice: products.filter((p) => p.price === 0).length,
  personalized: products.filter((p) => p.personalization.length > 0).length,
  minPrice: priced[0],
  maxPrice: priced[priced.length - 1],
  medianPrice: median,
  categoriesInSitemap: categories.length,
  emptyCategories: categories.filter((c) => c.listedProducts === 0).length,
  missingMeta: categories.filter((c) => !c.hasMetaDescription).length,
  opportunities: opportunities.length,
  callypso: opportunities.filter((o) => o.area === "callypso").length,
  other: opportunities.filter((o) => o.area === "other").length,
  highPriority: opportunities.filter((o) => o.priority === "P0" || o.priority === "P1").length,
  p0: opportunities.filter((o) => o.priority === "P0").length,
  metaAds: metaAds.length,
};

export const priceBands = (() => {
  const bands = [
    { band: "< 300", min: 0.01, max: 300 },
    { band: "300–599", min: 300, max: 600 },
    { band: "600–999", min: 600, max: 1000 },
    { band: "1.000–1.999", min: 1000, max: 2000 },
    { band: "2.000+", min: 2000, max: Infinity },
  ];
  return [
    ...bands.map((b) => ({ band: b.band, count: products.filter((p) => p.price >= b.min && p.price < b.max).length })),
    { band: "0 TL (teklif)", count: stats.zeroPrice },
  ];
})();

export const categoryCounts = (() => {
  const m = new Map<string, number>();
  products.forEach((p) => p.categories.forEach((c) => m.set(c, (m.get(c) ?? 0) + 1)));
  return [...m.entries()].map(([name, count]) => ({ name: pretty(name), raw: name, count })).sort((a, b) => b.count - a.count);
})();

export const personalizationCounts = (() => {
  const m = new Map<string, number>();
  products.forEach((p) => p.personalization.forEach((c) => m.set(c, (m.get(c) ?? 0) + 1)));
  return [...m.entries()].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
})();

export function pretty(s: string) {
  return s
    .toLocaleLowerCase("tr-TR")
    .split(" ")
    .map((w) => (w === "&" ? w : w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1)))
    .join(" ")
    .replace(" Hediye", "");
}

// ───────── Rule engine for product-level suggestions (INFERRED) ─────────

const occasionCycle: Record<string, string> = {
  "DOĞUM GÜNÜ HEDİYE": "365 gün — doğum günü T-14",
  "YILDÖNÜMÜ HEDİYE": "365 gün — yıldönümü T-14",
  "SEVGİLİYE HEDİYE": "14 Şubat + ilişki yıldönümü",
  "ANNELER GÜNÜ HEDİYE": "Yıllık — Mayıs 2. Pazar",
  "BABALAR GÜNÜ HEDİYE": "Yıllık — Haziran 3. Pazar",
  "ÖĞRETMENLER GÜNÜ HEDİYE": "Yıllık — 24 Kasım",
  "KADINLAR GÜNÜ HEDİYE": "Yıllık — 8 Mart",
  "YENİ YIL HEDİYE": "Yıllık — Kasım/Aralık",
  "BAYRAM HEDİYE": "≈ 6 ay — iki bayram",
  "PASKALYA HEDİYE": "Yıllık — Paskalya",
  "BEBEK HEDİYE": "+40 gün / +330 gün (ilk yaş)",
  "BEBEK ÇİKOLATA": "+40 gün / +330 gün (ilk yaş)",
  "ÖĞRETMENLER GÜNÜ": "Yıllık — 24 Kasım",
  "ATIŞTIRMALIK ÇİKOLATA": "≈ 21–30 gün (tüketim)",
  "KUTULU KURUMSAL ÜRÜNLER": "≈ 6–12 ay (bayram / yılbaşı)",
  "KURUMSAL KÜÇÜK HEDİYELER": "≈ 6–12 ay (etkinlik / fuar)",
  "LOGOLU ÇİKOLATA": "≈ 6–12 ay (bayram / yılbaşı)",
  "TARAFTAR ÇİKOLATA": "Sezon başı / derbi / Babalar Günü",
  "ÖZÜR HEDİYE": "Tekrar döngüsü yok — farklı özel güne köprü",
  "GEÇMİŞ OLSUN HEDİYE": "Tekrar döngüsü yok — farklı özel güne köprü",
  "TEŞEKKÜR HEDİYE": "Etkinlik bazlı",
  "DOKTORUMA HEDİYE": "Tıp Bayramı 14 Mart",
};

export function replenishment(p: Product) {
  for (const c of [p.primaryCategory, ...p.categories]) if (occasionCycle[c]) return occasionCycle[c];
  return "Özel gün hatırlatıcısı ile";
}

export function suggestions(p: Product) {
  const explicit = crossSells.find((c) => c.sourceId === p.id);
  if (explicit) {
    const cross = explicit.targets.filter((t) => t.role !== "Upsell").map((t) => productById.get(t.id)!).filter(Boolean);
    const up = explicit.targets.filter((t) => t.role === "Upsell").map((t) => productById.get(t.id)!).filter(Boolean);
    return { cross: cross.slice(0, 2), up: up.slice(0, 1), curated: true };
  }
  const pool = products.filter((q) => q.id !== p.id && q.status !== "out_of_stock" && q.price > 0);
  const sameCat = pool.filter((q) => q.categories.includes(p.primaryCategory));
  const up = p.price > 0
    ? sameCat.filter((q) => q.price > p.price * 1.15 && q.price <= p.price * 2.2).sort((a, b) => a.price - b.price).slice(0, 1)
    : [];
  // cross-sell: a cheaper add-on sharing any occasion, preferring a different format
  const addOn = pool
    .filter((q) => q.categories.some((c) => p.categories.includes(c)) && q.price < Math.max(p.price, 700) * 0.6 && !up.includes(q))
    .sort((a, b) => a.price - b.price)
    .slice(0, 1);
  const similar = p.similar.map((n) => pool.find((q) => q.name === n)).filter((q): q is Product => !!q && !addOn.includes(q) && !up.includes(q));
  return { cross: [...addOn, ...similar].slice(0, 2), up, curated: false };
}
