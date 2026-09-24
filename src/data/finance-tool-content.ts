import type { ToolContent } from "./tool-content.ts";

const local = {
  question: "Are these numbers sent to a server?",
  answer: "No. The math runs in your browser from the values you type.",
};

export const financeToolContent: Record<string, ToolContent> = {
  "compound-interest-calculator": {
    about:
      "Enter a starting amount, an annual rate, a time period, and how often interest compounds. You can also add a monthly contribution. The page shows the ending balance, the interest, and a simple-interest comparison.",
    howTo: [
      "Enter the starting amount and the annual rate. The sample starts at 10000 and 5%.",
      "Choose years or months, then choose annual, semiannual, quarterly, monthly, or daily compounding.",
      "Leave the monthly contribution at 0, or enter an amount you add each month.",
      "Press Calculate. Reset restores the sample values.",
    ],
    features: [
      "Principal-only growth and growth with monthly contributions, shown separately.",
      "A year-by-year balance.",
      "A simple-interest result on the same starting amount.",
    ],
    examples: [
      {
        title: "10,000 at 5% for 10 years, compounded monthly",
        body: "With no monthly contribution, the ending balance is the starting amount grown by the monthly rate. The interest line is the ending balance minus 10,000.",
      },
      {
        title: "The same inputs plus 100 a month",
        body: "The result splits the ending balance into the starting amount, the contributions, and the interest. Contributions are added at the end of each month.",
      },
    ],
    explanation:
      "With no contributions, the ending amount is P times (1 + r/n) raised to n times t. P is the start, r is the annual rate as a decimal, n is the number of compounding periods in a year, and t is the time in years. Monthly contributions are added after that month’s compounding step. Simple interest on the same starting amount is P times r times t, with no compounding. Neither result is a promised investment return.",
    tips: [
      "Use 0 for the contribution when you only want to see the starting amount grow.",
      "Daily compounding uses 365 periods. It is still a formula, not a market forecast.",
    ],
    limitations:
      "The calculator does not include taxes, fees, or a change in the rate. A zero time period leaves the balance at the starting amount. Results that would overflow are rejected instead of shown as an infinite number.",
    faqs: [
      {
        question: "What is compound interest?",
        answer: "Interest that is added to the balance and then earns interest too. A higher compounding frequency applies that step more often.",
      },
      {
        question: "How is compound interest calculated?",
        answer: "The page uses A = P(1 + r/n)^(nt) when there is no contribution. With a monthly contribution, it grows the balance period by period and adds the contribution at the end of each month.",
      },
      {
        question: "How does monthly compounding work?",
        answer: "The annual rate is divided by 12. That monthly rate is applied to the balance each month.",
      },
      local,
    ],
  },
  "loan-calculator": {
    about:
      "Estimate the monthly payment on a fixed-rate installment loan, including a personal loan. Enter the amount, the annual rate, the term, and an optional fee that is not financed.",
    howTo: [
      "Enter the loan amount and the annual interest rate.",
      "Enter the term in years or months. The sample is 20,000 at 7% for 5 years.",
      "Enter a fee if you want it counted in the total cost. A fee of 0 leaves the payment unchanged.",
      "Press Calculate to see the payment, the interest, and the yearly schedule.",
    ],
    features: [
      "A standard fixed payment, including a zero-interest loan.",
      "Principal, interest, fee, and total cost shown as separate amounts.",
      "A yearly schedule, with the monthly rows available on request.",
    ],
    examples: [
      {
        title: "20,000 at 7% for 5 years",
        body: "The payment is the amount that pays the loan off in 60 months at that rate. Total interest is the sum of the payments minus 20,000.",
      },
      {
        title: "A zero-interest loan",
        body: "The payment is the loan amount divided by the number of months. Total interest is 0.",
      },
    ],
    explanation:
      "The monthly payment is P times r(1+r)^n divided by (1+r)^n minus 1. P is the amount borrowed, r is the annual rate divided by 12, and n is the number of months. At a 0% rate the payment is P divided by n. A longer term usually lowers the payment and raises the total interest. The interest rate here is the rate used in that formula. APR can include fees, so a fee entered on this page is added to the total cost and is not turned into an APR.",
    tips: [
      "Compare two terms by calculating twice. A shorter term usually costs less interest and has a higher payment.",
      "This page can answer a personal-loan question. It does not need a separate personal-loan URL.",
    ],
    limitations:
      "The result is an estimate from the numbers you enter. It is not a lender’s offer, and it does not include a variable rate or a payment holiday. The fee is not added to the amount that accrues interest.",
    faqs: [
      {
        question: "How is a loan payment calculated?",
        answer: "For a fixed rate above 0, the page uses the standard installment formula and rounds the payment to cents. At 0%, it divides the amount by the number of months.",
      },
      {
        question: "How does the loan term affect interest?",
        answer: "More months usually mean a smaller payment and more total interest, because the balance stays outstanding longer.",
      },
      {
        question: "What is the difference between interest rate and APR?",
        answer: "The rate in the form is the annual rate used to compute the payment. APR can also include fees. This page adds an optional fee to the total cost and does not label that total as an APR.",
      },
      local,
    ],
  },
  "mortgage-calculator": {
    about:
      "Estimate a fixed-rate mortgage payment from a home price, a down payment, a rate, and a term. Optional tax, insurance, HOA, and PMI stay at 0 until you enter them. Extra payments and a 15-year versus 30-year comparison are on this same page.",
    howTo: [
      "Enter the home price, the down payment as a percent or a dollar amount, the rate, and the term.",
      "Use 15 years or 30 years, or type another whole number of years from 1 to 50.",
      "Leave tax, insurance, HOA, and PMI blank if you only want principal and interest.",
      "Add an extra monthly payment or a one-time payment if you want a payoff estimate.",
      "Press Calculate. The rate in the sample is an example, not a live lender rate.",
    ],
    features: [
      "Principal and interest shown apart from the full monthly housing cost.",
      "A yearly schedule and an optional monthly schedule.",
      "An extra-payment estimate with months saved and interest saved.",
      "A 15-year and 30-year comparison on the same price, down payment, and rate.",
    ],
    examples: [
      {
        title: "A 400,000 home with 20% down",
        body: "The loan amount is 320,000. The main payment is principal and interest only until you type tax, insurance, HOA, or PMI.",
      },
      {
        title: "An extra 200 a month",
        body: "The payoff section shows a shorter term and the interest difference. It is an estimate of applying that extra amount to principal.",
      },
    ],
    explanation:
      "The loan amount is the home price minus the down payment. Principal and interest use the same fixed-rate formula as the loan calculator. At 0% interest, the payment is the loan amount divided by the number of months. Yearly property tax and insurance are divided by 12. HOA and PMI are monthly amounts you enter. The 15-year and 30-year rows use the same price, down payment, and rate so you can see the payment and the total interest side by side.",
    tips: [
      "A 100% down payment leaves a loan amount of 0 and a principal-and-interest payment of 0.",
      "PMI is whatever monthly amount you type. This page does not decide whether a loan has PMI.",
    ],
    limitations:
      "Estimates are for educational purposes and are based on the information you enter. Actual loan terms, lender fees, taxes, insurance, and other costs may differ. Extra payments are a mathematical estimate. A lender may apply them on a different schedule. This is not a quote.",
    faqs: [
      {
        question: "How is a mortgage payment calculated?",
        answer: "The page subtracts the down payment from the home price, then applies the fixed-rate payment formula to that loan amount and term.",
      },
      {
        question: "What is included in a monthly mortgage payment?",
        answer: "The principal-and-interest line is only the loan. Tax, insurance, PMI, and HOA are added only when you enter them.",
      },
      {
        question: "How does a down payment affect a mortgage?",
        answer: "A larger down payment lowers the loan amount, which lowers principal and interest. The down payment cannot be larger than the home price.",
      },
      {
        question: "How do extra mortgage payments reduce interest?",
        answer: "In this estimate, an extra monthly payment and an optional one-time payment reduce the balance faster. The page then shows the shorter payoff and the interest that was not charged.",
      },
      local,
    ],
  },
  "auto-loan-calculator": {
    about:
      "Estimate a fixed-rate car loan from a vehicle price, a down payment, a trade-in, a sales tax rate you enter, fees, optional add-ons, and an APR. The page shows the amount financed, the payment, and the total cost.",
    howTo: [
      "Enter the vehicle price, the cash down payment, and any trade-in credit.",
      "Enter the sales tax rate that applies to you. Leave fees and add-ons at 0 if you are not including them.",
      "Enter the APR and the term in months. 36, 48, 60, and 72 are shortcuts.",
      "Press Calculate. The APR in the sample is an example, not a lender offer.",
    ],
    features: [
      "Amount financed shown apart from price, tax, fees, add-ons, down payment, and trade-in.",
      "A 36, 48, 60, and 72 month comparison on the same amount and APR.",
      "An optional monthly schedule and optional insurance, fuel, and maintenance estimates.",
    ],
    examples: [
      {
        title: "A 30,000 vehicle with 3,000 down",
        body: "With tax, fees, add-ons, and trade-in at 0, the amount financed is 27,000. The payment uses that amount, the APR, and the term.",
      },
      {
        title: "A trade-in and a tax rate you type",
        body: "Sales tax is the vehicle price times your rate. The trade-in is then subtracted. This is not a rule for every state.",
      },
    ],
    explanation:
      "Amount financed is vehicle price plus sales tax plus fees plus add-ons, minus the down payment and the trade-in. Sales tax uses only the rate you type, applied to the vehicle price. The monthly payment uses the standard fixed-rate formula. At 0% APR the payment is the amount financed divided by the number of months. A longer term usually lowers the payment and raises total interest. The comparison uses the same financed amount and APR and does not call one term best.",
    tips: [
      "Use 0 for tax, fees, add-ons, or trade-in when you want those lines left out.",
      "Insurance, fuel, and maintenance are amounts you type. They are not averages.",
    ],
    limitations:
      "This is an estimate from the numbers you enter. It is not a loan approval, a promised rate, or a quote. States tax a trade-in in different ways, so the default math does not pretend there is one U.S. rule. A lender may treat fees or add-ons differently.",
    faqs: [
      {
        question: "How is an auto loan payment calculated?",
        answer: "The page finances the price plus the tax, fees, and add-ons you enter, after subtracting the down payment and trade-in. It then uses the fixed-rate payment formula. At 0% APR it divides the amount financed by the number of months.",
      },
      {
        question: "How much interest will I pay on a car loan?",
        answer: "Total interest is the sum of the scheduled payments minus the amount financed. It changes with the APR and the term. It is an estimate, not a guaranteed cost.",
      },
      {
        question: "Does a down payment reduce the amount financed?",
        answer: "Yes. Cash you enter as a down payment is subtracted before the payment is calculated.",
      },
      {
        question: "How does a trade-in affect an auto loan?",
        answer: "The trade-in value is subtracted from the amount that needs to be financed. Tax is still calculated on the vehicle price, because states do not all tax a trade-in the same way.",
      },
      {
        question: "Does a longer auto loan reduce the monthly payment?",
        answer: "A longer term usually lowers the monthly payment and increases total interest. The comparison table shows that without calling one term better.",
      },
      {
        question: "How much does an auto loan cost in total?",
        answer: "Total of payments is the amount financed plus interest. Total purchase cost adds the vehicle price, tax, fees, add-ons, and interest.",
      },
      local,
    ],
  },
  "home-affordability-calculator": {
    about:
      "Estimate a home price from annual income, monthly debts, a down payment, a rate, and housing costs you enter. The page works backward from a housing budget. It does not say a lender will approve that price.",
    howTo: [
      "Enter annual gross household income and the monthly debt you already pay.",
      "Choose a down payment as a percent of the home price or as a dollar amount.",
      "Enter a rate, a term, and a property tax rate. The sample rate and the 1% tax rate are examples.",
      "Leave insurance, HOA, and PMI blank for 0, or type your own estimates.",
      "Set a target ratio. 36% is the sample assumption, not a lender rule.",
    ],
    features: [
      "A housing budget after existing monthly debt is subtracted.",
      "Principal and interest, tax, insurance, HOA, and PMI shown as separate lines.",
      "A 28%, 30%, and 36% scenario comparison.",
    ],
    examples: [
      {
        title: "120,000 income and 500 in monthly debt",
        body: "Monthly gross income is 10,000. At a 36% target, 3,600 can go to housing plus that debt, so about 3,100 is left for housing before you add tax, insurance, HOA, or PMI.",
      },
      {
        title: "Debts that use the whole target",
        body: "If existing debt is already at or above the target, the page says there is no housing budget. It does not show a home price of 0.",
      },
    ],
    explanation:
      "Monthly gross income is annual income divided by 12. The target ratio times that income is the assumed cap for housing plus the debts you entered. Existing debt is subtracted. What remains has to cover principal and interest, property tax, insurance, HOA, and PMI. Property tax is the rate you enter times the home price. A percent down payment is a share of that price. A dollar down payment is added to the loan amount. The 28%, 30%, and 36% rows use the same other inputs and do not rank one ratio as better.",
    tips: [
      "Change the target ratio if you want a tighter or looser assumption. The page does not treat 36% as a rule.",
      "PMI is the monthly amount you type. This page does not decide whether a loan has PMI.",
    ],
    limitations:
      "The result is an educational estimate from the information you enter. It is not personalized financial advice, a guaranteed rate, or an approval. Actual limits depend on the lender, credit, location, taxes, insurance, and loan program.",
    faqs: [
      {
        question: "How much house can I afford?",
        answer: "This page estimates a price from the income, debts, down payment, rate, and housing costs you type. It is not a promise that you can buy that home.",
      },
      {
        question: "How is home affordability calculated?",
        answer: "It starts from a share of monthly gross income, subtracts existing debt, and solves for the loan and home price that fit the remaining housing budget.",
      },
      {
        question: "Does debt affect how much house I can afford?",
        answer: "Yes. Monthly debt you enter is subtracted before the housing budget is used to size the loan.",
      },
      {
        question: "How does a down payment affect affordability?",
        answer: "A percent down payment is a share of the estimated price. A dollar down payment is added to the loan amount. The label shows which one you are using.",
      },
      {
        question: "What is a housing debt-to-income ratio?",
        answer: "Here it is the target share of monthly gross income used for housing plus the debts you entered. You choose the percent. It is an assumption, not a lender policy.",
      },
      {
        question: "Does PMI affect home affordability?",
        answer: "A monthly PMI amount you type is part of the housing budget, so less is left for principal and interest. Blank means 0.",
      },
      {
        question: "Do property taxes and insurance affect affordability?",
        answer: "Yes. The tax rate is applied to the home price, and yearly insurance is divided by 12. Both reduce the amount left for the loan payment.",
      },
      local,
    ],
  },
  "debt-payoff-calculator": {
    about:
      "Estimate a payoff timeline for more than one debt. Enter each balance, APR, and minimum payment, then choose whether extra money goes to the highest APR or the smallest balance.",
    howTo: [
      "Enter at least one debt. Add more with Add debt. The sample starts with three debts.",
      "Enter a minimum payment that is larger than one month of interest on that balance.",
      "Enter an extra monthly payment, or 0 to use minimums only.",
      "Choose highest interest first or smallest balance first, then press Calculate.",
    ],
    features: [
      "Several debts in one estimate, which a single loan payment page does not do.",
      "A payoff order and the interest on each debt.",
      "A side-by-side view of both strategies, with and without the extra payment.",
    ],
    examples: [
      {
        title: "Two zero-interest balances",
        body: "A 1,000 balance and a 500 balance, each with a 100 minimum, pay the smaller one off first when both rates are 0. Freed minimums then go to the remaining balance.",
      },
      {
        title: "A minimum that does not cover interest",
        body: "If a minimum is less than or equal to the first month of interest, the page stops and says that balance would not fall.",
      },
    ],
    explanation:
      "Each month the balance is charged interest at APR divided by 12. Each debt then receives its minimum payment. Extra money, and any minimum freed when a balance hits zero, goes to the debt you selected: the highest APR, or the smallest balance. The two plans can finish on different months and charge different interest. The page shows those differences and does not call either plan better.",
    tips: [
      "Use 0 extra when you only want the minimum-payment timeline.",
      "Name each debt so the payoff order is easy to read.",
    ],
    limitations:
      "This is an estimate from the balances, rates, and payments you enter. A lender may apply payments or interest on a different schedule. The month count is not a guaranteed calendar date.",
    faqs: [
      {
        question: "How long will it take to pay off my debt?",
        answer: "The page counts months until every balance you entered reaches zero under the payments and strategy you chose. It is an estimate.",
      },
      {
        question: "What is the debt avalanche method?",
        answer: "Highest interest first sends the extra payment, and later any freed minimum, to the open debt with the highest APR.",
      },
      {
        question: "What is the debt snowball method?",
        answer: "Smallest balance first sends that extra money to the open debt with the smallest balance.",
      },
      {
        question: "How does an extra payment affect debt payoff?",
        answer: "The extra amount is applied after the minimums. The comparison shows the same debts with that extra amount and with minimums only.",
      },
      {
        question: "How much interest will I pay?",
        answer: "Total interest is the sum of the monthly interest charged until the balances reach zero. It changes with the rates, the minimums, and where the extra payment goes.",
      },
      local,
    ],
  },
  "credit-card-payoff-calculator": {
    about:
      "Estimate the payoff time and interest for one credit card. You set the APR, a minimum-payment percentage, a floor, a fixed payment, and an optional extra amount.",
    howTo: [
      "Enter the current balance and the APR.",
      "Enter the minimum percentage and the floor you want this estimate to use. Issuers do not all use the same rule.",
      "Enter a fixed monthly payment if you want the main result to use that amount. Leave it blank to follow the minimum formula.",
      "Add an extra amount if you want it included with the fixed payment.",
    ],
    features: [
      "A minimum formula you can see: percent of the starting balance, or the floor, whichever is larger.",
      "A fixed payment and a fixed payment plus extra, shown beside the minimum plan.",
      "An optional month-by-month schedule.",
    ],
    examples: [
      {
        title: "1,000 at 0% with a 100 payment",
        body: "The balance falls by 100 each month and reaches zero in 10 months. Interest is 0.",
      },
      {
        title: "A payment that does not cover interest",
        body: "If the chosen payment is less than or equal to the interest, the page says the balance would not fall instead of showing a payoff.",
      },
    ],
    explanation:
      "Interest in this estimate is the balance at the start of the month times the APR divided by 12. The minimum is the larger of the percentage and the floor, unless the balance is smaller. A fixed payment stays the same each month until the last payment clears the rest. This is not the average-daily-balance method every issuer uses.",
    tips: [
      "Leave the fixed payment blank when you want the main result to follow the percentage and floor.",
      "Use 0% APR when you want to see principal only.",
    ],
    limitations:
      "Results are estimates based on the APR and payment assumptions you enter. A card issuer may use a statement cycle, an average daily balance, or a different minimum. This page does not reproduce every issuer’s statement.",
    faqs: [
      {
        question: "How long will it take to pay off my credit card?",
        answer: "The page counts months until the balance reaches zero under the payment rule you selected. The count starts from the month you begin.",
      },
      {
        question: "How much should I pay each month?",
        answer: "You choose the assumption. The minimum row uses your percentage and floor. The fixed row uses the monthly amount you type.",
      },
      {
        question: "How does credit card APR affect payoff?",
        answer: "A higher APR adds more interest each month, so the same payment takes longer and costs more interest.",
      },
      {
        question: "Does paying extra reduce interest?",
        answer: "An additional amount, or a higher fixed payment, usually shortens the timeline and lowers total interest. The comparison shows the numbers without calling one row better.",
      },
      {
        question: "How is credit card payoff estimated?",
        answer: "The balance grows by one month of interest, then the payment is subtracted. The last payment is only what is left. It is not a copy of a specific issuer’s bill.",
      },
      local,
    ],
  },
  "savings-goal-calculator": {
    about:
      "Work backward from a savings target. Enter what you have now, a rate, and how long you have. The page estimates the contribution for each period.",
    howTo: [
      "Enter the target and the amount you have already saved.",
      "Enter an annual rate, or 0 if you do not want to assume interest.",
      "Enter the number of years and how often you add money: monthly, every two weeks, weekly, or once a year.",
      "Press Calculate. The 0%, 3%, 5%, and 7% rows are sample assumptions.",
    ],
    features: [
      "A required contribution, separate from current savings and estimated interest.",
      "Weekly, biweekly, monthly, and annual periods.",
      "A year-by-year balance at the rate you entered.",
    ],
    examples: [
      {
        title: "10,000 in 2 years with no interest",
        body: "With nothing saved and a 0% rate, the monthly contribution is 10,000 divided by 24.",
      },
      {
        title: "A goal you already reached",
        body: "If current savings are already at or above the target, the page asks for a higher goal or a lower starting amount. It does not show a contribution of 0 as a new plan.",
      },
    ],
    explanation:
      "With a 0% rate, the contribution is the gap divided by the number of periods. With a rate, current savings grow by the periodic rate, and each contribution is added at the end of the period. The payment is the amount that makes that future balance equal the target. Sample rates are assumptions, not forecasts.",
    tips: [
      "Use 0% when you want the gap split evenly and no interest.",
      "Current savings stay in the result so you can see they are not the same as new contributions.",
    ],
    limitations:
      "The rate is an assumption you type. This page does not predict investment returns, taxes, or fees. A target you have already reached is rejected.",
    faqs: [
      {
        question: "How much should I save each month?",
        answer: "Choose monthly as the frequency. The result is the contribution that reaches the target in the years you entered, at the rate you entered.",
      },
      {
        question: "How do I calculate a savings goal?",
        answer: "Subtract what you have from the target when the rate is 0, then divide by the number of deposits. With a rate, the page uses the future-value formula so interest is included.",
      },
      {
        question: "Does interest reduce the amount I need to save?",
        answer: "At a higher assumed rate, the required contribution is usually lower because the balance is estimated to earn interest. That rate is not guaranteed.",
      },
      {
        question: "What happens if I start with existing savings?",
        answer: "Current savings are grown first. You only contribute the gap that is still left.",
      },
      {
        question: "How long will it take to reach my savings goal?",
        answer: "You enter the time. The page then solves for the contribution, rather than solving for the date.",
      },
      local,
    ],
  },
};
