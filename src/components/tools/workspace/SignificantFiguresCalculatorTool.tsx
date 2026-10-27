"use client";

import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  MAX_OPERANDS,
  calculateSignificantFigures,
  type SigFigOperation,
  type SigFigSuccess,
} from "@/lib/tools/significant-figures";

const OPERATIONS: Array<{ id: SigFigOperation; label: string }> = [
  { id: "count", label: "Count significant figures" },
  { id: "round", label: "Round to significant figures" },
  { id: "scientific", label: "Convert to scientific notation" },
  { id: "add", label: "Addition" },
  { id: "subtract", label: "Subtraction" },
  { id: "multiply", label: "Multiplication" },
  { id: "divide", label: "Division" },
];

const SAMPLES = ["1.00", "0.08", "0.080", "150", "80", "1200", "4.0", "2.0", "81.60", "0.00450", "1.500e3", "123.456"];

const ORDINAL = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

function isArithmetic(operation: SigFigOperation): boolean {
  return operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide";
}

function statLabel(result: SigFigSuccess): string {
  if (result.operation === "add" || result.operation === "subtract") {
    return result.ambiguous ? "Precision" : "Last precise place";
  }
  return "Significant figures";
}

export function SignificantFiguresCalculatorTool() {
  const formId = useId();
  const numberRef = useRef<HTMLInputElement>(null);
  const [operation, setOperation] = useState<SigFigOperation>("count");
  const [values, setValues] = useState<string[]>(["1.00"]);
  const [exact, setExact] = useState<boolean[]>([false]);
  const [precision, setPrecision] = useState("3");
  const [error, setError] = useState("");
  const [result, setResult] = useState<SigFigSuccess>();

  const arithmetic = isArithmetic(operation);
  const numberHint = arithmetic
    ? "Use digits, a decimal point, or scientific notation such as 1.500e3."
    : "Integers, decimals, negatives, and scientific notation. Example: 1.500e3.";

  function run(nextOperation = operation, nextValues = values, nextPrecision = precision, nextExact = exact) {
    const calculated = calculateSignificantFigures({
      operation: nextOperation,
      values: isArithmetic(nextOperation) ? nextValues : [nextValues[0] ?? ""],
      precision: nextPrecision,
      exact: nextExact,
    });
    if (!calculated.ok) {
      setError(calculated.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(calculated);
  }

  function updateValue(index: number, value: string) {
    setValues((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  }

  function updateExact(index: number, checked: boolean) {
    setExact((current) => {
      const next = [...current];
      next[index] = checked;
      return next;
    });
  }

  function changeOperation(next: SigFigOperation) {
    setOperation(next);
    setError("");
    setResult(undefined);
    if (isArithmetic(next)) {
      setValues((current) => (current.length >= 2 ? current : [current[0] ?? "", ""]));
      setExact((current) => (current.length >= 2 ? current : [current[0] ?? false, false]));
    }
  }

  function applySample(sample: string) {
    const nextValues = [sample, ...values.slice(1)];
    setValues(nextValues);
    run(operation, nextValues, precision, exact);
  }

  function reset() {
    setOperation("count");
    setValues(["1.00"]);
    setExact([false]);
    setPrecision("3");
    setError("");
    setResult(undefined);
    numberRef.current?.focus();
  }

  return (
    <ToolPanel>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          run();
        }}
      >
        <p className="text-sm leading-6 text-muted-foreground">
          Counting, rounding, scientific notation, and the arithmetic run in this tab. A whole number that ends in zero, such as 150, is not given one count.
        </p>

        <div className="mt-4">
          <label htmlFor={`${formId}-operation`} className="block text-sm font-medium text-foreground">
            Operation
          </label>
          <select
            id={`${formId}-operation`}
            value={operation}
            onChange={(event) => changeOperation(event.target.value as SigFigOperation)}
            className={toolControlClass}
          >
            {OPERATIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ToolField id={`${formId}-number`} label={arithmetic ? "First number" : "Number"} hint={numberHint}>
            <input
              ref={numberRef}
              id={`${formId}-number`}
              value={values[0] ?? ""}
              onChange={(event) => updateValue(0, event.target.value)}
              inputMode="text"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-invalid={Boolean(error) || undefined}
              aria-describedby={`${formId}-number-hint`}
              className={`${toolControlClass} font-mono`}
            />
          </ToolField>

          {operation === "round" ? (
            <ToolField
              id={`${formId}-precision`}
              label="Significant figures"
              hint="A whole number from 1 to 50. Rounding is half up."
            >
              <input
                id={`${formId}-precision`}
                value={precision}
                onChange={(event) => setPrecision(event.target.value)}
                inputMode="numeric"
                autoComplete="off"
                aria-describedby={`${formId}-precision-hint`}
                className={`${toolControlClass} font-mono`}
              />
            </ToolField>
          ) : null}
        </div>

        {arithmetic ? (
          <div className="mt-4 space-y-4">
            <ExactControl
              id={`${formId}-exact-0`}
              checked={exact[0] === true}
              onChange={(checked) => updateExact(0, checked)}
            />
            {values.slice(1).map((value, offset) => {
              const index = offset + 1;
              return (
                <div key={`${formId}-operand-${index}`} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <ToolField id={`${formId}-operand-${index}`} label={`${ORDINAL[index] ?? "Next"} number`}>
                    <input
                      id={`${formId}-operand-${index}`}
                      value={value}
                      onChange={(event) => updateValue(index, event.target.value)}
                      inputMode="text"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      aria-invalid={Boolean(error) || undefined}
                      className={`${toolControlClass} font-mono`}
                    />
                  </ToolField>
                  <div className="flex flex-wrap items-center gap-3">
                    <ExactControl
                      id={`${formId}-exact-${index}`}
                      checked={exact[index] === true}
                      onChange={(checked) => updateExact(index, checked)}
                    />
                    {values.length > 2 ? (
                      <Button
                        type="button"
                        variant="ghost"
                        aria-label={`Remove ${ORDINAL[index]?.toLowerCase() ?? "this"} number`}
                        onClick={() => {
                          setValues((current) => current.filter((_, itemIndex) => itemIndex !== index));
                          setExact((current) => current.filter((_, itemIndex) => itemIndex !== index));
                        }}
                      >
                        Remove
                      </Button>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {values.length < MAX_OPERANDS ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setValues((current) => [...current, ""]);
                  setExact((current) => [...current, false]);
                }}
              >
                Add another number
              </Button>
            ) : null}
            <p className="text-sm leading-6 text-muted-foreground">
              Mark a number exact when it is a count or a defined conversion. It stays in the arithmetic and does not limit the precision.
            </p>
          </div>
        ) : null}

        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-foreground">Samples</legend>
          <ul className="mt-2 flex flex-wrap gap-2">
            {SAMPLES.map((sample) => (
              <li key={sample}>
                <button
                  type="button"
                  onClick={() => applySample(sample)}
                  className="min-h-11 rounded-xl border border-border bg-background px-3 py-2 font-mono text-sm text-foreground hover:bg-muted"
                >
                  {sample}
                </button>
              </li>
            ))}
          </ul>
        </fieldset>

        {error ? (
          <div className="mt-4">
            <ToolError>{error}</ToolError>
          </div>
        ) : null}

        <div className="mt-4">
          <ToolActions>
            <Button type="submit">Calculate</Button>
            <CopyButton value={result?.plain ?? ""} label="Copy result" />
            <Button type="button" variant="ghost" onClick={reset}>
              Reset
            </Button>
          </ToolActions>
        </div>
      </form>

      <div className="mt-6" role="status" aria-live="polite" aria-atomic="true">
        {result ? (
          <div className="space-y-4">
            <ToolOutput label="Result">
              <p className="break-words text-2xl font-semibold tracking-tight">{result.headline}</p>
              {result.plain !== result.headline ? (
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-6 text-foreground">
                  {result.plain}
                </pre>
              ) : null}
            </ToolOutput>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-accent-soft px-4 py-4">
                <dt className="text-sm text-muted-foreground">{statLabel(result)}</dt>
                <dd className="mt-1 text-2xl font-semibold text-foreground">{result.sigFigLabel}</dd>
              </div>
            </dl>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Steps</h2>
              <ol className="mt-2 list-decimal space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
                {result.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ) : null}
      </div>
    </ToolPanel>
  );
}

function ExactControl({
  id,
  checked,
  onChange,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="inline-flex min-h-11 items-center gap-2 text-sm text-foreground">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 accent-accent"
      />
      Exact number
    </label>
  );
}
