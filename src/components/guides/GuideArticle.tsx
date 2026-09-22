import Link from "next/link";
import { FaqList } from "@/components/content/FaqList";
import { AdSlot } from "@/components/ads/AdSlot";
import type { GuideContent } from "@/data/guide-content";
import type { Category } from "@/data/types";

type GuideArticleProps = {
  title: string;
  category?: Category;
  content: GuideContent;
};

export function GuideArticle({ title, category, content }: GuideArticleProps) {
  return (
    <article className="mt-6 max-w-3xl">
      {category ? (
        <p className="text-sm font-medium text-accent">
          <Link href={category.route} className="hover:underline">
            {category.name}
          </Link>
        </p>
      ) : (
        <p className="text-sm font-medium text-accent">Guide</p>
      )}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-7 text-muted-foreground">{content.intro}</p>
      {content.why ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground">{content.why}</p>
      ) : null}
      <AdSlot placement="guide" />

      <section className="mt-10" aria-labelledby="guide-steps-heading">
        <h2
          id="guide-steps-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {content.stepsHeading}
        </h2>
        <ol className="mt-4 list-decimal space-y-4 pl-5">
          {content.steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="text-sm leading-6 text-muted-foreground">
              <span className="font-medium text-foreground">{step.title}. </span>
              {step.body}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" aria-labelledby="guide-example-heading">
        <h2
          id="guide-example-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Example
        </h2>
        {content.examples.map((example) => (
          <div
            key={example.title}
            className="mt-4 rounded-2xl border border-border bg-card px-5 py-4"
          >
            <h3 className="font-medium text-foreground">{example.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{example.body}</p>
          </div>
        ))}
      </section>

      {content.notes?.length ? (
        <section className="mt-10" aria-labelledby="guide-notes-heading">
          <h2
            id="guide-notes-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {content.notesHeading ?? "Things to watch"}
          </h2>
          {content.notes.map((note) => (
            <div key={note.heading} className="mt-5">
              <h3 className="font-medium text-foreground">{note.heading}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{note.body}</p>
            </div>
          ))}
        </section>
      ) : null}

      <FaqList items={content.faqs} />

      <p className="mt-10 text-sm leading-7 text-muted-foreground">
        {content.cta.before}{" "}
        <Link href={content.cta.href} className="font-medium text-accent hover:underline">
          {content.cta.linkLabel}
        </Link>
        {content.cta.after ?? ""}
      </p>
    </article>
  );
}
