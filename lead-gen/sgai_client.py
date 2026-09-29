"""ScrapeGraphAI v2 REST istemcisi (yalnızca standart kütüphane).

Resmi `scrapegraph-py` SDK'sı Python >= 3.12 istediği için doğrudan REST API
kullanıyoruz. Dokümantasyon: https://docs.scrapegraphai.com/api-reference/introduction
"""

from __future__ import annotations

import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE_URL = os.environ.get("SGAI_API_URL", "https://v2-api.scrapegraphai.com/api")


class SgaiError(RuntimeError):
    def __init__(self, status: int, message: str):
        super().__init__(f"HTTP {status}: {message}")
        self.status = status


class ScrapeGraphClient:
    """`/scrape`, `/extract`, `/search`, `/monitor`, `/credits` uçları için ince sarmalayıcı."""

    def __init__(self, api_key: str | None = None, session_id: str | None = None,
                 timeout: int = 120, max_retries: int = 5):
        self.api_key = api_key or os.environ.get("SGAI_API_KEY")
        if not self.api_key:
            raise SystemExit("SGAI_API_KEY tanımlı değil (ya da --mock kullanın).")
        self.session_id = session_id
        self.timeout = timeout
        self.max_retries = max_retries
        self.credits_spent_estimate = 0

    # ---- düşük seviye -------------------------------------------------
    def _request(self, method: str, path: str, body: dict | None = None) -> dict:
        headers = {"SGAI-APIKEY": self.api_key, "Content-Type": "application/json"}
        if self.session_id:
            headers["SGAI-Session-Id"] = self.session_id
        data = json.dumps(body).encode() if body is not None else None

        for attempt in range(self.max_retries):
            req = urllib.request.Request(f"{BASE_URL}{path}", data=data, headers=headers, method=method)
            try:
                with urllib.request.urlopen(req, timeout=self.timeout) as resp:
                    return json.loads(resp.read().decode())
            except urllib.error.HTTPError as e:
                msg = e.read().decode(errors="replace")[:500]
                # 429: rate limit, 5xx: geçici — üstel geri çekilme ile tekrar dene
                if e.code in (429, 500, 502, 503, 504) and attempt < self.max_retries - 1:
                    time.sleep(2 ** attempt)
                    continue
                raise SgaiError(e.code, msg) from None
            except (urllib.error.URLError, TimeoutError) as e:
                if attempt < self.max_retries - 1:
                    time.sleep(2 ** attempt)
                    continue
                raise SgaiError(0, str(e)) from None
        raise SgaiError(0, "tekrar deneme limiti aşıldı")

    # ---- servisler ----------------------------------------------------
    def search(self, query: str, num_results: int = 10, prompt: str | None = None,
               schema: dict | None = None, country: str | None = None,
               time_range: str | None = None) -> dict:
        body: dict = {"query": query, "numResults": num_results}
        if prompt:
            body["prompt"] = prompt
        if schema:
            body["schema"] = schema
        if country:
            body["locationGeoCode"] = country
        if time_range:
            body["timeRange"] = time_range
        self.credits_spent_estimate += num_results * (5 if prompt else 2)
        return self._request("POST", "/search", body)

    def scrape(self, url: str, formats: list[dict], fetch_config: dict | None = None) -> dict:
        body: dict = {"url": url, "formats": formats}
        if fetch_config:
            body["fetchConfig"] = fetch_config
        self.credits_spent_estimate += sum(5 if f["type"] == "json" else 1 for f in formats)
        return self._request("POST", "/scrape", body)

    def extract(self, url: str, prompt: str, schema: dict | None = None,
                fetch_config: dict | None = None) -> dict:
        body: dict = {"url": url, "prompt": prompt}
        if schema:
            body["schema"] = schema
        if fetch_config:
            body["fetchConfig"] = fetch_config
        self.credits_spent_estimate += 5
        return self._request("POST", "/extract", body)

    def create_monitor(self, url: str, name: str, interval: str, formats: list[dict],
                       webhook_url: str | None = None) -> dict:
        body: dict = {"url": url, "name": name, "interval": interval, "formats": formats}
        if webhook_url:
            body["webhookUrl"] = webhook_url
        return self._request("POST", "/monitor", body)

    def credits(self) -> dict:
        return self._request("GET", "/credits")


class MockClient(ScrapeGraphClient):
    """API anahtarı olmadan uçtan uca test için `fixtures/` altındaki örnek yanıtları döner."""

    def __init__(self, fixtures_dir: Path, **_: object):
        self.fixtures = fixtures_dir
        self.session_id = None
        self.credits_spent_estimate = 0

    def _load(self, name: str) -> dict:
        return json.loads((self.fixtures / name).read_text(encoding="utf-8"))

    def _request(self, method: str, path: str, body: dict | None = None) -> dict:
        if path == "/search":
            return self._load("search.json")
        if path in ("/scrape", "/extract"):
            host = body["url"].split("//", 1)[-1].split("/", 1)[0].removeprefix("www.")
            f = self.fixtures / f"{path.strip('/')}_{host}.json"
            if not f.exists():
                raise SgaiError(404, f"mock fixture yok: {f.name}")
            return json.loads(f.read_text(encoding="utf-8"))
        if path == "/monitor":
            return {"cronId": "mock-cron", "status": "active", "config": body}
        if path == "/credits":
            return {"remaining": 500, "plan": "mock"}
        raise SgaiError(404, path)
