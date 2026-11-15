import { FaqList } from "@/components/content/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import { faqJsonLd } from "@/lib/seo";
import { siteConfig, siteContact } from "@/lib/site";

/** Direct answers about the site itself. */
export function getHomeFaqs(now = new Date(), locale: Locale = "en") {
  const guideCount = getPublicGuides(now).length;
  if (locale === "es") {
    return [
      {
        question: `¿Qué es ${siteConfig.name}?`,
        answer: `${siteConfig.name} es un sitio web gratuito con ${tools.length} herramientas online en ${categories.length} categorías: calculadoras, herramientas de texto, para desarrolladores, de imagen y PDF, utilidades SEO y herramientas de IA. También incluye ${guideCount} guías paso a paso, redactadas en inglés, que explican el método detrás de las herramientas.`,
      },
      {
        question: `¿${siteConfig.name} es gratis?`,
        answer:
          "Sí. Todas las herramientas son gratuitas. No hay registro, ni cuenta, ni sistema de pago.",
      },
      {
        question: "¿Se suben mis archivos o mi texto?",
        answer:
          "La mayoría de las herramientas funcionan en tu navegador, así que los archivos y el texto pegado se quedan en tu dispositivo. Las excepciones son los botones de IA, que envían el texto que escribes al modelo Gemini de Google, y la vista previa de Open Graph, que envía la URL a este sitio. Cada página indica cómo trata los datos.",
      },
      {
        question: "¿Las herramientas funcionan en el móvil?",
        answer:
          "Sí. Las páginas están pensadas para el navegador del teléfono y para el ordenador. Los archivos grandes pueden ir más lentos en un móvil porque el trabajo se hace en el dispositivo.",
      },
      {
        question: "¿En qué idiomas está disponible el sitio?",
        answer:
          "El sitio está disponible en inglés y en otras 14 lenguas, entre ellas el español, el portugués, el francés, el alemán, el árabe, el urdu, el hindi, el japonés y el coreano. Las guías están redactadas en inglés.",
      },
      {
        question: "¿Cómo informo de un resultado incorrecto o propongo una herramienta?",
        answer: `Escribe a ${siteContact.email} o usa la página de contacto. Incluye el nombre de la herramienta, lo que introdujiste y lo que esperabas ver.`,
      },
    ];
  }
  if (locale === "ar") {
    return [
      {
        question: `ما هو ${siteConfig.name}؟`,
        answer: `${siteConfig.name} موقع مجاني يضم ${tools.length} أداة على الإنترنت في ${categories.length} فئات: الحاسبات، وأدوات النصوص، وأدوات المطورين، وأدوات الصور وPDF، وأدوات السيو المساعدة، وأدوات الذكاء الاصطناعي. ويضم أيضًا ${guideCount} دليلًا خطوة بخطوة، مكتوبة بالإنجليزية، تشرح المنهج وراء الأدوات.`,
      },
      {
        question: `هل ${siteConfig.name} مجاني؟`,
        answer:
          "نعم. كل الأدوات مجانية. لا تسجيل ولا حساب ولا نظام دفع.",
      },
      {
        question: "هل تُرفع ملفاتي أو نصي؟",
        answer:
          "تعمل معظم الأدوات في متصفحك، لذا تبقى الملفات والنص الملصق على جهازك. الاستثناءات هي أزرار الذكاء الاصطناعي التي ترسل النص الذي تدخله إلى نموذج Gemini من Google، ومعاينة Open Graph التي ترسل الرابط إلى هذا الموقع. وتوضح كل صفحة كيف تعامل البيانات.",
      },
      {
        question: "هل تعمل الأدوات على الهاتف؟",
        answer:
          "نعم. الصفحات مصممة لمتصفح الهاتف وللحاسوب. وقد تكون الملفات الكبيرة أبطأ على الهاتف لأن العمل يتم على الجهاز.",
      },
      {
        question: "بأي لغات يتوفر الموقع؟",
        answer:
          "الموقع متوفر بالإنجليزية و14 لغة أخرى، منها الإسبانية والبرتغالية والفرنسية والألمانية والعربية والأردية والهندية واليابانية والكورية. والأدلة مكتوبة بالإنجليزية.",
      },
      {
        question: "كيف أبلّغ عن نتيجة خاطئة أو أقترح أداة؟",
        answer: `راسل ${siteContact.email} أو استخدم صفحة الاتصال. اذكر اسم الأداة وما أدخلته وما كنت تتوقع رؤيته.`,
      },
    ];
  }
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

export function HomeFaq({ locale = "en" }: { locale?: Locale }) {
  const faqs = getHomeFaqs(new Date(), locale);
  return (
    <Section className="!pt-0">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="max-w-3xl">
        <FaqList
          items={faqs}
          heading={locale === "es" ? "Preguntas frecuentes" : locale === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
        />
      </div>
    </Section>
  );
}
