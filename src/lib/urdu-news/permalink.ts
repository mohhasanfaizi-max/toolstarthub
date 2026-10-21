const STOPWORDS = new Set([
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

const MONTHS = new Set([
  "jan",
  "january",
  "feb",
  "february",
  "mar",
  "march",
  "apr",
  "april",
  "may",
  "jun",
  "june",
  "jul",
  "july",
  "aug",
  "august",
  "sep",
  "sept",
  "september",
  "oct",
  "october",
  "nov",
  "november",
  "dec",
  "december",
]);

const WEEKDAYS = new Set([
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "mon",
  "tue",
  "tues",
  "wed",
  "thu",
  "thur",
  "thurs",
  "fri",
  "sat",
  "sun",
]);

const FALLBACK = "urdu-news-english-draft";

function asciiTokens(title: string): string[] {
  const folded = title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  return folded.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

function isDateToken(token: string): boolean {
  if (MONTHS.has(token) || WEEKDAYS.has(token)) return true;
  if (/^(19|20)\d{2}$/.test(token)) return true;
  if (/^\d{1,2}(st|nd|rd|th)$/.test(token)) return true;
  return false;
}

function pickWords(tokens: string[]): string[] {
  const content = tokens.filter((token) => !STOPWORDS.has(token));
  if (content.length >= 4) return content.slice(0, 8);
  const result = [...content];
  const seen = new Set(result);
  for (const token of tokens) {
    if (result.length >= 4) break;
    if (seen.has(token)) continue;
    result.push(token);
    seen.add(token);
  }
  return result.slice(0, 8);
}

function limitLength(words: string[]): string {
  const current = [...words];
  while (current.length > 1 && current.join("-").length > 60) current.pop();
  let slug = current.join("-");
  if (slug.length > 60) slug = slug.slice(0, 60).replace(/-+$/g, "");
  return slug;
}

/** Lowercase ASCII slug: stopwords, dates, and non-Latin characters removed. */
export function buildPermalink(title: string): string {
  const tokens = asciiTokens(title).filter((token) => !isDateToken(token));
  const words = pickWords(tokens);
  const slug = limitLength(words);
  return slug || FALLBACK;
}

/** Session-only uniqueness. There is no server store on Vercel. */
export function uniquePermalink(base: string, used: Iterable<string>): string {
  const taken = new Set(used);
  const stem = base || FALLBACK;
  if (!taken.has(stem)) return stem;
  for (let n = 2; n < 1000; n += 1) {
    const suffix = `-${n}`;
    const room = 60 - suffix.length;
    const trimmed = stem.slice(0, room).replace(/-+$/g, "");
    const candidate = `${trimmed}${suffix}`;
    if (!taken.has(candidate)) return candidate;
  }
  return stem;
}
