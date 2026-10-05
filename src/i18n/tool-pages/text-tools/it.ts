import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Un contaparole mostra parole, caratteri e frasi di un testo incollato, oltre a una semplice stima del tempo di lettura.",
    "content": {
      "about": "Visualizza parole, caratteri, frasi, paragrafi e un tempo di lettura indicativo per il testo che incolli. Chi controlla una didascalia, un abstract o un post breve vede i totali aggiornarsi mentre scrive. Il tempo di lettura presuppone circa 225 parole al minuto: è una stima, non una velocità misurata.",
      "howTo": [
        "Incolla o scrivi il testo nella casella.",
        "I conteggi di parole, caratteri, frasi e paragrafi si aggiornano mentre scrivi.",
        "Usa «Testo di esempio» per provare il contatore, «Cancella» per svuotare la casella o «Copia» per copiare il testo."
      ],
      "examples": [
        {
          "title": "Una frase breve",
          "body": "«Hello world.» conta 2 parole e 1 frase."
        },
        {
          "title": "Righe vuote",
          "body": "Un testo separato da una riga vuota conta come due paragrafi."
        }
      ],
      "explanation": "Le parole sono gruppi di caratteri senza spazi. I caratteri sono punti di codice Unicode, quindi lettere, punteggiatura e la maggior parte delle emoji contano ciascuna come un carattere. Le frasi vengono divise in corrispondenza di . ! ? e …. I paragrafi sono blocchi non vuoti separati da a capo. Il tempo di lettura usa circa 225 parole al minuto.",
      "limitations": "Le parole sono gruppi di caratteri senza spazi e le frasi vengono divise su . ! ? e …. Il tempo di lettura presuppone circa 225 parole al minuto: è una stima, non una velocità di lettura misurata. Il contatore non controlla la grammatica e non identifica l’autore.",
      "faqs": [
        {
          "question": "Il contaparole è gratuito?",
          "answer": "Sì. Contare parole, caratteri, frasi e paragrafi è gratuito e non serve un account."
        },
        {
          "question": "Il mio testo viene caricato online?",
          "answer": "No. Il conteggio avviene nel browser. Il testo non viene inviato a Tools Star Hub né salvato."
        },
        {
          "question": "Come vengono contati gli spazi in più?",
          "answer": "Più spazi di fila non creano parole in più, ma contano come caratteri."
        },
        {
          "question": "Quante parole ha un discorso di 5 minuti?",
          "answer": "Il ritmo varia, ma 130–150 parole al minuto è un riferimento comune, quindi un discorso di 5 minuti ha spesso circa 650–750 parole."
        },
        {
          "question": "Come viene stimato il tempo di lettura?",
          "answer": "Il numero di parole viene diviso per circa 225 parole al minuto. È una stima per un lettore medio, non una velocità di lettura misurata."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Il conteggio avviene nel browser. Nulla viene inviato a un server.",
      "Paste or type text here...": "Incolla o scrivi il testo qui…",
      "Sample text": "Testo di esempio",
      "Reading time": "Tempo di lettura",
      "0 min": "0 min",
      "{0} min": "{0} min"
    }
  },
  "character-counter": {
    "answer": "Un contacaratteri conta caratteri, parole e righe mentre scrivi; il totale principale include gli spazi.",
    "content": {
      "about": "Conta caratteri, parole e righe, con un totale separato che esclude gli spazi. Utile quando un modulo, un post sui social o una meta description ha un limite di caratteri. Un’emoji conta come un carattere e, a differenza del contaparole, questa pagina non divide il testo in frasi.",
      "howTo": [
        "Scrivi o incolla il testo nella casella.",
        "I conteggi di caratteri, parole e righe si aggiornano subito.",
        "Copia il numero di caratteri o svuota la casella quando hai finito."
      ],
      "examples": [
        {
          "title": "Emoji e lettere",
          "body": "«A😀» sono 2 caratteri: una lettera e un’emoji."
        },
        {
          "title": "Righe",
          "body": "Un a capo inizia una nuova riga. Una casella vuota ha 0 righe."
        }
      ],
      "explanation": "I caratteri sono contati come punti di codice Unicode. Gli spazi sono inclusi nel totale principale ed esclusi dal totale «senza spazi». Le righe seguono gli a capo nella casella, compresa un’ultima riga vuota.",
      "limitations": "Un carattere è un punto di codice Unicode, quindi un’emoji conta come uno anche se è composta da più simboli. Gli spazi restano nel totale principale e spariscono da quello senza spazi. I confini delle frasi qui non vengono rilevati.",
      "faqs": [
        {
          "question": "Il contacaratteri è gratuito?",
          "answer": "Sì. Puoi contare caratteri, parole e righe mentre scrivi senza pagare né creare un account."
        },
        {
          "question": "Il testo esce dal mio computer?",
          "answer": "No. Il testo resta nel browser e non viene inviato a nessun server."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. I conteggi vengono calcolati in questa scheda. Svuotando la casella il testo sparisce dalla pagina, e non viene salvato nella memoria locale."
        },
        {
          "question": "Gli spazi contano come caratteri?",
          "answer": "Sì, nel totale principale. Il contatore mostra anche un secondo totale senza spazi, richiesto da alcuni moduli e compiti."
        },
        {
          "question": "Quanti caratteri vale un’emoji?",
          "answer": "In questa pagina una singola emoji conta come un carattere Unicode. Alcune app contano certe emoji come due o più, quindi il loro limite può variare leggermente."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "I conteggi si aggiornano mentre scrivi. Il testo resta nel browser.",
      "Type or paste text...": "Scrivi o incolla il testo…",
      "Copy count": "Copia conteggio"
    }
  },
  "case-converter": {
    "answer": "Un convertitore di maiuscole e minuscole trasforma il testo in maiuscolo, minuscolo, iniziali maiuscole, camelCase e stili simili.",
    "content": {
      "about": "Passa il testo tra maiuscolo, minuscolo, iniziali maiuscole, maiuscola a inizio frase, camelCase, PascalCase, snake_case e kebab-case. Chi rinomina identificatori nel codice o sistema un titolo cambia lo stile in un solo passaggio. La maiuscola a inizio frase segue la punteggiatura inglese e non applica le regole di altre lingue.",
      "howTo": [
        "Incolla il testo nella casella.",
        "Scegli uno stile. Il risultato si aggiorna subito.",
        "Copia il risultato o svuota entrambe le caselle."
      ],
      "examples": [
        {
          "title": "Iniziali maiuscole",
          "body": "«hello world» diventa «Hello World». Ogni parola inizia con la maiuscola."
        },
        {
          "title": "camelCase",
          "body": "«Hello world example» diventa helloWorldExample."
        }
      ],
      "explanation": "Maiuscolo e minuscolo seguono le regole dell’inglese. Le iniziali maiuscole mettono in maiuscolo la prima lettera di ogni parola. La maiuscola a inizio frase porta tutto in minuscolo e poi mette la maiuscola all’inizio del testo e dopo . ! ? o … — una regola semplice pensata per l’inglese, non un correttore grammaticale per ogni lingua. camelCase, PascalCase, snake_case e kebab-case si costruiscono da gruppi di lettere e cifre.",
      "limitations": "La maiuscola a inizio frase segue la punteggiatura inglese, non le regole di altre lingue. camelCase, snake_case e kebab-case mantengono i gruppi di lettere e cifre ed eliminano la punteggiatura tra di essi.",
      "faqs": [
        {
          "question": "Il convertitore è gratuito?",
          "answer": "Sì. Passare tra maiuscolo, minuscolo, iniziali maiuscole e gli stili per il codice è gratuito e senza account."
        },
        {
          "question": "La maiuscola a inizio frase funziona in tutte le lingue?",
          "answer": "No. Segue uno schema di punteggiatura inglese di base e non applica regole specifiche delle lingue."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. Il testo incollato viene convertito in questa scheda. Non viene caricato né salvato nella memoria locale."
        },
        {
          "question": "Che differenza c’è tra maiuscole da titolo e da frase?",
          "answer": "Il formato titolo mette la maiuscola alla prima lettera di ogni parola, come nei titoli inglesi. Il formato frase la mette solo alla prima lettera di ogni frase, come nella scrittura normale."
        },
        {
          "question": "Cosa sono camelCase, snake_case e kebab-case?",
          "answer": "Sono stili di denominazione usati nel codice. camelCase unisce le parole con le maiuscole (myVariableName), snake_case usa i trattini bassi (my_variable_name) e kebab-case i trattini (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Incolla il testo da convertire",
      "Case": "Stile",
      "Result ({0})": "Risultato ({0})",
      "UPPERCASE": "MAIUSCOLO",
      "lowercase": "minuscolo",
      "Title Case": "Iniziali Maiuscole",
      "Sentence case": "Maiuscola a inizio frase"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Un generatore di lorem ipsum crea paragrafi, frasi o parole segnaposto per layout e bozze.",
    "content": {
      "about": "Genera paragrafi, frasi o parole segnaposto da un elenco fisso di parole latine. I designer lo usano per riempire un mockup quando il testo vero non c’è ancora. Il primo paragrafo inizia con la classica frase d’apertura, e ogni richiesta si ferma a 20 paragrafi, 50 frasi o 500 parole.",
      "howTo": [
        "Scegli paragrafi, frasi o parole.",
        "Imposta una quantità entro i limiti indicati e premi «Genera».",
        "Copia il testo, genera di nuovo o ripristina i valori predefiniti."
      ],
      "examples": [
        {
          "title": "Tre paragrafi",
          "body": "Il primo paragrafo inizia con la classica frase «Lorem ipsum dolor sit amet…» e prosegue con parole mescolate da un elenco locale."
        },
        {
          "title": "Cinquanta parole",
          "body": "Utile come breve segnaposto in un mockup."
        }
      ],
      "explanation": "Il lorem ipsum è latino rimescolato usato come testo fittizio per valutare un layout senza i contenuti reali. Questo generatore usa un elenco di parole locale e i valori casuali crittograficamente sicuri del browser. Non chiama API esterne. La quantità è limitata per mantenere la pagina utilizzabile.",
      "limitations": "Il risultato è latino segnaposto da un elenco fisso: non è una traduzione né un testo per un prodotto reale. I paragrafi si fermano a 20, le frasi a 50 e le parole a 500.",
      "faqs": [
        {
          "question": "Il generatore di lorem ipsum è gratuito?",
          "answer": "Sì. Generare paragrafi, frasi o parole segnaposto è gratuito e non serve un account."
        },
        {
          "question": "Il testo viene scaricato da internet?",
          "answer": "No. Le parole sono salvate in questa pagina e vengono composte nel browser."
        },
        {
          "question": "Perché c’è un limite massimo?",
          "answer": "Blocchi molto grandi possono bloccare una scheda. I paragrafi si fermano a 20, le frasi a 50 e le parole a 500."
        },
        {
          "question": "Cosa significa lorem ipsum?",
          "answer": "Il lorem ipsum è latino rimescolato usato come testo segnaposto. Sembra un testo vero, quindi permette di valutare un layout senza che i lettori si concentrino sulle parole."
        },
        {
          "question": "Quando usare un testo segnaposto?",
          "answer": "Per mockup, modelli e prove di caratteri. Sostituiscilo con il testo vero prima di pubblicare la pagina, perché il segnaposto non dice nulla ai visitatori."
        }
      ]
    },
    "ui": {
      "Quantity": "Quantità",
      "Enter a whole number from {0} to {1}.": "Inserisci un numero intero da {0} a {1}.",
      "Enter a quantity.": "Inserisci una quantità.",
      "Choose between {0} and {1} {2}.": "Scegli tra {0} e {1} {2}.",
      "paragraphs": "paragrafi",
      "sentences": "frasi",
      "words": "parole",
      "A secure random source is not available in this browser.": "In questo browser non è disponibile una fonte casuale sicura."
    }
  },
  "text-diff": {
    "answer": "Un confronto testi mette a confronto il testo originale e quello modificato sul tuo dispositivo e segnala righe o parole aggiunte, rimosse e invariate.",
    "content": {
      "about": "Incolla un originale e una revisione e confrontali per righe o per parole. Chi controlla due bozze dello stesso paragrafo usa la modalità righe per le righe cambiate per intero e quella per parole quando una frase è stata ritoccata. Ogni lato deve restare sotto 200.000 caratteri e sotto 4.000 righe o parole.",
      "howTo": [
        "Incolla il testo originale a sinistra e quello modificato a destra.",
        "Scegli il confronto per righe o per parole.",
        "Premi «Confronta». I blocchi aggiunti, rimossi e invariati hanno un’etichetta, non solo un colore.",
        "Copia il diff in testo semplice se ti serve in un altro editor. Svuota entrambi i lati alla fine."
      ],
      "examples": [
        {
          "title": "Due versioni di un paragrafo",
          "body": "La modalità righe evidenzia le righe intere cambiate. Quella per parole è migliore quando una frase è stata modificata sul posto."
        },
        {
          "title": "Testi identici",
          "body": "Se i due lati coincidono, il riepilogo mostra solo contenuto invariato, senza blocchi aggiunti o rimossi."
        }
      ],
      "explanation": "Il confronto avviene nel browser. Il testo non viene inviato da nessuna parte e le bozze non restano nella memoria locale. Le differenze sono mostrate come nodi di testo React, quindi i contenuti non possono iniettare HTML. Gli input molto grandi vengono rifiutati per mantenere la scheda reattiva.",
      "limitations": "A seconda della modalità, ogni lato deve restare sotto 200.000 caratteri e sotto 4.000 righe o parole. La vista etichetta i blocchi aggiunti, rimossi e invariati. Non unisce file e non apre documenti Word.",
      "faqs": [
        {
          "question": "Il confronto testi è gratuito?",
          "answer": "Sì. Confrontare due testi per righe o per parole è gratuito e non serve un account."
        },
        {
          "question": "Come confronto due file di testo?",
          "answer": "Incolla ogni versione in un pannello, scegli Righe o Parole e premi «Confronta». Puoi copiare una vista +/- del risultato."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. I due pannelli vengono confrontati in questa scheda. Il testo non viene inviato a nessun server né salvato nella memoria locale."
        },
        {
          "question": "Che cos’è un diff?",
          "answer": "Un diff è un elenco delle differenze tra due versioni di un testo: cosa è stato aggiunto, cosa è stato rimosso e cosa è rimasto uguale."
        },
        {
          "question": "Meglio la modalità per righe o per parole?",
          "answer": "Usa la modalità per righe per codice, elenchi e file in cui cambiano righe intere. Usa quella per parole quando una frase è stata modificata sul posto."
        }
      ]
    },
    "ui": {
      "Original": "Originale",
      "Modified": "Modificato",
      "Compare": "Confronta",
      "Copy diff": "Copia diff",
      "Both sides are empty.": "Entrambi i lati sono vuoti.",
      "The two texts are the same.": "I due testi sono identici.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Il testo confrontato è mostrato come testo semplice, non come HTML. Il colore è solo un aiuto: ogni blocco ha anche l’etichetta Aggiunto, Rimosso o Invariato.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Le due bozze vengono confrontate in questa scheda. Il testo non viene inviato a nessun server.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Mantieni ogni lato sotto i 200.000 caratteri perché il confronto resti fluido.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Questo confronto gestisce fino a {0} {1}. Accorcia il testo o dividilo.",
      "lines": "righe",
      "words": "parole"
    }
  },
  "duplicate-line-remover": {
    "answer": "Uno strumento per rimuovere le righe duplicate tiene la prima occorrenza di ogni riga ed elimina le ripetizioni successive, con opzioni per spazi e maiuscole.",
    "content": {
      "about": "Tieni la prima copia di ogni riga ed elimina le ripetizioni, nell’ordine in cui le hai incollate. Utile per una mailing list o un log in cui la stessa riga compare più volte. Ignorando maiuscole e spazi, apple e Apple diventano una sola riga e resta la prima grafia.",
      "howTo": [
        "Incolla un testo su più righe. Non viene modificato finché non avvii lo strumento.",
        "Se vuoi, ignora maiuscole/minuscole, rimuovi gli spazi prima del confronto o elimina le righe vuote.",
        "Premi «Rimuovi duplicati». La prima occorrenza di ogni riga resta, nell’ordine.",
        "Copia o scarica l’elenco univoco. Svuota entrambe le caselle alla fine."
      ],
      "examples": [
        {
          "title": "Una mailing list",
          "body": "apple, Apple, apple con rimozione degli spazi e senza distinzione di maiuscole diventano un solo apple, nella prima grafia incollata."
        },
        {
          "title": "Righe vuote",
          "body": "Attiva «Rimuovi righe vuote» se vuoi solo righe univoche non vuote. Altrimenti una riga vuota è un valore come gli altri."
        }
      ],
      "explanation": "Ogni riga riceve una chiave in base alle opzioni di confronto. La prima volta che una chiave compare, la riga viene tenuta; le ripetizioni successive sono contate come duplicati rimossi. L’ordine delle prime occorrenze è mantenuto.",
      "limitations": "Viene tenuta la prima riga corrispondente, nell’ordine di incollaggio. Le opzioni per maiuscole, spazi e righe vuote cambiano ciò che conta come stessa riga. Le ripetizioni successive vengono contate ed eliminate. Oltre 400.000 caratteri il testo viene rifiutato. La casella di input non viene riscritta.",
      "faqs": [
        {
          "question": "Lo strumento è gratuito?",
          "answer": "Sì. Rimuovere le righe ripetute tenendo la prima copia è gratuito, senza registrazione."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. La rimozione dei duplicati avviene in questa scheda. L’elenco non viene caricato né salvato nella memoria locale."
        },
        {
          "question": "La casella originale viene modificata?",
          "answer": "No. L’input resta come l’hai incollato. L’elenco univoco compare nella casella del risultato dopo l’operazione."
        },
        {
          "question": "Come rimuovo i duplicati da un elenco?",
          "answer": "Incolla l’elenco con un elemento per riga ed esegui lo strumento. La prima copia di ogni riga resta nell’ordine originale e le ripetizioni successive vengono eliminate."
        },
        {
          "question": "Può ignorare differenze di maiuscole o spazi?",
          "answer": "Sì. Attiva le opzioni per maiuscole e spazi, così righe come Apple e apple, o righe con spazi in più, contano come uguali."
        }
      ]
    },
    "ui": {
      "One line per row": "Una riga per voce",
      "Case-insensitive match": "Ignora maiuscole/minuscole",
      "Trim spaces before comparing": "Rimuovi gli spazi prima del confronto",
      "Remove empty lines": "Rimuovi righe vuote",
      "First occurrence of each line is kept, in the original order.": "La prima occorrenza di ogni riga resta, nell’ordine originale.",
      "Unique lines": "Righe univoche",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Le righe ripetute vengono eliminate in questa scheda. L’elenco non viene caricato.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Mantieni il testo sotto i 400.000 caratteri perché il browser resti reattivo."
    }
  },
  "whitespace-remover": {
    "answer": "Uno strumento per rimuovere gli spazi taglia le righe, riduce gli spazi ripetuti, converte le tabulazioni e pulisce le righe vuote secondo le opzioni scelte.",
    "content": {
      "about": "Pulisci spazi, tabulazioni e righe vuote in eccesso usando solo le opzioni che attivi. Utile per un log incollato o un elenco con rientri casuali. «Taglia ogni riga» prevale sulle caselle separate per inizio e fine, e lasciando spente queste opzioni il rientro resta.",
      "howTo": [
        "Incolla un testo con spazi, tabulazioni o righe vuote in eccesso.",
        "Seleziona solo le pulizie che vuoi. Non succede nulla finché non premi «Pulisci testo».",
        "Controlla i conteggi di righe e caratteri, poi copia o scarica il risultato.",
        "Svuota le caselle per scartare il testo. Non viene salvato."
      ],
      "examples": [
        {
          "title": "Righe di log rientrate",
          "body": "Taglia ogni riga, oppure rimuovi solo gli spazi iniziali se devi tenere quelli finali."
        },
        {
          "title": "Tabulazioni e spazi misti",
          "body": "Converti le tabulazioni in 2 o 4 spazi, poi riduci gli spazi ripetuti se vuoi spazi singoli."
        }
      ],
      "explanation": "Ogni opzione è esplicita. «Taglia ogni riga» prevale sulle caselle per inizio e fine in quel passaggio. «Rimuovi righe vuote» elimina tutte le righe vuote; ridurre le righe vuote ne lascia una sola tra i blocchi.",
      "limitations": "Vengono applicate solo le opzioni attivate. «Taglia ogni riga» prevale sulle caselle per inizio e fine in quel passaggio. «Rimuovi righe vuote» elimina tutte le righe vuote, mentre la riduzione ne lascia una tra i blocchi. Oltre 400.000 caratteri il testo viene rifiutato.",
      "faqs": [
        {
          "question": "Lo strumento è gratuito?",
          "answer": "Sì. Pulire spazi, tabulazioni e righe vuote in eccesso è gratuito e non serve un account."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. La pulizia resta in questa scheda. Il testo non viene inviato da nessuna parte né conservato nella memoria locale."
        },
        {
          "question": "Il mio rientro verrà distrutto?",
          "answer": "Solo se attivi il taglio, la rimozione degli spazi iniziali o la conversione delle tabulazioni. Lasciale spente per mantenerlo."
        },
        {
          "question": "Come rimuovo gli spazi doppi da un testo?",
          "answer": "Attiva l’opzione che unisce gli spazi ripetuti. Le sequenze di spazi in ogni riga diventano un solo spazio."
        },
        {
          "question": "Come elimino le righe vuote?",
          "answer": "Usa la rimozione delle righe vuote per eliminarle tutte, oppure l’unione delle righe vuote per lasciarne una sola tra i paragrafi."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Opzioni di pulizia",
      "Trim each line": "Taglia ogni riga",
      "Remove leading whitespace": "Rimuovi spazi iniziali",
      "Remove trailing whitespace": "Rimuovi spazi finali",
      "Collapse repeated spaces": "Riduci spazi ripetuti",
      "Convert tabs to spaces": "Converti tabulazioni in spazi",
      "Remove blank lines": "Rimuovi righe vuote",
      "Collapse multiple blank lines": "Riduci più righe vuote",
      "Trim entire document": "Taglia l’intero documento",
      "Tab width": "Larghezza tabulazione",
      "2 spaces": "2 spazi",
      "4 spaces": "4 spazi",
      "Lines before": "Righe prima",
      "Lines after": "Righe dopo",
      "Characters before": "Caratteri prima",
      "Characters after": "Caratteri dopo",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Spazi, tabulazioni e righe vuote vengono puliti in questa scheda. Il testo non viene inviato a nessun server."
    }
  },
  "line-sorter": {
    "answer": "Un ordinatore di righe mette in ordine un testo su più righe alfabeticamente, numericamente o per lunghezza, con rimozione facoltativa dei duplicati.",
    "content": {
      "about": "Ordina una voce per riga dalla A alla Z, dalla Z alla A, per numero iniziale o per lunghezza. Utile quando un elenco di nomi o un export numerato va messo in ordine senza foglio di calcolo. In ordine numerico, 10 viene dopo 2, e una riga senza numero iniziale va dopo quelle numerate.",
      "howTo": [
        "Incolla una voce per riga.",
        "Scegli A→Z, Z→A, ordine numerico o lunghezza. Imposta maiuscole, spazi, righe vuote e duplicati come serve.",
        "Premi «Ordina righe». Le voci uguali mantengono il loro ordine relativo originale.",
        "Copia o scarica l’elenco ordinato."
      ],
      "examples": [
        {
          "title": "Nomi",
          "body": "A→Z senza distinzione di maiuscole mette ada e Ada vicine e, quando sono uguali, tiene prima la grafia apparsa per prima."
        },
        {
          "title": "Righe numerate",
          "body": "«Numerico crescente» legge un numero iniziale, quindi 10 viene dopo 2. Le righe senza numero vanno dopo quelle numerate."
        }
      ],
      "explanation": "L’ordinamento è stabile: quando due righe sono uguali, quella inserita prima resta davanti. Le modalità numeriche leggono un intero o un decimale iniziale. La rimozione facoltativa dei duplicati usa la stessa chiave di confronto delle opzioni per maiuscole e spazi.",
      "limitations": "Le modalità sono A–Z, Z–A, numerico crescente, numerico decrescente, più corta e più lunga. Le righe uguali mantengono l’ordine originale. La modalità numerica legge un numero iniziale, e una riga che non lo ha va dopo quelle numerate. Oltre 400.000 caratteri il testo viene rifiutato.",
      "faqs": [
        {
          "question": "L’ordinatore di righe è gratuito?",
          "answer": "Sì. Ordinare un elenco di righe è gratuito e senza account."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. L’ordinamento avviene in questa scheda. Le righe non vengono inviate a un server né salvate nella memoria locale."
        },
        {
          "question": "Le righe vuote vengono mantenute?",
          "answer": "Sì, a meno che tu scelga «Ignora righe vuote». Nelle modalità alfabetiche vengono ordinate come stringhe vuote."
        },
        {
          "question": "Come ordino un elenco alfabeticamente?",
          "answer": "Incolla un elemento per riga e scegli dalla A alla Z, oppure dalla Z alla A per l’ordine inverso. Le righe uguali mantengono l’ordine originale."
        },
        {
          "question": "Come ordino le righe per numero?",
          "answer": "Scegli numerico crescente o decrescente. Ogni riga viene ordinata in base al numero iniziale, quindi 2 viene prima di 10."
        }
      ]
    },
    "ui": {
      "One item per line": "Una voce per riga",
      "Numeric ascending": "Numerico crescente",
      "Numeric descending": "Numerico decrescente",
      "Shortest → longest": "Più corta → più lunga",
      "Longest → shortest": "Più lunga → più corta",
      "Trim before comparing": "Rimuovi spazi prima del confronto",
      "Ignore empty lines": "Ignora righe vuote",
      "Sort lines": "Ordina righe",
      "Result lines": "Righe del risultato",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Le righe vengono ordinate in questa scheda. L’elenco non viene inviato a Tools Star Hub."
    }
  },
  "find-and-replace": {
    "answer": "Trova e sostituisci cambia la prima occorrenza o tutte nel testo incollato. Puoi attivare o disattivare la distinzione tra maiuscole e minuscole.",
    "content": {
      "about": "Incolla un testo, scrivi cosa cercare e il testo sostitutivo. Puoi cambiare la prima occorrenza o tutte, e ignorare maiuscole e minuscole.",
      "howTo": [
        "Incolla il testo originale.",
        "Scrivi il testo da cercare. Un campo di ricerca vuoto viene rifiutato.",
        "Scrivi la sostituzione. Lasciala vuota se vuoi eliminare le occorrenze.",
        "Scegli «Sostituisci la prima» o «Sostituisci tutte» e attiva o disattiva «Distingui maiuscole».",
        "Premi «Sostituisci», poi copia il risultato o svuota il modulo."
      ],
      "features": [
        "Prima occorrenza o tutte le occorrenze non sovrapposte.",
        "Ricerca con o senza distinzione tra maiuscole e minuscole; la sostituzione viene sempre inserita esattamente come l’hai scritta.",
        "Il numero di sostituzioni effettuate."
      ],
      "examples": [
        {
          "title": "Correggere un nome ripetuto",
          "body": "Originale: «Ana sent the file. ana sent the notes.» Trova: ana. Sostituzione: Ana. Distinzione delle maiuscole disattivata, «Sostituisci tutte». Entrambi i nomi diventano Ana e il conteggio è 2."
        },
        {
          "title": "Cambiare solo il primo titolo",
          "body": "Una bozza ripete «Draft» tre volte. «Sostituisci la prima» cambia la prima e lascia le altre due. Il conteggio è 1."
        }
      ],
      "explanation": "La ricerca scorre il testo originale dall’inizio. Dopo un’occorrenza, la ricerca successiva riparte dopo di essa, quindi una sostituzione non viene cercata di nuovo. La modalità senza distinzione confronta copie in minuscolo senza modificare il testo circostante.",
      "tips": [
        "Se ti serve uno schema come «qualsiasi numero», usa il tester di regex. Questo strumento cerca esattamente i caratteri che scrivi.",
        "Una sostituzione che contiene il testo cercato viene inserita così com’è e non viene sostituita di nuovo nello stesso passaggio."
      ],
      "limitations": "Non è un’espressione regolare. Non rispetta i confini di parola e non salta il testo tra virgolette. Le occorrenze sovrapposte non vengono contate due volte.",
      "faqs": [
        {
          "question": "Posso eliminare le occorrenze?",
          "answer": "Sì. Lascia vuota la sostituzione. Ogni occorrenza viene rimossa e conta comunque come sostituzione."
        },
        {
          "question": "Perché una parola corta è cambiata dentro una parola più lunga?",
          "answer": "La ricerca è per caratteri. Cercare «cat» trova anche l’inizio di «catalog». Aggiungi spazi se vuoi solo la parola intera, oppure usa il tester di regex con un confine di parola."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. Il testo e la ricerca restano in questa scheda. Non vengono inviati a nessun server."
        },
        {
          "question": "Come sostituisco una parola in tutto il testo?",
          "answer": "Inserisci la parola da cercare e quella sostitutiva, scegli “Sostituisci tutto” e copia il risultato. Attiva la distinzione tra maiuscole e minuscole se conta."
        },
        {
          "question": "Trova e sostituisci supporta le espressioni regolari?",
          "answer": "No. Cerca esattamente il testo che scrivi. Per i pattern, prova prima il pattern nel tester di regex."
        }
      ]
    },
    "ui": {
      "Replacement": "Sostituzione",
      "How many matches": "Quali occorrenze",
      "Replace first": "Sostituisci la prima",
      "Replace all": "Sostituisci tutte",
      "Case-sensitive": "Distingui maiuscole",
      "{0} replacement.": "{0} sostituzione.",
      "{0} replacements.": "{0} sostituzioni.",
      "Paste the text you want to change.": "Incolla il testo che vuoi modificare.",
      "Enter the text to find.": "Scrivi il testo da cercare."
    }
  },
  "remove-line-breaks": {
    "answer": "Rimuovi interruzioni di riga unisce le righe spezzate con spazi, elimina gli a capo o mantiene una riga vuota tra i paragrafi.",
    "content": {
      "about": "Incolla un testo spezzato su molte righe. Puoi unire le righe con spazi, eliminare gli a capo o mantenere una riga vuota tra i paragrafi.",
      "howTo": [
        "Incolla il testo originale. La casella mantiene gli a capo così puoi vederli.",
        "Scegli un’opzione: sostituire gli a capo con spazi, rimuoverli o mantenere le interruzioni di paragrafo.",
        "Premi «Pulisci testo».",
        "Copia il testo pulito o svuota entrambe le caselle."
      ],
      "features": [
        "L’originale resta nella prima casella; il testo pulito è separato.",
        "La modalità spazi unisce le righe e riduce gli spazi ripetuti.",
        "La modalità paragrafi mantiene una riga vuota dove ce n’era già una."
      ],
      "examples": [
        {
          "title": "Un’email spezzata",
          "body": "Tre righe brevi della stessa frase diventano una sola riga con spazi singoli tra le parole se scegli «Sostituisci gli a capo con spazi»."
        },
        {
          "title": "Due paragrafi",
          "body": "Un blocco, una riga vuota, poi un altro blocco. «Mantieni le interruzioni di paragrafo» unisce le righe di ogni blocco e lascia una riga vuota tra di essi."
        }
      ],
      "explanation": "I fine riga di Windows e dei vecchi Mac sono trattati come lo stesso a capo. La modalità spazi trasforma ogni serie di a capo in uno spazio, poi taglia le estremità. La modalità rimozione elimina gli a capo e può attaccare l’ultima parola di una riga alla prima della successiva. La modalità paragrafi divide prima sulle righe vuote, poi unisce le righe di ogni paragrafo.",
      "tips": [
        "Usa gli spazi per la prosa. Usa la rimozione solo quando gli a capo sono finiti dentro un elemento, come un numero lungo diviso su più righe.",
        "Se una poesia o un elenco deve mantenere le righe, non usare questo strumento."
      ],
      "limitations": "Lo strumento non distingue una frase spezzata da un elenco. In modalità paragrafi, un singolo a capo viene trattato come interruzione automatica. Solo una riga vuota separa i paragrafi.",
      "faqs": [
        {
          "question": "Vengono rimossi gli spazi all’interno di una riga?",
          "answer": "La modalità spazi riduce spazi e tabulazioni ripetuti. Le modalità rimozione e paragrafi lasciano gli spazi già presenti nella riga."
        },
        {
          "question": "E se incollo solo spazi?",
          "answer": "La pagina ti chiede di incollare del testo. Solo spazi bianchi non bastano."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. Il testo incollato viene riscritto in questa scheda. Non viene caricato."
        },
        {
          "question": "Come rimuovo gli a capo da un testo copiato da un PDF?",
          "answer": "Incolla il testo e scegli l’opzione che mantiene i paragrafi. Gli a capo singoli dentro un paragrafo diventano spazi e le righe vuote tra i paragrafi restano."
        },
        {
          "question": "Che differenza c’è tra sostituire e rimuovere gli a capo?",
          "answer": "Sostituire trasforma ogni a capo in uno spazio, quindi le parole restano separate. Rimuovere elimina l’a capo e unisce la fine di una riga all’inizio della successiva."
        }
      ]
    },
    "ui": {
      "Line breaks": "Interruzioni di riga",
      "Replace line breaks with spaces": "Sostituisci gli a capo con spazi",
      "Remove line breaks": "Rimuovi gli a capo",
      "Keep paragraph breaks": "Mantieni le interruzioni di paragrafo",
      "Cleaned text": "Testo pulito",
      "Paste some text first.": "Incolla prima del testo."
    }
  },
  "add-line-numbers": {
    "answer": "Aggiungi numeri di riga mette un numero e un separatore davanti a ogni riga senza modificare la riga stessa.",
    "content": {
      "about": "Incolla più righe e metti un numero davanti a ciascuna. Scegli tu il numero iniziale e i caratteri tra il numero e la riga.",
      "howTo": [
        "Incolla il testo. Ogni riga resta come l’hai scritta.",
        "Imposta il numero iniziale. Di solito è 1; è ammesso anche un intero sotto 0.",
        "Imposta il separatore. Quello predefinito è un punto seguito da uno spazio.",
        "Premi «Aggiungi numeri», poi copia le righe numerate o svuota il modulo."
      ],
      "features": [
        "Il testo della riga non viene tagliato né riscritto.",
        "Un separatore personalizzato, come \") \" o una tabulazione.",
        "Un numero iniziale diverso da 1."
      ],
      "examples": [
        {
          "title": "Un elenco di tre righe",
          "body": "Le righe «Prima riga», «Seconda riga» e «Terza riga» con inizio 1 e separatore «. » diventano «1. Prima riga», «2. Seconda riga» e «3. Terza riga»."
        },
        {
          "title": "Continuare un elenco da 10",
          "body": "Con numero iniziale 10 e separatore \") \", la prima riga incollata diventa «10) » più la riga originale."
        }
      ],
      "explanation": "Il testo viene diviso sugli a capo. Ogni riga riceve il numero iniziale più la sua posizione, poi il separatore, poi i caratteri originali. Anche le righe vuote vengono numerate, perché sono comunque righe.",
      "tips": [
        "Se il testo ha già dei numeri, toglili prima, altrimenti ogni riga avrà due numeri.",
        "Usa una tabulazione come separatore se vuoi incollare il risultato in un foglio di calcolo."
      ],
      "limitations": "Un a capo finale crea un’ultima riga vuota, che viene numerata. Gli a capo automatici nella casella non sono nuove righe: contano solo gli a capo reali.",
      "faqs": [
        {
          "question": "Cambia l’ortografia o la spaziatura?",
          "answer": "No. I caratteri dopo il separatore sono la riga originale."
        },
        {
          "question": "Posso partire da 0?",
          "answer": "Sì. Sono ammessi 0 e gli interi negativi. Un decimale come 1,5 no."
        },
        {
          "question": "Quello che scrivo viene inviato a un server?",
          "answer": "No. Le righe e il numero iniziale restano in questa scheda. Non vengono inviati a nessun server."
        },
        {
          "question": "Come numero le righe di un testo?",
          "answer": "Incolla il testo, imposta il numero iniziale e il separatore, ad esempio un punto e uno spazio, poi aggiungi i numeri e copia il risultato."
        },
        {
          "question": "Le righe vuote vengono numerate?",
          "answer": "Sì. Ogni vero a capo inizia una nuova riga numerata, comprese le righe vuote e una riga vuota finale."
        }
      ]
    },
    "ui": {
      "Starting number": "Numero iniziale",
      "Separator": "Separatore",
      "Placed between the number and the original line.": "Si trova tra il numero e la riga originale.",
      "Add numbers": "Aggiungi numeri",
      "Numbered lines": "Righe numerate",
      "Paste the lines you want to number.": "Incolla le righe da numerare.",
      "starting number": "numero iniziale",
      "Enter a whole number for the starting line.": "Inserisci un numero intero per la riga iniziale."
    }
  },
  "number-to-words": {
    "answer": "Un convertitore di numeri in lettere scrive in inglese i numeri interi da -999.999.999 a 999.999.999. Può anche rileggere semplici numeri scritti in inglese.",
    "content": {
      "about": "Scrivi un numero intero in lettere in inglese, o trasforma semplici numeri in lettere inglesi di nuovo in cifre. L’intervallo va da -999.999.999 a 999.999.999.",
      "howTo": [
        "Scegli numero in lettere o lettere in numero.",
        "Inserisci il numero o le parole.",
        "Premi «Converti»."
      ],
      "features": [
        "Numeri interi fino ai milioni.",
        "Numeri negativi e zero.",
        "Lettura inversa di semplici parole inglesi."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "In inglese: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "Il convertitore raggruppa il numero in milioni, migliaia e resto. Decine e unità da 21 a 99 usano il trattino. La parola «and» non viene usata. Gli zeri iniziali sono ignorati, quindi 007 è seven.",
      "tips": [
        "Scrivi twenty-one con il trattino o come twenty one.",
        "Usa minus per un numero negativo."
      ],
      "limitations": "Decimali, miliardi e frasi con la parola «and» non sono supportati. Il risultato è sempre in inglese, non in italiano.",
      "faqs": [
        {
          "question": "Come si scrive un numero in lettere?",
          "answer": "La pagina raggruppa milioni, migliaia e centinaia, poi scrive decine e unità. 123 è one hundred twenty-three."
        },
        {
          "question": "Quale intervallo è supportato?",
          "answer": "Numeri interi da -999.999.999 a 999.999.999."
        },
        {
          "question": "Cosa succede agli zeri iniziali?",
          "answer": "Vengono ignorati. 007 è seven."
        },
        {
          "question": "Si possono convertire i decimali?",
          "answer": "No. Inserisci un numero intero."
        },
        {
          "question": "Si possono riconvertire le parole in numero?",
          "answer": "Sì, per semplici parole inglesi in questo intervallo, come one hundred twenty-three o minus twenty."
        },
        {
          "question": "Questi numeri vengono inviati a un server?",
          "answer": "No. Il numero o le parole restano in questa scheda durante la conversione. Non vengono caricati."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Numeri interi da -999.999.999 a 999.999.999. Le parole seguono l’inglese americano, senza la parola «and», per esempio one hundred twenty-three. Gli zeri iniziali sono ignorati.",
      "Number to words": "Numero in lettere",
      "Words to number": "Lettere in numero",
      "Number words": "Numero in lettere (inglese)",
      "Enter a whole number. Decimals are outside this converter.": "Inserisci un numero intero. I decimali non sono supportati.",
      "Enter a whole number using digits.": "Inserisci un numero intero usando le cifre.",
      "This converter supports -999,999,999 through 999,999,999.": "Questo convertitore supporta da -999.999.999 a 999.999.999.",
      "Enter number words.": "Inserisci un numero in lettere inglesi.",
      "Enter number words after minus.": "Inserisci parole inglesi dopo minus.",
      "This converter does not use the word and.": "Questo convertitore non usa la parola «and».",
      "\"{0}\" is not a supported number word.": "«{0}» non è una parola numerica supportata.",
      "That number is outside -999,999,999 through 999,999,999.": "Quel numero è fuori dall’intervallo da -999.999.999 a 999.999.999."
    },
    "note": "Questo strumento scrive e legge i numeri in lettere solo in inglese. L’interfaccia e la guida sono tradotte."
  },
  "morse-code": {
    "answer": "Un traduttore di codice Morse converte testo A–Z e 0–9 in Morse internazionale o rilegge il Morse come testo. Le lettere sono separate da spazi e le parole da una barra.",
    "content": {
      "about": "Converti lettere e cifre in codice Morse internazionale, o il Morse di nuovo in testo.",
      "howTo": [
        "Scegli testo in Morse o Morse in testo.",
        "Inserisci A–Z, 0–9 o Morse fatto di punti, linee, spazi e /.",
        "Premi «Converti»."
      ],
      "features": [
        "A–Z e 0–9.",
        "Spazi tra le lettere e / tra le parole.",
        "Un errore chiaro per un carattere non supportato."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO è .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Ogni lettera e cifra ha uno schema Morse internazionale. Uno spazio separa le lettere, una barra separa le parole. Le minuscole vengono lette come maiuscole. Un carattere fuori da A–Z e 0–9 interrompe la conversione.",
      "tips": [
        "SOS si scrive ... --- ...",
        "Lascia uno spazio tra le lettere Morse."
      ],
      "limitations": "La punteggiatura e le lettere fuori da A–Z (come le vocali accentate) non vengono convertite. Uno schema Morse sconosciuto viene rifiutato.",
      "faqs": [
        {
          "question": "Come si scrive un testo in codice Morse?",
          "answer": "Ogni lettera diventa il suo schema Morse internazionale. Le lettere sono separate da uno spazio, le parole da /."
        },
        {
          "question": "Le minuscole funzionano?",
          "answer": "Sì. Le minuscole vengono lette come maiuscole."
        },
        {
          "question": "Cosa separa le parole?",
          "answer": "Una barra separa le parole. Uno spazio separa le lettere all’interno di una parola."
        },
        {
          "question": "E se scrivo della punteggiatura?",
          "answer": "La pagina indica il carattere non supportato e non tira a indovinare un codice."
        },
        {
          "question": "Il testo viene inviato da qualche parte?",
          "answer": "No. La conversione avviene nel browser."
        },
        {
          "question": "I dati vengono inviati a un server?",
          "answer": "No. Lettere e schemi Morse vengono convertiti in questa scheda. Non vengono inviati a nessun server."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Morse internazionale per A–Z e 0–9. Le lettere sono separate da uno spazio, le parole da /. I caratteri non supportati vengono rifiutati.",
      "Text to Morse": "Testo in Morse",
      "Morse to text": "Morse in testo",
      "Morse code": "Codice Morse",
      "Morse": "Morse",
      "Enter text to convert.": "Inserisci il testo da convertire.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "«{0}» non è supportato. Usa A–Z e 0–9.",
      "Enter Morse code to convert.": "Inserisci il codice Morse da convertire.",
      "Morse code can use only dots, dashes, spaces, and /.": "Il codice Morse può contenere solo punti, linee, spazi e /.",
      "A word separator is missing letters.": "A un separatore di parole mancano delle lettere.",
      "\"{0}\" is not a supported Morse letter.": "«{0}» non è una lettera Morse supportata."
    }
  },
  "roman-numeral-converter": {
    "answer": "Un convertitore di numeri romani trasforma i numeri interi da 1 a 3999 in numeri romani standard e rilegge quei numeri come cifre. I valori sopra 3999 non sono supportati.",
    "content": {
      "about": "Converti i numeri interi da 1 a 3999 in numeri romani standard, e quei numeri romani di nuovo in cifre.",
      "howTo": [
        "Scegli numero in romano o romano in numero.",
        "Inserisci un numero da 1 a 3999, o un numero romano con I, V, X, L, C, D e M.",
        "Premi «Converti»."
      ],
      "features": [
        "Notazione sottrattiva standard.",
        "Conversione inversa.",
        "Rifiuto dei numeri romani non in forma standard."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 è MCMXCIV."
        }
      ],
      "explanation": "La pagina costruisce i numeri con M, CM, D, CD, C, XC, L, XL, X, IX, V, IV e I. Una stringa romana è accettata solo se è la forma standard del suo valore. IIII, IC e IL vengono rifiutati. I numeri sopra 3999, compresa la notazione con vinculum, non sono supportati.",
      "tips": [
        "4 è IV, non IIII.",
        "9 è IX, non VIIII."
      ],
      "limitations": "L’intervallo è da 1 a 3999. Zero, negativi e numeri maggiori vengono rifiutati.",
      "faqs": [
        {
          "question": "Come si converte un numero in numero romano?",
          "answer": "La pagina usa la notazione sottrattiva standard. 4 è IV, 9 è IX, 40 è XL e 3999 è MMMCMXCIX."
        },
        {
          "question": "Quali numeri sono supportati?",
          "answer": "I numeri interi da 1 a 3999."
        },
        {
          "question": "Perché IIII viene rifiutato?",
          "answer": "IIII non è la forma standard di 4. La forma standard è IV."
        },
        {
          "question": "Si possono convertire numeri sopra 3999?",
          "answer": "No. Le notazioni estese per numeri più grandi non sono supportate."
        },
        {
          "question": "Un numero romano si può riconvertire in cifre?",
          "answer": "Sì, se è un numero romano standard da 1 a 3999."
        },
        {
          "question": "Questi numeri vengono inviati a un server?",
          "answer": "No. Il numero o il numero romano viene convertito in questa scheda. Non viene caricato."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Numeri romani standard da 1 a 3999. I valori sopra 3999, compresa la notazione con vinculum, non sono supportati. Le sequenze non valide come IIII vengono rifiutate.",
      "Number to Roman": "Numero in romano",
      "Roman to number": "Romano in numero",
      "Roman numeral": "Numero romano",
      "Enter a whole number from 1 through 3999.": "Inserisci un numero intero da 1 a 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Questo convertitore supporta da 1 a 3999. I numeri sopra 3999 non sono supportati.",
      "Enter a Roman numeral.": "Inserisci un numero romano.",
      "Use only I, V, X, L, C, D, and M.": "Usa solo I, V, X, L, C, D e M.",
      "\"{0}\" is not a valid Roman numeral.": "«{0}» non è un numero romano valido."
    }
  },
  "text-repeater": {
    "answer": "Un ripetitore di testo copia una parola, una frase o una riga da 1 a 200 volte, con niente, uno spazio o un a capo tra le copie.",
    "content": {
      "about": "Ripeti una parola, una frase o una riga da 1 a 200 volte. Tra le copie puoi mettere niente, uno spazio o un a capo. Il testo di partenza può arrivare a 5.000 caratteri e il risultato finale a 100.000 caratteri.",
      "howTo": [
        "Inserisci il testo da ripetere. Una casella vuota viene rifiutata.",
        "Inserisci un numero intero da 1 a 200.",
        "Scegli niente, uno spazio o un a capo tra le copie, poi premi «Ripeti»."
      ],
      "features": [
        "Una sola copia quando il numero è 1, senza separatori in più.",
        "Spazio o a capo solo tra le copie, non dopo l’ultima.",
        "Un limite di lunghezza per evitare che un risultato enorme riempia la pagina."
      ],
      "examples": [
        {
          "title": "Una parola tre volte",
          "body": "ha, numero 3, con uno spazio tra le copie, diventa ha ha ha."
        },
        {
          "title": "Una riga due volte",
          "body": "Pronto, numero 2, con un a capo tra le copie, diventa Pronto su una riga e Pronto su quella successiva."
        }
      ],
      "explanation": "La pagina copia il testo il numero di volte richiesto e unisce le copie con il separatore scelto. Non genera latino segnaposto e non rimuove i duplicati.",
      "tips": [
        "Usa un a capo per un elenco di righe identiche, uno spazio per tenere tutto su una riga."
      ],
      "limitations": "Il testo di partenza può avere fino a 5.000 caratteri, il numero arrivare a 200 e il risultato finale a 100.000 caratteri. Un risultato più lungo viene rifiutato.",
      "faqs": [
        {
          "question": "Il ripetitore di testo è gratuito?",
          "answer": "Sì. Puoi ripetere testo qui senza pagare né creare un account."
        },
        {
          "question": "Il numero 1 aggiunge un separatore?",
          "answer": "No. Una copia è esattamente il testo che hai scritto, senza aggiunte."
        },
        {
          "question": "Posso ripetere una riga vuota?",
          "answer": "Una casella vuota viene rifiutata. Una riga con soli spazi è ammessa, perché quegli spazi sono testo."
        },
        {
          "question": "Il testo viene inviato a un server?",
          "answer": "No. Le copie vengono create in questa scheda del browser. Tools Star Hub non invia il testo a nessun server e non lo salva nella memoria locale."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Le copie vengono create in questa scheda. Il testo non viene inviato a nessun server.",
      "Text to repeat": "Testo da ripetere",
      "Repeat count": "Numero di ripetizioni",
      "From 1 to 200.": "Da 1 a 200.",
      "Between copies": "Tra le copie",
      "Nothing": "Niente",
      "Space": "Spazio",
      "New line": "A capo",
      "Enter the text to repeat.": "Inserisci il testo da ripetere.",
      "Keep the text under {0} characters.": "Mantieni il testo sotto i {0} caratteri.",
      "repeat count": "numero di ripetizioni",
      "Enter a whole number of repeats.": "Inserisci un numero intero di ripetizioni.",
      "Choose a repeat count from {0} to {1}.": "Scegli un numero di ripetizioni da {0} a {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Questa ripetizione è troppo lunga per questa pagina. Usa un testo più breve o un numero più piccolo."
    }
  }
};

export default data;
