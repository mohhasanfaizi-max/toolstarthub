import { CategoryView, categoryMetadata, categoryStaticParams } from "@/views/CategoryView";

export function generateStaticParams() {
  return categoryStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  return categoryMetadata("en", slug);
}

export default async function CategoryPage({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  return <CategoryView locale="en" slug={slug} />;
}
