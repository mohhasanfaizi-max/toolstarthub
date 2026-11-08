// Pure validation and spam checks for tool comments (no I/O).
export const NAME_MAX = 60;
export const BODY_MAX = 1000;
export const MIN_FILL_MS = 3_000;
export const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
export const MAX_URLS = 1;

export type CommentInput = { name?: unknown; rating?: unknown; body?: unknown; website?: unknown; startedAt?: unknown };
export type ValidComment = { name: string; rating: number | null; body: string };
export type ValidationResult = { ok: true; value: ValidComment } | { ok: false; error: string; spam?: boolean };

const URL_PATTERN = /\b(?:https?:\/\/|www\.)\S+|\b[a-z0-9-]+\.(?:com|net|org|info|biz|ru|xyz|top|io|co|shop|site|online)\b/gi;

export function countUrls(text: string): number {
  return (text.match(URL_PATTERN) ?? []).length;
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.normalize("NFC").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim() : "";
}

export function validateComment(input: CommentInput, now = Date.now()): ValidationResult {
  // Honeypot: real visitors never see or fill the "website" field.
  if (clean(input.website)) return { ok: false, error: "Your comment could not be sent.", spam: true };
  const started = Number(input.startedAt);
  if (!Number.isFinite(started) || now - started < MIN_FILL_MS || now - started > MAX_FORM_AGE_MS) {
    return { ok: false, error: "Please take a moment and try again.", spam: true };
  }
  const name = clean(input.name).replace(/\s+/g, " ");
  const body = clean(input.body).replace(/\n{3,}/g, "\n\n");
  if (!name) return { ok: false, error: "Please enter your name." };
  if ([...name].length > NAME_MAX) return { ok: false, error: `Name must be ${NAME_MAX} characters or fewer.` };
  if (!body) return { ok: false, error: "Please write a comment." };
  if ([...body].length > BODY_MAX) return { ok: false, error: `Comment must be ${BODY_MAX} characters or fewer.` };
  if ([...body].length < 3) return { ok: false, error: "Please write a little more." };
  let rating: number | null = null;
  if (input.rating !== undefined && input.rating !== null && input.rating !== "") {
    const r = Number(input.rating);
    if (!Number.isInteger(r) || r < 1 || r > 5) return { ok: false, error: "Rating must be 1 to 5." };
    rating = r;
  }
  if (countUrls(body) + countUrls(name) > MAX_URLS || countUrls(name) > 0) {
    return { ok: false, error: "Please remove links from your comment.", spam: true };
  }
  if (/(.)\1{14,}/.test(body)) return { ok: false, error: "Your comment could not be sent.", spam: true };
  return { ok: true, value: { name, rating, body } };
}
