import type { PrefixedLocale } from "../config.ts";

/** Short card name and description. Full page text stays English and noindex. */
export const urduNewsNames: Record<PrefixedLocale, readonly [string, string]> = {
  ar: ["مترجم الأخبار الأردية", "يلصق خبراً بالأردية ويعرض مسودات إنجليزية مختصرة ومتوسطة وكاملة مع مراجعة للوقائع. المحرر يراجع المسودة قبل النشر."],
  de: ["Urdu-Nachrichtenübersetzer", "Fügt eine Urdu-Meldung ein und erstellt kurze, mittlere und vollständige englische Entwürfe mit einer Faktenprüfung. Eine Redaktion prüft den Entwurf vor der Veröffentlichung."],
  es: ["Traductor de noticias en urdu", "Pega una noticia en urdu y obtiene borradores en inglés breves, medios y completos, con una revisión de datos. Un editor revisa el borrador antes de publicarlo."],
  fr: ["Traducteur d’actualités en ourdou", "Collez une dépêche en ourdou pour obtenir des versions anglaises brève, moyenne et complète, avec un contrôle des faits. Un éditeur relit le brouillon avant publication."],
  hi: ["उर्दू समाचार अनुवादक", "उर्दू समाचार चिपकाएँ और संक्षिप्त, मध्यम और पूर्ण अंग्रेज़ी ड्राफ्ट पाएँ, तथ्य जाँच के साथ। प्रकाशन से पहले संपादक ड्राफ्ट देखता है।"],
  id: ["Penerjemah berita Urdu", "Tempel berita Urdu dan dapatkan draf bahasa Inggris singkat, sedang, dan lengkap, dengan pemeriksaan fakta. Editor meninjau draf sebelum diterbitkan."],
  it: ["Traduttore di notizie in urdu", "Incolla una notizia in urdu e ottieni bozze inglesi brevi, medie e complete, con un controllo dei fatti. Un editor rivede la bozza prima della pubblicazione."],
  ja: ["ウルドゥー語ニュース翻訳", "ウルドゥー語の記事を貼り付けると、短い・標準・全文の英語下書きと事実確認が返ります。公開前に編集者が確認します。"],
  ko: ["우르두어 뉴스 번역", "우르두어 기사를 붙여 넣으면 짧은 글, 중간 글, 전문 영어 초안과 사실 확인이 나옵니다. 발행 전에 편집자가 검토합니다."],
  nl: ["Urdu-nieuwsvertaler", "Plak een Urdu-bericht en krijg een korte, middellange en volledige Engelse versie, met een feitencontrole. Een redacteur beoordeelt de versie voor publicatie."],
  "pt-br": ["Tradutor de notícias em urdu", "Cole uma notícia em urdu e receba rascunhos em inglês curtos, médios e completos, com checagem de fatos. Um editor revisa o rascunho antes da publicação."],
  ru: ["Переводчик новостей с урду", "Вставьте новость на урду и получите краткую, среднюю и полную английские версии с проверкой фактов. Редактор проверяет черновик перед публикацией."],
  tr: ["Urduca haber çevirmeni", "Urduca bir haberi yapıştırın; kısa, orta ve tam İngilizce taslaklar ve bir olgu kontrolü gelsin. Editör, yayımlamadan önce taslağı inceler."],
  ur: ["اردو خبر مترجم", "اردو خبر چسپاں کریں اور مختصر، درمیانی اور مکمل انگریزی مسودے حاصل کریں، حقائق کی جانچ کے ساتھ۔ اشاعت سے پہلے مدیر مسودہ دیکھتا ہے۔"],
};
