import { roundTo } from "./numbers.ts";
import {
  MICRO_NUTRIENTS,
  addMicros,
  scaleMicros,
  type MicroId,
  type MicroMap,
} from "./alma.ts";

export type FoodSource = "sample" | "open-food-facts" | "custom";
export type MealType = "breakfast" | "lunch" | "dinner" | "snacks";
export type ServingUnit = "serving" | "g" | "ml";

export const MEAL_TYPES: { id: MealType; label: string }[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "snacks", label: "Snacks" },
];

export const STORAGE_KEY = "toolstarhub-alma-v1";

export type FoodItem = {
  id: string;
  name: string;
  brand?: string;
  servingLabel: string;
  servingGrams: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  micros?: MicroMap;
  source: FoodSource;
  sourceNote: string;
};

export type DiaryEntry = {
  id: string;
  foodId: string;
  name: string;
  meal: MealType;
  servings: number;
  unit: ServingUnit;
  grams: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  micros?: MicroMap;
  source: FoodSource;
};

export type DayLog = {
  date: string;
  meals: Record<MealType, DiaryEntry[]>;
  waterMl: number;
};

export type PlannedItem = {
  id: string;
  name: string;
  meal: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
};

export type GroceryItem = {
  id: string;
  name: string;
  checked: boolean;
};

export type AlmaProfile = {
  calorieTarget?: number;
  proteinTarget?: number;
  carbTarget?: number;
  fatTarget?: number;
  tdee?: number;
  bmr?: number;
};

export type AlmaState = {
  profile: AlmaProfile;
  customFoods: FoodItem[];
  days: Record<string, DayLog>;
  weekPlan: Record<string, PlannedItem[]>;
  grocery: GroceryItem[];
};

export const EMPTY_MEALS = (): Record<MealType, DiaryEntry[]> => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  snacks: [],
});

export function todayIso(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function emptyDay(date: string): DayLog {
  return { date, meals: EMPTY_MEALS(), waterMl: 0 };
}

const SAMPLE_NOTE =
  "Sample reference food with typical published USDA-style values, rounded for education. Not a laboratory analysis.";

function sample(
  id: string,
  name: string,
  servingLabel: string,
  servingGrams: number,
  calories: number,
  protein: number,
  carbs: number,
  fat: number,
  extras?: { fiber?: number; micros?: MicroMap },
): FoodItem {
  return {
    id,
    name,
    servingLabel,
    servingGrams,
    calories,
    protein,
    carbs,
    fat,
    fiber: extras?.fiber,
    micros: extras?.micros,
    source: "sample",
    sourceNote: SAMPLE_NOTE,
  };
}

/**
 * Typical USDA-style figures for common whole foods, rounded.
 * Micronutrients are included only where widely published values are available.
 */
export const SAMPLE_FOODS: FoodItem[] = [
  sample("chicken-breast-cooked", "Chicken breast, cooked, skinless", "100 g", 100, 165, 31, 0, 3.6),
  sample("turkey-breast-cooked", "Turkey breast, roasted", "100 g", 100, 135, 30.1, 0, 0.7),
  sample("salmon-cooked", "Salmon, cooked", "100 g", 100, 206, 22.1, 0, 12.4, {
    micros: { vitaminD: 11, vitaminB12: 2.8, potassium: 384 },
  }),
  sample("tuna-canned-water", "Tuna, canned in water, drained", "100 g", 100, 116, 25.5, 0, 0.8, {
    micros: { vitaminB12: 2.5 },
  }),
  sample("egg-large", "Egg, whole, large", "1 large (50 g)", 50, 72, 6.3, 0.4, 4.8, {
    micros: { vitaminB12: 0.56, vitaminD: 1, vitaminA: 80 },
  }),
  sample("tofu-firm", "Tofu, firm", "100 g", 100, 144, 17.3, 2.8, 8.7, {
    micros: { calcium: 350, iron: 2.7 },
  }),
  sample("lentils-cooked", "Lentils, cooked", "100 g", 100, 116, 9.0, 20.1, 0.4, {
    fiber: 7.9,
    micros: { iron: 3.3, folate: 181, magnesium: 36, potassium: 369 },
  }),
  sample("black-beans-cooked", "Black beans, cooked", "100 g", 100, 132, 8.9, 23.7, 0.5, {
    fiber: 8.7,
    micros: { iron: 2.1, folate: 149, potassium: 355 },
  }),
  sample("chickpeas-cooked", "Chickpeas, cooked", "100 g", 100, 164, 8.9, 27.4, 2.6, {
    fiber: 7.6,
    micros: { iron: 2.9, folate: 172 },
  }),
  sample("greek-yogurt-nonfat", "Greek yogurt, plain, nonfat", "170 g container", 170, 100, 17.3, 6.1, 0.7, {
    micros: { calcium: 187, vitaminB12: 1.3 },
  }),
  sample("milk-whole", "Milk, whole", "1 cup (244 g)", 244, 149, 7.7, 11.7, 7.9, {
    micros: { calcium: 276, vitaminB12: 1.1, potassium: 322 },
  }),
  sample("cheddar", "Cheddar cheese", "28 g (1 oz)", 28, 113, 6.4, 0.4, 9.3, {
    micros: { calcium: 199, vitaminA: 75 },
  }),
  sample("cottage-cheese-lowfat", "Cottage cheese, low-fat", "100 g", 100, 81, 10.5, 3.4, 2.3, {
    micros: { calcium: 83, vitaminB12: 0.6 },
  }),
  sample("oats-dry", "Oats, rolled, dry", "40 g (about 1/2 cup)", 40, 156, 6.8, 26.5, 2.8, {
    fiber: 4.0,
    micros: { iron: 1.7, magnesium: 55, zinc: 1.5 },
  }),
  sample("brown-rice-cooked", "Brown rice, cooked", "100 g", 100, 123, 2.7, 25.6, 1.0, { fiber: 1.6 }),
  sample("white-rice-cooked", "White rice, cooked", "100 g", 100, 130, 2.7, 28.2, 0.3, { fiber: 0.4 }),
  sample("quinoa-cooked", "Quinoa, cooked", "100 g", 100, 120, 4.4, 21.3, 1.9, {
    fiber: 2.8,
    micros: { iron: 1.5, magnesium: 64, folate: 42 },
  }),
  sample("pasta-cooked", "Pasta, cooked", "100 g", 100, 131, 5.0, 25.0, 1.1, { fiber: 1.8 }),
  sample("whole-wheat-bread", "Whole-wheat bread", "1 slice (32 g)", 32, 81, 4.0, 13.8, 1.1, {
    fiber: 1.9,
    micros: { iron: 0.8, folate: 14 },
  }),
  sample("banana-medium", "Banana, medium", "1 medium (118 g)", 118, 105, 1.3, 27.0, 0.4, {
    fiber: 3.1,
    micros: { potassium: 422, vitaminB6: 0.4, vitaminC: 10 },
  }),
  sample("apple-medium", "Apple, medium, with skin", "1 medium (182 g)", 182, 95, 0.5, 25.1, 0.3, {
    fiber: 4.4,
    micros: { vitaminC: 8, potassium: 195 },
  }),
  sample("orange-medium", "Orange, medium", "1 medium (131 g)", 131, 62, 1.2, 15.4, 0.2, {
    fiber: 3.1,
    micros: { vitaminC: 70, folate: 40, potassium: 237 },
  }),
  sample("blueberries", "Blueberries", "100 g", 100, 57, 0.7, 14.5, 0.3, {
    fiber: 2.4,
    micros: { vitaminC: 9.7, vitaminK: 19 },
  }),
  sample("strawberries", "Strawberries", "100 g", 100, 32, 0.7, 7.7, 0.3, {
    fiber: 2.0,
    micros: { vitaminC: 59, folate: 24 },
  }),
  sample("broccoli-cooked", "Broccoli, cooked", "100 g", 100, 35, 2.4, 7.2, 0.4, {
    fiber: 3.3,
    micros: { vitaminC: 65, vitaminK: 141, folate: 108, vitaminA: 77 },
  }),
  sample("spinach-raw", "Spinach, raw", "100 g", 100, 23, 2.9, 3.6, 0.4, {
    fiber: 2.2,
    micros: { vitaminA: 469, vitaminK: 483, folate: 194, iron: 2.7, magnesium: 79, potassium: 558, calcium: 99 },
  }),
  sample("sweet-potato-baked", "Sweet potato, baked", "100 g", 100, 90, 2.0, 20.7, 0.2, {
    fiber: 3.3,
    micros: { vitaminA: 709, potassium: 337, vitaminC: 19.6 },
  }),
  sample("potato-baked", "Potato, baked, with skin", "100 g", 100, 93, 2.5, 21.1, 0.1, {
    fiber: 2.2,
    micros: { potassium: 535, vitaminC: 9.6 },
  }),
  sample("carrot-raw", "Carrot, raw", "100 g", 100, 41, 0.9, 9.6, 0.2, {
    fiber: 2.8,
    micros: { vitaminA: 835, vitaminK: 13, potassium: 320 },
  }),
  sample("avocado", "Avocado", "100 g", 100, 160, 2.0, 8.5, 14.7, {
    fiber: 6.7,
    micros: { potassium: 485, folate: 81, vitaminK: 21 },
  }),
  sample("almonds", "Almonds", "28 g (1 oz)", 28, 164, 6.0, 6.1, 14.2, {
    fiber: 3.5,
    micros: { vitaminE: 7.3, magnesium: 76, calcium: 76 },
  }),
  sample("peanut-butter", "Peanut butter", "32 g (2 tbsp)", 32, 188, 8.0, 6.0, 16.0, {
    fiber: 1.8,
    micros: { magnesium: 49, zinc: 0.9 },
  }),
  sample("olive-oil", "Olive oil", "14 g (1 tbsp)", 14, 119, 0, 0, 13.5, {
    micros: { vitaminE: 1.9, vitaminK: 8.1 },
  }),
  sample("hummus", "Hummus", "100 g", 100, 166, 8.0, 14.3, 9.6, { fiber: 6.0 }),
  sample("ground-beef-90", "Ground beef, 90% lean, cooked", "100 g", 100, 217, 26.1, 0, 11.8, {
    micros: { iron: 2.6, zinc: 6.4, vitaminB12: 2.5 },
  }),
  sample("tomato-raw", "Tomato, raw", "100 g", 100, 18, 0.9, 3.9, 0.2, {
    fiber: 1.2,
    micros: { vitaminC: 14, potassium: 237, vitaminA: 42 },
  }),
];

export const SUBSTITUTIONS: Record<string, { replace: string; with: string; why: string }[]> = {
  "chicken-breast-cooked": [
    { replace: "Chicken breast", with: "Tofu, firm", why: "Similar protein-forward role in a meal, with iron and calcium instead of animal protein." },
    { replace: "Chicken breast", with: "Turkey breast, roasted", why: "Another lean poultry option with a similar calorie and protein profile." },
    { replace: "Chicken breast", with: "Lentils, cooked", why: "A plant swap that adds fiber and folate along with protein." },
  ],
  "white-rice-cooked": [
    { replace: "White rice", with: "Brown rice, cooked", why: "Keeps the grain role while adding a little more fiber." },
    { replace: "White rice", with: "Quinoa, cooked", why: "Adds more protein and minerals per similar cooked portion." },
    { replace: "White rice", with: "Potato, baked, with skin", why: "A starchy side with potassium if you want to change the grain." },
  ],
  "milk-whole": [
    { replace: "Whole milk", with: "Greek yogurt, plain, nonfat", why: "More protein per calorie if you want a dairy swap." },
  ],
  "salmon-cooked": [
    { replace: "Salmon", with: "Tuna, canned in water, drained", why: "Another fish option with protein and vitamin B12, usually leaner." },
  ],
  "pasta-cooked": [
    { replace: "Pasta", with: "Quinoa, cooked", why: "A gluten-free grain-like side with more protein than many pastas." },
  ],
};

export type MealTemplate = {
  id: string;
  name: string;
  meal: MealType;
  foodIds: { id: string; servings: number }[];
  ingredients: string[];
};

export const MEAL_TEMPLATES: MealTemplate[] = [
  {
    id: "oats-banana",
    name: "Oats with banana",
    meal: "breakfast",
    foodIds: [
      { id: "oats-dry", servings: 1 },
      { id: "banana-medium", servings: 1 },
      { id: "milk-whole", servings: 0.5 },
    ],
    ingredients: ["Rolled oats", "Banana", "Milk"],
  },
  {
    id: "yogurt-berries",
    name: "Greek yogurt with berries and almonds",
    meal: "breakfast",
    foodIds: [
      { id: "greek-yogurt-nonfat", servings: 1 },
      { id: "blueberries", servings: 0.8 },
      { id: "almonds", servings: 0.5 },
    ],
    ingredients: ["Plain nonfat Greek yogurt", "Blueberries", "Almonds"],
  },
  {
    id: "eggs-toast-orange",
    name: "Eggs, toast and orange",
    meal: "breakfast",
    foodIds: [
      { id: "egg-large", servings: 2 },
      { id: "whole-wheat-bread", servings: 2 },
      { id: "orange-medium", servings: 1 },
    ],
    ingredients: ["Eggs", "Whole-wheat bread", "Orange"],
  },
  {
    id: "chicken-rice-broccoli",
    name: "Chicken, rice and broccoli",
    meal: "lunch",
    foodIds: [
      { id: "chicken-breast-cooked", servings: 1.2 },
      { id: "brown-rice-cooked", servings: 1.5 },
      { id: "broccoli-cooked", servings: 1.5 },
      { id: "olive-oil", servings: 1 },
    ],
    ingredients: ["Chicken breast", "Brown rice", "Broccoli", "Olive oil"],
  },
  {
    id: "lentil-bowl",
    name: "Lentil and spinach bowl",
    meal: "lunch",
    foodIds: [
      { id: "lentils-cooked", servings: 1.5 },
      { id: "spinach-raw", servings: 0.8 },
      { id: "quinoa-cooked", servings: 1 },
      { id: "olive-oil", servings: 1 },
    ],
    ingredients: ["Lentils", "Spinach", "Quinoa", "Olive oil"],
  },
  {
    id: "turkey-sweet-potato",
    name: "Turkey, sweet potato and salad",
    meal: "dinner",
    foodIds: [
      { id: "turkey-breast-cooked", servings: 1.2 },
      { id: "sweet-potato-baked", servings: 1.5 },
      { id: "tomato-raw", servings: 1 },
      { id: "spinach-raw", servings: 0.6 },
    ],
    ingredients: ["Turkey breast", "Sweet potato", "Tomato", "Spinach"],
  },
  {
    id: "salmon-potato-greens",
    name: "Salmon with potato and broccoli",
    meal: "dinner",
    foodIds: [
      { id: "salmon-cooked", servings: 1.2 },
      { id: "potato-baked", servings: 1.5 },
      { id: "broccoli-cooked", servings: 1.5 },
    ],
    ingredients: ["Salmon", "Potato", "Broccoli"],
  },
  {
    id: "tofu-quinoa",
    name: "Tofu, quinoa and avocado",
    meal: "dinner",
    foodIds: [
      { id: "tofu-firm", servings: 1.2 },
      { id: "quinoa-cooked", servings: 1.5 },
      { id: "avocado", servings: 0.5 },
      { id: "spinach-raw", servings: 0.5 },
    ],
    ingredients: ["Firm tofu", "Quinoa", "Avocado", "Spinach"],
  },
  {
    id: "apple-almonds",
    name: "Apple and almonds",
    meal: "snacks",
    foodIds: [
      { id: "apple-medium", servings: 1 },
      { id: "almonds", servings: 1 },
    ],
    ingredients: ["Apple", "Almonds"],
  },
  {
    id: "yogurt-snack",
    name: "Cottage cheese and strawberries",
    meal: "snacks",
    foodIds: [
      { id: "cottage-cheese-lowfat", servings: 1.5 },
      { id: "strawberries", servings: 1 },
    ],
    ingredients: ["Low-fat cottage cheese", "Strawberries"],
  },
  {
    id: "hummus-carrot",
    name: "Hummus and carrots",
    meal: "snacks",
    foodIds: [
      { id: "hummus", servings: 0.5 },
      { id: "carrot-raw", servings: 1 },
    ],
    ingredients: ["Hummus", "Carrots"],
  },
];

export function findFood(id: string, extra: FoodItem[] = []): FoodItem | undefined {
  return extra.find((food) => food.id === id) ?? SAMPLE_FOODS.find((food) => food.id === id);
}

export function searchSampleFoods(query: string, extra: FoodItem[] = []): FoodItem[] {
  const needle = query.trim().toLowerCase();
  const pool = [...extra, ...SAMPLE_FOODS];
  if (!needle) return pool.slice(0, 20);
  return pool.filter((food) => {
    const hay = `${food.name} ${food.brand ?? ""} ${food.id}`.toLowerCase();
    return hay.includes(needle);
  }).slice(0, 25);
}

export function scaleFood(food: FoodItem, servings: number, unit: ServingUnit): Omit<DiaryEntry, "id" | "meal"> {
  let factor = servings;
  if (unit === "g" || unit === "ml") {
    factor = food.servingGrams > 0 ? servings / food.servingGrams : 0;
  }
  if (!Number.isFinite(factor) || factor <= 0) {
    factor = 0;
  }
  const grams = roundTo(food.servingGrams * factor, 1);
  return {
    foodId: food.id,
    name: food.name,
    servings,
    unit,
    grams,
    calories: roundTo(food.calories * factor, 1),
    protein: roundTo(food.protein * factor, 1),
    carbs: roundTo(food.carbs * factor, 1),
    fat: roundTo(food.fat * factor, 1),
    fiber: food.fiber !== undefined ? roundTo(food.fiber * factor, 1) : undefined,
    micros: scaleMicros(food.micros, factor),
    source: food.source,
  };
}

export type NutritionTotals = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  micros: MicroMap;
  count: number;
};

export function totalsFromEntries(entries: DiaryEntry[]): NutritionTotals {
  const totals: NutritionTotals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    micros: {},
    count: entries.length,
  };
  for (const entry of entries) {
    totals.calories += entry.calories;
    totals.protein += entry.protein;
    totals.carbs += entry.carbs;
    totals.fat += entry.fat;
    totals.fiber += entry.fiber ?? 0;
    totals.micros = addMicros(totals.micros, entry.micros);
  }
  totals.calories = roundTo(totals.calories, 1);
  totals.protein = roundTo(totals.protein, 1);
  totals.carbs = roundTo(totals.carbs, 1);
  totals.fat = roundTo(totals.fat, 1);
  totals.fiber = roundTo(totals.fiber, 1);
  return totals;
}

export function dayEntries(day: DayLog): DiaryEntry[] {
  return [...day.meals.breakfast, ...day.meals.lunch, ...day.meals.dinner, ...day.meals.snacks];
}

export function plannedFromTemplate(template: MealTemplate, extra: FoodItem[] = []): PlannedItem | null {
  const parts = template.foodIds
    .map((item) => {
      const food = findFood(item.id, extra);
      if (!food) return null;
      const scaled = scaleFood(food, item.servings, "serving");
      return scaled;
    })
    .filter((item): item is Omit<DiaryEntry, "id" | "meal"> => item !== null);
  if (parts.length === 0) return null;
  const fake: DiaryEntry[] = parts.map((part, index) => ({
    ...part,
    id: `${template.id}-${index}`,
    meal: template.meal,
  }));
  const totals = totalsFromEntries(fake);
  return {
    id: template.id,
    name: template.name,
    meal: template.meal,
    calories: totals.calories,
    protein: totals.protein,
    carbs: totals.carbs,
    fat: totals.fat,
    ingredients: template.ingredients,
  };
}

export function groceryFromPlan(items: PlannedItem[]): GroceryItem[] {
  const names = new Set<string>();
  for (const item of items) {
    for (const ingredient of item.ingredients) {
      names.add(ingredient);
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b)).map((name) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    checked: false,
  }));
}

export function substitutionsFor(foodId: string) {
  return SUBSTITUTIONS[foodId] ?? [];
}

export function defaultState(): AlmaState {
  return {
    profile: {},
    customFoods: [],
    days: {},
    weekPlan: {},
    grocery: [],
  };
}

export function loadState(): AlmaState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<AlmaState>;
    return {
      ...defaultState(),
      ...parsed,
      profile: parsed.profile ?? {},
      customFoods: Array.isArray(parsed.customFoods) ? parsed.customFoods : [],
      days: parsed.days && typeof parsed.days === "object" ? parsed.days : {},
      weekPlan: parsed.weekPlan && typeof parsed.weekPlan === "object" ? parsed.weekPlan : {},
      grocery: Array.isArray(parsed.grocery) ? parsed.grocery : [],
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state: AlmaState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function lastNDates(n: number, end = new Date()): string[] {
  const dates: string[] = [];
  for (let index = n - 1; index >= 0; index -= 1) {
    const date = new Date(end);
    date.setDate(end.getDate() - index);
    dates.push(todayIso(date));
  }
  return dates;
}

export function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function summarizeMicros(micros: MicroMap): string {
  const parts: string[] = [];
  for (const nutrient of MICRO_NUTRIENTS) {
    const value = micros[nutrient.id];
    if (typeof value === "number" && value > 0) {
      parts.push(`${nutrient.name} ${roundTo(value, 1)} ${nutrient.unit}`);
    }
  }
  return parts.join(", ");
}

export const MICRO_IDS = MICRO_NUTRIENTS.map((item) => item.id) as MicroId[];
