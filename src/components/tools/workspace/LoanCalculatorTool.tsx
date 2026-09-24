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
  const [error, setError] = useState("");
  const [showMonthly, setShowMonthly] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateLoan>>();

  function calculate() {
    const next = calculateLoan(amount, rate, term, unit, fee);
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
    setShowMonthly(false);
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
          <ScheduleTable rows={result.yearly} label="Year" />
          <Button type="button" variant="secondary" onClick={() => setShowMonthly((open) => !open)}>
            {showMonthly ? "Hide monthly schedule" : "Show monthly schedule"}
          </Button>
          {showMonthly ? <ScheduleTable rows={result.monthly} label="Month" /> : null}
        </div>
      ) : null}
    </ToolPanel>
  );
}

function ScheduleTable({
  rows,
  label,
}: {
  rows: Array<{ year: number; principalPaid: number; interestPaid: number; balance: number }>;
  label: string;
}) {
  return (
    <ToolOutput label={label === "Year" ? "Yearly schedule" : "Monthly schedule"}>
      <div className="max-h-80 overflow-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-3 font-medium">{label}</th>
              <th className="py-2 pr-3 font-medium">Principal paid</th>
              <th className="py-2 pr-3 font-medium">Interest paid</th>
              <th className="py-2 font-medium">Remaining balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${label}-${row.year}-${row.balance}`} className="border-b border-border">
                <td className="py-2 pr-3">{row.year}</td>
                <td className="py-2 pr-3">{money(row.principalPaid)}</td>
                <td className="py-2 pr-3">{money(row.interestPaid)}</td>
                <td className="py-2">{money(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ToolOutput>
  );
}
