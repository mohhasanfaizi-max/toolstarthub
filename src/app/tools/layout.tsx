import { SiteDocument } from "@/components/layout/SiteDocument";

// English section: renders the html document (the root layout passes through).
export default function EnglishSectionLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
