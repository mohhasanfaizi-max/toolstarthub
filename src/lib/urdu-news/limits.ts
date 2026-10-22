import { siteConfig } from "../site.ts";
import type { VerificationCheck, VersionId } from "./types.ts";
import { buildPermalink } from "./permalink.ts";
import { countWords, cutAtWord, firstSentences, plainText, toTitleCase, trimWords } from "./text.ts";

export const TITLE_MAX = 70;
export const META_TITLE_MAX = 60;
export const META_DESCRIPTION_MAX = 155;
export const BRIEF_MIN_WORDS = 25;
export const BRIEF_MAX_WORDS = 40;
export const MEDIUM_MIN_WORDS = 60;
export const MEDIUM_MAX_WORDS = 100;

const META_SUFFIX = ` | ${siteConfig.name}`;

/** Small words and pure numbers that should not be the last word of a cut meta title. */
const DANGLING_ENDINGS = new Set([
  "a",
  "an",
  "the",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "and",
  "or",
  "is",
  "are",
  "was",
  "were",
  "by",
  "with",
  "from",
]);

function isDanglingEnding(word: string): boolean {
  const bare = word.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "");
  if (!bare) return true;
  if (/^\d+(?:[.,]\d+)*$/.test(bare)) return true;
  return DANGLING_ENDINGS.has(bare.toLowerCase());
}

/** Keep whole words inside 60 characters, and do not stop on a number or a small word. */
function trimMetaTitle(title: string): string {
  const words = title.split(/\s+/).filter(Boolean);
  const kept: string[] = [];
  for (const word of words) {
    const next = kept.length === 0 ? word : `${kept.join(" ")} ${word}`;
    if (next.length > META_TITLE_MAX) break;
    kept.push(word);
  }
  while (kept.length > 0 && isDanglingEnding(kept[kept.length - 1])) kept.pop();
  if (kept.length > 0) return kept.join(" ");
  const content = words.find((word) => !isDanglingEnding(word));
  return cutAtWord(content ?? title, META_TITLE_MAX);
}

export type SeoVersionInput = {
  subtitle: string;
  body: string;
  meta_description: string;
};

export type SeoVersion = SeoVersionInput & { word_count: number };

export function buildTitle(raw: string): { text: string; shortened: boolean } {
  const cased = toTitleCase(plainText(raw));
  const text = cutAtWord(cased, TITLE_MAX);
  return { text, shortened: text !== cased };
}

/**
 * Meta title rules, in order:
 * 1. Title plus " | Tools Star Hub" when that fits in 60 characters.
 * 2. The full title alone when it fits in 60 characters.
 * 3. The title cut on a word to 60 characters, with no suffix, and not ending on a number or a small word.
 */
export function buildMetaTitle(title: string): { text: string; droppedSuffix: boolean } {
  const clean = title.trim().replace(/\s+/g, " ");
  if (`${clean}${META_SUFFIX}`.length <= META_TITLE_MAX) return { text: `${clean}${META_SUFFIX}`, droppedSuffix: false };
  if (clean.length <= META_TITLE_MAX) return { text: clean, droppedSuffix: true };
  return { text: trimMetaTitle(clean), droppedSuffix: true };
}

export function buildMetaDescription(raw: string): { text: string; shortened: boolean } {
  const clean = plainText(raw);
  const text = cutAtWord(clean, META_DESCRIPTION_MAX);
  return { text, shortened: text !== clean };
}

export function applySeo(input: {
  title: string;
  versions: Record<VersionId, SeoVersionInput>;
}): {
  title: string;
  permalink: string;
  meta_title: string;
  versions: Record<VersionId, SeoVersion>;
  notes: VerificationCheck[];
} {
  const notes: VerificationCheck[] = [];
  const title = buildTitle(input.title);
  if (title.shortened) {
    notes.push({ level: "warning", message: "The title was shortened to 70 characters." });
  }
  const meta = buildMetaTitle(title.text);
  if (meta.droppedSuffix) {
    notes.push({
      level: "info",
      message: "The meta title dropped “| Tools Star Hub” so it could stay within 60 characters.",
    });
  }

  const fullBody = plainText(input.versions.average.body);
  const fullWords = countWords(fullBody);
  const versions = {} as Record<VersionId, SeoVersion>;
  for (const id of ["brief", "medium", "average"] as const) {
    const source = input.versions[id];
    const subtitle = plainText(source.subtitle);
    let body = id === "average" ? fullBody : plainText(source.body);
    if (id === "brief" && fullWords <= BRIEF_MIN_WORDS && countWords(body) > fullWords) {
      body = firstSentences(fullBody, 2);
      notes.push({
        level: "info",
        message: "Brief uses the first two sentences of Full because the story is at or below 25 words.",
      });
    } else if (id === "medium" && fullWords <= MEDIUM_MIN_WORDS && countWords(body) > fullWords) {
      body = fullBody;
      notes.push({
        level: "info",
        message: "Medium uses Full because the story is at or below 60 words.",
      });
    } else if (id === "brief") {
      const trimmed = trimWords(body, BRIEF_MAX_WORDS);
      body = trimmed.text;
      if (trimmed.trimmed) notes.push({ level: "warning", message: "Brief was cut to 40 words." });
    } else if (id === "medium") {
      const trimmed = trimWords(body, MEDIUM_MAX_WORDS);
      body = trimmed.text;
      if (trimmed.trimmed) notes.push({ level: "warning", message: "Medium was cut to 100 words." });
    }
    const description = buildMetaDescription(source.meta_description);
    if (description.shortened) {
      const label = id === "average" ? "Full" : id === "brief" ? "Brief" : "Medium";
      notes.push({ level: "warning", message: `${label} meta description was cut to 155 characters.` });
    }
    versions[id] = {
      subtitle,
      body,
      meta_description: description.text,
      word_count: countWords(body),
    };
  }

  return {
    title: title.text,
    permalink: buildPermalink(title.text),
    meta_title: meta.text,
    versions,
    notes,
  };
}
