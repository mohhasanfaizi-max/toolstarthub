import { GuideCard } from "@/components/guides/GuideCard";
import type { Guide } from "@/data/types";

type RelatedGuidesProps = {
  guides: Guide[];
};

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-guides-heading" className="mt-14">
      <h2
        id="related-guides-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Helpful guides
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}
