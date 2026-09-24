export const HASH_ALGORITHMS = ["SHA-256", "SHA-384", "SHA-512"] as const;

export type HashAlgorithm = (typeof HASH_ALGORITHMS)[number];

export type HashResult =
  | { ok: true; hex: string; algorithm: HashAlgorithm }
  | { ok: false; error: string };

export async function hashText(text: string, algorithm: HashAlgorithm): Promise<HashResult> {
  if (!HASH_ALGORITHMS.includes(algorithm)) {
    return { ok: false, error: "Choose SHA-256, SHA-384, or SHA-512." };
  }

  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    return { ok: false, error: "This browser cannot create a hash with Web Crypto." };
  }

  const bytes = new TextEncoder().encode(text);
  const digest = await subtle.digest(algorithm, bytes);
  const hex = [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return { ok: true, hex, algorithm };
}
