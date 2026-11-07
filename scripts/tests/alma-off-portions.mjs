// Deterministic no-network tests. Real examples use saved mapped wave-1 output;
// synthetic raw OFF payloads are explicitly constructed for parser edge cases.
// Run: node --experimental-strip-types scripts/tests/alma-off-portions.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { mapOffProduct } from "../../src/lib/tools/alma-off.ts";
import { scaleFood, loadState, saveState, STORAGE_KEY } from "../../src/lib/tools/alma-foods.ts";
const nutrients = { "energy-kcal_100g": 500, proteins_100g: 10, carbohydrates_100g: 60, fat_100g: 20, fiber_100g: 8, sodium_100g: 0.1, "vitamin-b12_100g": 0.000002 };
const product = (extra = {}) => ({ code: "synthetic", product_name: "Synthetic test food", nutriments: nutrients, ...extra });
const gram = mapOffProduct(product({ serving_size: "1 portion (15 g)", serving_quantity: 15, serving_quantity_unit: "g" }), 0);
assert.equal(gram.servingLabel, "15 g"); assert.equal(gram.servingGrams, 15);
assert.equal(gram.calories, 75); assert.equal(gram.protein, 1.5); assert.equal(gram.carbs, 9); assert.equal(gram.fat, 3);
assert.equal(gram.fiber, 1.2); assert.equal(gram.micros.sodium, 15);
assert(Math.abs(gram.micros.vitaminB12 - 0.3) < 1e-12);
for (const [input, grams] of [["15g", 15], ["15 gram", 15], ["15 grams", 15], ["1 portion (13,8 g)", 13.8], ["33", 100], ["1 bar", 100], ["15-20g", 100], ["2 x 15g", 100], ["-15g", 100], ["0 g", 100], ["15g or 30g", 100]]) {
  const mapped = mapOffProduct(product({ serving_size: input }), 0);
  assert.equal(mapped.servingGrams, grams, input); assert.equal(mapped.servingLabel, `${grams} g`);
}
assert.equal(mapOffProduct(product({ serving_quantity: "25", serving_quantity_unit: "g" }), 0).servingGrams, 25);
assert.equal(mapOffProduct(product({ serving_quantity: 25 }), 0).servingGrams, 100);
assert.equal(mapOffProduct(product({ serving_quantity: 20, serving_quantity_unit: "g", serving_size: "15 g" }), 0).servingGrams, 100);
for (const extra of [{ serving_size: "250 ml" }, { serving_size: "250ml" }, { serving_size: "1l" }, { serving_quantity: 250, serving_quantity_unit: "ml" }, { product_quantity_unit: "ml" }, { serving_size: "8 fl oz" }]) {
  assert.equal(mapOffProduct(product(extra), 0), null, "volume basis must not be relabelled as grams without density");
}
assert.equal(mapOffProduct(product(), 0).servingLabel, "100 g");
assert.equal(mapOffProduct(product({ nutriments: { "energy-kcal_100g": 0, proteins_100g: 0, carbohydrates_100g: 0, fat_100g: 0 } }), 0).calories, 0);
for (const bad of [undefined, "", " ", -1, NaN]) {
  assert.equal(mapOffProduct(product({ nutriments: { ...nutrients, proteins_100g: bad } }), 0), null);
}
assert.equal(mapOffProduct(product({ nutriments: { ...nutrients, "energy-kcal_100g": undefined, "energy-kcal": 75 } }), 0), null, "unsuffixed energy has ambiguous basis");
const two = scaleFood(gram, 2, "serving");
assert.equal(two.grams, 30); assert.equal(two.calories, 150); assert.equal(two.protein, 3); assert.equal(two.carbs, 18); assert.equal(two.fat, 6);
const byGrams = scaleFood(gram, 30, "g");
assert.equal(byGrams.calories, two.calories); assert.equal(byGrams.grams, two.grams);
console.log("PASS: gram/quantity parsing, unit ambiguity, missing/zero/invalid nutrients, normalized micros, exact serving and gram logging");

const saved = JSON.parse(readFileSync(new URL("./fixtures/off-wave1-mapped.json", import.meta.url), "utf8"));
let checked = 0;
for (const old of saved.foods.slice(0, 6)) {
  // Derive only fields recoverable from the actual mapper output. Raw quantity
  // metadata was not retained in wave 1; do not invent real fixture values.
  const raw = { code: old.id, product_name: old.name, serving_size: old.servingLabel.includes("as listed") ? undefined : old.servingLabel, nutriments: { "energy-kcal_100g": old.calories, proteins_100g: old.protein, carbohydrates_100g: old.carbs, fat_100g: old.fat } };
  const mapped = mapOffProduct(raw, 0); assert(mapped);
  const entry = scaleFood(mapped, 1, "serving");
  assert.equal(entry.calories, Math.round((old.calories * mapped.servingGrams / 100 + Number.EPSILON) * 10) / 10);
  console.log(`PASS real saved barcode: ${old.id}; old label=${old.servingLabel}; new=${mapped.servingLabel}; old kcal=${old.calories}; new logged kcal=${entry.calories}`); checked++;
}
assert.equal(checked, 6);
const oldEntry = { ...scaleFood(saved.foods[2], 1, "serving"), id: "historic", meal: "breakfast" };
const state = { profile: {}, customFoods: [], days: { "2026-11-07": { date: "2026-11-07", meals: { breakfast: [oldEntry], lunch: [], dinner: [], snacks: [] }, waterMl: 0 } }, weekPlan: {}, grocery: [] };
const before = JSON.stringify(state); let stored = before; let writes = 0;
globalThis.window = { localStorage: { getItem: key => { assert.equal(key, STORAGE_KEY); return stored; }, setItem: (key, value) => { assert.equal(key, STORAGE_KEY); stored = value; writes++; } } };
const loaded = loadState(); assert.equal(writes, 0); assert.deepEqual(loaded, state);
saveState(loaded); assert.equal(stored, before); assert.equal(loaded.days["2026-11-07"].meals.breakfast[0].calories, 539);
delete globalThis.window;
console.log("PASS: historic 539 kcal entry and entire saved record unchanged through load/save; no migration or automatic correction");
