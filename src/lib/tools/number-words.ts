export type NumberWordsResult =
  | { ok: true; words: string; value: number }
  | { ok: false; error: string };

const MIN = -999_999_999;
const MAX = 999_999_999;

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const SCALES: Record<string, number> = { hundred: 100, thousand: 1000, million: 1_000_000 };
const WORD_VALUES: Record<string, number> = {
  zero: 0,
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
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

function under1000(value: number): string {
  const hundreds = Math.floor(value / 100);
  const rest = value % 100;
  const parts: string[] = [];
  if (hundreds > 0) parts.push(`${ONES[hundreds]} hundred`);
  if (rest >= 20) {
    const ten = Math.floor(rest / 10);
    const one = rest % 10;
    parts.push(one > 0 ? `${TENS[ten]}-${ONES[one]}` : TENS[ten]);
  } else if (rest >= 10) {
    parts.push(TEENS[rest - 10]);
  } else if (rest > 0) {
    parts.push(ONES[rest]);
  }
  return parts.join(" ");
}

export function numberToWords(raw: string): NumberWordsResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { ok: false, error: "Enter a whole number." };
  if (/[.]/.test(trimmed)) return { ok: false, error: "Enter a whole number. Decimals are outside this converter." };
  if (!/^-?\d+$/.test(trimmed)) return { ok: false, error: "Enter a whole number using digits." };
  const negative = trimmed.startsWith("-");
  const digits = trimmed.replace("-", "").replace(/^0+(?=\d)/, "");
  if (digits.length > 9) return { ok: false, error: "This converter supports -999,999,999 through 999,999,999." };
  const value = Number(digits) * (negative ? -1 : 1);
  if (!Number.isSafeInteger(value) || value < MIN || value > MAX) {
    return { ok: false, error: "This converter supports -999,999,999 through 999,999,999." };
  }
  if (value === 0) return { ok: true, words: "zero", value: 0 };

  const absolute = Math.abs(value);
  const millions = Math.floor(absolute / 1_000_000);
  const thousands = Math.floor((absolute % 1_000_000) / 1000);
  const remainder = absolute % 1000;
  const parts: string[] = [];
  if (millions > 0) parts.push(`${under1000(millions)} million`);
  if (thousands > 0) parts.push(`${under1000(thousands)} thousand`);
  if (remainder > 0) parts.push(under1000(remainder));
  const words = `${negative ? "minus " : ""}${parts.join(" ")}`;
  return { ok: true, words, value };
}

export function wordsToNumber(raw: string): NumberWordsResult {
  const trimmed = raw.trim().toLowerCase().replace(/-/g, " ");
  if (trimmed === "") return { ok: false, error: "Enter number words." };
  const tokens = trimmed.split(/\s+/);
  let negative = false;
  let start = 0;
  if (tokens[0] === "minus") {
    negative = true;
    start = 1;
  }
  if (start >= tokens.length) return { ok: false, error: "Enter number words after minus." };

  let total = 0;
  let current = 0;
  for (let index = start; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token === "and") return { ok: false, error: "This converter does not use the word and." };
    if (token in WORD_VALUES) {
      current += WORD_VALUES[token];
      continue;
    }
    const scale = SCALES[token];
    if (scale === undefined) return { ok: false, error: `"${token}" is not a supported number word.` };
    if (scale === 100) {
      if (current === 0) current = 1;
      current *= 100;
      continue;
    }
    if (current === 0) current = 1;
    total += current * scale;
    current = 0;
  }
  total += current;
  const value = negative ? -total : total;
  if (value < MIN || value > MAX) return { ok: false, error: "That number is outside -999,999,999 through 999,999,999." };
  const words = numberToWords(String(value));
  if (!words.ok) return words;
  return { ok: true, words: words.words, value };
}
