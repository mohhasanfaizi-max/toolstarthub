export type Base64Result =
  | { ok: true; output: string }
  | { ok: false; error: string };

const MAX_TEXT_CHARS = 750_000;

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

export function encodeBase64(text: string): Base64Result {
  if (text.length > MAX_TEXT_CHARS) {
    return {
      ok: false,
      error: "This text is too large to encode in the browser.",
    };
  }

  const bytes = new TextEncoder().encode(text);
  return { ok: true, output: bytesToBase64(bytes) };
}

export function decodeBase64(raw: string): Base64Result {
  const cleaned = raw.replace(/\s+/g, "");

  if (cleaned === "") {
    return { ok: false, error: "Enter Base64 text to decode." };
  }

  if (cleaned.length > MAX_TEXT_CHARS) {
    return {
      ok: false,
      error: "This Base64 value is too large to decode in the browser.",
    };
  }

  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(cleaned) || cleaned.length % 4 !== 0) {
    return { ok: false, error: "Enter valid Base64 text." };
  }

  try {
    const bytes = base64ToBytes(cleaned);
    return { ok: true, output: new TextDecoder().decode(bytes) };
  } catch {
    return { ok: false, error: "Enter valid Base64 text." };
  }
}
