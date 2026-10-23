# Tool audit report

Live site: https://www.toolstarhub.com. Date: 23 October 2026. Browser: Playwright 1.56, Chromium, desktop 1280px and a 390px-wide check after each tool ran.

## Counts

Tools in the registry: 102. Every one was opened and given a sample input. A page that only loaded does not count as a pass.

- PASS: 95
- FAIL: 0
- PARTIAL: 7
- BLOCKED: 0

PARTIAL means the in-browser action passed and the Gemini button was not called. This environment has no GEMINI_API_KEY, and those buttons were left unused so the live quota was not spent. Nothing else is blocked.

Sample checks, all on the live site unless noted: 15% of 80 is 12; 80 to 100 is 25%; $80 at 25% off is $60; age from 2000-02-29 to 2024-03-01 is 24 years, 0 months, 1 day; $50 at 8% tax is $54; an $80 bill with a 20% tip split 4 ways is $16 tip and $24 per person; 2024-01-01 to 2024-01-31 is 30 days; 2024-01-01 through 2024-01-08 is 6 business days; mean of 2, 4, 4, 4, 5, 5, 7, 9 is 5 and the median is 4.5; the sample GPA is 3.58 on 10 credits; 12 by 10 feet is 120 square feet and 11.15 square meters; the $20,000 loan at 7% for 5 years, the $320,000 mortgage at 6.5% for 30 years, and the $27,000 auto loan at 6% for 60 months match the standard payment formula; $10,000 at 5% compounded monthly for 10 years is $16,470.09; 100 miles at 25 mpg and $3.50 is $14; $20 an hour for 40 hours and 52 weeks is $41,600; $1,000 gross with 10% withholding is $900 net; $1,200 over 12 months at 0% is $100 a month; a $1,000 card at $100 a month and 0% is 10 months; starter debts total $14,200; $120,000 income, 28% housing ratio, 0% rate, and 0% tax prices a $1,008,000 home; $1,000 rent for one year against a $100,000 home bought with cash shows $12,000 rent; 16:9 of 1920 is 1,080; 1:45 plus 2:30 is 4 hours 15 minutes; noon in New York is 17:00 in London; 1 meter is 3.28084 feet; 0°C is 32°F; SHA-256 of abc is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad; Base64 of hi is aGk=; URL encoding of “a b” is a%20b; HTML encoding of a b tag is the escaped form; 1994 is MCMXCIV. File tools used a real PNG, a 2-page PDF, a second PDF, a small DOCX, a text file that is not a PDF, and a QR image. Downloads were opened (PDF page counts, PNG or JPEG signatures, or the text inside). Invalid files and empty fields had to show an error rather than a fake result. Copy was clicked where the tool offers it.

## Humanize

A request shaped as {action: humanize, text, version: medium} is rejected with HTTP 400 and “The translator could not read that request.” Humanize requires urdu and target (brief, medium, average, or article). Expand uses version. The live page already sent target.

The Humanized option failed for a different reason. The prompt put the Urdu source last, and Gemini sometimes returned that Urdu as the English body. The page then replaced the English draft with Urdu. The prompt now puts the English last and says the reply must be English. If the reply is still Urdu, the server asks once more and then returns HTTP 502 “The rewrite was not English. Try again.” with no text field. A timeout is HTTP 504. A Gemini or JSON failure is HTTP 502 and does not invent a draft. Title, subtitle, permalink, and meta description are not rewritten. Names, dates, figures, and quotes are kept. Regression checks are in src/lib/urdu-news/urdu-news-checks.ts. A local browser test with a mocked API confirmed the page ignores a Urdu echo at 1280px and at 390px. The fix is not on production until this branch is deployed, so it was not retested against the live Gemini API.

## Site-wide

Homepage title, desktop nav, mobile menu at 390px, header search, homepage search, the calculators category, a guide, and that guide’s tool link were exercised in a browser. Homepage and guides overflow at 390px was 0. No console errors were kept after ignoring ad and React DevTools noise.

The live sitemap has 193 URLs, each HTTP 200. That is 102 tools, 76 guides, 6 category pages, /categories, and 8 other pages (home, tools, guides, about, contact, privacy, terms, disclaimer). The earlier 192 count was from before the Urdu News Translator existed. The sitemap was not changed. Locale copies stay out of the sitemap and noindex. Canonical, title, meta description, and JSON-LD were present on the sitemap URLs. No SEO output was changed.

## Repaired and retested

- PDF to JPG: rendering. Local JPEG download opens.
- PDF Compressor, strong preset: cancel flag and the same pdf.js rendering fix. Local 2-page PDF opens. Balanced preset passed on the live site.
- UTM Builder and Hash Generator: long example strings overflowed at 390px. Prose now wraps. Local overflow is 0. The tools themselves passed on the live site.
- Urdu humanize: server and UI guard, covered by unit tests and a mocked browser test. Not redeployed.

## Tools

| Tool | Route | Status | Test | Defect | Fix and retest |
| --- | --- | --- | --- | --- | --- |
| Percentage Calculator | /tools/percentage-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Percentage Change Calculator | /tools/percentage-change-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Discount Calculator | /tools/discount-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Age Calculator | /tools/age-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Word Counter | /tools/word-counter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Character Counter | /tools/character-counter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Case Converter | /tools/case-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Lorem Ipsum Generator | /tools/lorem-ipsum-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| JSON Formatter | /tools/json-formatter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image Compressor | /tools/image-compressor | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image Resizer | /tools/image-resizer | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image Cropper | /tools/image-cropper | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image Converter | /tools/image-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Base64 Encoder | /tools/base64-encoder | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| UUID Generator | /tools/uuid-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| URL Encoder | /tools/url-encoder | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Unix Timestamp Converter | /tools/timestamp-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| UTM Builder | /tools/utm-builder | PASS | Built a campaign URL, rejected an invalid address, copied the result, then checked 390px overflow | The builder produced the campaign URL. At 390px the example URL in the page copy overflowed by 48px. | overflow-wrap: anywhere on main prose. Local retest overflow 0, and the panel still showed utm_source=newsletter. |
| Unit Converter | /tools/unit-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Slug Generator | /tools/slug-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF to JPG | /tools/pdf-to-jpg | PASS | Uploaded a 2-page PDF and a non-PDF, rendered page 1, opened the JPEG, then checked 390px overflow | Live render failed. pdf.js 6 called Map.prototype.getOrInsertComputed, which this browser does not have, and passing both canvas and canvasContext made getContext() return null. | A Map and WeakMap method is installed before pdf.js loads, and the page renders on the existing canvas context. The worker entry installs the same method. Local retest downloaded a JPEG (signature ffd8ff). |
| Hex to RGB | /tools/hex-to-rgb | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Color Picker | /tools/color-picker | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| QR Code Generator | /tools/qr-code-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| QR Code Scanner | /tools/qr-code-scanner | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| HTML Encoder / Decoder | /tools/html-encoder | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| HTML Minifier | /tools/html-minifier | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| CSS Minifier | /tools/css-minifier | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| JavaScript Minifier | /tools/javascript-minifier | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Password Generator | /tools/password-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image to PDF | /tools/image-to-pdf | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF Merger | /tools/pdf-merger | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF Splitter | /tools/pdf-splitter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF Page Counter | /tools/pdf-page-counter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image Color Analyzer | /tools/image-color-analyzer | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Color Contrast Checker | /tools/color-contrast-checker | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| CSS Gradient Generator | /tools/css-gradient-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Box Shadow Generator | /tools/box-shadow-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| QR Code Generator Pro | /tools/qr-code-generator-pro | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Random Number Generator | /tools/random-number-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF Compressor | /tools/pdf-compressor | PASS | Balanced preset on the live site, strong preset locally, invalid file, download opened, then 390px overflow | Balanced compression worked on the live site. Strong compression could exit immediately in development because a cancel flag stayed true after React's strict-mode remount, and it used the same broken PDF render. | The flag is cleared at the start of a run, and strong compression uses the PDF render fix. Balanced preset retested on the live site (download opened as a PDF). Strong preset retested locally (2-page PDF, 6669 bytes). |
| PDF to Text | /tools/pdf-to-text | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Image to Text | /tools/image-to-text | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| PDF Metadata Viewer / Remover | /tools/pdf-metadata | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Text to PDF | /tools/text-to-pdf | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Word to PDF | /tools/word-to-pdf | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Markdown to HTML | /tools/markdown-to-html | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| HTML to Markdown | /tools/html-to-markdown | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Text Diff Checker | /tools/text-diff | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Duplicate Line Remover | /tools/duplicate-line-remover | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Whitespace Remover | /tools/whitespace-remover | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Line Sorter | /tools/line-sorter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| AI Prompt Generator | /tools/ai-prompt-generator | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| Prompt to Image Generator | /tools/prompt-to-image | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| Prompt to Video Generator | /tools/prompt-to-video | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| AI Article Detector | /tools/ai-article-detector | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| AI Article Compressor | /tools/ai-article-compressor | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| AI Text Humanizer | /tools/ai-text-humanizer | PARTIAL | In-browser action with a valid sample and an empty or too-short sample. Gemini button not clicked. | The in-browser action was tested. The Gemini button was not called. | No product change for this tool. Gemini was not called. |
| Tip Calculator | /tools/tip-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Sales Tax Calculator | /tools/sales-tax-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Date Difference Calculator | /tools/date-difference-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Find and Replace | /tools/find-and-replace | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Remove Line Breaks | /tools/remove-line-breaks | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Add Line Numbers | /tools/add-line-numbers | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| JSON to CSV | /tools/json-to-csv | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| CSV to JSON | /tools/csv-to-json | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Regex Tester | /tools/regex-tester | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Hash Generator | /tools/hash-generator | PASS | SHA-256 of abc and of empty text, Copy, then 390px overflow | SHA-256 of abc and of empty text matched the known digests, and Copy worked. At 390px the example hash in the page copy overflowed by 145px. | The same prose wrap. Local retest, after creating the hash and resizing, overflow 0. |
| Compound Interest Calculator | /tools/compound-interest-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Loan Calculator | /tools/loan-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Mortgage Calculator | /tools/mortgage-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Auto Loan Calculator | /tools/auto-loan-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Home Affordability Calculator | /tools/home-affordability-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Debt Payoff Calculator | /tools/debt-payoff-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Credit Card Payoff Calculator | /tools/credit-card-payoff-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Savings Goal Calculator | /tools/savings-goal-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Hourly Wage Calculator | /tools/hourly-wage-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Paycheck Estimator | /tools/paycheck-estimator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Rent vs Buy Calculator | /tools/rent-vs-buy-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Fuel Cost Calculator | /tools/fuel-cost-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Business Days Calculator | /tools/business-days-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| GPA Calculator | /tools/gpa-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Square Footage Calculator | /tools/square-footage-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Number to Words Converter | /tools/number-to-words | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Time Zone Converter | /tools/time-zone-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| URL Parser | /tools/url-parser | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Morse Code Translator | /tools/morse-code | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Roman Numeral Converter | /tools/roman-numeral-converter | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Aspect Ratio Calculator | /tools/aspect-ratio-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| JWT Decoder | /tools/jwt-decoder | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Robots.txt Generator | /tools/robots-txt-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Time Calculator | /tools/time-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Average Calculator | /tools/average-calculator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Text Repeater | /tools/text-repeater | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. The first script looked for the wrong control, message, or number. | None in the product. Retested on the live site after the script was corrected. |
| Password Strength Checker | /tools/password-strength-checker | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| .gitignore Generator | /tools/gitignore-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Cron Expression Generator | /tools/cron-expression-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Favicon Generator | /tools/favicon-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Meta Tag Generator | /tools/meta-tag-generator | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |
| Open Graph Preview | /tools/open-graph-preview | PASS | Checked https://www.toolstarhub.com/about, then rejected http://127.0.0.1/. The page showed “That address cannot be fetched.” The browser logged the matching 400 from /api/og/preview. | None. The 400 is the private-address rejection. | None. Not required. |
| Urdu News Translator | /tools/urdu-news-translator | PARTIAL | Live page: Translate stays disabled when the box is empty and enables after text. No horizontal overflow. Desktop and 390px UI request shape was confirmed before this fix (action humanize, urdu, target). Gemini was not called again after the fix. | The Humanized option could replace the English body with the Urdu source. | Humanize now rejects a non-English reply. Unit tests and a mocked browser test cover it. Not redeployed, so Gemini was not called on production after the fix. |
| CPS Test | /tools/cps-test | PASS | Sample input, checked output, copy or download where offered, invalid input, then 390px overflow | None. | None. Not required. |

