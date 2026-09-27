import { consumeRateLimit } from "../ai/rate-limit.ts";
import { fetchOpenGraph, parsePreviewUrl, type AddressLookup, type PageRequest } from "./fetch-preview.ts";
import type { OpenGraphPreview } from "./extract-preview.ts";

export type OgPreviewResult = {
  status: number;
  body: { success: true; preview: OpenGraphPreview } | { success: false; error: string };
  retryAfterSeconds?: number;
};

const RATE_LIMIT_ERROR = "Too many preview requests. Wait a minute and try again.";

function statusFor(error: string): number {
  if (error === "The preview request timed out.") return 504;
  if (error === "That page could not be previewed.") return 502;
  return 400;
}

export async function handleOgPreview(
  payload: unknown,
  clientKey: string,
  now: number,
  deps: { lookup?: AddressLookup; request?: PageRequest } = {},
): Promise<OgPreviewResult> {
  const url = typeof payload === "object" && payload !== null && "url" in payload ? payload.url : undefined;
  if (typeof url !== "string" || url.trim() === "") {
    return { status: 400, body: { success: false, error: "Send a JSON request with a url." } };
  }
  const parsed = parsePreviewUrl(url);
  if (!parsed.ok) return { status: 400, body: { success: false, error: parsed.error } };

  const limit = consumeRateLimit(`og:${clientKey}`, now);
  if (!limit.ok) {
    return {
      status: 429,
      retryAfterSeconds: limit.retryAfterSeconds,
      body: { success: false, error: RATE_LIMIT_ERROR },
    };
  }

  const preview = await fetchOpenGraph(url, now, deps);
  if (!preview.ok) return { status: statusFor(preview.error), body: { success: false, error: preview.error } };
  return { status: 200, body: { success: true, preview: preview.preview } };
}
