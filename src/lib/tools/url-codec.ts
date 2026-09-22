export type UrlCodecResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

export function encodeUrlComponent(input: string): UrlCodecResult {
  try {
    return { ok: true, output: encodeURIComponent(input) };
  } catch {
    return { ok: false, error: "That text could not be URL-encoded." };
  }
}

export function decodeUrlComponent(input: string): UrlCodecResult {
  try {
    return { ok: true, output: decodeURIComponent(input) };
  } catch {
    return {
      ok: false,
      error: "That text is not valid URL encoding. Check for incomplete % sequences.",
    };
  }
}
