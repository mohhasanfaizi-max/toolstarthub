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
  const howTo = getToolContent(slug)?.howTo ?? [];
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
