export type Level = "Low" | "Medium" | "High";
export type Priority = "P0" | "P1" | "P2" | "P3";
export type Tag = "VERIFIED" | "INFERRED" | "REQUIRES DATA";

export type ProductStatus = "in_stock" | "low" | "quote" | "out_of_stock";

export interface Product {
  id: number;
  sku: string;
  name: string;
  url: string;
  price: number;
  stock: number;
  status: ProductStatus;
  categories: string[];
  primaryCategory: string;
  personalization: string[];
  similar: string[];
  image: string | null;
  description: string;
}

export interface Category {
  slug: string;
  url: string;
  name: string;
  listedProducts: number;
  hasMetaDescription: boolean;
  hasH1: boolean;
}

export interface MetaAd {
  adArchiveId: string;
  pageName: string;
  pageId: string;
  start: string;
  lastSeen: string;
  active: boolean;
  platforms: string[];
  format: string;
  body: string;
  cta: string;
  linkUrl: string;
  caption: string;
  cardTitle: string | null;
  pageLikes: number;
}

export interface Opportunity {
  id: string;
  title: string;
  area: "callypso" | "other";
  group: string;
  trigger: string;
  segment: string;
  action: string;
  channels: string[];
  timing: string;
  benefit: string;
  dataNeeded: string;
  integration: string;
  example: string;
  products?: number[];
  impact: Level;
  difficulty: Level;
  integrationLevel: Level;
  sales: Level;
  revenue: Level;
  priority: Priority;
  tag: Tag;
}

export interface Finding {
  area: string;
  finding: string;
  evidence: string;
  implication: string;
  tag: Tag;
  severity: Level;
}

export interface JourneyStep {
  delay: string;
  channel: string;
  title: string;
  message: string;
  noDiscount?: boolean;
  condition?: string;
}

export interface Journey {
  id: string;
  name: string;
  trigger: string;
  productId?: number;
  goal: string;
  steps: JourneyStep[];
  exitRule: string;
  tag: Tag;
}

export interface CrossSell {
  sourceId: number;
  targets: { id: number; role: "Add-on" | "Upsell" | "Cross-sell" | "Bundle" | "Next occasion" }[];
  logic: string;
  why: string;
  timing: string;
}
