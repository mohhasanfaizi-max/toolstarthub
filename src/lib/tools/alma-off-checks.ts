import assert from "node:assert/strict";
import { detectOffBasis, mapOffProduct, type OffProduct } from "./alma-off.ts";
import { mlUnitError, scaleFood } from "./alma-foods.ts";

// Real-shaped fixtures copied from live Open Food Facts v2 product responses (8 Nov 2026).
const COLA_330ML: OffProduct = {
  code: "5449000000996", product_name: "Coca-Cola Original", brands: "Coca-Cola",
  nutrition_data_per: "100g", product_quantity_unit: "ml",
  serving_size: "1 portion (330 ml)", serving_quantity: 330, serving_quantity_unit: "ml",
  nutriments: { "energy-kcal_100g": 42.4, "energy-kcal_serving": 140, proteins_100g: 0, carbohydrates_100g: 10.6, fat_100g: 0 },
};
const MILK_250ML: OffProduct = {
  code: "3252210390014", product_name: "Lait vit d",
  nutrition_data_per: "100ml", serving_size: "250 ml", serving_quantity: 250, serving_quantity_unit: "ml",
  nutriments: { "energy-kcal_100g": 46, "energy-kcal_serving": 115, proteins_100g: 3.3, carbohydrates_100g: 4.8, fat_100g: 1.5, calcium_100g: 0.12 },
};
const WATER_1_5L: OffProduct = {
  code: "3274080005003", product_name: "isabelle", nutrition_data_per: "100g",
  serving_size: "1,5L", serving_quantity: 1500, serving_quantity_unit: "ml",
  nutriments: { "energy-kcal_100g": 0, proteins_100g: 0, carbohydrates_100g: 0, fat_100g: 0 },
};
const SKYR_140G: OffProduct = {
  code: "3033490004743", product_name: "Skyr", nutrition_data_per: "100g", product_quantity_unit: "g",
  serving_size: "1 portion (140 g)", serving_quantity: 140, serving_quantity_unit: "g",
  nutriments: { "energy-kcal_100g": 57, "energy-kcal_serving": 79.8, proteins_100g: 10, carbohydrates_100g: 3.9, fat_100g: 0.2 },
};

export function runAlmaOffChecks() {
  // Basis detection.
  assert.deepEqual(detectOffBasis(COLA_330ML), { basis: "ml", servingMl: 330 });
  assert.deepEqual(detectOffBasis(MILK_250ML), { basis: "ml", servingMl: 250 });
  assert.deepEqual(detectOffBasis(WATER_1_5L), { basis: "ml", servingMl: 1500 });
  assert.deepEqual(detectOffBasis(SKYR_140G), { basis: "g" });
  assert.deepEqual(detectOffBasis({ ...COLA_330ML, serving_size: "1 can", serving_quantity: undefined, serving_quantity_unit: undefined }), { basis: "ml" });

  // Ambiguous data stays excluded.
  const mixed = { ...MILK_250ML, serving_size: "250 ml (258 g)" };
  assert.equal(detectOffBasis(mixed).basis, "unknown");
  assert.equal(mapOffProduct(mixed, 0), null);
  const massQuantity = { ...COLA_330ML, product_quantity_unit: "g" };
  assert.equal(detectOffBasis(massQuantity).basis, "unknown");
  const servingMismatch = { ...COLA_330ML, nutriments: { ...COLA_330ML.nutriments, "energy-kcal_serving": 60 } };
  assert.equal(detectOffBasis(servingMismatch).basis, "unknown");
  const per100mlButGrams = { ...SKYR_140G, nutrition_data_per: "100ml" };
  assert.equal(mapOffProduct(per100mlButGrams, 0), null);
  assert.equal(mapOffProduct({ ...COLA_330ML, serving_size: "330 ml", serving_quantity: 250 }, 0), null);

  // Mapping and scaling: cola.
  const cola = mapOffProduct(COLA_330ML, 0);
  assert.ok(cola);
  assert.equal(cola.basis, "ml");
  assert.equal(cola.servingLabel, "330 ml");
  assert.equal(cola.servingGrams, 0);
  assert.ok(Math.abs(cola.calories - 139.92) < 0.01);
  const colaMl = scaleFood(cola, 500, "ml");
  assert.equal(colaMl.calories, 212);
  assert.equal(colaMl.carbs, 53);
  assert.equal(colaMl.ml, 500);
  assert.equal(colaMl.grams, 0);
  assert.equal(colaMl.basis, "ml");
  const colaCan = scaleFood(cola, 1, "serving");
  assert.equal(colaCan.calories, 139.9);
  assert.equal(colaCan.ml, 330);
  assert.match(mlUnitError(cola, "g") ?? "", /per 100 ml/);
  assert.equal(mlUnitError(cola, "ml"), null);
  assert.equal(mlUnitError(cola, "serving"), null);
  assert.equal(scaleFood(cola, 100, "g").calories, 0, "grams never converted for ml products");

  // Milk: 200 ml.
  const milk = mapOffProduct(MILK_250ML, 0);
  assert.ok(milk);
  const glass = scaleFood(milk, 200, "ml");
  assert.equal(glass.calories, 92);
  assert.equal(glass.protein, 6.6);
  assert.equal(glass.micros?.calcium, 240);

  // No ml serving: servings disabled, ml works per 100 ml.
  const can = mapOffProduct({ ...COLA_330ML, serving_size: "1 can", serving_quantity: undefined, serving_quantity_unit: undefined }, 0);
  assert.ok(can);
  assert.equal(can.servingLabel, "100 ml");
  assert.match(mlUnitError(can, "serving") ?? "", /no serving size in millilitres/);
  assert.equal(scaleFood(can, 250, "ml").calories, 106);

  // Gram products unchanged.
  const skyr = mapOffProduct(SKYR_140G, 0);
  assert.ok(skyr);
  assert.equal(skyr.basis, undefined);
  assert.equal(skyr.servingGrams, 140);
  assert.equal(scaleFood(skyr, 1, "serving").calories, 79.8);
  assert.equal(scaleFood(skyr, 100, "g").calories, 57);
  assert.equal(scaleFood(skyr, 100, "g").basis, "g");
  assert.equal(mlUnitError(skyr, "g"), null);
}
