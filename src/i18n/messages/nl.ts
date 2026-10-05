import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Home",
      allTools: "Alle tools",
      categories: "Categorieën",
      guides: "Handleidingen",
      popularTools: "Populaire tools",
      about: "Over ons",
      howItWorks: "Hoe het werkt",
      contact: "Contact",
      exploreTools: "Tools ontdekken",
      mobileNav: "Mobiel",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      openSearch: "Zoeken openen",
      closeSearch: "Zoeken sluiten",
    },
    theme: {
      toLight: "Overschakelen naar licht thema",
      toDark: "Overschakelen naar donker thema",
    },
    language: {
      label: "Taal",
      current: "Taal: {name}",
      englishOnly: "Alleen in het Engels",
    },
    search: {
      placeholder: "Zoek een tool...",
      label: "Zoek een tool",
      clear: "Zoekopdracht wissen",
      suggestions: "Zoeksuggesties",
      noResults: "Geen tools gevonden",
    },
    consent: {
      title: "Analytische cookies",
      body: "We gebruiken Google Analytics om bezoeken te tellen, maar alleen als je dat accepteert. De tools werken in beide gevallen hetzelfde. Lees het {link}.",
      privacyLink: "privacybeleid",
      accept: "Accepteren",
      decline: "Weigeren",
      settings: "Cookie-instellingen",
    },
    favorites: {
      add: "{name} toevoegen aan favorieten",
      remove: "{name} verwijderen uit favorieten",
    },
    card: { popular: "Populair", new: "Nieuw", openTool: "Tool openen" },
    categoryNames: {
      calculators: "Rekenmachines",
      "text-tools": "Teksttools",
      "developer-tools": "Ontwikkelaarstools",
      "image-tools": "Afbeeldingstools",
      "seo-utilities": "SEO & hulpmiddelen",
      "ai-tools": "AI-tools",
    },
    home: {
      filterAria: "Tools filteren",
      filters: {
        all: "Alle",
        pdf: "PDF",
        images: "Afbeeldingen",
        "text-tools": "Tekst",
        "developer-tools": "Ontwikkelaars",
        calculators: "Rekenmachines",
        "seo-utilities": "Hulpmiddelen",
        "ai-tools": "AI",
      },
      noToolsInGroup: "Geen tools in deze groep.",
    },
    catalog: {
      filterAria: "Tools filteren",
      filters: {
        all: "Alle",
        calculators: "Rekenmachines",
        "image-tools": "Afbeelding",
        pdf: "PDF",
        "text-tools": "Tekst",
        "developer-tools": "Ontwikkelaars",
        color: "Kleur",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "AI",
      },
      favorites: "Favorieten",
      sort: "Sorteren",
      sortName: "Naam",
      sortNewest: "Nieuwste",
      sortCategory: "Categorie",
      recentlyUsed: "Recent gebruikt",
      recentEmpty: "Tools die je gebruikt, verschijnen hier.",
      viewAll: "Alles bekijken",
      searchResults: "Zoekresultaten",
      allTools: "Alle tools",
      tools: "Tools",
      noFavorites: "Je hebt nog geen favoriete tools.",
      noToolsFound: "Geen tools gevonden",
      noToolsCategory: "Nog geen tools in deze categorie.",
      countFavorites: { one: "{count} favoriet", other: "{count} favorieten" },
      countResults: {
        one: "{count} resultaat voor ‘{query}’",
        other: "{count} resultaten voor ‘{query}’",
      },
      countOf: "{count} van {total} tools",
    },
    tool: {
      loading: "Tool laden…",
      copy: "Kopiëren",
      copied: "Gekopieerd",
      copyCss: "CSS kopiëren",
      copyLink: "Link kopiëren",
      linkCopied: "Link gekopieerd",
      download: "Downloaden",
      dropPrompt: "Sleep een afbeelding hierheen of kies een bestand.",
      selected: "Geselecteerd: {name}",
      copySuccess: "{what} gekopieerd naar het klembord.",
      copyFailed:
        "Automatisch kopiëren is niet gelukt. De inhoud ({what}) is geselecteerd: druk op Ctrl+C (of Cmd+C op een Mac) om te kopiëren.",
    },
  },
  meta: {
    tagline: "Gratis online tools die gewoon werken",
    description:
      "Snelle, gratis en gebruiksvriendelijke online tools voor berekeningen, tekst, ontwikkelaars, afbeeldingen, SEO en dagelijkse taken. Geen account nodig.",
    toolsTitle: "Alle tools",
    toolsDescription:
      "Bekijk gratis online tools voor berekeningen, tekst, ontwikkelaars, afbeeldingen, SEO en dagelijkse taken.",
    categoriesTitle: "Categorieën",
    categoriesDescription:
      "Ontdek Tools Star Hub per categorie: rekenmachines, teksttools, ontwikkelaarstools, afbeeldings- en PDF-tools, SEO-hulpmiddelen en AI-tools.",
    categoryTitle: "{name} – gratis online tools",
    categoryShareAlt: "{name} – gratis online tools",
    toolShareAlt: "{name} – gratis online tool",
  },
  header: {
    primaryNav: "Hoofdnavigatie",
    logoHome: "{name} home",
    skip: "Naar de hoofdinhoud",
  },
  breadcrumbs: {
    label: "Kruimelpad",
    home: "Home",
    tools: "Tools",
    categories: "Categorieën",
  },
  footer: {
    blurb:
      "Snelle, eenvoudige online tools voor berekeningen, tekst, ontwikkelaars, afbeeldingen, SEO en dagelijkse taken.",
    tagline: "Snel • Gratis • In je browser • Geen account",
    explore: "Ontdekken",
    categories: "Categorieën",
    legal: "Juridisch",
    favorites: "Favorieten",
    privacy: "Privacybeleid",
    terms: "Voorwaarden",
    disclaimer: "Disclaimer",
    languages: "Talen",
    rights: "© {year} {name}. Alle rechten voorbehouden.",
  },
  home: {
    h1: "Gratis online tools voor alledaagse taken",
    intro:
      "Vind een tool, gebruik hem en krijg een resultaat. {name} is een eenvoudige plek voor PDF’s, afbeeldingen, berekeningen en tekst, zonder account.",
    popularLabel: "Populair:",
    trust: [
      "Gratis te gebruiken",
      "Geen registratie nodig",
      "Snel en eenvoudig",
      "Bestanden blijven in je browser",
    ],
    popularTitle: "Populaire tools",
    popularDescription:
      "Veelgebruikte tools voor bestanden, afbeeldingen, tekst en alledaagse berekeningen.",
    viewAllTools: "Alle tools bekijken",
    catalogTitle: "Alles wat je nodig hebt, op één plek.",
    catalogDescription:
      "Filter de tools op deze site. Elke tool opent in je browser.",
    categoriesTitle: "Bladeren per categorie",
    categoriesDescription:
      "Rekenmachines, tekst, hulpmiddelen voor ontwikkelaars, afbeeldingen en PDF’s, en websitetools.",
    allCategories: "Alle categorieën",
    whyTitle: "Waarom {name}?",
    whyDescription:
      "Een overzichtelijke set hulpmiddelen voor klussen waarvoor je anders een aparte app nodig hebt.",
    values: {
      fast: {
        title: "Snel",
        note: "De meeste tools werken in de browser en tonen het resultaat op dezelfde pagina.",
      },
      free: { title: "Gratis", note: "De tools op deze site zijn gratis." },
      private: {
        title: "Privé",
        note: "Bestanden en geplakte tekst worden op je apparaat verwerkt. Paginabezoeken worden apart gemeten, zoals het privacybeleid uitlegt.",
      },
      noAccount: {
        title: "Geen account",
        note: "Open een tool en gebruik hem. Een account is niet nodig.",
      },
    },
    howTitle: "Hoe het werkt",
    howDescription: "Drie stappen. Niets installeren.",
    steps: [
      {
        title: "Kies een tool",
        description:
          "Zoek of kies een rekenmachine, bestandstool of hulpmiddel voor ontwikkelaars.",
      },
      {
        title: "Upload of voer je inhoud in",
        description:
          "Voeg het bestand, de getallen of de tekst toe waar de tool om vraagt.",
      },
      {
        title: "Bekijk het resultaat",
        description:
          "Kopieer, download of lees het resultaat op dezelfde pagina.",
      },
    ],
    guidesTitle: "Handige handleidingen",
    guidesDescription:
      "Korte uitleg over taken die de tools op deze site al afhandelen.",
    allGuides: "Alle handleidingen",
    pricingTitle: "Prijzen",
    pricingBody:
      "De tools zijn gratis. Geen account, geen installatie en geen betaald abonnement.",
    ctaTitle: "Klaar om sneller klaar te zijn?",
    ctaBody: "Ontdek de verzameling eenvoudige online tools van {name}.",
    ctaPrimary: "Alle tools ontdekken",
    ctaSecondary: "Probeer een tool",
  },
  toolsPage: {
    title: "Alle tools",
    description:
      "Zoek, filter op categorie of open een recente of favoriete tool opnieuw. Nieuwe tools verschijnen hier zodra ze zijn toegevoegd.",
  },
  categoriesPage: {
    title: "Categorieën",
    description: "Kies een categorie om sneller de juiste tool te vinden.",
    body: "Rekenmachines regelen alledaagse getallen. Teksttools tellen en schonen tekst op. Ontwikkelaarstools formatteren, coderen en verkleinen. Afbeeldingstools omvatten ook PDF-taken zoals samenvoegen, splitsen en tekst extraheren. SEO & hulpmiddelen behandelen campagnelinks, slugs, QR-codes en wachtwoorden. AI-tools maken prompts en korten concepten in in de browser, en hun AI-knoppen sturen de ingevoerde tekst naar het Gemini-model van Google om een resultaat te genereren. Alle andere tools werken in je browser.",
  },
  category: {
    cardCount: { one: "{count} tool", other: "{count} tools" },
    pageCount: {
      one: "{count} tool in deze categorie.",
      other: "{count} tools in deze categorie.",
    },
    browse: "Tools bekijken",
    starting: "Handige startpunten",
    related: "Gerelateerde categorieën",
    none: "Nog geen tools in deze categorie.",
  },
  toolPage: {
    whatIs: "Wat is {name}?",
    categorySr: "categorie",
    relatedTools: "Gerelateerde tools",
    helpfulGuides: "Handige handleidingen",
    englishContent:
      "De uitgebreide handleiding voor deze tool (gebruik, voorbeelden en veelgestelde vragen) is voorlopig in het Engels.",
    details: {
      about: "Wat deze tool doet",
      howTo: "Zo gebruik je het",
      examples: "Voorbeelden",
      examplesFallback:
        "Staan hier geen voorbeelden? Probeer de werkruimte hierboven met een eenvoudig voorbeeld uit de beschrijving.",
      features: "Belangrijkste functies",
      howItWorks: "Hoe het werkt",
      tips: "Tips",
      limitations: "Beperkingen",
      limitationsFallback:
        "Controleer het resultaat voordat je erop vertrouwt. Grote bestanden kunnen trager zijn of mislukken als het apparaat weinig geheugen heeft.",
      disclaimer: "Zie de {link} voor wat deze tools niet dekken.",
      disclaimerLink: "disclaimer",
      faq: "Veelgestelde vragen",
      howToName: "Handleiding: {name}",
      defaultHowTo: [
        "Vul je waarden in of kies een bestand als de tool er een nodig heeft.",
        "Voer de actie op deze pagina uit.",
        "Bekijk het resultaat en kopieer, download of reset waar nodig.",
      ],
      mobileQuestion: "Werkt het op mobiel?",
      mobileAnswer:
        "Ja. Je kunt deze pagina op een telefoon of tablet openen. Bestandskeuze en downloads lopen via de browser van je apparaat. Grote bestanden kunnen op een kleine telefoon trager zijn dan op een computer.",
      workspaceNote: "Let op",
    },
    privacy: {
      browser:
        "Deze tool werkt in je browser. Invoer, bestanden en gegenereerde waarden blijven op dit apparaat. Favorieten en recent gebruikte tools bewaren, als je ze gebruikt, alleen toolnamen in de lokale opslag — nooit wachtwoorden, documenten of QR-inhoud.",
      gemini:
        "De gewone knoppen werken in je browser. ‘Generate with AI’, ‘Analyze with AI’ en ‘Compress with AI’ sturen de ingevoerde tekst via ToolStarHub naar de Gemini-API van Google. Die tekst wordt hier niet opgeslagen. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren. Favorieten bewaren alleen toolnamen.",
      humanizer:
        "‘Rewrite text’ blijft in je browser. ‘Humanize with AI’ stuurt de ingevoerde tekst via ToolStarHub naar de Gemini-API van Google. Die tekst wordt hier niet opgeslagen. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren. Favorieten bewaren alleen toolnamen.",
      fetch:
        "‘Check preview’ stuurt de URL naar deze site, die de openbare pagina opvraagt en de tags uitleest. De pagina wordt hier niet opgeslagen. Privé- of niet-http-adressen worden geweigerd. Favorieten bewaren alleen toolnamen.",
      see: "Lees het {link}.",
      link: "privacybeleid",
    },
  },
  categories: {
    calculators: {
      name: "Rekenmachines",
      description: "Rekentools voor elke dag",
      shortDescription:
        "Percentages, leeftijd, eenheden en andere alledaagse berekeningen.",
      intro:
        "Deze rekenmachines beantwoorden een concrete rekenvraag: een percentage, een procentuele verandering, een kortingsprijs, een fooi, omzetbelasting, een leeftijd, de dagen of werkdagen tussen twee datums, een eenheidsomrekening, een schatting van een lening of hypotheek, loon, de oppervlakte van een kamer, een GPA of een willekeurig getal binnen een bereik.",
      audience:
        "Gebruik ze wanneer een spreadsheet overdreven is. Het zijn rekenhulpen. Uitkomsten voor leningen, belastingen en lonen zijn schattingen en geen financieel, fiscaal, medisch of technisch advies.",
    },
    "text-tools": {
      name: "Teksttools",
      description: "Tools om te schrijven en tekst te bewerken",
      shortDescription:
        "Tel, schoon op, zet om en formatteer tekst in je browser.",
      intro:
        "Teksttools tellen woorden en tekens, wijzigen hoofdletters, zoeken en vervangen, verwijderen regeleinden, nummeren regels, halen dubbele regels of extra spaties weg, sorteren regels, vergelijken twee versies en genereren opvultekst voor een ontwerp.",
      audience:
        "Ze zijn bedoeld voor schrijvers, redacteuren en iedereen die tekst uit een document of spreadsheet opschoont. De geplakte tekst blijft in de browser.",
    },
    "developer-tools": {
      name: "Ontwikkelaarstools",
      description:
        "Data formatteren, coderen, verkleinen en omzetten in de browser",
      shortDescription:
        "JSON formatteren, data coderen, code verkleinen en Markdown of HTML lokaal omzetten.",
      intro:
        "Ontwikkelaarstools formatteren JSON, zetten JSON en CSV om, testen reguliere expressies, hashen tekst met SHA-256 of SHA-512, coderen en decoderen Base64, URL’s en HTML, verkleinen HTML, CSS of JavaScript, zetten Markdown om en genereren UUID’s of Unix-tijdstempels. De kleurtools hier zetten hexwaarden om naar RGB, controleren contrast en bouwen CSS-verlopen en schaduwen.",
      audience:
        "Ze zijn voor iedereen die code of data bewerkt en een resultaat op de pagina wil zonder een pakket te installeren. Minifiers en converters volgen de regels van elk formaat, dus ongeldige invoer wordt geweigerd in plaats van stilletjes herschreven.",
    },
    "image-tools": {
      name: "Afbeeldingstools",
      description: "Afbeeldings- en PDF-tools in de browser",
      shortDescription:
        "Afbeeldingen en PDF’s comprimeren, omzetten en inspecteren zonder te uploaden.",
      intro:
        "Afbeeldingstools comprimeren, schalen, bijsnijden en converteren afbeeldingen en nemen er kleuren uit over. De PDF-tools in deze categorie voegen samen, splitsen, comprimeren, tellen pagina’s, lezen of verwijderen metadata, halen tekst eruit, zetten pagina’s om naar JPG-afbeeldingen en maken een PDF van afbeeldingen of tekst.",
      audience:
        "Bestanden worden in de browser verwerkt. Een gescande PDF levert misschien geen selecteerbare tekst op. Comprimeren en omzetten kan de kwaliteit verlagen, dus controleer de download voordat je het origineel vervangt.",
    },
    "seo-utilities": {
      name: "SEO & hulpmiddelen",
      description: "Links, slugs, QR-codes en wachtwoorden",
      shortDescription:
        "UTM-links en slugs maken, QR-codes genereren of scannen en wachtwoorden aanmaken.",
      intro:
        "Deze hulpmiddelen bouwen een campagne-URL, maken van een titel een URL-slug, genereren een QR-code uit tekst of gestructureerde gegevens, scannen een QR-code met de camera of uit een afbeelding en genereren lokaal een wachtwoord.",
      audience:
        "De basis-QR-tool codeert platte tekst of een URL. QR Code Generator Pro voegt wifi, contactgegevens en kleuropties toe. De wachtwoordgenerator maakt een reeks op dit apparaat. Het is geen wachtwoordbeheerder.",
    },
    "ai-tools": {
      name: "AI-tools",
      description: "Promptbouwers en schrijftools, met optionele Gemini-AI",
      shortDescription:
        "Bouw prompts, bestudeer schrijfpatronen en kort een concept in, in de browser of met Gemini-AI.",
      intro:
        "Deze tools helpen je een prompt te schrijven, een beeld- of videoscène te beschrijven, schrijfpatronen te bekijken of een lang concept in te korten. De hoofdknop van elke tool werkt in je browser. De AI-knoppen (Generate, Analyze, Compress of Humanize with AI) sturen de ingevoerde tekst naar het Gemini-model van Google om het resultaat te maken.",
      audience:
        "Gebruik de browserknop als je tekst dit apparaat niet mag verlaten, en een AI-knop als Gemini hem moet herschrijven of uitbreiden. Tekst die naar Gemini gaat, wordt niet op deze site opgeslagen. De prompttools leveren tekst, geen afbeeldingen of video’s. De schrijftools bepalen niet wie iets heeft geschreven en beloven niet dat een ingekort concept een detector doorstaat.",
    },
  },
};

export default messages;
