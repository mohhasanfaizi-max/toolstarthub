import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-06T00:00:00Z";

const howToTdee: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-tdee",
    title: "How to Calculate TDEE: A Clear Step-by-Step Method",
    primaryKeyword: "how to calculate tdee",
    secondaryKeywords: [
      "calculate total daily energy expenditure",
      "tdee formula",
      "maintenance calories estimate",
      "activity multiplier tdee",
      "daily calorie needs calculator",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "unit-converter", "age-calculator"],
    metaTitle: "How to Calculate TDEE: Step-by-Step Method",
    metaDescription:
      "Calculate TDEE from BMR and an activity factor, with a worked example, common mistakes and how to set maintain, lose or gain calorie targets.",
    excerpt:
      "TDEE is your estimated daily calorie burn. This guide shows the Mifflin–St Jeor plus activity method, a full example and how to use the number without treating it as a medical prescription.",
    relatedArticles: [
      "bmr-vs-tdee-explained",
      "mifflin-st-jeor-equation-explained",
      "calorie-deficit-explained",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to calculate TDEE, estimate basal metabolic rate (BMR) with an equation such as Mifflin–St Jeor, then multiply by an activity factor that matches a typical week. Maintenance calories equal that TDEE. A common planning deficit for gradual loss is about 500 kcal per day; a modest surplus for gain is about 300 kcal. The free TDEE Calculator runs that arithmetic in your browser with a suggested macro split. Treat every result as an estimate to refine with weekly averages, not as a lab measurement or clinical diet.",
    why:
      "People search how to calculate TDEE because meal plans need a starting energy number. Guessing from a friend’s plate wastes weeks. A transparent formula shows which inputs drive the result and when to recalculate after weight or routine changes.",
    sections: [
      {
        id: "what",
        heading: "What does TDEE mean?",
        paragraphs: [
          "Total Daily Energy Expenditure is the estimated number of calories your body uses across a full day. It includes resting metabolism, the cost of digesting food, everyday movement and planned exercise. When average intake roughly matches TDEE over time, body weight tends to stay stable. Consistently eating below it usually leads to loss; consistently eating above it usually leads to gain.",
          "TDEE is not a fixed personality trait. It drifts when weight, age, muscle mass, job demands, sleep and health status change. A repeatable method beats a one-time screenshot.",
        ],
      },
      {
        id: "two-steps",
        heading: "What are the two steps in a TDEE calculation?",
        paragraphs: [
          "Most consumer calculators follow the same pattern. First they estimate BMR, the energy cost of staying alive at complete rest. Then they multiply BMR by an activity factor so the day you actually live is included. The product is TDEE.",
          "This site uses Mifflin–St Jeor for BMR and multipliers 1.2, 1.375, 1.55, 1.725 and 1.9. Other equations exist; pick one method and stay consistent while you learn how your body responds.",
        ],
      },
      {
        id: "inputs",
        heading: "Which inputs do you need?",
        paragraphs: [
          "You need sex (the Mifflin–St Jeor constants are binary), age in years, weight and height. Metric inputs use kilograms and centimetres. Imperial inputs use pounds plus feet and inches; the calculator converts them before applying the equation.",
          "Age should be your current age in whole years—confirm with the Age Calculator if a birthday is close. If scale and tape disagree on units, convert once with the Unit Converter so every number matches the form toggle.",
        ],
        table: {
          caption: "Typical activity multipliers used with BMR",
          headers: ["Level", "Multiplier", "Rough fit"],
          rows: [
            ["Sedentary", "×1.2", "Desk work, little formal exercise"],
            ["Lightly active", "×1.375", "Light sport or walks 1–3 days/week"],
            ["Moderately active", "×1.55", "Training about 3–5 days/week"],
            ["Very active", "×1.725", "Hard training most days"],
            ["Extra active", "×1.9", "Very hard training, physical job, or both"],
          ],
        },
      },
      {
        id: "example",
        heading: "Worked example: sedentary desk worker",
        paragraphs: [
          "Take a 30-year-old man who weighs 80 kg and is 180 cm tall, with a sedentary week. Mifflin–St Jeor for men is 10×weight(kg) + 6.25×height(cm) − 5×age + 5. That is 10×80 + 6.25×180 − 5×30 + 5 = 800 + 1,125 − 150 + 5 = 1,780 kcal for BMR.",
          "Multiply by 1.2 for sedentary activity: TDEE ≈ 2,136 kcal. Maintenance equals that number. Loss near 1,636 kcal and gain near 2,436 kcal follow the same planning offsets used on the TDEE Calculator. Your numbers will differ; the example shows the order of operations.",
        ],
      },
      {
        id: "choose-activity",
        heading: "How do I choose an activity level honestly?",
        paragraphs: [
          "Match a typical week, not your hardest training day. Someone who lifts hard three evenings but sits the rest of the day often fits moderately active better than very active. Overestimating activity is the most common way people set calories too high, then wonder why weight does not move.",
          "When in doubt, start one notch lower, track a weekly average of morning weight for two weeks, and adjust. If weight drifts the wrong way, change intake or the activity label—not both at once. The formula is the map; the scale and how you feel are the compass.",
        ],
      },
      {
        id: "goals",
        heading: "How do maintain, lose and gain targets relate to TDEE?",
        paragraphs: [
          "Maintenance calories equal TDEE by definition in this method. Weight-loss planning often subtracts about 500 kcal per day, a classic figure associated with roughly half a kilogram of fat loss per week when adherence is careful—though real-world rates vary. Weight-gain planning on this site adds about 300 kcal for a modest surplus.",
          "The TDEE Calculator also floors suggested loss calories at 1,200 kcal as a soft safety bound for the estimate only—not a personal prescription. Adolescents, pregnant people and anyone with a medical or eating concern need professional care before aggressive deficits.",
        ],
      },
      {
        id: "mistakes",
        heading: "What mistakes throw TDEE off?",
        paragraphs: [
          "Using height in centimetres while the form is set to feet, or weight in pounds while the form expects kilograms, silently warps BMR. Confirm the unit toggle before you press Calculate. Another mistake is picking Extra active because one weekend was busy, then living a sedentary week the rest of the month.",
          "Treating the first result as permanent is also a problem. Recalculate after meaningful fat loss, muscle gain or a job change that alters walking. Online estimates cannot see every medical factor—use them as arithmetic assistants, then let multi-week trends vote.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits of any online TDEE number?",
        paragraphs: [
          "Equations were built from group data. Individual error can still be hundreds of calories. Wearables, food labels and restaurant portions add more noise. Two people with identical age, sex, height and weight can still differ because of muscle mass and non-exercise movement.",
          "This guide and the linked calculator do not diagnose disorders, prescribe clinical diets or guarantee a rate of loss or gain. They show the maths clearly so you can decide what to trust and when to ask a doctor or registered dietitian for personalised care.",
        ],
      },
    ],
    stepsHeading: "How do I calculate TDEE on Tools Star Hub?",
    steps: [
      {
        title: "Open the TDEE Calculator",
        body: "Go to the free TDEE Calculator and choose metric or imperial units so every field matches the numbers you have.",
      },
      {
        title: "Enter sex, age, weight and height",
        body: "Use current measurements. Confirm age in whole years and convert units first if your devices disagree.",
      },
      {
        title: "Pick an honest activity level",
        body: "Choose the multiplier that fits a normal week. Prefer the lower option when you are unsure.",
      },
      {
        title: "Select a goal and read BMR plus TDEE",
        body: "Maintain, lose or gain updates the highlighted calorie target. Copy or share the results if you want them elsewhere, then refine after two weeks of data.",
      },
    ],
    examples: [
      {
        title: "Metric sedentary estimate",
        body: "Male, 30, 80 kg, 180 cm, sedentary: BMR ≈ 1,780 kcal, TDEE ≈ 2,136 kcal, loss near 1,636 kcal, gain near 2,436 kcal.",
      },
      {
        title: "Imperial moderate week",
        body: "Female, 28, 140 lb, 5′6″, moderately active (×1.55): convert to metric, compute Mifflin–St Jeor BMR, multiply by 1.55, then apply maintain, lose or gain offsets.",
      },
      {
        title: "Recalculate after loss",
        body: "If body weight falls several kilograms, run the form again. A smaller body usually burns somewhat less at the same activity label.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Estimate, not prescription",
        body: "TDEE calculators approximate population averages. Adjust with how clothes fit, training quality and weekly weight averages.",
      },
      {
        heading: "Soft loss floor",
        body: "This site’s loss line will not suggest below 1,200 kcal. That bound protects the estimate display; it is not medical clearance for a low-calorie diet.",
      },
      {
        heading: "Local calculation",
        body: "The TDEE Calculator runs in your browser. It does not need an account to show BMR, TDEE and macro suggestions.",
      },
      {
        heading: "Educational use",
        body: "Nutrition content here is educational. Seek clinical guidance for medical conditions, pregnancy, adolescence or disordered eating concerns.",
      },
    ],
    faqs: [
      {
        question: "What order should I follow when calculating TDEE by hand?",
        answer:
          "Convert units to kilograms and centimetres, compute Mifflin–St Jeor BMR, multiply by the activity factor, then apply any maintain, lose or gain offset you plan to use.",
      },
      {
        question: "Is TDEE the same number every day of the week?",
        answer:
          "The calculator gives one weekly-style estimate. Real expenditure rises on hard training days and falls on rest days. Use the weekly average of intake and weight, not a single Tuesday weigh-in.",
      },
      {
        question: "Should I include NEAT separately from the activity factor?",
        answer:
          "Not in this method. The activity multipliers already fold everyday movement into one number. Adding step-count calories on top usually double-counts.",
      },
      {
        question: "How close should my food log stay to TDEE for maintenance?",
        answer:
          "Aim for a multi-day average near TDEE, then watch the weekly weight trend. Perfect daily matching is unnecessary and often stressful.",
      },
      {
        question: "Can water weight hide whether my TDEE estimate is right?",
        answer:
          "Yes. Sodium, glycogen and menstrual cycle shifts can move the scale a kilogram without true fat change. Prefer weekly averages over single days.",
      },
      {
        question: "Do I recalculate TDEE after every workout?",
        answer:
          "No. Recalculate after meaningful changes in body weight, job activity or training volume, or every few weeks during a long cut or bulk.",
      },
      {
        question: "Why might two online calculators disagree?",
        answer:
          "They may use different BMR equations, different activity tables or different loss and gain offsets. Compare methods, then stick with one while you gather feedback.",
      },
      {
        question: "Does muscle mass appear as its own field?",
        answer:
          "Not on this form. Higher muscle mass often raises energy use, but the equation only sees weight, height, age and sex. Let progress and hunger guide fine-tuning.",
      },
      {
        question: "Can I use TDEE without tracking every bite?",
        answer:
          "Yes. Some people only use the calorie target as a plate-building guide. Tracking for a short calibration period still helps if progress stalls.",
      },
      {
        question: "Where should I go after I have a TDEE number?",
        answer:
          "Set maintain, lose or gain targets on the TDEE Calculator, then optionally plan protein and meals in Alma: AI Nutrition Coach & Food Tracker.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Run the same Mifflin–St Jeor and activity maths in the free ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Compare resting and total needs in ",
        linkLabel: "BMR vs TDEE explained",
        href: "/guides/bmr-vs-tdee-explained",
        after: ".",
      },
      {
        before: "See the equation details in ",
        linkLabel: "Mifflin–St Jeor equation explained",
        href: "/guides/mifflin-st-jeor-equation-explained",
        after: ".",
      },
      {
        before: "For logging and protein ranges, open ",
        linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
        href: "/tools/alma-ai-nutrition-coach",
        after: ".",
      },
    ],
    sources: [
      {
        label: "Mifflin MD et al. – A new predictive equation for resting energy expenditure (PubMed)",
        href: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      },
      {
        label: "CDC – Losing Weight",
        href: "https://www.cdc.gov/healthy-weight-growth/losing-weight/index.html",
      },
    ],
  },
};

const bmrVsTdee: ToolGuide = {
  article: toolGuideArticle({
    slug: "bmr-vs-tdee-explained",
    title: "BMR vs TDEE Explained: Resting Burn vs Daily Needs",
    primaryKeyword: "bmr vs tdee",
    secondaryKeywords: [
      "difference between bmr and tdee",
      "basal metabolic rate vs tdee",
      "resting calories vs daily calories",
      "bmr and tdee meaning",
      "why tdee is higher than bmr",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "unit-converter", "percentage-calculator"],
    metaTitle: "BMR vs TDEE Explained: Resting vs Daily Calories",
    metaDescription:
      "BMR is resting energy; TDEE is resting energy plus daily movement and training. Learn the difference, when to use each number and how calculators connect them.",
    excerpt:
      "BMR and TDEE are related but not interchangeable. This guide explains both numbers, why meal planning usually needs TDEE, and how to read them on a calorie calculator.",
    relatedArticles: [
      "how-to-calculate-tdee",
      "mifflin-st-jeor-equation-explained",
      "how-much-protein-per-day",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: BMR (basal metabolic rate) estimates the calories your body would use at complete rest. TDEE (total daily energy expenditure) multiplies that resting estimate by an activity factor so walking, work and training are included. Meal planning almost always needs TDEE, not BMR alone. Eating only at BMR while living an active day is a steep cut for many people. The TDEE Calculator shows both numbers side by side so you can see how activity lifts resting burn into a daily target.",
    why:
      "Search results often mix BMR calculators and TDEE calculators as if they answered the same question. Knowing the difference stops you from under-eating on a busy week or over-eating when you assumed resting burn already covered the gym.",
    sections: [
      {
        id: "bmr",
        heading: "What is BMR?",
        paragraphs: [
          "Basal metabolic rate is the estimated energy cost of existing: breathing, circulating blood, repairing cells and keeping temperature stable if you stayed at rest. It is usually the largest single slice of daily expenditure for adults who are not extremely active.",
          "Consumer tools estimate BMR from weight, height, age and sex. Mifflin–St Jeor is a widely used desk-side equation for that job. Lab methods such as indirect calorimetry measure gas exchange; a website cannot do that, so online BMR values remain population-style estimates.",
        ],
      },
      {
        id: "tdee",
        heading: "What is TDEE?",
        paragraphs: [
          "Total daily energy expenditure is the estimated calorie burn across a full day. In the method used here, TDEE equals BMR multiplied by an activity factor. That factor compresses non-exercise movement, planned training and job demands into one number.",
          "When average intake matches TDEE over time, weight tends to hold. A sustained gap below TDEE usually produces loss; a sustained gap above it usually produces gain. That is why TDEE is the practical anchor for maintain, lose and gain targets.",
        ],
      },
      {
        id: "compare",
        heading: "How do BMR and TDEE compare side by side?",
        paragraphs: [
          "BMR answers “what if I rested all day?” TDEE answers “what does a normal day cost?” The second number is almost always higher. The gap is activity, not a second metabolism living inside you.",
        ],
        table: {
          caption: "BMR vs TDEE at a glance",
          headers: ["Question", "BMR", "TDEE"],
          rows: [
            ["What it estimates", "Resting energy", "Full-day energy"],
            ["Includes exercise?", "No", "Yes, via activity factor"],
            ["Typical use", "Understand resting burn", "Set daily calorie targets"],
            ["Relation", "Starting value", "BMR × activity multiplier"],
            ["If used alone for meals", "Often too low for active days", "Better planning anchor"],
          ],
        },
      },
      {
        id: "gap",
        heading: "Why is the gap between BMR and TDEE so large for some people?",
        paragraphs: [
          "A sedentary desk worker might only sit about 20% above BMR (×1.2). Someone who trains hard most days or works a physical job might sit 70–90% above BMR (×1.725 to ×1.9). The resting engine is similar; the day built around it is not.",
          "Non-exercise activity also matters: standing meetings, walking between rooms and fidgeting add up. Calculators cannot see those details, which is one reason two people with the same BMR can need different TDEE labels.",
        ],
      },
      {
        id: "which",
        heading: "Which number should I use for meal planning?",
        paragraphs: [
          "Use TDEE for daily calorie targets. Use BMR to understand how much of that total is “just staying alive.” If you only looked at BMR, you might think a 1,700 kcal resting estimate is your whole budget even though your week includes walks and training that push needs toward 2,400 kcal.",
          "Weight-loss plans still start from TDEE, then subtract a moderate amount—commonly about 500 kcal in planning tools—rather than dropping straight to BMR. Dropping to BMR is a much larger cut and is not the default goal of a maintenance or lifestyle calculator.",
        ],
      },
      {
        id: "rmr",
        heading: "Is RMR the same as BMR?",
        paragraphs: [
          "Resting metabolic rate (RMR) and BMR are related ideas measured under slightly different lab conditions. Everyday articles and apps often use the words loosely. For a browser calculator, what matters is which equation and which activity table it publishes, not the branding of the resting label.",
          "If a device reports “resting calories,” read the manual. Some wearables estimate resting burn and active burn separately; others invent a total that does not match Mifflin–St Jeor. Compare methods before you stack numbers from three apps.",
        ],
      },
      {
        id: "change",
        heading: "How do BMR and TDEE change over time?",
        paragraphs: [
          "Both tend to fall as body weight falls, because a smaller body usually costs less energy to maintain. Ageing slowly lowers resting burn for many adults. Gaining muscle can raise expenditure, though weight alone is what the simple equation sees.",
          "After a long diet, some people notice they need fewer calories than the original TDEE suggested. That can reflect a smaller body, less fidgeting, or adaptive changes. Recalculate, then let a few weeks of scale data confirm the new estimate.",
        ],
      },
      {
        id: "protein",
        heading: "Where does protein fit if I am comparing BMR and TDEE?",
        paragraphs: [
          "Protein targets are usually set from body weight or from a share of goal calories—not from BMR alone. A common educational range for general adults starts near 0.8 g per kilogram of body weight, with higher bands for people who train. Alma’s protein module reports a range so the number feels like a band.",
          "Once TDEE (or a lose/gain offset from it) sets the calorie budget, protein grams can be planned first, with carbohydrate and fat filling the rest. That sequence uses TDEE for energy and body weight for protein, which keeps the two ideas from collapsing into one.",
        ],
      },
      {
        id: "readout",
        heading: "How should I read both numbers on the calculator?",
        paragraphs: [
          "Look at BMR first to sanity-check inputs. A wildly low or high resting value often means height or weight was typed in the wrong units. Then look at TDEE and the highlighted goal line. Maintenance should match TDEE; loss and gain should sit a clear step away.",
          "Copy the results if you want them in a notes app, but keep the activity label written next to the number. A TDEE of 2,400 kcal “moderately active” is not the same plan as 2,400 kcal “extra active” built from a different BMR.",
        ],
      },
    ],
    stepsHeading: "How do I compare BMR and TDEE in practice?",
    steps: [
      {
        title: "Calculate BMR from your measurements",
        body: "Enter sex, age, weight and height on the TDEE Calculator so Mifflin–St Jeor can estimate resting burn.",
      },
      {
        title: "Apply an activity factor for TDEE",
        body: "Choose the level that matches a normal week. TDEE is BMR multiplied by that factor.",
      },
      {
        title: "Plan meals from TDEE, not BMR",
        body: "Use maintain, lose or gain targets tied to TDEE. Keep BMR as context for how large the activity gap is.",
      },
      {
        title: "Recheck after body-weight changes",
        body: "When weight shifts several kilograms, run both numbers again so the resting and daily estimates stay aligned.",
      },
    ],
    examples: [
      {
        title: "Same person, two labels",
        body: "BMR ≈ 1,600 kcal. Sedentary TDEE ≈ 1,920 kcal. Moderately active TDEE ≈ 2,480 kcal. The resting number did not change—the day did.",
      },
      {
        title: "Why BMR-only eating feels harsh",
        body: "Training four days a week on a BMR-only budget leaves little energy for sessions. Starting from TDEE and trimming moderately is the usual planning path.",
      },
      {
        title: "Percentage view of the gap",
        body: "If BMR is 1,800 and TDEE is 2,700, activity accounts for about one third of daily needs. The Percentage Calculator can help if you like that framing.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Different questions",
        body: "BMR is resting cost. TDEE is daily cost. Using the wrong one for meal targets is the main mix-up to avoid.",
      },
      {
        heading: "Estimates only",
        body: "Neither number is a metabolic ward measurement. Refine with weekly averages and professional advice when stakes are high.",
      },
      {
        heading: "Soft safety bound",
        body: "Loss suggestions on this site floored at 1,200 kcal are estimate guards, not personal medical limits.",
      },
      {
        heading: "Shared maths with Alma",
        body: "Alma’s calorie modules use the same Mifflin–St Jeor family of ideas, then add food logging and coaching around the targets.",
      },
    ],
    faqs: [
      {
        question: "Can BMR ever be higher than TDEE in this method?",
        answer:
          "No. TDEE is BMR multiplied by a factor of at least 1.2 here, so the daily estimate stays above resting burn.",
      },
      {
        question: "If I rest all weekend, should I eat at BMR those days?",
        answer:
          "Most people still use a weekly TDEE average rather than swinging intake wildly day to day. Large swings are hard to sustain and easy to mis-count.",
      },
      {
        question: "Does a higher BMR mean a faster metabolism in everyday speech?",
        answer:
          "A higher estimated BMR usually means a larger or younger body in the equation’s terms. It is not a moral grade and it is not a full medical assessment.",
      },
      {
        question: "Should fat-loss ads that quote only BMR worry me?",
        answer:
          "Be cautious. Planning from resting burn alone often understates needs. Prefer tools that show TDEE and the activity assumption beside it.",
      },
      {
        question: "Is desk-job TDEE always sedentary?",
        answer:
          "Not if you train regularly. Many desk workers fit lightly or moderately active when they exercise several days each week.",
      },
      {
        question: "How do I explain BMR vs TDEE to a friend in one sentence?",
        answer:
          "BMR is the fuel to stay alive at rest; TDEE is that fuel plus the cost of the life you actually live.",
      },
      {
        question: "Do thermic effects of food appear as a separate line?",
        answer:
          "Not on this calculator. Digestion cost is folded into the overall estimate rather than listed as its own editable field.",
      },
      {
        question: "Can medications change the BMR–TDEE relationship?",
        answer:
          "Health conditions and medications can change energy needs in ways a form cannot see. Use online numbers only as a starting point and ask a clinician when relevant.",
      },
      {
        question: "Why show both numbers if I only track TDEE?",
        answer:
          "Seeing BMR makes the activity multiplier understandable and helps catch unit mistakes that would otherwise look like a mysterious TDEE.",
      },
      {
        question: "Where can I practise the full calculation next?",
        answer:
          "Follow the how to calculate TDEE guide, then run your numbers on the TDEE Calculator and optionally log food in Alma.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "See your BMR and TDEE together in the free ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Walk through the full method in ",
        linkLabel: "how to calculate TDEE",
        href: "/guides/how-to-calculate-tdee",
        after: ".",
      },
      {
        before: "Read the resting equation in ",
        linkLabel: "Mifflin–St Jeor equation explained",
        href: "/guides/mifflin-st-jeor-equation-explained",
        after: ".",
      },
      {
        before: "Convert height or weight units with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
    ],
    sources: [
      {
        label: "Mifflin MD et al. – Resting energy expenditure equation (PubMed)",
        href: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
    ],
  },
};

const mifflinExplained: ToolGuide = {
  article: toolGuideArticle({
    slug: "mifflin-st-jeor-equation-explained",
    title: "Mifflin–St Jeor Equation Explained with a Worked Example",
    primaryKeyword: "mifflin st jeor equation",
    secondaryKeywords: [
      "mifflin st jeor formula",
      "mifflin st jeor bmr",
      "how to use mifflin st jeor",
      "resting energy expenditure equation",
      "mifflin equation calories",
    ],
    toolSlug: "tdee-calculator",
    siblingToolSlugs: ["alma-ai-nutrition-coach", "age-calculator", "unit-converter"],
    metaTitle: "Mifflin–St Jeor Equation Explained with Example",
    metaDescription:
      "See the Mifflin–St Jeor BMR formulas for men and women, a full worked example, how activity turns BMR into TDEE, and the limits of any desk-side equation.",
    excerpt:
      "Mifflin–St Jeor estimates resting calorie burn from weight, height, age and sex. This guide unpacks both formulas, shows the arithmetic and explains how calculators use the result.",
    relatedArticles: [
      "how-to-calculate-tdee",
      "bmr-vs-tdee-explained",
      "calorie-deficit-explained",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the Mifflin–St Jeor equation estimates basal metabolic rate from body weight, height, age and sex. For men it is 10×kg + 6.25×cm − 5×age + 5. For women it is 10×kg + 6.25×cm − 5×age − 161. Multiply that BMR by an activity factor to estimate TDEE. Tools Star Hub’s TDEE Calculator and Alma’s calorie modules use this equation family in the browser. It is a strong desk-side estimate for many adults, not a substitute for clinical calorimetry or personalised medical advice.",
    why:
      "Knowing the formula stops the calculator from feeling like a black box. When you can redo the arithmetic on paper, you catch unit mistakes faster and you understand why two people with the same weight can still land on different BMR values.",
    sections: [
      {
        id: "origin",
        heading: "Where does the Mifflin–St Jeor equation come from?",
        paragraphs: [
          "Mifflin and colleagues published a predictive equation for resting energy expenditure in healthy individuals in The American Journal of Clinical Nutrition in 1990. The work compared measured resting expenditure with predictions based on easily collected anthropometrics.",
          "Consumer tools adopted the equation because it needs only weight, height, age and sex—no body-fat device required. Later comparisons often find it among the better simple options for many adults, while still warning that individual error remains meaningful. That mix of convenience and relative accuracy is why Tools Star Hub documents the formula instead of hiding it behind a branded black box.",
        ],
      },
      {
        id: "formulas",
        heading: "What are the exact formulas?",
        paragraphs: [
          "Weight enters in kilograms, height in centimetres and age in years. Sex selects which constant closes the equation. The Tools Star Hub calculators accept imperial inputs by converting pounds and inches first, then applying the metric form.",
        ],
        table: {
          caption: "Mifflin–St Jeor BMR formulas",
          headers: ["Group", "Formula (kcal/day)"],
          rows: [
            ["Men", "10×weight(kg) + 6.25×height(cm) − 5×age(years) + 5"],
            ["Women", "10×weight(kg) + 6.25×height(cm) − 5×age(years) − 161"],
          ],
        },
      },
      {
        id: "worked",
        heading: "Worked example with the male formula",
        paragraphs: [
          "Use 80 kg, 180 cm and age 30. Compute 10×80 = 800. Compute 6.25×180 = 1,125. Compute 5×30 = 150. Then 800 + 1,125 − 150 + 5 = 1,780 kcal. That is the estimated BMR.",
          "If the same person is sedentary, TDEE ≈ 1,780 × 1.2 = 2,136 kcal. If moderately active, TDEE ≈ 1,780 × 1.55 ≈ 2,759 kcal. The equation itself only produced the resting piece; the multiplier chose the daily piece.",
        ],
      },
      {
        id: "female",
        heading: "Worked sketch with the female formula",
        paragraphs: [
          "Take 65 kg, 165 cm and age 28. Compute 10×65 = 650. Compute 6.25×165 = 1,031.25. Compute 5×28 = 140. Then 650 + 1,031.25 − 140 − 161 = 1,380.25 kcal, which tools typically round for display.",
          "Multiplying by 1.375 for a lightly active week lands near 1,898 kcal of TDEE. Always re-check with the calculator rather than memorising one screenshot, especially after weight changes.",
        ],
      },
      {
        id: "why-terms",
        heading: "Why do weight, height, age and sex appear?",
        paragraphs: [
          "Heavier and taller bodies generally contain more metabolically active tissue, so those terms raise the estimate. Age enters with a minus sign because resting expenditure tends to decline across adulthood in group data. The sex-specific constants reflect average differences observed in the derivation samples.",
          "The model is binary. Real people have more diverse biology than two constants can capture. Online tools that use Mifflin–St Jeor are transparent about that limit: they estimate, they do not declare your metabolism settled forever.",
          "If your lived experience diverges a lot from the estimate—persistent unintended loss or gain while logging carefully—treat that as a signal to adjust intake and, when appropriate, to ask a clinician rather than to invent a new personal constant for the equation.",
        ],
      },
      {
        id: "vs-harris",
        heading: "How does Mifflin–St Jeor differ from older equations?",
        paragraphs: [
          "Older popular equations such as Harris–Benedict also predict resting expenditure from anthropometrics, but they were derived from earlier samples and different methods. Many modern consumer calculators prefer Mifflin–St Jeor for general adult estimates.",
          "You do not need to run three equations and average them. Pick one published method, learn its activity table, and judge it against your own multi-week outcomes. Switching formulas every few days creates noise that looks like “metabolism chaos.”",
        ],
      },
      {
        id: "units",
        heading: "How do unit mistakes break the equation?",
        paragraphs: [
          "Entering 180 as kilograms when you meant 180 pounds, or typing height as 70 centimetres when you meant 70 inches, produces nonsense BMR values. Convert first. The Unit Converter and a careful read of the metric/imperial toggle prevent most of those errors.",
          "Age should be whole years for this equation. If you are days away from a birthday and want precision, confirm the value with the Age Calculator, then type the year count the form expects.",
        ],
      },
      {
        id: "after",
        heading: "What happens after BMR is known?",
        paragraphs: [
          "Activity multipliers turn BMR into TDEE. Maintain calories equal TDEE. Planning tools may subtract about 500 kcal for gradual loss or add about 300 kcal for a modest surplus. Suggested macros then split goal calories into protein, carbohydrate and fat percentages or into grams-per-kilogram protein targets.",
          "Alma reuses the same resting-energy idea inside a broader nutrition workspace: food logging, micronutrient references and an educational coach. The equation is the shared foundation; the surrounding tools decide how you act on it.",
          "When you change only the activity label, BMR stays put and TDEE moves. When you change weight, both BMR and TDEE move. Watching which input you edited helps you interpret a new result instead of assuming your metabolism suddenly flipped overnight.",
        ],
      },
      {
        id: "limits",
        heading: "What can the equation not see?",
        paragraphs: [
          "Muscle mass distribution, thyroid status, certain medications, recovery from illness, extreme ambient temperatures and adaptive changes after long dieting do not appear as fields. Two adults with identical inputs can still differ by hundreds of calories in measured resting expenditure.",
          "Very low suggested intakes are inappropriate for many people. This site floors aggressive loss estimates at 1,200 kcal as a soft display bound. Adolescents, pregnant people and anyone with clinical concerns need professional guidance rather than equation-only planning.",
        ],
      },
    ],
    stepsHeading: "How do I apply Mifflin–St Jeor safely?",
    steps: [
      {
        title: "Gather metric measurements",
        body: "Convert weight to kilograms and height to centimetres, or let the calculator convert imperial inputs for you.",
      },
      {
        title: "Select the matching sex constant",
        body: "Use +5 at the end for the male formula or −161 for the female formula as published for this equation.",
      },
      {
        title: "Compute BMR, then multiply by activity",
        body: "Write the resting value first. Only then apply 1.2–1.9 so you never confuse BMR with TDEE.",
      },
      {
        title: "Validate in the TDEE Calculator",
        body: "Enter the same inputs online to confirm arithmetic, then adjust after two weeks of real-world feedback.",
      },
    ],
    examples: [
      {
        title: "Male sedentary path",
        body: "80 kg, 180 cm, age 30 → BMR 1,780 kcal → ×1.2 → TDEE ≈ 2,136 kcal.",
      },
      {
        title: "Imperial conversion first",
        body: "140 lb and 5′6″ become kilograms and centimetres before any Mifflin term is evaluated.",
      },
      {
        title: "Same BMR, higher activity",
        body: "Keeping BMR fixed while moving from ×1.2 to ×1.55 raises TDEE by hundreds of calories without changing resting burn.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Published constants",
        body: "Do not invent new end constants. The +5 and −161 values are part of the equation’s definition.",
      },
      {
        heading: "Rounding",
        body: "Calculators may round to whole kilocalories. A difference of one or two kcal is not meaningful for planning.",
      },
      {
        heading: "Educational framing",
        body: "Equation outputs support education and planning, not diagnosis or guaranteed rates of weight change.",
      },
      {
        heading: "Official paper",
        body: "The original American Journal of Clinical Nutrition article is indexed on PubMed for readers who want the primary source.",
      },
    ],
    faqs: [
      {
        question: "Do I multiply by 10 before or after converting pounds to kilograms?",
        answer:
          "Convert to kilograms first, then multiply by 10. Applying 10 to pounds and converting later breaks the formula.",
      },
      {
        question: "Is height entered in metres or centimetres?",
        answer:
          "Centimetres in the standard Mifflin–St Jeor statement used here. One metre eighty is 180 cm, not 1.80 as the height term.",
      },
      {
        question: "Can teenagers use Mifflin–St Jeor from a website?",
        answer:
          "Online adult equations are a poor stand-alone plan for adolescents. Growing bodies need clinical or dietetic guidance.",
      },
      {
        question: "Does the equation include the calories I burn at the gym?",
        answer:
          "No. Gym and job costs enter only when you multiply BMR by an activity factor to estimate TDEE.",
      },
      {
        question: "Why is the female constant subtracted rather than added?",
        answer:
          "That is how the published predictive equation was fitted to its sample. It is an empirical constant, not a judgement about individuals.",
      },
      {
        question: "Should I average Mifflin–St Jeor with another formula?",
        answer:
          "Usually no. Averaging unrelated equations can hide assumptions. Stay with one method while you gather outcome data.",
      },
      {
        question: "How precise should my weight be for the equation?",
        answer:
          "A consistent morning weight to the nearest 0.1–0.5 kg is enough. Obsessing over meal-to-meal scale noise does not improve the estimate.",
      },
      {
        question: "Can I rearrange the formula to solve for target weight?",
        answer:
          "Not usefully for fat-loss planning. Change intake and activity from a current TDEE, then recalculate BMR as weight changes.",
      },
      {
        question: "Does Alma use a different resting equation?",
        answer:
          "Alma’s calorie, BMR and TDEE modules follow the same Mifflin–St Jeor approach described for the dedicated TDEE Calculator.",
      },
      {
        question: "Where can I read the primary research citation?",
        answer:
          "Search PubMed for the 1990 Mifflin resting energy expenditure paper, or use the PubMed link in the sources below.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Apply Mifflin–St Jeor with activity multipliers in the free ",
      linkLabel: "TDEE Calculator",
      href: "/tools/tdee-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Put the equation into a full daily method via ",
        linkLabel: "how to calculate TDEE",
        href: "/guides/how-to-calculate-tdee",
        after: ".",
      },
      {
        before: "Separate resting and daily totals in ",
        linkLabel: "BMR vs TDEE explained",
        href: "/guides/bmr-vs-tdee-explained",
        after: ".",
      },
      {
        before: "Confirm age in whole years with the ",
        linkLabel: "Age Calculator",
        href: "/tools/age-calculator",
        after: ".",
      },
    ],
    sources: [
      {
        label: "Mifflin MD et al. 1990 – PubMed record",
        href: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      },
      {
        label: "NIH Office of Dietary Supplements – Dietary Reference Intakes",
        href: "https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx",
      },
    ],
  },
};

const proteinPerDay: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-much-protein-per-day",
    title: "How Much Protein Per Day? Ranges by Goal and Body Weight",
    primaryKeyword: "how much protein per day",
    secondaryKeywords: [
      "daily protein intake",
      "protein per kg body weight",
      "protein calculator grams",
      "protein for muscle and fat loss",
      "how to estimate protein needs",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "unit-converter", "percentage-calculator"],
    metaTitle: "How Much Protein Per Day? Goal-Based Gram Ranges",
    metaDescription:
      "Estimate daily protein with g/kg ranges for general health, training and strength goals, then fit those grams inside your calorie budget.",
    excerpt:
      "Daily protein needs depend on body weight and goal. This guide explains common educational ranges, how to convert them into grams and how they sit beside TDEE-based calorie targets.",
    relatedArticles: [
      "calorie-deficit-explained",
      "how-to-calculate-tdee",
      "bmr-vs-tdee-explained",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a widely cited general adult starting point is about 0.8 grams of protein per kilogram of body weight per day. People who train often use about 1.2–1.6 g/kg, and many strength or fat-loss plans use about 1.6–2.2 g/kg. Those bands are educational estimates, not medical prescriptions. Alma’s Protein Calculator turns weight and a goal into a gram range and midpoint, while the TDEE Calculator can also express protein as a share of calorie targets. Spread intake across meals from everyday foods rather than chasing a single shake.",
    why:
      "Protein questions dominate nutrition search because the nutrient supports muscle repair, satiety and food quality—yet the “right” number changes with body size and training. A clear range beats a viral one-size gram count that ignores whether you weigh 55 kg or 95 kg.",
    sections: [
      {
        id: "what",
        heading: "What does daily protein intake actually measure?",
        paragraphs: [
          "Protein is a macronutrient that provides about 4 kcal per gram. Daily intake usually means the total grams you eat across breakfast, lunch, dinner and snacks. Those grams come from foods such as eggs, yogurt, fish, poultry, tofu, lentils, cottage cheese and packaged products with a Nutrition Facts label.",
          "Unlike vitamins, protein contributes meaningful energy, so raising protein inside a fixed calorie budget means carbohydrate, fat or both must fall. That trade-off is why protein planning and calorie planning belong together.",
        ],
      },
      {
        id: "ranges",
        heading: "Which gram-per-kilogram ranges does Alma show?",
        paragraphs: [
          "Alma reports a range rather than a single magic number. A common general adult band starts near 0.8 g/kg. Regular training often sits near 1.2–1.6 g/kg. Strength or fat-loss focused plans frequently use about 1.6–2.2 g/kg to help preserve lean mass while calories change.",
        ],
        table: {
          caption: "Educational protein bands used on Alma",
          headers: ["Goal style", "Approx. g/kg", "Example for 80 kg"],
          rows: [
            ["General adult starting range", "~0.8", "~64 g"],
            ["Regular training", "~1.2–1.6", "~96–128 g"],
            ["Strength / fat-loss emphasis", "~1.6–2.2", "~128–176 g"],
          ],
        },
      },
      {
        id: "example",
        heading: "How do I convert body weight into grams?",
        paragraphs: [
          "Convert body weight to kilograms if needed, choose a goal band, then multiply. An 80 kg adult using 1.6–2.2 g/kg lands near 128–176 g of protein. A 60 kg adult using 1.2–1.6 g/kg lands near 72–96 g. Alma shows the minimum, maximum and a midpoint so the target feels like a band you can live inside.",
          "If your scale reads pounds, convert once with the Unit Converter or Alma’s imperial toggle. Multiplying 176 lb directly by 1.6 as if it were kilograms will overshoot badly.",
        ],
      },
      {
        id: "calories",
        heading: "How does protein fit inside a calorie budget?",
        paragraphs: [
          "First estimate daily energy with BMR and TDEE, then decide whether you are maintaining, losing or gaining. Next place protein grams. Finally fill remaining calories with carbohydrate and fat. Example: a 2,000 kcal day that uses 150 g of protein (600 kcal) leaves 1,400 kcal for carbohydrate and fat.",
          "Percentage templates are another route. A balanced 30/40/30 split on 2,000 kcal is 600 kcal protein (150 g), 800 kcal carbohydrate (200 g) and 600 kcal fat (about 67 g). Use whichever framing you can stick with; both are maps, not laws.",
        ],
      },
      {
        id: "deficit",
        heading: "Why do fat-loss plans often raise protein?",
        paragraphs: [
          "During a calorie deficit, the body can lose fat and some lean mass. Higher protein intakes, paired with resistance training, are a common educational strategy to protect muscle while energy is restricted. That is one reason strength and fat-loss bands sit above the general starting range.",
          "Raising protein does not cancel a deficit by itself. Total calories still drive the bulk of weight change. Protein is a supporting lever for hunger control and tissue quality inside that energy gap. Read the calorie deficit guide for the energy side of the same plan.",
        ],
      },
      {
        id: "spread",
        heading: "Should all protein arrive in one meal?",
        paragraphs: [
          "Spreading protein across meals is usually easier on digestion and appetite than forcing most of it into one sitting. A practical pattern is a clear protein food at breakfast, lunch and dinner, with optional snacks if the daily total still falls short.",
          "You do not need perfect even splits. Hitting the daily gram band most days matters more than timing every gram to a stopwatch. Alma’s food tracker helps you see running totals as you log meals.",
        ],
      },
      {
        id: "foods",
        heading: "How do I hit the grams with ordinary foods?",
        paragraphs: [
          "Build a short list of proteins you actually eat. Eggs, Greek yogurt, milk, fish, chicken, lean beef, tofu, tempeh, lentils, beans and cottage cheese cover most kitchens. Packaged foods contribute whatever the label lists per serving—check serving size before you double a bar or shake.",
          "Plant-focused eaters can combine legumes, soy foods, grains and seeds across the day. The tracker’s sample foods and Open Food Facts search exist so you are not guessing every gram from memory.",
        ],
      },
      {
        id: "labels",
        heading: "How do Nutrition Facts labels help?",
        paragraphs: [
          "FDA-style Nutrition Facts panels list protein grams for a labelled serving. If you eat two servings, double the protein. If a listing is per 100 g and you ate 150 g, scale by 1.5. Alma’s custom food entry is built for that label copying workflow.",
          "USDA FoodData Central is an official reference when you want published nutrient data for generic foods. Community databases and labels still need portion honesty; the database cannot see the oil you poured while cooking.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits of online protein targets?",
        paragraphs: [
          "Kidney disease, certain metabolic conditions and clinical diets can change protein advice entirely. Website ranges assume a generally healthy adult context and cannot replace a clinician or registered dietitian.",
          "More protein is not always better. Extremely high intakes that crowd out plants, fibre and micronutrients can make overall diet quality worse even if the protein line looks impressive. Balance the plate, then check the gram total.",
        ],
      },
    ],
    stepsHeading: "How do I set a daily protein target?",
    steps: [
      {
        title: "Weigh yourself and convert to kilograms",
        body: "Use a consistent morning weight. Convert pounds if needed so grams-per-kilogram maths stays honest.",
      },
      {
        title: "Choose an educational goal band",
        body: "Start near 0.8 g/kg for general needs, or higher bands if you train or are in a fat-loss phase—without treating the top of the band as mandatory.",
      },
      {
        title: "Calculate the gram range in Alma",
        body: "Open the Protein Calculator on Alma to see minimum, maximum and midpoint grams for your inputs.",
      },
      {
        title: "Fit protein inside calories and log meals",
        body: "Align the grams with your TDEE-based budget, then track foods for several days before raising the target again.",
      },
    ],
    examples: [
      {
        title: "80 kg strength band",
        body: "1.6–2.2 g/kg → about 128–176 g per day, with a midpoint near 152 g.",
      },
      {
        title: "Percentage view on 2,000 kcal",
        body: "30% protein is 600 kcal, which is 150 g—useful when you prefer splits over grams per kilogram.",
      },
      {
        title: "Label scaling",
        body: "A yogurt listing 15 g protein per 170 g serving contributes 15 g if you eat one cup of that size, not the whole multipack.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Ranges beat single numbers",
        body: "A band absorbs day-to-day variation better than a brittle target that ruins morale when you miss it by 5 g.",
      },
      {
        heading: "Calories still count",
        body: "Protein sits inside an energy budget set by TDEE and your maintain, lose or gain decision.",
      },
      {
        heading: "Not medical advice",
        body: "Clinical conditions can override these educational ranges. Ask a qualified professional when needed.",
      },
      {
        heading: "Food first",
        body: "Everyday foods can meet most targets. Supplements are optional helpers, not requirements of the maths.",
      },
    ],
    faqs: [
      {
        question: "Is 0.8 g/kg a hard ceiling for healthy adults?",
        answer:
          "No. It is a common general starting reference. Many active people intentionally eat more within higher educational bands.",
      },
      {
        question: "Do I count plant and animal protein the same in the tracker?",
        answer:
          "For gram totals, yes—the tracker sums labelled protein grams. Overall diet quality still depends on the foods those grams come from.",
      },
      {
        question: "What if my calorie budget is too small for my protein band?",
        answer:
          "That tension means the deficit may be too aggressive or the protein band too high for that day. Raise calories slightly or choose a mid-band target you can fund.",
      },
      {
        question: "Does protein timing after workouts matter more than the daily total?",
        answer:
          "For most people the daily total and consistency matter more than a narrow post-workout window. A protein-rich meal near training is still a practical habit.",
      },
      {
        question: "Can I estimate protein without a food scale?",
        answer:
          "Yes, using labelled servings and household measures, accepting more error. A scale improves accuracy when progress stalls.",
      },
      {
        question: "How does Alma differ from the TDEE Calculator on protein?",
        answer:
          "The TDEE Calculator suggests macros as a percentage of goal calories. Alma can also set protein from grams per kilogram and log foods against that target.",
      },
      {
        question: "Should children use adult g/kg bands from this guide?",
        answer:
          "No. Growing children and teens need age-appropriate guidance from caregivers and clinicians, not adult website ranges.",
      },
      {
        question: "Is there an official single government number for athletes?",
        answer:
          "Public dietary reference materials focus on baseline adequacy for the general population. Athletic targets are usually coaching or clinical judgements layered on top.",
      },
      {
        question: "What if Open Food Facts protein looks wrong?",
        answer:
          "Community data can be incomplete. Prefer the package label when you have it, or enter a custom food with the printed numbers.",
      },
      {
        question: "Where should I read about deficits after setting protein?",
        answer:
          "Use the calorie deficit explained guide, then keep logging in Alma so protein and energy stay visible together.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Set a protein gram range and log meals in ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Estimate daily energy with the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Understand energy gaps in ",
        linkLabel: "calorie deficit explained",
        href: "/guides/calorie-deficit-explained",
        after: ".",
      },
      {
        before: "Convert pounds and kilograms with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
    ],
    sources: [
      {
        label: "NIH ODS – Dietary Reference Intakes",
        href: "https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx",
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

const calorieDeficit: ToolGuide = {
  article: toolGuideArticle({
    slug: "calorie-deficit-explained",
    title: "Calorie Deficit Explained: How Energy Gaps Drive Fat Loss",
    primaryKeyword: "calorie deficit explained",
    secondaryKeywords: [
      "what is a calorie deficit",
      "500 calorie deficit",
      "safe calorie deficit planning",
      "deficit vs tdee",
      "weight loss calorie gap",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["tdee-calculator", "percentage-calculator", "unit-converter"],
    metaTitle: "Calorie Deficit Explained: Energy Gaps for Fat Loss",
    metaDescription:
      "A calorie deficit means eating below TDEE over time. See how a ~500 kcal planning gap works, why floors matter and how to monitor progress carefully.",
    excerpt:
      "Fat loss usually needs a sustained gap between intake and total daily energy expenditure. This guide explains deficits in plain language, with planning maths and safety context.",
    relatedArticles: [
      "how-to-calculate-tdee",
      "how-much-protein-per-day",
      "bmr-vs-tdee-explained",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a calorie deficit means your average intake sits below your total daily energy expenditure (TDEE) over time. Fat stores then cover part of the gap. A common planning deficit is about 500 kcal per day, often associated with roughly half a kilogram of fat loss per week when adherence is careful—though real results vary. Tools Star Hub’s TDEE Calculator and Alma subtract about 500 kcal from TDEE for loss targets and floor suggestions at 1,200 kcal as a soft safety bound for the estimate only. Deficits are educational planning tools, not medical prescriptions.",
    why:
      "People hear “eat less” without knowing less than what. Anchoring the gap to a personal TDEE estimate turns a vague slogan into a number you can test for two weeks, then adjust with evidence instead of panic.",
    sections: [
      {
        id: "definition",
        heading: "What is a calorie deficit in practical terms?",
        paragraphs: [
          "If TDEE estimates how many calories you burn in a day, a deficit is the shortfall when intake averages below that number. The body can cover the shortfall by using stored energy, including fat. A surplus is the opposite pattern and tends to increase stored energy over time.",
          "Day-to-day weight still wiggles with water, glycogen and gut contents. The deficit idea applies to multi-day and multi-week averages, not to whether Tuesday’s dinner was “perfect.”",
        ],
      },
      {
        id: "maths",
        heading: "How do calculators build a loss target from TDEE?",
        paragraphs: [
          "First they estimate BMR, then multiply by an activity factor for TDEE. Maintenance calories equal TDEE. A loss line subtracts a planning amount—about 500 kcal on Tools Star Hub—while a gain line adds about 300 kcal.",
        ],
        table: {
          caption: "Example planning offsets from TDEE",
          headers: ["Goal", "Offset from TDEE", "Example if TDEE is 2,300"],
          rows: [
            ["Maintain", "0", "2,300 kcal"],
            ["Lose (planning)", "about −500 kcal", "about 1,800 kcal"],
            ["Gain (planning)", "about +300 kcal", "about 2,600 kcal"],
            ["Soft loss floor on this site", "not below 1,200 kcal", "estimate guard only"],
          ],
        },
      },
      {
        id: "why-500",
        heading: "Why do so many plans mention 500 kcal?",
        paragraphs: [
          "A round 500 kcal daily gap is a classic teaching figure because it is large enough to matter and small enough that many adults can still train and think clearly. Rough energy rules of thumb link about 3,500 kcal to around half a kilogram of body fat, so seven days near a 500 kcal gap is often introduced as an approximate weekly pace—not a guarantee.",
          "Your measured pace can be slower or faster. Water shifts, weekend variance, underestimated bites and adaptive changes all blur the tidy arithmetic. Use 500 kcal as a starting template, then let the weekly scale average edit the plan.",
        ],
      },
      {
        id: "floor",
        heading: "What does the 1,200 kcal floor mean here?",
        paragraphs: [
          "On Tools Star Hub, suggested loss calories will not display below 1,200 kcal. That soft bound exists so the estimate screen does not cheerlead extremely low targets. It is not personal medical clearance, and it does not mean 1,200 kcal is appropriate for every adult.",
          "Many people need higher intakes to sustain training, hormones and daily life. Adolescents, pregnant people and anyone with a history of disordered eating should not run aggressive deficits from a website. Seek clinical care instead.",
        ],
      },
      {
        id: "protein",
        heading: "How should protein change inside a deficit?",
        paragraphs: [
          "Keeping protein relatively high within your calorie budget is a common educational strategy during fat loss. Alma’s strength and fat-loss protein bands (about 1.6–2.2 g/kg) exist partly for that reason. Protein-rich meals can improve satiety while resistance training helps signal the body to keep muscle.",
          "Still, protein cannot invent a deficit if intake matches TDEE. Set energy first, place protein second, then fill carbohydrate and fat in ways you can repeat on workdays.",
        ],
      },
      {
        id: "track",
        heading: "How do I monitor whether the deficit is real?",
        paragraphs: [
          "Track a weekly average of morning weight, how clothes fit, training performance and hunger. If weight is stable for three weeks while you believed you were 500 kcal down, intake is probably higher than logged, expenditure lower than labelled, or both.",
          "Alma’s food tracker and dashboard make the intake side visible. The TDEE Calculator makes the expenditure assumption visible. Comparing those two honest numbers beats guessing from a single blurry gym mirror photo.",
        ],
      },
      {
        id: "plateaus",
        heading: "What should I do when progress stalls?",
        paragraphs: [
          "First verify logging quality for a week: oils, drinks and weekend meals are usual blind spots. Next confirm the activity label still matches your life. Only then consider a small intake reduction or a small activity increase—one change at a time.",
          "Recalculate TDEE after meaningful weight loss. A lighter body often needs fewer calories at the same activity description, so an old loss target can quietly become maintenance.",
        ],
      },
      {
        id: "aggressive",
        heading: "Are bigger deficits always faster in a good way?",
        paragraphs: [
          "Larger gaps can increase the rate of weight loss on paper, but they also raise the risk of muscle loss, training collapse, nutrient gaps and rebound eating. Extremely low targets are not a badge of discipline.",
          "CDC healthy-weight guidance emphasises sustainable habits over crash approaches. A moderate deficit you can hold for months usually beats a severe deficit you abandon in nine days.",
        ],
      },
      {
        id: "surplus-note",
        heading: "How is a deficit different from a surplus?",
        paragraphs: [
          "A surplus places intake above TDEE and is used when the aim is to gain weight, often alongside strength training. Tools Star Hub uses a modest +300 kcal planning surplus so gain stays controlled compared with unrestricted eating.",
          "You generally should not run a fat-loss deficit and a muscle-gain surplus in the same week on purpose. Pick the primary goal for a training block, then switch later. Whiplash goals confuse both the scale and your habits.",
        ],
      },
    ],
    stepsHeading: "How do I set a calorie deficit with these tools?",
    steps: [
      {
        title: "Estimate TDEE honestly",
        body: "Enter current stats and a typical-week activity level on the TDEE Calculator or Alma’s calorie modules.",
      },
      {
        title: "Choose a moderate loss offset",
        body: "Start near a 500 kcal gap unless a clinician has given different instructions. Respect the 1,200 kcal soft floor on-screen.",
      },
      {
        title: "Set protein and log food",
        body: "Place a sensible protein band, then track meals in Alma so the planned gap matches what you actually eat.",
      },
      {
        title: "Review weekly, not hourly",
        body: "Use weekly weight averages and energy levels to decide whether to hold, raise or slightly lower intake.",
      },
    ],
    examples: [
      {
        title: "Desk worker starting point",
        body: "TDEE ≈ 2,200 kcal. Loss target ≈ 1,700 kcal. Pair with a mid-range protein band and three solid meals.",
      },
      {
        title: "When the floor engages",
        body: "If TDEE − 500 would fall under 1,200 kcal, this site’s loss line stops at 1,200 and you should seek personal advice before going lower.",
      },
      {
        title: "Percentage framing",
        body: "A 500 kcal cut from 2,500 kcal is a 20% energy reduction. The Percentage Calculator can illustrate that share if you like relative views.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Averages over single days",
        body: "Deficits are judged across weeks. One high-sodium meal that adds water weight is not “failed maths.”",
      },
      {
        heading: "Soft floor ≠ personal prescription",
        body: "The 1,200 kcal display bound protects the estimate UI. Your appropriate intake may be higher.",
      },
      {
        heading: "Training and sleep",
        body: "Poor sleep and skipped lifting sessions can make a paper deficit feel harsher and less effective.",
      },
      {
        heading: "Educational only",
        body: "This content does not diagnose metabolic disease or authorise clinical very-low-calorie diets.",
      },
    ],
    faqs: [
      {
        question: "Is a calorie deficit required for fat loss?",
        answer:
          "Over time, losing stored fat requires expenditure to exceed intake on average. How you create that gap—food changes, activity changes or both—can vary.",
      },
      {
        question: "Can I build a deficit only by exercising more?",
        answer:
          "Sometimes, but appetite often rises with activity and wearables can mis-count burn. Many people combine a modest intake gap with realistic movement.",
      },
      {
        question: "Does eating back every workout calorie cancel the deficit?",
        answer:
          "It can. If you add estimated exercise calories on top of an already activity-adjusted TDEE, you may double-count and erase the planned gap.",
      },
      {
        question: "How small a deficit still counts?",
        answer:
          "Even 200–300 kcal can work if it is consistent. Smaller gaps move slower but are often easier to live with.",
      },
      {
        question: "Why did the scale rise during an apparent deficit?",
        answer:
          "Water, glycogen, late meals and menstrual cycle shifts can hide fat loss for days. Trust weekly averages more than one weigh-in.",
      },
      {
        question: "Should maintenance days be planned on purpose?",
        answer:
          "Some people insert higher-calorie days for adherence or training. Keep the weekly average in a deficit if fat loss remains the goal.",
      },
      {
        question: "Can Alma’s coach prescribe how large my deficit should be?",
        answer:
          "No. The coach is educational. It can explain concepts and comment on logs, but it does not replace a clinician’s plan.",
      },
      {
        question: "Is a deficit the same as detoxing or fasting trends?",
        answer:
          "No. A deficit is simply an energy gap. It does not require juice-only days, toxin myths or abandoning protein and plants.",
      },
      {
        question: "How often should I recalculate TDEE during a cut?",
        answer:
          "After several kilograms of loss, or whenever routine activity changes, recalculate so the deficit remains tied to your current body.",
      },
      {
        question: "What should I read next after this explanation?",
        answer:
          "Review how to calculate TDEE, set protein with the protein guide, then run numbers in the TDEE Calculator and Alma.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Plan calories, protein and food logs together in ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Build the expenditure number with the ",
        linkLabel: "TDEE Calculator",
        href: "/tools/tdee-calculator",
        after: ".",
      },
      {
        before: "Step through the method in ",
        linkLabel: "how to calculate TDEE",
        href: "/guides/how-to-calculate-tdee",
        after: ".",
      },
      {
        before: "Set gram targets via ",
        linkLabel: "how much protein per day",
        href: "/guides/how-much-protein-per-day",
        after: ".",
      },
    ],
    sources: [
      {
        label: "CDC – Losing Weight",
        href: "https://www.cdc.gov/healthy-weight-growth/losing-weight/index.html",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
      {
        label: "FDA – Serving Size on the Nutrition Facts Label",
        href: "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label",
      },
    ],
  },
};

export const batch12Guides: ToolGuide[] = [
  howToTdee,
  bmrVsTdee,
  mifflinExplained,
  proteinPerDay,
  calorieDeficit,
];
