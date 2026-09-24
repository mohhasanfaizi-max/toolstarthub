import type { ToolContent } from "./tool-content.ts";

const local = {
  question: "Is my input sent to a server?",
  answer: "No. The calculation or conversion runs in your browser. The values you type are not uploaded.",
};

export const nextToolContent: Record<string, ToolContent> = {
  "tip-calculator": {
    about:
      "Enter the bill, the tip rate, and how many people are paying. The page shows the tip, the total, and each person's share of both.",
    howTo: [
      "Type the bill amount. A bill of 0 is allowed. A negative bill is not.",
      "Pick 10%, 15%, 18%, 20%, or 25%, or type another rate.",
      "Enter a whole number of people, at least 1.",
      "Press Calculate. Copy the four lines if you want to paste them into a message.",
    ],
    features: [
      "Five common tip rates, plus a custom percentage.",
      "Tip amount, total bill, tip per person, and total per person.",
      "Amounts are rounded to two decimal places.",
    ],
    examples: [
      {
        title: "A $84 dinner for two",
        body: "Bill 84, tip 18%, people 2. The tip is 15.12, the total is 99.12, and each person pays 49.56, of which 7.56 is tip.",
      },
      {
        title: "One person, no tip",
        body: "Bill 12.50, tip 0%, people 1. The tip is 0 and the total stays 12.50. Use this when the bill already includes a service charge you do not want to add again.",
      },
    ],
    explanation:
      "Tip amount is the bill times the percentage. The total is the bill plus that tip. Both are divided by the number of people. The labels do not add a currency symbol, so the same numbers work for dollars, euros, or another unit.",
    tips: [
      "If the receipt already shows a suggested tip, use that percentage instead of guessing.",
      "Round the per-person total up to the next coin only if your group agrees. This page does not round to cash.",
    ],
    limitations:
      "This does not know local tipping customs, tax already included in the bill, or a separate service charge. Enter the amount you actually want to tip on.",
    faqs: [
      {
        question: "Can I split an uneven bill?",
        answer: "The split is equal. If one person ordered more, calculate their share of the bill first, then run the tip on that amount.",
      },
      {
        question: "What happens if I leave the bill blank?",
        answer: "The page asks for a bill amount. It does not treat a blank field as zero.",
      },
      local,
    ],
  },
  "sales-tax-calculator": {
    about:
      "Add a sales tax rate to a price. You get the tax amount and the price after tax. The labels stay the same for any currency.",
    howTo: [
      "Enter the original price. It must be zero or greater.",
      "Enter the sales tax percentage. A rate of 0 is valid. A negative rate is not.",
      "Press Calculate.",
      "Copy the tax amount and the final price if you need them elsewhere.",
    ],
    features: [
      "Tax amount and final price, rounded to two decimal places.",
      "No currency symbol, so you can use the numbers with any unit.",
      "A rate above 100% is allowed, because some stacked taxes work that way.",
    ],
    examples: [
      {
        title: "An 8% rate on 49.99",
        body: "Tax amount is 4.00 after rounding to cents. Final price is 53.99.",
      },
      {
        title: "A tax-free item",
        body: "Price 20, rate 0%. Tax amount is 0 and the final price stays 20.",
      },
    ],
    explanation:
      "Tax amount is the original price times the rate divided by 100. Final price is the original price plus that tax. Rounding happens at two decimal places, which matches typical cash amounts but can differ by a cent from a register that rounds each line differently.",
    tips: [
      "If the price you have is already tax-inclusive, this tool will add tax again. Start from the pre-tax price.",
      "For a discount and then tax, run the discount calculator first and use that result as the original price.",
    ],
    limitations:
      "This does not look up a city, state, or country rate. You supply the percentage. It also does not split tax across several items.",
    faqs: [
      {
        question: "Why is there no dollar sign?",
        answer: "The same math applies to any currency. Adding a symbol would be wrong for many readers.",
      },
      {
        question: "Can the rate be 0?",
        answer: "Yes. The tax amount is 0 and the final price equals the original price.",
      },
      local,
    ],
  },
  "date-difference-calculator": {
    about:
      "Pick a start date and an end date. You get the number of days, how that breaks into weeks and leftover days, and a calendar span in years, months, and days.",
    howTo: [
      "Choose the start date and the end date.",
      "Press Calculate.",
      "Read the total days first when you need an exact count.",
      "Use the years, months, and days line when you want a calendar description.",
    ],
    features: [
      "Exact day count, including a same-day result of 0.",
      "Weeks plus the leftover days.",
      "A calendar span that borrows days and months the way a calendar does.",
      "A separate average-month figure, labeled as an average.",
    ],
    examples: [
      {
        title: "1 March to 1 April in a non-leap year",
        body: "The exact count is 31 days, which is 4 weeks and 3 days. The calendar span is 0 years, 1 month, and 0 days. Those two descriptions are both right. They are not the same unit.",
      },
      {
        title: "The same date twice",
        body: "Start and end on 2026-09-23. Total days is 0. Weeks and extra days are 0. The calendar span is 0 years, 0 months, and 0 days.",
      },
    ],
    explanation:
      "Total days counts midnights between the two dates. Weeks are that count divided by 7. The year, month, and day line walks the calendar: if the end day is earlier in the month, it borrows the length of the previous month. That length changes. February is not 30 days. The average-month number divides the day count by 30.44 and is only a rough size. It is not a second calendar result.",
    tips: [
      "Use total days for a deadline. Use the calendar span when you are describing a rental, a subscription, or an age-like period.",
      "If the end date is earlier, the page still shows a positive span and says the dates were reversed.",
    ],
    limitations:
      "Calendar months do not have one fixed length, so “1 month” is not always 30 days. The average-month line is not an exact month count. Time of day is ignored.",
    faqs: [
      {
        question: "What if the end date is before the start date?",
        answer: "The counts stay positive and a note says the end date is earlier. The span runs from the later date back to the earlier one.",
      },
      {
        question: "Does February change the result?",
        answer: "Yes, for the calendar span. A period that crosses February uses that month’s real length. The total day count is still exact.",
      },
      local,
    ],
  },
  "find-and-replace": {
    about:
      "Paste text, type what to find, and type the replacement. You can change the first match or every match, and you can ignore letter case.",
    howTo: [
      "Paste the original text.",
      "Enter the text to find. A blank find box is rejected.",
      "Enter the replacement. Leave it blank if you want to delete the matches.",
      "Choose Replace first or Replace all, and turn Case-sensitive on or off.",
      "Press Replace, then copy the result or clear the form.",
    ],
    features: [
      "First match or every non-overlapping match.",
      "Case-sensitive matching, or a case-insensitive search that still inserts your replacement as typed.",
      "A count of how many replacements were made.",
    ],
    examples: [
      {
        title: "Fix a repeated name",
        body: "Original: “Ana sent the file. ana sent the notes.” Find: ana. Replacement: Ana. Case-sensitive off, Replace all. Both names become Ana, and the count is 2.",
      },
      {
        title: "Change only the first heading",
        body: "A draft repeats “Draft” three times. Replace first changes the first one and leaves the other two. The count is 1.",
      },
    ],
    explanation:
      "The search walks the original text from the start. After a match, the next search begins after that match, so a replacement is not searched again. Case-insensitive mode compares lowercase copies but does not change the surrounding text.",
    tips: [
      "If you need a pattern such as “any number,” use the regex tester. This tool looks for the exact characters you type.",
      "A replacement that contains the search text is inserted as-is. It is not replaced again in the same pass.",
    ],
    limitations:
      "This is not a regular expression. It does not match word boundaries, and it does not skip text inside quotes. Overlapping matches are not counted twice.",
    faqs: [
      {
        question: "Can I delete the matches?",
        answer: "Yes. Leave the replacement empty. Each match is removed and still counts as a replacement.",
      },
      {
        question: "Why did a short word change inside a longer word?",
        answer: "The search is a character search. Finding “cat” also matches the start of “catalog.” Add spaces if you only want a whole word, or use the regex tester with a word boundary.",
      },
      local,
    ],
  },
  "remove-line-breaks": {
    about:
      "Paste text that was wrapped onto many lines. You can join those lines with spaces, delete the breaks, or keep a blank line between paragraphs.",
    howTo: [
      "Paste the original text. The box keeps the line breaks so you can see them.",
      "Choose one option: replace line breaks with spaces, remove them, or keep paragraph breaks.",
      "Press Clean text.",
      "Copy the cleaned text or clear both boxes.",
    ],
    features: [
      "The original stays in the first box. The cleaned text is separate.",
      "Spaces mode joins lines and collapses repeated spaces.",
      "Paragraph mode keeps a blank line where you already had one.",
    ],
    examples: [
      {
        title: "A wrapped email",
        body: "Three short lines of one sentence become one line with single spaces between the words when you choose Replace line breaks with spaces.",
      },
      {
        title: "Two paragraphs",
        body: "A block, a blank line, then another block. Keep paragraph breaks joins the lines inside each block and leaves one blank line between them.",
      },
    ],
    explanation:
      "Windows and old Mac line endings are treated as the same break. Spaces mode turns each run of breaks into one space, then trims the ends. Remove mode deletes the breaks and can glue the last word of a line to the first word of the next line. Paragraph mode splits on a blank line first, then joins the lines inside each paragraph.",
    tips: [
      "Use spaces for prose. Use remove only when the breaks were inserted inside a token, such as a long number split across lines.",
      "If a poem or a list should keep its lines, do not run this tool on it.",
    ],
    limitations:
      "The tool cannot tell a wrapped sentence from a list. A single line break is treated as a wrap in paragraph mode. Only a blank line keeps the paragraphs apart.",
    faqs: [
      {
        question: "Will this remove spaces inside a line?",
        answer: "Spaces mode collapses repeated spaces and tabs. Remove mode and paragraph mode leave the spaces that were already inside a line.",
      },
      {
        question: "What if I only paste spaces?",
        answer: "The page asks you to paste some text. Whitespace alone is not enough.",
      },
      local,
    ],
  },
  "add-line-numbers": {
    about:
      "Paste several lines and put a number in front of each one. You choose the starting number and the characters between the number and the line.",
    howTo: [
      "Paste the text. Each line stays as you typed it.",
      "Set the starting number. 1 is the usual start. A whole number below 0 is allowed.",
      "Set the separator. The default is a period and a space.",
      "Press Add numbers, then copy the numbered lines or clear the form.",
    ],
    features: [
      "The line text is not trimmed or rewritten.",
      "A custom separator, such as \") \" or a tab.",
      "A starting number other than 1.",
    ],
    examples: [
      {
        title: "A three-line list",
        body: "Lines “First line”, “Second line”, and “Third line” with start 1 and separator “. ” become “1. First line”, “2. Second line”, and “3. Third line”.",
      },
      {
        title: "Continue a list at 10",
        body: "Starting number 10 and separator \") \" turns the first pasted line into “10) ” plus the original line.",
      },
    ],
    explanation:
      "The text is split on line breaks. Each line gets the starting number plus its position, then the separator, then the original characters on that line. Empty lines are numbered too, because they are still lines.",
    tips: [
      "If the text already has numbers, remove them first or you will get two numbers on each line.",
      "Use a tab as the separator when you want to paste the result into a spreadsheet.",
    ],
    limitations:
      "A final line break creates a trailing empty line, and that empty line is numbered. Soft wraps inside the box are not new lines. Only real line breaks are.",
    faqs: [
      {
        question: "Does this change spelling or spacing?",
        answer: "No. The characters after the separator are the original line.",
      },
      {
        question: "Can I start at 0?",
        answer: "Yes. 0 and negative whole numbers are accepted. A decimal such as 1.5 is not.",
      },
      local,
    ],
  },
  "json-to-csv": {
    about:
      "Paste a JSON array of objects and get CSV you can copy or download. The first row is the column names. Cells that contain commas, quotes, or line breaks are quoted.",
    howTo: [
      "Paste JSON. The value should be an array, and each item should be an object.",
      "Press Convert to CSV.",
      "Check the row and column counts.",
      "Copy the CSV or download data.csv. Press Clear to remove both boxes.",
    ],
    features: [
      "Columns are the keys from every object, in the order they first appear.",
      "A missing key becomes an empty cell.",
      "null becomes an empty cell. Nested objects and arrays are written as JSON text inside the cell.",
      "Copy and download stay in the browser.",
    ],
    examples: [
      {
        title: "Two people",
        body: "An array with {\"name\":\"John\",\"age\":30} and {\"name\":\"Sara\",\"age\":25} becomes a header name,age and two data rows.",
      },
      {
        title: "A comma in a name",
        body: "The name Doe, Jane is written as \"Doe, Jane\" so a spreadsheet does not split it into two columns.",
      },
    ],
    explanation:
      "The converter reads the JSON in the page. It does not send it anywhere. If one object has a key the others lack, that key is still a column and the other rows get an empty cell. A nested value is JSON.stringify’d so the data is still in the file, as one cell rather than extra columns.",
    tips: [
      "If you have one object rather than an array, wrap it in square brackets.",
      "Open the downloaded file in a spreadsheet and check that quoted cells stayed in one column.",
    ],
    limitations:
      "A JSON array of numbers, or a single object that is not inside an array, is rejected. Nested objects are not flattened into extra columns. Very large JSON can be slow because it is parsed in the browser.",
    faqs: [
      {
        question: "What if the JSON is invalid?",
        answer: "The page says it is not valid JSON and does not invent a CSV.",
      },
      {
        question: "How are quotes inside a cell handled?",
        answer: "The cell is wrapped in quotes, and each quote inside it is doubled, which is the usual CSV rule.",
      },
      local,
    ],
  },
  "csv-to-json": {
    about:
      "Paste CSV whose first row is the column names. You get a JSON array of objects, either spaced for reading or compact for a file.",
    howTo: [
      "Paste the CSV, including the header row.",
      "Choose Formatted JSON or Compact JSON.",
      "Press Convert to JSON.",
      "Copy the JSON, download data.json, or clear the form.",
    ],
    features: [
      "Quoted cells can contain commas and line breaks.",
      "A doubled quote inside a quoted cell becomes one quote.",
      "Empty cells stay empty strings.",
      "A blank header is named column_1, column_2, and so on. Duplicate headers get a numeric suffix.",
    ],
    examples: [
      {
        title: "A small sheet",
        body: "name,age then John,30 and Sara,25 becomes two objects with name and age. Age stays a string, because CSV cells are text.",
      },
      {
        title: "A quoted comma",
        body: "The row \"Doe, Jane\",25 keeps Doe, Jane as one name. The comma inside the quotes is not a new column.",
      },
    ],
    explanation:
      "The parser walks the text. A quote starts a cell, and the next undoubled quote ends it. A comma outside quotes starts a new cell. A line break outside quotes starts a new row. The first row becomes the keys. Later rows become objects. A row with more cells than the header is rejected so extra values are not dropped.",
    tips: [
      "If a spreadsheet exported numbers, they will still be JSON strings. Convert them in your own code if you need numbers.",
      "Use compact JSON when you are pasting into a request body. Use formatted JSON when you want to read it.",
    ],
    limitations:
      "There is no option to skip the header or to pick a different delimiter. A semicolon-separated file will not split on semicolons. A row that is longer than the header stops the conversion.",
    faqs: [
      {
        question: "What if a quote is missing?",
        answer: "An unclosed quote, or a quote in the middle of an unquoted cell, shows an error instead of a partial JSON file.",
      },
      {
        question: "Are empty cells null?",
        answer: "No. An empty cell becomes an empty string so you can see that the column was present.",
      },
      local,
    ],
  },
  "regex-tester": {
    about:
      "Type a regular expression, choose flags, and paste the text you want to test. The page lists whether anything matched, how many matches it found, the matched text, where each match starts, and any capture groups.",
    howTo: [
      "Enter the pattern without surrounding slashes.",
      "Turn on the flags you need. g finds every match. i ignores case. m changes ^ and $. s lets a dot match a line break. u turns on Unicode mode.",
      "Paste the test text.",
      "Press Test expression. An invalid pattern shows the browser’s syntax message.",
    ],
    features: [
      "Match count, matched text, and the character index where each match starts.",
      "Numbered groups and named groups when the pattern has them.",
      "A stop after 50 matches so a huge result does not fill the page.",
    ],
    examples: [
      {
        title: "Find amounts",
        body: "Pattern \\d+, flag g, text “Order 14 and order 3”. You get two matches, 14 at the first digit and 3 at the later digit.",
      },
      {
        title: "Capture a name",
        body: "Pattern Name: (\\w+) on “Name: Sara” shows the full match and group 1 as Sara.",
      },
    ],
    explanation:
      "The page builds a JavaScript RegExp and runs it on the text you pasted. It does not eval the pattern as a script. A dot matches one character. * means zero or more, + means one or more, and ? means optional. Brackets match one character from a set. Parentheses capture a group. A bar means or. \\d is a digit, \\s is whitespace, and \\w is a word character. Without g, only the first match is listed.",
    tips: [
      "Test a small sample before you use the same pattern in code.",
      "If the pattern can match an empty string, the tester still moves forward so it does not loop forever. You will see an empty match when that happens.",
    ],
    limitations:
      "This uses the browser’s JavaScript regular expressions, which differ from some other engines. A pattern longer than 300 characters is rejected. A very slow pattern can still stall the tab. The page does not sandbox the match in a separate process. It will not run other JavaScript you type in the pattern box.",
    faqs: [
      {
        question: "Why do I only see one match?",
        answer: "Turn on the g flag. Without it, the result stops after the first match.",
      },
      {
        question: "Does this execute code from the pattern?",
        answer: "No. The pattern is passed to the RegExp constructor. It is not evaluated as a program.",
      },
      local,
    ],
  },
  "hash-generator": {
    about:
      "Create a SHA-256, SHA-384, or SHA-512 digest of text you type. The digest is a one-way fingerprint. It is not an encrypted copy of the text, and it is not a password.",
    howTo: [
      "Type or paste the text. An empty box still has a valid digest.",
      "Choose SHA-256, SHA-384, or SHA-512.",
      "Press Create hash.",
      "Copy the result or clear the form.",
    ],
    features: [
      "SHA-256, SHA-384, and SHA-512 through the browser’s Web Crypto API.",
      "The digest is shown as lowercase hexadecimal text.",
      "The text is not uploaded.",
    ],
    examples: [
      {
        title: "A known SHA-256 check",
        body: "The text abc with SHA-256 is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad. If you see that string, this page and another SHA-256 tool agree.",
      },
      {
        title: "Checking a short note",
        body: "Hash the note, send the note and the digest on separate channels, and hash the note again on the other side. If the digests differ, the note changed.",
      },
    ],
    explanation:
      "A hash function maps text to a fixed-length digest. The same text and the same algorithm always produce the same digest. You cannot turn the digest back into the text with this tool. People use SHA-256 and the longer SHA-2 hashes to check integrity. MD5 and SHA-1 are older hashes and are a poor choice for a new integrity check, so they are not offered here.",
    tips: [
      "Do not use a fast hash by itself as a way to store passwords. Password storage needs a slow function built for that job.",
      "A changed space or a changed line break changes the digest. Hash the exact bytes you care about.",
    ],
    limitations:
      "This hashes text encoded as UTF-8. It does not hash a file. It does not encrypt anything, and it does not prove who wrote the text. A browser without Web Crypto cannot create the digest.",
    faqs: [
      {
        question: "Is a hash the same as encryption?",
        answer: "No. Encryption is meant to be reversed with a key. This digest is a one-way fingerprint for checking that the text still matches.",
      },
      {
        question: "Can I get the original text from the hash?",
        answer: "No. This page only creates the digest. It cannot recover the text.",
      },
      local,
    ],
  },
};
