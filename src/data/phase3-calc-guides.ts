import type { GuideContent } from "./guide-content.ts";

export const phase3CalcGuides: Record<string, GuideContent> = {
  "how-to-estimate-fuel-cost": {
    intro:
      "Fuel cost is the fuel you use times the price. In miles-per-gallon mode, fuel is distance divided by economy. 120 miles at 30 mpg uses 4 gallons. At $3.50 a gallon, one trip costs $14. In liters-per-100-km mode, fuel is distance times the economy divided by 100. 100 km at 8 L/100 km uses 8 liters. At $1.50 a liter, one trip costs $12, and four of those trips cost $48.",
    why:
      "A long drive is easier to budget when the gallons or liters are visible, not just the ticket price. The same distance costs a different amount when the car’s economy or the price changes. This estimate uses the numbers you type. It does not look up a route, a live fuel price, or the car’s actual consumption.",
    stepsHeading: "How to estimate a fuel cost",
    sections: [
      {
        id: "mpg",
        heading: "How does the miles-per-gallon estimate work?",
        paragraphs: [
          "Divide distance by miles per gallon to get gallons for one trip. Multiply by the price to get the cost of that trip. Multiply by the number of trips for the total. 120 divided by 30 is 4 gallons. 4 times 3.50 is 14 dollars. One trip and four trips are different totals, so type the trip count you mean.",
          "Miles per gallon must be greater than 0. The page rejects 0 because it cannot divide by it. Distance and price cannot be negative. The result rounds fuel to four decimal places and money to cents.",
        ],
      },
      {
        id: "metric",
        heading: "How does liters per 100 km work?",
        paragraphs: [
          "Liters per 100 km already means fuel for a fixed distance. Multiply the distance in kilometers by that figure divided by 100. 100 km at 8 L/100 km is 8 liters. 8 times $1.50 is $12 for one trip. Four trips use 32 liters and cost $48.",
          "Do not put miles into the kilometer mode, or kilometers into the miles mode. The page does not convert the distance for you. Use the unit converter first if the odometer and the economy figure are in different systems. The economy in this mode must be 1,000 L/100 km or less.",
        ],
      },
      {
        id: "limits",
        heading: "What does this estimate leave out?",
        paragraphs: [
          "Trips must be a whole number from 1 to 100,000. A fraction is rejected. The page does not add tolls, parking, or a round trip unless you include that distance yourself. A return journey is a larger distance or a second trip, and those are not the same if the route differs.",
          "Real cars use more fuel in traffic, in the cold, or with a heavy load. Type the economy you want to assume. The calculator will not replace it with a rated figure, because it does not know the vehicle.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose miles per gallon or liters per 100 km",
        body: "Match the mode to the economy figure you have. The distance unit has to match that mode.",
      },
      {
        title: "Enter distance, economy, and price",
        body: "Price is per gallon in the miles mode and per liter in the kilometer mode.",
      },
      {
        title: "Enter a whole number of trips",
        body: "Use 1 for a single drive. The total multiplies the one-trip fuel and cost by that count.",
      },
      {
        title: "Read fuel and cost",
        body: "The page shows fuel and cost for one trip and for all trips. Money is rounded to cents.",
      },
    ],
    examples: [
      {
        title: "120 miles at 30 mpg",
        body: "At $3.50 a gallon and 1 trip, the result is 4 gallons and $14. Both the one-trip figures and the totals match, because there is only one trip.",
      },
      {
        title: "100 km at 8 L/100 km, four times",
        body: "At $1.50 a liter, one trip is 8 liters and $12. Four trips are 32 liters and $48.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The modes do not convert distance",
        body: "120 miles is not 120 kilometers. Switch modes only when both the distance and the economy figure belong to that mode.",
      },
      {
        heading: "A round trip is extra distance",
        body: "Typing the one-way distance and 1 trip prices one way. Double the distance or set trips to 2 if both directions are the same length.",
      },
    ],
    faqs: [
      {
        question: "How much fuel is 120 miles at 30 mpg?",
        answer:
          "4 gallons. At $3.50 a gallon and 1 trip, the cost is $14.",
      },
      {
        question: "How is liters per 100 km calculated?",
        answer:
          "Fuel equals distance times the economy divided by 100. 100 km at 8 L/100 km is 8 liters, which is $12 at $1.50 a liter.",
      },
      {
        question: "Can I enter half a trip?",
        answer:
          "No. Trips must be a whole number from 1 to 100,000.",
      },
      {
        question: "Does the page include tolls?",
        answer:
          "No. It multiplies fuel by the price you type. Add tolls or parking yourself if you need them.",
      },
      {
        question: "Is a route looked up?",
        answer:
          "No. The estimate uses the distance, economy, price, and trip count you enter. It runs in the browser.",
      },
    ],
    cta: {
      before: "To price a drive from distance, economy, and fuel price, use the",
      linkLabel: "Fuel Cost Calculator",
      href: "/tools/fuel-cost-calculator",
      after: ". It supports miles per gallon and liters per 100 km.",
    },
    alsoSee: [
      {
        before: "If the distance is in the wrong system, read",
        linkLabel: "How to convert length, weight, and temperature",
        href: "/guides/how-to-convert-units",
        after: ".",
      },
      {
        before: "Fuel price math is ordinary percent and multiplication. See",
        linkLabel: "How to calculate a percentage",
        href: "/guides/how-to-calculate-percentage",
        after: ".",
      },
    ],
  },
  "how-to-convert-units": {
    intro:
      "Length and weight convert by a fixed factor. Temperature uses a formula. One meter is 3.280839895013 feet, and the page shows that as 3.28084 feet because it displays up to six decimal places. One kilogram is 2.204622621849 pounds, shown as 2.204623. Zero Celsius is 32 Fahrenheit and 273.15 Kelvin. The converter does not handle currency, area, or volume.",
    why:
      "A factor is easy to misremember, and temperature is not a simple multiply. Using the same factors every time keeps a recipe, a shipping weight, or a weather figure consistent. The page shows the converted number. It does not round to the nearest inch unless you do that yourself after you read it.",
    stepsHeading: "How to convert length, weight, and temperature",
    sections: [
      {
        id: "length-weight",
        heading: "How do length and weight convert?",
        paragraphs: [
          "The converter multiplies by the ratio of the two units. One meter is exactly 3.280839895013 feet before display rounding. With the page’s six-decimal display, you see 3.28084. One kilogram displays as 2.204623 pounds. Those are the figures this tool uses, not a rounded rule of thumb such as 2.2.",
          "The factors are fixed. A foot is 0.3048 meters, an inch is 0.0254 meters, a yard is 0.9144 meters, and a mile is 1,609.344 meters. A pound is 0.45359237 kilograms, and an ounce is 0.028349523125 kilograms. The page converts through those factors. It does not switch to a survey foot or a troy ounce.",
          "Pick the category first, then the two units. Converting meters to feet is not the same control as converting kilograms to pounds. A negative length or weight is rejected because distance and mass in these categories are not negative.",
        ],
      },
      {
        id: "temperature",
        heading: "How do Celsius, Fahrenheit, and Kelvin convert?",
        paragraphs: [
          "Zero Celsius is 32 Fahrenheit. The formula adds 32 after scaling by 9/5. Zero Celsius is also 273.15 Kelvin, which is a shift with no scale change. The page returns 32 and 273.15 for that input.",
          "Kelvin and Celsius cannot go below absolute zero. Minus 274 Celsius fails with Temperature cannot be below absolute zero. The page does not return a made-up temperature below that line.",
        ],
      },
      {
        id: "limits",
        heading: "What will this converter not do?",
        paragraphs: [
          "There is no currency, no square feet, and no liters in this tool. Fuel economy and sales tax have their own calculators. Square footage is a separate calculator because area is length times length, not a single factor from this list.",
          "Display rounding is not the full factor. If you need the longer foot value, it is 3.280839895013 for one meter. The page’s visible number stops at six decimal places. Copy the visible number when you are matching what a reader sees on the page.",
          "Kilometer, centimeter, and millimeter sit on the meter. A kilometer is 1,000 meters, a centimeter is 0.01 meters, and a millimeter is 0.001 meters. Gram and milligram sit on the kilogram: a gram is 0.001 kilograms and a milligram is 0.000001 kilograms. Convert within one category. The page will not turn a meter into a kilogram.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose length, weight, or temperature",
        body: "The unit lists change with the category. A foot is not in the weight list.",
      },
      {
        title: "Choose the from unit and the to unit",
        body: "One meter to feet is the default length pair. Change either side when you need a different pair.",
      },
      {
        title: "Enter the value",
        body: "Length and weight must not be negative. Temperature can be negative until it crosses absolute zero.",
      },
      {
        title: "Read the displayed number",
        body: "The page shows up to six decimal places. One meter appears as 3.28084 feet.",
      },
    ],
    examples: [
      {
        title: "One meter in feet",
        body: "The exact conversion used here is 3.280839895013 feet. The page displays 3.28084.",
      },
      {
        title: "Zero Celsius",
        body: "Zero Celsius converts to 32 Fahrenheit and to 273.15 Kelvin. Minus 274 Celsius is rejected as below absolute zero.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Temperature is not a factor",
        body: "You cannot multiply Celsius by a constant to get Fahrenheit. Use the formula. Zero Celsius is 32 Fahrenheit, not 0.",
      },
      {
        heading: "Six decimals is the display",
        body: "1 kilogram displays as 2.204623 pounds. A mental shortcut of 2.2 is a different number.",
      },
    ],
    faqs: [
      {
        question: "How many feet is 1 meter on this page?",
        answer:
          "The page shows 3.28084. The fuller value before that display rounding is 3.280839895013.",
      },
      {
        question: "How many pounds is 1 kilogram?",
        answer:
          "The page shows 2.204623. The value before display rounding is 2.204622621849.",
      },
      {
        question: "What is 0 Celsius in Fahrenheit and Kelvin?",
        answer:
          "32 Fahrenheit and 273.15 Kelvin.",
      },
      {
        question: "Why is minus 274 Celsius rejected?",
        answer:
          "It is below absolute zero. The page returns Temperature cannot be below absolute zero.",
      },
      {
        question: "Can I convert currency or square feet here?",
        answer:
          "No. This converter covers length, weight, and temperature. Square footage has its own calculator.",
      },
    ],
    cta: {
      before: "To convert a length, weight, or temperature, use the",
      linkLabel: "Unit Converter",
      href: "/tools/unit-converter",
      after: ". Results display with up to six decimal places.",
    },
    alsoSee: [
      {
        before: "Distance shows up again in a fuel estimate. See",
        linkLabel: "How to estimate a fuel cost",
        href: "/guides/how-to-estimate-fuel-cost",
        after: ".",
      },
      {
        before: "Area is a different calculation. See",
        linkLabel: "How to calculate square footage",
        href: "/guides/how-to-calculate-square-footage",
        after: ".",
      },
    ],
  },
  "how-to-add-sales-tax": {
    intro:
      "Sales tax on this page is the price times the rate you type, rounded to cents, then added to the price. An $80 price at 8.25% has $6.60 of tax and an $86.60 total. The calculator does not look up a state rate. If you type 8.25, you get 8.25 percent of the price, even if a local rate is different.",
    why:
      "Receipts are easier to check when the tax line is visible on its own. A total that already includes tax is a different question from a price that still needs tax. This tool answers the second one: start with the pre-tax price, apply the percent you enter, and round the tax to cents before adding it.",
    stepsHeading: "How to add sales tax",
    sections: [
      {
        id: "formula",
        heading: "How is the tax amount rounded?",
        paragraphs: [
          "Tax equals the price times the percent divided by 100, rounded to two decimals. The total is the price plus that rounded tax, rounded to cents again. For $80 at 8.25%, 80 times 0.0825 is 6.6, which is $6.60 of tax. 80 plus 6.60 is $86.60.",
          "The price and the rate cannot be negative. A rate of 0 produces 0 tax and a total equal to the price. The page does not add a second local tax unless you include it in the single percent you type.",
          "Rounding happens on the tax line before the total is formed. If a rate produces a half cent, the tax is rounded to the nearest cent and that rounded tax is what gets added. Check the tax line against the receipt when the cents look off.",
        ],
      },
      {
        id: "rate",
        heading: "Where does the rate come from?",
        paragraphs: [
          "You type it. The page has no table of state or city rates, and it does not update when a rate changes. Use the percent on the receipt or the percent you were told to charge. Combining a state percent and a local percent is your addition, done before you type one number.",
          "A tip is not sales tax. A tip is optional and is calculated on the bill you choose. Tax here is a percent of the pre-tax price only. If a bill has both, run them as separate steps so you can see each line.",
        ],
      },
      {
        id: "included",
        heading: "What if the price already includes tax?",
        paragraphs: [
          "This calculator adds tax to a pre-tax price. It does not remove tax from a total. If $86.60 already includes tax, do not run 8.25% on $86.60 and add it again. That would tax the tax.",
          "Percent questions that are not tax, such as 15% of 80, belong on the percentage calculator. A discount is a decrease, not a tax. Keep the labels straight so the receipt matches the math.",
          "Write the rate as a percent, not as a fraction you already divided. Typing 0.0825 when you mean 8.25% calculates 0.0825 percent of $80, which is $0.07 of tax and an $80.07 total, not $6.60. The box multiplies by the percent and then divides by 100.",
        ],
      },
    ],
    steps: [
      {
        title: "Start with the pre-tax price",
        body: "Use the amount before tax. A price that already includes tax will be taxed again if you add a percent to it here.",
      },
      {
        title: "Type one tax percent",
        body: "8.25 means 8.25 percent. Combine state and local rates yourself if both apply.",
      },
      {
        title: "Read the tax and the total",
        body: "Tax is rounded to cents first. The total is the price plus that tax.",
      },
      {
        title: "Keep tip and discounts separate",
        body: "A tip or a markdown is a different percent on a different base. Do not fold them into the tax rate unless the receipt actually does that.",
      },
    ],
    examples: [
      {
        title: "$80 at 8.25%",
        body: "The tax is $6.60 and the total is $86.60. The unrounded product 6.6 is already an exact cent amount.",
      },
      {
        title: "A zero rate",
        body: "A 0% rate adds $0.00 of tax. The total equals the price you typed.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The page does not know your local rate",
        body: "Type the percent you intend to charge or check. A nearby city’s rate is not filled in for you.",
      },
      {
        heading: "Do not add tax to a tax-included total",
        body: "This tool only adds tax. Removing tax from a total is a different calculation.",
      },
    ],
    faqs: [
      {
        question: "What is the tax on $80 at 8.25%?",
        answer:
          "$6.60. The total is $86.60.",
      },
      {
        question: "Does the calculator look up a state rate?",
        answer:
          "No. It uses the percent you type and does not store a rate table.",
      },
      {
        question: "Can the price be negative?",
        answer:
          "No. The price and the tax percent must be zero or greater.",
      },
      {
        question: "Is a tip included?",
        answer:
          "No. Tip is a separate calculator. This page adds one tax percent to a pre-tax price.",
      },
      {
        question: "Where does the math run?",
        answer:
          "In the browser. The price and rate are not sent away to compute the tax.",
      },
    ],
    cta: {
      before: "To add a tax percent to a pre-tax price, use the",
      linkLabel: "Sales Tax Calculator",
      href: "/tools/sales-tax-calculator",
      after: ". Tax is rounded to cents before it is added.",
    },
    alsoSee: [
      {
        before: "A shared restaurant check is a different percent. See",
        linkLabel: "How to calculate a tip",
        href: "/guides/how-to-calculate-a-tip",
        after: ".",
      },
      {
        before: "For other percent questions, read",
        linkLabel: "How to calculate a percentage",
        href: "/guides/how-to-calculate-percentage",
        after: ".",
      },
    ],
  },
  "how-to-calculate-gpa": {
    intro:
      "GPA on this calculator is total grade points divided by total credits, rounded to two decimals. On the letter scale it uses, A is 4 and B is 3. An A worth 3 credits and a B worth 3 credits is 6 credits, 21 grade points, and a GPA of 3.5. An A worth 3 credits and a C worth 1 credit is 4 credits, 14 grade points, and also 3.5. This is the scale built into the page. A school can use a different one.",
    why:
      "A course with more credits moves the average more than a one-credit course. Adding the letters and dividing by the number of classes ignores that. Weighting by credits matches the way this calculator, and many transcripts, define the average. You still need the scale your school published if it is not the one listed here.",
    stepsHeading: "How to calculate a GPA",
    sections: [
      {
        id: "scale",
        heading: "Which letter values does this page use?",
        paragraphs: [
          "A is 4, A- is 3.7, B+ is 3.3, B is 3, B- is 2.7, C+ is 2.3, C is 2, C- is 1.7, D+ is 1.3, D is 1, D- is 0.7, and F is 0. An unknown letter is rejected. The page does not treat A+ as higher than A, because A+ is not in this list.",
          "Numeric mode accepts grade points you type, from 0 to 4.0. A number above 4 fails for that course. Use numeric mode when the transcript already shows points and you do not want the letter map.",
        ],
      },
      {
        id: "credits",
        heading: "How do credits change the result?",
        paragraphs: [
          "Each course adds credits to the denominator and credits times points to the numerator. The A and B example is 3 times 4 plus 3 times 3, which is 21, divided by 6, which is 3.5. The A and one-credit C example is 3 times 4 plus 1 times 2, which is 14, divided by 4, which is also 3.5.",
          "A blank row is ignored. A row with a grade and no credits, or credits and no grade, is an error for that course number. Credits cannot be negative, and a single course cannot exceed 1,000 credits.",
        ],
      },
      {
        id: "scope",
        heading: "What is outside this average?",
        paragraphs: [
          "The page averages the rows you enter. It does not drop the lowest grade, replace a retake, or apply a school’s honors bump unless you type the points that already include that rule. Enter the courses that belong in the average you want.",
          "Rounded to two decimals, 3.50 and 3.5 are the same displayed GPA. A long list can still hide a single low grade if the credits are small. Read the credit total as well as the GPA.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose letters or numbers",
        body: "Letters use the scale above. Numbers must be from 0 to 4.0.",
      },
      {
        title: "Enter each course’s grade and credits",
        body: "Leave unused rows blank. A half-finished row is reported as an error for that course.",
      },
      {
        title: "Read credits, points, and GPA",
        body: "GPA is total points divided by total credits, rounded to two decimals.",
      },
      {
        title: "Compare the scale with your school",
        body: "If the school publishes different points for A- or B+, use numeric mode and type those points.",
      },
    ],
    examples: [
      {
        title: "A and B, three credits each",
        body: "The totals are 2 courses, 6 credits, and 21 points. The GPA is 3.5.",
      },
      {
        title: "A three-credit A and a one-credit C",
        body: "The totals are 4 credits and 14 points. The GPA is 3.5 again, because the C has fewer credits.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Counting classes instead of credits",
        body: "Two classes are not equal when one is 3 credits and the other is 1. This page divides by credits.",
      },
      {
        heading: "A+ is not on this letter list",
        body: "Type a number from 0 to 4.0 if you need a value this letter list does not name.",
      },
    ],
    faqs: [
      {
        question: "What is the GPA for an A and a B with 3 credits each?",
        answer:
          "3.5. That is 21 grade points divided by 6 credits. A is 4 and B is 3 on this page.",
      },
      {
        question: "Why is a 3-credit A and a 1-credit C also 3.5?",
        answer:
          "The points are 12 plus 2, which is 14. Divided by 4 credits, that is 3.5. The C moves the average less because it has one credit.",
      },
      {
        question: "What letters are accepted?",
        answer:
          "A, A-, B+, B, B-, C+, C, C-, D+, D, D-, and F. Other text is rejected.",
      },
      {
        question: "Can I enter a 5.0 grade?",
        answer:
          "Not in numeric mode. Grade points must be from 0 to 4.0 on this scale.",
      },
      {
        question: "Does the page fetch a transcript?",
        answer:
          "No. It averages the rows you type, in the browser.",
      },
    ],
    cta: {
      before: "To average letter grades or grade points by credits, use the",
      linkLabel: "GPA Calculator",
      href: "/tools/gpa-calculator",
      after: ". It uses the 4.0 letter map described above.",
    },
    alsoSee: [
      {
        before: "GPA is a weighted average, which is still a percent-style idea. See",
        linkLabel: "How to calculate a percentage",
        href: "/guides/how-to-calculate-percentage",
        after: ".",
      },
      {
        before: "For a date-based count that is unrelated to grades, see",
        linkLabel: "How to calculate age",
        href: "/guides/how-to-calculate-age",
        after: ".",
      },
    ],
  },
  "how-to-calculate-percentage": {
    intro:
      "To calculate a percentage, name the question first. What is X% of Y is Y times X divided by 100. 15% of 80 is 12, and the calculator’s detail line is 15 ÷ 100 × 80. X is what percent of Y is X divided by Y, times 100, and the second number cannot be 0. 12 is 30% of 40. A change applies the percent to a starting number: 200 increased by 10% is 220, and 80 decreased by 25% is 60.",
    why:
      "Receipts, grades, and discounts use the same three shapes and different labels. Swapping the two numbers turns a discount into the wrong price. The Percentage Calculator keeps the shapes separate so you can match the sentence you actually need. A from-to change, such as 80 becoming 100, is the Percentage Change Calculator, which is a different page.",
    stepsHeading: "How to calculate a percentage",
    sections: [
      {
        id: "of",
        heading: "How do you find X percent of Y?",
        paragraphs: [
          "Divide the percent by 100, then multiply by the whole. 15 divided by 100 is 0.15, and 0.15 times 80 is 12. The page labels that result 15% of 80. Zero percent of 50 is 0. The percent can be larger than 100 if you mean more than the whole.",
          "This mode does not ask which number is the part. You already named the percent. If you have a part and a whole and want the percent, use the next mode.",
        ],
      },
      {
        id: "is-what",
        heading: "How do you find what percent one number is of another?",
        paragraphs: [
          "Divide the first number by the second and multiply by 100. 12 divided by 40 is 0.3, times 100 is 30. The page says 12 is this percent of 40 and shows the detail 12 ÷ 40 × 100.",
          "The second number cannot be 0. Five of 0 is rejected with The second number cannot be 0 when finding a percentage. There is no percent of a zero whole. Zero percent of a nonzero number is a different mode, and that one is allowed.",
        ],
      },
      {
        id: "change",
        heading: "How do you increase or decrease a number by a percent?",
        paragraphs: [
          "The change mode treats the first number as the percent and the second as the starting value. The amount is the percent of that start. An increase adds the amount. A decrease subtracts it. 200 increased by 10% has an amount of 20 and a result of 220. 80 decreased by 25% has an amount of 20 and a result of 60.",
          "That is not the same as asking how much percent changed between two finished numbers. From 80 to 100, the Percentage Change Calculator reports a difference of 20 and a 25% increase. From 50 to 40, it reports a difference of -10 and a 20% decrease. Use that page when you already have the before and after.",
        ],
      },
    ],
    steps: [
      {
        title: "Write the question in one sentence",
        body: "Use what is 15% of 80, 12 is what percent of 40, or what is 200 after a 10% increase. If you cannot tell which one it is, stop before you type.",
      },
      {
        title: "Pick the matching mode",
        body: "Of, is-what, and change-by are separate. The change mode also needs increase or decrease.",
      },
      {
        title: "Check a round case",
        body: "10% of 50 is 5. If a quick case fails, the numbers are in the wrong boxes.",
      },
      {
        title: "Read the detail line",
        body: "It shows the division the page used, such as 15 ÷ 100 × 80. The result is rounded to at most 10 decimal places, and the page displays up to six.",
      },
    ],
    examples: [
      {
        title: "15% of 80",
        body: "The result is 12. The detail is 15 ÷ 100 × 80. That is the of mode: 15 is the percent and 80 is the whole.",
      },
      {
        title: "A 25% decrease of 80",
        body: "The amount removed is 20 and the result is 60. A $50 price falling to $40 is a different question: the change calculator calls that a difference of -10 and a 20% decrease.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Zero cannot be the whole",
        body: "You can take 0% of a number. You cannot ask what percent a number is of 0. The is-what mode rejects that.",
      },
      {
        heading: "A decrease by 20% is not a from-to change",
        body: "Decreasing 50 by 20% gives 40. Seeing 50 and 40 and asking for the percent change is the other calculator, and the answer there is a 20% decrease as well, with a difference of -10. Keep the inputs in the mode that matches the sentence.",
      },
    ],
    faqs: [
      {
        question: "What is 15% of 80?",
        answer:
          "12. The calculator detail is 15 ÷ 100 × 80.",
      },
      {
        question: "12 is what percent of 40?",
        answer:
          "30%. The detail is 12 ÷ 40 × 100. The second number cannot be 0 in this mode.",
      },
      {
        question: "What is 200 after a 10% increase?",
        answer:
          "220. The amount added is 20. A 25% decrease of 80 is 60, and the amount removed is 20.",
      },
      {
        question: "How do I get the percent from 80 to 100?",
        answer:
          "Use the Percentage Change Calculator. From 80 to 100 the difference is 20 and the change is a 25% increase. From 50 to 40 the difference is -10 and the change is a 20% decrease.",
      },
      {
        question: "Do the numbers leave the browser?",
        answer:
          "No. The Percentage Calculator runs in the browser.",
      },
    ],
    cta: {
      before: "To run these three percent questions, use the",
      linkLabel: "Percentage Calculator",
      href: "/tools/percentage-calculator",
      after: ". It keeps of, is-what, and change-by as separate modes.",
    },
    alsoSee: [
      {
        before: "Tax is one applied percent. See",
        linkLabel: "How to add sales tax",
        href: "/guides/how-to-add-sales-tax",
        after: ".",
      },
      {
        before: "A shared bill uses the same kind of percent. See",
        linkLabel: "How to calculate a tip",
        href: "/guides/how-to-calculate-a-tip",
        after: ".",
      },
    ],
  },
  "how-to-calculate-a-tip": {
    intro:
      "A tip is the bill times the tip percent, added to the bill, then split if you ask it to. On an $84.20 bill at 18% for 2 people, the tip is $15.16, the total is $99.36, the tip per person is $7.58, and the total per person is $49.68. People must be a whole number of at least 1. Each share is rounded to cents on its own, so the shares can miss the total by a cent.",
    why:
      "Splitting a check in your head drops cents and sometimes drops the tip rate. Seeing the tip, the total, and each person’s share on separate lines makes the arithmetic easy to check. The rate is whatever you type. The page does not suggest a customary percent or look up a local rule.",
    stepsHeading: "How to calculate a tip",
    sections: [
      {
        id: "formula",
        heading: "How are the tip and the total rounded?",
        paragraphs: [
          "The tip is the bill times the percent divided by 100, rounded to cents. The total is the bill plus that tip, rounded to cents. $84.20 times 0.18 is $15.156, which rounds to $15.16. Adding that to $84.20 gives $99.36.",
          "Per person, the tip and the total are each divided by the number of people and rounded to cents again. For 2 people, $15.16 becomes $7.58 each and $99.36 becomes $49.68 each. Those two shares add back to the totals in this example.",
        ],
      },
      {
        id: "split",
        heading: "When can the shares miss the total by a cent?",
        paragraphs: [
          "A $10 bill at 10% is a $1.00 tip and an $11.00 total. Split by 3, the tip per person is $0.33 and the total per person is $3.67. Three times $0.33 is $0.99, which is a cent under the $1.00 tip. Three times $3.67 is $11.01, which is a cent over the $11.00 total.",
          "That gap is rounding, not a second fee. If everyone pays the displayed share, decide in the group who covers the leftover cent. The page does not assign it.",
        ],
      },
      {
        id: "tax",
        heading: "Should tax be inside the bill?",
        paragraphs: [
          "Type the bill you want the tip based on. If you tip on the pre-tax amount, leave tax out. If you tip on the amount you will pay, include tax in the bill first. The tip calculator does not add sales tax for you.",
          "The people count must be a whole number of at least 1. A blank or a fraction is rejected. A 0% tip is allowed and produces a $0.00 tip, with the total equal to the bill.",
          "A percent over 100 is allowed if you type it. The page will not warn you that 30 is more than a typical tip. Read the percent box before you split the check, because a slipped digit changes every share.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the bill you want to tip on",
        body: "Include tax only if the tip should apply to the tax as well.",
      },
      {
        title: "Enter the tip percent",
        body: "18 means 18 percent. The page does not fill in a default rate for you to accept.",
      },
      {
        title: "Enter a whole number of people",
        body: "Use 1 when you are not splitting. Use 2 or more to see each share.",
      },
      {
        title: "Compare the shares with the total",
        body: "If the shares miss the total by a cent, that is the per-person rounding. Agree who pays the cent.",
      },
    ],
    examples: [
      {
        title: "$84.20 at 18% for 2 people",
        body: "The tip is $15.16 and the total is $99.36. Each person owes $7.58 of tip and $49.68 in all. The two shares add back to those totals.",
      },
      {
        title: "$10 at 10% for 3 people",
        body: "The tip is $1.00 and the total is $11.00. Each share is $0.33 of tip and $3.67 overall. Three shares of the total come to $11.01.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Tax is not added here",
        body: "Put the pre-tax or post-tax bill in the box yourself. A separate sales-tax step is how you build that bill.",
      },
      {
        heading: "Cents do not always split evenly",
        body: "The three-person example is short by a cent on the tip and over by a cent on the total. Read both lines.",
      },
    ],
    faqs: [
      {
        question: "What is an 18% tip on $84.20 for 2 people?",
        answer:
          "The tip is $15.16 and the total is $99.36. Each person pays $7.58 in tip and $49.68 overall.",
      },
      {
        question: "Why can three shares miss the total?",
        answer:
          "Each share is rounded to cents. On a $10 bill at 10% split 3 ways, each total is $3.67, and three of those are $11.01 against an $11.00 total.",
      },
      {
        question: "Can I split with half a person?",
        answer:
          "No. The people count must be a whole number of at least 1.",
      },
      {
        question: "Does the page choose the tip percent?",
        answer:
          "No. You type the percent. A 0% tip is allowed and adds nothing.",
      },
      {
        question: "Is the bill uploaded?",
        answer:
          "No. The tip math runs in the browser.",
      },
    ],
    cta: {
      before: "To find a tip, a total, and each person’s share, use the",
      linkLabel: "Tip Calculator",
      href: "/tools/tip-calculator",
      after: ". Amounts are rounded to cents.",
    },
    alsoSee: [
      {
        before: "To put tax on a price before the tip, see",
        linkLabel: "How to add sales tax",
        href: "/guides/how-to-add-sales-tax",
        after: ".",
      },
      {
        before: "The percent itself is explained in",
        linkLabel: "How to calculate a percentage",
        href: "/guides/how-to-calculate-percentage",
        after: ".",
      },
    ],
  },
};
