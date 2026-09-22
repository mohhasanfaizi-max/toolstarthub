import {
  readJson,
  writeJson,
  type StorageLike,
} from "./safe-storage.ts";

export const RECENTS_KEY = "tsh-recents";
export const RECENTS_EVENT = "tsh-recents-changed";
export const RECENTS_MAX = 10;

export type RecentToolEntry = {
  slug: string;
  timestamp: number;
};

let memoryRecents: RecentToolEntry[] = [];

function isEntry(value: unknown): value is RecentToolEntry {
  if (!value || typeof value !== "object") {
    return false;
  }
  const candidate = value as RecentToolEntry;
  return (
    typeof candidate.slug === "string" &&
    typeof candidate.timestamp === "number" &&
    Number.isFinite(candidate.timestamp)
  );
}

export function readRecentTools(
  storage: StorageLike | null,
  validSlugs: ReadonlySet<string>,
): RecentToolEntry[] {
  const parsed = readJson<unknown>(storage, RECENTS_KEY);
  const source = Array.isArray(parsed) ? parsed : memoryRecents;
  const unique: RecentToolEntry[] = [];
  const seen = new Set<string>();

  for (const item of source) {
    if (!isEntry(item) || !validSlugs.has(item.slug) || seen.has(item.slug)) {
      continue;
    }
    seen.add(item.slug);
    unique.push({ slug: item.slug, timestamp: item.timestamp });
  }

  unique.sort((a, b) => b.timestamp - a.timestamp);
  const limited = unique.slice(0, RECENTS_MAX);

  if (!storage) {
    memoryRecents = limited;
  }

  return limited;
}

export function recordRecentTool(
  storage: StorageLike | null,
  slug: string,
  validSlugs: ReadonlySet<string>,
  timestamp = Date.now(),
): { entries: RecentToolEntry[]; persisted: boolean } {
  if (!validSlugs.has(slug)) {
    return {
      entries: readRecentTools(storage, validSlugs),
      persisted: Boolean(storage),
    };
  }

  const next: RecentToolEntry[] = [
    { slug, timestamp },
    ...readRecentTools(storage, validSlugs).filter((item) => item.slug !== slug),
  ].slice(0, RECENTS_MAX);

  memoryRecents = next;
  const persisted = writeJson(storage, RECENTS_KEY, next);
  emitRecentsChanged();
  return { entries: next, persisted };
}

export function emitRecentsChanged() {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event(RECENTS_EVENT));
}
