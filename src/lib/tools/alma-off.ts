import { MICRO_NUTRIENTS, type MicroId, type MicroMap } from "./alma.ts";
import type { FoodItem } from "./alma-foods.ts";

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

export type OffProduct = {
  code?: string;
  product_name?: string;
  brands?: string;
  serving_size?: string;
  serving_quantity?: number | string;
  serving_quantity_unit?: string;
  product_quantity_unit?: string;
  nutriments?: Record<string, unknown>;
};

function numberFrom(value: unknown): number | undefined {
  if (typeof value !== "number" && typeof value !== "string") return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined;
}

function isVolumeBased(product: OffProduct): boolean {
  const units = [product.serving_quantity_unit, product.product_quantity_unit];
  return units.some((unit) => /^(?:ml|cl|dl|l)$/i.test(unit?.trim() ?? "")) ||
    /(?:\d|\b)(?:ml|cl|dl|l|litres?|liters?|fl\.?\s*oz)\b/i.test(product.serving_size ?? "");
}

function servingGramsFrom(product: OffProduct): number {
  const size = product.serving_size?.trim() ?? "";
  // An explicitly normalized gram quantity is usable; an unqualified number is not.
  const quantity = product.serving_quantity_unit?.trim().toLowerCase() === "g"
    ? numberFrom(product.serving_quantity) : undefined;
  const matches = [...size.matchAll(/(?:^|[^\d.,+−-])(\d+(?:[.,]\d+)?)\s*(?:g|grams?)\b/gi)];
  const range = /\d\s*[-–]\s*\d|\d\s*[x×]\s*\d/i.test(size);
  const labelled = !range && matches.length === 1
    ? Number(matches[0][1].replace(",", ".")) : undefined;
  if (quantity && labelled && Math.abs(quantity - labelled) > 0.001) return 100;
  const grams = quantity ?? labelled;
  return grams && Number.isFinite(grams) && grams > 0 ? grams : 100;
}

export function mapOffProduct(product: OffProduct, index: number): FoodItem | null {
  // OFF _100g may mean 100 ml for liquids. Alma's mass-only packaged-food
  // contract cannot convert that to grams without density. Do not fabricate it.
  if (isVolumeBased(product)) return null;
  const nutriments = product.nutriments ?? {};
  const calories = numberFrom(nutriments["energy-kcal_100g"]);
  const protein = numberFrom(nutriments.proteins_100g);
  const carbs = numberFrom(nutriments.carbohydrates_100g);
  const fat = numberFrom(nutriments.fat_100g);
  if (calories === undefined || protein === undefined || carbs === undefined || fat === undefined) {
    return null;
  }
  const name = (product.product_name ?? "").trim();
  if (!name) return null;
  const servingGrams = servingGramsFrom(product);
  const factor = servingGrams / 100;
  const fiber = numberFrom(nutriments.fiber_100g);
  const micros: MicroMap = {};
  for (const nutrient of MICRO_NUTRIENTS) {
    const key = OFF_MICROS[nutrient.id];
    if (!key) continue;
    const value = numberFrom(nutriments[key]);
    if (value !== undefined && value >= 0) {
      // OFF normalized weight nutrients are grams, not the contributor's _unit.
      const unitsPerGram = nutrient.unit === "mg" ? 1_000 : 1_000_000;
      micros[nutrient.id] = value * factor * unitsPerGram;
    }
  }
  return {
    id: `off-${product.code || index}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 80),
    name,
    brand: product.brands?.split(",")[0]?.trim() || undefined,
    servingLabel: `${servingGrams} g`,
    servingGrams,
    calories: calories * factor,
    protein: protein * factor,
    carbs: carbs * factor,
    fat: fat * factor,
    fiber: fiber !== undefined ? fiber * factor : undefined,
    micros: Object.keys(micros).length > 0 ? micros : undefined,
    source: "open-food-facts",
    sourceNote: "Open Food Facts community data, scaled from per 100 g to the displayed gram portion. Check the package label; volume-based products are not included.",
  };
}

