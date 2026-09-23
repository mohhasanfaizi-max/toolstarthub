import { HomeHeading } from "@/components/home/HomeHeading";
import { HomeToolBrowser } from "@/components/home/HomeToolBrowser";
import { Section } from "@/components/ui/Section";
import { tools } from "@/data/tools";

export function ToolCatalog() {
  return (
    <Section
      id="tools"
      className="!bg-muted !py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="all-tools-heading"
    >
      <HomeHeading
        id="all-tools-heading"
        title="Everything you need, in one place."
        description="Filter the tools that are already on this site. Each one opens in the browser."
      />
      <div className="mt-8">
        <HomeToolBrowser tools={tools} />
      </div>
    </Section>
  );
}
