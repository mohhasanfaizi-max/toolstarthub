import type { Guide } from "./types.ts";

export const guides: Guide[] = [
  {
    slug: "how-to-calculate-percentage",
    title: "How to Calculate Percentage",
    description:
      "How to calculate a percentage: X% of a number, a number as a percent of another, and percent increase or decrease.",
    route: "/guides/how-to-calculate-percentage",
    relatedToolSlugs: [
      "percentage-calculator",
      "percentage-change-calculator",
      "discount-calculator",
    ],
    category: "calculators",
  },
  {
    slug: "how-to-compress-an-image-without-losing-quality",
    title: "How to Compress an Image Without Losing Quality",
    description:
      "Resize first, pick JPEG, WebP, or PNG, then compress in small steps so a photo still looks sharp.",
    route: "/guides/how-to-compress-an-image-without-losing-quality",
    relatedToolSlugs: [
      "image-compressor",
      "image-resizer",
      "image-cropper",
      "image-converter",
      "pdf-to-jpg",
      "image-to-pdf",
      "pdf-compressor",
    ],
    category: "image-tools",
  },
  {
    slug: "what-is-json",
    title: "What Is JSON?",
    description:
      "JSON is a text format for objects and arrays. See how to read it, why it fails to parse, and how to format it in the browser.",
    route: "/guides/what-is-json",
    relatedToolSlugs: [
      "json-formatter",
      "javascript-minifier",
      "html-minifier",
      "css-minifier",
      "markdown-to-html",
      "html-to-markdown",
    ],
    category: "developer-tools",
  },
  {
    slug: "how-to-create-a-utm-url",
    title: "How to Create a UTM URL",
    description:
      "Add utm_source, utm_medium, and utm_campaign to a destination URL so analytics can tell campaigns apart.",
    route: "/guides/how-to-create-a-utm-url",
    relatedToolSlugs: ["utm-builder", "qr-code-generator", "qr-code-generator-pro", "slug-generator"],
    category: "seo-utilities",
  },
  {
    slug: "how-to-calculate-age",
    title: "How to Calculate Age",
    description:
      "Count age in years, months, and days from a date of birth using the civil calendar, including leap days.",
    route: "/guides/how-to-calculate-age",
    relatedToolSlugs: ["age-calculator"],
    category: "calculators",
  },
  {
    slug: "how-to-work-with-pdfs-in-your-browser",
    title: "How to Work with PDFs in Your Browser",
    description:
      "Compress a PDF, extract text, check metadata, or merge pages in the browser without uploading the file.",
    route: "/guides/how-to-work-with-pdfs-in-your-browser",
    relatedToolSlugs: [
      "pdf-compressor",
      "pdf-to-text",
      "pdf-metadata",
      "text-to-pdf",
      "pdf-merger",
      "pdf-splitter",
    ],
    category: "image-tools",
  },
  {
    slug: "how-to-clean-and-compare-text",
    title: "How to Clean and Compare Text",
    description:
      "Remove duplicate lines, tidy whitespace, sort a list, and compare two drafts locally in the browser.",
    route: "/guides/how-to-clean-and-compare-text",
    relatedToolSlugs: [
      "duplicate-line-remover",
      "whitespace-remover",
      "line-sorter",
      "text-diff",
      "word-counter",
      "case-converter",
    ],
    category: "text-tools",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesForTool(toolSlug: string): Guide[] {
  return guides.filter((guide) => guide.relatedToolSlugs.includes(toolSlug));
}

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return guides.filter((guide) => guide.category === category);
}
