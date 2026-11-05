"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { Icon } from "@/components/icons/Icon";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { formatNumber } from "@/lib/tools/numbers";
import {
  ACTIVITY_MULTIPLIERS,
  type ActivityLevel,
  type Sex,
  type UnitSystem,
  type WeightGoal,
  calculateTdee,
  convertHeightCmToImperial,
  convertImperialHeightToCm,
  convertWeightForUnits,
  type TdeeResult,
} from "@/lib/tools/tdee";

const ACTIVITY_OPTIONS = (
  Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]
).map((id) => ({
  id,
  label: `${ACTIVITY_MULTIPLIERS[id].label} (×${ACTIVITY_MULTIPLIERS[id].multiplier})`,
}));

function kcal(value: number) {
  return `${formatNumber(value, 0)} kcal`;
}

function grams(value: number) {
  return `${formatNumber(value, 0)} g`;
}

function buildShareText(result: Extract<TdeeResult, { ok: true }>) {
  return [
    "TDEE Calculator results (Mifflin–St Jeor)",
    `BMR: ${result.bmr} kcal/day`,
    `TDEE: ${result.tdee} kcal/day (×${result.activityMultiplier})`,
    `Maintain: ${result.maintainCalories} kcal`,
    `Lose (~0.5 kg/week): ${result.loseCalories} kcal`,
    `Gain: ${result.gainCalories} kcal`,
    `Goal (${result.goal}): ${result.goalCalories} kcal`,
    `Macros at goal — Protein ${result.proteinGrams} g · Carbs ${result.carbGrams} g · Fat ${result.fatGrams} g`,
    result.formula,
    "Calculated on Tools Star Hub",
  ].join("\n");
}

export function TdeeCalculatorTool() {
  const [units, setUnits] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("80");
  const [heightCm, setHeightCm] = useState("180");
  const [heightFeet, setHeightFeet] = useState("5");
  const [heightInches, setHeightInches] = useState("11");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<WeightGoal>("maintain");
  const [error, setError] = useState("");
  const [result, setResult] = useState<TdeeResult>();
  const [shareNote, setShareNote] = useState("");

  function switchUnits(next: UnitSystem) {
    if (next === units) return;
    if (next === "imperial") {
      setWeight(convertWeightForUnits(weight, "metric", "imperial"));
      const converted = convertHeightCmToImperial(heightCm);
      setHeightFeet(converted.feet);
      setHeightInches(converted.inches);
    } else {
      setWeight(convertWeightForUnits(weight, "imperial", "metric"));
      setHeightCm(convertImperialHeightToCm(heightFeet, heightInches));
    }
    setUnits(next);
    setError("");
    setResult(undefined);
    setShareNote("");
  }

  function runCalculate(nextGoal: WeightGoal = goal) {
    const next = calculateTdee({
      sex,
      ageRaw: age,
      weightRaw: weight,
      heightRaw: heightCm,
      heightFeetRaw: heightFeet,
      heightInchesRaw: heightInches,
      units,
      activity,
      goal: nextGoal,
      splitImperialHeight: units === "imperial",
    });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      setShareNote("");
      return;
    }
    setError("");
    setResult(next);
    setShareNote("");
  }

  function reset() {
    setUnits("metric");
    setSex("male");
    setAge("30");
    setWeight("80");
    setHeightCm("180");
    setHeightFeet("5");
    setHeightInches("11");
    setActivity("moderate");
    setGoal("maintain");
    setError("");
    setResult(undefined);
    setShareNote("");
  }

  function changeGoal(next: WeightGoal) {
    setGoal(next);
    if (result?.ok) {
      runCalculate(next);
    }
  }

  async function shareResults() {
    if (!result?.ok) return;
    const text = buildShareText(result);
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({
          title: "My TDEE Calculator results",
          text,
          url: "https://www.toolstarhub.com/tools/tdee-calculator",
        });
        setShareNote("Shared.");
        return;
      }
    } catch {
      // Fall through to clipboard if share is cancelled or unavailable.
    }
    try {
      await navigator.clipboard.writeText(text);
      setShareNote("Results copied for sharing.");
    } catch {
      setShareNote("Could not share. Copy the results instead.");
    }
  }

  const summary = result?.ok ? buildShareText(result) : "";
  const activityHint = ACTIVITY_MULTIPLIERS[activity].description;

  const macroBars = useMemo(() => {
    if (!result?.ok) return null;
    const total =
      result.proteinCalories + result.carbCalories + result.fatCalories || 1;
    return [
      {
        key: "protein",
        label: `Protein · ${result.proteinGrams} g (${result.proteinCalories} kcal)`,
        pct: (result.proteinCalories / total) * 100,
      },
      {
        key: "carbs",
        label: `Carbohydrates · ${result.carbGrams} g (${result.carbCalories} kcal)`,
        pct: (result.carbCalories / total) * 100,
      },
      {
        key: "fat",
        label: `Fat · ${result.fatGrams} g (${result.fatCalories} kcal)`,
        pct: (result.fatCalories / total) * 100,
      },
    ];
  }, [result]);

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Estimate your basal metabolic rate (BMR) with the Mifflin–St Jeor equation, then scale it by
        activity to get total daily energy expenditure (TDEE). Pick a weight goal to see maintenance,
        loss and gain calorie targets plus a suggested 30/40/30 macro split. This is an estimate, not
        medical advice.
      </p>

      <div className="mt-5">
        <ToolChoiceGroup
          legend="Units"
          name="tdee-units"
          value={units}
          onChange={switchUnits}
          columns="grid gap-2 sm:grid-cols-2"
          options={[
            { id: "metric", label: "Metric (kg, cm)" },
            { id: "imperial", label: "Imperial (lb, ft/in)" },
          ]}
        />
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Sex"
          name="tdee-sex"
          value={sex}
          onChange={setSex}
          columns="grid gap-2 sm:grid-cols-2"
          options={[
            { id: "male", label: "Male" },
            { id: "female", label: "Female" },
          ]}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="tdee-age" label="Age (years)" hint="Whole years from 15 to 100.">
          <input
            id="tdee-age"
            inputMode="numeric"
            autoComplete="off"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        <ToolField
          id="tdee-weight"
          label={units === "metric" ? "Weight (kg)" : "Weight (lb)"}
        >
          <input
            id="tdee-weight"
            inputMode="decimal"
            autoComplete="off"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        {units === "metric" ? (
          <ToolField id="tdee-height" label="Height (cm)" hint="Typical adult range 120–250 cm.">
            <input
              id="tdee-height"
              inputMode="decimal"
              autoComplete="off"
              value={heightCm}
              onChange={(event) => setHeightCm(event.target.value)}
              className={toolControlClass}
            />
          </ToolField>
        ) : (
          <>
            <ToolField id="tdee-feet" label="Height (feet)">
              <input
                id="tdee-feet"
                inputMode="numeric"
                autoComplete="off"
                value={heightFeet}
                onChange={(event) => setHeightFeet(event.target.value)}
                className={toolControlClass}
              />
            </ToolField>
            <ToolField id="tdee-inches" label="Height (inches)" hint="Use 0–11.9 inches.">
              <input
                id="tdee-inches"
                inputMode="decimal"
                autoComplete="off"
                value={heightInches}
                onChange={(event) => setHeightInches(event.target.value)}
                className={toolControlClass}
              />
            </ToolField>
          </>
        )}
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Activity level"
          name="tdee-activity"
          value={activity}
          onChange={setActivity}
          columns="grid gap-2"
          options={ACTIVITY_OPTIONS}
        />
        <p className="mt-2 text-sm text-muted-foreground">{activityHint}</p>
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Weight goal"
          name="tdee-goal"
          value={goal}
          onChange={changeGoal}
          columns="grid gap-2 sm:grid-cols-3"
          options={[
            { id: "maintain", label: "Maintain weight" },
            { id: "lose", label: "Lose weight" },
            { id: "gain", label: "Gain weight" },
          ]}
        />
      </div>

      {error ? (
        <div className="mt-4">
          <ToolError>{error}</ToolError>
        </div>
      ) : null}

      <div className="mt-5">
        <ToolActions>
          <Button type="button" onClick={() => runCalculate()}>
            Calculate
          </Button>
          <CopyButton value={summary} label="Copy Results" />
          <Button
            type="button"
            variant="secondary"
            onClick={shareResults}
            disabled={!result?.ok}
          >
            <Icon name="link" className="size-4" />
            Share Results
          </Button>
          <Button type="button" variant="ghost" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
        {shareNote ? (
          <p className="mt-2 text-sm text-muted-foreground" role="status">
            {shareNote}
          </p>
        ) : null}
      </div>

      {result?.ok ? (
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-foreground">Results dashboard</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Goal calories use your selected target. Loss assumes about a 500 kcal daily deficit;
              gain adds about 300 kcal. Loss calories are floored at 1,200 kcal for safety in this
              estimate.
            </p>
            <div className="mt-4">
              <ToolStatGrid
                items={[
                  { label: "Basal Metabolic Rate (BMR)", value: kcal(result.bmr) },
                  { label: "Total Daily Energy Expenditure (TDEE)", value: kcal(result.tdee) },
                  { label: "Maintenance Calories", value: kcal(result.maintainCalories) },
                  { label: "Weight Loss Calories", value: kcal(result.loseCalories) },
                  { label: "Weight Gain Calories", value: kcal(result.gainCalories) },
                  { label: "Selected Goal Calories", value: kcal(result.goalCalories) },
                ]}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-foreground">Suggested macronutrients</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Split of the selected goal calories: 30% protein, 40% carbohydrate, 30% fat (common
              starting template — adjust for your coach or clinician).
            </p>
            <div className="mt-4">
              <ToolStatGrid
                items={[
                  { label: "Suggested Protein Intake", value: grams(result.proteinGrams) },
                  { label: "Suggested Carbohydrate Intake", value: grams(result.carbGrams) },
                  { label: "Suggested Fat Intake", value: grams(result.fatGrams) },
                ]}
              />
            </div>
            {macroBars ? (
              <div className="mt-5 space-y-3">
                {macroBars.map((bar) => (
                  <div key={bar.key}>
                    <div className="flex items-center justify-between gap-3 text-sm text-foreground">
                      <span>{bar.label}</span>
                      <span className="tabular-nums text-muted-foreground">
                        {formatNumber(bar.pct, 0)}%
                      </span>
                    </div>
                    <div
                      className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(bar.pct)}
                      aria-label={bar.label}
                    >
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${Math.max(0, Math.min(100, bar.pct))}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-2xl bg-accent-soft px-4 py-4 sm:px-5">
            <p className="text-sm font-medium text-accent">How this was calculated</p>
            <p className="mt-2 text-sm leading-6 text-foreground">{result.formula}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Weight used: {formatNumber(result.weightKg, 1)} kg · Height used:{" "}
              {formatNumber(result.heightCm, 1)} cm · Age: {result.age} · Sex: {result.sex}.
            </p>
          </div>
        </div>
      ) : null}
    </ToolPanel>
  );
}
