import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { PRODUCTION_CANONICAL_HOST, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn what Tools Star Hub is: a fast, free collection of online tools with no signup required.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "About" }]}
      />
      <PageHeader
        className="mt-6"
        title={`About ${siteConfig.name}`}
        description="A simple place to find useful online tools without accounts, paywalls or extra noise."
      />
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>
          {siteConfig.name} is a free collection of 73 browser tools across six
          categories: calculators, text tools, developer helpers, image and PDF
          tools, SEO utilities, and AI tools. The site is published at{" "}
          {PRODUCTION_CANONICAL_HOST}.
        </p>
        <p>
          Open a tool, use it, and get a result. Tools are designed to run in
          your browser. Files and pasted text stay on this device and are not
          uploaded to our server. Where a tool has limits, the tool page says
          so. Page visits are measured with Google Analytics. That measurement
          does not include the files or text you put into a tool.
        </p>
        <p>
          There is no signup, no account, and no payment system. Pages stay
          lightweight so they remain usable on phones and slower connections.
        </p>
        <p>
          {siteConfig.name} is a small independent website. This page does not
          list a company registration, office, staff count, or certifications
          because those are not published facts. For how information is handled,
          see the{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            privacy policy
          </Link>
          ,{" "}
          <Link href="/terms" className="font-medium text-accent hover:underline">
            terms
          </Link>
          ,{" "}
          <Link href="/disclaimer" className="font-medium text-accent hover:underline">
            disclaimer
          </Link>
          , and{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            contact
          </Link>{" "}
          pages.
        </p>
      </div>
      <div className="mt-8">
        <Button href="/tools">Explore All Tools</Button>
      </div>
    </Container>
  );
}
