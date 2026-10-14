import Link from "next/link";
import { getToolContent, type ToolContent } from "@/data/tool-content";
import { FaqList, getDefaultToolFaqs } from "@/components/content/FaqList";
import { getMessages } from "@/i18n/server";
import type { Messages } from "@/i18n/messages/en";

const mobileFaqSlugs = new Set([
  "image-compressor",
  "image-resizer",
  "image-cropper",
  "image-converter",
  "pdf-to-jpg",
  "image-to-pdf",
  "pdf-merger",
  "pdf-splitter",
  "pdf-page-counter",
  "pdf-compressor",
  "pdf-to-text",
  "pdf-metadata",
  "image-color-analyzer",
  "qr-code-scanner",
  "color-picker",
  "face-shape-detector",
]);

type DetailLabels = Messages["toolPage"]["details"];

type ToolDetailsProps = {
  slug: string;
  toolName: string;
  /** Translated content; defaults to the English content for the slug. */
  content?: ToolContent;
  labels?: DetailLabels;
};

const englishLabels = getMessages("en").toolPage.details;

function DisclaimerSentence({ labels }: { labels: DetailLabels }) {
  const [before, after = ""] = labels.disclaimer.split("{link}");
  return (
    <>
      {before}
      <Link href="/disclaimer" className="font-medium text-accent hover:underline">
        {labels.disclaimerLink}
      </Link>
      {after}
    </>
  );
}

export function ToolDetails({
  slug,
  toolName,
  content = getToolContent(slug),
  labels = englishLabels,
}: ToolDetailsProps) {
  const faqs = getFaqsForTool(slug, toolName, content, labels);

  return (
    <>
      {content?.about ? (
        <section aria-labelledby="about-tool-heading" className="mt-14">
          <h2
            id="about-tool-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {labels.about}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            {content.about}
          </p>
          {content.relatedLinks?.map((link) => (
            <p
              key={link.href}
              className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground"
            >
              {link.before}{" "}
              <Link href={link.href} className="font-medium text-accent hover:underline">
                {link.linkLabel}
              </Link>
              {link.after ?? ""}
            </p>
          ))}
        </section>
      ) : null}

      <section aria-labelledby="how-to-use-heading" className="mt-14">
        <h2
          id="how-to-use-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {labels.howTo}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
          {(content?.howTo ?? labels.defaultHowTo).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="examples-heading" className="mt-14">
        <h2
          id="examples-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {labels.examples}
        </h2>
        {content?.examples ? (
          <ul className="mt-4 space-y-4">
            {content.examples.map((example) => (
              <li
                key={example.title}
                className="rounded-2xl border border-border bg-card px-5 py-4"
              >
                <h3 className="font-medium text-foreground">{example.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {example.body}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            {labels.examplesFallback}
          </p>
        )}
      </section>

      {content?.features && content.features.length > 0 ? (
        <section aria-labelledby="features-heading" className="mt-14">
          <h2
            id="features-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {labels.features}
          </h2>
          <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
            {content.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {content?.explanation ? (
        <section aria-labelledby="explanation-heading" className="mt-14">
          <h2
            id="explanation-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {labels.howItWorks}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            {content.explanation}
          </p>
        </section>
      ) : null}

      {content?.extraSections?.map((section, index) => {
        const headingId = section.id ?? `extra-section-${index}-heading`;
        return (
          <section
            key={section.heading}
            aria-labelledby={headingId}
            className="mt-14"
          >
            <h2
              id={headingId}
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {section.table ? (
              <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[32rem] border-collapse text-start text-sm">
                  <caption className="px-4 pt-3 text-start text-xs text-muted-foreground">
                    {section.table.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-border">
                      {section.table.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-4 py-3 text-start font-medium text-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join("|")} className="border-b border-border last:border-b-0">
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={`${cell}-${cellIndex}`}
                              scope="row"
                              className="px-4 py-3 text-start align-top font-medium text-foreground"
                            >
                              {cell}
                            </th>
                          ) : (
                            <td
                              key={`${cell}-${cellIndex}`}
                              className="px-4 py-3 align-top leading-6 text-muted-foreground"
                            >
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {section.subsections?.map((sub) => (
              <div key={sub.heading} className="mt-6" id={sub.id}>
                <h3
                  id={sub.id ? `${sub.id}-heading` : undefined}
                  className="font-medium text-foreground"
                >
                  {sub.heading}
                </h3>
                {sub.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {section.after ? (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {section.after}
              </p>
            ) : null}
            {section.code ? (
              <div className="mt-4 max-w-3xl rounded-2xl border border-border bg-card px-5 py-4">
                <p className="text-sm leading-6 text-muted-foreground">{section.code}</p>
              </div>
            ) : null}
          </section>
        );
      })}

      {content?.tips && content.tips.length > 0 ? (
        <section aria-labelledby="tips-heading" className="mt-14">
          <h2
            id="tips-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {labels.tips}
          </h2>
          <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
            {content.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="limitations-heading" className="mt-14">
        <h2
          id="limitations-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {labels.limitations}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          {content?.limitations ?? labels.limitationsFallback}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          <DisclaimerSentence labels={labels} />
        </p>
      </section>

      <FaqList items={faqs} heading={labels.faq} />
    </>
  );
}

export function getFaqsForTool(
  slug: string,
  toolName: string,
  content: ToolContent | undefined = getToolContent(slug),
  labels: DetailLabels = englishLabels,
) {
  const faqs = content?.faqs ?? getDefaultToolFaqs(toolName);
  if (
    mobileFaqSlugs.has(slug) &&
    // Translated FAQs mirror the English ones, so check the English list.
    !(getToolContent(slug)?.faqs ?? faqs).some((item) =>
      item.question.toLowerCase().includes("mobile"),
    )
  ) {
    return [
      ...faqs,
      { question: labels.mobileQuestion, answer: labels.mobileAnswer },
    ];
  }
  return faqs;
}
