#!/usr/bin/env node
// Refreshes the raw ChocChic data used by the dashboard.
//
// 1. Runs the Apify `website-content-crawler` actor on https://www.chocchic.com
// 2. Reads the product sitemap and parses each product page (price, stock,
//    categories, personalization fields, similar products)
//
// Usage:  APIFY_API_KEY=... npm run crawl
// Output: data/raw/crawl.json, data/raw/products_raw.json (git-ignored)
//
// The key is read from the environment only and is never bundled into the app.

import fs from "node:fs/promises";

const KEY = process.env.APIFY_API_KEY;
if (!KEY) {
  console.error("APIFY_API_KEY is not set. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const API = "https://api.apify.com/v2";
const OUT = new URL("../data/raw/", import.meta.url);
await fs.mkdir(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const api = async (path, init = {}) => {
  const res = await fetch(`${API}${path}${path.includes("?") ? "&" : "?"}token=${KEY}`, init);
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
};

async function runCrawler() {
  const input = {
    startUrls: [{ url: "https://www.chocchic.com" }],
    crawlerType: "playwright:adaptive",
    maxCrawlPages: 400,
    maxCrawlDepth: 4,
    includeUrlGlobs: [{ glob: "https://www.chocchic.com/**" }],
    excludeUrlGlobs: [{ glob: "**/uye-girisi**" }, { glob: "**/sepet**" }],
    saveMarkdown: true,
    removeCookieWarnings: true,
    proxyConfiguration: { useApifyProxy: true },
  };
  const { data: run } = await api("/acts/apify~website-content-crawler/runs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  console.log(`Apify run ${run.id} started`);
  for (;;) {
    const { data } = await api(`/actor-runs/${run.id}`);
    if (["SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"].includes(data.status)) {
      console.log(`Apify run ${data.status}: ${data.statusMessage ?? ""}`);
      break;
    }
    await sleep(15000);
  }
  const items = await api(`/datasets/${run.defaultDatasetId}/items?format=json&fields=url,metadata,markdown`);
  await fs.writeFile(new URL("crawl.json", OUT), JSON.stringify(items, null, 1));
  console.log(`Saved ${items.length} crawled pages`);
}

const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function parseProduct(url, html) {
  const params = html.match(/pageParams = \{product: \{(.*?)\}\};/s)?.[1] ?? "";
  const field = (k) => params.match(new RegExp(`${k}: "([^"]*)"`))?.[1]?.trim() ?? null;
  const num = (k) => Number(params.match(new RegExp(`${k}: ([0-9.]+)`))?.[1] ?? 0);
  const similarBlock = html.match(/similar-products(.*?)(Tavsiye Et|product-detail-tab)/s)?.[1] ?? "";
  return {
    url,
    id: field("id"),
    sku: field("sku"),
    name: strip(html.match(/<h1>(.*?)<\/h1>/s)?.[1] ?? ""),
    salePrice: num("salePrice"),
    categories: [...html.matchAll(/itemprop='category' content='([^']*)'/g)].map((m) => m[1].trim()),
    stockAmount: html.match(/data-stockamount='([^']*)'/)?.[1] ?? null,
    hasAddToCart: html.includes("add-to-cart-button"),
    customGroups: [...html.matchAll(/product-customization-group-title">(.*?)<\/div>/gs)].map((m) => strip(m[1])),
    description: strip(html.match(/<div class="product-detail">(.*?)<\/div>/s)?.[1] ?? ""),
    similar: [...similarBlock.matchAll(/class="showcase-title"[^>]*>(.*?)<\/div>/gs)].map((m) => strip(m[1])),
    image: html.match(/og:image' content='([^']*)'/)?.[1] ?? null,
  };
}

async function scrapeProducts() {
  const sitemap = await (await fetch("https://www.chocchic.com/xml/sitemap_product_1.xml")).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const products = [];
  for (const url of urls) {
    const html = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (analysis)" } })).text();
    products.push(parseProduct(url, html));
    await sleep(700); // be polite to the storefront
  }
  await fs.writeFile(new URL("products_raw.json", OUT), JSON.stringify(products, null, 1));
  console.log(`Saved ${products.length} products`);
}

await runCrawler();
await scrapeProducts();
