/**
 * Significant-figure expressions.
 *
 * Numbers, parentheses, +, −, ×, ÷, and integer powers are parsed and evaluated
 * with the decimal rules in significant-figures.ts. There is no eval and no
 * Function constructor. log, ln, roots, and the constant e are rejected.
 */

import {
  calculateSigFigArithmetic,
  calculateSigFigPower,
  calculateSigFigProduct,
  countSignificantFigures,
  parseSigFigNumber,
  roundToSignificantFigures,
  type ParsedNumber,
  type SigFigResult,
  type SigFigSuccess,
} from "./significant-figures.ts";

export type SigFigCalculatorSuccess = {
  ok: true;
  value: string;
  copyText: string;
  sigFigLabel: string;
  countKnown: boolean;
  ambiguous: boolean;
  statusLabel: string;
  statusNote?: string;
  scientific?: string;
  roundedDisplay?: string;
  roundedPlain?: string;
  precision?: number;
  steps: string[];
};

export type SigFigInspection =
  | { state: "empty" }
  | { state: "partial" }
  | { state: "invalid"; error: string }
  | { state: "ready"; result: SigFigCalculatorSuccess };

type Ast =
  | { type: "num"; raw: string }
  | { type: "neg"; expr: Ast }
  | { type: "sum"; terms: Array<{ sign: 1 | -1; expr: Ast }> }
  | { type: "product"; factors: Array<{ divide: boolean; expr: Ast }> }
  | { type: "power"; base: Ast; exponent: Ast };

type Tok =
  | { t: "n"; raw: string }
  | { t: "op"; v: "+" | "-" | "*" | "/" | "^" }
  | { t: "(" }
  | { t: ")" };

type GoodValue = {
  ok: true;
  blocked: false;
  raw: string;
  parsed: ParsedNumber;
  exact: boolean;
  origin: "input" | "computed";
  steps: string[];
  headline: string;
  sigFigLabel: string;
  plain: string;
};

type BlockedValue = {
  ok: true;
  blocked: true;
  result: SigFigSuccess;
};

type EvalOut = GoodValue | BlockedValue | { ok: false; error: string };

class ExprError extends Error {
  partial: boolean;

  constructor(message: string, partial = false) {
    super(message);
    this.partial = partial;
  }
}

const UNSUPPORTED = new Set(["log", "ln", "sin", "cos", "tan", "sqrt"]);

function machinePlain(plain: string, headline: string): string {
  if (plain === headline) {
    return plain;
  }
  const lines = plain.split("\n");
  return lines[lines.length - 1] || headline;
}

function negateRaw(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("-")) {
    return trimmed.slice(1).trim();
  }
  if (trimmed.startsWith("+")) {
    return `-${trimmed.slice(1).trim()}`;
  }
  return `-${trimmed}`;
}

function flipHeadline(headline: string): string {
  if (headline === "0" || headline.startsWith("-")) {
    return headline.replace(/^-/, "");
  }
  return `-${headline}`;
}

function isDigit(char: string | undefined): boolean {
  return char !== undefined && char >= "0" && char <= "9";
}

function normalizeExpression(raw: string): string {
  const mapped = [...raw]
    .map((char) => {
      if (char === "−" || char === "–" || char === "—") {
        return "-";
      }
      if (char === "×" || char === "·") {
        return "*";
      }
      if (char === "÷") {
        return "/";
      }
      return char;
    })
    .join("");
  // 1.500 × 10^3 is scientific notation, including when it sits inside a larger expression.
  return mapped.replace(/(\d)\s*[xX*]\s*10\s*\^\s*/g, "$1e");
}

function tokenize(raw: string): Tok[] {
  const source = normalizeExpression(raw);
  const tokens: Tok[] = [];
  let index = 0;

  while (index < source.length) {
    const char = source[index] ?? "";
    if (char === " " || char === "\t" || char === "\n") {
      index += 1;
      continue;
    }
    if (char === "(") {
      tokens.push({ t: "(" });
      index += 1;
      continue;
    }
    if (char === ")") {
      tokens.push({ t: ")" });
      index += 1;
      continue;
    }
    if (char === "+" || char === "-" || char === "*" || char === "/" || char === "^") {
      tokens.push({ t: "op", v: char });
      index += 1;
      continue;
    }
    if (isDigit(char) || (char === "." && isDigit(source[index + 1]))) {
      const start = index;
      if (char === ".") {
        index += 1;
      }
      while (isDigit(source[index])) {
        index += 1;
      }
      if (source[start] !== "." && source[index] === ".") {
        index += 1;
        while (isDigit(source[index])) {
          index += 1;
        }
      }
      if (source[index] === "e" || source[index] === "E") {
        index += 1;
        if (source[index] === "+" || source[index] === "-") {
          index += 1;
        }
        if (!isDigit(source[index])) {
          if (index >= source.length || source[index] === ")" || source[index] === " ") {
            throw new ExprError("Finish the exponent.", true);
          }
          throw new ExprError("Enter digits for the exponent.");
        }
        while (isDigit(source[index])) {
          index += 1;
        }
      }
      tokens.push({ t: "n", raw: source.slice(start, index) });
      continue;
    }
    if (char === ".") {
      throw new ExprError("Finish the decimal.", true);
    }
    if (/[a-z]/i.test(char)) {
      let end = index + 1;
      while (/[a-z]/i.test(source[end] ?? "")) {
        end += 1;
      }
      const word = source.slice(index, end).toLowerCase();
      if (word === "e") {
        throw new ExprError(
          "The constant e is not available. EXP enters a scientific-notation exponent after a coefficient, as in 1.500e3.",
        );
      }
      if (UNSUPPORTED.has(word)) {
        throw new ExprError(
          `${word} is not available. Use +, −, ×, ÷, parentheses, and an integer power.`,
        );
      }
      throw new ExprError(`${word} is not a valid entry.`);
    }
    throw new ExprError("Enter a number or an expression using +, −, ×, ÷, and ^.");
  }

  return tokens;
}

class Parser {
  private index = 0;
  private readonly tokens: Tok[];

  constructor(tokens: Tok[]) {
    this.tokens = tokens;
  }

  parse(): Ast {
    if (this.tokens.length === 0) {
      throw new ExprError("Enter a number.", true);
    }
    const ast = this.parseSum();
    if (!this.atEnd()) {
      const extra = this.peek();
      if (extra?.t === ")") {
        throw new ExprError("Remove the extra closing parenthesis.");
      }
      if (extra?.t === "n" || extra?.t === "(") {
        throw new ExprError("Enter an operator between numbers.");
      }
      throw new ExprError("Enter a number or an expression using +, −, ×, ÷, and ^.");
    }
    return ast;
  }

  private isOp(values: string[]): boolean {
    const token = this.peek();
    return token?.t === "op" && values.includes(token.v);
  }

  private atEnd(): boolean {
    return this.index >= this.tokens.length;
  }

  private peek(): Tok | undefined {
    return this.tokens[this.index];
  }

  private parseSum(): Ast {
    const first = this.parseProduct();
    const terms: Array<{ sign: 1 | -1; expr: Ast }> = [{ sign: 1, expr: first }];
    while (this.isOp(["+", "-"])) {
      const op = this.tokens[this.index];
      if (!op || op.t !== "op") {
        break;
      }
      this.index += 1;
      const sign: 1 | -1 = op.v === "+" ? 1 : -1;
      terms.push({ sign, expr: this.parseProduct() });
    }
    if (terms.length === 1) {
      return first;
    }
    return { type: "sum", terms };
  }

  private parseProduct(): Ast {
    const first = this.parseUnary();
    const factors: Array<{ divide: boolean; expr: Ast }> = [{ divide: false, expr: first }];
    while (this.isOp(["*", "/"])) {
      const op = this.tokens[this.index];
      if (!op || op.t !== "op") {
        break;
      }
      this.index += 1;
      factors.push({ divide: op.v === "/", expr: this.parseUnary() });
    }
    if (factors.length === 1) {
      return first;
    }
    return { type: "product", factors };
  }

  private parseUnary(): Ast {
    const token = this.peek();
    if (token?.t === "op" && token.v === "+") {
      this.index += 1;
      if (this.atEnd()) {
        throw new ExprError("Finish the expression.", true);
      }
      return this.parseUnary();
    }
    if (token?.t === "op" && token.v === "-") {
      this.index += 1;
      if (this.atEnd()) {
        throw new ExprError("Finish the expression.", true);
      }
      return { type: "neg", expr: this.parseUnary() };
    }
    return this.parsePower();
  }

  private parsePower(): Ast {
    const base = this.parsePrimary();
    const token = this.peek();
    if (token?.t === "op" && token.v === "^") {
      this.index += 1;
      if (this.atEnd()) {
        throw new ExprError("Finish the exponent.", true);
      }
      return { type: "power", base, exponent: this.parseUnary() };
    }
    return base;
  }

  private parsePrimary(): Ast {
    const token = this.peek();
    if (!token) {
      throw new ExprError("Finish the expression.", true);
    }
    if (token.t === "n") {
      this.index += 1;
      return { type: "num", raw: token.raw };
    }
    if (token.t === "(") {
      this.index += 1;
      if (this.peek()?.t === ")") {
        throw new ExprError("Enter a number inside the parentheses.");
      }
      const inner = this.parseSum();
      const close = this.peek();
      if (!close) {
        throw new ExprError("Close the parenthesis.", true);
      }
      if (close.t !== ")") {
        throw new ExprError("Close the parenthesis.");
      }
      this.index += 1;
      return inner;
    }
    if (token.t === ")") {
      throw new ExprError("Remove the extra closing parenthesis.");
    }
    throw new ExprError("Enter a number after the operator.");
  }
}

function evalNumber(raw: string): EvalOut {
  const parsed = parseSigFigNumber(raw);
  if (!parsed.ok) {
    return parsed;
  }
  const counted = countSignificantFigures(raw);
  if (!counted.ok) {
    return counted;
  }
  return {
    ok: true,
    blocked: false,
    raw,
    parsed: parsed.value,
    exact: false,
    origin: "input",
    steps: [],
    headline: raw.trim(),
    sigFigLabel: counted.sigFigLabel,
    plain: counted.plain,
  };
}

function negateValue(value: GoodValue): EvalOut {
  const raw = negateRaw(value.raw);
  const parsed = parseSigFigNumber(raw);
  if (!parsed.ok) {
    return parsed;
  }
  if (value.origin === "input") {
    return evalNumber(raw);
  }
  const headline = value.headline === "0" ? "0" : flipHeadline(value.headline);
  return {
    ...value,
    raw,
    parsed: parsed.value,
    headline,
    plain: value.plain === value.headline ? headline : `${headline}\n${raw}`,
    steps: [...value.steps, "The sign of the result is reversed."],
  };
}

function fromArithmetic(result: SigFigResult, priorSteps: string[]): EvalOut {
  if (!result.ok) {
    return result;
  }
  const steps = [...priorSteps, ...result.steps];
  if (result.ambiguous || !result.carried) {
    return { ok: true, blocked: true, result: { ...result, steps } };
  }
  const parsed = parseSigFigNumber(result.carried);
  if (!parsed.ok) {
    return { ok: false, error: "The result could not be read back." };
  }
  return {
    ok: true,
    blocked: false,
    raw: result.carried,
    parsed: parsed.value,
    exact: result.exactResult === true,
    origin: "computed",
    steps,
    headline: result.headline,
    sigFigLabel: result.sigFigLabel,
    plain: result.plain,
  };
}

function childSteps(value: GoodValue): string[] {
  return value.origin === "computed" ? value.steps : [];
}

function evalAst(ast: Ast): EvalOut {
  if (ast.type === "num") {
    return evalNumber(ast.raw);
  }
  if (ast.type === "neg") {
    const inner = evalAst(ast.expr);
    if (!inner.ok || inner.blocked) {
      return inner;
    }
    return negateValue(inner);
  }
  if (ast.type === "sum") {
    const values: GoodValue[] = [];
    for (const term of ast.terms) {
      const inner = evalAst(term.expr);
      if (!inner.ok) {
        return inner;
      }
      if (inner.blocked) {
        return {
          ok: true,
          blocked: true,
          result: {
            ...inner.result,
            steps: [
              ...inner.result.steps,
              "The surrounding addition cannot be completed while that precision is undetermined.",
            ],
          },
        };
      }
      const signed = term.sign < 0 ? negateValue(inner) : inner;
      if (!signed.ok || signed.blocked) {
        return signed;
      }
      values.push(signed);
    }
    const only = values[0];
    if (values.length === 1 && only) {
      return only;
    }
    return fromArithmetic(
      calculateSigFigArithmetic({
        operation: "add",
        values: values.map((value) => value.raw),
        exact: values.map((value) => value.exact),
      }),
      values.flatMap(childSteps),
    );
  }
  if (ast.type === "product") {
    const values: GoodValue[] = [];
    const divide: boolean[] = [];
    for (const factor of ast.factors) {
      const inner = evalAst(factor.expr);
      if (!inner.ok) {
        return inner;
      }
      if (inner.blocked) {
        return {
          ok: true,
          blocked: true,
          result: {
            ...inner.result,
            steps: [
              ...inner.result.steps,
              "The surrounding multiplication or division cannot be completed while that precision is undetermined.",
            ],
          },
        };
      }
      values.push(inner);
      divide.push(factor.divide);
    }
    const only = values[0];
    if (values.length === 1 && only) {
      return only;
    }
    return fromArithmetic(
      calculateSigFigProduct(
        values.map((value, index) => ({
          raw: value.raw,
          divide: divide[index] === true,
          exact: value.exact,
        })),
      ),
      values.flatMap(childSteps),
    );
  }

  const base = evalAst(ast.base);
  if (!base.ok || base.blocked) {
    return base;
  }
  const exponent = evalAst(ast.exponent);
  if (!exponent.ok || exponent.blocked) {
    return exponent.ok
      ? {
          ok: true,
          blocked: true,
          result: {
            ...exponent.result,
            steps: [...exponent.result.steps, "An undetermined exponent cannot be used as a power."],
          },
        }
      : exponent;
  }
  return fromArithmetic(
    calculateSigFigPower(base.raw, exponent.raw, { baseExact: base.exact }),
    [...childSteps(base), ...childSteps(exponent)],
  );
}

function statusForLabel(label: string, ambiguous: boolean): { statusLabel: string; statusNote?: string; countKnown: boolean } {
  if (ambiguous) {
    const range = /^\d+–\d+$/.test(label);
    return {
      statusLabel: range ? label : "—",
      statusNote: "Precision cannot be determined.",
      countKnown: false,
    };
  }
  if (/^\d+$/.test(label)) {
    return { statusLabel: label, countKnown: true };
  }
  if (label === "Exact") {
    return { statusLabel: "—", statusNote: "The result is exact.", countKnown: false };
  }
  return { statusLabel: "—", statusNote: `Limited to ${label}.`, countKnown: false };
}

function withPrecision(
  view: SigFigCalculatorSuccess,
  raw: string | undefined,
  precisionRaw: string | undefined,
  allow: boolean,
): SigFigCalculatorSuccess | { ok: false; error: string } {
  const precision = precisionRaw?.trim() ?? "";
  if (!precision) {
    return view;
  }
  if (!allow || !raw) {
    return {
      ...view,
      steps: [...view.steps, "Rounding was not applied because the precision cannot be determined."],
    };
  }
  const rounded = roundToSignificantFigures(raw, precision);
  if (!rounded.ok) {
    return rounded;
  }
  return {
    ...view,
    roundedDisplay: rounded.headline,
    roundedPlain: machinePlain(rounded.plain, rounded.headline),
    precision: Number(rounded.sigFigLabel),
    steps: [...view.steps, ...rounded.steps],
    copyText: rounded.plain,
  };
}

function viewFromInput(raw: string, precisionRaw?: string): SigFigCalculatorSuccess | { ok: false; error: string } {
  const counted = countSignificantFigures(raw);
  if (!counted.ok) {
    return counted;
  }
  const parsed = parseSigFigNumber(raw);
  const scientific =
    parsed.ok && !parsed.value.ambiguous ? parsed.value.forms[0]?.readable : undefined;
  const ambiguous = counted.ambiguous;
  const view: SigFigCalculatorSuccess = {
    ok: true,
    value: raw.trim(),
    copyText: counted.plain,
    sigFigLabel: counted.sigFigLabel,
    countKnown: !ambiguous,
    ambiguous,
    statusLabel: counted.sigFigLabel,
    statusNote: ambiguous ? "Trailing zeros without a decimal point are ambiguous." : undefined,
    scientific: scientific && scientific !== raw.trim() ? scientific : undefined,
    steps: counted.steps,
  };
  return withPrecision(view, raw, precisionRaw, true);
}

function viewFromValue(
  value: GoodValue,
  precisionRaw?: string,
): SigFigCalculatorSuccess | { ok: false; error: string } {
  if (value.origin === "input") {
    return viewFromInput(value.raw, precisionRaw);
  }
  const status = statusForLabel(value.sigFigLabel, false);
  const view: SigFigCalculatorSuccess = {
    ok: true,
    value: value.headline,
    copyText: value.plain,
    sigFigLabel: value.sigFigLabel,
    countKnown: status.countKnown,
    ambiguous: false,
    statusLabel: status.statusLabel,
    statusNote: status.statusNote,
    steps: value.steps,
  };
  return withPrecision(view, value.raw, precisionRaw, true);
}

function viewFromBlocked(
  result: SigFigSuccess,
  precisionRaw?: string,
): SigFigCalculatorSuccess | { ok: false; error: string } {
  const status = statusForLabel(result.sigFigLabel, true);
  const view: SigFigCalculatorSuccess = {
    ok: true,
    value: result.headline,
    copyText: result.plain,
    sigFigLabel: result.sigFigLabel,
    countKnown: false,
    ambiguous: true,
    statusLabel: status.statusLabel,
    statusNote: status.statusNote,
    steps: result.steps,
  };
  return withPrecision(view, undefined, precisionRaw, false);
}

function precisionError(precisionRaw: string | undefined): string | undefined {
  const precision = precisionRaw?.trim() ?? "";
  if (!precision) {
    return undefined;
  }
  const check = roundToSignificantFigures("1", precision);
  return check.ok ? undefined : check.error;
}

export function inspectSigFigExpression(expression: string, precisionRaw?: string): SigFigInspection {
  if (expression.trim() === "") {
    const error = precisionError(precisionRaw);
    if (error && precisionRaw?.trim()) {
      return { state: "invalid", error };
    }
    return { state: "empty" };
  }

  const error = precisionError(precisionRaw);
  if (error) {
    return { state: "invalid", error };
  }

  const direct = parseSigFigNumber(expression);
  if (direct.ok) {
    const view = viewFromInput(expression, precisionRaw);
    if (!view.ok) {
      return { state: "invalid", error: view.error };
    }
    return { state: "ready", result: view };
  }

  try {
    const tokens = tokenize(expression);
    const ast = new Parser(tokens).parse();
    const evaluated = evalAst(ast);
    if (!evaluated.ok) {
      return { state: "invalid", error: evaluated.error };
    }
    const view = evaluated.blocked
      ? viewFromBlocked(evaluated.result, precisionRaw)
      : viewFromValue(evaluated, precisionRaw);
    if (!view.ok) {
      return { state: "invalid", error: view.error };
    }
    return { state: "ready", result: view };
  } catch (caught) {
    if (caught instanceof ExprError) {
      if (caught.partial) {
        return { state: "partial" };
      }
      return { state: "invalid", error: caught.message };
    }
    return { state: "invalid", error: "Enter a number or an expression using +, −, ×, ÷, and ^." };
  }
}
