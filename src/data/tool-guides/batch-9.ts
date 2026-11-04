import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const gpaPercent: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-gpa-to-percentage",
    title: "How to Convert GPA to Percentage",
    primaryKeyword: "convert gpa to percentage",
    secondaryKeywords: ["gpa to percentage", "4.0 scale to percent", "what percentage is a 3.5 gpa", "letter grade to gpa", "percentage to gpa"],
    toolSlug: "gpa-calculator",
    siblingToolSlugs: ["percentage-calculator", "average-calculator"],
    metaTitle: "How to Convert GPA to Percentage (4.0 Scale)",
    metaDescription: "No single official formula turns GPA into a percentage. Use the common 4.0 grade bands, check your school's own scale and work out your GPA from letter grades.",
    excerpt: "Applications sometimes ask for a GPA, sometimes for a percentage. This guide explains the common 4.0 grade bands, why no conversion is exact and how to work out your GPA first.",
    relatedArticles: ["cumulative-gpa-vs-semester-gpa", "how-to-calculate-weighted-average", "how-to-find-graduation-year-by-birthday"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: there is no single official formula for turning a GPA into a percentage. The most common US grade bands, as shown by College Board's BigFuture, map an A (90–100%) to 4.0, a B (80–89%) to 3.0, a C (70–79%) to 2.0, a D (66–69%) to 1.0 and an E or F (below 65%) to 0.0. So a 3.0 GPA sits in the B band, roughly 80–89%. To convert accurately, first work out your GPA from letter grades and credits in the GPA Calculator, then read the band from your own school's grading scale, because schools set their own cutoffs.",
    why: "Scholarship forms, study-abroad applications and job portals do not always agree on a scale. Some want a 4.0 GPA, some a percentage and some both. Typing a made-up conversion can look inconsistent with your transcript, so it helps to know which numbers are standard, which are estimates and where the official figure should come from.",
    sections: [
      {
        id: "bands",
        heading: "What are the common GPA and percentage bands?",
        paragraphs: ["BigFuture explains that most US high schools and colleges report grades on a 4.0 scale and shows a typical conversion table from percentage grades to letters and grade points. It also says the conversion is not necessarily a formula, because the exact cutoffs vary from school to school.", "The table below reproduces the main bands. Plus and minus grades sit between these points on many scales, and the GPA Calculator uses one common map for them: A 4.0, A- 3.7, B+ 3.3, B 3.0, B- 2.7, C+ 2.3, C 2.0, C- 1.7, D+ 1.3, D 1.0, D- 0.7 and F 0."],
        table: { caption: "Common 4.0 scale bands (BigFuture)", headers: ["Percentage grade", "Letter", "Grade points"], rows: [["90–100", "A", "4.0"], ["80–89", "B", "3.0"], ["70–79", "C", "2.0"], ["66–69", "D", "1.0"], ["Below 65", "E or F", "0.0"]] },
      },
      {
        id: "why-not-exact",
        heading: "Why can't a GPA be converted exactly?",
        paragraphs: ["A GPA is an average of grade points, not of percentages. Two students with a 3.0 GPA might have very different percentage averages: one could have every course at 85%, another a mix of 95% and 75% grades that average to the same letters. Once grades are turned into letters, the detail inside each band is lost, so you cannot recover an exact percentage from the GPA alone.", "Schools also use different cutoffs. One school's A starts at 90, another's at 93. Weighted GPAs for honours courses can exceed 4.0. That is why an official conversion should come from your school or from the institution asking for the number."],
      },
      {
        id: "first",
        heading: "How do I calculate my GPA before converting?",
        paragraphs: ["Add one row per course in the GPA Calculator with the letter grade and the credits. The tool multiplies each grade's points by the credits, adds the results and divides by total credits. Its output shows the GPA on this 4.0 map, the total credits and the total grade points.", "For example, the default rows are an A for 3 credits, a B for 3 credits and an A- for 4 credits. That gives 12 + 9 + 14.8 = 35.8 grade points over 10 credits, a GPA of 3.58. If your school already gives you grade points, tick the numeric points option and enter values from 0 to 4 instead of letters."],
      },
      {
        id: "reading",
        heading: "How do I read a GPA as a percentage band?",
        paragraphs: ["Find the nearest whole grade. A 3.58 is between a B (3.0) and an A (4.0), and closest to an A- (3.7) on the plus-minus map. On the common bands that suggests mostly high B and A grades, so a percentage average somewhere in the upper 80s is plausible, but that is an estimate, not a conversion.", "When a form insists on a single percentage, use the figure printed on your transcript if there is one. If none is printed, say which scale you used, for example by noting that your school's A band starts at 90%."],
      },
      {
        id: "linear",
        heading: "What about multiplying GPA by 25?",
        paragraphs: ["Some people estimate a percentage by dividing the GPA by 4 and multiplying by 100, which is the same as multiplying by 25. A 3.0 becomes 75% and a 3.58 becomes 89.5%. This is simply the GPA as a share of the maximum, not a grade-band conversion: on the BigFuture bands a 3.0 is a B, which is 80–89%, not 75%.", "Use the multiply-by-25 figure only if the form explicitly asks for GPA as a percentage of the maximum. Otherwise it understates lower GPAs compared with the usual bands."],
      },
      {
        id: "reverse",
        heading: "How do I convert a percentage to GPA?",
        paragraphs: ["Go the other way through letters. Turn each course's percentage into a letter using your school's scale, enter the letters and credits in the GPA Calculator and read the result. For example, courses at 92%, 84% and 76% become A, B and C on the common bands, which gives 4.0, 3.0 and 2.0 grade points.", "With equal credits that averages to 3.0. If the credits differ, the GPA Calculator weights each grade by its credits, which is why converting each course first is more accurate than converting an overall percentage average."],
      },
      {
        id: "weighted",
        heading: "Do weighted GPAs change the conversion?",
        paragraphs: ["Some high schools add extra points for honours, AP or IB classes, so a weighted GPA can be higher than 4.0. A percentage band cannot represent those bonus points, so convert using the unweighted GPA unless the form says otherwise.", "BigFuture also notes that colleges may recalculate GPAs using their own method. Applicants usually report what the transcript shows and let the admissions office apply its rules."],
      },
      {
        id: "averages",
        heading: "Is a 3.0 GPA average?",
        paragraphs: ["BigFuture gives the average high school GPA as about 3.0 and the average college GPA as about 3.1. On the common bands, both sit at a B, roughly 80–89%.", "Averages vary by school and subject, so compare your GPA with the range your target programme reports rather than with a national figure."],
      },
      {
        id: "transcript",
        heading: "Where do I find my school's official scale?",
        paragraphs: ["Most transcripts print a grading key on the back or the last page, listing each letter with its percentage range and grade points. University handbooks and course catalogues usually include the same table, and registrars can confirm it if the key is missing.", "If you studied in several places, convert each school's grades with that school's scale before combining them. A 90% might be an A at one school and an A- at another, so mixing scales without checking can move your GPA by a noticeable amount."],
      },
    ],
    stepsHeading: "How do I convert my GPA to a percentage step by step?",
    steps: [{"title": "Collect your grades", "body": "List each course with its letter grade and credits."}, {"title": "Calculate the GPA", "body": "Enter the rows in the GPA Calculator and read the GPA on its 4.0 map."}, {"title": "Find your school's scale", "body": "Check the transcript key or handbook for the percentage cutoffs."}, {"title": "Match the band", "body": "Read which letter band your GPA falls in, such as B for 3.0."}, {"title": "Report with context", "body": "Give the band or official figure and name the scale you used."}],
    examples: [{"title": "A 3.58 GPA", "body": "The GPA Calculator's default rows give 3.58. That is between B+ and A on the map, closest to A-, so on the common bands it suggests grades mostly in the upper 80s to 90s."}, {"title": "A 3.0 GPA", "body": "A straight-B record is 3.0. On the BigFuture bands that is the 80–89% range; multiplying by 25 would give 75%, which is a different measure."}, {"title": "Percentages to GPA", "body": "Three equal-credit courses at 92%, 84% and 76% become A, B and C, so the GPA is 3.0."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Not official", "body": "Any conversion you make yourself is an estimate unless your school publishes it."}, {"heading": "Plus and minus", "body": "Schools differ on whether A+ counts as 4.0 or more; the calculator uses 4.0 for A."}, {"heading": "Weighted GPA", "body": "Bonus points for advanced classes do not map onto percentage bands."}],
    faqs: [{"question": "Is there an official GPA-to-percentage formula?", "answer": "No. BigFuture shows common bands but notes that the conversion is not necessarily a formula and schools vary."}, {"question": "What percentage is a 4.0 GPA?", "answer": "On the common bands, a 4.0 is an A, which is 90–100%."}, {"question": "What percentage is a 3.0 GPA?", "answer": "A 3.0 is a B, which is 80–89% on the common bands."}, {"question": "What percentage is a 2.0 GPA?", "answer": "A 2.0 is a C, which is 70–79% on the common bands."}, {"question": "Why does multiplying by 25 give a different answer?", "answer": "It expresses GPA as a share of the 4.0 maximum, which is not the same as mapping it to grade bands."}, {"question": "How does the GPA Calculator handle A-?", "answer": "It counts A- as 3.7 grade points on its 4.0 map."}, {"question": "Can I enter grade points instead of letters?", "answer": "Yes. Tick the numeric points option and enter values from 0 to 4."}, {"question": "What is the average GPA?", "answer": "BigFuture gives about 3.0 for high school and about 3.1 for college."}, {"question": "Should I convert a weighted GPA?", "answer": "Usually use the unweighted GPA, because bonus points have no percentage equivalent."}, {"question": "What should I put on an application?", "answer": "Use the number on your transcript, or state the scale you used if you have to convert."}],
    faqMax: 10,
    cta: { before: "Work out your GPA from letter grades with the free", linkLabel: "GPA Calculator", href: "/tools/gpa-calculator", after: "." },
    alsoSee: [{"before": "Compare term and overall grades in", "linkLabel": "Cumulative GPA vs Semester GPA", "href": "/guides/cumulative-gpa-vs-semester-gpa", "after": "."}, {"before": "Learn credit weighting in", "linkLabel": "How to Calculate Weighted Average", "href": "/guides/how-to-calculate-weighted-average", "after": "."}, {"before": "Find any percentage with the", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}],
    sources: [{"label": "How to Convert Your GPA to a 4.0 Scale (College Board BigFuture)", "href": "https://bigfuture.collegeboard.org/plan-for-college/college-basics/how-to-convert-gpa-4.0-scale"}],
  },
};

const rule72: ToolGuide = {
  article: toolGuideArticle({
    slug: "rule-of-72-explained",
    title: "Rule of 72: How Long to Double Your Money",
    primaryKeyword: "rule of 72",
    secondaryKeywords: ["how long to double money", "rule of 72 formula", "doubling time investment", "rule of 72 examples", "compound interest doubling"],
    toolSlug: "compound-interest-calculator",
    siblingToolSlugs: ["savings-goal-calculator", "loan-calculator"],
    metaTitle: "Rule of 72 Explained with Worked Examples",
    metaDescription: "Divide 72 by the annual interest rate to estimate how many years money takes to double. See how close the shortcut is using a compound interest calculator.",
    excerpt: "The rule of 72 is a quick mental shortcut for doubling time. This guide shows the formula, checks it against exact compound interest results and explains where it is less accurate.",
    relatedArticles: ["how-to-calculate-percentage-change", "percentage-points-vs-percent", "how-to-calculate-weighted-average"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: divide 72 by the annual interest rate to estimate how many years it takes money to double with compound interest. At 7.2% a year, 72 ÷ 7.2 = 10 years. Checking that in the Compound Interest Calculator with 10,000 at 7.2% compounded annually for 10 years gives a final balance of 20,042.31, just over double. The SEC's investor.gov describes the rule the same way: a shortcut for estimating how long an investment takes to double at a fixed annual rate of return.",
    why: "Knowing doubling time makes rates easier to compare. A 6% return doubles money in about 12 years, a 3% return in about 24. That gap is hard to feel from the percentages alone. The rule also works in reverse for costs: at a fixed rate, debt and inflation-driven prices double on the same timetable.",
    sections: [
      {
        id: "formula",
        heading: "What is the rule of 72 formula?",
        paragraphs: ["Years to double ≈ 72 ÷ annual rate, with the rate written as a whole number, so 8% is 8, not 0.08. You can also rearrange it: the rate needed to double in a set number of years ≈ 72 ÷ years. To double in 9 years you need about 72 ÷ 9 = 8% a year.", "The rule assumes the rate stays fixed and returns are reinvested, which is what compound interest means. It does not include deposits, withdrawals, fees or taxes. For those, run the full numbers in a calculator."],
      },
      {
        id: "check",
        heading: "How accurate is the rule of 72?",
        paragraphs: ["Close for typical rates. Each row below starts with 10,000 compounded annually for the number of years the rule predicts, using the Compound Interest Calculator. A perfect rule would give exactly 20,000 every time.", "The estimate is within about 1.5% across 3% to 12%. It is slightly generous at low rates, where the money ends up a little over double, and slightly short at high rates, where 12% for 6 years leaves you just under double."],
        table: { caption: "Rule of 72 vs exact compound interest (10,000, annual compounding)", headers: ["Rate", "Rule of 72 years", "Exact balance", "Result"], rows: [["3%", "24", "20,327.94", "A bit over double"], ["6%", "12", "20,121.96", "Just over double"], ["7.2%", "10", "20,042.31", "Almost exactly double"], ["8%", "9", "19,990.05", "Just under double"], ["12%", "6", "19,738.23", "Under double"]] },
      },
      {
        id: "why72",
        heading: "Why 72?",
        paragraphs: ["The exact doubling time with annual compounding is ln 2 ÷ ln(1 + r), and ln 2 is about 0.693. For small rates, ln(1 + r) is close to r, which gives about 69.3 ÷ rate. Using 72 instead nudges the estimate up to fit the most common rates of roughly 6% to 10% better.", "72 is also easy to divide: 2, 3, 4, 6, 8, 9 and 12 go into it evenly. That makes it practical for mental arithmetic, which is the whole point of the shortcut."],
      },
      {
        id: "frequency",
        heading: "Does compounding frequency matter?",
        paragraphs: ["Yes, a little. More frequent compounding grows money slightly faster. In the calculator, 10,000 at 6% for 12 years gives 20,121.96 compounded annually but 20,507.51 compounded monthly. The tool offers annual, semiannual, quarterly, monthly and daily compounding.", "The rule of 72 does not distinguish between them, so treat it as a rough guide. When frequency matters, for a savings account or loan quote, use the calculator with the frequency in the account terms."],
      },
      {
        id: "simple",
        heading: "How is this different from simple interest?",
        paragraphs: ["Simple interest pays only on the original amount, so money does not grow on its earlier gains. At 7.2% simple interest, 10,000 earns 720 a year and is 17,200 after 10 years, not doubled. Simple interest takes 100 ÷ 7.2, or about 13.9 years, to double.", "The rule of 72 only applies to compound growth, where each year's interest earns interest in later years. That is why the gap between simple and compound results widens over time."],
      },
      {
        id: "debt",
        heading: "Does the rule of 72 work for debt and inflation?",
        paragraphs: ["The arithmetic is the same for anything that grows at a fixed compound rate. An unpaid balance growing at 24% a year would double in about 72 ÷ 24 = 3 years if no payments were made. At 3% inflation, prices would double in about 24 years.", "For real debts, payments change the picture, so use the Debt Payoff Calculator or Loan Calculator to see payoff time and interest. The rule is a warning sign for how fast high rates compound, not a payoff plan."],
      },
      {
        id: "limits",
        heading: "When should I not rely on the rule of 72?",
        paragraphs: ["It is less accurate at very high rates. At 25% or more the estimate drifts further from the exact answer. It also assumes a steady rate; investment returns vary from year to year, so a doubling time based on an average return is only a rough picture.", "The rule ignores contributions. If you add money every month, your balance will double sooner than the rule predicts. A savings goal calculator or compound interest calculator with regular deposits gives a better estimate."],
      },
      {
        id: "variants",
        heading: "Are there other versions like the rule of 70 or 69?",
        paragraphs: ["Yes. Some people use 70, and 69.3 is closer to the exact figure for continuous compounding. They differ only slightly: at 7%, the rule of 70 says 10 years and the rule of 72 says about 10.3 years.", "Whichever number you use, check important decisions against the exact compound result rather than the shortcut."],
      },
      {
        id: "reverse-rate",
        heading: "How do I use the rule of 72 to compare two offers?",
        paragraphs: ["Turn each rate into a doubling time and compare the years. An account paying 4% doubles in about 18 years, one paying 6% in about 12. Over a long horizon that six-year gap means the faster account can double roughly three times in 36 years while the slower one doubles only twice.", "The same trick shows the cost of fees. If an investment returns 7% before a 1% annual fee, the net 6% doubles in about 12 years instead of about 10.3. Small differences in rate become large differences in outcome over decades, which is exactly what the rule makes visible."],
      },
      {
        id: "calc-check",
        heading: "How do I find the exact answer in the calculator?",
        paragraphs: ["Enter your principal, the annual rate and the compounding frequency in the Compound Interest Calculator, then try the rule's estimate as the number of years. If the balance is a little under double, add a year; if it is well over, take one away. With whole-year terms you will land on the first year the balance passes twice the principal.", "The calculator also shows the total interest earned, which at the doubling point is roughly equal to the original principal. That is another quick check that you have found the doubling year."],
      },
    ],
    stepsHeading: "How do I use the rule of 72 step by step?",
    steps: [{"title": "Find the annual rate", "body": "Write it as a whole number, such as 6 for 6%."}, {"title": "Divide 72 by the rate", "body": "72 ÷ 6 = 12 years to double."}, {"title": "Open the calculator", "body": "Enter a principal such as 10,000, the rate and the years from step 2."}, {"title": "Pick the compounding", "body": "Choose annual to match the rule, or the account's real frequency."}, {"title": "Compare the result", "body": "See how close the final balance is to double, for example 20,121.96."}],
    examples: [{"title": "Savings at 3%", "body": "72 ÷ 3 = 24 years. The calculator shows 10,000 growing to 20,327.94 over 24 years with annual compounding."}, {"title": "Target rate", "body": "To double money in 9 years you need about 72 ÷ 9 = 8%; the exact result is 19,990.05, just under 20,000."}, {"title": "Simple vs compound", "body": "At 7.2% for 10 years, compound interest gives 20,042.31 while simple interest gives 17,200."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Estimate only", "body": "The rule assumes a fixed rate with no deposits, fees or taxes."}, {"heading": "High rates", "body": "Above about 20%, check the exact figure in the calculator."}, {"heading": "Limits of the tool", "body": "The calculator accepts rates up to 100% and terms up to 100 years."}],
    faqs: [{"question": "What is the rule of 72?", "answer": "A shortcut: divide 72 by the annual rate to estimate the years needed to double money."}, {"question": "How long does it take to double money at 6%?", "answer": "About 12 years. The exact result for 10,000 compounded annually is 20,121.96 after 12 years."}, {"question": "How long at 8%?", "answer": "About 9 years, giving 19,990.05 on 10,000 with annual compounding."}, {"question": "Is the rule of 72 accurate?", "answer": "It is within about 1.5% for rates from 3% to 12% in the table above."}, {"question": "Why is it 72 and not 70?", "answer": "72 fits common rates slightly better and divides evenly by many numbers."}, {"question": "Does it work with monthly compounding?", "answer": "Roughly. Monthly compounding doubles a little faster than the rule suggests."}, {"question": "Does it work for simple interest?", "answer": "No. Simple interest takes longer to double, for example about 13.9 years at 7.2%."}, {"question": "Can I use it for credit card debt?", "answer": "It shows how fast an unpaid balance would double, but payments change the real result."}, {"question": "Who recommends the rule of 72?", "answer": "Investor.gov, from the US SEC, describes it as a way to estimate doubling time."}, {"question": "How do I find the exact doubling time?", "answer": "Run the numbers in a compound interest calculator and adjust the years until the balance doubles."}],
    faqMax: 10,
    cta: { before: "Check any doubling estimate with the free", linkLabel: "Compound Interest Calculator", href: "/tools/compound-interest-calculator", after: "." },
    alsoSee: [{"before": "Plan deposits with the", "linkLabel": "Savings Goal Calculator", "href": "/tools/savings-goal-calculator", "after": "."}, {"before": "Compare rates correctly in", "linkLabel": "Percentage Points vs Percent", "href": "/guides/percentage-points-vs-percent", "after": "."}, {"before": "See growth rates in", "linkLabel": "How to Calculate Percentage Change", "href": "/guides/how-to-calculate-percentage-change", "after": "."}],
    sources: [{"label": "Rule of 72 (Investor.gov, US SEC)", "href": "https://www.investor.gov/introduction-investing/investing-basics/glossary/rule-72"}, {"label": "Compound Interest Calculator (Investor.gov)", "href": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"}],
  },
};

const snowball: ToolGuide = {
  article: toolGuideArticle({
    slug: "debt-snowball-vs-avalanche",
    title: "Debt Snowball vs Avalanche: Which Saves More?",
    primaryKeyword: "debt snowball vs avalanche",
    secondaryKeywords: ["debt avalanche method", "debt snowball method", "pay highest interest first", "pay smallest debt first", "debt payoff strategy"],
    toolSlug: "debt-payoff-calculator",
    siblingToolSlugs: ["loan-calculator", "compound-interest-calculator"],
    metaTitle: "Debt Snowball vs Avalanche: Worked Example",
    metaDescription: "Avalanche pays the highest rate first and usually saves interest; snowball pays the smallest balance first for quick wins. Compare both with one real example.",
    excerpt: "Two popular ways to pay off several debts give different results. This guide compares the snowball and avalanche methods with the same debts and shows when they are identical.",
    relatedArticles: ["rule-of-72-explained", "how-to-calculate-percentage-change", "percentage-points-vs-percent"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: the avalanche method sends extra money to the debt with the highest interest rate first, and the snowball method sends it to the smallest balance first. Avalanche usually costs less interest; snowball clears individual debts sooner, which some people find motivating. In one example in the Debt Payoff Calculator, a 1,200 medical bill at 0%, an 8,000 credit card at 24% and a 4,000 personal loan at 9%, with 250 extra a month, avalanche finished in 26 months with 2,513.04 interest, while snowball took 27 months and 3,408.52.",
    why: "Both methods beat paying only the minimums, but the gap between them depends on your debts. The FDIC's consumer guidance notes that paying the highest rates first will likely save more money, while paying the smallest balances first may help you stay motivated. Seeing the numbers for your own debts makes the trade-off concrete.",
    sections: [
      {
        id: "how",
        heading: "How do the two methods work?",
        paragraphs: ["Both start the same way: pay at least the minimum on every debt every month. Then put every extra amount toward one target debt. When that debt is paid off, its minimum plus the extra rolls over to the next target, so the payment aimed at the target keeps growing.", "The only difference is the order. Avalanche ranks debts by interest rate, highest first. Snowball ranks them by balance, smallest first. The Debt Payoff Calculator lets you pick either strategy and enter up to 12 debts, each with a balance, APR and minimum payment, plus one extra monthly amount."],
      },
      {
        id: "example",
        heading: "What happens in a worked example?",
        paragraphs: ["Take three debts: a medical bill of 1,200 at 0% with a 50 minimum, a credit card of 8,000 at 24% with a 200 minimum and a personal loan of 4,000 at 9% with a 120 minimum. Add 250 a month on top of the minimums, so 620 goes to debt each month.", "Avalanche targets the credit card first and clears it in month 23, then the medical bill in month 24 and the loan in month 26. Snowball targets the medical bill first and clears it in month 4, the loan in month 13 and the card in month 27. Avalanche saves 895.48 in interest and one month."],
        table: { caption: "Same debts, two strategies (250 extra per month)", headers: ["Strategy", "Months", "Total interest", "Interest saved vs minimums"], rows: [["Avalanche", "26", "2,513.04", "4,256.03"], ["Snowball", "27", "3,408.52", "3,432.78"], ["Minimums only, avalanche order", "54", "6,769.07", "—"], ["Minimums only, snowball order", "55", "6,841.30", "—"]] },
      },
      {
        id: "why-cheaper",
        heading: "Why does avalanche usually cost less?",
        paragraphs: ["Interest is charged on each balance at its own rate. Every extra pound or dollar sent to the 24% card stops 24% interest, while the same amount sent to the 0% medical bill saves no interest at all. Avalanche puts extra money where it saves the most, which is why its total interest is lower.", "In the example the card charges 1,984.96 interest under avalanche, but 3,155.08 under snowball, because it stays at a high balance while the smaller debts are paid first."],
      },
      {
        id: "why-snowball",
        heading: "Why do people still choose snowball?",
        paragraphs: ["Snowball gives an early result. In the example the first debt disappears in month 4 rather than month 23. The FDIC notes that seeing this progress may help keep you motivated, even though paying the highest rates first will likely save more.", "If a quick win is what keeps you paying extra each month, the cost of snowball may be worth it. A plan you stick with beats a cheaper plan you abandon. The calculator shows the exact cost of that choice for your debts."],
      },
      {
        id: "same",
        heading: "When do snowball and avalanche give the same result?",
        paragraphs: ["When the smallest balance also has the highest rate, both methods pick the same order and the results are identical. For example, a 1,500 store card at 26%, a 7,000 credit card at 22% and a 9,000 car loan at 7% are in the same order whether you sort by balance or rate.", "In that case the choice does not matter. With 300 extra a month, the calculator shows both strategies paying off in 28 months with 2,703.54 interest, compared with 58 months and 7,643.13 on minimums alone."],
      },
      {
        id: "compare",
        heading: "How does the calculator compare strategies?",
        paragraphs: ["After you enter your debts, the result shows the months to payoff, total interest, total paid and the order in which each debt is cleared. It also shows a comparison of both strategies with and without your extra payment, so you can see the cost of each choice side by side.", "It simulates up to 600 months. If a minimum payment does not cover the monthly interest on a debt, the tool reports that the debt would never be paid off at that payment, so raise the minimum or the extra amount."],
      },
      {
        id: "extra",
        heading: "How much does the extra payment matter?",
        paragraphs: ["More than the choice of method. In the example, moving from minimums only to 250 extra cuts payoff time from 54 months to 26 and interest from 6,769.07 to 2,513.04 using avalanche. The difference between avalanche and snowball, by contrast, is one month and 895.48.", "So the first decision is how much extra you can pay reliably every month. The second is the order. Try a few extra amounts in the calculator to see where the savings level off."],
      },
      {
        id: "hybrid",
        heading: "Can I mix the two methods?",
        paragraphs: ["Yes. Some people clear one very small debt first for a quick win, then switch to the highest rate. The calculator models pure snowball or pure avalanche, but you can approximate a hybrid by running avalanche after removing the small debt you plan to clear first.", "Whichever method you pick, avoid adding new debt while you pay down the old; new balances undo the progress."],
      },
      {
        id: "list",
        heading: "What should I gather before I start?",
        paragraphs: ["Use the latest statement for each debt. You need the current balance, the APR and the required minimum payment. For credit cards, the APR is printed on the statement; for loans, it is in the loan documents or online account.", "Then decide on an extra amount you can pay every month without missing other bills. It is better to choose a smaller amount you can keep up than a large one you will stop after a few months, because consistency is what makes either method work."],
      },
    ],
    stepsHeading: "How do I compare snowball and avalanche for my debts?",
    steps: [{"title": "List every debt", "body": "Note the balance, APR and minimum payment from each statement."}, {"title": "Enter them", "body": "Add each debt in the Debt Payoff Calculator, up to 12."}, {"title": "Set the extra amount", "body": "Enter how much you can pay above the minimums each month."}, {"title": "Run both strategies", "body": "Switch between avalanche and snowball and note months and interest."}, {"title": "Check the comparison", "body": "Read the table of both strategies with and without the extra payment."}, {"title": "Pick and commit", "body": "Choose the order you will stick with and pay the extra every month."}],
    examples: [{"title": "Strategies differ", "body": "Medical bill 1,200 at 0%, card 8,000 at 24%, loan 4,000 at 9%, 250 extra: avalanche 26 months and 2,513.04 interest; snowball 27 months and 3,408.52."}, {"title": "Strategies match", "body": "Store card 1,500 at 26%, card 7,000 at 22%, car loan 9,000 at 7%, 300 extra: both 28 months and 2,703.54 interest."}, {"title": "Minimums only", "body": "The first set of debts on minimums alone takes 54 months and costs 6,769.07 in interest using the avalanche order."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Fixed rates", "body": "The calculator assumes each APR stays the same; promotional rates that end will change the result."}, {"heading": "Fees", "body": "Late fees and annual fees are not included."}, {"heading": "Minimums", "body": "Real minimum payments often fall as balances shrink; the calculator keeps the minimum you enter."}],
    faqs: [{"question": "How does the avalanche method order debts?", "answer": "It pays minimums on all debts and putting extra money toward the highest interest rate first."}, {"question": "How does the snowball method order debts?", "answer": "It pays minimums on all debts and putting extra money toward the smallest balance first."}, {"question": "Which method saves more money?", "answer": "Usually avalanche, because extra payments stop the most expensive interest first."}, {"question": "Which method is faster?", "answer": "Avalanche is usually as fast or faster overall, but snowball clears the first debt sooner."}, {"question": "When are both methods the same?", "answer": "When the smallest balance also has the highest rate, so both choose the same order."}, {"question": "How many debts can I enter?", "answer": "Up to 12 debts in the Debt Payoff Calculator."}, {"question": "Why does the calculator say a debt will never be paid off?", "answer": "The minimum payment is less than the monthly interest, so the balance never falls."}, {"question": "Does a 0% debt matter in avalanche?", "answer": "It is paid last by rate order, since extra money there saves no interest."}, {"question": "Is the extra payment or the method more important?", "answer": "In most examples the extra payment makes the bigger difference."}, {"question": "Should I stop saving to pay debt?", "answer": "That depends on your situation; many guides suggest keeping a small emergency fund so new debt is not needed."}],
    faqMax: 10,
    cta: { before: "Compare both strategies for your debts with the free", linkLabel: "Debt Payoff Calculator", href: "/tools/debt-payoff-calculator", after: "." },
    alsoSee: [{"before": "See how high rates compound in", "linkLabel": "Rule of 72 Explained", "href": "/guides/rule-of-72-explained", "after": "."}, {"before": "Check a single loan with the", "linkLabel": "Loan Calculator", "href": "/tools/loan-calculator", "after": "."}, {"before": "Compare rate changes in", "linkLabel": "Percentage Points vs Percent", "href": "/guides/percentage-points-vs-percent", "after": "."}],
    sources: [{"label": "Take a New Look at Your Money Habits (FDIC)", "href": "https://www.fdic.gov/consumer-resource-center/2021-05/take-new-look-your-money-habits"}],
  },
};

const mortgageTerm: ToolGuide = {
  article: toolGuideArticle({
    slug: "15-year-vs-30-year-mortgage",
    title: "15-Year vs 30-Year Mortgage: Payment and Interest Compared",
    primaryKeyword: "15 year vs 30 year mortgage",
    secondaryKeywords: ["15 year mortgage payment", "30 year mortgage total interest", "mortgage term comparison", "pay off 30 year mortgage in 15 years", "shorter mortgage term"],
    toolSlug: "mortgage-calculator",
    siblingToolSlugs: ["loan-calculator", "compound-interest-calculator"],
    metaTitle: "15-Year vs 30-Year Mortgage: Worked Comparison",
    metaDescription: "On a 320,000 loan at 6.5%, a 15-year term costs 2,787.54 a month and 181,757.84 interest; a 30-year costs 2,022.62 and 408,142.36. See the trade-offs.",
    excerpt: "A shorter mortgage costs more each month but far less in total. This guide compares 15- and 30-year terms with real calculator numbers and shows a middle path with extra payments.",
    relatedArticles: ["rule-of-72-explained", "debt-snowball-vs-avalanche", "percentage-points-vs-percent"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a 15-year mortgage has a higher monthly payment but much lower total interest than a 30-year one. For a 400,000 home with 20% down, the loan is 320,000. At 6.5%, the Mortgage Calculator shows 2,022.62 a month and 408,142.36 total interest over 30 years, against 2,787.54 a month and 181,757.84 over 15 years. That is 764.92 more each month to save 226,384.52 in interest. Shorter terms often carry lower rates too: at 5.75% for 15 years, the payment is 2,657.31 and interest 158,316.21.",
    why: "The term is one of the biggest choices in a mortgage, and it is hard to judge from the rate alone. The Federal Reserve's consumer guide to refinancing makes the same trade-off: shorter-term mortgages generally have lower interest rates and lower total interest, but higher monthly payments because more of each payment goes to principal. Seeing both payments and totals for your own loan makes the choice clearer.",
    sections: [
      {
        id: "compare",
        heading: "How do the payments and totals compare?",
        paragraphs: ["The table uses the Mortgage Calculator with a 400,000 price, 20% down and no taxes, insurance or fees, so it shows principal and interest only. The calculator also returns a built-in comparison of terms for the same loan and rate, which is where the 15- and 30-year rows at 6.5% come from.", "The 15-year loan repays the same 320,000 in half the time. Its payment is about 38% higher, but interest falls by more than half, because the balance shrinks faster and interest is charged on a smaller amount each month."],
        table: { caption: "320,000 loan, principal and interest only", headers: ["Term and rate", "Monthly payment", "Total interest", "Total paid"], rows: [["30 years at 6.5%", "2,022.62", "408,142.36", "728,142.36"], ["15 years at 6.5%", "2,787.54", "181,757.84", "501,757.84"], ["15 years at 5.75%", "2,657.31", "158,316.21", "478,316.21"]] },
      },
      {
        id: "why-less",
        heading: "Why does a 15-year loan cost so much less interest?",
        paragraphs: ["Each month, interest is charged on the remaining balance. With a 30-year loan, the balance falls slowly in the early years, so most of each payment is interest. With a 15-year loan, the bigger payment cuts the principal faster, so there is less balance left to charge interest on.", "In the 30-year example, the borrower pays about 276,260 in interest during the first 15 years alone and still owes about 232,189 at that point. The 15-year borrower owes nothing after 15 years."],
      },
      {
        id: "rate",
        heading: "Do 15-year mortgages have lower rates?",
        paragraphs: ["Often. The Federal Reserve's guide says shorter-term mortgages generally have lower interest rates, and its own example compares a 30-year loan at 6.0% with a 15-year loan at 5.5%. Actual rates depend on the lender, the market and your credit, so use quotes rather than assumptions.", "A lower rate adds to the savings. In our example, dropping the 15-year rate from 6.5% to 5.75% lowers the payment by 130.23 a month and the total interest by 23,441.63."],
      },
      {
        id: "afford",
        heading: "Which term can I afford?",
        paragraphs: ["The monthly payment is what most budgets feel. In the example, the 15-year loan needs 764.92 more each month at the same rate. Add property tax, insurance, HOA dues and any PMI, which the Mortgage Calculator lets you enter, to see the full monthly cost for each term.", "Lenders also look at your debt-to-income ratio. A higher payment on a shorter term can limit how large a loan you qualify for, which is one reason many buyers choose 30 years even when they could pay faster."],
      },
      {
        id: "extra",
        heading: "Can I get 15-year results with a 30-year loan?",
        paragraphs: ["Largely, yes, if you pay extra and the loan has no prepayment penalty. In the Mortgage Calculator, adding 764.92 a month to the 30-year loan at 6.5%, the difference between the two payments, pays it off in 181 months instead of 360 and saves 226,383.78 in interest, almost exactly the 15-year result.", "The difference is flexibility. With a 30-year loan you can drop back to the required 2,022.62 in a tight month. The cost is that 30-year loans often have a higher rate than 15-year loans, so paying extra on one usually costs a little more than taking the shorter term at its lower rate."],
      },
      {
        id: "other-terms",
        heading: "Are there terms between 15 and 30 years?",
        paragraphs: ["Yes. Many lenders offer 20- and 25-year terms, and the calculator accepts any whole term from 1 to 50 years. A middle term gives a payment between the two and saves part of the interest.", "Try several terms with the same price, down payment and rate. The calculator's comparison shows how payment and interest move together, so you can find the shortest term your budget handles comfortably."],
      },
      {
        id: "when",
        heading: "When does a 30-year term make more sense?",
        paragraphs: ["If the lower payment leaves room for an emergency fund, retirement saving or paying off higher-rate debt, a 30-year term can be the better choice even though it costs more interest. Paying a 24% credit card first saves more than prepaying a 6.5% mortgage, as the Debt Payoff Calculator shows.", "A 15-year term suits borrowers with steady income who want to own their home sooner and pay the least interest. There is no single right answer; the calculator shows the cost of each option."],
      },
      {
        id: "equity",
        heading: "How fast does each term build equity?",
        paragraphs: ["Equity is the part of the home you own outright: its value minus the loan balance. Because the 15-year payment puts more toward principal from the first month, equity grows much faster. After 15 years the 15-year borrower owns the home free of the loan, while the 30-year borrower in the example still owes about 232,189, ignoring any change in the home's value.", "Faster equity can matter if you plan to move, refinance or borrow against the home later. It also lowers risk: if prices fall, a borrower with more equity is less likely to owe more than the home is worth."],
      },
      {
        id: "refi",
        heading: "Can I switch terms later by refinancing?",
        paragraphs: ["Yes, refinancing replaces your loan with a new one, which can have a different term. The Federal Reserve's guide notes that moving to a shorter term generally brings a lower rate and lower total interest, while moving to a longer term lowers the monthly payment but raises total interest.", "Refinancing has closing costs, so compare those fees with the interest you would save. Running both the old and new loans in the Mortgage Calculator shows the payment and interest difference before you talk to a lender."],
      },
      {
        id: "rate-points",
        heading: "How should I compare quotes for each term?",
        paragraphs: ["Ask lenders for both a 15-year and a 30-year quote on the same day, with the same down payment and points, so the rates are comparable. Then enter each rate in the calculator for its own term rather than using one rate for both.", "Look at total cost as well as the payment. A quote with a slightly lower rate but high fees may cost more over the years you expect to keep the loan."],
      },
    ],
    stepsHeading: "How do I compare mortgage terms step by step?",
    steps: [{"title": "Enter the price and down payment", "body": "For example 400,000 and 20%."}, {"title": "Enter the rate", "body": "Use the quoted rate for each term, such as 6.5% for 30 years."}, {"title": "Set the term", "body": "Run 30 years, then 15 years, or read the built-in comparison."}, {"title": "Add other costs", "body": "Include tax, insurance, HOA and PMI for the full monthly payment."}, {"title": "Test extra payments", "body": "Add an extra monthly amount to the 30-year loan to see how early it pays off."}, {"title": "Decide", "body": "Choose the term whose payment fits your budget with room to spare."}],
    examples: [{"title": "Same rate", "body": "At 6.5% on 320,000: 30 years costs 2,022.62 a month and 408,142.36 interest; 15 years costs 2,787.54 and 181,757.84."}, {"title": "Lower 15-year rate", "body": "At 5.75% for 15 years the payment is 2,657.31 and interest 158,316.21."}, {"title": "Extra payments", "body": "Paying 764.92 extra on the 30-year loan clears it in 181 months and saves 226,383.78 interest."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Principal and interest", "body": "The examples exclude taxes, insurance, HOA and PMI unless you enter them."}, {"heading": "Quotes vary", "body": "Use real rate quotes for each term; the examples are illustrations."}, {"heading": "Prepayment", "body": "Check your loan terms for prepayment penalties before planning extra payments."}],
    faqs: [{"question": "Is a 15-year mortgage better than a 30-year?", "answer": "It costs far less interest but has a higher payment; which is better depends on your budget."}, {"question": "How much more is a 15-year payment?", "answer": "In the example at 6.5% on 320,000, 764.92 more a month."}, {"question": "How much interest does a 15-year loan save?", "answer": "226,384.52 in the 6.5% example, compared with 30 years."}, {"question": "Do 15-year loans have lower rates?", "answer": "Often. The Federal Reserve's guide says shorter terms generally have lower rates."}, {"question": "Can I pay off a 30-year mortgage in 15 years?", "answer": "Yes, by paying extra each month if there is no prepayment penalty."}, {"question": "Why is most of an early payment interest?", "answer": "Interest is charged on the balance, which is largest at the start."}, {"question": "Does the calculator include taxes and insurance?", "answer": "You can enter property tax, insurance, HOA and PMI to add them."}, {"question": "What about 20-year terms?", "answer": "You can enter any whole term from 1 to 50 years to compare it."}, {"question": "How much is owed after 15 years on a 30-year loan?", "answer": "About 232,189 in the 6.5% example."}, {"question": "Should I prepay my mortgage or other debt?", "answer": "Higher-rate debt usually saves more when paid first."}],
    faqMax: 10,
    cta: { before: "Compare loan terms for your home with the free", linkLabel: "Mortgage Calculator", href: "/tools/mortgage-calculator", after: "." },
    alsoSee: [{"before": "Check any fixed loan with the", "linkLabel": "Loan Calculator", "href": "/tools/loan-calculator", "after": "."}, {"before": "Prioritise high-rate debts in", "linkLabel": "Debt Snowball vs Avalanche", "href": "/guides/debt-snowball-vs-avalanche", "after": "."}, {"before": "Understand rate moves in", "linkLabel": "Percentage Points vs Percent", "href": "/guides/percentage-points-vs-percent", "after": "."}],
    sources: [{"label": "A Consumer's Guide to Mortgage Refinancings (Federal Reserve)", "href": "https://www.federalreserve.gov/pubs/refinancings/default.htm"}],
  },
};

const workdays2027: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-many-working-days-in-2027",
    title: "How Many Working Days Are in 2027?",
    primaryKeyword: "working days in 2027",
    secondaryKeywords: ["business days 2027", "2027 federal holidays", "weekdays in 2027", "working days per month 2027", "count business days"],
    toolSlug: "business-days-calculator",
    siblingToolSlugs: ["date-difference-calculator", "age-calculator"],
    metaTitle: "How Many Working Days Are in 2027? (US Holidays)",
    metaDescription: "2027 has 261 weekdays. Excluding the 12 US federal holiday dates observed in 2027 leaves 249 working days. See how to count yours with any holiday list.",
    excerpt: "2027 has 261 weekdays, but holidays reduce the working total. This guide counts the year with the US federal holiday schedule and shows how to use your own holiday list.",
    relatedArticles: ["how-to-find-graduation-year-by-birthday", "how-to-estimate-unemployment-benefits", "how-to-calculate-weighted-average"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: 2027 has 365 days, of which 261 are weekdays (Monday to Friday) and 104 are weekend days. US federal employees also have 12 observed holiday dates that fall in 2027, including Friday, December 31, which OPM lists as the observed New Year's Day for 2028. Excluding those 12 dates leaves 249 working days. In the Business Days Calculator, enter 2027-01-01 to 2027-12-31, tick Include the end date and paste the holidays into Excluded dates to see the same count.",
    why: "Working-day counts drive payroll, leave planning, project schedules, contract deadlines and daily-rate budgets. The answer depends on whose holidays you follow: federal, state, a company calendar or another country's public holidays. Counting weekdays is easy; the holiday list is where most mistakes happen.",
    sections: [
      {
        id: "weekdays",
        heading: "How many weekdays are in 2027?",
        paragraphs: ["2027 is not a leap year, so it has 365 days, or 52 weeks and one extra day. It starts on a Friday, and that extra day is also a Friday, so there are 53 Fridays and 52 of every other weekday. That gives 52 × 5 + 1 = 261 weekdays and 104 weekend days.", "The Business Days Calculator confirms this. With a start date of 2027-01-01, an end date of 2027-12-31 and Include the end date ticked, it reports 261 business days, 104 weekend days and 365 calendar days in the range."],
      },
      {
        id: "holidays",
        heading: "Which US federal holidays fall on weekdays in 2027?",
        paragraphs: ["OPM publishes the federal holiday schedule. For 2027 it lists 11 holidays, all on weekdays once observed dates are used: Juneteenth on Saturday, June 19 is observed on Friday, June 18; Independence Day on Sunday, July 4 is observed on Monday, July 5; and Christmas on Saturday, December 25 is observed on Friday, December 24.", "OPM's 2028 schedule also lists Friday, December 31, 2027 as the observed New Year's Day, because January 1, 2028 is a Saturday. That adds a 12th holiday date within calendar year 2027 for most federal employees."],
        table: { caption: "2027 observed federal holiday dates (OPM)", headers: ["Date", "Holiday"], rows: [["Fri Jan 1", "New Year's Day"], ["Mon Jan 18", "Birthday of Martin Luther King, Jr."], ["Mon Feb 15", "Washington's Birthday"], ["Mon May 31", "Memorial Day"], ["Fri Jun 18", "Juneteenth (observed)"], ["Mon Jul 5", "Independence Day (observed)"], ["Mon Sep 6", "Labor Day"], ["Mon Oct 11", "Columbus Day"], ["Thu Nov 11", "Veterans Day"], ["Thu Nov 25", "Thanksgiving Day"], ["Fri Dec 24", "Christmas Day (observed)"], ["Fri Dec 31", "New Year's Day 2028 (observed)"]] },
      },
      {
        id: "count",
        heading: "How many working days are left after holidays?",
        paragraphs: ["Subtracting the 12 observed dates from 261 weekdays gives 249 working days. To check it, paste the dates into the calculator's Excluded dates box as YYYY-MM-DD, one per line or separated by commas: 2027-01-01, 2027-01-18, 2027-02-15, 2027-05-31, 2027-06-18, 2027-07-05, 2027-09-06, 2027-10-11, 2027-11-11, 2027-11-25, 2027-12-24 and 2027-12-31.", "The result shows 249 business days and lists the excluded weekdays inside the range. If your employer does not give December 31 off, leave that date out and the count becomes 250."],
      },
      {
        id: "private",
        heading: "Do private employers use the same holidays?",
        paragraphs: ["Not necessarily. Federal holidays apply to federal employees, and OPM's notes on observed dates are for most federal employees. Private employers and state governments set their own calendars, and many give fewer days off, for example not Columbus Day or Veterans Day.", "Use your own employer's holiday list in the Excluded dates box. With only New Year's Day, Memorial Day, Independence Day (observed), Labor Day, Thanksgiving and Christmas (observed) excluded, 2027 has 255 working days."],
      },
      {
        id: "month",
        heading: "How do I count working days in one month?",
        paragraphs: ["Set the start and end dates to the first and last day of the month. November 2027 runs from Monday, November 1 to Tuesday, November 30 and contains 22 weekdays. Excluding Veterans Day and Thanksgiving leaves 20 working days, which is what the calculator shows with those two dates excluded.", "Use the same method for a quarter, a project phase or a notice period. Because the calculator excludes only weekdays you list, a holiday that falls on a weekend does not reduce the count twice."],
      },
      {
        id: "end-date",
        heading: "Should I include the end date?",
        paragraphs: ["It depends on the question. For how many days you work in a period, include both the first and last day. For a deadline counted from a start date, the end date is often not counted. The tool's Include the end date checkbox controls this.", "For November 1 to November 30, 2027 with no holidays excluded, ticking the box gives 22 business days; unticking it gives 21, because November 30 is a Tuesday and is dropped from the range."],
      },
      {
        id: "other",
        heading: "What about other countries?",
        paragraphs: ["Weekend days are Saturday and Sunday in the calculator, so the 261 weekdays apply anywhere that uses a Monday-to-Friday week. Public holidays differ by country and region, so enter your local list as excluded dates.", "If you work a different week, such as Sunday to Thursday, the weekday count from this tool will not match your working days; count your actual schedule instead."],
      },
      {
        id: "quarters",
        heading: "How are the working days spread across 2027?",
        paragraphs: ["Weekdays per month range from 20 to 23 in 2027, and holidays pull some months lower. January has 21 weekdays but loses New Year's Day and Martin Luther King Jr. Day on the federal schedule, while December has 23 weekdays but loses both December 24 and December 31.", "To plan by quarter, run the calculator once per quarter with that quarter's holidays. For example, January 1 to March 31 with the three first-quarter federal holidays excluded gives the working days for Q1, and the four quarters add up to the annual 249."],
      },
      {
        id: "payroll",
        heading: "How do I use working days for pay or rates?",
        paragraphs: ["A daily rate is often an annual salary divided by working days. With 249 working days, an annual amount divided by 249 gives a per-day figure; with 261 weekdays and paid holidays it is divided by 261 instead. Check which method your contract uses, because the two give different daily amounts.", "For leave planning, subtract your planned leave days from the working-day count for the period. The calculator's excluded dates box can hold leave days as well as holidays, so you can see how many days you will actually be at work."],
      },
      {
        id: "state",
        heading: "What about state and local holidays?",
        paragraphs: ["Many states add their own holidays, and some do not observe every federal one. State government offices, schools and courts follow state calendars, so check the official state list before counting.", "Add each extra date to the excluded list. Because the calculator only removes the weekdays you type, it works with any mix of federal, state, company and personal days off."],
      },
      {
        id: "leap",
        heading: "Why does the count change from year to year?",
        paragraphs: ["The number of weekdays depends on which day the year starts and whether it is a leap year. A normal year has 52 weeks and one day, so it has 261 weekdays if that extra day is a weekday and 260 if it falls on a weekend. A leap year has two extra days, which gives 260, 261 or 262.", "Holidays shift as well, because fixed-date holidays move to an observed weekday when they fall on a weekend. That is why 2027 gets an extra federal holiday date on December 31: New Year's Day 2028 falls on a Saturday."],
      },
    ],
    stepsHeading: "How do I count working days in 2027 step by step?",
    steps: [{"title": "Set the range", "body": "Enter 2027-01-01 as the start date and 2027-12-31 as the end date."}, {"title": "Include the end date", "body": "Tick the box so December 31 is counted."}, {"title": "Add holidays", "body": "Paste your holiday dates as YYYY-MM-DD into Excluded dates."}, {"title": "Calculate", "body": "Read business days, weekend days and calendar days."}, {"title": "Check the list", "body": "Confirm the excluded weekdays shown are the holidays you meant."}],
    examples: [{"title": "Whole year, no holidays", "body": "261 business days, 104 weekend days and 365 calendar days."}, {"title": "Federal schedule", "body": "Excluding the 12 observed federal dates in 2027 leaves 249 working days."}, {"title": "November 2027", "body": "22 weekdays; excluding Veterans Day and Thanksgiving leaves 20."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Observed dates", "body": "Use the observed date when a holiday falls on a weekend, as OPM lists."}, {"heading": "Date format", "body": "Excluded dates must be YYYY-MM-DD; other formats show an error."}, {"heading": "Weekends", "body": "The calculator treats Saturday and Sunday as weekend days."}],
    faqs: [{"question": "How many weekdays are in 2027?", "answer": "261, because 2027 starts and ends on a Friday."}, {"question": "How many weekend days are in 2027?", "answer": "104."}, {"question": "How many working days are in 2027 after federal holidays?", "answer": "249 if all 12 observed dates in 2027 are excluded, including December 31."}, {"question": "Why is December 31, 2027 a federal holiday?", "answer": "OPM lists it as the observed New Year's Day 2028, which falls on a Saturday."}, {"question": "Is Juneteenth a day off in 2027?", "answer": "For most federal employees it is observed on Friday, June 18."}, {"question": "When is Christmas observed in 2027?", "answer": "On Friday, December 24, because December 25 is a Saturday."}, {"question": "How do I enter holidays in the calculator?", "answer": "Type YYYY-MM-DD dates, one per line or separated by commas, in Excluded dates."}, {"question": "Does a weekend holiday reduce the count?", "answer": "Only its observed weekday date does; weekend days are already excluded."}, {"question": "How many working days are in November 2027?", "answer": "22 weekdays, or 20 after Veterans Day and Thanksgiving."}, {"question": "Do private companies follow federal holidays?", "answer": "Not necessarily; use your employer's own holiday list."}],
    faqMax: 10,
    cta: { before: "Count working days between any dates with the free", linkLabel: "Business Days Calculator", href: "/tools/business-days-calculator", after: "." },
    alsoSee: [{"before": "Count all days between dates with the", "linkLabel": "Date Difference Calculator", "href": "/tools/date-difference-calculator", "after": "."}, {"before": "Plan benefit weeks in", "linkLabel": "How to Estimate Unemployment Benefits", "href": "/guides/how-to-estimate-unemployment-benefits", "after": "."}, {"before": "Work out ages with the", "linkLabel": "Age Calculator", "href": "/tools/age-calculator", "after": "."}],
    sources: [{"label": "Federal Holidays (US Office of Personnel Management)", "href": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"}],
  },
};

const dalton: ToolGuide = {
  article: toolGuideArticle({
    slug: "daltons-law-of-partial-pressures-explained",
    title: "Dalton's Law of Partial Pressures Explained with Air",
    primaryKeyword: "dalton's law of partial pressures",
    secondaryKeywords: ["dalton's law formula", "partial pressure of oxygen in air", "mole fraction and partial pressure", "dalton's law example", "total pressure sum of partial pressures"],
    toolSlug: "partial-pressure-calculator",
    siblingToolSlugs: ["unit-converter", "percentage-calculator"],
    metaTitle: "Dalton's Law of Partial Pressures: Air Examples",
    metaDescription: "Dalton's law says total pressure equals the sum of each gas's partial pressure. See why it works, the oxygen-in-air example and common mistakes, with checks.",
    excerpt: "Dalton's law explains how gases in a mixture share the total pressure. This guide covers the idea behind it, the air example, its assumptions and the mistakes students make most.",
    relatedArticles: ["how-to-calculate-partial-pressure", "percentage-points-vs-percent", "how-to-calculate-weighted-average"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: Dalton's law of partial pressures says the total pressure of a mixture of non-reacting gases equals the sum of the pressures each gas would exert on its own, P(total) = P₁ + P₂ + …. Each gas's share is its mole fraction times the total, Pᵢ = Xᵢ × P(total). Dry air is about 21% oxygen, so at 1 atm the oxygen partial pressure is 0.21 × 1 = 0.21 atm. The Partial Pressure Calculator gives that result with a mole fraction of 0.21 and a total of 1 atm.",
    why: "Dalton's law connects what you can measure, the total pressure, with what often matters, the pressure of one gas. It is used in chemistry problems about collecting gases, in breathing and diving gas calculations and in any mixture where you need the contribution of one component. Our step-by-step calculator guide covers each mode; this article explains the law itself and how to reason with it.",
    sections: [
      {
        id: "idea",
        heading: "What does Dalton's law actually say?",
        paragraphs: ["OpenStax Chemistry 2e states that the total pressure of a mixture of ideal gases equals the sum of the partial pressures of the component gases. A partial pressure is the pressure one gas would exert if it alone filled the same container at the same temperature.", "In an ideal gas, molecules are treated as far apart with no attraction between them, so each gas behaves independently. Doubling the number of molecules of one gas doubles its contribution to the pressure, regardless of what else is in the container."],
      },
      {
        id: "fraction",
        heading: "Why does mole fraction give the partial pressure?",
        paragraphs: ["At a fixed volume and temperature, pressure is proportional to the number of moles of gas. If oxygen makes up 21 of every 100 moles of gas, it supplies 21% of the collisions with the walls and so 21% of the pressure. That is why Pᵢ = Xᵢ × P(total), where Xᵢ is moles of gas i divided by total moles.", "A mole fraction is a number between 0 and 1. The calculator rejects values above 1 and tells you to divide a percentage by 100 first, so 21% must be entered as 0.21."],
      },
      {
        id: "air",
        heading: "How does Dalton's law work for air?",
        paragraphs: ["Treat dry air as about 78% nitrogen, 21% oxygen and 1% argon by moles, a common textbook simplification. At standard atmospheric pressure, 101.325 kPa, the calculator's gas mixture mode with those amounts gives nitrogen 79.0335 kPa, oxygen 21.27825 kPa and argon 1.01325 kPa.", "Add the three and you get 101.325 kPa back, exactly as the law predicts. In the total-from-partials mode, entering 0.78, 0.21 and 0.01 atm likewise returns a total of 1 atm."],
        table: { caption: "Simplified dry air at 101.325 kPa", headers: ["Gas", "Mole fraction", "Partial pressure (kPa)"], rows: [["Nitrogen", "0.78", "79.0335"], ["Oxygen", "0.21", "21.27825"], ["Argon", "0.01", "1.01325"], ["Total", "1.00", "101.325"]] },
      },
      {
        id: "pressure-change",
        heading: "What happens when the total pressure changes?",
        paragraphs: ["The fractions stay the same but every partial pressure scales with the total. If the same air mixture is compressed to 2 atm, oxygen's partial pressure doubles to 0.42 atm. If the total falls to 0.5 atm, oxygen drops to 0.105 atm, even though air is still 21% oxygen.", "This is why the share of a gas and its partial pressure are different ideas. The percentage tells you the mixture; the partial pressure tells you how strongly that gas acts, which is what matters for breathing, reactions and dissolving gases."],
      },
      {
        id: "water",
        heading: "How is Dalton's law used when collecting gas over water?",
        paragraphs: ["OpenStax describes a common laboratory method: a gas is collected by bubbling it into an inverted container of water. The collected gas is mixed with water vapour, so the measured total pressure is the gas plus the vapour pressure of water at that temperature.", "To find the pressure of the dry gas, subtract water's vapour pressure from the total. Use the vapour pressure value from your textbook table for the measured temperature, then use the calculator's total-from-partials or mole fraction modes to check the arithmetic."],
      },
      {
        id: "assumptions",
        heading: "When does Dalton's law not hold well?",
        paragraphs: ["The law assumes ideal behaviour and gases that do not react with each other. At high pressures or low temperatures, real gas molecules attract each other and take up space, so the sum of partial pressures can differ from the measured total.", "If gases react, the number of moles changes, so use the amounts after the reaction. For ordinary classroom conditions near atmospheric pressure, Dalton's law is accurate enough for most problems."],
      },
      {
        id: "units",
        heading: "Which units should I use?",
        paragraphs: ["Any pressure unit works, as long as every value uses the same one. The calculator supports atm, kPa, Pa, bar and mmHg, and in most modes it shows the result in all of them. 1 atm is 101.325 kPa or 760 mmHg, so the oxygen partial pressure in air at 1 atm is about 159.6 mmHg.", "Mixing units is a common error: adding 0.78 atm to 21 kPa gives nonsense. Convert first, or let the calculator handle units for you."],
      },
      {
        id: "mistakes",
        heading: "What mistakes do students make with Dalton's law?",
        paragraphs: ["The most common is using a percentage instead of a fraction, for example 21 instead of 0.21, which makes a partial pressure larger than the total. Another is using mass fractions instead of mole fractions; you must convert grams to moles before working out fractions.", "A third is forgetting that the law applies to the gas phase only. Liquids and solids in the container do not contribute, apart from the vapour they produce."],
      },
      {
        id: "history",
        heading: "Where does Dalton's law come from?",
        paragraphs: ["The law is named after John Dalton, the English chemist best known for his atomic theory. It follows naturally from the idea that gas particles are tiny and far apart, so the pressure from one kind of particle does not depend on the others.", "Today it is taught alongside the ideal gas law, PV = nRT. Because each gas obeys that law separately, adding their pressures in the same volume and temperature gives the total, which is Dalton's law in one line."],
      },
      {
        id: "ideal-mode",
        heading: "How does the ideal gas mode relate to Dalton's law?",
        paragraphs: ["The calculator's ideal gas mode finds the pressure of one gas from its amount, temperature and volume, P = nRT/V. If you run it once for each gas in the same container at the same temperature and volume, the results are the partial pressures, and their sum is the total.", "This gives a second way to check homework answers. Find each partial pressure from moles with the ideal gas mode, then add them in the total-from-partials mode and compare with the total you expected."],
      },
      {
        id: "quick-check",
        heading: "What is a quick way to check my answer?",
        paragraphs: ["Two checks catch most errors. First, every partial pressure must be smaller than the total. Second, the partial pressures must add up to the total, within rounding. If either check fails, look for a percentage typed as a whole number, a unit mismatch or a missing gas.", "The calculator's Steps panel shows the working for each result, so you can compare it line by line with your own method."],
      },
    ],
    stepsHeading: "How do I apply Dalton's law step by step?",
    steps: [{"title": "List the gases", "body": "Write each gas and its amount in moles, or its mole fraction."}, {"title": "Find mole fractions", "body": "Divide each amount by the total moles; fractions must add to 1."}, {"title": "Multiply by the total", "body": "Pᵢ = Xᵢ × P(total) for each gas."}, {"title": "Check the sum", "body": "The partial pressures should add up to the total."}, {"title": "Verify in the calculator", "body": "Use the gas mixture or mole fraction mode to confirm your numbers."}],
    examples: [{"title": "Oxygen in air at 1 atm", "body": "X = 0.21, P(total) = 1 atm, so P(O₂) = 0.21 atm."}, {"title": "Air at 101.325 kPa", "body": "Nitrogen 79.0335, oxygen 21.27825 and argon 1.01325 kPa, summing to 101.325 kPa."}, {"title": "Compressed air", "body": "At 2 atm total, oxygen's partial pressure is 0.42 atm."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Ideal gases", "body": "The law is exact only for ideal, non-reacting gases."}, {"heading": "Dry versus humid air", "body": "Water vapour takes part of the total pressure in humid air."}, {"heading": "Fractions", "body": "Enter 0.21, not 21, for 21%."}],
    faqs: [{"question": "What is Dalton's law of partial pressures?", "answer": "The total pressure of a gas mixture equals the sum of the partial pressures of its gases."}, {"question": "What is the formula?", "answer": "P(total) = P₁ + P₂ + …, and each Pᵢ = Xᵢ × P(total)."}, {"question": "What is the partial pressure of oxygen at 1 atm?", "answer": "About 0.21 atm, or roughly 159.6 mmHg, for dry air."}, {"question": "Why do I get a partial pressure bigger than the total?", "answer": "You probably entered a percentage instead of a fraction."}, {"question": "Is Dalton's law exact for real gases?", "answer": "Approximately; it is most accurate at low pressures and moderate temperatures."}, {"question": "Can I use mass fractions?", "answer": "No. Convert masses to moles first."}, {"question": "What if the gases react?", "answer": "Use the amounts after the reaction, since moles change."}, {"question": "How do I handle gas collected over water?", "answer": "Subtract the vapour pressure of water at that temperature from the total."}, {"question": "Which units does the calculator support?", "answer": "atm, kPa, Pa, bar and mmHg."}, {"question": "How is this guide different from the calculator guide?", "answer": "This one explains the law; How to Calculate Partial Pressure walks through each calculator mode."}],
    faqMax: 10,
    cta: { before: "Check any gas mixture with the free", linkLabel: "Partial Pressure Calculator", href: "/tools/partial-pressure-calculator", after: "." },
    alsoSee: [{"before": "Follow each calculator mode in", "linkLabel": "How to Calculate Partial Pressure", "href": "/guides/how-to-calculate-partial-pressure", "after": "."}, {"before": "Convert pressures with the", "linkLabel": "Unit Converter", "href": "/tools/unit-converter", "after": "."}, {"before": "Turn percentages into fractions with the", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}],
    sources: [{"label": "Stoichiometry of Gaseous Substances, Mixtures, and Reactions (OpenStax Chemistry 2e)", "href": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"}],
  },
};

export const batch9Guides: ToolGuide[] = [gpaPercent, rule72, snowball, mortgageTerm, workdays2027, dalton];
