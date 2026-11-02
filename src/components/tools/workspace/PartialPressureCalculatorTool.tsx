"use client";

import { useState } from "react";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import {
  PRESSURE_UNITS,
  convertPressure,
  daltonPartialPressure,
  fmt,
  idealGasPressure,
  mixturePartialPressures,
  totalFromPartials,
  type GasRow,
  type PressureUnit,
} from "@/lib/tools/partial-pressure";
import { goldBtn, goldCard, goldGhost, goldTab } from "./goldUi";

type Mode = "dalton" | "mixture" | "total" | "ideal";
const MODES: Array<{ id: Mode; label: string }> = [
  { id: "dalton", label: "Mole fraction × total" },
  { id: "mixture", label: "Gas mixture (moles)" },
  { id: "total", label: "Total from partials" },
  { id: "ideal", label: "Ideal gas P = nRT/V" },
];

type Output = { headline: string; conversions: Array<[string, string]>; steps: string[]; extra?: Array<[string, string]> };

export function PartialPressureCalculatorTool() {
  const [mode, setMode] = useState<Mode>("dalton");
  const [unit, setUnit] = useState<PressureUnit>("atm");
  const [fraction, setFraction] = useState("");
  const [total, setTotal] = useState("");
  const [gases, setGases] = useState<GasRow[]>([{ name: "N₂", moles: "" }, { name: "O₂", moles: "" }]);
  const [partials, setPartials] = useState<string[]>(["", ""]);
  const [moles, setMoles] = useState("");
  const [temp, setTemp] = useState("");
  const [tUnit, setTUnit] = useState<"K" | "C">("K");
  const [volume, setVolume] = useState("");
  const [vUnit, setVUnit] = useState<"L" | "m3">("L");
  const [error, setError] = useState("");
  const [out, setOut] = useState<Output | null>(null);

  const conversions = (value: number, from: PressureUnit): Array<[string, string]> =>
    PRESSURE_UNITS.map((u) => [u, fmt(convertPressure(value, from, u))]);

  function calculate() {
    setError("");
    if (mode === "dalton") {
      const r = daltonPartialPressure(fraction, total, unit);
      if (!r.ok) return fail(r.error);
      setOut({ headline: `Pᵢ = ${fmt(r.partialPressure)} ${unit}`, conversions: conversions(r.partialPressure, unit), steps: r.steps });
    } else if (mode === "mixture") {
      const r = mixturePartialPressures(gases, total);
      if (!r.ok) return fail(r.error);
      setOut({
        headline: `${r.rows.length} gases, ${fmt(r.totalMoles)} mol in total`,
        conversions: [],
        steps: r.steps,
        extra: r.rows.map((row) => [row.name, `X = ${fmt(row.fraction)} · P = ${fmt(row.partialPressure)} ${unit}`]),
      });
    } else if (mode === "total") {
      const r = totalFromPartials(partials, unit);
      if (!r.ok) return fail(r.error);
      setOut({ headline: `P_total = ${fmt(r.total)} ${unit}`, conversions: conversions(r.total, unit), steps: r.steps });
    } else {
      const r = idealGasPressure(moles, temp, tUnit, volume, vUnit);
      if (!r.ok) return fail(r.error);
      setOut({ headline: `P = ${fmt(convertPressure(r.pascals, "Pa", unit))} ${unit}`, conversions: conversions(r.pascals, "Pa"), steps: r.steps });
    }
  }
  function fail(message: string) {
    setError(message);
    setOut(null);
  }
  function clear() {
    setFraction("");
    setTotal("");
    setGases([{ name: "N₂", moles: "" }, { name: "O₂", moles: "" }]);
    setPartials(["", ""]);
    setMoles("");
    setTemp("");
    setVolume("");
    setError("");
    setOut(null);
  }
  const summary = out ? [out.headline, ...(out.extra ?? []).map(([a, b]) => `${a}: ${b}`), ...out.steps].join("\n") : "";

  const unitSelect = (
    <ToolField id="pp-unit" label="Pressure unit">
      <select id="pp-unit" value={unit} onChange={(e) => setUnit(e.target.value as PressureUnit)} className={toolControlClass}>
        {PRESSURE_UNITS.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
    </ToolField>
  );

  return (
    <ToolPanel>
      <div role="tablist" aria-label="Calculation mode" className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {MODES.map((m) => (
          <button key={m.id} role="tab" type="button" aria-selected={mode === m.id} className={goldTab(mode === m.id)} onClick={() => { setMode(m.id); setOut(null); setError(""); }}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {mode === "dalton" ? (
          <>
            <ToolField id="pp-x" label="Mole fraction (Xᵢ)" hint="A value from 0 to 1, e.g. 0.21 for 21%.">
              <input id="pp-x" inputMode="decimal" value={fraction} onChange={(e) => setFraction(e.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="pp-total" label="Total pressure">
              <input id="pp-total" inputMode="decimal" value={total} onChange={(e) => setTotal(e.target.value)} className={toolControlClass} />
            </ToolField>
            {unitSelect}
          </>
        ) : null}
        {mode === "mixture" ? (
          <>
            <ToolField id="pp-total" label="Total pressure of the mixture">
              <input id="pp-total" inputMode="decimal" value={total} onChange={(e) => setTotal(e.target.value)} className={toolControlClass} />
            </ToolField>
            {unitSelect}
            <div className="sm:col-span-2 space-y-2">
              {gases.map((g, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_auto] items-end gap-2">
                  <div>
                    <label htmlFor={`pp-gn-${i}`} className="block text-sm font-medium">Gas {i + 1}</label>
                    <input id={`pp-gn-${i}`} value={g.name} onChange={(e) => setGases(gases.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))} className={toolControlClass} />
                  </div>
                  <div>
                    <label htmlFor={`pp-gm-${i}`} className="block text-sm font-medium">Amount (mol)</label>
                    <input id={`pp-gm-${i}`} inputMode="decimal" value={g.moles} onChange={(e) => setGases(gases.map((x, j) => (j === i ? { ...x, moles: e.target.value } : x)))} className={toolControlClass} />
                  </div>
                  <button type="button" className={goldGhost} aria-label={`Remove gas ${i + 1}`} disabled={gases.length <= 2} onClick={() => setGases(gases.filter((_, j) => j !== i))}>✕</button>
                </div>
              ))}
              <button type="button" className={goldGhost} disabled={gases.length >= 10} onClick={() => setGases([...gases, { name: "", moles: "" }])}>Add gas</button>
            </div>
          </>
        ) : null}
        {mode === "total" ? (
          <>
            {unitSelect}
            <div className="sm:col-span-2 space-y-2">
              {partials.map((p, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto] items-end gap-2">
                  <div>
                    <label htmlFor={`pp-p-${i}`} className="block text-sm font-medium">Partial pressure {i + 1} ({unit})</label>
                    <input id={`pp-p-${i}`} inputMode="decimal" value={p} onChange={(e) => setPartials(partials.map((x, j) => (j === i ? e.target.value : x)))} className={toolControlClass} />
                  </div>
                  <button type="button" className={goldGhost} aria-label={`Remove pressure ${i + 1}`} disabled={partials.length <= 2} onClick={() => setPartials(partials.filter((_, j) => j !== i))}>✕</button>
                </div>
              ))}
              <button type="button" className={goldGhost} disabled={partials.length >= 10} onClick={() => setPartials([...partials, ""])}>Add pressure</button>
            </div>
          </>
        ) : null}
        {mode === "ideal" ? (
          <>
            <ToolField id="pp-n" label="Amount of gas n (mol)">
              <input id="pp-n" inputMode="decimal" value={moles} onChange={(e) => setMoles(e.target.value)} className={toolControlClass} />
            </ToolField>
            {unitSelect}
            <div className="grid grid-cols-[1fr_auto] items-end gap-2">
              <ToolField id="pp-t" label="Temperature T">
                <input id="pp-t" inputMode="decimal" value={temp} onChange={(e) => setTemp(e.target.value)} className={toolControlClass} />
              </ToolField>
              <select aria-label="Temperature unit" value={tUnit} onChange={(e) => setTUnit(e.target.value as "K" | "C")} className={toolControlClass}>
                <option value="K">K</option>
                <option value="C">°C</option>
              </select>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-2">
              <ToolField id="pp-v" label="Volume V">
                <input id="pp-v" inputMode="decimal" value={volume} onChange={(e) => setVolume(e.target.value)} className={toolControlClass} />
              </ToolField>
              <select aria-label="Volume unit" value={vUnit} onChange={(e) => setVUnit(e.target.value as "L" | "m3")} className={toolControlClass}>
                <option value="L">L</option>
                <option value="m3">m³</option>
              </select>
            </div>
          </>
        ) : null}
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className={goldBtn} onClick={calculate}>Calculate</button>
        <CopyButton value={summary} label="Copy result" />
        <button type="button" className={goldGhost} onClick={clear}>Clear</button>
      </div>
      {out ? (
        <div className="mt-6 space-y-4" aria-live="polite">
          <div className={goldCard}>
            <p className="text-sm font-medium text-[#A8841A]">Result</p>
            <p className="mt-1 break-words text-2xl font-semibold">{out.headline}</p>
          </div>
          {out.extra ? (
            <ul className="space-y-1 text-sm">{out.extra.map(([a, b]) => <li key={a}><span className="font-medium">{a}</span>: {b}</li>)}</ul>
          ) : null}
          {out.conversions.length ? (
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {out.conversions.map(([u, v]) => (
                <div key={u} className="rounded-xl border border-border px-3 py-2">
                  <dt className="text-xs text-muted-foreground">{u}</dt>
                  <dd className="break-all text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div>
            <p className="text-sm font-semibold">Steps</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
              {out.steps.map((s) => <li key={s} className="break-words">{s}</li>)}
            </ol>
          </div>
        </div>
      ) : null}
    </ToolPanel>
  );
}
