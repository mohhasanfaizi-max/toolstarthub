import { siteConfig } from "../site.ts";
import type { VerificationCheck, VersionId } from "./types.ts";
import { buildPermalink } from "./permalink.ts";
import { countWords, cutAtWord, plainText, toTitleCase, trimWords } from "./text.ts";

export const TITLE_MAX = 70;
export const META_TITLE_MAX = 60;
export const META_DESCRIPTION_MAX = 155;
export const BRIEF_MIN_WORDS = 25;
export const BRIEF_MAX_WORDS = 40;
export const MEDIUM_MIN_WORDS = 60;
export const MEDIUM_MAX_WORDS = 100;

const META_SUFFIX = ` | ${siteConfig.name}`;

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

/** Title plus " | Tools Star Hub", or the title alone when the suffix will not fit. */
export function buildMetaTitle(title: string): { text: string; droppedSuffix: boolean } {
  const full = `${title}${META_SUFFIX}`;
  if (full.length <= META_TITLE_MAX) return { text: full, droppedSuffix: false };
  const room = META_TITLE_MAX - META_SUFFIX.length;
  const slice = title.slice(0, room + 1);
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > 0) {
    const shortened = title.slice(0, lastSpace).trim();
    if (shortened && `${shortened}${META_SUFFIX}`.length <= META_TITLE_MAX) {
      return { text: `${shortened}${META_SUFFIX}`, droppedSuffix: false };
    }
  }
  return { text: cutAtWord(title, META_TITLE_MAX), droppedSuffix: true };
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
      level: "warning",
      message: "The meta title dropped “| Tools Star Hub” so it could stay within 60 characters.",
    });
  }

  const versions = {} as Record<VersionId, SeoVersion>;
  for (const id of ["brief", "medium", "average"] as const) {
    const source = input.versions[id];
    const subtitle = plainText(source.subtitle);
    let body = plainText(source.body);
    if (id === "brief") {
      const trimmed = trimWords(body, BRIEF_MAX_WORDS);
      body = trimmed.text;
      if (trimmed.trimmed) notes.push({ level: "warning", message: "Brief was cut to 40 words." });
    }
    if (id === "medium") {
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
