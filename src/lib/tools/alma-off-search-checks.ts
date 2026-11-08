import assert from "node:assert/strict";
import { mapOffProduct } from "./alma-off.ts";
import { mergeEnrichment, productsFromSal, unitFromQuantity } from "./alma-off-search.ts";

export function runAlmaOffSearchChecks() {
  assert.equal(unitFromQuantity("330 ml"), "ml");
  assert.equal(unitFromQuantity("1,5 L"), "ml");
  assert.equal(unitFromQuantity("500ml"), "ml");
  assert.equal(unitFromQuantity("400 g"), "g");
  assert.equal(unitFromQuantity("2 x 140 g"), "g");
  assert.equal(unitFromQuantity("1 kg"), "g");
  assert.equal(unitFromQuantity("250 ml (258 g)"), undefined);
  assert.equal(unitFromQuantity(""), undefined);
  assert.equal(unitFromQuantity(undefined), undefined);

  // Shapes copied from live search.openfoodfacts.org hits (8 Nov 2026).
  const products = productsFromSal({
    hits: [
      { code: "57045399", product_name: "Coca-Cola", brands: ["Coca-Cola"], quantity: "500ml", nutriments: { "energy-kcal_100g": 42, proteins_100g: 0, carbohydrates_100g: 10.6, fat_100g: 0 } },
      { code: "8076800195057", product_name: "Spaghetti Nº5", brands: ["Barilla"], quantity: "500 g", nutriments: { "energy-kcal_100g": 359, proteins_100g: 13, carbohydrates_100g: 71, fat_100g: 2 } },
      { code: 5, product_name: null },
    ],
  });
  assert.equal(products.length, 3);
  assert.equal(products[0].product_quantity_unit, "ml");
  assert.equal(products[0].brands, "Coca-Cola");
  assert.equal(products[1].product_quantity_unit, "g");
  assert.equal(products[2].code, undefined);
  assert.deepEqual(productsFromSal({}), []);

  const cola = mapOffProduct(products[0], 0);
  assert.ok(cola && cola.basis === "ml" && cola.calories === 42 && cola.servingLabel === "100 ml");
  const pasta = mapOffProduct(products[1], 1);
  assert.ok(pasta && pasta.basis === undefined && pasta.calories === 359 && pasta.servingGrams === 100);

  const merged = mergeEnrichment(products, { products: [{ code: "8076800195057", serving_quantity: 85, serving_quantity_unit: "g", serving_size: "1 serving (85 g)" }] });
  const pasta85 = mapOffProduct(merged[1], 1);
  assert.ok(pasta85 && pasta85.servingGrams === 85 && Math.abs(pasta85.calories - 305.15) < 0.01);
  assert.equal(merged[0], products[0], "unmatched products unchanged");
  // A volume pack with a gram serving is ambiguous and stays excluded (existing rule).
  const mixed = mergeEnrichment(products, { products: [{ code: "57045399", serving_quantity: 500, serving_quantity_unit: "g", serving_size: "500 g" }] });
  assert.equal(mapOffProduct(mixed[0], 0), null);
  assert.deepEqual(mergeEnrichment(products, null), products);
}
