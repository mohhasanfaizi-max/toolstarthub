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
  },
  {
    slug: "text-tools",
    name: "Text Tools",
    description: "Tools for writing and text processing",
    shortDescription: "Count, clean, convert and format text in the browser.",
    icon: "text",
    route: "/categories/text-tools",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description: "Format, encode, minify and convert Markdown or HTML in the browser",
    shortDescription: "Format JSON, encode data and convert Markdown or HTML locally.",
    icon: "code",
    route: "/categories/developer-tools",
  },
  {
    slug: "image-tools",
    name: "Image Tools",
    description: "Browser-based image and PDF tools",
    shortDescription: "Compress, convert and inspect images and PDFs without uploading.",
    icon: "image",
    route: "/categories/image-tools",
  },
  {
    slug: "seo-utilities",
    name: "SEO & Utilities",
    description: "Tools for websites and everyday tasks",
    shortDescription: "Build UTM links, slugs and other website utilities.",
    icon: "search",
    route: "/categories/seo-utilities",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
