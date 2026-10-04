import { requireLocale } from "@/i18n/server";
import {
  CategoryView,
  categoryMetadata,
  categoryStaticParams,
} from "@/views/CategoryView";

export function generateStaticParams() {
  return categoryStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/categories/[slug]">) {
  const { locale, slug } = await params;
  return categoryMetadata(requireLocale(locale), slug);
}

export default async function LocalizedCategoryPage({
  params,
}: PageProps<"/[locale]/categories/[slug]">) {
  const { locale, slug } = await params;
  return <CategoryView locale={requireLocale(locale)} slug={slug} />;
}
