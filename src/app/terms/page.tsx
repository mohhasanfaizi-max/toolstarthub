import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: `Terms for using ${siteConfig.name} free browser tools.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Terms" }]}
      />
      <PageHeader
        className="mt-6"
        title="Terms of Use"
        description="Simple terms for using the ToolsTartHub website."
      />
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>
          By using {siteConfig.name}, you agree to use the website and its tools
          lawfully and at your own discretion.
        </p>
        <p>
          The tools are provided free of charge, without an account, in their
          current form. Results should be checked before you rely on them for
          important decisions.
        </p>
        <p>
          You may not attempt to disrupt the site, overload it, or misuse the
          tools for unlawful activity.
        </p>
        <p>
          These terms may be updated as the site grows. The latest version will
          always be published on this page.
        </p>
      </div>
    </Container>
  );
}
