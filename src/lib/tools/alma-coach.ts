import { formatGrams, formatKcal } from "./alma.ts";

export type CoachContext = {
  calorieTarget?: number;
  consumedCalories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  proteinTarget?: number;
  carbTarget?: number;
  fatTarget?: number;
  bmr?: number;
  tdee?: number;
  mealCount?: number;
  waterMl?: number;
  topFoods?: string[];
};

export type CoachReply = {
  text: string;
  mode: "rules";
};

const DISCLAIMER =
  "Alma is an educational nutrition calculator and food tracker, not medical or dietetic advice. Talk with a qualified clinician before making big changes if you are pregnant, under 18, or managing a health condition.";

function contextSummary(context?: CoachContext): string {
  if (!context) return "";
  const lines: string[] = [];
  if (typeof context.consumedCalories === "number") {
    const target = context.calorieTarget;
    if (typeof target === "number" && target > 0) {
      const remaining = target - context.consumedCalories;
      lines.push(
        `Today you have logged ${formatKcal(context.consumedCalories)} against a target of ${formatKcal(target)} (${remaining >= 0 ? `${formatKcal(remaining)} remaining` : `${formatKcal(Math.abs(remaining))} over`}).`,
      );
    } else {
      lines.push(`Today you have logged ${formatKcal(context.consumedCalories)}. Set a daily calorie target in the calculators to compare remaining energy.`);
    }
  }
  if (typeof context.protein === "number") {
    const proteinBit =
      typeof context.proteinTarget === "number"
        ? ` Protein so far: ${formatGrams(context.protein)} of ${formatGrams(context.proteinTarget)}.`
        : ` Protein so far: ${formatGrams(context.protein)}.`;
    const carbBit =
      typeof context.carbs === "number" ? ` Carbohydrate: ${formatGrams(context.carbs)}.` : "";
    const fatBit = typeof context.fat === "number" ? ` Fat: ${formatGrams(context.fat)}.` : "";
    lines.push(`${proteinBit}${carbBit}${fatBit}`.trim());
  }
  if (typeof context.bmr === "number" && typeof context.tdee === "number") {
    lines.push(`Your last saved BMR is ${formatKcal(context.bmr)} and TDEE is ${formatKcal(context.tdee)}.`);
  }
  if (typeof context.mealCount === "number") {
    lines.push(`Logged food entries today: ${context.mealCount}.`);
  }
  if (typeof context.waterMl === "number" && context.waterMl > 0) {
    lines.push(`Water logged: ${context.waterMl} ml.`);
  }
  if (context.topFoods && context.topFoods.length > 0) {
    lines.push(`Foods already on today's diary: ${context.topFoods.slice(0, 8).join(", ")}.`);
  }
  return lines.join(" ");
}

function analyzeBreakfast(context?: CoachContext): string {
  const names = (context?.topFoods ?? []).join(" ").toLowerCase();
  if (!names) {
    return "A balanced breakfast usually pairs a protein source (eggs, Greek yogurt, tofu) with fiber-rich carbohydrate (oats, fruit, whole-wheat bread) and some fat (nuts, seeds, avocado). Log breakfast in the food tracker and ask again for a note on that specific meal.";
  }
  const bits: string[] = [];
  if (!/yogurt|egg|tofu|chicken|turkey|fish|cheese|lentil|bean|milk/.test(names)) {
    bits.push("Try adding a clear protein food so the meal keeps you fuller.");
  }
  if (!/oat|bread|rice|fruit|banana|apple|orange|berry|potato|quinoa/.test(names)) {
    bits.push("A carbohydrate source such as fruit, oats or bread can help energy earlier in the day.");
  }
  if (!/spinach|broccoli|pepper|tomato|carrot|avocado|berry|apple|orange|banana/.test(names)) {
    bits.push("Fruit or vegetables add fiber, potassium and micronutrients that a protein-only plate can miss.");
  }
  return bits.length > 0
    ? `Looking at foods already logged (${context?.topFoods?.join(", ")}): ${bits.join(" ")}`
    : `Your logged foods (${context?.topFoods?.join(", ")}) already cover a reasonable mix of protein and produce. Keep portions aligned with your calorie target.`;
}

function matchIntent(question: string): string {
  const q = question.toLowerCase();
  if (/bmr|tdee|basal|energy expenditure/.test(q) && /difference|vs|versus|between/.test(q)) {
    return "BMR (basal metabolic rate) is an estimate of the calories your body uses at complete rest. TDEE (total daily energy expenditure) multiplies BMR by an activity factor so walking, work and training are included. Meal planning usually uses TDEE, not BMR alone. Alma estimates BMR with the Mifflin–St Jeor equation, the same method used by the standalone TDEE calculator on Tools Star Hub.";
  }
  if (/how many calories|calorie needs|eat daily|consume daily|daily calorie/.test(q)) {
    return "Daily calorie needs are estimated from age, sex, height, weight and activity. Alma first calculates BMR with Mifflin–St Jeor, then multiplies by one of five activity levels to get TDEE. Maintenance calories equal TDEE. A common weight-loss plan subtracts about 500 kcal; a modest surplus for gain adds about 300 kcal. Use the Daily Calorie, BMR and TDEE modules on this page, or the dedicated TDEE Calculator, then adjust after a couple of weeks of real-world tracking.";
  }
  if (/protein/.test(q)) {
    return "Protein needs depend on body weight and goal. A common general adult range starts near 0.8 g per kilogram of body weight. People who train often use about 1.2–1.6 g/kg, and many strength or fat-loss plans use about 1.6–2.2 g/kg. The Protein Calculator on this page shows a range rather than a single magic number. Spread protein across meals from foods such as eggs, yogurt, fish, poultry, tofu, lentils or cottage cheese.";
  }
  if (/carbohydrate|carb\b|fat intake|macro/.test(q) && /how|calculate|need|require/.test(q)) {
    return "Once you have a calorie target, pick a macronutrient split. A balanced template is 30% protein, 40% carbohydrate and 30% fat. Higher-protein, lower-carb and higher-carb templates are available in the Macronutrient Calculator. Protein and carbohydrate provide about 4 kcal per gram; fat provides about 9 kcal per gram. Change the split to match training, preference and any advice from your clinician—not because one ratio is universally best.";
  }
  if (/iron/.test(q)) {
    return "Foods that often contribute more iron include lentils, beans, spinach, tofu and lean red meat. Vitamin C from oranges, strawberries or broccoli can help you absorb non-heme (plant) iron when eaten in the same meal. Iron reference values are higher for many menstruating adults. Alma's micronutrient panel lists a general daily reference; it cannot diagnose a deficiency.";
  }
  if (/fibre|fiber/.test(q)) {
    return "To increase fiber, add oats, beans, lentils, whole-wheat bread, berries, apples, broccoli and other vegetables. Increase gradually and drink enough water so the extra fiber is comfortable. Sample foods in Alma that are marked with fiber include oats, lentils, beans, avocado and fruit.";
  }
  if (/micronutrient|vitamin|mineral/.test(q)) {
    return "Micronutrients are vitamins and minerals needed in smaller amounts than protein, carbohydrate and fat. You can track them in Alma by logging sample foods that include labelled values, searching packaged products through Open Food Facts, or entering amounts from a Nutrition Facts label. The Micronutrient Calculator shows general adult reference values (for example vitamin C, iron, calcium and folate). Those references are educational, not a blood test or a prescription.";
  }
  if (/breakfast/.test(q)) {
    return "Helpful breakfast patterns include oats with fruit and yogurt, eggs with whole-wheat toast and an orange, or a tofu scramble with vegetables. Aim for protein plus fiber so energy lasts until lunch.";
  }
  if (/lunch/.test(q)) {
    return "Balanced lunch ideas on Alma's planner include chicken with brown rice and broccoli, or a lentil and spinach bowl with quinoa. Leftovers from dinner also make tracking easier because the portions are already known.";
  }
  if (/dinner/.test(q)) {
    return "Dinner suggestions include salmon with potato and broccoli, turkey with sweet potato and salad, or tofu with quinoa and avocado. Build the plate around a protein, a high-fiber carbohydrate and a vegetable, then scale portions toward your calorie target.";
  }
  if (/snack/.test(q)) {
    return "Snacks that travel well include an apple with almonds, cottage cheese with strawberries, or hummus with carrots. Logging snacks matters because they often explain why a day runs over the calorie target.";
  }
  if (/meal plan|planner|grocery/.test(q)) {
    return "Use the Meal Planner to drop suggested breakfasts, lunches, dinners and snacks onto each day, edit them, then build a grocery list from the ingredients. Substitutions (for example chicken to tofu, white rice to quinoa) help you keep a similar meal shape when you want a different protein or grain. Meal plans stay in this browser.";
  }
  if (/track food|food diary|food journal|log my|daily food|without downloading|app/.test(q)) {
    return "A food tracking website works like a food diary: you search or enter a food, choose breakfast, lunch, dinner or snacks, set the serving, and watch calories and macros add up. Alma stores that diary in this browser with localStorage, so you can track food online without creating an account or downloading an app. You can also add custom foods from a Nutrition Facts label.";
  }
  if (/accurate|accuracy|reliable/.test(q)) {
    return "Online nutrition calculators are estimates. Mifflin–St Jeor and activity multipliers are useful starting points, but they cannot see hormones, medications or fidgeting. Packaged-food numbers depend on the label or Open Food Facts entry you choose; kitchen scales beat guessed cups. Treat Alma as a transparent planning tool and adjust from weekly trends, not from one day.";
  }
  if (/why.*micronutrient|important/.test(q)) {
    return "Micronutrients support immunity, bone health, oxygen transport, energy metabolism and many other processes. Calories tell you about energy; vitamins and minerals tell you whether that energy came with the raw materials your body expects. Tracking them highlights patterns—such as little iron or vitamin C—not diagnoses.";
  }
  if (/macro.*micro|difference between macronutrients/.test(q)) {
    return "Macronutrients are protein, carbohydrate and fat—the nutrients that supply nearly all dietary calories. Micronutrients are vitamins and minerals, needed in much smaller amounts and contributing little or no energy. A day can hit its calorie target and still be low in iron, calcium or folate if the food variety is narrow.";
  }
  if (/healthy eating|improve|better nutrition/.test(q)) {
    return "A practical way to improve daily nutrition is to set a calorie target you can live with, anchor each meal with protein and plants, drink water regularly, and review the weekly diary instead of judging a single day. Alma's dashboard, food tracker and planner are built for that loop—free, with no subscription wall on the basic calculators.";
  }
  return "I can help explain calories, BMR, TDEE, protein, carbohydrate, fat, micronutrients, food logging, meal ideas and grocery planning. Ask a specific question—or log a few foods first so I can comment on today's totals.";
}

export function ruleBasedCoach(question: string, context?: CoachContext): CoachReply {
  const trimmed = question.trim();
  if (!trimmed) {
    return { text: `Enter a nutrition question first.\n\n${DISCLAIMER}`, mode: "rules" };
  }
  const intro = contextSummary(context);
  const breakfast = /breakfast|is my breakfast/.test(trimmed.toLowerCase())
    ? analyzeBreakfast(context)
    : "";
  const body = /breakfast|is my breakfast/.test(trimmed.toLowerCase())
    ? breakfast
    : matchIntent(trimmed);
  const parts = [
    intro ? `Based on what you have saved in Alma: ${intro}` : "",
    body,
    DISCLAIMER,
  ].filter(Boolean);
  return { text: parts.join("\n\n"), mode: "rules" };
}

export function buildGeminiPrompt(question: string, context?: CoachContext): string {
  const summary = contextSummary(context);
  return [
    "You are Alma, an educational nutrition coach on Tools Star Hub.",
    "Give practical, plain-language nutrition education. Do not diagnose disease, prescribe treatment, or claim to replace a doctor or dietitian.",
    "Do not invent precise nutrient numbers for branded foods. If numbers are needed, speak in ranges or refer to the user's logged totals.",
    "Do not claim Alma has an official mobile app download, grocery delivery service, startup affiliation, or physical nutrition clinic.",
    "Keep the reply under 250 words. End with one short sentence that this is educational, not medical advice.",
    summary ? `User context: ${summary}` : "No diary totals were provided.",
    `User question: ${question.trim()}`,
  ].join("\n");
}
