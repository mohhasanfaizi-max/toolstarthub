"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { formatScheduleCsv, type AmortizationYear } from "@/lib/tools/loan";
import { formatNumber } from "@/lib/tools/numbers";
import { useTx } from "@/i18n/tool-text";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function AmortizationSchedule({
  yearly,
  monthly,
  idPrefix,
}: {
  yearly: AmortizationYear[];
  monthly: AmortizationYear[];
  idPrefix: string;
}) {
  const tx = useTx();
  const [showMonthly, setShowMonthly] = useState(false);
  const rows = showMonthly ? monthly : yearly;
  const periodLabel = showMonthly ? tx("Month") : tx("Year");
  const principalTotal = rows.reduce((sum, row) => sum + row.principalPaid, 0);
  const interestTotal = rows.reduce((sum, row) => sum + row.interestPaid, 0);
  const endingBalance = rows.at(-1)?.balance ?? 0;
  const csvName = showMonthly ? `${idPrefix}-monthly-schedule.csv` : `${idPrefix}-yearly-schedule.csv`;
  const csvBlob = new Blob([formatScheduleCsv(rows, periodLabel)], { type: "text/csv;charset=utf-8" });

  return (
    <div className="space-y-3" data-testid={`${idPrefix}-schedule`}>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-medium text-foreground">{tx("Amortization schedule")}</h3>
        <Button
          type="button"
          variant="ghost"
          onClick={() => setShowMonthly((open) => !open)}
          data-testid={`${idPrefix}-toggle-monthly`}
        >
          {showMonthly ? tx("Show yearly schedule") : tx("Show monthly schedule")}
        </Button>
        <span data-testid={`${idPrefix}-csv`}>
          <DownloadButton blob={csvBlob} fileName={csvName} label={tx("Download CSV")} />
        </span>
      </div>
      <div className="max-h-80 overflow-auto rounded-lg border border-border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-muted/40 text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">{periodLabel}</th>
              <th className="px-3 py-2 font-medium">{tx("Principal paid")}</th>
              <th className="px-3 py-2 font-medium">{tx("Interest paid")}</th>
              <th className="px-3 py-2 font-medium">{tx("Remaining balance")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${periodLabel}-${row.year}`} className="border-t border-border">
                <td className="px-3 py-2">{row.year}</td>
                <td className="px-3 py-2">{money(row.principalPaid)}</td>
                <td className="px-3 py-2">{money(row.interestPaid)}</td>
                <td className="px-3 py-2">{money(row.balance)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot data-testid={`${idPrefix}-schedule-totals`}>
            <tr className="border-t border-border bg-muted/30 font-medium">
              <td className="px-3 py-2">{tx("Totals")}</td>
              <td className="px-3 py-2">{money(principalTotal)}</td>
              <td className="px-3 py-2">{money(interestTotal)}</td>
              <td className="px-3 py-2" data-testid={`${idPrefix}-ending-balance`}>
                {money(endingBalance)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
