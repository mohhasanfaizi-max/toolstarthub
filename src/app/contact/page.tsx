import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/content/FaqList";
import { Icon } from "@/components/icons/Icon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { IconName } from "@/data/types";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";
import { getPublicContactEmail, siteConfig, siteContact } from "@/lib/site";

const pageTitle = "Contact Tools Star Hub | Online Tools Support";
const pageDescription =
  "Contact Tools Star Hub for questions, feedback, tool issues, and suggestions. Reach us by email or phone.";

const relatedPages = [
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

const helpTopics: Array<{ title: string; text: string; icon: IconName }> = [
  {
    title: "Tool problem",
    icon: "bolt",
    text: "If a tool is not working correctly, tell us which tool and what happened.",
  },
  {
    title: "Suggestion",
    icon: "star",
    text: "Have an idea for a useful online tool? Send us your suggestion.",
  },
  {
    title: "Feedback",
    icon: "text",
    text: "Tell us how we can improve Tools Star Hub.",
  },
  {
    title: "General question",
    icon: "user",
    text: "For general questions, contact us by email or phone.",
  },
];

export const metadata: Metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/contact",
  }),
  title: { absolute: pageTitle },
};

export default function ContactPage() {
  const email = getPublicContactEmail() ?? siteContact.email;
  const contactFaqs = [
    {
      question: "How can I contact Tools Star Hub?",
      answer: `Email ${email} or call or WhatsApp ${siteContact.phoneDisplay}. You can send a tool problem, a suggestion, feedback, or a general question.`,
    },
    {
      question: "What should I include when reporting a tool problem?",
      answer:
        "Name the tool, describe what you did, and say what you expected instead. A short example of the input helps.",
    },
    {
      question: "Can I suggest a new tool?",
      answer: "Yes. Send the task you want the tool to handle by email or phone.",
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd data={faqJsonLd(contactFaqs)} />

      <section className="border-b border-border bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_72%)] dark:bg-[linear-gradient(180deg,#121a2b_0%,#0b1220_78%)]">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-medium text-accent">{siteConfig.footerTagline}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Contact Tools Star Hub
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Have a question, found a problem, or have a suggestion for a new tool? We&apos;d love to hear from you.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-foreground">
              You can contact {siteConfig.name} by email at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {email}
              </a>{" "}
              or by phone at{" "}
              <a
                href={`tel:${siteContact.phoneE164}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {siteContact.phoneDisplay}
              </a>
              . Send a tool problem, a suggestion, feedback, or a general question.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-8 sm:py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name="phone" />
            </span>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              Phone / WhatsApp
            </h2>
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="mt-3 block text-xl font-semibold tracking-tight text-foreground hover:text-accent sm:text-2xl"
            >
              {siteContact.phoneDisplay}
            </a>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Call or send a WhatsApp message.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Button href={`tel:${siteContact.phoneE164}`} className="w-full sm:w-auto">
                Call Us
              </Button>
              <Button
                href={siteContact.whatsappUrl}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name="mail" />
            </span>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              Email
            </h2>
            <a
              href={`mailto:${email}`}
              className="mt-3 block break-all text-lg font-semibold text-foreground hover:text-accent sm:text-xl"
            >
              {email}
            </a>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Email is the best place for a tool problem, a suggestion, or a longer note.
            </p>
            <div className="mt-5">
              <Button href={`mailto:${email}`} className="w-full sm:w-auto">
                Email Us
              </Button>
            </div>
          </article>
        </div>

        <section className="mt-12" aria-labelledby="help-heading">
          <h2
            id="help-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            How can we help?
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {helpTopics.map((topic) => (
              <li
                key={topic.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={topic.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {topic.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-border bg-muted p-5 sm:p-6" aria-labelledby="privacy-heading">
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-accent">
              <Icon name="shield" />
            </span>
            <div>
              <h2
                id="privacy-heading"
                className="text-xl font-semibold tracking-tight text-foreground"
              >
                Privacy-conscious tools
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Most {siteConfig.name} tools process files and data directly in your browser. We aim to keep your tools simple, fast, and privacy-conscious. Read the{" "}
                <Link href="/privacy" className="font-medium text-accent hover:underline">
                  privacy policy
                </Link>{" "}
                for the current details.
              </p>
            </div>
          </div>
        </section>

        <FaqList items={contactFaqs} heading="Contact questions" />

        <nav className="mt-12" aria-label="Related pages">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            More from {siteConfig.name}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {relatedPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </>
  );
}
