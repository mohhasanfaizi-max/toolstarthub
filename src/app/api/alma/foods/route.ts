import { mapOffProduct, type OffProduct } from "@/lib/tools/alma-off";
import type { FoodItem } from "@/lib/tools/alma-foods";

export const runtime = "nodejs";

// Bound each attempt, including reading the JSON body. Retry a transient failure
// once, not a 4xx rejection (especially 429), to avoid amplifying upstream limits.
const OFF_TIMEOUT_MS = 6_000;
const OFF_RETRY_BACKOFF_MS = 350;
const SEARCH_UNAVAILABLE =
  "Packaged-food search is temporarily unavailable. Sample foods and custom entry still work; try packaged-food search again later.";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) {
    return Response.json({ success: false, error: "Type at least two letters to search packaged foods." }, { status: 400 });
  }
  if (query.length > 80) {
    return Response.json({ success: false, error: "That search is too long." }, { status: 400 });
  }

  const off = new URL("https://world.openfoodfacts.org/cgi/search.pl");
  off.searchParams.set("search_terms", query);
  off.searchParams.set("search_simple", "1");
  off.searchParams.set("action", "process");
  off.searchParams.set("json", "1");
  off.searchParams.set("page_size", "12");

  let reason = "upstream_unavailable";
  let upstreamStatus: number | undefined;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), OFF_TIMEOUT_MS);
    let retry = false;
    let readingBody = false;
    try {
      const response = await fetch(off, {
        headers: {
          "User-Agent": "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)",
          Accept: "application/json",
        },
        next: { revalidate: 0 },
        signal: controller.signal,
      });
      if (!response.ok) {
        // Release the response body before another attempt. Do not retry rate
        // limits or other client errors; the caller can search again later.
        await response.body?.cancel();
        upstreamStatus = response.status;
        reason = response.status === 429 ? "upstream_rate_limited" : "upstream_http_error";
        // An upstream Retry-After is a request to back off, not to send our
        // immediate retry. Keep the response bounded and let the user try later.
        retry = response.status >= 500 && !response.headers.has("Retry-After") && attempt === 0;
      } else {
        readingBody = true;
        const data = (await response.json()) as { products?: OffProduct[] };
        const foods = (data.products ?? [])
          .map((product, index) => mapOffProduct(product, index))
          .filter((item): item is FoodItem => item !== null)
          .slice(0, 12);
        return Response.json({ success: true, foods, source: "open-food-facts" });
      }
    } catch {
      // Network errors, timeouts and unreadable upstream JSON can be transient.
      // This is resilience, not evidence of the cause of the observed 502.
      upstreamStatus = undefined;
      reason = controller.signal.aborted ? "upstream_timeout" : readingBody ? "upstream_invalid_response" : "upstream_network_error";
      retry = attempt === 0;
    } finally {
      clearTimeout(timeout);
    }
    if (!retry) break;
    await new Promise((resolve) => setTimeout(resolve, OFF_RETRY_BACKOFF_MS));
  }
  return Response.json({ success: false, error: SEARCH_UNAVAILABLE, reason, upstreamStatus }, { status: 502 });
}
