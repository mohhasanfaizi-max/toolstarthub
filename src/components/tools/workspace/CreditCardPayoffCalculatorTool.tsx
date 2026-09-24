"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateCreditCardPayoff } from "@/lib/tools/credit-card-payoff";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

function estimatedMonth(months: number) {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function CreditCardPayoffCalculatorTool() {
  const [balance, setBalance] = useState("5000");
  const [apr, setApr] = useState("22");
  const [percent, setPercent] = useState("2");
  const [floor, setFloor] = useState("25");
  const [desired, setDesired] = useState("200");
  const [extra, setExtra] = useState("0");
  const [showMonthly, setShowMonthly] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateCreditCardPayoff>>();

  function calculate() {
    const next = calculateCreditCardPayoff({
      balanceRaw: balance,
      aprRaw: apr,
      percentRaw: percent,
      floorRaw: floor,
      desiredRaw: desired,
      extraRaw: extra,
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
    setBalance("5000");
    setApr("22");
    setPercent("2");
    setFloor("25");
    setDesired("200");
    setExtra("0");
    setShowMonthly(false);
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Monthly payment: ${money(result.payment)}\nMonths: ${result.months}\nTotal interest: ${money(result.totalInterest)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        An estimate from the APR and payment rules you enter. Card issuers can bill interest on a different cycle, so this is not an exact statement.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="card-balance" label="Current balance (USD)">
          <input id="card-balance" inputMode="decimal" value={balance} onChange={(event) => setBalance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="card-apr" label="APR (%)" hint="Example rate for this estimate. Not a live card offer.">
          <input id="card-apr" inputMode="decimal" value={apr} onChange={(event) => setApr(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="card-percent" label="Minimum payment percentage (%)" hint="Percent of the balance at the start of the month. Issuers differ.">
          <input id="card-percent" inputMode="decimal" value={percent} onChange={(event) => setPercent(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="card-floor" label="Minimum payment floor (USD)" hint="The payment is at least this amount, unless the balance is smaller.">
          <input id="card-floor" inputMode="decimal" value={floor} onChange={(event) => setFloor(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="card-desired" label="Fixed monthly payment (USD)" hint="Leave blank to use the minimum formula for the main result.">
          <input id="card-desired" inputMode="decimal" value={desired} onChange={(event) => setDesired(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="card-extra" label="Additional monthly payment (USD)">
          <input id="card-extra" inputMode="decimal" value={extra} onChange={(event) => setExtra(event.target.value)} className={toolControlClass} />
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
              { label: "Monthly payment", value: money(result.payment) },
              { label: "Months to payoff", value: String(result.months) },
              { label: "Estimated payoff month", value: estimatedMonth(result.months) },
              { label: "Total interest", value: money(result.totalInterest) },
              { label: "Total amount paid", value: money(result.totalPaid) },
              { label: "Interest versus the minimum plan", value: money(result.interestSaved) },
            ]}
          />
          <p className="text-sm leading-6 text-muted-foreground">
            The month count starts from the month you begin these payments. A lender may post interest on a different schedule.
          </p>
          <ToolOutput label="Payment scenarios">
            <p className="mb-2 text-sm leading-6">Same balance and APR. No scenario is labeled as the better choice.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Scenario</th>
                    <th className="py-2 pr-3 font-medium">Payment</th>
                    <th className="py-2 pr-3 font-medium">Months</th>
                    <th className="py-2 font-medium">Total interest</th>
                  </tr>
                </thead>
                <tbody>
                  {result.scenarios.map((row) => (
                    <tr key={row.id} className="border-b border-border">
                      <td className="py-2 pr-3">{row.label}</td>
                      {row.ok ? (
                        <>
                          <td className="py-2 pr-3">{money(row.payment)}</td>
                          <td className="py-2 pr-3">{row.months}</td>
                          <td className="py-2">{money(row.totalInterest)}</td>
                        </>
                      ) : (
                        <td className="py-2" colSpan={3}>{row.error}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
          <Button type="button" variant="secondary" onClick={() => setShowMonthly((open) => !open)}>
            {showMonthly ? "Hide monthly schedule" : "Show monthly schedule"}
          </Button>
          {showMonthly ? (
            <ToolOutput label="Monthly schedule">
              <div className="max-h-80 overflow-auto">
                <table className="w-full min-w-[32rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-3 font-medium">Month</th>
                      <th className="py-2 pr-3 font-medium">Payment</th>
                      <th className="py-2 pr-3 font-medium">Interest</th>
                      <th className="py-2 pr-3 font-medium">Principal</th>
                      <th className="py-2 font-medium">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.month} className="border-b border-border">
                        <td className="py-2 pr-3">{row.month}</td>
                        <td className="py-2 pr-3">{money(row.payment)}</td>
                        <td className="py-2 pr-3">{money(row.interest)}</td>
                        <td className="py-2 pr-3">{money(row.principal)}</td>
                        <td className="py-2">{money(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ToolOutput>
          ) : null}
        </div>
      ) : null}
    </ToolPanel>
  );
}
