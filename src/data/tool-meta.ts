/**
 * English search-result descriptions for tools whose card description is too
 * short for a meta description (aim: about 120–158 characters, primary
 * keyword first). Only <meta name="description"> and the social descriptions
 * on the English tool page use these; cards, the page intro and every other
 * language keep the tool's own description.
 */
export const toolMetaDescriptions: Record<string, string> = {
  "percentage-calculator":
    "Free percentage calculator: find X% of a number, what percent one number is of another, and percent increase or decrease, with the formula shown.",
  "word-counter":
    "Free word counter: count words, characters, sentences, and paragraphs as you type, with a reading-time estimate. Your text stays in your browser.",
  "case-converter":
    "Free case converter: change text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, or kebab-case instantly in your browser.",
  "image-compressor":
    "Free image compressor: reduce JPG, PNG, and WebP file size in your browser with a quality slider and size comparison. Photos are never uploaded.",
  "image-resizer":
    "Free image resizer: change the width and height of a JPG, PNG, or WebP in pixels, keep the aspect ratio locked, and download. Nothing is uploaded.",
  "image-converter":
    "Free image converter: convert JPG to PNG or PNG to JPG in your browser, with a background color for transparent pixels. Files are not uploaded.",
  "uuid-generator":
    "Free UUID generator: create 1 to 100 random UUID v4 values with the browser's secure random source, then copy one or all. Nothing is stored.",
  "url-encoder":
    "Free URL encoder and decoder: percent-encode a URL component with encodeURIComponent, or decode %20-style text back to readable characters.",
  "timestamp-converter":
    "Free Unix timestamp converter: turn epoch seconds or milliseconds into a readable date, or a date back into a Unix timestamp, in UTC and local time.",
  "pdf-to-jpg":
    "Free PDF to JPG converter: turn the first page, selected pages, or every page of a PDF into JPG images in your browser. The PDF is not uploaded.",
  "hex-to-rgb":
    "Free hex to RGB converter: turn 3-, 6-, or 8-digit hex color codes into RGB, RGBA, and HSL values you can copy, with or without the # sign.",
  "color-picker":
    "Free online color picker: choose a color with the browser color control or type a hex code, then copy it as HEX, RGB, or HSL for CSS.",
  "qr-code-generator":
    "Free QR code generator: turn a URL or text into a QR code in your browser and download it as a PNG. No signup, no tracking redirect, no expiry.",
  "qr-code-scanner":
    "Free online QR code scanner: read a QR code with your camera or from an uploaded image, see the decoded text, and open links only after you check.",
  "html-encoder":
    "Free HTML encoder and decoder: escape <, >, &, and quotes as HTML entities, or decode entities back to text. Input is treated as text, never run.",
  "html-minifier":
    "Free HTML minifier: remove comments and extra whitespace from HTML in your browser while keeping pre, textarea, script, and style content intact.",
  "css-minifier":
    "Free CSS minifier: remove comments and spare whitespace from a stylesheet in your browser while keeping strings, url() values, and calc() safe.",
  "javascript-minifier":
    "Free JavaScript minifier: shrink JS code in your browser with a parser-based pass that removes whitespace and comments. The code is never executed.",
  "password-generator":
    "Free strong password generator: create random passwords 8 to 64 characters long with letters, numbers, and symbols, using crypto.getRandomValues.",
  "pdf-merger":
    "Free PDF merger: combine 2 to 10 PDF files in the order you choose and download one document. Merging happens in your browser, with no upload.",
  "pdf-page-counter":
    "Free PDF page counter: see how many pages a PDF has, including blank pages and covers, without uploading the file. Works for files up to 20 MB.",
  "image-color-analyzer":
    "Free image color analyzer: find the dominant colors in a JPG, PNG, or WebP image, with HEX codes and each color's share of the sampled pixels.",
  "color-contrast-checker":
    "Free color contrast checker: test text and background colors against WCAG 2 and see the contrast ratio with AA and AAA results for normal and large text.",
  "css-gradient-generator":
    "Free CSS gradient generator: build linear, radial, or conic CSS gradients or gradient text, adjust colors and angles, then copy the CSS or HTML.",
  "box-shadow-generator":
    "Free CSS box-shadow generator: adjust offset, blur, spread, color, and opacity with a live preview, then copy the box-shadow declaration.",
  "qr-code-generator-pro":
    "Free QR code generator for Wi-Fi, URLs, email, phone, SMS, and vCard contacts, with custom colors and PNG download. Made in your browser.",
  "random-number-generator":
    "Free random number generator: draw random integers or decimals between a minimum and a maximum, with unique no-repeat draws, using a secure random source.",
  "pdf-compressor":
    "Free PDF compressor: reduce PDF file size in your browser with rewrite or image presets and compare the before and after size. No upload needed.",
  "pdf-to-text":
    "Free PDF to text converter: extract the selectable text from a PDF in your browser and copy or download it. Scanned pages without a text layer need OCR.",
  "pdf-metadata":
    "Free PDF metadata viewer and remover: see the title, author, creator, producer, and dates in a PDF, and download a copy with those fields cleared.",
  "text-to-pdf":
    "Free text to PDF converter: turn plain text into a multi-page A4 or Letter PDF with wrapping, margins, font size, and optional page numbers.",
  "markdown-to-html":
    "Free Markdown to HTML converter: turn headings, lists, links, code blocks, and tables into clean HTML source. Raw HTML is escaped, never run.",
  "html-to-markdown":
    "Free HTML to Markdown converter: turn headings, links, lists, tables, and code from HTML into Markdown in your browser. Scripts are skipped.",
  "text-diff":
    "Free text diff checker: compare two versions of a text and see added, removed, and unchanged lines or words, with a short summary.",
  "duplicate-line-remover":
    "Free duplicate line remover: delete repeated lines from a list and keep the first occurrence, with options for case, trimming, and empty lines.",
  "whitespace-remover":
    "Free whitespace remover: trim lines, collapse double spaces, convert tabs, and remove or collapse blank lines in text, all in your browser.",
  "line-sorter":
    "Free online line sorter: sort lines alphabetically A to Z or Z to A, numerically, or by length, with optional trimming and duplicate removal.",
  "prompt-to-image":
    "Free image prompt generator: turn a subject, setting, style, light, and camera into a detailed AI image prompt with an optional negative prompt.",
  "prompt-to-video":
    "Free video prompt generator: describe the subject, action, camera move, lens, and lighting of one shot as a ready-to-paste AI video prompt.",
  "tip-calculator":
    "Free tip calculator: work out the tip and total for any bill, pick 10% to 25% or a custom rate, and split the bill evenly between people.",
  "sales-tax-calculator":
    "Free sales tax calculator: add a sales tax rate to a price and see the tax amount and the final price, rounded to cents. You enter the rate.",
  "date-difference-calculator":
    "Free date difference calculator: count the days between two dates, then see the same span in weeks and in years, months, and days.",
  "find-and-replace":
    "Free online find and replace: replace the first match or every match of a word or phrase in pasted text, with optional case-sensitive search.",
  "remove-line-breaks":
    "Free tool to remove line breaks from text: turn line breaks into spaces, delete them, or keep paragraph breaks. Ideal for text copied from PDFs.",
  "add-line-numbers":
    "Free tool to add line numbers to text: put a number in front of every line, choose the starting number and the separator, and copy the result.",
  "json-to-csv":
    "Free JSON to CSV converter: turn an array of JSON objects into CSV with a header row, correctly quoting commas and quotes, then copy or download.",
  "csv-to-json":
    "Free CSV to JSON converter: turn CSV with a header row into a JSON array of objects, handling quoted commas and escaped quotes. Copy or download.",
  "regex-tester":
    "Free regex tester: test a JavaScript regular expression against sample text with g, i, m, s, and u flags, and see every match, index, and group.",
  "hash-generator":
    "Free hash generator: create a SHA-256, SHA-384, or SHA-512 hash of any text in your browser with Web Crypto. A hash is a fingerprint, not encryption.",
  "auto-loan-calculator":
    "Free auto loan calculator: estimate a monthly car payment from price, down payment, trade-in, sales tax, fees, APR, and term, with total interest.",
  "credit-card-payoff-calculator":
    "Free credit card payoff calculator: see how many months a balance takes to pay off and the total interest, from the APR and the payment you choose.",
  "paycheck-estimator":
    "Free paycheck estimator: estimate take-home pay per paycheck and per year from gross pay minus the pre-tax, withholding, and post-tax amounts you enter.",
  "rent-vs-buy-calculator":
    "Free rent vs buy calculator: compare the estimated total cost of renting with the cash cost and equity of buying a home over the years you choose.",
  "fuel-cost-calculator":
    "Free fuel cost calculator: estimate the fuel used and the cost of a trip from distance, fuel economy in mpg or L/100 km, and the fuel price.",
  "business-days-calculator":
    "Free business days calculator: count working days (Monday to Friday) between two dates, and exclude holidays or other dates you choose.",
  "gpa-calculator":
    "Free GPA calculator: calculate a credit-weighted GPA on a 4.0 scale from letter grades or grade points, with total credits and grade points shown.",
  "number-to-words":
    "Free number to words converter: write a whole number in English words, such as 1,250 as one thousand two hundred fifty, or turn words into digits.",
  "time-zone-converter":
    "Free time zone converter: convert a date and time from one time zone to another, with each zone's UTC offset and daylight saving time handled.",
  "url-parser":
    "Free URL parser: split a URL into protocol, hostname, port, path, query parameters, and fragment, and list every query parameter by name and value.",
  "morse-code":
    "Free Morse code translator: convert text to International Morse code dots and dashes, or decode Morse code back into letters and numbers.",
  "roman-numeral-converter":
    "Free Roman numeral converter: turn numbers from 1 to 3999 into Roman numerals such as MMXXVI, or convert a Roman numeral back into a number.",
  "aspect-ratio-calculator":
    "Free aspect ratio calculator: simplify a width and height into a ratio such as 16:9, or find the missing width or height for a given ratio.",
  "jwt-decoder":
    "Free JWT decoder: decode a JSON Web Token's header and payload to read its JSON claims in your browser. The signature is not verified.",
  "robots-txt-generator":
    "Free robots.txt generator: build user-agent groups with Allow and Disallow rules plus a sitemap line, then copy the file text for your site root.",
  "time-calculator":
    "Free time calculator: add or subtract hours and minutes, and see the total as hours and minutes and as total minutes. Useful for timesheets.",
  "average-calculator":
    "Free average calculator: find the mean, median, and mode of a list of numbers separated by commas or spaces, with the count of values shown.",
  "text-repeater":
    "Free text repeater: repeat a word, phrase, or line as many times as you need, separated by a space, a new line, or nothing, then copy it.",
  "gitignore-generator":
    "Free .gitignore generator: build a .gitignore file from Node, Next.js, environment, and other ready-made templates, plus your own custom patterns.",
  "cron-expression-generator":
    "Free cron expression generator: build a five-field cron schedule from minute, hour, day, month, and weekday, or paste one and read it in plain English.",
  "favicon-generator":
    "Free favicon generator: make a simple letter or color favicon as PNG icons at 16, 32, and 180 pixels, plus an ICO file, in your browser.",
  "meta-tag-generator":
    "Free meta tag generator: write SEO title, description, robots, canonical, Open Graph, and Twitter card tags as HTML you can paste into a page.",
};
