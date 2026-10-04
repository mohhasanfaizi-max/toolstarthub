import { SiteDocument } from "@/components/layout/SiteDocument";
import { HomeView, homeMetadata } from "@/views/HomeView";

export const metadata = homeMetadata("en");

// The root layout only passes children through (see app/layout.tsx), so the
// English homepage renders its own document.
export default function Home() {
  return (
    <SiteDocument locale="en">
      <HomeView locale="en" />
    </SiteDocument>
  );
}
