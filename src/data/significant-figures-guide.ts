import type { GuideContent } from "./guide-content.ts";

export const significantFiguresGuide: GuideContent = {
  intro:
    "A significant figures calculator counts the meaningful digits in a number as it is written, rounds to a precision you choose, and applies the separate rules for addition and multiplication. Use it when a measured 1.00 should stay different from 1, and when 150, 80, or 1200 should not be forced into one count.",
  why:
    "Measured digits and placeholder zeros look the same on a page. Dropping the zeros in 1.500 × 10³, or treating 1200 as if it had one known precision, changes the result of a later calculation. Writing the rule down next to the arithmetic keeps that from happening quietly.",
  stepsHeading: "How to Use the Sig Fig Calculator",
  steps: [
    {
      title: "Type the number or the expression",
      body: "Enter one written number, or an expression that uses addition, subtraction, multiplication, division, and parentheses. An integer power such as 2.50^2 keeps the significant figures of the base. Addition does not use the multiplication rule.",
    },
    {
      title: "Type the number the way it was measured",
      body: "Keep trailing zeros that belong in the measurement. 1.00, 0.080, 4.0, and 1.500e3 are different from 1, 0.08, 4, and 1.5e3. A comma is rejected, so type 1200 rather than 1,200.",
    },
    {
      title: "Set a rounding precision only when you need one",
      body: "Choose 1 through 5, or type a whole number from 1 to 50. Leave the precision blank to count a number, or to let addition use decimal places and multiplication use the fewest significant figures. A counted 12, or 100 centimeters in a meter, is exact, so leave it out of the expression when it should not limit the result.",
    },
    {
      title: "Read the result and the steps",
      body: "The result line is the readable value. A second line gives a copyable form such as 1.200e3. If the page says the precision cannot be determined, it lists each scientific-notation choice instead of picking one.",
    },
  ],
  sections: [
    {
      id: "what-is",
      heading: "What Is a Significant Figures Calculator?",
      paragraphs: [
        "A significant figures calculator reads a written number and reports how many digits carry measurement information. It can also rewrite that number to a requested count, turn it into scientific notation, or combine several numbers.",
        "The count depends on how the number is written. 1.00 has three significant figures. 1 has one. Both can name the same value on a number line, and they do not claim the same precision. 1.5e3 has two significant figures. 1.500e3 has four. The exponent moves the decimal point and leaves the coefficient’s digits alone.",
        "On this calculator the work happens in the browser. The numbers are not uploaded, and an ambiguous whole number is not assigned a single count.",
      ],
    },
    {
      id: "rules",
      heading: "Rules for Determining Significant Figures",
      paragraphs: [
        "Nonzero digits are significant. 81.60 contains 8, 1, 6, and a final 0 that the next rules have to judge.",
        "Zeros between nonzero digits are significant. 1005 has four significant figures. 10.01 has four. The zeros sit inside the number, so they are not placeholders on the outside.",
        "Leading zeros are not significant. 0.08 has one significant figure. 0.00450 has three. The zeros in front of 4 only put the 4 in the right decimal place.",
        "Trailing zeros after a decimal point are significant when they follow a nonzero digit. 1.00 has three. 0.080 has two. 4.0 and 2.0 have two. 81.60 has four. 0.0100 has three. 1000.0 has five.",
        "Trailing zeros in a whole number are ambiguous. 150, 80, 1200, and 1000 do not show whether the final zeros were measured. A plus or minus sign is not a digit, so -0.00450 has the same three significant figures as 0.00450.",
        "A written zero has no nonzero digit. This calculator counts 0 and 0.000 as one significant figure. 0.000 still records three decimal places, and those places are what addition uses.",
        "Scientific notation follows the coefficient. 6.022e23 has four significant figures. 3.00e-8 has three. The exponent, including a negative exponent, does not add or remove figures.",
      ],
    },
    {
      id: "how-many",
      heading: "How Many Significant Figures Does a Number Have?",
      paragraphs: [
        "Match the written form, then count. If the number is a whole number ending in zero, report the range and the scientific-notation spelling of each choice. One count would be a guess.",
      ],
      table: {
        caption: "Counts for numbers the calculator accepts, including ambiguous whole numbers",
        headers: ["Number", "Significant figures", "Why"],
        rows: [
          ["1.00", "3", "The zeros follow a decimal point"],
          ["0.08", "1", "The zero before 8 is a leading zero"],
          ["0.080", "2", "The last zero follows a decimal point"],
          ["4.0", "2", "The zero follows a decimal point"],
          ["2.0", "2", "The zero follows a decimal point"],
          ["81.60", "4", "Both the 6 and the final 0 count"],
          ["1005", "4", "The zeros sit between 1 and 5"],
          ["10.01", "4", "The zeros sit between nonzero digits"],
          ["0.00450", "3", "Leading zeros drop out; the final 0 remains"],
          ["0.0100", "3", "One nonzero digit and two trailing zeros"],
          ["1.5e3", "2", "The coefficient 1.5 has two digits"],
          ["1.500e3", "4", "The coefficient 1.500 keeps two trailing zeros"],
          ["6.022e23", "4", "The exponent does not change 6.022"],
          ["3.00e-8", "3", "The coefficient 3.00 has three digits"],
          ["150", "2 or 3", "The final zero may only hold the tens place"],
          ["80", "1 or 2", "The final zero may only hold the tens place"],
          ["1200", "2, 3, or 4", "Two trailing zeros are undecided"],
          ["1000", "1 to 4", "Three trailing zeros are undecided"],
          ["1000.0", "5", "The decimal point makes the zeros significant"],
          ["0", "1", "A written zero is counted as one figure"],
          ["0.000", "1", "Still zero; three decimal places remain for addition"],
          ["-0.00450", "3", "The minus sign is not a digit"],
        ],
      },
      after:
        "150 written as 1.5 × 10² has two significant figures. 1.50 × 10² has three. 80 is 8 × 10¹ or 8.0 × 10¹. 1200 is 1.2 × 10³, 1.20 × 10³, or 1.200 × 10³. 1000.0 is 1.0000 × 10³, and that form is not ambiguous.",
    },
    {
      id: "rounding",
      heading: "Rounding to Significant Figures",
      paragraphs: [
        "Rounding keeps the number of significant figures you request and uses half up. Look at the first digit you drop. If it is 0, 1, 2, 3, or 4, the last kept digit stays. If it is 5, 6, 7, 8, or 9, the last kept digit increases by 1, away from zero. Digits after that first dropped digit are not a second vote. -1.25 to two significant figures is -1.3.",
        "When the plain whole-number spelling would hide the precision, the result is written in scientific notation. 999 to two significant figures is 1.0 × 10³, copied as 1.0e3, because 1000 could mean anywhere from one to four figures. 1200 to four significant figures is 1.200 × 10³, copied as 1.200e3.",
        "The calculator rounds once, from the exact decimal value of what you typed. It does not pass the number through a binary float first, so 0.004567 to two significant figures is 0.0046.",
      ],
      table: {
        caption: "Rounding examples, using half up",
        headers: ["Number", "Figures requested", "Result", "Copyable form"],
        rows: [
          ["123.456", "3", "123", "123"],
          ["0.004567", "2", "0.0046", "0.0046"],
          ["81.60", "3", "81.6", "81.6"],
          ["999", "2", "1.0 × 10³", "1.0e3"],
          ["1.2345", "4", "1.235", "1.235"],
          ["1200", "4", "1.200 × 10³", "1.200e3"],
          ["-1.2345", "4", "-1.235", "-1.235"],
          ["-999", "2", "-1.0 × 10³", "-1.0e3"],
        ],
      },
    },
    {
      id: "scientific-notation",
      heading: "Significant Figures in Scientific Notation",
      paragraphs: [
        "Scientific notation writes a coefficient with one digit to the left of the decimal point, times a power of ten. The significant figures are the digits in the coefficient. 1.500 × 10³ and 1.500e3 both have four. 1.5e3 has two. Moving the exponent from 3 to 4 would change 1.500e3 into 1.500e4, which is a different value, and it would still have four significant figures.",
        "Negative numbers keep the minus on the coefficient. -0.00450 is -4.50 × 10⁻³, copied as -4.50e-3. A negative exponent, as in 3.00 × 10⁻⁸, does not remove the zeros in 3.00.",
        "Zero is written as 0. An exponent is not added to manufacture extra figures. If the starting number is ambiguous, each possible count gets its own coefficient: 1200 can be 1.2e3, 1.20e3, or 1.200e3.",
      ],
    },
    {
      id: "operations",
      heading: "Significant Figures in Mathematical Operations",
      paragraphs: [
        "Addition and subtraction follow the least precise decimal place. Multiplication and division follow the fewest significant figures. Using one rule for the other changes the answer. The calculator keeps extra digits until the final round, then applies half up once.",
        "An exact number does not limit the result. A counted 12 items, or a defined 100 centimeters in a meter, is exact. This calculator treats every typed number as a measurement, so leave an exact count out of the expression when it should not set the precision. A measured number is still limited by its own decimal places or significant figures.",
      ],
      subsections: [
        {
          heading: "Addition and subtraction",
          body: "12.11 is precise to the hundredths place and 0.3 is precise to the tenths place. The exact sum is 12.41, and the rounded sum is 12.4. The exact difference 12.11 − 0.3 is 11.81, which rounds to 11.8. 1000.0 + 0.1 is 1000.1 because both values reach the tenths place. 12.11 + 150 cannot be rounded to one place: 150 might be precise to the ones place or only to the tens place.",
        },
        {
          heading: "Multiplication and division",
          body: "2.5 has two significant figures and 3.42 has three, so 2.5 × 3.42 is 8.6. 15.0 has three and 4.0 has two, so 15.0 ÷ 4.0 is 3.8. 2.00 ÷ 3.00 is 0.667: both operands have three significant figures, and the repeating digits are held until that final round. Division by 0 or 0.0 is rejected. 150 × 2.00 cannot be given one product, because 150 may have two or three significant figures while 2.00 has three.",
        },
      ],
    },
    {
      id: "mistakes",
      heading: "Common Significant Figures Mistakes",
      paragraphs: [
        "The usual misses are easy to check against the table above.",
      ],
      subsections: [
        {
          heading: "Giving 150, 80, or 1200 one count",
          body: "Those zeros might be significant. They also might only keep the tens or hundreds in the right column. Write 1.50 × 10², 8.0 × 10¹, or 1.200 × 10³ when you know the precision.",
        },
        {
          heading: "Counting leading zeros",
          body: "0.08 is not two significant figures. The zero before 8 is a placeholder. 0.080 is the form that has two.",
        },
        {
          heading: "Dropping zeros in the coefficient",
          body: "1.500e3 is not the same claim as 1.5e3. The first has four significant figures. The second has two.",
        },
        {
          heading: "Mixing the operation rules",
          body: "12.11 + 0.3 is not rounded to two significant figures. The tenths place decides it, and the result is 12.4. 2.5 × 3.42 is not kept to two decimal places. The fewer significant figures decide it, and the result is 8.6.",
        },
        {
          heading: "Rounding in the middle",
          body: "2.00 ÷ 3.00 is 0.666… until the last step. Rounding to 0.67 first, then to three figures, is a different procedure. This calculator rounds once at the end.",
        },
        {
          heading: "Treating an exact count as a measurement",
          body: "Twelve students is exact. It should not cut a measured average down to two significant figures. Leave that exact count out of the expression and let the measured numbers set the limit.",
        },
      ],
    },
  ],
  examples: [
    {
      title: "A length recorded as 81.60, then rounded and multiplied",
      body: "81.60 has four significant figures. Rounded to three, it is 81.6. Multiplied by 2.0, which has two significant figures, 81.6 × 2.0 is 1.6 × 10². The same digits typed as 8160 are ambiguous, with 3 or 4 significant figures. The product 8160 × 2.0 can still be rounded, because 2.0 limits it to two significant figures: 1.6 × 10⁴.",
    },
  ],
  notesHeading: "Limits worth knowing",
  notes: [
    {
      heading: "The page cannot recover a missing bar or decimal",
      body: "Some books put a bar over the last significant zero in 1200. This calculator does not read that bar. Type the scientific notation instead.",
    },
    {
      heading: "Half up is away from zero",
      body: "A dropped 5 increases the last kept digit for positive and negative numbers. -999 to two significant figures is -1.0 × 10³. The page does not use round-half-to-even.",
    },
    {
      heading: "Defined numbers and counted numbers",
      body: "A conversion that is defined, such as 100 centimeters in a meter, is exact. Typed here, it is treated as a measurement and will limit the result. Leave a defined conversion out of the expression when it should not set the precision.",
    },
  ],
  faqs: [
    {
      question: "How many significant figures does 150 have?",
      answer:
        "2 or 3. 150 has no decimal point, so the final zero may be a placeholder. 1.5 × 10² has two significant figures. 1.50 × 10² has three. The calculator lists both and does not choose.",
    },
    {
      question: "How many significant figures does 80 have?",
      answer:
        "1 or 2. 8 × 10¹ has one significant figure. 8.0 × 10¹ has two. The written 80 does not say which one was measured.",
    },
    {
      question: "How many significant figures does 1200 have?",
      answer:
        "2, 3, or 4. The matching scientific forms are 1.2 × 10³, 1.20 × 10³, and 1.200 × 10³. 1000 is the same kind of problem and can have 1 to 4. 1000.0 has 5.",
    },
    {
      question: "How do you round to significant figures?",
      answer:
        "Keep the requested digits and apply half up to the first dropped digit. 123.456 to 3 significant figures is 123. 0.004567 to 2 is 0.0046. 81.60 to 3 is 81.6. 1.2345 to 4 is 1.235. 999 to 2 is 1.0 × 10³. 1200 to 4 is 1.200 × 10³.",
    },
    {
      question: "Do addition and multiplication use the same significant-figure rule?",
      answer:
        "They use different rules. Addition and subtraction keep the least precise decimal place, so 12.11 + 0.3 is 12.4. Multiplication and division keep the fewest significant figures, so 2.5 × 3.42 is 8.6 and 15.0 ÷ 4.0 is 3.8.",
    },
  ],
  cta: {
    before: "Calculate significant figures online with the",
    linkLabel: "Significant Figures Calculator and Counter",
    href: "/tools/significant-figures-calculator",
    after: ". Counting, rounding, scientific notation, and the four operations run in the browser.",
  },
  alsoSee: [
    {
      before: "For a percent of a number, or a percent increase, use the",
      linkLabel: "Percentage Calculator",
      href: "/tools/percentage-calculator",
      after: ".",
    },
    {
      before: "For the mean, median, and mode of a list, use the",
      linkLabel: "Average Calculator",
      href: "/tools/average-calculator",
      after: ".",
    },
    {
      before: "For length, weight, and temperature, use the",
      linkLabel: "Unit Converter",
      href: "/tools/unit-converter",
      after: ".",
    },
    {
      before: "The percent formulas are written out in",
      linkLabel: "How to Calculate Percentage",
      href: "/guides/how-to-calculate-percentage",
      after: ".",
    },
  ],
};
