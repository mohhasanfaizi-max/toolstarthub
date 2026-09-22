"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import { formatNumber } from "@/lib/tools/numbers";
import {
  convertLinear,
  convertTemperature,
  getLinearUnits,
  temperatureUnits,
  unitCategories,
  type TemperatureUnit,
  type UnitCategoryId,
} from "@/lib/tools/units";

export function UnitConverterTool() {
  const [category, setCategory] = useState<UnitCategoryId>("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");
  const [value, setValue] = useState("1");

  const units =
    category === "temperature" ? temperatureUnits : getLinearUnits(category);

  const converted =
    category === "temperature"
      ? convertTemperature(
          value,
          fromUnit as TemperatureUnit["id"],
          toUnit as TemperatureUnit["id"],
        )
      : convertLinear(value, fromUnit, toUnit, getLinearUnits(category));

  function changeCategory(next: UnitCategoryId) {
    setCategory(next);

    if (next === "temperature") {
      setFromUnit("celsius");
      setToUnit("fahrenheit");
      return;
    }

    const nextUnits = getLinearUnits(next);
    setFromUnit(nextUnits[0].id);
    setToUnit(nextUnits[1]?.id ?? nextUnits[0].id);
  }

  function swap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (converted.ok) {
      setValue(String(converted.value));
    }
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="unit-category" label="Category">
          <select
            id="unit-category"
            value={category}
            onChange={(event) =>
              changeCategory(event.target.value as UnitCategoryId)
            }
            className={toolControlClass}
          >
            {unitCategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </ToolField>
        <ToolField id="unit-value" label="Value">
          <input
            id="unit-value"
            inputMode="decimal"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        <ToolField id="unit-from" label="From">
          <select
            id="unit-from"
            value={fromUnit}
            onChange={(event) => setFromUnit(event.target.value)}
            className={toolControlClass}
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.label}
              </option>
            ))}
          </select>
        </ToolField>
        <ToolField id="unit-to" label="To">
          <select
            id="unit-to"
            value={toUnit}
            onChange={(event) => setToUnit(event.target.value)}
            className={toolControlClass}
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.label}
              </option>
            ))}
          </select>
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={swap}>
            Swap units
          </Button>
          {converted.ok ? (
            <CopyButton value={formatNumber(converted.value)} />
          ) : null}
        </ToolActions>
      </div>

      <div className="mt-6">
        {value.trim() === "" ? (
          <p className="text-sm text-muted-foreground">Enter a value to convert.</p>
        ) : converted.ok ? (
          <ToolOutput>
            <p className="text-3xl font-semibold break-all tabular-nums">
              {formatNumber(converted.value)}
            </p>
          </ToolOutput>
        ) : (
          <ToolError>{converted.error}</ToolError>
        )}
      </div>
    </ToolPanel>
  );
}
