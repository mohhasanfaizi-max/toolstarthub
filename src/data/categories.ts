import type { Category } from "./types.ts";

export const categories: Category[] = [
  {
    slug: "calculators",
    name: "Calculators",
    description: "Everyday calculation tools",
    shortDescription:
      "Percentages, age, units and other everyday calculations.",
    metaTitle: "Free Calculators - Percent, Tip, and Loan",
    metaDescription: "Calculate a percent, sale price, tip, tax, age, or loan estimate in your browser. Open a calculator and type the numbers you have.",
    icon: "calculator",
    route: "/categories/calculators",
    intro:
      "Need a percent off, a tip, or your age in years and days? Open the Percentage Calculator, Discount Calculator, Tip Calculator, or Age Calculator and type the numbers. Sales tax uses the rate you supply. Date Difference and Business Days count calendar days in this browser. Loan, mortgage, wage, and paycheck pages are estimates from what you enter. They do not use tax tables or live lender rates.",
    audience:
      "Use them when a spreadsheet is more than the job needs. They are arithmetic helpers. Loan, tax, and wage results are estimates. They are not financial, tax, medical, or engineering advice.",
    startingSlugs: [
      "percentage-calculator",
      "percentage-change-calculator",
      "discount-calculator",
      "age-calculator",
      "sales-tax-calculator",
      "tip-calculator",
      "gpa-calculator",
      "square-footage-calculator",
    ],
  },
  {
    slug: "text-tools",
    name: "Text Tools",
    description: "Tools for writing and text processing",
    shortDescription: "Count, clean, convert and format text in the browser.",
    metaTitle: "Text Tools - Count, Edit, and Compare",
    metaDescription: "Count words, change case, find and replace, sort lines, and compare drafts. Text tools run in your browser. Paste a draft to start.",
    icon: "text",
    route: "/categories/text-tools",
    intro:
      "Paste a draft to count words, change case, or find and replace exact text. The Word Counter, Character Counter, Find and Replace, and Text Diff tools run in this browser. Clean extra spaces, drop duplicate lines, sort a list, or join wrapped lines. Generate lorem ipsum when a layout needs filling. The original stays on the page until you copy a result or clear the box. Nothing here checks grammar or identifies an author.",
    audience:
      "They are for writers, editors, and anyone cleaning text pasted from a document or a spreadsheet. The text you paste stays in the browser.",
    startingSlugs: [
      "word-counter",
      "character-counter",
      "find-and-replace",
      "whitespace-remover",
      "text-diff",
      "case-converter",
      "duplicate-line-remover",
      "line-sorter",
    ],
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description:
      "Format, encode, minify, and convert data in the browser",
    shortDescription:
      "Format JSON, encode data, minify code, and convert Markdown or HTML locally.",
    metaTitle: "Developer Tools - Format JSON and Code",
    metaDescription: "Format JSON, encode data, minify code, and convert Markdown or HTML in your browser. Invalid input is rejected instead of silently rewritten.",
    icon: "code",
    route: "/categories/developer-tools",
    intro:
      "Need pretty-printed JSON, a SHA hash, or a regex check? Open the JSON Formatter, Hash Generator, Regex Tester, Base64 Encoder, or JavaScript Minifier and paste the sample in this tab. Convert objects with JSON to CSV, encode URLs, and minify HTML or CSS the same way. Hash pasted text with SHA-256, SHA-384, or SHA-512. Convert Markdown. Generate UUIDs or Unix timestamps. Copy hex to RGB, a contrast ratio, or a CSS gradient. Invalid input is rejected instead of silently rewritten.",
    audience:
      "They are for people editing code or data who want a result on the page without installing a package. Minifiers and converters follow the rules of each format, so invalid input is rejected instead of silently rewritten.",
    startingSlugs: [
      "json-formatter",
      "url-encoder",
      "html-encoder",
      "css-gradient-generator",
      "base64-encoder",
      "markdown-to-html",
      "javascript-minifier",
      "hash-generator",
    ],
  },
  {
    slug: "image-tools",
    name: "Image Tools",
    description: "Browser-based image and PDF tools",
    shortDescription:
      "Compress, convert, and inspect images and PDFs without uploading.",
    metaTitle: "Free Image and PDF Tools - Compress Files",
    metaDescription: "Compress, convert, crop, and inspect images and PDFs in your browser. Check the download before you replace the original. Upload a file.",
    icon: "image",
    route: "/categories/image-tools",
    intro:
      "Compress, resize, crop, or convert a JPG, PNG, or WebP, then download the result from this browser. JPEG and WebP compression is lossy. PNG is re-encoded without a lossy quality slider. Merge, split, or compress a PDF, count its pages, or turn pages into JPG. Extract selectable text. A scan may not yield words. Check a download before you replace the original.",
    audience:
      "Files are processed in the browser. A scanned PDF may not yield selectable text. Compression and conversion can reduce quality, so check the download before you replace the original.",
    startingSlugs: [
      "image-compressor",
      "image-resizer",
      "pdf-to-jpg",
      "pdf-merger",
      "pdf-page-counter",
      "pdf-metadata",
      "image-converter",
      "pdf-to-text",
    ],
  },
  {
    slug: "seo-utilities",
    name: "SEO & Utilities",
    description: "Links, slugs, QR codes, and passwords",
    shortDescription:
      "Build UTM links and slugs, create or scan QR codes, and generate passwords.",
    metaTitle: "SEO Tools - UTM Links, QR, and Slugs",
    metaDescription: "Build a UTM link or URL slug, create or scan a QR code, and generate a password on this device. Open a utility and finish the job here.",
    icon: "search",
    route: "/categories/seo-utilities",
    intro:
      "Need a campaign link, a permalink, a QR code, or a password? Open the UTM Builder, Slug Generator, QR Code Generator, QR Code Scanner, or Password Generator and finish the job on this device. Scan from the camera or an image. QR Code Generator Pro adds Wi-Fi, contact, and color codes. A password is created on this device; you can also rate one from length and character set. Write robots.txt or meta tags as text you still have to publish. None of these pages is a password manager or a live crawl of your site.",
    audience:
      "The basic QR tool encodes plain text or a URL. QR Code Generator Pro adds Wi-Fi, contact, and color controls. The password generator creates a string on this device. It is not a password manager.",
    startingSlugs: [
      "utm-builder",
      "slug-generator",
      "qr-code-generator",
      "qr-code-generator-pro",
      "password-generator",
      "qr-code-scanner",
      "meta-tag-generator",
      "robots-txt-generator",
    ],
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Prompt builders and writing tools, with optional Gemini AI",
    shortDescription:
      "Build prompts, study writing patterns, and shorten a draft, in the browser or with Gemini AI.",
    metaTitle: "AI Writing Tools - Prompts and Drafts",
    metaDescription: "Build a prompt, study writing patterns, or shorten a draft. Browser actions stay local; Generate with AI sends the text you submit.",
    icon: "bolt",
    route: "/categories/ai-tools",
    intro:
      "These tools help you write a prompt, describe an image or video scene, look at writing patterns, or shorten a long draft. The main button on each tool runs in your browser. The AI buttons (Generate, Analyze, Compress, or Humanize with AI) send the text you enter to Google's Gemini model to generate the result.",
    audience:
      "Use the browser button when you do not want your text to leave this device. Use an AI button when you want Gemini to rewrite or expand it. Text sent to Gemini is not saved on this site. The prompt tools return text, not images or videos. The writing tools do not decide authorship, and they do not promise that a shorter draft will pass a detector.",
    startingSlugs: [
      "ai-prompt-generator",
      "prompt-to-image",
      "prompt-to-video",
      "ai-article-compressor",
      "ai-article-detector",
      "ai-text-humanizer",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
