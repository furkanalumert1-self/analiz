#!/usr/bin/env python3
"""Apify actor'ünü çalıştırır, bitmesini bekler ve dataset'i JSON olarak indirir.

Token APIFY_TOKEN ortam değişkeninden okunur (asla dosyaya yazma).

  APIFY_TOKEN=... python3 apify_run.py compass~crawler-google-places input.json out.json --max-usd 1.0
"""

import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.request

API = "https://api.apify.com/v2"


def call(method, path, token, body=None):
    req = urllib.request.Request(
        API + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                return json.load(resp)
        except urllib.error.HTTPError as e:
            sys.exit(f"Apify HTTP {e.code}: {e.read().decode(errors='replace')[:500]}")
        except (urllib.error.URLError, ConnectionError, TimeoutError):
            if attempt == 4:
                raise
            time.sleep(2 ** (attempt + 1))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("actor", help="ör. compass~crawler-google-places")
    ap.add_argument("input", help="actor input JSON dosyası")
    ap.add_argument("output", help="dataset'in yazılacağı JSON dosyası")
    ap.add_argument("--max-usd", type=float, required=True, help="Bu çalıştırma için harcama tavanı (Apify minimumu $0.50)")
    ap.add_argument("--run-id", help="Yeni run başlatmak yerine var olan run'ı bekle ve indir")
    args = ap.parse_args()

    token = os.environ.get("APIFY_TOKEN")
    if not token:
        sys.exit("APIFY_TOKEN ortam değişkeni gerekli")

    with open(args.input, encoding="utf-8") as f:
        actor_input = json.load(f)

    if args.run_id:
        run = call("GET", f"/actor-runs/{args.run_id}", token)["data"]
    else:
        run = call("POST", f"/acts/{args.actor}/runs?maxTotalChargeUsd={args.max_usd}", token, actor_input)["data"]
        print(f"run {run['id']} başladı", flush=True)
    while run["status"] in ("READY", "RUNNING"):
        time.sleep(15)
        run = call("GET", f"/actor-runs/{run['id']}", token)["data"]
    print(f"run {run['id']} -> {run['status']}  ücret: ${run.get('usageTotalUsd', 0):.3f}", flush=True)

    items = call("GET", f"/datasets/{run['defaultDatasetId']}/items?clean=true&format=json", token)
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False)
    print(f"{len(items)} kayıt -> {args.output}")


if __name__ == "__main__":
    main()
