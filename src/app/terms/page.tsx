import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig, siteContact } from "@/lib/site";

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
        description="Simple terms for using the Tools Star Hub website."
      />
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>
          {siteConfig.name} is an independent website at {siteConfig.url}. By
          using it, you agree to use the site and its tools lawfully and at
          your own discretion.
        </p>
        <p>
          The tools are free and do not require an account. They are provided
          in their current form. Check a result before you rely on it for
          money, health, legal, or other important decisions. The{" "}
          <Link href="/disclaimer" className="font-medium text-accent hover:underline">
            disclaimer
          </Link>{" "}
          explains those limits.
        </p>
        <p>
          Files and text you put into a tool are processed in your browser.
          You keep that material. Do not submit information you are not allowed
          to use. The site’s own pages, names, and layout stay with{" "}
          {siteConfig.name}.
        </p>
        <p>
          You may not disrupt the site, overload it, or use the tools for
          unlawful activity.
        </p>
        <p>
          Page visits may be measured with Google Analytics, as described in
          the{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            privacy policy
          </Link>
          . The site does not sell accounts or paid plans.
        </p>
        <p>
          These terms can change. The version on this page is the current one.
          Questions can go to{" "}
          <a
            href={`mailto:${siteContact.email}`}
            className="font-medium text-accent hover:underline"
          >
            {siteContact.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
