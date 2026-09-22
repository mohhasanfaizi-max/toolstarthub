import { categories } from "./categories.ts";
import type { CategorySlug, Tool } from "./types.ts";

export const discoveryFilterIds = [
  "all",
  "calculators",
  "image-tools",
  "pdf",
  "text-tools",
  "developer-tools",
  "color",
  "qr",
  "seo-utilities",
] as const;

export type DiscoveryFilterId = (typeof discoveryFilterIds)[number];

export type DiscoveryFilter = {
  id: DiscoveryFilterId;
  label: string;
};

const categoryLabels: Record<CategorySlug, string> = {
  calculators: "Calculators",
  "image-tools": "Image",
  "text-tools": "Text",
  "developer-tools": "Developer",
  "seo-utilities": "SEO",
};

export const discoveryFilters: DiscoveryFilter[] = [
  { id: "all", label: "All" },
  { id: "calculators", label: categoryLabels.calculators },
  { id: "image-tools", label: categoryLabels["image-tools"] },
  { id: "pdf", label: "PDF" },
  { id: "text-tools", label: categoryLabels["text-tools"] },
  { id: "developer-tools", label: categoryLabels["developer-tools"] },
  { id: "color", label: "Color" },
  { id: "qr", label: "QR" },
  { id: "seo-utilities", label: categoryLabels["seo-utilities"] },
];

const colorTokens = ["color", "colour", "hex", "rgb", "hsl", "contrast", "gradient", "palette"];
const pdfTokens = ["pdf"];
const qrTokens = ["qr"];

function haystackFor(tool: Tool): string {
  return [tool.name, tool.slug, tool.description, ...tool.keywords]
    .join(" ")
    .toLowerCase();
}

export function isDiscoveryFilterId(value: string): value is DiscoveryFilterId {
  return discoveryFilterIds.includes(value as DiscoveryFilterId);
}

export function filterToolsByDiscovery(
  items: Tool[],
  filter: DiscoveryFilterId,
): Tool[] {
  if (filter === "all") {
    return items;
  }

  if (filter === "pdf") {
    return items.filter((tool) =>
      pdfTokens.some((token) => haystackFor(tool).includes(token)),
    );
  }

  if (filter === "color") {
    return items.filter((tool) =>
      colorTokens.some((token) => haystackFor(tool).includes(token)),
    );
  }

  if (filter === "qr") {
    return items.filter((tool) =>
      qrTokens.some((token) => haystackFor(tool).includes(token)),
    );
  }

  return items.filter((tool) => tool.category === filter);
}

export function relatedCategorySlugs(slug: CategorySlug): CategorySlug[] {
  return categories
    .map((category) => category.slug)
    .filter((item) => item !== slug);
}
