import assert from "node:assert/strict";
import {
  CALORIE_FLOOR,
  MACRO_PLANS,
  calculateDeficit,
  calculateProtein,
  calculateTdee,
  macrosFromPlan,
  micronutrientReferences,
  mifflinStJeorBmr,
  scaleMicros,
} from "./alma.ts";
import { ruleBasedCoach } from "./alma-coach.ts";
import {
  SAMPLE_FOODS,
  groceryFromPlan,
  plannedFromTemplate,
  scaleFood,
  searchSampleFoods,
  totalsFromEntries,
  type DiaryEntry,
} from "./alma-foods.ts";

export function runAlmaChecks() {
  const bmr = mifflinStJeorBmr({ sex: "male", weightKg: 80, heightCm: 180, age: 30 });
  assert.equal(Math.round(bmr), 1780);

  const daily = calculateTdee({
    sex: "male",
    ageRaw: "30",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "moderate",
    goal: "maintain",
  });
  assert.equal(daily.ok, true);
  if (!daily.ok) return;
  assert.equal(daily.bmr, 1780);
  assert.equal(daily.tdee, Math.round(1780 * 1.55));

  const imperial = calculateTdee({
    sex: "female",
    ageRaw: "28",
    weightRaw: "140",
    heightRaw: "",
    heightFeetRaw: "5",
    heightInchesRaw: "6",
    units: "imperial",
    activity: "light",
    goal: "lose",
    splitImperialHeight: true,
  });
  assert.equal(imperial.ok, true);

  const invalidAge = calculateTdee({
    sex: "male",
    ageRaw: "12",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "sedentary",
    goal: "maintain",
  });
  assert.equal(invalidAge.ok, false);

  const highProtein = macrosFromPlan(2000, "highProtein");
  assert.equal(highProtein.proteinCalories, 800);
  assert.equal(highProtein.proteinGrams, 200);
  assert.equal(highProtein.carbGrams, 150);
  assert.equal(highProtein.fatGrams, 67);
  assert.equal(MACRO_PLANS.balanced.protein + MACRO_PLANS.balanced.carbs + MACRO_PLANS.balanced.fat, 1);

  const protein = calculateProtein({ weightRaw: "80", units: "metric", goal: "strength" });
  assert.equal(protein.ok, true);
  if (!protein.ok) return;
  assert.equal(protein.minGrams, 128);
  assert.equal(protein.maxGrams, 176);

  const proteinLb = calculateProtein({ weightRaw: "176", units: "imperial", goal: "general" });
  assert.equal(proteinLb.ok, true);

  const badProtein = calculateProtein({ weightRaw: "0", units: "metric", goal: "general" });
  assert.equal(badProtein.ok, false);

  const deficit = calculateDeficit({ tdeeRaw: "2200", size: "standard" });
  assert.equal(deficit.ok, true);
  if (!deficit.ok) return;
  assert.equal(deficit.targetCalories, 1700);
  assert.ok(deficit.weeklyKgEstimate > 0);

  const floor = calculateDeficit({ tdeeRaw: "1400", size: "aggressive" });
  assert.equal(floor.ok, true);
  if (!floor.ok) return;
  assert.equal(floor.targetCalories, CALORIE_FLOOR);

  const badTdee = calculateDeficit({ tdeeRaw: "50", size: "mild" });
  assert.equal(badTdee.ok, false);

  const maleMicros = micronutrientReferences({ sex: "male", age: 30 });
  const femaleMicros = micronutrientReferences({ sex: "female", age: 30 });
  const olderFemale = micronutrientReferences({ sex: "female", age: 60 });
  assert.equal(maleMicros.vitaminC, 90);
  assert.equal(femaleMicros.vitaminC, 75);
  assert.equal(femaleMicros.iron, 18);
  assert.equal(olderFemale.iron, 8);
  assert.equal(maleMicros.vitaminB12, 2.4);
  assert.equal(maleMicros.folate, 400);
  assert.equal(maleMicros.sodium, 2300);

  const chicken = SAMPLE_FOODS.find((food) => food.id === "chicken-breast-cooked");
  assert.ok(chicken);
  if (!chicken) return;
  const doubled = scaleFood(chicken, 2, "serving");
  assert.equal(doubled.calories, 330);
  assert.equal(doubled.protein, 62);
  const byGrams = scaleFood(chicken, 50, "g");
  assert.equal(byGrams.calories, 82.5);

  const banana = SAMPLE_FOODS.find((food) => food.id === "banana-medium");
  assert.ok(banana?.micros?.potassium);

  const hits = searchSampleFoods("chicken");
  assert.ok(hits.some((food) => food.id === "chicken-breast-cooked"));

  const entries: DiaryEntry[] = [
    { id: "a", meal: "breakfast", ...scaleFood(chicken, 1, "serving") },
    { id: "b", meal: "snacks", ...scaleFood(banana!, 1, "serving") },
  ];
  const totals = totalsFromEntries(entries);
  assert.equal(totals.calories, 270);
  assert.ok((totals.micros.potassium ?? 0) > 0);

  const scaled = scaleMicros({ vitaminC: 10, iron: 2 }, 0.5);
  assert.equal(scaled?.vitaminC, 5);
  assert.equal(scaled?.iron, 1);

  const template = plannedFromTemplate(
    {
      id: "test-meal",
      name: "Test",
      meal: "lunch",
      foodIds: [{ id: "chicken-breast-cooked", servings: 1 }],
      ingredients: ["Chicken breast"],
    },
  );
  assert.ok(template);
  if (!template) return;
  assert.equal(template.calories, 165);
  const grocery = groceryFromPlan([template]);
  assert.equal(grocery[0]?.name, "Chicken breast");

  const empty = ruleBasedCoach("   ");
  assert.match(empty.text, /Enter a nutrition question/);
  const calories = ruleBasedCoach("How many calories should I eat daily?");
  assert.match(calories.text, /Mifflin/);
  assert.match(calories.text, /not medical/);
  const proteinQ = ruleBasedCoach("How do I calculate protein requirements?", {
    consumedCalories: 500,
    calorieTarget: 2000,
    protein: 40,
    proteinTarget: 130,
  });
  assert.match(proteinQ.text, /0\.8/);
  assert.match(proteinQ.text, /500 kcal/);
  const bmrQ = ruleBasedCoach("What is the difference between BMR and TDEE?");
  assert.match(bmrQ.text, /basal metabolic rate/i);
  assert.equal(calories.mode, "rules");

  for (const food of SAMPLE_FOODS) {
    assert.ok(food.calories >= 0 && food.protein >= 0 && food.carbs >= 0 && food.fat >= 0);
    assert.ok(food.servingGrams > 0);
    assert.equal(food.source, "sample");
    assert.match(food.sourceNote, /USDA-style/);
  }
}
