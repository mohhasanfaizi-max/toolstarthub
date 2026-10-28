import { inspectSigFigExpression } from "./significant-figures-expression.ts";
import {
  calculateSigFigArithmetic,
  calculateSignificantFigures,
  convertToScientificNotation,
  countSignificantFigures,
  roundToSignificantFigures,
} from "./significant-figures.ts";

type Assert = (condition: unknown, message: string) => void;

function countOf(raw: string) {
  const result = countSignificantFigures(raw);
  if (!result.ok) {
    throw new Error(`${raw}: ${result.error}`);
  }
  return result;
}

function roundOf(raw: string, precision: string) {
  const result = roundToSignificantFigures(raw, precision);
  if (!result.ok) {
    throw new Error(`${raw} → ${precision}: ${result.error}`);
  }
  return result;
}

export function runSignificantFiguresChecks(assert: Assert): void {
  const exactCounts: Array<[string, number]> = [
    ["1.00", 3],
    ["0.08", 1],
    ["0.080", 2],
    ["4.0", 2],
    ["2.0", 2],
    ["81.60", 4],
    ["1005", 4],
    ["0.00450", 3],
    ["1.5e3", 2],
    ["1.500e3", 4],
    ["0", 1],
    ["0.000", 1],
    ["10.01", 4],
    ["0.0100", 3],
    ["1000.0", 5],
    ["-0.00450", 3],
    ["6.022e23", 4],
    ["3.00e-8", 3],
    ["+1.00", 3],
    ["1.500E3", 4],
    ["1.500×10^3", 4],
  ];

  for (const [raw, expected] of exactCounts) {
    const result = countOf(raw);
    assert(result.count === expected && result.ambiguous === false, `${raw} has ${expected} significant figures`);
  }

  for (const raw of ["150", "80", "1200", "1000"]) {
    const result = countOf(raw);
    assert(result.ambiguous && result.count === null, `${raw} is not given a single significant-figure count`);
    assert((result.min ?? 0) < (result.max ?? 0), `${raw} has a range of possible counts`);
    assert(
      result.headline === "Significant figures cannot be determined",
      `${raw} explains that the count cannot be determined`,
    );
    assert((result.forms?.length ?? 0) === (result.max ?? 0) - (result.min ?? 0) + 1, `${raw} shows a scientific form for each count`);
  }

  const oneFifty = countOf("150");
  assert(oneFifty.min === 2 && oneFifty.max === 3, "150 can have 2 or 3 significant figures");
  assert(oneFifty.forms?.[0]?.plain === "1.5e2" && oneFifty.forms?.[1]?.plain === "1.50e2", "150 is shown as 1.5e2 or 1.50e2");

  const eighty = countOf("80");
  assert(eighty.min === 1 && eighty.max === 2, "80 can have 1 or 2 significant figures");
  assert(eighty.forms?.[0]?.plain === "8e1" && eighty.forms?.[1]?.plain === "8.0e1", "80 is shown as 8e1 or 8.0e1");

  const twelveHundred = countOf("1200");
  assert(twelveHundred.min === 2 && twelveHundred.max === 4, "1200 can have 2, 3, or 4 significant figures");
  assert(
    twelveHundred.forms?.map((form) => form.plain).join(",") === "1.2e3,1.20e3,1.200e3",
    "1200 is shown as 1.2e3, 1.20e3, and 1.200e3",
  );

  const thousand = countOf("1000");
  assert(thousand.min === 1 && thousand.max === 4, "1000 can have 1 to 4 significant figures");
  assert(countOf("10.01").count === 4, "Zeros between nonzero digits are significant");
  assert(countOf("0.0100").forms?.[0]?.plain === "1.00e-2", "0.0100 keeps two trailing zeros in scientific notation");

  const rounded: Array<[string, string, string, string]> = [
    ["123.456", "3", "123", "123"],
    ["0.004567", "2", "0.0046", "0.0046"],
    ["81.60", "3", "81.6", "81.6"],
    ["999", "2", "1.0 × 10³", "1.0e3"],
    ["1.2345", "4", "1.235", "1.235"],
    ["1200", "4", "1.200 × 10³", "1.200e3"],
    ["-1.2345", "4", "-1.235", "-1.235"],
    ["-999", "2", "-1.0 × 10³", "-1.0e3"],
    ["1.25", "2", "1.3", "1.3"],
    ["-1.25", "2", "-1.3", "-1.3"],
  ];
  for (const [raw, precision, display, plain] of rounded) {
    const result = roundOf(raw, precision);
    assert(result.headline === display, `${raw} to ${precision} sig figs displays ${display}`);
    assert(result.plain.includes(plain), `${raw} to ${precision} sig figs copies ${plain}`);
    assert(result.steps.some((step) => step.includes("Half up")), `${raw} documents half-up rounding`);
  }

  const scientific: Array<[string, string, string]> = [
    ["0.00450", "4.50 × 10⁻³", "4.50e-3"],
    ["-0.00450", "-4.50 × 10⁻³", "-4.50e-3"],
    ["1.500e3", "1.500 × 10³", "1.500e3"],
    ["81.60", "8.160 × 10¹", "8.160e1"],
    ["6.022e23", "6.022 × 10²³", "6.022e23"],
    ["3.00e-8", "3.00 × 10⁻⁸", "3.00e-8"],
    ["0", "0", "0"],
    ["0.000", "0", "0"],
  ];
  for (const [raw, display, plain] of scientific) {
    const result = convertToScientificNotation(raw);
    assert(result.ok && result.headline === display && result.plain === plain, `${raw} converts to ${plain}`);
  }

  const ambiguousScientific = convertToScientificNotation("150");
  assert(
    ambiguousScientific.ok && ambiguousScientific.ambiguous && ambiguousScientific.plain.includes("1.5e2"),
    "Scientific notation for 150 explains both counts",
  );

  const sum = calculateSigFigArithmetic({ operation: "add", values: ["12.11", "0.3"] });
  assert(sum.ok && sum.headline === "12.4", "12.11 + 0.3 = 12.4");
  assert(sum.ok && sum.steps.some((step) => step.includes("decimal place")), "Addition explains the decimal-place rule");

  const difference = calculateSigFigArithmetic({ operation: "subtract", values: ["12.11", "0.3"] });
  assert(difference.ok && difference.headline === "11.8", "12.11 − 0.3 = 11.8");

  const floatSum = calculateSigFigArithmetic({ operation: "add", values: ["0.10", "0.20"] });
  assert(floatSum.ok && floatSum.headline === "0.30", "0.10 + 0.20 stays 0.30 without a float error");

  const product = calculateSigFigArithmetic({ operation: "multiply", values: ["2.5", "3.42"] });
  assert(product.ok && product.headline === "8.6", "2.5 × 3.42 = 8.6");
  assert(product.ok && product.steps.some((step) => step.includes("fewest significant figures")), "Multiplication uses the fewest significant figures");

  const quotient = calculateSigFigArithmetic({ operation: "divide", values: ["15.0", "4.0"] });
  assert(quotient.ok && quotient.headline === "3.8", "15.0 ÷ 4.0 = 3.8");

  const repeating = calculateSigFigArithmetic({ operation: "divide", values: ["2.00", "3.00"] });
  assert(repeating.ok && repeating.headline === "0.667", "2.00 ÷ 3.00 keeps guard digits until the final round");

  const byZero = calculateSigFigArithmetic({ operation: "divide", values: ["4.0", "0"] });
  assert(!byZero.ok && byZero.error === "Cannot divide by zero.", "Division by zero is rejected");
  const byZeroDecimal = calculateSigFigArithmetic({ operation: "divide", values: ["4.0", "0.0"] });
  assert(!byZeroDecimal.ok, "Division by 0.0 is rejected");

  const ambiguousProduct = calculateSigFigArithmetic({ operation: "multiply", values: ["150", "2.00"] });
  assert(
    ambiguousProduct.ok && ambiguousProduct.ambiguous && ambiguousProduct.headline === "Precision cannot be determined",
    "150 × 2.00 does not invent one significant-figure count",
  );

  const determinedProduct = calculateSigFigArithmetic({ operation: "multiply", values: ["150", "2.5"] });
  assert(determinedProduct.ok && determinedProduct.headline === "3.8 × 10²", "150 × 2.5 is limited to 2 significant figures");

  const ambiguousSum = calculateSigFigArithmetic({ operation: "add", values: ["12.11", "150"] });
  assert(
    ambiguousSum.ok && ambiguousSum.ambiguous && ambiguousSum.headline === "Precision cannot be determined",
    "12.11 + 150 explains that the decimal place cannot be determined",
  );

  const exactOperand = calculateSigFigArithmetic({
    operation: "add",
    values: ["12.11", "0.3"],
    exact: [false, true],
  });
  assert(exactOperand.ok && exactOperand.headline === "12.41", "An exact 0.3 does not limit 12.11 + 0.3");

  const allExact = calculateSigFigArithmetic({
    operation: "multiply",
    values: ["2.5", "3.42"],
    exact: [true, true],
  });
  assert(allExact.ok && allExact.sigFigLabel === "Exact" && allExact.headline === "8.55", "Two exact numbers are not rounded to sig figs");

  const invalid: Array<[string, string | undefined]> = [
    ["", undefined],
    ["abc", undefined],
    ["1.2.3", undefined],
    ["Infinity", undefined],
    ["NaN", undefined],
  ];
  for (const [raw] of invalid) {
    const result = countSignificantFigures(raw);
    assert(!result.ok, `${raw || "empty"} is rejected`);
  }
  assert(!roundToSignificantFigures("1.23", "").ok, "Blank precision is rejected");
  assert(!roundToSignificantFigures("1.23", "0").ok, "Zero precision is rejected");
  assert(!roundToSignificantFigures("1.23", "1.5").ok, "A fractional precision is rejected");
  assert(!roundToSignificantFigures("1.23", "51").ok, "Precision above 50 is rejected");
  assert(!roundToSignificantFigures("", "3").ok, "A blank number is rejected");
  assert(!calculateSigFigArithmetic({ operation: "add", values: ["1"] }).ok, "One operand is rejected");
  assert(!calculateSigFigArithmetic({ operation: "add", values: ["1", ""] }).ok, "An empty operand is rejected");

  const measuredSum = calculateSigFigArithmetic({ operation: "add", values: ["1000.0", "0.1"] });
  assert(measuredSum.ok && measuredSum.headline === "1000.1", "1000.0 + 0.1 stays precise to the tenths place");
  const negativeSubtraction = calculateSigFigArithmetic({ operation: "subtract", values: ["5.0", "-1.2"] });
  assert(negativeSubtraction.ok && negativeSubtraction.headline === "6.2", "Subtracting a negative number uses the same decimal-place rule");

  const combined = calculateSignificantFigures({ operation: "round", values: ["999"], precision: "2" });
  assert(combined.ok && combined.headline === "1.0 × 10³", "The shared calculator entry rounds 999 to 2 significant figures");

  function ready(expression: string, precision?: string) {
    const result = inspectSigFigExpression(expression, precision);
    if (result.state !== "ready") {
      const detail = result.state === "invalid" ? result.error : result.state;
      throw new Error(`${expression}: ${detail}`);
    }
    return result.result;
  }

  const counted: Array<[string, string]> = [
    ["1.00", "3"],
    ["0.08", "1"],
    ["0.080", "2"],
    ["81.60", "4"],
    ["0.00450", "3"],
    ["1.500e3", "4"],
    ["1.500×10^3", "4"],
    ["((2.50))", "3"],
  ];
  for (const [expression, figs] of counted) {
    const result = ready(expression);
    assert(result.countKnown && result.sigFigLabel === figs && !result.ambiguous, `${expression} shows ${figs} significant figures`);
  }

  const oneFiftyView = ready("150");
  assert(oneFiftyView.ambiguous && oneFiftyView.sigFigLabel === "2–3" && oneFiftyView.statusLabel === "2–3", "150 stays a range in the calculator");
  assert(
    oneFiftyView.statusNote === "Trailing zeros without a decimal point are ambiguous.",
    "150 explains the trailing-zero ambiguity",
  );
  assert(!oneFiftyView.countKnown, "150 is not given one significant-figure count");

  const roundedView: Array<[string, string, string]> = [
    ["123.456", "3", "123"],
    ["0.004567", "2", "0.0046"],
    ["999", "2", "1.0 × 10³"],
  ];
  for (const [expression, precision, display] of roundedView) {
    const result = ready(expression, precision);
    assert(result.roundedDisplay === display, `${expression} rounds to ${display} from the keypad precision`);
    assert(result.value.trim().startsWith(expression), `${expression} keeps the original value beside the rounding`);
  }
  assert(ready("999", "2").copyText.includes("1.0e3"), "999 to 2 significant figures copies 1.0e3");
  assert(ready("-1.25", "2").roundedDisplay === "-1.3", "Negative half-up rounding stays away from zero");

  assert(ready("12.11+0.3").value === "12.4", "12.11 + 0.3 = 12.4");
  assert(ready("12.11−0.3").value === "11.8", "12.11 − 0.3 = 11.8");
  assert(ready("0.10 + 0.20").value === "0.30", "0.10 + 0.20 = 0.30");
  assert(ready("100.1+0.05+0.05").value === "100.2", "A sum rounds once, after adding every term");
  assert(ready("(100.1+0.05)+0.05").value === "100.3", "Parentheses round the inner sum before the next addition");
  assert(ready("2.5×3.42").value === "8.6", "2.5 × 3.42 = 8.6");
  assert(ready("15.0÷4.0").value === "3.8", "15.0 ÷ 4.0 = 3.8");
  assert(ready("2.00/3.00").value === "0.667", "2.00 / 3.00 = 0.667");
  assert(ready("150*2.5").value === "3.8 × 10²", "150 × 2.5 is limited to 2 significant figures");
  assert(ready("(12.11+0.3)×2.0").value === "25", "(12.11 + 0.3) × 2.0 = 25");
  assert(ready("81.6×2.0").value === "1.6 × 10²", "81.6 × 2.0 = 1.6 × 10²");
  assert(ready("2.5^2").value === "6.3", "2.5^2 keeps two significant figures");
  assert(ready("2.00^3").value === "8.00", "2.00^3 keeps three significant figures");
  assert(ready("4.0^2").value === "16", "4.0^2 is 16");
  assert(ready("2.0^2").value === "4.0", "2.0^2 is 4.0");

  const ambiguousPower = ready("10^2");
  assert(ambiguousPower.ambiguous, "10^2 does not invent one significant-figure count");
  const ambiguousProductView = ready("150×2.00");
  assert(
    ambiguousProductView.ambiguous && ambiguousProductView.value === "Precision cannot be determined",
    "150 × 2.00 stays undetermined",
  );

  const divideByZero = inspectSigFigExpression("4.0÷0");
  assert(divideByZero.state === "invalid" && divideByZero.error === "Cannot divide by zero.", "4.0 ÷ 0 is rejected");
  const divideByZeroDecimal = inspectSigFigExpression("4/0.0");
  assert(divideByZeroDecimal.state === "invalid", "4 / 0.0 is rejected");
  const fractionalPower = inspectSigFigExpression("2.5^1.5");
  assert(fractionalPower.state === "invalid" && fractionalPower.error.includes("integer"), "A fractional power is rejected");
  const log = inspectSigFigExpression("1.5/log(5+1)");
  assert(log.state === "invalid" && log.error.includes("not available"), "log is not offered as a working function");
  const constantE = inspectSigFigExpression("e");
  assert(constantE.state === "invalid" && constantE.error.includes("not available"), "The constant e is not a fake key result");
  assert(inspectSigFigExpression("").state === "empty", "An empty display is not a result");
  assert(inspectSigFigExpression("12.11+").state === "partial", "A trailing operator waits for the next number");
  assert(inspectSigFigExpression("abc").state === "invalid", "Letters are rejected");
  assert(inspectSigFigExpression("1.23", "0").state === "invalid", "Zero custom precision is rejected");
  assert(inspectSigFigExpression("1.23", "51").state === "invalid", "Precision above 50 is rejected");
  assert(inspectSigFigExpression("1.23", "1.5").state === "invalid", "A fractional precision is rejected");
  assert(ready("1.500e3+2").value === "1.502 × 10³" || ready("1.500e3+2").value === "1502", "1.500e3 + 2 follows decimal places");
}
