import type { ToolContent } from "./tool-content.ts";

export const unemploymentContent: ToolContent = {
  about:
    "This unemployment benefits calculator estimates a regular weekly benefit and the most you could receive on a claim, using the published formula of the state you choose. It only covers states whose rules we have checked against the state agency's own pages: California, New York, Texas and Florida. Each one shows its formula, its minimum and maximum weekly amounts, its source links and the date the rules were last checked. If you pick any other state, the calculator says plainly that it is not supported yet and points you to the official agency directory instead of guessing. All arithmetic runs in your browser, and the result is an estimate, not a decision on your claim.",
  howTo: [
    "Choose your state. Only verified states can be calculated; other states show a not-supported message.",
    "Find your base-period wages. Most states use the first four of the last five completed calendar quarters before you file. Your pay stubs, W-2 forms or the state's monetary determination letter list these amounts.",
    "Enter gross wages for each of the four quarters, before taxes. Use 0 for a quarter with no earnings. The order does not matter, since the calculator finds the highest quarter.",
    "Press Estimate benefits. Read the weekly amount, the claim total, the number of weeks and each step of the formula.",
    "Compare the estimate with the official notice you receive after filing, which is the figure the state will actually pay.",
  ],
  features: [
    "Per-state formulas for California, New York, Texas and Florida, each with official source links and a last-checked date.",
    "Monetary eligibility checks for the wage tests each state publishes.",
    "Minimum and maximum weekly amounts applied automatically, with a step that says when a cap was used.",
    "The claim total and the number of full weeks it covers.",
    "A clear not-supported message for every other state and the District of Columbia.",
  ],
  examples: [
    {
      title: "California: a part-year worker",
      body: "Base-period wages of $5,200, $0, $0 and $0 give a high quarter of $5,200. California's table equals the high quarter ÷ 26 at this level, so the weekly amount is $200. The claim total is the lesser of 26 × $200 = $5,200 or half of base-period wages, $2,600, so the claim is worth $2,600, about 13 weeks.",
    },
    {
      title: "California: reaching the maximum",
      body: "Quarters of $12,000, $11,000, $9,000 and $8,000 give $12,000 ÷ 26 = $462, which is above the $450 maximum, so the weekly amount is $450. Half of the $40,000 base period is more than 26 × $450 = $11,700, so the full 26 weeks are available.",
    },
    {
      title: "New York: wages in all four quarters",
      body: "Quarters of $9,100, $8,000, $7,000 and $6,000 give a high quarter of $9,100, which is over $3,575, so the weekly amount is $9,100 ÷ 26 = $350, below the $869 maximum. Up to 26 weeks gives $9,100 in total.",
    },
    {
      title: "Texas: the 27% limit",
      body: "Quarters of $10,000, $8,000, $7,000 and $5,000: $10,000 ÷ 25 = $400 a week. The claim total is the lesser of 26 × $400 = $10,400 or 27% of $30,000 = $8,100, so the claim is $8,100, a little over 20 weeks of full payments.",
    },
    {
      title: "Florida: the agency's own example",
      body: "FloridaCommerce's claimant FAQ uses quarters of $0, $6,317.03, $4,712.63 and $765.17. The high quarter ÷ 26 is $242.96, rounded down to $242. The claim total is the lesser of 25% of $11,794.83, which is $2,948, or $3,300, so the claim is $2,948.",
    },
  ],
  explanation:
    "Every state pays unemployment insurance from its own law, so there is no single national formula. Most start from your wages in a base period of four calendar quarters and set the weekly amount from your best quarter, then apply a floor and a ceiling. Many also limit the total you can draw on one claim. The calculator follows each supported state's published method step by step.",
  sections: [
    {
      heading: "Calculation method by state",
      paragraphs: [
        "California (EDD). To qualify you need at least $1,300 in the high quarter, or at least $900 in the high quarter with total base-period wages of at least 1.25 times that quarter. Below $1,833 of high-quarter wages the weekly amount is read from EDD's benefit table. From $1,833 it equals the high quarter ÷ 26, rounded up to a whole dollar. The weekly amount is kept between $40 and $450. The claim total is the lesser of 26 × the weekly amount or half of base-period wages.",
        "New York (Department of Labor). For claims filed in 2026 you need wages in at least two quarters, at least $3,500 in one quarter, and total wages of at least 1.5 times the high quarter. If the high quarter is $19,118 or more, the other three quarters must add up to at least $9,559 instead. With wages in all four quarters, the weekly amount is the high quarter ÷ 26 when the high quarter is over $3,575, or ÷ 25 when it is $3,575 or less. With wages in only two or three quarters and a high quarter over $4,000, it is the average of the two highest quarters ÷ 26. The amount is kept between $140 and $869, and up to 26 weeks are payable.",
        "Texas (TWC). The weekly amount is the high quarter ÷ 25, rounded to the nearest dollar, kept between $76 and $619 for claims effective on or after October 4, 2026. The claim total is the lesser of 26 × the weekly amount or 27% of base-period wages.",
        "Florida (FloridaCommerce). You need wages in at least two quarters, at least $3,400 in the base period, and total wages of at least 1.5 times the high quarter. The weekly amount is the high quarter ÷ 26, rounded down, kept between $32 and $275. The claim total is the lesser of 25% of base-period wages or $3,300, and claims filed in 2025 and 2026 last up to 12 weeks. Florida sets that duration each year from the state unemployment rate, between 12 and 23 weeks.",
        "After the weekly amount and claim total are found, the number of full weeks shown is the claim total ÷ the weekly amount, rounded down and capped at the state's maximum number of weeks.",
      ],
    },
    {
      heading: "Base period and alternate base period",
      paragraphs: [
        "The base period is the window of earnings the state looks at. For a claim filed in November 2026, the usual base period in these four states runs from July 1, 2025 to June 30, 2026, because the most recent completed quarter (July to September 2026) is skipped. California and New York also offer an alternate base period of the last four completed quarters if you do not qualify under the usual one. Enter whichever set of four quarters the state used or will use for you.",
      ],
    },
    {
      heading: "What the estimate leaves out",
      paragraphs: [
        "Monetary eligibility is only half of a claim. States also check why you are out of work, whether you are able and available to work, and whether you are searching for work each week. Separation for misconduct or quitting without good cause can lead to a denial even when wages are high enough. Partial earnings while claiming, severance, pensions and other income can reduce weekly payments. Benefits are taxable federal income, and some states withhold state tax if you ask.",
        "Extended or emergency programmes, which are only available in some economic conditions, are not included. Neither are New York's partial-unemployment hours rules, California's disability insurance, or any other programme run by the same agencies.",
      ],
    },
    {
      heading: "Why other states are not supported yet",
      paragraphs: [
        "Each state's formula, minimum, maximum and duration can change by law or by an annual adjustment, sometimes more than once a year. Some states add allowances for dependants or use averages across several quarters. Publishing a number for a state we have not checked could mislead someone deciding how to budget, so the calculator only covers states whose official pages we have read and recorded with a date. More states will be added only after the same check.",
      ],
    },
    {
      heading: "How the rules are kept current",
      paragraphs: [
        "Every supported state stores its agency, formula, minimum and maximum weekly amounts, duration, effective date, source URLs and the date it was last checked. Those details appear under the form for the state you select, so you can open the source and confirm the numbers yourself. If a figure on the agency's site differs from the one here, the agency's figure is correct.",
      ],
    },
  ],
  tips: [
    "Use gross wages from the quarters the state uses, not take-home pay.",
    "If you worked in more than one state, contact the agencies; wages may be combined on one claim.",
    "File as soon as you are out of work. The estimate is not a claim, and most states pay nothing for weeks before you file.",
    "Keep the monetary determination letter. If your wages are listed wrongly, the letter explains how to request a correction.",
  ],
  limitations:
    "Only California, New York, Texas and Florida are supported, using rules checked on November 2, 2026. The calculator models the monetary formula for regular state benefits only. It does not decide eligibility, apply non-monetary rules, include partial-week earnings, deductions, taxes, overpayments or extended programmes, or track law changes after the last-checked date. New York sources show slightly different floors in different documents, so the tool applies the published $143 floor for the ÷ 26 methods and an overall $140 minimum. Disclaimer: this is an educational estimate, not legal or financial advice. Only your state unemployment agency can determine whether you qualify and how much you will receive.",
  faqs: [
    { question: "How is my weekly unemployment benefit calculated?", answer: "Most states take your highest-earning quarter in the base period and divide it by a set number, such as 25 or 26, then apply a minimum and maximum. The formula differs by state, so choose yours to see the exact steps." },
    { question: "Which states does this calculator support?", answer: "California, New York, Texas and Florida. Each was checked against the state agency's own pages, and the source links and last-checked date are shown under the form." },
    { question: "Why is my state not supported?", answer: "We only publish states whose current rules we have verified from official sources. For any other state, use the agency's own estimator or call the agency. CareerOneStop lists every state agency." },
    { question: "What is the maximum weekly benefit in these states?", answer: "As last checked: California $450, New York $869, Texas $619 (claims effective from October 4, 2026) and Florida $275." },
    { question: "How many weeks can I receive benefits?", answer: "Up to 26 weeks in California, New York and Texas, subject to each state's total-claim limit, and 12 weeks for Florida claims filed in 2025 or 2026." },
    { question: "What wages should I enter?", answer: "Gross wages in each quarter of the base period, usually the first four of the last five completed calendar quarters before you file." },
    { question: "Does the estimate include taxes?", answer: "No. Unemployment benefits are taxable federal income. The estimate is the gross amount before any withholding." },
    { question: "Why does the estimate say I may not qualify?", answer: "Your entered wages did not meet one of the state's published wage tests. The message names the test. You may still qualify under an alternate base period, so check with the agency." },
    { question: "Is this estimate official?", answer: "No. It is an educational estimate. The state agency issues the official determination after you file a claim." },
    { question: "Are my wages sent anywhere?", answer: "No. The calculation runs in your browser and nothing you enter is stored or sent to a server." },
  ],
};
