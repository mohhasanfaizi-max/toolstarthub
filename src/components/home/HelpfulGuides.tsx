import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { GuideCard } from "@/components/guides/GuideCard";
import { guides } from "@/data/guides";
import { Icon } from "@/components/icons/Icon";

export function HelpfulGuides() {
  return (
    <Section ariaLabelledby="helpful-guides-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="helpful-guides-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Helpful Guides
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Clear, practical explanations for common tasks.
          </p>
        </div>
        <Link
          href="/guides"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          All guides
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </Section>
  );
}
