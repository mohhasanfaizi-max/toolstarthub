import { MICRO_NUTRIENTS, type MicroId, type MicroMap } from "@/lib/tools/alma";
import type { FoodItem } from "@/lib/tools/alma-foods";

export const runtime = "nodejs";

const OFF_MICROS: Partial<Record<MicroId, string>> = {
  vitaminA: "vitamin-a_100g",
  vitaminB1: "vitamin-b1_100g",
  vitaminB2: "vitamin-b2_100g",
  vitaminB3: "vitamin-b3_100g",
  vitaminB6: "vitamin-b6_100g",
  vitaminB12: "vitamin-b12_100g",
  vitaminC: "vitamin-c_100g",
  vitaminD: "vitamin-d_100g",
  vitaminE: "vitamin-e_100g",
  vitaminK: "vitamin-k_100g",
  calcium: "calcium_100g",
  iron: "iron_100g",
  magnesium: "magnesium_100g",
  zinc: "zinc_100g",
  potassium: "potassium_100g",
  sodium: "sodium_100g",
  folate: "folates_100g",
};

type OffProduct = {
  code?: string;
  product_name?: string;
  brands?: string;
  serving_size?: string;
  nutriments?: Record<string, unknown>;
};

function numberFrom(value: unknown): number | undefined {
  const parsed = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  return Number.isFinite(parsed) ? parsed : undefined;
}

function mapProduct(product: OffProduct, index: number): FoodItem | null {
  const nutriments = product.nutriments ?? {};
  const calories =
    numberFrom(nutriments["energy-kcal_100g"]) ?? numberFrom(nutriments["energy-kcal"]);
  const protein = numberFrom(nutriments.proteins_100g);
  const carbs = numberFrom(nutriments.carbohydrates_100g);
  const fat = numberFrom(nutriments.fat_100g);
  if (calories === undefined || protein === undefined || carbs === undefined || fat === undefined) {
    return null;
  }
  const name = (product.product_name ?? "").trim();
  if (!name) return null;
  const micros: MicroMap = {};
  for (const nutrient of MICRO_NUTRIENTS) {
    const key = OFF_MICROS[nutrient.id];
    if (!key) continue;
    const value = numberFrom(nutriments[key]);
    if (value !== undefined && value >= 0) {
      micros[nutrient.id] = value;
    }
  }
  return {
    id: `off-${product.code || index}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 80),
    name,
    brand: product.brands?.split(",")[0]?.trim() || undefined,
    servingLabel: product.serving_size?.trim() || "100 g (as listed per 100 g)",
    servingGrams: 100,
    calories,
    protein,
    carbs,
    fat,
    fiber: numberFrom(nutriments.fiber_100g),
    micros: Object.keys(micros).length > 0 ? micros : undefined,
    source: "open-food-facts",
    sourceNote: "Values come from Open Food Facts community data, usually per 100 g. Check the listing if a packaged serving differs.",
  };
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

  const off = new URL("https://world.openfoodfacts.org/cgi/search.pl");
  off.searchParams.set("search_terms", query);
  off.searchParams.set("search_simple", "1");
  off.searchParams.set("action", "process");
  off.searchParams.set("json", "1");
  off.searchParams.set("page_size", "12");

  try {
    const response = await fetch(off, {
      headers: {
        "User-Agent": "AlmaNutritionCoach/1.0 (https://www.toolstarhub.com)",
        Accept: "application/json",
      },
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      return Response.json({ success: false, error: "The Open Food Facts search is unavailable right now. Use sample foods or a custom entry." }, { status: 502 });
    }
    const data = (await response.json()) as { products?: OffProduct[] };
    const foods = (data.products ?? [])
      .map((product, index) => mapProduct(product, index))
      .filter((item): item is FoodItem => item !== null)
      .slice(0, 12);
    return Response.json({ success: true, foods, source: "open-food-facts" });
  } catch {
    return Response.json({ success: false, error: "The packaged-food search could not be completed. Use sample foods or enter a custom food from a label." }, { status: 502 });
  }
}
