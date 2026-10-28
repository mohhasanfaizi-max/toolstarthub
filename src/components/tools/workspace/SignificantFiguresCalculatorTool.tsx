"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolError } from "@/components/tools/ToolForm";
import { inspectSigFigExpression, type SigFigCalculatorSuccess, type SigFigInspection } from "@/lib/tools/significant-figures-expression";

const PRESETS = [1, 2, 3, 4, 5] as const;

const keyClass =
  "inline-flex min-h-12 items-center justify-center rounded-xl px-2 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

const numberKey = `${keyClass} border border-border bg-card text-foreground hover:bg-background active:bg-background`;
const operatorKey = `${keyClass} bg-[#1e3a5f] text-white hover:bg-[#27496f] active:bg-[#16314f]`;
const functionKey = `${keyClass} bg-[#3d5c66] text-white hover:bg-[#4c6f7a] active:bg-[#34555e]`;
const clearKey = `${keyClass} bg-[#e2e8f0] text-[#1e293b] hover:bg-[#cbd5e1] active:bg-[#cbd5e1] dark:bg-[#243044] dark:text-foreground dark:hover:bg-[#2f4058]`;
const solveKey = `${keyClass} bg-[#1e3a8a] text-white hover:bg-[#1d4ed8] active:bg-[#1e3a8a]`;

type KeySpec = {
  label: string;
  insert?: string;
  action?: "backspace" | "clear";
  name: string;
  className: string;
  col: number;
  row: number;
};

const KEYS: KeySpec[] = [
  { label: "÷", insert: "÷", name: "Divide", className: operatorKey, col: 1, row: 1 },
  { label: "1", insert: "1", name: "1", className: numberKey, col: 2, row: 1 },
  { label: "2", insert: "2", name: "2", className: numberKey, col: 3, row: 1 },
  { label: "3", insert: "3", name: "3", className: numberKey, col: 4, row: 1 },
  { label: "^", insert: "^", name: "Power", className: functionKey, col: 5, row: 1 },
  { label: "×", insert: "×", name: "Multiply", className: operatorKey, col: 1, row: 2 },
  { label: "4", insert: "4", name: "4", className: numberKey, col: 2, row: 2 },
  { label: "5", insert: "5", name: "5", className: numberKey, col: 3, row: 2 },
  { label: "6", insert: "6", name: "6", className: numberKey, col: 4, row: 2 },
  { label: "+", insert: "+", name: "Add", className: operatorKey, col: 1, row: 3 },
  { label: "7", insert: "7", name: "7", className: numberKey, col: 2, row: 3 },
  { label: "8", insert: "8", name: "8", className: numberKey, col: 3, row: 3 },
  { label: "9", insert: "9", name: "9", className: numberKey, col: 4, row: 3 },
  { label: "−", insert: "−", name: "Subtract", className: operatorKey, col: 1, row: 4 },
  { label: "(", insert: "(", name: "Left parenthesis", className: numberKey, col: 2, row: 4 },
  { label: "0", insert: "0", name: "0", className: numberKey, col: 3, row: 4 },
  { label: ")", insert: ")", name: "Right parenthesis", className: numberKey, col: 4, row: 4 },
  { label: "EXP", insert: "e", name: "Scientific notation exponent", className: `${functionKey} px-1 text-sm`, col: 5, row: 4 },
];

function activePrecision(custom: string, selected: number | null): string {
  const typed = custom.trim();
  if (typed !== "") {
    return typed;
  }
  return selected === null ? "" : String(selected);
}

export function SignificantFiguresCalculatorTool() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const precisionRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<number | null>(null);
  const selectionRef = useRef({ start: 0, end: 0 });
  const [expression, setExpression] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [solveError, setSolveError] = useState("");

  const precision = activePrecision(custom, selected);
  const inspection = useMemo(
    () => inspectSigFigExpression(expression, precision || undefined),
    [expression, precision],
  );

  function rememberSelection() {
    const field = inputRef.current;
    if (!field) {
      return;
    }
    selectionRef.current = {
      start: field.selectionStart ?? selectionRef.current.start,
      end: field.selectionEnd ?? selectionRef.current.end,
    };
  }

  function selectionBounds() {
    const field = inputRef.current;
    if (field && document.activeElement === field) {
      return {
        start: field.selectionStart ?? selectionRef.current.start,
        end: field.selectionEnd ?? selectionRef.current.end,
      };
    }
    return selectionRef.current;
  }

  function placeCaret(next: string, caret: number) {
    caretRef.current = caret;
    selectionRef.current = { start: caret, end: caret };
    setSolveError("");
    setExpression(next);
    window.requestAnimationFrame(() => {
      const field = inputRef.current;
      const pos = caretRef.current;
      if (!field || pos === null) {
        return;
      }
      field.focus();
      field.setSelectionRange(pos, pos);
      caretRef.current = null;
    });
  }

  function insert(text: string) {
    const { start, end } = selectionBounds();
    const next = expression.slice(0, start) + text + expression.slice(end);
    placeCaret(next, start + text.length);
  }

  function backspace() {
    const { start, end } = selectionBounds();
    if (start !== end) {
      placeCaret(expression.slice(0, start) + expression.slice(end), start);
      return;
    }
    if (start === 0) {
      inputRef.current?.focus();
      return;
    }
    placeCaret(expression.slice(0, start - 1) + expression.slice(start), start - 1);
  }

  function clearAll() {
    setExpression("");
    setSelected(null);
    setCustom("");
    setSolveError("");
    selectionRef.current = { start: 0, end: 0 };
    caretRef.current = 0;
    inputRef.current?.focus();
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (inspection.state === "partial") {
      setSolveError("Finish the expression before solving.");
    } else if (inspection.state === "empty") {
      setSolveError("Enter a number.");
    } else {
      setSolveError("");
    }
    resultRef.current?.focus();
  }

  function onExpressionKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      clearAll();
    }
  }

  function onPrecisionKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    event.stopPropagation();
  }

  const actionsRef = useRef({ insert, backspace, clearAll });

  useEffect(() => {
    actionsRef.current = { insert, backspace, clearAll };
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (target.dataset.sigfigPrecision === "true") {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const form = formRef.current;
      const inside =
        target === document.body ||
        target === document.documentElement ||
        (form?.contains(target) ?? false);
      if (!inside) {
        return;
      }
      if (target === inputRef.current || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        actionsRef.current.clearAll();
        return;
      }
      if (event.key === "Backspace") {
        event.preventDefault();
        actionsRef.current.backspace();
        return;
      }
      if (event.key === "Enter") {
        if (target instanceof HTMLButtonElement) {
          return;
        }
        event.preventDefault();
        resultRef.current?.focus();
        return;
      }
      const text = keyToInsert(event.key);
      if (!text) {
        return;
      }
      event.preventDefault();
      actionsRef.current.insert(text);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const ready = inspection.state === "ready" ? inspection.result : undefined;

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-border bg-muted p-4 sm:p-6 lg:p-8">
        <label htmlFor={`${formId}-expression`} className="sr-only">
          Expression
        </label>
        <input
          ref={inputRef}
          id={`${formId}-expression`}
          value={expression}
          onChange={(event) => {
            setSolveError("");
            setExpression(event.target.value);
            selectionRef.current = {
              start: event.target.selectionStart ?? event.target.value.length,
              end: event.target.selectionEnd ?? event.target.value.length,
            };
          }}
          onSelect={rememberSelection}
          onKeyUp={rememberSelection}
          onClick={rememberSelection}
          onKeyDown={onExpressionKeyDown}
          placeholder="EX: 12.11 + 0.3"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          aria-invalid={inspection.state === "invalid" || undefined}
          aria-describedby={`${formId}-status`}
          className="w-full rounded-xl border border-border bg-background px-4 py-3.5 font-mono text-base tabular-nums text-foreground outline-none placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:py-4"
        />

        <p id={`${formId}-status`} className="mt-2 min-h-6 text-sm leading-6 text-foreground" role="status" aria-live="polite">
          <span className="font-medium">Sig figs:</span> {statusLabel(inspection)}
          {inspection.state === "ready" && inspection.result.statusNote ? (
            <span className="text-muted-foreground"> {inspection.result.statusNote}</span>
          ) : null}
        </p>

        <div
          className="mt-4 grid grid-cols-[minmax(2.75rem,0.85fr)_repeat(3,minmax(0,1fr))_minmax(2.75rem,0.85fr)] gap-2 sm:gap-2.5"
          data-sigfig-keypad=""
        >
          {KEYS.map((key) => (
            <button
              key={`${key.name}-${key.row}`}
              type="button"
              aria-label={key.name}
              style={{ gridColumnStart: key.col, gridRowStart: key.row }}
              className={key.className}
              onClick={() => {
                if (key.action === "backspace") {
                  backspace();
                  return;
                }
                if (key.action === "clear") {
                  clearAll();
                  return;
                }
                if (key.insert) {
                  insert(key.insert);
                }
              }}
            >
              {key.label}
            </button>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-[minmax(0,1.35fr)_minmax(2.75rem,0.8fr)_minmax(2.75rem,0.8fr)_minmax(0,1.35fr)] gap-2 sm:mt-2.5 sm:gap-2.5">
          <button type="button" className={clearKey} onClick={clearAll}>
            Clear
          </button>
          <button type="button" className={numberKey} aria-label="Backspace" onClick={backspace}>
            ⌫
          </button>
          <button type="button" className={numberKey} aria-label="Decimal point" onClick={() => insert(".")}>
            .
          </button>
          <button type="submit" className={solveKey}>
            Solve
          </button>
        </div>

        <div className="mt-5">
          <p id={`${formId}-round`} className="text-sm font-medium text-foreground">
            Round to significant figures: <span className="font-normal text-muted-foreground">(optional)</span>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2" role="group" aria-labelledby={`${formId}-round`}>
            {PRESETS.map((preset) => {
              const pressed = custom.trim() === "" && selected === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => {
                    setCustom("");
                    setSelected((current) => (current === preset ? null : preset));
                  }}
                  className={
                    pressed
                      ? "inline-flex size-11 items-center justify-center rounded-lg bg-[#1e3a8a] text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      : "inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  }
                >
                  {preset}
                </button>
              );
            })}
            <input
              ref={precisionRef}
              value={custom}
              onChange={(event) => {
                setCustom(event.target.value);
                setSelected(null);
              }}
              onKeyDown={onPrecisionKeyDown}
              data-sigfig-precision="true"
              inputMode="numeric"
              autoComplete="off"
              aria-label="Custom significant figures"
              className="size-11 rounded-lg border border-border bg-card text-center font-mono text-sm text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </div>
        </div>
      </div>

      {inspection.state === "invalid" ? (
        <div className="mt-4">
          <ToolError>{inspection.error}</ToolError>
        </div>
      ) : solveError ? (
        <div className="mt-4">
          <ToolError>{solveError}</ToolError>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section aria-labelledby={`${formId}-result`} className="rounded-2xl bg-accent-soft px-4 py-4 sm:px-5 sm:py-5">
          <h2 id={`${formId}-result`} className="text-sm font-semibold text-foreground">
            Result
          </h2>
          <div
            ref={resultRef}
            tabIndex={-1}
            className="mt-3 space-y-3 outline-none"
            aria-live="polite"
          >
            {ready ? <ResultBody result={ready} /> : <p className="text-2xl font-semibold text-muted-foreground">—</p>}
          </div>
        </section>

        <section aria-labelledby={`${formId}-explanation`} className="rounded-2xl bg-[#eef0fa] px-4 py-4 sm:px-5 sm:py-5 dark:bg-[#1a1e2e]">
          <h2 id={`${formId}-explanation`} className="text-sm font-semibold text-foreground">
            Explanation
          </h2>
          <div className="mt-3 text-sm leading-6 text-foreground">
            {inspection.state === "invalid" ? (
              <p>{inspection.error}</p>
            ) : ready ? (
              <ol className="list-decimal space-y-2 ps-5">
                {ready.steps.map((step, index) => (
                  <li key={`${index}-${step}`}>{step}</li>
                ))}
              </ol>
            ) : (
              <p>Enter a number to see the result and rounding suggestions.</p>
            )}
          </div>
        </section>
      </div>
    </form>
  );
}

function keyToInsert(key: string): string | undefined {
  if (/^[0-9.()+^]$/.test(key)) {
    return key;
  }
  if (key === "-") {
    return "−";
  }
  if (key === "*") {
    return "×";
  }
  if (key === "/") {
    return "÷";
  }
  if (key === "e" || key === "E") {
    return "e";
  }
  return undefined;
}

function statusLabel(inspection: SigFigInspection): string {
  if (inspection.state !== "ready") {
    return "—";
  }
  return inspection.result.statusLabel;
}

function ResultBody({ result }: { result: SigFigCalculatorSuccess }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!result.copyText) {
      return;
    }
    try {
      await navigator.clipboard.writeText(result.copyText);
    } catch {
      const area = document.createElement("textarea");
      area.value = result.copyText;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const copiedByCommand = document.execCommand("copy");
      area.remove();
      if (!copiedByCommand) {
        setCopied(false);
        return;
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <div>
        <p className="text-sm text-muted-foreground">Value</p>
        <p className="mt-1 break-words font-mono text-2xl font-semibold tracking-tight text-foreground">{result.value}</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          {result.countKnown || /^\d/.test(result.sigFigLabel) ? "Significant figures" : "Precision"}
        </p>
        <p className="mt-1 text-lg font-semibold text-foreground">{result.sigFigLabel}</p>
      </div>
      {result.scientific ? (
        <div>
          <p className="text-sm text-muted-foreground">Scientific notation</p>
          <p className="mt-1 break-words font-mono text-lg text-foreground">{result.scientific}</p>
        </div>
      ) : null}
      {result.roundedDisplay ? (
        <div>
          <p className="text-sm text-muted-foreground">
            Rounded to {result.precision} significant {result.precision === 1 ? "figure" : "figures"}
          </p>
          <p className="mt-1 break-words font-mono text-lg font-semibold text-foreground">{result.roundedDisplay}</p>
        </div>
      ) : null}
      <button
        type="button"
        onClick={copy}
        disabled={!result.copyText}
        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </>
  );
}
