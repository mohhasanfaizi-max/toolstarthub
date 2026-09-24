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
import { calculateDebtPayoff, type DebtStrategy } from "@/lib/tools/debt-payoff";
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

type DebtRow = { id: number; name: string; balance: string; apr: string; minimum: string };

const starter: DebtRow[] = [
  { id: 1, name: "Card", balance: "5000", apr: "22", minimum: "150" },
  { id: 2, name: "Car", balance: "8000", apr: "7", minimum: "200" },
  { id: 3, name: "Store", balance: "1200", apr: "18", minimum: "50" },
];

export function DebtPayoffCalculatorTool() {
  const [rows, setRows] = useState<DebtRow[]>(starter);
  const [nextId, setNextId] = useState(4);
  const [extra, setExtra] = useState("100");
  const [strategy, setStrategy] = useState<DebtStrategy>("avalanche");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateDebtPayoff>>();

  function update(id: number, field: keyof Omit<DebtRow, "id">, value: string) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  }

  function calculate() {
    const next = calculateDebtPayoff({
      debts: rows.map((row) => ({
        name: row.name,
        balanceRaw: row.balance,
        aprRaw: row.apr,
        minimumRaw: row.minimum,
      })),
      extraRaw: extra,
      strategy,
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
    setRows(starter);
    setNextId(4);
    setExtra("100");
    setStrategy("avalanche");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Estimated months: ${result.months}\nTotal interest: ${money(result.totalInterest)}\nStarting debt: ${money(result.startingBalance)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        An estimate of how long several debts take to pay off under the strategy and extra payment you enter. It is not a promised payoff date.
      </p>
      <div className="mt-4 space-y-4">
        {rows.map((row, index) => (
          <div key={row.id} className="grid gap-3 rounded-lg border border-border p-3 sm:grid-cols-4">
            <ToolField id={`debt-name-${row.id}`} label={`Debt ${index + 1} name`}>
              <input id={`debt-name-${row.id}`} value={row.name} onChange={(event) => update(row.id, "name", event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id={`debt-balance-${row.id}`} label="Balance (USD)">
              <input id={`debt-balance-${row.id}`} inputMode="decimal" value={row.balance} onChange={(event) => update(row.id, "balance", event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id={`debt-apr-${row.id}`} label="APR (%)">
              <input id={`debt-apr-${row.id}`} inputMode="decimal" value={row.apr} onChange={(event) => update(row.id, "apr", event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id={`debt-min-${row.id}`} label="Minimum payment (USD)">
              <input id={`debt-min-${row.id}`} inputMode="decimal" value={row.minimum} onChange={(event) => update(row.id, "minimum", event.target.value)} className={toolControlClass} />
            </ToolField>
            {rows.length > 1 ? (
              <div className="sm:col-span-4">
                <Button type="button" variant="ghost" onClick={() => setRows((current) => current.filter((item) => item.id !== row.id))}>
                  Remove debt {index + 1}
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            if (rows.length >= 12) return;
            setRows((current) => [...current, { id: nextId, name: "", balance: "", apr: "", minimum: "" }]);
            setNextId((id) => id + 1);
          }}
        >
          Add debt
        </Button>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="debt-extra" label="Extra monthly payment (USD)" hint="Paid after each minimum. Use 0 to see minimums only.">
          <input id="debt-extra" inputMode="decimal" value={extra} onChange={(event) => setExtra(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Repayment strategy"
          name="debt-strategy"
          value={strategy}
          onChange={setStrategy}
          options={[
            { id: "avalanche", label: "Highest interest first" },
            { id: "snowball", label: "Smallest balance first" },
          ]}
        />
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          These are two different ways to send the extra payment. Neither one is labeled as the better plan.
        </p>
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
              { label: "Estimated months", value: String(result.months) },
              { label: "Estimated payoff month", value: estimatedMonth(result.months) },
              { label: "Total interest", value: money(result.totalInterest) },
              { label: "Total payments", value: money(result.totalPaid) },
              { label: "Starting debt", value: money(result.startingBalance) },
              { label: "Interest versus minimums only", value: money(result.interestSaved) },
            ]}
          />
          <ToolOutput label="Payoff order">
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Debt</th>
                    <th className="py-2 pr-3 font-medium">Months</th>
                    <th className="py-2 font-medium">Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {result.order.map((row) => (
                    <tr key={row.name} className="border-b border-border">
                      <td className="py-2 pr-3">{row.name}</td>
                      <td className="py-2 pr-3">{row.months}</td>
                      <td className="py-2">{money(row.interest)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
          <ToolOutput label="Strategy comparison">
            <p className="mb-2 text-sm leading-6">Same debts. The rows show payoff time and interest. They are not ranked.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Plan</th>
                    <th className="py-2 pr-3 font-medium">Months</th>
                    <th className="py-2 font-medium">Total interest</th>
                  </tr>
                </thead>
                <tbody>
                  {result.comparison.map((row) => (
                    <tr key={`${row.strategy}-${row.extra}`} className="border-b border-border">
                      <td className="py-2 pr-3">{row.strategy === "avalanche" ? "Highest interest first" : "Smallest balance first"}, {row.extra > 0 ? `${money(row.extra)} extra` : "minimums only"}</td>
                      <td className="py-2 pr-3">{row.months}</td>
                      <td className="py-2">{money(row.totalInterest)}</td>
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
