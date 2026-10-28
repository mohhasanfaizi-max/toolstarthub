/**
 * Significant-figure arithmetic on the written number, not on a JavaScript float.
 *
 * Rounding uses half-up: the first dropped digit of 5, 6, 7, 8, or 9 increases
 * the last kept digit by 1, away from zero. A first dropped digit of 0–4 leaves
 * the last kept digit unchanged. Further digits are not consulted.
 *
 * Trailing zeros in a whole number (150, 80, 1200) do not get a single count.
 * The same number written with a decimal point, or in scientific notation whose
 * coefficient shows those zeros, is not ambiguous.
 */

export const MAX_SIG_FIGS = 50;
export const MAX_COEFFICIENT_DIGITS = 100;
export const MAX_ABS_EXPONENT = 9999;
export const MAX_OPERANDS = 6;

const ZERO = BigInt(0);
const ONE = BigInt(1);
const TEN = BigInt(10);

const ROUNDING_NOTE =
  "Half up: if the first dropped digit is 5 or more, the last kept digit increases by 1, away from zero.";

export type SigFigOperation =
  | "count"
  | "round"
  | "scientific"
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power";

export type ScientificForm = {
  sigFigs: number;
  coefficient: string;
  exponent: number;
  plain: string;
  readable: string;
};

export type ExactDecimal = {
  sign: 1 | -1;
  /** Absolute integer digits with no leading zeros, or "0". */
  digits: string;
  /** value = sign * BigInt(digits) * 10^exp */
  exp: number;
};

export type ParsedNumber = {
  raw: string;
  sign: 1 | -1;
  /** Coefficient as written, without the sign. Trailing zeros are preserved. */
  coefficient: string;
  exponent: number;
  exact: ExactDecimal;
  zero: boolean;
  ambiguous: boolean;
  /** Null when trailing zeros in a whole number make the count ambiguous. */
  sigFigs: number | null;
  sigFigMin: number;
  sigFigMax: number;
  /** Decimal places of the last significant digit. Negative means left of the decimal. */
  decimalPlaces: number | null;
  decimalPlaceMin: number;
  decimalPlaceMax: number;
  forms: ScientificForm[];
};

export type SigFigSuccess = {
  ok: true;
  operation: SigFigOperation;
  headline: string;
  plain: string;
  sigFigLabel: string;
  steps: string[];
  ambiguous: boolean;
  /** Present for count. Null when the written number is ambiguous. */
  count?: number | null;
  min?: number;
  max?: number;
  forms?: ScientificForm[];
  /** Parseable rounded value. Absent when the result has no single precision. */
  carried?: string;
  /** True when the value was not rounded to a measurement. */
  exactResult?: boolean;
};

export type SigFigFailure = { ok: false; error: string };

export type SigFigResult = SigFigSuccess | SigFigFailure;

type DigitPower = { digit: string; power: number };

const SUPERSCRIPT: Record<string, string> = {
  "-": "⁻",
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
};

const FROM_SUPERSCRIPT: Record<string, string> = {
  "⁻": "-",
  "⁺": "+",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
};

function fail(error: string): SigFigFailure {
  return { ok: false, error };
}

function superscript(exp: number): string {
  return [...String(exp)].map((char) => SUPERSCRIPT[char] ?? char).join("");
}

function readableScientific(sign: string, coefficient: string, exponent: number): string {
  if (coefficient === "0") {
    return "0";
  }
  return `${sign}${coefficient} × 10${superscript(exponent)}`;
}

function plainScientific(sign: string, coefficient: string, exponent: number): string {
  if (coefficient === "0") {
    return "0";
  }
  return `${sign}${coefficient}e${exponent}`;
}

function coefficientFromDigits(digits: string): string {
  if (digits.length <= 1) {
    return digits || "0";
  }
  return `${digits[0]}.${digits.slice(1)}`;
}

function scientificForm(sign: 1 | -1, digits: string, exponent: number): ScientificForm {
  const coefficient = coefficientFromDigits(digits);
  const signText = sign < 0 ? "-" : "";
  return {
    sigFigs: digits.length,
    coefficient,
    exponent,
    plain: plainScientific(signText, coefficient, exponent),
    readable: readableScientific(signText, coefficient, exponent),
  };
}

function normalizeInput(raw: string): string {
  const trimmed = raw.trim().replace(/\s+/g, "");
  return [...trimmed]
    .map((char) => FROM_SUPERSCRIPT[char] ?? (char === "−" ? "-" : char))
    .join("")
    .replace(/[xX×*]10\^/g, "e");
}

export function parseSigFigNumber(raw: string): { ok: true; value: ParsedNumber } | SigFigFailure {
  const original = raw.trim();
  if (original === "") {
    return fail("Enter a number.");
  }
  if (original.includes(",")) {
    return fail("Enter the number without commas.");
  }

  const normalized = normalizeInput(original);
  const match = /^([+-])?(\d*\.?\d+)(?:e([+-]?\d+))?$/i.exec(normalized);
  if (!match || match[2] === "." || (match[2].match(/\./g) ?? []).length > 1) {
    return fail("Enter a valid number, such as 1.00, 150, or 1.500e3.");
  }

  const sign: 1 | -1 = match[1] === "-" ? -1 : 1;
  let coefficient = match[2];
  if (coefficient.startsWith(".")) {
    coefficient = `0${coefficient}`;
  }
  if (coefficient.endsWith(".")) {
    coefficient = coefficient.slice(0, -1);
  }
  const [intPart = "0", fracPart] = coefficient.split(".");
  const intNormalized = intPart.replace(/^0+(?=\d)/, "") || "0";
  coefficient = fracPart === undefined ? intNormalized : `${intNormalized}.${fracPart}`;

  const digitCount = coefficient.replace(".", "").length;
  if (digitCount > MAX_COEFFICIENT_DIGITS) {
    return fail(`Enter a number with ${MAX_COEFFICIENT_DIGITS} digits or fewer.`);
  }

  let exponent = 0;
  if (match[3] !== undefined) {
    if (!/^[+-]?\d+$/.test(match[3])) {
      return fail("Enter a valid number, such as 1.00, 150, or 1.500e3.");
    }
    exponent = Number(match[3]);
    if (!Number.isSafeInteger(exponent) || Math.abs(exponent) > MAX_ABS_EXPONENT) {
      return fail(`Enter an exponent from -${MAX_ABS_EXPONENT} to ${MAX_ABS_EXPONENT}.`);
    }
  }

  const analysis = analyzeCoefficient(coefficient, exponent, sign, original);
  return { ok: true, value: analysis };
}

function analyzeCoefficient(
  coefficient: string,
  exponent: number,
  sign: 1 | -1,
  raw: string,
): ParsedNumber {
  const hasDecimal = coefficient.includes(".");
  const digitsOnly = coefficient.replace(".", "");
  const withoutLeading = digitsOnly.replace(/^0+/, "");
  const zero = withoutLeading.length === 0;
  // A decimal point makes written trailing zeros significant. A whole number
  // that ends in zero does not say whether those zeros were measured.
  const stripped = withoutLeading.replace(/0+$/, "");
  const sigFigMax = zero ? 1 : withoutLeading.length;
  const sigFigMin = zero ? 1 : hasDecimal ? withoutLeading.length : stripped.length || 1;
  const ambiguous = !zero && sigFigMin !== sigFigMax;
  const fractionLength = hasDecimal ? (coefficient.split(".")[1]?.length ?? 0) : 0;
  const basePlaces = fractionLength - exponent;
  const span = ambiguous ? sigFigMax - sigFigMin : 0;
  const decimalPlaceMax = basePlaces;
  const decimalPlaceMin = basePlaces - span;

  const powers = digitPowers(coefficient, exponent);
  const forms: ScientificForm[] = [];
  if (zero) {
    forms.push({
      sigFigs: 1,
      coefficient: "0",
      exponent: 0,
      plain: "0",
      readable: "0",
    });
  } else {
    for (let count = sigFigMin; count <= sigFigMax; count += 1) {
      forms.push(formForCount(powers, sign, count));
    }
  }

  return {
    raw,
    sign,
    coefficient,
    exponent,
    exact: exactFromCoefficient(coefficient, exponent, sign),
    zero,
    ambiguous,
    sigFigs: ambiguous ? null : sigFigMax,
    sigFigMin,
    sigFigMax,
    decimalPlaces: ambiguous ? null : decimalPlaceMax,
    decimalPlaceMin,
    decimalPlaceMax,
    forms,
  };
}

function digitPowers(coefficient: string, exponent: number): DigitPower[] {
  const [intPart = "0", fracPart = ""] = coefficient.split(".");
  const powers: DigitPower[] = [];
  for (let index = 0; index < intPart.length; index += 1) {
    powers.push({
      digit: intPart[index] ?? "0",
      power: exponent + (intPart.length - 1 - index),
    });
  }
  for (let index = 0; index < fracPart.length; index += 1) {
    powers.push({ digit: fracPart[index] ?? "0", power: exponent - (index + 1) });
  }
  return powers;
}

function formForCount(powers: DigitPower[], sign: 1 | -1, sigFigs: number): ScientificForm {
  const start = powers.findIndex((item) => item.digit !== "0");
  const slice = powers.slice(start, start + sigFigs);
  const digits = slice.map((item) => item.digit).join("");
  const exponent = slice[0]?.power ?? 0;
  return scientificForm(sign, digits, exponent);
}

function exactFromCoefficient(coefficient: string, exponent: number, sign: 1 | -1): ExactDecimal {
  const [intPart = "0", fracPart = ""] = coefficient.split(".");
  const digits = `${intPart}${fracPart}`.replace(/^0+/, "") || "0";
  if (digits === "0") {
    return { sign: 1, digits: "0", exp: 0 };
  }
  return normalizeDecimal({ sign, digits, exp: exponent - fracPart.length });
}

export function normalizeDecimal(value: ExactDecimal): ExactDecimal {
  if (value.digits === "0") {
    return { sign: 1, digits: "0", exp: 0 };
  }
  const trailing = value.digits.match(/0+$/);
  if (!trailing) {
    return value;
  }
  return {
    sign: value.sign,
    digits: value.digits.slice(0, -trailing[0].length),
    exp: value.exp + trailing[0].length,
  };
}

function fromSignedBigInt(value: bigint, exp: number): ExactDecimal {
  if (value === ZERO) {
    return { sign: 1, digits: "0", exp: 0 };
  }
  const sign: 1 | -1 = value < ZERO ? -1 : 1;
  return normalizeDecimal({ sign, digits: (sign < 0 ? -value : value).toString(), exp });
}

function signedBigInt(value: ExactDecimal): bigint {
  const magnitude = BigInt(value.digits);
  return value.sign < 0 ? -magnitude : magnitude;
}

export function addExact(left: ExactDecimal, right: ExactDecimal): ExactDecimal {
  const exp = Math.min(left.exp, right.exp);
  const leftInt = signedBigInt(left) * TEN ** BigInt(left.exp - exp);
  const rightInt = signedBigInt(right) * TEN ** BigInt(right.exp - exp);
  return fromSignedBigInt(leftInt + rightInt, exp);
}

export function multiplyExact(left: ExactDecimal, right: ExactDecimal): ExactDecimal {
  const sign: 1 | -1 = left.sign * right.sign < 0 ? -1 : 1;
  if (left.digits === "0" || right.digits === "0") {
    return { sign: 1, digits: "0", exp: 0 };
  }
  return normalizeDecimal({
    sign,
    digits: (BigInt(left.digits) * BigInt(right.digits)).toString(),
    exp: left.exp + right.exp,
  });
}

function divideExact(left: ExactDecimal, right: ExactDecimal, guardDigits: number): ExactDecimal {
  if (right.digits === "0") {
    throw new Error("division by zero");
  }
  if (left.digits === "0") {
    return { sign: 1, digits: "0", exp: 0 };
  }
  const scale = Math.max(0, guardDigits + right.digits.length - left.digits.length + 2);
  const quotient = (BigInt(left.digits) * TEN ** BigInt(scale)) / BigInt(right.digits);
  const sign: 1 | -1 = left.sign * right.sign < 0 ? -1 : 1;
  return fromSignedBigInt(sign < 0 ? -quotient : quotient, left.exp - right.exp - scale);
}

type RoundedSigFigs = {
  sign: 1 | -1;
  coefficient: string;
  exponent: number;
  display: string;
  plain: string;
};

export function roundDecimalToSigFigs(value: ExactDecimal, sigFigs: number): RoundedSigFigs {
  if (value.digits === "0" || sigFigs < 1) {
    return { sign: 1, coefficient: "0", exponent: 0, display: "0", plain: "0" };
  }

  let exponent = value.exp + value.digits.length - 1;
  let digits = value.digits;
  if (digits.length < sigFigs) {
    digits += "0".repeat(sigFigs - digits.length);
  }
  let kept = digits.slice(0, sigFigs);
  const next = digits.length > sigFigs ? Number(digits[sigFigs]) : 0;
  if (next >= 5) {
    const incremented = (BigInt(kept) + ONE).toString();
    if (incremented.length > sigFigs) {
      kept = `1${"0".repeat(sigFigs - 1)}`;
      exponent += 1;
    } else {
      kept = incremented.padStart(sigFigs, "0");
    }
  }

  const coefficient = coefficientFromDigits(kept);
  const formatted = formatSigFigNumber(value.sign, coefficient, exponent, sigFigs);
  return { sign: value.sign, coefficient, exponent, display: formatted.display, plain: formatted.plain };
}

function formatSigFigNumber(
  sign: 1 | -1,
  coefficient: string,
  exponent: number,
  sigFigs: number,
): { display: string; plain: string } {
  const signText = sign < 0 && coefficient !== "0" ? "-" : "";
  const lastDigit = coefficient.replace(".", "").slice(-1);
  const scientific =
    coefficient !== "0" &&
    (exponent >= 6 ||
      exponent < -4 ||
      (exponent >= 0 && exponent + 1 > sigFigs) ||
      (exponent >= 0 && exponent + 1 === sigFigs && lastDigit === "0"));

  if (scientific) {
    return {
      display: readableScientific(signText, coefficient, exponent),
      plain: plainScientific(signText, coefficient, exponent),
    };
  }

  const decimal = decimalFromScientific(signText, coefficient.replace(".", ""), exponent);
  return { display: decimal, plain: decimal };
}

function decimalFromScientific(signText: string, digits: string, exponent: number): string {
  if (exponent >= 0) {
    const intPart = digits.slice(0, exponent + 1);
    const frac = digits.slice(exponent + 1);
    return frac.length > 0 ? `${signText}${intPart}.${frac}` : `${signText}${intPart}`;
  }
  const zeros = -exponent - 1;
  return `${signText}0.${"0".repeat(zeros)}${digits}`;
}

function roundDecimalToPlaces(value: ExactDecimal, places: number): ExactDecimal {
  if (value.digits === "0") {
    return { sign: 1, digits: "0", exp: 0 };
  }
  const shift = value.exp + places;
  if (shift >= 0) {
    return value;
  }
  const drop = -shift;
  if (drop > value.digits.length) {
    return { sign: 1, digits: "0", exp: 0 };
  }
  if (drop === value.digits.length) {
    const next = Number(value.digits[0]);
    if (next >= 5) {
      return { sign: value.sign, digits: "1", exp: -places };
    }
    return { sign: 1, digits: "0", exp: 0 };
  }
  const kept = value.digits.slice(0, value.digits.length - drop);
  const next = Number(value.digits[value.digits.length - drop] ?? "0");
  if (next < 5) {
    return normalizeDecimal({ sign: value.sign, digits: kept, exp: -places });
  }
  const incremented = (BigInt(kept) + ONE).toString();
  return normalizeDecimal({ sign: value.sign, digits: incremented, exp: -places });
}

function formatDecimalPlaces(value: ExactDecimal, places: number): { display: string; plain: string } {
  const rounded = roundDecimalToPlaces(value, places);
  if (places < 0 || (places === 0 && /0$/.test(fixedInteger(rounded, 0)))) {
    const exponent = rounded.digits === "0" ? 0 : rounded.exp + rounded.digits.length - 1;
    const sigFigs = rounded.digits === "0" ? 1 : exponent + places + 1;
    if (sigFigs >= 1) {
      return roundDecimalToSigFigs(rounded, sigFigs);
    }
  }
  if (places <= 0) {
    const text = fixedInteger(rounded, 0);
    const signed = `${rounded.sign < 0 && text !== "0" ? "-" : ""}${text}`;
    return { display: signed, plain: signed };
  }
  const text = formatFixed(rounded, places);
  return { display: text, plain: text };
}

function fixedInteger(value: ExactDecimal, places: number): string {
  if (value.digits === "0") {
    return "0";
  }
  const shift = value.exp + places;
  if (shift >= 0) {
    return value.digits + "0".repeat(shift);
  }
  const cut = value.digits.slice(0, value.digits.length + shift);
  return cut === "" ? "0" : cut;
}

function formatFixed(value: ExactDecimal, places: number): string {
  const signText = value.sign < 0 && value.digits !== "0" ? "-" : "";
  const intStr = fixedInteger(value, places);
  if (places <= 0) {
    return `${signText}${intStr}`;
  }
  const padded = intStr.padStart(places + 1, "0");
  return `${signText}${padded.slice(0, -places)}.${padded.slice(-places)}`;
}

function parsePrecision(raw: string): { ok: true; value: number } | SigFigFailure {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return fail("Enter how many significant figures to keep.");
  }
  if (!/^[1-9]\d*$/.test(trimmed)) {
    return fail(`Enter a whole number of significant figures from 1 to ${MAX_SIG_FIGS}.`);
  }
  const value = Number(trimmed);
  if (!Number.isSafeInteger(value) || value < 1 || value > MAX_SIG_FIGS) {
    return fail(`Enter a whole number of significant figures from 1 to ${MAX_SIG_FIGS}.`);
  }
  return { ok: true, value };
}

function placeName(places: number): string {
  if (places === 0) return "the ones place";
  if (places === 1) return "the tenths place";
  if (places === 2) return "the hundredths place";
  if (places === 3) return "the thousandths place";
  if (places > 0) return `${places} digits after the decimal`;
  if (places === -1) return "the tens place";
  if (places === -2) return "the hundreds place";
  if (places === -3) return "the thousands place";
  return `the 10^${-places} place`;
}

function numberLabel(parsed: ParsedNumber): string {
  return parsed.raw.trim();
}

function countSteps(parsed: ParsedNumber): string[] {
  const steps = [
    "The plus or minus sign is not a digit, and the decimal point is not a digit.",
  ];
  if (parsed.exponent !== 0 || /e/i.test(parsed.raw)) {
    steps.push(
      `The exponent does not change the significant figures in the coefficient ${parsed.coefficient}.`,
    );
  }
  if (parsed.zero) {
    steps.push(
      `${numberLabel(parsed)} has no nonzero digit. A written zero is counted as 1 significant figure.`,
    );
    if (parsed.decimalPlaceMax > 0) {
      steps.push(
        `The decimal places still record precision to ${placeName(parsed.decimalPlaceMax)} when you add or subtract.`,
      );
    }
    return steps;
  }
  if (parsed.ambiguous) {
    steps.push(
      `${numberLabel(parsed)} ends in a trailing zero and has no decimal point. That zero may be significant, or it may only hold a place.`,
    );
    steps.push(
      `The count can be any whole number from ${parsed.sigFigMin} to ${parsed.sigFigMax}. A single count would invent precision the written number does not show.`,
    );
    for (const form of parsed.forms) {
      steps.push(
        `${form.sigFigs} significant figures: ${form.readable} (${form.plain}).`,
      );
    }
    return steps;
  }

  const digits = parsed.coefficient.replace(".", "").replace(/^0+/, "");
  steps.push(`The significant digits are ${digits.split("").join(", ")}.`);
  if (parsed.coefficient.replace(".", "").startsWith("0")) {
    steps.push("Leading zeros before the first nonzero digit are not significant.");
  }
  if (parsed.coefficient.includes(".") && /0$/.test(digits)) {
    steps.push("Zeros that follow a nonzero digit and a decimal point are significant.");
  } else if (/0/.test(digits.slice(1, -1)) || (digits.length > 2 && digits.includes("0"))) {
    steps.push("Zeros between nonzero digits are significant.");
  }
  steps.push(`${numberLabel(parsed)} has ${parsed.sigFigs} significant ${parsed.sigFigs === 1 ? "figure" : "figures"}.`);
  const form = parsed.forms[0];
  if (form && form.plain !== "0") {
    steps.push(`Scientific notation that keeps those figures is ${form.readable} (${form.plain}).`);
  }
  return steps;
}

export function countSignificantFigures(raw: string): SigFigResult {
  const parsed = parseSigFigNumber(raw);
  if (!parsed.ok) {
    return parsed;
  }
  const value = parsed.value;
  const headline = value.ambiguous
    ? `${value.sigFigMin} or ${value.sigFigMax === value.sigFigMin + 1 ? value.sigFigMax : `${value.sigFigMin}–${value.sigFigMax}`} significant figures`
    : `${value.sigFigs} significant ${value.sigFigs === 1 ? "figure" : "figures"}`;
  const rangeLabel =
    value.sigFigMin === value.sigFigMax ? String(value.sigFigMin) : `${value.sigFigMin}–${value.sigFigMax}`;
  const lines = value.forms.map((form) => `${form.sigFigs}: ${form.readable} (${form.plain})`);
  const plain = value.ambiguous
    ? `${numberLabel(value)}\nSignificant figures cannot be determined.\n${lines.join("\n")}`
    : `${numberLabel(value)}\n${value.sigFigs} significant ${value.sigFigs === 1 ? "figure" : "figures"}`;

  return {
    ok: true,
    operation: "count",
    headline: value.ambiguous ? "Significant figures cannot be determined" : headline,
    plain,
    sigFigLabel: value.ambiguous ? rangeLabel : String(value.sigFigs),
    steps: countSteps(value),
    ambiguous: value.ambiguous,
    count: value.sigFigs,
    min: value.sigFigMin,
    max: value.sigFigMax,
    forms: value.forms,
  };
}

export function roundToSignificantFigures(raw: string, precisionRaw: string): SigFigResult {
  const parsed = parseSigFigNumber(raw);
  if (!parsed.ok) {
    return parsed;
  }
  const precision = parsePrecision(precisionRaw);
  if (!precision.ok) {
    return precision;
  }
  const rounded = roundDecimalToSigFigs(parsed.value.exact, precision.value);
  const steps = [
    `Round ${numberLabel(parsed.value)} to ${precision.value} significant ${precision.value === 1 ? "figure" : "figures"}.`,
    ROUNDING_NOTE,
  ];
  if (parsed.value.ambiguous) {
    steps.push(
      `${numberLabel(parsed.value)} does not say which trailing zeros are significant. Rounding uses the value as written and then shows exactly ${precision.value} significant figures.`,
    );
  } else if (parsed.value.sigFigs !== null && precision.value > parsed.value.sigFigs) {
    steps.push(
      `${numberLabel(parsed.value)} only shows ${parsed.value.sigFigs} significant ${parsed.value.sigFigs === 1 ? "figure" : "figures"}. Extra zeros in the result claim precision that was not written.`,
    );
  }
  steps.push(`The result is ${rounded.display}.`);
  if (rounded.plain !== rounded.display) {
    steps.push(`The copyable form is ${rounded.plain}.`);
  }
  const plain = rounded.plain === rounded.display ? rounded.display : `${rounded.display}\n${rounded.plain}`;
  return {
    ok: true,
    operation: "round",
    headline: rounded.display,
    plain,
    sigFigLabel: String(precision.value),
    steps,
    ambiguous: false,
    count: precision.value,
    forms: [
      {
        sigFigs: precision.value,
        coefficient: rounded.coefficient,
        exponent: rounded.exponent,
        plain: rounded.plain,
        readable: rounded.display,
      },
    ],
  };
}

export function convertToScientificNotation(raw: string): SigFigResult {
  const parsed = parseSigFigNumber(raw);
  if (!parsed.ok) {
    return parsed;
  }
  const value = parsed.value;
  if (value.ambiguous) {
    const lines = value.forms.map((form) => `${form.sigFigs} significant figures: ${form.readable} (${form.plain})`);
    return {
      ok: true,
      operation: "scientific",
      headline: "Scientific notation depends on the count",
      plain: `${numberLabel(value)}\n${lines.join("\n")}`,
      sigFigLabel: `${value.sigFigMin}–${value.sigFigMax}`,
      steps: countSteps(value),
      ambiguous: true,
      count: null,
      min: value.sigFigMin,
      max: value.sigFigMax,
      forms: value.forms,
    };
  }
  const form = value.forms[0];
  if (!form) {
    return fail("Enter a valid number, such as 1.00, 150, or 1.500e3.");
  }
  return {
    ok: true,
    operation: "scientific",
    headline: form.readable,
    plain: form.plain,
    sigFigLabel: String(form.sigFigs),
    steps: [
      ...countSteps(value),
      form.plain === "0"
        ? "Zero is written as 0. The exponent does not create extra significant figures."
        : `Normalized scientific notation is ${form.readable}, copied as ${form.plain}.`,
    ],
    ambiguous: false,
    count: form.sigFigs,
    forms: [form],
  };
}

export type ArithmeticInput = {
  operation: "add" | "subtract" | "multiply" | "divide";
  values: string[];
  exact?: boolean[];
};

function parseOperands(input: ArithmeticInput): { ok: true; values: ParsedNumber[]; exact: boolean[] } | SigFigFailure {
  const filled = input.values.map((value) => value.trim());
  if (filled.length < 2) {
    return fail("Enter at least two numbers.");
  }
  if (filled.length > MAX_OPERANDS) {
    return fail(`Enter up to ${MAX_OPERANDS} numbers.`);
  }
  if (filled.some((value) => value === "")) {
    return fail("Enter a number in each box, or remove the empty one.");
  }
  const values: ParsedNumber[] = [];
  for (const value of filled) {
    const parsed = parseSigFigNumber(value);
    if (!parsed.ok) {
      return parsed;
    }
    values.push(parsed.value);
  }
  const exact = values.map((_, index) => input.exact?.[index] === true);
  return { ok: true, values, exact };
}

function measuredIndexes(exact: boolean[]): number[] {
  return exact.map((isExact, index) => (isExact ? -1 : index)).filter((index) => index >= 0);
}

export function calculateSigFigArithmetic(input: ArithmeticInput): SigFigResult {
  const parsed = parseOperands(input);
  if (!parsed.ok) {
    return parsed;
  }
  const { values, exact } = parsed;
  if (input.operation === "divide" && values.slice(1).some((value) => value.zero)) {
    return fail("Cannot divide by zero.");
  }

  const measured = measuredIndexes(exact);
  const allExact = measured.length === 0;
  const steps: string[] = [];
  values.forEach((value, index) => {
    if (exact[index]) {
      steps.push(`${numberLabel(value)} is marked exact, so it does not limit the result.`);
      return;
    }
    if (value.ambiguous) {
      steps.push(
        `${numberLabel(value)} is ambiguous: ${value.sigFigMin}–${value.sigFigMax} significant figures, and the last precise place could be ${placeName(value.decimalPlaceMin)} through ${placeName(value.decimalPlaceMax)}.`,
      );
    } else if (input.operation === "add" || input.operation === "subtract") {
      steps.push(`${numberLabel(value)} is precise to ${placeName(value.decimalPlaceMax)}.`);
    } else {
      steps.push(
        `${numberLabel(value)} has ${value.sigFigs} significant ${value.sigFigs === 1 ? "figure" : "figures"}.`,
      );
    }
  });

  if (input.operation === "add" || input.operation === "subtract") {
    return finishAddition(input.operation, values, exact, allExact, measured, steps);
  }
  return finishProduct(input.operation, values, measured, steps);
}

function finishAddition(
  operation: "add" | "subtract",
  values: ParsedNumber[],
  exact: boolean[],
  allExact: boolean,
  measured: number[],
  steps: string[],
): SigFigResult {
  let total = values[0]?.exact ?? { sign: 1 as const, digits: "0", exp: 0 };
  for (let index = 1; index < values.length; index += 1) {
    const next = values[index]?.exact ?? { sign: 1 as const, digits: "0", exp: 0 };
    total = operation === "add" ? addExact(total, next) : addExact(total, { ...next, sign: next.sign < 0 ? 1 : -1 });
  }
  const exactText = formatExact(total);
  steps.push(`The exact ${operation === "add" ? "sum" : "difference"} is ${exactText}.`);
  steps.push("Addition and subtraction follow the least precise decimal place. They do not use the fewest significant figures.");

  if (allExact) {
    steps.push("Every number is marked exact, so the result is not rounded to a decimal place.");
    return {
      ok: true,
      operation,
      headline: exactText,
      plain: exactText,
      sigFigLabel: "Exact",
      steps,
      ambiguous: false,
      carried: exactText,
      exactResult: true,
    };
  }

  const coarsest = Math.min(...measured.map((index) => values[index]?.decimalPlaceMin ?? 0));
  const finest = Math.min(...measured.map((index) => values[index]?.decimalPlaceMax ?? 0));
  if (coarsest === finest) {
    const shown = formatDecimalPlaces(total, coarsest);
    steps.push(`The least precise place is ${placeName(coarsest)}.`);
    steps.push(ROUNDING_NOTE);
    steps.push(`The rounded result is ${shown.display}.`);
    const plain = shown.plain === shown.display ? shown.display : `${shown.display}\n${shown.plain}`;
    return {
      ok: true,
      operation,
      headline: shown.display,
      plain,
      sigFigLabel: placeName(coarsest),
      steps,
      ambiguous: false,
      carried: shown.plain,
    };
  }

  const options: string[] = [];
  for (let places = coarsest; places <= finest; places += 1) {
    const shown = formatDecimalPlaces(total, places);
    const line = `${placeName(places)}: ${shown.display}${shown.plain === shown.display ? "" : ` (${shown.plain})`}`;
    options.push(line);
    steps.push(`If the limiting place is ${placeName(places)}, the rounded result is ${shown.display}.`);
  }
  steps.push("The written numbers do not say which of those places is the real limit, so one rounded answer would invent precision.");
  return {
    ok: true,
    operation,
    headline: "Precision cannot be determined",
    plain: `${exactText}\n${options.join("\n")}`,
    sigFigLabel: "Not determined",
    steps,
    ambiguous: true,
  };
}

function presentMeasuredSigFigs(
  operation: SigFigOperation,
  total: ExactDecimal,
  values: ParsedNumber[],
  measured: number[],
  steps: string[],
  mode: "product" | "power" = "product",
): SigFigResult {
  const allExact = measured.length === 0;

  if (total.digits === "0") {
    steps.push("The result is 0. A zero result does not gain extra significant figures.");
    return {
      ok: true,
      operation,
      headline: "0",
      plain: "0",
      sigFigLabel: "0",
      steps,
      ambiguous: false,
      count: 0,
      carried: "0",
    };
  }

  if (allExact) {
    const shown = roundDecimalToSigFigs(total, Math.min(15, total.digits.length));
    steps.push("Every number is marked exact, so significant-figure limits are not applied.");
    steps.push(`A 15-digit reading of the exact value is ${shown.display}.`);
    return {
      ok: true,
      operation,
      headline: shown.display,
      plain: shown.plain === shown.display ? shown.display : `${shown.display}\n${shown.plain}`,
      sigFigLabel: "Exact",
      steps,
      ambiguous: false,
      carried: shown.plain,
      exactResult: true,
    };
  }

  const minFigs = Math.min(...measured.map((index) => values[index]?.sigFigMin ?? 1));
  const maxFigs = Math.min(...measured.map((index) => values[index]?.sigFigMax ?? 1));
  steps.push(ROUNDING_NOTE);
  if (minFigs === maxFigs) {
    const shown = roundDecimalToSigFigs(total, minFigs);
    steps.push(
      mode === "power"
        ? `The base has ${minFigs} significant ${minFigs === 1 ? "figure" : "figures"}.`
        : `The fewest significant figures is ${minFigs}.`,
    );
    steps.push(`The rounded result is ${shown.display}.`);
    return {
      ok: true,
      operation,
      headline: shown.display,
      plain: shown.plain === shown.display ? shown.display : `${shown.display}\n${shown.plain}`,
      sigFigLabel: String(minFigs),
      steps,
      ambiguous: false,
      count: minFigs,
      carried: shown.plain,
    };
  }

  const options: string[] = [];
  for (let count = minFigs; count <= maxFigs; count += 1) {
    const shown = roundDecimalToSigFigs(total, count);
    options.push(`${count}: ${shown.display}${shown.plain === shown.display ? "" : ` (${shown.plain})`}`);
    steps.push(
      mode === "power"
        ? `If the base has ${count} significant ${count === 1 ? "figure" : "figures"}, the rounded result is ${shown.display}.`
        : `If the fewest count is ${count}, the rounded result is ${shown.display}.`,
    );
  }
  steps.push("Those counts are all possible, so one result would invent precision.");
  return {
    ok: true,
    operation,
    headline: "Precision cannot be determined",
    plain: options.join("\n"),
    sigFigLabel: `${minFigs}–${maxFigs}`,
    steps,
    ambiguous: true,
    min: minFigs,
    max: maxFigs,
  };
}

function finishProduct(
  operation: "multiply" | "divide",
  values: ParsedNumber[],
  measured: number[],
  steps: string[],
): SigFigResult {
  let total = values[0]?.exact ?? { sign: 1 as const, digits: "0", exp: 0 };
  try {
    for (let index = 1; index < values.length; index += 1) {
      const next = values[index]?.exact ?? { sign: 1 as const, digits: "0", exp: 0 };
      total = operation === "multiply" ? multiplyExact(total, next) : divideExact(total, next, MAX_SIG_FIGS + 8);
    }
  } catch {
    return fail("Cannot divide by zero.");
  }

  steps.push(
    operation === "multiply"
      ? "Multiplication uses the fewest significant figures, not the least precise decimal place."
      : "Division uses the fewest significant figures, not the least precise decimal place.",
  );

  return presentMeasuredSigFigs(operation, total, values, measured, steps, "product");
}

const MAX_INTEGER_POWER = 999;

function integerFromExact(value: ExactDecimal): number | null {
  if (value.digits === "0") {
    return 0;
  }
  if (value.exp < 0) {
    return null;
  }
  const text = value.digits + "0".repeat(value.exp);
  if (text.length > 15) {
    return null;
  }
  const magnitude = Number(text);
  if (!Number.isSafeInteger(magnitude)) {
    return null;
  }
  return value.sign < 0 ? -magnitude : magnitude;
}

function powExact(base: ExactDecimal, exponent: number): ExactDecimal {
  if (exponent === 0) {
    return { sign: 1, digits: "1", exp: 0 };
  }
  const negative = exponent < 0;
  let n = Math.abs(exponent);
  let result: ExactDecimal = { sign: 1, digits: "1", exp: 0 };
  let factor = base;
  while (n > 0) {
    if (n % 2 === 1) {
      result = multiplyExact(result, factor);
    }
    n = Math.floor(n / 2);
    if (n > 0) {
      factor = multiplyExact(factor, factor);
    }
  }
  if (!negative) {
    return result;
  }
  if (result.digits === "0") {
    throw new Error("division by zero");
  }
  return divideExact({ sign: 1, digits: "1", exp: 0 }, result, MAX_SIG_FIGS + 12);
}

function describeMeasured(value: ParsedNumber, exact: boolean, decimalRule: boolean): string {
  if (exact) {
    return `${numberLabel(value)} is marked exact, so it does not limit the result.`;
  }
  if (value.ambiguous) {
    return `${numberLabel(value)} is ambiguous: ${value.sigFigMin}–${value.sigFigMax} significant figures, and the last precise place could be ${placeName(value.decimalPlaceMin)} through ${placeName(value.decimalPlaceMax)}.`;
  }
  if (decimalRule) {
    return `${numberLabel(value)} is precise to ${placeName(value.decimalPlaceMax)}.`;
  }
  return `${numberLabel(value)} has ${value.sigFigs} significant ${value.sigFigs === 1 ? "figure" : "figures"}.`;
}

export type SigFigFactor = {
  raw: string;
  divide?: boolean;
  exact?: boolean;
};

/** Multiply and divide factors in order, then round once to the fewest significant figures. */
export function calculateSigFigProduct(factors: SigFigFactor[]): SigFigResult {
  if (factors.length < 2) {
    return fail("Enter at least two numbers.");
  }
  const parsed: ParsedNumber[] = [];
  const exact: boolean[] = [];
  const divide: boolean[] = [];
  for (const factor of factors) {
    const value = parseSigFigNumber(factor.raw);
    if (!value.ok) {
      return value;
    }
    parsed.push(value.value);
    exact.push(factor.exact === true);
    divide.push(factor.divide === true);
  }

  const steps = parsed.map((value, index) => describeMeasured(value, exact[index] === true, false));
  let total = parsed[0]?.exact ?? { sign: 1 as const, digits: "0", exp: 0 };
  try {
    for (let index = 1; index < parsed.length; index += 1) {
      const next = parsed[index];
      if (!next) {
        continue;
      }
      if (divide[index] && next.zero) {
        return fail("Cannot divide by zero.");
      }
      total = divide[index] ? divideExact(total, next.exact, MAX_SIG_FIGS + 8) : multiplyExact(total, next.exact);
    }
  } catch {
    return fail("Cannot divide by zero.");
  }

  const divides = divide.some((flag, index) => index > 0 && flag);
  const multiplies = divide.some((flag, index) => index > 0 && !flag);
  if (divides && multiplies) {
    steps.push("Multiplication and division use the fewest significant figures, not the least precise decimal place.");
  } else if (divides) {
    steps.push("Division uses the fewest significant figures, not the least precise decimal place.");
  } else {
    steps.push("Multiplication uses the fewest significant figures, not the least precise decimal place.");
  }

  return presentMeasuredSigFigs(
    divides && !multiplies ? "divide" : "multiply",
    total,
    parsed,
    measuredIndexes(exact),
    steps,
    "product",
  );
}

export function calculateSigFigPower(
  baseRaw: string,
  exponentRaw: string,
  options?: { baseExact?: boolean },
): SigFigResult {
  const baseParsed = parseSigFigNumber(baseRaw);
  if (!baseParsed.ok) {
    return baseParsed;
  }
  const exponentParsed = parseSigFigNumber(exponentRaw);
  if (!exponentParsed.ok) {
    return exponentParsed;
  }
  const base = baseParsed.value;
  const exponent = exponentParsed.value;
  if (exponent.ambiguous) {
    return fail("The exponent is ambiguous, so the power cannot be determined.");
  }
  const n = integerFromExact(exponent.exact);
  if (n === null) {
    return fail("Enter an integer exponent, such as 2.5^2. Fractional powers are not evaluated.");
  }
  if (Math.abs(n) > MAX_INTEGER_POWER) {
    return fail(`Enter an integer exponent from -${MAX_INTEGER_POWER} to ${MAX_INTEGER_POWER}.`);
  }
  if (base.zero && n < 0) {
    return fail("Cannot raise 0 to a negative power.");
  }
  if (base.zero && n === 0) {
    return fail("0^0 is undefined.");
  }
  if (base.exact.digits.length * Math.abs(n) > 8000) {
    return fail("That power is too large for this calculator.");
  }

  const steps = [
    `${numberLabel(base)} raised to ${n}.`,
    "The exponent is a whole number, so it is treated as exact and does not set the significant figures.",
  ];
  if (n === 0) {
    steps.push("Any nonzero number to the power 0 is 1.");
    return {
      ok: true,
      operation: "power",
      headline: "1",
      plain: "1",
      sigFigLabel: "Exact",
      steps,
      ambiguous: false,
      carried: "1",
      exactResult: true,
    };
  }

  let total: ExactDecimal;
  try {
    total = powExact(base.exact, n);
  } catch {
    return fail("Cannot raise 0 to a negative power.");
  }

  const baseExact = options?.baseExact === true;
  if (baseExact) {
    steps.push("The base is exact, so the power is not rounded to the base’s significant figures.");
  }
  return presentMeasuredSigFigs("power", total, [base], measuredIndexes([baseExact]), steps, "power");
}

function formatExact(value: ExactDecimal): string {
  if (value.digits === "0") {
    return "0";
  }
  const signText = value.sign < 0 ? "-" : "";
  if (value.exp >= 0) {
    return `${signText}${value.digits}${"0".repeat(value.exp)}`;
  }
  if (value.digits.length > -value.exp) {
    const point = value.digits.length + value.exp;
    return `${signText}${value.digits.slice(0, point)}.${value.digits.slice(point)}`;
  }
  return `${signText}0.${"0".repeat(-value.exp - value.digits.length)}${value.digits}`;
}

export function calculateSignificantFigures(input: {
  operation: SigFigOperation;
  values: string[];
  precision?: string;
  exact?: boolean[];
}): SigFigResult {
  if (input.operation === "count") {
    return countSignificantFigures(input.values[0] ?? "");
  }
  if (input.operation === "round") {
    return roundToSignificantFigures(input.values[0] ?? "", input.precision ?? "");
  }
  if (input.operation === "scientific") {
    return convertToScientificNotation(input.values[0] ?? "");
  }
  if (input.operation === "power") {
    return calculateSigFigPower(input.values[0] ?? "", input.values[1] ?? "", {
      baseExact: input.exact?.[0] === true,
    });
  }
  return calculateSigFigArithmetic({
    operation: input.operation,
    values: input.values,
    exact: input.exact,
  });
}
