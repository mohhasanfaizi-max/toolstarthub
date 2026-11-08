import assert from "node:assert/strict";
import type { AlmaState, DiaryEntry } from "./alma-foods.ts";
import { hasOffServingEntries } from "./alma-notice.ts";
import { applyFixes, barcodeFromFoodId, listCandidates, lookupFromOffProduct, makeBackup, parseBackup, proposeFix } from "./alma-oldfix.ts";

// Shape produced by the pre-fix code: 1 "serving" = 100 g, per-100 g values.
const oldNutella: DiaryEntry = {
  id: "food-1", foodId: "off-3017620422003-nutella", name: "Nutella", meal: "breakfast",
  servings: 1, unit: "serving", grams: 100, calories: 539, protein: 6.3, carbs: 57.5, fat: 30.9, source: "open-food-facts",
};
const oldTwo: DiaryEntry = { ...oldNutella, id: "food-2", servings: 2, grams: 200, calories: 1078, protein: 12.6, carbs: 115, fat: 61.8 };
const newEntry: DiaryEntry = { ...oldNutella, id: "food-3", grams: 15, calories: 80.9, protein: 0.9, carbs: 8.6, fat: 4.6, basis: "g" };
const sample: DiaryEntry = { ...oldNutella, id: "food-4", source: "sample", foodId: "banana" };
const gramOff: DiaryEntry = { ...oldNutella, id: "food-5", unit: "g", servings: 30, grams: 30 };
const noCode: DiaryEntry = { ...oldNutella, id: "food-6", foodId: "off-3-nutella" };

function state(): AlmaState {
  return {
    profile: {}, customFoods: [], weekPlan: {}, grocery: [],
    days: { "2026-11-05": { date: "2026-11-05", waterMl: 250, meals: { breakfast: [oldNutella, oldTwo, newEntry, sample, gramOff, noCode], lunch: [], dinner: [], snacks: [] } } },
  } as AlmaState;
}

const nutellaLookup = lookupFromOffProduct({
  serving_size: "15 g", serving_quantity: 15, serving_quantity_unit: "g", product_quantity_unit: "g",
  nutrition_data_per: "100g", nutriments: { "energy-kcal_100g": 539, proteins_100g: 6.3, carbohydrates_100g: 57.5, fat_100g: 30.9 },
});

export function runAlmaOldFixChecks() {
  assert.equal(barcodeFromFoodId("off-3017620422003-nutella"), "3017620422003");
  assert.equal(barcodeFromFoodId("off-3-nutella"), null);

  // Candidate detection: only OFF + serving + no basis.
  const s = state();
  assert.deepEqual(listCandidates(s).map((c) => c.entry.id), ["food-1", "food-2", "food-6"]);

  // Computation: Nutella 539 kcal → 80.85 kcal for one 15 g serving.
  const [c1, c2, c6] = listCandidates(s);
  const fix = proposeFix(c1, nutellaLookup);
  assert.equal(fix.kind, "fix");
  if (fix.kind === "fix") {
    assert.equal(fix.proposed.calories, 80.85);
    assert.equal(fix.proposed.grams, 15);
    assert.equal(fix.proposed.protein, 0.95);
    assert.equal(fix.proposed.fat, 4.64);
  }
  const fix2 = proposeFix(c2, nutellaLookup);
  assert.ok(fix2.kind === "fix" && fix2.proposed.calories === 161.7 && fix2.proposed.grams === 30);

  // Flags.
  assert.match((proposeFix(c6, nutellaLookup) as { reason: string }).reason, /no barcode/);
  const mismatch = lookupFromOffProduct({ serving_quantity: 15, serving_quantity_unit: "g", nutriments: { "energy-kcal_100g": 600, proteins_100g: 6.3, carbohydrates_100g: 57.5, fat_100g: 30.9 } });
  assert.match((proposeFix(c1, mismatch) as { reason: string }).reason, /Can't verify — delete and re-add: .*calories/);
  assert.match((proposeFix(c1, { ok: false, reason: "the product lookup timed out; try again later." }) as { reason: string }).reason, /timed out/);
  assert.equal(proposeFix(c1, undefined).kind, "flag");
  const noServing = lookupFromOffProduct({ product_quantity_unit: "g", nutriments: { "energy-kcal_100g": 539 } });
  assert.match((proposeFix(c1, noServing) as { reason: string }).reason, /no gram serving/);
  const drink = lookupFromOffProduct({ serving_quantity: 330, serving_quantity_unit: "ml", nutriments: { "energy-kcal_100g": 539 } });
  assert.match((proposeFix(c1, drink) as { reason: string }).reason, /volume/);
  const notOldShape = { ...c1, entry: { ...c1.entry, grams: 15 } };
  assert.equal(proposeFix(notOldShape, nutellaLookup).kind, "flag");

  // Apply selected only; non-candidates and flags unchanged; fixed get basis "g"; micros untouched.
  const before = JSON.stringify(s);
  const reviews = [fix, fix2, proposeFix(c6, nutellaLookup)];
  const next = applyFixes(s, reviews, new Set(["food-1", "food-6"]));
  assert.equal(JSON.stringify(s), before, "input state is not mutated");
  const list = next.days["2026-11-05"].meals.breakfast;
  assert.equal(list[0].calories, 80.85);
  assert.equal(list[0].basis, "g");
  assert.deepEqual(list[1], oldTwo, "unselected candidate unchanged");
  for (const i of [2, 3, 4, 5]) assert.deepEqual(list[i], s.days["2026-11-05"].meals.breakfast[i]);
  assert.equal(next.days["2026-11-05"].waterMl, 250);
  assert.equal(hasOffServingEntries(next), true, "notice still shows for unfixed entries");
  const all = applyFixes(s, reviews, new Set(["food-1", "food-2", "food-6"]));
  assert.equal(listCandidates(all).map((c) => c.entry.id).join(), "food-6");

  // Backup/undo exact round trip.
  const raw = JSON.stringify(s);
  const stored = JSON.stringify(makeBackup(raw, new Date("2026-11-08T09:30:00Z")));
  const back = parseBackup(stored);
  assert.ok(back);
  assert.equal(back.data, raw);
  assert.equal(back.createdAt, "2026-11-08T09:30:00.000Z");
  assert.deepEqual(JSON.parse(back.data), s);
  assert.equal(parseBackup("not json"), null);
  assert.equal(parseBackup(null), null);
}
