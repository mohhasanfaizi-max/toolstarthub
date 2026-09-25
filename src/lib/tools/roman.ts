const PAIRS: Array<[number, string]> = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export type RomanResult = { ok: true; value: number; roman: string } | { ok: false; error: string };

export function integerToRoman(raw: string): RomanResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { ok: false, error: "Enter a whole number from 1 through 3999." };
  if (!/^\d+$/.test(trimmed)) return { ok: false, error: "Enter a whole number from 1 through 3999." };
  const value = Number(trimmed);
  if (value < 1 || value > 3999) return { ok: false, error: "This converter supports 1 through 3999. Numerals above 3999 are not supported." };
  return { ok: true, value, roman: toRoman(value) };
}

export function romanToInteger(raw: string): RomanResult {
  const roman = raw.trim().toUpperCase();
  if (roman === "") return { ok: false, error: "Enter a Roman numeral." };
  if (!/^[IVXLCDM]+$/.test(roman)) return { ok: false, error: "Use only I, V, X, L, C, D, and M." };
  let index = 0;
  let value = 0;
  while (index < roman.length) {
    const pair = PAIRS.find(([, symbol]) => roman.startsWith(symbol, index));
    if (!pair) return { ok: false, error: `"${roman}" is not a valid Roman numeral.` };
    value += pair[0];
    index += pair[1].length;
  }
  if (value < 1 || value > 3999 || toRoman(value) !== roman) {
    return { ok: false, error: `"${roman}" is not a valid Roman numeral.` };
  }
  return { ok: true, value, roman };
}

function toRoman(value: number): string {
  let rest = value;
  let roman = "";
  for (const [amount, symbol] of PAIRS) {
    while (rest >= amount) {
      roman += symbol;
      rest -= amount;
    }
  }
  return roman;
}
