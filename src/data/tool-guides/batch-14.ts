import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-11T00:00:00Z";

const trackFood: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-track-food-intake",
    title: "How to Track Food Intake Accurately: A Practical Food Log Method",
    primaryKeyword: "how to track food intake",
    secondaryKeywords: [
      "food tracking tips",
      "how to keep a food diary",
      "weighing food vs measuring cups",
      "logging restaurant meals",
      "calorie tracking mistakes",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "unit-converter", "percentage-calculator"],
    metaTitle: "How to Track Food Intake Accurately",
    metaDescription:
      "A step-by-step food logging method: weigh or estimate portions, log recipes and meals out, avoid common tracking mistakes and read weekly trends calmly.",
    excerpt:
      "Food tracking works when the log is honest and consistent, not perfect. Learn how to record portions, recipes, drinks and meals out, and how to review the numbers.",
    relatedArticles: [
      "how-to-read-a-nutrition-facts-label",
      "how-to-calculate-macros",
      "calorie-surplus-for-weight-gain",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to track food intake accurately, record everything you eat and drink as soon as you have it, measure portions by weight when you can, log recipes by their ingredients, and include cooking oils, sauces and drinks. Then judge progress on weekly averages rather than single days. Alma: AI Nutrition Coach & Food Tracker lets you log breakfast, lunch, dinner and snacks in your browser, using sample reference foods, packaged foods from Open Food Facts or custom entries copied from a label.",
    why:
      "A calorie or macro target is only a plan. A food log shows what actually happened, which is the information you need before changing anything. A systematic review of self-monitoring studies found that consistent recording was linked with better weight-management outcomes, although the studies varied in design and quality.",
    sections: [
      {
        id: "what-counts",
        heading: "What should a food log include?",
        paragraphs: [
          "A useful entry has four parts: the food, the amount, the time or meal, and where the nutrition data came from. The source matters because a generic entry for banana and a label for a specific brand of granola carry different levels of certainty. Writing down the source makes it easy to spot a suspicious entry later.",
          "Small items add up. Cooking oil, butter on toast, milk in coffee, salad dressing, a handful of nuts and sugary drinks are the entries people skip most often. One tablespoon of oil is roughly 120 kcal, so leaving it out every day can hide a meaningful share of intake.",
        ],
      },
      {
        id: "measure",
        heading: "Should I weigh food or use cups and spoons?",
        paragraphs: [
          "A digital kitchen scale is the most repeatable option. Volume measures work well for liquids but less well for foods that pack differently, such as cereal, rice, shredded cheese or nut butter. A heaped cup of flakes and a level cup can differ a lot, while 40 grams is 40 grams every time.",
          "You do not need to weigh food forever. Many people weigh their regular foods for one or two weeks to calibrate their eye, then switch to estimates and recheck occasionally. If your unit is not in the database, the Unit Converter turns ounces into grams or fluid ounces into millilitres before you log.",
        ],
        table: {
          caption: "Measurement options compared",
          headers: ["Method", "Best for", "Watch out for"],
          rows: [
            ["Kitchen scale (grams)", "Solids, recipes, packaged foods", "Weigh raw or cooked consistently"],
            ["Measuring cups and spoons", "Liquids, oils, sauces", "Heaped vs level scoops"],
            ["Package fractions", "Single-serve or divided packs", "Uneven portions"],
            ["Visual estimates", "Meals out, maintenance phases", "Underestimating calorie-dense foods"],
          ],
        },
      },
      {
        id: "raw-cooked",
        heading: "Do I log food raw or cooked?",
        paragraphs: [
          "Either works if the database entry matches the state you weighed. Rice and pasta absorb water when cooked, so the same dry portion weighs much more afterwards. Meat loses water and becomes lighter. Logging cooked rice with a dry-rice entry is one of the most common sources of large errors.",
          "USDA FoodData Central lists many foods in both raw and cooked forms, which helps when you build custom entries. Pick one habit, such as weighing grains dry and meat raw, and keep it.",
        ],
      },
      {
        id: "recipes",
        heading: "How do I log home recipes and meals out?",
        paragraphs: [
          "For a home recipe, add up the ingredients, weigh the whole cooked dish, then divide by the weight of your portion. If the pot of chilli weighs 2,000 g and contains 2,400 kcal, every 100 g carries about 120 kcal. Save that as a custom food and reuse it for leftovers.",
          "Restaurant meals are harder. Use published nutrition information when the restaurant provides it. If not, log the closest generic dish and add a separate entry for visible oil, sauce or dressing. An honest estimate is more useful than a blank day, because blank days make weekly averages look better than reality.",
        ],
      },
      {
        id: "mistakes",
        heading: "What are the most common food tracking mistakes?",
        paragraphs: [
          "The biggest errors are usually omissions rather than wrong numbers: drinks, condiments, cooking fats, tastes while cooking and food eaten straight from the packet. Next come portion errors, especially with calorie-dense foods such as nuts, cheese, granola and nut butter, where a small misjudgement carries a lot of energy.",
          "Other frequent problems include choosing a database entry for the wrong cooking state, logging a serving when you ate two, and copying a meal from yesterday without checking that it was the same. A quick end-of-day review of the diary catches most of these before they distort the weekly average.",
        ],
      },
      {
        id: "review",
        heading: "How should I review a food log?",
        paragraphs: [
          "Look at seven-day averages, not individual days. Daily calories naturally swing with social plans, training and appetite. Compare the weekly average with your target from the TDEE Calculator and with the trend in body weight over two to four weeks.",
          "Then look for patterns: meals that leave you hungry, days where protein is low or snacks that appear at the same time each evening. The goal is to find one or two changes worth testing, not to judge yourself.",
        ],
      },
    ],
    stepsHeading: "How do I track food intake with Alma?",
    steps: [
      {
        title: "Set a daily target",
        body: "Enter your details in Alma’s Calculators tab or the TDEE Calculator and choose maintain, lose or gain so the Dashboard has a calorie budget.",
      },
      {
        title: "Choose the meal",
        body: "Open the Food Tracker and pick breakfast, lunch, dinner or snack before adding the item, so the day reads in order.",
      },
      {
        title: "Find the food",
        body: "Search the sample reference foods for whole foods, search packaged foods through Open Food Facts, or save a custom food from a label.",
      },
      {
        title: "Enter the amount",
        body: "Type grams or servings. Alma scales calories and macros from the stored values for that entry.",
      },
      {
        title: "Check the Dashboard",
        body: "Review calories remaining and macro progress, then repeat for the rest of the day. Your diary stays in this browser.",
      },
    ],
    examples: [
      {
        title: "Forgotten cooking oil",
        body: "A day logged at 1,850 kcal includes two meals cooked with about a tablespoon of oil each that was never recorded. Adding them brings the real total close to 2,090 kcal, which can explain a plateau.",
      },
      {
        title: "Batch-cooked curry",
        body: "Ingredients total 2,600 kcal and the finished pot weighs 2,600 g, so each gram is about 1 kcal. A 350 g bowl is logged as 350 kcal without guessing.",
      },
      {
        title: "Weekend average",
        body: "Weekdays average 1,900 kcal and Saturday and Sunday each reach 2,800 kcal. The weekly average is about 2,160 kcal, which matters more than the five on-target days.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Labels are estimates",
        body: "Packaged-food values are rounded and allowed some variation, so even a careful log is an approximation.",
      },
      {
        heading: "Consistency beats precision",
        body: "Using the same method every day gives a trend you can trust, even if each entry carries some error.",
      },
      {
        heading: "When to pause tracking",
        body: "If logging causes anxiety, guilt or obsessive thoughts about food, stop and speak with a doctor or registered dietitian. Tracking is optional, and this guide is general information rather than medical advice.",
      },
    ],
    faqs: [
      {
        question: "Should I log food before or after I eat it?",
        answer:
          "Logging right before or right after eating is most accurate. Waiting until evening tends to lose snacks, drinks and second helpings.",
      },
      {
        question: "Do I need to track water?",
        answer:
          "Plain water has no calories, so it does not affect calorie or macro totals. Track it separately only if you have a hydration goal.",
      },
      {
        question: "How do I log a bite of someone else’s food?",
        answer:
          "Estimate it and add a small entry. One bite rarely matters, but several unrecorded tastes a day can add a few hundred calories.",
      },
      {
        question: "What if the database has several entries for the same food?",
        answer:
          "Choose the one that matches the brand and cooking state, and check its calories against the label or a USDA FoodData Central entry when values look unusual.",
      },
      {
        question: "Is it worth weighing food at restaurants?",
        answer:
          "Usually not. Use the restaurant’s published nutrition data if available, otherwise log a generic match plus extra oil or sauce.",
      },
      {
        question: "How long should I track before changing my calories?",
        answer:
          "Two to four weeks of consistent logging alongside a weight trend usually shows whether intake matches your goal well enough to adjust.",
      },
      {
        question: "Can I skip logging on weekends?",
        answer:
          "You can, but weekend intake often differs from weekdays, so skipping it can make your average look lower than it really is.",
      },
      {
        question: "Should I log vegetables like lettuce and cucumber?",
        answer:
          "Their calories are very low, so some people skip them. Log them if you want fibre or micronutrient totals to be complete.",
      },
      {
        question: "Does Alma store my food diary on a server?",
        answer:
          "No. Alma saves the diary, meal plans and targets in your browser with localStorage. Clearing site data removes them.",
      },
      {
        question: "What is a good next step after a week of tracking?",
        answer:
          "Compare your average with your calorie target, check protein, and pick one small change to test the following week.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Start a browser-based food diary with ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Read packaged-food values correctly with ",
        linkLabel: "How to read a nutrition facts label",
        href: "/guides/how-to-read-a-nutrition-facts-label",
        after: ".",
      },
      {
        before: "Set a calorie budget to log against using the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Convert ounces, cups or pounds before logging with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
    ],
    sources: [
      {
        label: "PubMed – Self-monitoring in weight loss: a systematic review (Burke et al., 2011)",
        href: "https://pubmed.ncbi.nlm.nih.gov/21185970/",
      },
      {
        label: "USDA FoodData Central",
        href: "https://fdc.nal.usda.gov/",
      },
      {
        label: "FDA – Serving Size on the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label",
      },
    ],
  },
};

const calorieSurplus: ToolGuide = {
  article: toolGuideArticle({
    slug: "calorie-surplus-for-weight-gain",
    title: "Calorie Surplus for Weight Gain: How Much to Eat and How to Adjust",
    primaryKeyword: "calorie surplus for weight gain",
    secondaryKeywords: [
      "how many calories to gain weight",
      "lean bulk surplus",
      "calorie surplus for muscle gain",
      "how to eat more calories",
      "maintenance calories plus 300",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "unit-converter", "percentage-calculator"],
    metaTitle: "Calorie Surplus for Weight Gain Explained",
    metaDescription:
      "How a calorie surplus works, why a modest 300 kcal starting point is common, how to set protein for muscle gain and when to adjust based on your weight trend.",
    excerpt:
      "A calorie surplus means eating more energy than you use. This guide explains how to size a surplus, pair it with protein and training, and track the trend.",
    relatedArticles: [
      "calorie-deficit-explained",
      "how-to-calculate-tdee",
      "how-to-track-food-intake",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a calorie surplus is the amount you eat above your total daily energy expenditure (TDEE). To gain weight gradually, estimate your TDEE, add a modest surplus, and adjust after two to four weeks based on your weight trend. The TDEE Calculator on Tools Star Hub adds 300 kcal to your estimated maintenance when you choose the gain goal. For example, a TDEE of 2,400 kcal gives a starting target of 2,700 kcal per day.",
    why:
      "Some people need to gain weight after illness, during growth in training or because their body weight is low. Eating more without a plan often means either too little progress or more fat gain than intended. A measured surplus gives you a number to test and a clear way to adjust it.",
    sections: [
      {
        id: "what",
        heading: "What is a calorie surplus?",
        paragraphs: [
          "Energy balance compares the energy you take in from food and drink with the energy you use for resting metabolism, digestion, daily movement and exercise. When intake is higher than expenditure over weeks, the body stores the extra energy and body weight tends to rise. A surplus is simply the size of that gap.",
          "The surplus is the mirror image of a calorie deficit. The same TDEE estimate is the starting point for both, which is why the TDEE Calculator shows maintain, lose and gain targets side by side.",
        ],
      },
      {
        id: "size",
        heading: "How big should a calorie surplus be?",
        paragraphs: [
          "There is no single official number for everyone. A modest surplus, such as the 300 kcal used by the TDEE Calculator, is a common starting point because it supports gradual gain while keeping meals manageable. People who struggle to eat enough, or who are gaining very slowly, may increase in small steps of about 100–200 kcal.",
          "Larger surpluses usually make the scale move faster, but more of that gain is likely to be fat rather than muscle, especially in people with several years of training. If the aim is health-related weight restoration, the right pace should come from a doctor or registered dietitian.",
        ],
        table: {
          caption: "Starting targets with a 300 kcal surplus",
          headers: ["Estimated TDEE", "Gain target", "Weekly extra energy"],
          rows: [
            ["1,900 kcal", "2,200 kcal", "2,100 kcal"],
            ["2,200 kcal", "2,500 kcal", "2,100 kcal"],
            ["2,600 kcal", "2,900 kcal", "2,100 kcal"],
            ["3,000 kcal", "3,300 kcal", "2,100 kcal"],
          ],
        },
      },
      {
        id: "rate",
        heading: "Why is the 3,500-calorie rule only a rough guide?",
        paragraphs: [
          "The older rule says that about 3,500 kcal equals one pound of body weight. It is a convenient shortcut, but research led by NIH scientists showed that the body’s energy needs change as weight changes, so simple per-pound arithmetic becomes less accurate over time.",
          "Early weight gain also includes extra food in the gut, stored carbohydrate and the water that comes with it. That is why the first week of a surplus can show a quicker jump that then slows. The NIDDK Body Weight Planner models these changes if you want a research-based projection.",
        ],
      },
      {
        id: "muscle",
        heading: "How do protein and training affect surplus gains?",
        paragraphs: [
          "A surplus provides energy, but resistance training gives the body a reason to build muscle with it. Without training, more of the added weight is likely to be fat. Full-body strength work on two or more days per week matches the muscle-strengthening advice in the US Physical Activity Guidelines.",
          "Protein supplies the building blocks. Alma’s Protein Calculator uses about 1.6–2.2 g per kilogram of body weight for its strength or muscle gain setting. A 65 kg person would aim for roughly 104–143 g per day, then fill the rest of the surplus with carbohydrate and fat they enjoy.",
        ],
      },
      {
        id: "progress",
        heading: "How do I know if my surplus is working?",
        paragraphs: [
          "Daily weigh-ins move up and down with salt, fluid, digestion and training, so a single reading says little. Weigh yourself under similar conditions, such as in the morning after using the bathroom, on several days each week and compare weekly averages. A slow, steady rise over a month is the signal you are looking for.",
          "Add a second measure so the scale is not the only judge. Gym logs that show strength creeping up, a tape measure at the waist and how clothes fit all add context. If weight rises but the waist grows much faster than strength improves, the surplus may be larger than you need.",
        ],
      },
      {
        id: "eat-more",
        heading: "How can I eat more without feeling stuffed?",
        paragraphs: [
          "Energy-dense foods help when appetite is the limit. Nuts, nut butters, olive oil, cheese, whole milk, yoghurt, dried fruit, oats and rice deliver more calories in a smaller volume than salads or broth-based soups. Drinks such as milk or smoothies are often easier than an extra plate of food.",
          "Adding a snack between meals or a small extra portion to foods you already eat is usually easier than a dramatic change. Keep vegetables, fruit and fibre in the diet so overall food quality stays in line with the Dietary Guidelines.",
        ],
      },
    ],
    stepsHeading: "How do I set a calorie surplus on Tools Star Hub?",
    steps: [
      {
        title: "Estimate maintenance",
        body: "Open the TDEE Calculator, enter age, sex, height, weight and an honest activity level, and note your maintenance calories.",
      },
      {
        title: "Choose the gain goal",
        body: "Select gain. The calculator adds 300 kcal to your TDEE and shows the daily target with a 30/40/30 macro suggestion.",
      },
      {
        title: "Set protein",
        body: "In Alma’s Protein Calculator, pick the strength or muscle gain setting to get a gram range for your body weight.",
      },
      {
        title: "Log and weigh",
        body: "Track meals in Alma’s Food Tracker and weigh yourself under similar conditions a few mornings each week.",
      },
      {
        title: "Adjust after a few weeks",
        body: "If the weekly average weight has not moved after two to four weeks, add about 100–200 kcal. If it is rising faster than you planned, trim a little.",
      },
    ],
    examples: [
      {
        title: "Lean gain from maintenance",
        body: "A 70 kg lifter has an estimated TDEE of 2,500 kcal. The gain target is 2,800 kcal, with protein set at 126 g (1.8 g/kg), which supplies 504 kcal.",
      },
      {
        title: "No change after three weeks",
        body: "Logged intake averages 2,800 kcal but the weekly weight average is flat. The likely explanation is an underestimated TDEE, so the target rises to 2,950 kcal.",
      },
      {
        title: "Small appetite",
        body: "Someone finds 2,500 kcal hard to eat. Adding a glass of milk and 30 g of peanuts as a mid-afternoon snack covers about 300 kcal without a larger dinner.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "TDEE is an estimate",
        body: "Equations can be off for individuals, so the weight trend is the final check on any surplus.",
      },
      {
        heading: "Unexplained weight loss",
        body: "Losing weight without trying, or being unable to gain despite eating more, can have medical causes and is worth discussing with a doctor.",
      },
      {
        heading: "Educational use",
        body: "This guide is general information. Teenagers, pregnant people and anyone with a medical condition or history of disordered eating should plan weight gain with a clinician.",
      },
    ],
    faqs: [
      {
        question: "How many calories above maintenance should I eat to gain weight?",
        answer:
          "A modest surplus, such as the 300 kcal the TDEE Calculator adds, is a common start. Adjust in steps of about 100–200 kcal based on your weekly trend.",
      },
      {
        question: "Can I gain muscle without a calorie surplus?",
        answer:
          "Some people, especially beginners returning to training, can build muscle near maintenance. A surplus usually makes steady muscle gain easier.",
      },
      {
        question: "Is a bigger surplus better for building muscle faster?",
        answer:
          "Not necessarily. Muscle growth has a practical limit, so a much larger surplus mainly adds more fat alongside it.",
      },
      {
        question: "Why did I gain a lot in the first week?",
        answer:
          "Extra food in the digestive tract, stored carbohydrate and the water bound to it can add weight quickly at the start. The trend usually slows after that.",
      },
      {
        question: "Should I eat the same surplus on rest days?",
        answer:
          "Many people keep the same target every day for simplicity. Others eat slightly more on training days; the weekly average is what matters.",
      },
      {
        question: "Do I need to track macros during a bulk?",
        answer:
          "Tracking protein and total calories covers most of what matters. Carbohydrate and fat can follow your preferences.",
      },
      {
        question: "Are high-calorie junk foods a good way to reach a surplus?",
        answer:
          "They add calories easily but little fibre or micronutrients. Energy-dense whole foods such as nuts, milk, oats and olive oil support the surplus and food quality.",
      },
      {
        question: "How often should I recalculate my gain target?",
        answer:
          "Recheck every few weeks or after every few kilograms gained, because a heavier body usually needs more energy.",
      },
      {
        question: "Does the TDEE Calculator let me choose a different surplus size?",
        answer:
          "The gain goal uses a fixed 300 kcal. To test another size, add your chosen number to the maintenance figure yourself.",
      },
      {
        question: "What should I read before switching from gaining to losing?",
        answer:
          "Read the guide on calorie deficits, which uses the same TDEE starting point and explains how to size a gap in the other direction.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Find your maintenance and gain calories with the ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Compare the opposite direction in ",
        linkLabel: "Calorie deficit explained",
        href: "/guides/calorie-deficit-explained",
        after: ".",
      },
      {
        before: "Set a muscle-gain protein range in ",
        linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
        href: "/tools/alma-ai-nutrition-coach",
        after: ".",
      },
      {
        before: "Turn your gain target into gram goals with ",
        linkLabel: "How to calculate macros",
        href: "/guides/how-to-calculate-macros",
        after: ".",
      },
    ],
    sources: [
      {
        label: "PubMed – Quantification of the effect of energy imbalance on bodyweight (Hall et al., 2011)",
        href: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
      },
      {
        label: "NIDDK – Body Weight Planner",
        href: "https://www.niddk.nih.gov/bwp",
      },
      {
        label: "Physical Activity Guidelines for Americans",
        href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
    ],
  },
};

const micronutrients: ToolGuide = {
  article: toolGuideArticle({
    slug: "micronutrients-explained",
    title: "Micronutrients Explained: Vitamins, Minerals and Daily Reference Values",
    primaryKeyword: "micronutrients explained",
    secondaryKeywords: [
      "what are micronutrients",
      "fat soluble vs water soluble vitamins",
      "rda vs daily value",
      "tolerable upper intake level",
      "micronutrients list",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "unit-converter", "percentage-calculator"],
    metaTitle: "Micronutrients Explained: Vitamins & Minerals",
    metaDescription:
      "What micronutrients are, how vitamins and minerals differ, what RDA, AI, UL and Daily Value mean, and how to read micronutrient totals in a food tracker.",
    excerpt:
      "Micronutrients are vitamins and minerals needed in small amounts. Learn the main groups, the reference terms behind the numbers and how to use them sensibly.",
    relatedArticles: [
      "how-to-read-a-nutrition-facts-label",
      "how-to-track-food-intake",
      "how-much-protein-per-day",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: micronutrients are the vitamins and minerals your body needs in small amounts, measured in milligrams (mg) or micrograms (mcg) rather than grams. They supply no calories, but they help with processes such as making red blood cells, maintaining bones and turning food into energy. Reference values such as the Recommended Dietary Allowance (RDA) describe intakes that meet the needs of most healthy people. Alma: AI Nutrition Coach & Food Tracker shows general adult reference values for 17 vitamins and minerals based on your age and sex.",
    why:
      "Calories and macros get most of the attention, yet a diet can hit every calorie target and still fall short on calcium, fibre-rich foods or iron. Understanding the reference terms helps you read labels, interpret tracker totals and avoid both shortfalls and unnecessary high-dose supplements.",
    sections: [
      {
        id: "what",
        heading: "What are micronutrients?",
        paragraphs: [
          "Nutrition science splits nutrients by the amount needed. Macronutrients, protein, carbohydrate and fat, are eaten in grams and provide energy. Micronutrients are needed in far smaller quantities. Thirty milligrams is three hundredths of a gram, and a microgram is a thousand times smaller than a milligram.",
          "Micronutrients fall into two groups. Vitamins are organic compounds, such as vitamin C and the B vitamins. Minerals are elements, such as calcium, iron, zinc and potassium. Most people can meet their needs through a varied diet, while certain groups, such as pregnant people or older adults, may need extra attention.",
        ],
      },
      {
        id: "vitamins",
        heading: "What is the difference between fat-soluble and water-soluble vitamins?",
        paragraphs: [
          "Vitamins A, D, E and K are fat-soluble. They are absorbed with dietary fat and can be stored in the liver and fatty tissue, which is why very high supplement doses can build up over time. Vitamin C and the eight B vitamins are water-soluble. The body stores less of most of them, so regular intake from food matters.",
          "Food sources differ by group. Leafy greens supply vitamin K and folate, citrus fruit and peppers supply vitamin C, and animal foods are the main natural source of vitamin B12, which is why people on fully plant-based diets often use fortified foods or supplements.",
        ],
        table: {
          caption: "Vitamin groups at a glance",
          headers: ["Group", "Vitamins", "Common food sources"],
          rows: [
            ["Fat-soluble", "A, D, E, K", "Oily fish, eggs, leafy greens, nuts, seeds, fortified milk"],
            ["Water-soluble", "C", "Citrus, peppers, berries, tomatoes"],
            ["Water-soluble", "B1, B2, B3, B6, B12, folate and others", "Whole grains, legumes, meat, dairy, eggs, fortified cereals"],
          ],
        },
      },
      {
        id: "minerals",
        heading: "Which minerals matter most in everyday eating?",
        paragraphs: [
          "Calcium and magnesium support bones and muscles, iron carries oxygen in the blood, zinc supports immune function and potassium helps regulate fluid balance and blood pressure. Sodium is also a mineral, but most people consume more than they need, so it is usually tracked as a limit rather than a goal.",
          "The 2020–2025 edition of the Dietary Guidelines for Americans named calcium, vitamin D, potassium and dietary fibre as nutrients of public health concern because many people in the United States do not get enough of them.",
        ],
      },
      {
        id: "terms",
        heading: "What do RDA, AI, UL and Daily Value mean?",
        paragraphs: [
          "The RDA is the average daily intake that meets the needs of nearly all healthy people in an age and sex group. When there is not enough evidence to set an RDA, experts set an Adequate Intake (AI) instead. The Tolerable Upper Intake Level (UL) is the highest daily intake unlikely to cause harm for most people. All three come from the Dietary Reference Intakes summarised by the NIH Office of Dietary Supplements.",
          "The Daily Value (DV) is different. It is a single reference number the FDA uses on Nutrition Facts and Supplement Facts labels, so the percent DV lets you compare foods quickly. Your personal RDA may be higher or lower than the DV.",
        ],
        table: {
          caption: "Selected adult reference values (19–50 years)",
          headers: ["Nutrient", "Men", "Women"],
          rows: [
            ["Vitamin C (RDA)", "90 mg", "75 mg"],
            ["Vitamin D (RDA)", "15 mcg (600 IU)", "15 mcg (600 IU)"],
            ["Calcium (RDA)", "1,000 mg", "1,000 mg"],
            ["Iron (RDA)", "8 mg", "18 mg"],
            ["Potassium (AI)", "3,400 mg", "2,600 mg"],
          ],
        },
      },
      {
        id: "food-first",
        heading: "Can supplements replace a varied diet?",
        paragraphs: [
          "Supplements can fill specific gaps, such as vitamin B12 on a plant-based diet or folic acid before and during pregnancy, often on professional advice. They do not provide the fibre, protein and many other compounds that come with whole foods, which is why the Dietary Guidelines emphasise meeting needs mainly through food.",
          "Supplement doses also tend to be much higher than food amounts, so they are the usual route to exceeding an upper limit. The NIH Office of Dietary Supplements publishes fact sheets for individual nutrients that explain food sources, typical intakes and safety ranges.",
        ],
      },
      {
        id: "tracker",
        heading: "How should I read micronutrient totals in a tracker?",
        paragraphs: [
          "Micronutrient totals are only as complete as the food data behind them. Many packaged-food listings report only a handful of nutrients, so a low iron total may simply mean the data was missing. Alma counts only the values that a sample food, Open Food Facts listing or custom entry actually provided.",
          "Use the totals to spot patterns over a week, such as consistently low calcium sources, rather than to diagnose a deficiency. Blood tests and a clinician’s assessment are the right way to confirm a real shortfall.",
        ],
      },
    ],
    stepsHeading: "How do I check micronutrients in Alma?",
    steps: [
      {
        title: "Open the Micronutrients calculator",
        body: "In Alma’s Calculators tab choose Micronutrients and enter your age and sex to see general adult reference values.",
      },
      {
        title: "Log a typical day",
        body: "Add meals in the Food Tracker. Sample reference foods often include more micronutrient fields than packaged listings.",
      },
      {
        title: "Add label values for custom foods",
        body: "When saving a custom food, copy any vitamin and mineral amounts printed on the label so they count toward totals.",
      },
      {
        title: "Compare across several days",
        body: "Look at which nutrients appear low repeatedly, and remember that missing data can look like a low intake.",
      },
      {
        title: "Talk to a professional before supplementing",
        body: "If a pattern concerns you, discuss it with a doctor or registered dietitian before buying high-dose supplements.",
      },
    ],
    examples: [
      {
        title: "Converting vitamin D units",
        body: "A supplement label shows 1,000 IU of vitamin D. Since 1 mcg equals 40 IU, that is 25 mcg, above the 15 mcg adult RDA and below the 100 mcg adult UL.",
      },
      {
        title: "Reading a percent DV",
        body: "A cereal lists 45% DV for iron. With an 18 mg Daily Value, one serving supplies about 8 mg, roughly a man’s full RDA or less than half of the RDA for a woman aged 19–50.",
      },
      {
        title: "Missing data, not a deficiency",
        body: "A day of mostly packaged foods shows only 200 mg of potassium. Several listings had no potassium field, so the true intake is unknown rather than low.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "More is not always better",
        body: "Intakes above the UL, usually from supplements rather than food, can cause harm for some nutrients.",
      },
      {
        heading: "Values vary by life stage",
        body: "Pregnancy, breastfeeding, childhood and older age change many reference values. Alma shows general adult figures only.",
      },
      {
        heading: "Educational use",
        body: "This guide explains reference terms and is not medical advice. Medications and health conditions can change what is right for you.",
      },
    ],
    faqs: [
      {
        question: "Do micronutrients contain calories?",
        answer:
          "No. Vitamins and minerals supply no energy, although the foods that contain them do.",
      },
      {
        question: "What is the difference between mg and mcg?",
        answer:
          "A milligram is one thousandth of a gram. A microgram is one thousandth of a milligram, so 1 mg equals 1,000 mcg.",
      },
      {
        question: "Is the Daily Value the same as my personal requirement?",
        answer:
          "No. The DV is one label reference for comparing foods. Your RDA depends on age, sex and life stage and can be higher or lower.",
      },
      {
        question: "Can I get too much of a vitamin from food alone?",
        answer:
          "It is uncommon with ordinary foods. Most cases of excess come from high-dose supplements or very heavily fortified products.",
      },
      {
        question: "Why do iron needs differ between men and women?",
        answer:
          "Menstrual blood loss raises iron needs, so the RDA for women aged 19–50 is 18 mg versus 8 mg for men. It falls to 8 mg for women after 50.",
      },
      {
        question: "Does cooking destroy vitamins?",
        answer:
          "Some water-soluble vitamins, such as vitamin C and folate, can be reduced by heat and long boiling. Steaming or quick cooking keeps more.",
      },
      {
        question: "Why is sodium shown as a limit instead of a target?",
        answer:
          "Most adults already eat more than enough sodium, so the 2,300 mg reference is a level to stay under rather than a goal to reach.",
      },
      {
        question: "Should I take a multivitamin if my tracker shows low numbers?",
        answer:
          "Not automatically. Low tracker totals often reflect missing data. Check food sources first and ask a clinician about testing.",
      },
      {
        question: "Where can I look up the vitamins in a whole food?",
        answer:
          "USDA FoodData Central lists detailed nutrient profiles for many foods, including vitamins and minerals per 100 g.",
      },
      {
        question: "Which nutrients does Alma track besides vitamins?",
        answer:
          "Alma also lists calcium, iron, magnesium, zinc, potassium and sodium alongside 11 vitamins, using general adult reference values.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "See general reference values for 17 vitamins and minerals in ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Find percent Daily Values on packaging with ",
        linkLabel: "How to read a nutrition facts label",
        href: "/guides/how-to-read-a-nutrition-facts-label",
        after: ".",
      },
      {
        before: "Keep a complete log first with ",
        linkLabel: "How to track food intake",
        href: "/guides/how-to-track-food-intake",
        after: ".",
      },
      {
        before: "Convert milligrams, micrograms and grams with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
    ],
    sources: [
      {
        label: "NIH Office of Dietary Supplements – Dietary Reference Intakes",
        href: "https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx",
      },
      {
        label: "NIH Office of Dietary Supplements – Dietary Supplement Fact Sheets",
        href: "https://ods.od.nih.gov/factsheets/list-all/",
      },
      {
        label: "FDA – Daily Value on the Nutrition and Supplement Facts Labels",
        href: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
      {
        label: "USDA FoodData Central",
        href: "https://fdc.nal.usda.gov/",
      },
    ],
  },
};

export const batch14Guides: ToolGuide[] = [trackFood, calorieSurplus, micronutrients];
