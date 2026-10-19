import type { ToolContent } from "./tool-content.ts";

/**
 * Longer English explanations for the AdSense priority pages.
 * Worked examples match the tool functions. Locale files are unchanged.
 */
export const priorityToolContent: Record<string, ToolContent> = {
  "percentage-calculator": {
    about:
      "The Percentage Calculator answers three questions: what is X% of Y, what percent X is of Y, and what a number becomes after a percent increase or decrease. Use it for a grade, a share of a total, or a quick price change. A sale price, sales tax, and a tip each have their own calculator, because those jobs start from a price and a rate rather than these three patterns.",
    howTo: [
      "Choose What is X% of Y?, X is what percent of Y?, or Increase or decrease.",
      "Enter the two numbers. For a percent of a number, X is the percent and Y is the number. For “what percent,” X is the part and Y is the whole. For a change, X is the percent and Y is the starting number.",
      "If you chose Increase or decrease, pick Increase or Decrease.",
      "Press Calculate. The large number is the result. The lines under it show the label and the arithmetic. Press Reset to clear the fields.",
    ],
    examples: [
      {
        title: "What is 15% of 80?",
        body: "Choose What is X% of Y? Enter 15 as Percentage (X) and 80 as Number (Y). Calculate shows 12. The detail line is 15 ÷ 100 × 80, and the label is 15% of 80.",
      },
      {
        title: "12 is what percent of 40?",
        body: "Choose X is what percent of Y? Enter 12 as Value (X) and 40 as Whole (Y). Calculate shows 30%. The detail line is 12 ÷ 40 × 100, and the label is 12 is this percent of 40.",
      },
      {
        title: "Increase 200 by 10%",
        body: "Choose Increase or decrease, leave Direction on Increase, and enter 10 as Percent change (X) and 200 as Starting number (Y). Calculate shows 220. It also shows Amount added: 20, and the detail 200 + (10 ÷ 100 × 200).",
      },
    ],
    explanation:
      "A percentage is a number out of 100. “X% of Y” multiplies Y by X ÷ 100. “X is what percent of Y” divides X by Y and multiplies by 100. An increase adds that fraction to the starting number. A decrease subtracts it. The page rounds the arithmetic to 10 decimal places, then shows up to 6 decimal places.",
    sections: [
      {
        heading: "Percentage points and percent are different questions",
        paragraphs: [
          "A rate that moves from 10% to 12% has risen by 2 percentage points. The relative change is 2 ÷ 10 × 100, which is 20%. Both sentences are true, and they are not interchangeable.",
          "This page does not convert one into the other for you. If you already have the gap, use “what percent”: 2 is 20% of 10, so Calculate shows 20%. If you want the new rate after adding 20% of 10, use Increase: 10 increased by 20% shows 12, with 2 added. For two finished values, such as 80 then 100, use the Percentage Change Calculator.",
        ],
      },
      {
        heading: "Discount, tax, and tip use other calculators",
        paragraphs: [
          "A 25% discount on 80 takes 20 off and leaves 60. Decrease mode can do that arithmetic: enter 25 and 80, choose Decrease, and Calculate shows 60, with Amount subtracted: 20. The detail line is 80 − (25 ÷ 100 × 80).",
          "The Discount Calculator is built for a price and a percent off, and it rejects a discount above 100%. The Sales Tax Calculator adds a rate to a price. The Tip Calculator splits a bill by a tip percent and a number of people. Use those pages when the question is a receipt, not a bare percent.",
        ],
      },
      {
        heading: "Zero, order, and symbols",
        paragraphs: [
          "0% of 50 is 0. The detail line is 0 ÷ 100 × 50. Asking what percent 5 is of 0 is rejected. The page says: The second number cannot be 0 when finding a percentage.",
          "The order of the numbers is the question. 15% of 80 is 12, and 80% of 15 is also 12, but 12 is 15% of 80 and 12 is 80% of 15. Those are different “what percent” results. Enter 12 and 80 to see 15%. Enter 12 and 15 to see 80%.",
          "Type plain numbers. A dollar sign or a percent sign in the field is invalid input. Decimals are allowed, so 12.5% of 80 is 10.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "The numbers stay in this browser tab. Calculate runs on the page. The values are not posted to a server and are not written to local storage. If you accept analytics cookies, the visit can be counted. The numbers you type are not part of that measurement.",
        ],
      },
    ],
    tips: [
      "Write the question in one sentence before you pick a mode. “15% of 80” and “15 is what percent of 80” are different jobs.",
      "On an increase or decrease, X is the percent and Y is the starting number. Swapping them applies the percent to the wrong value.",
      "Use Decrease when you want the number left after a percent is taken off. The large result is the new amount. The amount subtracted is a separate line.",
      "Check a round case first. 10% of 50 is 5. If that mental check fails, the mode or the field order is wrong.",
    ],
    limitations:
      "This page only calculates a percent of a number, one number as a percent of another, or a percent increase or decrease. It does not look up a tax rate, and it does not split a tip. Dividing by zero is rejected in the “what percent” mode. A result is the arithmetic of the numbers you enter. It is not financial, tax, or grading advice.",
    faqs: [
      {
        question: "How do I calculate a percentage of a number?",
        answer:
          "Choose What is X% of Y? Put the percent in X and the number in Y, then press Calculate. 15% of 80 is 12, from 15 ÷ 100 × 80.",
      },
      {
        question: "How do I find what percent one number is of another?",
        answer:
          "Choose X is what percent of Y? Put the part in X and the whole in Y. 12 out of 40 is 30%, from 12 ÷ 40 × 100. The whole cannot be 0.",
      },
      {
        question: "How do I increase or decrease a number by a percent?",
        answer:
          "Choose Increase or decrease. Put the percent in X and the starting number in Y, then pick Increase or Decrease. Increasing 200 by 10% shows 220, with 20 added. Decreasing 80 by 25% shows 60, with 20 subtracted.",
      },
      {
        question: "What is the difference between percent and percentage points?",
        answer:
          "Percentage points are a simple subtraction of two rates. From 10% to 12% is 2 percentage points. Percent is the relative change: 2 is 20% of 10. This calculator does not switch those two ideas automatically.",
      },
      {
        question: "What happens if I use 0?",
        answer:
          "0% of a number is 0. Finding what percent a number is of 0 is not possible, so the tool asks for a different second number. The message is: The second number cannot be 0 when finding a percentage.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The numbers you type are calculated in this browser tab. Tools Star Hub does not send those numbers to a server or save them in local storage.",
      },
      {
        question: "Is the Percentage Calculator free?",
        answer:
          "Yes. You can find a percent of a number, what percent one number is of another, or a percent increase or decrease here without paying or creating an account.",
      },
    ],
  },
  "age-calculator": {
    about:
      "The Age Calculator counts whole years, then the remaining months, then the remaining days from a date of birth to today, or to another date you pick. It also shows the total number of days. Use it for a birthday, an anniversary, or the age someone will be on a future day. It follows the calendar, including leap days. It does not divide the day count by 365.",
    howTo: [
      "Enter the date of birth.",
      "Leave the second date empty to use today, or pick another date if you want the age on that day.",
      "Press Calculate. The page shows years, months, days, and total days.",
      "If the second date is earlier than the birthday, the page stops and asks for a later date.",
    ],
    examples: [
      {
        title: "Born 1 January 2000, age on 1 January 2026",
        body: "Enter 2000-01-01 as the date of birth and 2026-01-01 as the other date. Calculate shows 26 years, 0 months, and 0 days. Total days is 9,497. That day count includes the seven leap days from 2000 through 2024. Dividing 9,497 by 365 does not produce this age.",
      },
      {
        title: "A leap-day birthday",
        body: "Enter 2000-02-29 and 2001-02-28. Calculate shows 0 years, 11 months, and 30 days. Total days is 365. The year 2001 is not a leap year, so 29 February is not a date in 2001. The count steps back one month and uses the length of January 2001, which is 31 days.",
      },
      {
        title: "Age on a future date",
        body: "Enter 2010-06-15 and 2030-06-15. Calculate shows 20 years, 0 months, and 0 days. Total days is 7,305. A date before the birthday is rejected with the message: The selected date cannot be before the date of birth.",
      },
    ],
    explanation:
      "Age is counted from the calendar date of birth to the selected date. The tool subtracts years, then months, then days. If the day number goes negative, it borrows the length of the previous month. If the month number goes negative, it borrows a year. Total days is the number of midnights between the two dates in UTC, so a leap day in the span is one extra day.",
    sections: [
      {
        heading: "Why dividing by 365 is a different number",
        paragraphs: [
          "From 1 January 2000 to 1 January 2026 is 9,497 days. 9,497 ÷ 365 is about 26.02, which is not “26 years, 0 months, 0 days.” The calendar age is an anniversary count. The day count is a separate line on the page.",
          "A year in this tool is not 365 days and not 365.25 days. It is the same month and day in a later year, adjusted when that day does not exist. That is why a 29 February birthday does not turn one year old on 28 February of the next year.",
        ],
      },
      {
        heading: "How a short month is borrowed",
        paragraphs: [
          "If the “as of” day is earlier in the month than the birth day, the tool takes one month back and adds the number of days in the previous month. January borrows December of the previous year, which has 31 days.",
          "An impossible date, such as 31 April or 29 February 2001, is rejected before any age is shown. The birthday field must be a real calendar date.",
        ],
      },
      {
        heading: "What this count is not",
        paragraphs: [
          "The result is calendar arithmetic. It is not a medical age, and it is not a legal age for a contract, a license, or a benefit. Those rules sometimes count the birthday itself in a special way. This page does not.",
          "Leaving the second date empty uses the date in your browser, based on the device clock. Changing the clock changes “today.” A date you type is used as you typed it.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Both dates stay in this tab. The count does not send them to a server and does not write them to local storage. Analytics, if you accept it, can record that the page was opened. It does not receive the dates.",
        ],
      },
    ],
    tips: [
      "Use the second date when you need an age on a birthday, a future appointment, or a past anniversary. Empty means today.",
      "For someone born on 29 February, pick a real date in a non-leap year, such as 28 February or 1 March. The page will not invent 29 February 2001.",
      "Read years, months, and days together. The total-days line is the length of the span, not a second age.",
      "If the result looks a month off, check which date is the birthday. A reversed pair is rejected when the second date is earlier, and it is a different age when both dates are valid.",
    ],
    limitations:
      "The count runs from the birth date to today, or to another date you choose. A date earlier than the birthday is rejected. Impossible calendar dates are rejected. This is calendar arithmetic, not a medical age or a legal age for a contract.",
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer:
          "Enter your date of birth and press Calculate. The page counts full years, then full months since the last birthday month, then the remaining days. It also shows total days. Leaving the second date empty uses today.",
      },
      {
        question: "How is age counted for someone born on February 29?",
        answer:
          "The count follows the real calendar. From 29 February 2000 to 28 February 2001 the result is 0 years, 11 months, and 30 days, and the total is 365 days. The tool does not treat every year as 365 days.",
      },
      {
        question: "Can I calculate age on a future date?",
        answer:
          "Yes, as long as that date is not before the date of birth. From 15 June 2010 to 15 June 2030 the result is 20 years, 0 months, and 0 days, with 7,305 total days.",
      },
      {
        question: "Why is the total days not years times 365?",
        answer:
          "Total days includes leap days that fall inside the span. From 1 January 2000 to 1 January 2026 the calendar age is 26 years, 0 months, and 0 days, and the total is 9,497 days. Dividing that total by 365 is a different calculation.",
      },
      {
        question: "What if the second date is before the birthday?",
        answer:
          "The page rejects it. The message is: The selected date cannot be before the date of birth.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The dates stay in this tab while the age is counted. They are not sent to a server or written to local storage.",
      },
    ],
  },
  "word-counter": {
    about:
      "The Word Counter shows words, characters, characters without spaces, sentences, paragraphs, and a reading time for text you paste or type. The totals update as you type. Use it for a caption, an abstract, a short post, or a draft with a word cap. Reading time is an estimate from the word count. The page does not check grammar, and it does not decide who wrote the text.",
    howTo: [
      "Paste or type text in the box. The counts update on each change.",
      "Read Words, Characters, Characters without spaces, Sentences, Paragraphs, and Reading time.",
      "Use Sample text to load a short example, Clear to empty the box, or Copy text to copy what you wrote.",
    ],
    examples: [
      {
        title: "Hello world.",
        body: "That line is 2 words, 12 characters, 11 characters without spaces, 1 sentence, 1 paragraph, and 1 line. Reading time shows 1 min. Any non-empty text under 226 words shows at least 1 min, because the page rounds up and does not show a fraction of a minute.",
      },
      {
        title: "Spaces, a blank line, and an emoji",
        body: "hello   world is still 2 words. It is 13 characters and 10 characters without spaces, because the extra spaces count as characters and not as words. One. followed by a blank line and Two. is 2 words, 2 sentences, 2 paragraphs, and 3 lines. The blank line is a line. A😀 is 2 characters and 1 word. The emoji is one Unicode code point.",
      },
      {
        title: "A joined emoji and a longer sentence",
        body: "The family emoji 👨‍👩‍👧 is 1 word and 5 characters, because it is five code points joined together. Hello. How are you? Fine! is 5 words and 3 sentences. Reading time for all of these short samples is 1 min. At 225 words the reading time is still 1 min. At 226 words it becomes 2 min.",
      },
    ],
    explanation:
      "Words are groups of non-space characters, so repeated spaces do not create extra words. Characters are Unicode code points. Sentences split on . ! ? and …, and a final chunk with no ending mark still counts as a sentence. Paragraphs are non-empty blocks separated by one or more line breaks. Lines follow every line break, including a blank line. Reading time is 0 min when there are no words. Otherwise it is the word count divided by 225, rounded up, and never less than 1 minute.",
    sections: [
      {
        heading: "What counts as a word",
        paragraphs: [
          "A word is a run of characters that are not spaces, tabs, or line breaks. Hyphenated words stay one word. A number such as 2026 is one word. Punctuation stuck to a word, as in world., stays inside that word.",
          "Text with no spaces between words is one word, even if a person would split it. That includes many sentences in Japanese, Chinese, and similar writing. The character count is still useful there. The word count is not a linguistic analysis.",
        ],
      },
      {
        heading: "Sentences, paragraphs, and the sample",
        paragraphs: [
          "Hello. How are you? Fine! is three sentences because each of . ? and ! ends one. An ellipsis character … also ends a sentence. A line with no punctuation is still one sentence if it contains any non-space character.",
          "Paragraphs ignore empty blocks. Two pieces of text with a blank line between them are two paragraphs. The line count still includes that blank line, which is why One. and Two. with a blank line between them is 3 lines and 2 paragraphs.",
          "Sample text loads a fixed note that starts “Tools Star Hub counts words in your browser.” It is only a demonstration. Clear removes it.",
        ],
      },
      {
        heading: "How to read the reading-time line",
        paragraphs: [
          "The page does not measure how fast you read. It divides the word count by 225 and rounds up to a whole minute, with a minimum of 1 minute when there is at least one word. 225 words is 1 min. 226 words is 2 min. An empty box is 0 min.",
          "A speech is often slower than silent reading. This page does not apply a speaking rate. If you need a 5-minute talk, multiply your own pace by 5 and compare that target with the word count. The tool will not do that multiplication.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Counting runs in the browser. The text is not sent to Tools Star Hub and is not stored in local storage. Copy uses the browser clipboard only after you press Copy text. Analytics, if you accept it, can count the page visit. It does not receive the text in the box.",
        ],
      },
    ],
    tips: [
      "Use Characters without spaces when a form says spaces do not count. The main Characters total includes spaces.",
      "Do not treat Reading time as a timer. It jumps from 1 min to 2 min at 226 words.",
      "A joined emoji can count as several characters. Check the Characters total if a platform limit is strict.",
      "The counter does not remove duplicate lines, change case, or fix spelling. Other text tools on this site do those jobs.",
    ],
    limitations:
      "Words are groups of non-space characters, and sentences split on . ! ? and …. Reading time assumes about 225 words per minute, rounded up to a whole minute, with a minimum of 1 minute when the box is not empty of words. That is an estimate, not a measured reading speed. The counter does not check grammar or identify an author. Writing without spaces between words will not be split into dictionary words.",
    faqs: [
      {
        question: "How are words counted?",
        answer:
          "A word is a group of characters that are not spaces. hello   world is 2 words. Repeated spaces do not add words. They do count in the Characters total.",
      },
      {
        question: "How many characters is an emoji?",
        answer:
          "Characters are Unicode code points. A😀 is 2 characters: one letter and one emoji. The family emoji 👨‍👩‍👧 is 5 characters and 1 word, because it is five code points.",
      },
      {
        question: "How are sentences and paragraphs split?",
        answer:
          "Sentences end on . ! ? or …. Hello. How are you? Fine! is 3 sentences and 5 words. Paragraphs are non-empty blocks separated by line breaks. A blank line between One. and Two. makes 2 paragraphs and 3 lines.",
      },
      {
        question: "How is reading time estimated?",
        answer:
          "The word count is divided by 225 and rounded up to a whole minute. Empty text is 0 min. Any text with at least one word shows at least 1 min. 225 words is 1 min, and 226 words is 2 min. It is an estimate, not a measured speed.",
      },
      {
        question: "Is my text uploaded?",
        answer:
          "No. Counting runs in your browser. The text is not sent to Tools Star Hub or stored.",
      },
      {
        question: "Is the Word Counter free?",
        answer:
          "Yes. Counting words, characters, sentences, and paragraphs in text you paste is free, and you do not need an account.",
      },
    ],
  },
  "json-formatter": {
    about:
      "The JSON Formatter pretty-prints JSON, minifies it, or checks that it parses. Use it when an API response is one long line, or when a file fails and you need the parser’s position. The page uses the browser’s JSON parser. Comments, trailing commas, and single quotes fail. This page does not convert JSON to CSV.",
    howTo: [
      "Paste JSON into the input box.",
      "Press Format to pretty-print with two-space indentation, Minify to remove extra spaces, or Validate to check the syntax without rewriting it.",
      "Copy the result, or Clear to empty both boxes.",
    ],
    examples: [
      {
        title: "A small object, formatted and minified",
        body: "Format turns {\"name\":\"Ada\",\"id\":1} into a four-line object: an opening brace, then \"name\": \"Ada\", then \"id\": 1, then a closing brace, with two spaces of indentation. Minify of that pretty form returns {\"name\":\"Ada\",\"id\":1}. Validate of the same input says: This JSON is valid. The keys and values do not change.",
      },
      {
        title: "A trailing comma",
        body: "The input {\"a\":1,} does not format. The page reports Invalid JSON at position 7, then the browser’s parser message. Position 7 is the character after the comma, where a property name would have to start. Delete the comma before the closing brace.",
      },
      {
        title: "A comment and single quotes",
        body: "{\"a\":1} // no fails at position 8, which is the slash after the object. {'a':1} fails at position 1, because a JSON key must use double quotes. The page does not strip comments or convert quotes. Fix the text, then Format again.",
      },
    ],
    explanation:
      "JSON is text for objects, arrays, strings, numbers, true, false, and null. Format and Minify both parse the text and then stringify it again. Format uses two-space indentation. Minify uses no extra space. Validate only parses, and on success it shows the sentence This JSON is valid. An empty box says: Paste JSON to format, minify or validate. A document longer than 750,000 characters is rejected before parsing.",
    sections: [
      {
        heading: "What the parser accepts",
        paragraphs: [
          "Keys and strings use double quotes. Numbers are plain digits, with an optional fraction or exponent. Trailing commas are not allowed after the last item in an object or an array. Comments, including // and /* */, are not part of JSON.",
          "Single quotes are a JavaScript habit, not JSON. {'a':1} fails. Undefined and functions are not JSON values. A trailing comma in a hand-written file is the most common reason Format fails on an otherwise familiar object.",
        ],
      },
      {
        heading: "Pretty print versus minify",
        paragraphs: [
          "Pretty print adds line breaks and indentation so a person can see the structure. Minify removes that whitespace so the text is shorter to paste. The data is the same if both operations succeed.",
          "Stringify can change the spelling of a number that JavaScript cannot store exactly, and it drops undefined object values if they appear after a successful parse of a larger script you converted by hand. Standard JSON numbers and strings round-trip. The page does not sort keys.",
        ],
      },
      {
        heading: "How to use the error position",
        paragraphs: [
          "When the browser reports a position, the message starts with Invalid JSON at position, then the parser text. Count from the start of the pasted text, starting at 0 in the usual parser message, and look at that character. Position 7 in {\"a\":1,} is the spot after the comma.",
          "If the message has no position, the page still says Invalid JSON and includes the parser text. The box is not rewritten when parsing fails. The previous output stays until a later success, so read the error before you trust the output box.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Parsing and formatting happen in your browser. The JSON is not uploaded to Tools Star Hub and is not saved in local storage. Do not paste secrets you would not want in the page’s memory while the tab is open. Closing the tab or pressing Clear drops the text from the page.",
        ],
      },
    ],
    tips: [
      "Validate first when you only need a yes or no. Format when you need to read the structure. Minify when you need a single line.",
      "Look one character left of the reported position. A trailing comma points at the next character, not at the comma itself.",
      "Replace single quotes with double quotes yourself. The tool will not guess which quotes are keys.",
      "For a CSV file, use the JSON to CSV tool after the JSON is valid. This page stops at formatting.",
    ],
    limitations:
      "Standard JSON is required: double quotes, no comments, and no trailing commas. A document longer than 750,000 characters is rejected. This formatter does not turn JSON into CSV and does not load a URL. The error text comes from the browser’s parser, so the wording after the position can vary slightly by browser. The position number is the one the parser reports.",
    faqs: [
      {
        question: "How do I format JSON?",
        answer:
          "Paste the JSON and press Format. {\"name\":\"Ada\",\"id\":1} becomes a two-space indented object with name and id on their own lines. The values stay Ada and 1.",
      },
      {
        question: "What is the difference between formatting and minifying JSON?",
        answer:
          "Format adds line breaks and two-space indentation. Minify removes that whitespace. Minify of the pretty Ada object returns {\"name\":\"Ada\",\"id\":1}. The data is the same.",
      },
      {
        question: "Why did formatting fail?",
        answer:
          "JSON must use double quotes, and it cannot include trailing commas or comments. {\"a\":1,} is reported as invalid JSON at position 7. A // comment after an object fails at the slash. {'a':1} fails at position 1.",
      },
      {
        question: "What does Validate do?",
        answer:
          "Validate parses the text and, if it succeeds, shows: This JSON is valid. It does not pretty-print or minify. An empty box asks you to paste JSON.",
      },
      {
        question: "Is there a size limit?",
        answer:
          "Yes. Text longer than 750,000 characters is rejected with a message that it is too large to process in the browser. Split the document and format a smaller piece.",
      },
      {
        question: "Is my JSON uploaded?",
        answer:
          "No. Parsing and formatting happen in your browser.",
      },
    ],
  },
  "qr-code-generator": {
    about:
      "The QR Code Generator builds a QR code PNG from plain text or a URL, up to 1,200 characters. Use it for a short link or a short note you want someone to scan. The text is stored in the pattern itself. There is no redirect service. Wi-Fi, email, phone, SMS, and contact layouts are on QR Code Generator Pro. A long string makes a denser code, and some cameras miss those.",
    howTo: [
      "Paste text or a full URL. Include https:// when it is a web link. The page trims spaces at the ends.",
      "Press Generate. A preview appears, 320 pixels wide, with a dark pattern on a white background.",
      "Download the PNG. Press Reset if you need a different code. An empty box, or more than 1,200 characters, shows an error and clears the preview.",
    ],
    examples: [
      {
        title: "A short website",
        body: "Enter https://example.com and press Generate. The page trims any spaces around it and encodes that exact address. A phone that scans the PNG opens that URL if the camera treats it as a link. The code is a PNG with error correction level M, a quiet margin of 2 modules, and a width of 320 pixels. The dark color is #0b1f3a and the light color is #ffffff.",
      },
      {
        title: "Plain text",
        body: "Enter a short sentence, such as Meet at the north door. Generate encodes those characters, not a web page. Scanners usually show the text instead of opening a browser. The same 1,200 character cap applies. Empty text, including a box of only spaces, fails with: Enter text or a URL to encode.",
      },
      {
        title: "A string that is too long",
        body: "1,200 characters is accepted. 1,201 characters is rejected before a code is drawn. The message is: Keep QR content to 1200 characters so the code stays readable. Shorten the text, or put the long text on a page and encode that page’s URL instead.",
      },
    ],
    explanation:
      "A QR code is a matrix of dark and light modules. This page builds it in the browser with a client-side library. Generate does not send the text to a QR service. Error correction level M can recover a modest amount of damage. It does not make a tiny or low-contrast print reliable. The download is a PNG of the preview.",
    sections: [
      {
        heading: "Why a long code is harder to scan",
        paragraphs: [
          "More characters mean more modules in the same 320 pixel image, so each module is smaller. Level M spends some of those modules on recovery data. A short URL stays coarse and is easier for a phone camera.",
          "Print the PNG large enough that the modules stay sharp. A blurry screenshot, a colored background, or a logo on top of this basic code can make it fail. This page does not add a logo or change the colors.",
        ],
      },
      {
        heading: "What belongs on QR Code Generator Pro",
        paragraphs: [
          "This page encodes the characters you paste and nothing else. It does not build a Wi-Fi setup string, a mailto link, an SMS body, or a contact card for you.",
          "QR Code Generator Pro has those layouts, and it can change colors. If you only have a URL or a sentence, stay on this page. If you paste a Wi-Fi string you already wrote, this page will encode that string as text. It will not check that the network exists.",
        ],
      },
      {
        heading: "The code does not expire here",
        paragraphs: [
          "There is no account and no short-link server behind the PNG. The pattern keeps working for as long as a scanner can read it and, for a URL, for as long as that address still responds. If you change the page at that address, the old code still points at the same address.",
          "Test with a phone before you print a stack of labels. The preview on this page is not a scan test.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "The text stays in this tab. Generate does not upload it. The PNG is created locally and downloaded to your device. Do not encode a password you would not want on a printed page. Anyone who scans the code can read the text.",
        ],
      },
    ],
    tips: [
      "Include https:// on web links. A bare domain may be shown as text instead of opened as a site.",
      "Prefer a short URL over a long paragraph. Density, not the 1,200 cap alone, is what makes cameras fail.",
      "Leave the quiet margin. The generator already adds a margin of 2 modules. Cropping the PNG can remove it.",
      "Use the scanner on this site, or your phone camera, before you publish the image.",
    ],
    limitations:
      "Plain text or a URL is encoded, and the text must be 1,200 characters or shorter after trimming. An empty value is rejected. Wi-Fi, email, phone, SMS, and contact layouts are on QR Code Generator Pro. The image is a 320 pixel PNG at error correction level M. A long string makes a dense pattern that some cameras miss. The page does not track scans.",
    faqs: [
      {
        question: "How do I make a QR code for a website?",
        answer:
          "Paste the full address, including https://, press Generate, and download the PNG. https://example.com is encoded as that URL. Test it with a phone camera before you print it.",
      },
      {
        question: "How long can the text be?",
        answer:
          "Up to 1,200 characters after spaces at the ends are removed. 1,201 characters shows: Keep QR content to 1200 characters so the code stays readable. An empty box says: Enter text or a URL to encode.",
      },
      {
        question: "Do QR codes made here expire?",
        answer:
          "No. The text or link is stored in the pattern, with no redirect service in between. A URL works for as long as that address works. This site does not track scans.",
      },
      {
        question: "Can I make a Wi-Fi or contact code here?",
        answer:
          "Not with a form for those fields. Use QR Code Generator Pro for Wi-Fi, email, phone, SMS, and contacts. This page encodes the characters you paste.",
      },
      {
        question: "Is the text uploaded?",
        answer:
          "No. The QR code is generated in your browser. The text is not sent to a server.",
      },
      {
        question: "Will every scanner read the PNG?",
        answer:
          "Most cameras can read a high-contrast PNG of a short URL. The image is 320 pixels wide, with error correction level M. Tiny prints, low light, or very long text can fail.",
      },
    ],
  },
  "image-compressor": {
    about:
      "The Image Compressor re-encodes a JPG, PNG, or WebP in your browser. Set a quality from 10 to 100, pick an output format, and compare the file size the page reports after you press Compress. Use it before you attach a photo to an email or a page. PNG output is lossless in this tool, so a flat graphic may barely shrink. Compressing a JPEG again can add artifacts.",
    howTo: [
      "Choose a JPG, PNG, or WebP, or drag it onto the box. The limit is 25 MB, and neither side can exceed 8,192 pixels.",
      "Set quality from 10 to 100. The control starts at 80. Quality changes JPEG and WebP. It does not change PNG encoding on this page.",
      "Choose JPG, PNG, or WebP as the output, then press Compress.",
      "Read the original size and the new size on the page, then download the result. Reset clears the image from this tab.",
    ],
    examples: [
      {
        title: "A photo saved as JPEG at quality 80",
        body: "Open a camera JPEG and leave quality at 80, which is the starting value. Choose JPG and press Compress. The browser draws the picture and encodes JPEG at 0.80. The page then shows the original file size and the new file size for that image. Those two numbers come from your file. This explanation does not publish a sample size, because a different photo produces a different result.",
      },
      {
        title: "A screenshot that should stay PNG",
        body: "A screenshot is often a PNG of flat color and sharp text. Re-encoding it as PNG on this page is lossless, and the quality slider does not change that encoding, so the file may not get smaller. Converting that same screenshot to JPEG at quality 80 throws away detail. Text edges and flat areas can pick up blocks. If you need the letters to stay crisp, keep PNG, or resize the image first on the Image Resizer.",
      },
      {
        title: "A file the page will not open",
        body: "GIF, HEIC, and SVG are rejected. A file over 25 MB is rejected so the tab stays responsive. A side longer than 8,192 pixels is rejected. Quality below 10 or above 100 is rejected. Convert those files to JPG, PNG, or WebP in another tool first, or export a smaller image.",
      },
    ],
    explanation:
      "Compression runs in the browser with the canvas. The image is drawn, then encoded to the format you chose. JPEG and WebP receive a quality value from 0.10 to 1.00, which is the slider divided by 100. PNG is encoded without that quality argument, so the slider does not make a lossy PNG. JPEG and WebP output are filled on a white background first, which matters for a PNG that had transparency.",
    sections: [
      {
        heading: "Quality is not a file-size dial for every format",
        paragraphs: [
          "Lower quality usually makes a smaller JPEG or WebP, and it also removes more detail. Quality 80 is a reasonable start for a photo. Step down toward 70 or 60 only after you look at the preview. Quality 10 is the lowest the page allows, and it is visibly harsh on most photos.",
          "PNG on this page does not use the slider. A logo or a UI screenshot can stay large after a PNG re-encode. That is expected. This is not a palette reducer such as a specialized PNG optimizer. If size matters more than sharp text, switch the output to JPEG or WebP and accept the loss.",
        ],
      },
      {
        heading: "What each format throws away",
        paragraphs: [
          "JPEG is lossy. Repeating JPEG compression on an already compressed photo adds artifacts, even at a high quality. WebP at the same slider setting is also lossy here. Neither format keeps a transparent background on this page, because the canvas is filled white before those encodings.",
          "PNG output is lossless relative to the pixels drawn on the canvas. It still will not recover detail a JPEG already lost. Starting from a JPEG and saving PNG makes a larger file of the same soft picture. It does not restore the original camera file.",
        ],
      },
      {
        heading: "Resize before you chase a tiny file",
        paragraphs: [
          "A 4000 pixel photo stays 4000 pixels after compression. The byte count falls because the encoding is harsher, not because the pixel dimensions changed. If the picture will be shown at 1200 pixels, resize it first, then compress. The Image Resizer on this site changes width and height. This page does not.",
          "After Compress, use the sizes the page prints for your file. A before-and-after from someone else’s photo is not a prediction of yours.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "The file is read and re-encoded in this tab. It is not sent to Tools Star Hub. Reset and leaving the page drop the preview. Analytics, if you accept it, does not receive the image.",
        ],
      },
    ],
    tips: [
      "Start at quality 80 for a JPEG photo, look at the preview, then lower the slider only if the file is still too large.",
      "Keep screenshots and logos as PNG when the text must stay sharp. Do not force them to JPEG just to see a smaller number.",
      "Expect a second JPEG pass to look worse than the first, even if the new file is smaller.",
      "Check transparency. JPEG and WebP output on this page sit on white.",
    ],
    limitations:
      "GIF, HEIC, and SVG files are rejected. An image must be 25 MB or smaller, and neither side can exceed 8,192 pixels. Quality must be from 10 to 100. PNG is re-encoded without a lossy quality control, so a flat graphic may barely shrink. JPEG and WebP are lossy, and compressing a JPEG again can add artifacts. The page shows the resulting file size after you compress. It does not promise a target size in advance.",
    faqs: [
      {
        question: "How do I compress a JPEG?",
        answer:
          "Open the JPG, set quality between 10 and 100, choose JPG, and press Compress. The control starts at 80, which encodes at 0.80. The page shows the new file size for that image.",
      },
      {
        question: "Why did my PNG barely shrink?",
        answer:
          "PNG output on this page is lossless, and the quality slider does not change that encoding. Flat screenshots and simple graphics may stay almost the same size. Choose JPEG or WebP if you can accept some loss of detail.",
      },
      {
        question: "Should I turn a screenshot into a JPEG?",
        answer:
          "Only if a smaller file matters more than sharp text. JPEG at quality 80 can block around letters and flat colors. Keep PNG when the edges need to stay clean.",
      },
      {
        question: "Which files are rejected?",
        answer:
          "GIF, HEIC, and SVG are not opened. Files over 25 MB are rejected, and so is any side longer than 8,192 pixels. Quality outside 10 to 100 is rejected.",
      },
      {
        question: "Is my image uploaded?",
        answer:
          "No. The JPG, PNG, or WebP is re-encoded in this tab at the quality you set. The file is not sent to Tools Star Hub.",
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes. You can open this page on a phone or tablet. File pickers and downloads use the browser on your device. Large files may be slower on a small phone than on a desktop.",
      },
    ],
  },
  "pdf-to-jpg": {
    about:
      "PDF to JPG turns PDF pages into JPEG images in your browser. You can export the first page, the pages you tick, or every page. Use it for a cover thumbnail or a set of page pictures. The download is JPEG only. A password-protected file will not open. Rendering stops at 20 MB, 40 pages, and a longest edge of 4,096 pixels.",
    howTo: [
      "Upload a PDF from your device. The file stays in this browser tab.",
      "Check the file name, size, and page count. Thumbnail previews appear for the first 12 pages. Later pages can still be converted.",
      "Choose first page, selected pages, or all pages. Set JPG quality if you need a smaller or sharper image. The control starts at 80.",
      "Press Convert, then download one page or the generated JPG files. Each file is named from the PDF name plus the page number, such as notes-page-1.jpg.",
    ],
    examples: [
      {
        title: "A 3-page file, all pages",
        body: "Open a 3-page PDF and choose all pages. Convert draws three JPEGs, one per page, named with -page-1, -page-2, and -page-3. The render scale starts at 1.5. A US Letter page is 612 by 792 points. At 1.5× that is 918 by 1,188 pixels. The longest edge, 1,188, is under the 4,096 pixel cap, so the scale stays 1.5. Quality 80 encodes each JPEG at 0.80.",
      },
      {
        title: "First page only",
        body: "Choose first page. The tool renders page 1 and skips the rest, which uses less memory than converting every page. The thumbnail strip still shows up to the first 12 pages so you can see the cover. The download is one JPEG.",
      },
      {
        title: "A locked file or a file that is too big",
        body: "A password-protected PDF stops with: This PDF is password-protected. This tool cannot open locked files. Unlock it in a PDF reader, then convert the unlocked copy. A file over 20 MB is rejected. A PDF with more than 40 pages is rejected with a message to split it first. A page that would exceed 4,096 pixels on the long side at 1.5× is scaled down so the long side stays at 4,096.",
      },
    ],
    explanation:
      "Pages are rendered locally with PDF.js, drawn to a canvas, and saved as JPEG. There is no upload to a conversion API. The requested scale is 1.5. If the longest side at that scale would pass 4,096 pixels, the scale is reduced so the longest side is 4,096. JPG quality is the slider divided by 100. Unselected pages are not drawn.",
    sections: [
      {
        heading: "What you get is a picture of the page",
        paragraphs: [
          "The JPEG is a snapshot of the painted page. Text in that picture is not a text layer. You cannot select a sentence in the JPG the way you can in the PDF. If you need the words, use PDF to Text on a file that actually contains text.",
          "A scanned page is already a picture inside the PDF. Converting it makes another picture. It does not sharpen a blurry scan, and it does not run optical character recognition. Image to text is a different tool.",
        ],
      },
      {
        heading: "Which pages are exported",
        paragraphs: [
          "First page exports page 1 only. All pages exports every page, up to the 40 page cap. Selected pages exports the boxes you tick. If none of the selected numbers exist, the page says: Select at least one page.",
          "Thumbnails are drawn for the first 12 pages at a smaller scale so you can choose. If the PDF has more pages, the note under the strip says you can still convert later pages. You do not need a thumbnail to include a later page in the selection.",
        ],
      },
      {
        heading: "Quality, memory, and page size",
        paragraphs: [
          "Quality starts at 80. Lower values usually make a smaller JPEG and a softer picture. Higher values keep more detail and usually make a larger file. The page does not predict the byte size before Convert finishes.",
          "Rendering many large pages can exhaust memory and freeze the tab. That is why the caps are 20 MB and 40 pages. Split a larger PDF with the PDF Splitter, then convert a smaller file. A huge page is scaled down instead of being drawn past 4,096 pixels on the long side.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "The PDF is opened in this tab. Selected pages are rendered to JPEG here. The file is not sent to Tools Star Hub. Downloads stay on your device. Analytics, if you accept it, does not receive the PDF or the images.",
        ],
      },
    ],
    tips: [
      "Convert the first page when you only need a cover. It is faster than rendering the whole file.",
      "For a standard letter page, expect 918 by 1,188 pixels at the default scale. Other page sizes scale from their own point size.",
      "Unlock a password-protected PDF before you open it here. This tool has no password field.",
      "If you need words, not a picture, switch to PDF to Text. A JPEG will not give you a selectable paragraph.",
    ],
    limitations:
      "The download is JPEG, not PNG. A password-protected file will not open. Rendering stops at 20 MB, 40 pages, and a longest edge of 4,096 pixels. The requested scale is 1.5 and is reduced when a page would exceed that edge. Pages you leave unselected are not drawn. Thumbnails cover the first 12 pages. The result is a picture of the page, not extracted text.",
    faqs: [
      {
        question: "How do I convert a 3-page PDF to JPG?",
        answer:
          "Upload the PDF, choose all pages, and press Convert. You get three JPEG files, one per page. A US Letter page at the 1.5 scale is 918 by 1,188 pixels. Quality starts at 80.",
      },
      {
        question: "Can I convert only some pages?",
        answer:
          "Yes. Choose first page for page 1, or selected pages and tick the ones you need. Unselected pages are not drawn. Previews show the first 12 pages. Later pages can still be converted.",
      },
      {
        question: "Can I open a password-protected PDF?",
        answer:
          "No. The message is: This PDF is password-protected. This tool cannot open locked files. Unlock the file in a PDF reader, then convert the unlocked copy.",
      },
      {
        question: "Why is there a page or size limit?",
        answer:
          "Rendering many large pages can exhaust memory. This tool stops at 20 MB and 40 pages. The longest edge of an image is capped at 4,096 pixels. Split a larger PDF first.",
      },
      {
        question: "Does this extract the text?",
        answer:
          "No. Each page becomes a JPEG picture. Text in that picture is not selectable. Use PDF to Text when you need the words from a PDF that contains a text layer.",
      },
      {
        question: "Is the PDF uploaded?",
        answer:
          "No. Selected pages are rendered to JPEG in this tab. The PDF is not sent anywhere.",
      },
    ],
  },
};
