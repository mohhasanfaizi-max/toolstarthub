import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Home",
      allTools: "Tutti gli strumenti",
      categories: "Categorie",
      guides: "Guide",
      popularTools: "Strumenti più usati",
      about: "Chi siamo",
      howItWorks: "Come funziona",
      contact: "Contatti",
      exploreTools: "Esplora gli strumenti",
      mobileNav: "Mobile",
      openMenu: "Apri il menu",
      closeMenu: "Chiudi il menu",
      openSearch: "Apri la ricerca",
      closeSearch: "Chiudi la ricerca",
    },
    theme: { toLight: "Passa al tema chiaro", toDark: "Passa al tema scuro" },
    language: {
      label: "Lingua",
      current: "Lingua: {name}",
      englishOnly: "Solo in inglese",
    },
    search: {
      placeholder: "Cerca uno strumento...",
      label: "Cerca uno strumento",
      clear: "Cancella la ricerca",
      suggestions: "Suggerimenti di ricerca",
      noResults: "Nessuno strumento trovato",
    },
    consent: {
      title: "Cookie analitici",
      body: "Usiamo Google Analytics per contare le visite, ma solo se accetti. Gli strumenti funzionano allo stesso modo in ogni caso. Consulta l’{link}.",
      privacyLink: "informativa sulla privacy",
      accept: "Accetta",
      decline: "Rifiuta",
      settings: "Impostazioni dei cookie",
    },
    favorites: {
      add: "Aggiungi {name} ai preferiti",
      remove: "Rimuovi {name} dai preferiti",
    },
    card: { popular: "Popolare", new: "Nuovo", openTool: "Apri lo strumento" },
    categoryNames: {
      calculators: "Calcolatrici",
      "text-tools": "Strumenti per il testo",
      "developer-tools": "Strumenti per sviluppatori",
      "image-tools": "Strumenti per immagini",
      "seo-utilities": "SEO e utilità",
      "ai-tools": "Strumenti IA",
    },
    home: {
      filterAria: "Filtra gli strumenti",
      filters: {
        all: "Tutti",
        pdf: "PDF",
        images: "Immagini",
        "text-tools": "Testo",
        "developer-tools": "Sviluppo",
        calculators: "Calcolatrici",
        "seo-utilities": "Utilità",
        "ai-tools": "IA",
      },
      noToolsInGroup: "Nessuno strumento in questo gruppo.",
    },
    catalog: {
      filterAria: "Filtra gli strumenti",
      filters: {
        all: "Tutti",
        calculators: "Calcolatrici",
        "image-tools": "Immagini",
        pdf: "PDF",
        "text-tools": "Testo",
        "developer-tools": "Sviluppo",
        color: "Colore",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "IA",
      },
      favorites: "Preferiti",
      sort: "Ordina",
      sortName: "Nome",
      sortNewest: "Più recenti",
      sortCategory: "Categoria",
      recentlyUsed: "Usati di recente",
      recentEmpty: "Qui compariranno gli strumenti che usi.",
      viewAll: "Mostra tutti",
      searchResults: "Risultati della ricerca",
      allTools: "Tutti gli strumenti",
      tools: "Strumenti",
      noFavorites: "Non hai ancora aggiunto strumenti ai preferiti.",
      noToolsFound: "Nessuno strumento trovato",
      noToolsCategory: "Non ci sono ancora strumenti in questa categoria.",
      countFavorites: { one: "{count} preferito", other: "{count} preferiti" },
      countResults: {
        one: "{count} risultato per «{query}»",
        other: "{count} risultati per «{query}»",
      },
      countOf: "{count} di {total} strumenti",
    },
    tool: {
      loading: "Caricamento dello strumento…",
      copy: "Copia",
      copied: "Copiato",
      copyCss: "Copia CSS",
      copyLink: "Copia link",
      linkCopied: "Link copiato",
      download: "Scarica",
      dropPrompt: "Trascina qui un’immagine oppure scegli un file.",
      selected: "Selezionato: {name}",
      copySuccess: "{what} copiato negli appunti.",
      copyFailed:
        "Impossibile copiare automaticamente. Il contenuto ({what}) è selezionato: premi Ctrl+C (o Cmd+C su Mac) per copiarlo.",
    },
  },
  meta: {
    tagline: "Strumenti online gratuiti che funzionano e basta",
    description:
      "Strumenti online veloci, gratuiti e facili da usare per calcoli, testo, sviluppo, immagini, SEO e attività quotidiane. Nessuna registrazione.",
    toolsTitle: "Tutti gli strumenti",
    toolsDescription:
      "Sfoglia strumenti online gratuiti per calcoli, testo, sviluppo, immagini, SEO e attività quotidiane.",
    categoriesTitle: "Categorie",
    categoriesDescription:
      "Esplora Tools Star Hub per categoria: calcolatrici, strumenti per testo, per sviluppatori, per immagini e PDF, utilità SEO e strumenti IA.",
    categoryTitle: "{name} – strumenti online gratuiti",
    categoryShareAlt: "{name} – strumenti online gratuiti",
    toolShareAlt: "{name} – strumento online gratuito",
  },
  header: {
    primaryNav: "Navigazione principale",
    logoHome: "Home di {name}",
    skip: "Vai al contenuto principale",
  },
  breadcrumbs: {
    label: "Percorso di navigazione",
    home: "Home",
    tools: "Strumenti",
    categories: "Categorie",
  },
  footer: {
    blurb:
      "Strumenti online veloci e semplici per calcoli, testo, sviluppo, immagini, SEO e attività quotidiane.",
    tagline: "Veloce • Gratuito • Nel browser • Senza registrazione",
    explore: "Esplora",
    categories: "Categorie",
    legal: "Note legali",
    favorites: "Preferiti",
    privacy: "Informativa sulla privacy",
    terms: "Termini",
    disclaimer: "Esclusione di responsabilità",
    languages: "Lingue",
    rights: "© {year} {name}. Tutti i diritti riservati.",
  },
  home: {
    h1: "Strumenti online gratuiti per le attività di tutti i giorni",
    intro:
      "Trova uno strumento, usalo e ottieni il risultato. {name} è un posto semplice per PDF, immagini, calcoli e testo, senza account.",
    popularLabel: "Più usati:",
    trust: [
      "Gratuito",
      "Nessuna registrazione",
      "Veloce e semplice",
      "I file restano nel tuo browser",
    ],
    popularTitle: "Strumenti più usati",
    popularDescription:
      "Gli strumenti più usati per file, immagini, testo e calcoli di tutti i giorni.",
    viewAllTools: "Vedi tutti gli strumenti",
    catalogTitle: "Tutto ciò che ti serve, in un unico posto.",
    catalogDescription:
      "Filtra gli strumenti disponibili su questo sito. Ognuno si apre nel browser.",
    categoriesTitle: "Sfoglia per categoria",
    categoriesDescription:
      "Calcolatrici, testo, utilità per sviluppatori, immagini e PDF, e strumenti per siti web.",
    allCategories: "Tutte le categorie",
    whyTitle: "Perché {name}?",
    whyDescription:
      "Una raccolta semplice di utilità per lavori che altrimenti richiederebbero un’app separata.",
    values: {
      fast: {
        title: "Veloce",
        note: "La maggior parte degli strumenti funziona nel browser e mostra il risultato nella stessa pagina.",
      },
      free: {
        title: "Gratuito",
        note: "Gli strumenti di questo sito non sono a pagamento.",
      },
      private: {
        title: "Privato",
        note: "I file e il testo incollato vengono elaborati sul tuo dispositivo. Le visite sono misurate a parte, come spiega l’informativa sulla privacy.",
      },
      noAccount: {
        title: "Senza account",
        note: "Apri uno strumento e usalo. Non serve alcun account.",
      },
    },
    howTitle: "Come funziona",
    howDescription: "Tre passaggi. Niente da installare.",
    steps: [
      {
        title: "Scegli uno strumento",
        description:
          "Cerca o scegli una calcolatrice, uno strumento per file o un’utilità per sviluppatori.",
      },
      {
        title: "Carica o inserisci il contenuto",
        description:
          "Aggiungi il file, i numeri o il testo richiesti dallo strumento.",
      },
      {
        title: "Ottieni il risultato",
        description: "Copia, scarica o leggi il risultato nella stessa pagina.",
      },
    ],
    guidesTitle: "Guide utili",
    guidesDescription:
      "Brevi spiegazioni sulle attività che gli strumenti di questo sito già gestiscono.",
    allGuides: "Tutte le guide",
    pricingTitle: "Prezzi",
    pricingBody:
      "Gli strumenti sono gratuiti. Niente account, niente installazione e nessun piano a pagamento.",
    ctaTitle: "Pronto a fare prima?",
    ctaBody: "Esplora la raccolta di semplici strumenti online di {name}.",
    ctaPrimary: "Esplora tutti gli strumenti",
    ctaSecondary: "Prova uno strumento",
  },
  toolsPage: {
    title: "Tutti gli strumenti",
    description:
      "Cerca, filtra per categoria o riapri uno strumento recente o preferito. I nuovi strumenti compaiono qui appena vengono aggiunti.",
  },
  categoriesPage: {
    title: "Categorie",
    description: "Scegli una categoria per trovare prima lo strumento giusto.",
    body: "Le calcolatrici gestiscono i numeri di tutti i giorni. Gli strumenti per il testo contano e ripuliscono ciò che scrivi. Gli strumenti per sviluppatori formattano, codificano e minificano. Gli strumenti per immagini includono anche attività sui PDF come unire, dividere ed estrarre testo. SEO e utilità comprende link di campagna, slug, codici QR e password. Gli strumenti IA creano prompt e accorciano bozze nel browser, e i loro pulsanti IA inviano il testo inserito al modello Gemini di Google per generare un risultato. Tutti gli altri strumenti funzionano nel tuo browser.",
  },
  category: {
    cardCount: { one: "{count} strumento", other: "{count} strumenti" },
    pageCount: {
      one: "{count} strumento in questa categoria.",
      other: "{count} strumenti in questa categoria.",
    },
    browse: "Sfoglia gli strumenti",
    starting: "Da dove iniziare",
    related: "Categorie correlate",
    none: "Non ci sono ancora strumenti in questa categoria.",
  },
  toolPage: {
    whatIs: "Che cos’è {name}?",
    categorySr: "categoria",
    relatedTools: "Strumenti correlati",
    helpfulGuides: "Guide utili",
    englishContent:
      "Per ora la guida dettagliata di questo strumento (come si usa, esempi e domande frequenti) è disponibile in inglese.",
    details: {
      about: "Cosa fa questo strumento",
      howTo: "Come si usa",
      examples: "Esempi",
      examplesFallback:
        "Se qui non ci sono esempi, prova l’area di lavoro qui sopra con un esempio semplice tratto dalla descrizione.",
      features: "Funzioni principali",
      howItWorks: "Come funziona",
      tips: "Suggerimenti",
      limitations: "Limiti",
      limitationsFallback:
        "Controlla il risultato prima di farci affidamento. I file grandi possono essere più lenti o non riuscire se il dispositivo ha poca memoria.",
      disclaimer:
        "Consulta il {link} per sapere cosa non coprono questi strumenti.",
      disclaimerLink: "disclaimer",
      faq: "Domande frequenti",
      defaultHowTo: [
        "Inserisci i valori o scegli un file, se lo strumento ne ha bisogno.",
        "Avvia l’azione in questa pagina.",
        "Controlla il risultato, poi copialo, scaricalo o reimposta secondo necessità.",
      ],
      mobileQuestion: "Funziona su smartphone?",
      mobileAnswer:
        "Sì. Puoi aprire questa pagina su telefono o tablet. La scelta dei file e i download usano il browser del dispositivo. I file grandi possono essere più lenti su un telefono piccolo che su un computer.",
      workspaceNote: "Nota",
    },
    privacy: {
      browser:
        "Questo strumento funziona nel tuo browser. Dati inseriti, file e valori generati restano su questo dispositivo. Preferiti e strumenti recenti, se li usi, salvano solo i nomi degli strumenti nella memoria locale: mai password, documenti o contenuti dei codici QR.",
      gemini:
        "I pulsanti di base funzionano nel tuo browser. «Generate with AI», «Analyze with AI» e «Compress with AI» inviano il testo inserito all’API Gemini di Google tramite ToolStarHub. Il testo non viene salvato qui. Nel piano gratuito, Google può usarlo per migliorare i propri prodotti. I preferiti salvano solo i nomi degli strumenti.",
      humanizer:
        "«Rewrite text» resta nel tuo browser. «Humanize with AI» invia il testo inserito all’API Gemini di Google tramite ToolStarHub. Il testo non viene salvato qui. Nel piano gratuito, Google può usarlo per migliorare i propri prodotti. I preferiti salvano solo i nomi degli strumenti.",
      fetch:
        "«Check preview» invia l’URL a questo sito, che richiede la pagina pubblica e ne legge i tag. La pagina non viene salvata qui. Gli indirizzi privati o non http vengono rifiutati. I preferiti salvano solo i nomi degli strumenti.",
      see: "Consulta l’{link}.",
      link: "informativa sulla privacy",
    },
  },
  categories: {
    calculators: {
      name: "Calcolatrici",
      description: "Strumenti di calcolo per tutti i giorni",
      shortDescription:
        "Percentuali, età, unità di misura e altri calcoli quotidiani.",
      intro:
        "Queste calcolatrici rispondono a una domanda numerica precisa: una percentuale, una variazione percentuale, un prezzo scontato, una mancia, l’imposta sulle vendite, un’età, i giorni o i giorni lavorativi tra due date, una conversione di unità, una stima di prestito o mutuo, uno stipendio, la superficie di una stanza, il GPA o un numero casuale in un intervallo.",
      audience:
        "Usale quando un foglio di calcolo sarebbe eccessivo. Sono aiuti per l’aritmetica. I risultati su prestiti, imposte e stipendi sono stime, non consulenze finanziarie, fiscali, mediche o tecniche.",
    },
    "text-tools": {
      name: "Strumenti per il testo",
      description: "Strumenti per scrivere ed elaborare testi",
      shortDescription:
        "Conta, ripulisci, converti e formatta il testo nel browser.",
      intro:
        "Gli strumenti per il testo contano parole e caratteri, cambiano maiuscole e minuscole, trovano e sostituiscono, rimuovono le interruzioni di riga, numerano le righe, eliminano righe duplicate o spazi in eccesso, ordinano le righe, confrontano due bozze e generano testo segnaposto per un layout.",
      audience:
        "Sono pensati per autori, redattori e chiunque debba ripulire un testo incollato da un documento o da un foglio di calcolo. Il testo incollato resta nel browser.",
    },
    "developer-tools": {
      name: "Strumenti per sviluppatori",
      description: "Formatta, codifica, minifica e converti dati nel browser",
      shortDescription:
        "Formatta JSON, codifica dati, minifica codice e converti Markdown o HTML in locale.",
      intro:
        "Gli strumenti per sviluppatori formattano JSON, convertono tra JSON e CSV, testano espressioni regolari, calcolano hash SHA-256 o SHA-512, codificano e decodificano Base64, URL e HTML, minificano HTML, CSS o JavaScript, convertono Markdown e generano UUID o timestamp Unix. Gli strumenti per i colori convertono i valori esadecimali in RGB, verificano il contrasto e creano gradienti e ombre CSS.",
      audience:
        "Sono per chi modifica codice o dati e vuole un risultato nella pagina senza installare pacchetti. Minificatori e convertitori seguono le regole di ogni formato, quindi un input non valido viene rifiutato invece di essere riscritto senza avvisare.",
    },
    "image-tools": {
      name: "Strumenti per immagini",
      description: "Strumenti per immagini e PDF nel browser",
      shortDescription:
        "Comprimi, converti e analizza immagini e PDF senza caricarli online.",
      intro:
        "Gli strumenti per immagini comprimono, ridimensionano, ritagliano, convertono e campionano i colori di un’immagine. Gli strumenti PDF di questa categoria uniscono, dividono, comprimono, contano le pagine, leggono o rimuovono i metadati, estraggono il testo, trasformano le pagine in immagini JPG e creano un PDF da immagini o testo.",
      audience:
        "I file vengono elaborati nel browser. Un PDF scansionato potrebbe non contenere testo selezionabile. Compressione e conversione possono ridurre la qualità, quindi controlla il file scaricato prima di sostituire l’originale.",
    },
    "seo-utilities": {
      name: "SEO e utilità",
      description: "Link, slug, codici QR e password",
      shortDescription:
        "Crea link UTM e slug, genera o scansiona codici QR e genera password.",
      intro:
        "Queste utilità creano un URL di campagna, trasformano un titolo in uno slug, generano un codice QR da testo o dati strutturati, scansionano un codice QR con la fotocamera o da un’immagine e generano una password in locale.",
      audience:
        "Lo strumento QR di base codifica testo semplice o un URL. QR Code Generator Pro aggiunge Wi-Fi, contatti e opzioni di colore. Il generatore di password crea una stringa su questo dispositivo. Non è un gestore di password.",
    },
    "ai-tools": {
      name: "Strumenti IA",
      description:
        "Generatori di prompt e strumenti di scrittura, con IA Gemini opzionale",
      shortDescription:
        "Crea prompt, studia lo stile di scrittura e accorcia una bozza, nel browser o con l’IA Gemini.",
      intro:
        "Questi strumenti ti aiutano a scrivere un prompt, descrivere una scena per un’immagine o un video, analizzare lo stile di scrittura o accorciare una bozza lunga. Il pulsante principale di ogni strumento funziona nel tuo browser. I pulsanti IA (Generate, Analyze, Compress o Humanize with AI) inviano il testo inserito al modello Gemini di Google per generare il risultato.",
      audience:
        "Usa il pulsante del browser se non vuoi che il testo lasci questo dispositivo, e un pulsante IA se vuoi che Gemini lo riscriva o lo ampli. Il testo inviato a Gemini non viene salvato su questo sito. Gli strumenti per prompt restituiscono testo, non immagini né video. Gli strumenti di scrittura non stabiliscono chi ha scritto un testo e non garantiscono che una bozza accorciata superi un rilevatore.",
    },
  },
};

export default messages;
