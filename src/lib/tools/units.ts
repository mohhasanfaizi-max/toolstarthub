import { parseNumber, roundTo } from "./numbers.ts";

export type UnitCategoryId = "length" | "weight" | "temperature";

export type LinearUnit = {
  id: string;
  label: string;
  toBase: number;
};

export type TemperatureUnit = {
  id: "celsius" | "fahrenheit" | "kelvin";
  label: string;
};

export const lengthUnits: LinearUnit[] = [
  { id: "meter", label: "Meter", toBase: 1 },
  { id: "kilometer", label: "Kilometer", toBase: 1000 },
  { id: "centimeter", label: "Centimeter", toBase: 0.01 },
  { id: "millimeter", label: "Millimeter", toBase: 0.001 },
  { id: "mile", label: "Mile", toBase: 1609.344 },
  { id: "yard", label: "Yard", toBase: 0.9144 },
  { id: "foot", label: "Foot", toBase: 0.3048 },
  { id: "inch", label: "Inch", toBase: 0.0254 },
];

export const weightUnits: LinearUnit[] = [
  { id: "kilogram", label: "Kilogram", toBase: 1 },
  { id: "gram", label: "Gram", toBase: 0.001 },
  { id: "milligram", label: "Milligram", toBase: 0.000001 },
  { id: "pound", label: "Pound", toBase: 0.45359237 },
  { id: "ounce", label: "Ounce", toBase: 0.028349523125 },
];

export const temperatureUnits: TemperatureUnit[] = [
  { id: "celsius", label: "Celsius" },
  { id: "fahrenheit", label: "Fahrenheit" },
  { id: "kelvin", label: "Kelvin" },
];

export const unitCategories: Array<{
  id: UnitCategoryId;
  label: string;
}> = [
  { id: "length", label: "Length" },
  { id: "weight", label: "Weight / Mass" },
  { id: "temperature", label: "Temperature" },
];

export function getLinearUnits(category: Exclude<UnitCategoryId, "temperature">) {
  return category === "length" ? lengthUnits : weightUnits;
}

function toKelvin(value: number, unit: TemperatureUnit["id"]): number {
  if (unit === "celsius") {
    return value + 273.15;
  }
  if (unit === "fahrenheit") {
    return ((value - 32) * 5) / 9 + 273.15;
  }
  return value;
}

function fromKelvin(value: number, unit: TemperatureUnit["id"]): number {
  if (unit === "celsius") {
    return value - 273.15;
  }
  if (unit === "fahrenheit") {
    return ((value - 273.15) * 9) / 5 + 32;
  }
  return value;
}

export type UnitConvertResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

export function convertLinear(
  raw: string,
  fromId: string,
  toId: string,
  units: LinearUnit[],
): UnitConvertResult {
  const parsed = parseNumber(raw, { field: "value" });
  if (!parsed.ok) {
    return parsed;
  }

  const from = units.find((unit) => unit.id === fromId);
  const to = units.find((unit) => unit.id === toId);

  if (!from || !to) {
    return { ok: false, error: "Choose valid units." };
  }

  const base = parsed.value * from.toBase;
  return { ok: true, value: roundTo(base / to.toBase, 12) };
}

export function convertTemperature(
  raw: string,
  fromId: TemperatureUnit["id"],
  toId: TemperatureUnit["id"],
): UnitConvertResult {
  const parsed = parseNumber(raw, { field: "temperature" });
  if (!parsed.ok) {
    return parsed;
  }

  const kelvin = toKelvin(parsed.value, fromId);

  if (kelvin < -1e-10) {
    return {
      ok: false,
      error: "Temperature cannot be below absolute zero.",
    };
  }

  return { ok: true, value: roundTo(fromKelvin(kelvin, toId), 12) };
}
