import type { ToolContent } from "./tool-content.ts";

export const fantasyPointContent: ToolContent = {
  about:
    "This fantasy point calculator turns one player's match stats into a points total for cricket, football (soccer) or basketball. It starts with a simple set of illustrative scoring rules for each sport, and every rule can be changed to match the league you play in. Your custom rules can be saved in this browser so they load next time. The result comes with a line-by-line breakdown showing each stat, its value and its subtotal, so you can see exactly where the points came from. The tool is for season-long or casual fantasy leagues among friends; it does not offer predictions, odds or anything to do with betting.",
  howTo: [
    "Choose cricket, football or basketball.",
    "Type the player's numbers for one match, such as runs, wickets, goals or rebounds. Leave a stat blank if it does not apply.",
    "Press Edit scoring rules to change the points for any stat so they match your league's rules, then press Save custom rules if you want them remembered on this device.",
    "Read the total and the breakdown table. Use Copy breakdown to paste it into a league chat, or Clear stats to start the next player.",
  ],
  features: [
    "Three sports with separate rule sets, each editable per stat.",
    "Negative points for things like ducks, cards, own goals and turnovers.",
    "Decimal scoring values such as 1.2 points per rebound.",
    "Custom rules saved to localStorage in your browser only, with a one-click reset to the defaults.",
    "A breakdown table and a copyable text summary.",
  ],
  examples: [
    {
      title: "Cricket: a batting all-rounder",
      body: "With the default rules, a player who scores 45 runs with 4 fours and 2 sixes, takes 1 wicket and holds 1 catch earns 45 + 4 + 4 + 25 + 8 = 86 points. The four bonus is 1 point each and the six bonus is 2 points each, on top of the runs.",
    },
    {
      title: "Football: a goal with a booking",
      body: "A forward with 1 goal, 1 assist, 3 shots on target and 1 yellow card scores 5 + 3 + 3 − 1 = 10 points with the defaults. If your league awards 6 points for a goal by a midfielder, change the goal value to 6 before entering that player.",
    },
    {
      title: "Basketball: a double-double",
      body: "A guard with 22 points, 10 rebounds, 11 assists, 2 steals, 1 block and 4 turnovers earns 22 + 12 + 16.5 + 6 + 3 − 4 = 55.5 fantasy points under the default rules.",
    },
  ],
  explanation:
    "Fantasy scoring is a weighted sum. Each stat is multiplied by the points your league gives for one unit of it, and the products are added. The calculator applies exactly that rule and nothing else, so the answer is only as accurate as the rules you enter.",
  sections: [
    {
      heading: "Calculation method",
      paragraphs: [
        "For each stat with a value, subtotal = quantity × points per unit. The total is the sum of all subtotals, rounded to two decimal places to avoid floating-point noise such as 3.5999999. Blank stats are skipped, and zero counts add nothing. Stat counts cannot be negative, but points per unit can, which is how penalties are scored.",
        "Bonus rules that depend on thresholds, such as a 50-run bonus, a hat-trick bonus or a triple-double bonus, are not built in, because leagues set those thresholds very differently. Work them out from the box score and add them to the copied total by hand, so the breakdown keeps the per-stat lines clear and the bonus stays visible as a separate adjustment.",
      ],
    },
    {
      heading: "About the default rules",
      paragraphs: [
        "The default values are a neutral starting point written for this tool. They are not the official scoring system of any fantasy platform, league or competition, and they were not copied from one. Platforms change their rules from season to season and often score differently by player role, match format or competition. Before you rely on a total, open your league's scoring page and copy those values into the rule editor.",
        "Cricket defaults: 1 per run, 1 extra per four, 2 extra per six, 25 per wicket, 8 per maiden over, 8 per catch, 12 per stumping and −2 for a duck. Football defaults: 5 per goal, 3 per assist, 4 for a clean sheet, 1 per shot on target, 1 per save, −1 for a yellow card, −3 for a red card and −2 for an own goal. Basketball defaults: 1 per point, 1.2 per rebound, 1.5 per assist, 3 per steal, 3 per block and −1 per turnover.",
      ],
    },
    {
      heading: "Reading the breakdown",
      paragraphs: [
        "Each row in the table shows the stat, how many times it happened, the points for one and the subtotal. Rows with a negative subtotal are shown in red so penalties are easy to spot. If a total looks wrong, the cause is almost always one row: a stat entered in the wrong box, a rule value that differs from your league, or a bonus your league gives that this rule set does not include.",
        "When two people in a league disagree about a score, paste the copied breakdown into the chat. Anyone can then check the arithmetic line by line against the official scorecard.",
      ],
    },
    {
      heading: "How saving works",
      paragraphs: [
        "Save custom rules writes your values for the selected sport to your browser's localStorage under a key for that sport. Nothing is sent to a server. Clearing site data, using a private window or switching browsers removes the saved rules. Reset to defaults deletes the saved copy and restores the illustrative values.",
      ],
    },
    {
      heading: "Using it fairly",
      paragraphs: [
        "The calculator helps settle a score or check a league's math after a match. It does not rate players, forecast performance or suggest picks, and it should not be used for wagering. If you play paid-entry contests, follow the laws where you live and the platform's own terms.",
      ],
    },
  ],
  tips: [
    "Enter stats from an official box score or scorecard, not from memory.",
    "Save one rule set per sport. If you play two football leagues with different rules, write the second set down or reset between them.",
    "Check whether your league scores runs per run or per boundary bonus only, since that changes cricket totals a lot.",
    "Use Copy breakdown when a league-mate questions a score; the line items make the arithmetic easy to check.",
  ],
  limitations:
    "The tool scores one player at a time with fixed points per unit. It does not support role-based rules, threshold bonuses, strike-rate or economy-rate bands, captain multipliers, team totals, or automatic stat imports. Saved rules stay on one browser. The default rules are illustrative only, so totals will differ from any platform unless you enter that platform's values.",
  faqs: [
    { question: "Are the default points the same as Dream11, FPL or ESPN?", answer: "No. The defaults are illustrative values written for this tool. Replace them with your platform's or league's published scoring rules to get a matching total." },
    { question: "Can I change the points for each stat?", answer: "Yes. Press Edit scoring rules, type a new value for any stat, and the total updates straight away. Negative and decimal values are allowed." },
    { question: "Where are my custom rules saved?", answer: "In your browser's localStorage, one set per sport. They never leave your device and are removed if you clear site data." },
    { question: "How do I score a penalty such as a red card?", answer: "Give that stat a negative points value, then enter how many times it happened. The breakdown shows the subtotal in red." },
    { question: "Can I enter a negative stat count?", answer: "No. Counts must be zero or more. Use a negative points value for penalties instead." },
    { question: "Does it support captain or vice-captain multipliers?", answer: "Not directly. Multiply the final total yourself, for example by 2 for a captain, or scale every rule by the same factor before entering stats." },
    { question: "Can I calculate a whole team?", answer: "Score one player at a time, copy each breakdown, and add the totals. A full-team mode is not available yet." },
    { question: "Is this a betting tool?", answer: "No. It only does arithmetic on stats you enter. It gives no odds, picks or predictions." },
    { question: "Why is my total a decimal?", answer: "Some rules, such as 1.2 points per rebound or 1.5 per assist, produce fractions. Totals are rounded to two decimal places." },
  ],
};

export const graduationContent: ToolContent = {
  about:
    "This graduation calculator by birthday works out when a child is likely to start school and the year they would finish, using rules you set rather than guessing. You enter a date of birth, the age a child must reach by a cutoff date, the month the academic year starts and ends, and how many years school lasts. The calculator then shows the first school year, each milestone and the graduation year, plus the end of any college or university years you add. If the student is already in school, you can enter their current year instead and count forward from there. Every assumption the answer depends on is listed beside the result.",
  howTo: [
    "Enter the date of birth.",
    "Set the school entry age and the cutoff date that your district, state or country uses. The defaults are age 5 by September 1, an academic year from September to June, and 13 years of school, which matches many US kindergarten to grade 12 systems.",
    "Change the number of school years and add any further study years, such as 4 for a bachelor's degree.",
    "If the student is already enrolled, tick the current-level option and enter the start year of this academic year and their current year number.",
    "Press Calculate graduation year, read the timeline cards and the assumptions, and copy the timeline if you need it.",
  ],
  features: [
    "Configurable entry age and cutoff day and month.",
    "Academic years that run across two calendar years, labelled like 2030–31, or within one calendar year.",
    "Optional current-level mode for students already in school.",
    "Separate school and further-study durations.",
    "Timeline cards with the academic year, the end month and the student's age at that point.",
    "Leap-day birthdays handled explicitly.",
  ],
  examples: [
    {
      title: "Born just before a September 1 cutoff",
      body: "A child born on August 20, 2020 turns 5 on August 20, 2025, before the September 1 cutoff, so they start school in the 2025–26 academic year. With 13 years of school the final year is 2037–38 and graduation is in June 2038.",
    },
    {
      title: "Born the day after the cutoff",
      body: "A child born on September 2, 2015 is still 4 on September 1, 2020, so the calculator moves entry to 2021–22. Thirteen years later the final year is 2033–34 and graduation is in June 2034, one year later than a child born a single day earlier.",
    },
    {
      title: "A calendar-year school system",
      body: "Set the academic year to start in January and end in December, the cutoff to June 30, entry age 5 and 12 years of school. A child born on March 10, 2015 is 5 by June 30, 2020, so school starts in 2020 and the final year is 2031, with graduation in December 2031.",
    },
    {
      title: "Already in school",
      body: "A student in year 6 during the academic year that starts in September 2026, in a 13-year system, started in 2021–22 and finishes in June 2034. Adding 4 years of college puts the expected degree completion in 2038.",
    },
  ],
  explanation:
    "School entry rules are usually written as an age by a date: a child may start if they have reached a certain age on or before the cutoff. The calculator checks each year in turn and picks the first year in which the child's age on that year's cutoff date is at least the entry age. From there, graduation is a matter of counting academic years.",
  sections: [
    {
      heading: "Calculation method",
      paragraphs: [
        "Age on a date is the difference in years, minus one if the birthday has not yet happened that year. A birthday on the cutoff date counts as having been reached. A February 29 birthday is treated as reached on March 1 in years without a leap day, which is the common legal convention, and a February 29 cutoff falls back to February 28 in those years.",
        "Entry year: the first calendar year Y for which age on the cutoff in Y is at least the entry age. When the academic year starts in a month after the cutoff, as with a September 1 cutoff and September start, that academic year begins in Y. The academic year is labelled Y–(Y+1) when the end month comes before the start month, and Y alone when it does not.",
        "School graduation: the final school year starts in Y + school years − 1, and graduation happens at its end month, which is in the next calendar year for a split year. Further study, when you add it, ends that many academic years later.",
        "Current-level mode works backward and forward from the year you enter: the entry year is the current start year minus (current year number − 1), and graduation is counted forward from there. The entry rule is not used in this mode, which suits students who started early, were held back or skipped a year.",
      ],
    },
    {
      heading: "Assumptions shown with every result",
      paragraphs: [
        "The calculator lists the entry age, the cutoff, the academic calendar, the number of years and whether the current level was used. These are inputs, not facts about any particular school. If any of them differs for your district, change the input and calculate again.",
      ],
    },
    {
      heading: "Why rules differ",
      paragraphs: [
        "Entry ages and cutoffs vary between countries, states and sometimes districts. Some systems count from a kindergarten year and others from a first grade or reception class, and some allow early or delayed entry. Northern-hemisphere schools often start in August or September, while many southern-hemisphere systems start in January or February. Rather than storing rules for every system, which change over time, this tool lets you enter the rule that applies to you, and labels the result with those settings.",
      ],
    },
  ],
  tips: [
    "Look up your district's entry age and cutoff on its enrolment page before relying on the result.",
    "Count the years you want to include carefully: 13 for US K–12, 12 if you start at first grade.",
    "Use the current-level mode for students who were held back or accelerated.",
    "Run the calculator twice with different cutoffs if a family may move between systems.",
  ],
  limitations:
    "The tool does not know any school's actual policy. It does not model early-entry assessments, redshirting, grade skipping, repeated years, gap years, part-time study, or mid-year entry. Further-study years are counted as full academic years in the same calendar pattern as school. Dates are calendar dates without time zones, and the result is a planning estimate, not an enrolment decision.",
  faqs: [
    { question: "How do I calculate my child's graduation year from their birthday?", answer: "Find the first year they meet the entry age by the cutoff date, then add the number of school years minus one to get the final year. This calculator does both steps and shows the result." },
    { question: "What cutoff date should I use?", answer: "Use the date your district or country publishes for school entry. September 1 is common in the US, but many places use other dates, so check the official enrolment page." },
    { question: "What if the birthday is exactly on the cutoff?", answer: "The child counts as having reached the age on that day, so they enter that year." },
    { question: "How are February 29 birthdays handled?", answer: "In years without February 29, the birthday is treated as March 1. A February 28 cutoff therefore does not count a February 29 child as a year older until the following day." },
    { question: "Why does the graduation year differ from my school's class year?", answer: "Your school may use a different entry age, cutoff, number of years or calendar. Adjust those inputs, or use the current-level option if the student is already enrolled." },
    { question: "Can I use it for countries outside the US?", answer: "Yes. Set the entry age, cutoff, academic start and end months and the number of years to match your system." },
    { question: "What does an academic year label like 2030–31 mean?", answer: "It is a school year that starts in one calendar year and ends in the next, such as September 2030 to June 2031." },
    { question: "Can it include college or university?", answer: "Yes. Enter the number of further-study years and the timeline adds a final card for when that study would end." },
    { question: "Is the result guaranteed?", answer: "No. It is a planning estimate based on the inputs you give. Schools decide placement, and policies change." },
  ],
};
