import { requireLocale } from "@/i18n/server";
import { HomeView, homeMetadata } from "@/views/HomeView";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  return homeMetadata(requireLocale(locale));
}

export default async function LocalizedHome({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  return <HomeView locale={requireLocale(locale)} />;
}
