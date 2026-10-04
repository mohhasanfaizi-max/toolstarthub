import { CategoriesView, categoriesMetadata } from "@/views/CategoriesView";

export const metadata = categoriesMetadata("en");

export default function CategoriesPage() {
  return <CategoriesView locale="en" />;
}
