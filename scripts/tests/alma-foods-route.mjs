// Run: node --experimental-strip-types scripts/tests/alma-foods-route.mjs
// Transpile only this route to load its Next.js aliases without a running server.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const href = (p) => JSON.stringify(pathToFileURL(resolve(p)).href);
const source = readFileSync("src/app/api/alma/foods/route.ts", "utf8")
  .replaceAll('"@/lib/tools/alma-off-search"', href("src/lib/tools/alma-off-search.ts"))
  .replaceAll('"@/lib/tools/alma-off"', href("src/lib/tools/alma-off.ts"));
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { GET } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const realFetch = globalThis.fetch;
const UA = "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)";
const salHit = { code: "1234567890123", product_name: "Test packaged oats", brands: ["Oatco"], quantity: "500 g", nutriments: { "energy-kcal_100g": 380, proteins_100g: 13, carbohydrates_100g: 67, fat_100g: 7 } };
const colaHit = { code: "5449000000996", product_name: "Cola", quantity: "330 ml", nutriments: { "energy-kcal_100g": 42, proteins_100g: 0, carbohydrates_100g: 10.6, fat_100g: 0 } };
const legacyProduct = { code: "legacy", product_name: "Legacy oats", nutriments: { "energy-kcal_100g": 380, proteins_100g: 13, carbohydrates_100g: 67, fat_100g: 7 } };
const request = (q = "packaged oats") => new Request(`http://localhost/api/alma/foods?q=${encodeURIComponent(q)}`);
let log = [];
function mock(handlers) {
  log = [];
  globalThis.fetch = async (input, options) => {
    const url = new URL(input);
    assert.equal(options.headers["User-Agent"], UA);
    assert.equal(options.headers.Accept, "application/json");
    assert(options.signal instanceof AbortSignal);
    const kind = url.host === "search.openfoodfacts.org" ? "sal" : url.pathname.startsWith("/cgi/search.pl") ? "legacy" : url.pathname.startsWith("/api/v2/product/") ? "product" : "other";
    log.push({ kind, url, signal: options.signal });
    const handler = handlers[kind];
    if (!handler) throw new Error(`unexpected fetch ${url}`);
    return handler(log.filter((l) => l.kind === kind).length, url, options);
  };
}
const count = (kind) => log.filter((l) => l.kind === kind).length;
let n = 0;
const fresh = () => ({ ...salHit, code: String(2000000000000 + ++n) }); // avoid enrichment cache between cases

try {
  // 1. Primary search works; serving enriched by product read; no legacy call.
  let hit = fresh();
  mock({
    sal: (_c, url) => { assert.equal(url.searchParams.get("q"), "packaged oats"); return Response.json({ hits: [hit, colaHit] }); },
    product: (_c, url) => {
      const code = url.pathname.split("/").pop().replace(".json", "");
      return Response.json({ product: code === hit.code ? { serving_quantity: 40, serving_quantity_unit: "g", serving_size: "40 g" } : { serving_quantity: 330, serving_quantity_unit: "ml", serving_size: "330 ml", product_quantity_unit: "ml" } });
    },
  });
  let response = await GET(request());
  let data = await response.json();
  assert.equal(response.status, 200); assert.equal(count("legacy"), 0); assert.equal(count("sal"), 1); assert.equal(count("product"), 2);
  assert.equal(data.foods[0].name, "Test packaged oats"); assert.equal(data.foods[0].servingGrams, 40); assert.equal(data.foods[0].calories, 152);
  assert.equal(data.foods[0].brand, "Oatco");
  assert.equal(data.foods[1].basis, "ml"); assert.equal(data.foods[1].servingMl, 330);
  console.log("PASS: search.openfoodfacts.org primary + per-barcode serving enrichment, same response shape");

  // 2. Enrichment fails => keep quantity-derived unit and default serving (existing behaviour).
  hit = fresh();
  mock({ sal: () => Response.json({ hits: [hit, { ...colaHit, code: "5449000000997" }] }), product: () => new Response("down", { status: 503 }) });
  data = await (await GET(request())).json();
  assert.equal(data.foods[0].servingGrams, 100); assert.equal(data.foods[0].calories, 380);
  assert.equal(data.foods[1].basis, "ml"); assert.equal(data.foods[1].servingLabel, "100 ml");
  console.log("PASS: enrichment failure keeps per-100 values, unit from quantity, default serving");

  // 3. Enrichment 429 stops further product reads in that search.
  const many = Array.from({ length: 8 }, () => fresh());
  mock({ sal: () => Response.json({ hits: many }), product: () => new Response("slow down", { status: 429 }) });
  await GET(request());
  assert(count("product") <= 4, `stopped after first batch: ${count("product")}`);
  console.log("PASS: product-read 429 stops enrichment for the rest of the search");

  // 4. Primary 503 => one retry with backoff, then legacy fallback succeeds.
  mock({ sal: () => new Response("down", { status: 503 }), legacy: (_c, url) => { assert.equal(url.searchParams.get("search_terms"), "packaged oats"); return Response.json({ products: [legacyProduct] }); } });
  let start = Date.now();
  response = await GET(request());
  assert.equal(response.status, 200); assert.equal(count("sal"), 2); assert.equal(count("legacy"), 1);
  assert(Date.now() - start >= 300, "retry must have backoff");
  assert.equal((await response.json()).foods[0].name, "Legacy oats");
  console.log("PASS: primary 503 => one retry with backoff, then legacy fallback");

  // 5. Both down => useful 502, bounded attempts.
  mock({ sal: () => new Response("down", { status: 502 }), legacy: () => new Response("down", { status: 503 }) });
  response = await GET(request());
  assert.equal(response.status, 502); assert.equal(count("sal"), 2); assert.equal(count("legacy"), 2);
  data = await response.json();
  assert.match(data.error, /Sample foods and custom entry still work/);
  assert.equal(data.reason, "upstream_http_error"); assert.equal(data.upstreamStatus, 503);
  console.log("PASS: both searches down => two attempts each and a useful 502");

  // 6. 4xx / Retry-After are not retried.
  for (const status of [400, 403, 429]) {
    mock({ sal: () => new Response("no", { status }), legacy: () => new Response("no", { status }) });
    response = await GET(request());
    assert.equal(count("sal"), 1); assert.equal(count("legacy"), 1);
    assert.equal((await response.json()).reason, status === 429 ? "upstream_rate_limited" : "upstream_http_error");
  }
  mock({ sal: () => new Response("busy", { status: 503, headers: { "Retry-After": "60" } }), legacy: () => new Response("busy", { status: 503, headers: { "Retry-After": "60" } }) });
  await GET(request()); assert.equal(count("sal"), 1); assert.equal(count("legacy"), 1);
  console.log("PASS: 4xx and Retry-After not retried");

  // 7. Network error and invalid JSON reasons.
  mock({ sal: () => { throw new TypeError("net"); }, legacy: () => { throw new TypeError("net"); } });
  assert.equal((await (await GET(request())).json()).reason, "upstream_network_error");
  mock({ sal: () => new Response("x"), legacy: () => new Response("x") });
  assert.equal((await (await GET(request())).json()).reason, "upstream_invalid_response");
  console.log("PASS: network failure and unreadable JSON give distinct reasons");

  // 8. Primary empty => legacy tried once; both empty => 200 with [].
  mock({ sal: () => Response.json({ hits: [] }), legacy: () => Response.json({ products: [] }) });
  response = await GET(request());
  assert.equal(response.status, 200); assert.deepEqual((await response.json()).foods, []); assert.equal(count("sal"), 1); assert.equal(count("legacy"), 1);
  console.log("PASS: empty primary => single legacy attempt, empty result");

  // 9. Timeouts: primary 5s ×2 then legacy 6s ×2, all aborted.
  const hang = (_c, _u, { signal }) => new Promise((_r, reject) => signal.addEventListener("abort", () => reject(new DOMException("t", "AbortError")), { once: true }));
  mock({ sal: hang, legacy: hang });
  start = Date.now(); response = await GET(request());
  const elapsed = Date.now() - start;
  assert.equal(response.status, 502); assert.equal(count("sal"), 2); assert.equal(count("legacy"), 2);
  assert(elapsed >= 22000 && elapsed < 26000, `timeout bound: ${elapsed}ms`);
  assert(log.every((l) => l.signal.aborted));
  assert.equal((await response.json()).reason, "upstream_timeout");
  console.log(`PASS: hung upstreams aborted (5s×2, 6s×2), total ${elapsed}ms`);

  mock({});
  for (const q of ["a", "x".repeat(81)]) {
    response = await GET(new Request(`http://localhost/api/alma/foods?q=${q}`));
    assert.equal(response.status, 400); assert.equal(log.length, 0);
  }
  console.log("PASS: query validation prevents upstream requests");
} finally {
  globalThis.fetch = realFetch;
}
