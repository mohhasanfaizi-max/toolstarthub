const URDU_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** Whole Urdu words. نو also means "new", and a lone نو still counts as 9. */
const URDU_WORDS: Record<string, number> = {
  ایک: 1,
  دو: 2,
  تین: 3,
  چار: 4,
  پانچ: 5,
  چھ: 6,
  سات: 7,
  آٹھ: 8,
  نو: 9,
  دس: 10,
  گیارہ: 11,
  بارہ: 12,
  تیرہ: 13,
  چودہ: 14,
  پندرہ: 15,
  سولہ: 16,
  سترہ: 17,
  اٹھارہ: 18,
  انیس: 19,
  بیس: 20,
  پچاس: 50,
};

const ENGLISH_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
};

/** A following سو or ہزار multiplies a simple integer. A bare word is that amount. */
const MULTIPLIERS: Record<string, number> = {
  سو: 100,
  ہزار: 1000,
  لاکھ: 100000,
  کروڑ: 10000000,
  ارب: 1000000000,
};

const TOKEN = /[0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?|[A-Za-z]+|[\u0600-\u06FF]+/g;

/** Map Urdu digits ۰-۹ and Arabic-Indic digits ٠-٩ to 0-9. */
export function normalizeDigits(text: string): string {
  return text.replace(/[۰-۹٠-٩]/g, (char) => {
    const urdu = URDU_DIGITS.indexOf(char);
    if (urdu >= 0) return String(urdu);
    const arabic = ARABIC_DIGITS.indexOf(char);
    return arabic >= 0 ? String(arabic) : char;
  });
}

function prepare(text: string): string {
  return normalizeDigits(text)
    .replace(/\u066b/g, ".")
    .replace(/[\u060c\u066c]/g, ",");
}

/** Digit tokens only. Thousands separators are removed. Decimals stay. */
export function extractNumbers(text: string): string[] {
  const matches = prepare(text).match(/\d+(?:,\d{3})*(?:\.\d+)?/g) ?? [];
  return matches.map((token) => token.replace(/,/g, ""));
}

function digitValue(token: string): number | null {
  if (!/^\d+(?:,\d{3})*(?:\.\d+)?$/.test(token)) return null;
  const value = Number(token.replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

function wordValue(token: string): number | null {
  return URDU_WORDS[token] ?? ENGLISH_WORDS[token.toLowerCase()] ?? null;
}

function formatValue(value: number): string {
  return Number.isInteger(value) ? String(value) : String(value);
}

/**
 * Digits, English words from one to twenty, and Urdu number words.
 * A simple pair such as دو ہزار is also the product, 2000.
 * That product is not required to reappear in Full; the coefficient word is.
 */
export function collectNumberValues(text: string): { value: string; required: boolean }[] {
  const found: { value: string; required: boolean }[] = extractNumbers(text).map((value) => ({ value, required: true }));
  const tokens = prepare(text).match(TOKEN) ?? [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const multiplier = MULTIPLIERS[tokens[index + 1] ?? ""];
    const amount = digitValue(token) ?? wordValue(token);
    if (amount != null && multiplier != null && Number.isInteger(amount)) {
      const product = amount * multiplier;
      if (Number.isSafeInteger(product)) found.push({ value: formatValue(product), required: false });
      index += 1;
      continue;
    }
    if (URDU_WORDS[token] != null || ENGLISH_WORDS[token.toLowerCase()] != null) {
      found.push({ value: formatValue(wordValue(token) as number), required: true });
      continue;
    }
    if (MULTIPLIERS[token] != null) found.push({ value: formatValue(MULTIPLIERS[token]), required: true });
  }
  return found;
}

export function numberValues(text: string): string[] {
  return collectNumberValues(text).map((item) => item.value);
}

/** Numbers the Urdu states directly. A دو ہزار product is not required in Full. */
export function requiredNumbers(text: string): string[] {
  return collectNumberValues(text).filter((item) => item.required).map((item) => item.value);
}

export function numberSet(text: string): Set<string> {
  return new Set(numberValues(text));
}
