import { FaqList } from "@/components/content/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import { faqJsonLd } from "@/lib/seo";
import { siteConfig, siteContact } from "@/lib/site";

/** Direct answers about the site itself (English homepage only). */
export function getHomeFaqs(now = new Date()) {
  const guideCount = getPublicGuides(now).length;
  return [
    {
      question: `What is ${siteConfig.name}?`,
      answer: `${siteConfig.name} is a free website with ${tools.length} online tools in ${categories.length} categories: calculators, text tools, developer tools, image and PDF tools, SEO utilities, and AI tools. It also has ${guideCount} step-by-step guides that explain the method behind the tools.`,
    },
    {
      question: `Is ${siteConfig.name} free to use?`,
      answer:
        "Yes. Every tool is free. There is no signup, no account, and no payment system.",
    },
    {
      question: "Are my files and text uploaded?",
      answer:
        "Most tools run in your browser, so files and pasted text stay on your device. The exceptions are the AI buttons on AI tools, which send the text you enter to Google's Gemini model, and the Open Graph preview, which sends the URL you enter to this site. Each tool page says how it handles input.",
    },
    {
      question: "Do the tools work on a phone?",
      answer:
        "Yes. The pages are built for phone browsers as well as desktop. Large files can be slower on a phone because the work happens on the device.",
    },
    {
      question: "Which languages is the site available in?",
      answer:
        "The site is available in English and 14 other languages, including Spanish, Portuguese, French, German, Arabic, Urdu, Hindi, Japanese, and Korean. Guides are written in English.",
    },
    {
      question: "How do I report a wrong result or suggest a tool?",
      answer: `Email ${siteContact.email} or use the contact page. Include the tool name, what you entered, and what you expected to see.`,
    },
  ];
}

export function HomeFaq() {
  const faqs = getHomeFaqs();
  return (
    <Section className="!pt-0">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="max-w-3xl">
        <FaqList items={faqs} heading="Frequently asked questions" />
      </div>
    </Section>
  );
}
