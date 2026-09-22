import {
  readJson,
  writeJson,
  type StorageLike,
} from "./safe-storage.ts";

export const FAVORITES_KEY = "tsh-favorites";
export const FAVORITES_EVENT = "tsh-favorites-changed";

let memoryFavorites: string[] = [];

export function readFavoriteSlugs(
  storage: StorageLike | null,
  validSlugs: ReadonlySet<string>,
): string[] {
  const parsed = readJson<unknown>(storage, FAVORITES_KEY);
  const source = Array.isArray(parsed) ? parsed : memoryFavorites;
  const unique: string[] = [];

  for (const item of source) {
    if (typeof item !== "string" || !validSlugs.has(item) || unique.includes(item)) {
      continue;
    }
    unique.push(item);
  }

  if (!storage) {
    memoryFavorites = unique;
  }

  return unique;
}

export function writeFavoriteSlugs(
  storage: StorageLike | null,
  slugs: string[],
): boolean {
  memoryFavorites = slugs;
  const persisted = writeJson(storage, FAVORITES_KEY, slugs);
  emitFavoritesChanged();
  return persisted;
}

export function toggleFavoriteSlug(
  storage: StorageLike | null,
  slug: string,
  validSlugs: ReadonlySet<string>,
): { slugs: string[]; favorited: boolean; persisted: boolean } {
  if (!validSlugs.has(slug)) {
    const slugs = readFavoriteSlugs(storage, validSlugs);
    return { slugs, favorited: false, persisted: Boolean(storage) };
  }

  const current = readFavoriteSlugs(storage, validSlugs);
  const favorited = !current.includes(slug);
  const slugs = favorited
    ? [...current, slug]
    : current.filter((item) => item !== slug);
  const persisted = writeFavoriteSlugs(storage, slugs);
  return { slugs, favorited, persisted };
}

export function emitFavoritesChanged() {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event(FAVORITES_EVENT));
}
