import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-04T12:00:00Z";

const percentageChange: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-percentage-change",
    title: "How to Calculate Percentage Change (Increase and Decrease)",
    primaryKeyword: "percentage change formula",
    secondaryKeywords: [
      "how to calculate percentage change",
      "percent increase",
      "percent decrease",
      "percentage difference vs percentage change",
      "percentage points",
    ],
    toolSlug: "percentage-change-calculator",
    siblingToolSlugs: ["percentage-calculator", "discount-calculator", "average-calculator"],
    metaTitle: "How to Calculate Percentage Change: Formula, Examples and Traps",
    metaDescription:
      "Percentage change is (new − old) ÷ old × 100. Worked increase and decrease examples, percentage points, reversals, and the zero-start problem explained.",
    excerpt:
      "Percentage change is the difference between a new and an original value, divided by the original, times 100. Here is how to use it for rises, drops, and comparisons without the usual mistakes.",
    relatedArticles: ["how-to-calculate-percentage", "how-to-calculate-a-discount", "how-to-find-the-mean-median-and-mode"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: percentage change = (new value − original value) ÷ original value × 100. A positive result is an increase and a negative result is a decrease. Going from 80 to 100 is (100 − 80) ÷ 80 × 100 = 25%. Going from 100 back to 80 is (80 − 100) ÷ 100 × 100 = −20%. The original value is always the one you divide by.",
    why:
      "Percentage change turns two raw numbers into one comparable figure. A shop that grew from 40 to 50 orders and one that grew from 4,000 to 4,100 both gained something, but only the percentage tells you that the first one grew by 25% and the second by 2.5%.",
    sections: [
      {
        id: "what-is-percentage-change",
        heading: "What is percentage change?",
        paragraphs: [
          "Percentage change describes how far a value moved, measured as a share of where it started. It answers the question “by what percent did this go up or down?” The starting point is called the original, old, or base value. The later reading is the new value.",
          "Because the result is scaled to the starting value, it lets you compare movements of very different sizes. A rent that rose from 1,000 to 1,050 and a bus fare that rose from 2.00 to 2.10 both increased by 5%, even though one rose by 50 and the other by 0.10.",
          "The sign carries meaning. A positive percentage change is an increase, a negative one is a decrease, and zero means the value did not move.",
        ],
      },
      {
        id: "formula",
        heading: "What is the formula for percent increase and percent decrease?",
        paragraphs: [
          "There is only one formula, and it handles both directions: (new − original) ÷ original × 100. When the new value is larger, the top of the fraction is positive and you get a percent increase. When the new value is smaller, the top is negative and you get a percent decrease.",
          "Some textbooks split it into two formulas. Percent increase is (new − original) ÷ original × 100, and percent decrease is (original − new) ÷ original × 100. The second version simply flips the subtraction so the answer comes out positive. Both describe the same movement, so pick whichever wording your class or report uses and stay consistent.",
        ],
        table: {
          caption: "The same formula applied to rises, drops and no change",
          headers: ["Original", "New", "Working", "Percentage change"],
          rows: [
            ["80", "100", "(100 − 80) ÷ 80 × 100", "25% increase"],
            ["100", "80", "(80 − 100) ÷ 100 × 100", "20% decrease"],
            ["250", "250", "(250 − 250) ÷ 250 × 100", "0%, unchanged"],
            ["40", "90", "(90 − 40) ÷ 40 × 100", "125% increase"],
            ["12.5", "10", "(10 − 12.5) ÷ 12.5 × 100", "20% decrease"],
          ],
        },
        after:
          "Notice the 40 to 90 row. A percentage increase can be larger than 100%, because the new value can be more than double the original. A percentage decrease of a positive quantity, on the other hand, stops at 100%, which means the value fell all the way to zero.",
      },
      {
        id: "why-not-symmetric",
        heading: "Why does a rise and an equal fall not cancel out?",
        paragraphs: [
          "The base changes between the two moves. A 25% rise from 80 lands on 100. A 25% fall from 100 lands on 75, not 80, because 25% of 100 is bigger than 25% of 80. To get from 100 back to 80 you need a 20% drop.",
          "This is why a price that is cut by 50% and later raised by 50% ends up at 75% of where it began. If an investment loses 10% one year and gains 10% the next, it finishes slightly below its starting value. Whenever you chain two percentage changes, multiply the growth factors instead of adding the percentages. A 10% rise is a factor of 1.10, a 10% fall is a factor of 0.90, and 1.10 × 0.90 = 0.99, which is a 1% net fall.",
        ],
      },
      {
        id: "points-vs-percent",
        heading: "What is the difference between percentage points and percentage change?",
        paragraphs: [
          "When the values you are comparing are already percentages, there are two honest ways to describe the move, and they give different numbers. If a pass rate goes from 40% to 50%, it rose by 10 percentage points. Measured as a percentage change, it rose by (50 − 40) ÷ 40 × 100 = 25%.",
          "Both statements are true, but they answer different questions. Percentage points describe the plain gap between two rates. Percentage change describes how big that gap is relative to the starting rate. News reports about interest rates, polls and exam results use percentage points for exactly this reason, because “a 25% rise in the pass rate” can sound like something larger than it is.",
          "The calculator works with whatever numbers you type. Enter 40 and 50 and it reports a 25% increase. If you want the points figure, read the Difference line instead, which shows 10.",
        ],
      },
      {
        id: "difference-vs-change",
        heading: "Is percentage difference the same as percentage change?",
        paragraphs: [
          "Not quite. Percentage change has a direction: there is a before and an after, and you divide by the before. Percentage difference is used when neither value is the starting point, such as comparing the heights of two buildings or the prices at two shops on the same day.",
          "A common definition of percentage difference divides the absolute gap by the average of the two values. For 80 and 100, the gap is 20 and the average is 90, so the percentage difference is about 22.2%. That sits between the 25% and 20% you get from the two possible percentage changes. This calculator computes percentage change only, so use it when one value clearly came first.",
        ],
      },
      {
        id: "zero-and-negatives",
        heading: "What happens when the original value is zero or negative?",
        paragraphs: [
          "Dividing by zero has no answer, so a change from 0 to any other number cannot be expressed as a percentage. Going from 0 sales to 15 sales is a gain of 15, not an infinite percent. The calculator rejects that case with a message, and it reports 0% when both values are 0. In a report, give the raw difference for anything that started at zero.",
          "Negative starting values cause a different problem. The formula still divides by the original, so the sign of the result can contradict the direction of the move. A loss that shrinks from −50 to −25 improved by 25, yet the formula divides 25 by −50 and gives −50%. If you work with profits and losses, temperatures below zero, or account balances that can go negative, read the Difference line for the direction and explain the percentage separately, or measure against the absolute value of the original if your field accepts that convention.",
        ],
      },
    ],
    stepsHeading: "How to calculate percentage change with the calculator",
    steps: [
      {
        title: "Type the original value",
        body: "Enter the earlier, starting, or reference figure in the Original value box. Use plain digits and a decimal point, such as 1250 or 12.5. Commas and currency signs are not accepted, so 1,250 or $12.50 will show an error.",
      },
      {
        title: "Type the new value",
        body: "Enter the later reading in the New value box. It can be bigger, smaller, or the same as the original.",
      },
      {
        title: "Press Calculate",
        body: "The large line shows the size of the move and its direction, such as “25% increase”. The line below gives the signed change, such as −20%, and the plain difference between the two values.",
      },
      {
        title: "Copy or reset",
        body: "Use the copy button to copy the signed percentage for a spreadsheet or message. Reset clears both boxes so you can start another comparison. Nothing you type is sent anywhere, because the arithmetic runs in your browser.",
      },
    ],
    examples: [
      {
        title: "A monthly bill that went up",
        body: "An electricity bill was 64 last month and 72 this month. (72 − 64) ÷ 64 × 100 = 12.5%. Typing 64 and 72 into the calculator shows a 12.5% increase with a difference of 8.",
      },
      {
        title: "A running time that went down",
        body: "Your 5 km time fell from 30 minutes to 27 minutes. Convert both to the same unit first, then calculate: (27 − 30) ÷ 30 × 100 = −10%. A 10% decrease in time is an improvement here, which is a reminder that the sign tells you direction, not whether the change was good.",
      },
      {
        title: "Two changes in a row",
        body: "A product cost 50, rose 20% to 60, then fell 20% to 48. Comparing the first and last values directly, (48 − 50) ÷ 50 × 100 = −4%. Run 50 and 48 through the calculator to confirm the net change rather than adding +20 and −20.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Keep the units the same",
        body: "Both numbers need the same unit before you compare them. Mixing grams with kilograms, or minutes with hours, produces a percentage that means nothing. Convert first with a unit converter if needed.",
      },
      {
        heading: "Rounding is applied to the display",
        body: "The result is shown with up to six decimal places and then trimmed, so 1 to 3 reads as a 200% increase and 3 to 7 reads as about 133.333333%. Round to the precision your audience needs before you publish it.",
      },
      {
        heading: "It compares two values at a time",
        body: "The tool does not average several periods or work out an annual growth rate. For a series of yearly figures, compare the first and last year for the total change, and remember that dividing that total by the number of years is not the same as a compound annual rate.",
      },
    ],
    faqs: [
      {
        question: "Which number do I divide by when I work out a percentage change?",
        answer: "Divide by the original, earlier, or reference value. If you divide by the new value instead, you get a different answer, such as 20% instead of 25% for a move from 80 to 100.",
      },
      {
        question: "Can a percentage increase be more than 100%?",
        answer: "Yes. Any new value more than double the original gives an increase above 100%. Going from 20 to 70 is a 250% increase.",
      },
      {
        question: "Can a percentage decrease be more than 100%?",
        answer: "For a positive quantity that stays at zero or above, no. A 100% decrease means the value fell to zero. A larger figure only appears when the new value is negative, such as a balance going from 100 to −20.",
      },
      {
        question: "How do I find the original value if I know the new value and the percent change?",
        answer: "Divide the new value by the growth factor. After a 25% rise to 100, the original was 100 ÷ 1.25 = 80. After a 20% fall to 80, the original was 80 ÷ 0.80 = 100.",
      },
      {
        question: "How do I add a percentage increase to a number?",
        answer: "Multiply by one plus the rate. A 15% increase on 200 is 200 × 1.15 = 230. The Percentage Calculator can also find 15% of 200 for you, which you then add on.",
      },
      {
        question: "Is a change from 2% to 3% a 1% increase or a 50% increase?",
        answer: "It is a rise of 1 percentage point and a 50% relative increase. Both are correct, so name the one you mean.",
      },
      {
        question: "How do I calculate percentage change in Excel or Google Sheets?",
        answer: "With the original in A2 and the new value in B2, use =(B2-A2)/A2 and format the cell as a percentage. That is the same formula the calculator uses.",
      },
      {
        question: "Why does my percentage change look wrong for negative numbers?",
        answer: "The formula divides by the original, so a negative original flips the sign. A loss shrinking from −50 to −25 shows −50% even though the value rose. Use the Difference line for direction in that case.",
      },
      {
        question: "How do I compare growth over several years?",
        answer: "For the total change, compare the first and last values. Year-by-year changes do not add together, because each year starts from a new base.",
      },
      {
        question: "Does the calculator round the result?",
        answer: "It shows up to six decimal places and drops trailing zeros. The Copy button copies the signed figure as displayed, such as 12.5% or -20%.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Compare any two numbers with the free",
      linkLabel: "Percentage Change Calculator",
      href: "/tools/percentage-change-calculator",
      after: ". It shows the direction, the signed percent and the difference, and runs in your browser.",
    },
    alsoSee: [
      {
        before: "For “what is X% of Y” and “X is what percent of Y”, use the",
        linkLabel: "Percentage Calculator",
        href: "/tools/percentage-calculator",
        after: ", or read the guide on how to calculate percentage.",
      },
      {
        before: "For a price after a percent off, the",
        linkLabel: "Discount Calculator",
        href: "/tools/discount-calculator",
        after: " shows the saving and the final price.",
      },
    ],
  },
};

const discount: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-a-discount",
    title: "How to Calculate a Discount and the Sale Price",
    primaryKeyword: "how to calculate a discount",
    secondaryKeywords: [
      "sale price calculator",
      "percent off",
      "discount formula",
      "stacked discounts",
      "how much do I save",
    ],
    toolSlug: "discount-calculator",
    siblingToolSlugs: ["percentage-calculator", "percentage-change-calculator", "sales-tax-calculator"],
    metaTitle: "How to Calculate a Discount: Percent Off, Sale Price and Savings",
    metaDescription:
      "Work out a discount in two steps: price × percent ÷ 100 is the saving, and price minus saving is what you pay. Stacked deals, tax and reverse discounts.",
    excerpt:
      "A discount is the price times the percent off, divided by 100. Subtract it to get the sale price. This guide covers stacked offers, tax, finding the original price, and checking a deal.",
    relatedArticles: ["how-to-calculate-percentage-change", "how-to-calculate-percentage", "how-to-add-sales-tax"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: multiply the original price by the discount percentage and divide by 100 to get the amount you save. Subtract that saving from the original price to get the sale price. For 25% off 80, the saving is 80 × 25 ÷ 100 = 20, and you pay 80 − 20 = 60. A shortcut is to multiply by what remains: 80 × 0.75 = 60.",
    why:
      "Shop signs, coupon codes and checkout banners all express savings as a percent, but your budget works in money. Turning “30% off” into an actual amount tells you whether the deal is worth it, lets you compare offers that are written differently, and catches the occasional mistake at the till.",
    sections: [
      {
        id: "what-is-a-discount",
        heading: "What does a percentage discount mean?",
        paragraphs: [
          "A percentage discount is a reduction measured against the original, list, or regular price. “20% off” means you pay 20 out of every 100 less than the starting price. The money taken off is the discount amount, and what is left is the sale price or final price.",
          "Two figures matter, and they are easy to mix up. The discount rate is the percent, such as 20%. The discount amount is the money, such as 15 off a 75 item. The calculator shows both: the large figure is the final price and the line underneath is the discount amount.",
        ],
      },
      {
        id: "formula",
        heading: "What is the discount formula?",
        paragraphs: [
          "Discount amount = original price × discount rate ÷ 100. Sale price = original price − discount amount. If you prefer one step, sale price = original price × (100 − discount rate) ÷ 100.",
          "The one-step version is handy for mental arithmetic. For 15% off, you pay 85%, so multiply by 0.85. For 40% off, you pay 60%, so multiply by 0.6. For 10% off, move the decimal point one place to the left to find the saving, then subtract it.",
        ],
        table: {
          caption: "Common discounts on a price of 120",
          headers: ["Discount", "You pay", "Saving", "Final price"],
          rows: [
            ["10% off", "90% of the price", "12", "108"],
            ["15% off", "85% of the price", "18", "102"],
            ["20% off", "80% of the price", "24", "96"],
            ["25% off", "75% of the price", "30", "90"],
            ["33% off", "67% of the price", "39.60", "80.40"],
            ["50% off", "50% of the price", "60", "60"],
            ["70% off", "30% of the price", "84", "36"],
          ],
        },
      },
      {
        id: "stacked",
        heading: "How do stacked discounts work?",
        paragraphs: [
          "When a shop offers “an extra 10% off sale prices”, the second discount usually applies to the already reduced price, not to the original. Twenty percent off and then ten percent off is not thirty percent off. On a 100 item, the first cut leaves 80, and 10% of 80 is 8, so you pay 72. That is a combined saving of 28%.",
          "To check a stacked offer, multiply the remaining shares together. Paying 80% and then 90% means paying 0.8 × 0.9 = 0.72 of the price. The order does not matter for two percentage cuts, but it does matter when one of the discounts is a fixed amount. Taking 10 off before a 20% discount on a 100 item leaves 72, while taking 20% off first and then 10 leaves 70.",
          "With the calculator, run the first discount, copy the final price, paste it back in as the new original price, and apply the second discount. Read the store’s terms, because some shops apply each code to the original price instead.",
        ],
      },
      {
        id: "tax",
        heading: "Should the discount come before or after sales tax?",
        paragraphs: [
          "For a straight percentage discount and a percentage tax, the final number is the same either way, because multiplication can happen in any order. 100 with 20% off and then 8% tax is 100 × 0.8 × 1.08 = 86.40, and adding tax first gives the same total.",
          "What changes is how much tax you pay, and whether a coupon is applied before or after tax in the store’s system. Tax rules vary by place, so this guide does not say which order a given shop must use. To see the tax on a discounted price, run the discount here and then use the Sales Tax Calculator on the final price.",
        ],
      },
      {
        id: "reverse",
        heading: "How do I find the original price from a sale price?",
        paragraphs: [
          "Divide the sale price by the share you paid. If a jacket costs 63 after 30% off, you paid 70% of the original, so the original was 63 ÷ 0.7 = 90. Checking it the other way, 30% of 90 is 27, and 90 − 27 = 63.",
          "If you know both prices and want the discount rate, use the percentage change formula: (sale − original) ÷ original × 100. From 90 to 63 is −30%, which is a 30% discount. The Percentage Change Calculator does that step for you.",
        ],
      },
      {
        id: "compare-offers",
        heading: "How do I compare different kinds of deals?",
        paragraphs: [
          "Convert every offer into the price you would pay for the same quantity. “Buy one, get one half price” on two 40 items costs 40 + 20 = 60 for two, which is the same as 25% off both. “Three for the price of two” is the same as paying two-thirds, or about 33% off each item, but only if you wanted three.",
          "A fixed-amount coupon, such as 15 off orders over 100, is worth 15% on a 100 basket and 10% on a 150 basket. When you compare it with a percentage offer, work out both final prices on the basket you actually plan to buy.",
        ],
      },
    ],
    stepsHeading: "How to use the Discount Calculator",
    steps: [
      {
        title: "Enter the original price",
        body: "Type the price before any reduction, using digits and a decimal point only. A currency symbol, a comma, or a negative number is rejected with a message.",
      },
      {
        title: "Enter the discount percentage",
        body: "Type the percent off, from 0 to 100. Decimal rates such as 12.5 work. Anything above 100 is refused, because the price cannot fall below zero.",
      },
      {
        title: "Press Calculate",
        body: "The large figure is the final price, rounded to two decimal places for display. The line underneath shows the discount amount.",
      },
      {
        title: "Copy the final price or reset",
        body: "The copy button copies the final price as shown. Reset clears both fields. The calculation runs in your browser and nothing is stored.",
      },
    ],
    examples: [
      {
        title: "A 35% off sweater",
        body: "Original price 48, discount 35%. The saving is 48 × 35 ÷ 100 = 16.80 and the final price is 31.20. The calculator shows 31.2 as the main figure and 16.8 as the discount amount.",
      },
      {
        title: "Checking a stacked online sale",
        body: "A 250 item is 40% off, with an extra 15% at checkout. First pass: 250 at 40% gives 150. Second pass: 150 at 15% gives 127.50. The total saving is 122.50, or 49% of the original price, not 55%.",
      },
      {
        title: "Splitting the bill after a group discount",
        body: "A dinner for four costs 180 before a 10% loyalty discount. The final price is 162, which is 40.50 each. Divide the final price, not the original, before you add a tip.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Rounding",
        body: "Results are displayed to two decimal places. A shop may round each line item or round only the total, so a receipt can differ from your own figure by a cent or two.",
      },
      {
        heading: "One discount at a time",
        body: "The calculator applies a single percentage. For stacked offers, run it again on the reduced price, as shown above.",
      },
      {
        heading: "Fixed-amount coupons",
        body: "A coupon worth a set amount is plain subtraction, so you do not need the percentage tool for it. To see what percent it represents, divide the coupon by the price and multiply by 100.",
      },
      {
        heading: "Look at the price you started from",
        body: "A large percentage only helps if the original price was a real price. Comparing the final price with other shops tells you more than the size of the percent off.",
      },
    ],
    faqs: [
      {
        question: "How do I work out 20% off in my head?",
        answer: "Find 10% by moving the decimal point one place left, double it, and subtract. For 65, 10% is 6.50, 20% is 13, and the sale price is 52.",
      },
      {
        question: "What is the difference between the discount rate and the discount amount?",
        answer: "The rate is the percent, such as 25%. The amount is the money taken off, such as 20 on an 80 item. The calculator shows the amount under the final price.",
      },
      {
        question: "Is 20% off and then another 20% off the same as 40% off?",
        answer: "No. Paying 80% twice is 0.8 × 0.8 = 0.64 of the price, which is a 36% total discount.",
      },
      {
        question: "How do I find what percent off I got?",
        answer: "Divide the saving by the original price and multiply by 100. A 90 item sold for 72 saved 18, and 18 ÷ 90 × 100 = 20%.",
      },
      {
        question: "How do I find the price before the discount?",
        answer: "Divide the sale price by the share you paid. A 51 price after 15% off came from 51 ÷ 0.85 = 60.",
      },
      {
        question: "Can I enter a discount with decimals, like 12.5%?",
        answer: "Yes. Any rate from 0 to 100 with a decimal point is accepted.",
      },
      {
        question: "Does the calculator include sales tax or VAT?",
        answer: "No. It only applies the discount. Use the Sales Tax Calculator on the final price if you need tax added.",
      },
      {
        question: "Is buy one, get one free the same as 50% off?",
        answer: "Only if you wanted two. You pay for one and receive two, so each item costs half, but you still spend the full price of one item.",
      },
      {
        question: "Why does my receipt differ by a cent from the calculator?",
        answer: "Stores may round each item separately before totaling. The calculator rounds the single result to two decimal places.",
      },
      {
        question: "What does 0% discount return?",
        answer: "The final price equals the original price and the discount amount is 0. That can be a quick way to check you typed the price correctly.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Work out any sale price with the free",
      linkLabel: "Discount Calculator",
      href: "/tools/discount-calculator",
      after: ". It shows the final price and the amount you save.",
    },
    alsoSee: [
      {
        before: "To see the rate between two prices, use the",
        linkLabel: "Percentage Change Calculator",
        href: "/tools/percentage-change-calculator",
        after: ".",
      },
      {
        before: "To add tax to a reduced price, try the",
        linkLabel: "Sales Tax Calculator",
        href: "/tools/sales-tax-calculator",
        after: ".",
      },
    ],
  },
};

const caseConverter: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-change-text-case",
    title: "How to Change Text Case: Upper, Lower, Title, camelCase and More",
    primaryKeyword: "change text case",
    secondaryKeywords: [
      "convert to uppercase",
      "convert to lowercase",
      "title case converter",
      "sentence case",
      "camelCase snake_case kebab-case",
      "PascalCase",
    ],
    toolSlug: "case-converter",
    siblingToolSlugs: ["slug-generator", "word-counter", "find-and-replace"],
    metaTitle: "How to Change Text Case: Uppercase, Title Case, camelCase Guide",
    metaDescription:
      "Change text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case or kebab-case, with examples and the edge cases to check.",
    excerpt:
      "Paste text, pick a case, and copy the result. This guide explains each of the eight cases, when writers and developers use them, and where automatic conversion needs a human check.",
    relatedArticles: ["how-to-write-a-url-slug", "how-to-find-and-replace-text", "how-to-count-characters"],
    category: "text-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to change text case, paste the text into the Case Converter, choose one of the eight modes, and copy the result. UPPERCASE and lowercase change every letter. Title Case capitalizes the first letter of every word. Sentence case capitalizes the first letter after each full stop, question mark or exclamation mark. camelCase, PascalCase, snake_case and kebab-case join the words for code, file names and URLs.",
    why:
      "Retyping a heading that was written in capitals, or a column of names exported in lowercase, is slow and error-prone. Converting case automatically keeps the spelling exactly as it was and only changes the letters’ case, or, for the programming styles, the separators between words. It is useful for writers fixing headlines, for students formatting references, and for developers naming variables and files.",
    sections: [
      {
        id: "what-is-letter-case",
        heading: "What is letter case and why does it matter?",
        paragraphs: [
          "Letter case is the difference between capital letters, called uppercase, and small letters, called lowercase. English and many other languages written in Latin, Greek or Cyrillic scripts have both. Scripts such as Arabic, Urdu, Chinese and Hindi have no case, so a case converter leaves those characters as they are.",
          "Case carries meaning. A capital marks the start of a sentence or a proper noun. Text written entirely in capitals reads as shouting in messages and is harder to read in long passages. In programming, case is part of the name itself: userName and username can be two different variables.",
        ],
      },
      {
        id: "modes",
        heading: "What does each case style look like?",
        paragraphs: [
          "The tool offers eight modes. The table shows what each one does to the same input, “the quick brown fox jumps. over the lazy dog”.",
        ],
        table: {
          caption: "The eight conversion modes applied to one sentence",
          headers: ["Mode", "Result", "Typical use"],
          rows: [
            ["UPPERCASE", "THE QUICK BROWN FOX JUMPS. OVER THE LAZY DOG", "Short labels, acronyms, warnings"],
            ["lowercase", "the quick brown fox jumps. over the lazy dog", "Normalizing data, tags, emails"],
            ["Title Case", "The Quick Brown Fox Jumps. Over The Lazy Dog", "Headings that capitalize every word"],
            ["Sentence case", "The quick brown fox jumps. Over the lazy dog", "Body text, captions, UI labels"],
            ["camelCase", "theQuickBrownFoxJumpsOverTheLazyDog", "JavaScript and Java variables"],
            ["PascalCase", "TheQuickBrownFoxJumpsOverTheLazyDog", "Class and component names"],
            ["snake_case", "the_quick_brown_fox_jumps_over_the_lazy_dog", "Python names, database columns"],
            ["kebab-case", "the-quick-brown-fox-jumps-over-the-lazy-dog", "CSS classes, file names, URLs"],
          ],
        },
        after:
          "The four programming styles drop punctuation and spaces, keep letters and digits, and remove accent marks, so “Café menu” becomes cafeMenu or cafe_menu. The four writing styles keep punctuation, spacing and line breaks exactly as you pasted them.",
      },
      {
        id: "title-vs-headline",
        heading: "Does Title Case follow AP, APA or Chicago style?",
        paragraphs: [
          "No. The tool’s Title Case capitalizes the first letter of every word, including short words such as a, of, the and in. Style guides differ on those small words. Many keep articles, short prepositions and coordinating conjunctions in lowercase unless they start the title, and the exact list differs between guides.",
          "Treat the converter’s Title Case as a fast first pass. Convert, then lowercase the small words your style guide requires. “A Guide To The Best Of The Lake District” usually becomes “A Guide to the Best of the Lake District” after that edit.",
          "Title Case also lowercases the rest of each word before capitalizing the first letter. That means brand names with internal capitals, such as iPhone or YouTube, come out as Iphone and Youtube, and acronyms such as NASA become Nasa. Fix those by hand afterwards.",
        ],
      },
      {
        id: "sentence-case-limits",
        heading: "What does Sentence case change, and what does it miss?",
        paragraphs: [
          "Sentence case first lowercases everything, then capitalizes the first letter of the text and the first letter after a full stop, question mark, exclamation mark or ellipsis followed by a space. That is enough to rescue a paragraph typed with Caps Lock on.",
          "It cannot know which words are names. London, Monday, Ali and English all become lowercase unless they start a sentence, and the pronoun I becomes i. Abbreviations with full stops, such as “Dr. smith” or “e.g. this”, can also trigger an unwanted capital on the next word. Read the result once and restore proper nouns.",
        ],
      },
      {
        id: "developer-cases",
        heading: "When should I use camelCase, PascalCase, snake_case or kebab-case?",
        paragraphs: [
          "Follow the convention of the language or project you are working in. JavaScript and Java commonly use camelCase for variables and functions and PascalCase for classes and React components. Python’s style guide uses snake_case for functions and variables. CSS class names, HTML attributes and many URL paths use kebab-case, because hyphens are easy to read and are not treated as minus signs there.",
          "The converter splits words on anything that is not a letter or a digit. Spaces, hyphens, underscores, dots and slashes all count as boundaries. It does not split an existing camelCase word, so “userName” stays one word and becomes username in snake_case, not user_name. If you are converting between programming styles, start from words separated by spaces.",
        ],
      },
      {
        id: "other-apps",
        heading: "How do I change case in Word, Google Docs or Excel?",
        paragraphs: [
          "Most editors have a built-in option. In Microsoft Word on Windows, select text and press Shift+F3 to cycle through lowercase, UPPERCASE and capitalized words. Google Docs has Format, Text, Capitalization. Spreadsheets use functions: UPPER, LOWER and PROPER in both Excel and Google Sheets, where PROPER capitalizes each word like Title Case here.",
          "An online converter is useful when the text is not in one of those programs, such as a code editor, a CMS field, a chat message or a CSV value, or when you need the developer styles. None of the office apps above produce camelCase or kebab-case directly.",
        ],
      },
    ],
    stepsHeading: "How to convert text case online",
    steps: [
      {
        title: "Paste or type your text",
        body: "Put the text in the Text box. Line breaks and paragraph spacing are kept for the four writing styles. The character and word counts update as you type.",
      },
      {
        title: "Choose a case",
        body: "Select UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case or kebab-case. The result box updates straight away and its label shows the mode you picked.",
      },
      {
        title: "Check names and small words",
        body: "For Title Case and Sentence case, scan for proper nouns, acronyms and brand names that need restoring, and for the small words your style guide keeps lowercase.",
      },
      {
        title: "Copy the result",
        body: "Use the Copy button and paste the text where you need it. The original stays in the input box, so you can switch modes and copy again.",
      },
    ],
    examples: [
      {
        title: "Fixing a heading typed in capitals",
        body: "Input: HOW TO PLAN A WEEKEND IN LAHORE. Sentence case gives “How to plan a weekend in lahore”. Change lahore to Lahore and the heading is ready.",
      },
      {
        title: "Turning a label into a variable name",
        body: "Input: total order value. camelCase gives totalOrderValue, PascalCase gives TotalOrderValue, snake_case gives total_order_value, and kebab-case gives total-order-value.",
      },
      {
        title: "Cleaning a list of tags",
        body: "A list of tags such as Travel, TRAVEL and travel can be lowercased in one pass, then deduplicated with the Duplicate Line Remover so only one travel is left.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Locale rules",
        body: "Case changes use general English rules. Languages with special case pairs, such as Turkish dotted and dotless i, may need a manual check.",
      },
      {
        heading: "Accents in code styles",
        body: "The programming modes strip accent marks, which is usually what you want for identifiers. The writing modes keep them, so résumé stays résumé in lowercase.",
      },
      {
        heading: "Text stays on your device",
        body: "Conversion happens in your browser as you type. Nothing is uploaded or saved, so close the tab when you are done with private text.",
      },
    ],
    faqs: [
      {
        question: "How do I change text from all caps to normal?",
        answer: "Paste the text and choose Sentence case. It lowercases everything and capitalizes the start of each sentence. Restore any names afterwards.",
      },
      {
        question: "Why did my brand name lose its capital letters in Title Case?",
        answer: "Title Case lowercases each word before capitalizing the first letter, so iPhone becomes Iphone and NASA becomes Nasa. Edit those words by hand.",
      },
      {
        question: "Does the converter keep my line breaks?",
        answer: "Yes for UPPERCASE, lowercase, Title Case and Sentence case. The programming styles join all words into one identifier, so line breaks are removed.",
      },
      {
        question: "Can it turn camelCase into snake_case?",
        answer: "Only if the words are separated first. An existing camelCase word is treated as one word, so add spaces between the parts before converting.",
      },
      {
        question: "What happens to numbers and punctuation?",
        answer: "Digits are kept in every mode. Punctuation is kept in the writing styles and removed in the programming styles, where it becomes a word boundary.",
      },
      {
        question: "Is kebab-case good for URLs?",
        answer: "It is the common style for readable URL paths. For a full permalink with accents removed and edges trimmed, the Slug Generator is built for that job.",
      },
      {
        question: "Does Sentence case capitalize the word I?",
        answer: "No. It only capitalizes the first letter of each sentence, so a standalone i in the middle of a sentence stays lowercase.",
      },
      {
        question: "Can I convert text in languages other than English?",
        answer: "Letters in scripts that have case, such as Greek or Cyrillic, are converted. Scripts without case, such as Arabic or Chinese, pass through unchanged.",
      },
      {
        question: "Is there a limit on how much text I can convert?",
        answer: "There is no set limit in the tool, but very long documents depend on your browser’s memory and may feel slower to update.",
      },
      {
        question: "What is the difference between camelCase and PascalCase?",
        answer: "Both join words with capitals. camelCase starts with a lowercase letter, as in orderTotal, and PascalCase starts with a capital, as in OrderTotal.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Switch between all eight styles with the free",
      linkLabel: "Case Converter",
      href: "/tools/case-converter",
      after: ". It runs in your browser and keeps your original text in place.",
    },
    alsoSee: [
      {
        before: "To turn a title into a clean URL path, use the",
        linkLabel: "Slug Generator",
        href: "/tools/slug-generator",
        after: ".",
      },
      {
        before: "To swap a word everywhere in a document, try",
        linkLabel: "Find and Replace",
        href: "/tools/find-and-replace",
        after: ".",
      },
    ],
  },
};

const slugGenerator: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-write-a-url-slug",
    title: "How to Write a URL Slug That People and Search Engines Can Read",
    primaryKeyword: "url slug",
    secondaryKeywords: [
      "seo friendly url",
      "permalink",
      "slug generator",
      "how to create a slug",
      "hyphens vs underscores in urls",
    ],
    toolSlug: "slug-generator",
    siblingToolSlugs: ["case-converter", "url-encoder", "meta-tag-generator"],
    metaTitle: "How to Write a URL Slug: SEO-Friendly Permalinks with Examples",
    metaDescription:
      "What a URL slug is, how to turn a title into a short hyphenated permalink, and what to do about accents, stop words, dates, duplicates and changing old URLs.",
    excerpt:
      "A slug is the readable last part of a URL. This guide shows how to turn a title into a short, lowercase, hyphenated slug, and which choices you still have to make yourself.",
    relatedArticles: ["how-to-change-text-case", "how-to-read-a-url", "how-to-write-meta-tags"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a URL slug is the part of a web address that names one page, such as how-to-write-a-url-slug in /guides/how-to-write-a-url-slug. To write one, take the page title, lowercase it, replace spaces and punctuation with single hyphens, remove accent marks, and trim it to the words that describe the page. The Slug Generator does the mechanical part instantly. Choosing which words to keep is still your job.",
    why:
      "A slug is seen in search results, in shared links and in the browser’s address bar. A short, descriptive slug tells a reader what they will get before they click, and it is easier to remember, type and share than a string of IDs. Once a page is published, its slug is also hard to change without breaking links, so getting it right the first time saves work later.",
    sections: [
      {
        id: "what-is-a-slug",
        heading: "What is a URL slug?",
        paragraphs: [
          "In a URL such as https://www.example.com/blog/best-hiking-boots, the domain is www.example.com, the folder is /blog/, and the slug is best-hiking-boots. Content systems such as WordPress call it the permalink or post slug. Shops use it for product and category pages.",
          "The word comes from newspaper publishing, where a slug was a short working name for a story. On the web the idea is the same: a short label that identifies one page among many.",
        ],
      },
      {
        id: "what-makes-a-good-slug",
        heading: "How do I write a good slug?",
        paragraphs: [
          "Use the words a reader would expect. A slug that matches the main topic of the page, such as chicken-biryani-recipe, is clearer than recipe-1043 or my-favourite-thing-to-cook-on-sundays.",
          "Keep it short. Three to six meaningful words is a common range, though there is no fixed rule. Drop filler that adds nothing, such as “the ultimate”, “a complete”, or the current year if the page will be updated later.",
          "Use lowercase letters, digits and hyphens. Most servers treat uppercase and lowercase paths as different addresses, so lowercase avoids duplicates. Hyphens are the usual word separator in URLs. Underscores join words visually but are less common in paths.",
          "Avoid changing it later. If you rename a published slug, set up a permanent redirect from the old address to the new one, or old links and bookmarks will hit a not-found page.",
        ],
      },
      {
        id: "how-the-generator-works",
        heading: "How does the Slug Generator turn a title into a slug?",
        paragraphs: [
          "The tool follows a short, predictable set of rules. It removes accent marks from Latin letters, so é becomes e and ü becomes u. It lowercases the text. It replaces every run of characters that are not letters or digits, including spaces, punctuation, emoji and symbols, with one hyphen. Finally it removes hyphens from the start and end.",
          "Letters from other scripts are kept. A title in Chinese, Arabic or Russian keeps those characters, joined with hyphens. Browsers display them normally, and they are percent-encoded when sent over the network. If your platform needs plain ASCII slugs, you will need to transliterate those words yourself.",
        ],
        table: {
          caption: "Titles and the slugs the generator produces",
          headers: ["Title", "Generated slug", "Note"],
          rows: [
            ["How to Brew Cold Coffee", "how-to-brew-cold-coffee", "Spaces become hyphens"],
            ["Café & Bakery Menu (2026)", "cafe-bakery-menu-2026", "Accent removed, symbols dropped"],
            ["10 Tips -- For  Beginners!!", "10-tips-for-beginners", "Repeated separators collapse"],
            ["Crème brûlée recipe", "creme-brulee-recipe", "Latin accents removed"],
            ["你好 world", "你好-world", "Chinese letters are kept"],
          ],
        },
        after:
          "The tool does not shorten the slug, remove stop words, or check whether the slug is already used on your site. Those are judgment calls that depend on your page and your platform.",
      },
      {
        id: "stop-words",
        heading: "Should I remove words like a, the and to?",
        paragraphs: [
          "Sometimes. Removing small words shortens a slug, as in how-write-url-slug, but it can also make it read oddly. Keep them when they make the phrase natural, and remove them when the slug is long and the meaning survives without them.",
          "Do not remove words that change the meaning. “Not”, “without” and “vs” matter: gluten-free-bread and bread-without-gluten are fine, but dropping “without” would produce the opposite page title.",
        ],
      },
      {
        id: "dates-and-ids",
        heading: "Should a slug include dates, numbers or IDs?",
        paragraphs: [
          "Include a number when it is part of what the page is, such as a model number, a year for an event that will not repeat, or a step count that will not change. Leave out dates and counts that will go stale, such as best-laptops-2026 for a page you plan to refresh every year, or 7-tips when you might add an eighth.",
          "Database IDs are useful to systems, not readers. Some platforms add an ID automatically to keep slugs unique. If yours does not, check for duplicates before you publish, because two pages cannot share the same path.",
        ],
      },
      {
        id: "seo",
        heading: "Do URL slugs help with SEO?",
        paragraphs: [
          "Google’s own documentation on URL structure recommends simple, descriptive URLs that use readable words, and suggests hyphens rather than underscores to separate them. A clear slug will not rescue a weak page, but it helps people decide to click when they see the link, and it gives a small, honest hint about the topic.",
          "The bigger risks are self-inflicted. Changing slugs often, publishing two pages with near-identical slugs about the same topic, or stuffing a slug with repeated keywords, such as cheap-shoes-cheap-running-shoes-buy-cheap, makes a site harder to understand and maintain. Write the slug for a person reading it in a search result, and keep it stable.",
          "If a page is translated, give each language version its own readable slug in that language, and connect the versions with the hreflang tags your CMS supports, rather than reusing the English slug everywhere.",
        ],
      },
    ],
    stepsHeading: "How to create a slug with the generator",
    steps: [
      {
        title: "Type or paste the page title",
        body: "Enter the title or phrase in the Title or text box. The slug appears below as you type.",
      },
      {
        title: "Read the generated slug",
        body: "Check that the words still describe the page. Delete filler words from the title box and the slug updates with them.",
      },
      {
        title: "Copy the slug",
        body: "Press Copy slug and paste it into your CMS permalink field, file name or route. Nothing you type is sent to a server.",
      },
      {
        title: "Check it on your site",
        body: "Make sure no other page already uses the same slug, and add a redirect if you are replacing an older address.",
      },
    ],
    examples: [
      {
        title: "A blog post title",
        body: "Title: “The 5 Best Ways to Keep Basil Fresh (Tested!)”. Generated slug: the-5-best-ways-to-keep-basil-fresh-tested. A shorter edit might be keep-basil-fresh or how-to-keep-basil-fresh.",
      },
      {
        title: "A product page",
        body: "Title: “Men’s Waterproof Hiking Boot – Brown, Size 42”. Generated slug: men-s-waterproof-hiking-boot-brown-size-42. The apostrophe became a hyphen, so edit the title to “Mens” first if you prefer mens-waterproof-hiking-boot.",
      },
      {
        title: "A file name for an image",
        body: "Title: “Hunza Valley at Sunset”. Generated slug: hunza-valley-at-sunset, which works as hunza-valley-at-sunset.jpg.",
      },
      {
        title: "A category page with an ampersand",
        body: "Title: “Shoes & Bags”. Generated slug: shoes-bags. The ampersand is dropped rather than spelled out, so type “Shoes and Bags” first if you want shoes-and-bags in the address.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Apostrophes become hyphens",
        body: "Any non-letter, including an apostrophe, is a separator, so don’t becomes don-t. Remove apostrophes from the title first if you want dont.",
      },
      {
        heading: "Your CMS may differ",
        body: "WordPress, Shopify and other platforms have their own slug rules and may handle accents or length differently. Paste the generated slug into the permalink field so the platform does not regenerate it.",
      },
      {
        heading: "Encode, do not slug, full URLs",
        body: "A slug is for one path segment. To make a full address with query strings safe, use the URL Encoder instead.",
      },
    ],
    faqs: [
      {
        question: "Should I use hyphens or underscores in a slug?",
        answer: "Hyphens are the common choice for readable URL paths, and the generator uses them. Underscores are more often seen in file names and code.",
      },
      {
        question: "How long should a URL slug be?",
        answer: "There is no official limit that matters in practice, but short slugs of a few descriptive words are easier to read, share and remember.",
      },
      {
        question: "Can I change a slug after publishing?",
        answer: "You can, but old links will break unless you add a permanent redirect from the old path to the new one.",
      },
      {
        question: "Why are uppercase letters converted to lowercase?",
        answer: "Many servers treat paths as case-sensitive, so /Page and /page can be different addresses. Lowercase avoids accidental duplicates.",
      },
      {
        question: "What happens to emoji and symbols in a title?",
        answer: "They are treated as separators and removed, so “Pizza 🍕 Night” becomes pizza-night.",
      },
      {
        question: "Does the slug keep non-English letters?",
        answer: "Letters in scripts such as Chinese, Arabic or Cyrillic are kept. Only accent marks on Latin letters are removed.",
      },
      {
        question: "Should the slug match the page title exactly?",
        answer: "Not necessarily. The title can be longer and more descriptive, while the slug keeps the core words of the topic.",
      },
      {
        question: "Is a slug the same as a permalink?",
        answer: "The permalink is the full, permanent URL of a page. The slug is the last readable part of it.",
      },
      {
        question: "Can two pages have the same slug?",
        answer: "Not in the same folder. Two pages at the same path would collide, so most CMSs add a number to the second one.",
      },
      {
        question: "Does the generator remove stop words automatically?",
        answer: "No. It keeps every word from your title. Delete words such as the or and from the input if you want a shorter slug.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Turn any title into a clean permalink with the free",
      linkLabel: "Slug Generator",
      href: "/tools/slug-generator",
      after: ".",
    },
    alsoSee: [
      {
        before: "To see how each part of an address is named, open the",
        linkLabel: "URL Parser",
        href: "/tools/url-parser",
        after: ".",
      },
      {
        before: "For the title and description that go with the page, the",
        linkLabel: "Meta Tag Generator",
        href: "/tools/meta-tag-generator",
        after: " writes the HTML.",
      },
    ],
  },
};

const duplicateLines: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-remove-duplicate-lines",
    title: "How to Remove Duplicate Lines from a List or Text",
    primaryKeyword: "remove duplicate lines",
    secondaryKeywords: [
      "remove duplicates from a list",
      "dedupe text online",
      "unique lines",
      "case-insensitive duplicate removal",
      "remove duplicate emails",
    ],
    toolSlug: "duplicate-line-remover",
    siblingToolSlugs: ["line-sorter", "whitespace-remover", "text-diff"],
    metaTitle: "How to Remove Duplicate Lines: Dedupe Lists, Emails and Logs",
    metaDescription:
      "Remove repeated lines from a list while keeping the first copy and the original order. When to ignore case and spaces, and how to check what was removed.",
    excerpt:
      "Paste a list, choose whether case and spaces count, and keep one copy of each line in its original order. Here is how matching works and how to avoid removing lines you meant to keep.",
    relatedArticles: ["how-to-remove-extra-spaces-from-text", "how-to-clean-and-compare-text", "how-to-find-and-replace-text"],
    category: "text-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to remove duplicate lines, paste your text into the Duplicate Line Remover and press the button. Each line is compared with the lines above it, the first copy is kept, later copies are dropped, and the remaining lines stay in their original order. Turn on case-insensitive matching to treat Apple and apple as the same line, trim spaces so “apple ” matches “apple”, and remove empty lines if you do not want blank rows.",
    why:
      "Repeated lines creep into lists from copy and paste, merged exports, form submissions and logs. Finding them by eye stops working after a few dozen rows. Removing them automatically gives you a clean set of unique values to import, count, mail or compare, without reordering the list the way a sort-and-dedupe in a spreadsheet often does.",
    sections: [
      {
        id: "what-counts",
        heading: "What counts as a duplicate line?",
        paragraphs: [
          "By default, two lines are duplicates only if they are identical, character for character. “Lahore”, “lahore” and “Lahore ” with a trailing space are three different lines, because a capital letter or an invisible space is still a difference.",
          "Two options loosen that rule. Case-insensitive match compares lines as if they were all lowercase. Trim spaces before comparing ignores spaces and tabs at the start and end of each line. Neither option changes the text you keep: the first copy is output exactly as it was written, with its original capitals and spacing.",
          "A third option, Remove empty lines, drops blank rows completely. Without it, the first blank line is kept and later blank lines are treated as duplicates of it.",
        ],
        table: {
          caption: "How the options change the result for the same five lines",
          headers: ["Input lines", "Default", "Case-insensitive", "Case-insensitive + trim"],
          rows: [
            ["Apple", "kept", "kept", "kept"],
            ["apple", "kept", "removed", "removed"],
            ["Apple", "removed", "removed", "removed"],
            ["apple (with a trailing space)", "kept", "kept", "removed"],
            ["Banana", "kept", "kept", "kept"],
          ],
        },
      },
      {
        id: "order",
        heading: "Does removing duplicates change the order of my list?",
        paragraphs: [
          "No. The tool walks down the list from top to bottom and keeps each line the first time it appears. Everything else stays where it was. That matters for ranked lists, playlists, step-by-step notes and anything where position carries meaning.",
          "If you also want the list alphabetized, remove duplicates first and then run the result through the Line Sorter. Sorting first and deduping second gives the same unique set, but you lose the original order straight away.",
        ],
      },
      {
        id: "which-copy",
        heading: "Which copy of a duplicate is kept?",
        paragraphs: [
          "Always the first. If a list of contacts has “Sara Khan” on line 3 and “SARA KHAN” on line 40, case-insensitive matching keeps the line 3 version. If you want a particular spelling to win, move it to the top before you run the tool, or tidy the case first with the Case Converter.",
          "This first-wins rule is the same one used by many command-line and spreadsheet methods that keep the first occurrence, so the result should be familiar if you are checking it against another tool.",
          "The counts follow the same logic. Original lines is every line you pasted, including blank ones. Unique lines is what remains. Duplicates removed counts only lines dropped as repeats, so when Remove empty lines is on, blank rows disappear without being added to that number, and the three figures may not add up exactly.",
        ],
      },
      {
        id: "use-cases",
        heading: "What are common reasons to dedupe a list?",
        paragraphs: [
          "Email and contact lists are the usual case. Exports from several sign-up forms often repeat the same address. Turn on case-insensitive matching and trimming, because email addresses are generally treated as case-insensitive in practice and stray spaces are common in pasted data.",
          "Keyword and tag lists collect duplicates from brainstorming and merged spreadsheets. Removing them gives you a true count before you plan pages or categories.",
          "Logs and error messages repeat the same line many times. Deduping shows you the distinct messages, and the counter tells you how many repeats were removed. For exact counts of each message, a spreadsheet or log tool is better, because this tool does not report how many times each line appeared.",
          "Code and configuration files sometimes gain repeated import lines or entries during merges. Be careful there, because blank lines and repeated closing brackets are legitimate duplicates, so only paste the section you mean to clean.",
        ],
      },
      {
        id: "spreadsheets",
        heading: "How is this different from removing duplicates in Excel or Google Sheets?",
        paragraphs: [
          "Spreadsheet tools work on cells and columns, and they can compare several columns at once to decide whether a whole row is a duplicate. This tool works on plain lines of text. A line is the unit, so if each line holds a full CSV row, the whole row has to match.",
          "Another difference is order. Some spreadsheet workflows sort the data before removing repeats, which loses the original sequence. Here the first-seen order is preserved automatically, so the cleaned list lines up with the order people signed up, items were logged, or ideas were written down.",
          "The text approach is quicker for a single column of values, a list copied from a document, or anything that is not already in a spreadsheet. For multi-column records where only some fields should match, use your spreadsheet’s own duplicate feature.",
        ],
      },
    ],
    stepsHeading: "How to remove duplicate lines online",
    steps: [
      {
        title: "Paste your list",
        body: "Put one item per line in the Text box. Lines can be words, sentences, addresses, URLs or full rows of data. The input can be up to 400,000 characters.",
      },
      {
        title: "Choose matching options",
        body: "Tick Case-insensitive match, Trim spaces before comparing, or Remove empty lines as needed. All three are off by default, so the strictest match is used unless you change it.",
      },
      {
        title: "Run the tool and read the counts",
        body: "The summary shows how many lines you started with, how many unique lines remain, and how many duplicates were removed. The result appears in a separate box, and your original text is left unchanged.",
      },
      {
        title: "Copy or download the result",
        body: "Copy the unique lines, or download them as unique-lines.txt. Everything runs in your browser, so the list is not uploaded.",
      },
    ],
    examples: [
      {
        title: "Merging two guest lists",
        body: "Paste both lists one after the other. With case-insensitive match and trim on, “Bilal Ahmed”, “bilal ahmed” and “Bilal Ahmed ” become one entry, the first spelling is kept, and the counter shows two duplicates removed.",
      },
      {
        title: "Cleaning a keyword list",
        body: "A brainstorm of 120 keywords contains repeats such as “hiking boots” and “Hiking Boots”. Case-insensitive matching leaves the unique set. Send it to the Line Sorter afterwards for an A to Z list.",
      },
      {
        title: "Checking what was removed",
        body: "Paste the original into the Original box of the Text Diff tool and the deduped result into the Modified box. The removed lines show up as deletions, so you can confirm nothing important went.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Spaces inside a line still count",
        body: "Trimming only affects the ends of each line. “New  York” with two spaces and “New York” with one are still different. Collapse inner spaces first with the Whitespace Remover.",
      },
      {
        heading: "Near-duplicates are not detected",
        body: "The tool matches whole lines exactly, after the options you choose. Typos, different punctuation, or “St.” versus “Street” will not be merged.",
      },
      {
        heading: "Line endings are normalized",
        body: "Windows-style line endings are treated the same as ordinary line breaks, and the output uses plain line breaks.",
      },
    ],
    faqs: [
      {
        question: "Which copy does the tool keep when a line repeats?",
        answer: "The first one, in its original form. Later copies are removed even if they differ only in case or spacing when those options are on.",
      },
      {
        question: "Will the tool sort my list?",
        answer: "No. The original order is kept. Use the Line Sorter afterwards if you want alphabetical or numeric order.",
      },
      {
        question: "How do I remove duplicate email addresses?",
        answer: "Paste one address per line and turn on case-insensitive match and trim. Addresses that differ only in capitals or surrounding spaces are merged.",
      },
      {
        question: "Can I see which lines were duplicates?",
        answer: "The tool shows a count, not a list. Compare the original and the result in the Text Diff tool to see each removed line.",
      },
      {
        question: "What happens to blank lines?",
        answer: "With Remove empty lines off, the first blank line is kept and later ones count as duplicates. With it on, all blank lines are dropped.",
      },
      {
        question: "Can it remove duplicate words within a sentence?",
        answer: "No. It compares whole lines. Put each word on its own line first if you want to dedupe words.",
      },
      {
        question: "Does it work with CSV rows?",
        answer: "Yes, if the whole row repeats. A row counts as a duplicate only when every character on that line matches, after the options you chose.",
      },
      {
        question: "How large a list can I paste?",
        answer: "Up to 400,000 characters. Above that, the tool asks you to split the text so your browser stays responsive.",
      },
      {
        question: "Does trimming change the text I get back?",
        answer: "No. Trimming only affects the comparison. The kept line is returned exactly as it appeared, spaces included.",
      },
      {
        question: "Why were two lines that look the same both kept?",
        answer: "There is probably a hidden difference, such as a trailing space, a tab, or different capitals. Turn on trim and case-insensitive match and run it again.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Clean any list with the free",
      linkLabel: "Duplicate Line Remover",
      href: "/tools/duplicate-line-remover",
      after: ". It keeps the first copy of each line and the original order.",
    },
    alsoSee: [
      {
        before: "To put the unique lines in order, use the",
        linkLabel: "Line Sorter",
        href: "/tools/line-sorter",
        after: ".",
      },
      {
        before: "To fix stray spaces before deduping, try the",
        linkLabel: "Whitespace Remover",
        href: "/tools/whitespace-remover",
        after: ".",
      },
    ],
  },
};

const whitespace: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-remove-extra-spaces-from-text",
    title: "How to Remove Extra Spaces, Tabs and Blank Lines from Text",
    primaryKeyword: "remove extra spaces from text",
    secondaryKeywords: [
      "remove trailing whitespace",
      "remove blank lines",
      "convert tabs to spaces",
      "trim whitespace",
      "collapse multiple spaces",
    ],
    toolSlug: "whitespace-remover",
    siblingToolSlugs: ["remove-line-breaks", "duplicate-line-remover", "find-and-replace"],
    metaTitle: "How to Remove Extra Spaces from Text: Trim, Tabs and Blank Lines",
    metaDescription:
      "Trim lines, collapse double spaces, turn tabs into spaces and delete or merge blank lines. Learn which whitespace option to use and how to keep indentation.",
    excerpt:
      "Whitespace problems come from pasted text, exports and code editors. This guide explains each cleaning option, which ones are safe for code, and how to check the result.",
    relatedArticles: ["how-to-remove-duplicate-lines", "how-to-remove-line-breaks", "how-to-find-and-replace-text"],
    category: "text-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste your text into the Whitespace Remover, tick the cleanup you need, and copy the result. Trim each line removes spaces and tabs at both ends of every line. Collapse repeated spaces turns runs of spaces into one. Convert tabs to spaces swaps each tab for 2 or 4 spaces. Remove blank lines deletes empty rows, while Collapse multiple blank lines keeps one blank line between paragraphs. Trim entire document removes empty space at the very start and end.",
    why:
      "Extra whitespace is invisible until it causes trouble. Double spaces look sloppy in published text, trailing spaces break exact-match comparisons and data imports, mixed tabs and spaces make code and tables misalign, and stacks of blank lines push content down a page. Cleaning it with fixed rules is faster and more consistent than hunting for it by hand.",
    sections: [
      {
        id: "what-is-whitespace",
        heading: "What counts as whitespace?",
        paragraphs: [
          "Whitespace is any character that takes up space without printing a mark. The common ones are the ordinary space, the tab, and the line break that ends each line. Blank lines are lines that contain nothing, or only spaces and tabs.",
          "Text copied from PDFs, web pages, email clients and word processors often carries extra whitespace: two spaces after a full stop, spaces at the ends of lines, tabs used for alignment, or several empty lines between paragraphs. Some sources also add non-breaking spaces, which look identical to normal spaces.",
        ],
      },
      {
        id: "options",
        heading: "What does each cleanup option do?",
        paragraphs: [
          "The options are separate switches, so you can combine them. Trim each line and Trim entire document are on by default. The rest are off until you tick them.",
        ],
        table: {
          caption: "Whitespace options and what they change",
          headers: ["Option", "What it removes or changes", "Safe for code?"],
          rows: [
            ["Trim each line", "Spaces and tabs at the start and end of every line", "No, it removes indentation"],
            ["Remove leading whitespace", "Spaces and tabs at the start of lines only", "No, it removes indentation"],
            ["Remove trailing whitespace", "Spaces and tabs at the end of lines only", "Yes"],
            ["Collapse repeated spaces", "Two or more spaces in a row become one", "Not for space-indented code"],
            ["Convert tabs to spaces", "Each tab becomes 2 or 4 spaces", "Yes, if the width matches"],
            ["Remove blank lines", "Every empty or space-only line", "Changes layout"],
            ["Collapse multiple blank lines", "Runs of blank lines become a single blank line", "Usually yes"],
            ["Trim entire document", "Blank space before the first and after the last character", "Yes"],
          ],
        },
        after:
          "When Trim each line is on, it already covers leading and trailing whitespace, so the two narrower options have no extra effect. Untick it if you only want one side trimmed. Remove blank lines takes priority over Collapse multiple blank lines if you tick both.",
      },
      {
        id: "indentation",
        heading: "How do I clean code without breaking indentation?",
        paragraphs: [
          "Indentation is leading whitespace, so any option that removes it will flatten your code. That matters a great deal in Python and YAML, where indentation is part of the syntax, and it makes any language harder to read.",
          "For code, untick Trim each line, then tick Remove trailing whitespace and, if your project uses spaces, Convert tabs to spaces with the width your project uses. Collapse multiple blank lines is usually safe. Leave Collapse repeated spaces off, because it would also shrink indentation made of spaces. That combination removes the invisible clutter that shows up in code review without changing structure.",
        ],
      },
      {
        id: "double-spaces",
        heading: "Should there be one or two spaces after a full stop?",
        paragraphs: [
          "Most current style guides for published writing use a single space after a full stop. Two spaces is a habit from typewriters and is still preferred by some writers and organizations, so check the guide you follow.",
          "If you need single spacing, Collapse repeated spaces fixes it across a whole document in one pass. It also fixes double spaces that appear between words when text is joined from several sources.",
        ],
      },
      {
        id: "blank-lines",
        heading: "Should I remove blank lines or collapse them?",
        paragraphs: [
          "Remove blank lines when every line is a separate record, such as a list of names, URLs or product codes, and an empty row would become an empty entry. Collapse multiple blank lines when the text has paragraphs, so the paragraphs stay separated by one empty line instead of three or four.",
          "If what you actually want is one long paragraph with no line breaks at all, use the Remove Line Breaks tool. The Whitespace Remover keeps line breaks between non-empty lines.",
        ],
      },
      {
        id: "hidden-characters",
        heading: "Why do some spaces survive the cleanup?",
        paragraphs: [
          "Collapse repeated spaces matches the ordinary space character only. A non-breaking space, often pasted from web pages and word processors, is a different character, so a normal space next to a non-breaking one is not collapsed. Trim each line and Trim entire document remove non-breaking spaces at the ends as well, but the narrower Remove leading and Remove trailing options only look for ordinary spaces and tabs.",
          "Tabs are converted before spaces are collapsed. If you tick both, a tab between two words first becomes several spaces and then a single space, which is usually what you want in prose but not in tab-aligned tables.",
          "If two strings still refuse to match after cleaning, use Find and Replace to search for the odd character and replace it with a normal space, then run the Whitespace Remover again.",
        ],
      },
    ],
    stepsHeading: "How to remove extra whitespace online",
    steps: [
      {
        title: "Paste your text",
        body: "Put the text in the Text box. It can be prose, a list, a CSV export or code, up to 400,000 characters.",
      },
      {
        title: "Pick the options",
        body: "Keep the defaults for general text, or untick Trim each line and choose more specific options for code. If you convert tabs, choose 2 or 4 spaces.",
      },
      {
        title: "Clean the text",
        body: "Run the tool. The result appears in its own box with line and character counts before and after, so you can see how much was removed.",
      },
      {
        title: "Copy or download",
        body: "Copy the cleaned text or download it as cleaned.txt. The processing happens in your browser and nothing is uploaded.",
      },
    ],
    examples: [
      {
        title: "Tidying text pasted from a PDF",
        body: "A paragraph copied from a PDF arrives with spaces at the end of each line and doubled spaces between some words. With Trim each line and Collapse repeated spaces ticked, each line is clean. Join the lines afterwards with Remove Line Breaks if you need one paragraph.",
      },
      {
        title: "Cleaning a list before deduplicating it",
        body: "A list of 300 product codes has stray spaces and blank rows. Trim each line plus Remove blank lines gives one clean code per line, ready for the Duplicate Line Remover.",
      },
      {
        title: "Fixing a code snippet for review",
        body: "A function has trailing spaces and tab indentation in a project that uses 4 spaces. Untick Trim each line, tick Remove trailing whitespace and Convert tabs to spaces with 4 spaces. Indentation is kept and only the invisible clutter goes.",
      },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      {
        heading: "Tabs are replaced literally",
        body: "Each tab becomes a fixed number of spaces. Tabs used to line up columns at different positions may not line up afterwards, because a tab in an editor jumps to the next tab stop.",
      },
      {
        heading: "Keep a copy of the original",
        body: "The input box is not changed, so you can adjust options and run again. Compare versions with the Text Diff tool if you need to confirm every change.",
      },
      {
        heading: "Spreadsheets and CSV",
        body: "Trimming lines in a CSV only trims the ends of each row, not the spaces around each comma-separated value inside the row.",
      },
    ],
    faqs: [
      {
        question: "How do I remove trailing spaces only?",
        answer: "Untick Trim each line and tick Remove trailing whitespace. Leading indentation stays as it is.",
      },
      {
        question: "What is the difference between removing and collapsing blank lines?",
        answer: "Removing deletes every empty line. Collapsing keeps one empty line wherever there were two or more, so paragraphs stay separated.",
      },
      {
        question: "Can I convert tabs to four spaces?",
        answer: "Yes. Tick Convert tabs to spaces and pick 4 spaces. The other choice is 2 spaces.",
      },
      {
        question: "Will the tool join my lines into one paragraph?",
        answer: "No. It keeps line breaks between lines that have text. Use Remove Line Breaks to join lines.",
      },
      {
        question: "Why are two spaces still between some words?",
        answer: "Make sure Collapse repeated spaces is ticked. If it is, one of the characters may be a non-breaking space, which the option does not match.",
      },
      {
        question: "Is it safe to clean Python or YAML with this tool?",
        answer: "Yes, if you avoid options that remove leading whitespace. Use Remove trailing whitespace and Collapse multiple blank lines, and leave Trim each line and Collapse repeated spaces off.",
      },
      {
        question: "What does Trim entire document do?",
        answer: "It removes blank lines and spaces before the first visible character and after the last one, leaving the inside of the text alone.",
      },
      {
        question: "Does the tool show what changed?",
        answer: "It shows line and character counts before and after. Paste both versions into Text Diff to see each change.",
      },
      {
        question: "Can I clean whitespace inside CSV fields?",
        answer: "Only partly. Collapse repeated spaces works anywhere in the line, but trimming only affects the start and end of each row.",
      },
      {
        question: "Is there a size limit?",
        answer: "The tool accepts up to 400,000 characters at a time so the browser stays responsive. Split larger files into parts.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Clean spaces, tabs and blank lines with the free",
      linkLabel: "Whitespace Remover",
      href: "/tools/whitespace-remover",
      after: ".",
    },
    alsoSee: [
      {
        before: "To merge lines into one paragraph, use",
        linkLabel: "Remove Line Breaks",
        href: "/tools/remove-line-breaks",
        after: ".",
      },
      {
        before: "To drop repeated rows after cleaning, try the",
        linkLabel: "Duplicate Line Remover",
        href: "/tools/duplicate-line-remover",
        after: ".",
      },
    ],
  },
};

export const batch1Guides: ToolGuide[] = [
  percentageChange,
  discount,
  caseConverter,
  slugGenerator,
  duplicateLines,
  whitespace,
];
