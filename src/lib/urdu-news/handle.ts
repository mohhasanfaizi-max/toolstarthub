import { consumeRateLimit } from "../ai/rate-limit.ts";
import { checkDraftText, checkTranslation, withFactCheck } from "./checks.ts";
import { readJsonWithRetry, UrduNewsCallError } from "./json.ts";
import { applySeo } from "./limits.ts";
import { expandPrompt, factCheckPrompt, humanizePrompt, translationPrompt } from "./prompts.ts";
import type { SchemaName } from "./schema.ts";
import { plainText } from "./text.ts";
import type { ExpandedArticle, FactIssue, FactRow, FactType, TranslationResult, VersionId } from "./types.ts";

/** Best-effort in-memory cap. Each server instance has its own counter. Article text is not stored. */
export const URDU_NEWS_RATE_MAX = 20;
export const URDU_NEWS_RATE_WINDOW_MS = 15 * 60 * 1000;
export const URDU_NEWS_MAX_CHARS = 8000;
export const URDU_DRAFT_MAX_CHARS = 16000;

export const urduNewsMessages = {
  unavailable: "The translator is temporarily unavailable.",
  invalid: "The translator could not read that request.",
  empty: "Paste an Urdu news article first.",
  tooLong: "That article is too long. Keep it under 8,000 characters.",
  draftLong: "That English draft is too long to send.",
  draftEmpty: "There is no English draft to rewrite yet.",
  rate: "Too many translation requests. Wait a few minutes and try again.",
  safety: "The model declined this text for safety. Edit the source and try again.",
  busy: "The translator is busy. Wait a minute and try again.",
  failed: "The translator could not finish that request. Try again in a moment.",
  badJson: "The translator returned a result that could not be read. Try again.",
} as const;

export type UrduJsonGenerator = (prompt: string, schema: SchemaName, maxOutputTokens: number) => Promise<string>;

export type UrduNewsResponse = {
  status: number;
  body: { success: false; error: string } | ({ success: true } & Record<string, unknown>);
  retryAfterSeconds?: number;
};

const FACT_TYPES = new Set<FactType>(["person", "place", "number", "date", "quote"]);
const ISSUE_TYPES = new Set(["name", "number", "date", "place", "amount", "added_fact", "quote", "meaning", "missing_sentence"]);

function fail(error: string, status = 400): UrduNewsResponse {
  return { status, body: { success: false, error } };
}

function fromCall(error: UrduNewsCallError): UrduNewsResponse {
  if (error.kind === "unconfigured") return fail(urduNewsMessages.unavailable, 503);
  if (error.kind === "safety") return fail(urduNewsMessages.safety, 502);
  if (error.kind === "rate") return fail(urduNewsMessages.busy, 429);
  if (error.kind === "bad_json") return fail(urduNewsMessages.badJson, 502);
  return fail(urduNewsMessages.failed, 502);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function readUrdu(record: Record<string, unknown>): { ok: true; urdu: string } | { ok: false; response: UrduNewsResponse } {
  if (typeof record.urdu !== "string") return { ok: false, response: fail(urduNewsMessages.invalid) };
  const urdu = record.urdu.trim();
  if (!urdu) return { ok: false, response: fail(urduNewsMessages.empty) };
  if (urdu.length > URDU_NEWS_MAX_CHARS) return { ok: false, response: fail(urduNewsMessages.tooLong) };
  return { ok: true, urdu };
}

function readDraft(record: Record<string, unknown>): { ok: true; text: string } | { ok: false; response: UrduNewsResponse } {
  if (typeof record.text !== "string") return { ok: false, response: fail(urduNewsMessages.invalid) };
  const text = record.text.trim();
  if (!text) return { ok: false, response: fail(urduNewsMessages.draftEmpty) };
  if (text.length > URDU_DRAFT_MAX_CHARS) return { ok: false, response: fail(urduNewsMessages.draftLong) };
  return { ok: true, text };
}

function readVersion(value: unknown): VersionId | null {
  return value === "brief" || value === "medium" || value === "average" ? value : null;
}

function parseVersion(value: unknown): { subtitle: string; body: string; meta_description: string } {
  const record = asRecord(value);
  if (!record || typeof record.body !== "string" || !record.body.trim()) throw new Error("Invalid version");
  return {
    subtitle: typeof record.subtitle === "string" ? record.subtitle : "",
    body: record.body,
    meta_description: typeof record.meta_description === "string" ? record.meta_description : "",
  };
}

function parseFacts(value: unknown): FactRow[] {
  if (!Array.isArray(value)) throw new Error("Invalid facts");
  const facts: FactRow[] = [];
  for (const item of value) {
    const record = asRecord(item);
    if (!record) continue;
    if (typeof record.type !== "string" || !FACT_TYPES.has(record.type as FactType)) continue;
    if (typeof record.english !== "string" || typeof record.urdu !== "string") continue;
    if (typeof record.in_brief !== "boolean" || typeof record.in_medium !== "boolean" || typeof record.in_average !== "boolean") {
      continue;
    }
    facts.push({
      type: record.type as FactType,
      english: plainText(record.english),
      urdu: plainText(record.urdu),
      in_brief: record.in_brief,
      in_medium: record.in_medium,
      in_average: record.in_average,
    });
  }
  return facts;
}

function parseTranslation(value: unknown) {
  const record = asRecord(value);
  if (!record || typeof record.title !== "string" || !record.title.trim()) throw new Error("Invalid translation");
  const versions = asRecord(record.versions);
  if (!versions) throw new Error("Invalid translation");
  return {
    title: record.title,
    versions: {
      brief: parseVersion(versions.brief),
      medium: parseVersion(versions.medium),
      average: parseVersion(versions.average),
    },
    facts: parseFacts(record.facts),
  };
}

function parseFactIssues(value: unknown): FactIssue[] {
  const record = asRecord(value);
  if (!record || !Array.isArray(record.issues)) throw new Error("Invalid fact check");
  const issues: FactIssue[] = [];
  for (const item of record.issues) {
    const issue = asRecord(item);
    if (!issue || typeof issue.detail !== "string" || !issue.detail.trim()) continue;
    const version = issue.version === "full" ? "average" : issue.version;
    if (version !== "brief" && version !== "medium" && version !== "average") continue;
    if (typeof issue.type !== "string" || !ISSUE_TYPES.has(issue.type)) continue;
    issues.push({ version, type: issue.type, detail: plainText(issue.detail).slice(0, 400) });
  }
  return issues;
}

function parseArticle(value: unknown): ExpandedArticle {
  const record = asRecord(value);
  if (!record || typeof record.headline !== "string" || typeof record.intro !== "string" || !Array.isArray(record.paragraphs)) {
    throw new Error("Invalid article");
  }
  const paragraphs = record.paragraphs
    .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    .map((item) => plainText(item));
  const headline = plainText(record.headline);
  const intro = plainText(record.intro);
  if (!headline || !intro || paragraphs.length === 0) throw new Error("Invalid article");
  return { headline, intro, paragraphs };
}

function parseRewrite(value: unknown): string {
  const record = asRecord(value);
  if (!record || typeof record.text !== "string" || !record.text.trim()) throw new Error("Invalid rewrite");
  return plainText(record.text);
}

async function ask<T>(
  generate: UrduJsonGenerator,
  prompt: string,
  schema: SchemaName,
  maxTokens: number,
  parse: (value: unknown) => T,
): Promise<T> {
  return readJsonWithRetry(async (attempt) => {
    const text = attempt === 0 ? prompt : `${prompt}\n\nThe previous reply was not valid JSON. Return only the JSON object.`;
    return generate(text, schema, maxTokens);
  }, parse);
}

export async function handleUrduNews(
  payload: unknown,
  clientKey: string,
  now: number,
  generate: UrduJsonGenerator,
  configured: boolean,
): Promise<UrduNewsResponse> {
  if (!configured) return fail(urduNewsMessages.unavailable, 503);

  const limit = consumeRateLimit(`urdu-news:${clientKey}`, now, URDU_NEWS_RATE_MAX, URDU_NEWS_RATE_WINDOW_MS);
  if (!limit.ok) {
    return { status: 429, retryAfterSeconds: limit.retryAfterSeconds, body: { success: false, error: urduNewsMessages.rate } };
  }

  const record = asRecord(payload);
  if (!record) return fail(urduNewsMessages.invalid);
  const urdu = readUrdu(record);
  if (!urdu.ok) return urdu.response;

  try {
    if (record.action === "translate") {
      const parsed = await ask(generate, translationPrompt(urdu.urdu), "translation", 8192, parseTranslation);
      const seo = applySeo(parsed);
      let issues: FactIssue[] | null = null;
      try {
        issues = await ask(
          generate,
          factCheckPrompt(urdu.urdu, {
            brief: seo.versions.brief.body,
            medium: seo.versions.medium.body,
            average: seo.versions.average.body,
          }),
          "fact",
          2048,
          parseFactIssues,
        );
      } catch (error) {
        if (error instanceof UrduNewsCallError && error.kind === "bad_json") issues = null;
        else throw error;
      }
      const verification = withFactCheck(
        { status: "ok", checks: [...seo.notes, ...checkTranslation(urdu.urdu, seo).checks] },
        issues,
      );
      const result: TranslationResult = {
        title: seo.title,
        permalink: seo.permalink,
        meta_title: seo.meta_title,
        versions: seo.versions,
        facts: parsed.facts,
        verification,
      };
      return { status: 200, body: { success: true, ...result, fact_issues: issues } };
    }

    if (record.action === "expand") {
      const version = readVersion(record.version);
      const draft = readDraft(record);
      if (!version) return fail(urduNewsMessages.invalid);
      if (!draft.ok) return draft.response;
      const article = await ask(generate, expandPrompt(urdu.urdu, version, draft.text), "article", 4096, parseArticle);
      const verification = checkDraftText(urdu.urdu, [article.headline, article.intro, ...article.paragraphs].join("\n\n"), "article");
      return { status: 200, body: { success: true, ...article, verification } };
    }

    if (record.action === "humanize") {
      const draft = readDraft(record);
      if (!draft.ok) return draft.response;
      if (record.target === "article") {
        const article = await ask(generate, humanizePrompt(urdu.urdu, draft.text, true), "article", 4096, parseArticle);
        const verification = checkDraftText(urdu.urdu, [article.headline, article.intro, ...article.paragraphs].join("\n\n"), "article");
        return { status: 200, body: { success: true, ...article, verification } };
      }
      const version = readVersion(record.target);
      if (!version) return fail(urduNewsMessages.invalid);
      const text = await ask(generate, humanizePrompt(urdu.urdu, draft.text, false), "rewrite", 4096, parseRewrite);
      const verification = checkDraftText(urdu.urdu, text, version);
      return { status: 200, body: { success: true, text, verification } };
    }

    return fail(urduNewsMessages.invalid);
  } catch (error) {
    if (error instanceof UrduNewsCallError) return fromCall(error);
    return fail(urduNewsMessages.failed, 502);
  }
}
