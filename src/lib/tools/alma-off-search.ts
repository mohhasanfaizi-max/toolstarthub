import type { OffProduct } from "./alma-off.ts";

// Helpers for the Search-a-licious (search.openfoodfacts.org) proxy. Hits carry
// normalized `nutriments` and a free-text `quantity`, but not serving/unit
// fields; those are merged from one batched v2 lookup when it succeeds.

export const SAL_FIELDS = "code,product_name,brands,quantity,nutriments";
export const ENRICH_FIELDS = "code,serving_size,serving_quantity,serving_quantity_unit,product_quantity_unit,nutrition_data_per";

type SalHit = { code?: unknown; product_name?: unknown; brands?: unknown; quantity?: unknown; nutriments?: unknown };

const VOLUME = /\d\s*(?:ml|cl|dl|l|litres?|liters?|fl\.?\s*oz)\b/i;
const MASS = /\d\s*(?:g|kg|mg|grams?)\b/i;

/** Pack unit from quantity text ("330 ml", "1,5 L", "400 g"); undefined when absent or mixed. */
export function unitFromQuantity(quantity: unknown): "ml" | "g" | undefined {
  if (typeof quantity !== "string") return undefined;
  const volume = VOLUME.test(quantity);
  const mass = MASS.test(quantity);
  if (volume && !mass) return "ml";
  if (mass && !volume) return "g";
  return undefined;
}

export function productsFromSal(data: unknown): OffProduct[] {
  const hits = (data as { hits?: unknown })?.hits;
  if (!Array.isArray(hits)) return [];
  return (hits as SalHit[]).map((hit) => {
    const brands = Array.isArray(hit.brands) ? hit.brands.filter((b) => typeof b === "string").join(", ") : typeof hit.brands === "string" ? hit.brands : undefined;
    const unit = unitFromQuantity(hit.quantity);
    return {
      code: typeof hit.code === "string" ? hit.code : undefined,
      product_name: typeof hit.product_name === "string" ? hit.product_name : undefined,
      brands,
      product_quantity_unit: unit,
      nutriments: hit.nutriments && typeof hit.nutriments === "object" ? (hit.nutriments as Record<string, unknown>) : undefined,
    } satisfies OffProduct;
  });
}

/** Overlay serving/unit fields from a v2 product list onto SAL products (by code). */
export function mergeEnrichment(products: OffProduct[], data: unknown): OffProduct[] {
  const list = (data as { products?: unknown })?.products;
  if (!Array.isArray(list)) return products;
  const byCode = new Map<string, Partial<OffProduct>>();
  for (const item of list as Partial<OffProduct>[]) if (typeof item?.code === "string") byCode.set(item.code, item);
  return products.map((product) => {
    const extra = product.code ? byCode.get(product.code) : undefined;
    if (!extra) return product;
    return {
      ...product,
      serving_size: extra.serving_size ?? product.serving_size,
      serving_quantity: extra.serving_quantity ?? product.serving_quantity,
      serving_quantity_unit: extra.serving_quantity_unit ?? product.serving_quantity_unit,
      product_quantity_unit: extra.product_quantity_unit ?? product.product_quantity_unit,
      nutrition_data_per: extra.nutrition_data_per ?? product.nutrition_data_per,
    };
  });
}
