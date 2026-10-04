import { requireLocale } from "@/i18n/server";
import { ToolsView, toolsMetadata } from "@/views/ToolsView";

export async function generateMetadata({
  params,
  searchParams,
}: PageProps<"/[locale]/tools">) {
  const { locale } = await params;
  return toolsMetadata(requireLocale(locale), await searchParams);
}

export default async function LocalizedToolsPage({
  params,
}: PageProps<"/[locale]/tools">) {
  const { locale } = await params;
  return <ToolsView locale={requireLocale(locale)} />;
}
