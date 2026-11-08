import type { ToolContent } from "./tool-content.ts";

export const almaNutritionContent: ToolContent = {
  about:
    "Alma is a free AI nutrition coach and food tracker on Tools Star Hub. It estimates daily calorie needs with Mifflin–St Jeor BMR and TDEE, calculates protein and other macros, lists general micronutrient references, logs breakfast through snacks in your browser, and offers meal-planning, grocery and educational coaching tools—without a paywall or a downloadable app.",
  howTo: [
    "Open the Calculators tab and enter age, sex, height, weight and activity. Choose metric or imperial units, then calculate daily calories, BMR or TDEE.",
    "Pick a macro distribution or protein goal if you want gram targets, and review the micronutrient reference table for general adult values.",
    "Use the Food Tracker to search sample reference foods or Open Food Facts packaged products, add a custom food from a label, and log breakfast, lunch, dinner or snacks.",
    "Check the Dashboard for remaining calories, macro progress, water and weekly history. Plan meals, build a grocery list, and ask the AI Nutrition Coach a question. Everything basic stays free.",
  ],
  examples: [
    {
      title: "Desk worker setting a calorie target",
      body: "A 30-year-old man, 80 kg and 180 cm, who is moderately active, gets a Mifflin–St Jeor BMR near 1,780 kcal and a TDEE near 2,759 kcal. Maintenance calories match TDEE. A standard 500 kcal deficit would suggest about 2,259 kcal, with macros following the selected split.",
    },
    {
      title: "Logging breakfast from sample foods",
      body: "Searching “oats” and “banana” in the sample reference list, then adding one serving of each to breakfast, adds their typical USDA-style calories and potassium from the banana. The dashboard updates remaining energy for the day.",
    },
    {
      title: "Asking the coach about protein",
      body: "After saving a strength-training protein range from the Protein Calculator, you can ask “How much protein do I need?” The coach uses your saved targets and today’s log. If live AI is configured on the server, the reply is labelled AI-assisted; otherwise Alma uses its educational rule-based coach.",
    },
  ],
  explanation:
    "Daily energy starts with the Mifflin–St Jeor equation for basal metabolic rate, then an activity multiplier for total daily energy expenditure. Macronutrient grams come from a chosen calorie split (protein and carbohydrate at 4 kcal/g, fat at 9 kcal/g). Protein ranges use grams per kilogram of body weight. Micronutrient figures are general dietary reference values, not lab results. Food numbers come from a labelled sample database, Open Food Facts community data, or values you type from a package.",
  features: [
    "Free daily calorie, BMR, TDEE, macro, protein, calorie-deficit and micronutrient modules in one page.",
    "Food diary for breakfast, lunch, dinner and snacks with search, custom foods, servings, edits and deletes.",
    "Dashboard with calorie remaining, macro rings, water intake and a seven-day history.",
    "Meal planner, grocery list and substitution suggestions.",
    "Educational AI Nutrition Coach with a secure server route when AI is configured, and a labelled rule-based fallback when it is not.",
    "Browser-only diary storage and no subscription wall on basic calculations.",
  ],
  tips: [
    "Match activity to a typical week, not your hardest training day.",
    "Prefer a kitchen scale and Nutrition Facts labels over guessed cups when you can.",
    "Use weekly averages on the dashboard instead of judging a single day.",
    "Treat micronutrient coverage as a prompt to widen food variety, not as a diagnosis.",
  ],
  limitations:
    "Alma estimates energy and nutrients; it does not measure metabolism in a lab, analyse bloodwork or replace a doctor or registered dietitian. Sample foods use typical published USDA-style values and are rounded. Open Food Facts listings are community-maintained and usually expressed per 100 g. Custom foods are only as accurate as the label you copy. Sex is modeled with the binary Mifflin–St Jeor constants. Loss calories are floored at 1,200 kcal as a soft safety bound for the estimate only.",
  article: {
    title:
      "Alma: AI Nutrition Coach & Food Tracker – Your Complete Guide to Free Nutrition Calculations and Healthy Eating",
    intro:
      "People look for a nutrition calculator, a food tracking website and an AI nutrition coach for the same practical reason: they want a clear way to estimate daily calories, see what they actually eat, and understand protein, carbohydrate, fat and micronutrients without paying for a locked app. Alma is Tools Star Hub’s free nutrition calculation and food tracking workspace. It lives in the browser, it does not require an account, and it is an educational tool rather than a clinic, grocery service or official app-store product that may share the same name. This guide explains how a free nutrition calculator works, how to track food online, and how Alma’s modules fit together so you can use them with realistic expectations.",
    sections: [
      {
        heading: "Free Nutrition Calculator and Food Tracker",
        paragraphs: [
          "A free nutrition calculator turns a few body measurements and an activity description into estimated calorie needs. A food tracker then compares those needs with what you log at breakfast, lunch, dinner and snacks. Alma combines both jobs on one page so you are not jumping between a daily calorie calculator, a separate food diary and a spreadsheet for macros. The Dashboard shows a calorie target, calories consumed, remaining energy, protein, carbohydrate and fat progress, a simple water log and a week of history.",
          "Because everything basic is free, you can run a daily nutrition calculation, log a homemade lunch and ask an educational question without hitting a paywall. That matters for anyone who has tried a nutrition app only to find the useful reports sitting behind a subscription. Alma’s promise is narrower and more honest: transparent arithmetic, a labelled food database, local storage and teaching explanations—not a personalized medical plan.",
        ],
      },
      {
        heading: "What is an AI Nutrition Coach?",
        paragraphs: [
          "An AI nutrition coach is a guided assistant that answers nutrition questions in plain language and, when you allow it, looks at the numbers you have already calculated or logged. It can explain the difference between calories and nutrients, suggest how to build a more balanced breakfast, or point you toward iron-rich foods. It should not diagnose a deficiency, prescribe a clinical diet or claim that a chatbot knows your medical history.",
          "Alma’s coach is built that way on purpose. If Tools Star Hub has an AI service configured, your question and a short summary of today’s diary travel to a server-side route. API keys never appear in the browser. If that service is not configured, or if it fails, Alma switches to a working educational rule-based coach and labels the reply so you are never shown a fake live-AI chat. In both cases the goal is nutrition education: helping you interpret a TDEE estimate, a protein range or a half-empty vegetable log.",
        ],
      },
      {
        heading: "AI Nutrition Coach for Healthy Eating",
        paragraphs: [
          "Healthy eating is less about a perfect day and more about repeatable patterns: enough protein to support muscles and satiety, carbohydrate to fuel activity, fat for hormones and fat-soluble vitamins, and a spread of plants that carry fiber and micronutrients. An AI nutrition coach is useful when it keeps you focused on those patterns instead of scoring foods as moral wins or losses.",
          "You might ask how to improve daily nutrition after a week of low vegetable intake, or whether a logged breakfast looks balanced. Alma can comment on what is present—protein, produce, fiber clues—and what is missing, then send you back to the Meal Planner or Food Tracker to make a small change. That loop is the product: calculate, log, review, adjust.",
        ],
      },
      {
        heading: "What is a food tracking website?",
        paragraphs: [
          "A food tracking website, sometimes called an online food tracker, meal tracker website or food diary, is a page where you record what you eat and see running totals. Unlike a paper journal, it can convert servings into calories and macros as soon as you add an item. Unlike many mobile nutrition apps, a website can run in a browser tab without forcing a download.",
          "Alma’s tracker is organized the way most people already think about a day: breakfast, lunch, dinner and snacks. You search a food, choose a meal, enter servings, grams or millilitres, and add it. You can edit the amount later or delete the row. Daily and weekly history stays on the Dashboard so a Tuesday that ran high does not erase a more typical week.",
        ],
      },
      {
        heading: "Track Your Food and Daily Nutrition",
        paragraphs: [
          "Tracking daily food intake works best when the friction is low. Search a sample reference food when you ate something simple and unpackaged, such as a banana or cooked lentils. Search Open Food Facts when you have a packaged product and want community nutrition data rather than a guessed number. Enter a custom food when you are looking at a Nutrition Facts label and can copy calories, protein, carbohydrate and fat yourself.",
          "Alma never invents a precise nutrient figure for a branded bar or restaurant plate. The sample list is labelled as typical USDA-style values, rounded for education. Open Food Facts results are labelled as community data, usually per 100 g. Custom entries are labelled as your numbers. That honesty is part of using a nutrition tracking tool well: the diary is only as good as the sources you choose.",
        ],
      },
      {
        heading: "How to track food online",
        paragraphs: [
          "Start by setting a date—today, or another day you want to reconstruct. Pick the meal, search or type a food, set the portion, and add it. If the serving on your plate was 150 g and the listing is per 100 g, switch the unit to grams and enter 150 so the calories scale correctly. Repeat for drinks that contribute energy, such as milk, and for snacks that are easy to forget.",
          "A practical habit is to log as you cook or as you unpack a lunch box, not at midnight from memory. Memory rounding almost always shrinks portions. If you want help converting household units, the [Unit Converter](/tools/unit-converter) is available on Tools Star Hub. If you need age in whole years for the calorie form, the [Age Calculator](/tools/age-calculator) can confirm it.",
        ],
      },
      {
        heading: "Calculate Your Daily Calorie Requirements",
        paragraphs: [
          "Daily calorie requirements start with basal metabolic rate and then add the cost of living an actual day. Alma’s Daily Calorie, BMR and TDEE modules use the Mifflin–St Jeor equation, which estimates resting energy from weight, height, age and sex, then multiply by one of five activity factors: sedentary, lightly active, moderately active, very active or extra active. Maintenance calories equal TDEE. A common weight-loss plan subtracts about 500 kcal; a modest surplus for gain adds about 300 kcal.",
          "If you want the energy math in a dedicated standalone layout, the [TDEE Calculator](/tools/tdee-calculator) uses the same Mifflin–St Jeor approach. Alma keeps that engine inside a larger nutrition workspace so the resulting target can feed your dashboard, macro plan and food diary without copying numbers by hand.",
          "How many calories you should consume daily is still a personal question. Two people with the same age and weight can differ because of muscle mass, fidgeting, job demands and health status. Use the estimate as a starting line, then watch a weekly average of weight, energy and how clothes fit before you slash intake again.",
        ],
      },
      {
        heading: "Free Macronutrient Calculator",
        paragraphs: [
          "A macronutrient calculator, or macro calculator, divides a calorie target into protein, carbohydrate and fat. Protein and carbohydrate provide about four calories per gram; fat provides about nine. Alma lets you choose a distribution instead of locking you into one fashionable ratio. A balanced 30/40/30 split is a readable default. Higher protein, lower carbohydrate, higher carbohydrate and an even split are available when your training or preferences differ.",
          "These templates are starting maps. Endurance blocks often want more carbohydrate. Some coaching plans set protein in grams per kilogram rather than as a percentage of calories—the Protein Calculator exists for that reason. The [Percentage Calculator](/tools/percentage-calculator) can help if you are checking what share of a recipe or a restaurant meal comes from one macro.",
        ],
      },
      {
        heading: "Understand Your Daily Protein and Carbohydrate Intake",
        paragraphs: [
          "Daily protein intake is one of the most common questions people bring to a nutrition calculator. A widely cited general adult starting range is about 0.8 grams of protein per kilogram of body weight. People who train regularly often sit closer to 1.2–1.6 g/kg. Many strength or fat-loss plans use about 1.6–2.2 g/kg to help preserve lean mass. Alma reports a range and a midpoint so the number feels like a band, not a commandment.",
          "Carbohydrate and fat then fill the remaining calories after protein is set, or they follow the percentage split you selected. There is no universal “best” carbohydrate intake. A walker who lifts twice a week may thrive on a moderate-carb plate; someone running long sessions may feel better with more starch around training. Fat should not be driven to zero: it carries flavour and fat-soluble vitamins, and extremely low-fat patterns are not something a website should prescribe.",
        ],
      },
      {
        heading: "How to calculate protein, carbohydrates and fats",
        paragraphs: [
          "To calculate protein requirements, convert your body weight to kilograms if needed, pick a goal range, and multiply. An 80 kg adult using 1.6–2.2 g/kg lands near 128–176 g of protein. To calculate carbohydrates and fats from a calorie budget, assign percentages, convert those calories into grams, and check that the three parts add back to the target.",
          "Example: 2,000 kcal on a 30/40/30 plan is 600 kcal from protein (150 g), 800 kcal from carbohydrate (200 g) and 600 kcal from fat (about 67 g). If you later raise protein to 40 percent, carbohydrate and fat shrink so the calories still match. That arithmetic is what a free nutrition calculation should make obvious.",
        ],
      },
      {
        heading: "What are micronutrients?",
        paragraphs: [
          "Micronutrients are vitamins and minerals. You need them in much smaller amounts than protein, carbohydrate and fat, and they contribute little or no energy, but they run processes that calories alone cannot describe: oxygen transport, bone maintenance, immune function, energy metabolism and more. A day can hit its calorie target and still be light on iron, folate or vitamin C if the food variety is narrow.",
          "Alma’s micronutrient list covers vitamin A, the B vitamins including B12, vitamin C, vitamin D, vitamin E, vitamin K, calcium, iron, magnesium, zinc, potassium, sodium and folate. Those are the nutrients people most often ask a vitamin intake calculator or mineral intake tracker to show. The figures next to them are general dietary reference values, not a blood panel and not a license to megadose supplements.",
        ],
      },
      {
        heading: "How to Track Micronutrients",
        paragraphs: [
          "How to track micronutrients is more fiddly than tracking calories, because many homemade meals and generic listings do not include a full vitamin panel. Alma approaches the problem in three honest layers. Sample foods include micronutrients only where widely published USDA-style values are available—for example potassium in a banana, vitamin C in an orange, or vitamin K and folate in spinach. Open Food Facts may include extra nutrients when a packaged product listed them. Custom foods are different: the custom form only takes a name, calories, protein, carbohydrate and fat, so vitamins and minerals printed on a label cannot be entered and are not counted.",
          "The Micronutrient Calculator then places today’s labelled totals next to general adult references that vary with sex and age where the public DRI figures do. Coverage percentages are only as complete as the foods that carried data. A blank cell means “this log does not have a labelled amount,” not “you consumed zero.” That distinction is essential for nutrient deficiency awareness without turning a website into a diagnostic tool.",
        ],
      },
      {
        heading: "Why Is Micronutrient Tracking Important?",
        paragraphs: [
          "Why are micronutrients important? Because energy and micronutrients answer different questions. Calories tell you whether intake is in the same neighbourhood as expenditure. Vitamins and minerals tell you whether that energy arrived with the raw materials your cells expect. Iron supports haemoglobin. Calcium and vitamin D relate to bone health. Folate matters for DNA synthesis, and needs change in pregnancy—another reason a general calculator is not a prenatal plan.",
          "Tracking highlights patterns you might otherwise miss: days with almost no plants, almost no dairy or fortified alternatives, or almost no foods that typically carry iron. The useful response is usually food variety—lentils with a vitamin C source, leafy vegetables, fish, eggs, yogurt, beans—not an automatic supplement shopping list from a chatbot.",
        ],
      },
      {
        heading: "Free Meal Planner and Food Diary",
        paragraphs: [
          "A food diary is simply a dated record of what you ate. Alma’s diary is the Food Tracker. A meal planner looks forward instead of backward: it lets you place breakfast, lunch, dinner and snack ideas onto days of the week, see a nutrition summary for each suggestion, and turn those ingredients into a grocery list. You can fill a sample day, add your own combination of suggested meals, or remove anything that does not fit.",
          "Suggested plates such as oats with banana, chicken with rice and broccoli, or tofu with quinoa and avocado are built from the same sample foods used in the tracker, so the calories are internally consistent. Substitution notes—chicken to tofu, white rice to quinoa, salmon to tuna—help you keep a similar meal shape when you want a different protein or grain. This is a healthy meal planner in the educational sense, not a chef at your door and not a grocery delivery service.",
        ],
      },
      {
        heading: "How to create a balanced meal plan",
        paragraphs: [
          "A balanced meal plan usually repeats a simple structure: each eating occasion has a protein, a fiber-rich carbohydrate and a fruit or vegetable, with added fats in modest amounts for cooking or flavour. Scale the portions toward your calorie target rather than copying a social-media plate that was built for someone else’s size and job.",
          "On Alma, pick a target in the calculators, drop suggested meals onto the week, then compare the planner’s totals with the dashboard after you actually eat. Real life will differ—restaurant oil, a larger banana, a forgotten latte—and the diary is there to catch that. Adjust the next grocery list instead of restarting from zero every Monday.",
        ],
      },
      {
        heading: "How food tracking supports healthy eating habits",
        paragraphs: [
          "Food tracking supports healthy eating habits when it is used as feedback rather than as a scoreboard. Seeing that weekday lunches are short on plants, or that snacks explain most of an overage, is more useful than labelling a food “bad.” A weekly view matters more than a single evening. Water logging, even as a simple 250 ml counter, reminds you that beverages are part of the day too.",
          "Tracking can become unhelpful if it fuels anxiety or rigid rules. Alma’s diary is saved locally; its optional coach shares a question and diary summary as described in the privacy policy: you can clear a conversation, skip a day or stop logging without losing access to the calculators. If food recording starts to feel compulsive, that is a signal to step back and, if needed, speak with a qualified professional—not a signal to track harder.",
        ],
      },
      {
        heading: "Understanding nutrition labels",
        paragraphs: [
          "A Nutrition Facts label is still one of the most reliable sources for packaged food, which is why custom entry exists. Look at serving size first. The calories, protein, carbohydrate and fat apply to that serving, not necessarily to the whole package. If you eat two servings, double the numbers. If you eat 80 g of a product whose label is per 100 g, scale by 0.8.",
          "Labels may also list fiber, sugars, sodium and selected vitamins. Those extras can go into a custom food or, when present, arrive through an Open Food Facts match. Ingredient lists help with food substitutions and allergen awareness, but they do not replace the numeric panel when you are doing a nutrition value calculation.",
        ],
      },
      {
        heading: "How to use a nutrition calculator",
        paragraphs: [
          "Using a nutrition calculator well is a short checklist. Enter honest measurements. Choose an activity level that matches a normal week. Calculate BMR and TDEE so you understand both resting and total needs. Pick maintain, lose or gain with a modest offset. Set macros or a protein range. Then actually log food for several days before you change the target again.",
          "Alma’s buttons—Calculate, Reset, Copy Results and Share Results—are real controls, not decoration. Copy or share when you want to paste numbers into a note. Reset when you want to start from the default example adult. Switch units when your scale and stadiometer disagree. Goal switching recalculates the highlighted target so you can see maintenance, loss and gain side by side.",
        ],
      },
      {
        heading: "Benefits of free nutrition calculations",
        paragraphs: [
          "Free nutrition calculations lower the cost of curiosity. You can compare a sedentary and a moderately active TDEE, try a higher-protein split, or check a calorie deficit without creating an account. You can track food without downloading an app, which answers a common question from people who prefer a meal tracking website on a laptop at the kitchen table.",
          "Free also means transparent. Alma shows the Mifflin–St Jeor line, the activity multiplier, the 1,200 kcal safety floor on aggressive deficits, and the source of every food number. That is the benefit that matters more than a locked “premium insight”: you can see how the result was built and decide what to trust.",
        ],
      },
      {
        heading: "How AI can assist with nutrition education",
        paragraphs: [
          "AI can assist with nutrition education by translating numbers into explanations and by noticing gaps in a log you already created. It can remind you that BMR is not TDEE, that iron from plants pairs well with vitamin C, or that a breakfast of only toast is light on protein. It cannot see your bloodwork, medications or culture, and it should not pretend to.",
          "Used together with a food diary and a calculator, AI is a tutor. Used instead of data, it becomes guesswork. Alma therefore always prefers your logged totals and saved targets when you ask a question, and it tells you whether the reply came from a configured model or from the built-in educational coach.",
        ],
      },
      {
        heading: "How Alma Helps You Understand Your Nutrition",
        paragraphs: [
          "Alma’s job on Tools Star Hub is to put the moving parts of everyday nutrition literacy in one place: a daily calorie calculator, a BMR calculator, a TDEE calculator, a macronutrient calculator, a protein calculator, a calorie deficit calculator, a micronutrient reference table, a food tracker, a meal planner and an educational coach. It stores your diary locally, links to the standalone [TDEE Calculator](/tools/tdee-calculator) when you want that page on its own, and stays free for the basic work of understanding what you eat.",
          "Use it as a calm instrument. Calculate a plausible target, track food with labelled sources, plan a grocery list you will actually cook, and ask questions when a number is confusing. That is enough for a nutrition healthy hub in the educational sense—and it is honest about not being a hospital, a startup grocery locker, or a paid nutrition app in disguise.",
        ],
      },
    ],
  },
  faqs: [
    {
      question: "What is Alma AI Nutrition Coach?",
      answer:
        "Alma is Tools Star Hub’s free AI nutrition coach and food tracker. It estimates daily calories, BMR and TDEE, calculates macros and protein ranges, lists general micronutrient references, logs meals in your browser and offers educational coaching. It is not medical advice and not an official mobile app store product.",
    },
    {
      question: "How does a food tracking website work?",
      answer:
        "A food tracking website records what you eat and converts those entries into calories and nutrients. In Alma you search or enter a food, assign it to breakfast, lunch, dinner or snacks, set the serving, and see running totals on the dashboard and in your food diary.",
    },
    {
      question: "Is Alma a free nutrition calculator?",
      answer:
        "Yes. Daily calorie, BMR, TDEE, macro, protein, calorie-deficit and micronutrient calculations are free, along with food tracking, meal planning and the educational coach. There is no subscription wall on those basic features and no account to create.",
    },
    {
      question: "How can I calculate my daily calorie needs?",
      answer:
        "Enter age, sex, height, weight and activity, then calculate. Alma uses Mifflin–St Jeor for BMR and multiplies by an activity factor to estimate TDEE. Maintenance calories equal TDEE. You can also use the standalone TDEE Calculator on Tools Star Hub if you only want the energy math.",
    },
    {
      question: "How do I track my daily food intake?",
      answer:
        "Open the Food Tracker, choose a date and meal, search sample foods or packaged products, or add a custom food with calories, protein, carbohydrate and fat from a label. Set servings, grams or millilitres, then add the item. Millilitres are currently counted as if 1 ml weighed 1 g, which is close for water-like drinks but not for oils, syrups or thick liquids—enter grams for those. You can edit or delete entries later. Totals appear on the dashboard.",
    },
    {
      question: "How do I calculate protein requirements?",
      answer:
        "Use the Protein Calculator with your body weight and a goal: general health, regular activity, strength or fat loss with muscle in mind. Alma shows a grams-per-kilogram range—about 0.8–1.0 g/kg generally, and higher ranges for training or dieting—not a single universal number.",
    },
    {
      question: "How can I track micronutrients?",
      answer:
        "Log foods that already carry vitamin and mineral data: some sample foods and some Open Food Facts listings. Custom foods only take calories, protein, carbohydrate and fat, so vitamins and minerals from a label you type in are not tracked. The Micronutrient Calculator compares those running totals with general adult reference values. A blank cell means the log has no labelled amount, not that intake was zero.",
    },
    {
      question: "Why are micronutrients important?",
      answer:
        "Vitamins and minerals support immunity, bone health, oxygen transport and many other processes. Calories describe energy; micronutrients describe some of the raw materials that came with that energy. Tracking them is for pattern-finding and education, not for diagnosing a deficiency.",
    },
    {
      question: "What is the difference between macronutrients and micronutrients?",
      answer:
        "Macronutrients are protein, carbohydrate and fat—the nutrients that supply nearly all dietary calories. Micronutrients are vitamins and minerals, needed in much smaller amounts and contributing little or no energy. You can meet a calorie target and still fall short on iron or folate if food variety is narrow.",
    },
    {
      question: "How can I calculate carbohydrates and fats?",
      answer:
        "After you have a calorie target, choose a macro split. Protein and carbohydrate provide about 4 kcal per gram; fat provides about 9. A 2,000 kcal 30/40/30 plan is about 150 g protein, 200 g carbohydrate and 67 g fat. The Macronutrient Calculator performs that conversion.",
    },
    {
      question: "What is the best way to track daily nutrition?",
      answer:
        "Set a realistic calorie and protein target, log meals as you go rather than from late-night memory, use a scale or label when you can, and review weekly totals instead of one day. Combine the dashboard, food diary and meal planner so planning and recording stay connected.",
    },
    {
      question: "Can I track food without downloading an app?",
      answer:
        "Yes. Alma runs in the browser as a meal tracker website and online food tracker. You do not need to download an Alma app to calculate nutrition or keep a food diary. Data stays in this browser unless you ask the coach or search Open Food Facts.",
    },
    {
      question: "What is a food diary?",
      answer:
        "A food diary, or food journal, is a dated record of foods and drinks. Alma’s diary stores breakfast, lunch, dinner and snacks with calories, macros and any available micronutrients, plus a simple water log, so you can look back across the week.",
    },
    {
      question: "How can I create a healthy meal plan?",
      answer:
        "Choose a calorie target, then build days around a protein, a fiber-rich carbohydrate and plants. Alma’s Meal Planner offers breakfast, lunch, dinner and snack suggestions, lets you fill a sample day, supports substitutions and can build a grocery list from planned ingredients.",
    },
    {
      question: "How accurate are online nutrition calculators?",
      answer:
        "They are estimates. Mifflin–St Jeor and activity multipliers are useful starting points but cannot see hormones, medications or fidgeting. Food numbers depend on sample reference values, Open Food Facts listings or the label you typed. Treat results as planning tools and adjust from weekly trends.",
    },
    {
      question: "How many calories should I consume daily?",
      answer:
        "There is no single number for everyone. Calculate TDEE from your details, then eat near that amount to maintain, somewhat below it to lose or somewhat above it to gain. Alma also floors suggested loss calories at 1,200 kcal as a soft estimate bound—not a personal prescription.",
    },
    {
      question: "Can AI help with meal planning?",
      answer:
        "Yes, as an educational assistant. Alma can suggest meal ideas, comment on a logged breakfast and explain how to balance a plate. If live AI is configured, replies are labelled AI-assisted; otherwise you get a labelled rule-based coach. Neither writes a medical diet.",
    },
    {
      question: "What is the difference between BMR and TDEE?",
      answer:
        "BMR is estimated resting energy—the calories used at complete rest. TDEE multiplies BMR by an activity factor so daily movement and training are included. Meal planning usually uses TDEE. Eating only at BMR while living an active life is a steep cut for many people.",
    },
    {
      question: "Which vitamins and minerals does Alma show reference values for?",
      answer:
        "The Micronutrient Calculator lists general adult reference values for vitamin A, the B vitamins including B12, vitamin C, vitamin D, vitamin E, vitamin K, calcium, iron, magnesium, zinc, potassium, sodium and folate, adjusted for sex and age where public reference figures differ. These are population references, not personal targets; for medical monitoring, rely on a clinician, not a website.",
    },
    {
      question: "Is online food tracking free?",
      answer:
        "On Alma, yes. Searching foods, logging meals, viewing history, planning meals and running the nutrition calculators are free. Your diary is stored locally in the browser rather than behind a paid cloud account.",
    },
  ],
};
