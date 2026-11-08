import assert from "node:assert/strict";
import { ALMA_NOTICE_KEY, dismissNotice, hasOffServingEntries, isNoticeDismissed, shouldShowOldEntriesNotice } from "./alma-notice.ts";

function memoryStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (key: string) => (map.has(key) ? map.get(key)! : null),
    setItem: (key: string, value: string) => void map.set(key, String(value)),
    map,
  };
}

function entry(source: string, unit: string) {
  return { id: "e", foodId: "f", name: "x", meal: "breakfast", servings: 1, unit, grams: 30, calories: 100, protein: 1, carbs: 1, fat: 1, source };
}

function stateWith(entries: unknown[]) {
  return { days: { "2026-11-01": { date: "2026-11-01", waterMl: 0, meals: { breakfast: entries, lunch: [], dinner: [], snacks: [] } } } } as never;
}

export function runAlmaNoticeChecks() {
  assert.equal(hasOffServingEntries(undefined), false);
  assert.equal(hasOffServingEntries({ days: {} }), false);
  assert.equal(hasOffServingEntries(stateWith([entry("open-food-facts", "g")])), false);
  assert.equal(hasOffServingEntries(stateWith([entry("sample", "serving")])), false);
  assert.equal(hasOffServingEntries(stateWith([entry("custom", "serving")])), false);
  assert.equal(hasOffServingEntries(stateWith([entry("open-food-facts", "serving")])), true);
  assert.equal(hasOffServingEntries(stateWith([{ ...entry("open-food-facts", "serving"), basis: "g" }])), false, "new entries with a basis are current");
  assert.equal(hasOffServingEntries(stateWith([{ ...entry("open-food-facts", "serving"), basis: "ml", ml: 330 }])), false);
  assert.equal(hasOffServingEntries({ days: { bad: null, worse: { meals: { breakfast: "x" } } } } as never), false);

  const storage = memoryStorage();
  const state = stateWith([entry("open-food-facts", "serving")]);
  const before = JSON.stringify(state);
  assert.equal(isNoticeDismissed(storage), false);
  assert.equal(shouldShowOldEntriesNotice(state, storage), true);
  dismissNotice(storage);
  assert.equal(storage.map.get(ALMA_NOTICE_KEY), "dismissed");
  assert.equal(shouldShowOldEntriesNotice(state, storage), false);
  assert.equal(storage.map.has("toolstarhub-alma-v1"), false, "dismissal must not touch diary storage");
  assert.equal(JSON.stringify(state), before, "detection must not modify diary data");

  const broken = { getItem: () => { throw new Error("blocked"); }, setItem: () => { throw new Error("blocked"); } };
  assert.equal(isNoticeDismissed(broken), false);
  assert.doesNotThrow(() => dismissNotice(broken));
  assert.equal(shouldShowOldEntriesNotice(state, undefined), true);
}
