#!/usr/bin/env python3
"""ScrapeGraphAI ile otomatik B2B lead üretim hattı.

Aşamalar:
  discover  → /search (+ opsiyonel /extract ile dizin sayfaları) ile aday şirketleri bul
  enrich    → /scrape (html + links + json) ile ana sayfadan firma profili çıkar,
              gerekirse iletişim sayfasına /extract ile düş
  score     → config'teki kurallarla ICP skoru (0-100) ve sıcak/ılık/soğuk etiketi
  export    → CSV + webhook (n8n / Make / Zapier / CRM)
  run       → hepsini sırayla çalıştır
  monitors  → /monitor ile dizin sayfalarını haftalık izle (yeni marka → webhook)

Örnek:
  python leadgen.py run --config config.json
  python leadgen.py run --config config.example.json --mock   # API anahtarı olmadan deneme
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import sqlite3
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from fingerprints import analyze_html, role_based_emails
from sgai_client import MockClient, ScrapeGraphClient, SgaiError

HERE = Path(__file__).resolve().parent

# ---------------------------------------------------------------- şemalar

DISCOVERY_PROMPT = (
    "Bu arama sonuçlarından, kendi web sitesi üzerinden ürün satan MARKALARI listele. "
    "Pazaryerlerini (Trendyol, Hepsiburada, Amazon vb.), haber sitelerini, blogları, "
    "ajansları ve liste/rehber sitelerinin kendisini dahil etme. Her marka için resmi web "
    "sitesinin ana alan adını ver. Emin olmadığın web sitelerini uydurma."
)

DISCOVERY_SCHEMA = {
    "type": "object",
    "properties": {
        "companies": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type": "string", "description": "Marka adı"},
                    "website": {"type": "string", "description": "Markanın resmi web sitesi (https://...)"},
                    "sector": {"type": "string", "description": "Sektör / kategori"},
                    "city": {"type": "string"},
                },
                "required": ["name", "website"],
            },
        }
    },
    "required": ["companies"],
}

ENRICH_PROMPT = (
    "Bu şirketin web sitesinden B2B satış ekibi için firma profili çıkar. "
    "SADECE şirkete ait kurumsal iletişim bilgilerini (info@, destek@ gibi rol tabanlı e-postalar, "
    "müşteri hizmetleri telefonu) al; çalışanların kişisel e-posta/telefonlarını ALMA. "
    "Bilmediğin alanları boş bırak, tahmin yürütme."
)

ENRICH_SCHEMA = {
    "type": "object",
    "properties": {
        "company_name": {"type": "string"},
        "short_description": {"type": "string", "description": "Tek cümlelik ne sattığı"},
        "sector": {"type": "string"},
        "is_ecommerce": {"type": "boolean", "description": "Site üzerinden sepete ekle / online ödeme var mı"},
        "ecommerce_platform": {"type": "string", "description": "Shopify, ikas, Ticimax, IdeaSoft, T-Soft, WooCommerce vb."},
        "estimated_product_count": {"type": "integer"},
        "price_range": {"type": "string"},
        "has_whatsapp": {"type": "boolean", "description": "WhatsApp iletişim/sipariş butonu var mı"},
        "whatsapp_number": {"type": "string"},
        "has_live_chat": {"type": "boolean", "description": "Canlı destek veya chatbot widget'ı var mı"},
        "has_campaigns": {"type": "boolean", "description": "İndirim, kampanya, kupon, ücretsiz kargo iletişimi"},
        "has_mobile_app": {"type": "boolean"},
        "marketplaces": {"type": "array", "items": {"type": "string"}, "description": "Bahsedilen pazaryerleri"},
        "instagram_url": {"type": "string"},
        "tiktok_url": {"type": "string"},
        "linkedin_url": {"type": "string"},
        "contact_emails": {"type": "array", "items": {"type": "string"}},
        "phones": {"type": "array", "items": {"type": "string"}},
        "city": {"type": "string"},
        "sales_hook": {"type": "string", "description": "Bu markaya otomasyon/AI satışı için tek cümlelik kişiselleştirilmiş giriş cümlesi"},
    },
    "required": ["company_name", "is_ecommerce"],
}

CONTACT_PROMPT = (
    "Bu iletişim sayfasından şirketin kurumsal e-posta adreslerini, telefonlarını, WhatsApp hattını "
    "ve şehrini çıkar. Çalışanlara ait kişisel bilgileri alma."
)

CONTACT_SCHEMA = {
    "type": "object",
    "properties": {
        "contact_emails": {"type": "array", "items": {"type": "string"}},
        "phones": {"type": "array", "items": {"type": "string"}},
        "whatsapp_number": {"type": "string"},
        "city": {"type": "string"},
    },
}

CSV_FIELDS = [
    "tier", "score", "company_name", "website", "sector", "city", "ecommerce_platform",
    "estimated_product_count", "has_whatsapp", "has_live_chat", "live_chat_vendors",
    "instagram_url", "contact_emails", "phones", "tracking", "sales_hook", "score_reasons",
    "source", "discovered_at",
]


# ---------------------------------------------------------------- yardımcılar

def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def normalize_domain(url: str | None) -> str | None:
    if not url:
        return None
    url = url.strip()
    if "://" not in url:
        url = "https://" + url
    host = urllib.parse.urlparse(url).hostname
    if not host or "." not in host:
        return None
    return host.lower().removeprefix("www.")


def is_excluded(domain: str, excluded: list[str]) -> bool:
    return any(domain == d or domain.endswith("." + d) for d in excluded)


def open_db(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(path)
    db.row_factory = sqlite3.Row
    db.execute(
        """CREATE TABLE IF NOT EXISTS leads (
            domain TEXT PRIMARY KEY,
            name TEXT, website TEXT, source TEXT,
            discovered_at TEXT, enriched_at TEXT,
            status TEXT DEFAULT 'new',          -- new | enriched | failed
            score INTEGER, tier TEXT, reasons TEXT,
            data TEXT, error TEXT, pushed_at TEXT)"""
    )
    return db


def unwrap(value):
    """/scrape sonuçlarında `data` bazen liste, bazen tekil değer olarak gelir."""
    if isinstance(value, list):
        return value[0] if len(value) == 1 else value
    return value


# ---------------------------------------------------------------- 1) discover

def add_candidate(db, cfg, name, website, source) -> bool:
    domain = normalize_domain(website)
    if not domain or is_excluded(domain, cfg["icp"]["excluded_domains"]):
        return False
    cur = db.execute(
        "INSERT OR IGNORE INTO leads(domain, name, website, source, discovered_at) VALUES (?,?,?,?,?)",
        (domain, name, f"https://{domain}", source, now()),
    )
    return cur.rowcount == 1


def discover(client, db, cfg) -> int:
    d = cfg["discovery"]
    added = 0
    for q in d["queries"]:
        try:
            res = client.search(q, num_results=d.get("results_per_query", 10), prompt=DISCOVERY_PROMPT,
                                schema=DISCOVERY_SCHEMA, country=cfg["icp"].get("country"),
                                time_range=d.get("time_range"))
        except SgaiError as e:
            print(f"  ! arama başarısız [{q}]: {e}", file=sys.stderr)
            continue
        companies = (res.get("json") or {}).get("companies") or []
        # LLM çıkarımı boş dönerse ham sonuç URL'lerini aday olarak kullan
        if not companies:
            companies = [{"name": r.get("title"), "website": r.get("url")} for r in res.get("results", [])]
        n = sum(add_candidate(db, cfg, c.get("name"), c.get("website"), f"search:{q}") for c in companies)
        added += n
        print(f"  search '{q}': {len(companies)} aday, {n} yeni")

    for url in d.get("seed_urls", []):
        try:
            res = client.extract(url, DISCOVERY_PROMPT, DISCOVERY_SCHEMA)
        except SgaiError as e:
            print(f"  ! seed başarısız [{url}]: {e}", file=sys.stderr)
            continue
        companies = (res.get("json") or {}).get("companies") or []
        n = sum(add_candidate(db, cfg, c.get("name"), c.get("website"), f"seed:{url}") for c in companies)
        added += n
        print(f"  seed {url}: {len(companies)} aday, {n} yeni")
    db.commit()
    return added


# ---------------------------------------------------------------- 2) enrich

def find_contact_url(base: str, links: list[str], paths: list[str]) -> str | None:
    keys = ("iletisim", "iletişim", "contact", "bize-ulasin", "bize-ulaşın")
    for link in links or []:
        if normalize_domain(link) == normalize_domain(base) and any(k in link.lower() for k in keys):
            return link
    return base.rstrip("/") + paths[0] if paths else None


def enrich_one(client, row, cfg) -> dict:
    e = cfg["enrichment"]
    url = row["website"]
    res = client.scrape(
        url,
        formats=[
            {"type": "html", "mode": "normal"},
            {"type": "links"},
            {"type": "json", "prompt": ENRICH_PROMPT, "schema": ENRICH_SCHEMA},
        ],
        fetch_config=e.get("fetch_config"),
    )
    results = res.get("results", {})
    html = unwrap(results.get("html", {}).get("data")) or ""
    links = results.get("links", {}).get("data") or []
    profile = unwrap(results.get("json", {}).get("data")) or {}
    if isinstance(html, list):
        html = "\n".join(html)

    fp = analyze_html(html)
    profile["contact_emails"] = role_based_emails((profile.get("contact_emails") or []) + fp["fp_emails"])
    profile["phones"] = list(dict.fromkeys(profile.get("phones") or []))

    if e.get("contact_page_fallback") and not (profile["contact_emails"] or profile["phones"]):
        contact_url = find_contact_url(url, links, e.get("contact_paths", []))
        if contact_url:
            try:
                c = client.extract(contact_url, CONTACT_PROMPT, CONTACT_SCHEMA, e.get("fetch_config")).get("json") or {}
                profile["contact_emails"] = role_based_emails(c.get("contact_emails") or [])
                profile["phones"] = c.get("phones") or []
                profile["whatsapp_number"] = profile.get("whatsapp_number") or c.get("whatsapp_number")
                profile["city"] = profile.get("city") or c.get("city")
            except SgaiError as err:
                print(f"    iletişim sayfası alınamadı ({contact_url}): {err}", file=sys.stderr)

    # LLM + deterministik sinyalleri birleştir
    profile["ecommerce_platform"] = fp["fp_platform"] or profile.get("ecommerce_platform")
    profile["live_chat_vendors"] = fp["fp_live_chat"]
    profile["has_live_chat"] = bool(fp["fp_live_chat"]) or bool(profile.get("has_live_chat"))
    if fp["fp_whatsapp_numbers"]:
        profile["has_whatsapp"] = True
        profile["whatsapp_number"] = profile.get("whatsapp_number") or fp["fp_whatsapp_numbers"][0]
    profile["tracking"] = fp["fp_tracking"]
    return profile


def enrich(client, db, cfg) -> int:
    limit = cfg["enrichment"].get("max_companies_per_run", 40)
    rows = db.execute("SELECT * FROM leads WHERE status='new' ORDER BY discovered_at LIMIT ?", (limit,)).fetchall()
    done = 0
    for row in rows:
        print(f"  enrich {row['domain']} …")
        try:
            profile = enrich_one(client, row, cfg)
            db.execute("UPDATE leads SET data=?, status='enriched', enriched_at=?, error=NULL WHERE domain=?",
                       (json.dumps(profile, ensure_ascii=False), now(), row["domain"]))
            done += 1
        except SgaiError as err:
            if err.status == 402:
                print("  ! kredi bitti, zenginleştirme durduruldu", file=sys.stderr)
                break
            db.execute("UPDATE leads SET status='failed', error=? WHERE domain=?", (str(err), row["domain"]))
        db.commit()
    return done


# ---------------------------------------------------------------- 3) score

def rule_hits(rule: dict, profile: dict) -> bool:
    v = profile.get(rule["field"])
    op = rule["op"]
    if op == "true":
        return v is True
    if op == "false":
        return v is False or v is None
    if op == "nonempty":
        return bool(v)
    if op == "gte":
        return isinstance(v, (int, float)) and v >= rule["value"]
    if op == "in":
        return bool(v) and str(v).lower() in [x.lower() for x in rule["value"]]
    raise ValueError(f"bilinmeyen op: {op}")


def score_profile(profile: dict, cfg) -> tuple[int, str, list[str]]:
    text = " ".join(str(profile.get(k) or "") for k in ("sector", "short_description", "company_name")).lower()
    profile["sector_match"] = any(s.lower() in text for s in cfg["icp"]["target_sectors"])
    sc = cfg["scoring"]
    total = max_total = 0
    reasons = []
    for rule in sc["rules"]:
        max_total += rule["points"]
        if rule_hits(rule, profile):
            total += rule["points"]
            reasons.append(rule["label"])
    score = round(100 * total / max_total) if max_total else 0
    tier = "sıcak" if score >= sc["hot_threshold"] else "ılık" if score >= sc["warm_threshold"] else "soğuk"
    return score, tier, reasons


def score(db, cfg) -> int:
    rows = db.execute("SELECT domain, data FROM leads WHERE status='enriched'").fetchall()
    for r in rows:
        s, tier, reasons = score_profile(json.loads(r["data"]), cfg)
        db.execute("UPDATE leads SET score=?, tier=?, reasons=? WHERE domain=?",
                   (s, tier, json.dumps(reasons, ensure_ascii=False), r["domain"]))
    db.commit()
    return len(rows)


# ---------------------------------------------------------------- 4) export

def lead_record(r) -> dict:
    p = json.loads(r["data"] or "{}")
    return {
        "tier": r["tier"], "score": r["score"],
        "company_name": p.get("company_name") or r["name"], "website": r["website"],
        "sector": p.get("sector"), "city": p.get("city"),
        "ecommerce_platform": p.get("ecommerce_platform"),
        "estimated_product_count": p.get("estimated_product_count"),
        "has_whatsapp": p.get("has_whatsapp"), "has_live_chat": p.get("has_live_chat"),
        "live_chat_vendors": ", ".join(p.get("live_chat_vendors") or []),
        "instagram_url": p.get("instagram_url"),
        "contact_emails": ", ".join(p.get("contact_emails") or []),
        "phones": ", ".join(p.get("phones") or []),
        "tracking": ", ".join(p.get("tracking") or []),
        "sales_hook": p.get("sales_hook"),
        "score_reasons": " · ".join(json.loads(r["reasons"] or "[]")),
        "source": r["source"], "discovered_at": r["discovered_at"],
    }


def export(db, cfg, base: Path) -> tuple[int, int]:
    out = cfg["output"]
    rows = db.execute("SELECT * FROM leads WHERE status='enriched' AND score IS NOT NULL ORDER BY score DESC").fetchall()
    csv_path = base / out["csv_path"]
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with csv_path.open("w", newline="", encoding="utf-8-sig") as f:  # utf-8-sig: Excel Türkçe karakterleri doğru açar
        w = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        w.writeheader()
        for r in rows:
            w.writerow(lead_record(r))

    pushed = 0
    hook = os.environ.get(out.get("webhook_url_env") or "", "")
    if hook:
        for r in rows:
            if r["pushed_at"] or r["tier"] == "soğuk":
                continue
            req = urllib.request.Request(hook, data=json.dumps(lead_record(r), ensure_ascii=False).encode(),
                                         headers={"Content-Type": "application/json"}, method="POST")
            try:
                urllib.request.urlopen(req, timeout=30).read()
                db.execute("UPDATE leads SET pushed_at=? WHERE domain=?", (now(), r["domain"]))
                pushed += 1
            except Exception as err:  # webhook hatası pipeline'ı durdurmamalı
                print(f"  ! webhook başarısız ({r['domain']}): {err}", file=sys.stderr)
        db.commit()
    return len(rows), pushed


# ---------------------------------------------------------------- monitors

def setup_monitors(client, cfg) -> None:
    m = cfg["monitors"]
    hook = os.environ.get(m.get("webhook_url_env") or "")
    for url in m.get("urls", []):
        res = client.create_monitor(
            url, name=f"lead-source: {normalize_domain(url)}", interval=m["interval"],
            formats=[{"type": "json", "prompt": DISCOVERY_PROMPT, "schema": DISCOVERY_SCHEMA}],
            webhook_url=hook or None,
        )
        print(f"  monitor {url}: {res.get('cronId')} ({res.get('status')})")


# ---------------------------------------------------------------- CLI

def main(argv=None) -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("command", choices=["discover", "enrich", "score", "export", "run", "monitors", "credits"])
    ap.add_argument("--config", default=str(HERE / "config.json"))
    ap.add_argument("--mock", action="store_true", help="API yerine fixtures/ altındaki örnek yanıtları kullan")
    args = ap.parse_args(argv)

    cfg = json.loads(Path(args.config).read_text(encoding="utf-8"))
    session = f"leadgen-{datetime.now(timezone.utc):%Y-%m-%d}"
    client = MockClient(HERE / "fixtures") if args.mock else ScrapeGraphClient(session_id=session)
    db = open_db(HERE / cfg["output"]["db_path"])

    if args.command == "credits":
        print(json.dumps(client.credits(), indent=2))
        return
    if args.command == "monitors":
        setup_monitors(client, cfg)
        return
    if args.command in ("discover", "run"):
        print(f"[1/4] keşif → {discover(client, db, cfg)} yeni aday")
    if args.command in ("enrich", "run"):
        print(f"[2/4] zenginleştirme → {enrich(client, db, cfg)} şirket")
    if args.command in ("score", "run"):
        print(f"[3/4] skorlama → {score(db, cfg)} şirket")
    if args.command in ("export", "run"):
        n, pushed = export(db, cfg, HERE)
        print(f"[4/4] dışa aktarım → {n} lead CSV'ye yazıldı, {pushed} lead webhook'a gönderildi")
    summary = db.execute("SELECT tier, COUNT(*) c FROM leads WHERE tier IS NOT NULL GROUP BY tier").fetchall()
    print("özet:", {r["tier"]: r["c"] for r in summary}, f"| tahmini harcanan kredi: ~{client.credits_spent_estimate}")


if __name__ == "__main__":
    main()
