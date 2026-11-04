import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const fantasyCricket: ToolGuide = {
  article: toolGuideArticle({
    slug: "fantasy-cricket-points-system-explained",
    title: "Fantasy Cricket Points System Explained",
    primaryKeyword: "fantasy cricket points system",
    secondaryKeywords: ["dream11 points system", "fantasy cricket scoring", "how fantasy cricket points work", "wicket points fantasy cricket", "duck penalty fantasy cricket"],
    toolSlug: "fantasy-point-calculator",
    siblingToolSlugs: ["percentage-calculator", "average-calculator"],
    metaTitle: "Fantasy Cricket Points System Explained (With Examples)",
    metaDescription: "How fantasy cricket points work: runs, boundary bonuses, wickets, maidens, catches, run outs and duck penalties, with worked examples to check in a calculator.",
    excerpt: "Fantasy cricket apps turn a scorecard into points. This guide explains the usual scoring categories, why every platform differs and how to check a player's total with editable rules.",
    relatedArticles: ["how-to-calculate-fantasy-points", "how-to-calculate-weighted-average", "percentage-points-vs-percent"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a fantasy cricket points system gives each scorecard event a value. A player earns points for runs, extra bonuses for fours and sixes, a large reward for each wicket, smaller rewards for maidens, catches, stumpings and run outs, and sometimes a penalty for being out for a duck. You add up quantity × points for every line to get the total. Each platform, including Dream11, publishes its own values and changes them by format, so always copy the numbers from your app's current points table. The Fantasy Point Calculator starts with illustrative defaults (1 per run, 25 per wicket, 8 per catch and so on) and lets you edit every value to match your league.",
    why: "Fantasy totals are easy to misread. A batter with a fast fifty can be outscored by a bowler with three wickets, and a single duck penalty can decide a close contest. Knowing how each category adds up helps you check a live score, compare players before a deadline and understand why a captain choice paid off or failed.",
    sections: [
      {
        id: "what",
        heading: "What is a fantasy cricket points system?",
        paragraphs: ["It is a table that converts what happens on the field into numbers. The scorecard says a player made 54 runs with six fours and two sixes and took one catch. The points system says how much each of those events is worth. Multiply each count by its value, add the lines together and you have the player's fantasy score for the match.", "Most systems use the same building blocks, because they come straight from the scorecard. What changes is the value of each block and the extra rules layered on top, such as strike-rate bonuses, economy-rate bonuses, milestone bonuses for a fifty or a hundred, and multipliers for a captain and vice-captain."],
      },
      {
        id: "categories",
        heading: "Which events usually score points?",
        paragraphs: ["Batting categories normally include runs, a bonus per four, a bonus per six and a penalty for a duck. Bowling categories normally include wickets and maiden overs. Fielding categories include catches, stumpings and run outs. These map to events recorded under the Laws of Cricket, which MCC publishes, so the counts you need are always on the official scorecard.", "The Fantasy Point Calculator's default cricket rules use these values. They are examples for practice, not any platform's official table:"],
        table: { caption: "Default cricket rules in the Fantasy Point Calculator (editable)", headers: ["Event", "Default points"], rows: [["Run scored", "1"], ["Boundary (four) bonus", "1"], ["Six bonus", "2"], ["Wicket taken", "25"], ["Maiden over", "8"], ["Catch", "8"], ["Stumping or run out", "12"], ["Out for a duck", "-2"]] },
      },
      {
        id: "dream11",
        heading: "Are Dream11 points the same as these defaults?",
        paragraphs: ["Not necessarily. Dream11 and other platforms each publish their own points table, and the values can differ between T20, one-day, Test and other formats. They can also change from season to season. This guide does not reproduce any platform's table, because the only reliable figure is the one shown in your app on the day you play.", "The safe method is to open the points or scoring page inside your app, copy each value into the calculator, and save the result as a custom rule set. From then on you can check any player's total in a few seconds and you will know the numbers came from the platform itself."],
      },
      {
        id: "batting",
        heading: "How are batting points calculated?",
        paragraphs: ["Start with runs. Under the default rules each run is worth one point, so 54 runs gives 54 points. A boundary bonus is added on top of the runs it produced, not instead of them: a four already counts as four runs and then earns a one-point bonus. A six counts as six runs and then earns a two-point bonus.", "The duck penalty applies when a batter is dismissed without scoring. In the defaults it is minus two. Platforms often restrict the duck penalty to certain roles, such as batters, wicket-keepers and all-rounders, so check whether your league applies it to bowlers too. In the calculator you simply enter 1 in the duck row when it applies and 0 when it does not."],
      },
      {
        id: "bowling",
        heading: "How are bowling and fielding points calculated?",
        paragraphs: ["Wickets carry the largest value in most systems, because they are rarer than runs. With the defaults each wicket is worth 25 points, so three wickets give 75. A maiden over, an over in which the bowler concedes no runs, adds 8 points each.", "Fielding points reward catches, stumpings and run outs. The defaults give 8 per catch and 12 per stumping or run out. Some platforms split direct-hit run outs from assisted ones or add a bonus for three or more catches; if yours does, add those as extra lines in your custom rules or include them in an existing line."],
      },
      {
        id: "extras",
        heading: "What about strike rate, economy and captain multipliers?",
        paragraphs: ["Many apps add bonuses or penalties based on strike rate for batters and economy rate for bowlers, usually with a minimum number of balls faced or overs bowled. Others add milestone bonuses at 30, 50 or 100 runs, or at three, four or five wickets. These rules are where platforms differ most, so they are the first thing to check when your total does not match.", "Captains and vice-captains usually earn a multiple of their points. The calculator does not apply a multiplier automatically: calculate the player's base total, then multiply it by the value your app uses. Keeping the base total separate also makes it easier to compare players fairly before you choose a captain."],
      },
    ],
    stepsHeading: "How do I check a player's fantasy cricket points?",
    steps: [{"title": "Open your app's points table", "body": "Find the scoring or points system page for the exact format of your contest."}, {"title": "Edit the rules", "body": "In the Fantasy Point Calculator choose cricket, then change each value so it matches your app. Save the set so you can reuse it."}, {"title": "Enter the scorecard counts", "body": "Type the player's runs, fours, sixes, wickets, maidens, catches, stumpings or run outs, and 1 for a duck if it applies."}, {"title": "Read the breakdown", "body": "The calculator shows quantity × points for each line and the total. Apply any captain multiplier afterwards."}],
    examples: [{"title": "A batter with a quick fifty", "body": "54 runs, six fours, two sixes and one catch under the default rules: 54 + 6 + 4 + 8 = 72 points."}, {"title": "A bowler with three wickets", "body": "12 runs, one four, three wickets and one maiden: 12 + 1 + 75 + 8 = 96 points. The bowler outscores the batter despite making far fewer runs."}, {"title": "A fielder with a duck", "body": "0 runs and out for a duck, two catches and one run out: 0 + 16 + 12 − 2 = 26 points."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Rules are platform-specific", "body": "Use the values from your own app. The calculator's defaults are illustrative and every value can be edited."}, {"heading": "Counts cannot be negative", "body": "Enter each event as a count of 0 or more. A penalty comes from a negative points value, not a negative count."}, {"heading": "Bonuses sit on top of runs", "body": "A four is four runs plus the four bonus, so do not subtract boundary runs from the total runs."}, {"heading": "Check the format", "body": "T20, one-day and Test contests often have different tables, even on the same platform."}],
    faqs: [{"question": "Do boundary bonuses replace the runs from a four or six?", "answer": "No. In most systems the runs are counted normally and the bonus is added on top. Under the calculator's defaults a six is worth 6 run points plus a 2-point bonus."}, {"question": "Why does a bowler often score more than a batter?", "answer": "Wickets carry a high value. With 25 points each, three wickets are worth as much as 75 runs, which is a big innings in a T20 match."}, {"question": "Does a duck penalty apply to bowlers?", "answer": "It depends on the platform. Many restrict it to batters, keepers and all-rounders. Enter 1 in the duck row only if your league's rules apply it to that player."}, {"question": "What counts as a maiden over?", "answer": "An over in which the bowler concedes no runs that are charged to the bowler. Use the maiden count from the scorecard."}, {"question": "Are stumpings and run outs worth the same?", "answer": "In the calculator's defaults they share one line worth 12 points. Some platforms split them or treat direct and assisted run outs differently, so add separate lines if your app does."}, {"question": "How do I handle strike-rate or economy bonuses?", "answer": "Work out which band the player falls into using your app's rules, then add the bonus or penalty as its own line in a custom rule set."}, {"question": "How do captain points work?", "answer": "Most apps multiply a captain's total, and a vice-captain's by a smaller factor. Calculate the base total first, then multiply it by your app's figure."}, {"question": "Can I keep different rule sets for T20 and one-day contests?", "answer": "Yes. Save one custom rule set per format, with a clear name, and pick the right one before you enter the scorecard."}, {"question": "Where do I find the official numbers for a match?", "answer": "Use the official scorecard for runs, boundaries, wickets, maidens and dismissals, and your fantasy app's points page for the values."}, {"question": "Why does my total differ from the app by a few points?", "answer": "Usually a bonus is missing, such as a milestone, strike-rate or economy bonus, or the app counts an extra event such as playing in the starting eleven. Compare the app's breakdown line by line."}],
    faqMax: 10,
    cta: { before: "Check a player's total with your own league's values in the ", linkLabel: "Fantasy Point Calculator", href: "/tools/fantasy-point-calculator", after: "." },
    alsoSee: [{"before": "For football and other sports, read ", "linkLabel": "how to calculate fantasy points", "href": "/guides/how-to-calculate-fantasy-points", "after": "."}, {"before": "To compare players over several matches, use the ", "linkLabel": "Average Calculator", "href": "/tools/average-calculator", "after": "."}, {"before": "To compare scores as a share of a total, use the ", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}],
    sources: [{"label": "MCC – The Laws of Cricket", "href": "https://www.lords.org/mcc/the-laws-of-cricket"}],
  },
};

const kCutoff: ToolGuide = {
  article: toolGuideArticle({
    slug: "kindergarten-age-cutoff-dates",
    title: "Kindergarten Age Cutoff Dates: How Birthdays Affect School Start",
    primaryKeyword: "kindergarten cutoff date",
    secondaryKeywords: ["kindergarten age cutoff by state", "september 1 cutoff kindergarten", "summer birthday kindergarten", "when can my child start kindergarten", "graduation year by birthday"],
    toolSlug: "graduation-calculator-by-birthday",
    siblingToolSlugs: ["age-calculator", "date-difference-calculator"],
    metaTitle: "Kindergarten Age Cutoff Dates by State and How They Work",
    metaDescription: "Most US states require a child to be 5 by a cutoff date, often September 1. See common state cutoffs and how one day can change school start and graduation.",
    excerpt: "A kindergarten cutoff date decides which school year a child starts in. This guide explains how cutoffs work, lists common state dates from NCES and shows how a birthday moves the graduation year.",
    relatedArticles: ["how-to-find-graduation-year-by-birthday", "how-many-working-days-in-2027", "cumulative-gpa-vs-semester-gpa"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: in most US states a child can start kindergarten in the school year that begins after they turn 5, as long as they are 5 on or before a set cutoff date. The most common cutoff is September 1, used by states such as California, Texas, Florida and Illinois in the NCES 2020 table, but others use dates from July 31 to January 1, and some, such as New York and Pennsylvania, leave it to local districts. A child born on September 1 with a September 1 cutoff starts a year earlier than a child born on September 2. The Graduation Calculator by Birthday applies your cutoff and shows the start year and expected graduation year.",
    why: "Parents planning childcare, a move or a summer-birthday decision need to know which year their child is eligible. The same birthday can put a child in different classes in different states, and that difference carries all the way through to high school graduation. Checking the cutoff early avoids surprises at enrollment.",
    sections: [
      {
        id: "what",
        heading: "What is a kindergarten cutoff date?",
        paragraphs: ["A cutoff date is the day by which a child must reach the entrance age, usually 5, to enroll in kindergarten that school year. If the cutoff is September 1, a child who turns 5 on or before September 1 can start that autumn. A child who turns 5 on September 2 or later waits until the next year.", "The rule creates an age range in every class. With a September 1 cutoff, the oldest children in a kindergarten class were born in early September and the youngest on September 1 of the following year, so classmates can be almost a full year apart in age."],
      },
      {
        id: "states",
        heading: "What cutoff dates do states use?",
        paragraphs: ["The National Center for Education Statistics publishes a state-by-state table of kindergarten entrance ages compiled from the Education Commission of the States. In its 2020 edition, most states list the entrance age as 5 on or before a specific date. A selection is below; check your state education department or school district for the current rule, because laws change and districts sometimes have their own options."],
        table: { caption: "Kindergarten entrance age, selected states (NCES Table 1.3, 2020)", headers: ["State", "Entrance age rule"], rows: [["California", "5 on or before 9/1"], ["Texas", "5 on or before 9/1"], ["Florida", "5 on or before 9/1"], ["Illinois", "5 on or before 9/1"], ["Colorado", "5 on or before 10/1"], ["Connecticut", "5 on or before 1/1"], ["Arkansas", "5 on or before 8/1"], ["Kentucky", "5 on or before 7/31"], ["Tennessee", "5 on or before 8/15"], ["Maine", "5 on or before 10/15"], ["Virginia", "5 on or before 9/30"], ["New York", "Local education agency option"], ["Pennsylvania", "Local education agency option"], ["Massachusetts", "Each district sets its own minimum age"]] },
      },
      {
        id: "local",
        heading: "What if my state lets districts decide?",
        paragraphs: ["In states marked as a local option, each district sets its own entrance age or cutoff. New York, Pennsylvania, New Jersey and Ohio are listed that way in the NCES table, and Massachusetts lets each district establish its own minimum age. Two neighbouring districts can therefore use different dates.", "For these states, the district's enrollment page or registration office is the source to trust. Once you know the date, enter it in the calculator as the cutoff month and day."],
      },
      {
        id: "one-day",
        heading: "How can one day change the school start year?",
        paragraphs: ["Cutoffs are inclusive in most state rules: on or before the date. Using the calculator's defaults (entry age 5, cutoff September 1, school year September to June, 13 school years), a child born on August 31, 2021 or September 1, 2021 starts kindergarten in 2026 and is expected to graduate high school in 2039. A child born on September 2, 2021 starts in 2027 and graduates in 2040.", "The same child can land in a different year under another state's rule. A child born on September 15, 2021 starts in 2027 with a September 1 cutoff, but in 2026 with an October 1 or December 31 cutoff, because the calculator checks whether the child is 5 on or before the cutoff in the starting year. Connecticut-style January 1 rules refer to the January after school starts, so for those enter December 31, which gives the same start year for every birthday except January 1 itself; check that one case with the district."],
        table: { caption: "Start year for a child born September 15, 2021 (entry age 5)", headers: ["Cutoff", "Kindergarten start", "High school graduation"], rows: [["September 1", "2027", "2040"], ["October 1", "2026", "2039"], ["December 31", "2026", "2039"]] },
      },
      {
        id: "leap",
        heading: "How are February 29 birthdays handled?",
        paragraphs: ["A child born on February 29 has no birthday in common years. The calculator treats it as March 1 in those years, so the child turns 5 on March 1 when the fifth birthday year is not a leap year. With a September 1 cutoff this rarely matters, because the child is 5 well before the date: a February 29, 2020 birthday starts kindergarten in 2025."],
      },
      {
        id: "summer",
        heading: "What about children with summer birthdays?",
        paragraphs: ["Children born in the months just before the cutoff are the youngest in their class. Some families choose to wait a year, often called redshirting, and some states let children start early after an assessment. Whether either is allowed depends on state law and district policy, so ask the school before you plan around it.", "Compulsory school age is a separate rule. The NCES table shows that the age at which school becomes required ranges from 5 to 8 by state, and not every state requires kindergarten attendance. A child may be eligible for kindergarten at 5 without being required to attend until later."],
      },
      {
        id: "plan",
        heading: "How early should I check the cutoff?",
        paragraphs: ["Check at least a year before you expect your child to start. Many districts open kindergarten registration in the winter or spring before the autumn start, and some ask for proof of age, such as a birth certificate, and proof of address when you enrol.", "If your child's birthday falls within a few weeks of the cutoff, call the district and ask whether it accepts early-entry requests, whether it offers a transitional kindergarten or pre-kindergarten year, and what documents it needs. Then enter the date in the calculator to see how each option changes the later school years."],
      },
    ],
    stepsHeading: "How do I find my child's kindergarten start year?",
    steps: [{"title": "Find your cutoff", "body": "Look up the rule from your state education department or school district."}, {"title": "Enter the birthday", "body": "Type the child's birth date in the Graduation Calculator by Birthday."}, {"title": "Set the cutoff and entry age", "body": "Enter the entry age, usually 5, and the cutoff month and day."}, {"title": "Read the timeline", "body": "The calculator shows the kindergarten start year, each school year and the expected graduation year."}],
    examples: [{"title": "Born on the cutoff", "body": "Born September 1, 2021 with a September 1 cutoff: eligible, starts in 2026, graduates in 2039."}, {"title": "Born a day later", "body": "Born September 2, 2021 with the same cutoff: starts in 2027, graduates in 2040."}, {"title": "Later state cutoff", "body": "Born September 15, 2021 with an October 1 cutoff: starts in 2026 instead of 2027."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Laws change", "body": "The NCES table is a 2020 snapshot. Confirm the current rule with your state or district."}, {"heading": "Districts may differ", "body": "In local-option states, use your district's own cutoff."}, {"heading": "Exceptions exist", "body": "Early entry and delayed entry rules vary and are set by schools, not the calculator."}, {"heading": "Results are estimates", "body": "Grade retention, acceleration or a move to another state can change the graduation year."}],
    faqs: [{"question": "What is the most common kindergarten cutoff in the US?", "answer": "September 1 is the most common date in the NCES 2020 table, used by states including Alabama, California, Florida, Illinois, Texas and Utah."}, {"question": "Which state has the latest cutoff?", "answer": "In the NCES 2020 table, Connecticut lists 5 on or before January 1, the latest date shown."}, {"question": "Is the cutoff date inclusive?", "answer": "Most state rules say on or before the date, so a child who turns 5 on the cutoff day is eligible that year."}, {"question": "Does New York have a statewide kindergarten cutoff?", "answer": "The NCES table lists New York as a local education agency option, so check your district's enrollment rules."}, {"question": "Can my child start kindergarten at 4?", "answer": "Some states and districts allow early entry after an assessment, and some offer 4-year-old kindergarten programmes. Ask your district what it allows."}, {"question": "Is kindergarten compulsory?", "answer": "Not everywhere. The NCES 2020 table counts 20 jurisdictions, including the District of Columbia, that required kindergarten attendance; elsewhere compulsory school age starts later."}, {"question": "What is redshirting?", "answer": "It means delaying kindergarten entry by a year, usually for a child with a birthday close to the cutoff. Rules on delayed entry vary by state."}, {"question": "Does the cutoff change if we move states?", "answer": "The new state's rules apply. A child may be placed in a different grade than expected, so contact the new district early."}, {"question": "Does the calculator know my state's cutoff automatically?", "answer": "No. You enter the cutoff month and day yourself, so it works for any state, district or country rule."}, {"question": "How does the cutoff affect graduation year?", "answer": "Starting a year later moves every following year by one, so a one-day birthday difference can change the high school graduation year."}],
    faqMax: 10,
    cta: { before: "Enter a birthday and your local cutoff in the ", linkLabel: "Graduation Calculator by Birthday", href: "/tools/graduation-calculator-by-birthday", after: "." },
    alsoSee: [{"before": "For a full walkthrough of the timeline, read ", "linkLabel": "how to find graduation year by birthday", "href": "/guides/how-to-find-graduation-year-by-birthday", "after": "."}, {"before": "To check an exact age on a date, use the ", "linkLabel": "Age Calculator", "href": "/tools/age-calculator", "after": "."}, {"before": "To count days to the cutoff, use the ", "linkLabel": "Date Difference Calculator", "href": "/tools/date-difference-calculator", "after": "."}],
    sources: [{"label": "NCES – Table 1.3: Kindergarten entrance and attendance requirements by state, 2020", "href": "https://nces.ed.gov/programs/statereform/tab1_3-2020.asp"}],
  },
};

const uiDuration: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-long-unemployment-benefits-last",
    title: "How Long Unemployment Benefits Last in California, New York, Texas and Florida",
    primaryKeyword: "how long does unemployment last",
    secondaryKeywords: ["how many weeks of unemployment", "unemployment benefit duration by state", "florida unemployment 12 weeks", "texas unemployment 26 weeks", "california unemployment weeks"],
    toolSlug: "unemployment-benefits-calculator",
    siblingToolSlugs: ["date-difference-calculator", "business-days-calculator"],
    metaTitle: "How Long Unemployment Lasts in CA, NY, TX and FL",
    metaDescription: "Unemployment lasts up to 26 weeks in California, New York and Texas and 12 weeks in Florida for 2025 and 2026 claims. See why your own claim may be shorter.",
    excerpt: "The headline maximum is not always the number of weeks you get. This guide explains the duration rules in four large states and how base-period wages can shorten a claim.",
    relatedArticles: ["how-to-estimate-unemployment-benefits", "how-many-working-days-in-2027", "debt-snowball-vs-avalanche"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: regular state unemployment benefits last up to 26 weeks in California, New York and Texas. Florida pays up to 12 weeks for claims in 2025 and 2026, because its law ties duration to the state unemployment rate, from 12 weeks up to 23. Those are maximums. In California, Texas and Florida the total you can draw is also capped by your base-period wages, so a claim with uneven earnings can run out sooner: in the calculator, $2,000, $12,000, $3,000 and $0 quarters give about 18 full weeks in California and 9 in Texas. The Unemployment Benefits Calculator estimates the weekly amount, claim total and weeks for these four states.",
    why: "Knowing how long payments can last helps you plan a budget, decide how hard to push a job search and avoid assuming a full six months that your claim may not cover. Duration rules differ by state and are set in state law, so a national average is not much help when you are filing.",
    sections: [
      {
        id: "max",
        heading: "What is the maximum duration in each state?",
        paragraphs: ["Each state sets its own duration in law. The calculator stores these rules with links to the agency sources, and the table below summarises them. They cover regular state benefits only; federal extensions are only available in some economic conditions and are not included."],
        table: { caption: "Regular unemployment duration (calculator data, checked November 2026)", headers: ["State", "Maximum duration", "Weekly range"], rows: [["California", "Up to 26 weeks", "$40–$450"], ["New York", "Up to 26 weeks; first week unpaid waiting week", "$140–$869"], ["Texas", "Up to 26 weeks within a 52-week benefit year", "$76–$619"], ["Florida", "12 weeks for 2025 and 2026 claims (12–23 by law)", "$32–$275"]] },
      },
      {
        id: "florida",
        heading: "Why does Florida pay only 12 weeks?",
        paragraphs: ["Florida Statutes section 443.111 links duration to the state's average unemployment rate. For claims submitted in a calendar year, benefits are limited to 12 weeks if the rate is at or below 5 percent, plus one extra week for each 0.5 percent above 5 percent, up to 23 weeks when the rate reaches 10.5 percent or more.", "With the state's unemployment rate below that threshold, claims in 2025 and 2026 get 12 weeks. If the rate rose sharply, later claims could receive more weeks under the same formula. The calculator uses the 12-week value set for current claims."],
      },
      {
        id: "shorter",
        heading: "Why might my claim last fewer weeks than the maximum?",
        paragraphs: ["In several states the claim has a total-dollar cap as well as a week cap. The calculator works out the claim total and divides it by the weekly amount to show how many full weeks it covers. If your wages were concentrated in one quarter, the total cap can bite first.", "California's total is the lesser of 26 × the weekly amount or half of base-period wages. Texas uses 26 × the weekly amount or 27 percent of base-period wages. Florida uses the lesser of 25 percent of base-period wages or $3,300. New York pays up to 26 weeks of the weekly amount, but you must meet its qualifying rules first."],
      },
      {
        id: "example",
        heading: "How do wages change the number of weeks?",
        paragraphs: ["Here are two sets of quarterly wages run through the calculator. Steady earnings of $9,000 in each quarter qualify for the full duration in all four states. Uneven earnings of $2,000, $12,000, $3,000 and $0 shorten the claim in California and Texas, and fail the 1.5 × high-quarter test in New York and Florida."],
        table: { caption: "Calculator results for two wage patterns", headers: ["State", "$9,000 × 4 quarters", "$2,000 / $12,000 / $3,000 / $0"], rows: [["California", "$347 a week, $9,022 total, 26 weeks", "$450 a week, $8,500 total, 18 weeks"], ["New York", "$346 a week, $8,996 total, 26 weeks", "May not qualify (needs 1.5 × high quarter)"], ["Texas", "$360 a week, $9,360 total, 26 weeks", "$480 a week, $4,590 total, 9 weeks"], ["Florida", "$275 a week, $3,300 total, 12 weeks", "May not qualify (needs 1.5 × high quarter)"]] },
      },
      {
        id: "waiting",
        heading: "Does a waiting week reduce the duration?",
        paragraphs: ["New York's rules include an unpaid waiting week at the start of a claim, which the calculator notes in its duration text. A waiting week delays the first payment; it does not add money to the claim. Other states may also have waiting weeks or rules that change over time, so read your agency's claimant handbook or determination letter for the exact schedule."],
      },
      {
        id: "ends",
        heading: "What happens when benefits run out?",
        paragraphs: ["When you have drawn the full claim total, or reached the week limit, regular payments stop for that benefit year even if you are still unemployed. You may be able to file a new claim once a new benefit year starts and you have enough new wages.", "Federal extended benefit programmes switch on only when unemployment is high in a state. If one applies, your state agency will announce it. Until then, plan your budget on the regular duration and your own claim total."],
      },
      {
        id: "plan",
        heading: "How should I plan my budget around the duration?",
        paragraphs: ["Start from the number of weeks your own claim covers, not the state maximum. Multiply your weekly amount by those weeks to get the claim total, then compare it with your monthly costs. In the uneven-wage Texas example, $4,590 spread across 9 weeks is roughly two months of income, which is very different from six.", "Next, list the costs you can pause or reduce while you search, and the payments you must keep up. Keep certifying for benefits on time each week or fortnight as your state requires, because a missed certification can delay payments even when weeks remain on the claim."],
      },
      {
        id: "records",
        heading: "What records help me get the right number of weeks?",
        paragraphs: ["Your state agency calculates the claim from the wages employers reported for your base period. If a job is missing or a quarter looks too low on your monetary determination, the weekly amount and the claim total can both be too small, and so can the number of weeks.", "Keep pay stubs, W-2 forms and any letters from employers. If the figures in the determination do not match your records, follow the agency's process to request a correction or reconsideration within the deadline it gives."],
      },
    ],
    stepsHeading: "How do I estimate how long my benefits will last?",
    steps: [{"title": "Choose your state", "body": "Select California, New York, Texas or Florida in the Unemployment Benefits Calculator."}, {"title": "Enter base-period wages", "body": "Type your gross wages for each of the four base-period quarters, as shown on your pay records or W-2."}, {"title": "Read the result", "body": "The calculator shows the weekly amount, the claim total and the number of weeks the total covers."}, {"title": "Confirm with the state", "body": "Your state agency's monetary determination is the official figure. Compare it with the estimate."}],
    examples: [{"title": "Steady wages in Texas", "body": "$9,000 a quarter gives $360 a week and a $9,360 total, covering 26 weeks."}, {"title": "Uneven wages in California", "body": "$2,000, $12,000, $3,000 and $0 give $450 a week, capped by the state maximum, and an $8,500 total, about 18 full weeks."}, {"title": "Steady wages in Florida", "body": "$9,000 a quarter gives $275 a week, the state maximum, and a $3,300 total over 12 weeks."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Four states only", "body": "The calculator supports California, New York, Texas and Florida. Other states have different rules."}, {"heading": "Estimates, not decisions", "body": "Only the state agency can confirm eligibility, the weekly amount and the duration."}, {"heading": "Rules change", "body": "Benefit amounts and Florida's weeks are reviewed regularly. The calculator shows when its data was last checked."}, {"heading": "Taxes and deductions", "body": "Benefits may be taxable, and deductions such as withholding are not included in the estimate."}],
    faqs: [{"question": "Is 26 weeks the standard in most states?", "answer": "Many states use 26 weeks for regular benefits, including California, New York and Texas, but some, such as Florida, use fewer."}, {"question": "How many weeks of unemployment does Florida pay in 2026?", "answer": "Florida pays 12 weeks for 2025 and 2026 claims under the formula in Florida Statutes section 443.111."}, {"question": "Can Florida's duration increase?", "answer": "Yes. The statute adds one week for each 0.5 percent of average unemployment above 5 percent, up to 23 weeks at 10.5 percent or more."}, {"question": "Why does the calculator show fewer than 26 weeks in Texas?", "answer": "Texas caps the claim total at 27 percent of base-period wages if that is less than 26 weekly payments, so uneven wages can shorten the claim."}, {"question": "Does California always pay 26 weeks?", "answer": "Only if half of your base-period wages covers 26 weekly payments. Otherwise the claim total runs out sooner."}, {"question": "Do I get paid for New York's waiting week?", "answer": "No. New York's first week is an unpaid waiting week, so it delays the first payment."}, {"question": "Does part-time work extend my claim?", "answer": "In many states, partial benefits paid while you work part time draw less from the claim total, so it can last more calendar weeks. Check your state's partial benefit rules."}, {"question": "Can I reopen a claim after a break?", "answer": "Usually yes, within the same benefit year, if money remains on the claim. Ask your state agency how to reopen."}, {"question": "Are federal extensions included?", "answer": "No. The calculator covers regular state benefits only."}, {"question": "How do I count the weeks on a calendar?", "answer": "Use the Date Difference Calculator from your claim's effective date to see when the last week would fall."}],
    faqMax: 10,
    cta: { before: "Estimate your weekly amount and number of weeks in the ", linkLabel: "Unemployment Benefits Calculator", href: "/tools/unemployment-benefits-calculator", after: "." },
    alsoSee: [{"before": "For how the weekly amount is worked out, read ", "linkLabel": "how to estimate unemployment benefits", "href": "/guides/how-to-estimate-unemployment-benefits", "after": "."}, {"before": "To find the end date of a claim, use the ", "linkLabel": "Date Difference Calculator", "href": "/tools/date-difference-calculator", "after": "."}, {"before": "To plan payments while on a reduced income, read ", "linkLabel": "debt snowball vs avalanche", "href": "/guides/debt-snowball-vs-avalanche", "after": "."}],
    sources: [{"label": "Florida Statutes 443.111 – Payment of benefits", "href": "https://www.flsenate.gov/Laws/Statutes/2026/443.111"}, {"label": "California EDD – UI Benefit Calculator", "href": "https://edd.ca.gov/en/unemployment/UI-Calculator/"}],
  },
};

const jsonXmlYaml: ToolGuide = {
  article: toolGuideArticle({
    slug: "json-vs-xml-vs-yaml",
    title: "JSON vs XML vs YAML: Which Data Format Should You Use?",
    primaryKeyword: "json vs yaml",
    secondaryKeywords: ["json vs xml", "xml vs yaml", "difference between json and yaml", "is yaml a superset of json", "config file format"],
    toolSlug: "json-formatter",
    siblingToolSlugs: ["csv-to-json", "json-to-csv"],
    metaTitle: "JSON vs XML vs YAML: Differences and When to Use Each",
    metaDescription: "Compare JSON, XML and YAML: syntax, comments, data types, strictness and typical uses, with the same data written in all three formats and tips for choosing.",
    excerpt: "JSON, XML and YAML can all describe the same data. This guide compares their syntax, strengths and pitfalls, shows one record in each format and explains when to pick which.",
    relatedArticles: ["common-json-errors-and-how-to-fix-them", "regex-cheat-sheet-email-phone-url", "how-to-minify-javascript"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: use JSON for APIs and data exchanged between programs, because it is small, strict and parsed natively by JavaScript and nearly every language. Use YAML for configuration files that people edit by hand, because it allows comments and needs less punctuation. Use XML when a standard or system requires it, or when you need attributes, mixed text and markup, namespaces or schema validation. All three can represent the same nested data. YAML 1.2 was designed so that JSON is valid YAML, which makes converting from JSON to YAML straightforward. Before sending JSON anywhere, check it in the JSON Formatter.",
    why: "Picking a format affects how easily people can read files, how many mistakes slip in and which tools you can use. A config written in strict JSON cannot hold a comment explaining a setting, while a YAML file can break because of one wrong indent. Knowing the trade-offs saves debugging time later.",
    sections: [
      {
        id: "same-data",
        heading: "What does the same data look like in each format?",
        paragraphs: ["Here is one small record, a user with a name, two tags and an active flag, in each format. In JSON it is {\"name\": \"Ali\", \"tags\": [\"a\", \"b\"], \"active\": true}. The JSON Formatter prints it with two-space indentation, one key per line.", "In YAML the same record is three lines: name: Ali, then tags: followed by two list items written as - a and - b, then active: true. In XML it might be <user active=\"true\"><name>Ali</name><tags><tag>a</tag><tag>b</tag></tags></user>. XML has no built-in list or boolean type, so the author decides whether active is an attribute or an element and how tags are wrapped."],
      },
      {
        id: "compare",
        heading: "How do JSON, XML and YAML compare?",
        paragraphs: ["The table summarises the main differences. JSON is defined in RFC 8259, YAML in the YAML 1.2.2 specification and XML in the W3C XML 1.0 recommendation."],
        table: { caption: "Format comparison", headers: ["Feature", "JSON", "YAML", "XML"], rows: [["Comments", "Not allowed", "Yes, after a hash sign", "Yes, inside <!-- -->"], ["Data types", "String, number, boolean, null, object, array", "Same as JSON plus more via tags", "Text only; types come from a schema"], ["Structure", "Braces and brackets", "Indentation", "Opening and closing tags"], ["Strictness", "Very strict", "Flexible, indentation-sensitive", "Strict well-formedness rules"], ["Typical use", "APIs, web data, logs", "Configuration, CI pipelines", "Documents, feeds, enterprise and legacy standards"], ["File size", "Small", "Smallest for hand-written config", "Largest because of closing tags"]] },
      },
      {
        id: "json",
        heading: "When is JSON the best choice?",
        paragraphs: ["JSON suits data sent between programs. Its grammar is small: objects, arrays, strings in double quotes, numbers, true, false and null. RFC 8259 also says JSON exchanged between systems that are not part of a closed ecosystem must be encoded in UTF-8, which removes a whole class of character-set problems.", "The strictness is a feature. There are no comments, no trailing commas and no single-quoted strings, so any two parsers should read the same text the same way. JavaScript can turn JSON into objects with JSON.parse, and most languages ship a JSON library."],
      },
      {
        id: "yaml",
        heading: "When is YAML the better choice?",
        paragraphs: ["YAML is popular for configuration because people can read and edit it with little punctuation and leave comments that explain each setting. Lists, nested maps and long strings are easy to write.", "The cost is that whitespace matters. A wrong indent changes the structure or makes the file invalid, and tabs are not allowed for indentation. Unquoted values can also be interpreted in ways you did not intend, so quote strings that look like numbers, dates or booleans, such as version numbers or country codes."],
      },
      {
        id: "xml",
        heading: "When should I still use XML?",
        paragraphs: ["XML remains the right choice when a standard requires it, for example many document formats, RSS feeds, SOAP services and industry data exchanges. It supports attributes, namespaces and mixed content, where text and tags are interleaved, which JSON and YAML handle awkwardly.", "XML also has mature schema languages and transformation tools. If you need strict validation of a document's shape and the systems you talk to already speak XML, switching to JSON may add more work than it saves."],
      },
      {
        id: "convert",
        heading: "Can I convert between the formats?",
        paragraphs: ["JSON to YAML is the easiest conversion, because YAML 1.2 aims to be a superset of JSON. JSON to XML and back needs decisions about attributes, repeated elements and types, so automated converters can produce different results.", "Whichever direction you go, validate the result. For JSON, paste it into the JSON Formatter and click Validate. For tabular data, the CSV to JSON and JSON to CSV tools convert between rows and objects."],
      },
      {
        id: "pitfalls",
        heading: "What mistakes are common in each format?",
        paragraphs: ["In JSON, the usual problems are trailing commas, single quotes, unquoted keys and comments left in from JavaScript or a config template. Each one makes the whole document fail to parse, so a validator catches them immediately.", "In YAML, the usual problems are inconsistent indentation, a tab character where spaces were expected, and unquoted values that a parser reads as a different type, such as a version number like 1.10 being treated as a number. Quoting values that must stay strings avoids most surprises.", "In XML, the usual problems are a missing closing tag, tags closed in the wrong order, an unescaped ampersand or less-than sign in text, and attribute values without quotes. XML parsers stop at the first well-formedness error, much as JSON parsers do."],
      },
      {
        id: "security",
        heading: "Are there safety differences between the formats?",
        paragraphs: ["Any format can be risky if a program trusts input blindly. With JSON, the main rule is to parse with a real JSON parser such as JSON.parse rather than evaluating the text as code. With YAML and XML, some libraries support features that load custom objects or external entities, so use safe-loading options and keep libraries up to date.", "Whatever the format, validate the structure and values your application expects after parsing. A syntactically valid file can still contain a wrong type, a missing field or an unexpectedly large value."],
      },
      {
        id: "tooling",
        heading: "What tools help with each format?",
        paragraphs: ["For JSON, a formatter and validator is the first stop: paste the text, check it, then pretty-print it for reading or minify it for sending. Code editors also highlight JSON errors as you type.", "For YAML, many editors and CI systems offer linting that flags indentation and duplicate keys. For XML, schema validators check a document against an XSD or similar definition. Using the checker that matches the format, before the file reaches production, prevents most failures."],
      },
    ],
    stepsHeading: "How do I choose a format for a project?",
    steps: [{"title": "Check what the other side expects", "body": "If an API, platform or standard specifies a format, use it."}, {"title": "Consider who edits the file", "body": "Hand-edited configuration favours YAML; machine-generated data favours JSON."}, {"title": "Think about validation", "body": "Need schemas and namespaces? XML has the most mature tools. JSON Schema covers many JSON cases."}, {"title": "Validate before shipping", "body": "Run JSON through the JSON Formatter so syntax errors are caught early."}],
    examples: [{"title": "An API response", "body": "A list of products sent to a browser: JSON, because the browser parses it natively."}, {"title": "A CI pipeline", "body": "Build steps with comments explaining each job: YAML."}, {"title": "A news feed", "body": "An RSS feed read by podcast and feed apps: XML, because the format is defined in XML."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "JSON has no comments", "body": "If you need notes in a JSON file, keep them in a separate field or documentation."}, {"heading": "YAML indentation matters", "body": "Use spaces, not tabs, and keep indentation consistent."}, {"heading": "XML needs well-formed tags", "body": "Every opening tag needs a matching close, and attribute values need quotes."}, {"heading": "Size limit in the formatter", "body": "The JSON Formatter accepts up to 750,000 characters."}],
    faqs: [{"question": "Is YAML a superset of JSON?", "answer": "YAML 1.2 was designed so that JSON documents are valid YAML, which is why many YAML parsers can read JSON files."}, {"question": "Is JSON faster to parse than XML?", "answer": "Usually, because its grammar is simpler and many runtimes have built-in parsers, but speed depends on the library and the data."}, {"question": "Can JSON have comments?", "answer": "No. RFC 8259 does not allow comments, so a parser such as JSON.parse rejects them."}, {"question": "Why do so many config files use YAML?", "answer": "Because it is easy to read, allows comments and needs fewer brackets and quotes than JSON or XML."}, {"question": "Does XML have data types?", "answer": "Not by itself. Everything is text unless a schema defines types for elements and attributes."}, {"question": "Which format is smallest?", "answer": "For the same data, minified JSON and YAML are usually much smaller than XML because XML repeats each tag name when closing it."}, {"question": "Can YAML use tabs for indentation?", "answer": "No. YAML indentation must use spaces."}, {"question": "Is JSON5 the same as JSON?", "answer": "No. JSON5 adds features such as comments and trailing commas; standard JSON parsers reject those."}, {"question": "Should I store dates as strings in JSON?", "answer": "Yes. JSON has no date type, so ISO 8601 strings such as 2026-11-04 are the common choice."}, {"question": "How do I check JSON before converting it to YAML?", "answer": "Paste it into the JSON Formatter and click Validate. Fix any error it reports, then convert."}],
    faqMax: 10,
    cta: { before: "Validate and pretty-print your JSON in the ", linkLabel: "JSON Formatter", href: "/tools/json-formatter", after: "." },
    alsoSee: [{"before": "If parsing fails, read ", "linkLabel": "common JSON errors and how to fix them", "href": "/guides/common-json-errors-and-how-to-fix-them", "after": "."}, {"before": "To turn spreadsheets into JSON, use ", "linkLabel": "CSV to JSON", "href": "/tools/csv-to-json", "after": "."}, {"before": "To flatten JSON into rows, use ", "linkLabel": "JSON to CSV", "href": "/tools/json-to-csv", "after": "."}],
    sources: [{"label": "RFC 8259 – The JSON Data Interchange Format", "href": "https://www.rfc-editor.org/rfc/rfc8259"}, {"label": "YAML Ain't Markup Language version 1.2.2", "href": "https://yaml.org/spec/1.2.2/"}],
  },
};

const jsonErrors: ToolGuide = {
  article: toolGuideArticle({
    slug: "common-json-errors-and-how-to-fix-them",
    title: "Common JSON Errors and How to Fix Them",
    primaryKeyword: "json parse error unexpected token",
    secondaryKeywords: ["unexpected token in json at position", "invalid json", "json trailing comma", "expected property name or '}'", "bad control character in string literal"],
    toolSlug: "json-formatter",
    siblingToolSlugs: ["csv-to-json", "jwt-decoder"],
    metaTitle: "Common JSON Errors and How to Fix Them (With Examples)",
    metaDescription: "Fix JSON parse errors such as unexpected token, expected property name, trailing commas, single quotes, comments and control characters, with real messages.",
    excerpt: "Most JSON errors come from a handful of mistakes. This guide shows the exact error messages for each one, what the position number means and how to fix the text.",
    relatedArticles: ["json-vs-xml-vs-yaml", "regex-cheat-sheet-email-phone-url", "how-to-minify-javascript"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a JSON parse error means the text breaks one of JSON's strict rules. The most common causes are a trailing comma, single quotes, unquoted keys, comments, a missing comma between values, an unclosed bracket, a raw line break inside a string and values such as NaN or 01 that JSON does not allow. The error's position number counts characters from zero, so position 7 is the eighth character. Paste the text into the JSON Formatter and click Validate: it reports messages such as \"Invalid JSON at position 7. Expected double-quoted property name in JSON at position 7 (line 1 column 8)\".",
    why: "A single misplaced character can stop an API request, a build or a config load. Error messages are short and the position can be far from where you made the mistake, so knowing what each message usually means gets you to the fix much faster.",
    sections: [
      {
        id: "read",
        heading: "How do I read a JSON error message?",
        paragraphs: ["The JSON Formatter uses the browser's JSON.parse and adds the position it reports. The messages shown in this guide come from the V8 engine used by Chrome, Edge and Node.js; Firefox and Safari word them differently, as MDN's JSON.parse error reference shows, but they point to the same problems.", "Position is a zero-based character offset. The tool's message also includes the line and column, which count from one. Look at the character at that point and the one just before it: the parser stops where it first realises the text is invalid, which is often just after the real mistake."],
      },
      {
        id: "table",
        heading: "What do the common error messages mean?",
        paragraphs: ["Each row below was produced by running the input through the JSON Formatter's validator."],
        table: { caption: "JSON errors and their causes", headers: ["Input", "Error message (V8)", "Cause"], rows: [["{\"a\":1,}", "Expected double-quoted property name … position 7", "Trailing comma"], ["{'a':1}", "Expected property name or '}' … position 1", "Single quotes"], ["{a:1}", "Expected property name or '}' … position 1", "Unquoted key"], ["{\"a\":1 // c}", "Expected ',' or '}' after property value … position 7", "Comment"], ["{\"a\":1 \"b\":2}", "Expected ',' or '}' after property value … position 7", "Missing comma"], ["{\"a\":[1,2}", "Expected ',' or ']' after array element … position 9", "Unclosed array"], ["{\"a\":NaN}", "Unexpected token 'N'", "NaN is not JSON"], ["{\"a\":01}", "Unexpected number … position 6", "Leading zero"], ["{\"a\":1}{\"b\":2}", "Unexpected non-whitespace character after JSON … position 7", "Two values"]] },
      },
      {
        id: "commas",
        heading: "How do I fix trailing and missing commas?",
        paragraphs: ["JSON allows a comma only between items. A comma after the last property or array element, common when you copy from JavaScript, triggers \"Expected double-quoted property name\" or a similar message. Delete the final comma.", "A missing comma between two properties produces \"Expected ',' or '}' after property value\". Check the line where the position falls; the previous value usually needs a comma after it."],
      },
      {
        id: "quotes",
        heading: "How do I fix quote and key errors?",
        paragraphs: ["Every key and every string must use double quotes. Text copied from Python dictionaries or JavaScript objects often uses single quotes or bare keys, which both produce \"Expected property name or '}'\". Replace single quotes with double quotes and wrap keys such as a in quotes: \"a\".", "If a string itself contains a double quote, escape it as \\\". A backslash must also be escaped as \\\\, which matters for Windows paths."],
      },
      {
        id: "strings",
        heading: "Why does a line break inside a string fail?",
        paragraphs: ["JSON strings cannot contain raw control characters such as a newline or tab. A value that spans two lines gives \"Bad control character in string literal\". Replace the line break with the escape \\n, or a tab with \\t.", "This often happens when someone pastes multi-line text into a config value, or builds JSON by joining strings instead of using a serializer. Building data as objects and calling JSON.stringify avoids it."],
      },
      {
        id: "values",
        heading: "Which values are not allowed?",
        paragraphs: ["JSON numbers cannot have leading zeros, so 01 gives \"Unexpected number\". NaN, Infinity and undefined are JavaScript values, not JSON, so they produce \"Unexpected token\". Use null or a string instead, and remove leading zeros or store codes such as 01 as strings.", "A JSON text is exactly one value. Two objects back to back, as in newline-delimited logs, give \"Unexpected non-whitespace character after JSON\". Wrap them in an array or validate one line at a time."],
      },
      {
        id: "api",
        heading: "How do I debug JSON errors from an API?",
        paragraphs: ["When JSON.parse fails on a network response, first look at the raw body rather than the parsed result. A message that starts with \"Unexpected token '<'\" usually means the server returned an HTML page, such as a login screen, error page or proxy notice, instead of JSON.", "Check the HTTP status code and the Content-Type header. A 200 response with application/json that still fails to parse often has been cut off, which gives an unexpected end of input error, or has extra text before or after the JSON. Copy the body into the JSON Formatter to see exactly where it breaks. If the body is fine there, the problem is in how your code reads it, for example parsing it twice or parsing an object that is already parsed."],
      },
      {
        id: "prevent",
        heading: "How can I avoid JSON errors in the first place?",
        paragraphs: ["Generate JSON with a serializer instead of writing it by hand or joining strings. JSON.stringify in JavaScript, json.dumps in Python and similar functions in other languages always produce double quotes, escape special characters and omit trailing commas.", "For files people edit, such as config or translation files, run a validator in your editor or build so that a stray comma is caught before deployment. If you need comments in a config, consider a format that allows them, such as YAML, rather than putting comments in JSON."],
      },
      {
        id: "large",
        heading: "What if the JSON file is very large?",
        paragraphs: ["The JSON Formatter accepts up to 750,000 characters, which covers most API responses and config files. For larger exports, validate a smaller sample first, or split newline-delimited records and check them one at a time.", "Large files make the position number more useful than scrolling. Note the line and column from the error message, open the file in an editor, and jump straight to that line to see the character that broke the parse."],
      },
    ],
    stepsHeading: "How do I find and fix a JSON error?",
    steps: [{"title": "Paste the text", "body": "Open the JSON Formatter and paste the JSON, up to 750,000 characters."}, {"title": "Click Validate", "body": "Read the message, position, line and column."}, {"title": "Fix the character", "body": "Look at the reported spot and the character before it. Apply the matching fix from the table."}, {"title": "Validate again", "body": "Repeat until the tool says \"This JSON is valid.\", then format or minify it."}],
    examples: [{"title": "Trailing comma", "body": "{\"a\":1,} becomes {\"a\":1}."}, {"title": "Python-style dictionary", "body": "{'a': True} becomes {\"a\": true}, because JSON uses double quotes and lowercase true."}, {"title": "Multi-line string", "body": "A value with a real line break becomes \"line\\nbreak\"."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Position counts from zero", "body": "Position 7 is the eighth character; the tool also shows line and column from one."}, {"heading": "Browsers word errors differently", "body": "The cause is the same even when Firefox or Safari phrase the message another way."}, {"heading": "Empty input", "body": "An empty box returns a prompt to paste JSON, not a parse error."}, {"heading": "Valid is not the same as correct", "body": "Validation checks syntax only, not whether fields have the values your app expects."}],
    faqs: [{"question": "What does Unexpected token mean in JSON?", "answer": "The parser found a character that cannot appear at that point, such as N from NaN or a letter starting an unquoted value."}, {"question": "What does Unexpected end of JSON input mean?", "answer": "The text stopped before every object, array or string was closed. Look for a missing } or ] or a cut-off response."}, {"question": "Why is a single value such as \"hello\" valid JSON?", "answer": "RFC 8259 allows any JSON value at the top level, so a string, number, true, false or null on its own is valid."}, {"question": "Can JSON contain comments?", "answer": "No. Remove // and /* */ comments, or move notes into a regular field."}, {"question": "Why does my API return HTML instead of JSON?", "answer": "An error page or login redirect often returns HTML, which fails at the first < character. Check the response status and content type."}, {"question": "How do I escape a double quote inside a JSON string?", "answer": "Write a backslash before it: \\\"."}, {"question": "Are true, false and null case-sensitive?", "answer": "Yes. JSON accepts only lowercase true, false and null."}, {"question": "Why does a number with a leading zero fail?", "answer": "JSON forbids leading zeros except for 0 itself, to avoid confusion with octal. Store codes such as 007 as strings."}, {"question": "How do I validate newline-delimited JSON?", "answer": "Validate one line at a time, because each line is a separate JSON value."}, {"question": "Does the formatter fix errors automatically?", "answer": "No. It reports the first error and its position so you can fix the text yourself."}],
    faqMax: 10,
    cta: { before: "Paste your JSON and click Validate in the ", linkLabel: "JSON Formatter", href: "/tools/json-formatter", after: "." },
    alsoSee: [{"before": "To compare JSON with other formats, read ", "linkLabel": "JSON vs XML vs YAML", "href": "/guides/json-vs-xml-vs-yaml", "after": "."}, {"before": "To inspect a token's JSON payload, use the ", "linkLabel": "JWT Decoder", "href": "/tools/jwt-decoder", "after": "."}, {"before": "To convert rows to valid JSON, use ", "linkLabel": "CSV to JSON", "href": "/tools/csv-to-json", "after": "."}],
    sources: [{"label": "MDN – SyntaxError: JSON.parse: bad parsing", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse"}, {"label": "RFC 8259 – The JSON Data Interchange Format", "href": "https://www.rfc-editor.org/rfc/rfc8259"}],
  },
};

const regexCheat: ToolGuide = {
  article: toolGuideArticle({
    slug: "regex-cheat-sheet-email-phone-url",
    title: "Regex Cheat Sheet for Email, Phone and URL Matching",
    primaryKeyword: "regex for email validation",
    secondaryKeywords: ["email regex", "phone number regex", "url regex", "regex cheat sheet", "e.164 regex"],
    toolSlug: "regex-tester",
    siblingToolSlugs: ["url-parser", "url-encoder"],
    metaTitle: "Regex Cheat Sheet: Email, Phone and URL Patterns",
    metaDescription: "Tested regex patterns for email addresses, phone numbers and URLs, with what each matches and misses, which flags to use and how to try them in a regex tester.",
    excerpt: "Copy-ready patterns for emails, phone numbers and URLs, tested against real examples. Each one explains what it accepts, what it rejects and when a simpler check is better.",
    relatedArticles: ["common-json-errors-and-how-to-fix-them", "json-vs-xml-vs-yaml", "how-to-write-a-url-slug"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: for a practical email check, use ^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$, which requires text, an @, and a dot in the domain. For phone numbers in international E.164 form, use ^\\+[1-9]\\d{1,14}$. For web links, use ^https?:\\/\\/[^\\s/$.?#].[^\\s]*$ with the i flag. No regex can prove an email or phone number really exists, so pair the pattern with a confirmation step. Test each pattern against your own samples in the Regex Tester, which supports the g, i, m, s and u flags and shows up to 50 matches with named groups.",
    why: "Form validation, log searches and data clean-up all need these patterns, and copied regexes often reject real addresses or accept junk. Knowing what each pattern really checks lets you choose between a loose check, a strict one and no regex at all.",
    sections: [
      {
        id: "email",
        heading: "Which regex should I use for email addresses?",
        paragraphs: ["The loose pattern ^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$ accepts anything with no spaces, one @ and a dot after it. It is a good default for sign-up forms, because it rarely rejects a real address. The trade-off is that it allows some invalid ones; when searching text with the g flag and no anchors, it also picks up trailing punctuation, matching \"sales@tools-star.co.uk,\" with the comma.", "For extracting addresses from text, [A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,} is tidier: in our sample it found ali@example.com and sales@tools-star.co.uk and skipped \"bad@\" and \"@x.com\". The HTML standard defines a stricter pattern for type=email inputs, shown in the table below, which also accepts single-label domains such as ali@localhost."],
        table: { caption: "Email patterns tested in the Regex Tester", headers: ["Pattern", "Use", "Notes"], rows: [["^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "Form check", "Loose; needs a dot in the domain"], ["[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}", "Find emails in text", "Use with g; stops before commas"], ["^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$", "Match browser type=email rules", "From the HTML standard; accepts ali@localhost, rejects ali@-x.com"]] },
      },
      {
        id: "phone",
        heading: "Which regex should I use for phone numbers?",
        paragraphs: ["Phone formats vary so much by country that the most reliable approach is to store numbers in E.164 form: a plus sign, a country code and up to 15 digits in total. ^\\+[1-9]\\d{1,14}$ matches +971501234567 and +15551234567 and rejects 00971501234567 and +0123.", "For North American numbers typed in different styles, \\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4} matches 555-123-4567 and (555) 987 6543. It will not match a UK number such as 07700 900123, which is a good reminder to test with numbers from every country your users come from."],
        table: { caption: "Phone patterns", headers: ["Pattern", "Matches", "Rejects"], rows: [["^\\+[1-9]\\d{1,14}$", "+971501234567, +15551234567", "00971501234567, +0123"], ["\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}", "555-123-4567, (555) 987 6543", "07700 900123"], ["\\d{3}[.-]\\d{3}[.-]\\d{4}", "555-123-4567, 555.987.6543", "5551234567"]] },
      },
      {
        id: "url",
        heading: "Which regex should I use for URLs?",
        paragraphs: ["To validate a single link, ^https?:\\/\\/[^\\s/$.?#].[^\\s]*$ with the i flag requires http or https, then a host and no spaces. It accepted https://www.toolstarhub.com and rejected ftp://a.com and \"https:// a.com\". It also rejects a one-letter host such as http://x, because it expects at least two characters after the scheme.", "To find links in text, https?:\\/\\/[^\\s]+ is simple but swallows trailing full stops: it matched \"http://example.org/path.\" with the dot. Ending the pattern with [^\\s.,], as in https?:\\/\\/[^\\s/$.?#].[^\\s]*[^\\s.,], trims it to http://example.org/path. For anything beyond a quick check, parse the link with the URL Parser, which breaks it into protocol, host, path and query."],
      },
      {
        id: "groups",
        heading: "How do I capture parts of a match?",
        paragraphs: ["Named groups make results easier to read. (?<user>[^\\s@]+)@(?<domain>[^\\s@]+\\.[a-z]{2,}) applied to ali@example.com gives user = ali and domain = example.com, and the Regex Tester lists each named group beside the match.", "Unnamed groups work too: they appear as group 1, group 2 and so on. Use (?: … ) for grouping you do not need to capture, as the HTML email pattern does, to keep the results clean."],
      },
      {
        id: "flags",
        heading: "Which flags matter for these patterns?",
        paragraphs: ["Without the g flag the tester returns only the first match; add g to list every email or link in a block of text. The i flag makes letters case-insensitive: ^[a-z]+$ fails on ABC without it and matches with it.", "The m flag changes ^ and $ to match at each line. With a list of addresses on separate lines, ^\\w+@\\w+\\.com$ found 0 matches with g alone and 2 with g and m. The s flag lets . match line breaks, and u enables full Unicode handling."],
      },
      {
        id: "more",
        heading: "Which other patterns are worth keeping?",
        paragraphs: ["A few more patterns come up often in forms and data clean-up. US ZIP codes match ^\\d{5}(-\\d{4})?$, which accepts 12345 and 12345-6789 and rejects 1234. A whole-line match for digits only is ^\\d+$, and \\s{2,} finds runs of two or more spaces that you might want to collapse.", "For dates written as YYYY-MM-DD, ^\\d{4}-\\d{2}-\\d{2}$ checks the shape but not whether the date exists, so 2026-02-30 still passes. Check real dates with date code or a calendar tool after the pattern accepts the format."],
      },
      {
        id: "when-not",
        heading: "When should I avoid regex?",
        paragraphs: ["Regex is good at shape checks but poor at structure. Parsing full URLs, HTML or JSON with a single pattern quickly becomes unreadable and fragile. Use a dedicated parser, such as the URL constructor in JavaScript, which the URL Parser relies on to split a link into parts.", "For emails and phone numbers, the strongest check is to send a message or code and see whether the person receives it. Keep the regex loose enough not to block real users, and let the confirmation step do the real validation."],
      },
      {
        id: "debug",
        heading: "How do I debug a pattern that does not match?",
        paragraphs: ["Shorten the pattern until it matches, then add pieces back one at a time. In the Regex Tester, watch the match list change after each edit; the first piece that makes the matches disappear is the one to fix.", "Check escaping next. A dot without a backslash matches any character, and a plus sign or brackets without escaping change the meaning. Finally, review the flags: a missing g shows only one match, a missing m stops ^ and $ from working per line, and a missing i makes capital letters fail."],
      },
    ],
    stepsHeading: "How do I test a pattern before using it?",
    steps: [{"title": "Collect samples", "body": "Write lines that should match and lines that should not, including edge cases from real data."}, {"title": "Paste pattern and text", "body": "Enter the pattern without slashes in the Regex Tester, up to 300 characters, and the text, up to 100,000 characters."}, {"title": "Pick flags", "body": "Use g to list all matches, m for line-by-line anchors and i for case-insensitive matching."}, {"title": "Check every result", "body": "Confirm each match and each miss. Adjust the pattern and retest until both lists are right."}],
    examples: [{"title": "Finding emails in a paragraph", "body": "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,} with g found 2 addresses and ignored bad@ and @x.com."}, {"title": "Checking an international number", "body": "^\\+[1-9]\\d{1,14}$ accepted +971501234567 and rejected the 00-prefixed form."}, {"title": "US ZIP codes", "body": "^\\d{5}(-\\d{4})?$ matched 12345 and 12345-6789 and rejected 1234."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Validation is not verification", "body": "A pattern checks shape. Send a confirmation email or code to prove an address or number works."}, {"heading": "Do not over-restrict", "body": "Strict patterns often reject real addresses with plus signs or new domain endings."}, {"heading": "Anchor form checks", "body": "Use ^ and $ when the whole field must match, otherwise a valid part inside junk passes."}, {"heading": "Invalid patterns", "body": "The tester reports errors such as \"Unterminated character class\" instead of running a broken pattern."}],
    faqs: [{"question": "Is there a perfect regex for email addresses?", "answer": "No. Real address rules are complex and a pattern cannot tell whether a mailbox exists, so use a reasonable check and a confirmation email."}, {"question": "Which email pattern do browsers use?", "answer": "The HTML standard defines the valid email address rule for input type=email, and the long pattern in this guide follows it."}, {"question": "Should I allow plus signs in emails?", "answer": "Yes. Addresses such as first.last+tag@example.com are valid and common, and the patterns here accept them."}, {"question": "What is E.164?", "answer": "It is the international telephone numbering format: a plus sign, a country code and the subscriber number, with up to 15 digits."}, {"question": "How do I match phone numbers with spaces or dashes?", "answer": "Allow an optional separator between groups with [\\s.-]? as in the North American pattern above."}, {"question": "Why does my URL regex include the full stop at the end of a sentence?", "answer": "Because [^\\s]+ matches every non-space character. End the pattern with a class that excludes punctuation, such as [^\\s.,]."}, {"question": "Do I need to escape slashes in the tester?", "answer": "Escaping / as \\/ is harmless and keeps the pattern portable to code that uses /…/ literals; the tester takes the pattern without surrounding slashes."}, {"question": "How do I make a pattern case-insensitive?", "answer": "Add the i flag rather than writing both [A-Za-z] cases."}, {"question": "Why does ^ and $ only match once in my multi-line text?", "answer": "Without the m flag they match the start and end of the whole text. Add m to match each line."}, {"question": "Can I use lookbehind in the Regex Tester?", "answer": "The tester uses your browser's JavaScript regex engine, so lookbehind works in current browsers that support it."}],
    faqMax: 10,
    cta: { before: "Try these patterns on your own text in the ", linkLabel: "Regex Tester", href: "/tools/regex-tester", after: "." },
    alsoSee: [{"before": "To break a URL into parts, use the ", "linkLabel": "URL Parser", "href": "/tools/url-parser", "after": "."}, {"before": "To encode characters in links, use the ", "linkLabel": "URL Encoder", "href": "/tools/url-encoder", "after": "."}, {"before": "If you are matching inside JSON data, read ", "linkLabel": "common JSON errors and how to fix them", "href": "/guides/common-json-errors-and-how-to-fix-them", "after": "."}],
    sources: [{"label": "MDN – Regular expressions guide", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"}, {"label": "HTML Standard – The input element (valid email address)", "href": "https://html.spec.whatwg.org/multipage/input.html"}],
  },
};

export const batch10Guides: ToolGuide[] = [fantasyCricket, kCutoff, uiDuration, jsonXmlYaml, jsonErrors, regexCheat];
