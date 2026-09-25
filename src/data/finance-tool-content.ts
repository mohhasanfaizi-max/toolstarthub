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
  "hourly-wage-calculator": {
    about: "Turn an hourly rate and a weekly schedule into weekly, monthly, and annual pay, or start from a salary and see the hourly rate.",
    howTo: [
      "Choose hourly rate or annual salary.",
      "Enter hours per week and weeks per year.",
      "Enter overtime hours and a multiplier, or leave overtime at 0.",
      "Press Calculate.",
    ],
    features: ["Hourly-to-salary and salary-to-hourly.", "Overtime at a multiplier you choose.", "Weekly, monthly, and annual totals."],
    examples: [
      { title: "20 dollars an hour", body: "40 hours a week for 52 weeks is 41,600 dollars a year before overtime." },
      { title: "A 52,000 dollar salary", body: "At 40 hours and 52 weeks, the hourly rate is 25 dollars." },
    ],
    explanation: "Regular annual pay is the hourly rate times hours per week times weeks per year. In salary mode, the hourly rate is the salary divided by that same schedule. Overtime pay is overtime hours times the hourly rate times the multiplier, then times weeks per year. Monthly pay is the annual total divided by 12.",
    tips: ["Use 52 weeks for a full year.", "Use a multiplier of 1.5 for time and a half, or 1 if overtime is paid at the regular rate."],
    limitations: "This is gross pay from the hours you enter. It does not subtract taxes, benefits, or unpaid time off.",
    faqs: [
      { question: "How do I convert hourly pay to a salary?", answer: "Multiply the hourly rate by hours per week and by weeks per year. Add overtime if you entered it." },
      { question: "How do I convert a salary to an hourly rate?", answer: "Divide the annual salary by hours per week times weeks per year." },
      { question: "How is overtime pay calculated?", answer: "Overtime hours per week are multiplied by the hourly rate, the multiplier, and the weeks per year." },
      { question: "What weeks per year should I use?", answer: "Use 52 for a job that is paid every week. Use fewer weeks if some weeks are unpaid." },
      { question: "Does this include taxes?", answer: "No. The totals are before taxes and other deductions." },
      local,
    ],
  },
  "paycheck-estimator": {
    about: "Estimate one paycheck and a year of pay from gross pay and the deductions you type.",
    howTo: [
      "Enter gross pay for one paycheck.",
      "Choose weekly, every two weeks, twice a month, or monthly.",
      "Enter pre-tax deductions, withholding as a percent or a dollar amount, and post-tax deductions. Blank deductions count as 0.",
      "Press Calculate.",
    ],
    features: ["Four pay frequencies.", "Percent or dollar withholding.", "A net paycheck and an annual estimate at that same frequency."],
    examples: [
      { title: "1,000 dollars with 10 percent withholding", body: "With no other deductions, withholding is 100 dollars and net pay is 900 dollars." },
      { title: "A dollar withholding amount", body: "A 200 dollar withholding on a 1,000 dollar paycheck leaves 800 dollars when other deductions are 0." },
    ],
    explanation: "Pre-tax deductions come out of gross pay first. Withholding is then a percent of what remains, or the dollar amount you typed. Post-tax deductions come out after withholding. Annual figures repeat that paycheck by 52, 26, 24, or 12.",
    tips: ["Leave a deduction blank when it is zero.", "Use percent withholding only for the rate you want this estimate to assume."],
    limitations: "Withholding is entirely the number you enter. This page does not use IRS, state, or local tax tables, and it is not an official tax calculation.",
    faqs: [
      { question: "How is take-home pay estimated?", answer: "Gross pay minus pre-tax deductions, minus the withholding you entered, minus post-tax deductions." },
      { question: "What is the difference between pre-tax and post-tax deductions?", answer: "Pre-tax deductions reduce the amount used for withholding. Post-tax deductions are subtracted after withholding." },
      { question: "How does withholding percent work?", answer: "The percent is applied to gross pay after pre-tax deductions. 0 percent withholds nothing. 100 percent withholds all of that remaining amount." },
      { question: "What do the pay frequencies mean?", answer: "Weekly uses 52 paychecks, every two weeks uses 26, twice a month uses 24, and monthly uses 12." },
      { question: "Is this an official tax calculation?", answer: "No. It uses only the withholding percent or dollar amount you type." },
      local,
    ],
  },
  "rent-vs-buy-calculator": {
    about: "Estimate rent paid over several years next to the cash you would pay to buy, the remaining loan, and the equity from the home-value change you enter.",
    howTo: [
      "Enter monthly rent and an annual rent change. Use 0 if rent stays flat.",
      "Enter the home price, down payment, rate, and loan term.",
      "Enter yearly property tax, insurance, and maintenance, and monthly HOA. Blank means 0.",
      "Enter a home-value change and how many years to compare, then press Calculate.",
    ],
    features: ["Rent that can rise or fall each year.", "A loan payment from the same installment math as the mortgage calculator.", "Cash cost, remaining balance, and equity shown separately."],
    examples: [
      { title: "Paying all cash", body: "A down payment equal to the price has no loan payment. Equity follows the home-value change you enter." },
      { title: "A longer comparison than the loan", body: "After the loan term, principal and interest stop. Tax, insurance, HOA, and maintenance continue." },
    ],
    explanation: "Each year of rent is the prior year multiplied by one plus the rent-change percent. The loan payment uses the standard monthly installment. Buying cash is the down payment, principal and interest through the comparison, and the housing costs you typed. Equity is the estimated home value minus the remaining balance. Net buying cost is cash minus equity. The difference is rent cost minus that net buying cost. Neither result is labeled as the better choice.",
    tips: ["Use 0 for rent change and home-value change when you want a flat comparison.", "The rate is an example you type, not a live mortgage offer."],
    limitations: "Rent growth and home-value change are assumptions, not forecasts. The page does not include selling costs, repairs beyond the maintenance amount, or taxes on a sale.",
    faqs: [
      { question: "How does this compare renting and buying?", answer: "It totals rent over the years you enter and totals buying cash, then subtracts estimated equity from the buying cash." },
      { question: "Does the calculator recommend buying or renting?", answer: "No. It shows the two estimated costs and the difference. It does not call either one better." },
      { question: "What happens when the comparison is longer than the loan?", answer: "Principal and interest stop when the term ends. The other yearly and monthly costs you entered continue." },
      { question: "How is home equity estimated?", answer: "The home price is changed by your annual value assumption, then the remaining loan balance is subtracted." },
      { question: "Are rent growth and home prices forecasts?", answer: "No. Both are rates you type for this estimate." },
      local,
    ],
  },
  "fuel-cost-calculator": {
    about: "Estimate how much fuel a trip uses and what it costs at the price you enter.",
    howTo: [
      "Choose miles with miles per gallon, or kilometers with liters per 100 km.",
      "Enter the distance, the economy figure, and the fuel price.",
      "Enter how many times you make that trip.",
      "Press Calculate.",
    ],
    features: ["Miles and gallons, or kilometers and liters.", "Cost for one trip and for every trip.", "A price you type, not a live quote."],
    examples: [
      { title: "100 miles at 25 miles per gallon", body: "The trip uses 4 gallons. At 4 dollars a gallon, one trip costs 16 dollars." },
      { title: "100 kilometers at 8 liters per 100 km", body: "The trip uses 8 liters." },
    ],
    explanation: "In miles mode, gallons are distance divided by miles per gallon. In kilometer mode, liters are distance times liters per 100 km, divided by 100. Cost is fuel times the price you enter, then multiplied by the number of trips.",
    tips: ["Switching units replaces the sample economy and price so the units stay together.", "Enter the price you expect to pay. The page does not fetch a station price."],
    limitations: "The result ignores traffic, cargo, and the difference between city and highway economy except for the single economy number you type.",
    faqs: [
      { question: "How is trip fuel cost calculated?", answer: "Fuel used is calculated from distance and economy, then multiplied by the price and by the number of trips." },
      { question: "What is the difference between MPG and L/100 km?", answer: "Miles per gallon divides distance by economy. Liters per 100 km multiplies distance by the liters used for each 100 km." },
      { question: "Does this use today's gas price?", answer: "No. It uses the price you type." },
      { question: "How do multiple trips work?", answer: "One-trip fuel and cost are multiplied by the number of trips." },
      { question: "What if I drive zero miles?", answer: "Fuel used and cost are 0. A miles-per-gallon value of 0 is rejected because the trip cannot be divided by zero." },
      local,
    ],
  },
  "business-days-calculator": {
    about: "Count Monday through Friday between two dates. You can leave out dates that should not count.",
    howTo: [
      "Enter the start and end dates.",
      "Choose whether the end date is included.",
      "Add excluded dates, one per line, or leave that box empty.",
      "Press Calculate.",
    ],
    features: ["Weekday and weekend counts.", "An optional end date.", "Excluded dates you type, without a built-in holiday list."],
    examples: [
      { title: "A Monday through Friday", body: "1 January 2024 through 5 January 2024 is five business days." },
      { title: "A weekend", body: "6 January 2024 through 7 January 2024 is Saturday and Sunday, so the business-day count is 0." },
    ],
    explanation: "Each date from the start through the end, when the end is included, is a weekday or a weekend day. Monday through Friday count as business days unless you excluded that date. Saturday and Sunday count as weekend days. If the end date is earlier, the page counts the span between the two dates.",
    tips: ["Write excluded dates as YYYY-MM-DD.", "A date outside the range is ignored."],
    limitations: "There is no country holiday calendar. A holiday counts as a business day unless you exclude it.",
    faqs: [
      { question: "How are business days counted?", answer: "Monday through Friday are counted. Saturday and Sunday are not, unless you are looking at the weekend total." },
      { question: "Does this include weekends?", answer: "Weekend days are shown separately. They are not included in the business-day count." },
      { question: "What if the end date is a weekend?", answer: "A Saturday or Sunday end date adds a weekend day when the end date is included. It does not add a business day." },
      { question: "Can I exclude specific dates?", answer: "Yes. Put one date per line. A weekday inside the range is removed from the business-day count and listed." },
      { question: "Does this include holidays?", answer: "Only if you leave them in. The page does not know which dates are holidays." },
      local,
    ],
  },
  "gpa-calculator": {
    about: "Add courses with a letter grade or numeric grade points and a credit value. The GPA is total grade points divided by total credits.",
    howTo: ["Add each course.", "Enter a letter from the 4.0 map, or switch the course to numeric grade points.", "Enter the credits.", "Press Calculate."],
    features: ["Credit-weighted GPA.", "Letter grades or numeric points.", "Total credits and total grade points."],
    examples: [
      { title: "Two courses", body: "An A worth 3 credits and a B worth 1 credit is 15 grade points over 4 credits, so the GPA is 3.75 on this map." },
    ],
    explanation: "Each course contributes grade points times credits. Those products are added, then divided by the sum of the credits. A zero-credit course adds nothing. If every course has zero credits, there is no GPA to divide.",
    tips: ["The letter map is shown above the form.", "Numeric points must be from 0 to 4.0 on this scale."],
    limitations: "Schools do not all use this map. Plus and minus letters follow the values listed on the page, not a school catalog.",
    faqs: [
      { question: "How is GPA calculated?", answer: "Multiply each course's grade points by its credits, add those products, and divide by the total credits." },
      { question: "Which grade scale is used?", answer: "A common 4.0 map: A is 4.0, A- is 3.7, B+ is 3.3, B is 3.0, and the rest of the map is listed on the page." },
      { question: "Can I enter numeric grade points?", answer: "Yes. Mark that course as numeric and enter a value from 0 to 4.0." },
      { question: "What if a course has zero credits?", answer: "It does not change the totals. If the only credits are zero, the page does not divide." },
      { question: "Does every school use this map?", answer: "No. Use your school's points if they differ, and enter them as numeric grade points." },
      local,
    ],
  },
  "square-footage-calculator": {
    about: "Multiply length by width for each room, then add the rooms. The total is shown in square feet and square meters.",
    howTo: ["Enter the length and width of the first room.", "Choose feet or meters.", "Add another room if you need one.", "Press Calculate."],
    features: ["One room or several.", "Feet or meters on each room.", "Totals in square feet and square meters."],
    examples: [{ title: "A 10 by 10 foot room", body: "The area is 100 square feet, which is 9.29 square meters." }],
    explanation: "Area is length times width. A room entered in feet is converted with 0.09290304 square meters per square foot. A room entered in meters is converted the other way. Blank extra rows are skipped.",
    tips: ["Leave an extra room blank if you do not need it.", "Use the same kind of measurement on both sides of one room."],
    limitations: "The page measures rectangles. It does not subtract closets or add triangles.",
    faqs: [
      { question: "How do you calculate square footage?", answer: "Multiply length by width. For several rooms, add each room's area." },
      { question: "How are square feet converted to square meters?", answer: "One square foot is 0.3048 times 0.3048 square meters, which is 0.09290304." },
      { question: "Can rooms use different units?", answer: "Yes. Each room has its own feet or meters choice, and the totals are converted into both units." },
      { question: "What if an extra room is blank?", answer: "A row with no length and no width is skipped." },
      { question: "Are negative sizes allowed?", answer: "No. A negative length or width is rejected." },
      local,
    ],
  },
  "number-to-words": {
    about: "Write a whole number in English, or turn simple English number words back into a number. The range is -999,999,999 through 999,999,999.",
    howTo: ["Choose number to words or words to number.", "Enter the number or the words.", "Press Convert."],
    features: ["Whole numbers through millions.", "Negative numbers and zero.", "A reverse reading of simple English words."],
    examples: [{ title: "1,234", body: "The words are one thousand two hundred thirty-four." }],
    explanation: "The converter groups the number into millions, thousands, and the remainder. Tens and ones from 21 through 99 use a hyphen. The word and is not used. Leading zeros are ignored, so 007 is seven.",
    tips: ["Write twenty-one with a hyphen, or as twenty one.", "Use minus for a negative number."],
    limitations: "Decimals, billions, and phrases that use the word and are outside this converter.",
    faqs: [
      { question: "How do you write a number in words?", answer: "The page groups millions, thousands, and hundreds, then writes the tens and ones. 123 is one hundred twenty-three." },
      { question: "What range is supported?", answer: "Whole numbers from -999,999,999 through 999,999,999." },
      { question: "What happens to leading zeros?", answer: "They are ignored. 007 is seven." },
      { question: "Can decimals be converted?", answer: "No. Enter a whole number." },
      { question: "Can words be turned back into a number?", answer: "Yes, for simple English words in this range, such as one hundred twenty-three or minus twenty." },
      local,
    ],
  },
  "time-zone-converter": {
    about: "Show one clock time in a source time zone and the same instant in a target time zone.",
    howTo: ["Enter the date and time.", "Choose the source and target time zones.", "Press Convert."],
    features: ["Source and target date and time.", "UTC offset for each zone on that date.", "A note when a fall-back hour happens twice."],
    examples: [{ title: "New York to London in June", body: "15 June 2024 at 12:00 in New York is 17:00 in London. New York is UTC-04:00 and London is UTC+01:00 on that date." }],
    explanation: "The page finds the instant that matches the local date and time in the source zone, then formats that same instant in the target zone. Offsets come from the browser time-zone data for that date, so daylight-saving rules are included.",
    tips: ["A time that does not exist when clocks spring forward is rejected.", "When clocks fall back, the earlier of the two instants is shown and labeled."],
    limitations: "The list is the set of time zones the browser provides. The page does not call a time-zone service.",
    faqs: [
      { question: "How does the time zone converter work?", answer: "It keeps one instant and shows that instant's clock time and UTC offset in each zone you choose." },
      { question: "Does it use my computer's time zone?", answer: "No. The result uses the source and target zones you select." },
      { question: "What happens during a spring-forward gap?", answer: "A local time that does not exist is rejected instead of being shown as a normal conversion." },
      { question: "What happens when clocks fall back?", answer: "The local time happens twice. The page uses the earlier instant and says so." },
      { question: "Can the date change?", answer: "Yes. A conversion across the date line can show the previous or next calendar day." },
      local,
    ],
  },
  "url-parser": {
    about: "Paste one absolute URL and read its protocol, hostname, port, path, fragment, and query parameters.",
    howTo: ["Paste a full URL that starts with http or https.", "Press Parse."],
    features: ["Each query key as its own row.", "Empty query values kept.", "The fragment shown separately from the path."],
    examples: [{ title: "A URL with a port and two matching keys", body: "https://example.com:8080/docs?topic=a&topic= keeps the port 8080 and two topic rows, the second with an empty value." }],
    explanation: "The page uses the browser URL parser. Duplicate query keys stay as separate entries. A missing protocol or a relative path is rejected. The hostname is the value the URL parser returns, including an internationalized name in its encoded form.",
    tips: ["Include https:// or http://.", "A hash after the query is the fragment, not another parameter."],
    limitations: "Only absolute http and https URLs are parsed. The URL is not opened or sent anywhere.",
    faqs: [
      { question: "How is a URL parsed?", answer: "The browser URL parser splits the protocol, hostname, port, path, fragment, and each query parameter." },
      { question: "What happens to duplicate query keys?", answer: "Each one is listed. They are not combined into one value." },
      { question: "What about an empty query value?", answer: "A key with nothing after the equals sign is kept and shown as empty." },
      { question: "Why is a relative URL rejected?", answer: "A relative path has no protocol or host, so it is not an absolute URL." },
      { question: "Is the URL sent to a server?", answer: "No. Parsing happens in your browser." },
    ],
  },
  "morse-code": {
    about: "Convert letters and digits to International Morse code, or convert Morse back to text.",
    howTo: ["Choose text to Morse or Morse to text.", "Enter A-Z, 0-9, or Morse made of dots, dashes, spaces, and /.", "Press Convert."],
    features: ["A-Z and 0-9.", "Spaces between letters and / between words.", "A clear error for an unsupported character."],
    examples: [{ title: "HELLO", body: "HELLO is .... . .-.. .-.. ---." }],
    explanation: "Each letter and digit has one International Morse pattern. A space separates letters. A slash separates words. Lowercase text is read as uppercase. A character outside A-Z and 0-9 stops the conversion.",
    tips: ["Write SOS as ... --- ...", "Leave one space between Morse letters."],
    limitations: "Punctuation and letters outside A-Z are not converted. An unknown Morse pattern is rejected.",
    faqs: [
      { question: "How is text written in Morse code?", answer: "Each letter becomes its International Morse pattern. Letters are separated by a space, and words by /." },
      { question: "Does lowercase text work?", answer: "Yes. Lowercase letters are read as uppercase." },
      { question: "What separates words?", answer: "A slash separates words. A space separates letters inside a word." },
      { question: "What if I type punctuation?", answer: "The page names the unsupported character and does not guess a code for it." },
      { question: "Is the text sent anywhere?", answer: "No. The conversion runs in your browser." },
      local,
    ],
  },
  "roman-numeral-converter": {
    about: "Convert whole numbers from 1 through 3999 to standard Roman numerals, and convert those numerals back to numbers.",
    howTo: ["Choose number to Roman or Roman to number.", "Enter a number from 1 through 3999, or a numeral using I, V, X, L, C, D, and M.", "Press Convert."],
    features: ["Standard subtractive notation.", "A reverse conversion.", "Rejection of numerals that are not the standard form."],
    examples: [{ title: "1994", body: "1994 is MCMXCIV." }],
    explanation: "The page builds numerals from M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, and I. A Roman string is accepted only when it is the standard form of its value. IIII, IC, and IL are rejected. Numerals above 3999, including vinculum notation, are not supported.",
    tips: ["4 is IV, not IIII.", "9 is IX, not VIIII."],
    limitations: "The range is 1 through 3999. Zero, negatives, and larger numbers are rejected.",
    faqs: [
      { question: "How do you convert a number to a Roman numeral?", answer: "The page uses standard subtractive notation. 4 is IV, 9 is IX, 40 is XL, and 3999 is MMMCMXCIX." },
      { question: "What numbers are supported?", answer: "Whole numbers from 1 through 3999." },
      { question: "Why is IIII rejected?", answer: "IIII is not the standard form of 4. The standard form is IV." },
      { question: "Can numerals above 3999 be converted?", answer: "No. Extended notation for larger numbers is not supported." },
      { question: "Can a numeral be turned back into a number?", answer: "Yes, when it is a standard numeral from 1 through 3999." },
      local,
    ],
  },
  "aspect-ratio-calculator": {
    about: "Simplify a width and height into a ratio, or calculate the missing side from a ratio and one known side.",
    howTo: ["Choose simplify, find height, or find width.", "Enter the size or the ratio.", "Press Calculate."],
    features: ["A simplified integer ratio.", "Height from a ratio and a width.", "Width from a ratio and a height."],
    examples: [{ title: "1920 by 1080", body: "1920 by 1080 simplifies to 16:9." }],
    explanation: "Both sides are scaled to whole numbers and divided by their greatest common divisor. When one side is missing, it is the known side multiplied by the other ratio term and divided by the matching term. The page does not open or resize an image.",
    tips: ["Use the same unit for width and height.", "A ratio term must be greater than 0."],
    limitations: "Decimal sizes are reduced from a rounded scale, so the shown ratio can be an integer pair rather than the original decimals.",
    faqs: [
      { question: "How do you calculate an aspect ratio?", answer: "Divide the width and height by their greatest common divisor. 1920 by 1080 is 16:9." },
      { question: "How do you find the missing side?", answer: "Multiply the known side by the other ratio term and divide by the matching term. A 4:3 width of 800 has a height of 600." },
      { question: "Does this resize an image?", answer: "No. It only calculates the ratio or the missing side." },
      { question: "Can the sides be decimals?", answer: "Yes. They must be greater than 0. The ratio is reduced after the decimals are scaled to whole numbers." },
      { question: "What if a side is zero?", answer: "Zero and negative sizes are rejected." },
      local,
    ],
  },
  "jwt-decoder": {
    about: "Read the header and payload of one compact JSON Web Token. The signature is not checked.",
    howTo: ["Paste a compact token with sections separated by dots.", "Press Decode."],
    features: ["Decoded header JSON.", "Decoded payload JSON.", "A note that says whether a signature section is present."],
    examples: [{ title: "A three-part token", body: "The first part is the header, the second is the payload, and the third is an unchecked signature section." }],
    explanation: "The page splits the token on dots and decodes the header and payload from base64url as UTF-8 JSON. A signature section can be reported as present or empty. It is never described as valid or invalid, because this page does not verify it.",
    tips: ["Paste the token only in this page.", "Treat a decoded payload as untrusted until a verifier checks the signature."],
    limitations: "Decoding does not prove that a token is authentic. The page does not fetch a signing key.",
    faqs: [
      { question: "What does a JWT decoder show?", answer: "It shows the header JSON and the payload JSON. It also says whether a signature section is present." },
      { question: "Does decoding prove the token is authentic?", answer: "No. Decoding a JWT does not verify its signature or prove that the token is authentic." },
      { question: "Is the token sent to a server?", answer: "No. Decoding happens in your browser. The token is not saved or added to the page address." },
      { question: "What if the signature section is empty?", answer: "The page says the section is present and empty. It still does not call the token valid or invalid." },
      { question: "What if a section is not JSON?", answer: "The page rejects that token instead of showing a partial guess." },
    ],
  },
  "robots-txt-generator": {
    about: "Write robots.txt text from one or more user-agent groups and an optional sitemap URL.",
    howTo: ["Enter a user-agent.", "Add allow and disallow paths, one per line.", "Add a sitemap URL if you want one.", "Press Generate."],
    features: ["Several user-agent groups.", "Several allow and disallow lines.", "An optional absolute sitemap URL."],
    examples: [{ title: "A private folder", body: "User-agent * with Disallow: /admin tells crawlers not to fetch paths under /admin. The file is text only." }],
    explanation: "Each group starts with User-agent, then one Allow line for each path and one Disallow line for each path. Blank path lines are skipped. A sitemap is added only when it is an absolute http or https URL. The page does not upload the file or test a live site.",
    tips: ["Use * for every crawler.", "Put each path on its own line."],
    limitations: "The result is text you can copy. It does not publish rules or check what a live site allows.",
    faqs: [
      { question: "How do you write a robots.txt file?", answer: "Start with a User-agent line, then add Allow and Disallow lines. Add a Sitemap line when you have an absolute sitemap URL." },
      { question: "Can I use more than one user-agent?", answer: "Yes. Each group has its own user-agent and rules." },
      { question: "What happens to a blank path?", answer: "A blank line is skipped, so it does not create an empty Allow or Disallow rule." },
      { question: "Does this test my live site?", answer: "No. It only generates the text. It does not publish the file or request your site." },
      { question: "What sitemap URL is accepted?", answer: "An absolute http or https URL. A path without a protocol is rejected." },
      local,
    ],
  },
};
