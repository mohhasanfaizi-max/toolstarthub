import type { CategorySlug } from "./types.ts";

/**
 * English search-result descriptions for listing pages whose on-page summary
 * is too short for a meta description. Other languages keep their translated
 * descriptions.
 */
export const categoryMetaDescriptions: Record<CategorySlug, string> = {
  calculators:
    "Free online calculators for percentages, discounts, age, dates, loans, mortgages, savings, pay, GPA, area, and unit conversions. No signup needed.",
  "text-tools":
    "Free online text tools: count words and characters, change case, compare text, remove duplicates and line breaks, sort lines, and convert numbers.",
  "developer-tools":
    "Free developer tools in your browser: format JSON, encode Base64 and URLs, minify HTML, CSS and JS, test regex, decode JWTs, and build cron expressions.",
  "image-tools":
    "Free image and PDF tools that run in your browser: compress, resize, crop, and convert images, and merge, split, compress, or convert PDFs without uploading.",
  "seo-utilities":
    "Free SEO, privacy, and utility tools: build UTM links, slugs, and meta tags, make or scan QR codes, generate secure passwords, and run a CPS click test.",
  "ai-tools":
    "Free AI writing tools: build prompts for text, images, and video, review writing patterns, and shorten or rewrite a draft, in your browser or with Gemini.",
};

/** English description for the All Tools page. */
export const toolsIndexMetaDescription =
  "Browse every free online tool on Tools Star Hub: calculators, text and developer tools, image and PDF tools, SEO and privacy utilities, and AI tools. No signup.";

/** Spanish search-result descriptions for category pages once /es is indexable. */
export const categoryMetaDescriptionsEs: Record<CategorySlug, string> = {
  calculators:
    "Calculadoras online gratuitas para porcentajes, descuentos, edad, fechas, préstamos, hipotecas, ahorro, sueldo, GPA, superficie y conversiones. Sin registro.",
  "text-tools":
    "Herramientas de texto online gratuitas: cuenta palabras y caracteres, cambia mayúsculas, compara textos, quita duplicados y saltos de línea y convierte números.",
  "developer-tools":
    "Herramientas gratis para desarrolladores: formatea JSON, codifica Base64 y URL, minifica HTML, CSS y JS, prueba regex, decodifica JWT y crea expresiones cron.",
  "image-tools":
    "Herramientas de imagen y PDF en tu navegador: comprime, redimensiona, recorta y convierte imágenes, y une, divide o convierte PDF sin subir archivos.",
  "seo-utilities":
    "Utilidades SEO gratuitas: crea enlaces UTM, slugs y metaetiquetas, genera o escanea códigos QR, crea contraseñas seguras y mide la velocidad de clic (CPS).",
  "ai-tools":
    "Herramientas de escritura con IA: crea prompts para texto, imagen y vídeo, analiza la escritura y acorta o reescribe un borrador, en el navegador o con Gemini.",
};

/** Arabic search-result descriptions for category pages. /ar stays noindex until later stages. */
export const categoryMetaDescriptionsAr: Record<CategorySlug, string> = {
  calculators:
    "حاسبات مجانية على الإنترنت للنسب والخصومات والعمر والتواريخ والقروض والرهن والادخار والأجر والمعدل التراكمي والمساحة والتحويلات. بدون تسجيل.",
  "text-tools":
    "أدوات نص مجانية على الإنترنت: عدّ الكلمات والأحرف، وتغيير حالة الأحرف، ومقارنة النصوص، وحذف التكرار وفواصل الأسطر، وتحويل الأرقام.",
  "developer-tools":
    "أدوات مطورين مجانية في متصفحك: تنسيق JSON، وترميز Base64 والروابط، وتصغير HTML وCSS وJS، واختبار التعبير النمطي، وفك JWT، وبناء تعابير cron.",
  "image-tools":
    "أدوات صور وPDF تعمل في متصفحك: اضغط الصور وغيّر حجمها واقطعها وحوّلها، وادمج ملفات PDF أو قسّمها أو اضغطها أو حوّلها دون رفعها.",
  "seo-utilities":
    "أدوات سيو وخصوصية مجانية: أنشئ روابط UTM والشرائح والوسوم الوصفية، وولّد رموز QR أو امسحها، وأنشئ كلمات مرور آمنة، واختبر سرعة النقر (CPS).",
  "ai-tools":
    "أدوات كتابة بالذكاء الاصطناعي: أنشئ أوامر للنص والصورة والفيديو، وراجع أنماط الكتابة، واختصر مسودة أو أعد صياغتها، في المتصفح أو مع Gemini.",
};
