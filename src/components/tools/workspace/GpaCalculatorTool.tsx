"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { GPA_SCALE, calculateGpa } from "@/lib/tools/gpa";
import { formatNumber } from "@/lib/tools/numbers";

type Row = { id: number; grade: string; credits: string; numeric: boolean };

const starter: Row[] = [
  { id: 1, grade: "A", credits: "3", numeric: false },
  { id: 2, grade: "B", credits: "3", numeric: false },
  { id: 3, grade: "A-", credits: "4", numeric: false },
];

export function GpaCalculatorTool() {
  const [rows, setRows] = useState<Row[]>(starter);
  const [nextId, setNextId] = useState(4);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateGpa>>();

  function update(id: number, patch: Partial<Row>) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  function calculate() {
    const next = calculateGpa(rows.map((row) => ({ gradeRaw: row.grade, creditsRaw: row.credits, numeric: row.numeric })));
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `GPA: ${formatNumber(result.gpa, 2)}\nCredits: ${formatNumber(result.totalCredits, 2)}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This uses a common 4.0 map: A 4.0, A- 3.7, B+ 3.3, B 3.0, B- 2.7, C+ 2.3, C 2.0, C- 1.7, D+ 1.3, D 1.0, D- 0.7, F 0. A school may use a different map.
      </p>
      <div className="mt-4 space-y-3">
        {rows.map((row, index) => (
          <div key={row.id} className="grid gap-3 rounded-lg border border-border p-3 sm:grid-cols-4">
            <ToolField id={`gpa-grade-${row.id}`} label={`Course ${index + 1} ${row.numeric ? "grade points" : "letter"}`}>
              <input id={`gpa-grade-${row.id}`} value={row.grade} onChange={(event) => update(row.id, { grade: event.target.value })} className={toolControlClass} />
            </ToolField>
            <ToolField id={`gpa-credits-${row.id}`} label="Credits">
              <input id={`gpa-credits-${row.id}`} inputMode="decimal" value={row.credits} onChange={(event) => update(row.id, { credits: event.target.value })} className={toolControlClass} />
            </ToolField>
            <label className="flex min-h-11 items-end gap-2 pb-2 text-sm">
              <input type="checkbox" checked={row.numeric} onChange={(event) => update(row.id, { numeric: event.target.checked })} />
              Numeric points
            </label>
            {rows.length > 1 ? (
              <div className="flex items-end">
                <Button type="button" variant="ghost" onClick={() => setRows((current) => current.filter((item) => item.id !== row.id))}>Remove</Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button type="button" variant="secondary" onClick={() => { setRows((current) => [...current, { id: nextId, grade: "", credits: "", numeric: false }]); setNextId((id) => id + 1); }}>Add course</Button>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{GPA_SCALE.map((row) => `${row.letter} ${row.points}`).join(", ")}</p>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setRows(starter); setNextId(4); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[
            { label: "GPA on this 4.0 map", value: formatNumber(result.gpa, 2) },
            { label: "Total credits", value: formatNumber(result.totalCredits, 2) },
            { label: "Total grade points", value: formatNumber(result.totalPoints, 2) },
          ]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
