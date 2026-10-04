import { requireLocale } from "@/i18n/server";
import { ToolView, toolMetadata, toolStaticParams } from "@/views/ToolView";

export function generateStaticParams() {
  return toolStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/tools/[slug]">) {
  const { locale, slug } = await params;
  return toolMetadata(requireLocale(locale), slug);
}

export default async function LocalizedToolPage({
  params,
}: PageProps<"/[locale]/tools/[slug]">) {
  const { locale, slug } = await params;
  return <ToolView locale={requireLocale(locale)} slug={slug} />;
}
