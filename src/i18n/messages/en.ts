import type { PluralForms } from "../config.ts";
import type { CategorySlug } from "../../data/types.ts";
import { categories } from "../../data/categories.ts";
import { enClient } from "./en-client.ts";

const plural = (forms: PluralForms): PluralForms => forms;

export type CategoryText = {
  name: string;
  description: string;
  shortDescription: string;
  intro: string;
  audience: string;
};

const categoryText = Object.fromEntries(
  categories.map((category) => [
    category.slug,
    {
      name: category.name,
      description: category.description,
      shortDescription: category.shortDescription,
      intro: category.intro,
      audience: category.audience,
    },
  ]),
) as Record<CategorySlug, CategoryText>;

export const en = {
  client: enClient,
  meta: {
    tagline: "Free Online Tools That Just Work",
    description:
      "Fast, free and easy-to-use online tools for calculations, text, developers, images, SEO and everyday tasks. No signup required.",
    toolsTitle: "All Tools",
    toolsDescription:
      "Browse free online tools for calculations, text, developers, images, SEO and everyday tasks.",
    categoriesTitle: "Categories",
    categoriesDescription:
      "Explore Tools Star Hub by category: calculators, text tools, developer tools, image and PDF tools, SEO utilities, and AI tools.",
    categoryTitle: "{name} – Free Online Tools",
    categoryShareAlt: "{name} – free online tools",
    toolShareAlt: "{name} – free online tool",
  },
  header: {
    primaryNav: "Primary",
    logoHome: "{name} home",
    skip: "Skip to main content",
  },
  breadcrumbs: {
    label: "Breadcrumb",
    home: "Home",
    tools: "Tools",
    categories: "Categories",
  },
  footer: {
    blurb:
      "Fast, simple online tools for calculations, text, developers, images, SEO and everyday tasks.",
    tagline: "Fast • Free • Browser tools • No Signup",
    explore: "Explore",
    categories: "Categories",
    legal: "Legal",
    favorites: "Favorites",
    privacy: "Privacy Policy",
    terms: "Terms",
    disclaimer: "Disclaimer",
    languages: "Languages",
    rights: "© {year} {name}. All rights reserved.",
  },
  home: {
    h1: "Free Online Tools for Everyday Tasks",
    intro:
      "Find a tool, use it, and get a result. {name} is a simple place for PDFs, images, calculations, and text, with no account.",
    popularLabel: "Popular:",
    trust: [
      "Free to use",
      "No sign-up required",
      "Fast and easy",
      "Files stay in your browser",
    ],
    popularTitle: "Popular Tools",
    popularDescription:
      "Open a tool people use for files, images, text, and everyday calculations.",
    viewAllTools: "View all tools",
    catalogTitle: "Everything you need, in one place.",
    catalogDescription:
      "Filter the tools that are already on this site. Each one opens in the browser.",
    categoriesTitle: "Browse by category",
    categoriesDescription:
      "Calculators, text, developer utilities, images and PDFs, and website tools.",
    allCategories: "All categories",
    whyTitle: "Why {name}?",
    whyDescription:
      "A straightforward set of utilities for work you would otherwise do in a separate app.",
    values: {
      fast: {
        title: "Fast",
        note: "Most tools run in the browser and return a result on the same page.",
      },
      free: {
        title: "Free",
        note: "The tools on this site do not require payment.",
      },
      private: {
        title: "Private",
        note: "Files and pasted text are processed on your device. Page visits are measured separately, as the privacy policy explains.",
      },
      noAccount: {
        title: "No account",
        note: "Open a tool and use it. An account is not required.",
      },
    },
    howTitle: "How it works",
    howDescription: "Three steps. No installer.",
    steps: [
      {
        title: "Choose a tool",
        description:
          "Search or pick a calculator, file tool, or developer utility.",
      },
      {
        title: "Upload or enter your content",
        description: "Add the file, numbers, or text the tool asks for.",
      },
      {
        title: "Get your result",
        description: "Copy, download, or read the result on the same page.",
      },
    ],
    guidesTitle: "Helpful Guides",
    guidesDescription:
      "Short explanations for tasks the tools on this site already handle.",
    allGuides: "All guides",
    pricingTitle: "Pricing",
    pricingBody:
      "The tools are free to use. There is no account, no installation, and no paid plan.",
    ctaTitle: "Ready to get things done faster?",
    ctaBody: "Explore {name}'s collection of simple online tools.",
    ctaPrimary: "Explore All Tools",
    ctaSecondary: "Try a Tool",
  },
  toolsPage: {
    title: "All Tools",
    description:
      "Search, filter by category, or reopen a recent or favorite tool. New tools appear here as they are added.",
  },
  categoriesPage: {
    title: "Categories",
    description: "Choose a category to find the right tool faster.",
    body: "Calculators handle everyday numbers. Text tools count and clean writing. Developer tools format, encode, and minify. Image tools also include PDF tasks such as merging, splitting, and extracting text. SEO and utilities cover campaign links, slugs, QR codes, and passwords. AI tools build prompts and shorten drafts in the browser, and their AI buttons send the text you enter to Google's Gemini model to generate a result. Every other tool runs in your browser.",
  },
  category: {
    cardCount: plural({ one: "{count} tool", other: "{count} tools" }),
    pageCount: plural({
      one: "{count} tool in this category.",
      other: "{count} tools in this category.",
    }),
    browse: "Browse tools",
    starting: "Useful starting points",
    related: "Related categories",
    none: "No tools in this category yet.",
  },
  toolPage: {
    whatIs: "What is {name}?",
    categorySr: "category",
    relatedTools: "Related tools",
    helpfulGuides: "Helpful guides",
    englishContent:
      "The detailed guide for this tool (how to use it, examples and FAQ) is in English for now.",
    details: {
      about: "What this tool does",
      howTo: "How to use",
      examples: "Examples",
      examplesFallback:
        "Use the workspace above with a simple example from the tool description if no worked examples are listed here.",
      features: "Main features",
      howItWorks: "How it works",
      tips: "Tips",
      limitations: "Limitations",
      limitationsFallback:
        "Check the result before you rely on it. Large files can be slower or fail if the device is low on memory.",
      disclaimer: "See the {link} for what these tools do not cover.",
      disclaimerLink: "disclaimer",
      faq: "FAQ",
      defaultHowTo: [
        "Enter your values or choose a file if the tool needs one.",
        "Run the action on this page.",
        "Review the result, then copy, download or reset as needed.",
      ],
      mobileQuestion: "Does it work on mobile?",
      mobileAnswer:
        "Yes. You can open this page on a phone or tablet. File pickers and downloads use the browser on your device. Large files may be slower on a small phone than on a desktop.",
      workspaceNote: "Note",
    },
    privacy: {
      browser:
        "This tool runs in your browser. Inputs, files and generated values stay on this device. Favorites and recently used tools, if you use them, store only tool names in local storage — never passwords, documents or QR contents.",
      gemini:
        "The original buttons stay in your browser. Generate with AI, Analyze with AI, and Compress with AI send the text you submit to Google's Gemini API through ToolStarHub. That text is not saved here. On the free tier, Google may use it to improve its products. Favorites store only tool names.",
      humanizer:
        "Rewrite text stays in your browser. Humanize with AI sends the text you submit to Google's Gemini API through ToolStarHub. That text is not saved here. On the free tier, Google may use it to improve its products. Favorites store only tool names.",
      fetch:
        "Check preview sends the URL to this site, which requests that public page and reads its tags. The page is not saved here. A private or non-http address is rejected. Favorites store only tool names.",
      see: "See the {link}.",
      link: "privacy policy",
    },
  },
  categories: categoryText,
};

export type Messages = typeof en;
