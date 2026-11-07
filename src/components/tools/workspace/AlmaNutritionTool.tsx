"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { Icon } from "@/components/icons/Icon";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { formatNumber } from "@/lib/tools/numbers";
import {
  ACTIVITY_MULTIPLIERS,
  DEFICIT_OPTIONS,
  MACRO_PLANS,
  MICRO_NUTRIENTS,
  PROTEIN_GOALS,
  calculateDeficit,
  calculateProtein,
  calculateTdee,
  convertHeightCmToImperial,
  convertImperialHeightToCm,
  convertWeightForUnits,
  formatGrams,
  formatKcal,
  macrosFromPlan,
  micronutrientReferences,
  type ActivityLevel,
  type DeficitResult,
  type DeficitSize,
  type MacroPlanId,
  type ProteinGoal,
  type ProteinResult,
  type Sex,
  type TdeeResult,
  type UnitSystem,
  type WeightGoal,
} from "@/lib/tools/alma";
import {
  MEAL_TEMPLATES,
  MEAL_TYPES,
  SAMPLE_FOODS,
  dayEntries,
  defaultState,
  emptyDay,
  findFood,
  groceryFromPlan,
  lastNDates,
  loadState,
  newId,
  plannedFromTemplate,
  saveState,
  scaleFood,
  searchSampleFoods,
  substitutionsFor,
  todayIso,
  totalsFromEntries,
  type AlmaState,
  type DiaryEntry,
  type FoodItem,
  type MealType,
  type PlannedItem,
  type ServingUnit,
} from "@/lib/tools/alma-foods";

const TABS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "calculators", label: "Calculators" },
  { id: "tracker", label: "Food Tracker" },
  { id: "planner", label: "Meal Planner" },
  { id: "coach", label: "AI Coach" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const CALC_TABS = [
  { id: "calories", label: "Daily Calories" },
  { id: "bmr", label: "BMR" },
  { id: "tdee", label: "TDEE" },
  { id: "macros", label: "Macros" },
  { id: "protein", label: "Protein" },
  { id: "deficit", label: "Calorie Deficit" },
  { id: "micros", label: "Micronutrients" },
] as const;

type CalcTab = (typeof CALC_TABS)[number]["id"];

const COACH_PROMPTS = [
  "How many calories should I eat daily?",
  "How much protein do I need?",
  "Is my breakfast balanced?",
  "What are healthy lunch options?",
  "How can I improve my daily nutrition?",
  "Which foods contain more iron?",
  "How can I increase my fibre intake?",
  "How do I track micronutrients?",
  "What is the difference between BMR and TDEE?",
];

function ProgressRing({
  value,
  label,
  detail,
  color,
}: {
  value: number;
  label: string;
  detail: string;
  color: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const dash = circ * (1 - pct / 100);
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-background/70 px-3 py-4 text-center">
      <svg viewBox="0 0 96 96" className="size-24" aria-hidden="true">
        <circle cx="48" cy="48" r={radius} fill="none" stroke="currentColor" className="text-muted/40" strokeWidth="8" />
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={dash}
          transform="rotate(-90 48 48)"
        />
        <text x="48" y="52" textAnchor="middle" className="fill-foreground text-[14px] font-semibold">
          {Math.round(pct)}%
        </text>
      </svg>
      <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}

function TabButtons<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { id: T; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist">
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              active
                ? "border-emerald-700 bg-emerald-700 text-white"
                : "border-border bg-background text-foreground hover:border-amber-400"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function AlmaNutritionTool() {
  const [tab, setTab] = useState<TabId>("dashboard");
  const [calcTab, setCalcTab] = useState<CalcTab>("calories");
  const [units, setUnits] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("80");
  const [heightCm, setHeightCm] = useState("180");
  const [heightFeet, setHeightFeet] = useState("5");
  const [heightInches, setHeightInches] = useState("11");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<WeightGoal>("maintain");
  const [calcError, setCalcError] = useState("");
  const [tdeeResult, setTdeeResult] = useState<TdeeResult>();
  const [macroPlan, setMacroPlan] = useState<MacroPlanId>("balanced");
  const [macroCalories, setMacroCalories] = useState("2000");
  const [proteinGoal, setProteinGoal] = useState<ProteinGoal>("active");
  const [proteinResult, setProteinResult] = useState<ProteinResult>();
  const [deficitSize, setDeficitSize] = useState<DeficitSize>("standard");
  const [deficitTdee, setDeficitTdee] = useState("");
  const [deficitResult, setDeficitResult] = useState<DeficitResult>();
  const [shareNote, setShareNote] = useState("");
  const [state, setState] = useState<AlmaState>(defaultState);
  const [ready, setReady] = useState(false);
  const [date, setDate] = useState(todayIso);
  const [meal, setMeal] = useState<MealType>("breakfast");
  const [query, setQuery] = useState("");
  const [offFoods, setOffFoods] = useState<FoodItem[]>([]);
  const [offNote, setOffNote] = useState("");
  const [servings, setServings] = useState("1");
  const [unit, setUnit] = useState<ServingUnit>("serving");
  const [entryError, setEntryError] = useState("");
  const [editingId, setEditingId] = useState<string>();
  const [customName, setCustomName] = useState("");
  const [customCalories, setCustomCalories] = useState("");
  const [customProtein, setCustomProtein] = useState("");
  const [customCarbs, setCustomCarbs] = useState("");
  const [customFat, setCustomFat] = useState("");
  const [customGrams, setCustomGrams] = useState("100");
  const [customLabel, setCustomLabel] = useState("1 serving (100 g)");
  const [coachQuestion, setCoachQuestion] = useState("");
  const [coachMessages, setCoachMessages] = useState<{ role: "user" | "alma"; text: string; mode?: string }[]>([]);
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachError, setCoachError] = useState("");
  const [subFood, setSubFood] = useState("chicken-breast-cooked");

  useEffect(() => {
    const id = window.setTimeout(() => {
      setState(loadState());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (ready) saveState(state);
  }, [ready, state]);

  useEffect(() => {
    const needle = query.trim();
    if (needle.length < 2) {
      return;
    }
    const handle = window.setTimeout(() => {
      void (async () => {
        try {
          const response = await fetch(`/api/alma/foods?q=${encodeURIComponent(needle)}`);
          const data = (await response.json()) as { success?: boolean; foods?: FoodItem[]; error?: string };
          if (!response.ok || !data.success) {
            setOffFoods([]);
            setOffNote(data.error || "Packaged-food search is temporarily unavailable. Sample foods and custom entry still work; try packaged-food search again later.");
            return;
          }
          setOffFoods(data.foods ?? []);
          setOffNote(data.foods && data.foods.length > 0 ? "Open Food Facts results are labelled separately from sample foods." : "No packaged-food matches. Try sample foods or a custom entry.");
        } catch {
          setOffFoods([]);
          setOffNote("Packaged-food search is temporarily unavailable. Sample foods and custom entry still work; try packaged-food search again later.");
        }
      })();
    }, 400);
    return () => window.clearTimeout(handle);
  }, [query]);

  const updateState = useCallback((updater: (current: AlmaState) => AlmaState) => {
    setState((current) => updater(current));
  }, []);

  const day = state.days[date] ?? emptyDay(date);
  const todayTotals = useMemo(() => totalsFromEntries(dayEntries(day)), [day]);
  const calorieTarget = state.profile.calorieTarget ?? (tdeeResult?.ok ? tdeeResult.goalCalories : undefined);
  const remaining = typeof calorieTarget === "number" ? calorieTarget - todayTotals.calories : undefined;

  const sampleHits = useMemo(() => searchSampleFoods(query, state.customFoods), [query, state.customFoods]);
  const packagedFoods = query.trim().length < 2 ? [] : offFoods;
  const packagedNote = query.trim().length < 2 ? "" : offNote;

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
    setCalcError("");
  }

  function runEnergy(nextGoal: WeightGoal = goal) {
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
      setCalcError(next.error);
      setTdeeResult(undefined);
      return undefined;
    }
    setCalcError("");
    setTdeeResult(next);
    setMacroCalories(String(next.goalCalories));
    setDeficitTdee(String(next.tdee));
    const macros = macrosFromPlan(next.goalCalories, macroPlan);
    updateState((current) => ({
      ...current,
      profile: {
        ...current.profile,
        calorieTarget: next.goalCalories,
        proteinTarget: macros.proteinGrams,
        carbTarget: macros.carbGrams,
        fatTarget: macros.fatGrams,
        tdee: next.tdee,
        bmr: next.bmr,
      },
    }));
    return next;
  }

  function runProteinCalc() {
    const next = calculateProtein({ weightRaw: weight, units, goal: proteinGoal });
    setProteinResult(next);
    if (next.ok) {
      updateState((current) => ({
        ...current,
        profile: { ...current.profile, proteinTarget: next.midpointGrams },
      }));
    }
  }

  function runDeficitCalc() {
    const source = deficitTdee || (tdeeResult?.ok ? String(tdeeResult.tdee) : "");
    const next = calculateDeficit({ tdeeRaw: source, size: deficitSize });
    setDeficitResult(next);
    if (next.ok) {
      updateState((current) => ({
        ...current,
        profile: { ...current.profile, calorieTarget: next.targetCalories },
      }));
    }
  }

  function runMacrosCalc() {
    const raw = Number(macroCalories);
    if (!Number.isFinite(raw) || raw < 800 || raw > 8000) {
      setCalcError("Enter a calorie target between 800 and 8,000.");
      return;
    }
    setCalcError("");
    const macros = macrosFromPlan(raw, macroPlan);
    updateState((current) => ({
      ...current,
      profile: {
        ...current.profile,
        calorieTarget: macros.calories,
        proteinTarget: macros.proteinGrams,
        carbTarget: macros.carbGrams,
        fatTarget: macros.fatGrams,
      },
    }));
  }

  function resetForm() {
    setUnits("metric");
    setSex("male");
    setAge("30");
    setWeight("80");
    setHeightCm("180");
    setHeightFeet("5");
    setHeightInches("11");
    setActivity("moderate");
    setGoal("maintain");
    setCalcError("");
    setTdeeResult(undefined);
    setProteinResult(undefined);
    setDeficitResult(undefined);
    setShareNote("");
    setMacroPlan("balanced");
    setMacroCalories("2000");
    setProteinGoal("active");
    setDeficitSize("standard");
    setDeficitTdee("");
  }

  async function shareText(title: string, text: string) {
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, text, url: "https://www.toolstarhub.com/tools/alma-ai-nutrition-coach" });
        setShareNote("Shared.");
        return;
      }
    } catch {
      // Fall through to clipboard.
    }
    try {
      await navigator.clipboard.writeText(text);
      setShareNote("Results copied for sharing.");
    } catch {
      setShareNote("Could not share. Copy the results instead.");
    }
  }

  function mutateDay(mutator: (current: typeof day) => typeof day) {
    updateState((current) => {
      const existing = current.days[date] ?? emptyDay(date);
      return { ...current, days: { ...current.days, [date]: mutator(existing) } };
    });
  }

  function addFood(food: FoodItem) {
    const amount = Number(servings);
    if (!Number.isFinite(amount) || amount <= 0) {
      setEntryError("Enter a serving greater than 0.");
      return;
    }
    if (food.source === "open-food-facts" && unit === "ml") {
      setEntryError("Packaged-food portions use grams. Choose Grams or Servings; millilitres need a verified density.");
      return;
    }
    setEntryError("");
    const scaled = scaleFood(food, amount, unit);
    const entry: DiaryEntry = { ...scaled, id: newId("food"), meal };
    mutateDay((current) => ({
      ...current,
      meals: { ...current.meals, [meal]: [...current.meals[meal], entry] },
    }));
    setQuery("");
    setServings("1");
  }

  function saveEditedEntry(entry: DiaryEntry, nextServings: number) {
    if (!Number.isFinite(nextServings) || nextServings <= 0) {
      setEntryError("Enter a serving greater than 0.");
      return;
    }
    const food =
      findFood(entry.foodId, state.customFoods) ??
      ({
        id: entry.foodId,
        name: entry.name,
        servingLabel: "1 serving",
        servingGrams: entry.unit === "serving" ? entry.grams / (entry.servings || 1) : entry.grams || 100,
        calories: entry.unit === "serving" ? entry.calories / (entry.servings || 1) : entry.calories,
        protein: entry.unit === "serving" ? entry.protein / (entry.servings || 1) : entry.protein,
        carbs: entry.unit === "serving" ? entry.carbs / (entry.servings || 1) : entry.carbs,
        fat: entry.unit === "serving" ? entry.fat / (entry.servings || 1) : entry.fat,
        fiber: entry.fiber,
        micros: entry.micros,
        source: entry.source,
        sourceNote: "",
      } satisfies FoodItem);
    if (entry.source === "open-food-facts" && entry.unit === "ml") {
      setEntryError("This saved packaged-food entry uses millilitres. Its original density is unknown; it has not been recalculated.");
      return;
    }
    const scaled = scaleFood(food, nextServings, entry.unit);
    mutateDay((current) => ({
      ...current,
      meals: {
        ...current.meals,
        [entry.meal]: current.meals[entry.meal].map((item) => (item.id === entry.id ? { ...item, ...scaled, id: item.id, meal: item.meal } : item)),
      },
    }));
    setEditingId(undefined);
    setEntryError("");
  }

  function deleteEntry(entry: DiaryEntry) {
    mutateDay((current) => ({
      ...current,
      meals: { ...current.meals, [entry.meal]: current.meals[entry.meal].filter((item) => item.id !== entry.id) },
    }));
  }

  function addCustomFood() {
    const calories = Number(customCalories);
    const protein = Number(customProtein);
    const carbs = Number(customCarbs);
    const fat = Number(customFat);
    const grams = Number(customGrams);
    if (!customName.trim()) {
      setEntryError("Enter a name for the custom food.");
      return;
    }
    if (![calories, protein, carbs, fat, grams].every((value) => Number.isFinite(value) && value >= 0) || grams <= 0) {
      setEntryError("Enter zero or positive nutrition values and a serving size greater than 0.");
      return;
    }
    const food: FoodItem = {
      id: newId("custom"),
      name: customName.trim(),
      servingLabel: customLabel.trim() || `${grams} g`,
      servingGrams: grams,
      calories,
      protein,
      carbs,
      fat,
      source: "custom",
      sourceNote: "Entered by you from a label or package. Alma does not invent these numbers.",
    };
    updateState((current) => ({ ...current, customFoods: [food, ...current.customFoods] }));
    addFood(food);
    setCustomName("");
    setCustomCalories("");
    setCustomProtein("");
    setCustomCarbs("");
    setCustomFat("");
  }

  function addPlanItem(item: PlannedItem, planDate = date) {
    updateState((current) => {
      const existing = current.weekPlan[planDate] ?? [];
      return {
        ...current,
        weekPlan: { ...current.weekPlan, [planDate]: [...existing, { ...item, id: newId("plan") }] },
      };
    });
  }

  function removePlanItem(planDate: string, id: string) {
    updateState((current) => ({
      ...current,
      weekPlan: {
        ...current.weekPlan,
        [planDate]: (current.weekPlan[planDate] ?? []).filter((item) => item.id !== id),
      },
    }));
  }

  function fillSampleDay(planDate: string) {
    const picks = [
      MEAL_TEMPLATES.find((item) => item.id === "oats-banana"),
      MEAL_TEMPLATES.find((item) => item.id === "chicken-rice-broccoli"),
      MEAL_TEMPLATES.find((item) => item.id === "salmon-potato-greens"),
      MEAL_TEMPLATES.find((item) => item.id === "apple-almonds"),
    ];
    updateState((current) => {
      const items = picks
        .map((template) => (template ? plannedFromTemplate(template, current.customFoods) : null))
        .filter((item): item is PlannedItem => item !== null)
        .map((item) => ({ ...item, id: newId("plan") }));
      return { ...current, weekPlan: { ...current.weekPlan, [planDate]: items } };
    });
  }

  function rebuildGrocery() {
    const items = lastNDates(7).flatMap((dayKey) => state.weekPlan[dayKey] ?? []);
    updateState((current) => ({ ...current, grocery: groceryFromPlan(items) }));
  }

  async function askCoach(question = coachQuestion) {
    const trimmed = question.trim();
    if (!trimmed) {
      setCoachError("Enter a nutrition question first.");
      return;
    }
    setCoachError("");
    setCoachLoading(true);
    setCoachMessages((current) => [...current, { role: "user", text: trimmed }]);
    setCoachQuestion("");
    try {
      const response = await fetch("/api/alma/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          context: {
            calorieTarget,
            consumedCalories: todayTotals.calories,
            protein: todayTotals.protein,
            carbs: todayTotals.carbs,
            fat: todayTotals.fat,
            proteinTarget: state.profile.proteinTarget,
            carbTarget: state.profile.carbTarget,
            fatTarget: state.profile.fatTarget,
            bmr: state.profile.bmr,
            tdee: state.profile.tdee,
            mealCount: todayTotals.count,
            waterMl: day.waterMl,
            topFoods: dayEntries(day).map((item) => item.name),
          },
        }),
      });
      const data = (await response.json()) as { success?: boolean; text?: string; error?: string; mode?: string; notice?: string };
      if (!response.ok || !data.success || !data.text) {
        setCoachError(data.error || "The coach could not answer just now.");
        setCoachLoading(false);
        return;
      }
      const suffix = data.notice ? `\n\n${data.notice}` : "";
      setCoachMessages((current) => [...current, { role: "alma", text: `${data.text}${suffix}`, mode: data.mode }]);
    } catch {
      setCoachError("The coach request could not be completed.");
    } finally {
      setCoachLoading(false);
    }
  }

  const energySummary = tdeeResult?.ok
    ? [
        "Alma nutrition results (Mifflin–St Jeor)",
        `BMR: ${tdeeResult.bmr} kcal`,
        `TDEE: ${tdeeResult.tdee} kcal (×${tdeeResult.activityMultiplier})`,
        `Maintain: ${tdeeResult.maintainCalories} kcal`,
        `Lose: ${tdeeResult.loseCalories} kcal`,
        `Gain: ${tdeeResult.gainCalories} kcal`,
        `Selected goal: ${tdeeResult.goalCalories} kcal`,
        tdeeResult.formula,
        "Calculated on Tools Star Hub — not medical advice",
      ].join("\n")
    : "";

  const savedMacros = calorieTarget
    ? macrosFromPlan(calorieTarget, macroPlan)
    : undefined;
  const displayedMacros = savedMacros ?? (tdeeResult?.ok ? macrosFromPlan(tdeeResult.goalCalories, macroPlan) : undefined);
  const references = micronutrientReferences({ sex, age: Number(age) || 30 });
  const weekDates = lastNDates(7);
  const weekBars = weekDates.map((dayKey) => {
    const logged = totalsFromEntries(dayEntries(state.days[dayKey] ?? emptyDay(dayKey))).calories;
    return { date: dayKey, calories: logged };
  });
  const maxWeek = Math.max(calorieTarget ?? 0, ...weekBars.map((item) => item.calories), 1);

  const bodyInputs = (
    <div className="space-y-4">
      <ToolChoiceGroup
        legend="Units"
        name="alma-units"
        value={units}
        onChange={switchUnits}
        columns="grid gap-2 sm:grid-cols-2"
        options={[
          { id: "metric", label: "Metric (kg, cm)" },
          { id: "imperial", label: "Imperial (lb, ft/in)" },
        ]}
      />
      <ToolChoiceGroup
        legend="Sex"
        name="alma-sex"
        value={sex}
        onChange={setSex}
        columns="grid gap-2 sm:grid-cols-2"
        options={[
          { id: "male", label: "Male" },
          { id: "female", label: "Female" },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="alma-age" label="Age (years)" hint="Whole years from 15 to 100.">
          <input id="alma-age" inputMode="numeric" value={age} onChange={(event) => setAge(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="alma-weight" label={units === "metric" ? "Weight (kg)" : "Weight (lb)"}>
          <input id="alma-weight" inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} className={toolControlClass} />
        </ToolField>
        {units === "metric" ? (
          <ToolField id="alma-height" label="Height (cm)">
            <input id="alma-height" inputMode="decimal" value={heightCm} onChange={(event) => setHeightCm(event.target.value)} className={toolControlClass} />
          </ToolField>
        ) : (
          <>
            <ToolField id="alma-feet" label="Height (feet)">
              <input id="alma-feet" inputMode="numeric" value={heightFeet} onChange={(event) => setHeightFeet(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="alma-inches" label="Height (inches)">
              <input id="alma-inches" inputMode="decimal" value={heightInches} onChange={(event) => setHeightInches(event.target.value)} className={toolControlClass} />
            </ToolField>
          </>
        )}
      </div>
      <ToolChoiceGroup
        legend="Activity level"
        name="alma-activity"
        value={activity}
        onChange={setActivity}
        columns="grid gap-2"
        options={(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((id) => ({
          id,
          label: `${ACTIVITY_MULTIPLIERS[id].label} (×${ACTIVITY_MULTIPLIERS[id].multiplier})`,
        }))}
      />
      <p className="text-sm text-muted-foreground">{ACTIVITY_MULTIPLIERS[activity].description}</p>
      <ToolChoiceGroup
        legend="Weight goal"
        name="alma-goal"
        value={goal}
        onChange={(next) => {
          setGoal(next);
          if (tdeeResult?.ok) runEnergy(next);
        }}
        columns="grid gap-2 sm:grid-cols-3"
        options={[
          { id: "maintain", label: "Maintain weight" },
          { id: "lose", label: "Lose weight" },
          { id: "gain", label: "Gain weight" },
        ]}
      />
    </div>
  );

  return (
    <ToolPanel className="border-emerald-100/80">
      <p className="text-base font-medium text-emerald-800 dark:text-emerald-300">
        Your Smart AI Nutrition Coach for Free Nutrition Calculations, Food Tracking and Healthy Meal Planning.
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Alma helps you estimate daily calories, log meals, watch macros and micronutrients, and plan groceries. It is a free
        educational tool on Tools Star Hub — not a substitute for professional medical or dietetic advice, and not an official
        mobile app store listing or grocery delivery service.
      </p>

      <div className="mt-5">
        <TabButtons value={tab} onChange={setTab} options={[...TABS]} />
      </div>

      {tab === "dashboard" ? (
        <div className="mt-6 space-y-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-4 dark:border-emerald-900 dark:bg-emerald-950/30">
              <p className="text-sm text-muted-foreground">Daily calorie target</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{calorieTarget ? formatKcal(calorieTarget) : "Set in Calculators"}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background/80 px-4 py-4">
              <p className="text-sm text-muted-foreground">Calories consumed</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">{formatKcal(todayTotals.calories)}</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-4 dark:border-amber-900 dark:bg-amber-950/20">
              <p className="text-sm text-muted-foreground">Remaining calories</p>
              <p className="mt-1 text-2xl font-semibold text-amber-800 dark:text-amber-200">
                {typeof remaining === "number" ? formatKcal(remaining) : "—"}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <ProgressRing
              value={state.profile.proteinTarget ? (todayTotals.protein / state.profile.proteinTarget) * 100 : 0}
              label="Protein"
              detail={`${formatGrams(todayTotals.protein)}${state.profile.proteinTarget ? ` / ${formatGrams(state.profile.proteinTarget)}` : ""}`}
              color="#047857"
            />
            <ProgressRing
              value={state.profile.carbTarget ? (todayTotals.carbs / state.profile.carbTarget) * 100 : 0}
              label="Carbohydrates"
              detail={`${formatGrams(todayTotals.carbs)}${state.profile.carbTarget ? ` / ${formatGrams(state.profile.carbTarget)}` : ""}`}
              color="#d97706"
            />
            <ProgressRing
              value={state.profile.fatTarget ? (todayTotals.fat / state.profile.fatTarget) * 100 : 0}
              label="Fat"
              detail={`${formatGrams(todayTotals.fat)}${state.profile.fatTarget ? ` / ${formatGrams(state.profile.fatTarget)}` : ""}`}
              color="#0f766e"
            />
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground">Water intake</h3>
                <p className="text-sm text-muted-foreground">{day.waterMl} ml logged (about {Math.round(day.waterMl / 250)} glasses of 250 ml).</p>
              </div>
              <ToolActions>
                <Button type="button" variant="secondary" onClick={() => mutateDay((current) => ({ ...current, waterMl: Math.max(0, current.waterMl - 250) }))}>
                  − 250 ml
                </Button>
                <Button type="button" onClick={() => mutateDay((current) => ({ ...current, waterMl: current.waterMl + 250 }))}>
                  + 250 ml
                </Button>
              </ToolActions>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-4">
            <h3 className="text-base font-semibold text-foreground">Weekly progress</h3>
            <p className="mt-1 text-sm text-muted-foreground">Calories logged over the last seven days, stored only in this browser.</p>
            <div className="mt-4 flex h-40 items-end gap-2">
              {weekBars.map((item) => (
                <div key={item.date} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                  <div
                    className="w-full rounded-t-md bg-emerald-600/80"
                    style={{ height: `${Math.max(6, (item.calories / maxWeek) * 100)}%` }}
                    title={`${item.date}: ${item.calories} kcal`}
                  />
                  <span className="text-[10px] text-muted-foreground">{item.date.slice(5)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">Today&apos;s food diary</h3>
            {todayTotals.count === 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">No foods logged yet. Open the Food Tracker to add breakfast, lunch, dinner or snacks.</p>
            ) : (
              <ul className="mt-3 space-y-2 text-sm">
                {dayEntries(day).map((item) => (
                  <li key={item.id} className="flex justify-between gap-3 rounded-xl border border-border px-3 py-2">
                    <span>
                      <span className="font-medium capitalize">{item.meal}</span> · {item.name}
                    </span>
                    <span className="tabular-nums text-muted-foreground">{formatKcal(item.calories)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}

      {tab === "calculators" ? (
        <div className="mt-6 space-y-5">
          <TabButtons value={calcTab} onChange={setCalcTab} options={[...CALC_TABS]} />
          {(calcTab === "calories" || calcTab === "bmr" || calcTab === "tdee") && bodyInputs}
          {calcTab === "macros" ? (
            <div className="space-y-4">
              <ToolField id="alma-macro-cal" label="Calorie target" hint="Uses your last energy result if you already calculated one.">
                <input id="alma-macro-cal" inputMode="decimal" value={macroCalories} onChange={(event) => setMacroCalories(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolChoiceGroup
                legend="Macro distribution"
                name="alma-macro-plan"
                value={macroPlan}
                onChange={setMacroPlan}
                columns="grid gap-2"
                options={(Object.keys(MACRO_PLANS) as MacroPlanId[]).map((id) => ({ id, label: MACRO_PLANS[id].label }))}
              />
              <p className="text-sm text-muted-foreground">{MACRO_PLANS[macroPlan].description}</p>
            </div>
          ) : null}
          {calcTab === "protein" ? (
            <div className="space-y-4">
              <ToolChoiceGroup
                legend="Units"
                name="alma-protein-units"
                value={units}
                onChange={switchUnits}
                columns="grid gap-2 sm:grid-cols-2"
                options={[
                  { id: "metric", label: "Metric (kg)" },
                  { id: "imperial", label: "Imperial (lb)" },
                ]}
              />
              <ToolField id="alma-protein-weight" label={units === "metric" ? "Weight (kg)" : "Weight (lb)"}>
                <input id="alma-protein-weight" inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolChoiceGroup
                legend="Protein goal"
                name="alma-protein-goal"
                value={proteinGoal}
                onChange={setProteinGoal}
                columns="grid gap-2"
                options={(Object.keys(PROTEIN_GOALS) as ProteinGoal[]).map((id) => ({ id, label: PROTEIN_GOALS[id].label }))}
              />
              <p className="text-sm text-muted-foreground">{PROTEIN_GOALS[proteinGoal].description}</p>
            </div>
          ) : null}
          {calcTab === "deficit" ? (
            <div className="space-y-4">
              <ToolField id="alma-deficit-tdee" label="TDEE (kcal)" hint="Paste a TDEE or calculate one in the TDEE tab first.">
                <input
                  id="alma-deficit-tdee"
                  inputMode="decimal"
                  value={deficitTdee || (tdeeResult?.ok ? String(tdeeResult.tdee) : "")}
                  onChange={(event) => setDeficitTdee(event.target.value)}
                  className={toolControlClass}
                />
              </ToolField>
              <ToolChoiceGroup
                legend="Planned deficit"
                name="alma-deficit-size"
                value={deficitSize}
                onChange={setDeficitSize}
                columns="grid gap-2"
                options={(Object.keys(DEFICIT_OPTIONS) as DeficitSize[]).map((id) => ({ id, label: DEFICIT_OPTIONS[id].label }))}
              />
              <p className="text-sm text-muted-foreground">{DEFICIT_OPTIONS[deficitSize].description}</p>
            </div>
          ) : null}
          {calcTab === "micros" ? (
            <p className="text-sm leading-6 text-muted-foreground">
              General adult reference values below are adapted from publicly described NIH Office of Dietary Supplements / DRI
              figures. They are educational population-style numbers, not personal medical requirements. Today&apos;s logged
              totals only include micronutrients that a sample food, Open Food Facts listing, or custom entry actually provided.
            </p>
          ) : null}

          {calcError ? <ToolError>{calcError}</ToolError> : null}

          <ToolActions>
            {calcTab === "protein" ? (
              <Button type="button" onClick={runProteinCalc}>Calculate</Button>
            ) : calcTab === "deficit" ? (
              <Button type="button" onClick={runDeficitCalc}>Calculate</Button>
            ) : calcTab === "macros" ? (
              <Button type="button" onClick={runMacrosCalc}>Calculate</Button>
            ) : calcTab === "micros" ? (
              <Button type="button" onClick={() => runEnergy()}>Refresh from body details</Button>
            ) : (
              <Button type="button" onClick={() => runEnergy()}>Calculate</Button>
            )}
            <CopyButton value={energySummary} label="Copy Results" />
            <Button type="button" variant="secondary" onClick={() => energySummary && shareText("My Alma nutrition results", energySummary)} disabled={!energySummary}>
              <Icon name="link" className="size-4" />
              Share Results
            </Button>
            <Button type="button" variant="ghost" onClick={resetForm}>Reset</Button>
          </ToolActions>
          {shareNote ? <p className="text-sm text-muted-foreground">{shareNote}</p> : null}

          {tdeeResult?.ok && (calcTab === "calories" || calcTab === "bmr" || calcTab === "tdee") ? (
            <div className="space-y-4">
              <ToolStatGrid
                items={
                  calcTab === "bmr"
                    ? [{ label: "Basal Metabolic Rate (BMR)", value: formatKcal(tdeeResult.bmr) }]
                    : calcTab === "tdee"
                      ? [
                          { label: "BMR", value: formatKcal(tdeeResult.bmr) },
                          { label: "TDEE", value: formatKcal(tdeeResult.tdee) },
                          { label: "Activity multiplier", value: `×${tdeeResult.activityMultiplier}` },
                          { label: "Maintenance calories", value: formatKcal(tdeeResult.maintainCalories) },
                        ]
                      : [
                          { label: "BMR", value: formatKcal(tdeeResult.bmr) },
                          { label: "TDEE", value: formatKcal(tdeeResult.tdee) },
                          { label: "Maintenance calories", value: formatKcal(tdeeResult.maintainCalories) },
                          { label: "Weight-loss calories", value: formatKcal(tdeeResult.loseCalories) },
                          { label: "Weight-gain calories", value: formatKcal(tdeeResult.gainCalories) },
                          { label: "Selected goal calories", value: formatKcal(tdeeResult.goalCalories) },
                        ]
                }
              />
              <div className="rounded-2xl bg-amber-50 px-4 py-4 text-sm leading-6 text-foreground dark:bg-amber-950/20">
                <p className="font-medium text-amber-800 dark:text-amber-200">How this was calculated</p>
                <p className="mt-2">{tdeeResult.formula}</p>
              </div>
            </div>
          ) : null}

          {calcTab === "macros" && displayedMacros ? (
            <ToolStatGrid
              items={[
                { label: "Protein", value: formatGrams(displayedMacros.proteinGrams) },
                { label: "Carbohydrates", value: formatGrams(displayedMacros.carbGrams) },
                { label: "Fat", value: formatGrams(displayedMacros.fatGrams) },
              ]}
            />
          ) : null}

          {proteinResult?.ok && calcTab === "protein" ? (
            <div className="space-y-3">
              <ToolStatGrid
                items={[
                  { label: "Lower end", value: formatGrams(proteinResult.minGrams) },
                  { label: "Midpoint", value: formatGrams(proteinResult.midpointGrams) },
                  { label: "Upper end", value: formatGrams(proteinResult.maxGrams) },
                ]}
              />
              <p className="text-sm text-muted-foreground">{proteinResult.formula}</p>
            </div>
          ) : null}
          {proteinResult && !proteinResult.ok && calcTab === "protein" ? <ToolError>{proteinResult.error}</ToolError> : null}

          {deficitResult?.ok && calcTab === "deficit" ? (
            <div className="space-y-3">
              <ToolStatGrid
                items={[
                  { label: "TDEE", value: formatKcal(deficitResult.tdee) },
                  { label: "Target calories", value: formatKcal(deficitResult.targetCalories) },
                  { label: "Planned weekly change", value: `${deficitResult.weeklyKgEstimate} kg` },
                ]}
              />
              <p className="text-sm text-muted-foreground">{deficitResult.formula}</p>
            </div>
          ) : null}
          {deficitResult && !deficitResult.ok && calcTab === "deficit" ? <ToolError>{deficitResult.error}</ToolError> : null}

          {calcTab === "micros" ? (
            <div className="overflow-x-auto">
              <table className="mt-2 w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="py-2 pr-3 font-medium">Nutrient</th>
                    <th className="py-2 pr-3 font-medium">General reference</th>
                    <th className="py-2 pr-3 font-medium">Logged today</th>
                    <th className="py-2 font-medium">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {MICRO_NUTRIENTS.map((nutrient) => {
                    const reference = references[nutrient.id];
                    const logged = todayTotals.micros[nutrient.id];
                    const coverage = typeof logged === "number" && reference ? Math.round((logged / reference) * 100) : undefined;
                    return (
                      <tr key={nutrient.id} className="border-b border-border/70">
                        <td className="py-2 pr-3">{nutrient.name}</td>
                        <td className="py-2 pr-3 tabular-nums">{reference} {nutrient.unit}</td>
                        <td className="py-2 pr-3 tabular-nums">{typeof logged === "number" ? `${formatNumber(logged, 1)} ${nutrient.unit}` : "No labelled data"}</td>
                        <td className="py-2">{coverage !== undefined ? `${coverage}%` : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      ) : null}

      {tab === "tracker" ? (
        <div className="mt-6 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <ToolField id="alma-date" label="Diary date">
              <input id="alma-date" type="date" value={date} onChange={(event) => setDate(event.target.value || todayIso())} className={toolControlClass} />
            </ToolField>
            <ToolChoiceGroup
              legend="Add to meal"
              name="alma-meal"
              value={meal}
              onChange={setMeal}
              columns="grid gap-2 sm:grid-cols-2"
              options={MEAL_TYPES}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <ToolField id="alma-search" label="Search foods">
              <input id="alma-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Chicken, banana, yogurt…" className={toolControlClass} />
            </ToolField>
            <ToolField id="alma-servings" label={unit === "serving" ? "Servings" : unit === "g" ? "Grams" : "Millilitres"}>
              <input id="alma-servings" inputMode="decimal" value={servings} onChange={(event) => setServings(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolChoiceGroup
              legend="Portion unit"
              name="alma-unit"
              value={unit}
              onChange={setUnit}
              columns="grid gap-2"
              options={[
                { id: "serving", label: "Servings" },
                { id: "g", label: "Grams" },
                { id: "ml", label: "Millilitres" },
              ]}
            />
          </div>
          {entryError ? <ToolError>{entryError}</ToolError> : null}
          <div className="rounded-2xl border border-border p-3">
            <p className="text-sm font-medium text-foreground">Sample reference foods</p>
            <p className="mt-1 text-xs text-muted-foreground">Typical USDA-style values, clearly labelled and rounded. Alma never invents a precise packaged-food number.</p>
            <ul className="mt-3 max-h-56 space-y-2 overflow-auto">
              {sampleHits.map((food) => (
                <li key={food.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-background px-3 py-2 text-sm">
                  <span>
                    <span className="font-medium">{food.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {food.servingLabel} · {formatKcal(food.calories)} · P {food.protein}g · C {food.carbs}g · F {food.fat}g · {food.source === "custom" ? "Your entry" : "Sample"}
                    </span>
                  </span>
                  <Button type="button" variant="secondary" onClick={() => addFood(food)}>Add</Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200/80 p-3">
            <p className="text-sm font-medium text-foreground">Packaged foods (Open Food Facts)</p>
            <p role="status" className="mt-1 text-xs text-muted-foreground">{packagedNote || "Type at least two letters to search community nutrition data. Results use the displayed gram portion (or 100 g when no gram serving is available). Volume-based products are excluded; check the package label."}</p>
            <ul className="mt-3 max-h-48 space-y-2 overflow-auto">
              {packagedFoods.map((food) => (
                <li key={food.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-background px-3 py-2 text-sm">
                  <span>
                    <span className="font-medium">{food.name}{food.brand ? ` · ${food.brand}` : ""}</span>
                    <span className="block text-xs text-muted-foreground">
                      {food.servingLabel} · {formatKcal(food.calories)} · P {food.protein}g · C {food.carbs}g · F {food.fat}g
                    </span>
                  </span>
                  <Button type="button" variant="secondary" onClick={() => addFood(food)}>Add</Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <h3 className="text-base font-semibold text-foreground">Custom food from a label</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <ToolField id="custom-name" label="Name">
                <input id="custom-name" value={customName} onChange={(event) => setCustomName(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-label" label="Serving label">
                <input id="custom-label" value={customLabel} onChange={(event) => setCustomLabel(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-grams" label="Serving grams">
                <input id="custom-grams" inputMode="decimal" value={customGrams} onChange={(event) => setCustomGrams(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-kcal" label="Calories">
                <input id="custom-kcal" inputMode="decimal" value={customCalories} onChange={(event) => setCustomCalories(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-p" label="Protein (g)">
                <input id="custom-p" inputMode="decimal" value={customProtein} onChange={(event) => setCustomProtein(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-c" label="Carbs (g)">
                <input id="custom-c" inputMode="decimal" value={customCarbs} onChange={(event) => setCustomCarbs(event.target.value)} className={toolControlClass} />
              </ToolField>
              <ToolField id="custom-f" label="Fat (g)">
                <input id="custom-f" inputMode="decimal" value={customFat} onChange={(event) => setCustomFat(event.target.value)} className={toolControlClass} />
              </ToolField>
            </div>
            <div className="mt-4">
              <Button type="button" onClick={addCustomFood}>Save and add custom food</Button>
            </div>
          </div>
          {MEAL_TYPES.map((item) => (
            <div key={item.id}>
              <h3 className="text-base font-semibold capitalize text-foreground">{item.label}</h3>
              {day.meals[item.id].length === 0 ? (
                <p className="mt-1 text-sm text-muted-foreground">No items yet.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {day.meals[item.id].map((entry) => (
                    <li key={entry.id} className="rounded-xl border border-border px-3 py-3 text-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-medium">{entry.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {entry.servings} {entry.unit} · {formatKcal(entry.calories)} · P {entry.protein}g · C {entry.carbs}g · F {entry.fat}g
                            {entry.source === "sample" ? " · Sample reference" : entry.source === "open-food-facts" ? " · Open Food Facts" : " · Custom"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button type="button" variant="secondary" onClick={() => setEditingId(entry.id)}>Edit</Button>
                          <Button type="button" variant="ghost" onClick={() => deleteEntry(entry)}>Delete</Button>
                        </div>
                      </div>
                      {editingId === entry.id ? (
                        <div className="mt-3 flex flex-wrap items-end gap-2">
                          <ToolField id={`edit-${entry.id}`} label="New amount">
                            <input
                              id={`edit-${entry.id}`}
                              defaultValue={String(entry.servings)}
                              className={toolControlClass}
                              onBlur={(event) => saveEditedEntry(entry, Number(event.target.value))}
                            />
                          </ToolField>
                          <Button type="button" onClick={() => {
                            const input = document.getElementById(`edit-${entry.id}`) as HTMLInputElement | null;
                            saveEditedEntry(entry, Number(input?.value ?? entry.servings));
                          }}>Save</Button>
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="rounded-2xl bg-emerald-50 px-4 py-4 text-sm dark:bg-emerald-950/20">
            <p className="font-medium text-emerald-800 dark:text-emerald-200">Day total</p>
            <p className="mt-1">{formatKcal(todayTotals.calories)} · Protein {formatGrams(todayTotals.protein)} · Carbs {formatGrams(todayTotals.carbs)} · Fat {formatGrams(todayTotals.fat)}</p>
          </div>
        </div>
      ) : null}

      {tab === "planner" ? (
        <div className="mt-6 space-y-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Drop suggested meals onto any day this week, edit the plan, then build a grocery list. Plans stay in this browser.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {MEAL_TEMPLATES.map((template) => {
              const planned = plannedFromTemplate(template, state.customFoods);
              if (!planned) return null;
              return (
                <div key={template.id} className="rounded-2xl border border-border p-4 text-sm">
                  <p className="font-medium text-foreground">{planned.name}</p>
                  <p className="mt-1 capitalize text-muted-foreground">
                    {planned.meal} · {formatKcal(planned.calories)} · P {planned.protein}g · C {planned.carbs}g · F {planned.fat}g
                  </p>
                  <div className="mt-3">
                    <Button type="button" variant="secondary" onClick={() => addPlanItem(planned)}>Add to {date}</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <ToolActions>
            <Button type="button" onClick={() => fillSampleDay(date)}>Fill a sample day</Button>
            <Button type="button" variant="secondary" onClick={rebuildGrocery}>Build grocery list</Button>
          </ToolActions>
          <div className="space-y-4">
            {weekDates.map((dayKey) => (
              <div key={dayKey} className="rounded-2xl border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{dayKey}</h3>
                  <Button type="button" variant="ghost" onClick={() => fillSampleDay(dayKey)}>Fill sample meals</Button>
                </div>
                {(state.weekPlan[dayKey] ?? []).length === 0 ? (
                  <p className="mt-2 text-sm text-muted-foreground">No planned meals yet.</p>
                ) : (
                  <ul className="mt-2 space-y-2 text-sm">
                    {(state.weekPlan[dayKey] ?? []).map((item) => (
                      <li key={item.id} className="flex flex-wrap items-center justify-between gap-2">
                        <span className="capitalize">{item.meal} · {item.name} · {formatKcal(item.calories)}</span>
                        <Button type="button" variant="ghost" onClick={() => removePlanItem(dayKey, item.id)}>Remove</Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-200 p-4">
            <h3 className="text-base font-semibold text-foreground">Grocery list</h3>
            {state.grocery.length === 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">Build a list from this week&apos;s planned meals.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {state.grocery.map((item) => (
                  <li key={item.id} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        updateState((current) => ({
                          ...current,
                          grocery: current.grocery.map((row) => (row.id === item.id ? { ...row, checked: !row.checked } : row)),
                        }))
                      }
                    />
                    <span className={item.checked ? "text-muted-foreground line-through" : ""}>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-2xl border border-border p-4">
            <h3 className="text-base font-semibold text-foreground">Food substitutions</h3>
            <ToolField id="alma-sub" label="Starting food">
              <select id="alma-sub" value={subFood} onChange={(event) => setSubFood(event.target.value)} className={toolControlClass}>
                {SAMPLE_FOODS.filter((food) => substitutionsFor(food.id).length > 0).map((food) => (
                  <option key={food.id} value={food.id}>{food.name}</option>
                ))}
              </select>
            </ToolField>
            <ul className="mt-3 space-y-2 text-sm">
              {substitutionsFor(subFood).map((item) => (
                <li key={item.with} className="rounded-xl bg-background px-3 py-2">
                  <span className="font-medium">{item.replace} → {item.with}</span>
                  <span className="mt-1 block text-muted-foreground">{item.why}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {tab === "coach" ? (
        <div className="mt-6 space-y-4">
          <p className="text-sm leading-6 text-muted-foreground">
            Ask about calories, protein, meal balance or micronutrients. Each question sends your question, saved targets,
            selected diary day&apos;s calorie and macro totals, food-entry count, water intake and food names to this site.
            When configured, Gemini receives your question and a summary (including up to eight food names).
            Otherwise, or if AI fails, the server returns a labelled educational rule-based reply.
            Avoid sensitive details. Neither option is medical advice; see the privacy policy for the exact fields.
          </p>
          <div className="flex flex-wrap gap-2">
            {COACH_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="rounded-full border border-border px-3 py-1.5 text-xs hover:border-amber-400"
                onClick={() => {
                  setCoachQuestion(prompt);
                  void askCoach(prompt);
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="max-h-80 space-y-3 overflow-auto rounded-2xl border border-border bg-background/70 p-4">
            {coachMessages.length === 0 ? (
              <p className="text-sm text-muted-foreground">No questions yet. Try “How much protein do I need?”</p>
            ) : (
              coachMessages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === "user" ? "text-sm" : "rounded-xl bg-emerald-50 px-3 py-3 text-sm dark:bg-emerald-950/20"}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {message.role === "user" ? "You" : message.mode === "gemini" ? "Alma (AI-assisted reply)" : "Alma (educational coach)"}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap leading-6">{message.text}</p>
                </div>
              ))
            )}
          </div>
          {coachError ? <ToolError>{coachError}</ToolError> : null}
          <ToolField id="alma-coach-q" label="Your question">
            <textarea id="alma-coach-q" rows={3} value={coachQuestion} onChange={(event) => setCoachQuestion(event.target.value)} className={toolControlClass} />
          </ToolField>
          <ToolActions>
            <Button type="button" onClick={() => askCoach()} disabled={coachLoading}>{coachLoading ? "Thinking…" : "Ask Alma"}</Button>
            <Button type="button" variant="ghost" onClick={() => { setCoachMessages([]); setCoachError(""); }}>Clear conversation</Button>
          </ToolActions>
        </div>
      ) : null}

      <ToolPrivacyNote>
        Your food diary, meal plans, grocery list and calculator targets are saved in this browser with localStorage. Tools Star
        Hub does not create an Alma account or store that diary on a server. Asking the coach sends your question and selected diary day&apos;s
        nutrition context to this website; when configured, Gemini receives a summary to reply.
        Packaged-food search queries go through this site to Open Food Facts.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
