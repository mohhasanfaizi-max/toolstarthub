import assert from "node:assert/strict";
import { createSession, hashIp, passwordMatches, verifySession, SESSION_TTL_MS } from "./auth.ts";
import { commentsEnabled } from "./config.ts";
import { countUrls, validateComment } from "./validate.ts";

export function runCommentsChecks() {
  const now = 1_800_000_000_000;
  const base = { name: "Ali", body: "Very useful tool, thanks!", website: "", startedAt: now - 10_000 };

  // Validation.
  const ok = validateComment(base, now);
  assert.ok(ok.ok && ok.value.name === "Ali" && ok.value.rating === null);
  assert.ok(validateComment({ ...base, rating: 4 }, now).ok);
  assert.equal(validateComment({ ...base, rating: 6 }, now).ok, false);
  assert.equal(validateComment({ ...base, rating: 2.5 }, now).ok, false);
  assert.equal(validateComment({ ...base, name: "  " }, now).ok, false);
  assert.equal(validateComment({ ...base, name: "x".repeat(61) }, now).ok, false);
  assert.ok(validateComment({ ...base, name: "x".repeat(60) }, now).ok);
  assert.equal(validateComment({ ...base, body: "y".repeat(1001) }, now).ok, false);
  assert.ok(validateComment({ ...base, body: "word ".repeat(200).trim() }, now).ok);
  assert.equal(validateComment({ ...base, body: "" }, now).ok, false);
  const ctl = validateComment({ ...base, name: "A\u0000li" }, now);
  assert.ok(ctl.ok && ctl.value.name === "Ali");

  // Spam: honeypot, timing, links, repetition.
  const honey = validateComment({ ...base, website: "http://spam" }, now);
  assert.ok(!honey.ok && honey.spam);
  assert.ok(!validateComment({ ...base, startedAt: now - 500 }, now).ok);
  assert.ok(!validateComment({ ...base, startedAt: now - 2 * 86_400_000 }, now).ok);
  assert.ok(!validateComment({ ...base, startedAt: "x" }, now).ok);
  assert.equal(countUrls("see https://a.com and www.b.net and c.xyz"), 3);
  assert.ok(validateComment({ ...base, body: "Docs at https://example.com helped" }, now).ok, "one link allowed as plain text");
  assert.ok(!validateComment({ ...base, body: "buy https://a.com https://b.com" }, now).ok);
  assert.ok(!validateComment({ ...base, name: "cheap.shop" }, now).ok);
  assert.ok(!validateComment({ ...base, body: "aaaaaaaaaaaaaaaaaaaa" }, now).ok);

  // Auth.
  assert.equal(passwordMatches("secret", "secret"), true);
  assert.equal(passwordMatches("Secret", "secret"), false);
  assert.equal(passwordMatches("secret", undefined), false);
  assert.equal(passwordMatches("", ""), false);
  const token = createSession("pw", now);
  assert.equal(verifySession(token, "pw", now + 1000), true);
  assert.equal(verifySession(token, "other", now + 1000), false);
  assert.equal(verifySession(token, "pw", now + SESSION_TTL_MS + 1), false, "expired");
  const [exp, sig] = token.split(".");
  assert.equal(verifySession(`${Number(exp) + 999999}.${sig}`, "pw", now), false, "tampered expiry");
  assert.equal(verifySession(undefined, "pw", now), false);
  assert.equal(verifySession("garbage", "pw", now), false);

  // IP hashing: deterministic, salted, never the raw IP.
  const h = hashIp("203.0.113.7", "salt");
  assert.match(h, /^[0-9a-f]{64}$/);
  assert.equal(h, hashIp("203.0.113.7", "salt"));
  assert.notEqual(h, hashIp("203.0.113.7", "other"));
  assert.ok(!h.includes("203"));

  // Without env, comments are disabled (UI hides the section until configured).
  const saved = { a: process.env.DATABASE_URL, b: process.env.POSTGRES_URL };
  delete process.env.DATABASE_URL;
  delete process.env.POSTGRES_URL;
  assert.equal(commentsEnabled(), false);
  process.env.POSTGRES_URL = "postgres://x";
  assert.equal(commentsEnabled(), true);
  if (saved.a === undefined) delete process.env.DATABASE_URL; else process.env.DATABASE_URL = saved.a;
  if (saved.b === undefined) delete process.env.POSTGRES_URL; else process.env.POSTGRES_URL = saved.b;
}
