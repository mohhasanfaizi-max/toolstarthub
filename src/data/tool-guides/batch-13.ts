import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-10T00:00:00Z";

const howToMacros: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-macros",
    title: "How to Calculate Macros From Your Daily Calories",
    primaryKeyword: "how to calculate macros",
    secondaryKeywords: [
      "macro calculator grams",
      "30 40 30 macro split",
      "calories per gram protein carbs fat",
      "convert calories to macros",
      "macronutrient split for weight loss",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "percentage-calculator", "unit-converter"],
    metaTitle: "How to Calculate Macros: Calories to Grams",
    metaDescription:
      "Turn a daily calorie target into protein, carb and fat grams with the 4-4-9 rule, worked examples for five common splits and tips for adjusting them.",
    excerpt:
      "Macros are calorie shares turned into grams. This guide explains the 4-4-9 conversion, compares common splits such as 30/40/30 and shows how to check your numbers.",
    relatedArticles: [
      "how-to-calculate-tdee",
      "how-much-protein-per-day",
      "how-to-read-a-nutrition-facts-label",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to calculate macros, start with a daily calorie target, choose what share of those calories should come from protein, carbohydrate and fat, then divide each share by its energy value. Protein and carbohydrate supply about 4 kcal per gram and fat about 9 kcal per gram. At 2,000 kcal with a 30/40/30 split, that is 600 kcal of protein (150 g), 800 kcal of carbohydrate (200 g) and 600 kcal of fat (about 67 g). Alma: AI Nutrition Coach & Food Tracker does this conversion for five preset splits in your browser.",
    why:
      "A calorie number alone does not tell you what to put on the plate. Gram targets make shopping, cooking and logging concrete, and a clear method lets you check any app or coach instead of copying numbers you cannot explain.",
    sections: [
      {
        id: "what",
        heading: "What are macros?",
        paragraphs: [
          "Macronutrients are the three nutrients that supply most of the energy in food: protein, carbohydrate and fat. Alcohol also supplies energy, about 7 kcal per gram, but it is not counted as a nutrient target. Fibre is a type of carbohydrate; on food labels it sits inside total carbohydrate.",
          "Counting macros means setting a gram goal for each of the three and tracking intake against those goals. It is a planning layer on top of calories, not a replacement for food quality, variety or medical advice.",
        ],
      },
      {
        id: "four-four-nine",
        heading: "How does the 4-4-9 rule convert calories to grams?",
        paragraphs: [
          "The general factors used on nutrition labels are 4 kcal per gram for protein, 4 kcal per gram for carbohydrate and 9 kcal per gram for fat. To go from calories to grams, divide. To go from grams back to calories, multiply. Because fat is more than twice as energy dense, a small change in fat grams moves total calories more than the same change in protein or carbohydrate.",
          "Real foods vary a little from these round factors, and labels are allowed to round. That is why a day of logged grams rarely multiplies back to the exact calorie total shown. A gap of a few percent is normal and not a sign that the method is broken.",
        ],
        table: {
          caption: "Energy per gram used for macro maths",
          headers: ["Macro", "kcal per gram", "100 g supplies"],
          rows: [
            ["Protein", "4", "400 kcal"],
            ["Carbohydrate", "4", "400 kcal"],
            ["Fat", "9", "900 kcal"],
            ["Alcohol (not a target)", "7", "700 kcal"],
          ],
        },
      },
      {
        id: "splits",
        heading: "Which macro split should I start with?",
        paragraphs: [
          "Alma offers five starting splits. Balanced 30/40/30 is the default. Higher protein 40/30/30 suits people who want more satiety or do regular resistance training. Lower carb 30/25/45 shifts energy to fat. Higher carb 20/55/25 suits higher training volume. Even 33/34/33 spreads calories almost equally. The TDEE Calculator uses the balanced 30/40/30 split for its quick suggestion.",
          "For context, the Dietary Reference Intakes published by the US National Academies give acceptable adult ranges of about 10–35% of energy from protein, 45–65% from carbohydrate and 20–35% from fat. Some presets sit outside those ranges on purpose, so treat them as personal preferences to test, not as official recommendations.",
        ],
        table: {
          caption: "Grams per day at 2,000 kcal for each Alma preset",
          headers: ["Split (P/C/F)", "Protein", "Carbs", "Fat"],
          rows: [
            ["Balanced 30/40/30", "150 g", "200 g", "67 g"],
            ["Higher protein 40/30/30", "200 g", "150 g", "67 g"],
            ["Lower carb 30/25/45", "150 g", "125 g", "100 g"],
            ["Higher carb 20/55/25", "100 g", "275 g", "56 g"],
            ["Even 33/34/33", "165 g", "170 g", "73 g"],
          ],
        },
      },
      {
        id: "protein-first",
        heading: "Should protein be set in grams per kilogram instead?",
        paragraphs: [
          "Percentages are easy, but they scale with calories rather than with your body. At a large deficit, 30% of a small calorie target can leave protein lower than you want; at a large surplus, it can push protein higher than needed. Many people therefore fix protein in grams per kilogram of body weight first and split the remaining calories between carbohydrate and fat.",
          "Alma’s Protein Calculator gives gram ranges for general, active, strength and weight-loss goals. Use that number, multiply it by 4 to get protein calories, subtract from your calorie target and divide the rest by your preferred carb and fat shares. The guide on how much protein per day explains those ranges.",
        ],
      },
      {
        id: "check",
        heading: "How do I check that my macro numbers add up?",
        paragraphs: [
          "Multiply each gram target back by its factor and add the results. Protein grams × 4 plus carbohydrate grams × 4 plus fat grams × 9 should land within a few calories of your target. If it does not, one share was probably entered as a whole number instead of a decimal, or the percentages did not add up to 100.",
          "The Percentage Calculator is handy for this step. Enter one macro’s calories and the daily total to see its actual share, which is useful when you adjust grams by hand and want to know where the split ended up.",
        ],
      },
    ],
    stepsHeading: "How do I calculate macros on Tools Star Hub?",
    steps: [
      {
        title: "Get a calorie target",
        body: "Use the TDEE Calculator or Alma’s Calculators tab with your age, sex, height, weight and activity. Pick maintain, lose or gain so the target matches your goal.",
      },
      {
        title: "Choose a starting split",
        body: "Select one of Alma’s five macro plans. If you are unsure, start with Balanced 30/40/30 and change only one thing at a time later.",
      },
      {
        title: "Read the gram targets",
        body: "Alma converts each share with 4 kcal per gram for protein and carbohydrate and 9 kcal per gram for fat, then shows rounded daily grams.",
      },
      {
        title: "Log food against the targets",
        body: "Add meals in the Food Tracker. The Dashboard shows progress for each macro and the calories left for the day.",
      },
      {
        title: "Review after two to three weeks",
        body: "Compare the weekly weight trend, hunger and training energy. Adjust calories first if weight is moving the wrong way, then fine-tune the split.",
      },
    ],
    examples: [
      {
        title: "Standard deficit on the balanced split",
        body: "A target of 2,259 kcal at 30/40/30 gives about 678 kcal of protein (169 g), 904 kcal of carbohydrate (226 g) and 678 kcal of fat (75 g). Check: 169×4 + 226×4 + 75×9 = 2,255 kcal, within rounding of the target.",
      },
      {
        title: "Protein fixed first",
        body: "A 70 kg person who wants 1.6 g/kg sets protein at 112 g, or 448 kcal. On an 1,900 kcal target, 1,452 kcal remain. Splitting those 60/40 between carbohydrate and fat gives about 871 kcal of carbs (218 g) and 581 kcal of fat (65 g).",
      },
      {
        title: "Switching to lower carb",
        body: "Moving a 2,000 kcal plan from 30/40/30 to 30/25/45 keeps protein at 150 g, drops carbohydrate from 200 g to 125 g and lifts fat from about 67 g to 100 g. Total calories stay the same.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Calories still lead",
        body: "Body-weight change follows the calorie balance over time. A perfect split on the wrong calorie target will not deliver the result you planned.",
      },
      {
        heading: "Rounding is normal",
        body: "Gram targets and label values are rounded, so small gaps between logged grams and logged calories are expected.",
      },
      {
        heading: "Educational use",
        body: "Macro presets are general starting points. People with diabetes, kidney disease, pregnancy or a history of disordered eating should plan targets with a clinician or registered dietitian.",
      },
    ],
    faqs: [
      {
        question: "What is the formula for converting calories to macro grams?",
        answer:
          "Multiply daily calories by the macro’s share, then divide by 4 for protein or carbohydrate and by 9 for fat. For example, 2,000 × 0.30 ÷ 4 = 150 g of protein.",
      },
      {
        question: "Why does fat have fewer grams than protein at the same percentage?",
        answer:
          "Each gram of fat supplies about 9 kcal versus about 4 kcal for protein, so the same calorie share buys fewer than half as many grams of fat.",
      },
      {
        question: "Do the three percentages have to add up to 100?",
        answer:
          "Yes. Protein, carbohydrate and fat shares should total 100% of your calorie target. If they add to less, part of your calories is unassigned; if more, the grams overshoot the target.",
      },
      {
        question: "Is 30/40/30 the best macro split?",
        answer:
          "No single split is best for everyone. Thirty, forty, thirty is a common, easy starting point. Adherence, food preferences and training usually matter more than the exact ratio.",
      },
      {
        question: "Does fibre count toward my carbohydrate grams?",
        answer:
          "On a standard nutrition label, dietary fibre is listed inside total carbohydrate. Unless you deliberately track net carbs, log the total carbohydrate figure.",
      },
      {
        question: "How should I count alcohol in a macro plan?",
        answer:
          "Alcohol supplies about 7 kcal per gram but has no macro target. Many people log it against their calorie total and reduce carbohydrate or fat on that day to stay on budget.",
      },
      {
        question: "Should I hit my macros exactly every day?",
        answer:
          "Close enough is fine. Landing within roughly 5–10 grams of each target most days, with calories on track, is a realistic standard for most people.",
      },
      {
        question: "Do I need new macros when my calorie target changes?",
        answer:
          "Yes, if you use percentages, because grams scale with calories. If you fixed protein in grams per kilogram, recalculate only the carb and fat share.",
      },
      {
        question: "Can I calculate macros without tracking food?",
        answer:
          "You can. Some people use the gram targets to build a repeatable meal template, such as a palm of protein and a fist of carbohydrate per meal, and track only occasionally.",
      },
      {
        question: "Where can I turn my macros into a meal plan?",
        answer:
          "Alma: AI Nutrition Coach & Food Tracker includes a meal planner and grocery list that use your saved calorie and macro targets.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Convert your calorie target into protein, carb and fat grams in ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Find your starting calories with the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Set protein by body weight in ",
        linkLabel: "How much protein per day",
        href: "/guides/how-much-protein-per-day",
        after: ".",
      },
      {
        before: "Check any macro’s share of the total with the ",
        linkLabel: "Percentage Calculator",
        href: "/tools/percentage-calculator",
        after: ".",
      },
    ],
    sources: [
      {
        label: "NIH Office of Dietary Supplements – Dietary Reference Intakes",
        href: "https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx",
      },
      {
        label: "FDA – How to Understand and Use the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
    ],
  },
};

const activityMultipliers: ToolGuide = {
  article: toolGuideArticle({
    slug: "activity-level-multipliers-explained",
    title: "Activity Level Multipliers Explained: Pick the Right TDEE Factor",
    primaryKeyword: "activity level multiplier",
    secondaryKeywords: [
      "tdee activity factor",
      "sedentary vs lightly active",
      "1.2 1.375 1.55 1.725 1.9",
      "which activity level should i choose",
      "moderately active meaning",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "unit-converter", "time-calculator"],
    metaTitle: "Activity Level Multipliers for TDEE Explained",
    metaDescription:
      "What the 1.2, 1.375, 1.55, 1.725 and 1.9 TDEE activity factors mean, how to choose yours honestly, and how one level changes your calorie estimate.",
    excerpt:
      "The activity factor often moves a TDEE estimate more than any other input. Learn what each level means, how to pick yours and when to move up or down.",
    relatedArticles: [
      "how-to-calculate-tdee",
      "bmr-vs-tdee-explained",
      "how-to-calculate-macros",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: an activity level multiplier scales your basal metabolic rate (BMR) up to an estimate of total daily energy expenditure (TDEE). The common factors are 1.2 for sedentary, 1.375 for lightly active, 1.55 for moderately active, 1.725 for very active and 1.9 for extra active. Choose the level that matches a typical week, not your best week. With a BMR of 1,780 kcal, each step up adds roughly 270–330 kcal per day, so an honest choice matters more than decimal-point precision elsewhere. The free TDEE Calculator applies these factors for you.",
    why:
      "Most people know their age, height and weight exactly. Activity is the one input they have to judge, and it is the easiest to overestimate. A clear picture of what each level means saves weeks of wondering why progress does not match the plan.",
    sections: [
      {
        id: "what",
        heading: "What is an activity multiplier?",
        paragraphs: [
          "BMR is the energy your body uses at complete rest. You do more than rest, so calculators multiply BMR by a single factor that stands for everything else: walking around, work, chores, fidgeting, planned exercise and digesting food. The result is TDEE, the number used for maintenance calories.",
          "The multiplier is a shortcut, not a measurement. It compresses a whole week of movement into one decimal. That is why it works best as a starting estimate that you confirm with real intake and weight data over a few weeks.",
        ],
      },
      {
        id: "levels",
        heading: "What does each activity level mean?",
        paragraphs: [
          "The TDEE Calculator on this site uses the five levels below. The descriptions focus on planned exercise, but the job you do and how much you move outside the gym count too. A nurse on her feet for twelve hours may sit a level higher than an office worker who trains the same amount.",
          "If you fall between two levels, pick the lower one first. It is easier to add calories when weight drops faster than planned than to explain a stall caused by an optimistic estimate.",
        ],
        table: {
          caption: "Activity levels used by the TDEE Calculator",
          headers: ["Level", "Factor", "Description on the tool"],
          rows: [
            ["Sedentary", "1.2", "Little or no exercise; desk work most days"],
            ["Lightly active", "1.375", "Light exercise or sports 1–3 days per week"],
            ["Moderately active", "1.55", "Moderate exercise or sports 3–5 days per week"],
            ["Very active", "1.725", "Hard exercise or sports 6–7 days per week"],
            ["Extra active", "1.9", "Very hard exercise, physical job, or training twice a day"],
          ],
        },
      },
      {
        id: "impact",
        heading: "How much does one level change TDEE?",
        paragraphs: [
          "Take a BMR of 1,780 kcal, the figure for a 30-year-old man who weighs 80 kg and is 180 cm tall using Mifflin–St Jeor. The table shows how the same person’s TDEE moves across all five levels. The gap between sedentary and extra active is about 1,250 kcal per day.",
          "A 300 kcal error is close to the size of the 500 kcal deficit many plans use for gradual weight loss. Choosing one level too high can wipe out most of a planned deficit without any change in what you eat.",
        ],
        table: {
          caption: "TDEE at a BMR of 1,780 kcal",
          headers: ["Level", "Calculation", "TDEE (approx.)"],
          rows: [
            ["Sedentary", "1,780 × 1.2", "2,136 kcal"],
            ["Lightly active", "1,780 × 1.375", "2,448 kcal"],
            ["Moderately active", "1,780 × 1.55", "2,759 kcal"],
            ["Very active", "1,780 × 1.725", "3,071 kcal"],
            ["Extra active", "1,780 × 1.9", "3,382 kcal"],
          ],
        },
      },
      {
        id: "choose",
        heading: "How do I choose my level honestly?",
        paragraphs: [
          "Count sessions you actually completed over the last four weeks, not the sessions you planned. Divide by four for a weekly average. Then think about your job and daily steps. A desk job with no formal training is sedentary even if you walk to the shops. Three gym sessions a week on top of desk work usually fits lightly to moderately active.",
          "Public health guidance gives a useful reference point. The World Health Organization recommends that adults get 150–300 minutes of moderate activity or 75–150 minutes of vigorous activity per week, plus muscle-strengthening work on two or more days. Meeting the lower end of that guidance with an otherwise seated day often lands near lightly active, not very active.",
        ],
      },
      {
        id: "adjust",
        heading: "When should I change my activity level?",
        paragraphs: [
          "Change it when your routine changes for more than a couple of weeks: a new physical job, a training block, an injury or a holiday season with little movement. Re-run the calculator with the new level and keep the other inputs current.",
          "Also change it, or simply adjust calories, if your data disagrees. If your weekly average weight stays flat for three or more weeks while you eat at your planned deficit, your real TDEE is probably lower than estimated. Moving down one level or reducing intake by 100–200 kcal is a reasonable next step.",
        ],
      },
    ],
    stepsHeading: "How do I use activity levels in the TDEE Calculator?",
    steps: [
      {
        title: "Enter body details first",
        body: "Add sex, age, height and weight in metric or imperial units so the calculator can estimate BMR with Mifflin–St Jeor.",
      },
      {
        title: "Average your last four weeks",
        body: "Count completed workouts and note how physical your job was. Use that average, not your plan for next week.",
      },
      {
        title: "Pick the closest level",
        body: "Match the average to the five descriptions. When in doubt, choose the lower of the two levels you are deciding between.",
      },
      {
        title: "Read BMR, TDEE and the formula line",
        body: "The result shows BMR, the factor used and TDEE, so you can see exactly how the activity choice moved the number.",
      },
      {
        title: "Confirm with weekly data",
        body: "Log intake and weigh-ins for two to three weeks. If the trend does not match the plan, adjust the level or calories.",
      },
    ],
    examples: [
      {
        title: "Office worker who walks at lunch",
        body: "Desk job, 30-minute walks most weekdays, no gym. That is light activity spread across the week, so lightly active (1.375) is a fair start; sedentary (1.2) is the safer choice if weight loss stalls.",
      },
      {
        title: "Retail worker who also trains",
        body: "On her feet for most of an eight-hour shift and lifting weights three times a week. The job adds daily movement on top of training, so moderately active (1.55) is reasonable.",
      },
      {
        title: "Construction worker with weekend football",
        body: "Heavy manual work five days a week plus a match at the weekend. This matches the physical-job description, so extra active (1.9) fits better than very active.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Do not add exercise calories twice",
        body: "The factor already includes your workouts. Adding calories from a watch or treadmill on top usually double-counts.",
      },
      {
        heading: "It is an estimate",
        body: "Two people with the same inputs can burn different amounts. Use your weight trend to refine the number.",
      },
      {
        heading: "Educational use",
        body: "Calorie estimates on Tools Star Hub are educational and are not medical advice. Ask a clinician about energy needs during illness, pregnancy or recovery.",
      },
    ],
    faqs: [
      {
        question: "What activity multiplier should I use for a desk job?",
        answer:
          "Start with sedentary (1.2) if you do no regular exercise. Add one level for one to three light sessions a week, or two for three to five moderate sessions.",
      },
      {
        question: "Is walking 10,000 steps a day lightly or moderately active?",
        answer:
          "Steps alone do not map exactly to a level. Many people who reach that count mainly through daily walking fit lightly active; add planned training to move higher.",
      },
      {
        question: "Does the activity factor include the thermic effect of food?",
        answer:
          "Yes, in practice. The factor bundles everything above BMR into one number, including the small cost of digesting meals.",
      },
      {
        question: "Why does my fitness watch say I burn more than the calculator?",
        answer:
          "Watches estimate from heart rate and motion, and their exercise numbers can run high. Compare both with your actual weight trend and trust the one that matches.",
      },
      {
        question: "Should I pick a different level on rest days?",
        answer:
          "No. The factor is a weekly average, so one level covers both training and rest days. Keep intake steady or average it across the week.",
      },
      {
        question: "Can I use a multiplier between the listed levels, such as 1.45?",
        answer:
          "The calculator offers the five standard factors. If you sit between two, use the lower one and adjust calories in small steps based on results.",
      },
      {
        question: "What is the difference between very active and extra active?",
        answer:
          "Very active (1.725) means hard exercise on six or seven days. Extra active (1.9) adds very hard training, a physical job or training twice a day.",
      },
      {
        question: "Does a heavier body need a higher activity level?",
        answer:
          "No. Body weight is already in the BMR equation. Choose the level from what you do, not from how much you weigh.",
      },
      {
        question: "How often should I review my activity level?",
        answer:
          "Review it whenever your routine changes for more than two weeks, and every few weeks during a long weight-loss or gain phase.",
      },
      {
        question: "Where do I turn TDEE into a food plan?",
        answer:
          "Use the targets in Alma: AI Nutrition Coach & Food Tracker to set macros, log meals and plan a week of food.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Try each activity level and compare TDEE side by side in the free ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "See the full method in ",
        linkLabel: "How to calculate TDEE",
        href: "/guides/how-to-calculate-tdee",
        after: ".",
      },
      {
        before: "Understand resting versus total burn in ",
        linkLabel: "BMR vs TDEE explained",
        href: "/guides/bmr-vs-tdee-explained",
        after: ".",
      },
      {
        before: "Turn calories into food targets with ",
        linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
        href: "/tools/alma-ai-nutrition-coach",
        after: ".",
      },
    ],
    sources: [
      {
        label: "World Health Organization – Physical activity fact sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
      {
        label: "ODPHP – Physical Activity Guidelines for Americans",
        href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines",
      },
      {
        label: "Mifflin MD et al. – A new predictive equation for resting energy expenditure (PubMed)",
        href: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      },
    ],
  },
};

const nutritionLabel: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-read-a-nutrition-facts-label",
    title: "How to Read a Nutrition Facts Label in Five Steps",
    primaryKeyword: "how to read a nutrition facts label",
    secondaryKeywords: [
      "percent daily value meaning",
      "serving size on food label",
      "added sugars on nutrition label",
      "5 20 rule food label",
      "log packaged food calories",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "unit-converter", "percentage-calculator"],
    metaTitle: "How to Read a Nutrition Facts Label",
    metaDescription:
      "Read serving size, calories, %DV and added sugars on a Nutrition Facts label, use the 5/20 rule, and log packaged foods accurately in a food tracker.",
    excerpt:
      "A Nutrition Facts label packs a lot into a small panel. This guide walks through it top to bottom and shows how to log a packaged food without mistakes.",
    relatedArticles: [
      "how-to-calculate-macros",
      "how-much-protein-per-day",
      "calorie-deficit-explained",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: read a Nutrition Facts label from the top down. Check the serving size and servings per container first, because every number below refers to one serving. Then read calories, scan the nutrients with their percent Daily Value (%DV), and use the 5/20 guide from the US Food and Drug Administration: 5% DV or less of a nutrient per serving is low, 20% DV or more is high. Finally, multiply by the number of servings you actually eat. Alma: AI Nutrition Coach & Food Tracker lets you enter those label values as a custom food.",
    why:
      "Labels are the most reliable nutrition data most people can get for packaged food, yet the most common logging errors come from misreading them: using the whole pack’s weight with per-serving numbers, or skipping the added sugars line.",
    sections: [
      {
        id: "serving",
        heading: "Why should I read the serving size first?",
        paragraphs: [
          "Every value on the label refers to the serving size printed at the top, shown in a household measure such as one cup and in grams or millilitres. Servings per container tells you how many of those servings the pack holds. The FDA bases serving sizes on amounts people typically eat or drink, not on how much they should eat.",
          "If you eat two servings, double every number. If the pack contains 2.5 servings and you finish it, multiply by 2.5. Some packages that could reasonably be eaten in one sitting show a dual-column label with values per serving and per package, which removes this step.",
        ],
      },
      {
        id: "calories",
        heading: "How do I use the calories line?",
        paragraphs: [
          "Calories show the energy in one serving. To see how a food fits your day, compare it with your own target from the TDEE Calculator rather than the general 2,000-calorie reference on the label. A 250 kcal snack is about 12% of a 2,000 kcal day but about 15% of a 1,700 kcal day.",
          "Calories on labels are calculated from the protein, carbohydrate and fat content and rounded, so multiplying the macro grams by 4, 4 and 9 will usually come close to, but not exactly match, the printed number.",
        ],
      },
      {
        id: "dv",
        heading: "What does percent Daily Value mean?",
        paragraphs: [
          "The %DV shows how much one serving contributes to a reference daily amount of that nutrient, based on a 2,000-calorie diet used for general nutrition advice. It lets you compare products quickly without converting milligrams and grams in your head.",
          "Use the 5/20 guide: 5% DV or less is low and 20% DV or more is high. Aim higher for nutrients many people under-consume, such as dietary fibre, vitamin D, calcium, iron and potassium. Aim lower for saturated fat, sodium and added sugars.",
        ],
        table: {
          caption: "Reading %DV with the 5/20 guide",
          headers: ["%DV per serving", "Meaning", "Example use"],
          rows: [
            ["5% or less", "Low", "Pick lower sodium soup at 4% DV over 20% DV"],
            ["6–19%", "Moderate", "Fine in context of the whole day"],
            ["20% or more", "High", "Good for fibre or calcium; limit for saturated fat"],
          ],
        },
      },
      {
        id: "sugars",
        heading: "What is the difference between total sugars and added sugars?",
        paragraphs: [
          "Total sugars include sugars naturally present in foods such as milk and fruit plus any sugars added during processing. Added sugars, indented below total sugars, show only those added, including syrups, honey and concentrated juice. Added sugars carry a %DV; total sugars do not.",
          "The Dietary Guidelines for Americans advise keeping added sugars below 10% of daily calories from age two. On a 2,000 kcal diet that is under 200 kcal, or about 50 g. Plain yoghurt with 6 g total and 0 g added sugars is very different from flavoured yoghurt with 18 g total and 12 g added.",
        ],
      },
      {
        id: "log",
        heading: "How do I log a packaged food accurately?",
        paragraphs: [
          "Weigh what you actually eat when you can. If the label says one serving is 40 g and you pour 60 g, you ate 1.5 servings. The Unit Converter helps when a label lists ounces and your kitchen scale shows grams.",
          "In Alma you can search Open Food Facts for packaged products or add a custom food straight from the label. For drinks, Alma handles per-100 ml values so a 330 ml can is logged correctly. Double-check that the serving you log matches the serving on the panel before saving.",
          "Custom foods you create are kept in your browser, so a product you buy every week only needs to be typed in once. If the manufacturer changes the recipe, the label usually changes too; compare the panel with your saved entry now and then and update the calories and macros when they differ.",
        ],
      },
    ],
    stepsHeading: "How do I read a label and log it in Alma?",
    steps: [
      {
        title: "Find serving size and servings per container",
        body: "Note the household measure and the gram or millilitre amount. Decide how many servings you will really eat.",
      },
      {
        title: "Read calories for one serving",
        body: "Multiply by your number of servings and compare the result with your daily calorie target.",
      },
      {
        title: "Scan %DV with the 5/20 guide",
        body: "Look for low saturated fat, sodium and added sugars, and higher fibre, vitamin D, calcium, iron and potassium.",
      },
      {
        title: "Check protein, carbohydrate and fat grams",
        body: "These feed your macro targets. Fibre sits inside total carbohydrate on the label.",
      },
      {
        title: "Log it in the Food Tracker",
        body: "Search the product in Alma or add a custom food with the label values, set the serving amount, and save it to the right meal.",
      },
    ],
    examples: [
      {
        title: "Breakfast cereal portion",
        body: "The label shows 30 g per serving at 120 kcal. A typical poured bowl weighs 60 g, which is two servings and 240 kcal before any milk.",
      },
      {
        title: "Comparing two soups",
        body: "Soup A lists sodium at 32% DV per serving; Soup B lists 12% DV. Using the 5/20 guide, A is high in sodium and B is moderate, so B is the easier fit for a lower-sodium day.",
      },
      {
        title: "Logging a canned drink",
        body: "A drink lists 42 kcal per 100 ml. A 330 ml can supplies about 139 kcal (42 × 3.3). Logging it per 100 ml in Alma avoids treating the whole can as a single 100 ml serving.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Label rules vary by country",
        body: "This guide follows the US Nutrition Facts format. Labels in the EU, UK and elsewhere often show values per 100 g and use different reference amounts.",
      },
      {
        heading: "%DV is a general reference",
        body: "Daily Values are based on 2,000 kcal. Your own needs may be higher or lower, so use them to compare foods rather than as personal targets.",
      },
      {
        heading: "Educational use",
        body: "If you manage a medical condition or food allergy, follow your clinician’s advice and always read the ingredient and allergen statements.",
      },
    ],
    faqs: [
      {
        question: "What is the first thing to check on a nutrition label?",
        answer:
          "The serving size and servings per container. Every other number on the panel refers to one serving, so this step controls accuracy for the rest.",
      },
      {
        question: "What does 20% DV mean?",
        answer:
          "One serving supplies 20% of the reference daily amount for that nutrient on a 2,000-calorie diet. Under the FDA’s 5/20 guide, that counts as high.",
      },
      {
        question: "Is the serving size the amount I should eat?",
        answer:
          "No. Serving sizes reflect amounts people typically eat or drink. They are a reference for the numbers, not a portion recommendation.",
      },
      {
        question: "Why is there no %DV for total sugars or protein?",
        answer:
          "No Daily Value is set for total sugars. Protein %DV is required only when a protein claim is made or the food is for young children, so most labels show protein in grams only.",
      },
      {
        question: "How many grams of added sugar is 10% of calories?",
        answer:
          "Sugar supplies about 4 kcal per gram. On a 2,000 kcal diet, 10% is 200 kcal, or about 50 g of added sugars per day.",
      },
      {
        question: "Does fibre count as carbohydrate on the label?",
        answer:
          "Yes. Dietary fibre and total sugars are both listed under total carbohydrate. If you track total carbs, use the total carbohydrate figure.",
      },
      {
        question: "What is a dual-column label?",
        answer:
          "Some packs that could be eaten in one or two sittings show two columns, one per serving and one for the whole package, so you do not have to multiply.",
      },
      {
        question: "Why do my macro grams not multiply back to the label calories?",
        answer:
          "Labels round each value and some ingredients, such as fibre and sugar alcohols, supply less energy than the general factors. Small differences are normal.",
      },
      {
        question: "How do I log food when I eat part of a package?",
        answer:
          "Weigh the portion and divide by the gram serving size to get the number of servings, then log that amount. Alma accepts fractional servings, or you can log the portion directly in grams or millilitres.",
      },
      {
        question: "Can I add a packaged food that is not in the database?",
        answer:
          "Yes. In Alma’s Food Tracker you can create a custom food from the label values and reuse it later from your browser’s saved list.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Log packaged foods from the label or Open Food Facts in ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Turn label grams into daily goals with ",
        linkLabel: "How to calculate macros",
        href: "/guides/how-to-calculate-macros",
        after: ".",
      },
      {
        before: "Set a personal calorie target in the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Convert ounces and grams with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
    ],
    sources: [
      {
        label: "FDA – How to Understand and Use the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
      },
      {
        label: "FDA – Added Sugars on the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label",
      },
      {
        label: "FDA – Serving Size on the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
    ],
  },
};

export const batch13Guides: ToolGuide[] = [howToMacros, activityMultipliers, nutritionLabel];
