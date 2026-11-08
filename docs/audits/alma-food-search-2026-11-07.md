# Alma packaged-food search: follow-up diagnosis (2026-11-07)

Times below are Asia/Dubai (UTC+4). Raw HTTP bodies/headers, primary-document snapshots and a machine-readable table are in `/workspace/tsh/alma-food-search-2026-11-07/` on the review box.

## Observations, not assumed root causes

| Request | Time (Asia/Dubai) | HTTP | Total seconds |
| --- | --- | --- | --- |
| Live `/api/alma/foods?q=banana` | 19:21:15 | 200 | 1.668920 |
| OFF legacy search.pl, banana, same route UA | 19:21:15 | 503 | 0.426933 |
| OFF v2 structured category search, bananas | 19:22:01 | 200 | 1.208064 |
| OFF Search-a-licious full-text search, banana | 19:22:17 | 200 | 0.498494 |
| OFF legacy search.pl, banana, same route UA | 19:22:17 | 503 | 0.425107 |
| OFF Search-a-licious full-text search, Nutella | 19:22:29 | 200 | 0.554794 |
| OFF legacy search.pl, Nutella, same route UA | 19:24:15 | 200 | 1.763258 |
| Live `/api/alma/foods?q=banana` | 19:24:17 | 502 | 0.816951 |

The legacy banana failures contain OFF's branded “Page temporarily unavailable” HTML, saying services are experiencing unusually high demand **or** the page is unavailable to anonymous users. None of these responses includes a RateLimit, X-RateLimit or Retry-After header. The live 502 contains only the generic fallback message, not the upstream status/cause. Its subsecond duration, and the directly observed fast HTTP 503s, are inconsistent with a six-second timeout being the explanation for these particular samples. A successful live request earlier in the same session disproves “always broken”.

**Verified failure mechanism:** the existing endpoint can return a fast, hard upstream HTTP error; Alma maps upstream failures to 502. **NEEDS OWNER/provider confirmation:** the exact reason OFF rejected these requests (global load, anonymous-client policy, query-specific handling, or a particular egress limit). These public responses cannot establish that Vercel/datacenter IPs are categorically blocked. Vercel returned a real 200 result and the same UA succeeded against legacy Nutella; neither a blanket Vercel block nor an invalid-UA diagnosis is supported. No UA rotation, authentication bypass or IP/host rotation was used.

## Relevant primary-source contract

- [OFF API policy](https://openfoodfacts.github.io/openfoodfacts-server/api/): search endpoints are limited to **10 requests/minute/IP**; it explicitly says not to use search-as-you-type. Global limits can return 503. A timeout/retry does not cure a persistently rejected request and may increase request pressure.
- [v2 search reference](https://openfoodfacts.github.io/documentation/docs/Product-Opener/v2/search/get-search/): structured filters are supported; **full-text search is not**. The 200 category response is not evidence that changing the URL and keeping `search_terms` would preserve food search.
- The v2 reference accepts a custom `app_name/app_version (URL or contact info)` User-Agent. Alma already supplies `AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)` and `Accept: application/json`; no made-up contact address was added.
- [Search-a-licious reference](https://openfoodfacts.github.io/search-a-licious/users/ref-openapi/): documented full-text POST `/search`, with `q`, `page_size`, `langs` and `fields`. The official service at `https://search.openfoodfacts.org/search` returned `hits`, not `products`, and `brands` arrays, not strings. The saved **unfiltered** Nutella hits contain no serving size/quantity or product-volume unit. Directly feeding that representation into the wave-2 mapper could lose serving/volume safeguards. A safe adoption needs authoritative full-product hydration and a request-budget design; that larger integration was not guessed or shipped.

## Scoped change on fix/audit-wave-2

1. Remove the 400 ms packaged-food search-as-you-type effect, a confirmed mismatch with OFF's published usage guidance. Keep sample/custom-food filtering local and instant. A button or Enter explicitly submits packaged-food search; disable parallel submissions, abort/ignore obsolete requests, and hide results belonging to another query. Retain the drinks exclusion and every serving/storage safeguard.
2. Respect an upstream `Retry-After`: do not immediately retry that rejection. Preserve the existing six-second attempt limit and one retry/backoff for other transient errors; do not retry 4xx/429.
3. Add non-sensitive machine-readable `reason` and, for HTTP failures, `upstreamStatus` to failed responses. Distinguish HTTP rejection, explicit 429, timeout, unreadable response and network error. Do not relay arbitrary upstream HTML, log food-search text or expose credentials.

This is **partial mitigation, not a promise that upstream 503s disappear**. There is no distributed per-egress limiter or provider availability guarantee. No unsafe endpoint swap, circuit breaker, background request loop, silent diary migration or old-entry banner was introduced. A future provider integration must preserve the serving/volume exclusions and respect the shared egress quota.

## Verification

Deterministic route tests cover repeated/transient 5xx, Retry-After, no retry of 4xx/429, distinct HTTP/network/JSON/timeout reasons, empty results and query bounds. Component interaction tests cover no requests while typing, explicit button and Enter submission, single in-flight search, stale-result hiding, failure sample/custom entry persistence, drinks notice, exact portion arithmetic, and unchanged coach/storage fields. These are not browser E2E tests.

Baseline gates: `npm run check:tools`, `npm run lint`, `npx tsc --noEmit`, `npm run build` passed. Final gates and all three deterministic Alma suites also passed (route, UI fallback and OFF portions); the 6-second timeout test finished in 12,361 ms across two attempts plus backoff. Full output: `final-validation.log` in the evidence directory. The real legacy Nutella response contained 12 products, all mapped without a network retry in the offline check; barcode `3017620429484` maps 539 kcal/100 g to 80.85 kcal per 15 g. This is automated response validation, not a human package-label check. The two existing unrelated image lint warnings and locally skipped Gemini integration check (no key configured) remain disclosed; no environment changes were made.

## External-state conflict

Read-only GitHub inspection now shows main at `65d8809e8c47f0c2c924154003ac5e094038361f`, the merge of PR #18, dated **18:51:47 Asia/Dubai**. That differs from the earlier “wave 1 unmerged/main at 0d4e0e8” snapshot. This follow-up performed no merge, main push or production deployment, and did not revert anyone else's change. The new commit stays on wave 2.
