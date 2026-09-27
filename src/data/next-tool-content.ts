import { OCR_MAX_EDGE, OCR_PANEL_LEAD, ocrFirstRunMegabytes } from "../lib/tools/ocr.ts";
import type { ToolContent } from "./tool-content.ts";

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
      {
        question: "Is my input sent to a server?",
        answer: "No. The bill, tip rate, and headcount are split in this tab. They are not uploaded.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The price and tax rate are calculated in this tab. They are not sent to a server.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The two dates are counted in this tab. They are not uploaded.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The text and the search string stay in this tab. They are not posted to a server.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The pasted text is rewritten in this tab. It is not uploaded.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The lines and the starting number stay in this tab. They are not sent to a server.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The JSON is converted in this tab. It is not uploaded.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The CSV stays in this tab while it is parsed. It is not sent to a server.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The pattern and the sample text are tested in this tab. They are not uploaded.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer: "No. The text is hashed in this tab. It is not sent to a server, and the digest cannot be turned back into the original.",
      },
    ],
  },
  "time-calculator": {
    about:
      "Add or subtract one block of hours and minutes from another. The result is hours and leftover minutes, plus the signed total in minutes. This is duration arithmetic. It does not look up a clock, a date, or a time zone.",
    howTo: [
      "Enter the starting hours and minutes. Both must be whole numbers, zero or greater.",
      "Enter the hours and minutes to add or subtract.",
      "Choose Add or Subtract, then press Calculate.",
    ],
    features: [
      "Minutes of 60 or more are carried into hours.",
      "A result below zero is marked minus and still shows the remaining hours and minutes.",
      "Total minutes, so you can check the arithmetic.",
    ],
    examples: [
      {
        title: "Two and a half hours plus 1 hour 45 minutes",
        body: "2 hours 30 minutes plus 1 hour 45 minutes is 4 hours 15 minutes, which is 255 minutes.",
      },
      {
        title: "Subtracting more than the start",
        body: "1 hour 0 minutes minus 1 hour 30 minutes is minus 0 hours 30 minutes, which is -30 minutes.",
      },
    ],
    explanation:
      "Each side is turned into minutes, the second side is added or subtracted, and the signed total is split back into hours and leftover minutes. This is duration arithmetic. It does not look up a clock, a date, or a time zone.",
    tips: [
      "Type 90 in the minutes box if you do not want to convert it to 1 hour 30 minutes first. The page carries the extra minutes.",
      "Use the Date Difference Calculator when the question is days between two calendar dates.",
    ],
    limitations:
      "Hours and minutes must be whole numbers from 0 through 100,000. A blank box is rejected. Decimals and negative inputs are rejected. The page does not convert time zones.",
    faqs: [
      {
        question: "Is the Time Calculator free?",
        answer:
          "Yes. You can add or subtract hours and minutes here without paying or creating an account.",
      },
      {
        question: "What if the minutes are 60 or more?",
        answer: "They are included in the total and then shown as hours plus a remainder from 0 to 59.",
      },
      {
        question: "Can the result be negative?",
        answer: "Yes, when you subtract more than the starting duration. The page marks that result as minus.",
      },
      {
        question: "Are these numbers sent to a server?",
        answer:
          "No. The hours and minutes are calculated in this browser tab. Tools Star Hub does not send those numbers to a server or save them in local storage.",
      },
    ],
  },
  "average-calculator": {
    about:
      "Paste a list of numbers and get the count, the mean, the median, and the mode. Separate values with commas, spaces, or new lines. The list can hold up to 1,000 numbers, and the values are not weighted.",
    howTo: [
      "Paste the numbers. A blank list is rejected.",
      "Press Calculate.",
      "Read the mean, the middle value, and any mode.",
    ],
    features: [
      "Mean rounded to at most 10 decimal places.",
      "Median of an even count is the average of the two middle numbers.",
      "More than one mode when several values tie for the highest count.",
    ],
    examples: [
      {
        title: "Four numbers with no repeat",
        body: "1, 2, 3, 4 has a mean of 2.5, a median of 2.5, and no mode.",
      },
      {
        title: "A repeated pair",
        body: "1, 2, 2, 3 has a mean of 2, a median of 2, and a mode of 2. 1, 1, 2, 2, 3 has a mean of 1.8, a median of 2, and modes 1 and 2.",
      },
    ],
    explanation:
      "The mean is the sum divided by how many numbers you entered. The median is the middle number after sorting, or the average of the two middle numbers when the count is even. The mode is the value that appears most often. If every distinct value appears once, there is no mode. A single number is its own mode.",
    tips: [
      "GPA uses letter grades and credits. Use the GPA Calculator for that, not this list of raw numbers.",
    ],
    limitations:
      "Up to 1,000 numbers. A token that is not a number rejects the whole list. This page does not weight the values.",
    faqs: [
      {
        question: "Is the Average Calculator free?",
        answer:
          "Yes. You can find the mean, median, and mode of a list here without paying or creating an account.",
      },
      {
        question: "What is the median of an even list?",
        answer: "The average of the two middle numbers after the list is sorted. 1, 2, 3, 4 has a median of 2.5.",
      },
      {
        question: "When is there no mode?",
        answer: "When every different number appears the same number of times and more than one number is in the list. 1, 2, 3, 4 has no mode.",
      },
      {
        question: "Are these numbers sent to a server?",
        answer:
          "No. The list is calculated in this browser tab. Tools Star Hub does not send those numbers to a server or save them in local storage.",
      },
    ],
  },
  "text-repeater": {
    about:
      "Repeat a word, phrase, or line from 1 to 200 times. Put nothing, a space, or a new line between the copies. The source can be up to 5,000 characters, and the joined result can be up to 100,000 characters.",
    howTo: [
      "Enter the text to repeat. An empty box is rejected.",
      "Enter a whole-number count from 1 to 200.",
      "Choose nothing, a space, or a new line between copies, then press Repeat.",
    ],
    features: [
      "One copy when the count is 1, with no extra separator.",
      "A space or a new line only between copies, not after the last one.",
      "A length limit so a huge result does not fill the page.",
    ],
    examples: [
      {
        title: "A word three times",
        body: "ha, count 3, with a space between copies, becomes ha ha ha.",
      },
      {
        title: "A line twice",
        body: "Ready, count 2, with a new line between copies, becomes Ready on one line and Ready on the next.",
      },
    ],
    explanation:
      "The page copies the text the number of times you ask and joins those copies with the separator you chose. It does not generate placeholder Latin, and it does not remove duplicates.",
    tips: [
      "Use a new line when you want a list of identical rows. Use a space when you want one line.",
    ],
    limitations:
      "The source can be up to 5,000 characters, the count can be up to 200, and the joined result can be up to 100,000 characters. A longer result is rejected.",
    faqs: [
      {
        question: "Is the Text Repeater free?",
        answer: "Yes. You can repeat text here without paying or creating an account.",
      },
      {
        question: "Does a count of 1 add a separator?",
        answer: "No. One copy is the text you typed, with nothing added.",
      },
      {
        question: "Can I repeat a blank line?",
        answer: "An empty box is rejected. A line that contains only spaces is allowed, because those spaces are text.",
      },
      {
        question: "Is the text sent to a server?",
        answer:
          "No. The copies are built in this browser tab. Tools Star Hub does not send that text to a server or save it in local storage.",
      },
    ],
  },
  "password-strength-checker": {
    about:
      "Type a password and see a Short, Moderate, or Strong rating. The estimate uses the length and the character types that appear in it. It does not look up breaches, and it does not know whether a site will accept the password.",
    howTo: [
      "Type the password. An empty box is rejected.",
      "Press Check.",
      "Read the rating, the length, the estimated bits, and the character types found.",
    ],
    features: [
      "Uppercase, lowercase, numbers, and the symbol set are counted only when they appear.",
      "Any other character, including a space or a backtick, adds one to the pool for each distinct character.",
      "Short is under 50 bits, Moderate is under 80, and Strong is 80 or more.",
    ],
    examples: [
      {
        title: "A lowercase word",
        body: "password is 8 characters of lowercase letters. The pool is 26, the estimate rounds to 38 bits, and the rating is Short.",
      },
      {
        title: "Letters, a number, and a symbol",
        body: "Abcdefghijklm12! is 16 characters with uppercase, lowercase, numbers, and a symbol. The pool is 85, the estimate rounds to 103 bits, and the rating is Strong.",
      },
    ],
    explanation:
      "Bits are the length times the base-2 log of the pool. The pool is 26 for uppercase if an A through Z appears, 26 for lowercase, 10 for a digit, and 23 for a symbol in !@#$%^&*()-_=+[]{};:,.?. A character outside those sets is not treated as the whole symbol set. It adds one. This is not the password generator, which rates a password from the types you selected before it was created.",
    tips: [
      "A longer password from several character types rates higher than a short word.",
      "Use the Password Generator when you want a new password instead of a rating.",
    ],
    limitations:
      "Up to 256 characters. The page does not look up breaches, and it does not know whether a site will accept the password. Accented letters count as other characters, not as A through Z.",
    faqs: [
      {
        question: "Is the Password Strength Checker free?",
        answer: "Yes. You can rate a password here without paying or creating an account.",
      },
      {
        question: "Does this compare the password with leaked passwords?",
        answer: "No. The rating is only the length and the character types in what you typed.",
      },
      {
        question: "Why is a digits-only password Short?",
        answer: "Eight digits use a pool of 10. That is about 27 bits, which is under 50, so the rating is Short.",
      },
      {
        question: "Is the password sent to a server?",
        answer:
          "No. The check runs in this browser tab. Tools Star Hub does not send the password to a server or save it in local storage.",
      },
    ],
  },
  "gitignore-generator": {
    about:
      "Choose templates and optional custom patterns. The page writes .gitignore text with a comment heading for each section. Creating that text does not update a Git repository.",
    howTo: [
      "Check the templates you want. Node is checked when the page opens.",
      "Add custom patterns, one per line, if you need them.",
      "Press Generate, then copy the text into a file named .gitignore.",
    ],
    features: [
      "Templates for Node, Next.js, environment files, operating-system files, logs, and build folders.",
      "Custom patterns are added after the templates.",
      "A custom pattern that repeats a selected template line is written once.",
    ],
    examples: [
      {
        title: "Node and environment files",
        body: "Node plus Environment files, with no custom patterns, starts with a Node heading and node_modules/, then an Environment files heading with .env and .env.*.",
      },
      {
        title: "A custom pattern",
        body: "Node plus a custom line secrets/ writes the Node block, then a Custom heading and secrets/. A custom node_modules/ line is not repeated.",
      },
    ],
    explanation:
      "Each selected template becomes a comment and its patterns. Templates stay in a fixed order. Custom lines are trimmed, blank lines are skipped, and a line already written by a template is left out. Creating the text does not update a Git repository.",
    tips: [
      "Robots.txt is a different file. Use the Robots.txt Generator for crawler rules.",
    ],
    limitations:
      "Up to 50 custom patterns, each up to 200 characters. The templates are a short starter set, not every language or editor.",
    faqs: [
      {
        question: "Is the .gitignore Generator free?",
        answer: "Yes. You can build the file text here without paying or creating an account.",
      },
      {
        question: "Does this create the file in a repository?",
        answer: "No. It writes the text. You copy it into .gitignore yourself.",
      },
      {
        question: "What if a custom line matches a template?",
        answer: "That line is kept from the template and skipped in the Custom section.",
      },
      {
        question: "Are the patterns sent to a server?",
        answer:
          "No. The file text is built in this browser tab. Tools Star Hub does not send those patterns to a server or save them in local storage.",
      },
    ],
  },
  "cron-expression-generator": {
    about:
      "Build a five-field cron expression, or paste one and read a plain-language summary. The fields are minute, hour, day of month, month, and day of week. Sunday is 0. Names such as MON or JAN are not accepted, and a seconds field is not accepted.",
    howTo: [
      "Choose Build and fill the five fields, or choose Explain and paste an expression.",
      "Press Build or Explain.",
      "Read the expression and the summary. Copy the expression if you want to keep it.",
    ],
    features: [
      "Stars, single numbers, ranges, comma lists, and star steps such as */15.",
      "A summary for common schedules, including every minute, hourly, daily, weekdays, and a monthly day.",
      "A note when both the day of month and the day of week are restricted.",
    ],
    examples: [
      {
        title: "Every 15 minutes",
        body: "*/15 * * * * means every 15 minutes.",
      },
      {
        title: "Weekdays at 09:00",
        body: "0 9 * * 1-5 means at 09:00 on Monday through Friday. Sunday is 0.",
      },
    ],
    explanation:
      "The five fields are minute, hour, day of month, month, and day of week. A star means every value in that field. */15 in the minute field means every 15 minutes. 1-5 in the day-of-week field means Monday through Friday. When both the day of month and the day of week are set to something other than a star, cron matches either day, not both.",
    tips: [
      "Use the Timestamp Converter when you have a clock time and need a Unix timestamp, not a schedule.",
    ],
    limitations:
      "Five fields only. Names such as MON or JAN are rejected. A step inside a range, such as 0-30/10, is rejected. Day of week 7 is rejected. Sunday is 0.",
    faqs: [
      {
        question: "Is the Cron Expression Generator free?",
        answer:
          "Yes. You can build or explain a five-field expression here without paying or creating an account.",
      },
      {
        question: "What if both the day of month and the day of week are set?",
        answer:
          "Cron matches either day, not both. 0 9 1 * 1 means 09:00 on the 1st of the month or on Monday. It does not mean only a Monday that falls on the 1st.",
      },
      {
        question: "Why was MON or a six-field expression rejected?",
        answer:
          "This page uses numbers only, in five fields. Sunday is 0 and Saturday is 6. Day of week 7 is rejected. Names such as MON or JAN are rejected. A leading seconds field is not accepted. A step inside a range, such as 0-30/10, is rejected.",
      },
      {
        question: "Is the expression sent to a server?",
        answer:
          "No. The expression and the summary are built in this browser tab. Tools Star Hub does not send that text to a server or save it in local storage.",
      },
    ],
  },
  "favicon-generator": {
    about:
      "Pick a background color, a letter color, and up to two letters. The page draws PNG icons at 16, 32, and 180 pixels in this tab. The ICO file holds the 16 and 32 pixel images only.",
    howTo: [
      "Enter a 6-digit background color and a 6-digit letter color.",
      "Enter one or two letters, or leave the letters blank for a solid color.",
      "Press Generate, then download the PNG sizes or the ICO file.",
    ],
    features: [
      "PNG files at 16, 32, and 180 pixels.",
      "An ICO file that contains the 16 and 32 pixel PNGs.",
      "A blank letter box draws a solid color.",
    ],
    examples: [
      {
        title: "A blue icon with T",
        body: "#2563eb background, #ffffff letters, and the letter T draws a blue square with a white T.",
      },
      {
        title: "A solid color",
        body: "The same colors with the letters left blank draw a solid blue square at each size.",
      },
    ],
    explanation:
      "Each size is a square canvas filled with the background color. One or two letters are centered in the letter color. The ICO file is a small header plus the 16 and 32 pixel PNG bytes. The 180 pixel image is the apple-touch PNG and is not placed inside the ICO.",
    tips: [
      "Use the Image Resizer when you already have a picture and only need a new pixel size.",
    ],
    limitations:
      "Colors must be 6-digit hex, such as #2563eb. Three-digit hex is rejected. The letters are plain text on a flat color, not a logo trace. The ICO holds 16 and 32 pixel images only.",
    faqs: [
      {
        question: "Is the Favicon Generator free?",
        answer: "Yes. You can draw the icons here without paying or creating an account.",
      },
      {
        question: "Which file is the browser tab icon?",
        answer: "favicon.ico, or the 16 and 32 pixel PNGs. The 180 pixel PNG is the apple-touch icon.",
      },
      {
        question: "Does a blank letter box fail?",
        answer: "No. It draws the background color with no letters.",
      },
      {
        question: "Is the icon uploaded?",
        answer:
          "No. The files are drawn in this browser tab. Tools Star Hub does not send the colors or letters to a server or save them in local storage.",
      },
    ],
  },
  "meta-tag-generator": {
    about:
      "Fill in a title and the optional tags you want. The page writes HTML you can paste into the head of a page. It does not fetch a live URL or check how a site will share the link.",
    howTo: [
      "Enter a title. A blank title is rejected.",
      "Add a description, a canonical URL, robots choices, and any Open Graph or Twitter fields you want.",
      "Press Generate, then copy the HTML.",
    ],
    features: [
      "A charset tag, a title, and a robots tag on every result.",
      "Optional description, canonical link, Open Graph tags, and Twitter tags.",
      "Quotes and ampersands in the text are escaped.",
    ],
    examples: [
      {
        title: "A title and description",
        body: "Title Sample page and description A short description of the page., with index and follow, writes a charset tag, the title, the description, and a robots tag of index, follow.",
      },
      {
        title: "An ampersand in the title",
        body: "Title A & B is written as A &amp; B inside the title tag.",
      },
    ],
    explanation:
      "The HTML is assembled from the fields you fill. Empty optional fields are left out. A canonical URL, an Open Graph image, an Open Graph URL, and a Twitter image must be absolute http or https URLs. The page does not request those URLs.",
    tips: [
      "Use the Open Graph fields here when you want the tags in your own HTML. A live share preview is a different check.",
    ],
    limitations:
      "The title can be up to 200 characters and the description up to 500. Open Graph type is website, article, or none. Twitter card is summary, summary_large_image, or none. A Twitter title without a card is rejected.",
    faqs: [
      {
        question: "Is the Meta Tag Generator free?",
        answer: "Yes. You can write the tags here without paying or creating an account.",
      },
      {
        question: "Does this check how a link will look on a social site?",
        answer: "No. It only writes the tags. It does not open the URL.",
      },
      {
        question: "What robots value is written?",
        answer: "The index choice and the follow choice, such as index, follow or noindex, nofollow.",
      },
      {
        question: "Is the text sent to a server?",
        answer:
          "No. The HTML is built in this browser tab. Tools Star Hub does not send those fields to a server or save them in local storage.",
      },
    ],
  },
  "open-graph-preview": {
    about:
      "Enter a public http or https URL. Check preview sends that URL to this site. The site requests the page and shows the title, description, image, and Twitter card it finds. The page is not saved here. A private or local address is rejected before the page is read.",
    howTo: [
      "Enter an absolute http or https URL.",
      "Press Check preview.",
      "Read the card. A rejected address, a timeout, or a non-http URL shows a short error and no page contents.",
    ],
    features: [
      "Title, description, image address, and Twitter card fields from the public page.",
      "The address after redirects, when the redirect stays on a public http or https URL.",
      "A short error when the address is private, the request times out, or the protocol is not http or https.",
    ],
    examples: [
      {
        title: "A public page",
        body: "https://example.com/ returns the title Example Domain. That page has no description, image, or Twitter card, so those fields read Not found.",
      },
      {
        title: "A local address",
        body: "http://127.0.0.1/ and the decimal form http://2130706433/ both show That address cannot be fetched.",
      },
    ],
    explanation:
      "The browser sends only the URL to this site. The site resolves the host, rejects a private, loopback, link-local, or reserved address, and checks again after each redirect. It reads at most 512 KiB of the decompressed page, then returns the tags. The raw page is not returned and is not saved.",
    tips: [
      "Use the Meta Tag Generator when you want to write the tags yourself. This page reads tags that are already on a public URL.",
    ],
    limitations:
      "Only http and https. A file URL, a URL with a username, and a private address are rejected. The request stops after 8 seconds. A share image may be listed even when the image host blocks the preview picture.",
    faqs: [
      {
        question: "Is the Open Graph Preview free?",
        answer:
          "Yes. You can check the share tags on a public page without paying or creating an account. The URL is still sent to this site so the tags can be read.",
      },
      {
        question: "Is the URL sent off this device?",
        answer:
          "Yes. Check preview sends the URL to this site, which requests that public page and reads its tags. The page is not saved here. A private or non-http address is rejected.",
      },
      {
        question: "Why was a local URL rejected?",
        answer:
          "Addresses such as 127.0.0.1, a private network, and the decimal form of a loopback address are rejected before the page is read.",
      },
      {
        question: "What does a timeout look like?",
        answer: "The card is not shown. The page says the preview request timed out.",
      },
    ],
  },
  "image-to-text": {
    about: OCR_PANEL_LEAD,
    howTo: [
      "Choose one JPG, PNG, or WebP image.",
      "Press Read text. The first time, this browser downloads the recognition engine and the English language file.",
      "Wait for the text. A large photo is reduced before it is read.",
      "Check the text, then copy it if it looks right.",
    ],
    features: [
      "English text from one photo, in this tab.",
      `A long side over ${OCR_MAX_EDGE.toLocaleString()} pixels is reduced before reading.`,
      "The recognition files stay on this site. They are not loaded from another host.",
    ],
    examples: [
      {
        title: "A posted sign on a tree",
        body: "A real outdoor photo of a printed sign, with bark and leaves around it. The hunting and trespassing lines came back. PRIVATE PROPERTY came back missing letters, and VIOLATORS came back as VIOLKTORS. The largest word, POSTED, did not come back as a clean word, and the bark added extra lines.",
      },
    ],
    explanation:
      "After you press Read text, this tab loads the recognition engine and the English language file from this site. The photo is drawn smaller when its long side is over 1,600 pixels, then the words are read in this tab. The image is not uploaded.",
    tips: [
      "A straight, well-lit photo of large type is easier to read than a distant or tilted one.",
      "Compare the result with the photo. Do not treat a misread word as the original.",
    ],
    limitations: `English only. One image at a time. JPG, PNG, and WebP only, up to 25 MB. The first run downloads about ${ocrFirstRunMegabytes()} MB. Later runs on this browser reuse that download. Reading a photo is slower than the canvas image tools. The result depends on the photo. A readable sign can still come back with wrong letters, and a busy background can add lines that are not text. Blur, glare, and small type make that worse. A long side over ${OCR_MAX_EDGE.toLocaleString()} pixels is reduced before reading.`,
    faqs: [
      {
        question: "Is the Image to Text tool free?",
        answer: "Yes. You can read English text from one photo here without paying or creating an account.",
      },
      {
        question: "Is the photo uploaded?",
        answer:
          "No. The photo is read in this browser tab. Tools Star Hub does not send the image to a server or save it in local storage. The recognition engine and the English language file are loaded from this site.",
      },
      {
        question: "Why is the first run slow?",
        answer: `The first time, this browser downloads the recognition engine and the English language file, about ${ocrFirstRunMegabytes()} MB. Later runs on this browser reuse that download. Reading the photo is also slower than resizing or compressing an image.`,
      },
      {
        question: "Will a clear photo be read correctly?",
        answer: "Not always. On a real outdoor photo of a printed sign, some lines came back and some letters were wrong. A busy background can add lines that are not text. Blur, glare, and small type make that worse. Check the text before you use it.",
      },
      {
        question: "Does it read languages other than English?",
        answer: "No. English is the only language file included.",
      },
    ],
  },
  "word-to-pdf": {
    about:
      "Word to PDF reads the words from a .docx file and places them in a plain PDF. Images, tables as grids, headers, footers, and text styling are left out. It is not a copy of the Word layout.",
    howTo: [
      "Choose a .docx file. A .doc file is rejected.",
      "Optionally add a title. Choose A4 or Letter, a margin, font size, and line spacing.",
      "Press Create PDF. The words are wrapped onto pages with Helvetica.",
      "Download word.pdf. The file stays in this tab.",
    ],
    features: [
      "Paragraph text, heading words, list item words, and table cell words.",
      "The same page sizes, margins, and Helvetica font as Text to PDF.",
      "A note when a character is replaced because Helvetica cannot draw it.",
    ],
    examples: [
      {
        title: "A heading, a table, a list, and a picture",
        body: "The heading words, the cell words, and the list item words are kept. The picture is left out. Word’s automatic list numbers are not kept. The table is not drawn as a grid.",
      },
      {
        title: "A .doc file renamed to .docx",
        body: "The page says that file could not be read as a Word document. It does not show an internal error.",
      },
    ],
    explanation:
      "The file is unzipped in this tab and the paragraph text is read. That text is then placed with the same Helvetica PDF builder as pasted text. A Word page break does not start a new PDF page.",
    tips: [
      "If the document is only a picture, there is no text to convert.",
      "Check the PDF. A character Helvetica cannot draw becomes a question mark.",
    ],
    limitations:
      "Images, drawings, charts, and shapes are dropped. Bold, italic, colors, fonts, and heading sizes are dropped. A table becomes the cell text in reading order, not a grid. A list keeps the item text and does not keep Word’s automatic numbers. Headers, footers, footnotes, comments, and text boxes are not included. A .doc file is rejected. A character Helvetica cannot draw becomes “?”. More than 100,000 characters of extracted text is refused.",
    faqs: [
      {
        question: "Is the Word to PDF converter free?",
        answer: "Yes. You can turn a .docx file into a plain PDF here without paying or creating an account.",
      },
      {
        question: "Will the PDF look like my Word document?",
        answer:
          "No. Images, tables as grids, headers, footers, and text styling are left out. It is not a copy of the Word layout.",
      },
      {
        question: "What if I choose a .doc file?",
        answer: "Use a .docx file. This tool does not read .doc files. A .doc file renamed to .docx cannot be read as a Word document.",
      },
      {
        question: "Is my file sent to a server?",
        answer:
          "No. The PDF is built in this browser tab from the .docx you choose. Tools Star Hub does not send that file to a server or save it in local storage.",
      },
    ],
  },
};
