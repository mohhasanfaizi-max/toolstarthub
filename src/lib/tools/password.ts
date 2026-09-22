export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 64;
export const PASSWORD_DEFAULT = 16;

export type PasswordOptions = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
};

export type PasswordResult =
  | {
      ok: true;
      password: string;
      charsetSize: number;
      bits: number;
      strengthLabel: "Short" | "Moderate" | "Strong";
    }
  | { ok: false; error: string };

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.?";
const AMBIGUOUS = /[O0Il1]/g;

export function parsePasswordLength(
  raw: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter a password length." };
  }
  const value = Number(trimmed);
  if (!Number.isInteger(value)) {
    return { ok: false, error: "Length must be a whole number." };
  }
  if (value < PASSWORD_MIN || value > PASSWORD_MAX) {
    return {
      ok: false,
      error: `Choose a length from ${PASSWORD_MIN} to ${PASSWORD_MAX}.`,
    };
  }
  return { ok: true, value };
}

export function generatePassword(options: PasswordOptions): PasswordResult {
  const pools: string[] = [];
  if (options.uppercase) {
    pools.push(filterAmbiguous(UPPER, options.excludeAmbiguous));
  }
  if (options.lowercase) {
    pools.push(filterAmbiguous(LOWER, options.excludeAmbiguous));
  }
  if (options.numbers) {
    pools.push(filterAmbiguous(NUMBERS, options.excludeAmbiguous));
  }
  if (options.symbols) {
    pools.push(SYMBOLS);
  }

  const charset = pools.join("");
  if (pools.length === 0 || charset.length === 0) {
    return { ok: false, error: "Select at least one character type." };
  }
  if (options.length < pools.length) {
    return {
      ok: false,
      error: "Length must be at least the number of selected character types.",
    };
  }

  const chars = Array.from({ length: options.length }, () => "");
  const used = new Set<number>();

  for (const pool of pools) {
    let slot = randomInt(options.length);
    while (used.has(slot)) {
      slot = randomInt(options.length);
    }
    used.add(slot);
    chars[slot] = pool[randomInt(pool.length)] ?? "";
  }

  for (let index = 0; index < options.length; index += 1) {
    if (!chars[index]) {
      chars[index] = charset[randomInt(charset.length)] ?? "";
    }
  }

  const password = chars.join("");
  const bits = options.length * Math.log2(charset.length);
  return {
    ok: true,
    password,
    charsetSize: charset.length,
    bits,
    strengthLabel: bits < 50 ? "Short" : bits < 80 ? "Moderate" : "Strong",
  };
}

function filterAmbiguous(source: string, exclude: boolean): string {
  return exclude ? source.replace(AMBIGUOUS, "") : source;
}

function randomInt(max: number): number {
  if (max <= 0) {
    throw new Error("Invalid random range");
  }
  const limit = 2 ** 32 - ((2 ** 32) % max);
  const buffer = new Uint32Array(1);
  do {
    crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);
  return buffer[0] % max;
}
