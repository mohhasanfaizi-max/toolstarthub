"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculatePaycheck, type PayFrequency, type WithholdingMode } from "@/lib/tools/paycheck";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function PaycheckEstimatorTool() {
  const [gross, setGross] = useState("1000");
  const [frequency, setFrequency] = useState<PayFrequency>("biweekly");
  const [preTax, setPreTax] = useState("0");
  const [mode, setMode] = useState<WithholdingMode>("percent");
  const [withholding, setWithholding] = useState("10");
  const [postTax, setPostTax] = useState("0");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculatePaycheck>>();

  function calculate() {
    const next = calculatePaycheck({
      grossRaw: gross,
      frequency,
      preTaxRaw: preTax,
      withholdingMode: mode,
      withholdingRaw: withholding,
      postTaxRaw: postTax,
    });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setGross("1000");
    setFrequency("biweekly");
    setPreTax("0");
    setMode("percent");
    setWithholding("10");
    setPostTax("0");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok ? `Net paycheck: ${money(result.net)}\nAnnual net: ${money(result.annualNet)}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Withholding is the percent or dollar amount you type. This is not an official federal, state, or local tax calculation.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="pay-gross" label="Gross pay this paycheck (USD)">
          <input id="pay-gross" inputMode="decimal" value={gross} onChange={(event) => setGross(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="pay-pretax" label="Pre-tax deductions (USD)" hint="Blank counts as 0. Taken out before withholding.">
          <input id="pay-pretax" inputMode="decimal" value={preTax} onChange={(event) => setPreTax(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="pay-withhold" label={mode === "percent" ? "Withholding (%)" : "Withholding (USD)"}>
          <input id="pay-withhold" inputMode="decimal" value={withholding} onChange={(event) => setWithholding(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="pay-post" label="Post-tax deductions (USD)" hint="Blank counts as 0. Taken out after withholding.">
          <input id="pay-post" inputMode="decimal" value={postTax} onChange={(event) => setPostTax(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 space-y-4">
        <ToolChoiceGroup
          legend="Pay frequency"
          name="pay-frequency"
          value={frequency}
          onChange={setFrequency}
          options={[
            { id: "weekly", label: "Weekly" },
            { id: "biweekly", label: "Every two weeks" },
            { id: "semimonthly", label: "Twice a month" },
            { id: "monthly", label: "Monthly" },
          ]}
        />
        <ToolChoiceGroup
          legend="Withholding entry"
          name="pay-withhold-mode"
          value={mode}
          onChange={setMode}
          options={[
            { id: "percent", label: "Percent" },
            { id: "amount", label: "Dollar amount" },
          ]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={reset}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid
            items={[
              { label: "Gross paycheck", value: money(result.gross) },
              { label: "Pre-tax deductions", value: money(result.preTax) },
              { label: "Pay used for withholding", value: money(result.basis) },
              { label: "Estimated withholding", value: money(result.withholding) },
              { label: "Post-tax deductions", value: money(result.postTax) },
              { label: "Estimated net paycheck", value: money(result.net) },
              { label: "Estimated annual gross", value: money(result.annualGross) },
              { label: "Estimated annual net", value: money(result.annualNet) },
            ]}
          />
        </div>
      ) : null}
    </ToolPanel>
  );
}
