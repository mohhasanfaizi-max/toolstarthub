import type { GuideContent } from "./guide-content.ts";

export const phase3FinanceGuides: Record<string, GuideContent> = {
  "how-long-to-pay-off-a-credit-card": {
    intro:
      "A credit-card payoff estimate applies the APR you type each month and subtracts the payment until the balance hits zero. On a $1,000 balance at 18% APR, a $50 payment takes 24 months, costs $197.83 in interest, and pays $1,197.83 in all. The minimum rule of 2% or $25, whichever is greater, starts at $25 and takes 62 months with $538.62 in interest. The $50 plan shows $340.80 less interest than that minimum path. This is the calculator’s schedule, not a statement from the card issuer.",
    why:
      "Minimum payments keep a balance alive because part of each payment is interest. A fixed payment that is larger than the opening minimum shortens the schedule on this page. Seeing both paths next to each other makes the extra interest visible before you choose what to pay. The issuer’s real minimum can use a different rule than the percent and floor you type.",
    stepsHeading: "How to estimate a credit-card payoff",
    sections: [
      {
        id: "inputs",
        heading: "Which numbers does the estimate use?",
        paragraphs: [
          "You enter the current balance, the APR, a minimum percent, a minimum floor, a monthly payment, and an optional extra amount. The balance must be greater than 0. The APR and the minimum percent must be 100 or less. Blank optional fields are treated as 0.",
          "The minimum path pays the greater of the percent of the current balance and the floor, and that amount is recalculated as the balance falls. With a $1,000 balance, 2%, and a $25 floor, the opening minimum is $25 because 2% of $1,000 is $20, and the floor is higher.",
        ],
      },
      {
        id: "fixed",
        heading: "What does the $50 payment change?",
        paragraphs: [
          "A desired payment of $50, with no extra, is the main plan. It finishes in 24 months. Interest is $197.83 and the total paid is $1,197.83. The minimum path takes 62 months and $538.62 in interest, for a total paid of $1,538.62.",
          "The page reports interest saved of $340.80, which is the minimum-path interest minus the $50-plan interest after rounding to cents. Adding an extra of 0 does not change the $50 plan. A larger extra payment would, because the fixed-plus-extra path adds that amount every month.",
        ],
      },
      {
        id: "limits",
        heading: "What can stop the estimate?",
        paragraphs: [
          "The schedule stops at 600 months. A payment that never covers interest cannot finish, and the page says the balance would not fall. A zero balance is rejected. The APR is the annual rate you type, divided across months inside the calculator. It is not a promotional rate lookup.",
          "Fees, late charges, and a changing APR are not in this model. If the card adds a fee or the rate changes, the real payoff will differ. Use the figures as a comparison of the payments you entered.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the balance and APR",
        body: "Use the current balance and the annual percentage rate on the card. Both must follow the limits above.",
      },
      {
        title: "Enter the minimum percent and floor",
        body: "The sample uses 2% and a $25 floor. The opening minimum is the larger of those two results.",
      },
      {
        title: "Enter the payment you intend to make",
        body: "A $50 desired payment is the fixed plan. Extra is added on top of that when you type one.",
      },
      {
        title: "Compare months and interest",
        body: "Read the minimum scenario beside the fixed payment. The saved-interest figure is the difference in interest, not a credit from the issuer.",
      },
    ],
    examples: [
      {
        title: "$1,000 at 18% with a $50 payment",
        body: "The plan takes 24 months, charges $197.83 in interest, and collects $1,197.83 in payments. The payment shown is $50.",
      },
      {
        title: "The 2% or $25 minimum",
        body: "That path starts at $25, runs 62 months, and charges $538.62 in interest. The $50 plan saves $340.80 of interest against it.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The floor can be higher than the percent",
        body: "Two percent of $1,000 is $20. A $25 floor makes the opening minimum $25. Typing only the percent and forgetting the floor understates the minimum.",
      },
      {
        heading: "This is not the issuer’s schedule",
        body: "A real card can use a different minimum, add fees, or change the APR. The months here follow the inputs on the page.",
      },
    ],
    faqs: [
      {
        question: "How long does $1,000 at 18% take at $50 a month?",
        answer:
          "24 months. Interest is $197.83 and the total paid is $1,197.83.",
      },
      {
        question: "How long is the 2% or $25 minimum?",
        answer:
          "62 months, with $538.62 in interest and $1,538.62 paid. The opening payment is $25.",
      },
      {
        question: "How much interest does the $50 plan save?",
        answer:
          "$340.80 compared with that minimum path.",
      },
      {
        question: "What if the payment does not cover interest?",
        answer:
          "The balance would not fall, and the page says so. Raise the payment.",
      },
      {
        question: "Does the estimate contact the card issuer?",
        answer:
          "No. It runs in the browser from the numbers you type.",
      },
    ],
    cta: {
      before: "To compare a fixed payment with a minimum rule, use the",
      linkLabel: "Credit Card Payoff Calculator",
      href: "/tools/credit-card-payoff-calculator",
      after: ". The schedule is an estimate from your inputs.",
    },
    alsoSee: [
      {
        before: "Several balances at once are covered in",
        linkLabel: "How to plan a debt payoff",
        href: "/guides/how-to-plan-a-debt-payoff",
        after: ".",
      },
      {
        before: "An installment loan uses a different payment formula. See",
        linkLabel: "How a loan payment is calculated",
        href: "/guides/how-a-loan-payment-is-calculated",
        after: ".",
      },
    ],
  },
  "how-to-plan-a-debt-payoff": {
    intro:
      "A debt payoff plan pays every minimum, then sends extra money to one balance at a time. Avalanche sends the extra to the highest APR. Snowball sends it to the smallest balance. With a $4,000 card at 22% and an $80 minimum, plus a $1,500 loan at 6% and a $50 minimum, an extra $100 a month finishes in 30 months and $1,312.48 interest on avalanche. Snowball takes 31 months and $1,615.98 interest. Minimums alone, with no extra, take 74 months and $4,028.40 either way.",
    why:
      "Two debts with different rates and sizes do not shrink the same way. Paying the high rate first usually costs less interest. Paying the small balance first clears an account sooner and can be easier to stick with. This calculator shows both, using the balances, rates, and minimums you type. It is not a credit-counseling plan and it does not contact lenders.",
    stepsHeading: "How to plan a debt payoff",
    sections: [
      {
        id: "strategies",
        heading: "How do avalanche and snowball differ?",
        paragraphs: [
          "Every open debt still gets its minimum. The extra payment, plus any minimum freed when a debt ends, goes to one target. Avalanche picks the highest APR, and breaks a tie toward the smaller balance. Snowball picks the smallest balance, and breaks a tie toward the higher APR.",
          "In the sample, avalanche pays the 22% card first even though it is larger. That card ends in month 29 and the loan ends in month 30. Snowball pays the $1,500 loan first, in month 11, and the card lasts until month 31. The card-first path costs less interest in this sample.",
        ],
      },
      {
        id: "extra",
        heading: "What does the extra $100 change?",
        paragraphs: [
          "With the extra $100, avalanche interest is $1,312.48 and the total paid is $6,812.48. Snowball interest is $1,615.98 and the total paid is $7,115.98. The starting balances add to $5,500.",
          "With extra set to 0, both strategies take 74 months and $4,028.40 in interest. The order of the extra payment is what separates them. If there is no extra, and no freed minimum to redirect, the strategies can match. They are not different labels for the same result once an extra payment exists and the debts disagree on size and rate.",
        ],
      },
      {
        id: "limits",
        heading: "What will the planner reject?",
        paragraphs: [
          "You can enter up to 12 debts. Each balance and minimum must be greater than 0, and each APR must be 100% or less. If a minimum does not cover that debt’s first month of interest, the page says the balance would not fall. A plan that is still open after 600 months says the payments do not pay the debts off within 50 years.",
          "The model does not add new charges, fees, or a rate change. A card you keep spending on will not follow this schedule. Names are labels. A blank name becomes Debt 1, Debt 2, and so on.",
        ],
      },
    ],
    steps: [
      {
        title: "List each balance, APR, and minimum",
        body: "Use the current balance and the required payment. The minimum has to cover the first month of interest when the APR is above 0.",
      },
      {
        title: "Enter the extra you can add every month",
        body: "Zero is allowed. The sample uses $100 so the two strategies separate.",
      },
      {
        title: "Compare avalanche and snowball",
        body: "Read months, total interest, and the order the debts reach zero. The page shows both strategies.",
      },
      {
        title: "Treat the result as a plan, not a bill",
        body: "Lenders can change minimums and rates. Re-run the numbers if a balance or a rate changes.",
      },
    ],
    examples: [
      {
        title: "Avalanche with $100 extra",
        body: "The $4,000 card at 22% is paid in month 29. The $1,500 loan at 6% is paid in month 30. Total interest is $1,312.48 over 30 months.",
      },
      {
        title: "Snowball with the same debts",
        body: "The loan is paid in month 11 and the card in month 31. Total interest is $1,615.98 over 31 months. With no extra, both strategies take 74 months and $4,028.40 in interest.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "A sample can hide the difference",
        body: "If the smallest debt is also the highest APR, avalanche and snowball pick the same target. The sample above separates them on purpose: the expensive debt is the larger one.",
      },
      {
        heading: "The minimum must beat the interest",
        body: "A payment that does not cover the first month of interest is rejected. The balance would not fall.",
      },
    ],
    faqs: [
      {
        question: "Which debt is paid first in the sample?",
        answer:
          "Avalanche pays the $4,000 card at 22% first, in month 29. Snowball pays the $1,500 loan at 6% first, in month 11.",
      },
      {
        question: "How much interest does $100 extra save in the sample?",
        answer:
          "Avalanche finishes in 30 months with $1,312.48 interest. Snowball finishes in 31 months with $1,615.98. With no extra, both take 74 months and $4,028.40 in interest.",
      },
      {
        question: "How many debts can I enter?",
        answer:
          "Up to 12. Each needs a balance and a minimum greater than 0, and an APR of 100% or less.",
      },
      {
        question: "Does the page contact my lenders?",
        answer:
          "No. It schedules the numbers you type, in the browser, for at most 600 months.",
      },
      {
        question: "What if I keep charging the card?",
        answer:
          "The plan assumes you do not add new balances. New charges need a new run with the new balance.",
      },
    ],
    cta: {
      before: "To compare avalanche and snowball on your balances, use the",
      linkLabel: "Debt Payoff Calculator",
      href: "/tools/debt-payoff-calculator",
      after: ". Extra payments go to one debt at a time.",
    },
    alsoSee: [
      {
        before: "A single card has its own minimum rule. See",
        linkLabel: "How long it takes to pay off a credit card",
        href: "/guides/how-long-to-pay-off-a-credit-card",
        after: ".",
      },
      {
        before: "A fixed installment payment is explained in",
        linkLabel: "How a loan payment is calculated",
        href: "/guides/how-a-loan-payment-is-calculated",
        after: ".",
      },
    ],
  },
  "how-to-calculate-age": {
    intro:
      "Age on this page is the civil-calendar gap from a date of birth to a later date, counted in years, months, and days, plus a total in days. Someone born on 1 January 2000 is 26 years, 0 months, and 0 days on 1 January 2026, which is 9,497 days. A birth date of 29 February 2000 reaches 28 February 2001 as 0 years, 11 months, and 30 days, which is 365 days. The selected date cannot be before the date of birth.",
    why:
      "Subtracting the years and ignoring the month is wrong when the birthday has not arrived. Counting days with a fixed 365 misses leap days. This calculator walks the calendar, so a leap day is a real day in the total and a real complication in the year-month-day display. It does not look up a birthday or a time zone.",
    stepsHeading: "How to calculate age",
    sections: [
      {
        id: "calendar",
        heading: "How are years, months, and days counted?",
        paragraphs: [
          "The count starts at the birth date and moves forward to the selected date. Full years are completed birthdays. Full months are completed month anniversaries after that. The leftover is days. On a birthday, the months and days are 0, as in the 1 January 2000 to 1 January 2026 example.",
          "Total days is the number of midnights between the two dates, not an average year times the age. The 26-year example is 9,497 days. That includes the leap days that fell in between. The page does not show hours or minutes.",
        ],
      },
      {
        id: "leap",
        heading: "What happens with a leap-day birthday?",
        paragraphs: [
          "29 February 2000 is a real date. The next year, 2001, has no 29 February. Measured on 28 February 2001, the result is 0 years, 11 months, and 30 days, and the total is 365 days. The birthday anniversary in a non-leap year is not invented as 29 February.",
          "An impossible date, such as 31 February, is not accepted. The date has to be a real calendar day. Use the date fields rather than a free-typed month name.",
        ],
      },
      {
        id: "limits",
        heading: "What dates are rejected?",
        paragraphs: [
          "If the selected date is earlier than the birth date, the page says The selected date cannot be before the date of birth. Swap the dates if you meant the other direction. A future date is allowed when you want an age on a later day, such as a 20th birthday that has not happened yet.",
          "The count is date to date. It does not apply a time of day, a time zone, or a legal rule about when a birthday is observed. For the number of days between two dates that are not an age, the date-difference calculator is the other tool.",
          "The day before that anniversary is not yet 26. On 31 December 2025, a 1 January 2000 birth is 25 years, 11 months, and 30 days, which is 9,496 days. The next day, 1 January 2026, is the first date that reads 26 years, 0 months, and 0 days.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the date of birth",
        body: "Use a real calendar day. 29 February is accepted only in a leap year.",
      },
      {
        title: "Enter the date to measure",
        body: "It can be today or a later date. It cannot be earlier than the birth date.",
      },
      {
        title: "Read years, months, days, and total days",
        body: "A birthday anniversary shows 0 months and 0 days. Total days includes leap days.",
      },
      {
        title: "Do not treat the total as 365 times the years",
        body: "9,497 days for 26 years is the calendar count, not 26 times 365.",
      },
    ],
    examples: [
      {
        title: "1 January 2000 to 1 January 2026",
        body: "The age is 26 years, 0 months, and 0 days. The total is 9,497 days.",
      },
      {
        title: "29 February 2000 to 28 February 2001",
        body: "The age is 0 years, 11 months, and 30 days. The total is 365 days.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Year subtraction skips the birthday",
        body: "The calendar count stays at the previous age until the anniversary. Months and days show how far along the current year is.",
      },
      {
        heading: "A leap day does not exist in every year",
        body: "The 2000-02-29 example does not land on 29 February 2001, because that day is not on the calendar.",
      },
    ],
    faqs: [
      {
        question: "How old is someone born on 1 January 2000 on 1 January 2026?",
        answer:
          "26 years, 0 months, and 0 days. The total is 9,497 days.",
      },
      {
        question: "How is 29 February 2000 counted on 28 February 2001?",
        answer:
          "As 0 years, 11 months, and 30 days, which is 365 days in total.",
      },
      {
        question: "Can the second date be in the future?",
        answer:
          "Yes. It cannot be before the date of birth. The page rejects that order.",
      },
      {
        question: "Does the calculator include the time of day?",
        answer:
          "No. It compares calendar dates and reports years, months, days, and total days.",
      },
      {
        question: "Is a birthday looked up online?",
        answer:
          "No. Both dates are the ones you enter, and the count runs in the browser.",
      },
    ],
    cta: {
      before: "To count age in years, months, days, and total days, use the",
      linkLabel: "Age Calculator",
      href: "/tools/age-calculator",
      after: ". It follows the civil calendar, including leap days.",
    },
    alsoSee: [
      {
        before: "For a day count that is not an age, see",
        linkLabel: "How to count days between dates",
        href: "/guides/how-to-count-days-between-dates",
        after: ".",
      },
      {
        before: "Percents are a different kind of figure. See",
        linkLabel: "How to calculate a percentage",
        href: "/guides/how-to-calculate-percentage",
        after: ".",
      },
    ],
  },
  "how-a-loan-payment-is-calculated": {
    intro:
      "A standard loan payment spreads the principal and interest over a fixed number of months. On this calculator, $10,000 at 6% for 5 years, with no fee, has a monthly payment of $193.33, 60 payments, $1,599.68 of interest, and $11,599.68 paid in all. The first month is $50.00 of interest and $143.33 of principal, leaving $9,856.67. A $1,200 loan at 0% for 12 months is $100 a month and $0 interest. The fee is added to the total cost and is not financed into the payment.",
    why:
      "The payment is not the rate times the balance once. Early months are mostly interest because the balance is still large. Later months apply more of the same payment to principal. Seeing the first month and the lifetime interest keeps a quoted payment from hiding the cost. This is the formula on the page. A lender can add fees or a different schedule.",
    stepsHeading: "How a loan payment is calculated",
    sections: [
      {
        id: "formula",
        heading: "What formula produces the payment?",
        paragraphs: [
          "When the annual rate is above 0, the monthly rate is the annual percent divided by 100 and then by 12. The payment is principal times that monthly rate times (1 plus the monthly rate) to the power of the number of months, divided by that same power minus 1. The page rounds the payment to cents. For $10,000 at 6% over 60 months, that payment is $193.33.",
          "A 0% rate skips the interest formula. The payment is the principal divided by the number of months. $1,200 over 12 months is $100, the interest is $0, and the total paid is $1,200.",
        ],
      },
      {
        id: "schedule",
        heading: "What happens in the first month?",
        paragraphs: [
          "Interest for the month is the balance times the monthly rate. On $10,000 at 6%, that is $50.00. The rest of the $193.33 payment, $143.33, reduces principal. The balance becomes $9,856.67. Next month’s interest is calculated on that new balance, so it is slightly smaller.",
          "Over 60 months the interest adds to $1,599.68 and the total paid is $11,599.68. The schedule will not run if a payment fails to cover interest. The page says the balance would not fall.",
        ],
      },
      {
        id: "limits",
        heading: "How are the term and the fee treated?",
        paragraphs: [
          "The term is a whole number of years or months, at least 1. Years are multiplied by 12. The cap is 600 months, which the page describes as 50 years. The amount must be greater than 0, and the annual rate must be 100% or less.",
          "An optional fee is added to the total cost after the payments are totaled. It is not added to the principal, so it does not change the $193.33 payment. A fee of 0 leaves the total cost equal to the total paid. The result is an estimate from these inputs, not a lender’s disclosure.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the amount, annual rate, and term",
        body: "Choose years or months. Five years is 60 payments. The term must be a whole number.",
      },
      {
        title: "Leave the fee at 0 unless you have one",
        body: "A fee increases the total cost. It does not change the monthly payment.",
      },
      {
        title: "Read the payment, interest, and total paid",
        body: "$10,000 at 6% for 5 years is $193.33 a month, $1,599.68 interest, and $11,599.68 paid.",
      },
      {
        title: "Read the first month if you want the split",
        body: "The opening month of that example is $50.00 interest, $143.33 principal, and a balance of $9,856.67.",
      },
    ],
    examples: [
      {
        title: "$10,000 at 6% for 5 years",
        body: "With a $0 fee, the payment is $193.33 for 60 months. Interest is $1,599.68 and the total paid is $11,599.68. Month 1 splits into $50.00 interest and $143.33 principal.",
      },
      {
        title: "$1,200 at 0% for 12 months",
        body: "The payment is $100, interest is $0, and the total paid is $1,200. The first month reduces the balance to $1,100.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The fee is outside the payment",
        body: "Adding a fee does not increase the financed principal on this page. Look at total cost including fee if you typed one.",
      },
      {
        heading: "The payment is an estimate of this formula",
        body: "A lender may use a different day count, a fee financed into the loan, or a rate that changes. Those are not in this schedule.",
      },
    ],
    faqs: [
      {
        question: "What is the payment on $10,000 at 6% for 5 years?",
        answer:
          "$193.33 a month for 60 months. Interest is $1,599.68 and the total paid is $11,599.68 when the fee is $0.",
      },
      {
        question: "How does the first month split?",
        answer:
          "$50.00 is interest and $143.33 is principal. The balance left is $9,856.67.",
      },
      {
        question: "What is a $1,200 loan at 0% for 12 months?",
        answer:
          "$100 a month, $0 interest, and $1,200 paid in total.",
      },
      {
        question: "Does the fee change the monthly payment?",
        answer:
          "No. The fee is added to the total cost. It is not financed into the payment.",
      },
      {
        question: "How long can the term be?",
        answer:
          "Up to 600 months, which is 50 years. The term must be a whole number of at least 1, in years or months.",
      },
    ],
    cta: {
      before: "To estimate a fixed installment payment, use the",
      linkLabel: "Loan Calculator",
      href: "/tools/loan-calculator",
      after: ". The fee is kept out of the monthly payment.",
    },
    alsoSee: [
      {
        before: "A home loan adds taxes and insurance on top. See",
        linkLabel: "How a mortgage payment is estimated",
        href: "/guides/how-a-mortgage-payment-is-estimated",
        after: ".",
      },
      {
        before: "A car purchase uses the same style of payment. See",
        linkLabel: "How to estimate a car loan payment",
        href: "/guides/how-to-estimate-a-car-loan-payment",
        after: ".",
      },
    ],
  },
  "how-a-mortgage-payment-is-estimated": {
    intro:
      "A mortgage estimate on this page is the loan payment plus any housing costs you type. A $300,000 price with a $60,000 down payment leaves a $240,000 loan. At 6% for 30 years, with tax, insurance, HOA, and PMI left blank, the principal-and-interest payment is $1,438.92 a month. Interest over 360 months is $278,011.65. The same loan over 15 years is $2,025.26 a month and $124,546.15 in interest. This is the formula’s estimate, not a lender quote.",
    why:
      "The price of the house is not the amount financed, and the principal-and-interest payment is not always the amount you send each month. Down payment, term, taxes, insurance, HOA, and PMI each change a different line. Comparing 15 and 30 years on the same loan shows the trade between a higher payment and lower interest. The page does not know your credit, your taxes, or a lender’s fees.",
    stepsHeading: "How a mortgage payment is estimated",
    sections: [
      {
        id: "loan",
        heading: "How is the loan amount set?",
        paragraphs: [
          "The loan is the price minus the down payment. In the example, $300,000 minus $60,000 is $240,000. Down payment can be a dollar amount or a percent of the price. A percent above 100 is rejected. A down payment larger than the price is rejected.",
          "The payment uses the same installment formula as the loan calculator, on the loan amount, the annual rate, and the term in months. Thirty years is 360 months. The rate must be 100% or less, and the term must be a whole number from 1 to 50 years.",
        ],
      },
      {
        id: "housing",
        heading: "What is included in the housing payment?",
        paragraphs: [
          "Property tax and homeowners insurance are yearly amounts, divided by 12. HOA and PMI are monthly amounts you type. Blank optional costs stay at 0. In the example they are blank, so the housing payment equals the $1,438.92 principal-and-interest payment.",
          "The page does not look up property tax, insurance, or PMI. The PMI field says to enter the amount you were quoted. A borrower does not automatically have tax, insurance, PMI, or HOA in this estimate until those boxes have numbers.",
        ],
      },
      {
        id: "compare",
        heading: "How do 15 years and 30 years compare?",
        paragraphs: [
          "On the $240,000 loan at 6%, the 15-year payment is $2,025.26 and the interest is $124,546.15. The 30-year payment is $1,438.92 and the interest is $278,011.65. Total payments are $364,546.15 over 15 years and $518,011.65 over 30 years. The shorter term costs more each month and less interest overall.",
          "An extra monthly payment or a one-time extra payment is optional. The one-time amount is applied at the start and cannot exceed the loan. Extra principal can shorten the schedule. Leave both blank when you want the plain comparison above.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the price, down payment, rate, and years",
        body: "The sample is a $300,000 price, $60,000 down, 6%, and 30 years. The loan amount is $240,000.",
      },
      {
        title: "Leave housing costs blank or type real ones",
        body: "Tax and insurance are per year. HOA and PMI are per month. Blank means 0.",
      },
      {
        title: "Read principal and interest separately from the housing total",
        body: "With the optional costs blank, both figures are $1,438.92. They diverge once you add a tax or an insurance amount.",
      },
      {
        title: "Compare 15 and 30 years before you rely on one payment",
        body: "The page always shows both terms for the same loan amount and rate. A lender quote can still differ.",
      },
    ],
    examples: [
      {
        title: "$300,000 with $60,000 down at 6% for 30 years",
        body: "The loan is $240,000. With tax, insurance, HOA, and PMI blank, the payment and the housing payment are both $1,438.92. Interest over 360 months is $278,011.65.",
      },
      {
        title: "The 15-year comparison",
        body: "The same loan is $2,025.26 a month, with $124,546.15 in interest and $364,546.15 in total payments. The 30-year total payments are $518,011.65.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Down payment is not financed",
        body: "The payment is calculated on price minus down payment. Including the down payment in the loan double-counts it.",
      },
      {
        heading: "Blank costs are zero",
        body: "A real house payment often adds tax and insurance. This example leaves them blank on purpose so the principal-and-interest figure is easy to see.",
      },
    ],
    faqs: [
      {
        question: "What is the payment on $240,000 at 6% for 30 years?",
        answer:
          "$1,438.92 a month. That is the loan left by a $300,000 price and a $60,000 down payment, with the optional housing costs blank. Interest is $278,011.65 over 360 months.",
      },
      {
        question: "What does the 15-year term cost on that loan?",
        answer:
          "$2,025.26 a month and $124,546.15 in interest. Total payments are $364,546.15, compared with $518,011.65 over 30 years.",
      },
      {
        question: "Are taxes included in the $1,438.92?",
        answer:
          "No. Tax and insurance are yearly fields divided by 12. HOA and PMI are monthly. Blank fields stay at 0, so the housing payment matches the loan payment.",
      },
      {
        question: "Does the page look up PMI or a lender rate?",
        answer:
          "No. You type the rate and any PMI you were quoted. The result is this formula’s estimate.",
      },
      {
        question: "How long can the term be?",
        answer:
          "A whole number from 1 to 50 years. The 15-year and 30-year comparison is shown alongside the term you choose.",
      },
    ],
    cta: {
      before: "To estimate principal, interest, and optional housing costs, use the",
      linkLabel: "Mortgage Calculator",
      href: "/tools/mortgage-calculator",
      after: ". It compares 15-year and 30-year terms on the loan amount.",
    },
    alsoSee: [
      {
        before: "The installment formula is the same one in",
        linkLabel: "How a loan payment is calculated",
        href: "/guides/how-a-loan-payment-is-calculated",
        after: ".",
      },
      {
        before: "A price estimate for a home is a different question. See",
        linkLabel: "How a home price estimate works",
        href: "/guides/how-a-home-price-estimate-works",
        after: ".",
      },
    ],
  },
};
