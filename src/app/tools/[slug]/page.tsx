import { ToolView, toolMetadata, toolStaticParams } from "@/views/ToolView";

export function generateStaticParams() {
  return toolStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  return toolMetadata("en", slug);
}

export default async function ToolPage({ params }: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  return <ToolView locale="en" slug={slug} />;
}
