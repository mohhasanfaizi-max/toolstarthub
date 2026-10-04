import { HomeHeading } from "@/components/home/HomeHeading";
import { HomeToolBrowser } from "@/components/home/HomeToolBrowser";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/config";
import { getMessages, getTools } from "@/i18n/server";

export function ToolCatalog({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  return (
    <Section
      id="tools"
      className="!bg-muted !py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="all-tools-heading"
    >
      <HomeHeading
        id="all-tools-heading"
        title={t.catalogTitle}
        description={t.catalogDescription}
      />
      <div className="mt-8">
        <HomeToolBrowser tools={getTools(locale)} />
      </div>
    </Section>
  );
}
