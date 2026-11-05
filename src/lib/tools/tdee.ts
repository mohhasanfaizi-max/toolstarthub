import { parseNumber, roundTo } from "./numbers.ts";

export type Sex = "male" | "female";
export type UnitSystem = "metric" | "imperial";
export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";
export type WeightGoal = "maintain" | "lose" | "gain";

export const ACTIVITY_MULTIPLIERS: Record<
  ActivityLevel,
  { label: string; multiplier: number; description: string }
> = {
  sedentary: {
    label: "Sedentary",
    multiplier: 1.2,
    description: "Little or no exercise; desk work most days",
  },
  light: {
    label: "Lightly active",
    multiplier: 1.375,
    description: "Light exercise or sports 1–3 days per week",
  },
  moderate: {
    label: "Moderately active",
    multiplier: 1.55,
    description: "Moderate exercise or sports 3–5 days per week",
  },
  active: {
    label: "Very active",
    multiplier: 1.725,
    description: "Hard exercise or sports 6–7 days per week",
  },
  veryActive: {
    label: "Extra active",
    multiplier: 1.9,
    description: "Very hard exercise, physical job, or training twice a day",
  },
};

/** Classic calorie adjustments used for planning targets (± ~0.5 kg / week). */
export const LOSE_DEFICIT = 500;
export const GAIN_SURPLUS = 300;

const LB_TO_KG = 0.45359237;
const IN_TO_CM = 2.54;

export type TdeeResult =
  | {
      ok: true;
      sex: Sex;
      age: number;
      weightKg: number;
      heightCm: number;
      activity: ActivityLevel;
      activityMultiplier: number;
      goal: WeightGoal;
      bmr: number;
      tdee: number;
      maintainCalories: number;
      loseCalories: number;
      gainCalories: number;
      goalCalories: number;
      proteinGrams: number;
      carbGrams: number;
      fatGrams: number;
      proteinCalories: number;
      carbCalories: number;
      fatCalories: number;
      formula: string;
    }
  | { ok: false; error: string };

function toKg(weight: number, units: UnitSystem): number {
  return units === "metric" ? weight : weight * LB_TO_KG;
}

function toCm(heightCmOrIn: number, units: UnitSystem): number {
  return units === "metric" ? heightCmOrIn : heightCmOrIn * IN_TO_CM;
}

/** Mifflin–St Jeor resting energy (kcal/day). */
export function mifflinStJeorBmr(input: {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
}): number {
  const base = 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age;
  return input.sex === "male" ? base + 5 : base - 161;
}

/**
 * Suggested macros for the selected goal calories:
 * 30% protein / 40% carbohydrate / 30% fat.
 */
export function macrosFromCalories(calories: number) {
  const proteinCalories = calories * 0.3;
  const carbCalories = calories * 0.4;
  const fatCalories = calories * 0.3;
  return {
    proteinCalories: roundTo(proteinCalories, 0),
    carbCalories: roundTo(carbCalories, 0),
    fatCalories: roundTo(fatCalories, 0),
    proteinGrams: roundTo(proteinCalories / 4, 0),
    carbGrams: roundTo(carbCalories / 4, 0),
    fatGrams: roundTo(fatCalories / 9, 0),
  };
}

export function calculateTdee(input: {
  sex: Sex;
  ageRaw: string;
  weightRaw: string;
  heightRaw: string;
  /** Optional feet when imperial height is split. */
  heightFeetRaw?: string;
  heightInchesRaw?: string;
  units: UnitSystem;
  activity: ActivityLevel;
  goal: WeightGoal;
  /** When true, height comes from feet + inches instead of a single field. */
  splitImperialHeight?: boolean;
}): TdeeResult {
  const age = parseNumber(input.ageRaw, { field: "age", allowNegative: false });
  if (!age.ok) return age;
  if (age.value < 15 || age.value > 100) {
    return { ok: false, error: "Enter an age between 15 and 100." };
  }
  if (!Number.isInteger(age.value)) {
    return { ok: false, error: "Enter age as a whole number of years." };
  }

  const weight = parseNumber(input.weightRaw, {
    field: input.units === "metric" ? "weight in kilograms" : "weight in pounds",
    allowNegative: false,
  });
  if (!weight.ok) return weight;
  if (weight.value <= 0) {
    return { ok: false, error: "Enter a weight greater than 0." };
  }

  let heightValue: number;
  if (input.units === "imperial" && input.splitImperialHeight) {
    const feet = parseNumber(input.heightFeetRaw ?? "", {
      field: "height in feet",
      allowNegative: false,
    });
    if (!feet.ok) return feet;
    const inchesRaw = input.heightInchesRaw?.trim() === "" ? "0" : (input.heightInchesRaw ?? "0");
    const inches = parseNumber(inchesRaw, {
      field: "height in inches",
      allowNegative: false,
    });
    if (!inches.ok) return inches;
    if (feet.value < 3 || feet.value > 8) {
      return { ok: false, error: "Enter height in feet between 3 and 8." };
    }
    if (inches.value < 0 || inches.value >= 12) {
      return { ok: false, error: "Enter inches from 0 up to (but not including) 12." };
    }
    heightValue = feet.value * 12 + inches.value;
  } else {
    const height = parseNumber(input.heightRaw, {
      field: input.units === "metric" ? "height in centimeters" : "height in inches",
      allowNegative: false,
    });
    if (!height.ok) return height;
    heightValue = height.value;
  }

  if (heightValue <= 0) {
    return { ok: false, error: "Enter a height greater than 0." };
  }

  const weightKg = toKg(weight.value, input.units);
  const heightCm = toCm(heightValue, input.units);

  if (input.units === "metric") {
    if (weightKg < 30 || weightKg > 300) {
      return { ok: false, error: "Enter a weight between 30 and 300 kg." };
    }
    if (heightCm < 120 || heightCm > 250) {
      return { ok: false, error: "Enter a height between 120 and 250 cm." };
    }
  } else {
    if (weight.value < 66 || weight.value > 660) {
      return { ok: false, error: "Enter a weight between 66 and 660 lb." };
    }
    if (heightValue < 47 || heightValue > 98) {
      return { ok: false, error: "Enter a height between 47 and 98 inches (about 3′11″–8′2″)." };
    }
  }

  const activityMeta = ACTIVITY_MULTIPLIERS[input.activity];
  const bmrRaw = mifflinStJeorBmr({
    sex: input.sex,
    weightKg,
    heightCm,
    age: age.value,
  });
  if (!Number.isFinite(bmrRaw) || bmrRaw <= 0) {
    return { ok: false, error: "These values produce an invalid BMR. Check age, height and weight." };
  }

  const bmr = roundTo(bmrRaw, 0);
  const tdee = roundTo(bmrRaw * activityMeta.multiplier, 0);
  const maintainCalories = tdee;
  const loseCalories = Math.max(1200, tdee - LOSE_DEFICIT);
  const gainCalories = tdee + GAIN_SURPLUS;
  const goalCalories =
    input.goal === "lose" ? loseCalories : input.goal === "gain" ? gainCalories : maintainCalories;
  const macros = macrosFromCalories(goalCalories);

  const sexConstant = input.sex === "male" ? "+ 5" : "− 161";
  const formula =
    `BMR = 10 × ${roundTo(weightKg, 1)} kg + 6.25 × ${roundTo(heightCm, 1)} cm − 5 × ${age.value} ${sexConstant} = ${bmr} kcal. ` +
    `TDEE = ${bmr} × ${activityMeta.multiplier} (${activityMeta.label}) = ${tdee} kcal.`;

  return {
    ok: true,
    sex: input.sex,
    age: age.value,
    weightKg: roundTo(weightKg, 2),
    heightCm: roundTo(heightCm, 1),
    activity: input.activity,
    activityMultiplier: activityMeta.multiplier,
    goal: input.goal,
    bmr,
    tdee,
    maintainCalories,
    loseCalories,
    gainCalories,
    goalCalories,
    ...macros,
    formula,
  };
}

/** Convert stored metric fields when the user flips the unit toggle. */
export function convertWeightForUnits(
  weightRaw: string,
  from: UnitSystem,
  to: UnitSystem,
): string {
  if (from === to) return weightRaw;
  const parsed = Number(weightRaw.trim());
  if (!Number.isFinite(parsed) || parsed <= 0) return weightRaw;
  if (from === "metric" && to === "imperial") {
    return String(roundTo(parsed / LB_TO_KG, 1));
  }
  return String(roundTo(parsed * LB_TO_KG, 1));
}

export function convertHeightCmToImperial(heightCmRaw: string): {
  feet: string;
  inches: string;
} {
  const cm = Number(heightCmRaw.trim());
  if (!Number.isFinite(cm) || cm <= 0) return { feet: "5", inches: "10" };
  const totalInches = cm / IN_TO_CM;
  const feet = Math.floor(totalInches / 12);
  const inches = roundTo(totalInches - feet * 12, 1);
  return { feet: String(feet), inches: String(inches) };
}

export function convertImperialHeightToCm(feetRaw: string, inchesRaw: string): string {
  const feet = Number(feetRaw.trim());
  const inches = Number((inchesRaw.trim() === "" ? "0" : inchesRaw).trim());
  if (!Number.isFinite(feet) || !Number.isFinite(inches)) return "178";
  return String(roundTo((feet * 12 + inches) * IN_TO_CM, 0));
}
