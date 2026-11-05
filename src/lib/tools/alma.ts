import { parseNumber, roundTo } from "./numbers.ts";
import {
  ACTIVITY_MULTIPLIERS,
  calculateTdee,
  convertHeightCmToImperial,
  convertImperialHeightToCm,
  convertWeightForUnits,
  GAIN_SURPLUS,
  LOSE_DEFICIT,
  macrosFromCalories,
  mifflinStJeorBmr,
  type ActivityLevel,
  type Sex,
  type TdeeResult,
  type UnitSystem,
  type WeightGoal,
} from "./tdee.ts";

export {
  ACTIVITY_MULTIPLIERS,
  calculateTdee,
  convertHeightCmToImperial,
  convertImperialHeightToCm,
  convertWeightForUnits,
  GAIN_SURPLUS,
  LOSE_DEFICIT,
  macrosFromCalories,
  mifflinStJeorBmr,
};
export type { ActivityLevel, Sex, TdeeResult, UnitSystem, WeightGoal };

export const CALORIE_FLOOR = 1200;

export type MacroPlanId = "balanced" | "highProtein" | "lowerCarb" | "higherCarb" | "even";

export const MACRO_PLANS: Record<
  MacroPlanId,
  { label: string; description: string; protein: number; carbs: number; fat: number }
> = {
  balanced: {
    label: "Balanced 30/40/30",
    description: "A common starting split: 30% protein, 40% carbohydrate, 30% fat.",
    protein: 0.3,
    carbs: 0.4,
    fat: 0.3,
  },
  highProtein: {
    label: "Higher protein 40/30/30",
    description: "More protein for people emphasizing satiety or resistance training.",
    protein: 0.4,
    carbs: 0.3,
    fat: 0.3,
  },
  lowerCarb: {
    label: "Lower carb 30/25/45",
    description: "Fewer carbohydrates and more fat, still with a solid protein share.",
    protein: 0.3,
    carbs: 0.25,
    fat: 0.45,
  },
  higherCarb: {
    label: "Higher carb 20/55/25",
    description: "More carbohydrate for people with higher training volume.",
    protein: 0.2,
    carbs: 0.55,
    fat: 0.25,
  },
  even: {
    label: "Even 33/34/33",
    description: "Almost equal calorie shares across the three macros.",
    protein: 0.33,
    carbs: 0.34,
    fat: 0.33,
  },
};

export type ProteinGoal = "general" | "active" | "strength" | "loss";

export const PROTEIN_GOALS: Record<
  ProteinGoal,
  { label: string; minPerKg: number; maxPerKg: number; description: string }
> = {
  general: {
    label: "General health",
    minPerKg: 0.8,
    maxPerKg: 1.0,
    description: "About 0.8–1.0 g per kilogram of body weight, a common adult starting range.",
  },
  active: {
    label: "Regularly active",
    minPerKg: 1.2,
    maxPerKg: 1.6,
    description: "About 1.2–1.6 g/kg when you train or walk a lot most weeks.",
  },
  strength: {
    label: "Strength or muscle gain",
    minPerKg: 1.6,
    maxPerKg: 2.2,
    description: "About 1.6–2.2 g/kg used in many resistance-training plans.",
  },
  loss: {
    label: "Fat loss with muscle in mind",
    minPerKg: 1.6,
    maxPerKg: 2.2,
    description: "About 1.6–2.2 g/kg, a range often used when calories are reduced.",
  },
};

export type DeficitSize = "mild" | "standard" | "aggressive";

export const DEFICIT_OPTIONS: Record<
  DeficitSize,
  { label: string; kcal: number; description: string }
> = {
  mild: {
    label: "Mild (250 kcal)",
    kcal: 250,
    description: "A smaller daily gap that is easier to live with for longer stretches.",
  },
  standard: {
    label: "Standard (500 kcal)",
    kcal: 500,
    description: "A classic planning deficit often associated with roughly 0.5 kg fat loss per week.",
  },
  aggressive: {
    label: "Larger (750 kcal)",
    kcal: 750,
    description: "A steeper cut. Not appropriate for everyone; the tool still floors loss calories at 1,200 kcal.",
  },
};

export type MicroId =
  | "vitaminA"
  | "vitaminB1"
  | "vitaminB2"
  | "vitaminB3"
  | "vitaminB6"
  | "vitaminB12"
  | "vitaminC"
  | "vitaminD"
  | "vitaminE"
  | "vitaminK"
  | "calcium"
  | "iron"
  | "magnesium"
  | "zinc"
  | "potassium"
  | "sodium"
  | "folate";

export type MicroDefinition = {
  id: MicroId;
  name: string;
  unit: string;
  note: string;
};

export const MICRO_NUTRIENTS: MicroDefinition[] = [
  { id: "vitaminA", name: "Vitamin A", unit: "mcg RAE", note: "Retinol activity equivalents." },
  { id: "vitaminB1", name: "Vitamin B1 (thiamin)", unit: "mg", note: "Thiamin." },
  { id: "vitaminB2", name: "Vitamin B2 (riboflavin)", unit: "mg", note: "Riboflavin." },
  { id: "vitaminB3", name: "Vitamin B3 (niacin)", unit: "mg NE", note: "Niacin equivalents." },
  { id: "vitaminB6", name: "Vitamin B6", unit: "mg", note: "Pyridoxine." },
  { id: "vitaminB12", name: "Vitamin B12", unit: "mcg", note: "Cobalamin." },
  { id: "vitaminC", name: "Vitamin C", unit: "mg", note: "Ascorbic acid." },
  { id: "vitaminD", name: "Vitamin D", unit: "mcg", note: "15 mcg is 600 IU." },
  { id: "vitaminE", name: "Vitamin E", unit: "mg", note: "Alpha-tocopherol." },
  { id: "vitaminK", name: "Vitamin K", unit: "mcg", note: "Phylloquinone." },
  { id: "calcium", name: "Calcium", unit: "mg", note: "Mineral." },
  { id: "iron", name: "Iron", unit: "mg", note: "Mineral; needs are higher for many menstruating adults." },
  { id: "magnesium", name: "Magnesium", unit: "mg", note: "Mineral." },
  { id: "zinc", name: "Zinc", unit: "mg", note: "Mineral." },
  { id: "potassium", name: "Potassium", unit: "mg", note: "Adequate Intake style value." },
  { id: "sodium", name: "Sodium", unit: "mg", note: "Chronic disease risk reduction style upper guidance." },
  { id: "folate", name: "Folate", unit: "mcg DFE", note: "Dietary folate equivalents." },
];

export type MicroMap = Partial<Record<MicroId, number>>;

/**
 * General adult dietary reference values adapted from publicly described
 * NIH Office of Dietary Supplements / DRI figures. These are educational
 * population-style numbers, not personal medical targets.
 */
export function micronutrientReferences(input: { sex: Sex; age: number }): Record<MicroId, number> {
  const { sex, age } = input;
  const male = sex === "male";
  const over50 = age >= 51;
  const over70 = age >= 71;
  return {
    vitaminA: male ? 900 : 700,
    vitaminB1: male ? 1.2 : 1.1,
    vitaminB2: male ? 1.3 : 1.1,
    vitaminB3: male ? 16 : 14,
    vitaminB6: over50 ? (male ? 1.7 : 1.5) : 1.3,
    vitaminB12: 2.4,
    vitaminC: male ? 90 : 75,
    vitaminD: over70 ? 20 : 15,
    vitaminE: 15,
    vitaminK: male ? 120 : 90,
    calcium: age >= 51 && !male ? 1200 : age >= 71 ? 1200 : 1000,
    iron: male || over50 ? 8 : 18,
    magnesium: male ? (age >= 31 ? 420 : 400) : age >= 31 ? 320 : 310,
    zinc: male ? 11 : 8,
    potassium: male ? 3400 : 2600,
    sodium: 2300,
    folate: 400,
  };
}

export type MacroResult = {
  plan: MacroPlanId;
  calories: number;
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
  proteinCalories: number;
  carbCalories: number;
  fatCalories: number;
};

export function macrosFromPlan(calories: number, plan: MacroPlanId): MacroResult {
  const split = MACRO_PLANS[plan];
  const proteinCalories = calories * split.protein;
  const carbCalories = calories * split.carbs;
  const fatCalories = calories * split.fat;
  return {
    plan,
    calories: roundTo(calories, 0),
    proteinCalories: roundTo(proteinCalories, 0),
    carbCalories: roundTo(carbCalories, 0),
    fatCalories: roundTo(fatCalories, 0),
    proteinGrams: roundTo(proteinCalories / 4, 0),
    carbGrams: roundTo(carbCalories / 4, 0),
    fatGrams: roundTo(fatCalories / 9, 0),
  };
}

export type ProteinResult =
  | {
      ok: true;
      weightKg: number;
      goal: ProteinGoal;
      minGrams: number;
      maxGrams: number;
      midpointGrams: number;
      formula: string;
    }
  | { ok: false; error: string };

export function calculateProtein(input: {
  weightRaw: string;
  units: UnitSystem;
  goal: ProteinGoal;
}): ProteinResult {
  const field = input.units === "metric" ? "weight in kilograms" : "weight in pounds";
  const weight = parseNumber(input.weightRaw, { field, allowNegative: false });
  if (!weight.ok) return weight;
  if (weight.value <= 0) return { ok: false, error: "Enter a weight greater than 0." };
  const weightKg = input.units === "metric" ? weight.value : weight.value * 0.45359237;
  if (weightKg < 30 || weightKg > 300) {
    return { ok: false, error: "Enter a realistic adult body weight." };
  }
  const range = PROTEIN_GOALS[input.goal];
  const minGrams = roundTo(weightKg * range.minPerKg, 0);
  const maxGrams = roundTo(weightKg * range.maxPerKg, 0);
  const midpointGrams = roundTo((minGrams + maxGrams) / 2, 0);
  return {
    ok: true,
    weightKg: roundTo(weightKg, 2),
    goal: input.goal,
    minGrams,
    maxGrams,
    midpointGrams,
    formula: `${roundTo(weightKg, 1)} kg × ${range.minPerKg}–${range.maxPerKg} g/kg = ${minGrams}–${maxGrams} g protein per day.`,
  };
}

export type DeficitResult =
  | {
      ok: true;
      tdee: number;
      deficitKcal: number;
      size: DeficitSize;
      targetCalories: number;
      weeklyKgEstimate: number;
      formula: string;
    }
  | { ok: false; error: string };

export function calculateDeficit(input: { tdeeRaw: string; size: DeficitSize }): DeficitResult {
  const tdee = parseNumber(input.tdeeRaw, { field: "TDEE in calories", allowNegative: false });
  if (!tdee.ok) return tdee;
  if (tdee.value < 800 || tdee.value > 8000) {
    return { ok: false, error: "Enter a TDEE between 800 and 8,000 kcal." };
  }
  const deficitKcal = DEFICIT_OPTIONS[input.size].kcal;
  const targetCalories = Math.max(CALORIE_FLOOR, roundTo(tdee.value - deficitKcal, 0));
  const applied = tdee.value - targetCalories;
  // 7,700 kcal is a commonly cited energy content of about 1 kg of body fat.
  const weeklyKgEstimate = roundTo((applied * 7) / 7700, 2);
  return {
    ok: true,
    tdee: roundTo(tdee.value, 0),
    deficitKcal,
    size: input.size,
    targetCalories,
    weeklyKgEstimate,
    formula: `Target = max(${CALORIE_FLOOR}, ${roundTo(tdee.value, 0)} − ${deficitKcal}) = ${targetCalories} kcal. A planned gap of ${roundTo(applied, 0)} kcal/day is roughly ${weeklyKgEstimate} kg/week if it came entirely from body fat — real change varies.`,
  };
}

export function scaleMicros(micros: MicroMap | undefined, factor: number): MicroMap | undefined {
  if (!micros) return undefined;
  const next: MicroMap = {};
  for (const nutrient of MICRO_NUTRIENTS) {
    const value = micros[nutrient.id];
    if (typeof value === "number" && Number.isFinite(value)) {
      next[nutrient.id] = roundTo(value * factor, 2);
    }
  }
  return Object.keys(next).length > 0 ? next : undefined;
}

export function addMicros(base: MicroMap, extra: MicroMap | undefined): MicroMap {
  if (!extra) return base;
  const next: MicroMap = { ...base };
  for (const nutrient of MICRO_NUTRIENTS) {
    const value = extra[nutrient.id];
    if (typeof value === "number" && Number.isFinite(value)) {
      next[nutrient.id] = roundTo((next[nutrient.id] ?? 0) + value, 2);
    }
  }
  return next;
}

export function formatKcal(value: number): string {
  return `${roundTo(value, 0).toLocaleString("en-US")} kcal`;
}

export function formatGrams(value: number): string {
  return `${roundTo(value, 1)} g`;
}
