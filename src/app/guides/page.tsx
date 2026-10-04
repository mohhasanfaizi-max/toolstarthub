import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideCard } from "@/components/guides/GuideCard";
import { getPublicGuides } from "@/data/guides";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const dynamic = "force-dynamic";

const guidesDescription =
  "Free how-to guides that answer one task each: percentages, dates, loans, image and PDF files, JSON, regex, URLs, colors, and more, with a tool to try it.";

export const metadata = createPageMetadata({
  title: "How-To Guides for Calculators, Text, Images and Code",
  description: guidesDescription,
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getPublicGuides(new Date());
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Tools Star Hub guides",
          description: guidesDescription,
          path: "/guides",
          items: guides.map((guide) => ({ name: guide.title, path: guide.route })),
        })}
      />
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
