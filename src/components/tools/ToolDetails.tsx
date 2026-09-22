import Link from "next/link";
import { getToolContent } from "@/data/tool-content";
import { FaqList, getDefaultToolFaqs } from "@/components/content/FaqList";

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
]);

const mobileFaq = {
  question: "Does it work on mobile?",
  answer:
    "Yes. You can open this page on a phone or tablet. File pickers and downloads use the browser on your device. Large files may be slower on a small phone than on a desktop.",
};

type ToolDetailsProps = {
  slug: string;
  toolName: string;
};

export function ToolDetails({ slug, toolName }: ToolDetailsProps) {
  const content = getToolContent(slug);
  const faqs = getFaqsForTool(slug, toolName);

  return (
    <>
      <section aria-labelledby="how-to-use-heading" className="mt-14">
        <h2
          id="how-to-use-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          How to use
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          {(content?.howTo ?? [
            "Enter your values or choose a file if the tool needs one.",
            "Run the action on this page.",
            "Review the result, then copy, download or reset as needed.",
          ]).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="examples-heading" className="mt-14">
        <h2
          id="examples-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Examples
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
            Use the workspace above with a simple example from the tool
            description if no worked examples are listed here.
          </p>
        )}
      </section>

      {content?.explanation ? (
        <section aria-labelledby="explanation-heading" className="mt-14">
          <h2
            id="explanation-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            How it works
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            {content.explanation}
          </p>
        </section>
      ) : null}

      <section aria-labelledby="limitations-heading" className="mt-14">
        <h2
          id="limitations-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Limitations
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          Results depend on the values or files you provide and on your
          browser. Large files can be slower or fail if the device is low on
          memory. Check important output before you rely on it. See the{" "}
          <Link href="/disclaimer" className="font-medium text-accent hover:underline">
            disclaimer
          </Link>
          .
        </p>
      </section>

      <FaqList items={faqs} />
    </>
  );
}

export function getFaqsForTool(slug: string, toolName: string) {
  const faqs = getToolContent(slug)?.faqs ?? getDefaultToolFaqs(toolName);
  if (
    mobileFaqSlugs.has(slug) &&
    !faqs.some((item) => item.question.toLowerCase().includes("mobile"))
  ) {
    return [...faqs, mobileFaq];
  }
  return faqs;
}
