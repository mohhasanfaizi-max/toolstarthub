import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Un generatore di prompt IA compone un prompt strutturato a partire da argomento, obiettivo, pubblico e formato che inserisci. “Genera prompt” resta nel browser. “Genera con l’IA” invia questi campi all’API Gemini di Google tramite ToolStarHub.",
    "content": {
      "about": "Il generatore di prompt IA trasforma i campi compilati in un prompt da copiare. Una preimpostazione compila solo uso, tono, formato, livello di dettaglio e una prima istruzione. L’argomento devi indicarlo tu.",
      "howTo": [
        "Scegli una preimpostazione o scrivi il tuo uso.",
        "Indica un argomento o un obiettivo. Serve almeno uno dei due.",
        "Imposta pubblico, tono, lingua, formato e livello di dettaglio.",
        "Fai clic su “Genera prompt” per comporlo nel browser, oppure su “Genera con l’IA” perché Gemini lo rifinisca.",
        "Usa “Cancella” per azzerare il modulo."
      ],
      "features": [
        "Dodici preimpostazioni per articoli, post, script, schede prodotto, schemi di ricerca e compiti di programmazione.",
        "Un prompt strutturato che indica compito, pubblico, tono, lingua e formato.",
        "Una riga che chiede al modello di non inventare i fatti mancanti.",
        "Copia e cancella. Non viene salvato nulla."
      ],
      "examples": [
        {
          "title": "Un articolo di blog sull’età nei bisestili",
          "body": "Preimpostazione: articolo di blog. Argomento: come calcolare l’età di chi è nato il 29 febbraio. Pubblico: persone che usano un calcolatore di date. Il prompt chiede un’introduzione breve e una chiusura senza riempitivi."
        },
        {
          "title": "Un compito di programmazione",
          "body": "Preimpostazione: prompt di programmazione. Obiettivo: scrivere una funzione che rifiuti un intervallo di pagine vuoto. Istruzione aggiuntiva: usare TypeScript e mostrare un esempio che fallisce. Il prompt chiede linguaggio, input e cosa vale come completato."
        }
      ],
      "explanation": "“Genera prompt” unisce le tue risposte in righe etichettate. Se argomento e obiettivo sono entrambi vuoti, lo strumento si ferma e ne chiede uno. “Genera con l’IA” invia questi campi a Gemini e restituisce un prompt rifinito.",
      "limitations": "“Genera prompt” unisce solo i campi compilati e richiede un argomento o un obiettivo. Una preimpostazione compila i campi di stile ma non inventa un argomento. “Genera con l’IA” rifinisce il prompt con Gemini. La pagina non esegue il prompt in un modello di scrittura.",
      "tips": [
        "Indica chi leggerà. “Neogenitori” aiuta più di “tutti”.",
        "Di’ che forma deve avere il risultato: un elenco, un’email, uno script.",
        "Inserisci i fatti che conosci nelle istruzioni aggiuntive, così il modello non deve indovinarli."
      ],
      "faqs": [
        {
          "question": "Questo strumento usa l’IA?",
          "answer": "“Genera prompt” costruisce il prompt in questa pagina. “Genera con l’IA” invia i campi all’API Gemini di Google tramite ToolStarHub e restituisce un prompt rifinito. Puoi incollare l’uno o l’altro in un altro modello."
        },
        {
          "question": "E se conosco solo l’argomento?",
          "answer": "Un argomento basta per generare. Aggiungi un obiettivo quando sai cosa devono poter fare i lettori dopo."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Genera prompt” resta in questa scheda e non carica i campi. “Genera con l’IA” invia i campi all’API Gemini di Google tramite ToolStarHub e restituisce un prompt rifinito. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti."
        },
        {
          "question": "Cosa rende buono un prompt IA?",
          "answer": "Di’ cosa vuoi, per chi è, il tono, il formato e la lunghezza. Un obiettivo chiaro e un esempio del risultato di solito aiutano più di aggettivi in più."
        },
        {
          "question": "Posso usare il prompt in ChatGPT, Gemini o Claude?",
          "answer": "Sì. Il risultato è testo semplice da incollare in qualsiasi assistente di chat. Modelli diversi possono comunque rispondere in modo diverso allo stesso prompt."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "“Genera prompt” costruisce un prompt nel browser. “Genera con l’IA” invia i campi compilati all’API Gemini di Google tramite ToolStarHub e restituisce un prompt elaborato. Il testo non viene salvato.",
      "Platform or use case": "Piattaforma o uso",
      "Topic": "Argomento",
      "Goal": "Obiettivo",
      "Audience": "Pubblico",
      "Tone": "Tono",
      "Language": "Lingua",
      "Output format": "Formato di output",
      "Level of detail": "Livello di dettaglio",
      "Brief": "Breve",
      "Medium": "Medio",
      "High": "Alto",
      "Additional instructions": "Istruzioni aggiuntive",
      "Generate prompt": "Genera prompt",
      "Prompt": "Prompt",
      "AI prompt": "Prompt IA",
      "Blog article": "Articolo di blog",
      "SEO article": "Articolo SEO",
      "Social media post": "Post per i social",
      "YouTube script": "Script per YouTube",
      "YouTube thumbnail prompt": "Prompt per miniatura YouTube",
      "Image generation": "Generazione di immagini",
      "Video generation": "Generazione di video",
      "Product description": "Descrizione prodotto",
      "Email": "Email",
      "Marketing copy": "Testo di marketing",
      "Academic/research prompt": "Prompt accademico/di ricerca",
      "Coding prompt": "Prompt di programmazione",
      "Add a topic or a goal before generating a prompt.": "Inserisci un argomento o un obiettivo prima di generare un prompt."
    },
    "note": "“Genera prompt” scrive il prompt in inglese, la lingua che i modelli IA seguono con più precisione. Il campo “Lingua” stabilisce la lingua della risposta. “Genera con l’IA” capisce anche ciò che scrivi in italiano."
  },
  "prompt-to-image": {
    "answer": "Uno strumento da prompt a immagine scrive un prompt per immagini da copiare a partire da soggetto e stile. Non crea l’immagine. “Genera con l’IA” restituisce solo un prompt più dettagliato.",
    "content": {
      "about": "Il generatore da prompt a immagine scrive un prompt per un modello di immagini. Descrivi soggetto, luogo, luce e inquadratura. La pagina non disegna l’immagine, perché non è collegata alcuna API di immagini.",
      "howTo": [
        "Scegli una preimpostazione di stile se vuoi un punto di partenza.",
        "Descrivi il soggetto. Senza soggetto lo strumento non crea il prompt.",
        "Aggiungi ambientazione, luce, ripresa, colori, atmosfera e proporzioni se contano.",
        "Inserisci un prompt negativo per ciò che deve restare fuori dall’immagine.",
        "Fai clic su “Crea prompt” e copia separatamente prompt e prompt negativo."
      ],
      "features": [
        "Preimpostazioni per foto, cinema, illustrazione, prodotto, ritratto, paesaggio, architettura, fantasy, anime, 3D e miniature.",
        "Pulsanti di copia separati per il prompt principale e quello negativo.",
        "I campi vuoti vengono omessi, così il prompt non contiene etichette vuote."
      ],
      "examples": [
        {
          "title": "Una foto di prodotto",
          "body": "Soggetto: una borraccia in acciaio inox. Preimpostazione: fotografia di prodotto. Proporzioni: 1:1. Prompt negativo: loghi extra, persone, tavolo disordinato. Il risultato è una descrizione da studio, non un file."
        },
        {
          "title": "Una miniatura",
          "body": "Soggetto: una persona che tiene un PDF evidenziato. Preimpostazione: miniatura YouTube. La composizione resta “un soggetto, spazio per un titolo breve”. Il testo del titolo lo scrivi comunque tu."
        }
      ],
      "explanation": "Ogni campo compilato diventa una breve frase. Il soggetto è obbligatorio, così il prompt descrive qualcosa di preciso. Una preimpostazione cambia lo stile e alcuni campi collegati, ma non cancella il soggetto già scritto.",
      "limitations": "La pagina scrive un prompt e, se vuoi, un prompt negativo. Non fornisce un file immagine. Il soggetto è obbligatorio. “Genera con l’IA” chiede a Gemini un prompt più lungo, da incollare poi in uno strumento di immagini.",
      "tips": [
        "Un solo soggetto è più facile da descrivere di una folla.",
        "Indica la luce. “Luce da finestra” e “sole duro di mezzogiorno” danno immagini molto diverse.",
        "Usa il prompt negativo per i difetti ricorrenti, come dita in più o testo deformato."
      ],
      "faqs": [
        {
          "question": "Perché non c’è un’immagine?",
          "answer": "Questa pagina scrive un prompt e non genera immagini. “Genera con l’IA” chiede a Gemini un prompt più dettagliato. Incollalo in un servizio che crea immagini."
        },
        {
          "question": "Tutti i modelli leggono il prompt allo stesso modo?",
          "answer": "No. I modelli reagiscono in modo diverso alla formulazione. Considera il risultato come un brief chiaro e adattalo al tuo strumento."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Crea prompt” resta in questo browser e non carica il brief. “Genera con l’IA” invia il brief all’API Gemini di Google tramite ToolStarHub e restituisce un prompt più lungo. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti. La pagina comunque non crea un’immagine."
        },
        {
          "question": "Come scrivo un buon prompt per immagini?",
          "answer": "Parti dal soggetto, poi aggiungi ambientazione, luce, stile fotografico o artistico, palette di colori, atmosfera e proporzioni. Sii preciso su ciò che conta e lascia fuori il resto."
        },
        {
          "question": "Che cos’è un prompt negativo?",
          "answer": "Un prompt negativo elenca ciò che deve restare fuori dall’immagine, come testo, dita in più o sfocature. Non tutti i modelli di immagini lo leggono."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "“Crea prompt” scrive un prompt per immagini nel browser. “Genera con l’IA” invia il tuo brief all’API Gemini di Google tramite ToolStarHub e restituisce un prompt per immagini più ricco. Questa pagina non crea immagini. Il testo non viene salvato.",
      "Style presets": "Preimpostazioni di stile",
      "Composition": "Composizione",
      "Colors": "Colori",
      "Quality and detail": "Qualità e dettaglio",
      "Things you want left out of the picture.": "Ciò che vuoi tenere fuori dall’immagine.",
      "Image prompt": "Prompt per immagini",
      "AI image prompt": "Prompt per immagini IA",
      "Photorealistic": "Fotorealistico",
      "Cinematic": "Cinematografico",
      "Illustration": "Illustrazione",
      "Product photography": "Fotografia di prodotto",
      "Portrait": "Ritratto",
      "Landscape": "Paesaggio",
      "Architecture": "Architettura",
      "Fantasy": "Fantasy",
      "Anime": "Anime",
      "3D render": "Render 3D",
      "YouTube thumbnail": "Miniatura YouTube",
      "Describe the subject before building the prompt.": "Descrivi il soggetto prima di creare il prompt."
    },
    "note": "Il prompt creato usa etichette in inglese, che i modelli di immagini capiscono meglio. Puoi scrivere le descrizioni in qualsiasi lingua."
  },
  "prompt-to-video": {
    "answer": "Uno strumento da prompt a video scrive la descrizione di un’inquadratura da incollare in un modello video. Non produce alcun clip. “Genera con l’IA” restituisce solo il prompt scritto.",
    "content": {
      "about": "Il generatore da prompt a video scrive la descrizione di una singola inquadratura: chi o cosa è in scena, cosa si muove, come si muove la camera e quanto dura. Non crea video.",
      "howTo": [
        "Scegli una preimpostazione come stile di partenza, oppure lascia vuoti i campi e scrivi tu.",
        "Indica un soggetto o un’azione. Serve uno dei due.",
        "Descrivi scena, camera, obiettivo, luce, durata e proporzioni.",
        "Aggiungi audio o dialoghi solo se l’inquadratura ne ha bisogno.",
        "Fai clic su “Crea prompt” e copia il testo. “Cancella” azzera il modulo, compresa la durata predefinita."
      ],
      "features": [
        "Preimpostazioni per cinema, spot di prodotto, social, YouTube, documentario, viaggio, azione, moda, natura, scene storiche e animazione.",
        "Una riga finale che limita la richiesta a un’unica inquadratura continua.",
        "Un prompt negativo separato per i difetti di movimento o immagine da evitare."
      ],
      "examples": [
        {
          "title": "Un prodotto in orbita",
          "body": "Soggetto: una tazza in ceramica. Azione: sale il vapore. Preimpostazione: spot di prodotto. La durata resta 6 secondi. Il prompt chiede un movimento circolare e luce da studio."
        },
        {
          "title": "Un’inquadratura di viaggio tranquilla",
          "body": "Soggetto: un sentiero costiero. Azione: una persona si allontana dalla camera. Preimpostazione: viaggio. Indica l’ora del giorno nel campo ambientazione, così la luce non resta indefinita."
        }
      ],
      "explanation": "I modelli video funzionano meglio con una sola azione che con una sequenza di scene. Il generatore mantiene le tue frasi in un ordine stabile e aggiunge “un’unica inquadratura continua”, così la richiesta non diventa uno storyboard.",
      "limitations": "Il generatore descrive un’unica inquadratura continua. Non produce né scarica video. Serve un soggetto o un’azione. Durata, camera e dialoghi vengono inclusi solo se li scrivi.",
      "tips": [
        "Di’ cosa si muove e cosa resta fermo.",
        "Una durata come “5 secondi” è più utile di “breve”.",
        "Se ti serve un dialogo, scrivi la battuta. Non chiedere al modello di inventare un discorso."
      ],
      "faqs": [
        {
          "question": "Posso scaricare un video da questa pagina?",
          "answer": "No. Questa pagina non produce video. “Genera con l’IA” restituisce solo un prompt di inquadratura scritto da Gemini. Copialo in uno strumento video di cui ti fidi."
        },
        {
          "question": "E se descrivo solo l’azione?",
          "answer": "Un’azione basta. Aggiungere un soggetto rende l’inquadratura più facile da immaginare."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Crea prompt” scrive l’inquadratura in questa scheda. “Genera con l’IA” invia i campi all’API Gemini di Google tramite ToolStarHub e restituisce un prompt scritto. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti. Non viene creato alcun file video."
        },
        {
          "question": "Come scrivo un prompt per un video IA?",
          "answer": "Descrivi una sola inquadratura: soggetto, azione, ambientazione, movimento di camera, obiettivo, luce e durata. Prompt brevi e concreti di solito funzionano meglio di storie lunghe."
        },
        {
          "question": "Quali modelli video possono usare questi prompt?",
          "answer": "Il risultato è testo semplice, quindi puoi incollarlo in qualsiasi strumento da testo a video. Ogni modello segue a modo suo le indicazioni di camera e tempi."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "“Crea prompt” scrive un prompt video nel browser. “Genera con l’IA” invia il tuo brief all’API Gemini di Google tramite ToolStarHub e restituisce un prompt di inquadratura. Questa pagina non crea video. Il testo non viene salvato.",
      "Video subject": "Soggetto del video",
      "Scene": "Scena",
      "Action": "Azione",
      "Camera movement": "Movimento di camera",
      "Lens": "Obiettivo",
      "Visual style": "Stile visivo",
      "Duration": "Durata",
      "Audio or dialogue": "Audio o dialogo",
      "Video prompt": "Prompt video",
      "AI video prompt": "Prompt video IA",
      "Cinematic": "Cinematografico",
      "Product commercial": "Spot di prodotto",
      "Social media": "Social media",
      "YouTube": "YouTube",
      "Documentary": "Documentario",
      "Travel": "Viaggio",
      "Fashion": "Moda",
      "Nature": "Natura",
      "Historical": "Storico",
      "Animation": "Animazione",
      "Add a subject or an action before building the prompt.": "Indica un soggetto o un’azione prima di creare il prompt."
    },
    "note": "Il prompt creato usa etichette in inglese, che i modelli video capiscono meglio. Puoi scrivere le descrizioni in qualsiasi lingua."
  },
  "ai-article-detector": {
    "answer": "Questa pagina controlla schemi di scrittura come la lunghezza delle frasi e le espressioni ripetute. Anche “Analizza con l’IA” è un’analisi degli schemi di scrittura. Non stabilisce se il testo l’ha scritto una persona o un modello.",
    "content": {
      "about": "Il rilevatore di articoli IA esamina la bozza incollata e riporta la lunghezza delle frasi, quanto variano queste lunghezze, l’ampiezza del vocabolario e le espressioni brevi che si ripetono. Il risultato si chiama “analisi degli schemi di scrittura” e non pretende di essere altro.",
      "howTo": [
        "Incolla almeno 40 parole.",
        "Fai clic su “Analizza testo” per il controllo nel browser, oppure su “Analizza con l’IA” per un’analisi degli schemi di scrittura fatta da Gemini.",
        "Leggi i valori e la nota sottostante.",
        "Se il campione è troppo breve, la pagina lo dice invece di valutarlo.",
        "“Cancella” rimuove il testo dalla pagina."
      ],
      "features": [
        "Lunghezza media delle frasi con variazione bassa, moderata o varia.",
        "Una valutazione del vocabolario in base al numero di parole diverse.",
        "Espressioni di quattro parole che compaiono tre o più volte.",
        "Un breve elenco di frasi fatte, se presenti."
      ],
      "examples": [
        {
          "title": "Una bozza che si ripete",
          "body": "Se le stesse quattro parole compaiono in più frasi, vengono elencate con il conteggio. Significa che la bozza si ripete, non che l’ha scritta un modello."
        },
        {
          "title": "Una didascalia breve",
          "body": "Venti parole non bastano. Lo strumento ne chiede 40, così una sola frase non viene scambiata per uno schema."
        }
      ],
      "explanation": "La variazione delle frasi confronta la dispersione delle lunghezze con la media. Il vocabolario confronta le parole diverse con il totale. Entrambi i valori cambiano con una normale revisione. Una bozza umana curata può sembrare uniforme e una generata può sembrare varia. Il risultato lo ricorda.",
      "limitations": "Il controllo nel browser richiede almeno 40 parole. Riporta lunghezza delle frasi, ampiezza del vocabolario ed espressioni ripetute. Non dà una percentuale né un verdetto secondo cui la bozza l’ha scritta un modello. “Analizza con l’IA” invia il testo a Gemini per lo stesso tipo di descrizione.",
      "tips": [
        "Usa un paragrafo intero, non un titolo.",
        "Considera le espressioni ripetute come spunti di revisione. Eliminale se i lettori le noterebbero.",
        "Non usare le valutazioni per accusare qualcuno di aver usato un modello."
      ],
      "faqs": [
        {
          "question": "Può dire se un testo l’ha scritto un’IA?",
          "answer": "No, non con certezza. I controlli sugli schemi sbagliano in entrambe le direzioni. Il risultato descrive la bozza; non è un verdetto."
        },
        {
          "question": "Perché non c’è una percentuale?",
          "answer": "Una percentuale sembrerebbe una prova. “Analizza testo” e “Analizza con l’IA” descrivono entrambi degli schemi. Nessuno dei due afferma di sapere chi ha scritto il testo."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Analizza testo” conta gli schemi in questa scheda e non carica la bozza. “Analizza con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub per ottenere una descrizione scritta. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti."
        },
        {
          "question": "I rilevatori di IA sono affidabili?",
          "answer": "Nessun rilevatore può dimostrare chi ha scritto un testo. I punteggi basati su schemi possono segnalare testi umani e non accorgersi di testi IA revisionati, quindi considera ogni risultato uno spunto per rivedere, non una prova."
        },
        {
          "question": "Quali schemi esamina questo strumento?",
          "answer": "Riporta la lunghezza delle frasi, quanto è vario il vocabolario e le espressioni ripetute, così vedi dove una bozza suona piatta o ripetitiva."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "“Analizza testo” controlla gli schemi nel browser. “Analizza con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub per un’analisi degli schemi di scrittura. Nessuno dei due risultati può stabilire chi ha scritto il testo. La bozza non viene salvata.",
      "Article or draft": "Articolo o bozza",
      "Paste at least 40 words.": "Incolla almeno 40 parole.",
      "Analyze writing": "Analizza testo",
      "Analyze with AI": "Analizza con l’IA",
      "Avg. sentence": "Frase media",
      "{0} words": "{0} parole",
      "Sentence variation": "Variazione delle frasi",
      "Vocabulary": "Vocabolario",
      "Writing pattern analysis": "Analisi degli schemi di scrittura",
      "No four-word phrase repeats three or more times.": "Nessuna espressione di quattro parole compare tre o più volte.",
      "Familiar stock phrases found:": "Frasi fatte trovate:",
      "AI writing analysis": "Analisi della scrittura con IA",
      "Paste some writing first.": "Incolla prima del testo.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Incolla almeno 40 parole. Un breve estratto non mostra alcuno schema.",
      "Low": "Bassa",
      "Moderate": "Moderata",
      "Varied": "Varia",
      "Narrow": "Ristretto",
      "Mixed": "Misto",
      "Broad": "Ampio",
      "\"{0}\" appears {1} times": "“{0}” compare {1} volte",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Questi sono schemi di scrittura, non una prova di chi ha scritto il testo. Schemi simili compaiono in bozze umane revisionate e in testi generati. Un rilevatore può sbagliare in entrambe le direzioni."
    },
    "note": "Il controllo nel browser usa elenchi di parole e frasi fatte in inglese, quindi funziona meglio con testi inglesi. “Analizza con l’IA” funziona anche con testi in italiano."
  },
  "ai-article-compressor": {
    "answer": "Un compressore di articoli accorcia una bozza eliminando riempitivi e frasi ripetute. “Comprimi con l’IA” chiede a Gemini di mantenere il concetto principale. Rivedi il risultato prima di pubblicarlo.",
    "content": {
      "about": "Il compressore di articoli IA accorcia una bozza lunga. La compressione leggera sostituisce alcune espressioni prolisse e sistema gli spazi. Quella media e quella forte eliminano anche le frasi ripetute. Leggi il risultato: quando una frase sparisce, il senso può cambiare.",
      "howTo": [
        "Incolla l’articolo. Servono almeno 12 parole.",
        "Scegli compressione leggera, media o forte.",
        "Fai clic su “Accorcia articolo” per applicare le regole nel browser, oppure su “Comprimi con l’IA” perché lo accorci Gemini.",
        "Confronta il numero di parole e copia la bozza più breve se dice ancora ciò che intendevi.",
        "“Cancella” svuota entrambi i riquadri e riporta il livello su medio."
      ],
      "features": [
        "Tre livelli, così un passaggio leggero non elimina frasi.",
        "Numero di parole prima e dopo.",
        "Sostituzioni fisse, come “in order to” in “to”.",
        "Rimozione delle frasi duplicate nei livelli medio e forte."
      ],
      "examples": [
        {
          "title": "Una frase prolissa",
          "body": "“In order to finish the form, you need to sign it” diventa “to finish the form, you need to sign it” a ogni livello."
        },
        {
          "title": "La stessa frase due volte",
          "body": "I livelli medio e forte mantengono la prima e tolgono la ripetizione esatta successiva. Il livello leggero le lascia entrambe."
        }
      ],
      "explanation": "“Accorcia articolo” usa un elenco fisso di sostituzioni. La compressione forte salta anche una frase successiva che inizia con le stesse sei parole di una precedente. “Comprimi con l’IA” chiede a Gemini di accorciare l’articolo al livello scelto. Leggi entrambi i risultati prima di fidarti.",
      "limitations": "La compressione leggera sostituisce un elenco fisso di espressioni prolisse. Media e forte eliminano anche le ripetizioni esatte successive, e la forte può saltare una frase che inizia con le stesse sei parole. La bozza deve avere almeno 12 parole. La compressione può eliminare una frase che volevi tenere.",
      "tips": [
        "Inizia con il livello leggero se l’articolo è già asciutto.",
        "Usa il livello forte su una prima stesura disordinata e poi ripristina le frasi importanti.",
        "Non è un modo per nascondere come è stata prodotta una bozza."
      ],
      "faqs": [
        {
          "question": "Il testo compresso supera un rilevatore di IA?",
          "answer": "No. Lo strumento non ci prova e non afferma che il risultato sembrerà scritto da un tipo particolare di autore."
        },
        {
          "question": "Il mio concetto viene mantenuto?",
          "answer": "“Accorcia articolo” mantiene la maggior parte delle parole e toglie un po’ di riempitivi e ripetizioni. “Comprimi con l’IA” chiede a Gemini di mantenere il concetto principale e i fatti importanti. Leggi la bozza più breve prima di fidarti."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Accorcia articolo” funziona in questa scheda e non carica la bozza. “Comprimi con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub e restituisce una versione più breve. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti."
        },
        {
          "question": "Come accorcio un articolo senza perdere il senso?",
          "answer": "Taglia prima le espressioni prolisse, poi i concetti ripetuti, poi le frasi intere che non aggiungono nulla. Confronta il risultato con l’originale prima di usarlo."
        },
        {
          "question": "Quale livello di compressione scelgo?",
          "answer": "Il leggero sostituisce solo le espressioni prolisse. Il medio elimina anche le ripetizioni. Il forte può saltare frasi che iniziano allo stesso modo, quindi controllalo con più attenzione."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "“Accorcia articolo” applica regole fisse nel browser. “Comprimi con l’IA” invia l’articolo all’API Gemini di Google tramite ToolStarHub e restituisce una bozza più breve. L’articolo non viene salvato. Rivedi il risultato prima di pubblicarlo.",
      "Article": "Articolo",
      "Compression": "Compressione",
      "Light compression": "Compressione leggera",
      "Medium compression": "Compressione media",
      "Strong compression": "Compressione forte",
      "Shorten article": "Accorcia articolo",
      "Compress with AI": "Comprimi con l’IA",
      "Copy shorter draft": "Copia bozza breve",
      "Shorter draft": "Bozza breve",
      "The shorter draft will appear here.": "La bozza breve comparirà qui.",
      "AI shorter draft": "Bozza breve IA",
      "Copy AI draft": "Copia bozza IA",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} parole prima, {1} parole dopo. Leggi la bozza breve prima di usarla.",
      "Paste an article first.": "Incolla prima un articolo.",
      "Paste a longer article. A few words is not enough to shorten.": "Incolla un articolo più lungo. Poche parole non bastano per accorciare.",
      "Nothing was left after compression. Try a lighter setting.": "Dopo la compressione non è rimasto nulla. Prova un livello più leggero."
    },
    "note": "“Accorcia articolo” usa un elenco di espressioni inglesi, quindi cambia poco i testi in italiano. “Comprimi con l’IA” funziona anche con testi in italiano."
  },
  "ai-text-humanizer": {
    "answer": "Un umanizzatore di testi IA sostituisce frasi fatte nel browser in base a un elenco fisso. “Umanizza con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub. Lo strumento non cerca di aggirare un rilevatore di IA e non afferma che il risultato sembrerà scritto da un tipo particolare di autore.",
    "content": {
      "about": "L’umanizzatore di testi IA sostituisce un elenco fisso di frasi fatte con espressioni più semplici. “Riscrivi testo” lo fa in questa scheda. “Umanizza con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub e restituisce una versione riscritta. Il testo non viene salvato. Rivedi il risultato prima di usarlo. Nessuno dei due risultati è un modo per nascondere come è stata prodotta una bozza.",
      "howTo": [
        "Incolla la bozza. Servono almeno 12 parole e al massimo 4.000 caratteri.",
        "Fai clic su “Riscrivi testo” per l’elenco di frasi nel browser, oppure su “Umanizza con l’IA” perché la riscriva Gemini.",
        "Rivedi il risultato. Dopo una rimozione, la parola successiva può restare minuscola.",
        "Copia la versione riscritta se dice ancora ciò che intendevi.",
        "“Cancella” svuota il riquadro e il risultato locale."
      ],
      "features": [
        "Un elenco fisso di frasi fatte, applicato nel browser.",
        "Un risultato separato per “Umanizza con l’IA”.",
        "Un limite di 4.000 caratteri per entrambi i pulsanti.",
        "Nessuna eliminazione di frasi né di frasi duplicate."
      ],
      "examples": [
        {
          "title": "Attacchi da manuale",
          "body": "“In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.” diventa “here is the setup. you can use a short checklist.”"
        },
        {
          "title": "Una frase ripetuta",
          "body": "“The form is short. The form is short. Please sign it before noon today and bring a pen.” mantiene entrambe le copie. Questo passaggio non elimina le frasi ripetute."
        }
      ],
      "explanation": "“Riscrivi testo” scorre un elenco fisso una sola volta. Non rimette la maiuscola dopo una rimozione, e un apostrofo tipografico non corrisponde. “Umanizza con l’IA” chiede a Gemini di mantenere gli stessi fatti, nomi e numeri e di non ridurre la bozza a un riassunto. Rivedi entrambi i risultati prima di usarli.",
      "limitations": "“Riscrivi testo” richiede almeno 12 parole, ed entrambi i pulsanti al massimo 4.000 caratteri. Il passaggio locale sostituisce solo le espressioni dell’elenco. Un apostrofo tipografico non corrisponde. Lo strumento non cerca di aggirare un rilevatore di IA e non afferma che il risultato sembrerà scritto da un tipo particolare di autore.",
      "tips": [
        "Rivedi il risultato prima di usarlo. Dopo un’espressione rimossa, la parola successiva può restare minuscola.",
        "Una frase ripetuta resta. Questo passaggio non la elimina.",
        "Nessuno dei due risultati è un modo per nascondere come è stata prodotta una bozza."
      ],
      "faqs": [
        {
          "question": "L’umanizzatore di testi IA è gratuito?",
          "answer": "Sì. Puoi riscrivere una bozza qui senza pagare né creare un account. “Riscrivi testo” resta in questa scheda. “Umanizza con l’IA” invia comunque la bozza all’API Gemini di Google tramite ToolStarHub."
        },
        {
          "question": "Aggira un rilevatore di IA?",
          "answer": "No. Lo strumento non ci prova e non afferma che il risultato sembrerà scritto da un tipo particolare di autore."
        },
        {
          "question": "Il mio concetto viene mantenuto?",
          "answer": "“Riscrivi testo” mantiene tutte le parole che non sono nell’elenco di frasi fatte. “Umanizza con l’IA” ha l’istruzione di mantenere gli stessi fatti, nomi e numeri e di non riassumere la bozza. Rivedi il risultato prima di usarlo."
        },
        {
          "question": "Il mio testo viene inviato a un server?",
          "answer": "“Riscrivi testo” funziona in questa scheda e non carica la bozza. “Umanizza con l’IA” invia la bozza all’API Gemini di Google tramite ToolStarHub e restituisce una versione riscritta. ToolStarHub non salva questo testo. Con il piano gratuito, Google può usarlo per migliorare i propri prodotti."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "“Riscrivi testo” usa un elenco fisso di frasi fatte nel browser. “Umanizza con l’IA” invia il testo all’API Gemini di Google tramite ToolStarHub e restituisce una versione riscritta. Il testo non viene salvato. Rivedi il risultato prima di usarlo. Nessuno dei due risultati è un modo per nascondere come è stata prodotta una bozza.",
      "Draft": "Bozza",
      "Rewrite text": "Riscrivi testo",
      "Humanize with AI": "Umanizza con l’IA",
      "Copy rewritten draft": "Copia bozza riscritta",
      "Rewritten draft": "Bozza riscritta",
      "The rewritten draft will appear here.": "La bozza riscritta comparirà qui.",
      "AI rewrite": "Riscrittura IA",
      "Copy AI rewrite": "Copia riscrittura IA",
      "Paste a draft first.": "Incolla prima una bozza.",
      "That text is too long for this rewrite. Shorten it and try again.": "Questo testo è troppo lungo per questa riscrittura. Accorcialo e riprova.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Incolla una bozza più lunga. Poche parole non bastano per riscrivere.",
      "Nothing was left after the rewrite. Try different wording.": "Dopo la riscrittura non è rimasto nulla. Prova un’altra formulazione."
    },
    "note": "“Riscrivi testo” usa un elenco di frasi fatte inglesi, quindi cambia poco i testi in italiano. “Umanizza con l’IA” funziona anche con testi in italiano."
  }
};

export default data;
