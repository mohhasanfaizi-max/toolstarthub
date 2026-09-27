import type { GuideContent } from "./guide-content.ts";

export const financeGuideContent: Record<string, GuideContent> = {
  "how-compound-interest-works": {
    intro:
      "Compound interest grows a balance by applying the rate to the current balance, not only to the original amount. This calculator walks the balance month by month, then adds any monthly contribution after that month’s growth. The result is an estimate from the numbers you type, not a forecast of an investment account.",
    why:
      "A simple interest figure multiplies the starting amount by the annual rate and by the years. Compounding can land a bit higher because later periods include earlier growth. Contributions change the balance again, and they are not the same thing as interest.",
    stepsHeading: "How this compound interest estimate works",
    steps: [
      {
        title: "Enter the starting amount, annual rate, and time",
        body: "The starting amount cannot be negative. Time can be years or months. The calculator treats months as years divided by 12, and it will not run a period longer than 100 years. The annual rate is a percent, and it must be 100 or less.",
      },
      {
        title: "Pick how often the rate is applied",
        body: "The choices are annually, semiannually, quarterly, monthly, and daily. Convert the entered percent to a decimal before using it. For example, 5% becomes 0.05. Monthly growth multiplies the balance by 1 plus that rate divided by 12, every month. Daily growth multiplies the balance by (1 plus the rate divided by 365) raised to the power of 365 divided by 12, once per month. Quarterly growth multiplies the balance by 1 plus the rate divided by 4 when the month count is a multiple of 3. Semiannual growth multiplies the balance by 1 plus the rate divided by 2 when the month count is a multiple of 6. Annual growth multiplies the balance by 1 plus the rate when the month count is a multiple of 12.",
      },
      {
        title: "Add a monthly contribution only if you want one",
        body: "Leave the contribution blank and it is treated as zero. If you enter one, it is added after that month’s growth, and it is counted separately from interest. The contribution is monthly even when compounding is annual or quarterly.",
      },
      {
        title: "Read interest apart from money you put in",
        body: "Interest earned is the ending balance minus the starting amount minus the contributions. The page also shows a simple interest comparison: starting amount times the annual rate times the years, with contributions added on top and not compounded.",
      },
    ],
    examples: [
      {
        title: "$1,000 at 5% for one year, compounded monthly, with no contribution",
        body: "Each month the balance is multiplied by 1 plus 0.05 divided by 12. After 12 of those steps the balance is about $1,051.16. Simple interest on the same inputs is $50, so the simple total is $1,050. The gap is small over one year. A longer time or a higher rate widens it. This is the calculator’s monthly method, rounded to cents at the end.",
      },
      {
        title: "The same start, plus $100 at the end of each month",
        body: "The $100 is added after the growth step, so it does not earn growth in the month it is deposited. Over 12 months you have added $1,200 of your own money. The ending balance is about $2,279.05. Interest is about $79.05, which is the ending balance minus $1,000 minus $1,200. The simple interest comparison on the same inputs is $2,250, because the $50 of simple interest is added to the start and the contributions are not compounded.",
      },
    ],
    notesHeading: "What changes the estimate",
    notes: [
      {
        heading: "Frequency is not the same as the contribution schedule",
        body: "You can compound annually and still add money every month. Those are separate inputs. Annual compounding applies the rate once each 12 months. The contribution, if any, still arrives every month.",
      },
      {
        heading: "A zero rate does not grow the balance",
        body: "If the annual rate is 0, the balance stays put except for contributions you add. Simple interest is also 0 in that case.",
      },
      {
        heading: "Common mix-ups",
        body: "People sometimes treat the contribution as interest, or they expect daily compounding to post a separate interest line every day. This tool folds daily growth into each month. It also does not withdraw money, charge a fee, or model a rate that changes during the term.",
      },
      {
        heading: "Limits",
        body: "The starting amount, contribution, rate, and time have upper limits so a huge input does not pretend to produce a real balance. The estimate assumes the rate stays constant and that each contribution arrives in full. A bank, fund, or lender can use a different day count, a different posting date, or a rate that changes.",
      },
      {
        heading: "Which calculator to use",
        body: "Use the compound interest calculator to estimate how a balance grows from a starting amount, a rate, a time, a compounding choice, and an optional monthly contribution. Use the savings goal calculator to work backward from a target savings goal and estimate how much to set aside.",
      },
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "It is growth applied to the current balance, so earlier growth can be included in later periods. This calculator does that month by month from the rate and frequency you enter.",
      },
      {
        question: "How does compound interest work in this calculator?",
        answer:
          "Each month it applies the frequency rule to the balance, then adds the monthly contribution if you entered one. Interest is the ending balance minus the start minus those contributions.",
      },
      {
        question: "Does a monthly contribution earn interest in the month it is added?",
        answer:
          "No. The contribution is added after that month’s growth step. It can grow in later months.",
      },
      {
        question: "Is this a prediction of what an account will earn?",
        answer:
          "No. It is an estimate from a constant rate and the timing rules above. Actual account terms can differ.",
      },
    ],
    cta: {
      before: "To run the same month by month estimate, open the",
      linkLabel: "Compound Interest Calculator",
      href: "/tools/compound-interest-calculator",
      after: ". It stays in your browser and does not require an account.",
    },
  },
  "how-a-loan-payment-is-calculated": {
    intro:
      "An installment payment is the estimated amount that would pay off a loan amount over a fixed number of months at one annual rate. This loan calculator uses that standard monthly formula. A loan fee, if you enter one, is added to the total cost and is not included in the monthly payment.",
    why:
      "The payment is not the loan amount divided by the number of months, unless the rate is zero. With a rate above zero, part of each payment covers interest and part reduces the balance. A home loan and a car loan on this site start from a price and other fields. This page is only the general installment estimate.",
    stepsHeading: "How the installment payment is estimated",
    steps: [
      {
        title: "Enter the amount, annual rate, and term",
        body: "The amount must be greater than zero. The term is a whole number of years or months, at least 1, and not more than 50 years. The annual rate is a percent from 0 through 100.",
      },
      {
        title: "Turn the term into months",
        body: "Years are multiplied by 12. A term you already entered in months is used as entered. The payment is always a monthly figure.",
      },
      {
        title: "Apply the monthly formula",
        body: "The monthly rate is the annual percent divided by 100, then divided by 12. If that rate is zero, the payment is the amount divided by the number of months. Otherwise the payment is the amount times the monthly rate times (1 plus the monthly rate) raised to the number of months, divided by that same power minus 1.",
      },
      {
        title: "Keep a fee out of the payment",
        body: "An empty fee is zero. A fee you enter is listed on its own and added when the page shows total cost. It does not increase the amount used in the payment formula.",
      },
    ],
    examples: [
      {
        title: "$10,000 at 6% for 3 years, with no fee",
        body: "That is 36 months. The monthly rate is 0.06 divided by 12, which is 0.005. The estimated payment is about $304.22. Over the term, interest comes to about $951.90, so the amount paid back is about $10,951.90. The fee line stays $0, so total cost matches that amount paid back.",
      },
      {
        title: "The same loan with a $200 fee",
        body: "The monthly payment stays about $304.22, because the fee is not financed. Total cost is about $11,151.90, which is the amount paid back plus the $200 fee. If a lender adds the fee to the amount you borrow, this form will not do that unless you include the fee in the loan amount yourself.",
      },
    ],
    notesHeading: "What this estimate leaves out",
    notes: [
      {
        heading: "A zero rate is straight division",
        body: "At 0%, the payment is the amount divided by the months. There is no interest in the schedule.",
      },
      {
        heading: "This is not a mortgage or a car loan",
        body: "A mortgage on this site starts from a home price and a down payment, and it can add property tax, insurance, HOA, and PMI. A car loan starts from a vehicle price and can include sales tax, fees, add-ons, and a trade-in. Those pages answer different questions. Use this loan calculator when you already know the amount being paid off.",
      },
      {
        heading: "Common mistakes",
        body: "Entering the rate as 0.06 instead of 6 makes the rate six hundredths of a percent, not 6%. Choosing years when you meant months multiplies the term by 12. A fee typed into the fee box will not change the payment.",
      },
      {
        heading: "Limits",
        body: "The result assumes a fixed rate and a fixed monthly payment for the whole term. It does not model a promotional rate, a skipped month, extra payments, or a payment that changes. A lender’s contract can include costs this form does not ask for.",
      },
    ],
    faqs: [
      {
        question: "How is a loan payment calculated?",
        answer:
          "For a rate above zero, the calculator uses the monthly rate and the number of months in the standard installment formula. At 0%, it divides the amount by the number of months.",
      },
      {
        question: "Does the fee change the monthly payment?",
        answer:
          "No. The fee is added to total cost only. The payment is based on the loan amount, rate, and term.",
      },
      {
        question: "Can I use this for a mortgage?",
        answer:
          "Only if you already know the amount to amortize and you do not need tax, insurance, HOA, or PMI in the housing figure. The mortgage calculator is built for those home-loan fields.",
      },
      {
        question: "Is the payment a quote from a lender?",
        answer:
          "No. It is an estimate from the inputs on the page. Actual loan terms can differ.",
      },
    ],
    cta: {
      before: "To estimate a payment from an amount, rate, and term, use the",
      linkLabel: "Loan Calculator",
      href: "/tools/loan-calculator",
      after: ". The math runs in your browser.",
    },
  },
  "how-a-mortgage-payment-is-estimated": {
    intro:
      "A mortgage payment estimate on this site starts from a home price minus the down payment, then applies the installment formula to that loan amount. Property tax, insurance, HOA, and PMI can be added into a separate housing figure. The loan payment itself does not include those housing costs.",
    why:
      "A general loan calculator asks for the amount you already want to pay off. A home loan usually starts from a price and a down payment, and the check you think about each month may include more than principal and interest. Those extra lines are why this page is not the same estimate.",
    stepsHeading: "How the mortgage estimate is built",
    steps: [
      {
        title: "Start with price and down payment",
        body: "Enter the home price and a down payment as a dollar amount or as a percent of the price. The loan amount is the price minus that down payment. The down payment cannot be larger than the price. A percent down payment cannot be over 100.",
      },
      {
        title: "Set the rate and the term in years",
        body: "The term is a whole number of years from 1 to 50. The calculator turns years into months and uses the same monthly installment formula as the general loan tool, but only on the loan amount after the down payment.",
      },
      {
        title: "Add housing costs only if you have them",
        body: "Property tax and homeowners insurance are annual amounts, divided by 12. HOA and PMI are monthly amounts. Blank fields count as zero. The housing payment is the rounded loan payment plus those four monthly pieces.",
      },
      {
        title: "Optional extra payments are a separate payoff check",
        body: "An extra monthly payment and a one-time extra payment do not change the required installment. If you enter either one, the page also estimates a faster payoff: months paid, months saved, and interest saved versus the original schedule. The one-time amount cannot be larger than the loan amount.",
      },
    ],
    examples: [
      {
        title: "$300,000 price, 20% down, 6% rate, 30 years, no tax or insurance",
        body: "The down payment is $60,000, so the loan amount is $240,000. The estimated principal and interest payment is about $1,438.92 a month. With tax, insurance, HOA, and PMI left blank, the housing payment matches that loan payment. The page also shows a 15-year and a 30-year comparison for the same loan amount and rate, without extra payments.",
      },
      {
        title: "The same loan with $2,400 a year in property tax",
        body: "Tax per month is $2,400 divided by 12, which is $200. The housing payment becomes about $1,638.92. That $200 is not added to the loan amount, and it does not change the $1,438.92 principal and interest installment.",
      },
    ],
    notesHeading: "Mortgage fields the general loan form does not ask for",
    notes: [
      {
        heading: "Price and down payment come first",
        body: "If you already know the payoff amount and you do not want tax, insurance, HOA, PMI, or a 15-year versus 30-year comparison, the loan calculator is the narrower tool. Use this mortgage calculator when the question starts with a home price.",
      },
      {
        heading: "Housing payment is not the loan payment",
        body: "Principal and interest are one number. The housing payment adds the monthly tax, insurance, PMI, and HOA you entered. Leaving those blank does not mean a real house has no tax or insurance. It means they are not in this estimate.",
      },
      {
        heading: "Common mistakes",
        body: "Typing insurance as a monthly bill into the annual insurance box makes the monthly insurance figure twelve times too small, because the tool divides that box by 12. PMI and HOA are the monthly boxes. A percent down payment of 20 means 20, not 0.20.",
      },
      {
        heading: "Limits",
        body: "The estimate uses one fixed rate and a fully amortizing monthly payment. It does not approve a loan, check credit, or include closing costs in the loan amount. Extra payments are optional and only affect the faster-payoff figures. A lender’s offer can include costs and rate rules this form does not model.",
      },
    ],
    faqs: [
      {
        question: "What affects a mortgage payment here?",
        answer:
          "The loan payment depends on the price, the down payment, the annual rate, and the term in years. The housing payment can also include monthly tax, insurance, HOA, and PMI from the amounts you enter.",
      },
      {
        question: "Does the down payment reduce the loan amount?",
        answer:
          "Yes. The loan amount is the home price minus the down payment. The installment is calculated on that loan amount.",
      },
      {
        question: "Do extra payments change the required monthly payment?",
        answer:
          "No. They are used only to estimate a shorter payoff and the interest that schedule would skip.",
      },
      {
        question: "Is this what I will be approved to borrow?",
        answer:
          "No. It is an estimate from the fields on the page. Approval and the real contract can differ.",
      },
    ],
    cta: {
      before: "To estimate principal, interest, and the housing lines this form supports, use the",
      linkLabel: "Mortgage Calculator",
      href: "/tools/mortgage-calculator",
      after: ". It runs in your browser and does not check a credit file.",
    },
  },
  "how-to-estimate-a-car-loan-payment": {
    intro:
      "A car loan payment on this calculator is the installment on the amount left to finance after vehicle price, sales tax, fees, and add-ons, minus the down payment and trade-in. Insurance, fuel, and maintenance are not part of that loan payment. If you enter any of them, they are added only to a separate monthly ownership figure.",
    why:
      "The general loan calculator starts from an amount you already know. A vehicle deal usually starts from a price, and tax and a trade-in change what is financed. A mortgage starts from a home price and house costs. This page stays on the vehicle fields the auto loan calculator actually has.",
    stepsHeading: "How the car payment estimate is built",
    steps: [
      {
        title: "Enter the vehicle price and the APR",
        body: "The price must be greater than zero. APR is an annual percent from 0 through 100. The term is a whole number of months from 1 to 120.",
      },
      {
        title: "Add tax, fees, and add-ons before you subtract cash in",
        body: "Sales tax is the price times the tax rate divided by 100. Fees cover title, registration, and dealer fees as one amount. Add-ons are a separate amount. A blank optional field counts as zero. The amount financed is price plus tax plus fees plus add-ons, minus the down payment, minus the trade-in.",
      },
      {
        title: "Stop if nothing is left to finance",
        body: "If the down payment and trade-in cover the price, tax, fees, and add-ons, the calculator does not invent a payment. It tells you there is no amount to finance.",
      },
      {
        title: "Use the installment formula on the amount financed",
        body: "At 0% APR, the payment is the amount financed divided by the number of months. Above 0%, it uses the same monthly installment formula as the other loan tools, with APR divided by 12 as the monthly rate. The page also compares 36, 48, 60, and 72 month terms for that same amount and APR.",
      },
    ],
    examples: [
      {
        title: "$10,000 price, no tax, no fees, no add-ons, nothing down, 0% APR, 36 months",
        body: "The amount financed is $10,000. At 0% the estimated payment is $10,000 divided by 36, which rounds to $277.78. Interest is $0. The 36, 48, 60, and 72 month comparison still appears, each with no interest at this APR.",
      },
      {
        title: "The same price with 8% sales tax and a $1,000 down payment",
        body: "Tax is $800. Amount financed is $10,000 plus $800 minus $1,000, which is $9,800, if fees, add-ons, and trade-in are zero. The payment is then the installment on $9,800, not on the sticker price. A trade-in would subtract again, the same way the down payment does.",
      },
    ],
    notesHeading: "What belongs in the loan payment, and what does not",
    notes: [
      {
        heading: "Ownership costs are outside the loan payment",
        body: "Insurance, fuel, and maintenance are optional monthly amounts. They do not change the amount financed or the loan payment. If any of them is greater than zero, the page adds them to the loan payment and shows that sum as a monthly ownership estimate.",
      },
      {
        heading: "Which tool to open",
        body: "Use the auto loan calculator when you have a vehicle price, a tax rate, fees, a trade-in, or ownership costs. Use the loan calculator when you already know the amount to amortize and you do not need those vehicle lines. Do not use the mortgage calculator for a car. It asks for a home price, a down payment mode, and house costs.",
      },
      {
        heading: "Common mistakes",
        body: "Subtracting the trade-in before tax does not match this form. Tax is calculated on the vehicle price, then the down payment and trade-in are subtracted. Putting insurance into the fees box finances it and adds it to the loan. The insurance box is monthly and stays out of the loan.",
      },
      {
        heading: "Limits",
        body: "The estimate uses one APR for the whole term. It does not apply tax to fees or add-ons, and it does not reduce tax because of a trade-in. A dealer worksheet can do either of those. The term comparison is only 36, 48, 60, and 72 months, even if the term you chose is different. The result is not a financing offer.",
      },
    ],
    faqs: [
      {
        question: "How do you estimate a car loan payment?",
        answer:
          "Add the vehicle price, sales tax on that price, fees, and add-ons. Subtract the down payment and trade-in. The payment is the installment on what remains, using the APR and the term in months.",
      },
      {
        question: "Is sales tax charged on the price after the trade-in?",
        answer:
          "Not in this calculator. Tax is the vehicle price times the tax rate. The trade-in is subtracted afterward.",
      },
      {
        question: "Do fuel and insurance change the loan payment?",
        answer:
          "No. They are added only to the optional monthly ownership figure, and only when you enter them.",
      },
      {
        question: "What if the down payment covers the whole price?",
        answer:
          "If the down payment and trade-in cover price, tax, fees, and add-ons, there is no amount to finance and the calculator does not show a payment.",
      },
    ],
    cta: {
      before: "To estimate the amount financed and the payment from these vehicle fields, use the",
      linkLabel: "Auto Loan Calculator",
      href: "/tools/auto-loan-calculator",
      after: ". It does not contact a dealer or a lender.",
    },
  },
  "how-a-home-price-estimate-works": {
    intro:
      "This home price estimate works backward from income. It sets aside a share of monthly gross income for housing, subtracts debts and the housing costs you enter, and solves for a price whose loan payment and property tax fit in what is left. The price is an estimate from those assumptions. It is not the amount you can safely afford, and it is not a mortgage approval.",
    why:
      "A mortgage calculator starts with a price you already have in mind and estimates the payment. This calculator starts with annual gross income and a target debt-to-income ratio, then estimates a price. Using one when you needed the other answers the wrong question.",
    stepsHeading: "How the price is estimated",
    steps: [
      {
        title: "Turn annual income into a monthly housing budget",
        body: "Monthly gross income is the annual amount divided by 12. The housing budget is that monthly income times the target ratio divided by 100, minus monthly debt payments. If that budget is zero or less, the calculator stops. There is no room left for a housing payment at that income, debt, and ratio.",
      },
      {
        title: "Remove insurance, HOA, and PMI",
        body: "Homeowners insurance is an annual amount divided by 12. HOA and PMI are monthly. Blank fields are zero. Those three are subtracted from the housing budget before a loan is sized. If they use the whole budget, no loan fits.",
      },
      {
        title: "Solve for price from the loan payment and property tax",
        body: "What remains has to cover the installment on the loan and the property tax. Tax is an annual rate on the home price, divided by 12. With a percent down payment, the loan is the price times one minus that percent. With a dollar down payment, the loan is the price minus that dollar amount. The installment factor is the monthly payment on one dollar of loan at your rate and term. The calculator solves the price so payment plus monthly tax fits the leftover budget.",
      },
      {
        title: "Read the other ratios as scenarios, not as advice",
        body: "Besides the target ratio you entered, the page also tries 28%, 30%, and 36%. A scenario can fail if that ratio leaves no payment room. The term must be a whole number of years from 1 to 50. A percent down payment must be under 100, because 100% down leaves no loan to size.",
      },
    ],
    examples: [
      {
        title: "$60,000 annual income, no other debt, 28% target, 20% down, 6% rate, 30 years, no tax or insurance",
        body: "Monthly gross income is $5,000. The housing budget is 28% of that, or $1,400. With insurance, HOA, PMI, and property tax at zero, the whole $1,400 is available for the loan payment. The estimated price is about $291,885.33, and the loan amount is about $233,508.26, which is 80% of that price. The estimated loan payment is $1,400. Change the rate, the term, or the down payment and the price changes. This is arithmetic from those inputs, not a budget recommendation.",
      },
      {
        title: "The same income with $400 of monthly debt",
        body: "The housing budget falls by $400, to $1,000, before any insurance or tax. With the other inputs unchanged, the estimated price is about $208,489.52. The tool does not decide whether that debt figure is complete. It uses the number you type.",
      },
    ],
    notesHeading: "What this estimate is not",
    notes: [
      {
        heading: "It does not say what you can safely buy",
        body: "The target ratio is an input, not a rule this site is giving you. A higher ratio produces a higher estimated price and a tighter monthly budget. Taxes, repairs, and a payment you can live with may not match the ratio you typed.",
      },
      {
        heading: "Use the mortgage calculator for a known price",
        body: "If you already have a home price and want the payment, open the mortgage calculator. It will not solve a price from income. This affordability calculator will not start from a price you picked.",
      },
      {
        heading: "Common mistakes",
        body: "The income box is annual gross income, not monthly pay and not take-home pay. Property tax is a rate on the price, not a dollar amount. Insurance is an annual dollar amount. Mixing those units changes the estimate a lot.",
      },
      {
        heading: "Limits",
        body: "The math assumes a fixed rate, a fixed ratio, and housing costs that stay at the amounts you entered. It does not check credit, cash for closing, or whether a lender uses the same ratio. PMI is whatever monthly amount you type. The tool does not look up a local tax rate. The result can be wrong for a purchase even when the arithmetic matches these rules.",
      },
    ],
    faqs: [
      {
        question: "How does a home affordability calculator work?",
        answer:
          "It takes a share of monthly gross income, subtracts the monthly debts and housing costs you enter, and solves for a home price whose loan payment and property tax fit in the remainder.",
      },
      {
        question: "Is the estimated price an amount I can safely afford?",
        answer:
          "No. It is the price that fits the ratio and the other inputs. It is not a spending limit and not a loan approval.",
      },
      {
        question: "What happens if my debts use the whole ratio?",
        answer:
          "If monthly debt is already at or above the target share of income, the calculator reports that there is no room left for a housing payment.",
      },
      {
        question: "Why do I also see 28%, 30%, and 36%?",
        answer:
          "Those are extra scenarios beside the target ratio you entered. Each one is the same formula at that ratio. A row can fail if that ratio leaves no payment room.",
      },
    ],
    cta: {
      before: "To run this income-based price estimate, use the",
      linkLabel: "Home Affordability Calculator",
      href: "/tools/home-affordability-calculator",
      after: ". Treat the price as an estimate from your inputs, not as permission to buy.",
    },
  },
};

export function flattenGuideContent(content: GuideContent): string {
  const parts = [content.intro, content.why, content.stepsHeading];
  for (const step of content.steps) parts.push(`${step.title}. ${step.body}`);
  for (const example of content.examples) parts.push(`${example.title}. ${example.body}`);
  for (const note of content.notes ?? []) parts.push(`${note.heading}. ${note.body}`);
  for (const faq of content.faqs) parts.push(`${faq.question} ${faq.answer}`);
  parts.push(`${content.cta.before} ${content.cta.linkLabel} ${content.cta.after ?? ""}`.trim());
  return parts.join("\n\n");
}
