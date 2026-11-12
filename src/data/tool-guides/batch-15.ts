import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-12T00:00:00Z";

const fiber: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-much-fiber-per-day",
    title: "How Much Fiber Per Day Do You Need? Targets by Age and Calories",
    primaryKeyword: "how much fiber per day",
    secondaryKeywords: [
      "daily fiber intake",
      "fibre per day",
      "14 grams of fiber per 1000 calories",
      "soluble vs insoluble fiber",
      "high fiber foods",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "unit-converter", "percentage-calculator"],
    metaTitle: "How Much Fiber Per Day Do You Need?",
    metaDescription:
      "Daily fiber targets explained: 14 g per 1,000 calories, adult intakes by age and sex, the 28 g label Daily Value, high-fiber foods and how to add more safely.",
    excerpt:
      "Most adults need roughly 25 to 38 grams of fiber a day depending on age, sex and calorie intake. See where the numbers come from and how to reach them without discomfort.",
    relatedArticles: [
      "micronutrients-explained",
      "how-to-read-a-nutrition-facts-label",
      "how-to-track-food-intake",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the Dietary Guidelines for Americans use 14 grams of fiber for every 1,000 calories you eat. For most adults that works out to about 25 to 34 grams a day for women and 28 to 38 grams for men, depending on age and energy needs. The Nutrition Facts label uses a single Daily Value of 28 grams based on a 2,000-calorie reference diet. Most people eat well below these amounts, so adding fiber slowly from whole foods is the usual advice. Alma: AI Nutrition Coach & Food Tracker can help you estimate your calorie needs and plan meals that include fiber-rich foods.",
    why:
      "Dietary fiber is the part of plant foods your small intestine cannot digest. It still matters: it adds bulk, supports regular bowel movements, slows how quickly some meals are absorbed and helps many people feel full for longer. Public health guidance treats low fiber intake as a nutrient of concern because so few adults reach the recommended amount.",
    sections: [
      {
        id: "where-number-comes-from",
        heading: "Where does the 14 grams per 1,000 calories rule come from?",
        paragraphs: [
          "The figure comes from the Adequate Intake set by the National Academies, which was based on intakes linked with lower risk of coronary heart disease in large studies. Expressing it per 1,000 calories lets the target scale with body size and activity. A person eating 1,600 calories would aim for about 22 grams, while someone eating 2,800 calories would aim for about 39 grams.",
          "Because the rule is tied to energy intake, the easiest way to personalise it is to estimate your daily calories first. The TDEE Calculator gives a maintenance estimate, and you can multiply that number by 0.014 to get a matching fiber goal in grams.",
        ],
      },
      {
        id: "by-age",
        heading: "How much fiber per day by age and sex?",
        paragraphs: [
          "The Adequate Intake values for adults are commonly summarised as 38 grams for men aged 19 to 50 and 25 grams for women in the same age range. After 50, energy needs usually fall, so the values drop to about 30 grams for men and 21 grams for women. The Dietary Guidelines tables give slightly different numbers by age band because they apply the 14 g per 1,000 calories rule to typical calorie levels.",
          "Children need less in absolute terms but the same principle applies. Pregnancy and breastfeeding raise calorie needs and therefore fiber targets a little. If you have a digestive condition, your clinician may recommend a different amount or type of fiber, so treat population targets as a starting point rather than a prescription.",
        ],
        table: {
          caption: "Typical adult fiber targets (Adequate Intake)",
          headers: ["Group", "Ages 19–50", "Ages 51+"],
          rows: [
            ["Men", "38 g per day", "30 g per day"],
            ["Women", "25 g per day", "21 g per day"],
            ["Label Daily Value", "28 g (2,000 kcal reference)", "28 g (2,000 kcal reference)"],
          ],
        },
      },
      {
        id: "types",
        heading: "What is the difference between soluble and insoluble fiber?",
        paragraphs: [
          "Soluble fiber dissolves or swells in water and forms a gel. Oats, barley, beans, lentils, apples and citrus fruit are good sources. This gel-forming type is the one most often linked with helping to manage blood cholesterol and slowing the rise in blood glucose after meals.",
          "Insoluble fiber does not dissolve. It adds bulk and helps material move through the gut, and it is found in wheat bran, whole grains, nuts, seeds and the skins of many vegetables and fruit. Most plant foods contain a mix of both, so you do not need to count the two types separately. Eating a variety of plants covers both.",
        ],
      },
      {
        id: "foods",
        heading: "Which foods are high in fiber?",
        paragraphs: [
          "Legumes are the standout. A cup of cooked lentils provides roughly 15 grams, and half a cup of cooked black beans or chickpeas provides around 6 to 8 grams. Berries, pears and apples with the skin on are strong fruit choices, while whole grains such as oats, barley, bulgur and whole-wheat bread add steady amounts across the day.",
          "Exact values vary by variety, portion and preparation, so check USDA FoodData Central or the package label for the food you actually eat. The table below uses rounded figures to show scale rather than precise numbers.",
        ],
        table: {
          caption: "Approximate fiber in common portions (rounded)",
          headers: ["Food", "Portion", "Fiber (approx.)"],
          rows: [
            ["Lentils, cooked", "1 cup", "15 g"],
            ["Black beans, cooked", "1/2 cup", "7 g"],
            ["Raspberries", "1 cup", "8 g"],
            ["Pear with skin", "1 medium", "5 g"],
            ["Apple with skin", "1 medium", "4 g"],
            ["Oats, cooked", "1 cup", "4 g"],
            ["Almonds", "1 oz (28 g)", "3–4 g"],
            ["Whole-wheat bread", "1 slice", "2 g"],
          ],
        },
      },
      {
        id: "how-to-increase",
        heading: "How do I increase fiber without bloating?",
        paragraphs: [
          "Go slowly. Jumping from 12 grams to 35 grams overnight often causes gas, bloating and cramps while your gut bacteria adjust. Adding about 3 to 5 grams every few days, and holding at each step until it feels comfortable, is a gentler approach.",
          "Drink enough fluid as you add fiber, because insoluble fiber in particular works best with water. Spread fiber across meals instead of loading it into one bowl of bran cereal, and cook or soak beans well. If symptoms persist, note which foods trigger them and discuss them with a doctor or registered dietitian.",
        ],
      },
      {
        id: "supplements",
        heading: "Should I use a fiber supplement?",
        paragraphs: [
          "Whole foods bring fiber together with vitamins, minerals and other plant compounds, which supplements do not replicate. For that reason most guidance prefers food first. Supplements such as psyllium can still be useful when a clinician recommends them for a specific reason, such as constipation.",
          "If you do use a supplement, read the label for the grams of fiber per dose, take it with plenty of water and check with a pharmacist if you take other medicines, since fiber can affect how some drugs are absorbed.",
        ],
      },
    ],
    stepsHeading: "How do I plan a fiber target with Alma?",
    steps: [
      {
        title: "Estimate your calories",
        body: "Use Alma’s Calculators tab or the TDEE Calculator to get a daily calorie figure for your goal.",
      },
      {
        title: "Work out your fiber goal",
        body: "Multiply your daily calories by 14 and divide by 1,000. For example, 2,200 kcal gives about 31 g of fiber.",
      },
      {
        title: "Plan fiber into meals",
        body: "Use the Meal Planner to place a legume, whole grain, fruit or vegetable in each meal rather than relying on one high-fiber food.",
      },
      {
        title: "Log what you eat",
        body: "Record foods in the Food Tracker. Labels and USDA FoodData Central list grams of dietary fiber you can compare with your goal.",
      },
      {
        title: "Ask the coach for ideas",
        body: "Alma’s educational coach can suggest general ways to add fiber, such as swaps and snacks. It is not a substitute for medical advice.",
      },
    ],
    examples: [
      {
        title: "Breakfast swap",
        body: "Changing a white-bread breakfast to a cup of oatmeal with a cup of raspberries moves the meal from about 2 g to roughly 12 g of fiber.",
      },
      {
        title: "Calorie-based target",
        body: "A woman eating about 1,900 kcal per day multiplies 1,900 by 0.014 and sets a goal of roughly 27 g, close to the label Daily Value of 28 g.",
      },
      {
        title: "Gradual build-up",
        body: "Someone eating about 14 g a day adds one portion of beans at lunch for a week, then fruit at breakfast the next week, reaching around 25 g without discomfort.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Targets are population guides",
        body: "Adequate Intake values describe what supports health for most people. Individual needs differ, especially with digestive conditions.",
      },
      {
        heading: "Labels round values",
        body: "Fiber on a Nutrition Facts label is rounded and can vary between batches, so treat daily totals as estimates.",
      },
      {
        heading: "Medical conditions",
        body: "People with inflammatory bowel disease, recent bowel surgery or swallowing difficulties should follow their care team’s fiber advice. This guide is general information only.",
      },
    ],
    faqs: [
      {
        question: "Is 30 grams of fiber a day enough?",
        answer:
          "For many adults, yes. It sits between the common targets for women and men and above the 28 g label Daily Value, though a very active man may aim higher.",
      },
      {
        question: "Can you eat too much fiber?",
        answer:
          "Very high intakes, especially if increased quickly or with little fluid, can cause bloating, gas and discomfort. No upper limit has been set for fiber from food.",
      },
      {
        question: "Does fiber have calories?",
        answer:
          "Some does. Fiber that gut bacteria ferment provides a small amount of energy, which is why labels count it within total carbohydrate.",
      },
      {
        question: "Is fruit juice a good source of fiber?",
        answer:
          "Usually not. Juicing removes most of the fiber, so whole fruit provides far more than the same fruit as juice.",
      },
      {
        question: "Do net carbs subtract fiber?",
        answer:
          "Net carbs is a marketing term that subtracts fiber and some sugar alcohols from total carbohydrate. It is not defined on the US Nutrition Facts label.",
      },
      {
        question: "Which vegetables have the most fiber?",
        answer:
          "Artichokes, green peas, Brussels sprouts, broccoli and sweet potatoes with the skin are among the higher-fiber choices per typical portion.",
      },
      {
        question: "Is white rice low in fiber?",
        answer:
          "Yes. Cooked white rice has well under 1 g per 100 g, while brown rice has more, so swapping some grains to whole versions adds fiber.",
      },
      {
        question: "Can fiber help with weight management?",
        answer:
          "High-fiber foods tend to be filling for their calories, which can make a calorie target easier to follow. Fiber alone does not cause weight loss.",
      },
      {
        question: "Should children follow adult fiber targets?",
        answer:
          "No. Children need less in grams because they eat fewer calories. The Dietary Guidelines list age-specific amounts.",
      },
      {
        question: "Does Alma calculate my exact fiber needs?",
        answer:
          "Alma estimates calories. You can apply the 14 g per 1,000 kcal rule to that figure, but it is an educational estimate, not medical advice.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Estimate your calories and plan fiber-rich meals with ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Learn the other nutrients on a label in ",
        linkLabel: "Micronutrients explained",
        href: "/guides/micronutrients-explained",
        after: ".",
      },
      {
        before: "Get the calorie figure for the 14 g rule from the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Find dietary fiber on packaged foods with ",
        linkLabel: "How to read a nutrition facts label",
        href: "/guides/how-to-read-a-nutrition-facts-label",
        after: ".",
      },
    ],
    sources: [
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
      {
        label: "FDA – Daily Value on the Nutrition and Supplement Facts Labels",
        href: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
      },
      {
        label: "USDA FoodData Central",
        href: "https://fdc.nal.usda.gov/",
      },
    ],
  },
};
const plateau: ToolGuide = {
  article: toolGuideArticle({
    slug: "weight-loss-plateau-explained",
    title: "Weight Loss Plateau Explained: Why It Happens and How to Restart Progress",
    primaryKeyword: "weight loss plateau",
    secondaryKeywords: [
      "why did my weight loss stop",
      "how to break a weight loss plateau",
      "metabolic adaptation",
      "recalculate calories after weight loss",
      "water weight fluctuations",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "unit-converter", "percentage-calculator"],
    metaTitle: "Weight Loss Plateau Explained",
    metaDescription:
      "Why weight loss stalls: lower energy needs, water shifts, logging drift and less daily movement, plus a calm checklist to confirm a plateau and adjust.",
    excerpt:
      "A weight loss plateau usually means your energy needs have caught up with your intake. Learn how to tell a real stall from normal fluctuation and what to adjust first.",
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
      "Quick answer: a weight loss plateau happens when the calories you eat and the calories you burn come back into balance. As you lose weight, a smaller body needs less energy, everyday movement often drops, and portions tend to creep up, so the original deficit shrinks. Before changing anything, confirm the stall over three to four weeks of weight trend, recheck your intake log, then recalculate your needs at your current weight with the TDEE Calculator and adjust calories or activity modestly.",
    why:
      "Plateaus are a normal part of weight change, not a sign that something is broken. Research modelling energy balance, such as the work behind the NIDDK Body Weight Planner, shows that weight loss naturally slows over time even when intake stays the same. Understanding why helps you respond with small, sustainable adjustments instead of drastic cuts.",
    sections: [
      {
        id: "real-or-not",
        heading: "Is it a real plateau or normal fluctuation?",
        paragraphs: [
          "Body weight can swing by one to two kilograms from day to day because of water, salt, carbohydrate stores, digestion and, for many women, the menstrual cycle. A heavy restaurant meal or a hard training session can hide a week of fat loss on the scale.",
          "Weigh yourself under similar conditions, such as after waking and using the bathroom, and look at a weekly average. A useful working definition of a plateau is no downward trend in the weekly average for three to four weeks while you believe you are following the same plan. Shorter stalls are usually noise.",
        ],
        table: {
          caption: "Fluctuation versus plateau",
          headers: ["Signal", "Likely normal fluctuation", "Possible plateau"],
          rows: [
            ["Duration", "A few days to two weeks", "Three to four weeks or more"],
            ["Pattern", "Spikes after salty or large meals", "Flat weekly averages"],
            ["Other measures", "Waist or fit still improving", "Waist and fit unchanged too"],
          ],
        },
      },
      {
        id: "why",
        heading: "Why does weight loss slow down?",
        paragraphs: [
          "The biggest reason is simple arithmetic. Energy needs depend partly on body weight, so after losing 8 kg your maintenance calories may be noticeably lower than when you started. The deficit that once produced steady loss is now smaller, and the rate of loss slows accordingly.",
          "Several smaller effects add to this. Non-exercise activity, such as walking, fidgeting and standing, often decreases during a diet without you noticing. Researchers also describe adaptive thermogenesis, a modest drop in energy use beyond what the lower weight alone predicts. Finally, tracking tends to loosen over time: portions get estimated instead of weighed and snacks go unrecorded.",
        ],
      },
      {
        id: "audit",
        heading: "How do I check my food log for drift?",
        paragraphs: [
          "Spend one or two weeks logging as carefully as you did at the start. Weigh calorie-dense foods such as oils, nuts, cheese, cereal and nut butter, record drinks and condiments, and include weekends. Compare the new average with the intake you thought you were eating.",
          "Many people find a gap of a few hundred calories a day, which is enough to erase a moderate deficit. If the careful log matches your plan, the plateau is more likely to reflect reduced energy needs, and recalculating is the next step.",
          "It also helps to check activity. If you track steps, compare the current weekly average with the first month of your plan. A drop of a few thousand steps a day is common once motivation fades or the weather changes, and it quietly reduces how many calories you burn.",
        ],
      },
      {
        id: "recalculate",
        heading: "Should I recalculate my calories after losing weight?",
        paragraphs: [
          "Yes. Enter your current weight into the TDEE Calculator to get an updated maintenance estimate, then set a deficit from that new figure. Many people recalculate after every 4 to 5 kg of change, or whenever progress stalls for a month.",
          "Keep the change small. Reducing intake by about 100 to 200 kcal per day, or adding a daily walk, is easier to sustain than a large cut. Avoid dropping below a level that leaves you unable to meet protein and micronutrient needs, and seek professional advice before following a very low calorie plan.",
        ],
      },
      {
        id: "other-levers",
        heading: "What else can help restart progress?",
        paragraphs: [
          "Protein and resistance training help preserve lean mass while you lose weight, which supports strength and makes the process more comfortable. The Physical Activity Guidelines recommend muscle-strengthening activity on two or more days a week for adults, alongside regular aerobic activity.",
          "Sleep and stress matter for appetite and food choices. Some people also use a planned maintenance period of a week or two to reduce diet fatigue before resuming a deficit. None of these levers overrides energy balance, but they can make it easier to stay consistent.",
        ],
      },
      {
        id: "when-to-stop",
        heading: "When is a plateau a sign to stop dieting?",
        paragraphs: [
          "Sometimes a plateau is the body settling at a healthy weight you can maintain. If you are already in a healthy range, feel well and the remaining goal is mostly cosmetic, maintaining may be the better choice.",
          "Talk to a doctor if weight changes without a clear reason, if you have symptoms such as persistent fatigue or feeling cold, or if you take medicines that affect weight. Underlying conditions such as thyroid problems can influence weight and need medical assessment.",
        ],
      },
    ],
    stepsHeading: "How do I respond to a plateau with the TDEE Calculator?",
    steps: [
      {
        title: "Confirm the trend",
        body: "Compare weekly average weights over the last three to four weeks. Only treat a flat trend as a plateau.",
      },
      {
        title: "Audit one week of intake",
        body: "Log carefully for seven days, including oils, drinks and weekends, using a food diary such as Alma’s Food Tracker.",
      },
      {
        title: "Recalculate maintenance",
        body: "Enter your current weight, height, age, sex and honest activity level in the TDEE Calculator to update your maintenance estimate.",
      },
      {
        title: "Set a modest new target",
        body: "Subtract a small deficit from the new figure, or keep calories the same and add daily steps or activity.",
      },
      {
        title: "Review again in a month",
        body: "Give the change three to four weeks before judging it, then repeat the check if needed.",
      },
    ],
    examples: [
      {
        title: "Lower energy needs",
        body: "A person started at 92 kg eating 2,100 kcal against an estimated 2,600 kcal maintenance. At 84 kg the updated estimate is lower, so the same intake now gives a smaller deficit and slower loss.",
      },
      {
        title: "Logging drift",
        body: "A careful audit shows untracked cooking oil, a daily latte and weekend snacks adding about 350 kcal per day, which explains a five-week stall.",
      },
      {
        title: "Scale noise",
        body: "Weight jumps 1.5 kg after a salty takeaway meal, then returns over three days. The weekly average still drops, so no change is needed.",
      },
      {
        title: "Fewer steps",
        body: "Step counts fall from about 9,000 to 5,500 a day over the winter. Adding a 30-minute daily walk restores much of that activity and the weekly average begins falling again.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Calculators are estimates",
        body: "TDEE formulas predict averages. Your real maintenance may differ, so use the weight trend to fine-tune.",
      },
      {
        heading: "Slower is expected",
        body: "Loss naturally slows as you get closer to a goal weight. A slower rate is not the same as a plateau.",
      },
      {
        heading: "Health first",
        body: "This guide is general information. Seek medical advice for unexplained weight change, eating-disorder concerns, pregnancy or chronic conditions.",
      },
    ],
    faqs: [
      {
        question: "How long does a weight loss plateau last?",
        answer:
          "It lasts until intake or expenditure changes. Short stalls of one to two weeks are often water and resolve on their own.",
      },
      {
        question: "Does eating too little cause a plateau?",
        answer:
          "Eating very little does not stop fat loss by itself, but it often leads to fatigue, reduced activity and overeating later, which can stall progress.",
      },
      {
        question: "Should I eat more to break a plateau?",
        answer:
          "Only if you are eating below what you can sustain. A planned maintenance break can reduce diet fatigue, but it will not by itself cause fat loss.",
      },
      {
        question: "Can exercise break a plateau?",
        answer:
          "Adding activity increases energy use, which can restore a deficit. Daily walking is often easier to sustain than extra intense workouts.",
      },
      {
        question: "Why am I losing inches but not weight?",
        answer:
          "Water shifts or gaining some muscle from new training can hide fat loss on the scale. Waist measurements and fit help show progress.",
      },
      {
        question: "Is metabolic damage real?",
        answer:
          "Energy use can drop somewhat more than weight loss alone predicts, but the effect is usually modest rather than a permanently broken metabolism.",
      },
      {
        question: "How often should I weigh myself?",
        answer:
          "Daily or a few times a week is fine if you look at weekly averages. Weekly single weigh-ins are more affected by random fluctuation.",
      },
      {
        question: "Do cheat days cause plateaus?",
        answer:
          "Large unplanned eating days can cancel much of a weekly deficit, so they are a common hidden cause of stalled progress.",
      },
      {
        question: "Should I cut carbs to break a plateau?",
        answer:
          "Cutting carbs can drop water weight quickly, but fat loss still depends on total calories. Choose the eating pattern you can sustain.",
      },
      {
        question: "When should I recalculate my TDEE?",
        answer:
          "Recalculate after every 4 to 5 kg of weight change, after a big change in activity, or when progress stalls for about a month.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Update your maintenance estimate at your current weight with the ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Audit your intake with a browser-based diary in ",
        linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
        href: "/tools/alma-ai-nutrition-coach",
        after: ".",
      },
      {
        before: "Review how deficits work in ",
        linkLabel: "Calorie deficit explained",
        href: "/guides/calorie-deficit-explained",
        after: ".",
      },
      {
        before: "Improve logging accuracy with ",
        linkLabel: "How to track food intake",
        href: "/guides/how-to-track-food-intake",
        after: ".",
      },
    ],
    sources: [
      {
        label: "NIDDK – Body Weight Planner",
        href: "https://www.niddk.nih.gov/bwp",
      },
      {
        label: "PubMed – Quantification of the effect of energy imbalance on bodyweight (Hall et al., 2011)",
        href: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
      },
      {
        label: "Physical Activity Guidelines for Americans",
        href: "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines",
      },
    ],
  },
};

const sugar: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-much-sugar-per-day",
    title: "How Much Sugar Per Day Is Okay? Added Sugar Limits Explained",
    primaryKeyword: "how much sugar per day",
    secondaryKeywords: [
      "added sugar limit",
      "added sugars daily value",
      "free sugars WHO guideline",
      "natural vs added sugar",
      "grams of sugar per day",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "percentage-calculator", "unit-converter"],
    metaTitle: "How Much Sugar Per Day Is Okay?",
    metaDescription:
      "Added sugar limits explained: under 10% of calories, the 50 g label Daily Value, WHO free sugars advice, natural vs added sugar and how to cut back.",
    excerpt:
      "Official advice limits added sugars to under 10% of daily calories, about 50 grams on a 2,000-calorie diet. See how to calculate your own limit and spot sugar on labels.",
    relatedArticles: [
      "how-to-read-a-nutrition-facts-label",
      "how-to-calculate-macros",
      "how-much-fiber-per-day",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the Dietary Guidelines for Americans advise keeping added sugars below 10% of daily calories for people aged 2 and older. On a 2,000-calorie diet that is less than 200 calories, or about 50 grams, which is also the Daily Value for added sugars on the Nutrition Facts label. The World Health Organization makes a similar recommendation for free sugars and suggests that going below 5% may bring further benefits. Sugar naturally present in whole fruit, vegetables and plain milk is not counted toward these limits.",
    why:
      "Added sugars supply calories with few other nutrients, so diets high in them can make it harder to meet nutrient needs within a calorie budget. Sugary drinks are the largest single source in many diets. Knowing your personal limit in grams makes labels easier to use and helps you decide where small changes matter most.",
    sections: [
      {
        id: "added-vs-natural",
        heading: "What is the difference between added and natural sugar?",
        paragraphs: [
          "Added sugars are sugars and syrups put into foods during processing or preparation, plus those you add yourself. Table sugar, honey, maple syrup, corn syrup and sugars from concentrated fruit juice all count. The FDA requires added sugars to be listed separately on the Nutrition Facts label, under Total Sugars.",
          "Naturally occurring sugars are found inside the structure of whole foods, such as fructose in an apple or lactose in milk. These foods also bring fiber, water, protein or micronutrients, which is why guidance does not set a limit on them. The WHO uses the term free sugars, which includes added sugars plus sugars in honey, syrups and fruit juices.",
        ],
      },
      {
        id: "calculate",
        heading: "How do I calculate my added sugar limit in grams?",
        paragraphs: [
          "Start with your daily calorie needs, multiply by 0.10 to get the maximum calories from added sugars, then divide by 4, because each gram of sugar provides about 4 calories. For 2,000 kcal that gives 200 kcal and 50 g. For 1,600 kcal it gives 160 kcal and 40 g.",
          "If you want to follow the stricter WHO suggestion of 5%, halve those numbers. The TDEE Calculator estimates your calorie needs, and the Percentage Calculator makes the 10% or 5% step quick if you prefer not to do it by hand.",
        ],
        table: {
          caption: "Added sugar limits by calorie level",
          headers: ["Daily calories", "Under 10% (grams)", "Under 5% (grams)"],
          rows: [
            ["1,600 kcal", "Under 40 g", "Under 20 g"],
            ["2,000 kcal", "Under 50 g", "Under 25 g"],
            ["2,400 kcal", "Under 60 g", "Under 30 g"],
            ["2,800 kcal", "Under 70 g", "Under 35 g"],
          ],
        },
      },
      {
        id: "children",
        heading: "How much sugar should children have?",
        paragraphs: [
          "The Dietary Guidelines recommend avoiding added sugars entirely for children under 2. For older children, the same under-10%-of-calories limit applies, but because children eat fewer calories, their limit in grams is lower than an adult’s.",
          "Drinks are often the easiest place to start. Swapping sweetened drinks for water or plain milk can remove a large share of a child’s added sugars without changing meals much.",
        ],
      },
      {
        id: "labels",
        heading: "How do I find added sugar on a label?",
        paragraphs: [
          "On the US Nutrition Facts label, look for the line that reads Includes Xg Added Sugars, indented under Total Sugars. The %DV next to it shows how much of the 50 g Daily Value one serving uses. As a general guide from the FDA, 5% DV or less is low and 20% DV or more is high.",
          "Check the serving size first, because a bottle or packet may contain more than one serving. The ingredients list also helps: sugars appear under many names, including sucrose, dextrose, glucose syrup, invert sugar, molasses and fruit juice concentrate.",
        ],
      },
      {
        id: "sources",
        heading: "Where does most added sugar come from?",
        paragraphs: [
          "In the United States, the Dietary Guidelines identify sugar-sweetened beverages, such as soft drinks, fruit drinks, sports and energy drinks, and sweetened coffee and tea, as the largest source of added sugars. Desserts, sweet snacks, candy and breakfast cereals follow.",
          "A single 12-ounce regular soft drink can contain close to 40 grams of added sugar, most of a 50 g daily limit, while flavoured yogurts, granola bars and sauces add smaller amounts that accumulate. Checking your top two or three sources usually reveals the biggest wins.",
          "Foods marketed as healthy can surprise you. Some breakfast cereals, smoothies, protein bars, plant-based milks and salad dressings carry several teaspoons of added sugar per serving. Comparing the Added Sugars line between two similar products in the same aisle is a quick way to find a lower-sugar option you still enjoy.",
        ],
      },
      {
        id: "cutting-back",
        heading: "How can I cut back on added sugar?",
        paragraphs: [
          "Change one habit at a time. Replace sweetened drinks with water, sparkling water or unsweetened tea, choose plain yogurt and add fruit, and gradually reduce the sugar you stir into coffee. Taste preferences tend to adjust over a few weeks.",
          "Low-calorie sweeteners approved by the FDA can help some people reduce sugar, though the WHO advises against relying on non-sugar sweeteners for weight control. Focus on whole foods, enough protein and fiber, and regular meals, which make sweet cravings easier to manage.",
          "When baking at home, many recipes still work with a quarter to a third less sugar, especially when fruit, vanilla or spices add flavour. Keeping sweets for planned occasions, rather than having them within reach every day, is another simple change that reduces intake without strict rules.",
        ],
      },
    ],
    stepsHeading: "How do I use Alma to plan around sugar?",
    steps: [
      {
        title: "Find your calorie target",
        body: "Use Alma’s Calculators tab or the TDEE Calculator to estimate daily calories for your goal.",
      },
      {
        title: "Work out your limit",
        body: "Take 10% of your calories and divide by 4 to get grams of added sugar, or use 5% for a stricter goal.",
      },
      {
        title: "Check labels as you log",
        body: "When you add packaged foods to the Food Tracker, read the Added Sugars line on the label to see how much each serving uses.",
      },
      {
        title: "Plan lower-sugar swaps",
        body: "Use the Meal Planner to choose breakfasts and snacks built on whole foods, fruit and plain dairy.",
      },
      {
        title: "Ask the coach",
        body: "Alma’s educational coach can suggest general ideas for reducing sugary drinks and snacks. It does not replace a dietitian.",
      },
    ],
    examples: [
      {
        title: "Personal limit",
        body: "Someone eating 2,200 kcal multiplies by 0.10 to get 220 kcal, then divides by 4 for a limit of 55 g of added sugar per day.",
      },
      {
        title: "Drink swap",
        body: "Replacing one daily regular soft drink of about 39 g added sugar with sparkling water cuts roughly 270 g of added sugar per week.",
      },
      {
        title: "Fruit versus juice",
        body: "A whole orange counts as natural sugar with fiber, while a large glass of orange juice counts toward free sugars under WHO advice.",
      },
      {
        title: "Yogurt comparison",
        body: "A flavoured yogurt lists 15 g added sugars per pot. Plain yogurt topped with a handful of berries supplies a similar taste with no added sugar on the label.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Limits, not targets",
        body: "The 10% figure is an upper limit. There is no nutritional need for added sugar.",
      },
      {
        heading: "Labels differ by country",
        body: "The Added Sugars line is a US requirement. Labels in other countries may show only total sugars.",
      },
      {
        heading: "Medical conditions",
        body: "People with diabetes or other conditions should follow their care team’s advice on carbohydrates and sugar. This guide is general information only.",
      },
    ],
    faqs: [
      {
        question: "Is 50 grams of sugar a day too much?",
        answer:
          "For added sugars on a 2,000-calorie diet, 50 g is the upper limit, not a goal. Natural sugar in whole fruit and plain milk is not part of that number.",
      },
      {
        question: "How many teaspoons is 50 grams of sugar?",
        answer:
          "About 12 teaspoons, since one teaspoon of granulated sugar weighs roughly 4 grams.",
      },
      {
        question: "Does fruit count toward my sugar limit?",
        answer:
          "Whole fruit does not count toward added or free sugar limits. Fruit juice counts as free sugars under WHO guidance.",
      },
      {
        question: "Is honey healthier than sugar?",
        answer:
          "Honey counts as an added sugar in US guidance and a free sugar in WHO guidance, so it falls under the same limit.",
      },
      {
        question: "What does 0 g added sugars mean on a label?",
        answer:
          "It means one serving contains less than 0.5 g of added sugars, which can be rounded down to zero.",
      },
      {
        question: "Is brown sugar better than white sugar?",
        answer:
          "Nutritionally they are very similar. Brown sugar contains a little molasses, but both count fully as added sugar.",
      },
      {
        question: "What is the WHO sugar recommendation?",
        answer:
          "The WHO recommends keeping free sugars below 10% of total energy intake and suggests that below 5% may provide additional benefits.",
      },
      {
        question: "Do sugar alcohols count as added sugar?",
        answer:
          "No. Sugar alcohols such as erythritol are listed separately on some labels and are not included in the Added Sugars line.",
      },
      {
        question: "How many calories are in a gram of sugar?",
        answer:
          "About 4 calories, the same as other carbohydrates and protein.",
      },
      {
        question: "Does Alma track added sugar automatically?",
        answer:
          "Alma focuses on calories and macros. Use the Added Sugars line on labels to compare foods with your personal limit.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Estimate your calories and plan lower-sugar meals with ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Work out 10% or 5% of your calories with the ",
        linkLabel: "Percentage Calculator",
        href: "/tools/percentage-calculator",
        after: ".",
      },
      {
        before: "Find the Added Sugars line and %DV in ",
        linkLabel: "How to read a nutrition facts label",
        href: "/guides/how-to-read-a-nutrition-facts-label",
        after: ".",
      },
      {
        before: "Balance carbohydrates with protein and fat in ",
        linkLabel: "How to calculate macros",
        href: "/guides/how-to-calculate-macros",
        after: ".",
      },
    ],
    sources: [
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
      {
        label: "FDA – Added Sugars on the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label",
      },
      {
        label: "WHO – Guideline: Sugars intake for adults and children",
        href: "https://www.who.int/publications/i/item/9789241549028",
      },
    ],
  },
};

export const batch15Guides: ToolGuide[] = [fiber, plateau, sugar];
