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
          "The image tools on ToolsTartHub decode and encode in your browser. The file stays on your device unless you download the result.",
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
          "Paste the text into a formatter, run format or validate, then copy the result. On ToolsTartHub this happens in the browser, so the payload is not uploaded.",
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
      "You can compress a PDF, extract its text, inspect metadata, merge or split pages, and turn text into a PDF in the browser. The file is read in your tab. It is not uploaded to ToolsTartHub. Pick the tool that matches the job, and expect large files to be slower on a phone.",
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
          "No. These ToolsTartHub tools process the file in your browser. The site does not receive the document.",
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
      "To clean a list, remove duplicate lines, tidy whitespace, then sort. To compare two drafts, paste both sides into a diff tool and read added, removed, and unchanged blocks. On ToolsTartHub this stays in the browser. Pasted text is not saved to an account.",
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
};

export function getGuideContent(slug: string): GuideContent | undefined {
  return guideContent[slug];
}
