import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Un generatore UTM aggiunge parametri di campagna a un URL, così puoi seguire le fonti di traffico negli strumenti di analisi.",
    "content": {
      "about": "Aggiungi utm_source, utm_medium e utm_campaign a un link, più term e content facoltativi. Chi fa marketing lo usa per etichettare un link di campagna prima di inserirlo in un annuncio o in un’email. Un campo vuoto non viene aggiunto al link, e questa pagina non registra visite né accorcia l’indirizzo.",
      "howTo": [
        "Inserisci l’URL del sito, con o senza https://.",
        "Compila sorgente, mezzo e campagna. Term e content sono facoltativi.",
        "Copia l’URL generato. I parametri di query già presenti nel link originale vengono mantenuti."
      ],
      "examples": [
        {
          "title": "Un semplice link di campagna",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Un URL che ha già dei parametri",
          "body": "https://example.com/page?ref=nav mantiene ref=nav e aggiunge i campi UTM accanto."
        }
      ],
      "explanation": "I parametri UTM dicono agli strumenti di analisi da dove arriva una visita. utm_source è la piattaforma, utm_medium il canale e utm_campaign il nome della promozione. utm_term e utm_content sono facoltativi. I valori vengono codificati per l’URL, così spazi e caratteri speciali restano validi.",
      "limitations": "Una sorgente, un mezzo o una campagna vuoti vengono omessi invece di essere scritti come parametro vuoto. La pagina non accorcia l’indirizzo e non registra visite. Un testo che non è l’URL di un sito viene rifiutato.",
      "faqs": [
        {
          "question": "Il generatore UTM è gratuito?",
          "answer": "Sì. Aggiungere utm_source, utm_medium e utm_campaign a un link è gratuito e non serve un account."
        },
        {
          "question": "Sovrascriverà gli altri parametri di query?",
          "answer": "No. Vengono aggiunti o aggiornati solo i campi UTM che compili. Gli altri parametri restano invariati."
        },
        {
          "question": "Questo strumento contatta un servizio di tracciamento?",
          "answer": "No. Costruisce solo un URL nel tuo browser. Il tracciamento avviene dopo, se usi il link in una configurazione di analisi."
        },
        {
          "question": "Cosa sono i parametri UTM?",
          "answer": "I parametri UTM sono etichette aggiunte a un link, come utm_source, utm_medium e utm_campaign, che dicono agli strumenti di analisi da dove arriva una visita."
        },
        {
          "question": "Quali parametri UTM sono obbligatori?",
          "answer": "Sorgente, mezzo e campagna sono il minimo abituale. Term e content sono facoltativi e aiutano a distinguere parole chiave o versioni degli annunci."
        }
      ]
    },
    "ui": {
      "Website URL": "URL del sito",
      "Existing query parameters are kept. UTM values are added or updated.": "I parametri di query esistenti vengono mantenuti. I valori UTM vengono aggiunti o aggiornati.",
      "Campaign source": "Sorgente della campagna",
      "Campaign medium": "Mezzo della campagna",
      "Campaign name": "Nome della campagna",
      "Campaign term (optional)": "Termine della campagna (facoltativo)",
      "running shoes": "scarpe da corsa",
      "Campaign content (optional)": "Contenuto della campagna (facoltativo)",
      "Copy URL": "Copia URL",
      "Enter a URL to generate a campaign link.": "Inserisci un URL per generare un link di campagna.",
      "Campaign URL": "URL della campagna",
      "Enter a website URL.": "Inserisci l’URL di un sito.",
      "Enter a valid website URL.": "Inserisci un URL valido."
    }
  },
  "slug-generator": {
    "answer": "Un generatore di slug trasforma un titolo in una stringa minuscola con trattini, sicura da usare in un URL.",
    "content": {
      "about": "Trasforma un titolo in un permalink minuscolo con trattini. Chi scrive lo usa per dare un nome a un articolo prima di inserire l’indirizzo nel CMS. Gli accenti latini vengono rimossi, caratteri come 你好 restano, e il risultato non verifica che l’indirizzo sia libero.",
      "howTo": [
        "Digita o incolla un titolo.",
        "Lo slug si aggiorna mentre scrivi.",
        "Copia lo slug o svuota la casella."
      ],
      "examples": [
        {
          "title": "Un titolo di blog",
          "body": "“How to Compress an Image Without Losing Quality” diventa how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Accenti e altre scritture",
          "body": "Gli accenti latini vengono rimossi (Café → cafe). Caratteri come 你好 restano, così lo slug rimane leggibile."
        }
      ],
      "explanation": "Il generatore elimina gli spazi ai bordi, separa i segni diacritici dopo la normalizzazione Unicode NFKD, mette in minuscolo le lettere latine, trasforma gli altri separatori in trattini e unisce le ripetizioni. Mantiene lettere e numeri Unicode invece di cancellare ogni carattere non inglese. Il risultato è un permalink pratico, non un ID garantito come unico.",
      "limitations": "Gli accenti latini vengono rimossi, mentre caratteri come 你好 restano. Il risultato ha la forma di un permalink, ma non prova che l’indirizzo sia libero. Alcuni costruttori di siti eliminano le lettere non latine; questa pagina no.",
      "faqs": [
        {
          "question": "Il generatore di slug è gratuito?",
          "answer": "Sì. Trasformare un titolo in un permalink con trattini è gratuito e non serve un account."
        },
        {
          "question": "Va bene per ogni CMS?",
          "answer": "La maggior parte dei siti accetta slug minuscoli con trattini. Alcuni eliminano le lettere non latine; questo strumento le mantiene se sono lettere o numeri."
        },
        {
          "question": "Il testo viene inviato a un server?",
          "answer": "No. Il titolo viene riscritto in questa scheda. Non viene caricato né salvato nella memoria locale."
        },
        {
          "question": "Che cos’è lo slug di un URL?",
          "answer": "Lo slug è la parte leggibile di un indirizzo web che dà il nome a una pagina, come fare-il-pane in example.com/blog/fare-il-pane."
        },
        {
          "question": "Cosa rende uno slug buono per la SEO?",
          "answer": "Tienilo breve, minuscolo e descrittivo, con le parole separate da trattini. Evita date e parole superflue se la pagina potrebbe essere aggiornata in futuro."
        }
      ]
    },
    "ui": {
      "Title or text": "Titolo o testo",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Gli accenti vengono rimossi dalle lettere latine. Le altre lettere, come il cinese, restano.",
      "Example": "Esempio",
      "Copy slug": "Copia slug",
      "Generated slug": "Slug generato",
      "How to Compress an Image Without Losing Quality": "Come comprimere un’immagine senza perdere qualità"
    }
  },
  "qr-code-generator": {
    "answer": "Un generatore di codici QR trasforma un testo o un URL in un’immagine QR scaricabile, creata sul tuo dispositivo.",
    "content": {
      "about": "Codifica testo semplice o un URL come codice QR in PNG, fino a 1.200 caratteri. Usalo per un link breve che qualcuno deve scansionare. I formati per Wi-Fi, email e contatti si trovano nel Generatore di codici QR Pro, e una stringa lunga crea un motivo fitto che alcune fotocamere non leggono.",
      "howTo": [
        "Incolla un testo o un URL completo, con https:// se è un link web.",
        "Premi Genera. Compaiono un’anteprima e una descrizione accessibile.",
        "Scarica il PNG, poi reimposta se ti serve un altro codice."
      ],
      "examples": [
        {
          "title": "Un sito web",
          "body": "https://example.com diventa un codice QR che apre quell’indirizzo quando viene scansionato."
        },
        {
          "title": "Testo semplice",
          "body": "Una breve nota o un promemoria del Wi-Fi può essere codificato come testo. Resta sotto i 1.200 caratteri perché il motivo rimanga leggibile."
        }
      ],
      "explanation": "Un codice QR è un codice a barre a matrice. Questo strumento crea il motivo nel tuo browser con una libreria lato client. Il testo non viene inviato a nessuna API QR. Un contenuto molto lungo crea un codice fitto che molte fotocamere faticano a leggere, per questo la lunghezza è limitata.",
      "limitations": "Vengono codificati testo semplice o un URL, e il testo deve avere al massimo 1.200 caratteri. I formati per Wi-Fi, email e contatti si trovano nel Generatore di codici QR Pro. Una stringa lunga crea un motivo fitto che alcune fotocamere non leggono.",
      "faqs": [
        {
          "question": "Il generatore di codici QR è gratuito?",
          "answer": "Sì. Creare un’immagine QR da un testo o un URL in questo browser è gratuito, senza account."
        },
        {
          "question": "Il testo viene caricato?",
          "answer": "No. Il codice QR viene generato nel tuo browser. Il testo non viene inviato a nessun server."
        },
        {
          "question": "Tutti i lettori leggeranno il PNG?",
          "answer": "La maggior parte delle fotocamere legge un PNG ben contrastato di un URL breve. Stampe minuscole, poca luce o testi molto lunghi possono non funzionare."
        },
        {
          "question": "I codici QR creati qui scadono?",
          "answer": "No. Il testo o il link è salvato direttamente nel motivo, senza servizi di reindirizzamento in mezzo, quindi il codice funziona finché funziona il link stesso."
        },
        {
          "question": "Come creo un codice QR per un sito web?",
          "answer": "Incolla l’indirizzo completo, con https://, genera il codice, scarica il PNG e provalo con la fotocamera di un telefono prima di stamparlo."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "Il codice QR viene creato nel tuo browser. Mantieni il contenuto ragionevolmente breve.",
      "QR code for {0}": "Codice QR per {0}",
      "QR code for:": "Codice QR per:",
      "The QR code is generated in your browser. The text is not sent to a server.": "Il codice QR viene generato nel tuo browser. Il testo non viene inviato a nessun server."
    }
  },
  "qr-code-scanner": {
    "answer": "Un lettore di codici QR legge l’immagine QR che scegli e mostra il testo decodificato sul dispositivo.",
    "content": {
      "about": "Leggi il primo codice QR dalla fotocamera o da un PNG o JPG. Usalo quando vuoi vedere il testo prima di decidere se aprire un link. La fotocamera resta spenta finché non premi Avvia fotocamera, e gli altri tipi di codici a barre non vengono decodificati.",
      "howTo": [
        "Premi Avvia fotocamera solo se vuoi scansionare con la fotocamera del dispositivo. L’autorizzazione viene chiesta in quel momento, non al caricamento della pagina.",
        "Tieni il codice inquadrato finché compare un risultato, oppure premi Ferma fotocamera per liberare il flusso.",
        "Se la fotocamera è bloccata, carica invece un PNG o JPG del codice.",
        "Copia il risultato. Se è un URL http(s), viene proposto Apri link. La pagina non naviga da sola."
      ],
      "examples": [
        {
          "title": "Scansione con fotocamera",
          "body": "Dopo l’avvio della fotocamera, i fotogrammi vengono decodificati nella scheda. Il flusso si ferma quando viene trovato un codice o quando premi Ferma."
        },
        {
          "title": "Caricamento di un’immagine",
          "body": "Uno screenshot di un codice QR può essere decodificato anche se l’accesso alla fotocamera è stato negato."
        }
      ],
      "explanation": "La decodifica usa un lettore JavaScript locale sui fotogrammi della fotocamera o su un’immagine caricata. L’accesso alla fotocamera parte solo dopo il clic su Avvia fotocamera. Le tracce vengono fermate con Ferma, dopo una scansione riuscita e quando lasci la pagina. Un URL rilevato viene mostrato prima; aprirlo è un’azione separata.",
      "limitations": "Viene mostrato il primo codice che il lettore trova. Gli altri tipi di codici a barre non vengono decodificati. Un link resta sulla pagina finché non premi Apri link, e la fotocamera resta spenta finché non premi Avvia fotocamera.",
      "faqs": [
        {
          "question": "Il lettore di codici QR è gratuito?",
          "answer": "Sì. Leggere un codice QR dalla fotocamera o da un’immagine è gratuito e non serve un account."
        },
        {
          "question": "I fotogrammi della fotocamera vengono caricati?",
          "answer": "No. I fotogrammi dopo Avvia fotocamera e il PNG o JPG che scegli vengono decodificati in questa scheda. Niente viene inviato a Tools Star Hub."
        },
        {
          "question": "Perché il sito non si è aperto automaticamente?",
          "answer": "Aprire automaticamente un URL scansionato non è sicuro. Controlla il testo, poi usa Apri link se ti fidi."
        },
        {
          "question": "E se l’immagine contiene più codici QR?",
          "answer": "Questo lettore riporta il primo codice che riesce a decodificare. Ritaglia l’immagine se ti serve un codice preciso."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "L’accesso alla fotocamera viene chiesto solo quando scegli di scansionare con la fotocamera.",
      "Start camera": "Avvia fotocamera",
      "Stop camera": "Ferma fotocamera",
      "Or upload a QR image": "Oppure carica un’immagine QR",
      "Drag and drop a QR image here, or choose a file.": "Trascina qui un’immagine QR o scegli un file.",
      "Image upload works even if the camera is blocked.": "Il caricamento di un’immagine funziona anche se la fotocamera è bloccata.",
      "Scan result": "Risultato della scansione",
      "Open link": "Apri link",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "I fotogrammi dopo Avvia fotocamera e il PNG o JPG che scegli vengono decodificati in questa scheda. Niente viene inviato a Tools Star Hub.",
      "This browser does not support camera access. Upload an image instead.": "Questo browser non supporta l’accesso alla fotocamera. Carica invece un’immagine.",
      "Camera permission was denied. You can still upload an image.": "L’accesso alla fotocamera è stato negato. Puoi comunque caricare un’immagine.",
      "No camera was found. Upload an image instead.": "Nessuna fotocamera trovata. Carica invece un’immagine.",
      "The camera could not be started. Upload an image instead.": "Impossibile avviare la fotocamera. Carica invece un’immagine.",
      "This browser could not read that image.": "Questo browser non è riuscito a leggere l’immagine.",
      "No QR code was found in that image.": "Nessun codice QR trovato in questa immagine.",
      "That file could not be read as an image.": "Impossibile leggere il file come immagine."
    }
  },
  "password-generator": {
    "answer": "Un generatore di password crea password casuali con i set di caratteri che scegli, usando un generatore casuale crittografico.",
    "content": {
      "about": "Genera una password da 8 a 64 caratteri con i tipi di caratteri che preferisci. Usalo quando un nuovo account richiede una stringa varia che non hai mai riutilizzato. L’indicatore di robustezza è una stima basata su lunghezza e dimensione del set, e non verifica se un sito ha subito una violazione.",
      "howTo": [
        "Scegli una lunghezza da 8 a 64 e i tipi di caratteri che vuoi.",
        "Se vuoi, escludi i caratteri ambigui come O, 0, I, l e 1.",
        "Premi Genera, poi copia la password. Non viene salvato nulla."
      ],
      "examples": [
        {
          "title": "16 caratteri misti",
          "body": "Una password di 16 caratteri con maiuscole, minuscole, numeri e simboli ha un ampio spazio di caratteri. L’indicatore di robustezza è una stima basata su lunghezza e dimensione del set."
        },
        {
          "title": "Solo lettere",
          "body": "Disattivando numeri e simboli il set si riduce. Il generatore richiede comunque almeno un tipo selezionato."
        }
      ],
      "explanation": "Ogni carattere viene scelto con crypto.getRandomValues(), non con Math.random(). Il generatore include almeno un carattere di ogni set selezionato, poi completa il resto dal set combinato con un campionamento senza distorsioni. L’indicatore (Debole / Media / Forte) è stimato con lunghezza × log2(dimensione del set). Non è una garanzia contro tentativi, riutilizzo o la violazione di un sito.",
      "limitations": "La lunghezza deve essere un numero intero da 8 a 64, e almeno un tipo di caratteri deve restare attivo. L’indicatore stima la robustezza da lunghezza e dimensione del set. Non controlla riutilizzo, phishing o siti violati. I caratteri ambigui si possono escludere; il resto dell’elenco dei simboli è fisso.",
      "faqs": [
        {
          "question": "Il generatore di password è gratuito?",
          "answer": "Sì. Generare una password da 8 a 64 caratteri è gratuito e non serve un account."
        },
        {
          "question": "Le password vengono salvate?",
          "answer": "No. Non vengono memorizzate, registrate, messe nell’URL né scritte nel localStorage. Copia il valore se ti serve."
        },
        {
          "question": "Forte significa impossibile da violare?",
          "answer": "No. L’indicatore è una stima basata su lunghezza e dimensione del set di caratteri. Non tiene conto di riutilizzo, phishing o di un servizio compromesso."
        },
        {
          "question": "Quanto deve essere lunga una password?",
          "answer": "Più è lunga, più è robusta. Molte guide sulla sicurezza consigliano almeno 12-16 caratteri per gli account importanti, con una password diversa per ogni sito."
        },
        {
          "question": "È sicuro usare un generatore di password online?",
          "answer": "Questo crea la password nel tuo browser con crypto.getRandomValues e non la invia né la salva. Conservala in un gestore di password invece che in una nota."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "Da {0} a {1} caratteri.",
      "Uppercase letters": "Lettere maiuscole",
      "Lowercase letters": "Lettere minuscole",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Escludi caratteri ambigui (O, 0, I, l, 1)",
      "Generated password": "Password generata",
      "Length: {0}": "Lunghezza: {0}",
      "Character set size: {0}": "Dimensione del set di caratteri: {0}",
      "Estimated entropy: {0} bits ({1})": "Entropia stimata: {0} bit ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Questo indicatore è una stima basata su lunghezza e dimensione del set di caratteri. Non è una garanzia di sicurezza.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Le password vengono create con crypto.getRandomValues nel tuo browser. Non vengono memorizzate, registrate né inviate a un server.",
      "Enter a password length.": "Inserisci una lunghezza per la password.",
      "Length must be a whole number.": "La lunghezza deve essere un numero intero.",
      "Choose a length from {0} to {1}.": "Scegli una lunghezza da {0} a {1}.",
      "Select at least one character type.": "Seleziona almeno un tipo di caratteri.",
      "Length must be at least the number of selected character types.": "La lunghezza deve essere almeno pari al numero di tipi di caratteri selezionati."
    }
  },
  "qr-code-generator-pro": {
    "answer": "Il Generatore di codici QR Pro crea codici QR colorati per URL, Wi-Fi, email, telefono, SMS o contatti.",
    "content": {
      "about": "Crea un codice QR per testo semplice, Wi-Fi, email, telefono, SMS o un contatto vCard, con controlli per colore e correzione degli errori. Usalo quando un telefono deve connettersi a una rete o salvare un contatto con una scansione. Un nome di rete mancante viene rifiutato, e il testo codificato deve comunque restare entro 1.200 caratteri.",
      "howTo": [
        "Scegli un tipo: testo/URL, Wi-Fi, email, telefono, SMS o contatto.",
        "Compila i campi di quel tipo. I valori non validi vengono rifiutati prima di disegnare il codice.",
        "Se vuoi, cambia colori, dimensione, zona di rispetto e correzione degli errori, poi genera e scarica un PNG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Una rete WPA chiamata Cafe viene codificata come WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Telefono",
          "body": "Un numero come +1 202 555 0100 diventa un contenuto tel: senza spazi."
        }
      ],
      "explanation": "I tipi strutturati vengono convertiti nei consueti formati di testo QR (WIFI, mailto, tel, SMSTO, vCard 3.0). La generazione usa la stessa libreria QR locale del generatore base. I contenuti non vengono memorizzati, registrati né inseriti nell’URL della pagina.",
      "limitations": "I tipi sono testo semplice, Wi-Fi, email, telefono, SMS e un contatto vCard 3.0. Un nome di rete mancante, un’email che non supera il controllo semplice o un numero di telefono con caratteri diversi da cifre e + ( ) facoltativi viene rifiutato prima di disegnare il codice. Il testo codificato deve comunque restare entro 1.200 caratteri.",
      "faqs": [
        {
          "question": "Il Generatore di codici QR Pro è gratuito?",
          "answer": "Sì. Creare un codice QR per Wi-Fi, email, telefono, SMS, contatto o testo è gratuito e non serve un account."
        },
        {
          "question": "È diverso dal generatore QR base?",
          "answer": "Sì. Lo strumento base codifica testo semplice o un URL. Questa versione aggiunge tipi strutturati, colori e controlli di correzione degli errori. Lo strumento base resta invariato."
        },
        {
          "question": "Le password del Wi-Fi vengono salvate?",
          "answer": "No. Restano in questa pagina finché non reimposti o esci. Non vengono scritte nel localStorage né inviate a un server."
        },
        {
          "question": "Come creo un codice QR per il Wi-Fi?",
          "answer": "Scegli Wi-Fi, inserisci nome della rete, password e tipo di sicurezza, poi scarica il codice. I telefoni che lo scansionano possono connettersi senza digitare la password."
        },
        {
          "question": "Posso cambiare i colori di un codice QR?",
          "answer": "Sì, ma mantieni un forte contrasto, con un motivo scuro su sfondo chiaro, perché le fotocamere possano ancora leggerlo. Prova il codice prima di stamparlo."
        }
      ]
    },
    "ui": {
      "QR type": "Tipo di QR",
      "Network name (SSID)": "Nome della rete (SSID)",
      "Security": "Sicurezza",
      "Hidden network": "Rete nascosta",
      "Email": "Email",
      "Subject (optional)": "Oggetto (facoltativo)",
      "Body (optional)": "Corpo (facoltativo)",
      "Phone number": "Numero di telefono",
      "Message (optional)": "Messaggio (facoltativo)",
      "First name": "Nome",
      "Last name": "Cognome",
      "Phone (optional)": "Telefono (facoltativo)",
      "Email (optional)": "Email (facoltativa)",
      "Foreground": "Primo piano",
      "Background": "Sfondo",
      "Size": "Dimensione",
      "Quiet zone": "Zona di rispetto",
      "Error correction": "Correzione degli errori",
      "Generated QR code": "Codice QR generato",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "Il codice QR viene generato nel tuo browser. Le password del Wi-Fi e gli altri campi non vengono memorizzati né inviati a un server.",
      "Foreground and background colors need to be different.": "I colori di primo piano e di sfondo devono essere diversi.",
      "Text / URL": "Testo / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Telefono",
      "Contact": "Contatto",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Nessuna password",
      "Enter a hex color such as #336699.": "Inserisci un colore esadecimale come #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Usa un esadecimale a 3, 6 o 8 cifre, con o senza #.",
      "Enter a network name (SSID).": "Inserisci il nome della rete (SSID).",
      "Enter the Wi-Fi password, or choose no password.": "Inserisci la password del Wi-Fi o scegli Nessuna password.",
      "Enter a valid email address.": "Inserisci un indirizzo email valido.",
      "Enter a phone number, with digits and optional + ( ).": "Inserisci un numero di telefono con cifre e + ( ) facoltativi.",
      "Enter a first or last name for the contact.": "Inserisci un nome o un cognome per il contatto."
    }
  },
  "url-parser": {
    "answer": "Un analizzatore di URL scompone un URL assoluto in protocollo, nome host, porta, percorso, frammento e ogni parametro di query. L’URL resta nel tuo browser.",
    "content": {
      "about": "Incolla un URL assoluto e leggi protocollo, nome host, porta, percorso, frammento e parametri di query.",
      "howTo": [
        "Incolla un URL completo che inizi con http o https.",
        "Premi Analizza."
      ],
      "features": [
        "Ogni chiave di query su una riga separata.",
        "I valori di query vuoti vengono mantenuti.",
        "Il frammento è mostrato separato dal percorso."
      ],
      "examples": [
        {
          "title": "Un URL con porta e due chiavi uguali",
          "body": "https://example.com:8080/docs?topic=a&topic= mantiene la porta 8080 e due righe topic, la seconda con valore vuoto."
        }
      ],
      "explanation": "La pagina usa l’analizzatore di URL del browser. Le chiavi di query duplicate restano voci separate. Un protocollo mancante o un percorso relativo viene rifiutato. Il nome host è il valore restituito dall’analizzatore, compreso un nome internazionalizzato nella sua forma codificata.",
      "tips": [
        "Includi https:// o http://.",
        "Un cancelletto dopo la query indica il frammento, non un altro parametro."
      ],
      "limitations": "Vengono analizzati solo URL assoluti http e https. L’URL non viene aperto né inviato altrove.",
      "faqs": [
        {
          "question": "Come viene analizzato un URL?",
          "answer": "L’analizzatore di URL del browser separa protocollo, nome host, porta, percorso, frammento e ogni parametro di query."
        },
        {
          "question": "Cosa succede alle chiavi di query duplicate?",
          "answer": "Ciascuna viene elencata. Non vengono unite in un solo valore."
        },
        {
          "question": "E un valore di query vuoto?",
          "answer": "Una chiave senza nulla dopo il segno di uguale viene mantenuta e mostrata come vuota."
        },
        {
          "question": "Perché un URL relativo viene rifiutato?",
          "answer": "Un percorso relativo non ha protocollo né host, quindi non è un URL assoluto."
        },
        {
          "question": "L’URL viene inviato a un server?",
          "answer": "No. L’analisi avviene nel tuo browser."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "L’URL viene analizzato nel tuo browser. Non viene inviato a nessun altro servizio.",
      "Absolute URL": "URL assoluto",
      "Parse": "Analizza",
      "Query parameters": "Parametri di query",
      "No query parameters.": "Nessun parametro di query.",
      "(empty)": "(vuoto)",
      "Protocol": "Protocollo",
      "Hostname": "Nome host",
      "Port": "Porta",
      "Path": "Percorso",
      "Fragment": "Frammento",
      "Enter an absolute URL.": "Inserisci un URL assoluto.",
      "Enter a URL of 100000 characters or fewer.": "Inserisci un URL di massimo 100000 caratteri.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Inserisci un URL assoluto che includa un protocollo, come https://.",
      "That text is not a valid absolute URL.": "Questo testo non è un URL assoluto valido.",
      "Enter an http or https URL.": "Inserisci un URL http o https."
    }
  },
  "robots-txt-generator": {
    "answer": "Un generatore di robots.txt scrive righe User-agent, Allow e Disallow dalle regole che inserisci. Può aggiungere l’URL di una sitemap. Non pubblica né testa un sito online.",
    "content": {
      "about": "Scrivi il testo di un robots.txt da uno o più gruppi user-agent e da un URL di sitemap facoltativo.",
      "howTo": [
        "Inserisci uno user-agent.",
        "Aggiungi i percorsi Allow e Disallow, uno per riga.",
        "Aggiungi l’URL di una sitemap se vuoi.",
        "Premi Genera."
      ],
      "features": [
        "Più gruppi user-agent.",
        "Più righe Allow e Disallow.",
        "Un URL di sitemap assoluto facoltativo."
      ],
      "examples": [
        {
          "title": "Una cartella privata",
          "body": "User-agent * con Disallow: /admin dice ai crawler di non scaricare i percorsi sotto /admin. Il file è solo testo."
        }
      ],
      "explanation": "Ogni gruppo inizia con User-agent, poi una riga Allow per ogni percorso e una riga Disallow per ogni percorso. Le righe di percorso vuote vengono saltate. Una sitemap viene aggiunta solo se è un URL assoluto http o https. La pagina non carica il file e non testa un sito online.",
      "tips": [
        "Usa * per tutti i crawler.",
        "Metti ogni percorso su una riga separata."
      ],
      "limitations": "Il risultato è testo da copiare. Non pubblica regole e non verifica cosa consente un sito online.",
      "faqs": [
        {
          "question": "Come si scrive un file robots.txt?",
          "answer": "Inizia con una riga User-agent, poi aggiungi righe Allow e Disallow. Aggiungi una riga Sitemap quando hai un URL di sitemap assoluto."
        },
        {
          "question": "Posso usare più di uno user-agent?",
          "answer": "Sì. Ogni gruppo ha il proprio user-agent e le proprie regole."
        },
        {
          "question": "Cosa succede a un percorso vuoto?",
          "answer": "Una riga vuota viene saltata, quindi non crea una regola Allow o Disallow vuota."
        },
        {
          "question": "Questo testa il mio sito online?",
          "answer": "No. Genera solo il testo. Non pubblica il file e non contatta il tuo sito."
        },
        {
          "question": "Quale URL di sitemap è accettato?",
          "answer": "Un URL assoluto http o https. Un percorso senza protocollo viene rifiutato."
        },
        {
          "question": "Questi dati vengono inviati a un server?",
          "answer": "No. Le righe user-agent e i percorsi vengono composti in questa scheda. Non vengono caricati e la pagina non contatta il tuo sito."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Qui viene scritto il testo del robots.txt dalle regole che inserisci. Nessun sito online viene testato o pubblicato.",
      "Group {0} user-agent": "User-agent del gruppo {0}",
      "Allow paths, one per line": "Percorsi Allow, uno per riga",
      "Disallow paths, one per line": "Percorsi Disallow, uno per riga",
      "Remove group": "Rimuovi gruppo",
      "Add group": "Aggiungi gruppo",
      "Sitemap URL, optional": "URL della sitemap, facoltativo",
      "Add at least one user-agent group.": "Aggiungi almeno un gruppo user-agent.",
      "Group {0} needs a user-agent.": "Il gruppo {0} ha bisogno di uno user-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Inserisci la sitemap come URL assoluto http o https."
    }
  },
  "password-strength-checker": {
    "answer": "Un verificatore di robustezza delle password stima i bit dalla lunghezza e dai tipi di caratteri effettivamente presenti. Non carica la password e non la confronta con un elenco di violazioni.",
    "content": {
      "about": "Digita una password e ottieni una valutazione Debole, Media o Forte. La stima usa la lunghezza e i tipi di caratteri presenti. Non cerca nelle violazioni di dati e non sa se un sito accetterà la password.",
      "howTo": [
        "Digita la password. Una casella vuota viene rifiutata.",
        "Premi Verifica.",
        "Leggi la valutazione, la lunghezza, i bit stimati e i tipi di caratteri trovati."
      ],
      "features": [
        "Maiuscole, minuscole, numeri e il set di simboli contano solo se compaiono.",
        "Ogni altro carattere, compresi uno spazio o un accento grave, aggiunge uno all’insieme per ogni carattere distinto.",
        "Debole è sotto i 50 bit, Media sotto gli 80 e Forte da 80 in su."
      ],
      "examples": [
        {
          "title": "Una parola minuscola",
          "body": "password ha 8 lettere minuscole. L’insieme è 26, la stima arrotondata dà 38 bit e la valutazione è Debole."
        },
        {
          "title": "Lettere, un numero e un simbolo",
          "body": "Abcdefghijklm12! ha 16 caratteri con maiuscole, minuscole, numeri e un simbolo. L’insieme è 85, la stima arrotondata dà 103 bit e la valutazione è Forte."
        }
      ],
      "explanation": "I bit sono la lunghezza per il logaritmo in base 2 dell’insieme. L’insieme vale 26 per le maiuscole se compare una lettera dalla A alla Z, 26 per le minuscole, 10 per una cifra e 23 per un simbolo di !@#$%^&*()-_=+[]{};:,.?. Un carattere fuori da questi set non conta come l’intero set di simboli: aggiunge uno. Non è il generatore di password, che valuta una password in base ai tipi scelti prima di crearla.",
      "tips": [
        "Una password più lunga con più tipi di caratteri ottiene una valutazione migliore di una parola breve.",
        "Usa il Generatore di password se vuoi una nuova password invece di una valutazione."
      ],
      "limitations": "Fino a 256 caratteri. La pagina non cerca nelle violazioni e non sa se un sito accetterà la password. Le lettere accentate contano come altri caratteri, non come A-Z.",
      "faqs": [
        {
          "question": "Il verificatore di robustezza è gratuito?",
          "answer": "Sì. Puoi valutare una password qui senza pagare né creare un account."
        },
        {
          "question": "La password viene confrontata con password trapelate?",
          "answer": "No. La valutazione si basa solo sulla lunghezza e sui tipi di caratteri di ciò che hai digitato."
        },
        {
          "question": "Perché una password di sole cifre è Debole?",
          "answer": "Otto cifre usano un insieme di 10. Sono circa 27 bit, sotto i 50, quindi la valutazione è Debole."
        },
        {
          "question": "La password viene inviata a un server?",
          "answer": "No. La verifica avviene in questa scheda del browser. Tools Star Hub non invia la password a un server e non la salva nella memoria locale."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} caratteri, {1}, {2} bit",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "La valutazione usa i tipi di caratteri della password che digiti. Resta in questa scheda, non viene caricata e non viene confrontata con un elenco di violazioni.",
      "Show password": "Mostra password",
      "Check": "Verifica",
      "Copy rating": "Copia valutazione",
      "Rating": "Valutazione",
      "Estimated bits": "Bit stimati",
      "Enter a password.": "Inserisci una password.",
      "Enter a password of {0} characters or fewer.": "Inserisci una password di massimo {0} caratteri.",
      "Uppercase": "Maiuscole",
      "Lowercase": "Minuscole",
      "Other": "Altri"
    }
  },
  "meta-tag-generator": {
    "answer": "Un generatore di meta tag scrive i tag HTML per titolo, descrizione, robots, canonical, Open Graph e Twitter. Non scarica nessuna pagina.",
    "content": {
      "about": "Inserisci un titolo e i tag facoltativi che vuoi. La pagina scrive HTML da incollare nell’head di una pagina. Non scarica un URL online e non controlla come un sito condividerà il link.",
      "howTo": [
        "Inserisci un titolo. Un titolo vuoto viene rifiutato.",
        "Aggiungi descrizione, URL canonico, scelte robots e i campi Open Graph o Twitter che vuoi.",
        "Premi Genera, poi copia l’HTML."
      ],
      "features": [
        "Un tag charset, un titolo e un tag robots in ogni risultato.",
        "Descrizione, link canonico, tag Open Graph e tag Twitter facoltativi.",
        "Virgolette e & nel testo vengono convertiti in entità."
      ],
      "examples": [
        {
          "title": "Un titolo e una descrizione",
          "body": "Il titolo Sample page e la descrizione A short description of the page., con index e follow, producono un tag charset, il titolo, la descrizione e un tag robots index, follow."
        },
        {
          "title": "Una & nel titolo",
          "body": "Il titolo A & B viene scritto come A &amp; B nel tag title."
        }
      ],
      "explanation": "L’HTML viene composto dai campi compilati. I campi facoltativi vuoti vengono omessi. URL canonico, immagine Open Graph, URL Open Graph e immagine Twitter devono essere URL assoluti http o https. La pagina non contatta questi URL.",
      "tips": [
        "Usa qui i campi Open Graph quando vuoi i tag nel tuo HTML. Un’anteprima di condivisione dal vivo è un controllo diverso."
      ],
      "limitations": "Il titolo può avere fino a 200 caratteri e la descrizione fino a 500. Il tipo Open Graph è website, article o nessuno. La card di Twitter è summary, summary_large_image o nessuna. Un titolo Twitter senza card viene rifiutato.",
      "faqs": [
        {
          "question": "Il generatore di meta tag è gratuito?",
          "answer": "Sì. Puoi scrivere i tag qui senza pagare né creare un account."
        },
        {
          "question": "Mostra come apparirà un link su un social?",
          "answer": "No. Scrive solo i tag. Non apre l’URL."
        },
        {
          "question": "Quale valore robots viene scritto?",
          "answer": "La scelta index e la scelta follow, per esempio index, follow oppure noindex, nofollow."
        },
        {
          "question": "Il testo viene inviato a un server?",
          "answer": "No. L’HTML viene creato in questa scheda del browser. Tools Star Hub non invia questi campi a un server e non li salva nella memoria locale."
        }
      ]
    },
    "ui": {
      "Sample page": "Pagina di esempio",
      "A short description of the page.": "Una breve descrizione della pagina.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Qui viene scritto HTML per l’head di una pagina. Non viene scaricato nessun URL online e non si controlla come un sito condividerà il link.",
      "Title": "Titolo",
      "Description": "Descrizione",
      "Canonical URL, optional": "URL canonico, facoltativo",
      "Robots index": "Robots: index",
      "Robots follow": "Robots: follow",
      "Open Graph title, optional": "Titolo Open Graph, facoltativo",
      "Open Graph description, optional": "Descrizione Open Graph, facoltativa",
      "Open Graph image URL, optional": "URL immagine Open Graph, facoltativo",
      "Open Graph URL, optional": "URL Open Graph, facoltativo",
      "Open Graph type": "Tipo Open Graph",
      "Twitter title, optional": "Titolo Twitter, facoltativo",
      "Copy HTML": "Copia HTML",
      "Head tags": "Tag head",
      "None": "Nessuno",
      "Enter a {0} of {1} characters or fewer.": "{0}: massimo {1} caratteri.",
      "Enter {0} as an absolute http or https URL.": "{0}: inserisci un URL assoluto http o https.",
      "Enter a title.": "Inserisci un titolo.",
      "the canonical URL": "URL canonico",
      "Open Graph title": "Titolo Open Graph",
      "Open Graph description": "Descrizione Open Graph",
      "the Open Graph image URL": "URL immagine Open Graph",
      "the Open Graph URL": "URL Open Graph",
      "Choose website, article, or no Open Graph type.": "Scegli website, article o nessun tipo Open Graph.",
      "Choose a Twitter card of summary or summary_large_image.": "Scegli una card di Twitter summary o summary_large_image.",
      "the Twitter image URL": "URL immagine Twitter",
      "Choose a Twitter card before adding Twitter text or an image.": "Scegli una card di Twitter prima di aggiungere testo o un’immagine Twitter.",
      "title": "Titolo",
      "description": "Descrizione"
    }
  },
  "open-graph-preview": {
    "answer": "Un’anteprima Open Graph invia l’URL di una pagina a questo sito, legge il titolo pubblico e i tag di condivisione e non salva la pagina. Gli indirizzi privati e non http vengono rifiutati.",
    "content": {
      "about": "Inserisci un URL pubblico http o https. Controlla anteprima invia quell’URL a questo sito. Il sito richiede la pagina e mostra titolo, descrizione, immagine e card di Twitter che trova. La pagina non viene salvata qui. Un indirizzo privato o locale viene rifiutato prima di leggere la pagina.",
      "howTo": [
        "Inserisci un URL assoluto http o https.",
        "Premi Controlla anteprima.",
        "Leggi la scheda. Un indirizzo rifiutato, un timeout o un URL non http mostra un breve errore senza contenuti della pagina."
      ],
      "features": [
        "I campi titolo, descrizione, indirizzo dell’immagine e card di Twitter della pagina pubblica.",
        "L’indirizzo dopo i reindirizzamenti, se il reindirizzamento resta su un URL pubblico http o https.",
        "Un breve errore quando l’indirizzo è privato, la richiesta va in timeout o il protocollo non è http o https."
      ],
      "examples": [
        {
          "title": "Una pagina pubblica",
          "body": "https://example.com/ restituisce il titolo Example Domain. Quella pagina non ha descrizione, immagine né card di Twitter, quindi quei campi indicano Non trovato."
        },
        {
          "title": "Un indirizzo locale",
          "body": "http://127.0.0.1/ e la forma decimale http://2130706433/ mostrano entrambi Questo indirizzo non può essere recuperato."
        }
      ],
      "explanation": "Il browser invia a questo sito solo l’URL. Il sito risolve l’host, rifiuta un indirizzo privato, di loopback, link-local o riservato, e ricontrolla dopo ogni reindirizzamento. Legge al massimo 512 KiB della pagina decompressa, poi restituisce i tag. La pagina grezza non viene restituita né salvata.",
      "tips": [
        "Usa il generatore di meta tag quando vuoi scrivere i tag da solo. Questa pagina legge i tag già presenti su un URL pubblico."
      ],
      "limitations": "Solo http e https. Un URL file, un URL con nome utente e un indirizzo privato vengono rifiutati. La richiesta si ferma dopo 8 secondi. Un’immagine di condivisione può comparire anche se l’host dell’immagine blocca l’anteprima.",
      "faqs": [
        {
          "question": "L’anteprima Open Graph è gratuita?",
          "answer": "Sì. Puoi controllare i tag di condivisione di una pagina pubblica senza pagare né creare un account. L’URL viene comunque inviato a questo sito per poter leggere i tag."
        },
        {
          "question": "L’URL esce da questo dispositivo?",
          "answer": "Sì. Controlla anteprima invia l’URL a questo sito, che richiede la pagina pubblica e ne legge i tag. La pagina non viene salvata qui. Un indirizzo privato o non http viene rifiutato."
        },
        {
          "question": "Perché un URL locale è stato rifiutato?",
          "answer": "Indirizzi come 127.0.0.1, una rete privata e la forma decimale di un indirizzo di loopback vengono rifiutati prima di leggere la pagina."
        },
        {
          "question": "Come appare un timeout?",
          "answer": "La scheda non viene mostrata. La pagina indica che la richiesta di anteprima è scaduta."
        }
      ]
    },
    "ui": {
      "Not found": "Non trovato",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Controlla anteprima invia l’URL a questo sito. Il sito legge il titolo e i tag di condivisione della pagina pubblica e non salva la pagina. Un indirizzo privato o un URL non http viene rifiutato.",
      "Page URL": "URL della pagina",
      "Checking the page…": "Controllo della pagina…",
      "Image": "Immagine",
      "The image address was found, but it did not load.": "L’indirizzo dell’immagine è stato trovato, ma l’immagine non si è caricata.",
      "Twitter image": "Immagine Twitter",
      "That page could not be previewed.": "Impossibile mostrare l’anteprima di questa pagina.",
      "Enter an http or https page URL.": "Inserisci l’URL di una pagina http o https.",
      "Checking…": "Controllo…",
      "Check preview": "Controlla anteprima",
      "That address cannot be fetched.": "Questo indirizzo non può essere recuperato.",
      "The preview request timed out.": "La richiesta di anteprima è scaduta.",
      "That page redirected too many times.": "Questa pagina è stata reindirizzata troppe volte.",
      "That page is not HTML.": "Questa pagina non è HTML.",
      "Too many preview requests. Wait a minute and try again.": "Troppe richieste di anteprima. Attendi un minuto e riprova.",
      "Send a JSON request with a url.": "Invia una richiesta JSON con un URL."
    }
  }
};

export default data;
