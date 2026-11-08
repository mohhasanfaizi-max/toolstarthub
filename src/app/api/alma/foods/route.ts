import { mapOffProduct, type OffProduct } from "@/lib/tools/alma-off";
import { ENRICH_FIELDS, SAL_FIELDS, mergeEnrichment, productsFromSal } from "@/lib/tools/alma-off-search";
import type { FoodItem } from "@/lib/tools/alma-foods";

export const runtime = "nodejs";

// Primary: Search-a-licious (search.openfoodfacts.org), then one batched v2
// read by barcode for serving/unit fields. Fallback: the legacy search.pl.
// Each attempt is bounded (including the body). Only 5xx (without Retry-After),
// timeouts and network errors are retried, once, after a short backoff.
const SAL_TIMEOUT_MS = 5_000;
const ENRICH_TIMEOUT_MS = 4_000;
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
  let products = productsFromSal(result.data).filter((p) => p.code && p.product_name && p.nutriments);
  const codes = products.map((p) => p.code).filter((c): c is string => /^\d{4,14}$/.test(c ?? "")).slice(0, 24);
  if (codes.length > 0) {
    const enrich = new URL("https://world.openfoodfacts.org/api/v2/search");
    enrich.searchParams.set("code", codes.join(","));
    enrich.searchParams.set("fields", ENRICH_FIELDS);
    enrich.searchParams.set("page_size", String(codes.length));
    // No retry: on failure, keep the quantity-derived unit and default serving.
    const extra = await getJson(enrich, ENRICH_TIMEOUT_MS, 0);
    if (extra.ok) products = mergeEnrichment(products, extra.data);
  }
  return { ...result, products };
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
