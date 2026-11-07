// Component-level interaction test; no browser, external APIs or AI provider.
// Run: node scripts/tests/alma-ui-fallback.mjs
// Small hook harness loads the real Alma component and nutrition/storage helpers.
// Presentational components are stubs. This is not a browser accessibility test.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
import React from "react";
const nativeRequire = createRequire(import.meta.url);
const slots = []; const dependencies = []; const effects = [];
let cursor = 0;
const hooks = {
  ...React,
  useState(initial) {
    const i = cursor++;
    if (!(i in slots)) slots[i] = typeof initial === "function" ? initial() : initial;
    return [slots[i], value => { slots[i] = typeof value === "function" ? value(slots[i]) : value; }];
  },
  useEffect(effect, deps) {
    const i = cursor++;
    if (!dependencies[i] || deps.some((value, j) => value !== dependencies[i][j])) {
      dependencies[i] = deps; effects.push(effect);
    }
  },
  useMemo(fn) { cursor++; return fn(); },
  useCallback(fn) { cursor++; return fn; },
};
const storage = new Map();
const windowStub = { setTimeout, clearTimeout, localStorage: {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
} };
let searches = 0; let coachPayload; let packagedResults;
const fetchStub = async (url, options) => {
  if (String(url).startsWith("/api/alma/foods")) {
    searches++;
    if (packagedResults) return Response.json({ success: true, foods: packagedResults });
    return Response.json({ success: false, error: "Packaged-food search is temporarily unavailable. Sample foods and custom entry still work; try packaged-food search again later." }, { status: 502 });
  }
  assert.equal(url, "/api/alma/coach"); coachPayload = JSON.parse(options.body);
  return Response.json({ success: true, text: "Test educational reply", mode: "rules" });
};
const cache = new Map();
const presentational = new Proxy({}, { get: (_target, key) => {
  if (key === "toolControlClass") return "";
  return props => React.createElement("div", props, props.children);
} });
function load(file) {
  file = resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const loadedModule = { exports: {} }; cache.set(file, loadedModule);
  const output = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const req = spec => {
    if (spec === "react") return hooks;
    if (spec.startsWith("@/components/")) return presentational;
    if (spec.startsWith("@/") || spec.startsWith(".")) {
      const target = spec.startsWith("@/") ? resolve("src", spec.slice(2)) : resolve(dirname(file), spec);
      return load(/\.tsx?$/.test(target) ? target : target + ".ts");
    }
    return nativeRequire(spec);
  };
  vm.runInNewContext(output, { require: req, module: loadedModule, exports: loadedModule.exports, window: windowStub, fetch: fetchStub, console, setTimeout, clearTimeout, crypto: globalThis.crypto, Date, Intl, navigator: {} }, { filename: file });
  return loadedModule.exports;
}
const { AlmaNutritionTool } = load("src/components/tools/workspace/AlmaNutritionTool.tsx");
let tree;
function render() { cursor = 0; tree = AlmaNutritionTool(); return tree; }
function nodes(node) {
  if (node == null || typeof node === "boolean") return [];
  if (Array.isArray(node)) return node.flatMap(item => nodes(item));
  if (typeof node !== "object") return [node];
  if (typeof node.type === "function") return [node, ...nodes(node.type(node.props))];
  return [node, ...nodes(node.props?.children)];
}
function text(node) { return nodes(node).filter(item => typeof item === "string" || typeof item === "number").join(" "); }
function button(label) { const found = nodes(tree).find(n => n?.props?.onClick && text(n).trim() === label); assert(found, `button ${label}`); return found; }
function input(id, value) { const found = nodes(tree).find(n => n?.props?.id === id && n.props.onChange); assert(found, id); found.props.onChange({ target: { value } }); render(); }
async function flush() {
  for (const effect of effects.splice(0)) effect();
  await new Promise(resolve => setTimeout(resolve, 480)); render();
}
render(); await flush(); await flush();
button("Food Tracker").props.onClick(); render();
const drinksNotice = "Drinks measured by volume aren't included. Use sample foods or custom entry for drinks.";
assert(text(tree).includes(drinksNotice), "drink notice visible before search");
input("alma-search", "banana"); await flush();
assert.equal(searches, 1);
assert.match(text(tree), /Sample foods and custom entry still work/);
assert(text(tree).includes(drinksNotice), "drink notice remains visible with failure status");
assert.match(text(tree), /Banana/i);
// Select the real sample-food Add callback under the matching item.
const bananaItem = nodes(tree).find(n => n?.type === "li" && /banana/i.test(text(n)) && nodes(n).some(x => x?.props?.onClick));
assert(bananaItem); nodes(bananaItem).find(n => n?.props?.onClick).props.onClick(); render(); await flush();
let saved = JSON.parse(storage.get("toolstarhub-alma-v1"));
assert(Object.values(saved.days).some(d => d.meals.breakfast.some(f => /banana/i.test(f.name))));
console.log("PASS: mocked search 502 displays fallback notice; sample banana can still be added and persisted");
for (const [id, value] of [["custom-name", "Owner label test"], ["custom-kcal", "180"], ["custom-p", "12"], ["custom-c", "20"], ["custom-f", "6"]]) input(id, value);
button("Save and add custom food").props.onClick(); render(); await flush();
saved = JSON.parse(storage.get("toolstarhub-alma-v1"));
assert.equal(saved.customFoods[0].name, "Owner label test");
assert.equal(saved.customFoods[0].calories, 180);
assert(Object.values(saved.days).some(d => d.meals.breakfast.some(f => f.name === "Owner label test")));
console.log("PASS: custom label entry can still be created, logged and persisted after failed search");
button("AI Coach").props.onClick(); render();
input("alma-coach-q", "Test question"); button("Ask Alma").props.onClick(); await new Promise(resolve => setTimeout(resolve, 0)); render();
assert.equal(coachPayload.question, "Test question");
const expected = ["consumedCalories", "protein", "carbs", "fat", "mealCount", "waterMl", "topFoods"];
assert.deepEqual(Object.keys(coachPayload.context).sort(), expected.sort());
assert.equal(coachPayload.context.mealCount, 2);
assert(coachPayload.context.topFoods.includes("Owner label test"));
assert.deepEqual([...storage.keys()], ["toolstarhub-alma-v1"]);
assert(!storage.get("toolstarhub-alma-v1").includes("Test question"));
console.log("PASS: captured coach request matches A1 disclosure; unset targets omitted; names and totals sent, question not persisted");

button("Calculators").props.onClick(); render();
button("Calculate").props.onClick(); render(); await flush();
button("AI Coach").props.onClick(); render();
input("alma-coach-q", "Question with saved targets"); button("Ask Alma").props.onClick();
await new Promise(resolve => setTimeout(resolve, 0)); render();
const allFields = ["calorieTarget", "consumedCalories", "protein", "carbs", "fat", "proteinTarget", "carbTarget", "fatTarget", "bmr", "tdee", "mealCount", "waterMl", "topFoods"];
assert.deepEqual(Object.keys(coachPayload.context).sort(), allFields.sort());
assert.deepEqual(Object.keys(coachPayload).sort(), ["context", "question"]);
console.log("PASS: with saved calculator results, coach JSON includes exactly the 13 documented context fields");

// New packaged results must use their mapped gram basis; ml needs density.
const { mapOffProduct } = load("src/lib/tools/alma-off.ts");
packagedResults = [mapOffProduct({ code: "portion-test", product_name: "Packaged portion test", serving_size: "15g", nutriments: { "energy-kcal_100g": 500, proteins_100g: 10, carbohydrates_100g: 60, fat_100g: 20 } }, 0)];
button("Food Tracker").props.onClick(); render();
input("alma-search", "Packaged portion"); await flush();
assert(text(tree).includes(drinksNotice), "drink notice remains visible with successful results");
const portionChoice = () => nodes(tree).find(n => n?.props?.legend === "Portion unit");
portionChoice().props.onChange("ml"); render();
input("alma-servings", "15");
const packageButton = () => {
  const item = nodes(tree).find(n => n?.type === "li" && /Packaged portion test/.test(text(n)) && nodes(n).some(x => x?.props?.onClick));
  assert(item); return nodes(item).find(n => n?.props?.onClick);
};
const beforeMl = storage.get("toolstarhub-alma-v1");
packageButton().props.onClick(); render(); await flush();
assert.match(text(tree), /millilitres need a verified density/);
assert.equal(storage.get("toolstarhub-alma-v1"), beforeMl);
portionChoice().props.onChange("serving"); render(); input("alma-servings", "2");
packageButton().props.onClick(); render(); await flush();
saved = JSON.parse(storage.get("toolstarhub-alma-v1"));
const portion = Object.values(saved.days).flatMap(day => day.meals.breakfast).find(food => food.name === "Packaged portion test");
assert(portion); assert.equal(portion.grams, 30); assert.equal(portion.calories, 150); assert.equal(portion.protein, 3);
console.log("PASS: real UI Add callback rejects packaged ml without modifying storage; 2 x 15g servings log 30g and 150 kcal");

console.log("PASS: plain-language drinks exclusion and sample/custom alternatives stay visible before search, on failure and with results");
