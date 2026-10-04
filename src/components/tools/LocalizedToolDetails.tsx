import Link from "next/link";
import { FaqList } from "@/components/content/FaqList";
import type { LocalizedToolPage } from "@/i18n/localized-tool-content";

/**
 * Same sections as ToolDetails, rendered from a translated page (see
 * src/i18n/localized-tool-content.ts) with translated headings.
 */
export function LocalizedToolDetails({ page }: { page: LocalizedToolPage }) {
  const { content, headings } = page;
  const [before, after] = headings.disclaimer.split("{link}");
  const sectionHeading = "text-xl font-semibold tracking-tight text-foreground";
  const paragraph = "mt-3 max-w-3xl text-sm leading-7 text-muted-foreground";

  return (
    <>
      <section aria-labelledby="about-tool-heading" className="mt-14">
        <h2 id="about-tool-heading" className={sectionHeading}>
          {headings.about}
        </h2>
        <p className={paragraph}>{content.about}</p>
      </section>

      <section aria-labelledby="how-to-use-heading" className="mt-14">
        <h2 id="how-to-use-heading" className={sectionHeading}>
          {headings.howTo}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
          {content.howTo.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="examples-heading" className="mt-14">
        <h2 id="examples-heading" className={sectionHeading}>
          {headings.examples}
        </h2>
        <ul className="mt-4 space-y-4">
          {content.examples.map((example) => (
            <li key={example.title} className="rounded-2xl border border-border bg-card px-5 py-4">
              <h3 className="font-medium text-foreground">{example.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{example.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="features-heading" className="mt-14">
        <h2 id="features-heading" className={sectionHeading}>
          {headings.features}
        </h2>
        <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
          {content.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="explanation-heading" className="mt-14">
        <h2 id="explanation-heading" className={sectionHeading}>
          {headings.howItWorks}
        </h2>
        <p className={paragraph}>{content.explanation}</p>
      </section>

      <section aria-labelledby="tips-heading" className="mt-14">
        <h2 id="tips-heading" className={sectionHeading}>
          {headings.tips}
        </h2>
        <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
          {content.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="limitations-heading" className="mt-14">
        <h2 id="limitations-heading" className={sectionHeading}>
          {headings.limitations}
        </h2>
        <p className={paragraph}>{content.limitations}</p>
        <p className={paragraph}>
          {before}
          <Link href="/disclaimer" className="font-medium text-accent hover:underline">
            {headings.disclaimerLink}
          </Link>
          {after}
        </p>
      </section>

      <FaqList items={content.faqs} heading={headings.faq} />
    </>
  );
}
