import type { AlmaState, DiaryEntry } from "./alma-foods.ts";

// Stored diary entries carry no version or timestamp, so entries saved before the
// 7 Nov 2026 serving-basis fix cannot be told apart reliably. The notice therefore
// shows when any Open Food Facts entry logged by "serving" exists. Read-only: this
// module never changes the diary.
export const ALMA_NOTICE_KEY = "toolstarhub-alma-notice-v1";

export const ALMA_OLD_ENTRIES_NOTICE =
  "Packaged-food servings saved before 7 Nov 2026 may have been calculated per 100 g instead of per serving, so some older totals may be too high. To fix an item, delete it and add it again. A review tool is coming.";

type StorageLike = Pick<Storage, "getItem" | "setItem">;

export function hasOffServingEntries(state: Pick<AlmaState, "days"> | null | undefined): boolean {
  const days = state?.days;
  if (!days || typeof days !== "object") return false;
  for (const day of Object.values(days)) {
    const meals = day?.meals;
    if (!meals || typeof meals !== "object") continue;
    for (const entries of Object.values(meals) as unknown[]) {
      if (!Array.isArray(entries)) continue;
      if ((entries as DiaryEntry[]).some((entry) => entry?.source === "open-food-facts" && entry?.unit === "serving")) {
        return true;
      }
    }
  }
  return false;
}

export function isNoticeDismissed(storage: StorageLike | undefined): boolean {
  try {
    return storage?.getItem(ALMA_NOTICE_KEY) === "dismissed";
  } catch {
    return false;
  }
}

export function dismissNotice(storage: StorageLike | undefined): void {
  try {
    storage?.setItem(ALMA_NOTICE_KEY, "dismissed");
  } catch {
    // Storage may be unavailable; the notice simply hides for this visit.
  }
}

export function shouldShowOldEntriesNotice(
  state: Pick<AlmaState, "days"> | null | undefined,
  storage: StorageLike | undefined,
): boolean {
  return hasOffServingEntries(state) && !isNoticeDismissed(storage);
}
