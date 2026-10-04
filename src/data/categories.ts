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
      "These calculators answer a specific number question: a percent, a percent change, a sale price, a tip, sales tax, age, days or business days between dates, a unit conversion, a loan or mortgage estimate, wages, room area, GPA, or a random number in a range.",
    audience:
      "Use them when a spreadsheet is more than the job needs. They are arithmetic helpers. Loan, tax, and wage results are estimates. They are not financial, tax, medical, or engineering advice.",
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
      "Text tools count words and characters, change case, find and replace, remove line breaks, number lines, remove duplicate lines or extra spaces, sort lines, compare two drafts, and generate placeholder copy for a layout.",
    audience:
      "They are for writers, editors, and anyone cleaning text pasted from a document or a spreadsheet. The text you paste stays in the browser.",
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
      "Developer tools format JSON, convert JSON and CSV, test a regular expression, hash text with SHA-256 or SHA-512, encode and decode Base64, URLs, and HTML, minify HTML, CSS, or JavaScript, convert Markdown, and generate UUIDs or Unix timestamps. Color tools here turn hex values into RGB, check contrast, and build CSS gradients and box shadows.",
    audience:
      "They are for people editing code or data who want a result on the page without installing a package. Minifiers and converters follow the rules of each format, so invalid input is rejected instead of silently rewritten.",
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
      "Image tools compress, resize, crop, convert, and sample colors from a picture. PDF tools in this category merge, split, compress, count pages, read or remove metadata, extract text, turn pages into JPG images, and make a PDF from images or text.",
    audience:
      "Files are processed in the browser. A scanned PDF may not yield selectable text. Compression and conversion can reduce quality, so check the download before you replace the original.",
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
      "These utilities build a campaign URL, turn a title into a URL slug, create a QR code from text or a structured payload, scan a QR code from the camera or an image, and generate a password locally.",
    audience:
      "The basic QR tool encodes plain text or a URL. QR Code Generator Pro adds Wi-Fi, contact, and color controls. The password generator creates a string on this device. It is not a password manager.",
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
      "These tools help you write a prompt, describe an image or video scene, look at writing patterns, or shorten a long draft. The main button on each tool runs in your browser. The AI buttons (Generate, Analyze, Compress, or Humanize with AI) send the text you enter to Google's Gemini model to generate the result.",
    audience:
      "Use the browser button when you do not want your text to leave this device. Use an AI button when you want Gemini to rewrite or expand it. Text sent to Gemini is not saved on this site. The prompt tools return text, not images or videos. The writing tools do not decide authorship, and they do not promise that a shorter draft will pass a detector.",
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
