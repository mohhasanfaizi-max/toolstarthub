import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideCard } from "@/components/guides/GuideCard";
import { guides } from "@/data/guides";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guides",
  description:
    "Helpful guides for percentages, image compression, JSON, UTM links, age calculation and more.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Guides" }]}
      />
      <PageHeader
        className="mt-6"
        title="Helpful Guides"
        description="Short articles that answer a task, then point to the tool that does it."
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} headingAs="h2" />
        ))}
      </div>
    </Container>
  );
}
