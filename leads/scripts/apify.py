"""Minimal Apify client. Token is read from APIFY_API_TOKEN env only (never persisted)."""
import json, os, time, urllib.request, urllib.error

BASE = "https://api.apify.com/v2"


def _req(method, path, body=None, timeout=120):
    tok = os.environ["APIFY_API_TOKEN"]
    data = json.dumps(body).encode() if body is not None else None
    for attempt in range(5):
        try:
            r = urllib.request.Request(BASE + path, data=data, method=method,
                                       headers={"Authorization": f"Bearer {tok}",
                                                "Content-Type": "application/json"})
            with urllib.request.urlopen(r, timeout=timeout) as resp:
                return json.loads(resp.read() or b"{}")
        except (urllib.error.URLError, ConnectionError, TimeoutError) as e:
            if attempt == 4:
                raise
            time.sleep(2 ** (attempt + 1))


def run_actor(actor, inp, max_wait=1800):
    """Start actor run, poll until finished, return (run, items)."""
    run = _req("POST", f"/acts/{actor}/runs", inp)["data"]
    rid = run["id"]
    t0 = time.time()
    while run["status"] in ("READY", "RUNNING") and time.time() - t0 < max_wait:
        time.sleep(10)
        run = _req("GET", f"/actor-runs/{rid}")["data"]
    items = _req("GET", f"/datasets/{run['defaultDatasetId']}/items?clean=true&format=json", timeout=300)
    return run, items


def usage():
    return _req("GET", "/users/me/limits")["data"]["current"]["monthlyUsageUsd"]
