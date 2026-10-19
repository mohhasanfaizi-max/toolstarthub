import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import { siteConfig, siteContact } from "@/lib/site";

const linkClass = "font-medium text-accent hover:underline";

/**
 * English-only introduction, last section above the footer. Static server markup.
 * Other locales keep their translated hero line and do not get this block.
 */
export function HomeIntro() {
  const toolCount = tools.filter((tool) => tool.status === "available").length;
  const guideCount = getPublicGuides(new Date()).length;

  return (
    <section
      aria-labelledby="home-about-heading"
      className="border-b border-border"
    >
      <Container className="py-10 sm:py-12">
        <div className="max-w-3xl">
          <h2
            id="home-about-heading"
            className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            What {siteConfig.name} is
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              {siteConfig.name} is an independent website run by Ali Ahmed. It
              is a free collection of {toolCount} online tools in{" "}
              {categories.length} categories, plus {guideCount} short guides
              that explain the method behind a task. You can open a calculator,
              a text tool, a developer utility, an image or PDF tool, a link
              or QR tool, or an AI writing helper, use it, and leave. There is
              no account and no paid plan.
            </p>
            <p>
              Most tools run in the browser. A PDF, an image, or text you paste
              stays on this device and is not uploaded to our server. Two
              exceptions are labeled on their pages. The AI buttons send the
              text you submit to Google&apos;s Gemini model and return text.
              They do not return an image or a video file. The Open Graph
              preview sends the URL you type to this site, which reads the
              public page&apos;s title and share tags and does not save that
              page.
            </p>
            <p>
              Each tool page states its own limits: a size cap, a format it
              rejects, or a result that is only an estimate, such as a loan
              payment or a reading time. Guides sit next to the tools and walk
              through the same arithmetic or file steps in plain language.
              Questions can go to{" "}
              <a href={`mailto:${siteContact.email}`} className={linkClass}>
                {siteContact.email}
              </a>{" "}
              or the{" "}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
              . The{" "}
              <Link href="/about" className={linkClass}>
                about page
              </Link>{" "}
              says who runs the site and how input is handled.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
