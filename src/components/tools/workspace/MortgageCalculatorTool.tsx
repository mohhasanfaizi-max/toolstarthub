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
import { calculateMortgage } from "@/lib/tools/mortgage";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function MortgageCalculatorTool() {
  const [price, setPrice] = useState("400000");
  const [downMode, setDownMode] = useState<"amount" | "percent">("percent");
  const [down, setDown] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");
  const [tax, setTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [hoa, setHoa] = useState("");
  const [pmi, setPmi] = useState("");
  const [extra, setExtra] = useState("");
  const [oneTime, setOneTime] = useState("");
  const [showMonthly, setShowMonthly] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateMortgage>>();

  function calculate() {
    const next = calculateMortgage({
      priceRaw: price,
      downRaw: down,
      downMode,
      rateRaw: rate,
      yearsRaw: years,
      taxRaw: tax,
      insuranceRaw: insurance,
      hoaRaw: hoa,
      pmiRaw: pmi,
      extraMonthlyRaw: extra,
      oneTimeRaw: oneTime,
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
    setPrice("400000");
    setDownMode("percent");
    setDown("20");
    setRate("6.5");
    setYears("30");
    setTax("");
    setInsurance("");
    setHoa("");
    setPmi("");
    setExtra("");
    setOneTime("");
    setShowMonthly(false);
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Principal and interest: ${money(result.payment)}\nEstimated housing cost: ${money(result.housingPayment)}\nLoan amount: ${money(result.loanAmount)}`
    : "";

  const breakdown = result?.ok
    ? [
        { label: "Principal and interest", value: money(result.payment) },
        result.taxMonthly > 0 ? { label: "Property tax", value: money(result.taxMonthly) } : null,
        result.insuranceMonthly > 0 ? { label: "Homeowners insurance", value: money(result.insuranceMonthly) } : null,
        result.pmiMonthly > 0 ? { label: "PMI", value: money(result.pmiMonthly) } : null,
        result.hoaMonthly > 0 ? { label: "HOA", value: money(result.hoaMonthly) } : null,
      ].filter((item): item is { label: string; value: string } => item !== null)
    : [];

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Estimates are for educational purposes and are based on the information you enter. Mortgage estimates vary by lender, location, property, loan program, taxes, insurance, credit profile, and other factors. The 6.5% field is an example rate, not a live quote.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="mortgage-price" label="Home price (USD)">
          <input id="mortgage-price" inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-rate" label="Interest rate (%)">
          <input id="mortgage-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-down" label={downMode === "percent" ? "Down payment (%)" : "Down payment (USD)"}>
          <input id="mortgage-down" inputMode="decimal" value={down} onChange={(event) => setDown(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-years" label="Loan term (years)" hint="15 and 30 are common. Any whole number from 1 to 50 works.">
          <input id="mortgage-years" inputMode="numeric" value={years} onChange={(event) => setYears(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant={years === "15" ? "primary" : "secondary"} onClick={() => setYears("15")}>15 years</Button>
        <Button type="button" variant={years === "30" ? "primary" : "secondary"} onClick={() => setYears("30")}>30 years</Button>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Down payment as"
          name="mortgage-down-mode"
          value={downMode}
          onChange={(next) => {
            const priceValue = Number(price);
            const downValue = Number(down);
            if (Number.isFinite(priceValue) && priceValue > 0 && Number.isFinite(downValue)) {
              if (next === "amount" && downMode === "percent") {
                setDown(String(Math.round((priceValue * downValue) / 100 * 100) / 100));
              }
              if (next === "percent" && downMode === "amount") {
                setDown(String(Math.round((downValue / priceValue) * 100 * 100) / 100));
              }
            }
            setDownMode(next);
          }}
          options={[
            { id: "percent", label: "Percentage" },
            { id: "amount", label: "Dollar amount" },
          ]}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="mortgage-tax" label="Property tax per year (USD)" hint="Optional. Leave blank for 0.">
          <input id="mortgage-tax" inputMode="decimal" value={tax} onChange={(event) => setTax(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-insurance" label="Homeowners insurance per year (USD)" hint="Optional.">
          <input id="mortgage-insurance" inputMode="decimal" value={insurance} onChange={(event) => setInsurance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-hoa" label="HOA per month (USD)" hint="Optional.">
          <input id="mortgage-hoa" inputMode="decimal" value={hoa} onChange={(event) => setHoa(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-pmi" label="PMI per month (USD)" hint="Optional. Enter the amount you were quoted. This page does not look it up.">
          <input id="mortgage-pmi" inputMode="decimal" value={pmi} onChange={(event) => setPmi(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-extra" label="Extra payment each month (USD)" hint="Optional. Applied to principal in this estimate.">
          <input id="mortgage-extra" inputMode="decimal" value={extra} onChange={(event) => setExtra(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="mortgage-once" label="One-time extra payment (USD)" hint="Optional. Applied at the start of the estimate.">
          <input id="mortgage-once" inputMode="decimal" value={oneTime} onChange={(event) => setOneTime(event.target.value)} className={toolControlClass} />
        </ToolField>
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
              { label: "Monthly principal and interest", value: money(result.payment) },
              { label: "Estimated full monthly housing cost", value: money(result.housingPayment) },
              { label: "Loan amount", value: money(result.loanAmount) },
              { label: "Down payment", value: money(result.downPayment) },
              { label: "Total interest", value: money(result.totalInterest) },
              { label: "Total principal", value: money(result.totalPrincipal) },
              { label: "Total of principal and interest", value: money(result.totalPayments) },
            ]}
          />
          <ToolOutput label="Monthly breakdown">
            <ul className="space-y-1 text-sm leading-6">
              {breakdown.map((item) => (
                <li key={item.label}>{item.label}: {item.value}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Blank optional costs stay at 0. A borrower does not automatically have tax, insurance, PMI, or HOA.</p>
          </ToolOutput>
          <ToolOutput label="15-year and 30-year comparison">
            <p className="mb-2 text-sm leading-6">Same home price, down payment, and rate. Neither term is always the better choice.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Term</th>
                    <th className="py-2 pr-3 font-medium">Principal and interest</th>
                    <th className="py-2 pr-3 font-medium">Total interest</th>
                    <th className="py-2 font-medium">Total paid</th>
                  </tr>
                </thead>
                <tbody>
                  {result.comparison.map((row) => (
                    <tr key={row.term} className="border-b border-border">
                      <td className="py-2 pr-3">{row.term} years</td>
                      <td className="py-2 pr-3">{money(row.payment)}</td>
                      <td className="py-2 pr-3">{money(row.totalInterest)}</td>
                      <td className="py-2">{money(row.totalPayments)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
          {result.payoff ? (
            <ToolOutput label="Extra payment estimate">
              <p className="text-sm leading-6">
                Payoff in {result.payoff.monthsPaid} months, which is {result.payoff.monthsSaved} months sooner than the original term. Interest falls from {money(result.payoff.originalInterest)} to {money(result.payoff.interest)}, a difference of {money(result.payoff.interestSaved)}. A lender may apply extra payments differently.
              </p>
            </ToolOutput>
          ) : null}
          <Schedule rows={result.yearly} label="Year" />
          <Button type="button" variant="secondary" onClick={() => setShowMonthly((open) => !open)}>
            {showMonthly ? "Hide monthly schedule" : "Show monthly schedule"}
          </Button>
          {showMonthly ? <Schedule rows={result.monthly} label="Month" /> : null}
        </div>
      ) : null}
    </ToolPanel>
  );
}

function Schedule({
  rows,
  label,
}: {
  rows: Array<{ year: number; principalPaid: number; interestPaid: number; balance: number }>;
  label: string;
}) {
  if (rows.length === 0) return null;
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
