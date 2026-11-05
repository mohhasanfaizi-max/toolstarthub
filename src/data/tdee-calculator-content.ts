import type { ToolContent } from "./tool-content.ts";

export const tdeeCalculatorContent: ToolContent = {
  about:
    "This free TDEE calculator estimates how many calories you burn in a day from your age, sex, height, weight and activity. It uses the Mifflin–St Jeor equation for basal metabolic rate (BMR), multiplies by a standard activity factor to get total daily energy expenditure (TDEE), then shows maintenance, weight-loss and weight-gain calorie targets with a suggested protein, carbohydrate and fat split. Everything runs in your browser.",
  howTo: [
    "Choose metric (kg, cm) or imperial (lb, feet and inches).",
    "Select sex, enter age, weight and height, then pick one of the five activity levels that best matches your week.",
    "Choose Maintain weight, Lose weight or Gain weight.",
    "Press Calculate to see BMR, TDEE, calorie targets and suggested macros. Use Copy Results or Share Results to save them, or Reset to clear the form.",
  ],
  examples: [
    {
      title: "Sedentary desk worker, male, 30",
      body: "Male, 30 years, 80 kg, 180 cm, sedentary (×1.2). BMR is about 1,780 kcal. TDEE is about 2,136 kcal. A loss target near 1,636 kcal and a gain target near 2,436 kcal follow from that TDEE.",
    },
    {
      title: "Moderately active woman, imperial units",
      body: "Female, 28 years, 140 lb, 5′6″, moderately active (×1.55). The calculator converts to metric, computes Mifflin–St Jeor BMR, multiplies by 1.55 for TDEE, then shows maintain, lose and gain calories with a 30/40/30 macro template on the selected goal.",
    },
    {
      title: "Very active trainee aiming to gain",
      body: "Choosing Very active (×1.725) or Extra active (×1.9) raises TDEE. With Gain weight selected, goal calories equal TDEE plus about 300 kcal, and the macro bars update to that higher target.",
    },
  ],
  explanation:
    "BMR is the energy your body uses at complete rest. Mifflin–St Jeor estimates it from weight, height, age and sex. TDEE multiplies BMR by an activity factor so daily movement and training are included. Maintenance calories equal TDEE. A common planning deficit for gradual loss is about 500 kcal per day; a modest surplus for gain is about 300 kcal. Suggested macros here assign 30% of goal calories to protein, 40% to carbohydrate and 30% to fat.",
  features: [
    "Mifflin–St Jeor BMR with metric and imperial inputs.",
    "Five activity multipliers from sedentary through extra active.",
    "Maintain, lose and gain calorie targets with a selected-goal highlight.",
    "Suggested protein, carbohydrate and fat grams plus percentage bars.",
    "Plain-language formula line showing how BMR and TDEE were built.",
    "Calculate, Reset, Copy Results and Share Results controls that all do real work.",
  ],
  tips: [
    "Match the activity level to a typical week, not your hardest training day.",
    "Recalculate after a meaningful change in weight or routine.",
    "Use loss and gain targets as starting points; adjust with how clothes fit and how energy feels over two to four weeks.",
    "Very low calorie targets are not appropriate for everyone—seek clinical guidance if you have a medical condition, are pregnant, or are under 18.",
  ],
  limitations:
    "Results are population-style estimates. They do not measure metabolic rate in a lab, account for every hormone or medication effect, or replace advice from a doctor or registered dietitian. Sex is modeled with the binary Mifflin–St Jeor constants. Loss calories are floored at 1,200 kcal in this tool as a soft safety bound for the estimate only.",
  article: {
    title: "TDEE Calculator Guide: Daily Calorie Needs, BMR and Macros",
    intro:
      "A TDEE calculator turns a few body measurements and an honest activity description into an estimate of how many calories you need each day. People search for a BMR calculator, a daily calorie calculator, a maintenance calories calculator or a weight loss calorie calculator for the same reason: they want a clear starting number before they change how they eat. This guide explains what total daily energy expenditure means, how this page calculates it, and how to read the results without treating them as a medical prescription.",
    sections: [
      {
        heading: "What is TDEE?",
        paragraphs: [
          "Total Daily Energy Expenditure is the estimated number of calories your body uses in twenty-four hours. It includes the energy required to keep you alive at rest, the energy used to digest food, and the energy burned through everyday movement and planned exercise. When intake roughly matches TDEE over time, weight tends to stay stable. Consistently eating below TDEE usually leads to loss; consistently eating above it usually leads to gain.",
          "TDEE is not a fixed personality trait. It changes when weight, age, muscle mass, routine and health status change. That is why a free online TDEE calculator is most useful as a living estimate you refresh, not a one-time tattoo on your meal plan.",
        ],
      },
      {
        heading: "How TDEE is calculated",
        paragraphs: [
          "Most consumer calculators follow two steps. First they estimate basal metabolic rate. Then they multiply that BMR by an activity factor that represents how active you are across the week. This Tools Star Hub calculator uses Mifflin–St Jeor for BMR, then the common multipliers 1.2 (sedentary), 1.375 (lightly active), 1.55 (moderately active), 1.725 (very active) and 1.9 (extra active).",
          "After TDEE is known, maintenance calories equal that number. Weight-loss calories subtract about 500 kcal per day, a classic planning deficit often associated with roughly half a kilogram of fat loss per week when adhered to carefully. Weight-gain calories add about 300 kcal for a modest surplus. The page also shows a suggested macronutrient split so protein, carbohydrate and fat have concrete gram targets tied to the goal you selected.",
        ],
      },
      {
        heading: "BMR versus TDEE",
        paragraphs: [
          "BMR is the energy cost of existing: breathing, circulating blood, repairing cells and keeping temperature stable if you stayed in bed all day. TDEE is BMR plus everything else you actually do. Someone with a BMR near 1,600 kcal who walks a lot and trains four times a week might land near 2,400–2,700 kcal of TDEE, while a similar person who sits most of the day might stay closer to 1,900 kcal.",
          "Searching for a BMR calculator alone is useful for understanding resting needs, but meal planning usually needs TDEE. Eating only at BMR while living an active life is a steep cut for many people and is not the goal of a maintenance calories calculator.",
        ],
      },
      {
        heading: "Activity multipliers explained",
        paragraphs: [
          "Activity multipliers compress a messy week into one number. Sedentary fits desk work with little formal exercise. Lightly active covers light sport or walks a few days a week. Moderately active suits regular training three to five days a week. Very active is hard training most days. Extra active is for very hard training, a physical job, or both.",
          "People often overestimate. If you train hard three evenings but sit the rest of the day, moderately active is often closer than very active. When in doubt, start one notch lower, track weight for two weeks, and adjust. The [Unit Converter](/tools/unit-converter) can help if your scale and tape measure disagree on units, and the [Age Calculator](/tools/age-calculator) can confirm exact age when a birthday is near a cutoff.",
        ],
      },
      {
        heading: "Calories for weight loss",
        paragraphs: [
          "A weight loss calorie calculator typically subtracts a moderate amount from TDEE so fat loss is gradual enough to protect training and daily energy. A 500 kcal daily deficit is a common planning figure; this tool also refuses to suggest less than 1,200 kcal on the loss line as a soft floor for the estimate. That floor is not a personal prescription—some adults need higher intakes, and adolescents, pregnant people and anyone with a clinical eating concern should not use aggressive deficits without professional care.",
          "Loss is not only the calorie line. Protein intake, sleep, steps and resistance training all influence how much of the lost weight is fat versus lean mass. Recalculate TDEE as body weight falls, because a smaller body usually burns somewhat less.",
        ],
      },
      {
        heading: "Calories for weight gain",
        paragraphs: [
          "Gaining weight, especially when the aim is muscle, usually works better with a modest surplus than with unrestricted eating. This calculator adds about 300 kcal above TDEE for the gain target. That keeps the rate of gain slower and can reduce how much of the gain is fat, especially when paired with progressive strength training and enough protein.",
          "If the scale does not move for a few weeks on the gain target, nudge intake up or double-check that activity was not underestimated. The reverse applies if gain is faster than you want.",
        ],
      },
      {
        heading: "Understanding macronutrients",
        paragraphs: [
          "Calories describe energy. Macronutrients describe where that energy comes from. Protein and carbohydrate provide about 4 kcal per gram; fat provides about 9 kcal per gram. The suggested intake on this page uses 30% of goal calories as protein, 40% as carbohydrate and 30% as fat, then converts those calories into grams.",
          "That 30/40/30 template is a readable starting point for many general fitness goals. Endurance athletes may want more carbohydrate. Some clinical or coaching plans use higher protein per kilogram of body weight rather than a fixed percentage. Treat the bars as a map, not a law, and compare them with advice from a qualified professional when stakes are high.",
        ],
      },
      {
        heading: "Factors affecting daily calorie expenditure",
        paragraphs: [
          "Beyond the inputs on the form, expenditure responds to muscle mass, non-exercise activity (fidgeting, standing, walking between rooms), diet composition, sleep debt, stress hormones, cold exposure, and adaptive changes after long dieting. Two people with identical age, sex, height and weight can still differ by hundreds of calories.",
          "Medications, thyroid status and recovery from illness also matter. Online estimates cannot see those factors. Use the number to set an initial plan, then let weekly averages of weight and how you feel vote on whether to raise or lower intake.",
        ],
      },
      {
        heading: "Limitations of calorie estimates",
        paragraphs: [
          "Equations such as Mifflin–St Jeor were built from group data. They are among the better desk-side formulas for many adults, yet individual error can still be meaningful. Wearables estimate expenditure with their own biases. Food labels and restaurant portions introduce more noise when you track intake.",
          "This daily calorie calculator does not diagnose metabolic disorders, prescribe diets or guarantee a rate of loss or gain. It is a transparent arithmetic assistant: Mifflin–St Jeor BMR, published activity multipliers, clear maintain/lose/gain offsets and a visible macro split. Combine it with patience and professional guidance when you need personalised care. For percentage maths on recipes or progress, the [Percentage Calculator](/tools/percentage-calculator) sits nearby in the same calculator family.",
        ],
      },
    ],
  },
  faqs: [
    {
      question: "What is a TDEE calculator?",
      answer:
        "A TDEE calculator estimates total daily energy expenditure—the calories you burn in a day—from age, sex, height, weight and activity. This page also shows BMR and calorie targets for maintaining, losing or gaining weight.",
    },
    {
      question: "How does this TDEE calculator work?",
      answer:
        "It computes basal metabolic rate with the Mifflin–St Jeor equation, multiplies by your chosen activity factor to get TDEE, then derives maintenance, loss (about −500 kcal) and gain (about +300 kcal) targets plus a 30/40/30 macro suggestion on the selected goal.",
    },
    {
      question: "What is the Mifflin–St Jeor equation?",
      answer:
        "Mifflin–St Jeor estimates BMR in kcal/day as 10×weight(kg) + 6.25×height(cm) − 5×age + 5 for males, or the same formula with −161 instead of +5 for females. It is widely used in modern BMR and TDEE calculators.",
    },
    {
      question: "What is the difference between BMR and TDEE?",
      answer:
        "BMR is estimated resting energy use. TDEE multiplies BMR by an activity factor so daily movement and exercise are included. Meal plans usually start from TDEE, not BMR alone.",
    },
    {
      question: "Which activity level should I choose?",
      answer:
        "Pick the description that matches a normal week. Sedentary is little exercise; lightly active is 1–3 easy days; moderately active is 3–5 moderate days; very active is hard training most days; extra active is very hard training or a physical job. When unsure, choose the lower option first.",
    },
    {
      question: "How many calories should I eat to lose weight?",
      answer:
        "A common planning approach is TDEE minus about 500 kcal per day. This tool shows that weight-loss line and keeps the estimate from going below 1,200 kcal. Individual needs vary—adjust with progress and professional advice.",
    },
    {
      question: "How many calories should I eat to gain weight?",
      answer:
        "This calculator suggests about TDEE plus 300 kcal for a modest surplus. Combine that with strength training and enough protein if muscle gain is the goal, then adjust if the scale moves too slowly or too quickly.",
    },
    {
      question: "Can I use metric and imperial units?",
      answer:
        "Yes. Switch between metric (kg, cm) and imperial (lb, feet and inches). The calculator converts internally and still runs Mifflin–St Jeor in metric units.",
    },
    {
      question: "How are protein, carbs and fat suggested?",
      answer:
        "Suggested macros use 30% of the selected goal calories as protein, 40% as carbohydrate and 30% as fat, then convert to grams (4 kcal/g for protein and carbs, 9 kcal/g for fat). Change the split if your coach or clinician prefers another template.",
    },
    {
      question: "Is this TDEE calculator free?",
      answer:
        "Yes. It is free to use on Tools Star Hub with no account required. Calculations run in your browser.",
    },
    {
      question: "Is a TDEE estimate the same as a lab metabolic test?",
      answer:
        "No. Indirect calorimetry and clinical assessments are more individual. Online formulas give a practical starting estimate and can be wrong for a given person by a noticeable margin.",
    },
    {
      question: "Does age or sex change the result?",
      answer:
        "Yes. Mifflin–St Jeor includes age and uses different constants for male and female equations, so the same height and weight can produce different BMR and TDEE values.",
    },
    {
      question: "What is a maintenance calories calculator?",
      answer:
        "It is another name for estimating the intake that should hold weight steady. On this page, maintenance calories equal your calculated TDEE.",
    },
    {
      question: "Can teenagers or pregnant people rely on these numbers?",
      answer:
        "Not as a prescription. The form accepts adult-style ages for the equation, but growth, pregnancy and many medical conditions need clinician-guided targets rather than a generic online estimate.",
    },
    {
      question: "Why show BMR if I only care about daily calories?",
      answer:
        "BMR explains the resting foundation under TDEE. Seeing both helps you understand how much of your daily need comes from baseline metabolism versus activity, which is useful when routines change.",
    },
    {
      question: "How often should I recalculate TDEE?",
      answer:
        "Recalculate after a meaningful weight change, a new training block, or whenever your average weekly weight trend no longer matches the goal. Many people revisit every two to six weeks while actively cutting or bulking.",
    },
    {
      question: "Can I copy or share my results?",
      answer:
        "Yes. Copy Results places a plain-text summary on the clipboard. Share Results uses the device share sheet when available, or copies the same summary so you can paste it into a message.",
    },
    {
      question: "Does this tool store my measurements?",
      answer:
        "No. Age, weight, height and results stay in the page session in your browser. Nothing is sent to a server to compute TDEE.",
    },
  ],
};
