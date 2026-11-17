import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { aboutPageJsonLd, SITE_OPERATOR_NAME } from "@/lib/structured-data";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import { locales } from "@/i18n/config";
import { PRODUCTION_CANONICAL_HOST, siteConfig, siteContact } from "@/lib/site";

const LAST_UPDATED = "2026-11-17";
const LAST_UPDATED_DISPLAY = "17 November 2026";

const description =
  "About Tools Star Hub, an independent site run by Ali Ahmed: free browser tools and guides, how input is handled, and how to report a mistake.";

export const metadata = createPageMetadata({
  title: "About Us: Who Builds the Free Tools and Guides",
  description,
  path: "/about",
  shareImage: { route: "/about", alt: `About ${siteConfig.name}` },
});

const linkClass = "font-medium text-accent hover:underline";

const sectionClass = "mt-12 max-w-3xl";
const headingClass = "text-xl font-semibold tracking-tight text-foreground";
const bodyClass = "mt-4 space-y-4 text-base leading-7 text-muted-foreground";

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
      <JsonLd data={aboutPageJsonLd({ description, dateModified: LAST_UPDATED })} />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "About" }]}
      />
      <PageHeader
        className="mt-6"
        title={`About ${siteConfig.name}`}
        description="A simple place to find useful online tools without accounts, paywalls or extra noise."
      />
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_DISPLAY}</time>
      </p>

      <section id="who-runs-the-site" aria-labelledby="who-heading" className={sectionClass}>
        <h2 id="who-heading" className={headingClass}>
          Who runs this site?
        </h2>
        <div className={bodyClass}>
          <p>
            {siteConfig.name} is an independent website run by {SITE_OPERATOR_NAME}.
            It is not a registered company page, and this site does not publish a
            company name, office address, staff list, credentials, or awards.
            Its purpose is to offer free online tools for everyday tasks, and short
            guides that explain the method. The collection has {tools.length} tools
            across {categories.length} categories: calculators, text tools, developer
            helpers, image and PDF tools, SEO utilities, and AI tools, plus{" "}
            {guideCount} guides. The site is published at {PRODUCTION_CANONICAL_HOST}{" "}
            and the interface is available in {locales.length} languages.
          </p>
          <p>
            There is no signup, no account, and no payment system. Pages stay
            lightweight so they remain usable on phones and slower connections.
            Questions and corrections can go to{" "}
            <a href={`mailto:${siteContact.email}`} className={linkClass}>
              {siteContact.email}
            </a>{" "}
            or the{" "}
            <Link href="/contact" className={linkClass}>
              contact page
            </Link>
            .
          </p>
        </div>
      </section>

      <section aria-labelledby="how-checked-heading" className={sectionClass}>
        <h2 id="how-checked-heading" className={headingClass}>
          How are the tools built and checked?
        </h2>
        <div className={bodyClass}>
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

      <section id="local-processing" aria-labelledby="local-heading" className={sectionClass}>
        <h2 id="local-heading" className={headingClass}>
          How is input handled?
        </h2>
        <div className={bodyClass}>
          <p>
            Most tools run in your browser, so files and pasted text stay on this
            device and are not uploaded to our server. Where a tool has limits, the
            tool page says so. If you accept analytics cookies, page visits are
            measured with Google Analytics. That measurement does not include the
            files or text you put into a tool. See the{" "}
            <Link href="/privacy" className={linkClass}>
              privacy policy
            </Link>{" "}
            for the exact data flow.
          </p>
        </div>
      </section>

      <section id="ai-tools" aria-labelledby="ai-heading" className={sectionClass}>
        <h2 id="ai-heading" className={headingClass}>
          How do the AI tools use Gemini?
        </h2>
        <div className={bodyClass}>
          <p>
            The exceptions to in-browser processing are the AI buttons on AI tools,
            which send the text you enter to Google&apos;s Gemini model to generate a
            result, and the Open Graph preview, which sends the URL you enter to
            this site. Alma saves a local food diary, custom foods, water logs,
            nutrition targets, meal plans and groceries. Asking its coach sends
            your question and selected diary summary to this site; when configured,
            Gemini receives a summary to generate a reply. Packaged-food search
            terms go through this site to Open Food Facts.
          </p>
          <p>
            This site does not keep the text you submit to those AI buttons as a
            saved draft. On Google&apos;s free tier, Google may use submitted text
            to improve its products. Each AI tool page also says what that tool can
            and cannot do, including that writing-pattern checks are not proof of
            authorship.
          </p>
        </div>
      </section>

      <section
        id="editorial-team"
        aria-labelledby="editorial-heading"
        className={`${sectionClass} scroll-mt-24`}
      >
        <h2 id="editorial-heading" className={headingClass}>
          Editorial and accuracy policy
        </h2>
        <div className={bodyClass}>
          <p id="ali-ahmed">
            {SITE_OPERATOR_NAME} runs this independent website and is responsible
            for the tools and guides published here. This page does not list a
            separate editorial staff, because no such team is a published fact.
          </p>
          <p>
            Guides answer one question in the first paragraph, then show the
            method, numbered steps, a worked example, the cases to watch, and a
            link to the tool that does the job. Every guide shows its publication
            date, and an updated date once its text changes.
          </p>
          <p>
            The guides do not invent statistics or quote sources that do not
            exist. When a figure is only a common rule of thumb, the guide says
            so. Results from the tools and guides are general information, not
            financial, legal, tax, or medical advice; see the{" "}
            <Link href="/disclaimer" className={linkClass}>
              disclaimer
            </Link>
            . If a confirmed mistake is found, the page is corrected.
          </p>
        </div>
      </section>

      <section aria-labelledby="corrections-heading" className={sectionClass}>
        <h2 id="corrections-heading" className={headingClass}>
          How can I report a mistake?
        </h2>
        <div className={bodyClass}>
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
            For how information is handled, see the{" "}
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
