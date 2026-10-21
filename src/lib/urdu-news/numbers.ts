// Numbers written as Urdu words (for example تین or بارہ) are not extracted here.
// The AI fact-check pass covers those.

const URDU_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

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

export function numberSet(text: string): Set<string> {
  return new Set(extractNumbers(text));
}
