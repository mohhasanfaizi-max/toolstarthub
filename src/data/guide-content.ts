import { financeGuideContent } from "./finance-guide-content.ts";

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideContent = {
  intro: string;
  why: string;
  stepsHeading: string;
  steps: Array<{ title: string; body: string }>;
  examples: Array<{ title: string; body: string }>;
  notesHeading?: string;
  notes?: Array<{ heading: string; body: string }>;
  faqs: GuideFaq[];
  cta: {
    before: string;
    linkLabel: string;
    href: string;
    after?: string;
  };
};

export const guideContent: Record<string, GuideContent> = {
  "how-to-calculate-percentage": {
    intro:
      "To calculate a percentage, decide which question you are asking, then use the matching formula. “What is X% of Y?” is Y times X divided by 100. “X is what percent of Y?” is X divided by Y, times 100. A percent increase or decrease applies that same fraction to a starting number.",
    why:
      "People mix these questions up on receipts, grades, and growth reports. A 20% discount and a 20% change are related, but they are not the same input pattern.",
    stepsHeading: "How to calculate a percentage",
    steps: [
      {
        title: "Name the question in one sentence",
        body: "Write it as “what is 15% of 80?”, “12 is what percent of 40?”, or “what is 200 after a 10% increase?” If you cannot say which one it is, stop before you punch numbers.",
      },
      {
        title: "Use the matching formula",
        body: "Part = whole × (percent ÷ 100). Percent = (part ÷ whole) × 100, but only when the whole is not zero. For an increase, add the part to the starting number. For a decrease, subtract it.",
      },
      {
        title: "Check with an easy case",
        body: "10% of 50 is 5. 25 is 50% of 50. If that mental check fails, the two numbers were swapped.",
      },
      {
        title: "Use a calculator when the numbers are messy",
        body: "Decimals, repeated tries, and receipt checks are easier in a form than in a notebook. The result is still the same arithmetic.",
      },
    ],
    examples: [
      {
        title: "15% of 80",
        body: "80 × (15 ÷ 100) = 12. That is the “X% of Y” case: 15 is the percent, 80 is the whole.",
      },
      {
        title: "A $50 item marked 20% off",
        body: "The discount amount is 50 × 0.20 = $10. The price you pay is $40. If you already have two totals, 50 down to 40, that change is also −20%, but you would use a percentage change formula instead of a discount formula.",
      },
    ],
    notes: [
      {
        heading: "Zero in the denominator",
        body: "You can take 0% of a number. You cannot ask what percent a number is of 0. That divides by zero, so there is no answer.",
      },
      {
        heading: "Percent vs percentage points",
        body: "If a rate goes from 10% to 12%, that is a 2 percentage point rise. It is a 20% relative increase. Those two sentences are both true and they are not interchangeable.",
      },
    ],
    faqs: [
      {
        question: "What is 20% of 150?",
        answer:
          "20% of 150 is 30. Multiply 150 by 0.20, or compute 150 × (20 ÷ 100).",
      },
      {
        question: "How do I calculate a percentage increase?",
        answer:
          "Find the difference, divide by the starting value, then multiply by 100. From 80 to 100, the increase is 20, and 20 ÷ 80 × 100 = 25%.",
      },
      {
        question: "Do I need a calculator for this?",
        answer:
          "No. The formulas are short. A calculator is useful when you want to avoid slips or try a few values quickly.",
      },
      {
        question: "Is the work sent to a server?",
        answer:
          "The Percentage Calculator on this site runs in your browser. The numbers stay on the page unless you copy them yourself.",
      },
    ],
    cta: {
      before: "If you want to run the same formulas now, use the free",
      linkLabel: "Percentage Calculator",
      href: "/tools/percentage-calculator",
      after: ". It works in the browser and does not require an account.",
    },
  },
  "how-to-compress-an-image-without-losing-quality": {
    intro:
      "To compress an image without an obvious drop in quality, resize it to the size you will actually display, pick a format that fits the picture, then lower quality in small steps while you compare a preview. Photos usually shrink well as JPEG or WebP. Logos, screenshots, and text stay sharper as PNG.",
    why:
      "A camera file is often thousands of pixels wide. If a website shows it at 800 pixels, most of that data is unused. Compression after a resize is what makes pages load faster and emails accept the attachment.",
    stepsHeading: "How to reduce image size",
    steps: [
      {
        title: "Resize to the layout width first",
        body: "If the photo will sit in an 800 pixel column, export near that width before you squeeze quality. Shrinking a 4000 pixel original is the largest win you will get.",
      },
      {
        title: "Choose a format that matches the picture",
        body: "Photographs belong in JPEG or WebP. Flat graphics, UI shots, and type belong in PNG. Turning a logo into a low quality JPEG is how you get muddy edges.",
      },
      {
        title: "Lower quality a little at a time",
        body: "Start at a moderate JPEG or WebP setting, look at the preview next to the original, then drop further only if the file is still too large.",
      },
      {
        title: "Stop when the file is small enough",
        body: "There is no prize for the smallest possible file. If it already fits the email cap or the page budget, keep the extra detail.",
      },
    ],
    examples: [
      {
        title: "A blog photo that will not upload",
        body: "A 6 MB camera JPEG displayed at article width can often land under 300 KB after a resize and a moderate quality pass. That is usually enough for a CMS upload limit without making the photo look soft.",
      },
    ],
    notes: [
      {
        heading: "Lossless is not always the goal",
        body: "Lossless keeps every pixel. That is right for archives and graphics. For photos on the web, a modest lossy setting is usually a better trade.",
      },
      {
        heading: "Do not recompress the same JPEG over and over",
        body: "Each extra lossy save can add more artifacts. Work from the original when you can.",
      },
    ],
    faqs: [
      {
        question: "How do I reduce image size for a website?",
        answer:
          "Resize to the displayed width, then compress. Serving a full camera resolution image and hoping the browser scales it still makes visitors download the large file.",
      },
      {
        question: "Will compression always be visible?",
        answer:
          "Not at moderate settings on photographs. You will see it sooner on screenshots, small text, and already compressed files.",
      },
      {
        question: "Does this site upload my image?",
        answer:
          "The image tools on Tools Star Hub decode and encode in your browser. The file stays on your device unless you download the result.",
      },
      {
        question: "What if I need a PDF instead of an image?",
        answer:
          "Use Image to PDF when the source is pictures. To shrink an existing PDF, use the PDF Compressor. Size reduction there is not guaranteed.",
      },
    ],
    cta: {
      before: "To compress a photo on this device, open the",
      linkLabel: "Image Compressor",
      href: "/tools/image-compressor",
      after: ". Files are processed locally in your browser.",
    },
  },
  "what-is-json": {
    intro:
      "JSON is a text format for structured data. Objects use named fields in curly braces, arrays are ordered lists in square brackets, and values are strings, numbers, booleans, null, objects, or arrays. APIs, config files, and many logs use it because both people and programs can read it.",
    why:
      "You usually meet JSON when a request fails, a config file will not load, or you need to inspect a payload. Knowing the shape is enough to spot a trailing comma or an unquoted key.",
    stepsHeading: "How to read and check JSON",
    steps: [
      {
        title: "Look at the outer shape",
        body: "Curly braces start an object. Square brackets start an array. Keys are quoted strings. A comma after the last item is invalid in standard JSON.",
      },
      {
        title: "Validate before you minify",
        body: "Pretty printing makes nested data easier to scan. Minifying is for transport or storage after the document is known to be valid.",
      },
      {
        title: "Fix the first error, then recheck",
        body: "One missing quote or extra comma can make the rest of the file look wrong. Correct the reported issue and validate again instead of rewriting by hand.",
      },
    ],
    examples: [
      {
        title: "A small valid object",
        body: '{ "name": "Ada", "id": 1 } is valid JSON. Unquoted keys, unquoted strings, comments, and a trailing comma are not.',
      },
    ],
    notes: [
      {
        heading: "JSON is not a JavaScript object",
        body: "The syntax was inspired by JavaScript, but JSON does not allow functions, comments, or undefined, and keys must be quoted.",
      },
    ],
    faqs: [
      {
        question: "How do I format JSON online?",
        answer:
          "Paste the text into a formatter, run format or validate, then copy the result. On Tools Star Hub this happens in the browser, so the payload is not uploaded.",
      },
      {
        question: "Why did my JSON fail to parse?",
        answer:
          "The usual causes are a trailing comma, single quotes instead of double quotes, or a comment. Standard JSON allows none of those.",
      },
      {
        question: "Should I minify JSON for production?",
        answer:
          "Minifying saves bytes on the wire. Keep a pretty copy for editing. Do not minify until the document validates.",
      },
      {
        question: "Do I need an account to format JSON here?",
        answer: "No. The JSON Formatter runs in the browser without a login.",
      },
    ],
    cta: {
      before: "To pretty print or minify a payload on this device, use the",
      linkLabel: "JSON Formatter",
      href: "/tools/json-formatter",
      after: ". Invalid input is rejected with an error instead of a silent rewrite.",
    },
  },
  "how-to-create-a-utm-url": {
    intro:
      "A UTM URL is a normal destination link plus campaign query parameters. The usual fields are utm_source, utm_medium, and utm_campaign. Optional fields are utm_term and utm_content. Analytics tools read those values to show which campaign sent the visit.",
    why:
      "Without UTM tags, newsletter clicks, paid ads, and social posts can look like the same anonymous traffic. Consistent names keep those rows grouped in reports.",
    stepsHeading: "How to create UTM tracking links",
    steps: [
      {
        title: "Start from the real destination",
        body: "Use the page you want people to open. Do not add a second campaign onto a URL that already has conflicting UTM tags.",
      },
      {
        title: "Fill source, medium, and campaign the same way every time",
        body: "Source is the origin, such as newsletter or google. Medium is the channel, such as email or cpc. Campaign is the name of this push. Keep spelling stable so reports do not split into near duplicates.",
      },
      {
        title: "Add term or content only when they help",
        body: "utm_term is often the paid keyword. utm_content can tell two creatives apart. Skip them if you will not look at those breakdowns.",
      },
      {
        title: "Build the link, then share it",
        body: "A builder writes the query string so you do not forget an equals sign. If the link will be printed, a QR code can point at the finished URL. Do not put passwords or private tokens in campaign links.",
      },
    ],
    examples: [
      {
        title: "A newsletter issue",
        body: "https://example.com/launch?utm_source=newsletter&utm_medium=email&utm_campaign=april-launch sends readers to /launch and labels the visit as that April email campaign.",
      },
    ],
    notes: [
      {
        heading: "Do not tag every internal link",
        body: "UTM fields are for campaigns you send people into. Tagging site navigation makes reports noisy and can overwrite a real campaign if someone clicks around.",
      },
      {
        heading: "UTM tags do not change the page by themselves",
        body: "They are information for analytics. The website only reacts if you write code that reads them.",
      },
    ],
    faqs: [
      {
        question: "What is a UTM tracking link?",
        answer:
          "It is a URL with utm_ query parameters that record source, medium, campaign, and sometimes term or content for analytics.",
      },
      {
        question: "Which UTM parameters are required?",
        answer:
          "In practice you want source, medium, and campaign. The others are optional.",
      },
      {
        question: "Can I put a UTM link in a QR code?",
        answer:
          "Yes. Build the full URL first, then encode that URL in the QR image. The QR does not create a separate tracking database.",
      },
      {
        question: "Should login or checkout links get UTM tags?",
        answer:
          "Be careful. Extra query parameters can break some sessions or leak campaign names into logs. Use them on marketing landings, not on every private flow.",
      },
    ],
    cta: {
      before: "To assemble the query string without typing it by hand, use the",
      linkLabel: "UTM Builder",
      href: "/tools/utm-builder",
      after: ". It runs in your browser.",
    },
  },
  "how-to-calculate-age": {
    intro:
      "To calculate age, count whole years from the date of birth to the target date, then leftover months, then leftover days. Do not divide total days by 365. Months have different lengths, and leap days exist, so a calendar walk matches how people usually state age.",
    why:
      "Forms, benefits, and school cutoffs care about the civil calendar, not an average year length. A 365.25 shortcut can be off by a day around birthdays and leap years.",
    stepsHeading: "How to calculate age from a date of birth",
    steps: [
      {
        title: "Pick both dates",
        body: "Use the date of birth and the date you care about. If you want age today, the second date is today. Time of day is ignored in this method.",
      },
      {
        title: "Count completed years first",
        body: "Move forward year by year until you cannot add another full year without passing the target date. That count is the age in years.",
      },
      {
        title: "Then count leftover months and days",
        body: "Someone can be 0 years, 11 months, and 30 days old. Rounding that to “almost 1 year” hides the leftover.",
      },
      {
        title: "Watch leap day birthdays",
        body: "29 February exists only in leap years. The following 28 February in a common year is not a full year later on the calendar. Count the actual dates instead of inventing a 29 February in a common year.",
      },
    ],
    examples: [
      {
        title: "A round birthday",
        body: "Born 1 January 2000, measured on 1 January 2026, is 26 years, 0 months, and 0 days.",
      },
      {
        title: "A leap day span",
        body: "From 29 February 2000 to 28 February 2001 is 0 years, 11 months, and 30 days in this counting method.",
      },
    ],
    notes: [
      {
        heading: "This is not a legal determination",
        body: "Age rules for licenses, benefits, or contracts can use a specific local definition. Check that definition if the result will be used for a formal decision.",
      },
    ],
    faqs: [
      {
        question: "How is age calculated from a date of birth?",
        answer:
          "Walk the civil calendar from the birth date to the target date. Report completed years, then remaining months, then remaining days.",
      },
      {
        question: "Does this use 365.25 day years?",
        answer:
          "No. It uses calendar dates. That matches how people usually say age.",
      },
      {
        question: "What if I only need years?",
        answer:
          "You can ignore the leftover months and days, but keep the year count from the calendar method. Do not switch to total days divided by 365.",
      },
      {
        question: "Is the date of birth sent anywhere?",
        answer:
          "The Age Calculator on this site runs in your browser. The dates stay on the page unless you copy them.",
      },
    ],
    cta: {
      before: "To count years, months, and days without doing the calendar walk by hand, use the",
      linkLabel: "Age Calculator",
      href: "/tools/age-calculator",
      after: ". You can compare today or another date.",
    },
  },
  "how-to-work-with-pdfs-in-your-browser": {
    intro:
      "You can compress a PDF, extract its text, inspect metadata, merge or split pages, and turn text into a PDF in the browser. The file is read in your tab. It is not uploaded to Tools Star Hub. Pick the tool that matches the job, and expect large files to be slower on a phone.",
    why:
      "Email caps, form uploads, and quick edits often do not need a desktop PDF suite. Local processing also keeps the document on the device you already trust.",
    stepsHeading: "How to work with a PDF locally",
    steps: [
      {
        title: "Match the tool to the task",
        body: "Use page count if you only need how many pages. Split or merge when you are rearranging pages. Compress when the file is too large to send. Extract text when you need the words. Text to PDF when you are starting from notes.",
      },
      {
        title: "To compress a PDF for email, try a light preset first",
        body: "Open the PDF Compressor, select the file, choose a rewrite or raster preset, then download and check the new size. An already optimized file may barely shrink. Strong compression can turn pages into images so text is no longer selectable.",
      },
      {
        title: "To extract text, use a PDF that already contains text",
        body: "PDF to Text reads selectable text. It does not run OCR. A scanned image of a page often comes out empty.",
      },
      {
        title: "Treat metadata removal as Info field cleanup",
        body: "Clearing Title and Author is useful before you share a file. It is not a forensic wipe. Body text can still identify someone.",
      },
    ],
    examples: [
      {
        title: "An 18 MB PDF that will not attach",
        body: "If an email service limits attachments to 10 MB, run Balanced compression and compare the result. If the PDF is mostly photos, a stronger raster preset may get under the cap, with the tradeoff that text may become an image.",
      },
    ],
    notes: [
      {
        heading: "Compression is not guaranteed",
        body: "Some PDFs are already small. The tool reports the new size so you can decide whether to send that file.",
      },
      {
        heading: "Memory limits are real",
        body: "Parsing and rendering pages can exhaust a phone. Split a very large document first if the tab struggles.",
      },
    ],
    faqs: [
      {
        question: "How can I reduce PDF file size?",
        answer:
          "Use a PDF compressor, start with a lighter preset, and check the output size. If the file is full of high resolution images, a stronger preset may help and may reduce quality.",
      },
      {
        question: "How do I extract text from a PDF?",
        answer:
          "Open a PDF to text tool, select the file, and copy the extracted pages. This works for text stored in the PDF. It does not read scanned pictures of words.",
      },
      {
        question: "Are my PDFs uploaded?",
        answer:
          "No. These Tools Star Hub tools process the file in your browser. The site does not receive the document.",
      },
      {
        question: "Can I turn notes into a PDF?",
        answer:
          "Yes. Paste into Text to PDF for a simple document. Use Image to PDF when the source is pictures.",
      },
    ],
    cta: {
      before: "If the immediate job is a smaller attachment, start with the",
      linkLabel: "PDF Compressor",
      href: "/tools/pdf-compressor",
      after: ". Related tools for text, metadata, merge, and split are linked on that page.",
    },
  },
  "how-to-clean-and-compare-text": {
    intro:
      "To clean a list, remove duplicate lines, tidy whitespace, then sort. To compare two drafts, paste both sides into a diff tool and read added, removed, and unchanged blocks. On Tools Star Hub this stays in the browser. Pasted text is not saved to an account.",
    why:
      "Spreadsheets, logs, and policy drafts pick up repeats, odd spacing, and silent edits. Cleaning first makes a comparison easier to trust.",
    stepsHeading: "How to clean and compare text",
    steps: [
      {
        title: "Remove duplicate lines when the list should be unique",
        body: "Keep the first occurrence of each line. Turn on trim or case insensitive matching only when those differences should count as the same row.",
      },
      {
        title: "Clean spacing on purpose",
        body: "Collapse repeated spaces, convert tabs, or drop empty rows only if you chose those options. Leave indentation alone unless you mean to change it.",
      },
      {
        title: "Sort if order should not matter",
        body: "Alphabetical, numeric, and length sorts each answer a different question. Sorting two lists the same way can make a later diff smaller.",
      },
      {
        title: "Compare the two versions",
        body: "Paste original and modified text into a diff checker. Start with line mode. Switch to words if a sentence was edited in place. Look at the labels, not color alone.",
      },
    ],
    examples: [
      {
        title: "A paste from a spreadsheet",
        body: "Trim each line, drop empty rows, remove duplicates, then sort. A word or line count afterwards confirms the list length.",
      },
      {
        title: "Two drafts of the same page",
        body: "Paste each version into the Text Diff Checker. Line mode shows inserted and deleted paragraphs. Word mode shows an edit inside a sentence.",
      },
    ],
    notes: [
      {
        heading: "The original box should stay intact until you replace it",
        body: "Run the action with a button. That avoids wiping the source if the options were wrong.",
      },
      {
        heading: "Very large pastes have a cap",
        body: "There is a size limit so the tab stays usable. Split huge logs first.",
      },
    ],
    faqs: [
      {
        question: "How do I compare two pieces of text?",
        answer:
          "Paste the original into one box and the modified text into the other, then run a diff. Read added, removed, and unchanged blocks. Do not rely on color alone.",
      },
      {
        question: "How do I remove duplicate lines?",
        answer:
          "Paste the list into a duplicate line remover and keep the first copy of each line. Optionally ignore case or surrounding spaces.",
      },
      {
        question: "Is pasted text saved?",
        answer:
          "No. These tools do not write your text to local storage or to a server. Closing the tab discards it.",
      },
      {
        question: "Should I sort before I diff?",
        answer:
          "Only if order is not part of the meaning. Sorting hides moved rows and can hide a real change in sequence.",
      },
    ],
    cta: {
      before: "To compare two drafts now, open the",
      linkLabel: "Text Diff Checker",
      href: "/tools/text-diff",
      after: ". Duplicate line, whitespace, and sort tools sit in the same text category.",
    },
  },
  "how-to-calculate-a-tip": {
    intro:
      "A tip is the bill multiplied by the tip rate. Add that amount to the bill for the total, then divide the tip and the total by the number of people when the check is shared equally.",
    why:
      "The multiplication is short. The mistakes are about which number you start from. A receipt can list tax, a suggested tip, and a service charge on separate lines. An equal split also rounds each person's share to cents, so two people can add their shares and miss the table total by one cent.",
    stepsHeading: "How to calculate a tip",
    steps: [
      {
        title: "Start with the amount you intend to tip on",
        body: "Use the pre-tip total if you tip on the whole check. Use the subtotal if you tip on food and drink only and tax is listed apart. The calculator uses the number you type.",
      },
      {
        title: "Turn the rate into a decimal and multiply",
        body: "15% is 0.15, 18% is 0.18, and 20% is 0.20. The tip is the bill times that decimal. On a bill of 100, a 15% tip is 15.00.",
      },
      {
        title: "Add the tip to the bill",
        body: "That sum is what the table pays. On the same check, 100 plus 15 is 115.",
      },
      {
        title: "Divide by the number of people only when the split is equal",
        body: "Tip per person is the tip divided by the headcount. Total per person is the total divided by the same headcount. Two people on the example each pay 57.50, and 7.50 of that is tip. If one person ordered more, figure their share of the bill first, then run the tip on that share alone.",
      },
      {
        title: "Round each line to cents",
        body: "The page rounds the tip, the total, and each share to two decimal places. It does not round up to the next dollar. If the rounded shares miss the table total by a cent, agree who covers that cent.",
      },
    ],
    examples: [
      {
        title: "A $100 check, 15% tip, two people",
        body: "Bill 100, tip rate 15, people 2. The tip is 15. The total is 115. Each person pays 57.50, of which 7.50 is tip.",
      },
      {
        title: "A bill of 84 at 18% for two people",
        body: "The tip is 15.12. The total is 99.12. Each person pays 49.56, including 7.56 of tip.",
      },
    ],
    notes: [
      {
        heading: "Blank, zero, and negative bills",
        body: "A bill of 0 is allowed and produces a tip of 0. A blank bill is not treated as zero. A negative bill is rejected. The number of people must be a whole number of at least 1.",
      },
      {
        heading: "A rate of 0",
        body: "A rate of 0 is valid when the receipt already includes a service charge you do not want to add again. The page does not detect that charge. The labels have no currency symbol, so the same arithmetic works in dollars or another unit.",
      },
      {
        heading: "Tax and discounts",
        body: "If a coupon comes off before the tip, take the discount first and tip on what remains. If sales tax is still separate and you want it inside the bill you tip on, add the tax first, then tip.",
      },
    ],
    faqs: [
      {
        question: "How do I find 20% without a calculator?",
        answer:
          "Move the decimal one place to get 10%, then double it. On 64, 10% is 6.40 and 20% is 12.80. The total is 76.80.",
      },
      {
        question: "Should the tip include tax?",
        answer:
          "That depends on the number you type. If the bill already includes tax, the tip includes tax. If you want the pre-tax amount, type the subtotal. The page does not pull tax back out of a combined total.",
      },
      {
        question: "What if the receipt already prints a suggested tip?",
        answer:
          "Use that percentage if you want to match the receipt. The preset rates are 10%, 15%, 18%, 20%, and 25%, and you can type another rate. A suggested line on the receipt is not added unless you enter it.",
      },
      {
        question: "Why can an even split be a cent off?",
        answer:
          "Each share is rounded to cents on its own. Some rates do not divide into even cents. The table total is still the bill plus the tip before that split.",
      },
    ],
    cta: {
      before: "To get the tip, the total, and each person's share from a bill, use the",
      linkLabel: "Tip Calculator",
      href: "/tools/tip-calculator",
      after: ". It stays in the browser and does not require an account.",
    },
  },
  "how-to-convert-hex-to-rgb": {
    intro:
      "A 6-digit hex color is three pairs of base-16 digits: red, green, then blue. Convert each pair to a number from 0 to 255. That is the RGB color.",
    why:
      "Stylesheets often store a color as hex. A contrast check, a design file, or a gradient stop may want rgb() or hsl(). The conversion writes the same channels in another form.",
    stepsHeading: "How to convert hex to RGB",
    steps: [
      {
        title: "Drop the # if it is there",
        body: "FFFFFF and #FFFFFF are the same color. A word such as red is rejected.",
      },
      {
        title: "Split a 6-digit value into three pairs",
        body: "For #336699 the pairs are 33, 66, and 99. Each pair is one channel.",
      },
      {
        title: "Convert each pair from base 16",
        body: "The first digit is the sixteens place and the second is the ones place. 33 is 3 times 16 plus 3, which is 51. 66 is 102. 99 is 153. The color is rgb(51, 102, 153). FF is 255 and 00 is 0.",
      },
      {
        title: "Expand a 3-digit value by doubling each digit",
        body: "#fff becomes #ffffff, which is rgb(255, 255, 255). #abc becomes #aabbcc.",
      },
      {
        title: "Read an 8-digit value as RGB plus opacity",
        body: "#336699cc keeps rgb(51, 102, 153). The last pair, CC, is 204. 204 divided by 255 is 0.80, so the color is 80% opaque. A 6-digit color has no alpha pair, so it is fully opaque.",
      },
      {
        title: "Take HSL from those channels when you need it",
        body: "For #336699 the HSL is hsl(210, 50%, 40%). The page calculates that from the hex. It is not a second field you can edit.",
      },
    ],
    examples: [
      {
        title: "#336699",
        body: "The pairs 33, 66, and 99 become rgb(51, 102, 153). The same color is hsl(210, 50%, 40%).",
      },
      {
        title: "#fff and #336699cc",
        body: "#fff is rgb(255, 255, 255). #336699cc is the same RGB as #336699, at 80% opacity.",
      },
    ],
    notes: [
      {
        heading: "What is accepted",
        body: "Only 3-digit, 6-digit, and 8-digit hex is accepted, with or without #. A color name such as red is rejected. A string that already says rgb() is rejected.",
      },
      {
        heading: "HSL is calculated, not typed",
        body: "You cannot edit the HSL line and convert it back on this page. If the color came from a photo, sample it with the Image Color Analyzer or choose it with the Color Picker, then paste the hex here.",
      },
    ],
    faqs: [
      {
        question: "What do 00 and FF mean?",
        answer: "00 is 0 and FF is 255. #000000 is black. #ffffff is white.",
      },
      {
        question: "Does hex to RGB change the color?",
        answer: "Red, green, and blue stay the same numbers. rgb(51, 102, 153) and #336699 are one color.",
      },
      {
        question: "How do I read the alpha pair?",
        answer:
          "The last two digits are a fraction of 255. CC is 204, and 204 divided by 255 is 0.80, which is 80% opacity. A missing pair means the color is fully opaque.",
      },
      {
        question: "When is HSL the useful copy?",
        answer:
          "Use it when you want the color lighter or more saturated without picking new channel numbers. To check it as text on another color, use the Color Contrast Checker. To fade between two hex colors, use the CSS Gradient Generator.",
      },
    ],
    cta: {
      before: "To convert a 3-digit, 6-digit, or 8-digit hex color, use",
      linkLabel: "Hex to RGB",
      href: "/tools/hex-to-rgb",
      after: ". The conversion stays in the browser and does not require an account.",
    },
  },
  "how-to-count-pdf-pages": {
    intro:
      "The page count is the number of pages stored in the PDF, including blank pages and a cover. Read that count from the file before you split, merge, or compress it.",
    why:
      "A footer that says page 1 of 8, a printer dialog, and the PDF itself can disagree. A tool with a page limit is checking the count inside the file. Knowing that number first tells you whether a split range or a merge will fit.",
    stepsHeading: "How to count PDF pages",
    steps: [
      {
        title: "Choose the PDF",
        body: "A file over 20 MB is refused before a count is shown.",
      },
      {
        title: "Read the page count, file name, and size",
        body: "Those three facts are the result. There is no page preview and no download.",
      },
      {
        title: "Count blank pages and a cover",
        body: "They are pages in the file, so they are in the number. A cover plus ten content pages plus a blank back is 12 pages.",
      },
      {
        title: "Stop if the file will not open",
        body: "A file that is not a PDF, a damaged file, or a file that asks for a password is not counted. Unlock it in the app that created it, then try again.",
      },
      {
        title: "Use the count for the next job",
        body: "Page 1 is the first page stored in the file. A splitter copies ranges such as 1-3 into a new PDF and leaves the original in place. A merger adds the counts of the files you join. This page does not extract text, split, or reorder anything.",
      },
    ],
    examples: [
      {
        title: "A 12-page brochure",
        body: "A file that opens and reports 12 pages has 12 pages in the PDF, along with its name and size. If that file is a cover, ten content pages, and a blank back, the count is still 12.",
      },
    ],
    notes: [
      {
        heading: "Page labels are not the count",
        body: "Labels such as i, ii, and iii are not the count. A scanned PDF still has a page count when it opens as a PDF. Each sheet saved as a page counts, even when there is no text layer to copy.",
      },
      {
        heading: "What to open next",
        body: "After you know the length, PDF Metadata reads the info fields, and PDF Splitter copies a range. Page numbers start at 1, and a reversed range is rejected by the splitter.",
      },
    ],
    faqs: [
      {
        question: "Does a blank page count?",
        answer: "Yes. A blank page is still a page in the PDF. Covers count the same way.",
      },
      {
        question: "Can I count a scanned PDF?",
        answer:
          "Yes, if the file opens as a PDF. A missing text layer does not remove those pages. A scan saved as images is not counted here.",
      },
      {
        question: "Why might a printer show a different number?",
        answer:
          "The printer can use a page range, skip blanks, or fit one file page onto more than one sheet. That changes the print job. The file's page count stays the same.",
      },
      {
        question: "What files are refused?",
        answer:
          "A file over 20 MB, a file that is not a PDF, a damaged file, and a password-protected file. None of those returns a count.",
      },
    ],
    cta: {
      before: "To read the page count, file name, and size, use the",
      linkLabel: "PDF Page Counter",
      href: "/tools/pdf-page-counter",
      after: ". The count is read in this tab, and the PDF is not posted to a server.",
    },
  },
  "how-to-add-sales-tax": {
    intro:
      "Sales tax is the price multiplied by the tax rate. Add that tax to the price to get what you pay.",
    why:
      "The page does not look up a city or state rate. You type the percentage. A receipt can already include tax, and adding the rate again would tax the tax.",
    stepsHeading: "How to add sales tax",
    steps: [
      {
        title: "Start from the pre-tax price",
        body: "If the number you have already includes tax, this calculation will add tax a second time.",
      },
      {
        title: "Turn the rate into a decimal",
        body: "8% is 0.08. A rate of 0 is valid and adds nothing. A negative rate is rejected. A rate above 100% is allowed, because some stacked taxes work that way.",
      },
      {
        title: "Multiply the price by that decimal",
        body: "That product is the tax, rounded to cents.",
      },
      {
        title: "Add the tax to the original price",
        body: "That sum is the final price. The labels have no currency symbol.",
      },
    ],
    examples: [
      {
        title: "8% on 49.99",
        body: "The tax is 4.00 after rounding to cents, and the final price is 53.99.",
      },
      {
        title: "A zero rate",
        body: "A price of 20 at 0% has a tax of 0 and a final price of 20.",
      },
    ],
    notes: [
      {
        heading: "Discounts and tips",
        body: "If a coupon comes off first, use the Discount Calculator and then tax the result. A restaurant tip is a separate step on the Tip Calculator. This page does not split one tax amount across several items.",
      },
    ],
    faqs: [
      {
        question: "How do I add 8% by hand?",
        answer:
          "Move the decimal two places for 1%, then multiply by 8. On 49.99, 1% is about 0.50 and 8% is about 4.00. The page rounds the tax to cents, which can differ by a cent from a register that rounds each line differently.",
      },
      {
        question: "What if the shelf price already includes tax?",
        answer: "Start over from the pre-tax price. This tool only adds tax. It does not remove tax from a combined total.",
      },
      {
        question: "Will this use my local rate?",
        answer: "No. You supply the percentage.",
      },
      {
        question: "Why is there no currency symbol?",
        answer: "The same multiplication works for any currency.",
      },
    ],
    cta: {
      before: "To add a rate you already know, use the",
      linkLabel: "Sales Tax Calculator",
      href: "/tools/sales-tax-calculator",
      after: ".",
    },
  },
  "how-to-convert-units": {
    intro:
      "Pick the category, type the number, and choose the two units. Length and weight convert by a fixed factor. Temperature uses a formula, not a simple multiply.",
    why:
      "A recipe, a shipment, or a weather reading usually needs one number in another unit. Mixing a length factor into a temperature conversion gives a nonsense result, because Celsius and Fahrenheit do not share a zero.",
    stepsHeading: "How to convert a unit",
    steps: [
      {
        title: "Choose length, weight, or temperature",
        body: "Currency, area, and volume are not on this page. Square feet belong on the Square Footage Calculator.",
      },
      {
        title: "Type the value and choose the units",
        body: "The result updates as you type. Swap reverses the pair.",
      },
      {
        title: "Use a fixed factor for length and weight",
        body: "The page converts through meters or kilograms. One inch is 2.54 centimeters exactly. One meter is 100 centimeters, which is about 3.28084 feet.",
      },
      {
        title: "Use the scale formulas for temperature",
        body: "0°C is 32°F and 273.15 K. A temperature below absolute zero is rejected.",
      },
    ],
    examples: [
      {
        title: "1 meter",
        body: "1 meter converts to 100 centimeters and about 3.28084 feet.",
      },
      {
        title: "0°C",
        body: "0°C converts to 32°F and 273.15 K.",
      },
    ],
    notes: [
      {
        heading: "More decimals than a measuring tool",
        body: "Length and mass can show more decimal places than a tape measure or a kitchen scale would. Round to the precision you can actually measure. The page does not convert currency.",
      },
    ],
    faqs: [
      {
        question: "How do I convert inches to centimeters?",
        answer: "Multiply inches by 2.54. That factor is exact on this page.",
      },
      {
        question: "Why isn’t Fahrenheit a simple multiply of Celsius?",
        answer: "The scales use different zero points. You add or subtract 32 as well as scaling by 9/5 or 5/9.",
      },
      {
        question: "Can I convert square feet or dollars here?",
        answer: "No. Area is the Square Footage Calculator. Currency is not included.",
      },
      {
        question: "What does absolute zero mean here?",
        answer: "A Kelvin value below 0, or the matching Celsius or Fahrenheit value, is rejected because it is not a physical temperature on these scales.",
      },
    ],
    cta: {
      before: "To convert a length, weight, or temperature you already have, use the",
      linkLabel: "Unit Converter",
      href: "/tools/unit-converter",
      after: ".",
    },
  },
  "how-to-count-days-between-dates": {
    intro:
      "The exact count is the number of midnights between the start date and the end date. A calendar span in years, months, and days is a second description of the same two dates, and it is not the same number.",
    why:
      "People ask how long a period is and then mix 31 days with 1 month. Both can be right. They are different units. Time of day is ignored.",
    stepsHeading: "How to count the days",
    steps: [
      {
        title: "Choose the start date and the end date",
        body: "The page uses the dates only. Hours and minutes are not part of the count.",
      },
      {
        title: "Read the total days for an exact count",
        body: "That number is the midnights from the start date up to the end date. The same date twice is 0.",
      },
      {
        title: "Read weeks from that day count",
        body: "Weeks are the day count divided by 7, plus the leftover days.",
      },
      {
        title: "Read the calendar span when months matter",
        body: "If the end day falls earlier in the month, the count borrows the real length of the previous month. February is not 30 days.",
      },
      {
        title: "Treat the average-month line as a rough size",
        body: "It is the day count divided by 30.44. It is not a second calendar result.",
      },
    ],
    examples: [
      {
        title: "1 March to 1 April in a non-leap year",
        body: "The exact count is 31 days, which is 4 weeks and 3 days. The calendar span is 0 years, 1 month, and 0 days.",
      },
      {
        title: "The same date twice",
        body: "2026-09-23 to 2026-09-23 is 0 days.",
      },
    ],
    notes: [
      {
        heading: "Reversed dates and weekends",
        body: "If the end date is earlier, the counts stay positive and the page says the dates were reversed. Weekends are included. Skipping weekends is the Business Days Calculator. An age from a birth date is the Age Calculator.",
      },
    ],
    faqs: [
      {
        question: "How many days are between two dates?",
        answer: "Count the midnights from the start date up to the end date. The same day is 0.",
      },
      {
        question: "Why isn’t 1 month always 30 days?",
        answer: "Calendar months have different lengths. The total day count stays exact. The month line follows the calendar.",
      },
      {
        question: "Does the time of day matter?",
        answer: "No. Only the dates are used.",
      },
      {
        question: "What is the average-month number?",
        answer: "It is the day count divided by 30.44. Use total days for a deadline and the calendar span for a rental or a subscription.",
      },
    ],
    cta: {
      before: "To count days, weeks, and a calendar span from two dates, use the",
      linkLabel: "Date Difference Calculator",
      href: "/tools/date-difference-calculator",
      after: ".",
    },
  },
  "how-much-to-save-for-a-goal": {
    intro:
      "The contribution is the amount you add each period so a starting balance reaches a target. At 0% interest, that amount is the gap divided by the number of deposits.",
    why:
      "You type the time. The page solves for the contribution. It does not solve for the date. The rate is an assumption you choose, not a forecast of an account.",
    stepsHeading: "How to find the contribution",
    steps: [
      {
        title: "Enter the target and what you have already saved",
        body: "If current savings are already at or above the target, the page asks for a higher goal or a lower starting amount. It does not show a contribution of 0 as a new plan.",
      },
      {
        title: "Enter an annual rate, or 0",
        body: "Use 0 if you do not want to assume interest. Sample rows at 0%, 3%, 5%, and 7% are other assumptions, not predictions.",
      },
      {
        title: "Enter the years and how often you add money",
        body: "The choices are monthly, every two weeks, weekly, or once a year.",
      },
      {
        title: "Divide the gap when the rate is 0",
        body: "At a rate above 0, current savings grow first, and each contribution is added at the end of the period. The payment is the amount that makes the ending balance equal the target.",
      },
      {
        title: "Read interest apart from money you put in",
        body: "A higher assumed rate usually lowers the contribution, because the balance is estimated to earn interest. That rate is not guaranteed, and the page does not subtract taxes or fees.",
      },
    ],
    examples: [
      {
        title: "10,000 over 2 years at 0%",
        body: "Nothing saved, monthly deposits, is 24 periods. The contribution is 416.67 each month. Interest is 0, and the deposits add up to 10,000.",
      },
      {
        title: "4,000 already saved toward 10,000",
        body: "At 0% for 1 year, monthly, the gap is 6,000 over 12 months, so the contribution is 500.",
      },
    ],
    notes: [
      {
        heading: "Which calculator to use",
        body: "Use the Compound Interest Calculator when you already know the contribution and want the ending balance. This page runs the question the other way.",
      },
    ],
    faqs: [
      {
        question: "How do I split a goal with no interest?",
        answer: "Subtract what you have from the target, then divide by the number of deposits. 10,000 over 24 months with nothing saved is 416.67 a month.",
      },
      {
        question: "Why do the 3%, 5%, and 7% rows differ?",
        answer: "Each row uses that rate as an assumption. A higher rate usually means a smaller contribution. None of the rows is a promised return.",
      },
      {
        question: "Can I ask how long a fixed deposit will take?",
        answer: "You enter the years. The page then solves for the contribution.",
      },
      {
        question: "What if I have already reached the goal?",
        answer: "Raise the target or lower the starting amount. A reached goal is rejected.",
      },
    ],
    cta: {
      before: "To solve for the regular contribution, use the",
      linkLabel: "Savings Goal Calculator",
      href: "/tools/savings-goal-calculator",
      after: ".",
    },
  },
  "how-to-count-characters": {
    intro:
      "A character count is the number of Unicode code points in the text, including spaces. The page also shows words, lines, and a second total that leaves spaces out.",
    why:
      "A form, a social post, or a meta description often caps characters, not words. A word count can look fine while the character count is already over the limit.",
    stepsHeading: "How to count characters",
    steps: [
      {
        title: "Paste or type the text",
        body: "The counts update as you type.",
      },
      {
        title: "Read the total that matches the limit",
        body: "Use the main character total when the limit includes spaces. Use the without-spaces total when the limit ignores spaces.",
      },
      {
        title: "Read lines from the line breaks",
        body: "A trailing blank line is included. An empty box is 0 lines.",
      },
      {
        title: "Treat one emoji as one character",
        body: "A character is one code point, even when the emoji is drawn from several symbols.",
      },
    ],
    examples: [
      {
        title: "A letter and an emoji",
        body: "“A😀” is 2 characters: one letter and one emoji.",
      },
    ],
    notes: [
      {
        heading: "Sentences are a different tool",
        body: "This page does not detect sentence boundaries. The Word Counter is the tool that counts words and sentences. Clearing the box removes the text from the page.",
      },
    ],
    faqs: [
      {
        question: "Does a space count?",
        answer: "Yes, in the main character total. The without-spaces total leaves spaces out.",
      },
      {
        question: "Does an emoji count as more than one character?",
        answer: "On this page, one emoji is one Unicode character.",
      },
      {
        question: "How is a line counted?",
        answer: "Each line break starts a line. An empty box is 0 lines.",
      },
      {
        question: "When should I use the word counter instead?",
        answer: "Use it when the limit is words or sentences. This page does not detect sentence boundaries.",
      },
    ],
    cta: {
      before: "To check a character cap, including spaces and a without-spaces total, use the",
      linkLabel: "Character Counter",
      href: "/tools/character-counter",
      after: ".",
    },
  },
  "what-is-base64": {
    intro:
      "Base64 turns bytes into a string of letters, numbers, plus signs, and slashes. Encode text by turning it into UTF-8 bytes first, then into that alphabet. Decode runs the same steps backward.",
    why:
      "People use it to embed a short string in a place that expects plain text. It is not a way to hide a password. Anyone who can read the result can decode it.",
    stepsHeading: "How to encode or decode",
    steps: [
      {
        title: "Paste the text or the Base64 string",
        body: "Encode starts from text. Decode starts from Base64.",
      },
      {
        title: "Press Encode or Decode",
        body: "Swap exchanges the two boxes.",
      },
      {
        title: "Expect UTF-8 before Base64",
        body: "Accented letters and emoji can round-trip because the text is converted to UTF-8 first.",
      },
      {
        title: "Stop if decode fails",
        body: "A broken string is rejected. The page does not guess the missing characters. A file drop is not accepted.",
      },
    ],
    examples: [
      {
        title: "Hi",
        body: "“Hi” encodes to SGk=. Decoding SGk= returns Hi.",
      },
    ],
    notes: [
      {
        heading: "Padding and other tools",
        body: "The output can end with one or two equals signs. Those pad the last group so the length fits the alphabet. They are not a checksum. A hash of text you already have is the Hash Generator. A URL query value uses the URL Encoder, not Base64.",
      },
    ],
    faqs: [
      {
        question: "Is Base64 encryption?",
        answer: "No. It changes how the bytes are written. Do not use it for a password or other private text.",
      },
      {
        question: "Why does the result end with =?",
        answer: "Padding fills the last group. SGk= is “Hi” with one pad character.",
      },
      {
        question: "Why did decode fail?",
        answer: "The string is not valid Base64, or it was cut off. The page rejects it instead of guessing.",
      },
      {
        question: "Can I encode a file?",
        answer: "No. This page encodes and decodes text.",
      },
    ],
    cta: {
      before: "To encode text to Base64 or decode it back, use the",
      linkLabel: "Base64 Encoder",
      href: "/tools/base64-encoder",
      after: ".",
    },
  },
  "what-is-a-uuid": {
    intro:
      "A UUID is a 128-bit identifier, usually written as five groups of hexadecimal digits separated by hyphens. Version 4 fills most of those bits at random, with a fixed version digit and a fixed variant.",
    why:
      "Use one when a test row or a temporary record needs an ID. It is not a sequential key, and it is not a password. The page cannot tell whether another system already stored the same value.",
    stepsHeading: "How to generate UUID version 4 values",
    steps: [
      {
        title: "Choose a count from 1 to 100",
        body: "One click will not produce more than 100.",
      },
      {
        title: "Press Generate",
        body: "Regenerate builds a new set with the same count. Copy one value or copy the list. Clear removes it.",
      },
      {
        title: "Check the version digit if you need to",
        body: "In 3f2504e0-4f89-41d3-9a0c-0305e82c3301, the third group starts with 4.",
      },
      {
        title: "Treat uniqueness as a probability",
        body: "A match is possible and extremely unlikely. This page does not search any other system.",
      },
    ],
    examples: [
      {
        title: "One identifier",
        body: "A version 4 UUID has the shape 3f2504e0-4f89-41d3-9a0c-0305e82c3301.",
      },
      {
        title: "A batch of 10",
        body: "Generating 10 values gives 10 separate identifiers for test data.",
      },
    ],
    notes: [
      {
        heading: "How the bits are chosen",
        body: "The generator uses the browser’s crypto.randomUUID() when it is available, and crypto.getRandomValues() otherwise. It does not use Math.random(). A password should come from the Password Generator. A hash of text you already have is the Hash Generator.",
      },
    ],
    faqs: [
      {
        question: "What does version 4 mean?",
        answer: "Most of the bits are random. The version digit is 4, which is why the third group starts with 4.",
      },
      {
        question: "Are these sequential?",
        answer: "No. The next value is not the previous value plus one.",
      },
      {
        question: "Can two generated values match?",
        answer: "It is possible and extremely unlikely. The page still cannot see IDs that already exist somewhere else.",
      },
      {
        question: "Is a UUID a secret?",
        answer: "No. Do not use it as a password.",
      },
    ],
    cta: {
      before: "To create 1 to 100 UUID version 4 values, use the",
      linkLabel: "UUID Generator",
      href: "/tools/uuid-generator",
      after: ".",
    },
  },
  "how-to-pick-a-color": {
    intro:
      "Use the browser’s color control, or type a hex value, and copy the same color as HEX, RGB, or HSL.",
    why:
      "The native control is enough when you need one opaque color for CSS. It does not sample a photograph, and it does not carry transparency.",
    stepsHeading: "How to pick a color",
    steps: [
      {
        title: "Open the color control or type a hex value",
        body: "The control is the browser’s native color input.",
      },
      {
        title: "Copy HEX, RGB, or HSL",
        body: "They are three writings of that same opaque color.",
      },
      {
        title: "Reset when you want the default",
        body: "Reset returns the picker to the default blue.",
      },
      {
        title: "Switch tools when the job is different",
        body: "If you already have a hex string and need the channels, use Hex to RGB. If the color has to come from a photo, use the Image Color Analyzer. If the color will sit under text, check the pair in the Color Contrast Checker. This page does not compute a contrast ratio.",
      },
    ],
    examples: [
      {
        title: "#2563eb",
        body: "#2563eb is rgb(37, 99, 235). The HSL line is hue, saturation, and lightness for that same color.",
      },
    ],
    notes: [
      {
        heading: "Opaque only",
        body: "The native control supplies an opaque sRGB color. Alpha is not available. GIF frames and pixels from an uploaded photo are not sampled here.",
      },
    ],
    faqs: [
      {
        question: "Can I pick a transparent color?",
        answer: "No. The browser color control on this page is opaque.",
      },
      {
        question: "Are HEX, RGB, and HSL different colors?",
        answer: "No. They are three writings of the color you picked.",
      },
      {
        question: "How do I sample a photo?",
        answer: "Use the Image Color Analyzer. This picker does not read pixels from an image.",
      },
      {
        question: "What does Reset do?",
        answer: "It returns the control to the default blue.",
      },
    ],
    cta: {
      before: "To choose one opaque color and copy HEX, RGB, or HSL, use the",
      linkLabel: "Color Picker",
      href: "/tools/color-picker",
      after: ".",
    },
  },
  "how-to-find-dominant-colors": {
    intro:
      "The page reduces the image, groups similar pixels, and lists 3 to 10 colors with each color’s share of the sampled pixels.",
    why:
      "Use it when you want a starting palette from a photo. The share is not a print measurement, and a rare color can disappear because the image is reduced first.",
    stepsHeading: "How to read dominant colors",
    steps: [
      {
        title: "Choose a JPG, PNG, or WebP",
        body: "GIF and HEIC do not open. A file over 25 MB, or a side over 8192 pixels, is refused.",
      },
      {
        title: "Choose how many colors to list",
        body: "The range is 3 to 10.",
      },
      {
        title: "Analyze and copy HEX or RGB",
        body: "Each swatch is a color from the grouped pixels.",
      },
      {
        title: "Read the share as sampled pixels",
        body: "The share is the portion of sampled pixels in that group, not a laboratory measurement of the original file.",
      },
      {
        title: "Expect the image to be reduced first",
        body: "The photo is reduced to a 96-pixel edge before pixels are grouped. Nearly transparent pixels are skipped. A small accent color can be missed.",
      },
    ],
    examples: [
      {
        title: "A blue sky",
        body: "Most sampled pixels fall into blue groups. The listed share is that portion of the sampled pixels.",
      },
    ],
    notes: [
      {
        heading: "An approximation",
        body: "The listed colors are averages of those groups. This is not a mathematically exact palette. To pick one opaque color by hand, use the Color Picker. To turn a hex value you already have into RGB, use Hex to RGB.",
      },
    ],
    faqs: [
      {
        question: "Why can a color in the photo be missing?",
        answer: "The image is reduced to a 96-pixel edge, and nearly transparent pixels are skipped. A rare color may never form its own group.",
      },
      {
        question: "What does the percentage mean?",
        answer: "It is the share of sampled pixels in that group, after the image is reduced.",
      },
      {
        question: "How many colors can I ask for?",
        answer: "From 3 to 10.",
      },
      {
        question: "Which files open?",
        answer: "JPG, PNG, and WebP, up to 25 MB, with no side over 8192 pixels. GIF and HEIC do not open.",
      },
    ],
    cta: {
      before: "To list a starting palette from a photo, use the",
      linkLabel: "Image Color Analyzer",
      href: "/tools/image-color-analyzer",
      after: ". The JPG, PNG, or WebP is sampled in this tab. The photo is not sent to Tools Star Hub.",
    },
  },
  "how-to-scan-a-qr-code": {
    intro:
      "Point the camera at one QR code, or choose a PNG or JPG of the code. The page shows the text it decoded. If that text is an http or https link, you can open it after you read it.",
    why:
      "The camera stays off until you press Start camera. A scanned link stays on the page until you press Open link, because opening a code automatically would skip the chance to read it.",
    stepsHeading: "How to scan a QR code",
    steps: [
      {
        title: "Start the camera only if you want it",
        body: "Permission is requested when you press Start camera, not when the page loads.",
      },
      {
        title: "Hold one code in view",
        body: "The stream stops when a code is found, when you press Stop camera, and when you leave the page.",
      },
      {
        title: "Use a PNG or JPG if the camera is blocked",
        body: "A screenshot works.",
      },
      {
        title: "Read the text before you open a link",
        body: "Press Open link only if the result is an http or https URL and you trust it. The page does not navigate by itself.",
      },
    ],
    examples: [
      {
        title: "A screenshot",
        body: "A screenshot of a single QR code can be decoded when camera permission is denied. The result is the text stored in that code.",
      },
    ],
    notes: [
      {
        heading: "One code, QR only",
        body: "The reader reports the first code it finds. Other barcode families are not decoded. If the image contains more than one QR code, crop it to the one you want. To build a code, use the QR Code Generator. To split a scanned URL into host, path, and query, use the URL Parser.",
      },
    ],
    faqs: [
      {
        question: "When does the camera turn on?",
        answer: "Only after you press Start camera. Stop, a successful scan, or leaving the page releases it.",
      },
      {
        question: "What if I cannot use the camera?",
        answer: "Choose a PNG or JPG of the code.",
      },
      {
        question: "What if several codes are in the picture?",
        answer: "The first code the reader finds is the one shown. Crop the image to the code you want.",
      },
      {
        question: "Which barcodes are read?",
        answer: "QR codes. Other barcode families are not decoded.",
      },
    ],
    cta: {
      before: "To read one QR code from the camera or from a PNG or JPG, use the",
      linkLabel: "QR Code Scanner",
      href: "/tools/qr-code-scanner",
      after: ".",
    },
  },
  "how-to-generate-a-random-number": {
    intro:
      "A random integer is a whole number from the minimum through the maximum, with both ends included. A decimal is a number in that same span, rounded to at most 6 decimal places.",
    why:
      "Use a list when you need several draws. Unique mode only works for integers, and only when the range contains enough distinct values.",
    stepsHeading: "How to generate numbers",
    steps: [
      {
        title: "Enter a minimum and a maximum",
        body: "If the minimum is greater than the maximum, the page rejects the pair. Each bound must stay within ±1,000,000,000. A blank bound is rejected.",
      },
      {
        title: "Choose integer or decimal",
        body: "Integer mode needs whole-number bounds.",
      },
      {
        title: "Enter how many values to generate",
        body: "The count is from 1 to 200. A count of 0 is rejected.",
      },
      {
        title: "Turn on unique only for integers",
        body: "Asking for 5 unique integers from 1 to 3 fails, because that range has only 3 values. Unique mode is not available for decimals.",
      },
      {
        title: "Generate",
        body: "The values come from the browser’s crypto.getRandomValues, not from Math.random().",
      },
    ],
    examples: [
      {
        title: "A fixed integer",
        body: "Minimum 5, maximum 5, count 3, integers, not unique: every value is 5.",
      },
      {
        title: "Every integer in a short range",
        body: "Minimum 1, maximum 3, count 3, unique integers: the list is 1, 2, and 3 in some order.",
      },
    ],
    notes: [
      {
        heading: "What this draw is not",
        body: "The page does not draw from a physical die, and it does not store the list. A password belongs on the Password Generator. An identifier belongs on the UUID Generator.",
      },
    ],
    faqs: [
      {
        question: "Are the endpoints included?",
        answer: "Yes. A range of 1 to 3 can return 1 and can return 3.",
      },
      {
        question: "Why was my unique request rejected?",
        answer: "The count is larger than the number of distinct integers in the range, or you asked for unique decimals.",
      },
      {
        question: "What is the longest list?",
        answer: "200 numbers in one click.",
      },
      {
        question: "Is this a password?",
        answer: "No. Use the Password Generator for a password and the UUID Generator for an identifier.",
      },
    ],
    cta: {
      before: "To draw 1 to 200 integers or decimals, use the",
      linkLabel: "Random Number Generator",
      href: "/tools/random-number-generator",
      after: ".",
    },
  },
  "how-to-plan-a-debt-payoff": {
    intro:
      "Each month, a balance is charged interest at the annual rate divided by 12, then the minimum is applied. Extra money, and any minimum freed when a balance hits zero, goes to one debt: the highest rate, or the smallest balance.",
    why:
      "The page estimates months and interest from the numbers you type. A lender can post interest on a different schedule, so the month count is not a promised calendar date.",
    stepsHeading: "How to estimate a payoff",
    steps: [
      {
        title: "Enter at least one debt",
        body: "Each debt needs a name, a balance, an APR, and a minimum payment.",
      },
      {
        title: "Keep the minimum above one month of interest",
        body: "A 1,000 balance at 24% with a 10 minimum is rejected, because that payment would not bring the balance down.",
      },
      {
        title: "Enter an extra monthly amount, or 0",
        body: "Zero extra means the estimate uses minimums only.",
      },
      {
        title: "Choose where extra money goes",
        body: "Highest interest first, or smallest balance first.",
      },
      {
        title: "Read the order, the months, and the interest",
        body: "The page also compares both strategies with and without the extra payment. It does not call either plan better.",
      },
    ],
    examples: [
      {
        title: "Two zero-interest debts",
        body: "Debt A is 1,000 and debt B is 500, both at 0% with a 100 minimum and no extra. Smallest-balance-first pays B off in 5 months, then rolls that 100 onto A. Both balances are clear in 8 months, and interest is 0.",
      },
      {
        title: "Extra payment on a zero-interest balance",
        body: "One 1,000 balance at 0% with a 100 minimum and 100 extra is paid in 5 months. Interest saved is 0 because the rate was already 0.",
      },
    ],
    notes: [
      {
        heading: "One card or one loan",
        body: "A single card with a percent-of-balance payment belongs on the Credit Card Payoff Calculator. One installment loan belongs on the Loan Calculator.",
      },
    ],
    faqs: [
      {
        question: "What is highest interest first?",
        answer: "Extra money, and later a freed minimum, goes to the open debt with the highest APR.",
      },
      {
        question: "What is smallest balance first?",
        answer: "That extra goes to the smallest open balance. With two zero-interest debts, the smaller one is paid first.",
      },
      {
        question: "What if the minimum does not cover interest?",
        answer: "The page stops. That balance would not fall.",
      },
      {
        question: "Does an extra payment always save interest?",
        answer: "Only when the debts are charging interest. On a 0% balance it shortens the timeline and saves no interest.",
      },
    ],
    cta: {
      before: "To estimate several debts together, use the",
      linkLabel: "Debt Payoff Calculator",
      href: "/tools/debt-payoff-calculator",
      after: ".",
    },
  },
  "how-long-to-pay-off-a-credit-card": {
    intro:
      "The payoff is the number of months until one balance reaches zero at the payment you set. Interest each month is the balance times the annual rate divided by 12.",
    why:
      "This page is one card. Several named debts, with a choice of which balance gets the extra money, are the Debt Payoff Calculator.",
    stepsHeading: "How to estimate one card",
    steps: [
      {
        title: "Enter the balance and the APR",
        body: "A 0% rate is valid.",
      },
      {
        title: "Set the payment",
        body: "You can type a dollar amount. A percent of the balance and a floor are the other way to size a minimum.",
      },
      {
        title: "Add an extra amount, or leave it at 0",
        body: "The payment used in the schedule is the chosen payment plus that extra.",
      },
      {
        title: "Read the months, the interest, and the schedule",
        body: "The last row ends at a balance of 0 when the plan succeeds. A payment that would not cover the first month of interest is rejected.",
      },
    ],
    examples: [
      {
        title: "1,000 at 0%",
        body: "Paid at 100 a month, with no extra, the balance is clear in 10 months. Interest is 0, and the last balance is 0.",
      },
      {
        title: "1,000 at 12% with extra",
        body: "A 100 payment plus 50 extra uses a 150 payment. The first month’s interest is 10, which is 1,000 times 1%.",
      },
    ],
    notes: [
      {
        heading: "What the schedule assumes",
        body: "The rate and the payment stay as you typed them. The schedule does not include a new purchase or a fee the issuer adds later.",
      },
    ],
    faqs: [
      {
        question: "How do I clear 1,000 with no interest?",
        answer: "Divide the balance by the monthly payment. At 100 a month, that is 10 payments.",
      },
      {
        question: "How is the first month of interest figured?",
        answer: "Multiply the starting balance by the APR divided by 12. At 12%, that is 1% of the balance.",
      },
      {
        question: "What does the extra payment do?",
        answer: "It is added to the payment you already set. On the 12% example, 100 plus 50 is a 150 payment.",
      },
      {
        question: "When should I use the multi-debt page?",
        answer: "When you have more than one balance and want the extra money aimed at the highest rate or the smallest balance.",
      },
    ],
    cta: {
      before: "To estimate one card, use the",
      linkLabel: "Credit Card Payoff Calculator",
      href: "/tools/credit-card-payoff-calculator",
      after: ".",
    },
  },
  "how-to-convert-salary-to-hourly": {
    intro:
      "Regular annual pay is the hourly rate times hours per week times weeks per year. In salary mode, the hourly rate is the salary divided by that same schedule. Overtime is extra hours times the hourly rate times the multiplier, then times the weeks.",
    why:
      "These totals are gross pay from the hours you enter. They do not subtract taxes or unpaid time off. That subtraction is the Paycheck Estimator, and only for the deductions you type.",
    stepsHeading: "How to convert pay",
    steps: [
      {
        title: "Choose hourly rate or annual salary",
        body: "Hourly mode starts from the rate. Salary mode starts from the yearly amount.",
      },
      {
        title: "Enter hours per week and weeks per year",
        body: "Use 52 for a job paid every week. Salary mode rejects 0 weeks.",
      },
      {
        title: "Enter overtime, or leave it at 0",
        body: "Use a multiplier of 1.5 for time and a half, or 1 if overtime is paid at the regular rate.",
      },
      {
        title: "Read weekly, monthly, and annual totals",
        body: "Monthly pay is the annual total divided by 12.",
      },
    ],
    examples: [
      {
        title: "20 an hour with overtime",
        body: "40 hours a week, 52 weeks, and 5 overtime hours at 1.5: regular annual pay is 41,600. Overtime pay is 7,800. Annual pay is 49,400. Weekly pay is 950.",
      },
      {
        title: "A 52,000 salary",
        body: "At 40 hours and 52 weeks, with no overtime, the hourly rate is 25, and annual pay stays 52,000.",
      },
    ],
    faqs: [
      {
        question: "How do I turn an hourly rate into a salary?",
        answer: "Multiply the rate by hours per week and by weeks per year, then add overtime if you entered it.",
      },
      {
        question: "How do I turn a salary into an hourly rate?",
        answer: "Divide the salary by hours per week times weeks per year. 52,000 divided by 40 times 52 is 25.",
      },
      {
        question: "How is overtime counted?",
        answer: "Overtime hours per week times the hourly rate times the multiplier times the weeks per year. Five hours at 20 with a 1.5 multiplier for 52 weeks is 7,800.",
      },
      {
        question: "Does this include taxes?",
        answer: "No. The totals are before taxes and other deductions.",
      },
    ],
    cta: {
      before: "To convert an hourly rate or a salary, use the",
      linkLabel: "Hourly Wage Calculator",
      href: "/tools/hourly-wage-calculator",
      after: ".",
    },
  },
  "what-a-paycheck-estimate-includes": {
    intro:
      "One paycheck is gross pay minus the pre-tax amount you type, minus the withholding you type, minus the post-tax amount you type. The year multiplies that paycheck by the number of periods.",
    why:
      "The page does not look up a tax bracket. Withholding is a percent or a dollar amount you enter. If you need the gross from an hourly rate first, use the Hourly Wage Calculator.",
    stepsHeading: "How to estimate a paycheck",
    steps: [
      {
        title: "Enter the gross pay for one paycheck",
        body: "That is the starting amount for this check, not the yearly salary, unless you are paid once a year.",
      },
      {
        title: "Choose the pay frequency",
        body: "Weekly, biweekly, semimonthly, and monthly are 52, 26, 24, and 12 periods.",
      },
      {
        title: "Enter pre-tax deductions, or leave them blank",
        body: "A blank is 0. Pre-tax deductions larger than the gross are rejected.",
      },
      {
        title: "Enter withholding",
        body: "Use a percent of the pay after pre-tax deductions, or a dollar amount.",
      },
      {
        title: "Enter post-tax deductions, or leave them blank",
        body: "Net pay is what remains.",
      },
    ],
    examples: [
      {
        title: "Weekly 1,000 with 10% withholding",
        body: "Net is 900. There are 52 periods. Annual gross is 52,000, and annual net is 46,800.",
      },
      {
        title: "Biweekly 1,000 with 200 withheld",
        body: "Blank deductions are 0. Withholding is 200, net is 800, and there are 26 periods.",
      },
      {
        title: "Monthly 2,000 with 100 pre-tax and 100% withholding",
        body: "The basis is 1,900, withholding is 1,900, and net is 0.",
      },
    ],
    faqs: [
      {
        question: "Does this calculate income tax?",
        answer: "No. You type the withholding percent or the withholding dollars.",
      },
      {
        question: "How many paychecks are in a year?",
        answer: "Weekly is 52, biweekly is 26, semimonthly is 24, and monthly is 12.",
      },
      {
        question: "What if pre-tax deductions are blank?",
        answer: "They are treated as 0.",
      },
      {
        question: "Why was a paycheck rejected?",
        answer: "The pre-tax amount was larger than the gross pay.",
      },
    ],
    cta: {
      before: "To estimate one paycheck from gross pay and the deductions you type, use the",
      linkLabel: "Paycheck Estimator",
      href: "/tools/paycheck-estimator",
      after: ".",
    },
  },
  "how-to-compare-renting-and-buying": {
    intro:
      "Add the rent you would pay over the years you choose, and add the cash a purchase would require over those same years. The comparison is those two totals from the inputs you type.",
    why:
      "It is not a prediction of prices or a reason to buy. Rent can grow by a yearly rate you enter. The home value can change by a yearly rate you enter. Tax, insurance, HOA, and maintenance are amounts you type, or 0.",
    stepsHeading: "How to compare the two costs",
    steps: [
      {
        title: "Enter monthly rent and a yearly growth rate",
        body: "Use 0 if rent stays flat.",
      },
      {
        title: "Enter the price, down payment, rate, and term",
        body: "The term is in years. A mortgage payment inside the comparison uses those figures.",
      },
      {
        title: "Enter tax, insurance, HOA, and maintenance",
        body: "Leave them at 0 when you want them left out.",
      },
      {
        title: "Enter a yearly change in home value",
        body: "Use 0 if you want the price held flat.",
      },
      {
        title: "Enter how many years to compare",
        body: "Read total rent, cash spent buying, equity, remaining loan balance, and the net cost of buying.",
      },
    ],
    examples: [
      {
        title: "Full price paid up front",
        body: "Rent of 1,000 with no growth, a 120,000 price, 120,000 down, and a 1-year comparison with every other rate at 0: total rent is 12,000. Buying cash is 120,000, equity is 120,000, the remaining balance is 0, and the net cost of buying is 0 because the down payment is still equity.",
      },
      {
        title: "Rent and value both grow at 10%",
        body: "Rent of 1,000, a 100,000 purchase paid in full, and a 2-year comparison: total rent is 25,200, and the home value is 121,000.",
      },
    ],
    notes: [
      {
        heading: "Other home calculators",
        body: "A payment on a mortgage you already sized belongs on the Mortgage Calculator. A price estimated from income belongs on the Home Affordability Calculator.",
      },
    ],
    faqs: [
      {
        question: "What is total rent?",
        answer: "Monthly rent times 12, repeated for each year, with the growth rate applied between years. Flat 1,000 rent for 1 year is 12,000. The same rent growing at 10% for 2 years is 25,200.",
      },
      {
        question: "What if I pay the full price up front?",
        answer: "The down payment equals the price, so the loan balance is 0. The cash is still in the house as equity when the value does not change.",
      },
      {
        question: "Does a higher home value mean buying won?",
        answer: "No. The page shows the value you asked it to project. It does not decide which choice is better.",
      },
      {
        question: "Are taxes and repairs included automatically?",
        answer: "Only if you type them. Blank or 0 means they are left out.",
      },
    ],
    cta: {
      before: "To add a rent total and a buying-cost total from numbers you type, use the",
      linkLabel: "Rent vs Buy Calculator",
      href: "/tools/rent-vs-buy-calculator",
      after: ".",
    },
  },
  "how-to-estimate-fuel-cost": {
    intro:
      "Divide the distance by the economy, then multiply by the price and by the number of trips. In miles per gallon, fuel for one trip is distance divided by mpg. In liters per 100 kilometers, fuel for one trip is distance times the liters-per-100 figure, divided by 100.",
    why:
      "The page does not look up a station price or a route. You type the distance, the economy, and the price.",
    stepsHeading: "How to estimate fuel",
    steps: [
      {
        title: "Choose miles per gallon or liters per 100 kilometers",
        body: "The price you type should match that mode: per gallon, or per liter.",
      },
      {
        title: "Enter the distance for one trip",
        body: "Zero distance is allowed and costs 0. A negative distance is rejected.",
      },
      {
        title: "Enter the economy",
        body: "Zero miles per gallon is rejected, because the page would be dividing by zero.",
      },
      {
        title: "Enter the price and the number of trips",
        body: "Total fuel and total cost multiply the one-trip figures by that count.",
      },
    ],
    examples: [
      {
        title: "100 miles at 25 mpg",
        body: "At 4 per gallon, twice: one trip uses 4 gallons and costs 16. Two trips use 8 gallons and cost 32.",
      },
      {
        title: "100 kilometers at 8 liters per 100 kilometers",
        body: "At 2 per liter, once: the trip uses 8 liters and costs 16.",
      },
    ],
    notes: [
      {
        heading: "Unit conversion is separate",
        body: "The Unit Converter changes a length or a volume unit. It does not price a trip.",
      },
    ],
    faqs: [
      {
        question: "How do I get gallons from miles and mpg?",
        answer: "Divide miles by miles per gallon. 100 divided by 25 is 4 gallons.",
      },
      {
        question: "How do I get liters from liters per 100 km?",
        answer: "Multiply the distance in kilometers by the liters-per-100 figure, then divide by 100. 100 times 8 divided by 100 is 8 liters.",
      },
      {
        question: "What if the distance is 0?",
        answer: "Fuel and cost are 0.",
      },
      {
        question: "Why is 0 mpg rejected?",
        answer: "The gallons would require dividing by zero.",
      },
    ],
    cta: {
      before: "To price a trip from distance, economy, and a price you type, use the",
      linkLabel: "Fuel Cost Calculator",
      href: "/tools/fuel-cost-calculator",
      after: ".",
    },
  },
  "how-to-count-business-days": {
    intro:
      "A business day on this page is a Monday through Friday inside the range. Saturday and Sunday are weekend days. The count does not know local holidays until you exclude those dates yourself.",
    why:
      "The Date Difference Calculator counts every calendar day, including weekends. Use that when the weekends should stay in the total.",
    stepsHeading: "How to count business days",
    steps: [
      {
        title: "Enter the start date and the end date",
        body: "If the end is earlier, the page still counts the span and says the dates were reversed.",
      },
      {
        title: "Choose whether the end date counts",
        body: "On a same-day range, leaving the end date out produces 0 calendar days.",
      },
      {
        title: "List dates to exclude",
        body: "Put one date per line when a weekday should not count. A date outside the range is ignored. A repeated date is counted once.",
      },
      {
        title: "Read business days, weekend days, and calendar days",
        body: "Weekend days are Saturday and Sunday inside the range.",
      },
    ],
    examples: [
      {
        title: "Monday through Friday",
        body: "2024-01-01 through 2024-01-05, including the end date, is 5 business days, 0 weekend days, and 5 calendar days.",
      },
      {
        title: "A weekend, a leap day, and an exclusion",
        body: "2024-01-06 through 2024-01-07 is 0 business days and 2 weekend days. 2024-02-29 is a Thursday, so that one day is 1 business day. Excluding 2024-01-01 from the Monday-through-Friday range leaves 4 business days. A second copy of that date, and a date in February, do not remove another day.",
      },
    ],
    faqs: [
      {
        question: "Does a holiday count?",
        answer: "It counts unless you exclude that date. The page has no holiday list.",
      },
      {
        question: "What is a weekend here?",
        answer: "Saturday and Sunday. They are not business days.",
      },
      {
        question: "Does the end date count?",
        answer: "Only when you include it. A same-day range with the end date left out is 0 calendar days.",
      },
      {
        question: "How is this different from the date difference?",
        answer: "That tool counts every midnight, including weekends. This one separates weekdays from weekend days.",
      },
    ],
    cta: {
      before: "To count weekdays between two dates, use the",
      linkLabel: "Business Days Calculator",
      href: "/tools/business-days-calculator",
      after: ".",
    },
  },
  "how-to-calculate-gpa": {
    intro:
      "GPA is total grade points divided by total credits. On the letter scale, A is 4, A− is 3.7, B+ is 3.3, B is 3, and the scale continues down to F at 0. Grade points for a course are that value times the credits.",
    why:
      "A zero-credit course adds no points and no credits. If every course has 0 credits, or the list is empty, the page rejects the calculation. An unrecognized letter such as Z is rejected.",
    stepsHeading: "How to calculate a GPA",
    steps: [
      {
        title: "Enter each course’s grade and credits",
        body: "Letter mode uses the 4-point scale. Numeric mode uses the points you type.",
      },
      {
        title: "Leave a course blank if you are not using that row",
        body: "Blank rows are skipped.",
      },
      {
        title: "Add the grade points and the credits",
        body: "Divide grade points by credits. The page rounds the GPA for display.",
      },
      {
        title: "A 0-credit course drops out when another course has credits",
        body: "If the only credits are 0, the page rejects the list.",
      },
    ],
    examples: [
      {
        title: "A on 3 credits and B on 1 credit",
        body: "Points are 4 times 3 plus 3 times 1, which is 15. Credits are 4. GPA is 3.75.",
      },
      {
        title: "Two A grades, and a numeric grade",
        body: "A on 3 credits and A on 1 credit: points are 16, credits are 4, GPA is 4. A numeric grade of 3.333 on 3 credits displays as 3.33. A on 0 credits plus B on 3 credits: the zero-credit row drops out, credits are 3, and GPA is 3.",
      },
    ],
    faqs: [
      {
        question: "How is a weighted GPA different from a simple average of letters?",
        answer: "Credits weight the grades. A 3-credit A and a 1-credit B are 3.75, not the unweighted middle of 4 and 3.",
      },
      {
        question: "What letters are accepted?",
        answer: "A through F, including plus and minus, on the 4-point scale. Z is rejected.",
      },
      {
        question: "Do 0-credit courses count?",
        answer: "Not when another course has credits. If the only credits are 0, the page rejects the list.",
      },
      {
        question: "Can I type points instead of a letter?",
        answer: "Yes, in numeric mode. 3.333 on 3 credits displays as 3.33.",
      },
    ],
    cta: {
      before: "To divide grade points by credits, use the",
      linkLabel: "GPA Calculator",
      href: "/tools/gpa-calculator",
      after: ".",
    },
  },
  "how-to-calculate-square-footage": {
    intro:
      "Multiply each room’s length by its width, then add the rooms. The totals are in square feet and square meters. A room measured in meters is converted with the factor 0.09290304 square meters per square foot.",
    why:
      "The page measures rectangles. It does not measure a closet with a slanted wall or a triangle.",
    stepsHeading: "How to add room areas",
    steps: [
      {
        title: "Enter length and width for each room",
        body: "Choose feet or meters for that room.",
      },
      {
        title: "Leave an extra row blank if you are not using it",
        body: "A blank row is skipped.",
      },
      {
        title: "Watch the sides",
        body: "A side of 0 is allowed and adds 0 area. A negative side is rejected. A side over 1,000,000 meters is rejected.",
      },
      {
        title: "Read square feet and square meters",
        body: "Square meters are square feet times 0.09290304, rounded to two decimals. The other direction divides by that factor.",
      },
    ],
    examples: [
      {
        title: "One room",
        body: "A 10 by 10 foot room is 100 square feet, which is 9.29 square meters. A 10 by 10 meter room is 100 square meters, which is 1,076.39 square feet.",
      },
      {
        title: "Two rooms, or a blank row",
        body: "A 10 by 10 foot room plus a 2 by 5 foot room is 110 square feet. A blank second row next to the 10 by 10 room is skipped, and the total stays 100.",
      },
    ],
    notes: [
      {
        heading: "Length is not area",
        body: "The Unit Converter changes a length, a weight, or a temperature. It does not multiply two sides into an area.",
      },
    ],
    faqs: [
      {
        question: "How do I get the area of one rectangle?",
        answer: "Multiply length by width. 10 times 10 is 100.",
      },
      {
        question: "How do several rooms become one total?",
        answer: "Add each room’s area. 100 plus 10 is 110 square feet.",
      },
      {
        question: "How do meters become square feet?",
        answer: "Divide square meters by 0.09290304. 100 square meters is 1,076.39 square feet.",
      },
      {
        question: "What shape does this miss?",
        answer: "Anything that is not a rectangle. A zero side adds nothing. A negative side is rejected.",
      },
    ],
    cta: {
      before: "To add rectangular rooms in feet or meters, use the",
      linkLabel: "Square Footage Calculator",
      href: "/tools/square-footage-calculator",
      after: ".",
    },
  },
  "how-to-calculate-an-aspect-ratio": {
    intro:
      "Divide the width and the height by their greatest common divisor. What remains is the simplified ratio. If you already know the ratio and one side, the missing side is the known side times the other ratio term, divided by the matching term.",
    why:
      "The page does not open or resize an image. Use the same unit for both sides.",
    stepsHeading: "How to calculate a ratio",
    steps: [
      {
        title: "Choose simplify, find height, or find width",
        body: "Simplify starts from both sides. The other two modes start from a ratio and one known side.",
      },
      {
        title: "Enter sizes greater than 0",
        body: "Zero and negative sides are rejected.",
      },
      {
        title: "Read the reduced ratio",
        body: "The page scales the sides to whole numbers and divides by their greatest common divisor. A decimal pair can become an integer ratio.",
      },
      {
        title: "Or fill in the missing side",
        body: "Enter the ratio and the side you know. A ratio term of 0, or a term that is not a number, is rejected. The page does not crop or export a file.",
      },
    ],
    examples: [
      {
        title: "16:9 and a square",
        body: "1920 by 1080 simplifies to 16:9. 1280 by 720 is also 16:9. 1080 by 1080 is 1:1.",
      },
      {
        title: "A missing side",
        body: "A 4:3 ratio with a width of 800 has a height of 600. A 16:9 ratio with a height of 1080 has a width of 1920. 1.5 by 1 simplifies to 3:2.",
      },
    ],
    notes: [
      {
        heading: "Area is a different calculation",
        body: "Square footage multiplies the sides into area. This page keeps the shape and drops the common factor.",
      },
    ],
    faqs: [
      {
        question: "How do 1920 and 1080 become 16:9?",
        answer: "Divide both by their greatest common divisor, which is 120. 1920 divided by 120 is 16, and 1080 divided by 120 is 9.",
      },
      {
        question: "How do I get the other side?",
        answer: "Multiply the known side by the other ratio term and divide by the matching term. 800 times 3 divided by 4 is 600.",
      },
      {
        question: "Does a decimal size stay decimal in the ratio?",
        answer: "The sides are scaled to whole numbers first, then reduced. 1.5 by 1 becomes 3:2.",
      },
      {
        question: "Will this resize a photo?",
        answer: "No. It only calculates the ratio or the missing side.",
      },
    ],
    cta: {
      before: "To simplify a size or fill in the missing side, use the",
      linkLabel: "Aspect Ratio Calculator",
      href: "/tools/aspect-ratio-calculator",
      after: ".",
    },
  },
  "how-to-percent-encode-a-url": {
    intro:
      "Percent-encoding writes characters that are not safe in a URL component as a percent sign plus two hex digits. This page uses encodeURIComponent, which escapes the space, ampersand, question mark, and slash in the value you paste. Decode reverses that.",
    why:
      "It is not encryption. Anyone can decode the result. A half-finished sequence is rejected instead of guessed.",
    stepsHeading: "How to encode or decode",
    steps: [
      {
        title: "Paste the value or the encoded string",
        body: "Encode starts from text you want in a query value. Decode starts from a percent-encoded string.",
      },
      {
        title: "Press Encode or Decode",
        body: "Spaces become %20. An ampersand becomes %26. Accented letters and other scripts are encoded as UTF-8 percent sequences and can be decoded back.",
      },
      {
        title: "Stop if decode fails",
        body: "A cut-off sequence such as %E0%A4%A is rejected. An empty string decodes to an empty string.",
      },
      {
        title: "Copy the component",
        body: "This page does not build the rest of the URL. The UTM Builder adds campaign parameters. The URL Parser splits a full address into its parts.",
      },
    ],
    examples: [
      {
        title: "A space and an ampersand",
        body: "The text a b&c encodes to a%20b%26c.",
      },
    ],
    faqs: [
      {
        question: "Why are the question mark and slash encoded?",
        answer: "encodeURIComponent treats them as part of the value, not as URL structure. That is stricter than encodeURI.",
      },
      {
        question: "Is the result secret?",
        answer: "No. Percent-encoding only changes how characters are written.",
      },
      {
        question: "Why did decode fail?",
        answer: "The percent sequence is incomplete or not valid UTF-8. The page does not fill in the missing digits.",
      },
      {
        question: "What if I encode nothing?",
        answer: "An empty string stays empty.",
      },
    ],
    cta: {
      before: "To encode or decode one URL component, use the",
      linkLabel: "URL Encoder",
      href: "/tools/url-encoder",
      after: ".",
    },
  },
  "how-to-read-a-unix-timestamp": {
    intro:
      "A Unix timestamp counts time from 1970-01-01 00:00:00 UTC. In seconds, 0 is that instant. In milliseconds, 0 is the same instant, because 0 milliseconds is still the epoch.",
    why:
      "The page converts the number you type into a UTC date, or a UTC date into seconds and milliseconds. It does not move that instant into another time zone. That conversion is the Time Zone Converter.",
    stepsHeading: "How to convert a timestamp",
    steps: [
      {
        title: "Choose seconds or milliseconds",
        body: "The same digits mean a different instant in each unit.",
      },
      {
        title: "Paste the number",
        body: "An empty field and a word such as nope are rejected.",
      },
      {
        title: "Read the UTC time",
        body: "1710000000 seconds and 1710000000000 milliseconds are both 2024-03-09T16:00:00.000Z.",
      },
      {
        title: "Do not read a 13-digit millisecond value as seconds",
        body: "A value near 1.71 trillion is the millisecond form of that March 2024 instant.",
      },
    ],
    examples: [
      {
        title: "The epoch",
        body: "0 seconds and 0 milliseconds are both 1970-01-01T00:00:00.000Z.",
      },
      {
        title: "A known second",
        body: "1710000000 seconds is 2024-03-09T16:00:00.000Z.",
      },
    ],
    faqs: [
      {
        question: "What is the epoch?",
        answer: "1970-01-01 00:00:00 UTC. A timestamp of 0 is that moment.",
      },
      {
        question: "Why do seconds and milliseconds disagree when I reuse the same digits?",
        answer: "Milliseconds are a thousand times finer. 1710000000 seconds and 1710000000 milliseconds are not the same instant.",
      },
      {
        question: "Does this change the time zone?",
        answer: "No. The result is UTC. Use the Time Zone Converter to show that same instant in another zone.",
      },
      {
        question: "What is rejected?",
        answer: "A blank value, and text that is not a number.",
      },
    ],
    cta: {
      before: "To turn a Unix time into UTC, or a UTC date into seconds, use the",
      linkLabel: "Timestamp Converter",
      href: "/tools/timestamp-converter",
      after: ".",
    },
  },
  "how-to-escape-html": {
    intro:
      "HTML encoding replaces characters that would start a tag or an entity, so the browser shows them instead of running them. A less-than sign becomes &lt;, a greater-than sign becomes &gt;, an ampersand becomes &amp;, a double quote becomes &quot;, and an apostrophe becomes &#39;.",
    why:
      "Decode turns common named entities and numeric character references back into characters. The text is never inserted as a page, and it is never run.",
    stepsHeading: "How to encode or decode HTML",
    steps: [
      {
        title: "Paste the markup or the entities",
        body: "Encode starts from characters you want to display. Decode starts from entities.",
      },
      {
        title: "Press Encode or Decode",
        body: "Copy the result. Encoded tags can be shown in a tutorial or a comment.",
      },
      {
        title: "Expect common entities on the way back",
        body: "An uncommon named entity can stay as typed. The decoder covers common named entities and numeric references.",
      },
      {
        title: "Use a different tool to convert a document",
        body: "Markdown to HTML and HTML to Markdown convert between those writings. This page only escapes or unescapes characters.",
      },
    ],
    examples: [
      {
        title: "A tag with an ampersand",
        body: "The markup <div class=\"x\">Hello & welcome</div> encodes to &lt;div class=&quot;x&quot;&gt;Hello &amp; welcome&lt;/div&gt;.",
      },
    ],
    faqs: [
      {
        question: "Will the HTML run on this page?",
        answer: "No. The input is treated as text. It is not inserted with innerHTML.",
      },
      {
        question: "Why encode the ampersand?",
        answer: "An unescaped ampersand starts an entity. &amp; shows an ampersand.",
      },
      {
        question: "What does decode accept?",
        answer: "Common named entities and numeric character references. An uncommon name can remain as you typed it.",
      },
      {
        question: "Is this a minifier?",
        answer: "No. A minifier removes space from markup. This tool changes special characters into entities, or the reverse.",
      },
    ],
    cta: {
      before: "To show a tag as text, or to turn entities back into characters, use the",
      linkLabel: "HTML Encoder",
      href: "/tools/html-encoder",
      after: ".",
    },
  },
  "how-to-check-color-contrast": {
    intro:
      "Contrast here is the WCAG 2 ratio of two solid colors. Black on white is 21:1. The page then marks AA and AAA separately for normal text and for large text.",
    why:
      "Normal text uses 4.5:1 for AA and 7:1 for AAA. Large text uses 3:1 for AA and 4.5:1 for AAA. A passing mark means that pair meets that one threshold.",
    stepsHeading: "How to check a pair",
    steps: [
      {
        title: "Enter two solid colors",
        body: "Pick a foreground and a background, or type hex values.",
      },
      {
        title: "Read the ratio and the four results",
        body: "The four results are normal AA, normal AAA, large AA, and large AAA.",
      },
      {
        title: "Swap the colors when you need the inverse pair",
        body: "The ratio is the same either way. You assign which color is the text.",
      },
      {
        title: "Leave photographs out of the pair",
        body: "A photograph behind the text, or a translucent layer, is outside the calculation.",
      },
    ],
    examples: [
      {
        title: "Black on white",
        body: "#000000 on #ffffff is 21:1 and passes AA for normal text.",
      },
      {
        title: "Two close greys",
        body: "#777777 on #999999 fails AA for normal text.",
      },
    ],
    faqs: [
      {
        question: "What does 21:1 mean?",
        answer: "It is the contrast of black on white, the strongest pair of solid sRGB colors on this scale.",
      },
      {
        question: "Why can two greys fail?",
        answer: "#777777 and #999999 are close. Their ratio is below 4.5:1, so normal text AA fails.",
      },
      {
        question: "Does a photo background count?",
        answer: "No. Enter the two solid colors. A picture behind the letters is not part of the ratio.",
      },
      {
        question: "Does a pass finish the check?",
        answer: "It means that color pair meets that contrast threshold. Other requirements can still apply.",
      },
    ],
    cta: {
      before: "To compare two solid colors, use the",
      linkLabel: "Color Contrast Checker",
      href: "/tools/color-contrast-checker",
      after: ".",
    },
  },
  "how-to-write-a-css-gradient": {
    intro:
      "A CSS gradient is a background that fades between color stops. This page writes a linear-gradient, radial-gradient or conic-gradient from the stops you set, for a background or for text. You need at least two stops. Each position is rounded to a whole percent between 0 and 100.",
    why:
      "For a background, the copy is one background line. For text, it is a short rule with a solid color fallback, and an HTML snippet is available too. The page does not accept pasted CSS.",
    stepsHeading: "How to build a gradient",
    steps: [
      {
        title: "Choose linear, radial or conic",
        body: "Linear fades along a line, radial spreads from a center, and conic sweeps around a center like a color wheel.",
      },
      {
        title: "Set a color and a position for each stop",
        body: "Add or remove stops until you have at least two.",
      },
      {
        title: "Set the angle or the center",
        body: "Linear and conic gradients use an angle. Radial and conic gradients use a center point. The default linear fade is 90 degrees from #336699 at 0% to #ffffff at 100%.",
      },
      {
        title: "Copy the background declaration",
        body: "A stop position that is not a whole percent is rounded. A position outside 0 to 100 is kept inside that range.",
      },
    ],
    examples: [
      {
        title: "The default linear gradient",
        body: "background: linear-gradient(90deg, #336699 0%, #ffffff 100%);",
      },
      {
        title: "A radial gradient with three stops",
        body: "background: radial-gradient(circle, #336699 0%, #000000 50%, #ffffff 100%);",
      },
    ],
    faqs: [
      {
        question: "Why is there no CSS yet?",
        answer: "Fewer than two stops are set. The declaration is copied only after the second stop exists.",
      },
      {
        question: "Can I make a conic gradient?",
        answer: "Yes. Choose Conic, then set the start angle and the center. Stop positions are a share of the full turn.",
      },
      {
        question: "What happens to 33.4%?",
        answer: "It is rounded to a whole percent and kept between 0 and 100.",
      },
      {
        question: "Will older browsers get a prefixed copy?",
        answer: "No. Background gradients are standard syntax without vendor prefixes. Gradient text adds -webkit-background-clip, which some browsers still need.",
      },
    ],
    cta: {
      before: "To copy a linear, radial or conic gradient, or gradient text, use the",
      linkLabel: "CSS Gradient Generator",
      href: "/tools/css-gradient-generator",
      after: ".",
    },
  },
  "how-to-write-a-box-shadow": {
    intro:
      "A box-shadow is an offset, a blur, a spread, and a color. This page writes one declaration and previews the same numbers. Offsets, blur, and spread are rounded to whole pixels. Opacity becomes the alpha of an rgba() color.",
    why:
      "Stacked shadows are not assembled here. Copy more than one declaration and join them in your stylesheet if you need layers.",
    stepsHeading: "How to write a shadow",
    steps: [
      {
        title: "Set the offset, blur, and spread",
        body: "Horizontal offset, vertical offset, blur, and spread are separate controls.",
      },
      {
        title: "Set the color and the opacity",
        body: "Opacity stays between 0 and 1 and is written into the rgba color.",
      },
      {
        title: "Turn on inset for an inner shadow",
        body: "Inset does not change the color. It draws the shadow inside the box.",
      },
      {
        title: "Copy the CSS",
        body: "The preview uses that same value. A color the parser rejects yields no declaration. The preview is a sample box, not an element from your page.",
      },
    ],
    examples: [
      {
        title: "The starting shadow",
        body: "box-shadow: 0 8px 24px 0 rgba(15, 39, 68, 0.2); That is no horizontal offset, 8 pixels down, 24 pixels of blur, no spread, and 20% opacity.",
      },
    ],
    faqs: [
      {
        question: "Can I stack several shadows?",
        answer: "This page writes one. Combine copied values yourself if you need more than one layer.",
      },
      {
        question: "Why did a decimal offset become a whole pixel?",
        answer: "Offsets, blur, and spread are rounded to whole pixels in the copied CSS.",
      },
      {
        question: "Does inset change the color?",
        answer: "No. It only draws the shadow inside the box.",
      },
      {
        question: "What if the color is rejected?",
        answer: "The page does not produce a declaration for a color it cannot parse.",
      },
    ],
    cta: {
      before: "To copy one box-shadow, use the",
      linkLabel: "Box Shadow Generator",
      href: "/tools/box-shadow-generator",
      after: ".",
    },
  },
  "how-to-convert-json-to-csv": {
    intro:
      "Paste a JSON array of objects. The first CSV row is the column names, taken from the keys in the order they first appear. A later object that lacks a key gets an empty cell. null becomes an empty cell. A nested object or array is written as JSON text inside one cell, with quotes escaped.",
    why:
      "The value has to be an array of objects. A single object needs square brackets around it. Invalid JSON is rejected.",
    stepsHeading: "How to convert JSON to CSV",
    steps: [
      {
        title: "Paste the array",
        body: "Each item should be an object.",
      },
      {
        title: "Press Convert to CSV",
        body: "Check the row and column counts.",
      },
      {
        title: "Read quoted cells",
        body: "A comma, quote, or line break inside a cell is quoted so a spreadsheet keeps it in one column.",
      },
      {
        title: "Copy or download",
        body: "Download writes data.csv. Clear removes both boxes. The JSON stays in the browser.",
      },
    ],
    examples: [
      {
        title: "A comma in a name",
        body: "A name of Doe, Jane is written as \"Doe, Jane\".",
      },
      {
        title: "A nested object",
        body: "A nested city object is kept as JSON text in one cell, with the inner quotes doubled.",
      },
    ],
    faqs: [
      {
        question: "What if I paste one object?",
        answer: "Wrap it in square brackets so it is an array of one object.",
      },
      {
        question: "What happens to null?",
        answer: "It becomes an empty cell.",
      },
      {
        question: "What happens to a nested object?",
        answer: "It stays one cell, written as JSON text. It does not become extra columns.",
      },
      {
        question: "Why was the JSON rejected?",
        answer: "It did not parse. Comments, trailing commas, and a stray brace fail. The JSON Formatter is the place to inspect that error.",
      },
    ],
    cta: {
      before: "To turn an array of objects into CSV, use",
      linkLabel: "JSON to CSV",
      href: "/tools/json-to-csv",
      after: ".",
    },
  },
  "how-to-convert-csv-to-json": {
    intro:
      "The first row becomes the keys. Each following row becomes an object. Quoted cells can contain commas. A doubled quote inside a quoted cell becomes one quote. An empty cell becomes an empty string. An unclosed quote is rejected.",
    why:
      "A spreadsheet and a JSON array use different rules for commas and quotes. Converting in the page lets you check the keys and the empty cells before you use the file.",
    stepsHeading: "How to convert CSV to JSON",
    steps: [
      {
        title: "Paste the CSV, including the header row",
        body: "The header becomes the object keys, in that order.",
      },
      {
        title: "Convert",
        body: "The page reads the text in the browser.",
      },
      {
        title: "Check empty cells",
        body: "A trailing comma with nothing after it is an empty string, not a missing key.",
      },
      {
        title: "Fix an unclosed quote before you retry",
        body: "The page rejects the CSV instead of guessing where the cell ends.",
      },
    ],
    examples: [
      {
        title: "A quoted comma and an empty cell",
        body: "The rows name,note then \"Doe, Jane\",\"say \"\"hi\"\"\" then Sara, become JSON with Doe, Jane, the note say \"hi\", and a second object whose note is an empty string.",
      },
    ],
    faqs: [
      {
        question: "Why is the comma inside the name one field?",
        answer: "The name is wrapped in quotes, so the comma is part of the cell.",
      },
      {
        question: "How is a quote inside a cell written?",
        answer: "CSV doubles it. A pair of quotes inside quotes becomes one quote in the JSON string.",
      },
      {
        question: "What is an empty cell?",
        answer: "An empty string. It is not null, and it is not a dropped key.",
      },
      {
        question: "What if a quote is never closed?",
        answer: "The conversion is rejected.",
      },
    ],
    cta: {
      before: "To turn a header row and data rows into a JSON array, use",
      linkLabel: "CSV to JSON",
      href: "/tools/csv-to-json",
      after: ".",
    },
  },
  "how-to-test-a-regular-expression": {
    intro:
      "Type the pattern without surrounding slashes, choose flags, and paste the text. The page lists whether anything matched, how many matches it found, the matched text, the index where each match starts, and any capture groups.",
    why:
      "It uses JavaScript regular expressions. The pattern is passed to the RegExp constructor. It is not run as a script. A pattern longer than 300 characters is rejected. The result stops after 50 matches.",
    stepsHeading: "How to test a pattern",
    steps: [
      {
        title: "Enter the pattern without slashes",
        body: "An empty pattern is rejected. A broken pattern such as a lone parenthesis shows the browser’s syntax message.",
      },
      {
        title: "Turn on the flags you need",
        body: "g finds every match. Without g, only the first match is listed. i ignores case. m changes ^ and $. s lets a dot match a line break. u turns on Unicode mode.",
      },
      {
        title: "Paste a small sample",
        body: "Press Test expression. Read the count, the text of each match, and the character index.",
      },
      {
        title: "Read groups from parentheses",
        body: "A bar means or. \\d is a digit, \\s is whitespace, and \\w is a word character. A dot matches one character. * means zero or more, + means one or more, and ? means optional.",
      },
    ],
    examples: [
      {
        title: "Two numbers",
        body: "The pattern \\d+ with the g flag on Order 14 and order 3 finds two matches. 14 starts at index 6. The later match is 3.",
      },
      {
        title: "A capture group",
        body: "The pattern Name: (\\w+) on Name: Sara captures Sara as group 1.",
      },
    ],
    notes: [
      {
        heading: "Exact text is a different tool",
        body: "Find and Replace looks for the exact characters you type. It does not use this pattern language.",
      },
    ],
    faqs: [
      {
        question: "Why do I only see one match?",
        answer: "The g flag is off. Without it, the result stops after the first match.",
      },
      {
        question: "Does the pattern run as code?",
        answer: "No. It is a regular expression, not a program.",
      },
      {
        question: "Why are there only 50 matches?",
        answer: "The page stops there so a huge result does not fill the screen.",
      },
      {
        question: "Why was the pattern rejected?",
        answer: "It was empty, longer than 300 characters, or not valid JavaScript regex syntax.",
      },
    ],
    cta: {
      before: "To list matches, indexes, and groups for a JavaScript pattern, use the",
      linkLabel: "Regex Tester",
      href: "/tools/regex-tester",
      after: ".",
    },
  },
  "how-to-hash-text": {
    intro:
      "A hash is a fixed-length fingerprint of the text you paste. This page offers SHA-256, SHA-384, and SHA-512 through Web Crypto. SHA-256 of the letters abc is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.",
    why:
      "MD5 and SHA-1 are not offered. A hash is not encryption: you cannot turn the hex back into the original text on this page. The same text and the same algorithm always produce the same hex.",
    stepsHeading: "How to hash text",
    steps: [
      {
        title: "Choose SHA-256, SHA-384, or SHA-512",
        body: "An unknown algorithm name is rejected.",
      },
      {
        title: "Paste the text",
        body: "The page encodes it as UTF-8 and hashes those bytes with Web Crypto.",
      },
      {
        title: "Copy the hex",
        body: "A browser without Web Crypto cannot create the hash.",
      },
    ],
    examples: [
      {
        title: "SHA-256 of abc",
        body: "The letters abc with SHA-256 produce ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.",
      },
    ],
    faqs: [
      {
        question: "Is a hash a password?",
        answer: "No. Use the Password Generator to create a password.",
      },
      {
        question: "Can I recover the text?",
        answer: "No. The hex does not include a way back to the original.",
      },
      {
        question: "Why is MD5 missing?",
        answer: "MD5 and SHA-1 are not on this page.",
      },
      {
        question: "Does the same text always match?",
        answer: "Yes, for the same algorithm. A different algorithm produces a different hex.",
      },
    ],
    cta: {
      before: "To fingerprint text with SHA-256, SHA-384, or SHA-512, use the",
      linkLabel: "Hash Generator",
      href: "/tools/hash-generator",
      after: ".",
    },
  },
  "how-to-convert-time-zones": {
    intro:
      "Pick the date, the clock time, the source zone, and the target zone. The page shows that same instant on the target clock, including the UTC offset of each zone.",
    why:
      "Zones do not share one offset all year. A June conversion and a January conversion can differ by an hour because of daylight saving. This page does not turn the time into a Unix timestamp. That job belongs to the Timestamp Converter.",
    stepsHeading: "How to convert a time between zones",
    steps: [
      {
        title: "Enter a real calendar date and a time",
        body: "An impossible date such as 2024-02-31 is rejected.",
      },
      {
        title: "Choose the source zone and the target zone",
        body: "The same zone on both sides keeps the same clock time.",
      },
      {
        title: "Read both clock times and both offsets",
        body: "A time that falls in a spring-forward gap is rejected. A time that falls in a fall-back hour uses the earlier offset and says the hour is ambiguous.",
      },
    ],
    examples: [
      {
        title: "New York noon in June",
        body: "2024-06-15 at 12:00 in America/New_York is 2024-06-15 at 17:00 in Europe/London. New York is UTC-04:00 and London is UTC+01:00 on that date.",
      },
      {
        title: "A date line and a skipped hour",
        body: "2024-01-15 at 10:00 in Pacific/Auckland is 2024-01-14 at 13:00 in America/Los_Angeles. 2024-11-03 at 01:30 in America/New_York is ambiguous, and the page uses UTC-04:00 and says so. 2024-03-10 at 02:30 in America/New_York is rejected because that clock time is skipped.",
      },
    ],
    faqs: [
      {
        question: "Does this count days?",
        answer: "No. The Date Difference Calculator counts calendar days. This page moves one clock time between zones.",
      },
      {
        question: "What happens in the repeated autumn hour?",
        answer: "The page uses the earlier offset and marks the time as ambiguous.",
      },
      {
        question: "What happens in the missing spring hour?",
        answer: "That time is rejected.",
      },
      {
        question: "Can the calendar day change?",
        answer: "Yes. Auckland 10:00 on 15 January 2024 is still 14 January in Los Angeles.",
      },
    ],
    cta: {
      before: "To move one clock time between two zones, use the",
      linkLabel: "Time Zone Converter",
      href: "/tools/time-zone-converter",
      after: ".",
    },
  },
  "how-to-read-a-jwt": {
    intro:
      "A compact JWT is three Base64URL sections separated by dots: header, payload, and signature. This page decodes the header and the payload so you can read the JSON. It does not check the signature.",
    why:
      "Anyone can change the payload and leave a signature in place. A decoded name or date is text from the token, not proof that a server signed it.",
    stepsHeading: "How to read a JWT",
    steps: [
      {
        title: "Paste a token with two dots",
        body: "One section is rejected. Four sections are rejected.",
      },
      {
        title: "Read the header JSON and the payload JSON",
        body: "A header that is not JSON is rejected. Characters that are not valid Base64URL are rejected.",
      },
      {
        title: "Check the signature report",
        body: "The page says whether a signature section is present and whether that section is empty. Decoding does not call the signature valid.",
      },
    ],
    examples: [
      {
        title: "A signed-looking sample",
        body: "The sample token with header alg HS256 and payload name John Doe decodes that name and reports that a signature section is present.",
      },
      {
        title: "An empty signature",
        body: "A token whose third section is empty decodes the payload and reports an empty signature. A payload that contains café keeps the accented character.",
      },
    ],
    faqs: [
      {
        question: "Does decode mean the token is trusted?",
        answer: "No. The signature is not checked.",
      },
      {
        question: "What is the middle section?",
        answer: "The payload, as JSON.",
      },
      {
        question: "What if the signature is missing?",
        answer: "An empty third section still decodes, and the page says the signature is empty.",
      },
      {
        question: "Why was the token rejected?",
        answer: "It had the wrong number of sections, the header was not JSON, or the Base64URL was invalid.",
      },
    ],
    cta: {
      before: "To read a JWT header and payload without treating the signature as verified, use the",
      linkLabel: "JWT Decoder",
      href: "/tools/jwt-decoder",
      after: ".",
    },
  },
  "how-to-generate-lorem-ipsum": {
    intro:
      "Lorem ipsum is placeholder Latin. This page builds paragraphs, sentences, or words from that text, and sentence output starts with the classic opening.",
    why:
      "Use it when a layout needs text and the real copy is not ready. It is not a translation, and it is not a word count of your own draft.",
    stepsHeading: "How to generate lorem ipsum",
    steps: [
      {
        title: "Choose paragraphs, sentences, or words",
        body: "Paragraphs allow 1 to 20. Sentences allow 1 to 50. Words allow 1 to 500.",
      },
      {
        title: "Enter a quantity",
        body: "Zero and a blank quantity are rejected.",
      },
      {
        title: "Read the text",
        body: "Two paragraphs are separated by a blank line.",
      },
    ],
    examples: [
      {
        title: "Words, sentences, and paragraphs",
        body: "A request for sentences includes the classic opening Lorem ipsum. A request for 8 words returns 8 words. A request for 2 paragraphs returns two blocks separated by a blank line.",
      },
    ],
    faqs: [
      {
        question: "What is the longest request?",
        answer: "20 paragraphs, 50 sentences, or 500 words.",
      },
      {
        question: "Does it start with Lorem ipsum?",
        answer: "Sentence output includes that classic opening.",
      },
      {
        question: "Can I count my own text here?",
        answer: "No. Use the Word Counter or the Character Counter for text you wrote.",
      },
      {
        question: "What does zero do?",
        answer: "It is rejected.",
      },
    ],
    cta: {
      before: "To fill a layout with placeholder text, use the",
      linkLabel: "Lorem Ipsum Generator",
      href: "/tools/lorem-ipsum-generator",
      after: ".",
    },
  },
  "how-to-find-and-replace-text": {
    intro:
      "Type the exact characters to find, type the replacement, and choose the first match or every match. Case-sensitive mode compares the letters as typed. With case sensitivity off, the search ignores letter case and still inserts the replacement as you typed it.",
    why:
      "This is a literal search. A pattern such as any number belongs on the Regex Tester.",
    stepsHeading: "How to find and replace text",
    steps: [
      {
        title: "Paste the original text",
        body: "An empty source is rejected.",
      },
      {
        title: "Enter the text to find",
        body: "A blank find box is rejected. Enter the replacement, or leave it blank to delete the matches.",
      },
      {
        title: "Choose the first match or every match",
        body: "The search continues after each match, so the replacement is not searched again in the same pass.",
      },
    ],
    examples: [
      {
        title: "Two spellings of Ana",
        body: "The text Ana ana, find ana, replacement Ana, case sensitivity off, replace all: both become Ana Ana, and the count is 2.",
      },
    ],
    faqs: [
      {
        question: "Can I match a pattern?",
        answer: "No. The Regex Tester does that. This page looks for the characters you type.",
      },
      {
        question: "What does a blank replacement do?",
        answer: "It deletes the matches.",
      },
      {
        question: "Does Replace first change later copies?",
        answer: "No. Only the first match changes.",
      },
      {
        question: "Why was the box rejected?",
        answer: "The source was empty, or the find box was blank.",
      },
    ],
    cta: {
      before: "To change an exact phrase in pasted text, use",
      linkLabel: "Find and Replace",
      href: "/tools/find-and-replace",
      after: ".",
    },
  },
  "how-to-remove-line-breaks": {
    intro:
      "Line breaks can become spaces, disappear, or stay only where a blank line marked a paragraph.",
    why:
      "A paste from a PDF or an email often has a break at the end of every visual line. Joining those lines makes one paragraph. A blank line between paragraphs can be kept when you still want the paragraph split.",
    stepsHeading: "How to remove line breaks",
    steps: [
      {
        title: "Paste the text",
        body: "An empty box is rejected. Windows and old Mac line endings are treated as the same break.",
      },
      {
        title: "Choose what happens to each break",
        body: "Replace line breaks with spaces joins every line and collapses extra spaces. Remove line breaks deletes the breaks and does not insert a space. Keep paragraph breaks leaves a blank line between blocks and joins the lines inside each block.",
      },
      {
        title: "Copy the result",
        body: "Spaces inside a line are not the job of this page. The Whitespace Remover cleans those.",
      },
    ],
    examples: [
      {
        title: "Joined lines and kept paragraphs",
        body: "one and two on separate lines, joined with spaces, become one two. one, two, a blank line, then three and four, with paragraph breaks kept, become one two, a blank line, then three four.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between the three choices?",
        answer: "Spaces joins every line. Remove deletes the breaks with no space added. Paragraphs keeps the blank line between blocks and joins the lines inside each block.",
      },
      {
        question: "Does this remove spaces inside a line?",
        answer: "No. The Whitespace Remover cleans spaces, tabs, and blank lines as its own job.",
      },
      {
        question: "Can I replace a word at the same time?",
        answer: "No. Find and Replace does that after the lines are joined.",
      },
    ],
    cta: {
      before: "To join wrapped lines, use",
      linkLabel: "Remove Line Breaks",
      href: "/tools/remove-line-breaks",
      after: ".",
    },
  },
  "how-to-add-line-numbers": {
    intro:
      "A line number is a prefix on each line. The text of the line stays the same.",
    why:
      "Numbered lines are easier to cite. The numbers are characters added to the text. They are not a separate gutter.",
    stepsHeading: "How to add line numbers",
    steps: [
      {
        title: "Paste the text",
        body: "An empty box is rejected.",
      },
      {
        title: "Set the starting number",
        body: "1 is the usual start. The starting number must be a whole number.",
      },
      {
        title: "Set the separator after the number",
        body: "A period and a space is one choice. Sorting or replacing afterward will treat the numbers as part of each line.",
      },
    ],
    examples: [
      {
        title: "Three numbered lines",
        body: "First line, Second line, and Third line, starting at 1 with the separator period-space, become 1. First line, then 2. Second line, then 3. Third line.",
      },
    ],
    faqs: [
      {
        question: "Do the numbers change the original words?",
        answer: "No. They are added in front of each line.",
      },
      {
        question: "Can I start at a number other than 1?",
        answer: "Yes. Set the starting number.",
      },
      {
        question: "Will a later sort ignore the numbers?",
        answer: "No. The Line Sorter sees the numbers as part of the line. Use Find and Replace first if the numbers should come off.",
      },
    ],
    cta: {
      before: "To put a number in front of each line, use",
      linkLabel: "Add Line Numbers",
      href: "/tools/add-line-numbers",
      after: ".",
    },
  },
  "how-to-turn-a-number-into-words": {
    intro:
      "The page writes a whole number in English words, from zero through 999,999,999. It also reads a simple English phrase back into a number.",
    why:
      "A check, a contract, or a caption sometimes needs the words beside the digits. The words follow the value after leading zeros are removed.",
    stepsHeading: "How to turn a number into words",
    steps: [
      {
        title: "Enter a whole number, or enter words to parse",
        body: "0 is zero. A negative number is allowed and starts with minus. A decimal is rejected. An empty box is rejected.",
      },
      {
        title: "Stay inside the millions",
        body: "1,000,000,000 is rejected. The range is -999,999,999 through 999,999,999. Leading zeros are ignored, so 007 is seven.",
      },
      {
        title: "Read the other form",
        body: "Tens use a hyphen, as in forty-two.",
      },
    ],
    examples: [
      {
        title: "Digits and a phrase",
        body: "7 is seven. 42 is forty-two. 100 is one hundred. 1234 is one thousand two hundred thirty-four. 1000000 is one million. -7 is minus seven. The words one hundred twenty-three parse back to 123. The phrase not a number is rejected.",
      },
    ],
    faqs: [
      {
        question: "Are decimals written out?",
        answer: "No. 1.5 is rejected.",
      },
      {
        question: "How are tens written?",
        answer: "With a hyphen, as in forty-two.",
      },
      {
        question: "What is the largest value?",
        answer: "999,999,999. 1,000,000,000 is rejected.",
      },
      {
        question: "Can I go from words back to digits?",
        answer: "Yes, for a simple phrase such as one hundred twenty-three.",
      },
    ],
    cta: {
      before: "To write a whole number in English words, use",
      linkLabel: "Number to Words",
      href: "/tools/number-to-words",
      after: ".",
    },
  },
  "how-to-convert-text-to-morse-code": {
    intro:
      "Morse on this page is dots and dashes for A to Z and 0 to 9. Letters in a word are separated by spaces. Words are separated by a slash.",
    why:
      "Lowercase is converted to uppercase first, so hello and HELLO are the same code. Punctuation is rejected. The page does not play sound.",
    stepsHeading: "How to convert text to Morse code",
    steps: [
      {
        title: "Type letters or digits",
        body: "An empty box is rejected.",
      },
      {
        title: "Read the code",
        body: "A slash separates words.",
      },
      {
        title: "Paste code to go back to text",
        body: "Extra spaces and a trailing slash are tolerated when the letters are still valid. A run that is not a letter, such as six dots, is rejected.",
      },
    ],
    examples: [
      {
        title: "HELLO, SOS, and two words",
        body: "HELLO is .... . .-.. .-.. ---. SOS is ... --- .... HELLO WORLD is .... . .-.. .-.. --- / .-- --- .-. .-.. -.. The alphabet and the digits 0 through 9 round-trip. HELLO! is rejected.",
      },
    ],
    faqs: [
      {
        question: "Does lowercase matter?",
        answer: "No. hello becomes HELLO before it is encoded.",
      },
      {
        question: "Are words separated?",
        answer: "Yes. A slash separates words.",
      },
      {
        question: "What characters are allowed?",
        answer: "A to Z and 0 to 9. Punctuation is rejected.",
      },
      {
        question: "Can I hear the code?",
        answer: "No. The result is text.",
      },
    ],
    cta: {
      before: "To turn letters and digits into dots and dashes, use",
      linkLabel: "Morse Code",
      href: "/tools/morse-code",
      after: ".",
    },
  },
  "how-to-convert-roman-numerals": {
    intro:
      "Standard Roman numerals use I, V, X, L, C, D, and M, with subtractive pairs for 4, 9, 40, 90, 400, and 900. This page converts a whole number from 1 to 3999 into that form, and a valid numeral back into a number.",
    why:
      "Repeated letters such as IIII, and pairs such as IC or IL, are not the standard form, so they are rejected. Zero and negative numbers are rejected. 4000 is outside the range.",
    stepsHeading: "How to convert numbers and Roman numerals",
    steps: [
      {
        title: "Enter a whole number from 1 to 3999, or enter a numeral",
        body: "An empty box is rejected.",
      },
      {
        title: "Read the other form",
        body: "1 is I. 4 is IV. 9 is IX. 40 is XL. 90 is XC. 400 is CD. 900 is CM. 3999 is MMMCMXCIX.",
      },
      {
        title: "Reject a nonstandard numeral",
        body: "IIII, IC, and IL are rejected. So are 0, a negative number, and 4000.",
      },
    ],
    examples: [
      {
        title: "Standard values",
        body: "XIV is 14. MMMCMXCIX is 3999. IIII, IC, IL, an empty box, 0, a negative number, and 4000 are rejected.",
      },
    ],
    faqs: [
      {
        question: "Why is 4 written IV?",
        answer: "The standard form subtracts I from V. IIII is rejected.",
      },
      {
        question: "What is the highest number?",
        answer: "3999, written MMMCMXCIX.",
      },
      {
        question: "Does XIV equal 14?",
        answer: "Yes.",
      },
      {
        question: "Can I write amounts in English words here?",
        answer: "No. Number to Words does that.",
      },
    ],
    cta: {
      before: "To convert a number from 1 to 3999, or a standard numeral, use the",
      linkLabel: "Roman Numeral Converter",
      href: "/tools/roman-numeral-converter",
      after: ".",
    },
  },
  "how-to-generate-a-password": {
    intro:
      "A password here is a random string from the character types you turn on. Length runs from 8 to 64. The default is 16. Each character is chosen with crypto.getRandomValues. The page does not use Math.random, and it does not send or store the password.",
    why:
      "The meter is an estimate. Entropy is the length times the base-2 log of the character-set size, rounded to a whole number of bits. Under 50 bits is Short. Under 80 is Moderate. 80 or more is Strong. That label does not check reuse, phishing, or a breached site.",
    stepsHeading: "How to generate a password",
    steps: [
      {
        title: "Set a whole-number length from 8 to 64",
        body: "A blank length, 7, and 65 are rejected.",
      },
      {
        title: "Turn on the character types you want",
        body: "The choices are uppercase, lowercase, numbers, and symbols. Turning every type off is rejected. The length also has to be at least the number of types you selected, because the page places one character from each selected set before it fills the rest.",
      },
      {
        title: "Choose whether to drop ambiguous characters",
        body: "Exclude ambiguous characters removes O, 0, I, l, and 1 from letters and digits. The symbol list stays !@#$%^&*()-_=+[]{};:,.?",
      },
      {
        title: "Press Generate and copy the result",
        body: "Clear wipes it from the page. The password changes every time you press Generate.",
      },
    ],
    examples: [
      {
        title: "A short digit-only password",
        body: "Eight digits with ambiguous characters excluded uses the set 23456789. That is 8 characters, so 8 times log2 of 8 is 24 bits, labeled Short.",
      },
      {
        title: "The default mixed length",
        body: "Sixteen characters with uppercase, lowercase, numbers, symbols, and ambiguous characters excluded uses a set of 80. Sixteen times log2 of 80 rounds to 101 bits, labeled Strong.",
      },
    ],
    faqs: [
      {
        question: "Why can a short length fail even when it is at least 8?",
        answer: "The length must also cover one slot for each selected type. Two characters cannot include four types.",
      },
      {
        question: "Does excluding ambiguous characters change the symbols?",
        answer: "No. Those five characters are removed from letters and digits. The symbol list does not contain them.",
      },
      {
        question: "Is this a hash of a word I already use?",
        answer: "No. The Hash Generator fingerprints text you paste. This page creates a new string.",
      },
      {
        question: "Does Strong mean the password is safe to reuse?",
        answer: "No. The meter only reflects length and set size.",
      },
    ],
    cta: {
      before: "To create a random password in the browser, use the",
      linkLabel: "Password Generator",
      href: "/tools/password-generator",
      after: ".",
    },
  },
  "how-to-read-a-url": {
    intro:
      "Paste one absolute http or https URL. The page splits it into protocol, hostname, port, path, fragment, and each query parameter. Parsing stays in the browser. The link is not opened.",
    why:
      "A query string and a fragment look similar in a long link, and the same key can appear twice. This page lists those parts. It does not percent-encode the text, and it does not add campaign tags. Those jobs belong to the URL Encoder and the UTM Builder.",
    stepsHeading: "How to read the parts of a URL",
    steps: [
      {
        title: "Paste a URL that includes http:// or https://",
        body: "A path such as /docs/page is rejected. A broken URL such as http://[ is rejected. Other protocols are rejected too.",
      },
      {
        title: "Press Parse",
        body: "Read the protocol without the colon, the hostname, the port, the path, and the fragment without the hash mark.",
      },
      {
        title: "Read each query row",
        body: "Each key is its own row. A key with nothing after the equals sign stays, with an empty value. Duplicate keys stay as separate rows.",
      },
    ],
    examples: [
      {
        title: "A port, a repeated key, and a fragment",
        body: "https://example.com:8080/docs/page?topic=a&topic=&ref=hub#section is protocol https, hostname example.com, port 8080, path /docs/page, and fragment section. The query rows are topic = a, topic with an empty value, and ref = hub.",
      },
      {
        title: "A plain path and an internationalized name",
        body: "https://example.com/docs has no port, no fragment, and no query rows. https://bücher.example/path returns the hostname xn--bcher-kva.example.",
      },
    ],
    faqs: [
      {
        question: "Why is the hostname a string of letters and dashes?",
        answer: "An internationalized name is shown the way the URL parser encodes it.",
      },
      {
        question: "Is the fragment a query parameter?",
        answer: "No. The part after # is the fragment.",
      },
      {
        question: "Does this change the link?",
        answer: "No. It only reads the parts. Encoding is a separate tool.",
      },
      {
        question: "What is rejected?",
        answer: "A missing protocol, a URL that is not http or https, and a string the browser cannot parse.",
      },
    ],
    cta: {
      before: "To split an absolute URL into its parts, use the",
      linkLabel: "URL Parser",
      href: "/tools/url-parser",
      after: ".",
    },
  },
  "what-is-robots-txt": {
    intro:
      "robots.txt is text a site can publish for crawlers. This page builds that text from user-agent groups and an optional sitemap URL. Copying the result does not put the file on a website, and the page does not request your site.",
    why:
      "Each group starts with a User-agent line, then one Allow line per path and one Disallow line per path. Blank path lines are skipped. A sitemap line is added only when the address is an absolute http or https URL.",
    stepsHeading: "How to write a robots.txt file",
    steps: [
      {
        title: "Enter a user-agent",
        body: "An asterisk means every crawler. Each group needs a user-agent. An empty group is rejected.",
      },
      {
        title: "Put paths on their own lines",
        body: "Allow paths and disallow paths are separate boxes. A blank line is skipped.",
      },
      {
        title: "Add another group when a second crawler needs different rules",
        body: "Each group has its own user-agent and its own allow and disallow lines.",
      },
      {
        title: "Add a sitemap only if you want one",
        body: "example.com/sitemap.xml is rejected because it has no protocol. Press Generate and copy the text. You still have to place that file at the site root yourself.",
      },
    ],
    examples: [
      {
        title: "One disallow rule",
        body: "One group with user-agent * and disallow /admin, and no sitemap, is User-agent: * followed by Disallow: /admin.",
      },
      {
        title: "Several rules and a sitemap",
        body: "Allow paths /public and /assets, disallow paths /admin and /private, and sitemap https://example.com/sitemap.xml write those four rules and end with Sitemap: https://example.com/sitemap.xml. A second group for Bingbot with allow / is included, and a blank sitemap box adds no Sitemap line. An allow list of a blank row and /ok becomes only Allow: /ok.",
      },
    ],
    faqs: [
      {
        question: "Does the page publish the file?",
        answer: "No. It writes text you can copy. A crawler sees the rules only after the file is on the site.",
      },
      {
        question: "Can two groups use different agents?",
        answer: "Yes. Each group has its own user-agent and its own allow and disallow lines.",
      },
      {
        question: "What does a blank path do?",
        answer: "It is skipped. It does not become an empty Allow or Disallow line.",
      },
      {
        question: "Which sitemap addresses work?",
        answer: "An absolute http or https URL with a hostname. A bare domain is rejected.",
      },
    ],
    cta: {
      before: "To build robots.txt text you can copy, use the",
      linkLabel: "Robots.txt Generator",
      href: "/tools/robots-txt-generator",
      after: ".",
    },
  },
  "how-to-build-an-ai-prompt": {
    intro:
      "Generate prompt joins the fields on this page into a prompt and stays in the browser. Generate with AI posts a subset of those fields to this site, which sends them to Google's Gemini API and returns a rewritten prompt. A preset only fills boxes. It does not call Gemini. Neither button runs the finished prompt in a writing model.",
    why:
      "The local prompt includes the platform or use case. The AI request does not. Generate with AI sends topic, goal, audience, tone, language, output format, level of detail, and additional instructions. The required input is topic, goal, and additional instructions. If those three are blank, the AI button is rejected even when audience or use case is filled. Generate prompt is rejected only when both topic and goal are blank. The AI input can be up to 4,000 characters.",
    stepsHeading: "How to build a prompt",
    steps: [
      {
        title: "Add a topic or a goal",
        body: "Choose a preset if you want starter values for use case, tone, format, detail, and extra instructions. A preset does not call the API.",
      },
      {
        title: "Press Generate prompt for the local text",
        body: "It names the task, includes the filled lines, and ends with a line that says a missing fact should be stated instead of invented.",
      },
      {
        title: "Press Generate with AI only for the fields Gemini receives",
        body: "That button sends topic, goal, audience, tone, language, output format, level of detail, and additional instructions. It does not send the platform or use case as its own field.",
      },
      {
        title: "Copy the result you want",
        body: "Copy prompt copies the local result. Copy AI prompt copies the Gemini result. Clear empties the form and does not call the API.",
      },
    ],
    examples: [
      {
        title: "An email about office hours",
        body: "Use case Email, topic Office hours, audience Customers, tone Brief, language English, format Email, detail Brief, and a blank goal produces this local prompt: You are helping with a specific task. Follow the constraints below. Task: Email. Topic: Office hours. Audience: Customers. Tone: Brief. Language: English. Output format: Email. Level of detail: Brief. If a fact is missing, say so instead of inventing it. That local text is not uploaded. Generate with AI on the same form would send the topic, audience, tone, language, format, detail, and the blank goal and instructions. It would not send the Email use case as its own field.",
      },
    ],
    faqs: [
      {
        question: "Where does Generate with AI go?",
        answer: "The browser posts the fields listed above to this site. This site calls Google's Gemini API. The text is not saved here. The privacy page says that on the free tier, Google may use it to improve its products.",
      },
      {
        question: "What if the AI button says generation is not available?",
        answer: "The site has no Gemini key configured, so the request stops before a model runs.",
      },
      {
        question: "What if I press it too often?",
        answer: "The default limit is 10 AI requests in 60 seconds. The extra request asks you to wait a minute.",
      },
      {
        question: "Does a preset send anything?",
        answer: "No. It only fills boxes on this page.",
      },
    ],
    cta: {
      before: "To assemble a prompt in the browser, or send the listed fields to Gemini, use the",
      linkLabel: "AI Prompt Generator",
      href: "/tools/ai-prompt-generator",
      after: ".",
    },
  },
  "how-to-write-an-image-prompt": {
    intro:
      "Build prompt writes an image prompt and a negative prompt in the browser. It needs a subject. Generate with AI posts the description to this site, which sends it to Google's Gemini API and returns a longer prompt. This page does not render an image either way. A style preset only fills boxes.",
    why:
      "Build prompt turns each filled field into a short clause and leaves empty fields out. Generate with AI sends subject, environment, style, composition, lighting, camera, colors, aspect ratio, mood, quality, and the negative prompt. The request is rejected when subject, environment, and style are all blank, even if lighting or a negative prompt is filled. The AI input can be up to 2,000 characters. Copy prompt and Copy negative prompt copy the local boxes. Copy AI prompt copies the Gemini text.",
    stepsHeading: "How to write an image prompt",
    steps: [
      {
        title: "Describe the subject for the local button",
        body: "Add setting, light, camera, colors, mood, and aspect ratio when you care about them.",
      },
      {
        title: "Fill the negative prompt",
        body: "Put things that should stay out of the frame there. A preset only fills boxes.",
      },
      {
        title: "Press Build prompt to assemble the text here",
        body: "Empty fields are left out. The page does not create an image file.",
      },
      {
        title: "Press Generate with AI when you want Gemini to expand it",
        body: "Subject, environment, or style has to contain text. The result is still words. Paste them into an image tool if you want a picture.",
      },
    ],
    examples: [
      {
        title: "A studio mug",
        body: "Subject a mug, style Studio, aspect ratio 1:1, and negative prompt logos becomes Subject: a mug. Style: Studio. Aspect ratio: 1:1. The negative prompt is logos. That Build prompt result stays in the browser. Generate with AI on the same form would send the mug, the Studio style, the 1:1 ratio, and the logos line.",
      },
    ],
    faqs: [
      {
        question: "Why is there no picture?",
        answer: "Neither button is connected to an image API. Gemini returns text.",
      },
      {
        question: "Does Build prompt upload the brief?",
        answer: "No. Only Generate with AI sends it.",
      },
      {
        question: "What does this site keep?",
        answer: "The privacy page says the submitted text is not saved here, and that on the free tier Google may use it to improve its products.",
      },
      {
        question: "What if only the negative prompt is filled?",
        answer: "Build prompt asks for a subject. Generate with AI is rejected because subject, environment, and style are blank.",
      },
    ],
    cta: {
      before: "To write an image prompt without rendering a picture, use the",
      linkLabel: "Prompt to Image Generator",
      href: "/tools/prompt-to-image",
      after: ".",
    },
  },
  "how-to-write-a-video-prompt": {
    intro:
      "Build prompt writes a shot description in the browser. It needs a subject or an action. Generate with AI posts the shot fields to this site, which sends them to Google's Gemini API and returns a written prompt. This page does not render or download a video. A preset only fills boxes.",
    why:
      "The local builder keeps the clauses you filled and adds a line that the request should stay one continuous shot. Empty duration and aspect ratio still start at 5 seconds and 16:9. Generate with AI sends subject, scene, action, environment, camera movement, camera angle, lens, lighting, style, duration, aspect ratio, mood, audio or dialogue, and the negative prompt. Camera movement, angle, and lens are sent as one camera line. The request is rejected when subject, scene, action, and environment are all blank. The AI input can be up to 3,000 characters.",
    stepsHeading: "How to write a video prompt",
    steps: [
      {
        title: "Add a subject or an action for the local button",
        body: "Describe the scene, camera, light, duration, and sound when the shot needs them.",
      },
      {
        title: "Press Build prompt",
        body: "The local text includes the negative prompt if you typed one, and it ends by asking for one continuous shot.",
      },
      {
        title: "Press Generate with AI when one of the four input fields is filled",
        body: "Those fields are subject, scene, action, and environment. Copy prompt and Copy negative prompt copy the local text. Copy AI prompt copies the Gemini text.",
      },
    ],
    examples: [
      {
        title: "Steam rising",
        body: "An empty form with only the action steam rises builds Action: steam rises. Duration: 5 seconds. Aspect ratio: 16:9. Keep it to one continuous shot. That text stays in the browser. Generate with AI on the same form would send the action, the 5 second duration, and the 16:9 ratio.",
      },
    ],
    faqs: [
      {
        question: "Can I download a video from this page?",
        answer: "No. Both buttons return words. You paste the prompt into a video tool if you want a clip.",
      },
      {
        question: "Does a scene by itself work?",
        answer: "Build prompt still needs a subject or an action. Generate with AI can send a scene, because scene is one of the four fields that count as the AI input.",
      },
      {
        question: "Is the shot saved?",
        answer: "The local text is not uploaded. The AI request is not saved on this site. On the free tier, Google may use that submitted text to improve its products.",
      },
    ],
    cta: {
      before: "To write a shot prompt without rendering a clip, use the",
      linkLabel: "Prompt to Video Generator",
      href: "/tools/prompt-to-video",
      after: ".",
    },
  },
  "what-a-writing-pattern-check-can-tell-you": {
    intro:
      "Analyze writing counts patterns in the browser. It needs at least 40 words. Analyze with AI posts the pasted draft to this site, which sends it to Google's Gemini API and asks for a written description of those patterns. Neither button decides who wrote the text, and neither one returns a percentage.",
    why:
      "The local report shows word count, sentence count, paragraph count, average sentence length, a sentence-variation label, and a vocabulary label. A four-word phrase is listed when it appears at least three times, up to five phrases. A short fixed list of stock phrases is named when those words are present. The result says these are writing patterns, not proof of who wrote the text, and that a detector can be wrong in both directions. Analyze with AI sends the draft only. It does not send the local counts. The draft can be up to 12,000 characters. The model is told not to call the text definitely human or definitely AI, and not to give a percentage.",
    stepsHeading: "How to read a writing-pattern check",
    steps: [
      {
        title: "Paste a section, not a headline",
        body: "A sample under 40 words is rejected.",
      },
      {
        title: "Press Analyze writing for the counts",
        body: "Read the averages, the variation label, the vocabulary label, and any repeated phrases. The note under the counts says the patterns are not proof of authorship.",
      },
      {
        title: "Press Analyze with AI only when you want Gemini to describe the same draft",
        body: "That button sends the pasted text, not the local counts. Clear removes the text from the page and does not call the API.",
      },
    ],
    examples: [
      {
        title: "A repeated four-word phrase",
        body: "The sample that repeats the same small phrase in three sentences is 41 words, 3 sentences, and 1 paragraph. The average sentence is 13.7 words. Sentence variation is Varied. Vocabulary is Broad. The phrase the same small phrase appears 3 times. No stock phrase from the fixed list is present. Analyze writing does not upload that sample. Analyze with AI would send the whole sample.",
      },
    ],
    faqs: [
      {
        question: "Why is there no score?",
        answer: "A percentage would look like proof. Both buttons describe patterns.",
      },
      {
        question: "Can a careful human draft look even?",
        answer: "Yes. The page says similar patterns show up in edited human drafts and in generated drafts.",
      },
      {
        question: "Does Analyze with AI see a different text?",
        answer: "It sees the draft you pasted, not a summary of the local counts.",
      },
      {
        question: "What happens to that draft?",
        answer: "It is not saved on this site. On the free tier, Google may use the submitted text to improve its products.",
      },
    ],
    cta: {
      before: "To count writing patterns in the browser, or send the draft to Gemini for a description, use the",
      linkLabel: "AI Article Detector",
      href: "/tools/ai-article-detector",
      after: ".",
    },
  },
  "how-to-shorten-an-article": {
    intro:
      "Shorten article applies a fixed list of edits in the browser. It needs at least 12 words. Compress with AI posts the article and the compression setting to this site, which sends them to Google's Gemini API and returns a shorter draft. Read either result before you rely on it. Shortening can drop a sentence you still wanted.",
    why:
      "Light compression swaps a fixed set of wordy phrases, such as in order to becoming to, and it does not delete sentences. Medium and strong use more phrase cuts, and they drop a later sentence that repeats an earlier one exactly. Strong also drops a later sentence whose first six words match an earlier sentence. Compress with AI sends the pasted article plus the setting you selected. Light is sent as Short, medium as Medium, and strong as Detailed. The article can be up to 12,000 characters. Gemini is asked to keep the main meaning and important facts and to return only the shorter article. That is a request, not a guarantee.",
    stepsHeading: "How to shorten an article",
    steps: [
      {
        title: "Paste at least 12 words",
        body: "Choose light, medium, or strong. The form starts on medium.",
      },
      {
        title: "Press Shorten article for the local rules",
        body: "The page shows the word count before and after. Light does not remove a repeated sentence.",
      },
      {
        title: "Press Compress with AI when you want Gemini to rewrite at the setting you selected",
        body: "Copy shorter draft copies the local result. Copy AI draft copies the Gemini result. Clear empties both boxes, returns the setting to medium, and does not call the API.",
      },
    ],
    examples: [
      {
        title: "A repeated sentence",
        body: "The sentence In order to finish the form you must sign it, pasted twice, is 20 words. Medium compression becomes to finish the form you must sign it. and the count is 8 words, because the second exact copy is dropped. The same idea with a comma, on light compression, keeps both sentences. In order to becomes to, and 22 words become 18.",
      },
    ],
    faqs: [
      {
        question: "Will the shorter text bypass a detector?",
        answer: "No. This page does not try to do that.",
      },
      {
        question: "Does Shorten article upload the draft?",
        answer: "No. Only Compress with AI sends it.",
      },
      {
        question: "Does the AI result always keep every fact?",
        answer: "No. The instruction asks Gemini to keep the main meaning and important facts. Read the shorter draft.",
      },
      {
        question: "Is the article saved?",
        answer: "It is not saved on this site. On the free tier, Google may use the submitted text to improve its products.",
      },
    ],
    cta: {
      before: "To shorten a draft in the browser, or send it to Gemini with the setting you chose, use the",
      linkLabel: "AI Article Compressor",
      href: "/tools/ai-article-compressor",
      after: ".",
    },
  },
  "how-to-add-hours-and-minutes": {
    intro:
      "To add or subtract hours and minutes, turn each side into minutes, combine them, then split the signed total back into hours and a remainder from 0 to 59. The Time Calculator does that duration arithmetic. It does not look up a clock, a date, or a time zone.",
    why:
      "Minutes past 59 are easy to leave as 75 or 90 when a timesheet, a trip, or a recipe is the real question. Carrying those minutes by hand is where the leftover hour gets dropped. A total in minutes is the check: if the hours and the remainder do not multiply back to that total, the carry is wrong.",
    stepsHeading: "How to add or subtract hours and minutes",
    steps: [
      {
        title: "Enter the starting hours and minutes",
        body: "Both boxes need whole numbers from 0 through 100,000. A blank box, a decimal, and a negative number are rejected. You can type 90 in the minutes box. You do not have to convert it to 1 hour 30 minutes first.",
      },
      {
        title: "Enter the hours and minutes to add or subtract",
        body: "Those two boxes use the same rules. Zero is allowed. A blank box is not.",
      },
      {
        title: "Choose Add or Subtract, then press Calculate",
        body: "Add combines the two durations. Subtract takes the second duration away from the first. The page then shows hours, leftover minutes, and the signed total in minutes.",
      },
      {
        title: "Check the total minutes",
        body: "Hours times 60, plus the leftover minutes, should equal the absolute total. A minus sign means the subtraction went below zero. The hours and minutes are still the size of that gap.",
      },
    ],
    examples: [
      {
        title: "2 hours 30 minutes plus 1 hour 45 minutes",
        body: "The start is 150 minutes. The change is 105 minutes. The sum is 255 minutes, which is 4 hours 15 minutes.",
      },
      {
        title: "1 hour minus 1 hour 30 minutes",
        body: "60 minutes minus 90 minutes is −30 minutes. The page shows minus 0 hours 30 minutes.",
      },
    ],
    notes: [
      {
        heading: "This is not a clock",
        body: "The boxes are lengths of time, not a time of day. 2 hours 30 minutes plus 1 hour 45 minutes is 4 hours 15 minutes of duration. It is not 4:15 on a clock, and it is not a time in another city.",
      },
      {
        heading: "What the page will not do",
        body: "It will not convert time zones, and it will not count calendar days. Hours and minutes must each be a whole number from 0 through 100,000. Use the Date Difference Calculator when the question is days between two dates. Use the Time Zone Converter when the same instant has to be read in two zones.",
      },
    ],
    faqs: [
      {
        question: "How do I turn 90 minutes into hours before I add?",
        answer:
          "You do not have to. Type 90 in the minutes box. The page carries 60 minutes into an hour and leaves the remainder.",
      },
      {
        question: "How can I tell the carry is right?",
        answer:
          "Multiply the shown hours by 60 and add the leftover minutes. That number should match the total minutes. For 4 hours 15 minutes, 4 × 60 + 15 is 255.",
      },
      {
        question: "What does a minus result mean?",
        answer:
          "Subtract removed more time than the start contained. Minus 0 hours 30 minutes is a 30 minute gap below zero, which is −30 minutes. The input boxes still reject a negative number.",
      },
      {
        question: "When is this the wrong tool?",
        answer:
          "Use it for a block of hours and minutes. Use the Date Difference Calculator for calendar days, and the Time Zone Converter when you need the same moment in two zones.",
      },
    ],
    cta: {
      before: "To add or subtract a block of hours and minutes, use the",
      linkLabel: "Time Calculator",
      href: "/tools/time-calculator",
      after: ". It runs in the browser and does not require an account.",
    },
  },
  "how-to-read-a-cron-expression": {
    intro:
      "A cron expression on this page is five numbers or stars: minute, hour, day of month, month, and day of week. Sunday is 0 and Saturday is 6. Names such as MON or JAN are not accepted, and a sixth field for seconds is not accepted.",
    why:
      "The field that surprises people is the pair of day fields. When both the day of month and the day of week are set to something other than a star, cron matches either day, not both. 0 9 1 * 1 means 09:00 on the 1st of the month or on Monday. It does not mean only a Monday that falls on the 1st.",
    stepsHeading: "How to build or explain a cron expression",
    steps: [
      {
        title: "Choose Build or Explain",
        body: "Build fills the five fields and writes the expression. Explain takes an expression you paste and writes a plain-language summary. Both stay in the browser tab.",
      },
      {
        title: "Fill minute, hour, day of month, month, and day of week",
        body: "A star means every value in that field. A single number picks one value. A range such as 1-5 picks the values from the start through the end. A comma list picks those values. A star step such as */15 means every 15 of that field. Minute runs from 0 to 59, hour from 0 to 23, day of month from 1 to 31, month from 1 to 12, and day of week from 0 to 6.",
      },
      {
        title: "Read the summary before you copy the expression",
        body: "*/15 * * * * means every 15 minutes. 0 9 * * 1-5 means at 09:00 on Monday through Friday. If both day fields are restricted, the summary says cron treats that as either day, not both.",
      },
      {
        title: "Copy the five fields into the scheduler yourself",
        body: "The page writes the text. It does not install the schedule, and it does not send the expression to a server.",
      },
    ],
    examples: [
      {
        title: "Weekdays at 09:00",
        body: "0 9 * * 1-5 is minute 0, hour 9, any day of month, any month, and Monday through Friday. Sunday is 0, so 1-5 is Monday through Friday. Saturday would be 6.",
      },
      {
        title: "The 1st or Monday, not only a Monday the 1st",
        body: "0 9 1 * 1 is 09:00 on day 1 of the month or on Monday. A Monday that is not the 1st still matches. The 1st still matches when it is not a Monday.",
      },
    ],
    notes: [
      {
        heading: "Names, seconds, and day 7",
        body: "MON, JAN, and other names are rejected. A leading seconds field makes six fields, and six fields are rejected. Day of week 7 is rejected. Sunday is 0.",
      },
      {
        heading: "A step inside a range",
        body: "*/15 is accepted. A step inside a range, such as 0-30/10, is rejected. Lists are limited to 12 values in one field. The whole expression can be at most 200 characters.",
      },
    ],
    faqs: [
      {
        question: "Does 0 9 1 * 1 run only when the 1st is a Monday?",
        answer:
          "No. Cron matches either day, not both. 0 9 1 * 1 means 09:00 on the 1st of the month or on Monday. It does not mean only a Monday that falls on the 1st.",
      },
      {
        question: "What does Sunday as 7 do?",
        answer:
          "It is rejected. On this page Sunday is 0 and Saturday is 6. A day-of-week value of 7 is outside that range.",
      },
      {
        question: "Why was 0-30/10 rejected?",
        answer:
          "That is a step inside a range. This page accepts a star step such as */15. It does not accept a range with a step, such as 0-30/10.",
      },
      {
        question: "Does the page install the schedule?",
        answer:
          "No. It builds or explains the five fields in this browser tab. You copy the expression into the scheduler yourself.",
      },
    ],
    cta: {
      before: "To build or explain a five-field expression, use the",
      linkLabel: "Cron Expression Generator",
      href: "/tools/cron-expression-generator",
      after: ". It runs in the browser and does not require an account.",
    },
  },
  "how-to-rewrite-stock-phrasing": {
    intro:
      "Rewrite text swaps a fixed list of stock phrases for plainer wording in the browser. Humanize with AI sends the draft to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written. The tool does not try to bypass an AI detector, and it does not claim the result will look like a particular kind of author.",
    why:
      "A fixed list can remove a stock opener and leave the next word lowercase. A curly apostrophe will not match the straight apostrophe on the list, so that phrase stays. The local pass does not delete a repeated sentence. Humanize with AI is told to keep the same facts, names, and numbers, and not to shorten the draft into a summary. That is a request to the model, not a guarantee. Read either result before you rely on it.",
    stepsHeading: "How to rewrite stock phrasing",
    steps: [
      {
        title: "Paste a draft of at least 12 words",
        body: "Rewrite text rejects a shorter draft. Either button rejects more than 4,000 characters.",
      },
      {
        title: "Press Rewrite text for the phrase list",
        body: "The list runs once in this tab. It does not upload the draft. It does not recapitalize the next word after a deletion, and it does not drop a repeated sentence.",
      },
      {
        title: "Press Humanize with AI only when you want Gemini to rewrite the same draft",
        body: "That button sends the draft to Google's Gemini API through ToolStarHub. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products. The instruction says to keep the same facts, names, and numbers, and not to say the result will pass, fool, or evade an AI detector.",
      },
      {
        title: "Check the result, then copy it if it still says what you meant",
        body: "Clear empties the box and the local result. It does not call the API.",
      },
    ],
    examples: [
      {
        title: "Stock openers",
        body: "“In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.” becomes “here is the setup. you can use a short checklist.” The next word stays lowercase because the local pass does not recapitalize after a deletion.",
      },
      {
        title: "A repeated sentence",
        body: "“The form is short. The form is short. Please sign it before noon today and bring a pen.” stays as two copies. This pass does not drop a repeated sentence.",
      },
    ],
    notes: [
      {
        heading: "What the rewrite does not claim",
        body: "The tool does not try to bypass an AI detector, and it does not claim the result will look like a particular kind of author. Neither result is a way to hide how a draft was written.",
      },
      {
        heading: "Which button leaves the device",
        body: "Rewrite text stays in the browser. Humanize with AI sends the draft. The local pass only swaps phrases on the list. A curly apostrophe will not match.",
      },
    ],
    faqs: [
      {
        question: "Will either button make the draft pass an AI detector?",
        answer:
          "No. The tool does not try to do that, and it does not claim the result will look like a particular kind of author.",
      },
      {
        question: "Which button sends the draft to Gemini?",
        answer:
          "Humanize with AI. Rewrite text runs in this tab and does not upload the draft. ToolStarHub does not save the text sent for Humanize with AI. On the free tier, Google may use it to improve its products.",
      },
      {
        question: "Why is the next word lowercase?",
        answer:
          "Rewrite text deletes a listed phrase and leaves the following word as it was. It does not fix the capital letter.",
      },
      {
        question: "Does a repeated sentence stay?",
        answer:
          "Yes, on Rewrite text. That pass does not delete sentences. Humanize with AI is told not to shorten the draft into a summary. Check that result too.",
      },
    ],
    cta: {
      before: "To swap stock phrases in the browser, or send the draft to Gemini for a rewrite, use the",
      linkLabel: "AI Text Humanizer",
      href: "/tools/ai-text-humanizer",
      after: ". Rewrite text stays in the browser. Humanize with AI sends the draft.",
    },
  },
  "how-to-find-the-mean-median-and-mode": {
    intro:
      "To find the mean, median, and mode, paste the numbers separated by commas, spaces, or new lines, then press Calculate. The mean is the sum divided by how many numbers you entered. The median is the middle number after sorting, or the average of the two middle numbers when the count is even. The mode is the value that appears most often. If every distinct value appears once, there is no mode.",
    why:
      "A short list is easy to mis-sort. 1, 2, 3, 4 adds to 10, and 10 divided by 4 is 2.5, so the mean is 2.5. After sorting, the two middle numbers are 2 and 3, and their average is also 2.5, so the median is 2.5. Each number appears once, so there is no mode. The Average Calculator does that on a list of up to 1,000 numbers. The values are not weighted.",
    stepsHeading: "How to find the mean, median, and mode",
    steps: [
      {
        title: "Paste the numbers",
        body: "Commas, spaces, and new lines separate the values. A blank list is rejected. The list can hold up to 1,000 numbers. A token that is not a number rejects the whole list. Decimals and negative numbers are allowed. A comma is a separator, so type 1000 when you mean one thousand. 1,000 is the numbers 1 and 0.",
      },
      {
        title: "Press Calculate",
        body: "The page sorts a copy of the list for the median and counts how often each value appears for the mode. The list is calculated in this browser tab. Tools Star Hub does not send those numbers to a server or save them in local storage.",
      },
      {
        title: "Read the count, the mean, the median, and the mode",
        body: "The mean is rounded to at most 10 decimal places. An even count uses the average of the two middle numbers, also rounded to at most 10 decimal places. A single number is its own mode. When several values share the highest count, and that count is more than one, each of those values is a mode.",
      },
      {
        title: "Check the mean against the sum",
        body: "Add the numbers yourself and divide by the count. For 1, 2, 3, 4, that is 10 divided by 4, which is 2.5. If your sum does not match, look for a comma that split a thousands number into two values.",
      },
    ],
    examples: [
      {
        title: "Four numbers with no repeat",
        body: "1, 2, 3, 4 has a count of 4, a mean of 2.5, a median of 2.5, and no mode.",
      },
      {
        title: "A tie for the highest count",
        body: "1, 1, 2, 2, 3 adds to 9. The mean is 9 divided by 5, which is 1.8. The median is 2. The numbers 1 and 2 each appear twice, so both are modes.",
      },
    ],
    notes: [
      {
        heading: "This list is not weighted",
        body: "Each number counts once. The page does not take credits, weights, or letter grades. Use the GPA Calculator when the question is grade points and credits.",
      },
      {
        heading: "What gets rejected",
        body: "A blank list is rejected. More than 1,000 numbers is rejected. A word, a slash, or any other token that is not a number rejects the whole list. 1, 2, ok stops on ok.",
      },
    ],
    faqs: [
      {
        question: "How do I check the mean of 1, 2, 3, 4?",
        answer: "Add the numbers to get 10, then divide by 4. The mean is 2.5. The median is also 2.5, because the two middle numbers are 2 and 3.",
      },
      {
        question: "What if two numbers appear the same number of times?",
        answer:
          "If that shared count is the highest, and it is more than one, each of those numbers is a mode. 1, 1, 2, 2, 3 has modes 1 and 2. There is no mode only when every distinct value appears once.",
      },
      {
        question: "Does a list of one number have a mode?",
        answer: "Yes. A single number is its own mode. It is also the mean and the median.",
      },
      {
        question: "Why did 1,000 become two numbers?",
        answer:
          "A comma starts a new number. 1,000 is 1 and 0, not one thousand. Those two numbers have a mean of 0.5 and a median of 0.5, and there is no mode. Type 1000 when the value is one thousand.",
      },
    ],
    cta: {
      before: "To find the mean, median, and mode of a list, use the",
      linkLabel: "Average Calculator",
      href: "/tools/average-calculator",
      after: ". It runs in the browser and does not require an account.",
    },
  },
  "how-to-read-text-from-a-photo": {
    intro:
      "To read English text from one photo, choose a JPG, PNG, or WebP and press Read text. The photo stays in this browser tab. The first time, this browser downloads the recognition engine and the English language file from this site, about 6.6 MB. Later runs on this browser reuse that download. The result depends on the photo. A readable sign can still come back with wrong letters, and a busy background can add lines that are not text.",
    why:
      "A photo of a sign is not the same as selecting the letters. The page can return most of a line and still miss a word, or add a line that came from bark, leaves, or a shadow. Check the text against the photo before you copy it. Reading a photo is slower than resizing or compressing an image.",
    stepsHeading: "How to read text from a photo",
    steps: [
      {
        title: "Choose one JPG, PNG, or WebP",
        body: "One image at a time, up to 25 MB. Other file types are not the files this page reads. The image is not uploaded. Tools Star Hub does not send the image to a server or save it in local storage.",
      },
      {
        title: "Press Read text",
        body: "The first time, this browser downloads the recognition engine and the English language file from this site, about 6.6 MB. Those files are not loaded from another host. Later runs on this browser reuse that download.",
      },
      {
        title: "Wait while a large photo is reduced",
        body: "A long side over 1,600 pixels is reduced before reading. A smaller photo is read at its own size. English is the only language file included.",
      },
      {
        title: "Compare the text with the photo, then copy it if it looks right",
        body: "Do not treat a misread word as the original. Blur, glare, and small type make wrong letters more likely.",
      },
    ],
    examples: [
      {
        title: "A posted sign on a tree",
        body: "A real outdoor photo of a printed sign, with bark and leaves around it. The hunting and trespassing lines came back. PRIVATE PROPERTY came back missing letters, and VIOLATORS came back as VIOLKTORS. The largest word, POSTED, did not come back as a clean word, and the bark added extra lines.",
      },
    ],
    notes: [
      {
        heading: "What this page will and will not read",
        body: "English only. One image at a time. JPG, PNG, and WebP only, up to 25 MB. The first run downloads about 6.6 MB. Later runs on this browser reuse that download. Reading a photo is slower than the canvas image tools. The result depends on the photo. A readable sign can still come back with wrong letters, and a busy background can add lines that are not text. Blur, glare, and small type make that worse. A long side over 1,600 pixels is reduced before reading.",
      },
    ],
    faqs: [
      {
        question: "Which files can I choose?",
        answer: "One JPG, PNG, or WebP, up to 25 MB. English is the only language file included.",
      },
      {
        question: "Why was a large photo reduced?",
        answer:
          "A long side over 1,600 pixels is reduced before reading. A photo that is already smaller than that is read at its own size.",
      },
      {
        question: "What should I do when a word is wrong?",
        answer:
          "Compare the text with the photo and fix the word yourself. On a real outdoor photo of a printed sign, PRIVATE PROPERTY came back missing letters and VIOLATORS came back as VIOLKTORS. A busy background can add lines that are not text.",
      },
      {
        question: "Where do the recognition files come from?",
        answer:
          "From this site. The first run downloads the recognition engine and the English language file, about 6.6 MB. Later runs on this browser reuse that download. The photo itself is not uploaded.",
      },
    ],
    cta: {
      before: "To read English text from one photo in the browser, use",
      linkLabel: "Image to Text",
      href: "/tools/image-to-text",
      after: ". The photo stays in this tab. The recognition files are loaded from this site.",
    },
  },
  "how-to-turn-a-word-document-into-a-pdf": {
    intro:
      "Word to PDF reads the words from a .docx file and places them in a plain PDF. Images, tables as grids, headers, footers, and text styling are left out. It is not a copy of the Word layout. The file stays in this browser tab.",
    why:
      "A Word file stores pictures, table grids, and font choices separately from the words. This page keeps the words and drops that layout. Use it when you need the paragraph text in a simple PDF. Use it only after you accept that the PDF will not look like the Word document.",
    stepsHeading: "How to turn a Word document into a PDF",
    steps: [
      {
        title: "Choose a .docx file",
        body: "A .doc file is rejected. A .doc file renamed to .docx cannot be read as a Word document. The file can be up to 20 MB. An empty file is rejected. Tools Star Hub does not send that file to a server or save it in local storage.",
      },
      {
        title: "Set the page, then press Create PDF",
        body: "A title is optional. Choose A4 or Letter. Choose a margin of none, small, or medium. Font size must be from 8 to 24. Line spacing is 1, 1.15, 1.5, or 2. Page numbers can be on or off. The words are wrapped onto pages with Helvetica.",
      },
      {
        title: "Read the note, then download word.pdf",
        body: "The note says how many pages were created. If Helvetica cannot draw a character, that character becomes a question mark and the note says how many were replaced. A Word page break does not start a new PDF page.",
      },
      {
        title: "Check the PDF against the document",
        body: "Heading words, list item words, and table cell words can be there. The picture, the table grid, and Word’s automatic list numbers are not.",
      },
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
    notes: [
      {
        heading: "What is left out",
        body: "Images, drawings, charts, and shapes are dropped. Bold, italic, colors, fonts, and heading sizes are dropped. A table becomes the cell text in reading order, not a grid. A list keeps the item text and does not keep Word’s automatic numbers. Headers, footers, footnotes, comments, and text boxes are not included. A .doc file is rejected. A character Helvetica cannot draw becomes “?”. More than 100,000 characters of extracted text is refused.",
      },
    ],
    faqs: [
      {
        question: "What happens to a table?",
        answer:
          "The cell text is kept in reading order. The table is not drawn as a grid. Bold, italic, colors, fonts, and heading sizes are dropped.",
      },
      {
        question: "What happens to a picture in the document?",
        answer: "Images, drawings, charts, and shapes are dropped. If the document is only a picture, there is no text to convert.",
      },
      {
        question: "Why did a character become a question mark?",
        answer:
          "The PDF uses Helvetica. A character that font cannot draw becomes “?”. The note after Create PDF says how many characters were replaced.",
      },
      {
        question: "Does a Word page break start a new PDF page?",
        answer:
          "No. The words are read as text and then wrapped onto A4 or Letter pages. A Word page break does not start a new PDF page.",
      },
    ],
    cta: {
      before: "To place the words from a .docx file into a plain PDF, use",
      linkLabel: "Word to PDF",
      href: "/tools/word-to-pdf",
      after: ". The file stays in this tab. The PDF is not a copy of the Word layout.",
    },
  },
  "how-to-make-a-simple-favicon": {
    intro:
      "To make a simple favicon, enter a 6-digit background color, a 6-digit letter color, and up to two letters. The page draws PNG icons at 16, 32, and 180 pixels in this browser tab. The ICO file holds the 16 and 32 pixel images only. The 180 pixel PNG is the apple-touch icon and is not placed inside the ICO.",
    why:
      "A browser tab icon and a phone home-screen icon are different sizes. Putting only the 180 pixel image in the ICO would skip the sizes a tab icon usually uses. This page draws the three PNGs and packs the two smaller ones into the ICO. It draws letters on a flat color. It does not trace a logo.",
    stepsHeading: "How to make a simple favicon",
    steps: [
      {
        title: "Enter two 6-digit hex colors",
        body: "Use a background such as #2563eb and a letter color such as #ffffff. The # and six hex digits are required. A 3-digit color such as #fff is rejected. The colors are not sent to a server.",
      },
      {
        title: "Enter one or two letters, or leave the box blank",
        body: "One or two letters are centered on the square. A blank box draws a solid color. More than two letters is rejected. A line break in the letter box is rejected.",
      },
      {
        title: "Press Generate",
        body: "Each size is a square filled with the background color. The files are drawn in this browser tab. Tools Star Hub does not send the colors or letters to a server or save them in local storage.",
      },
      {
        title: "Download the PNG sizes or the ICO file",
        body: "Use the ICO, or the 16 and 32 pixel PNGs, for the browser tab icon. Use the 180 pixel PNG for the apple-touch icon. Generating the files does not add them to a website. You put the files where the site expects them.",
      },
    ],
    examples: [
      {
        title: "A blue icon with T",
        body: "#2563eb background, #ffffff letters, and the letter T draws a blue square with a white T at 16, 32, and 180 pixels. The ICO contains the 16 and 32 pixel images only.",
      },
      {
        title: "A solid color",
        body: "The same colors with the letters left blank draw a solid blue square at each size. The 180 pixel image is still only the apple-touch PNG.",
      },
    ],
    notes: [
      {
        heading: "What the ICO does not contain",
        body: "The ICO holds 16 and 32 pixel images only. The 180 pixel PNG is a separate download. Colors must be 6-digit hex. The letters are plain text on a flat color, not a logo trace.",
      },
      {
        heading: "When you already have a picture",
        body: "This page does not resize a photo. Use the Image Resizer when you already have a picture and only need a new pixel size.",
      },
    ],
    faqs: [
      {
        question: "Why is the 180 pixel PNG missing from the ICO?",
        answer:
          "The ICO is built from the 16 and 32 pixel images only. The 180 pixel PNG is the apple-touch icon, and it is a separate file.",
      },
      {
        question: "Why was #fff rejected?",
        answer: "The page accepts a 6-digit hex color, such as #ffffff. A 3-digit hex color is rejected.",
      },
      {
        question: "Can the page trace a logo?",
        answer:
          "No. It draws one or two letters, or a solid color, on a flat square. It does not open a logo file.",
      },
      {
        question: "Does Generate add the icon to my site?",
        answer:
          "No. It draws the files in this tab so you can download them. You add the ICO or the PNGs to the site yourself.",
      },
    ],
    cta: {
      before: "To draw a letter or a solid color as PNG icons and a small ICO, use the",
      linkLabel: "Favicon Generator",
      href: "/tools/favicon-generator",
      after: ". It runs in the browser and does not require an account.",
    },
  },
  "how-to-repeat-a-word-or-line": {
    intro:
      "To repeat a word, phrase, or line, enter the text, a whole-number count from 1 to 200, and a separator of nothing, a space, or a new line. The separator goes between the copies, not after the last one. A count of 1 is the text you typed, with nothing added.",
    why:
      "Typing the same line many times is where an extra space or a missing line shows up. The page copies the text the number of times you ask and joins those copies with the separator you chose. It does not generate placeholder Latin, and it does not remove duplicates.",
    stepsHeading: "How to repeat a word or line",
    steps: [
      {
        title: "Enter the text to repeat",
        body: "An empty box is rejected. A line that contains only spaces is allowed, because those spaces are text. The source can be up to 5,000 characters. The copies are built in this browser tab. Tools Star Hub does not send that text to a server or save it in local storage.",
      },
      {
        title: "Enter a whole-number count from 1 to 200",
        body: "Zero, a decimal, and a negative number are rejected. A count of 1 returns one copy and does not add a separator.",
      },
      {
        title: "Choose nothing, a space, or a new line",
        body: "Nothing joins the copies directly. A space puts one space between copies. A new line puts each copy on its own line. The separator is not added after the last copy.",
      },
      {
        title: "Press Repeat and check the length",
        body: "The joined result can be up to 100,000 characters. A longer result is rejected. Shorten the text or lower the count, then press Repeat again.",
      },
    ],
    examples: [
      {
        title: "A word three times",
        body: "ha, count 3, with a space between copies, becomes ha ha ha. There is no space after the last ha.",
      },
      {
        title: "A line twice",
        body: "Ready, count 2, with a new line between copies, becomes Ready on one line and Ready on the next. The second line is not followed by an extra blank line from the separator.",
      },
    ],
    notes: [
      {
        heading: "What this page does not do",
        body: "It does not generate placeholder Latin. It does not remove duplicate lines. A repeated sentence stays, because that is what Repeat is for. Use the Lorem Ipsum Generator when you want placeholder text, and the Duplicate Line Remover when you want repeated lines taken out.",
      },
      {
        heading: "The length limits",
        body: "The source can be up to 5,000 characters, the count can be up to 200, and the joined result can be up to 100,000 characters. A longer result is rejected.",
      },
    ],
    faqs: [
      {
        question: "Where does the separator go?",
        answer:
          "Between the copies, not after the last one. ha repeated 3 times with a space is ha ha ha. A count of 1 does not add a separator.",
      },
      {
        question: "What happens when the joined result is too long?",
        answer:
          "The page rejects it. The source can be up to 5,000 characters, the count can be up to 200, and the joined result can be up to 100,000 characters.",
      },
      {
        question: "Does Repeat remove duplicate lines?",
        answer:
          "No. It adds copies. It does not generate placeholder Latin, and it does not remove duplicates.",
      },
      {
        question: "Why was 2.5 rejected?",
        answer: "The count has to be a whole number from 1 to 200. A decimal, zero, and a negative number are rejected.",
      },
    ],
    cta: {
      before: "To repeat a word, phrase, or line, use the",
      linkLabel: "Text Repeater",
      href: "/tools/text-repeater",
      after: ". It runs in the browser and does not require an account.",
    },
  },
  "how-to-write-meta-tags": {
    intro:
      "The Meta Tag Generator writes HTML from the fields you type. Paste that HTML into the head of a page. A blank title is rejected. Every result includes a charset tag, a title, and a robots tag. The page does not fetch a live URL, and it does not check how a site will share the link.",
    why:
      "A title with an ampersand has to be escaped or the tag breaks. A & B is written as A &amp; B inside the title tag. Empty optional fields are left out, so a description you did not fill does not become an empty description tag. The robots tag is still written from the index and follow choices.",
    stepsHeading: "How to write meta tags",
    steps: [
      {
        title: "Enter a title",
        body: "The title can be up to 200 characters. A blank title is rejected. Quotes and ampersands in the text are escaped.",
      },
      {
        title: "Add the optional fields you want",
        body: "A description can be up to 500 characters. A canonical URL, an Open Graph image, an Open Graph URL, and a Twitter image must be absolute http or https URLs, up to 2,000 characters. Open Graph type is website, article, or none. Twitter card is summary, summary_large_image, or none.",
      },
      {
        title: "Press Generate",
        body: "The HTML is built in this browser tab. Tools Star Hub does not send those fields to a server or save them in local storage. Generate does not request the canonical URL or any image URL you typed.",
      },
      {
        title: "Copy the HTML into the page head",
        body: "A charset tag, the title, and a robots tag are always there. A robots value looks like index, follow or noindex, nofollow. Optional tags appear only when you filled them.",
      },
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
    notes: [
      {
        heading: "A Twitter title needs a card",
        body: "A Twitter title, description, or image without a card is rejected. Choose summary or summary_large_image first. None leaves those Twitter tags out.",
      },
      {
        heading: "This page does not preview a live link",
        body: "Generate writes the tags. It does not open the URL, and it does not show how a social site will display the link. A live share check is a different page.",
      },
    ],
    faqs: [
      {
        question: "How is A & B written in the title?",
        answer: "As A &amp; B inside the title tag. Quotes and ampersands in the text are escaped.",
      },
      {
        question: "What is written when the optional fields are empty?",
        answer:
          "A charset tag, the title, and a robots tag. Empty optional fields are left out. The robots tag still uses the index and follow choices, such as index, follow.",
      },
      {
        question: "Why was a Twitter title rejected?",
        answer:
          "A Twitter title, description, or image needs a card of summary or summary_large_image. Choosing none, then filling a Twitter title, is rejected.",
      },
      {
        question: "Does Generate open the canonical URL?",
        answer:
          "No. It writes the HTML in this browser tab. It does not request the canonical URL, the Open Graph image, the Open Graph URL, or the Twitter image.",
      },
    ],
    cta: {
      before: "To write title, description, robots, and social tags as HTML, use the",
      linkLabel: "Meta Tag Generator",
      href: "/tools/meta-tag-generator",
      after: ". It runs in the browser and does not fetch a live URL.",
    },
  },
  "how-to-check-an-open-graph-preview": {
    intro:
      "To check a public page’s share tags, enter an absolute http or https URL and press Check preview. Check preview sends the URL off this device to fetch the page. This site requests that page and shows the title, description, image, and Twitter card it finds. The page is not saved here. A private or local address is rejected before the page is read.",
    why:
      "The tags live on the public page, so the check has to fetch that page. The browser sends only the URL to this site. The site resolves the host, rejects a private, loopback, link-local, or reserved address, and checks again after each redirect. It reads at most 512 KiB of the decompressed page, then returns the tags. The raw page is not returned and is not saved.",
    stepsHeading: "How to check an Open Graph preview",
    steps: [
      {
        title: "Enter an absolute http or https URL",
        body: "A file URL, a URL with a username, and a private address are rejected. http://127.0.0.1/ and the decimal form http://2130706433/ are both rejected before the page is read.",
      },
      {
        title: "Press Check preview",
        body: "Check preview sends the URL off this device to fetch the page. The site requests that public page. The request stops after 8 seconds. A private or non-http address is rejected.",
      },
      {
        title: "Read the card",
        body: "The card shows the title, description, image address, and Twitter card from the fetched page. An empty field reads Not found. The address after redirects is kept when the redirect stays on a public http or https URL.",
      },
      {
        title: "Treat a missing picture as a separate problem",
        body: "A share image may be listed even when the image host blocks the preview picture. The page itself is not saved here.",
      },
    ],
    examples: [
      {
        title: "A public page",
        body: "https://example.com/ returns the title Example Domain. That page has no description, image, or Twitter card, so those fields read Not found. The URL was sent off this device so the site could fetch the page.",
      },
      {
        title: "A local address",
        body: "http://127.0.0.1/ and the decimal form http://2130706433/ both show That address cannot be fetched. Those addresses are rejected before the page is read.",
      },
    ],
    notes: [
      {
        heading: "What leaves this device",
        body: "Check preview sends the URL off this device to fetch the page. This site requests that public page and reads its tags. The raw page is not returned and is not saved. A timeout shows no card, and the page says the preview request timed out.",
      },
      {
        heading: "Writing tags is a different page",
        body: "Use the Meta Tag Generator when you want to write the tags yourself. This page reads tags that are already on a public URL, and that read happens after the URL is sent off this device.",
      },
    ],
    faqs: [
      {
        question: "What does Check preview send off this device?",
        answer:
          "The URL. Check preview sends the URL off this device to fetch the page. This site requests that public page and reads its tags. The page is not saved here. A private or non-http address is rejected.",
      },
      {
        question: "What does https://example.com/ show?",
        answer:
          "The title Example Domain. That page has no description, image, or Twitter card, so those fields read Not found.",
      },
      {
        question: "Why do 127.0.0.1 and 2130706433 both fail?",
        answer:
          "Both are loopback addresses. A private, loopback, link-local, or reserved address is rejected before the page is read. The message is That address cannot be fetched.",
      },
      {
        question: "What comes back after the page is fetched?",
        answer:
          "The tags, not the raw page. The site reads at most 512 KiB of the decompressed page and returns the title, description, image, and Twitter card. The page is not saved here.",
      },
    ],
    cta: {
      before: "To fetch a public page’s share tags, use",
      linkLabel: "Open Graph Preview",
      href: "/tools/open-graph-preview",
      after: ". Check preview sends the URL off this device to fetch the page. The page is not saved here.",
    },
  },
  "how-to-write-a-gitignore-file": {
    intro:
      "The .gitignore Generator writes file text from a short set of templates and optional custom patterns. Node is checked when the page opens. Each selected template becomes a comment heading and its patterns. Generating that text does not update a Git repository. You copy the result into a file named .gitignore.",
    why:
      "Template order is fixed, so the box you check second can still appear first. Node, Next.js, Environment files, Operating system, Logs, and Build output stay in that order. A custom line that repeats a selected template line is written once, under the template, and skipped in the Custom section.",
    stepsHeading: "How to write a .gitignore file",
    steps: [
      {
        title: "Check the templates you want",
        body: "Node is checked when the page opens. The other templates are Next.js, Environment files, Operating system, Logs, and Build output. The text is built in this browser tab. Tools Star Hub does not send those patterns to a server or save them in local storage.",
      },
      {
        title: "Add custom patterns, one per line",
        body: "Blank lines are skipped. Each pattern can be up to 200 characters, and you can add up to 50. A line that matches a selected template line is not written again.",
      },
      {
        title: "Press Generate",
        body: "Choosing no template and adding no custom pattern is rejected. The result ends with a blank line after the last block.",
      },
      {
        title: "Copy the text into .gitignore yourself",
        body: "The page writes the text. It does not create the file in a repository. Robots.txt is a different file. Use the Robots.txt Generator for crawler rules.",
      },
    ],
    examples: [
      {
        title: "Node and environment files",
        body: "Node plus Environment files, with no custom patterns, starts with a Node heading and node_modules/, then npm-debug.log*. An Environment files heading follows, with .env and .env.*. Environment files stay after Node even if you check that box first.",
      },
      {
        title: "A custom pattern",
        body: "Node plus a custom line secrets/ writes the Node block, then a Custom heading and secrets/. A custom node_modules/ line is not repeated.",
      },
    ],
    notes: [
      {
        heading: "The starter lines",
        body: "Node writes node_modules/ and npm-debug.log*. Next.js writes .next/ and out/. Environment files writes .env and .env.*. Operating system writes .DS_Store and Thumbs.db. Logs writes *.log. Build output writes dist/ and build/. This is a short starter set, not every language or editor.",
      },
      {
        heading: "The file is not created for you",
        body: "Copy the text into a file named .gitignore. Generating it does not update a Git repository.",
      },
    ],
    faqs: [
      {
        question: "What text does Node plus Environment files produce?",
        answer:
          "A Node heading, node_modules/, and npm-debug.log*, then an Environment files heading, .env, and .env.*. The templates stay in that order.",
      },
      {
        question: "Why did Environment files come after Node?",
        answer:
          "Templates stay in a fixed order: Node, Next.js, Environment files, Operating system, Logs, then Build output. The order you check the boxes does not change that.",
      },
      {
        question: "Why was a custom node_modules/ line left out?",
        answer:
          "That line is already in the Node template, so it is kept there and skipped in the Custom section. A new line such as secrets/ is written under Custom.",
      },
      {
        question: "What is the custom pattern limit?",
        answer: "Up to 50 custom patterns, each up to 200 characters. Blank lines are skipped.",
      },
    ],
    cta: {
      before: "To build .gitignore text from the starter templates, use the",
      linkLabel: ".gitignore Generator",
      href: "/tools/gitignore-generator",
      after: ". It runs in the browser and does not update a repository.",
    },
  },
  "how-to-rate-a-password": {
    intro:
      "To rate a password, multiply its length by the base-2 log of the character pool, then read the label. Under 50 bits is Short, under 80 is Moderate, and 80 or more is Strong. The pool grows only for character types that actually appear. The password stays in this browser tab. The page does not look up breaches, and it does not know whether a site will accept the password.",
    why:
      "A short word can look familiar and still rate Short. password is 8 characters of lowercase letters. The pool is 26. The estimate is about 37.6 bits, the page rounds that to 38, and the rating is Short because 37.6 is under 50. Eight digits use a pool of 10, which is about 27 bits, also Short.",
    stepsHeading: "How to rate a password",
    steps: [
      {
        title: "Type the password",
        body: "An empty box is rejected. The password can be up to 256 characters. The check runs in this browser tab. Tools Star Hub does not send the password to a server or save it in local storage.",
      },
      {
        title: "Press Check",
        body: "Uppercase adds 26 if an A through Z appears. Lowercase adds 26 if an a through z appears. A digit adds 10. A symbol in !@#$%^&*()-_=+[]{};:,.? adds 23. A character outside those sets, including a space or a backtick, adds one for each distinct character. Accented letters count as other characters, not as A through Z.",
      },
      {
        title: "Read the length, the bits, the pool, and the label",
        body: "Bits are the length times the base-2 log of the pool. The page shows that estimate rounded to a whole number. The label uses the estimate before rounding: under 50 is Short, under 80 is Moderate, and 80 or more is Strong.",
      },
      {
        title: "Use a generator when you want a new password",
        body: "This page rates what you typed. The Password Generator rates a password from the types you selected before it was created. Neither page compares the password with a breach list.",
      },
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
    notes: [
      {
        heading: "A space is not the symbol set",
        body: "abc def is lowercase plus one other character, so the pool is 27. A backtick is also one other character, not the 23-symbol set.",
      },
      {
        heading: "What the rating leaves out",
        body: "Up to 256 characters. The page does not look up breaches, and it does not know whether a site will accept the password. Accented letters count as other characters, not as A through Z.",
      },
    ],
    faqs: [
      {
        question: "How does password come out to 38 bits?",
        answer:
          "It is 8 lowercase letters, so the pool is 26. Length times the base-2 log of 26 is about 37.6. The page rounds that to 38. The rating stays Short because 37.6 is under 50.",
      },
      {
        question: "What does a space add to the pool?",
        answer:
          "One, for that distinct character. abc def uses lowercase and one other character, so the pool is 27. A space is not treated as the 23-symbol set.",
      },
      {
        question: "When is the rating Strong?",
        answer:
          "When the estimate is 80 bits or more. Abcdefghijklm12! is 16 characters and a pool of 85, which rounds to 103 bits, so the rating is Strong. Under 50 is Short, and under 80 is Moderate.",
      },
      {
        question: "How is this different from generating a password?",
        answer:
          "This page rates the characters you typed. The Password Generator rates a new password from the types selected before it is created. This check does not look up breaches.",
      },
    ],
    cta: {
      before: "To rate a typed password from its length and character types, use the",
      linkLabel: "Password Strength Checker",
      href: "/tools/password-strength-checker",
      after: ". It runs in the browser and does not check a breach list.",
    },
  },
};

export function getGuideContent(slug: string): GuideContent | undefined {
  return guideContent[slug] ?? financeGuideContent[slug];
}
