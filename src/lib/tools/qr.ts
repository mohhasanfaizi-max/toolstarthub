export const QR_MAX_LENGTH = 1200;

export type QrValidateResult =
  | { ok: true; text: string }
  | { ok: false; error: string };

export function validateQrText(raw: string): QrValidateResult {
  const text = raw.trim();
  if (text === "") {
    return { ok: false, error: "Enter text or a URL to encode." };
  }
  if (text.length > QR_MAX_LENGTH) {
    return {
      ok: false,
      error: `Keep QR content to ${QR_MAX_LENGTH} characters so the code stays readable.`,
    };
  }
  return { ok: true, text };
}

export function looksLikeUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
