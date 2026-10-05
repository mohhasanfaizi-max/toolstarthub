import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Inicio",
      allTools: "Todas las herramientas",
      categories: "Categorías",
      guides: "Guías",
      popularTools: "Herramientas populares",
      about: "Acerca de",
      howItWorks: "Cómo funciona",
      contact: "Contacto",
      exploreTools: "Explorar herramientas",
      mobileNav: "Móvil",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      openSearch: "Abrir búsqueda",
      closeSearch: "Cerrar búsqueda",
    },
    theme: {
      toLight: "Cambiar al tema claro",
      toDark: "Cambiar al tema oscuro",
    },
    language: {
      label: "Idioma",
      current: "Idioma: {name}",
      englishOnly: "Solo en inglés",
    },
    search: {
      placeholder: "Buscar una herramienta...",
      label: "Buscar una herramienta",
      clear: "Borrar búsqueda",
      suggestions: "Sugerencias de búsqueda",
      noResults: "No se encontraron herramientas",
    },
    consent: {
      title: "Cookies de analítica",
      body: "Usamos Google Analytics para contar las visitas, pero solo si lo aceptas. Las herramientas funcionan igual en ambos casos. Consulta la {link}.",
      privacyLink: "política de privacidad",
      accept: "Aceptar",
      decline: "Rechazar",
      settings: "Configuración de cookies",
    },
    favorites: {
      add: "Añadir {name} a favoritos",
      remove: "Quitar {name} de favoritos",
    },
    card: { popular: "Popular", new: "Nuevo", openTool: "Abrir herramienta" },
    categoryNames: {
      calculators: "Calculadoras",
      "text-tools": "Herramientas de texto",
      "developer-tools": "Herramientas para desarrolladores",
      "image-tools": "Herramientas de imagen",
      "seo-utilities": "SEO y utilidades",
      "ai-tools": "Herramientas de IA",
    },
    home: {
      filterAria: "Filtrar herramientas",
      filters: {
        all: "Todas",
        pdf: "PDF",
        images: "Imágenes",
        "text-tools": "Texto",
        "developer-tools": "Desarrollo",
        calculators: "Calculadoras",
        "seo-utilities": "Utilidades",
        "ai-tools": "IA",
      },
      noToolsInGroup: "No hay herramientas en este grupo.",
    },
    catalog: {
      filterAria: "Filtrar herramientas",
      filters: {
        all: "Todas",
        calculators: "Calculadoras",
        "image-tools": "Imagen",
        pdf: "PDF",
        "text-tools": "Texto",
        "developer-tools": "Desarrollo",
        color: "Color",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "IA",
      },
      favorites: "Favoritos",
      sort: "Ordenar",
      sortName: "Nombre",
      sortNewest: "Más recientes",
      sortCategory: "Categoría",
      recentlyUsed: "Usadas recientemente",
      recentEmpty: "Aquí aparecerán las herramientas que uses.",
      viewAll: "Ver todo",
      searchResults: "Resultados de búsqueda",
      allTools: "Todas las herramientas",
      tools: "Herramientas",
      noFavorites: "Todavía no has marcado ninguna herramienta como favorita.",
      noToolsFound: "No se encontraron herramientas",
      noToolsCategory: "Todavía no hay herramientas en esta categoría.",
      countFavorites: { one: "{count} favorito", other: "{count} favoritos" },
      countResults: {
        one: "{count} resultado para «{query}»",
        other: "{count} resultados para «{query}»",
      },
      countOf: "{count} de {total} herramientas",
    },
    tool: {
      loading: "Cargando herramienta…",
      copy: "Copiar",
      copied: "Copiado",
      copyCss: "Copiar CSS",
      copyLink: "Copiar enlace",
      linkCopied: "Enlace copiado",
      download: "Descargar",
      dropPrompt: "Arrastra y suelta una imagen aquí o elige un archivo.",
      selected: "Seleccionado: {name}",
      copySuccess: "{what} copiado al portapapeles.",
      copyFailed:
        "No se pudo copiar automáticamente. El contenido ({what}) está seleccionado: pulsa Ctrl+C (o Cmd+C en Mac) para copiarlo.",
    },
  },
  meta: {
    tagline: "Herramientas online gratuitas que simplemente funcionan",
    description:
      "Herramientas online rápidas, gratuitas y fáciles de usar para cálculos, texto, desarrollo, imágenes, SEO y tareas cotidianas. Sin registro.",
    toolsTitle: "Todas las herramientas",
    toolsDescription:
      "Explora herramientas online gratuitas para cálculos, texto, desarrollo, imágenes, SEO y tareas cotidianas.",
    categoriesTitle: "Categorías",
    categoriesDescription:
      "Explora Tools Star Hub por categoría: calculadoras, herramientas de texto, para desarrolladores, de imagen y PDF, utilidades SEO y herramientas de IA.",
    categoryTitle: "{name}: herramientas online gratuitas",
    categoryShareAlt: "{name}: herramientas online gratuitas",
    toolShareAlt: "{name}: herramienta online gratuita",
  },
  header: {
    primaryNav: "Navegación principal",
    logoHome: "Inicio de {name}",
    skip: "Saltar al contenido principal",
  },
  breadcrumbs: {
    label: "Ruta de navegación",
    home: "Inicio",
    tools: "Herramientas",
    categories: "Categorías",
  },
  footer: {
    blurb:
      "Herramientas online rápidas y sencillas para cálculos, texto, desarrollo, imágenes, SEO y tareas cotidianas.",
    tagline: "Rápido • Gratis • En el navegador • Sin registro",
    explore: "Explorar",
    categories: "Categorías",
    legal: "Legal",
    favorites: "Favoritos",
    privacy: "Política de privacidad",
    terms: "Términos",
    disclaimer: "Aviso legal",
    languages: "Idiomas",
    rights: "© {year} {name}. Todos los derechos reservados.",
  },
  home: {
    h1: "Herramientas online gratuitas para las tareas de cada día",
    intro:
      "Encuentra una herramienta, úsala y obtén un resultado. {name} es un lugar sencillo para PDF, imágenes, cálculos y texto, sin necesidad de cuenta.",
    popularLabel: "Populares:",
    trust: [
      "Gratis",
      "Sin registro",
      "Rápido y fácil",
      "Los archivos se quedan en tu navegador",
    ],
    popularTitle: "Herramientas populares",
    popularDescription:
      "Las herramientas más usadas para archivos, imágenes, texto y cálculos cotidianos.",
    viewAllTools: "Ver todas las herramientas",
    catalogTitle: "Todo lo que necesitas, en un solo lugar.",
    catalogDescription:
      "Filtra las herramientas disponibles en este sitio. Cada una se abre en el navegador.",
    categoriesTitle: "Explorar por categoría",
    categoriesDescription:
      "Calculadoras, texto, utilidades para desarrolladores, imágenes y PDF, y herramientas web.",
    allCategories: "Todas las categorías",
    whyTitle: "¿Por qué {name}?",
    whyDescription:
      "Un conjunto sencillo de utilidades para tareas que, de otro modo, harías en una aplicación aparte.",
    values: {
      fast: {
        title: "Rápido",
        note: "La mayoría de las herramientas funcionan en el navegador y muestran el resultado en la misma página.",
      },
      free: {
        title: "Gratis",
        note: "Las herramientas de este sitio no requieren pago.",
      },
      private: {
        title: "Privado",
        note: "Los archivos y el texto pegado se procesan en tu dispositivo. Las visitas se miden por separado, como explica la política de privacidad.",
      },
      noAccount: {
        title: "Sin cuenta",
        note: "Abre una herramienta y úsala. No hace falta ninguna cuenta.",
      },
    },
    howTitle: "Cómo funciona",
    howDescription: "Tres pasos. Sin instalar nada.",
    steps: [
      {
        title: "Elige una herramienta",
        description:
          "Busca o elige una calculadora, una herramienta de archivos o una utilidad para desarrolladores.",
      },
      {
        title: "Sube o escribe tu contenido",
        description:
          "Añade el archivo, los números o el texto que pida la herramienta.",
      },
      {
        title: "Obtén el resultado",
        description: "Cópialo, descárgalo o léelo en la misma página.",
      },
    ],
    guidesTitle: "Guías útiles",
    guidesDescription:
      "Explicaciones breves sobre tareas que ya resuelven las herramientas de este sitio.",
    allGuides: "Todas las guías",
    pricingTitle: "Precios",
    pricingBody:
      "Las herramientas son gratuitas. Sin cuenta, sin instalación y sin planes de pago.",
    ctaTitle: "¿Listo para hacer las cosas más rápido?",
    ctaBody: "Explora la colección de herramientas online sencillas de {name}.",
    ctaPrimary: "Explorar todas las herramientas",
    ctaSecondary: "Probar una herramienta",
  },
  toolsPage: {
    title: "Todas las herramientas",
    description:
      "Busca, filtra por categoría o vuelve a abrir una herramienta reciente o favorita. Las nuevas herramientas aparecen aquí en cuanto se añaden.",
  },
  categoriesPage: {
    title: "Categorías",
    description:
      "Elige una categoría para encontrar antes la herramienta adecuada.",
    body: "Las calculadoras resuelven los números del día a día. Las herramientas de texto cuentan y limpian lo que escribes. Las herramientas para desarrolladores formatean, codifican y minifican. Las herramientas de imagen también incluyen tareas con PDF, como unir, dividir y extraer texto. SEO y utilidades abarca enlaces de campaña, slugs, códigos QR y contraseñas. Las herramientas de IA crean prompts y acortan borradores en el navegador, y sus botones de IA envían el texto que escribes al modelo Gemini de Google para generar un resultado. Todas las demás herramientas funcionan en tu navegador.",
  },
  category: {
    cardCount: { one: "{count} herramienta", other: "{count} herramientas" },
    pageCount: {
      one: "{count} herramienta en esta categoría.",
      other: "{count} herramientas en esta categoría.",
    },
    browse: "Ver herramientas",
    starting: "Buenos puntos de partida",
    related: "Categorías relacionadas",
    none: "Todavía no hay herramientas en esta categoría.",
  },
  toolPage: {
    whatIs: "¿Qué es {name}?",
    categorySr: "categoría",
    relatedTools: "Herramientas relacionadas",
    helpfulGuides: "Guías útiles",
    englishContent:
      "Por ahora, la guía detallada de esta herramienta (cómo usarla, ejemplos y preguntas frecuentes) está en inglés.",
    details: {
      about: "Qué hace esta herramienta",
      howTo: "Cómo usarla",
      examples: "Ejemplos",
      examplesFallback:
        "Si aquí no hay ejemplos, prueba el área de trabajo de arriba con un ejemplo sencillo de la descripción.",
      features: "Funciones principales",
      howItWorks: "Cómo funciona",
      tips: "Consejos",
      limitations: "Limitaciones",
      limitationsFallback:
        "Revisa el resultado antes de confiar en él. Los archivos grandes pueden ir más lentos o fallar si el dispositivo tiene poca memoria.",
      disclaimer:
        "Consulta el {link} para saber qué no cubren estas herramientas.",
      disclaimerLink: "aviso legal",
      faq: "Preguntas frecuentes",
      defaultHowTo: [
        "Introduce tus valores o elige un archivo si la herramienta lo necesita.",
        "Ejecuta la acción en esta página.",
        "Revisa el resultado y luego cópialo, descárgalo o restablece según necesites.",
      ],
      mobileQuestion: "¿Funciona en el móvil?",
      mobileAnswer:
        "Sí. Puedes abrir esta página en un teléfono o una tableta. La selección de archivos y las descargas usan el navegador de tu dispositivo. Los archivos grandes pueden ir más lentos en un teléfono pequeño que en un ordenador.",
      workspaceNote: "Nota",
    },
    privacy: {
      browser:
        "Esta herramienta funciona en tu navegador. Los datos, archivos y valores generados se quedan en este dispositivo. Los favoritos y las herramientas recientes, si los usas, solo guardan nombres de herramientas en el almacenamiento local, nunca contraseñas, documentos ni contenido de códigos QR.",
      gemini:
        "Los botones básicos funcionan en tu navegador. «Generate with AI», «Analyze with AI» y «Compress with AI» envían el texto que introduces a la API Gemini de Google a través de ToolStarHub. Ese texto no se guarda aquí. En el nivel gratuito, Google puede usarlo para mejorar sus productos. Los favoritos solo guardan nombres de herramientas.",
      humanizer:
        "«Rewrite text» se queda en tu navegador. «Humanize with AI» envía el texto que introduces a la API Gemini de Google a través de ToolStarHub. Ese texto no se guarda aquí. En el nivel gratuito, Google puede usarlo para mejorar sus productos. Los favoritos solo guardan nombres de herramientas.",
      fetch:
        "«Check preview» envía la URL a este sitio, que solicita esa página pública y lee sus etiquetas. La página no se guarda aquí. Las direcciones privadas o que no son http se rechazan. Los favoritos solo guardan nombres de herramientas.",
      see: "Consulta la {link}.",
      link: "política de privacidad",
    },
  },
  categories: {
    calculators: {
      name: "Calculadoras",
      description: "Herramientas de cálculo para el día a día",
      shortDescription:
        "Porcentajes, edad, unidades y otros cálculos cotidianos.",
      intro:
        "Estas calculadoras responden a una pregunta numérica concreta: un porcentaje, una variación porcentual, un precio rebajado, una propina, el impuesto sobre las ventas, una edad, los días o días hábiles entre fechas, una conversión de unidades, una estimación de préstamo o hipoteca, salarios, la superficie de una habitación, el GPA o un número aleatorio dentro de un rango.",
      audience:
        "Úsalas cuando una hoja de cálculo sea más de lo que necesitas. Son ayudas aritméticas. Los resultados de préstamos, impuestos y salarios son estimaciones; no son asesoramiento financiero, fiscal, médico ni técnico.",
    },
    "text-tools": {
      name: "Herramientas de texto",
      description: "Herramientas para escribir y procesar texto",
      shortDescription:
        "Cuenta, limpia, convierte y da formato al texto en el navegador.",
      intro:
        "Las herramientas de texto cuentan palabras y caracteres, cambian mayúsculas y minúsculas, buscan y reemplazan, quitan saltos de línea, numeran líneas, eliminan líneas duplicadas o espacios de más, ordenan líneas, comparan dos borradores y generan texto de relleno para un diseño.",
      audience:
        "Están pensadas para redactores, editores y cualquiera que limpie texto pegado desde un documento o una hoja de cálculo. El texto que pegas se queda en el navegador.",
    },
    "developer-tools": {
      name: "Herramientas para desarrolladores",
      description:
        "Formatea, codifica, minifica y convierte datos en el navegador",
      shortDescription:
        "Formatea JSON, codifica datos, minifica código y convierte Markdown o HTML en local.",
      intro:
        "Las herramientas para desarrolladores formatean JSON, convierten entre JSON y CSV, prueban expresiones regulares, calculan hashes SHA-256 o SHA-512, codifican y decodifican Base64, URL y HTML, minifican HTML, CSS o JavaScript, convierten Markdown y generan UUID o marcas de tiempo Unix. Las herramientas de color convierten valores hexadecimales a RGB, comprueban el contraste y crean degradados y sombras CSS.",
      audience:
        "Son para quienes editan código o datos y quieren un resultado en la página sin instalar ningún paquete. Los minificadores y conversores siguen las reglas de cada formato, así que una entrada no válida se rechaza en lugar de reescribirse sin avisar.",
    },
    "image-tools": {
      name: "Herramientas de imagen",
      description: "Herramientas de imagen y PDF en el navegador",
      shortDescription:
        "Comprime, convierte e inspecciona imágenes y PDF sin subirlos.",
      intro:
        "Las herramientas de imagen comprimen, redimensionan, recortan, convierten y extraen colores de una imagen. Las herramientas PDF de esta categoría unen, dividen, comprimen, cuentan páginas, leen o eliminan metadatos, extraen texto, convierten páginas en imágenes JPG y crean un PDF a partir de imágenes o texto.",
      audience:
        "Los archivos se procesan en el navegador. Es posible que un PDF escaneado no tenga texto seleccionable. La compresión y la conversión pueden reducir la calidad, así que revisa la descarga antes de sustituir el original.",
    },
    "seo-utilities": {
      name: "SEO y utilidades",
      description: "Enlaces, slugs, códigos QR y contraseñas",
      shortDescription:
        "Crea enlaces UTM y slugs, genera o escanea códigos QR y crea contraseñas.",
      intro:
        "Estas utilidades crean una URL de campaña, convierten un título en un slug de URL, generan un código QR a partir de texto o datos estructurados, escanean un código QR con la cámara o desde una imagen y generan una contraseña en local.",
      audience:
        "La herramienta QR básica codifica texto sin formato o una URL. QR Code Generator Pro añade wifi, contactos y opciones de color. El generador de contraseñas crea una cadena en este dispositivo. No es un gestor de contraseñas.",
    },
    "ai-tools": {
      name: "Herramientas de IA",
      description:
        "Creadores de prompts y herramientas de escritura, con IA de Gemini opcional",
      shortDescription:
        "Crea prompts, analiza patrones de escritura y acorta borradores, en el navegador o con la IA de Gemini.",
      intro:
        "Estas herramientas te ayudan a escribir un prompt, describir una escena de imagen o vídeo, analizar patrones de escritura o acortar un borrador largo. El botón principal de cada herramienta funciona en tu navegador. Los botones de IA (Generate, Analyze, Compress o Humanize with AI) envían el texto que escribes al modelo Gemini de Google para generar el resultado.",
      audience:
        "Usa el botón del navegador si no quieres que tu texto salga de este dispositivo, y un botón de IA si quieres que Gemini lo reescriba o lo amplíe. El texto enviado a Gemini no se guarda en este sitio. Las herramientas de prompts devuelven texto, no imágenes ni vídeos. Las herramientas de escritura no determinan la autoría ni garantizan que un borrador acortado supere un detector.",
    },
  },
};

export default messages;
