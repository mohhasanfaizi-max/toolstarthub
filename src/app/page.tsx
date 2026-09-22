import { Benefits } from "@/components/home/Benefits";
import { Categories } from "@/components/home/Categories";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HelpfulGuides } from "@/components/home/HelpfulGuides";
import { Hero } from "@/components/home/Hero";
import { PopularTools } from "@/components/home/PopularTools";
import { RecentlyAdded } from "@/components/home/RecentlyAdded";
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
      <Categories />
      <Benefits />
      <RecentlyAdded />
      <HelpfulGuides />
      <FinalCTA />
    </>
  );
}
