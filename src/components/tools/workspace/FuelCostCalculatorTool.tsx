"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateFuelCost, type FuelMode } from "@/lib/tools/fuel-cost";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function FuelCostCalculatorTool() {
  const [mode, setMode] = useState<FuelMode>("mpg");
  const [distance, setDistance] = useState("100");
  const [economy, setEconomy] = useState("25");
  const [price, setPrice] = useState("3.50");
  const [trips, setTrips] = useState("1");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateFuelCost>>();

  function calculate() {
    const next = calculateFuelCost({
      mode,
      distanceRaw: distance,
      economyRaw: economy,
      priceRaw: price,
      tripsRaw: trips,
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
    setMode("mpg");
    setDistance("100");
    setEconomy("25");
    setPrice("3.50");
    setTrips("1");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok ? `Fuel per trip: ${formatNumber(result.fuelPerTrip, 4)}\nTotal cost: ${money(result.totalCost)}` : "";
  const fuelUnit = mode === "mpg" ? "gallons" : "liters";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Fuel cost uses the price you type. The page does not look up a live fuel price.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Units"
          name="fuel-mode"
          value={mode}
          onChange={(next) => {
            setMode(next);
            setEconomy(next === "mpg" ? "25" : "8");
            setPrice(next === "mpg" ? "3.50" : "1.50");
          }}
          options={[
            { id: "mpg", label: "Miles, MPG, price per gallon" },
            { id: "l100", label: "Kilometers, L/100 km, price per liter" },
          ]}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="fuel-distance" label={mode === "mpg" ? "Distance (miles)" : "Distance (kilometers)"}>
          <input id="fuel-distance" inputMode="decimal" value={distance} onChange={(event) => setDistance(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="fuel-economy" label={mode === "mpg" ? "Fuel economy (miles per gallon)" : "Fuel economy (liters per 100 km)"}>
          <input id="fuel-economy" inputMode="decimal" value={economy} onChange={(event) => setEconomy(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="fuel-price" label={mode === "mpg" ? "Price per gallon (USD)" : "Price per liter (USD)"}>
          <input id="fuel-price" inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="fuel-trips" label="Number of trips">
          <input id="fuel-trips" inputMode="numeric" value={trips} onChange={(event) => setTrips(event.target.value)} className={toolControlClass} />
        </ToolField>
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
        <div className="mt-6">
          <ToolStatGrid
            items={[
              { label: `Fuel used per trip (${fuelUnit})`, value: formatNumber(result.fuelPerTrip, 4) },
              { label: "Fuel cost per trip", value: money(result.costPerTrip) },
              { label: `Total fuel used (${fuelUnit})`, value: formatNumber(result.totalFuel, 4) },
              { label: "Total fuel cost", value: money(result.totalCost) },
            ]}
          />
        </div>
      ) : null}
    </ToolPanel>
  );
}
