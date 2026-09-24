"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolOutput, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { calculateSquareFootage, type AreaUnit } from "@/lib/tools/square-footage";
import { formatNumber } from "@/lib/tools/numbers";

type Row = { id: number; length: string; width: string; unit: AreaUnit };

export function SquareFootageCalculatorTool() {
  const [rows, setRows] = useState<Row[]>([{ id: 1, length: "12", width: "10", unit: "feet" }]);
  const [nextId, setNextId] = useState(2);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSquareFootage>>();

  function update(id: number, patch: Partial<Row>) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  function calculate() {
    const next = calculateSquareFootage(rows.map((row) => ({ lengthRaw: row.length, widthRaw: row.width, unit: row.unit })));
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `Square feet: ${formatNumber(result.squareFeet, 2)}\nSquare meters: ${formatNumber(result.squareMeters, 2)}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">Area is length times width. A blank extra room is skipped. One square foot is 0.09290304 square meters.</p>
      <div className="mt-4 space-y-3">
        {rows.map((row, index) => (
          <div key={row.id} className="grid gap-3 rounded-lg border border-border p-3 sm:grid-cols-4">
            <ToolField id={`room-l-${row.id}`} label={`Room ${index + 1} length`}>
              <input id={`room-l-${row.id}`} inputMode="decimal" value={row.length} onChange={(event) => update(row.id, { length: event.target.value })} className={toolControlClass} />
            </ToolField>
            <ToolField id={`room-w-${row.id}`} label="Width">
              <input id={`room-w-${row.id}`} inputMode="decimal" value={row.width} onChange={(event) => update(row.id, { width: event.target.value })} className={toolControlClass} />
            </ToolField>
            <ToolField id={`room-u-${row.id}`} label="Unit">
              <select id={`room-u-${row.id}`} value={row.unit} onChange={(event) => update(row.id, { unit: event.target.value as AreaUnit })} className={toolControlClass}>
                <option value="feet">Feet</option>
                <option value="meters">Meters</option>
              </select>
            </ToolField>
            {rows.length > 1 ? (
              <div className="flex items-end">
                <Button type="button" variant="ghost" onClick={() => setRows((current) => current.filter((item) => item.id !== row.id))}>Remove</Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button type="button" variant="secondary" onClick={() => { setRows((current) => [...current, { id: nextId, length: "", width: "", unit: "feet" }]); setNextId((id) => id + 1); }}>Add room</Button>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setRows([{ id: 1, length: "12", width: "10", unit: "feet" }]); setNextId(2); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolStatGrid items={[
            { label: "Total square feet", value: formatNumber(result.squareFeet, 2) },
            { label: "Total square meters", value: formatNumber(result.squareMeters, 2) },
          ]} />
          <ToolOutput label="Each room">
            <ul className="space-y-1 text-sm">
              {result.rooms.map((room) => (
                <li key={room.index}>Room {room.index}: {formatNumber(room.squareFeet, 2)} sq ft, {formatNumber(room.squareMeters, 2)} sq m</li>
              ))}
            </ul>
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
