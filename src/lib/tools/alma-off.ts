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
  nutrition_data_per?: string;
  nutriments?: Record<string, unknown>;
};

function numberFrom(value: unknown): number | undefined {
  if (typeof value !== "number" && typeof value !== "string") return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined;
}

const VOLUME_UNIT = /^(?:ml|cl|dl|l|fl\.?\s*oz)$/i;
const MASS_UNIT = /^(?:g|kg|mg|oz|lb)$/i;
const VOLUME_TEXT = /(?:\d|\b)(?:ml|cl|dl|l|litres?|liters?|fl\.?\s*oz)\b/i;
const MASS_TEXT = /\d\s*(?:g|grams?|kg|mg)\b/i;

function isVolumeBased(product: OffProduct): boolean {
  const units = [product.serving_quantity_unit, product.product_quantity_unit];
  return units.some((unit) => VOLUME_UNIT.test(unit?.trim() ?? "")) || VOLUME_TEXT.test(product.serving_size ?? "");
}

// Exact unit conversions between volume units only (no density involved).
const ML_PER: Record<string, number> = { ml: 1, cl: 10, dl: 100, l: 1000, litre: 1000, litres: 1000, liter: 1000, liters: 1000, floz: 29.5735 };

function mlFromText(size: string): number | undefined {
  if (/\d\s*[-–]\s*\d|\d\s*[x×]\s*\d/i.test(size)) return undefined;
  const matches = [...size.matchAll(/(\d+(?:[.,]\d+)?)\s*(ml|cl|dl|litres?|liters?|l|fl\.?\s*oz)\b/gi)];
  if (matches.length !== 1) return undefined;
  const unit = matches[0][2].toLowerCase().replace(/[.\s]/g, "");
  const value = Number(matches[0][1].replace(",", ".")) * (ML_PER[unit] ?? NaN);
  return Number.isFinite(value) && value > 0 ? value : undefined;
}

export type OffBasis =
  | { basis: "g" }
  | { basis: "ml"; servingMl?: number }
  | { basis: "unknown"; reason: string };

/**
 * Open Food Facts documents `<nutrient>_100g` as "for 100g (or 100ml for liquids)".
 * A product is treated as per 100 ml only when every unit signal is a volume
 * (quantity/serving units and serving text) and none is a mass; mixed or
 * missing signals are "unknown" and stay excluded. When a ml serving and a
 * per-serving energy value both exist, they must agree with the per-100 value.
 */
export function detectOffBasis(product: OffProduct): OffBasis {
  if (!isVolumeBased(product)) return { basis: "g" };
  const units = [product.serving_quantity_unit, product.product_quantity_unit]
    .map((unit) => unit?.trim() ?? "")
    .filter(Boolean);
  const size = product.serving_size?.trim() ?? "";
  if (units.some((unit) => MASS_UNIT.test(unit)) || MASS_TEXT.test(size)) {
    return { basis: "unknown", reason: "mixed mass and volume units" };
  }
  if (units.some((unit) => !VOLUME_UNIT.test(unit))) {
    return { basis: "unknown", reason: "unrecognised unit" };
  }
  const per = product.nutrition_data_per?.trim().toLowerCase();
  if (per && per !== "100g" && per !== "serving") {
    return { basis: "unknown", reason: "unrecognised nutrition_data_per" };
  }
  const quantityUnit = product.serving_quantity_unit?.trim().toLowerCase();
  const quantity = numberFrom(product.serving_quantity);
  const fromQuantity = quantity && quantity > 0 && quantityUnit === "ml" ? quantity : undefined;
  const fromText = size ? mlFromText(size) : undefined;
  if (fromQuantity && fromText && Math.abs(fromQuantity - fromText) > Math.max(1, fromText * 0.02)) {
    return { basis: "unknown", reason: "serving quantity disagrees with serving text" };
  }
  const servingMl = fromQuantity ?? fromText;
  const nutriments = product.nutriments ?? {};
  const per100 = numberFrom(nutriments["energy-kcal_100g"]);
  const perServing = numberFrom(nutriments["energy-kcal_serving"]);
  if (servingMl && per100 !== undefined && perServing !== undefined) {
    const expected = (per100 * servingMl) / 100;
    if (Math.abs(expected - perServing) > Math.max(2, expected * 0.05)) {
      return { basis: "unknown", reason: "per-serving energy does not match per-100 ml value" };
    }
  }
  return servingMl ? { basis: "ml", servingMl } : { basis: "ml" };
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
  // OFF _100g means 100 ml for liquids. ml-basis products are kept in ml and
  // never converted to grams (no density). Undeterminable bases stay excluded.
  const detected = detectOffBasis(product);
  if (detected.basis === "unknown") return null;
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
  if (detected.basis === "ml") return mapMlProduct(product, index, name, detected.servingMl);
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
    sourceNote: "Open Food Facts community data, scaled from per 100 g to the displayed gram portion. Check the package label. Drinks with a clear per-100 ml basis are listed in millilitres.",
  };
}


function microsFrom(nutriments: Record<string, unknown>, factor: number): MicroMap {
  const micros: MicroMap = {};
  for (const nutrient of MICRO_NUTRIENTS) {
    const key = OFF_MICROS[nutrient.id];
    if (!key) continue;
    const value = numberFrom(nutriments[key]);
    if (value !== undefined && value >= 0) {
      const unitsPerGram = nutrient.unit === "mg" ? 1_000 : 1_000_000;
      micros[nutrient.id] = value * factor * unitsPerGram;
    }
  }
  return micros;
}

function mapMlProduct(product: OffProduct, index: number, name: string, servingMl?: number): FoodItem {
  const nutriments = product.nutriments ?? {};
  const baseMl = servingMl ?? 100;
  const factor = baseMl / 100;
  const value = (key: string) => (numberFrom(nutriments[key]) ?? 0) * factor;
  const fiber = numberFrom(nutriments.fiber_100g);
  const micros = microsFrom(nutriments, factor);
  const rounded = Math.round(baseMl * 10) / 10;
  return {
    id: `off-${product.code || index}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 80),
    name,
    brand: product.brands?.split(",")[0]?.trim() || undefined,
    servingLabel: `${rounded} ml`,
    servingGrams: 0,
    calories: value("energy-kcal_100g"),
    protein: value("proteins_100g"),
    carbs: value("carbohydrates_100g"),
    fat: value("fat_100g"),
    fiber: fiber !== undefined ? fiber * factor : undefined,
    micros: Object.keys(micros).length > 0 ? micros : undefined,
    source: "open-food-facts",
    sourceNote: "Open Food Facts community data, per 100 ml, scaled to the millilitres you enter. Not converted to grams. Check the package label.",
    basis: "ml",
    baseMl,
    servingMl,
  };
}
