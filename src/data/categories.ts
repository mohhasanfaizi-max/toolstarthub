import type { Category } from "./types.ts";

export const categories: Category[] = [
  {
    slug: "calculators",
    name: "Calculators",
    description: "Everyday calculation tools",
    shortDescription:
      "Percentages, age, units and other everyday calculations.",
    icon: "calculator",
    route: "/categories/calculators",
    intro:
      "Each calculator answers one number question and shows the arithmetic on the page. The Percentage Calculator does three jobs: 15% of 80 is 12, 12 is 30% of 40, and increasing 200 by 10% is 220. Percentage Change compares two finished values, so 80 to 100 is a 25% rise and 100 back to 80 is a 20% drop. Discount, sales tax, and tip start from a price. Age counts calendar years, months, and days, including leap days, and it does not divide the span by 365.",
    audience:
      "Use these when a spreadsheet is more than the job needs. The numbers stay in the browser tab. Loan, mortgage, wage, and tax results are estimates from the figures you type. They are not financial, tax, medical, or legal advice. A “what percent” question with a whole of 0 is rejected, because that divides by zero. Date tools count calendar days or business days between two dates. The unit converter covers length, weight, and temperature, not currency, area, or volume.",
    startingSlugs: [
      "percentage-calculator",
      "loan-calculator",
      "age-calculator",
      "unit-converter",
    ],
  },
  {
    slug: "text-tools",
    name: "Text Tools",
    description: "Tools for writing and text processing",
    shortDescription: "Count, clean, convert and format text in the browser.",
    icon: "text",
    route: "/categories/text-tools",
    intro:
      "Text tools count, clean, and reshape writing you paste. The Word Counter treats a word as a run of non-space characters and a character as a Unicode code point. “Hello world.” is 2 words and 12 characters. Reading time divides the word count by 225 and rounds up to a whole minute, with a minimum of 1 minute when there is at least one word. Case, find-and-replace, line breaks, duplicate lines, extra spaces, sorting, and a side-by-side diff are separate tools. Lorem ipsum comes from a word list stored on the page.",
    audience:
      "They are for writers, editors, and anyone cleaning text from a document or a spreadsheet. The text stays in the browser and is not uploaded. These tools do not check grammar, and they do not decide who wrote a draft. Writing that does not put spaces between words will not be split into dictionary words. The character count is the better figure for that text.",
    startingSlugs: [
      "word-counter",
      "text-diff",
      "case-converter",
      "duplicate-line-remover",
    ],
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description:
      "Format, encode, minify, and convert data in the browser",
    shortDescription:
      "Format JSON, encode data, minify code, and convert Markdown or HTML locally.",
    icon: "code",
    route: "/categories/developer-tools",
    intro:
      "Developer tools format and convert data in the browser. The JSON Formatter pretty-prints with two-space indentation, minifies, or validates. It uses the browser’s JSON parser, so comments, trailing commas, and single quotes fail. {\"a\":1,} is reported as invalid JSON at position 7. JSON and CSV converters run only after the input parses. Base64 encodes text as UTF-8 and is not encryption. Hash tools compute SHA-256, SHA-384, or SHA-512 and cannot reverse a hash. A regular expression is tested against the sample you type.",
    audience:
      "Use them when you want a result on the page without installing a package. Minifiers and converters follow the rules of each format, so invalid HTML, CSS, JavaScript, or Markdown is rejected instead of silently rewritten. Color tools turn a 3-digit, 6-digit, or 8-digit hex value into RGB and HSL, check contrast, and build a CSS gradient or box shadow. Pasted text stays in the tab. A document over the tool’s size cap is rejected so the page stays usable.",
    startingSlugs: [
      "json-formatter",
      "base64-encoder",
      "javascript-minifier",
      "markdown-to-html",
    ],
  },
  {
    slug: "image-tools",
    name: "Image Tools",
    description: "Browser-based image and PDF tools",
    shortDescription:
      "Compress, convert, and inspect images and PDFs without uploading.",
    icon: "image",
    route: "/categories/image-tools",
    intro:
      "This is the page for the image and PDF tools. Image tools compress, resize, crop, convert, and sample colors from a picture. PDF tools merge, split, compress, count pages, read or remove metadata, extract text, turn pages into JPG images, and make a PDF from images, text, or a Word file’s words. Every one of those jobs runs in the browser. The file is not uploaded to Tools Star Hub.",
    audience:
      "Open the tool that matches the job, then read the limit on that page before you rely on the download. A JPEG is a picture of the page, not a text layer. A scan may not yield words. Strong PDF compression replaces selectable text with images. Check the file before you delete the original.",
    sections: [
      {
        heading: "How the PDF tools run",
        paragraphs: [
          "A PDF you choose is read in this browser tab. Page rendering uses PDF.js. Merging, splitting, and rewriting use pdf-lib. Neither step posts the file to a conversion service. When the tool finishes, the download stays on your device.",
          "Password-protected PDFs are not opened. PDF to JPG says: This PDF is password-protected. This tool cannot open locked files. The merger says the same limitation in its file hint. Unlock the file in a PDF reader, then use the unlocked copy here.",
          "Most PDF tools also refuse an empty file, a file that is not a PDF, and a file over 20 MB. The exact page cap depends on the tool. Those caps exist so a large render does not freeze the tab.",
        ],
      },
      {
        heading: "Turn pages into pictures or into text",
        paragraphs: [
          "PDF to JPG exports the first page, the pages you tick, or every page, up to 40 pages. The requested render scale is 1.5, and the longest edge is capped at 4,096 pixels. A US Letter page is 612 by 792 points, so at 1.5× it becomes 918 by 1,188 pixels. Quality starts at 80, which is JPEG quality 0.80. A 3-page file converted with all pages produces three JPEGs, named from the PDF plus the page number.",
          "That JPEG is a picture of the painted page. You cannot select a sentence in it. Thumbnails show the first 12 pages. Later pages can still be converted. A scanned page stays a picture. This conversion does not run optical character recognition.",
          "PDF to Text reads the text layer. It can take all pages, one page, or a range, up to 80 pages and 20 MB. The range box uses the same syntax as the splitter: 1-3,5 means pages 1, 2, 3, and 5. If the page was scanned and has no text layer, the extract can be empty. The tool does not invent words that are not in the file.",
        ],
      },
      {
        heading: "Merge, split, and page order",
        paragraphs: [
          "PDF Merger joins up to 10 PDFs, with at most 80 pages combined. The files are joined in the order you set on the page. Put the cover first if the cover should be page 1 of the result. The merger does not resize mixed page sizes into one paper size.",
          "PDF Splitter copies the pages you name, up to 80 pages. The range 1-3,5 keeps pages 1, 2, 3, and 5, and it drops page 4. A reversed range such as 5-1 is rejected. The prompt for an empty box is: Enter pages such as 1-3,5,8-10. Duplicate numbers are kept once.",
          "PDF Page Counter only reports how many pages the file has. It does not merge, split, or export. Use it when you need the count before you decide which range to type.",
        ],
      },
      {
        heading: "Compress, metadata, and making a new PDF",
        paragraphs: [
          "PDF Compressor has three presets. Low compression and Balanced rewrite the file and keep text and vectors. They often shrink the file only a little, and a smaller size is not guaranteed. Strong compression renders each page to a JPEG and rebuilds the PDF, so selectable text and vector drawings become pictures. Strong compression handles up to 40 pages. The rewrite presets handle up to 80.",
          "PDF Metadata Viewer / Remover reads document fields such as title and author, and it can save a copy with those fields cleared. It opens PDFs of up to 80 pages. Removing a field from the copy does not edit the original file on disk until you replace it yourself.",
          "Image to PDF places JPG or PNG files onto pages, up to 20 images. Text to PDF and Word to PDF build a PDF from text. Word to PDF reads the words from a .docx file. It does not keep the Word layout, images, or tables as grids. The result is a plain PDF of that text.",
        ],
      },
      {
        heading: "Image tools on this same page",
        paragraphs: [
          "Image Compressor re-encodes JPG, PNG, and WebP. Quality runs from 10 to 100 and starts at 80. The slider affects JPEG and WebP. PNG output on that tool is lossless, so a screenshot may barely shrink. GIF, HEIC, and SVG are rejected. The file must be 25 MB or smaller, and neither side can exceed 8,192 pixels.",
          "Image Resizer changes width and height, with the aspect ratio locked unless you turn the lock off. Image Cropper cuts a region. Image Converter changes format. Image Color Analyzer samples pixels from a picture. Those tools also stay in the browser. Compress or convert only after you have the pixel size you actually need. A smaller JPEG of a huge photo is still a huge photo.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Files are processed in this tab. They are not uploaded to Tools Star Hub, and they are not written into the favorites list. Favorites store tool names only. If you accept analytics cookies, the visit can be counted. The file contents are not part of that measurement.",
          "A download is a new file. The original stays where you picked it until you delete or replace it. Check page order, text, and image quality on the download before you do that.",
        ],
      },
    ],
    startingSlugs: [
      "image-compressor",
      "pdf-to-text",
      "pdf-merger",
      "image-converter",
    ],
  },
  {
    slug: "seo-utilities",
    name: "SEO & Utilities",
    description: "Links, slugs, QR codes, and passwords",
    shortDescription:
      "Build UTM links and slugs, create or scan QR codes, and generate passwords.",
    icon: "search",
    route: "/categories/seo-utilities",
    intro:
      "These utilities build a link, a slug, a QR code, or a password on the page. The UTM builder adds utm_source, utm_medium, and utm_campaign, plus optional term and content. A blank field is left off the link. Existing query parameters stay. The page does not record a visit and does not shorten the address. The slug tool turns a title into a URL piece. The QR Code Generator encodes text or a URL of up to 1,200 characters as a 320 pixel PNG.",
    audience:
      "QR Code Generator Pro adds Wi-Fi, email, phone, SMS, and contact layouts, and it can change colors. The basic generator does not. The scanner reads the first QR code from the camera or from a PNG or JPG, and it does not open a link until you press Open link. The password generator uses the browser’s cryptographic random values and shows the string on the page. It is not a password manager, and it does not store the password.",
    startingSlugs: [
      "utm-builder",
      "slug-generator",
      "qr-code-generator",
      "password-generator",
    ],
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Prompt builders and writing tools, with optional Gemini AI",
    shortDescription:
      "Build prompts, study writing patterns, and shorten a draft, in the browser or with Gemini AI.",
    icon: "bolt",
    route: "/categories/ai-tools",
    intro:
      "These tools help you draft a prompt, describe an image or video scene in words, look at writing patterns, or shorten a long draft. The main button on each tool runs in your browser and does not send the text away. The AI buttons, labeled Generate, Analyze, Compress, or Humanize with AI, send the text you submit to Google’s Gemini model and show the text that comes back.",
    audience:
      "Use the browser button when the draft should stay on this device. Use an AI button only when you want Gemini to rewrite or expand it. Text sent to Gemini is not saved on this site. Prompt tools return text. They do not return an image file or a video file. The writing tools do not decide who wrote a draft, and they do not promise that a shorter or rewritten draft will pass a detector. If you need a word count after a rewrite, paste the result into the Word Counter.",
    startingSlugs: [
      "ai-prompt-generator",
      "prompt-to-image",
      "ai-article-compressor",
      "ai-article-detector",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
