import { parseNumber, roundTo } from "./numbers.ts";

export type FuelMode = "mpg" | "l100";

export type FuelCostResult =
  | {
      ok: true;
      mode: FuelMode;
      fuelPerTrip: number;
      costPerTrip: number;
      totalFuel: number;
      totalCost: number;
      trips: number;
    }
  | { ok: false; error: string };

const MAX_NUMBER = 1_000_000_000_000;

export function calculateFuelCost(input: {
  mode: FuelMode;
  distanceRaw: string;
  economyRaw: string;
  priceRaw: string;
  tripsRaw: string;
}): FuelCostResult {
  const distance = parseNumber(input.distanceRaw, { field: "distance", allowNegative: false });
  if (!distance.ok) return distance;
  const economy = parseNumber(input.economyRaw, { field: "fuel economy", allowNegative: false });
  if (!economy.ok) return economy;
  const price = parseNumber(input.priceRaw, { field: "fuel price", allowNegative: false });
  if (!price.ok) return price;
  const trips = parseNumber(input.tripsRaw, { field: "number of trips", allowNegative: false });
  if (!trips.ok) return trips;

  if (distance.value > MAX_NUMBER || price.value > MAX_NUMBER) {
    return { ok: false, error: "Enter a smaller distance or price." };
  }
  if (!Number.isInteger(trips.value) || trips.value < 1) {
    return { ok: false, error: "Enter a whole number of trips, at least 1." };
  }
  if (trips.value > 100000) return { ok: false, error: "Enter 100000 trips or fewer." };

  let fuelPerTrip = 0;
  if (input.mode === "mpg") {
    if (economy.value <= 0) return { ok: false, error: "Enter miles per gallon greater than 0." };
    if (economy.value > MAX_NUMBER) return { ok: false, error: "Enter a smaller miles-per-gallon value." };
    fuelPerTrip = distance.value / economy.value;
  } else {
    if (economy.value > 1000) return { ok: false, error: "Enter liters per 100 km of 1000 or less." };
    fuelPerTrip = distance.value * (economy.value / 100);
  }

  const costPerTrip = fuelPerTrip * price.value;
  if (!Number.isFinite(fuelPerTrip) || !Number.isFinite(costPerTrip)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }

  return {
    ok: true,
    mode: input.mode,
    fuelPerTrip: roundTo(fuelPerTrip, 4),
    costPerTrip: roundTo(costPerTrip, 2),
    totalFuel: roundTo(fuelPerTrip * trips.value, 4),
    totalCost: roundTo(costPerTrip * trips.value, 2),
    trips: trips.value,
  };
}
