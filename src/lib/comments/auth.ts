import { createHash, createHmac, timingSafeEqual } from "node:crypto";

// Admin session: HMAC-signed "<expiry>.<sig>" token in an HTTP-only cookie.
export const ADMIN_COOKIE = "tsh_admin";
export const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

function digest(value: string): Buffer {
  return createHash("sha256").update(value, "utf8").digest();
}

/** Constant-time password comparison (hashes first so lengths always match). */
export function passwordMatches(given: string, expected: string | undefined): boolean {
  if (!expected) return false;
  return timingSafeEqual(digest(given), digest(expected));
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", `tsh-admin-session:${secret}`).update(payload).digest("base64url");
}

export function createSession(secret: string, now = Date.now()): string {
  const expires = String(now + SESSION_TTL_MS);
  return `${expires}.${sign(expires, secret)}`;
}

export function verifySession(token: string | undefined, secret: string | undefined, now = Date.now()): boolean {
  if (!token || !secret) return false;
  const [expires, sig] = token.split(".");
  if (!expires || !sig || !/^\d+$/.test(expires) || Number(expires) < now) return false;
  const expected = Buffer.from(sign(expires, secret));
  const actual = Buffer.from(sig);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

/** Hash of the client IP with a server secret; the raw IP is never stored. */
export function hashIp(ip: string, salt: string): string {
  return createHmac("sha256", `tsh-ip:${salt}`).update(ip).digest("hex");
}

export function clientIp(headers: Headers): string {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip")?.trim() || "unknown";
}
