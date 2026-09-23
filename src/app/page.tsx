import { Benefits } from "@/components/home/Benefits";
import { Categories } from "@/components/home/Categories";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HelpfulGuides } from "@/components/home/HelpfulGuides";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularTools } from "@/components/home/PopularTools";
import { Pricing } from "@/components/home/Pricing";
import { ToolCatalog } from "@/components/home/ToolCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <PopularTools />
      <ToolCatalog />
      <Categories />
      <Benefits />
      <HowItWorks />
      <HelpfulGuides />
      <Pricing />
      <FinalCTA />
    </>
  );
}
