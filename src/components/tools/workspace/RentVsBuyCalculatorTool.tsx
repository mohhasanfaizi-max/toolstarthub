"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateRentVsBuy } from "@/lib/tools/rent-vs-buy";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function RentVsBuyCalculatorTool() {
  const [rent, setRent] = useState("1800");
  const [rentGrowth, setRentGrowth] = useState("0");
  const [price, setPrice] = useState("350000");
  const [down, setDown] = useState("70000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("30");
  const [tax, setTax] = useState("0");
  const [insurance, setInsurance] = useState("0");
  const [hoa, setHoa] = useState("0");
  const [maintenance, setMaintenance] = useState("0");
  const [valueChange, setValueChange] = useState("0");
  const [years, setYears] = useState("5");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateRentVsBuy>>();

  function calculate() {
    const next = calculateRentVsBuy({
      rentRaw: rent,
      rentGrowthRaw: rentGrowth,
      priceRaw: price,
      downRaw: down,
      rateRaw: rate,
      termYearsRaw: term,
      taxRaw: tax,
      insuranceRaw: insurance,
      hoaRaw: hoa,
      maintenanceRaw: maintenance,
      valueChangeRaw: valueChange,
      yearsRaw: years,
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
    setRent("1800");
    setRentGrowth("0");
    setPrice("350000");
    setDown("70000");
    setRate("6.5");
    setTerm("30");
    setTax("0");
    setInsurance("0");
    setHoa("0");
    setMaintenance("0");
    setValueChange("0");
    setYears("5");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Rent net cost: ${money(result.netRent)}\nBuy net cost: ${money(result.netBuy)}\nDifference: ${money(result.difference)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        An estimate from the rent change and home-value change you enter. Those rates are assumptions, not forecasts. The page does not say which choice is better.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="rvb-rent" label="Monthly rent (USD)">
          <input id="rvb-rent" inputMode="decimal" value={rent} onChange={(event) => setRent(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-growth" label="Annual rent change (%)" hint="Use 0 if rent stays the same. A negative number lowers rent each year.">
          <input id="rvb-growth" inputMode="decimal" value={rentGrowth} onChange={(event) => setRentGrowth(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-price" label="Home price (USD)">
          <input id="rvb-price" inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-down" label="Down payment (USD)">
          <input id="rvb-down" inputMode="decimal" value={down} onChange={(event) => setDown(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-rate" label="Mortgage interest rate (%)" hint="Example rate for this estimate. Not a live offer.">
          <input id="rvb-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-term" label="Loan term (years)">
          <input id="rvb-term" inputMode="numeric" value={term} onChange={(event) => setTerm(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-tax" label="Property tax per year (USD)" hint="Blank counts as 0. It stays at the amount you type.">
          <input id="rvb-tax" inputMode="decimal" value={tax} onChange={(event) => setTax(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-ins" label="Insurance per year (USD)">
          <input id="rvb-ins" inputMode="decimal" value={insurance} onChange={(event) => setInsurance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-hoa" label="HOA per month (USD)">
          <input id="rvb-hoa" inputMode="decimal" value={hoa} onChange={(event) => setHoa(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-maint" label="Maintenance per year (USD)">
          <input id="rvb-maint" inputMode="decimal" value={maintenance} onChange={(event) => setMaintenance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-value" label="Expected annual home-value change (%)" hint="An assumption. Use 0 to keep the price flat, or a negative number if the value falls.">
          <input id="rvb-value" inputMode="decimal" value={valueChange} onChange={(event) => setValueChange(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="rvb-years" label="Comparison period (years)">
          <input id="rvb-years" inputMode="numeric" value={years} onChange={(event) => setYears(event.target.value)} className={toolControlClass} />
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
        <div className="mt-6 space-y-3">
          <ToolStatGrid
            items={[
              { label: "Estimated rent paid", value: money(result.totalRent) },
              { label: "Estimated buying cash costs", value: money(result.buyingCash) },
              { label: "Remaining loan balance", value: money(result.remainingBalance) },
              { label: "Estimated home value", value: money(result.homeValue) },
              { label: "Estimated home equity", value: money(result.equity) },
              { label: "Estimated net cost of renting", value: money(result.netRent) },
              { label: "Estimated net cost of buying", value: money(result.netBuy) },
              { label: "Rent cost minus buy cost", value: money(result.difference) },
            ]}
          />
          <p className="text-sm leading-6 text-muted-foreground">
            Net buying cost is cash paid minus estimated equity. A positive difference means the rent total is higher than that net buying cost under these assumptions.
          </p>
        </div>
      ) : null}
    </ToolPanel>
  );
}
