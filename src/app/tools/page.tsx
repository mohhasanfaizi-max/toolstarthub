import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolsCatalog } from "@/components/tools/ToolsCatalog";
import { ToolCard } from "@/components/tools/ToolCard";
import { tools } from "@/data/tools";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  searchParams,
}: PageProps<"/tools">) {
  const params = await searchParams;
  const hasDiscoveryQuery = Boolean(
    params.q ||
      (params.filter && params.filter !== "all") ||
      (params.sort && params.sort !== "name") ||
      params.view,
  );

  return createPageMetadata({
    title: "All Tools",
    description:
      "Browse free online tools for calculations, text, developers, images, SEO and everyday tasks.",
    path: "/tools",
    noIndex: hasDiscoveryQuery,
  });
}

function ToolsFallback() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} headingAs="h2" />
      ))}
    </div>
  );
}

export default function ToolsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Tools" }]}
      />
      <PageHeader
        className="mt-6"
        title="All Tools"
        description="Search, filter by category, or reopen a recent or favorite tool. New tools appear here as they are added."
      />
      <div className="mt-8">
        <Suspense fallback={<ToolsFallback />}>
          <ToolsCatalog />
        </Suspense>
      </div>
    </Container>
  );
}
