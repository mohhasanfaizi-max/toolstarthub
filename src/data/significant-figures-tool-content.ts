import type { ToolContent } from "./tool-content.ts";

export const significantFiguresToolContent: ToolContent = {
  about:
    "Count the significant figures in a written number, round it to a precision you choose, convert it to scientific notation, or add, subtract, multiply, and divide under the matching rule. The arithmetic stays in this browser tab. A whole number that ends in zero, such as 150, 80, or 1200, is left as a range instead of a single count.",
  howTo: [
    "Type a number, or an expression that uses +, −, ×, ÷, parentheses, and an integer power such as 2.50^2.",
    "Use EXP when you want a scientific-notation exponent, as in 1.500e3. Decimals and a leading minus are accepted.",
    "Choose 1 through 5, or type a custom precision from 1 to 50, when you want the value rounded. Leave it blank to count a number or to let the operation set the precision.",
    "Press Solve. Read the value, the count or the limiting place, and the explanation. Copy writes the displayed result.",
  ],
  features: [
    "Trailing zeros after a decimal point stay significant, so 1.00 has 3 and 0.080 has 2.",
    "Trailing zeros in a whole number stay ambiguous, with a scientific-notation form for each possible count.",
    "Rounding is half up and shows the precision you asked for, using scientific notation when a plain whole number would hide it.",
    "Addition and subtraction use the least precise decimal place. Multiplication and division use the fewest significant figures.",
  ],
  examples: [
    {
      title: "1.00 and 0.080",
      body: "1.00 has 3 significant figures. 0.08 has 1, and 0.080 has 2 because the last zero follows a decimal point.",
    },
    {
      title: "150, 80, and 1200",
      body: "150 can have 2 or 3 significant figures (1.5e2 or 1.50e2). 80 can have 1 or 2. 1200 can have 2, 3, or 4. The page does not pick one.",
    },
    {
      title: "Rounding and arithmetic",
      body: "123.456 to 3 significant figures is 123. 999 to 2 is 1.0 × 10³. 12.11 + 0.3 is 12.4. 2.5 × 3.42 is 8.6. 15.0 ÷ 4.0 is 3.8.",
    },
  ],
  explanation:
    "The count follows the digits you typed, including zeros that the written form makes significant. Rounding keeps guard digits until the final half-up step. Addition and subtraction are not forced through the multiplication rule.",
  sections: [
    {
      heading: "What the count uses",
      paragraphs: [
        "Nonzero digits are significant. Zeros between nonzero digits are significant, so 1005 has 4 and 10.01 has 4. Leading zeros are placeholders, so 0.08 has 1 and 0.00450 has 3.",
        "Zeros after a decimal point that follow a nonzero digit are significant. 4.0, 2.0, 81.60, 1.00, and 1000.0 use that rule. A written zero such as 0 or 0.000 is counted as 1 significant figure. The decimal places in 0.000 still matter for addition.",
        "The exponent in 1.5e3 or 1.500e3 does not change the coefficient. 1.5e3 has 2 significant figures. 1.500e3 has 4. 6.022e23 has 4. 3.00e-8 has 3.",
      ],
    },
    {
      heading: "Ambiguous whole numbers",
      paragraphs: [
        "150, 80, 1200, and 1000 end in zero and have no decimal point. The final zeros may be measured, or they may only hold a place. 150 is 2 or 3 significant figures. 80 is 1 or 2. 1200 is 2, 3, or 4. 1000 is 1 to 4.",
        "Scientific notation removes the doubt. 1.200e3 has 4 significant figures. 1.20e3 has 3. 1.2e3 has 2. 1000.0 has 5 because the decimal point makes the zeros significant.",
      ],
    },
    {
      heading: "Rounding and the two operation rules",
      paragraphs: [
        "Half up means a first dropped digit of 5 or more increases the last kept digit by 1, away from zero. 1.2345 to 4 significant figures is 1.235. 1.25 to 2 is 1.3, and -1.25 to 2 is -1.3. 999 to 2 is 1.0 × 10³, copied as 1.0e3. 1200 to 4 is 1.200 × 10³.",
        "12.11 + 0.3 is 12.4 because 0.3 stops at the tenths place. 2.5 × 3.42 is 8.6 because 2.5 has fewer significant figures. 15.0 ÷ 4.0 is 3.8. Division by zero is rejected. A counted or defined number is exact. Leave it out of the expression so it does not limit the measured digits.",
      ],
    },
  ],
  tips: [
    "Type 1.500e3 when you mean four significant figures. Typing 1500 leaves the count undecided.",
    "Use the Percentage Calculator for a percent of a number. This page does not convert a result into a percent.",
  ],
  limitations:
    "Every typed number is treated as a measurement. The page cannot know whether the zero in 150 was measured. Precision above 50 significant figures is rejected, and exponents outside -9999 to 9999 are rejected. Integer powers use an exponent from -999 to 999. Logs are not evaluated. Results are the rules on this page, not a lab’s local rounding policy.",
  faqs: [
    {
      question: "Is the Significant Figures Calculator free?",
      answer:
        "Yes. You can count, round, convert, and calculate here without paying or creating an account.",
    },
    {
      question: "How many significant figures does 150 have?",
      answer:
        "It cannot be determined from 150 alone. The count is 2 if the zero only holds the tens place (1.5 × 10²), or 3 if the zero was measured (1.50 × 10²).",
    },
    {
      question: "Why does 1200 not get one count?",
      answer:
        "The trailing zeros have no decimal point, so they may or may not be significant. 1200 can have 2, 3, or 4 significant figures: 1.2e3, 1.20e3, or 1.200e3.",
    },
    {
      question: "How do you round 999 to 2 significant figures?",
      answer:
        "999 to 2 significant figures is 1.0 × 10³. The plain whole number 1000 would hide that precision, so the result stays in scientific notation. The copyable form is 1.0e3.",
    },
    {
      question: "What is 12.11 plus 0.3 with significant figures?",
      answer:
        "12.4. Addition uses the least precise decimal place. 0.3 is precise to the tenths place, and the exact sum 12.41 rounds half up to 12.4.",
    },
    {
      question: "Are these numbers sent to a server?",
      answer:
        "No. The numbers are calculated in this browser tab. Tools Star Hub does not send them to a server or save them in local storage.",
    },
  ],
};
