import { HomeHeading } from "@/components/home/HomeHeading";
import { ToolCard } from "@/components/tools/ToolCard";
import { Section } from "@/components/ui/Section";
import { getNewTools } from "@/data/tools";

export function RecentlyAdded() {
  const tools = getNewTools();

  return (
    <Section
      className="!bg-muted !py-16 sm:!py-20 lg:!py-24"
      ariaLabelledby="recently-added-heading"
    >
      <HomeHeading
        id="recently-added-heading"
        title="Recently Added"
        description="Newer tools in the collection, ready to use the same way as the rest."
        href="/tools"
        linkLabel="View all tools"
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, index) => (
          <div
            key={tool.slug}
            className="home-enter h-full"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ToolCard tool={tool} showAction className="home-card h-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
