import { mapOffProduct, type OffProduct } from "@/lib/tools/alma-off";
import { ENRICH_FIELDS, SAL_FIELDS, mergeEnrichment, productsFromSal } from "@/lib/tools/alma-off-search";
import type { FoodItem } from "@/lib/tools/alma-foods";

export const runtime = "nodejs";

// Primary: Search-a-licious (search.openfoodfacts.org), then v2 product reads
// by barcode for serving/unit fields (SAL hits do not include them). Fallback: the legacy search.pl.
// Each attempt is bounded (including the body). Only 5xx (without Retry-After),
// timeouts and network errors are retried, once, after a short backoff.
const SAL_TIMEOUT_MS = 5_000;
const ENRICH_TIMEOUT_MS = 3_000;
const LEGACY_TIMEOUT_MS = 6_000;
const RETRY_BACKOFF_MS = 350;
const HEADERS = { "User-Agent": "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)", Accept: "application/json" };
const SEARCH_UNAVAILABLE =
  "Packaged-food search is temporarily unavailable. Sample foods and custom entry still work; try packaged-food search again later.";

type Attempt = { ok: true; data: unknown } | { ok: false; reason: string; status?: number };

async function getJson(url: URL, timeoutMs: number, retries: number): Promise<Attempt> {
  let last: Attempt = { ok: false, reason: "upstream_unavailable" };
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    let retry = false;
    let readingBody = false;
    try {
      const response = await fetch(url, { headers: HEADERS, next: { revalidate: 0 }, signal: controller.signal });
      if (!response.ok) {
        await response.body?.cancel();
        last = { ok: false, reason: response.status === 429 ? "upstream_rate_limited" : "upstream_http_error", status: response.status };
        retry = response.status >= 500 && !response.headers.has("Retry-After");
      } else {
        readingBody = true;
        return { ok: true, data: await response.json() };
      }
    } catch {
      last = { ok: false, reason: controller.signal.aborted ? "upstream_timeout" : readingBody ? "upstream_invalid_response" : "upstream_network_error" };
      retry = true;
    } finally {
      clearTimeout(timeout);
    }
    if (!retry || attempt === retries) break;
    await new Promise((resolve) => setTimeout(resolve, RETRY_BACKOFF_MS));
  }
  return last;
}

function toFoods(products: OffProduct[]): FoodItem[] {
  return products
    .map((product, index) => mapOffProduct(product, index))
    .filter((item): item is FoodItem => item !== null)
    .slice(0, 12);
}

async function searchSal(query: string): Promise<Attempt & { products?: OffProduct[] }> {
  const sal = new URL("https://search.openfoodfacts.org/search");
  sal.searchParams.set("q", query);
  sal.searchParams.set("page_size", "24");
  sal.searchParams.set("fields", SAL_FIELDS);
  const result = await getJson(sal, SAL_TIMEOUT_MS, 1);
  if (!result.ok) return result;
  const products = productsFromSal(result.data).filter((p) => p.code && p.product_name && p.nutriments);
  const usable = products.filter((p) => mapOffProduct(p, 0) !== null).slice(0, 12);
  return { ...result, products: await enrich(usable.length > 0 ? usable : products.slice(0, 12)) };
}

// Serving/unit fields per barcode from the v2 product endpoint (not search),
// at most 12 per search, 4 at a time, cached per server instance for a day.
// Any failure keeps the quantity-derived unit and the default serving.
const ENRICH_CACHE = new Map<string, { at: number; data: Partial<OffProduct> | null }>();
const ENRICH_TTL_MS = 24 * 60 * 60 * 1000;

async function enrich(products: OffProduct[]): Promise<OffProduct[]> {
  const codes = [...new Set(products.map((p) => p.code).filter((c): c is string => /^\d{4,14}$/.test(c ?? "")))];
  const found: Partial<OffProduct>[] = [];
  const todo: string[] = [];
  for (const code of codes) {
    const hit = ENRICH_CACHE.get(code);
    if (hit && Date.now() - hit.at < ENRICH_TTL_MS) {
      if (hit.data) found.push(hit.data);
    } else todo.push(code);
  }
  let stop = false;
  for (let i = 0; i < todo.length && !stop; i += 4) {
    await Promise.all(todo.slice(i, i + 4).map(async (code) => {
      const url = new URL(`https://world.openfoodfacts.org/api/v2/product/${code}.json`);
      url.searchParams.set("fields", ENRICH_FIELDS);
      const r = await getJson(url, ENRICH_TIMEOUT_MS, 0);
      if (!r.ok) {
        if (r.status === 429) stop = true; // back off for the rest of this search
        return;
      }
      const product = (r.data as { product?: Partial<OffProduct> }).product ?? null;
      ENRICH_CACHE.set(code, { at: Date.now(), data: product ? { ...product, code } : null });
      if (product) found.push({ ...product, code });
    }));
  }
  if (ENRICH_CACHE.size > 5_000) ENRICH_CACHE.clear();
  return mergeEnrichment(products, { products: found });
}

async function searchLegacy(query: string): Promise<Attempt & { products?: OffProduct[] }> {
  const off = new URL("https://world.openfoodfacts.org/cgi/search.pl");
  off.searchParams.set("search_terms", query);
  off.searchParams.set("search_simple", "1");
  off.searchParams.set("action", "process");
  off.searchParams.set("json", "1");
  off.searchParams.set("page_size", "12");
  const result = await getJson(off, LEGACY_TIMEOUT_MS, 1);
  if (!result.ok) return result;
  return { ...result, products: ((result.data as { products?: OffProduct[] }).products ?? []) };
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) {
    return Response.json({ success: false, error: "Type at least two letters to search packaged foods." }, { status: 400 });
  }
  if (query.length > 80) {
    return Response.json({ success: false, error: "That search is too long." }, { status: 400 });
  }

  const primary = await searchSal(query);
  if (primary.ok && primary.products) {
    const foods = toFoods(primary.products);
    if (foods.length > 0) return Response.json({ success: true, foods, source: "open-food-facts" });
  }
  // Primary failed (or returned nothing usable): one fallback to the legacy search.
  const legacy = await searchLegacy(query);
  if (legacy.ok && legacy.products) {
    return Response.json({ success: true, foods: toFoods(legacy.products), source: "open-food-facts" });
  }
  if (primary.ok) {
    // New search worked but had no usable matches, and the fallback failed.
    return Response.json({ success: true, foods: [], source: "open-food-facts" });
  }
  return Response.json(
    { success: false, error: SEARCH_UNAVAILABLE, reason: legacy.ok ? "upstream_unavailable" : legacy.reason, upstreamStatus: legacy.ok ? undefined : legacy.status },
    { status: 502 },
  );
}
