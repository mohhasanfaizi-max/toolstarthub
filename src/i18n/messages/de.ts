import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Startseite",
      allTools: "Alle Tools",
      categories: "Kategorien",
      guides: "Ratgeber",
      popularTools: "Beliebte Tools",
      about: "Über uns",
      howItWorks: "So funktioniert’s",
      contact: "Kontakt",
      exploreTools: "Tools entdecken",
      mobileNav: "Mobil",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      openSearch: "Suche öffnen",
      closeSearch: "Suche schließen",
    },
    theme: { toLight: "Zum hellen Design wechseln", toDark: "Zum dunklen Design wechseln" },
    language: { label: "Sprache", current: "Sprache: {name}", englishOnly: "Nur auf Englisch" },
    search: {
      placeholder: "Tool suchen …",
      label: "Tool suchen",
      clear: "Suche löschen",
      suggestions: "Suchvorschläge",
      noResults: "Keine Tools gefunden",
    },
    consent: {
      title: "Analyse-Cookies",
      body: "Wir nutzen Google Analytics, um Besuche zu zählen – aber nur, wenn Sie zustimmen. Die Tools funktionieren in beiden Fällen gleich. Mehr dazu in der {link}.",
      privacyLink: "Datenschutzerklärung",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      settings: "Cookie-Einstellungen",
    },
    favorites: { add: "{name} zu Favoriten hinzufügen", remove: "{name} aus Favoriten entfernen" },
    card: { popular: "Beliebt", new: "Neu", openTool: "Tool öffnen" },
    categoryNames: {
      calculators: "Rechner",
      "text-tools": "Text-Tools",
      "developer-tools": "Entwickler-Tools",
      "image-tools": "Bild-Tools",
      "seo-utilities": "SEO & Hilfsmittel",
      "ai-tools": "KI-Tools",
    },
    home: {
      filterAria: "Tools filtern",
      filters: {
        all: "Alle",
        pdf: "PDF",
        images: "Bilder",
        "text-tools": "Text",
        "developer-tools": "Entwickler",
        calculators: "Rechner",
        "seo-utilities": "Hilfsmittel",
        "ai-tools": "KI",
      },
      noToolsInGroup: "In dieser Gruppe gibt es keine Tools.",
    },
    catalog: {
      filterAria: "Tools filtern",
      filters: {
        all: "Alle",
        calculators: "Rechner",
        "image-tools": "Bild",
        pdf: "PDF",
        "text-tools": "Text",
        "developer-tools": "Entwickler",
        color: "Farbe",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "KI",
      },
      favorites: "Favoriten",
      sort: "Sortieren",
      sortName: "Name",
      sortNewest: "Neueste",
      sortCategory: "Kategorie",
      recentlyUsed: "Zuletzt verwendet",
      recentEmpty: "Hier erscheinen die Tools, die Sie verwenden.",
      viewAll: "Alle anzeigen",
      searchResults: "Suchergebnisse",
      allTools: "Alle Tools",
      tools: "Tools",
      noFavorites: "Sie haben noch keine Favoriten gespeichert.",
      noToolsFound: "Keine Tools gefunden",
      noToolsCategory: "In dieser Kategorie gibt es noch keine Tools.",
      countFavorites: { one: "{count} Favorit", other: "{count} Favoriten" },
      countResults: { one: "{count} Ergebnis für „{query}“", other: "{count} Ergebnisse für „{query}“" },
      countOf: "{count} von {total} Tools",
    },
    tool: {
      loading: "Tool wird geladen …",
      copy: "Kopieren",
      copied: "Kopiert",
      copyCss: "CSS kopieren",
      copyLink: "Link kopieren",
      linkCopied: "Link kopiert",
      download: "Herunterladen",
      dropPrompt: "Bild hierher ziehen oder eine Datei auswählen.",
      selected: "Ausgewählt: {name}",
      copySuccess: "{what} in die Zwischenablage kopiert.",
      copyFailed:
        "Automatisches Kopieren nicht möglich. {what} ist markiert – drücken Sie Strg+C (oder Cmd+C auf dem Mac), um es zu kopieren.",
    },
  },
  meta: {
    tagline: "Kostenlose Online-Tools, die einfach funktionieren",
    description:
      "Schnelle, kostenlose und einfache Online-Tools für Berechnungen, Texte, Entwickler, Bilder, SEO und den Alltag. Keine Anmeldung nötig.",
    toolsTitle: "Alle Tools",
    toolsDescription:
      "Kostenlose Online-Tools für Berechnungen, Texte, Entwickler, Bilder, SEO und alltägliche Aufgaben durchsuchen.",
    categoriesTitle: "Kategorien",
    categoriesDescription:
      "Tools Star Hub nach Kategorien entdecken: Rechner, Text-Tools, Entwickler-Tools, Bild- und PDF-Tools, SEO-Hilfsmittel und KI-Tools.",
    categoryTitle: "{name} – kostenlose Online-Tools",
    categoryShareAlt: "{name} – kostenlose Online-Tools",
    toolShareAlt: "{name} – kostenloses Online-Tool",
  },
  header: { primaryNav: "Hauptnavigation", logoHome: "{name} – Startseite", skip: "Zum Hauptinhalt springen" },
  breadcrumbs: { label: "Brotkrümelnavigation", home: "Startseite", tools: "Tools", categories: "Kategorien" },
  footer: {
    blurb: "Schnelle, einfache Online-Tools für Berechnungen, Texte, Entwickler, Bilder, SEO und den Alltag.",
    tagline: "Schnell • Kostenlos • Im Browser • Ohne Anmeldung",
    explore: "Entdecken",
    categories: "Kategorien",
    legal: "Rechtliches",
    favorites: "Favoriten",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    disclaimer: "Haftungsausschluss",
    languages: "Sprachen",
    rights: "© {year} {name}. Alle Rechte vorbehalten.",
  },
  home: {
    h1: "Kostenlose Online-Tools für alltägliche Aufgaben",
    intro:
      "Tool finden, nutzen, Ergebnis erhalten. {name} ist ein einfacher Ort für PDFs, Bilder, Berechnungen und Texte – ganz ohne Konto.",
    popularLabel: "Beliebt:",
    trust: ["Kostenlos", "Keine Anmeldung nötig", "Schnell und einfach", "Dateien bleiben in Ihrem Browser"],
    popularTitle: "Beliebte Tools",
    popularDescription: "Tools, die oft für Dateien, Bilder, Texte und alltägliche Berechnungen genutzt werden.",
    viewAllTools: "Alle Tools ansehen",
    catalogTitle: "Alles, was Sie brauchen, an einem Ort.",
    catalogDescription: "Filtern Sie die Tools dieser Website. Jedes öffnet sich direkt im Browser.",
    categoriesTitle: "Nach Kategorie stöbern",
    categoriesDescription: "Rechner, Texte, Entwickler-Hilfen, Bilder und PDFs sowie Website-Tools.",
    allCategories: "Alle Kategorien",
    whyTitle: "Warum {name}?",
    whyDescription: "Eine übersichtliche Sammlung von Hilfsmitteln für Aufgaben, für die Sie sonst eine eigene App bräuchten.",
    values: {
      fast: { title: "Schnell", note: "Die meisten Tools laufen im Browser und zeigen das Ergebnis auf derselben Seite." },
      free: { title: "Kostenlos", note: "Die Tools auf dieser Website sind kostenlos." },
      private: {
        title: "Privat",
        note: "Dateien und eingefügter Text werden auf Ihrem Gerät verarbeitet. Seitenaufrufe werden separat gemessen, wie in der Datenschutzerklärung beschrieben.",
      },
      noAccount: { title: "Kein Konto", note: "Tool öffnen und loslegen. Ein Konto ist nicht nötig." },
    },
    howTitle: "So funktioniert’s",
    howDescription: "Drei Schritte. Keine Installation.",
    steps: [
      { title: "Tool auswählen", description: "Suchen Sie einen Rechner, ein Datei-Tool oder ein Entwickler-Tool aus." },
      { title: "Inhalt hochladen oder eingeben", description: "Fügen Sie die Datei, Zahlen oder den Text hinzu, die das Tool benötigt." },
      { title: "Ergebnis erhalten", description: "Kopieren, herunterladen oder direkt auf der Seite lesen." },
    ],
    guidesTitle: "Hilfreiche Ratgeber",
    guidesDescription: "Kurze Erklärungen zu Aufgaben, die die Tools dieser Website erledigen.",
    allGuides: "Alle Ratgeber",
    pricingTitle: "Preise",
    pricingBody: "Die Tools sind kostenlos. Kein Konto, keine Installation, kein Bezahltarif.",
    ctaTitle: "Bereit, schneller ans Ziel zu kommen?",
    ctaBody: "Entdecken Sie die Sammlung einfacher Online-Tools von {name}.",
    ctaPrimary: "Alle Tools entdecken",
    ctaSecondary: "Tool ausprobieren",
  },
  toolsPage: {
    title: "Alle Tools",
    description:
      "Suchen, nach Kategorie filtern oder ein zuletzt genutztes oder favorisiertes Tool erneut öffnen. Neue Tools erscheinen hier, sobald sie verfügbar sind.",
  },
  categoriesPage: {
    title: "Kategorien",
    description: "Wählen Sie eine Kategorie, um schneller das passende Tool zu finden.",
    body: "Rechner erledigen alltägliche Zahlenaufgaben. Text-Tools zählen und bereinigen Texte. Entwickler-Tools formatieren, kodieren und minifizieren. Bild-Tools umfassen auch PDF-Aufgaben wie Zusammenführen, Teilen und Text extrahieren. SEO & Hilfsmittel decken Kampagnen-Links, Slugs, QR-Codes und Passwörter ab. KI-Tools erstellen Prompts und kürzen Entwürfe im Browser; ihre KI-Schaltflächen senden den eingegebenen Text an Googles Gemini-Modell, um ein Ergebnis zu erzeugen. Alle anderen Tools laufen in Ihrem Browser.",
  },
  category: {
    cardCount: { one: "{count} Tool", other: "{count} Tools" },
    pageCount: { one: "{count} Tool in dieser Kategorie.", other: "{count} Tools in dieser Kategorie." },
    browse: "Tools ansehen",
    starting: "Gute Einstiegspunkte",
    related: "Verwandte Kategorien",
    none: "In dieser Kategorie gibt es noch keine Tools.",
  },
  toolPage: {
    whatIs: "Was ist {name}?",
    categorySr: "Kategorie",
    relatedTools: "Ähnliche Tools",
    helpfulGuides: "Hilfreiche Ratgeber",
    englishContent:
      "Die ausführliche Anleitung zu diesem Tool (Bedienung, Beispiele und FAQ) ist vorerst nur auf Englisch verfügbar.",
    privacy: {
      browser:
        "Dieses Tool läuft in Ihrem Browser. Eingaben, Dateien und erzeugte Werte bleiben auf diesem Gerät. Favoriten und zuletzt verwendete Tools speichern – falls Sie sie nutzen – nur Tool-Namen im lokalen Speicher, niemals Passwörter, Dokumente oder QR-Inhalte.",
      gemini:
        "Die normalen Schaltflächen arbeiten in Ihrem Browser. „Generate with AI“, „Analyze with AI“ und „Compress with AI“ senden den eingegebenen Text über ToolStarHub an die Gemini-API von Google. Der Text wird hier nicht gespeichert. Im kostenlosen Kontingent kann Google ihn zur Verbesserung seiner Produkte nutzen. Favoriten speichern nur Tool-Namen.",
      humanizer:
        "„Rewrite text“ bleibt in Ihrem Browser. „Humanize with AI“ sendet den eingegebenen Text über ToolStarHub an die Gemini-API von Google. Der Text wird hier nicht gespeichert. Im kostenlosen Kontingent kann Google ihn zur Verbesserung seiner Produkte nutzen. Favoriten speichern nur Tool-Namen.",
      fetch:
        "„Check preview“ sendet die URL an diese Website, die die öffentliche Seite abruft und ihre Tags ausliest. Die Seite wird hier nicht gespeichert. Private oder Nicht-HTTP-Adressen werden abgelehnt. Favoriten speichern nur Tool-Namen.",
      see: "Mehr dazu in der {link}.",
      link: "Datenschutzerklärung",
    },
  },
  categories: {
    calculators: {
      name: "Rechner",
      description: "Rechner für den Alltag",
      shortDescription: "Prozente, Alter, Einheiten und andere alltägliche Berechnungen.",
      intro:
        "Diese Rechner beantworten eine konkrete Zahlenfrage: Prozente, prozentuale Veränderung, Sonderpreis, Trinkgeld, Umsatzsteuer, Alter, Tage oder Werktage zwischen zwei Daten, Einheitenumrechnung, Kredit- oder Hypothekenschätzung, Lohn, Raumfläche, Notendurchschnitt (GPA) oder eine Zufallszahl in einem Bereich.",
      audience:
        "Nutzen Sie sie, wenn eine Tabellenkalkulation zu viel des Guten wäre. Sie sind Rechenhilfen. Ergebnisse zu Krediten, Steuern und Löhnen sind Schätzungen und keine Finanz-, Steuer-, medizinische oder technische Beratung.",
    },
    "text-tools": {
      name: "Text-Tools",
      description: "Tools zum Schreiben und Bearbeiten von Text",
      shortDescription: "Text im Browser zählen, bereinigen, umwandeln und formatieren.",
      intro:
        "Text-Tools zählen Wörter und Zeichen, ändern die Groß- und Kleinschreibung, suchen und ersetzen, entfernen Zeilenumbrüche, nummerieren Zeilen, löschen doppelte Zeilen oder überflüssige Leerzeichen, sortieren Zeilen, vergleichen zwei Entwürfe und erzeugen Platzhaltertext für ein Layout.",
      audience:
        "Sie richten sich an Autorinnen, Redakteure und alle, die Text aus einem Dokument oder einer Tabelle bereinigen. Der eingefügte Text bleibt im Browser.",
    },
    "developer-tools": {
      name: "Entwickler-Tools",
      description: "Daten im Browser formatieren, kodieren, minifizieren und umwandeln",
      shortDescription: "JSON formatieren, Daten kodieren, Code minifizieren und Markdown oder HTML lokal umwandeln.",
      intro:
        "Entwickler-Tools formatieren JSON, wandeln JSON und CSV um, testen reguläre Ausdrücke, hashen Text mit SHA-256 oder SHA-512, kodieren und dekodieren Base64, URLs und HTML, minifizieren HTML, CSS oder JavaScript, wandeln Markdown um und erzeugen UUIDs oder Unix-Zeitstempel. Die Farb-Tools hier wandeln Hex-Werte in RGB um, prüfen Kontraste und erstellen CSS-Verläufe und Schatten.",
      audience:
        "Sie sind für alle gedacht, die Code oder Daten bearbeiten und ein Ergebnis direkt auf der Seite wollen, ohne ein Paket zu installieren. Minifier und Konverter halten sich an die Regeln des jeweiligen Formats; ungültige Eingaben werden abgelehnt statt stillschweigend umgeschrieben.",
    },
    "image-tools": {
      name: "Bild-Tools",
      description: "Bild- und PDF-Tools im Browser",
      shortDescription: "Bilder und PDFs komprimieren, umwandeln und prüfen – ohne Hochladen.",
      intro:
        "Bild-Tools komprimieren, skalieren, beschneiden und konvertieren Bilder und lesen Farben aus. Die PDF-Tools dieser Kategorie führen zusammen, teilen, komprimieren, zählen Seiten, lesen oder entfernen Metadaten, extrahieren Text, wandeln Seiten in JPG-Bilder um und erstellen PDFs aus Bildern oder Text.",
      audience:
        "Dateien werden im Browser verarbeitet. Aus einem gescannten PDF lässt sich eventuell kein markierbarer Text gewinnen. Komprimierung und Umwandlung können die Qualität mindern – prüfen Sie den Download, bevor Sie das Original ersetzen.",
    },
    "seo-utilities": {
      name: "SEO & Hilfsmittel",
      description: "Links, Slugs, QR-Codes und Passwörter",
      shortDescription: "UTM-Links und Slugs erstellen, QR-Codes erzeugen oder scannen und Passwörter generieren.",
      intro:
        "Diese Hilfsmittel erstellen eine Kampagnen-URL, machen aus einem Titel einen URL-Slug, erzeugen einen QR-Code aus Text oder strukturierten Daten, scannen einen QR-Code per Kamera oder Bild und generieren lokal ein Passwort.",
      audience:
        "Das einfache QR-Tool kodiert reinen Text oder eine URL. QR Code Generator Pro bietet zusätzlich WLAN, Kontakte und Farboptionen. Der Passwortgenerator erzeugt eine Zeichenfolge auf diesem Gerät. Er ist kein Passwortmanager.",
    },
    "ai-tools": {
      name: "KI-Tools",
      description: "Prompt-Builder und Schreib-Tools, optional mit Gemini-KI",
      shortDescription: "Prompts erstellen, Schreibmuster untersuchen und Entwürfe kürzen – im Browser oder mit Gemini-KI.",
      intro:
        "Diese Tools helfen Ihnen, einen Prompt zu schreiben, eine Bild- oder Videoszene zu beschreiben, Schreibmuster zu betrachten oder einen langen Entwurf zu kürzen. Die Hauptschaltfläche jedes Tools arbeitet in Ihrem Browser. Die KI-Schaltflächen (Generate, Analyze, Compress oder Humanize with AI) senden den eingegebenen Text an Googles Gemini-Modell, um das Ergebnis zu erzeugen.",
      audience:
        "Verwenden Sie die Browser-Schaltfläche, wenn Ihr Text das Gerät nicht verlassen soll, und eine KI-Schaltfläche, wenn Gemini ihn umschreiben oder erweitern soll. An Gemini gesendeter Text wird auf dieser Website nicht gespeichert. Die Prompt-Tools liefern Text, keine Bilder oder Videos. Die Schreib-Tools entscheiden nicht über die Urheberschaft und versprechen nicht, dass ein gekürzter Entwurf einen Detektor besteht.",
    },
  },
};

export default messages;
