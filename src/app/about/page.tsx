import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { aboutPageJsonLd, EDITORIAL_TEAM_NAME } from "@/lib/structured-data";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import { locales } from "@/i18n/config";
import { PRODUCTION_CANONICAL_HOST, siteConfig, siteContact } from "@/lib/site";

const description =
  "About Tools Star Hub: who builds the free browser tools and guides, how results are checked, how input is handled, and how to report a mistake.";

export const metadata = createPageMetadata({
  title: "About Us: Who Builds the Free Tools and Guides",
  description,
  path: "/about",
});

const linkClass = "font-medium text-accent hover:underline";

export default function AboutPage() {
  const guideCount = getPublicGuides(new Date()).length;
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={aboutPageJsonLd({ description })} />
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
          {siteConfig.name} is a free collection of {tools.length} online tools across{" "}
          {categories.length} categories: calculators, text tools, developer helpers,
          image and PDF tools, SEO utilities, and AI tools. It also publishes{" "}
          {guideCount} guides that explain the method behind the tools. The site is
          published at {PRODUCTION_CANONICAL_HOST} and is available in {locales.length}{" "}
          languages.
        </p>
        <p>
          Open a tool, use it, and get a result. Most tools run in your
          browser, so files and pasted text stay on this device and are not
          uploaded to our server. The exceptions are the AI buttons on AI
          tools, which send the text you enter to Google&apos;s Gemini model to
          generate a result, and the Open Graph preview, which sends the URL
          you enter to this site. Where a tool has limits, the tool page says
          so. If you accept analytics cookies, page visits are measured with
          Google Analytics. That measurement does not include the files or text
          you put into a tool.
        </p>
        <p>
          There is no signup, no account, and no payment system. Pages stay
          lightweight so they remain usable on phones and slower connections.
        </p>
      </div>

      <section aria-labelledby="how-checked-heading" className="mt-12 max-w-3xl">
        <h2
          id="how-checked-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          How are the tools built and checked?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            Each tool does one job and shows its limits on the page: accepted
            formats, size caps, and inputs that are rejected instead of guessed.
            Calculators and converters are covered by an automated test suite
            with worked examples. For example, 15% of 80 has to come out as 12,
            and dividing by zero has to be rejected. When a result is an
            estimate, such as a loan payment or a reading time, the page says
            what the estimate leaves out.
          </p>
          <p>
            Every tool page has a short definition, step-by-step instructions,
            examples, limitations, and answers to common questions, so you can
            check the method instead of trusting a number blindly.
          </p>
        </div>
      </section>

      <section
        id="editorial-team"
        aria-labelledby="editorial-heading"
        className="mt-12 max-w-3xl scroll-mt-24"
      >
        <h2
          id="editorial-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Who writes the guides?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            Guides are written and maintained by the {EDITORIAL_TEAM_NAME}. Each
            guide answers one question in its first paragraph, then shows the
            method, numbered steps, a worked example, the cases to watch, and
            a link to the tool that does the job. Every guide shows its
            publication date, and an updated date once its text changes.
          </p>
          <p>
            The guides do not invent statistics or quote sources that do not
            exist. When a figure is only a common rule of thumb, the guide says
            so. Results from the tools and guides are general information, not
            financial, legal, tax, or medical advice; see the{" "}
            <Link href="/disclaimer" className={linkClass}>
              disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <section aria-labelledby="corrections-heading" className="mt-12 max-w-3xl">
        <h2
          id="corrections-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          How can I report a mistake?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            Email{" "}
            <a href={`mailto:${siteContact.email}`} className={linkClass}>
              {siteContact.email}
            </a>{" "}
            or use the{" "}
            <Link href="/contact" className={linkClass}>
              contact page
            </Link>
            . Include the page, what you entered, and what you expected. Confirmed
            mistakes are corrected on the page.
          </p>
          <p>
            {siteConfig.name} is a small independent website. This page does not
            list a company registration, office, staff count, or certifications
            because those are not published facts. For how information is handled,
            see the{" "}
            <Link href="/privacy" className={linkClass}>
              privacy policy
            </Link>
            ,{" "}
            <Link href="/terms" className={linkClass}>
              terms
            </Link>
            , and{" "}
            <Link href="/disclaimer" className={linkClass}>
              disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/tools">Explore All Tools</Button>
        <Button href="/guides" variant="secondary">
          Read the Guides
        </Button>
      </div>
    </Container>
  );
}
