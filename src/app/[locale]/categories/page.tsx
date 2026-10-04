import { requireLocale } from "@/i18n/server";
import { CategoriesView, categoriesMetadata } from "@/views/CategoriesView";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/categories">) {
  const { locale } = await params;
  return categoriesMetadata(requireLocale(locale));
}

export default async function LocalizedCategoriesPage({
  params,
}: PageProps<"/[locale]/categories">) {
  const { locale } = await params;
  return <CategoriesView locale={requireLocale(locale)} />;
}
