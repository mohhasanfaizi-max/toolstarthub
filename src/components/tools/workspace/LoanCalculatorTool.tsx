"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { AmortizationSchedule } from "@/components/tools/AmortizationSchedule";
import { RegionalFinanceNote } from "@/components/tools/RegionalFinanceNote";
import { calculateLoan } from "@/lib/tools/loan";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function LoanCalculatorTool() {
  const [amount, setAmount] = useState("20000");
  const [rate, setRate] = useState("7");
  const [term, setTerm] = useState("5");
  const [unit, setUnit] = useState<"years" | "months">("years");
  const [fee, setFee] = useState("0");
  const [extra, setExtra] = useState("");
  const [oneTime, setOneTime] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateLoan>>();

  function calculate() {
    const next = calculateLoan(amount, rate, term, unit, fee, extra, oneTime);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setAmount("20000");
    setRate("7");
    setTerm("5");
    setUnit("years");
    setFee("0");
    setExtra("");
    setOneTime("");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Estimated monthly payment: ${money(result.payment)}\nTotal interest: ${money(result.totalInterest)}\nTotal cost: ${money(result.totalCost)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Estimated payment based on the information entered. This is not a lender offer.
      </p>
      <RegionalFinanceNote variant="loan" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="loan-amount" label="Loan amount (USD)">
          <input id="loan-amount" inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="loan-rate" label="Annual interest rate (%)">
          <input id="loan-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="loan-term" label="Loan term">
          <input id="loan-term" inputMode="numeric" value={term} onChange={(event) => setTerm(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="loan-fee" label="Optional fee (USD)" hint="Added to the total cost. It is not financed into the payment.">
          <input id="loan-fee" inputMode="decimal" value={fee} onChange={(event) => setFee(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="loan-extra" label="Extra payment each month (USD)" hint="Optional. Applied to principal in this estimate.">
          <input id="loan-extra" inputMode="decimal" value={extra} onChange={(event) => setExtra(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="loan-once" label="One-time extra payment (USD)" hint="Optional. Applied at the start of the estimate.">
          <input id="loan-once" inputMode="decimal" value={oneTime} onChange={(event) => setOneTime(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Term unit"
          name="loan-unit"
          value={unit}
          onChange={setUnit}
          options={[
            { id: "years", label: "Years" },
            { id: "months", label: "Months" },
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
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Estimated monthly payment", value: money(result.payment) },
              { label: "Loan amount", value: money(result.principal) },
              { label: "Total interest", value: money(result.totalInterest) },
              { label: "Fee", value: money(result.fee) },
              { label: "Total of payments", value: money(result.totalPaid) },
              { label: "Total cost including fee", value: money(result.totalCost) },
            ]}
          />
          {result.payoff ? (
            <ToolOutput label="Extra payment estimate">
              <p className="text-sm leading-6">
                Payoff in {result.payoff.monthsPaid} months, which is {result.payoff.monthsSaved} months sooner than the original term. Interest falls from {money(result.payoff.originalInterest)} to {money(result.payoff.interest)}, a difference of {money(result.payoff.interestSaved)}. A lender may apply extra payments differently.
              </p>
            </ToolOutput>
          ) : null}
          <AmortizationSchedule yearly={result.yearly} monthly={result.monthly} idPrefix="loan" />
        </div>
      ) : null}
    </ToolPanel>
  );
}

