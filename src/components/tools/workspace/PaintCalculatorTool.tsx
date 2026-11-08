"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  calculatePaint,
  CAN_SIZES,
  CURRENCIES,
  PROJECTS,
  LITRES,
  METRES,
  convertLength,
  number,
  paintSummary,
  type PaintInput,
  type PaintResult,
  type Surface,
  type Room,
  type LengthUnit,
  type PaintUnit,
  type Project,
  type PaintCurrency,
} from "@/lib/tools/paint";
import { paintColours, paintSources } from "@/data/paint-colours";
const control =
  "w-full min-w-0 rounded-xl border border-[#B3B8C2] bg-white px-3 py-2 text-[#17233F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6C12]";
const card =
  "min-w-0 rounded-2xl border border-[#C9A227]/60 bg-white p-4 shadow-sm sm:p-6";
const face = (): Surface => ({ width: "", height: "", count: "1" });
const room = (): Room => ({
  name: "",
  length: "",
  width: "",
  height: "",
  ceiling: false,
  openings: [],
});
function initial(example = true): PaintInput {
  return {
    project: "Interior Walls",
    unit: "m",
    output: "L",
    walls: [example ? { width: "4", height: "3", count: "4" } : face()],
    openings: example
      ? [
          { width: "0.9", height: "2.1", count: "1" },
          { width: "1.5", height: "1", count: "1" },
        ]
      : [],
    rooms: [
      example
        ? { ...room(), name: "Room 1", length: "4", width: "4", height: "3" }
        : room(),
    ],
    ceiling: { length: example ? "4" : "", width: example ? "4" : "" },
    coverage: "10",
    coverageBasis: "m2/L",
    coats: "2",
    waste: "10",
    price: "",
    currency: "USD",
    cans: [],
  };
}
function Field({
  id,
  label,
  value,
  onChange,
  numeric = true,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  numeric?: boolean;
}) {
  return (
    <label htmlFor={id} className="block min-w-0 text-sm font-medium">
      <span className="mb-1 block">{label}</span>
      <input
        id={id}
        className={control}
        type="text"
        inputMode={numeric ? "decimal" : "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
function Faces({
  id,
  title,
  rows,
  onChange,
  unit,
}: {
  id: string;
  title: string;
  rows: Surface[];
  onChange: (rows: Surface[]) => void;
  unit: LengthUnit;
}) {
  return (
    <fieldset className="mt-4 space-y-3">
      <legend className="font-semibold">{title}</legend>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid min-w-0 gap-3 rounded-xl bg-[#F3F4F6] p-3 sm:grid-cols-4"
        >
          {(["width", "height", "count"] as const).map((key) => (
            <Field
              key={key}
              id={`${id}-${i}-${key}`}
              label={`${key === "count" ? "Quantity" : key === "width" ? "Width" : "Height"}${key === "count" ? "" : ` (${unit})`} ${i + 1}`}
              value={row[key]}
              onChange={(value) =>
                onChange(
                  rows.map((r, j) => (j === i ? { ...r, [key]: value } : r)),
                )
              }
            />
          ))}
          <Button
            type="button"
            variant="ghost"
            onClick={() => onChange(rows.filter((_, j) => i !== j))}
          >
            Remove {i + 1}
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="secondary"
        disabled={rows.length >= 100}
        onClick={() => onChange([...rows, face()])}
      >
        Add {title.toLowerCase()}
      </Button>
    </fieldset>
  );
}
export function PaintCalculatorTool() {
  const [input, setInput] = useState<PaintInput>(() => initial());
  const [result, setResult] = useState<PaintResult>();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [canPrices, setCanPrices] = useState<Record<string, string>>({});
  const [colours, setColours] = useState(paintColours);
  const [colourQuery, setColourQuery] = useState("");
  const [colourIndex, setColourIndex] = useState(0);
  const patch = (next: Partial<PaintInput>) => {
    setInput((current) => ({ ...current, ...next }));
    setResult(undefined);
    setNote("");
  };
  const roomMode =
    input.project === "Entire Room" || input.project === "Multiple Rooms";
  const active = result?.ok ? result : undefined;
  const summary = active ? paintSummary(active) : "";
  function changeUnit(next: LengthUnit) {
    const from = input.unit;
    const f = (row: Surface) => ({
      ...row,
      width: convertLength(row.width, from, next),
      height: convertLength(row.height, from, next),
    });
    patch({
      unit: next,
      walls: input.walls.map(f),
      openings: input.openings.map(f),
      rooms: input.rooms.map((r) => ({
        ...r,
        length: convertLength(r.length, from, next),
        width: convertLength(r.width, from, next),
        height: convertLength(r.height, from, next),
        openings: r.openings.map(f),
      })),
      ceiling: {
        length: convertLength(input.ceiling.length, from, next),
        width: convertLength(input.ceiling.width, from, next),
      },
    });
  }
  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setNote("Copied to clipboard.");
    } catch {
      setNote(
        "Clipboard access was denied. Select and copy the text directly from the results or HEX field.",
      );
    }
  }
  async function pdf() {
    if (!active) return;
    setBusy(true);
    try {
      const { buildPaintPdf } = await import("@/lib/tools/paint-pdf");
      const bytes = await buildPaintPdf(summary);
      const blob = new Blob([new Uint8Array(bytes)], {
        type: "application/pdf",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "toolstarhub-paint-estimate.pdf";
      document.body.append(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30000);
      setNote("PDF download prepared. Check your browser downloads.");
    } catch {
      setNote("PDF export failed. Try Print and Save as PDF instead.");
    } finally {
      setBusy(false);
    }
  }
  function print() {
    if (!active) return;
    const popup = window.open("", "_blank");
    if (!popup) {
      setNote("Allow the print window, or download the PDF instead.");
      return;
    }
    popup.opener = null;
    popup.document.title = "Paint Calculator estimate";
    const pre = popup.document.createElement("pre");
    pre.textContent = summary;
    pre.style.cssText =
      "white-space:pre-wrap;overflow-wrap:anywhere;font:12pt/1.6 sans-serif;color:#17233F";
    popup.document.body.append(pre);
    popup.focus();
    popup.print();
  }
  function updateRoom(i: number, next: Partial<Room>) {
    patch({
      rooms: input.rooms.map((r, j) => (j === i ? { ...r, ...next } : r)),
    });
  }
  const n = (value: number) =>
    value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  const swatch = colours[colourIndex];
  const validHex = /^#[0-9a-f]{6}$/i.test(swatch.hex);
  return (
    <div className="paint-calculator min-w-0 space-y-6 rounded-3xl bg-[#FBF8EC] p-3 text-[#17233F] sm:p-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#725914]">
          Measure. Plan. Paint.
        </p>
        <h2 className="mt-1 text-2xl font-semibold">Paint Calculator</h2>
        <p className="mt-2 text-sm leading-6">
          Start with the sample wall plan or clear it for your own project. All
          dimensions and estimates stay in this browser tab. Check the paint tin
          before buying.
        </p>
      </div>
      <section className={card} aria-labelledby="paint-project">
        <h3 id="paint-project" className="text-lg font-semibold">
          1. Your project
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-medium">
            Project type
            <select
              aria-label="Project type"
              className={control}
              value={input.project}
              onChange={(e) => patch({ project: e.target.value as Project })}
            >
              {PROJECTS.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Measurement unit
            <select
              aria-label="Measurement unit"
              className={control}
              value={input.unit}
              onChange={(e) => changeUnit(e.target.value as LengthUnit)}
            >
              {Object.keys(METRES).map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Paint output
            <select
              aria-label="Paint output"
              className={control}
              value={input.output}
              onChange={(e) => patch({ output: e.target.value as PaintUnit })}
            >
              {Object.keys(LITRES).map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-3 text-xs">
          Changing the measurement unit converts existing dimensions. US and
          Imperial gallons are different. Area is shown in both m² and ft².
        </p>
      </section>
      <section className={card} aria-labelledby="paint-measure">
        <h3 id="paint-measure" className="text-lg font-semibold">
          2. Measure the surfaces
        </h3>
        {roomMode ? (
          <>
            <p className="mt-2 text-sm">
              Each rectangular room counts four walls exactly once: 2 × (length
              + width) × height. Add its ceiling only if you will paint it.
              Estimate different paint products separately.
            </p>
            {(input.project === "Entire Room"
              ? input.rooms.slice(0, 1)
              : input.rooms
            ).map((r, i) => (
              <fieldset
                key={i}
                className="mt-4 rounded-xl border border-[#C9A227]/50 p-3"
              >
                <legend className="font-semibold">Room {i + 1}</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    id={`paint-room-${i}-name`}
                    numeric={false}
                    label="Room name (optional)"
                    value={r.name}
                    onChange={(name) => updateRoom(i, { name })}
                  />
                  {(["length", "width", "height"] as const).map((key) => (
                    <Field
                      key={key}
                      id={`paint-room-${i}-${key}`}
                      label={`${key} (${input.unit})`}
                      value={r[key]}
                      onChange={(value) => updateRoom(i, { [key]: value })}
                    />
                  ))}
                </div>
                <label className="mt-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={r.ceiling}
                    onChange={(e) =>
                      updateRoom(i, { ceiling: e.target.checked })
                    }
                  />
                  Include this ceiling
                </label>
                <Faces
                  id={`paint-room-${i}-open`}
                  title="Openings"
                  unit={input.unit}
                  rows={r.openings}
                  onChange={(openings) => updateRoom(i, { openings })}
                />
                {input.project === "Multiple Rooms" &&
                input.rooms.length > 1 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      patch({ rooms: input.rooms.filter((_, j) => i !== j) })
                    }
                  >
                    Remove room {i + 1}
                  </Button>
                ) : null}
              </fieldset>
            ))}
            {input.project === "Multiple Rooms" ? (
              <Button
                type="button"
                variant="secondary"
                disabled={input.rooms.length >= 100}
                onClick={() => patch({ rooms: [...input.rooms, room()] })}
              >
                Add room
              </Button>
            ) : null}
          </>
        ) : input.project === "Ceiling" ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(["length", "width"] as const).map((key) => (
              <Field
                key={key}
                id={`paint-ceiling-${key}`}
                label={`Ceiling ${key} (${input.unit})`}
                value={input.ceiling[key]}
                onChange={(value) =>
                  patch({ ceiling: { ...input.ceiling, [key]: value } })
                }
              />
            ))}
          </div>
        ) : (
          <>
            <Faces
              id="paint-wall"
              title={
                input.project === "Doors and Windows"
                  ? "Paintable faces"
                  : "Walls"
              }
              rows={input.walls}
              unit={input.unit}
              onChange={(walls) => patch({ walls })}
            />
            {input.project === "Doors and Windows" ? (
              <p className="mt-3 text-sm">
                Enter each face you will paint; quantity 2 counts both sides.
                These faces are added, not deducted. Frames and detailed
                mouldings need their own measured allowance.
              </p>
            ) : (
              <>
                <p className="mt-4 text-sm">
                  Subtract doors and windows you will not paint. Enter each
                  opening once, even when a wall row has a quantity greater than
                  one. Quantity may group identical openings.
                </p>
                <Faces
                  id="paint-open"
                  title="Openings"
                  rows={input.openings}
                  unit={input.unit}
                  onChange={(openings) => patch({ openings })}
                />
              </>
            )}
          </>
        )}
      </section>
      <section className={card} aria-labelledby="paint-coverage">
        <h3 id="paint-coverage" className="text-lg font-semibold">
          3. Coverage, coats and budget
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="text-sm font-medium">
            Coverage basis
            <select
              aria-label="Coverage basis"
              className={control}
              value={input.coverageBasis}
              onChange={(e) =>
                patch({
                  coverageBasis: e.target.value as PaintInput["coverageBasis"],
                  coverage: e.target.value === "m2/L" ? "10" : "350",
                })
              }
            >
              <option value="m2/L">m² per litre</option>
              <option value="ft2/USgal">ft² per US gallon</option>
            </select>
          </label>
          <Field
            id="paint-coverage-rate"
            label="Coverage per coat (editable estimate)"
            value={input.coverage}
            onChange={(coverage) => patch({ coverage })}
          />
          <label className="text-sm font-medium">
            Coat preset
            <select
              aria-label="Coat preset"
              className={control}
              value={
                ["1", "2", "3", "4"].includes(input.coats)
                  ? input.coats
                  : "custom"
              }
              onChange={(e) =>
                patch({
                  coats: e.target.value === "custom" ? "5" : e.target.value,
                })
              }
            >
              {[1, 2, 3, 4].map((c) => (
                <option key={c}>{c}</option>
              ))}
              <option value="custom">Custom</option>
            </select>
          </label>
          <Field
            id="paint-coats"
            label="Number of coats (1–100, whole number)"
            value={input.coats}
            onChange={(coats) => patch({ coats })}
          />
          <label className="text-sm font-medium">
            Wastage
            <select
              aria-label="Wastage"
              className={control}
              value={input.waste}
              onChange={(e) => patch({ waste: e.target.value })}
            >
              {[0, 5, 10, 15].map((w) => (
                <option value={w} key={w}>
                  {w}%
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Currency
            <select
              aria-label="Currency"
              className={control}
              value={input.currency}
              onChange={(e) =>
                patch({ currency: e.target.value as PaintCurrency })
              }
            >
              {CURRENCIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <Field
            id="paint-price"
            label={`Price per ${input.output} (${input.currency}, optional)`}
            value={input.price}
            onChange={(price) => patch({ price })}
          />
        </div>
        <p className="mt-3 text-sm">
          Defaults of 10 m²/L or 350 ft²/US gal are planning estimates, not
          equivalent rates or manufacturer promises. Changing coverage basis
          loads its estimate. Replace it with the coverage for your product and
          surface. Price follows your selected output unit; changing that unit
          does not convert a price quote. Currency labels your quote; no
          exchange rates are applied.
        </p>
        <p className="mt-2 text-sm font-medium">
          Paint only: labour, primer, surface preparation and equipment are
          excluded. Different colours or products need separate purchase plans.
        </p>
      </section>
      <section className={card} aria-labelledby="paint-cans">
        <h3 id="paint-cans" className="text-lg font-semibold">
          4. Choose available containers
        </h3>
        <p className="mt-2 text-sm">
          Example sizes only: no stock or retailer availability is assumed.
          Select the sizes actually offered for your exact colour and finish.
          Optional prices are per container in {input.currency}. Least excess
          comes first, then lowest total cost when every selected size is
          priced, then fewest containers. Otherwise cost comparison is
          unavailable; a per-unit price can still estimate cost.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CAN_SIZES.map((can) => {
            const selected = input.cans.find((c) => c.id === can.id);
            return (
              <div key={can.id} className="rounded-xl bg-[#F3F4F6] p-3">
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={!!selected}
                    onChange={(e) =>
                      patch({
                        cans: e.target.checked
                          ? [
                              ...input.cans,
                              {
                                ...can,
                                price: canPrices[can.id]?.trim()
                                  ? Number(canPrices[can.id])
                                  : undefined,
                              },
                            ]
                          : input.cans.filter((c) => c.id !== can.id),
                      })
                    }
                  />
                  {can.label}
                </label>
                {selected ? (
                  <Field
                    id={`paint-can-${can.id}`}
                    label={`Price (${input.currency}, optional)`}
                    value={canPrices[can.id] ?? ""}
                    onChange={(raw) => {
                      setCanPrices((current) => ({
                        ...current,
                        [can.id]: raw,
                      }));
                      let price: number | undefined;
                      try {
                        price = raw.trim()
                          ? number(raw, "Container price", true)
                          : undefined;
                      } catch {
                        price = NaN;
                      }
                      patch({
                        cans: input.cans.map((c) =>
                          c.id === can.id ? { ...c, price } : c,
                        ),
                      });
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          style={{ backgroundColor: "#17233F", color: "#FFFFFF" }}
          onClick={() => {
            setResult(calculatePaint(input));
            setNote("");
          }}
        >
          Calculate
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setInput(initial(false));
            setCanPrices({});
            setResult(undefined);
            setNote("Cleared. Enter your measurements.");
          }}
        >
          Clear
        </Button>
      </div>
      {result && !result.ok ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
          {result.error}
        </p>
      ) : null}
      {active ? (
        <section
          className={`${card} paint-results border-green-700 bg-green-50`}
          aria-labelledby="paint-results"
        >
          <h3
            id="paint-results"
            className="text-xl font-semibold text-green-900"
          >
            Your paint plan
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Paintable area",
                `${n(active.area)} m² / ${n(active.area / METRES.ft ** 2)} ft²`,
              ],
              ["Area including coats", `${n(active.coatArea)} m²`],
              [
                "Required, including wastage",
                `${n(active.litres / LITRES[active.output])} ${active.output}`,
              ],
              [
                active.plan.ok
                  ? "Recommended purchase"
                  : "Volume estimate (no container plan)",
                `${n(active.purchaseLitres / LITRES[active.output])} ${active.output}`,
              ],
              ["Coverage per coat", `${n(active.coverage)} m²/L`],
              ["Wastage", `${active.waste}%`],
              [
                "Estimated paint cost",
                active.cost === undefined
                  ? "Add a price to estimate"
                  : new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: active.currency,
                    }).format(active.cost),
              ],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 rounded-xl bg-white p-3">
                <dt className="text-sm">{label}</dt>
                <dd className="mt-1 break-words text-lg font-semibold text-green-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs">
            Cost basis: {active.costBasis}. Litres before wastage:{" "}
            {n(active.baseLitres)}. Estimates retain precision internally;
            displayed amounts are rounded, not a container guarantee.
          </p>
          <h4 className="mt-5 font-semibold">
            Itemized area and paint breakdown
          </h4>
          <ul className="mt-2 space-y-3">
            {active.parts.map((p, i) => (
              <li className="rounded-xl bg-white p-3 text-sm" key={i}>
                <strong>{p.name}</strong>: {n(p.gross)} m² gross −{" "}
                {n(p.deducted)} m² openings + {n(p.ceiling)} m² ceiling ={" "}
                {n(p.area)} m².
                {p.area >= 0
                  ? ` Paint including coats and wastage: ${n((((p.area * active.coats) / active.coverage) * (1 + active.waste / 100)) / LITRES[active.output])} ${active.output}.`
                  : " Deduct this contribution from the combined plan; it is not negative paint to buy."}
              </li>
            ))}
          </ul>
          {active.plan.ok ? (
            <>
              <h4 className="mt-5 font-semibold">Container combination</h4>
              <ul>
                {active.plan.items.map((item) => (
                  <li key={item.can.id}>
                    {item.count} × {item.can.label}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm">
                {active.plan.count} containers; {n(active.plan.excess)} L above
                the unrounded requirement. Availability is unverified.
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm">{active.plan.error}</p>
          )}
          {active.warnings.map((w) => (
            <p key={w} className="mt-3 text-sm font-semibold text-amber-900">
              {w}
            </p>
          ))}
          <p className="mt-4 text-sm">
            Calculation: net area × coats ÷ coverage × (1 + wastage ÷ 100).
            Check manufacturer coverage, recommended coats, primer requirements
            and actual container sizes before purchasing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => void copy(summary)}
            >
              Copy Results
            </Button>
            <Button
              type="button"
              variant="secondary"
              disabled={busy}
              onClick={() => void pdf()}
            >
              Download PDF
            </Button>
            <Button type="button" variant="secondary" onClick={print}>
              Print
            </Button>
          </div>
          <p className="mt-3 text-xs">
            The PDF uses the site’s standard Latin font. For non-Latin room
            names, use Print to preserve the original text.
          </p>
          <details className="mt-4">
            <summary>Selectable results text</summary>
            <pre className="mt-3 whitespace-pre-wrap break-words text-xs">
              {summary}
            </pre>
          </details>
        </section>
      ) : null}
      <p role="status" className="text-sm">
        {note}
      </p>
      <section className={card} aria-labelledby="paint-colours">
        <h3 id="paint-colours" className="text-xl font-semibold">
          Colour explorer
        </h3>
        <p className="mt-2 text-sm">
          Every HEX value here is an editable, approximate design example, not
          an official Dulux match, formula or colour code. Names may vary by
          market. Tools Star Hub is independent and is not affiliated with
          Dulux. Verify with physical samples and current regional colour cards.
        </p>
        <Field
          id="paint-colour-search"
          numeric={false}
          label="Search example colour names"
          value={colourQuery}
          onChange={setColourQuery}
        />
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {colours.map((c, i) =>
            c.name.toLowerCase().includes(colourQuery.toLowerCase()) ? (
              <button
                type="button"
                key={c.name}
                aria-pressed={i === colourIndex}
                className="flex min-w-0 items-center gap-2 rounded-xl border border-[#C9A227] p-3 text-left text-sm focus-visible:outline-2"
                onClick={() => setColourIndex(i)}
              >
                <span
                  className="h-9 w-9 shrink-0 rounded-md border border-gray-400"
                  style={{
                    backgroundColor: /^#[0-9a-f]{6}$/i.test(c.hex)
                      ? c.hex
                      : "#F3F4F6",
                  }}
                />
                <span className="break-words">{c.name}</span>
              </button>
            ) : null,
          )}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Field
              id="paint-hex"
              numeric={false}
              label={`${swatch.name} — approximate HEX (editable)`}
              value={swatch.hex}
              onChange={(hex) =>
                setColours((current) =>
                  current.map((c, i) =>
                    i === colourIndex ? { ...c, hex } : c,
                  ),
                )
              }
            />
            {!validHex ? (
              <p role="alert" className="text-sm text-red-700">
                Use # followed by six hexadecimal digits.
              </p>
            ) : null}
            <Button
              type="button"
              variant="secondary"
              disabled={!validHex}
              onClick={() => void copy(swatch.hex.toUpperCase())}
            >
              Copy HEX
            </Button>
          </div>
          <div
            role="img"
            aria-label={`Sample wall preview: ${swatch.name}, approximate only`}
            className="relative h-44 overflow-hidden rounded-xl border border-gray-400"
            style={{ backgroundColor: validHex ? swatch.hex : "#F3F4F6" }}
          >
            <div className="absolute bottom-0 h-7 w-full bg-[#B19B7D]" />
            <div className="absolute bottom-7 left-8 h-16 w-28 rounded-t-2xl bg-white/75" />
            <span className="absolute right-2 top-2 rounded bg-white/90 px-2 py-1 text-xs">
              Approximate sample wall
            </span>
          </div>
        </div>
        <h4 className="mt-5 font-semibold">Manufacturer references</h4>
        <ul className="mt-2 text-sm">
          {paintSources.map((source) => (
            <li className="mt-2" key={source.url}>
              <a
                className="underline underline-offset-2"
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
