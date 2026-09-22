import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description: `Disclaimer for ${siteConfig.name} tools and guides.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Disclaimer" }]}
      />
      <PageHeader
        className="mt-6"
        title="Disclaimer"
        description="Please review results before using them for important work."
      />
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>
          {siteConfig.name} provides general-purpose online tools and guides.
          They are not a substitute for professional advice, including legal,
          financial, medical, engineering or tax advice.
        </p>
        <p>
          Tool output can be affected by the values you enter and by browser
          limitations. Check important calculations, conversions, and document
          changes independently.
        </p>
        <p>
          The website is provided as is. We do not guarantee that every tool is
          uninterrupted or free of errors.
        </p>
      </div>
    </Container>
  );
}
