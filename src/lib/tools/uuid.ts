export const UUID_MIN = 1;
export const UUID_MAX = 100;

const UUID_V4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type UuidResult =
  | { ok: true; values: string[] }
  | { ok: false; error: string };

export function isUuidV4(value: string): boolean {
  return UUID_V4.test(value);
}

export function generateUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  throw new Error("A cryptographically secure random source is not available in this browser.");
}

export function generateUuids(quantityRaw: string): UuidResult {
  const trimmed = quantityRaw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter how many UUIDs to generate." };
  }

  const quantity = Number(trimmed);
  if (!Number.isInteger(quantity)) {
    return { ok: false, error: "Enter a whole number of UUIDs." };
  }

  if (quantity < UUID_MIN || quantity > UUID_MAX) {
    return {
      ok: false,
      error: `Generate between ${UUID_MIN} and ${UUID_MAX} UUIDs at a time.`,
    };
  }

  try {
    const values = Array.from({ length: quantity }, () => generateUuid());
    return { ok: true, values };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Could not generate UUIDs.",
    };
  }
}
