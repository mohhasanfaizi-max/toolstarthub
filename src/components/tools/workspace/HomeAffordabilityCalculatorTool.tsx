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
import { calculateHomeAffordability } from "@/lib/tools/home-affordability";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function HomeAffordabilityCalculatorTool() {
  const [income, setIncome] = useState("120000");
  const [debt, setDebt] = useState("500");
  const [downMode, setDownMode] = useState<"amount" | "percent">("percent");
  const [down, setDown] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");
  const [taxRate, setTaxRate] = useState("1");
  const [insurance, setInsurance] = useState("");
  const [hoa, setHoa] = useState("");
  const [pmi, setPmi] = useState("");
  const [dti, setDti] = useState("36");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateHomeAffordability>>();

  function calculate() {
    const next = calculateHomeAffordability({
      incomeRaw: income,
      debtRaw: debt,
      downRaw: down,
      downMode,
      rateRaw: rate,
      yearsRaw: years,
      taxRateRaw: taxRate,
      insuranceRaw: insurance,
      hoaRaw: hoa,
      pmiRaw: pmi,
      dtiRaw: dti,
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
    setIncome("120000");
    setDebt("500");
    setDownMode("percent");
    setDown("20");
    setRate("6.5");
    setYears("30");
    setTaxRate("1");
    setInsurance("");
    setHoa("");
    setPmi("");
    setDti("36");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Estimated affordable home price: ${money(result.homePrice)}\nEstimated loan amount: ${money(result.loanAmount)}\nEstimated housing cost: ${money(result.housingPayment)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        An estimate of a home price that fits the income, debts, and housing costs you enter. It is not a lender approval.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="afford-income" label="Annual gross household income (USD)">
          <input id="afford-income" inputMode="decimal" value={income} onChange={(event) => setIncome(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-debt" label="Monthly debt payments (USD)" hint="Car loans, student loans, cards, and other debts you already pay.">
          <input id="afford-debt" inputMode="decimal" value={debt} onChange={(event) => setDebt(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-down" label={downMode === "percent" ? "Down payment (%)" : "Down payment (USD)"} hint={downMode === "percent" ? "Share of the estimated home price." : "A dollar amount added to the loan to get the home price."}>
          <input id="afford-down" inputMode="decimal" value={down} onChange={(event) => setDown(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-rate" label="Interest rate (%)" hint="Example rate used to size the loan. Not a live quote.">
          <input id="afford-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-years" label="Loan term (years)">
          <input id="afford-years" inputMode="numeric" value={years} onChange={(event) => setYears(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-dti" label="Target housing debt-to-income ratio (%)" hint="An assumption you choose. Not a lender rule. 36 is the sample.">
          <input id="afford-dti" inputMode="decimal" value={dti} onChange={(event) => setDti(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-tax" label="Property tax rate (% per year)" hint="Percent of the home price. 1 is a sample, not your local rate.">
          <input id="afford-tax" inputMode="decimal" value={taxRate} onChange={(event) => setTaxRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-insurance" label="Homeowners insurance per year (USD)" hint="Optional. Leave blank for 0.">
          <input id="afford-insurance" inputMode="decimal" value={insurance} onChange={(event) => setInsurance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-hoa" label="HOA per month (USD)" hint="Optional.">
          <input id="afford-hoa" inputMode="decimal" value={hoa} onChange={(event) => setHoa(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="afford-pmi" label="PMI per month (USD)" hint="Optional estimate you type. This page does not look up mortgage insurance.">
          <input id="afford-pmi" inputMode="decimal" value={pmi} onChange={(event) => setPmi(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Down payment mode"
          name="afford-down-mode"
          value={downMode}
          onChange={setDownMode}
          options={[
            { id: "percent", label: "Percentage of home price" },
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
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Estimated affordable home price", value: money(result.homePrice) },
              { label: "Estimated down payment", value: money(result.downPayment) },
              { label: "Estimated loan amount", value: money(result.loanAmount) },
              { label: "Estimated principal and interest", value: money(result.payment) },
              { label: "Estimated property tax", value: money(result.taxMonthly) },
              { label: "Estimated homeowners insurance", value: money(result.insuranceMonthly) },
              { label: "Estimated HOA", value: money(result.hoaMonthly) },
              { label: "Estimated PMI", value: money(result.pmiMonthly) },
              { label: "Estimated total monthly housing cost", value: money(result.housingPayment) },
              { label: "Existing monthly debt", value: money(result.existingDebt) },
              { label: "Estimated total debt-to-income ratio", value: `${formatNumber(result.totalDti, 2)}%` },
            ]}
          />
          <ToolOutput label="How this estimate is built">
            <p className="text-sm leading-6">
              Monthly gross income is {money(result.monthlyGross)}. At the {formatNumber(result.targetDti, 2)}% target you chose, housing plus existing debt can use {money(result.housingBudget + result.existingDebt)} a month. After existing debt of {money(result.existingDebt)}, about {money(result.housingBudget)} is left for housing. That figure is an assumption, not an approval.
            </p>
          </ToolOutput>
          <ToolOutput label="Target ratio comparison">
            <p className="mb-2 text-sm leading-6">Same income, debts, rate, term, and housing costs at three target ratios. None of these rows is a better choice.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Target ratio</th>
                    <th className="py-2 pr-3 font-medium">Home price</th>
                    <th className="py-2 pr-3 font-medium">Loan amount</th>
                    <th className="py-2 font-medium">Principal and interest</th>
                  </tr>
                </thead>
                <tbody>
                  {result.scenarios.map((row) => (
                    <tr key={row.dti} className="border-b border-border">
                      <td className="py-2 pr-3">{row.dti}%</td>
                      {row.ok ? (
                        <>
                          <td className="py-2 pr-3">{money(row.homePrice)}</td>
                          <td className="py-2 pr-3">{money(row.loanAmount)}</td>
                          <td className="py-2">{money(row.payment)}</td>
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
        </div>
      ) : null}
    </ToolPanel>
  );
}
