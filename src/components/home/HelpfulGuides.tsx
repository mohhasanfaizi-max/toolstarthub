import { HomeHeading } from "@/components/home/HomeHeading";
import { GuideCard } from "@/components/guides/GuideCard";
import { Section } from "@/components/ui/Section";
import { guides } from "@/data/guides";

export function HelpfulGuides() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <Section
      className="!py-16 sm:!py-20 lg:!py-24"
      ariaLabelledby="helpful-guides-heading"
    >
      <HomeHeading
        id="helpful-guides-heading"
        title="Helpful Guides"
        description="Short explanations for tasks the tools on this site already handle."
        href="/guides"
        linkLabel="All guides"
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGuides.map((guide, index) => (
          <div
            key={guide.slug}
            className="home-enter h-full"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <GuideCard guide={guide} className="home-card home-pad h-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
