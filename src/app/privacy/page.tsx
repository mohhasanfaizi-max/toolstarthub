import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const linkClass = "font-medium text-accent hover:underline";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles browser tools, Google Analytics, and advertising cookies from Google AdSense and other partners.`,
  path: "/privacy",
  shareImage: { route: "/privacy", alt: `Privacy Policy — ${siteConfig.name}` },
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
          Last updated: <time dateTime="2026-11-07">7 November 2026</time>.
        </p>
        <p>
          {siteConfig.name} has no user accounts, no payment system, and no
          database of personal profiles. You can browse and use tools without
          creating an account.
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
          uploaded files, PDF contents, private text, or QR payloads into the address of the page you visit. The one exception is Alma&apos;s packaged-food search, described below. Alma explicitly saves the
          nutrition information described below in local storage.
        </p>

        <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
          Alma nutrition data: saved locally, shared only when you use online features
        </h2>
        <p>
          Alma saves one localStorage record, <code>toolstarhub-alma-v1</code>,
          in this browser. It contains your saved calorie and macro targets,
          BMR and TDEE results, custom foods and their nutrition values,
          dated food entries (including portions and available nutrients), water logs,
          dated meal plans and their ingredients, and grocery items with checked status.
          There is no Alma account or diary database in the application code.
          The diary is not automatically uploaded as a whole. Clear this site&apos;s
          browser storage to remove the saved record; doing so also removes your
          saved plans and targets. Calculator body inputs and coach conversation
          history are not written to this record by the current interface.
        </p>
        <p>
          Asking the coach, including choosing a suggested question, always sends
          a request to <code>/api/alma/coach</code> on this site, even when a
          rule-based reply is used. The request contains <code>question</code> and
          a <code>context</code> object for the selected diary date: <code>calorieTarget</code>,
          <code>consumedCalories</code>, <code>protein</code>, <code>carbs</code>,
          <code>fat</code>, <code>proteinTarget</code>, <code>carbTarget</code>,
          <code>fatTarget</code>, <code>bmr</code>, <code>tdee</code>,
          <code>mealCount</code>, <code>waterMl</code> and <code>topFoods</code>
          (the logged food names). Unset optional values are omitted. This is
          nutrition information, not just an anonymous question; avoid putting
          sensitive personal or medical details in a question or food name.
        </p>
        <p>
          When Gemini is configured, the server sends your question and a
          plain-language summary to Google&apos;s Gemini service. The summary
          includes consumed calories and a saved calorie target when present;
          protein and its target, carbohydrate and fat totals when available;
          BMR and TDEE when both are present; the food-entry count; positive
          water intake; and up to the first eight food names. The server accepts
          at most twelve names before building that summary. Carb and fat targets
          are received by this site but are not currently included in the Gemini
          summary. The selected date, full diary, meal plans, grocery list and
          conversation history are not included automatically. Text you type in
          the question is included, so it can disclose more than these fields.
          If Gemini is not configured or its request fails, the server uses a
          labelled rule-based reply; a failed AI attempt may already have sent data.
        </p>
        <p>
          Packaged-food searches are separate: only when you press the search
          button or Enter with at least two characters typed (not as you type),
          the search terms go through <code>/api/alma/foods</code>
          to Open Food Facts, not to Gemini. The search terms are sent in that
          background request&apos;s URL (<code>/api/alma/foods?q=…</code>), so they may
          be recorded in our hosting provider&apos;s standard request logs; don&apos;t
          type personal information into the search. If you open the optional review of
          old packaged-food entries, the stored barcode of each entry being reviewed
          is sent through <code>/api/alma/product</code> to Open Food Facts to read
          that product&apos;s serving size; nothing else from your diary is sent, and
          a backup of your diary is kept only in this browser. Sample-food lookup and custom-food
          entry do not require that search to succeed. The coach route does not
          write questions or diary context to an application database. This is
          not a guarantee about hosting logs or Google&apos;s retention or data
          use. Provider treatment depends on the account tier and applicable
          terms; check those terms before sharing sensitive information.
        </p>

        <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
          Advertising and cookies
        </h2>
        <p>
          {siteConfig.name} may display advertisements served by Google
          AdSense and other third-party advertising partners.
        </p>
        <p>
          Third-party vendors, including Google, use cookies to serve ads
          based on your prior visits to this website or other websites.
          Google&apos;s advertising cookie is the DoubleClick cookie. Google
          and its partners use it to serve ads based on visits to this site
          and other sites.
        </p>
        <p>
          You can turn off personalized advertising in{" "}
          <a href="https://adssettings.google.com" className={linkClass}>
            Google&apos;s Ads Settings
          </a>{" "}
          (<span className="break-all">https://adssettings.google.com</span>
          ). You can opt out of some other companies&apos; advertising cookies
          at{" "}
          <a href="https://www.aboutads.info" className={linkClass}>
            https://www.aboutads.info
          </a>
          . How Google uses advertising cookies is explained at{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className={linkClass}
          >
            https://policies.google.com/technologies/ads
          </a>
          .
        </p>
        <p>
          Visitors in the European Economic Area and the United Kingdom are
          asked for consent before non-essential cookies are stored. The same
          cookie banner is shown to every visitor. It asks before Google
          Analytics loads. Advertising cookies, including the DoubleClick
          cookie, are not stored unless you consent. Pressing Accept turns on
          analytics measurement only. It does not turn advertising cookies on.
          You can press Decline, and you can change your choice at any time
          with the Cookie settings link in the footer.
        </p>
        <p>
          Google Analytics 4 counts visits and pages only after you press
          Accept. Until then, and if you press Decline, the analytics script
          is not loaded. Google Consent Mode stays denied for analytics
          storage and for advertising storage, including ad user data and ad
          personalization. When analytics is on, Google may receive the pages
          you view and basic device data. Passwords, uploaded files, PDF
          contents, private text, and QR payloads are not sent to analytics.
          We do not sell your personal information.
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
          ever recorded by infrastructure. It will be updated if accounts or
          other data collection are added.
        </p>
      </div>
    </Container>
  );
}
