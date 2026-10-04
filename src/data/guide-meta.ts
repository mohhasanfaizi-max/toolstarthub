/**
 * Search-result descriptions for guides whose card excerpt is too short or too
 * long for a meta description (aim: about 120–158 characters). Only the
 * <meta name="description"> and social descriptions use these; cards and the
 * visible page keep the original excerpt.
 */
export const guideMetaDescriptions: Record<string, string> = {
  "how-to-compress-an-image-without-losing-quality":
    "How to compress an image without losing quality: resize first, choose JPEG, WebP, or PNG, then lower quality in small steps while you compare a preview.",
  "how-to-add-sales-tax":
    "How to add sales tax to a price: multiply the pre-tax price by the tax rate, round the tax to cents, and add it to the price. Worked example included.",
  "how-to-count-days-between-dates":
    "How to count the days between two dates: count the midnights between them, then read the same span as weeks or as years, months, and days.",
  "how-to-count-characters":
    "How to count characters in a text, with and without spaces. See how emoji and Unicode are counted, plus word and line totals, with a free counter.",
  "how-to-pick-a-color":
    "How to pick a color and copy it as HEX, RGB, or HSL. Use the browser color control or type a hex value, then copy the same color in each format.",
  "how-to-find-dominant-colors":
    "How to find the dominant colors in an image: sample a JPG, PNG, or WebP and list 3 to 10 colors with each color's share of the sampled pixels.",
  "how-to-scan-a-qr-code":
    "How to scan a QR code with your camera or from a PNG or JPG image in the browser, read the decoded text, and open a link only after you check it.",
  "how-to-estimate-fuel-cost":
    "How to estimate fuel cost for a trip: divide distance by fuel economy (mpg or L/100 km), multiply by the fuel price, then by the number of trips.",
  "how-to-calculate-an-aspect-ratio":
    "How to calculate an aspect ratio: divide width and height by their greatest common divisor, or find a missing width or height from a known ratio.",
  "how-to-percent-encode-a-url":
    "How to percent-encode a URL value with encodeURIComponent, which characters get escaped, and how to decode a percent-encoded string back to text.",
  "how-to-check-color-contrast":
    "How to check color contrast: read the WCAG 2 ratio of two solid colors and see whether it passes AA and AAA for normal text and for large text.",
  "how-to-write-a-box-shadow":
    "How to write a CSS box-shadow: set the offset, blur, spread, color, and opacity, preview the result, then copy a single box-shadow declaration.",
  "how-to-convert-csv-to-json":
    "How to convert CSV to JSON: the header row becomes the keys and each row becomes an object. Covers quoted commas, escaped quotes, and empty cells.",
  "how-to-generate-lorem-ipsum":
    "How to generate lorem ipsum placeholder text: choose paragraphs, sentences, or words, set how many you need, then copy the text into your layout.",
  "how-to-remove-line-breaks":
    "How to remove line breaks from text: turn them into spaces, delete them, or keep a blank line between paragraphs. Works on pasted text in the browser.",
  "how-to-add-line-numbers":
    "How to add line numbers to text: choose a starting number and a separator, and put a number in front of each line without changing the line text.",
  "how-to-convert-text-to-morse-code":
    "How to convert text to Morse code: dots and dashes for A to Z and 0 to 9, spaces between letters, a slash between words, and how to decode it back.",
  "how-to-convert-roman-numerals":
    "How to convert numbers to Roman numerals and back: the seven symbols, the subtractive pairs such as IV and XC, and why the range is 1 to 3999.",
  "how-to-read-a-cron-expression":
    "How to read a cron expression: what the five fields (minute, hour, day of month, month, day of week) mean, and how the two day fields combine.",
  "how-to-rewrite-stock-phrasing":
    "How to rewrite stock phrasing into plainer wording, in the browser or with Gemini AI, and why no rewrite can promise to pass an AI detector.",
  "how-to-make-a-simple-favicon":
    "How to make a simple favicon: pick colors and up to two letters, then download PNG icons at 16, 32, and 180 pixels plus an ICO file for older browsers.",
  "how-to-compare-renting-and-buying":
    "How to compare renting and buying a home: add up the rent over the years you choose and the cash cost of buying over the same years, then compare.",
  "how-to-plan-a-debt-payoff":
    "How to plan a debt payoff with the avalanche (highest rate first) or snowball (smallest balance first) method, and how the payoff timeline is estimated.",
  "how-long-to-pay-off-a-credit-card":
    "How long it takes to pay off a credit card: how monthly interest is charged at the APR divided by 12, and how a bigger payment shortens the timeline.",
  "how-to-convert-salary-to-hourly":
    "How to convert a salary to an hourly rate, or hourly pay to a yearly salary: hours per week times weeks per year, plus how overtime pay is added.",
  "what-a-paycheck-estimate-includes":
    "What a paycheck estimate includes: gross pay minus pre-tax deductions, withholding, and post-tax deductions, and which taxes the estimate does not calculate.",
  "how-to-calculate-gpa":
    "How to calculate GPA on a 4.0 scale: convert each letter grade to grade points, multiply by credits, then divide total grade points by total credits.",
  "how-to-calculate-square-footage":
    "How to calculate square footage: multiply each room's length by its width, add the rooms, and convert between square feet and square meters.",
  "how-to-count-business-days":
    "How to count business days between two dates: count Monday to Friday inside the range, skip weekends, and exclude holidays you enter yourself.",
  "what-is-base64":
    "What Base64 is and how to encode or decode text: UTF-8 bytes become letters, numbers, + and /. Why Base64 is an encoding, not encryption.",
  "what-is-a-uuid":
    "What a UUID is: a 128-bit identifier written as 36 characters. How version 4 UUIDs are generated at random, and why they are not sequential or secret.",
  "how-to-read-a-jwt":
    "How to read a JWT: decode the Base64URL header and payload to see the JSON claims, and why decoding a token does not verify its signature.",
  "what-is-robots-txt":
    "What robots.txt is and how to write one: user-agent groups, Allow and Disallow rules, and a sitemap line, plus why the file must be published at your root.",
  "how-to-read-a-url":
    "How to read the parts of a URL: protocol, hostname, port, path, query parameters, and fragment, explained with a worked example you can try.",
  "how-to-convert-time-zones":
    "How to convert a time between time zones: pick the date, time, source zone, and target zone, and read the same instant with each zone's UTC offset.",
};
