import Link from "next/link";
import { ToolDirectory } from "@/components/guides/ToolDirectory";
import { ShareCardImage } from "@/components/seo/ShareCardImage";
import { Button } from "@/components/ui/Button";
import { freeDigitalToolsCatalog } from "@/data/free-digital-tools-catalog";
import {
  FREE_DIGITAL_TOOLS_TITLE,
  freeDigitalToolsSections,
  type FreeToolBlock,
  type FreeToolSpan,
} from "@/data/free-digital-tools-guide";

type Span = FreeToolSpan;
type Block = FreeToolBlock;

function formatGuideDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function normalizeHref(href: string): string {
  const site = "https://www.toolstarhub.com";
  if (href.startsWith(`${site}/`)) return href.slice(site.length);
  if (href === site) return "/";
  return href;
}

function RichText({ spans }: { spans: readonly Span[] }) {
  return (
    <>
      {spans.map((span, index) => {
        const content = span.code ? (
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.92em] text-foreground">
            {span.text}
          </code>
        ) : (
          span.text
        );
        if (!span.href) return <span key={index}>{content}</span>;
        const href = normalizeHref(span.href);
        const className = "font-medium text-accent hover:underline";
        if (href.startsWith("/")) {
          return (
            <Link key={index} href={href} className={className}>
              {content}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={href}
            className={className}
            {...(href.startsWith("http") ? { rel: "noreferrer" } : {})}
          >
            {content}
          </a>
        );
      })}
    </>
  );
}

function stripStepNumber(spans: readonly Span[]): Span[] {
  if (spans.length === 0) return [...spans];
  const [first, ...rest] = spans;
  return [{ ...first, text: first.text.replace(/^\d+\s+/, "") }, ...rest];
}

function isToolsCta(block: Block): boolean {
  return (
    block.type === "p" &&
    block.spans.length === 1 &&
    normalizeHref(block.spans[0].href ?? "") === "/tools"
  );
}

function BlockView({ block, sectionId }: { block: Block; sectionId: string }) {
  if (block.type === "directory") {
    return <ToolDirectory cards={freeDigitalToolsCatalog.cards} />;
  }
  if (block.type === "faq") {
    return (
      <dl className="mt-4 space-y-5">
        {block.items.map((item) => (
          <div key={item.question}>
            <dt className="font-medium text-foreground">{item.question}</dt>
            <dd className="mt-2 text-sm leading-7 text-muted-foreground">
              <RichText spans={item.answer} />
            </dd>
          </div>
        ))}
      </dl>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 id={block.id} className="mt-6 scroll-mt-24 font-medium text-foreground">
        {block.text}
      </h3>
    );
  }
  if (block.type === "pre") {
    return (
      <pre className="mt-4 overflow-x-auto rounded-2xl border border-border bg-muted px-4 py-3 font-mono text-sm leading-6 text-foreground">
        {block.text}
      </pre>
    );
  }
  if (block.type === "ul") {
    const numbered = sectionId === "guide";
    const items = block.items.map((item) => (numbered ? stripStepNumber(item) : item));
    const listClass = "mt-4 space-y-2 pl-5 text-sm leading-7 text-muted-foreground";
    if (numbered) {
      return (
        <ol className={`list-decimal ${listClass}`}>
          {items.map((item, index) => (
            <li key={index}>
              <RichText spans={item} />
            </li>
          ))}
        </ol>
      );
    }
    return (
      <ul className={`list-disc ${listClass}`}>
        {items.map((item, index) => (
          <li key={index}>
            <RichText spans={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] border-collapse text-start text-sm">
          <caption className="px-4 pt-3 text-start text-xs text-muted-foreground">
            {block.caption}
          </caption>
          <thead>
            <tr className="border-b border-border">
              {block.headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3 text-start font-medium text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.map((cell) => cell.map((span) => span.text).join("")).join("|")} className="border-b border-border last:border-b-0">
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={index}
                      scope="row"
                      className="px-4 py-3 text-start align-top font-medium text-foreground"
                    >
                      <RichText spans={cell} />
                    </th>
                  ) : (
                    <td key={index} className="px-4 py-3 align-top leading-6 text-muted-foreground">
                      <RichText spans={cell} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  const paragraphId = block.id;
  if (isToolsCta(block)) {
    const span = block.spans[0];
    return (
      <p id={paragraphId} className="mt-4">
        <Button href="/tools">{span.text}</Button>
      </p>
    );
  }
  return (
    <p
      id={paragraphId}
      className={`mt-3 text-sm leading-7 text-muted-foreground${paragraphId ? " scroll-mt-24" : ""}`}
    >
      <RichText spans={block.spans} />
    </p>
  );
}

function TocLinks() {
  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
      {freeDigitalToolsSections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className="font-medium text-accent hover:underline">
            {section.heading}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function FreeDigitalToolsArticle({
  route,
  pageTitle,
  published,
  modified,
}: {
  route: string;
  pageTitle: string;
  published?: string;
  modified?: string;
}) {
  const showUpdated =
    modified && published && formatGuideDate(modified) !== formatGuideDate(published);

  return (
    <div className="mt-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
      <aside className="hidden lg:block">
        <nav
          aria-label="On this page"
          className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-border bg-muted px-5 py-4"
        >
          <p className="text-sm font-semibold text-foreground">On this page</p>
          <TocLinks />
        </nav>
      </aside>
      <article>
        <p className="text-sm font-medium text-accent">Guide</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {FREE_DIGITAL_TOOLS_TITLE}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By{" "}
          <Link href="/about" className="font-medium text-foreground hover:underline">
            Ali Ahmed
          </Link>
          , who runs Tools Star Hub
          {published ? (
            <>
              {" · "}Published <time dateTime={published}>{formatGuideDate(published)}</time>
            </>
          ) : null}
          {showUpdated ? (
            <>
              {" · "}Updated <time dateTime={modified}>{formatGuideDate(modified)}</time>
            </>
          ) : null}
        </p>
        <details className="mt-6 rounded-2xl border border-border bg-muted px-5 py-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            On this page
          </summary>
          <nav aria-label="On this page">
            <TocLinks />
          </nav>
        </details>
        {freeDigitalToolsSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={section.headingId}
            className={
              section.id === "author"
                ? "mt-10 scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:p-6"
                : "mt-10 scroll-mt-24"
            }
          >
            <h2
              id={section.headingId}
              className="scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
            >
              {section.heading}
            </h2>
            {section.blocks.map((block, index) => (
              <BlockView key={`${section.id}-${index}`} block={block} sectionId={section.id} />
            ))}
            {section.id === "what-are" ? (
              <ShareCardImage route={route} title={pageTitle} />
            ) : null}
          </section>
        ))}
      </article>
    </div>
  );
}
