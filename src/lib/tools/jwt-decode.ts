export type JwtDecodeResult =
  | { ok: true; header: string; payload: string; signaturePresent: boolean; signatureEmpty: boolean }
  | { ok: false; error: string };

function decodeBase64Url(segment: string, label: string): { ok: true; text: string } | { ok: false; error: string } {
  if (segment === "") return { ok: false, error: `The ${label} segment is empty.` };
  if (!/^[A-Za-z0-9_-]+$/.test(segment)) return { ok: false, error: `The ${label} segment is not valid base64url.` };
  const padded = segment.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (segment.length % 4)) % 4);
  try {
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return { ok: true, text: new TextDecoder("utf-8", { fatal: true }).decode(bytes) };
  } catch {
    return { ok: false, error: `The ${label} segment is not valid base64url.` };
  }
}

function parseJson(text: string, label: string): { ok: true; json: string } | { ok: false; error: string } {
  try {
    return { ok: true, json: JSON.stringify(JSON.parse(text), null, 2) };
  } catch {
    return { ok: false, error: `The ${label} segment is not JSON.` };
  }
}

export function decodeJwt(raw: string): JwtDecodeResult {
  const token = raw.trim();
  if (token === "") return { ok: false, error: "Enter a JWT." };
  const parts = token.split(".");
  if (parts.length < 2 || parts.length > 3) {
    return { ok: false, error: "A JWT has a header, a payload, and an optional signature, separated by dots." };
  }

  const headerText = decodeBase64Url(parts[0], "header");
  if (!headerText.ok) return headerText;
  const payloadText = decodeBase64Url(parts[1], "payload");
  if (!payloadText.ok) return payloadText;
  const header = parseJson(headerText.text, "header");
  if (!header.ok) return header;
  const payload = parseJson(payloadText.text, "payload");
  if (!payload.ok) return payload;

  const signaturePresent = parts.length === 3;
  return {
    ok: true,
    header: header.json,
    payload: payload.json,
    signaturePresent,
    signatureEmpty: signaturePresent && parts[2] === "",
  };
}
