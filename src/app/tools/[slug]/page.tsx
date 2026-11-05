import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getToolContent } from "@/data/tool-content";
import { toolMetaDescriptions } from "@/data/tool-meta";
import { getToolBySlug } from "@/data/tools";
import { howToJsonLd } from "@/lib/structured-data";
import { ToolView, toolMetadata, toolStaticParams } from "@/views/ToolView";

export function generateStaticParams() {
  return toolStaticParams();
}

export const dynamicParams = false;

const NO_HOWTO_SLUGS = new Set([
  "youtube-banner-maker",
  "partial-pressure-calculator",
  "fantasy-point-calculator",
  "graduation-calculator-by-birthday",
  "unemployment-benefits-calculator",
  "secret-santa-generator",
]);

// Search titles used verbatim, without the site-name template.
const ABSOLUTE_TITLES: Record<string, string> = {
  "significant-figures-calculator": "Significant Figures Calculator & Sig Fig Counter | Tools Star Hub",
  "secret-santa-generator": "Free Secret Santa Generator – Random Gift Exchange Draw",
  "tdee-calculator": "Free TDEE Calculator – Daily Calorie Needs & BMR",
  "css-gradient-generator": "Free CSS Gradient Generator – Linear, Radial & Conic | ToolStarHub",
};

export async function generateMetadata({
  params,
}: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const metadata: Metadata = toolMetadata("en", slug);
  // Longer search-result description for tools with a short card description.
  const description = toolMetaDescriptions[slug];
  if (!description) {
    return metadata;
  }
  const title = ABSOLUTE_TITLES[slug];
  if (title) {
    return {
      ...metadata,
      title: { absolute: title },
      description,
      openGraph: { ...metadata.openGraph, title, description },
      twitter: { ...metadata.twitter, title, description },
    };
  }
  return {
    ...metadata,
    description,
    openGraph: { ...metadata.openGraph, description },
    twitter: { ...metadata.twitter, description },
  };
}

export default async function ToolPage({ params }: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  // The five November 2026 tools publish only WebApplication, BreadcrumbList and FAQPage data.
  const howTo = NO_HOWTO_SLUGS.has(slug) ? [] : (getToolContent(slug)?.howTo ?? []);
  return (
    <>
      {tool && howTo.length >= 2 ? (
        <JsonLd
          data={howToJsonLd({
            name: `How to use the ${tool.name}`,
            description: tool.description,
            path: tool.route,
            steps: howTo.map((text) => ({ text })),
            toolName: tool.name,
          })}
        />
      ) : null}
      <ToolView locale="en" slug={slug} />
    </>
  );
}
