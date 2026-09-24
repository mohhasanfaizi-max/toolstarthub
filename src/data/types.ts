export const categorySlugs = [
  "calculators",
  "text-tools",
  "developer-tools",
  "image-tools",
  "seo-utilities",
  "ai-tools",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type IconName =
  | "percentage"
  | "calendar"
  | "text"
  | "code"
  | "image"
  | "encode"
  | "link"
  | "convert"
  | "file"
  | "color"
  | "slug"
  | "palette"
  | "calculator"
  | "search"
  | "menu"
  | "close"
  | "arrow-right"
  | "sun"
  | "moon"
  | "bolt"
  | "gift"
  | "shield"
  | "user"
  | "device"
  | "check"
  | "x"
  | "github"
  | "linkedin"
  | "copy"
  | "star"
  | "phone"
  | "mail";

export type ToolStatus = "coming-soon" | "available";

export type Tool = {
  slug: string;
  name: string;
  description: string;
  category: CategorySlug;
  icon: IconName;
  route: string;
  featured: boolean;
  new: boolean;
  keywords: string[];
  status: ToolStatus;
  metaTitle?: string;
  relatedSlugs?: string[];
};

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  shortDescription: string;
  icon: IconName;
  route: string;
  intro: string;
  audience: string;
  startingSlugs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  route: string;
  relatedToolSlugs: string[];
  category: CategorySlug;
};

export type Benefit = {
  title: string;
  description: string;
  icon: IconName;
};
