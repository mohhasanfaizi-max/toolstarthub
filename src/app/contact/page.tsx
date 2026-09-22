import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPublicContactEmail, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

export default function ContactPage() {
  const email = getPublicContactEmail();

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />
      <PageHeader
        className="mt-6"
        title="Contact"
        description={
          email
            ? "Use the mailbox below for questions about the website or a specific tool."
            : "A public contact method will appear here when a mailbox is in use."
        }
      />
      <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-card p-6">
        {email ? (
          <p className="text-sm leading-6 text-muted-foreground">
            Email{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-accent hover:underline"
            >
              {email}
            </a>
            . There is no contact form and messages are not stored on this
            website.
          </p>
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">
            There is no contact form, and no email address is listed until a
            mailbox is actually configured. This page does not collect or
            store messages.
          </p>
        )}
      </div>
    </Container>
  );
}
