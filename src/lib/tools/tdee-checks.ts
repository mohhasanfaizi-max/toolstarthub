import assert from "node:assert/strict";
import {
  ACTIVITY_MULTIPLIERS,
  GAIN_SURPLUS,
  LOSE_DEFICIT,
  calculateTdee,
  convertHeightCmToImperial,
  convertImperialHeightToCm,
  convertWeightForUnits,
  macrosFromCalories,
  mifflinStJeorBmr,
} from "./tdee.ts";

export function runTdeeChecks() {
  // Known Mifflin–St Jeor example: male, 80 kg, 180 cm, 30 years
  // BMR = 10*80 + 6.25*180 - 5*30 + 5 = 800 + 1125 - 150 + 5 = 1780
  const bmrMale = mifflinStJeorBmr({
    sex: "male",
    weightKg: 80,
    heightCm: 180,
    age: 30,
  });
  assert.equal(Math.round(bmrMale), 1780);

  // Female same stats: 1780 - 166 = 1614 (because +5 vs -161 differs by 166)
  const bmrFemale = mifflinStJeorBmr({
    sex: "female",
    weightKg: 80,
    heightCm: 180,
    age: 30,
  });
  assert.equal(Math.round(bmrFemale), 1614);

  const sedentary = calculateTdee({
    sex: "male",
    ageRaw: "30",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "sedentary",
    goal: "maintain",
  });
  assert.equal(sedentary.ok, true);
  if (!sedentary.ok) return;
  assert.equal(sedentary.bmr, 1780);
  assert.equal(sedentary.tdee, Math.round(1780 * 1.2));
  assert.equal(sedentary.maintainCalories, sedentary.tdee);
  assert.equal(sedentary.loseCalories, Math.max(1200, sedentary.tdee - LOSE_DEFICIT));
  assert.equal(sedentary.gainCalories, sedentary.tdee + GAIN_SURPLUS);
  assert.equal(sedentary.goalCalories, sedentary.maintainCalories);
  assert.ok(sedentary.formula.includes("1780"));

  const lose = calculateTdee({
    sex: "male",
    ageRaw: "30",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "moderate",
    goal: "lose",
  });
  assert.equal(lose.ok, true);
  if (!lose.ok) return;
  assert.equal(lose.activityMultiplier, ACTIVITY_MULTIPLIERS.moderate.multiplier);
  assert.equal(lose.goalCalories, lose.loseCalories);
  assert.equal(lose.proteinGrams + lose.carbGrams + lose.fatGrams > 0, true);

  const imperial = calculateTdee({
    sex: "female",
    ageRaw: "28",
    weightRaw: "140",
    heightRaw: "",
    heightFeetRaw: "5",
    heightInchesRaw: "6",
    units: "imperial",
    activity: "light",
    goal: "gain",
    splitImperialHeight: true,
  });
  assert.equal(imperial.ok, true);
  if (!imperial.ok) return;
  assert.equal(imperial.goalCalories, imperial.gainCalories);

  const empty = calculateTdee({
    sex: "male",
    ageRaw: "",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "sedentary",
    goal: "maintain",
  });
  assert.equal(empty.ok, false);

  const young = calculateTdee({
    sex: "male",
    ageRaw: "10",
    weightRaw: "80",
    heightRaw: "180",
    units: "metric",
    activity: "sedentary",
    goal: "maintain",
  });
  assert.equal(young.ok, false);

  const macros = macrosFromCalories(2000);
  assert.equal(macros.proteinGrams, 150);
  assert.equal(macros.carbGrams, 200);
  assert.equal(macros.fatGrams, 67);

  assert.equal(convertWeightForUnits("80", "metric", "imperial"), "176.4");
  assert.equal(convertWeightForUnits("176.4", "imperial", "metric"), "80");

  const ftIn = convertHeightCmToImperial("178");
  assert.ok(Number(ftIn.feet) >= 5);
  const back = convertImperialHeightToCm(ftIn.feet, ftIn.inches);
  assert.ok(Math.abs(Number(back) - 178) < 1.5);
}
