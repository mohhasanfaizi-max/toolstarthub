import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles local processing, AI requests to Google's Gemini model, browser storage, and optional Google Analytics.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />
      <PageHeader
        className="mt-6"
        title="Privacy Policy"
        description="A current description of how this website handles information."
      />
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>
          {siteConfig.name} has no user accounts, no payment system, no
          advertising, and no database of personal profiles. You can browse and
          use tools without creating an account. Google Analytics 4 counts
          visits and pages, but it only loads after you press Accept in the
          cookie banner. Until then, and if you press Decline, the analytics
          script is not loaded and Google Consent Mode stays set to denied.
          When analytics is on, Google may receive pages viewed and basic
          device data. Passwords, uploaded files, PDF contents, private text,
          and QR payloads are not sent to analytics. You can change your
          choice at any time with the Cookie settings link in the footer.
        </p>
        <p>
          Most tools run in your browser. Files you choose for image or PDF
          tools, and text you paste into those tools, are processed on this
          device and are not uploaded to our server. When you press an AI
          button on an AI tool, the text you enter is sent through
          ToolStarHub to Google&apos;s Gemini model so it can generate the
          result. That text is not saved on this site. On the free tier, Google
          may use it to improve its products. The Open Graph preview
          sends the page URL you enter to this site. The site requests that
          public page, reads the title and share tags, and does not save the
          page. We do not put passwords,
          uploaded files, PDF contents, private text, or QR payloads into page
          URLs or local storage.
        </p>
        <p>
          This site may use storage in your browser for a theme preference
          (<code className="text-foreground">tsh-theme</code>), favorite tool
          names (<code className="text-foreground">tsh-favorites</code>), and
          recently opened tool names (
          <code className="text-foreground">tsh-recents</code>), and your
          analytics cookie choice (
          <code className="text-foreground">tsh-consent</code>). Those values
          stay on your device and contain only tool identifiers or settings, not your work.
          If browser storage is blocked, tools still work; favorites, recents,
          the saved theme, and the cookie choice simply will not persist.
        </p>
        <p>
          Hosting providers and the browser you use may create technical logs
          such as IP addresses, timestamps, and requested URLs as part of
          normal website delivery. This policy does not claim that nothing is
          ever recorded by infrastructure. It will be updated if advertising,
          accounts, or other data collection are added.
        </p>
      </div>
    </Container>
  );
}
