import { lookupFromOffProduct } from "@/lib/tools/alma-oldfix";

export const runtime = "nodejs";

// One Open Food Facts product read by barcode (product endpoint, not search),
// used only by the opt-in old-entries review. No retries: a 429 or Retry-After
// is passed back so the client stops instead of amplifying upstream limits.
const OFF_TIMEOUT_MS = 6_000;
const FIELDS = "code,serving_size,serving_quantity,serving_quantity_unit,product_quantity_unit,nutrition_data_per,nutriments";

export async function GET(request: Request): Promise<Response> {
  const code = new URL(request.url).searchParams.get("code")?.trim() ?? "";
  if (!/^\d{8,14}$/.test(code)) {
    return Response.json({ ok: false, reason: "the stored barcode is not valid." }, { status: 400 });
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OFF_TIMEOUT_MS);
  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${code}.json?fields=${FIELDS}`, {
      headers: { "User-Agent": "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)", Accept: "application/json" },
      next: { revalidate: 0 },
      signal: controller.signal,
    });
    if (response.status === 429 || response.headers.has("Retry-After")) {
      await response.body?.cancel();
      const retryAfter = Number(response.headers.get("Retry-After")) || 60;
      return Response.json({ ok: false, reason: "Open Food Facts asked us to slow down; try the review again later.", retryAfter }, { status: 429 });
    }
    if (response.status === 404) {
      await response.body?.cancel();
      return Response.json({ ok: false, reason: "the product was not found on Open Food Facts." });
    }
    if (!response.ok) {
      await response.body?.cancel();
      return Response.json({ ok: false, reason: "the product lookup failed; try again later." }, { status: 502 });
    }
    const data = (await response.json()) as { status?: number; product?: Record<string, unknown> };
    return Response.json(lookupFromOffProduct(data.status === 0 ? undefined : data.product));
  } catch {
    return Response.json({ ok: false, reason: controller.signal.aborted ? "the product lookup timed out; try again later." : "the product lookup failed; try again later." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
