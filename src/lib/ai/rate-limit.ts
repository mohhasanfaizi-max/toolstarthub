type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimitSettings(): { max: number; windowMs: number } {
  const max = Number(process.env.AI_RATE_LIMIT_MAX ?? "10");
  const windowMs = Number(process.env.AI_RATE_LIMIT_WINDOW_MS ?? "60000");
  return {
    max: Number.isFinite(max) && max > 0 ? Math.floor(max) : 10,
    windowMs: Number.isFinite(windowMs) && windowMs >= 1000 ? Math.floor(windowMs) : 60000,
  };
}

export function consumeRateLimit(
  key: string,
  now: number,
  max = rateLimitSettings().max,
  windowMs = rateLimitSettings().windowMs,
): { ok: true } | { ok: false; retryAfterSeconds: number } {
  const current = buckets.get(key);
  if (!current || now >= current.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (current.count >= max) {
    return { ok: false, retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }
  current.count += 1;
  return { ok: true };
}

export function resetRateLimits(): void {
  buckets.clear();
}
