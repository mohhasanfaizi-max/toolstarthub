"use client";

import { useState } from "react";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { estimateUnemployment, getStateRule, type UnemploymentResult } from "@/lib/tools/unemployment";
import { SUPPORTED_STATES, UNSUPPORTED_STATES } from "@/lib/tools/unemployment-states";
import { goldBtn, goldCard, goldGhost } from "./goldUi";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function UnemploymentBenefitsCalculatorTool() {
  const [state, setState] = useState("CA");
  const [quarters, setQuarters] = useState(["", "", "", ""]);
  const [result, setResult] = useState<UnemploymentResult | null>(null);
  const rule = getStateRule(state);

  const summary =
    result && result.ok
      ? [`${result.state.name} estimate`, `Weekly benefit: ${usd(result.weekly)}`, `Maximum claim total: ${usd(result.maxTotal)}`, ...result.steps, "Estimate only. The state agency makes the official determination."].join("\n")
      : "";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="ub-state" label="State">
          <select id="ub-state" value={state} onChange={(e) => { setState(e.target.value); setResult(null); }} className={toolControlClass}>
            <optgroup label="Supported (rules verified)">
              {SUPPORTED_STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
            </optgroup>
            <optgroup label="Not supported yet">
              {UNSUPPORTED_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </optgroup>
          </select>
        </ToolField>
      </div>

      {!rule ? (
        <div className="mt-5 rounded-2xl border border-[#C9A227] bg-[#FBF8EC] p-4 text-sm text-[#1f1a08] dark:bg-[#C9A227]/10 dark:text-foreground" role="status">
          <p className="font-semibold">{state} is not supported yet.</p>
          <p className="mt-1">
            We only estimate states whose formula we have checked against the official agency source. For {state}, use the state
            unemployment agency&apos;s own benefit estimator or call the agency. You can find every state agency through{" "}
            <a className="underline" href="https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx" target="_blank" rel="noopener noreferrer">CareerOneStop (US Department of Labor)</a>.
          </p>
        </div>
      ) : (
        <>
          <fieldset className="mt-5">
            <legend className="text-sm font-semibold">Gross wages in each base-period quarter</legend>
            <p className="mt-1 text-xs text-muted-foreground">{rule.basePeriod}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quarters.map((q, i) => (
                <div key={i}>
                  <label htmlFor={`ub-q${i}`} className="block text-sm font-medium">Quarter {i + 1} ($)</label>
                  <input id={`ub-q${i}`} inputMode="decimal" value={q} onChange={(e) => setQuarters(quarters.map((x, j) => (j === i ? e.target.value : x)))} className={toolControlClass} />
                </div>
              ))}
            </div>
          </fieldset>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" className={goldBtn} onClick={() => setResult(estimateUnemployment(state, quarters))}>Estimate benefits</button>
            <CopyButton value={summary} label="Copy estimate" />
            <button type="button" className={goldGhost} onClick={() => { setQuarters(["", "", "", ""]); setResult(null); }}>Clear</button>
          </div>
          {result && !result.ok ? <div className="mt-4"><ToolError>{result.error}</ToolError></div> : null}
          {result && result.ok ? (
            <div className="mt-6 space-y-4" aria-live="polite">
              {!result.eligible ? (
                <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:bg-red-950/30 dark:text-red-200">
                  <p className="font-semibold">These wages may not meet the monetary requirement.</p>
                  <ul className="mt-2 list-disc pl-5">{result.reasons.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className={goldCard}><p className="text-sm text-[#A8841A]">Estimated weekly benefit</p><p className="mt-1 text-2xl font-semibold">{usd(result.weekly)}</p></div>
                <div className={goldCard}><p className="text-sm text-[#A8841A]">Maximum claim total</p><p className="mt-1 text-2xl font-semibold">{usd(result.maxTotal)}</p></div>
                <div className={goldCard}><p className="text-sm text-[#A8841A]">Maximum weeks</p><p className="mt-1 text-2xl font-semibold">{result.maxWeeks}</p></div>
              </div>
              <ol className="list-decimal space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                {result.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          ) : null}
          <div className="mt-6 rounded-2xl border border-border p-4 text-sm">
            <p className="font-semibold">{rule.name} rules used</p>
            <dl className="mt-2 grid gap-2 sm:grid-cols-2">
              <div><dt className="text-muted-foreground">Agency</dt><dd>{rule.agency}</dd></div>
              <div><dt className="text-muted-foreground">Weekly range</dt><dd>{usd(rule.minWeekly)} to {usd(rule.maxWeekly)}</dd></div>
              <div><dt className="text-muted-foreground">Duration</dt><dd>{rule.duration}</dd></div>
              <div><dt className="text-muted-foreground">Dependents</dt><dd>{rule.dependents}</dd></div>
              <div className="sm:col-span-2"><dt className="text-muted-foreground">Formula</dt><dd>{rule.method}</dd></div>
              <div><dt className="text-muted-foreground">Effective</dt><dd>{rule.effectiveDate}</dd></div>
              <div><dt className="text-muted-foreground">Last checked</dt><dd>{rule.lastChecked}</dd></div>
            </dl>
            <p className="mt-3 text-muted-foreground">Sources:</p>
            <ul className="mt-1 space-y-1">
              {rule.sourceUrls.map((u) => (
                <li key={u} className="break-all"><a className="text-[#A8841A] underline" href={u} target="_blank" rel="noopener noreferrer">{u}</a></li>
              ))}
            </ul>
          </div>
        </>
      )}
      <p className="mt-6 rounded-xl bg-[#F7F0D8] p-3 text-xs leading-5 text-[#1f1a08] dark:bg-[#C9A227]/10 dark:text-foreground">
        This calculator provides an estimate for informational purposes only. It does not determine eligibility, guarantee
        benefits, or replace an official unemployment agency decision. Actual payments depend on state regulations and individual
        circumstances. Nothing you enter leaves your browser.
      </p>
    </ToolPanel>
  );
}
