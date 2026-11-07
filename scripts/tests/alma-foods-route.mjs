// Run: node --experimental-strip-types scripts/tests/alma-foods-route.mjs
// Transpile only this route to load its Next.js aliases without a running server.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const source = readFileSync("src/app/api/alma/foods/route.ts", "utf8")
  .replaceAll('"@/lib/tools/alma-off"', JSON.stringify(pathToFileURL(resolve("src/lib/tools/alma-off.ts")).href));
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { GET } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const realFetch = globalThis.fetch;
const product = { code: "test", product_name: "Test packaged oats", nutriments: { "energy-kcal_100g": 380, proteins_100g: 13, carbohydrates_100g: 67, fat_100g: 7 } };
const request = () => new Request("http://localhost/api/alma/foods?q=packaged%20oats");
let calls = 0;
let signals = [];
function mock(fn) {
  calls = 0; signals = [];
  globalThis.fetch = async (url, options) => {
    calls += 1; signals.push(options.signal);
    assert.equal(new URL(url).searchParams.get("search_terms"), "packaged oats");
    assert.equal(options.headers["User-Agent"], "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)");
    assert.equal(options.headers.Accept, "application/json");
    assert(options.signal instanceof AbortSignal);
    return fn(calls, options);
  };
}
try {
  mock(() => new Response("down", { status: 503 }));
  let start = Date.now();
  let response = await GET(request());
  assert.equal(response.status, 502); assert.equal(calls, 2);
  assert(Date.now() - start >= 300, "retry must have backoff");
  assert.notEqual(signals[0], signals[1]);
  assert.match((await response.json()).error, /Sample foods and custom entry still work/);
  console.log("PASS: repeated 503 => exactly two attempts, backoff, fresh signals, useful 502");

  mock((call) => call === 1 ? new Response("down", { status: 502 }) : Response.json({ products: [product] }));
  response = await GET(request()); assert.equal(response.status, 200); assert.equal(calls, 2);
  assert.equal((await response.json()).foods[0].name, product.product_name);
  console.log("PASS: transient 502 => one retry and mapped packaged-food result");

  for (const status of [400, 403, 429]) {
    mock(() => new Response("rejected", { status }));
    response = await GET(request()); assert.equal(response.status, 502); assert.equal(calls, 1);
  }
  console.log("PASS: upstream 400/403/429 not retried");

  mock(() => { throw new TypeError("network failure"); });
  response = await GET(request()); assert.equal(response.status, 502); assert.equal(calls, 2);
  console.log("PASS: network failure => bounded retry");

  mock(() => new Response("not JSON"));
  response = await GET(request()); assert.equal(response.status, 502); assert.equal(calls, 2);
  console.log("PASS: unreadable JSON => bounded retry");

  mock(() => Response.json({ products: [] }));
  response = await GET(request()); assert.equal(response.status, 200); assert.equal(calls, 1);
  assert.deepEqual((await response.json()).foods, []);
  console.log("PASS: valid empty response => no retry");

  mock((_call, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener("abort", () => reject(new DOMException("timed out", "AbortError")), { once: true });
  }));
  start = Date.now(); response = await GET(request());
  assert.equal(response.status, 502); assert.equal(calls, 2);
  const elapsed = Date.now() - start;
  assert(elapsed >= 12000 && elapsed < 16000, `timeout bound: ${elapsed}ms`);
  assert(signals.every((signal) => signal.aborted));
  console.log(`PASS: hung upstream aborted twice at 6s, total ${elapsed}ms including backoff`);

  mock(() => { throw new Error("must not fetch"); });
  for (const q of ["a", "x".repeat(81)]) {
    response = await GET(new Request(`http://localhost/api/alma/foods?q=${q}`));
    assert.equal(response.status, 400); assert.equal(calls, 0);
  }
  console.log("PASS: existing query validation prevents upstream requests");
} finally {
  globalThis.fetch = realFetch;
}
