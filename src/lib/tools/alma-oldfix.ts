import { roundTo } from "./numbers.ts";
import type { AlmaState, DiaryEntry, MealType } from "./alma-foods.ts";

// Opt-in repair for packaged-food entries saved before the 7 Nov 2026 serving fix.
// Before that fix every Open Food Facts product used a 100 g "serving", so an
// old entry stores grams = 100 × servings and per-100 g values × servings.
// Nothing here writes storage; the caller backs up and applies only on request.

export const ALMA_BACKUP_KEY = "toolstarhub-alma-backup-v1";

export type ProductLookup =
  | { ok: true; servingGrams?: number; volume: boolean; per100: { calories?: number; protein?: number; carbs?: number; fat?: number } }
  | { ok: false; reason: string };

export type CandidateRef = { date: string; meal: MealType; entry: DiaryEntry };

export type Review =
  | { kind: "fix"; ref: CandidateRef; barcode: string; servingGrams: number; proposed: Pick<DiaryEntry, "grams" | "calories" | "protein" | "carbs" | "fat" | "fiber"> }
  | { kind: "flag"; ref: CandidateRef; reason: string };

export const CANT_VERIFY = "Can't verify — delete and re-add";

export function isCandidate(entry: DiaryEntry | null | undefined): boolean {
  return Boolean(entry && entry.source === "open-food-facts" && entry.unit === "serving" && !entry.basis);
}

export function listCandidates(state: Pick<AlmaState, "days">): CandidateRef[] {
  const out: CandidateRef[] = [];
  for (const [date, day] of Object.entries(state.days ?? {})) {
    if (!day?.meals) continue;
    for (const [meal, entries] of Object.entries(day.meals) as [MealType, DiaryEntry[]][]) {
      if (!Array.isArray(entries)) continue;
      for (const entry of entries) if (isCandidate(entry)) out.push({ date, meal, entry });
    }
  }
  return out;
}

/** Food ids are `off-<code or index>-<name>`; only a real barcode (8–14 digits) is usable. */
export function barcodeFromFoodId(foodId: string): string | null {
  const match = /^off-(\d{8,14})-/.exec(foodId ?? "");
  return match ? match[1] : null;
}

function close(a: number, b: number, abs: number, rel: number): boolean {
  return Math.abs(a - b) <= Math.max(abs, Math.abs(b) * rel);
}

export function proposeFix(ref: CandidateRef, lookup: ProductLookup | undefined): Review {
  const { entry } = ref;
  const flag = (why: string): Review => ({ kind: "flag", ref, reason: `${CANT_VERIFY}: ${why}` });
  const barcode = barcodeFromFoodId(entry.foodId);
  if (!barcode) return flag("no barcode stored for this entry.");
  const s = entry.servings;
  if (!(s > 0)) return flag("the stored serving count is not valid.");
  // Old-shape check: pre-fix entries always stored 100 g per serving.
  if (!close(entry.grams, 100 * s, 0.11, 0)) return flag("this entry does not have the pre-fix 100 g serving shape.");
  if (!lookup) return flag("the product lookup did not run.");
  if (!lookup.ok) return flag(lookup.reason);
  if (lookup.volume) return flag("the product is measured by volume, so a gram serving cannot be confirmed.");
  const sg = lookup.servingGrams;
  if (!(sg && sg > 0)) return flag("Open Food Facts lists no gram serving for this product.");
  const per100 = { calories: entry.calories / s, protein: entry.protein / s, carbs: entry.carbs / s, fat: entry.fat / s };
  const live = lookup.per100;
  if (live.calories === undefined || !close(per100.calories, live.calories, 1, 0.02)) {
    return flag("the stored per-100 g calories no longer match the product data.");
  }
  for (const key of ["protein", "carbs", "fat"] as const) {
    const value = live[key];
    if (value !== undefined && !close(per100[key], value, 0.2, 0.03)) {
      return flag(`the stored per-100 g ${key} no longer match the product data.`);
    }
  }
  const factor = sg / 100;
  return {
    kind: "fix",
    ref,
    barcode,
    servingGrams: sg,
    proposed: {
      grams: roundTo(sg * s, 1),
      calories: roundTo(entry.calories * factor, 2),
      protein: roundTo(entry.protein * factor, 2),
      carbs: roundTo(entry.carbs * factor, 2),
      fat: roundTo(entry.fat * factor, 2),
      fiber: entry.fiber !== undefined ? roundTo(entry.fiber * factor, 2) : undefined,
    },
  };
}

/** Returns a new state; entries not selected (and all flags) are left exactly as stored. Micros are not changed. */
export function applyFixes(state: AlmaState, reviews: Review[], selectedIds: Set<string>): AlmaState {
  const fixes = new Map<string, Extract<Review, { kind: "fix" }>>();
  for (const review of reviews) if (review.kind === "fix" && selectedIds.has(review.ref.entry.id)) fixes.set(review.ref.entry.id, review);
  if (fixes.size === 0) return state;
  const days = { ...state.days };
  for (const [date, day] of Object.entries(days)) {
    let touched = false;
    const meals = { ...day.meals };
    for (const meal of Object.keys(meals) as MealType[]) {
      const list = meals[meal];
      if (!Array.isArray(list)) continue;
      meals[meal] = list.map((entry) => {
        const fix = fixes.get(entry.id);
        if (!fix || !isCandidate(entry)) return entry;
        touched = true;
        const next: DiaryEntry = { ...entry, ...fix.proposed, basis: "g" };
        if (fix.proposed.fiber === undefined) delete next.fiber;
        return next;
      });
    }
    if (touched) days[date] = { ...day, meals };
  }
  return { ...state, days };
}

export type Backup = { createdAt: string; data: string };

export function makeBackup(raw: string, now = new Date()): Backup {
  return { createdAt: now.toISOString(), data: raw };
}

export function parseBackup(value: string | null): Backup | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Backup;
    return typeof parsed?.data === "string" && typeof parsed.createdAt === "string" ? parsed : null;
  } catch {
    return null;
  }
}

/** Interprets a raw Open Food Facts v2 product object. */
export function lookupFromOffProduct(product: Record<string, unknown> | undefined): ProductLookup {
  if (!product) return { ok: false, reason: "the product was not found on Open Food Facts." };
  const num = (v: unknown) => {
    const n = typeof v === "string" && v.trim() !== "" ? Number(v) : typeof v === "number" ? v : NaN;
    return Number.isFinite(n) && n >= 0 ? n : undefined;
  };
  const str = (v: unknown) => (typeof v === "string" ? v.trim().toLowerCase() : "");
  const size = typeof product.serving_size === "string" ? product.serving_size : "";
  const volume =
    /^(?:ml|cl|dl|l|fl\.?\s*oz)$/.test(str(product.serving_quantity_unit)) ||
    /^(?:ml|cl|dl|l|fl\.?\s*oz)$/.test(str(product.product_quantity_unit)) ||
    /(?:\d|\b)(?:ml|cl|dl|l|litres?|liters?|fl\.?\s*oz)\b/i.test(size) ||
    str(product.nutrition_data_per) === "100ml";
  const n = (product.nutriments ?? {}) as Record<string, unknown>;
  const per100 = { calories: num(n["energy-kcal_100g"]), protein: num(n.proteins_100g), carbs: num(n.carbohydrates_100g), fat: num(n.fat_100g) };
  const quantity = str(product.serving_quantity_unit) === "g" ? num(product.serving_quantity) : undefined;
  const ranged = /\d\s*[-–]\s*\d|\d\s*[x×]\s*\d/i.test(size);
  const matches = [...size.matchAll(/(?:^|[^\d.,+−-])(\d+(?:[.,]\d+)?)\s*(?:g|grams?)\b/gi)];
  const labelled = !ranged && matches.length === 1 ? Number(matches[0][1].replace(",", ".")) : undefined;
  let servingGrams: number | undefined = quantity ?? labelled;
  if (quantity && labelled && Math.abs(quantity - labelled) > 0.001) servingGrams = undefined;
  if (!(servingGrams && servingGrams > 0)) servingGrams = undefined;
  return { ok: true, volume, servingGrams, per100 };
}
