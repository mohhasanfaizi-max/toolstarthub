export const PRESSURE_UNITS = ["atm", "kPa", "Pa", "bar", "mmHg"] as const;
export type PressureUnit = (typeof PRESSURE_UNITS)[number];

/** Pascals per one unit. 1 atm = 101 325 Pa exactly; 1 mmHg = 101 325 / 760 Pa. */
export const PASCALS_PER_UNIT: Record<PressureUnit, number> = {
  atm: 101325,
  kPa: 1000,
  Pa: 1,
  bar: 100000,
  mmHg: 101325 / 760,
};

/** Molar gas constant, J/(mol·K), CODATA exact value. */
export const GAS_CONSTANT = 8.314462618;

export function convertPressure(value: number, from: PressureUnit, to: PressureUnit): number {
  return (value * PASCALS_PER_UNIT[from]) / PASCALS_PER_UNIT[to];
}

export type Fail = { ok: false; error: string };

function num(raw: string, field: string, { positive = false, allowZero = true } = {}): { ok: true; value: number } | Fail {
  const trimmed = raw.trim().replace(/,/g, "");
  if (trimmed === "") return { ok: false, error: `Enter the ${field}.` };
  const value = Number(trimmed);
  if (!Number.isFinite(value)) return { ok: false, error: `The ${field} must be a number.` };
  if (value < 0) return { ok: false, error: `The ${field} cannot be negative.` };
  if (positive && value === 0 && !allowZero) return { ok: false, error: `The ${field} must be greater than zero.` };
  return { ok: true, value };
}

export type DaltonResult = { ok: true; partialPressure: number; unit: PressureUnit; steps: string[] } | Fail;

/** Dalton's law for one component: Pi = Xi × Ptotal. */
export function daltonPartialPressure(moleFractionRaw: string, totalRaw: string, unit: PressureUnit): DaltonResult {
  const x = num(moleFractionRaw, "mole fraction");
  if (!x.ok) return x;
  if (x.value > 1) return { ok: false, error: "A mole fraction must be between 0 and 1. Divide a percentage by 100 first." };
  const p = num(totalRaw, "total pressure", { positive: true, allowZero: false });
  if (!p.ok) return p;
  const partialPressure = x.value * p.value;
  return {
    ok: true,
    partialPressure,
    unit,
    steps: [
      "Dalton's law: Pᵢ = Xᵢ × P_total",
      `Pᵢ = ${x.value} × ${p.value} ${unit}`,
      `Pᵢ = ${fmt(partialPressure)} ${unit}`,
    ],
  };
}

export type GasRow = { name: string; moles: string };
export type MixtureResult =
  | {
      ok: true;
      totalMoles: number;
      rows: Array<{ name: string; moles: number; fraction: number; partialPressure: number }>;
      fractionSum: number;
      steps: string[];
    }
  | Fail;

/** Mole fractions from amounts (mol), then each partial pressure from the total. */
export function mixturePartialPressures(rows: GasRow[], totalRaw: string): MixtureResult {
  if (rows.length < 2) return { ok: false, error: "Add at least two gases." };
  const p = num(totalRaw, "total pressure", { positive: true, allowZero: false });
  if (!p.ok) return p;
  const parsed: Array<{ name: string; moles: number }> = [];
  for (const [index, row] of rows.entries()) {
    const label = row.name.trim() || `Gas ${index + 1}`;
    const m = num(row.moles, `amount of ${label}`);
    if (!m.ok) return m;
    parsed.push({ name: label, moles: m.value });
  }
  const totalMoles = parsed.reduce((sum, row) => sum + row.moles, 0);
  if (totalMoles <= 0) return { ok: false, error: "The total amount of gas must be greater than zero." };
  const out = parsed.map((row) => {
    const fraction = row.moles / totalMoles;
    return { ...row, fraction, partialPressure: fraction * p.value };
  });
  const fractionSum = out.reduce((s, r) => s + r.fraction, 0);
  return {
    ok: true,
    totalMoles,
    rows: out,
    fractionSum,
    steps: [
      `n_total = ${parsed.map((r) => fmt(r.moles)).join(" + ")} = ${fmt(totalMoles)} mol`,
      ...out.map((r) => `${r.name}: X = ${fmt(r.moles)} ÷ ${fmt(totalMoles)} = ${fmt(r.fraction)}; P = ${fmt(r.fraction)} × ${p.value} = ${fmt(r.partialPressure)}`),
    ],
  };
}

export type TotalResult = { ok: true; total: number; steps: string[] } | Fail;

/** Dalton's law of total pressure: P_total = ΣPᵢ (all in one unit). */
export function totalFromPartials(partials: string[], unit: PressureUnit): TotalResult {
  const values: number[] = [];
  for (const [index, raw] of partials.entries()) {
    const v = num(raw, `partial pressure ${index + 1}`);
    if (!v.ok) return v;
    values.push(v.value);
  }
  if (values.length < 2) return { ok: false, error: "Enter at least two partial pressures." };
  const total = values.reduce((s, v) => s + v, 0);
  return { ok: true, total, steps: [`P_total = ${values.map((v) => fmt(v)).join(" + ")} = ${fmt(total)} ${unit}`] };
}

export type IdealResult = { ok: true; pascals: number; steps: string[] } | Fail;

/** P = nRT/V. Temperature in K or °C, volume in L or m³. Result in Pa. */
export function idealGasPressure(
  molesRaw: string,
  temperatureRaw: string,
  temperatureUnit: "K" | "C",
  volumeRaw: string,
  volumeUnit: "L" | "m3",
): IdealResult {
  const n = num(molesRaw, "amount of gas");
  if (!n.ok) return n;
  const tRaw = Number(temperatureRaw.trim());
  if (temperatureRaw.trim() === "" || !Number.isFinite(tRaw)) return { ok: false, error: "Enter the temperature as a number." };
  const kelvin = temperatureUnit === "C" ? tRaw + 273.15 : tRaw;
  if (kelvin <= 0) return { ok: false, error: "The temperature must be above absolute zero (0 K or −273.15 °C)." };
  const v = num(volumeRaw, "volume", { positive: true, allowZero: false });
  if (!v.ok) return v;
  if (v.value === 0) return { ok: false, error: "The volume must be greater than zero." };
  const cubicMetres = volumeUnit === "L" ? v.value / 1000 : v.value;
  const pascals = (n.value * GAS_CONSTANT * kelvin) / cubicMetres;
  return {
    ok: true,
    pascals,
    steps: [
      "P = nRT ÷ V, with R = 8.314462618 J/(mol·K)",
      `T = ${fmt(kelvin)} K, V = ${fmt(cubicMetres)} m³`,
      `P = ${n.value} × 8.314462618 × ${fmt(kelvin)} ÷ ${fmt(cubicMetres)} = ${fmt(pascals)} Pa`,
    ],
  };
}

export function fmt(value: number, digits = 6): string {
  if (value !== 0 && (Math.abs(value) >= 1e9 || Math.abs(value) < 1e-4)) return value.toExponential(4);
  return Number(value.toPrecision(digits)).toString();
}
