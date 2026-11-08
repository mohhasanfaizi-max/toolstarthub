/** Local-only paint planning. All geometry is normalized to metres, all paint to litres. */
export type LengthUnit = "m" | "cm" | "ft" | "in";
export type PaintUnit = "L" | "US gal" | "Imp gal";
export const METRES = { m: 1, cm: 0.01, ft: 0.3048, in: 0.0254 } as const;
export const LITRES = {
  L: 1,
  "US gal": 3.785411784,
  "Imp gal": 4.54609,
} as const;
export const CURRENCIES = ["USD", "GBP", "EUR", "AED", "CAD", "AUD"] as const;
export type PaintCurrency = (typeof CURRENCIES)[number];
export type Project =
  | "Interior Walls"
  | "Exterior Walls"
  | "Ceiling"
  | "Entire Room"
  | "Multiple Rooms"
  | "Doors and Windows"
  | "Feature Wall";
export const PROJECTS: Project[] = [
  "Interior Walls",
  "Exterior Walls",
  "Ceiling",
  "Entire Room",
  "Multiple Rooms",
  "Doors and Windows",
  "Feature Wall",
];
export type Surface = {
  width: string;
  height: string;
  count: string;
};
export type Room = {
  name: string;
  length: string;
  width: string;
  height: string;
  ceiling: boolean;
  openings: Surface[];
};
export type Can = {
  id: string;
  label: string;
  litres: number;
  price?: number;
};
export const CAN_SIZES: Can[] = [0.5, 1, 2.5, 5, 10, 15]
  .map((litres) => ({ id: `${litres}L`, label: `${litres} L`, litres }))
  .concat([
    { id: "1US", label: "1 US gal", litres: LITRES["US gal"] },
    { id: "5US", label: "5 US gal", litres: 5 * LITRES["US gal"] },
  ]);
export type PaintInput = {
  project: Project;
  unit: LengthUnit;
  output: PaintUnit;
  walls: Surface[];
  openings: Surface[];
  rooms: Room[];
  ceiling: {
    length: string;
    width: string;
  };
  coverage: string;
  coverageBasis: "m2/L" | "ft2/USgal";
  coats: string;
  waste: string;
  price: string;
  currency: PaintCurrency;
  cans: Can[];
};
export type Part = {
  name: string;
  gross: number;
  openings: number;
  deducted: number;
  ceiling: number;
  area: number;
};
export type ContainerPlan =
  | {
      ok: true;
      litres: number;
      excess: number;
      count: number;
      cost?: number;
      items: {
        can: Can;
        count: number;
      }[];
    }
  | {
      ok: false;
      error: string;
    };
export type PaintResult =
  | {
      ok: true;
      parts: Part[];
      warnings: string[];
      area: number;
      coatArea: number;
      coverage: number;
      coats: number;
      waste: number;
      baseLitres: number;
      litres: number;
      purchaseLitres: number;
      output: PaintUnit;
      currency: PaintCurrency;
      cost?: number;
      costBasis: string;
      plan: ContainerPlan;
    }
  | {
      ok: false;
      error: string;
    };
export function number(raw: string, label: string, zero = false): number {
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw.trim()))
    throw new Error(`${label}: enter a non-negative decimal number.`);
  const value = Number(raw);
  if (!Number.isFinite(value) || (zero ? value < 0 : value <= 0))
    throw new Error(
      `${label} must be ${zero ? "zero or greater" : "greater than zero"}.`,
    );
  return value;
}
export function convertLength(
  raw: string,
  from: LengthUnit,
  to: LengthUnit,
): string {
  if (!raw.trim() || !Number.isFinite(Number(raw))) return raw;
  return String((Number(raw) * METRES[from]) / METRES[to]);
}
function faceArea(rows: Surface[], unit: LengthUnit, label: string): number {
  return rows.reduce((total, row, i) => {
    const count = number(row.count, `${label} ${i + 1} quantity`);
    if (!Number.isInteger(count))
      throw new Error(`${label} quantities must be whole numbers.`);
    return (
      total +
      number(row.width, `${label} ${i + 1} width`) *
        number(row.height, `${label} ${i + 1} height`) *
        count *
        METRES[unit] ** 2
    );
  }, 0);
}
// Available sizes are from our finite catalogue. Metric cans are multiples of
// half a litre; US cans are multiples of exactly 3.785411784 L. Dynamic programs
// optimize each group, then enumerate group totals: no greedy rounding or ML.
// Lexicographic objective: least excess, then lowest fully-known cost, then tins.
export function optimizeContainers(
  need: number,
  selected: Can[],
): ContainerPlan {
  if (!Number.isFinite(need) || need < 0)
    return { ok: false, error: "Invalid paint requirement." };
  if (!selected.length)
    return {
      ok: false,
      error: "Select the container sizes your retailer actually offers.",
    };
  if (need > 5000)
    return {
      ok: false,
      error:
        "Container optimization is limited to 5,000 L. Use the volume estimate for a supplier quote.",
    };
  const cans = selected.map((can) => {
    const known = CAN_SIZES.find(
      (item) => item.id === can.id && item.litres === can.litres,
    );
    if (
      !known ||
      (can.price !== undefined &&
        (!Number.isFinite(can.price) || can.price < 0))
    )
      throw new Error("Choose valid container sizes and non-negative prices.");
    return can;
  });
  if (new Set(cans.map((can) => can.id)).size !== cans.length)
    throw new Error("Container sizes must be unique.");
  const priced = cans.every((can) => can.price !== undefined);
  type State = {
    count: number;
    cost: number;
    previous: number;
    can: Can | null;
  };
  const limit = need + Math.min(...cans.map((can) => can.litres));
  function group(gallon: boolean, step: number) {
    const size = Math.ceil(limit / step) + 1;
    const dp: (State | undefined)[] = Array(size);
    dp[0] = { count: 0, cost: 0, previous: 0, can: null };
    const choices = cans.filter((can) => can.id.endsWith("US") === gallon);
    for (let i = 1; i < size; i++)
      for (const can of choices) {
        const units = Math.round(can.litres / step);
        const prev = dp[i - units];
        if (!prev) continue;
        const next = {
          count: prev.count + 1,
          cost: prev.cost + (can.price ?? 0),
          previous: i - units,
          can,
        };
        const old = dp[i];
        if (
          !old ||
          (priced && next.cost < old.cost - 1e-9) ||
          ((!priced || Math.abs(next.cost - old.cost) < 1e-9) &&
            next.count < old.count)
        )
          dp[i] = next;
      }
    const next: number[] = Array(size);
    let nearest = -1;
    for (let i = size - 1; i >= 0; i--) {
      if (dp[i]) nearest = i;
      next[i] = nearest;
    }
    return { dp, next, step };
  }
  const metric = group(false, 0.5),
    gallon = group(true, LITRES["US gal"]);
  let best:
    | {
        m: number;
        g: number;
        litres: number;
        cost: number;
        count: number;
      }
    | undefined;
  for (let g = 0; g < gallon.dp.length; g++) {
    const gd = gallon.dp[g];
    if (!gd) continue;
    const wanted = Math.max(
      0,
      Math.ceil((need - g * gallon.step) / metric.step - 1e-10),
    );
    const m = metric.next[wanted];
    if (m === undefined || m < 0) continue;
    const md = metric.dp[m]!;
    const litres = m * metric.step + g * gallon.step;
    if (litres + 1e-9 < need) continue;
    const candidate = {
      m,
      g,
      litres,
      cost: md.cost + gd.cost,
      count: md.count + gd.count,
    };
    if (
      !best ||
      litres < best.litres - 1e-9 ||
      (Math.abs(litres - best.litres) < 1e-9 &&
        ((priced && candidate.cost < best.cost - 1e-9) ||
          ((!priced || Math.abs(candidate.cost - best.cost) < 1e-9) &&
            candidate.count < best.count)))
    )
      best = candidate;
  }
  if (!best)
    return {
      ok: false,
      error: "No container combination found within the supported range.",
    };
  const counts = new Map<Can, number>();
  for (const [group, start] of [
    [metric, best.m],
    [gallon, best.g],
  ] as const) {
    let i = start;
    while (i > 0) {
      const state = group.dp[i]!;
      counts.set(state.can!, 1 + (counts.get(state.can!) ?? 0));
      i = state.previous;
    }
  }
  return {
    ok: true,
    litres: best.litres,
    excess: Math.max(0, best.litres - need),
    count: best.count,
    cost: priced ? best.cost : undefined,
    items: [...counts].map(([can, count]) => ({ can, count })),
  };
}
export function calculatePaint(input: PaintInput): PaintResult {
  try {
    if (
      !PROJECTS.includes(input.project) ||
      !METRES[input.unit] ||
      !LITRES[input.output] ||
      !CURRENCIES.includes(input.currency)
    )
      throw new Error("Choose a supported project, unit and currency.");
    const coats = number(input.coats, "Coats");
    if (!Number.isInteger(coats) || coats > 100)
      throw new Error("Use a whole number of coats from 1 to 100.");
    const waste = number(input.waste, "Wastage", true);
    if (waste > 100) throw new Error("Wastage must be between 0 and 100%. ");
    const rate = number(input.coverage, "Coverage");
    const coverage =
      input.coverageBasis === "ft2/USgal"
        ? (rate * METRES.ft ** 2) / LITRES["US gal"]
        : rate;
    const warnings: string[] = [];
    const parts: Part[] = [];
    function part(
      name: string,
      gross: number,
      openings: number,
      ceiling: number,
    ) {
      if (openings > gross)
        warnings.push(
          `${name}: openings exceed wall area; wall area is clamped to zero. Check the measurements.`,
        );
      const deducted = Math.min(gross, openings);
      parts.push({
        name,
        gross,
        openings,
        deducted,
        ceiling,
        area: Math.max(0, gross - openings) + ceiling,
      });
    }
    if (input.project === "Entire Room" || input.project === "Multiple Rooms") {
      const rooms =
        input.project === "Entire Room" ? input.rooms.slice(0, 1) : input.rooms;
      if (!rooms.length) throw new Error("Add at least one room.");
      rooms.forEach((room, i) => {
        const l =
            number(room.length, `Room ${i + 1} length`) * METRES[input.unit],
          w = number(room.width, `Room ${i + 1} width`) * METRES[input.unit],
          h = number(room.height, `Room ${i + 1} height`) * METRES[input.unit];
        part(
          room.name || `Room ${i + 1}`,
          2 * (l + w) * h,
          faceArea(room.openings, input.unit, "Opening"),
          room.ceiling ? l * w : 0,
        );
      });
    } else if (input.project === "Ceiling") {
      part(
        "Ceiling",
        0,
        0,
        number(input.ceiling.length, "Ceiling length") *
          number(input.ceiling.width, "Ceiling width") *
          METRES[input.unit] ** 2,
      );
    } else {
      if (!input.walls.length)
        throw new Error("Add at least one wall or paintable face.");
      input.walls.forEach((wall, i) =>
        part(
          `${input.project === "Doors and Windows" ? "Face" : "Wall"} ${i + 1}`,
          faceArea([wall], input.unit, "Surface"),
          0,
          0,
        ),
      );
      if (input.project !== "Doors and Windows") {
        const openings = faceArea(input.openings, input.unit, "Opening");
        const gross = parts.reduce((sum, p) => sum + p.gross, 0);
        // Allocate openings proportionally for the itemized breakdown; deduct
        // the project total once, never once per wall quantity. No row goes negative.
        for (const wall of parts) {
          wall.openings = (openings * wall.gross) / gross;
          wall.deducted = Math.min(wall.gross, wall.openings);
          wall.area = Math.max(0, wall.gross - wall.deducted);
        }
        if (openings > gross)
          warnings.push(
            "Openings exceed wall area; project net wall area is clamped to zero.",
          );
      }
    }
    const area = Math.max(
      0,
      parts.reduce((sum, p) => sum + p.area, 0),
    );
    const coatArea = area * coats,
      baseLitres = coatArea / coverage,
      litres = baseLitres * (1 + waste / 100);
    if (!Number.isFinite(litres) || litres > 1e9)
      throw new Error(
        "This project is too large; divide it into smaller estimates.",
      );
    const plan = optimizeContainers(litres, input.cans);
    const purchaseLitres = plan.ok ? plan.litres : litres;
    const price = input.price.trim()
      ? number(input.price, "Price per output unit", true)
      : undefined;
    const cost =
      plan.ok && plan.cost !== undefined
        ? plan.cost
        : price === undefined
          ? undefined
          : (purchaseLitres / LITRES[input.output]) * price;
    return {
      ok: true,
      parts,
      warnings,
      area,
      coatArea,
      coverage,
      coats,
      waste,
      baseLitres,
      litres,
      purchaseLitres,
      output: input.output,
      currency: input.currency,
      cost,
      costBasis:
        plan.ok && plan.cost !== undefined
          ? "Selected container prices"
          : "Volume-based estimate (recommended purchase × price per unit)",
      plan,
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Check your inputs.",
    };
  }
}
export function paintSummary(
  result: Extract<
    PaintResult,
    {
      ok: true;
    }
  >,
): string {
  const n = (v: number) => v.toFixed(2),
    u = result.output,
    unit = LITRES[u];
  return [
    `Paint Calculator — Tools Star Hub`,
    `Paintable area: ${n(result.area)} m²`,
    `Area including ${result.coats} coats: ${n(result.coatArea)} m²`,
    `Coverage: ${n(result.coverage)} m²/L`,
    `Wastage: ${result.waste}%`,
    `Required including wastage: ${n(result.litres / unit)} ${u}`,
    `${result.plan.ok ? "Recommended purchase" : "Volume estimate (no container plan)"}: ${n(result.purchaseLitres / unit)} ${u}`,
    `Cost: ${result.cost === undefined ? "Not priced" : result.currency + " " + n(result.cost)} (${result.costBasis})`,
    ...result.parts.map(
      (p) =>
        `${p.name}: gross ${n(p.gross)} m² - deducted ${n(p.deducted)} m² + ceiling ${n(p.ceiling)} m² = ${n(p.area)} m²`,
    ),
    ...(result.plan.ok
      ? result.plan.items.map((item) => `${item.count} x ${item.can.label}`)
      : [result.plan.error]),
    ...result.warnings,
    `Estimate only. Labour, primer, surface preparation and equipment excluded. Check manufacturer coverage, coats and physical colour samples. Container availability is not verified.`,
  ].join("\n");
}
