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
import { calculateAutoLoan } from "@/lib/tools/auto-loan";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function AutoLoanCalculatorTool() {
  const [price, setPrice] = useState("30000");
  const [down, setDown] = useState("3000");
  const [trade, setTrade] = useState("0");
  const [taxRate, setTaxRate] = useState("0");
  const [fees, setFees] = useState("0");
  const [apr, setApr] = useState("6");
  const [months, setMonths] = useState("60");
  const [addons, setAddons] = useState("0");
  const [insurance, setInsurance] = useState("");
  const [fuel, setFuel] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [showMonthly, setShowMonthly] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAutoLoan>>();

  function calculate() {
    const next = calculateAutoLoan({
      priceRaw: price,
      downRaw: down,
      tradeRaw: trade,
      taxRateRaw: taxRate,
      feesRaw: fees,
      aprRaw: apr,
      monthsRaw: months,
      addonsRaw: addons,
      insuranceRaw: insurance,
      fuelRaw: fuel,
      maintenanceRaw: maintenance,
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
    setPrice("30000");
    setDown("3000");
    setTrade("0");
    setTaxRate("0");
    setFees("0");
    setApr("6");
    setMonths("60");
    setAddons("0");
    setInsurance("");
    setFuel("");
    setMaintenance("");
    setShowMonthly(false);
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Amount financed: ${money(result.amountFinanced)}\nMonthly payment: ${money(result.payment)}\nTotal interest: ${money(result.totalInterest)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Estimated auto loan from the price, tax rate, fees, and APR you enter. This is not a lender offer or an approval.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="auto-price" label="Vehicle price (USD)">
          <input id="auto-price" inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-down" label="Down payment (USD)" hint="Cash paid at purchase. It reduces the amount financed.">
          <input id="auto-down" inputMode="decimal" value={down} onChange={(event) => setDown(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-trade" label="Trade-in value (USD)" hint="Credit toward the amount financed. It is not a state tax rule.">
          <input id="auto-trade" inputMode="decimal" value={trade} onChange={(event) => setTrade(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-tax" label="Sales tax rate (%)" hint="Enter the rate that applies to you. This page does not pick a state rate.">
          <input id="auto-tax" inputMode="decimal" value={taxRate} onChange={(event) => setTaxRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-fees" label="Title, registration, and dealer fees (USD)">
          <input id="auto-fees" inputMode="decimal" value={fees} onChange={(event) => setFees(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-addons" label="Optional add-ons (USD)">
          <input id="auto-addons" inputMode="decimal" value={addons} onChange={(event) => setAddons(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-apr" label="APR (%)" hint="Example rate for the payment formula. Not a live offer.">
          <input id="auto-apr" inputMode="decimal" value={apr} onChange={(event) => setApr(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-term" label="Loan term (months)">
          <input id="auto-term" inputMode="numeric" value={months} onChange={(event) => setMonths(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[36, 48, 60, 72].map((choice) => (
          <Button key={choice} type="button" variant={months === String(choice) ? "primary" : "secondary"} onClick={() => setMonths(String(choice))}>
            {choice} months
          </Button>
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <ToolField id="auto-insurance" label="Insurance per month (USD)" hint="Optional estimate you type. Not an average.">
          <input id="auto-insurance" inputMode="decimal" value={insurance} onChange={(event) => setInsurance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-fuel" label="Fuel per month (USD)" hint="Optional estimate you type.">
          <input id="auto-fuel" inputMode="decimal" value={fuel} onChange={(event) => setFuel(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="auto-maintenance" label="Maintenance per month (USD)" hint="Optional estimate you type.">
          <input id="auto-maintenance" inputMode="decimal" value={maintenance} onChange={(event) => setMaintenance(event.target.value)} className={toolControlClass} />
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
              { label: "Amount financed", value: money(result.amountFinanced) },
              { label: "Estimated monthly payment", value: money(result.payment) },
              { label: "Total interest", value: money(result.totalInterest) },
              { label: "Total of payments", value: money(result.totalPayments) },
              { label: "Total purchase cost", value: money(result.totalPurchaseCost) },
            ]}
          />
          <ToolOutput label="How the amount financed is built">
            <ul className="space-y-1 text-sm leading-6">
              <li>Vehicle price: {money(result.vehiclePrice)}</li>
              <li>Sales tax: {money(result.salesTax)}</li>
              <li>Fees: {money(result.fees)}</li>
              <li>Add-ons: {money(result.addons)}</li>
              <li>Down payment: {money(result.downPayment)}</li>
              <li>Trade-in: {money(result.tradeIn)}</li>
              <li>Amount financed: {money(result.amountFinanced)}</li>
            </ul>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Sales tax is the vehicle price times the rate you enter. Trade-in is subtracted after that. States treat tax on a trade-in differently, so this page does not apply one national rule.
            </p>
          </ToolOutput>
          {result.ownershipMonthly !== null ? (
            <ToolOutput label="Estimated monthly vehicle ownership cost">
              <p className="text-sm leading-6">
                {money(result.ownershipMonthly)}. This adds the payment to the insurance, fuel, and maintenance amounts you typed. It is not a national average.
              </p>
            </ToolOutput>
          ) : null}
          <ToolOutput label="Term comparison">
            <p className="mb-2 text-sm leading-6">Same amount financed and APR. No term is labeled as the best choice.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Term</th>
                    <th className="py-2 pr-3 font-medium">Monthly payment</th>
                    <th className="py-2 pr-3 font-medium">Total interest</th>
                    <th className="py-2 font-medium">Total of payments</th>
                  </tr>
                </thead>
                <tbody>
                  {result.comparison.map((row) => (
                    <tr key={row.months} className="border-b border-border">
                      <td className="py-2 pr-3">{row.months} months{row.months === result.months ? " (your term)" : ""}</td>
                      <td className="py-2 pr-3">{money(row.payment)}</td>
                      <td className="py-2 pr-3">{money(row.totalInterest)}</td>
                      <td className="py-2">{money(row.totalPayments)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
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
