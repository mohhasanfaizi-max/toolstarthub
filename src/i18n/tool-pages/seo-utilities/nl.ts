import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Een UTM-builder voegt campagneparameters toe aan een URL, zodat u verkeersbronnen kunt volgen in analysetools.",
    "content": {
      "about": "Voeg utm_source, utm_medium en utm_campaign toe aan een link, plus optioneel term en content. Marketeers gebruiken dit om een campagnelink te labelen voordat de URL in een advertentie of e-mail komt. Een leeg veld wordt weggelaten, en deze pagina registreert geen bezoeken en verkort het adres niet.",
      "howTo": [
        "Voer de website-URL in, met of zonder https://.",
        "Vul bron, medium en campagne in. Term en content zijn optioneel.",
        "Kopieer de gemaakte URL. Bestaande queryparameters van de oorspronkelijke link blijven behouden."
      ],
      "examples": [
        {
          "title": "Een eenvoudige campagnelink",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Een URL die al parameters heeft",
          "body": "https://example.com/page?ref=nav houdt ref=nav en voegt de UTM-velden ernaast toe."
        }
      ],
      "explanation": "UTM-parameters vertellen analysetools waar een bezoek vandaan kwam. utm_source is het platform, utm_medium het kanaal en utm_campaign de naam van de actie. utm_term en utm_content zijn optioneel. Waarden worden URL-gecodeerd, zodat spaties en speciale tekens geldig blijven.",
      "limitations": "Een lege bron, een leeg medium of een lege campagne wordt weggelaten in plaats van als lege parameter geschreven. De pagina verkort het adres niet en registreert geen bezoeken. Tekst die geen website-URL is, wordt geweigerd.",
      "faqs": [
        {
          "question": "Is de UTM-builder gratis?",
          "answer": "Ja. utm_source, utm_medium en utm_campaign aan een link toevoegen is gratis, en een account is niet nodig."
        },
        {
          "question": "Worden mijn andere queryparameters overschreven?",
          "answer": "Nee. Alleen de UTM-velden die u invult, worden toegevoegd of bijgewerkt. Andere parameters blijven zoals ze zijn."
        },
        {
          "question": "Roept deze tool een trackingdienst aan?",
          "answer": "Nee. Hij bouwt alleen een URL in uw browser. Tracking gebeurt later, als u de link in een analyse-opzet gebruikt."
        },
        {
          "question": "Wat zijn UTM-parameters?",
          "answer": "UTM-parameters zijn labels in een link, zoals utm_source, utm_medium en utm_campaign, die analysetools vertellen waar een bezoek vandaan kwam."
        },
        {
          "question": "Welke UTM-parameters zijn verplicht?",
          "answer": "Bron, medium en campagne zijn het gebruikelijke minimum. Term en content zijn optioneel en helpen zoekwoorden of advertentieversies uit elkaar te houden."
        }
      ]
    },
    "ui": {
      "Website URL": "Website-URL",
      "Existing query parameters are kept. UTM values are added or updated.": "Bestaande queryparameters blijven behouden. UTM-waarden worden toegevoegd of bijgewerkt.",
      "Campaign source": "Campagnebron",
      "Campaign medium": "Campagnemedium",
      "Campaign name": "Campagnenaam",
      "Campaign term (optional)": "Campagneterm (optioneel)",
      "running shoes": "hardloopschoenen",
      "Campaign content (optional)": "Campagne-content (optioneel)",
      "Copy URL": "URL kopiëren",
      "Enter a URL to generate a campaign link.": "Voer een URL in om een campagnelink te maken.",
      "Campaign URL": "Campagne-URL",
      "Enter a website URL.": "Voer een website-URL in.",
      "Enter a valid website URL.": "Voer een geldige website-URL in."
    }
  },
  "slug-generator": {
    "answer": "Een slug-generator maakt van een titel een tekenreeks in kleine letters met koppeltekens die veilig in een URL past.",
    "content": {
      "about": "Maak van een titel een permalink in kleine letters met koppeltekens. Schrijvers gebruiken dit om een bericht een naam te geven voordat het adres in een CMS gaat. Accenten op Latijnse letters worden verwijderd, tekens zoals 你好 blijven staan, en het resultaat controleert niet of het adres nog vrij is.",
      "howTo": [
        "Typ of plak een titel.",
        "De slug wordt bijgewerkt terwijl u typt.",
        "Kopieer de slug of maak het vak leeg."
      ],
      "examples": [
        {
          "title": "Een blogtitel",
          "body": "“How to Compress an Image Without Losing Quality” wordt how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Accenten en andere schriften",
          "body": "Accenten op Latijnse letters worden verwijderd (Café → cafe). Tekens zoals 你好 blijven staan, zodat de slug leesbaar blijft."
        }
      ],
      "explanation": "De generator verwijdert witruimte aan de randen, splitst combinerende tekens af na Unicode-normalisatie NFKD, zet Latijnse letters in kleine letters, maakt van andere scheidingstekens koppeltekens en voegt herhalingen samen. Unicode-letters en -cijfers blijven behouden in plaats van dat elk niet-Engels teken wordt gewist. Het resultaat is een praktische permalink, geen gegarandeerd unieke ID.",
      "limitations": "Accenten op Latijnse letters worden verwijderd, tekens zoals 你好 blijven staan. Het resultaat heeft de vorm van een permalink, maar bewijst niet dat het adres vrij is. Sommige websitebouwers wissen niet-Latijnse letters; deze pagina niet.",
      "faqs": [
        {
          "question": "Is de slug-generator gratis?",
          "answer": "Ja. Een titel omzetten in een permalink met koppeltekens is gratis, en u hebt geen account nodig."
        },
        {
          "question": "Past dit bij elk CMS?",
          "answer": "De meeste sites accepteren slugs in kleine letters met koppeltekens. Sommige verwijderen niet-Latijnse letters; deze tool houdt ze als het letters of cijfers zijn."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De titel wordt in dit tabblad herschreven. Hij wordt niet geüpload en niet opgeslagen in lokale opslag."
        },
        {
          "question": "Wat is een URL-slug?",
          "answer": "Een slug is het leesbare deel van een webadres dat een pagina een naam geeft, zoals brood-bakken in example.com/blog/brood-bakken."
        },
        {
          "question": "Wat maakt een goede slug voor SEO?",
          "answer": "Houd hem kort, in kleine letters en beschrijvend, met koppeltekens tussen de woorden. Vermijd datums en opvulwoorden als de pagina later kan worden bijgewerkt."
        }
      ]
    },
    "ui": {
      "Title or text": "Titel of tekst",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Accenten worden van Latijnse letters verwijderd. Andere tekens, zoals Chinese, blijven behouden.",
      "Example": "Voorbeeld",
      "Copy slug": "Slug kopiëren",
      "Generated slug": "Gemaakte slug",
      "How to Compress an Image Without Losing Quality": "Zo comprimeert u een afbeelding zonder kwaliteitsverlies"
    }
  },
  "qr-code-generator": {
    "answer": "Een QR-codegenerator maakt van tekst of een URL een downloadbare QR-afbeelding, gemaakt op uw apparaat.",
    "content": {
      "about": "Codeer gewone tekst of een URL als QR-code in PNG, tot 1.200 tekens. Gebruik het voor een korte link die iemand moet scannen. Indelingen voor wifi, e-mail en contacten staan in de QR-codegenerator Pro, en een lange tekenreeks geeft een dicht patroon dat sommige camera’s missen.",
      "howTo": [
        "Plak tekst of een volledige URL, met https:// als het een weblink is.",
        "Klik op Genereren. Er verschijnen een voorbeeld en een toegankelijke beschrijving.",
        "Download de PNG en zet terug als u een andere code nodig hebt."
      ],
      "examples": [
        {
          "title": "Een website",
          "body": "https://example.com wordt een QR-code die dat adres opent wanneer hij wordt gescand."
        },
        {
          "title": "Gewone tekst",
          "body": "Een korte notitie of een wifi-herinnering kan als tekst worden gecodeerd. Blijf onder de 1.200 tekens zodat het patroon leesbaar blijft."
        }
      ],
      "explanation": "Een QR-code is een matrixbarcode. Deze tool bouwt het patroon in uw browser met een bibliotheek aan de clientkant. De tekst wordt niet naar een QR-API gestuurd. Zeer lange inhoud geeft een dichte code die veel camera’s moeilijk lezen, daarom is de lengte begrensd.",
      "limitations": "Gewone tekst of een URL wordt gecodeerd, en de tekst mag maximaal 1.200 tekens lang zijn. Indelingen voor wifi, e-mail en contacten staan in de QR-codegenerator Pro. Een lange tekenreeks geeft een dicht patroon dat sommige camera’s missen.",
      "faqs": [
        {
          "question": "Is de QR-codegenerator gratis?",
          "answer": "Ja. Een QR-afbeelding maken van tekst of een URL in deze browser is gratis, zonder account."
        },
        {
          "question": "Wordt de tekst geüpload?",
          "answer": "Nee. De QR-code wordt in uw browser gemaakt. De tekst wordt niet naar een server gestuurd."
        },
        {
          "question": "Kan elke scanner de PNG lezen?",
          "answer": "De meeste camera’s lezen een PNG met veel contrast van een korte URL. Kleine afdrukken, weinig licht of heel lange tekst kunnen mislukken."
        },
        {
          "question": "Verlopen QR-codes die hier zijn gemaakt?",
          "answer": "Nee. De tekst of link staat direct in het patroon, zonder doorverwijsdienst ertussen, dus de code werkt zolang de link zelf werkt."
        },
        {
          "question": "Hoe maak ik een QR-code voor een website?",
          "answer": "Plak het volledige adres, met https://, maak de code, download de PNG en test hem met een telefooncamera voordat u hem afdrukt."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "De QR-code wordt in uw browser gemaakt. Houd de inhoud redelijk kort.",
      "QR code for {0}": "QR-code voor {0}",
      "QR code for:": "QR-code voor:",
      "The QR code is generated in your browser. The text is not sent to a server.": "De QR-code wordt in uw browser gemaakt. De tekst wordt niet naar een server gestuurd."
    }
  },
  "qr-code-scanner": {
    "answer": "Een QR-codescanner leest een QR-afbeelding die u kiest en toont de gedecodeerde tekst lokaal.",
    "content": {
      "about": "Lees de eerste QR-code van de camera of uit een PNG of JPG. Gebruik het als u de tekst wilt zien voordat u besluit een link te openen. De camera blijft uit tot u op Camera starten klikt, en andere soorten barcodes worden niet gedecodeerd.",
      "howTo": [
        "Klik alleen op Camera starten als u met de camera van het apparaat wilt scannen. De toestemming wordt op dat moment gevraagd, niet bij het laden van de pagina.",
        "Houd de code in beeld tot er een resultaat verschijnt, of klik op Camera stoppen om de stream vrij te geven.",
        "Is de camera geblokkeerd, upload dan een PNG of JPG van de code.",
        "Kopieer het resultaat. Is het een http(s)-URL, dan wordt Link openen aangeboden. De pagina navigeert niet vanzelf."
      ],
      "examples": [
        {
          "title": "Scannen met de camera",
          "body": "Nadat u de camera hebt gestart, worden beelden in het tabblad gedecodeerd. De stream stopt zodra een code is gevonden of als u op Stoppen klikt."
        },
        {
          "title": "Afbeelding uploaden",
          "body": "Een screenshot van een QR-code kan worden gedecodeerd, ook als de cameratoestemming is geweigerd."
        }
      ],
      "explanation": "Het decoderen gebeurt met een lokale JavaScript-lezer op camerabeelden of een geüploade afbeelding. Cameratoegang begint pas nadat u op Camera starten klikt. De tracks worden beëindigd bij Stoppen, na een geslaagde scan en wanneer u de pagina verlaat. Een gevonden URL wordt eerst getoond; openen is een aparte handeling.",
      "limitations": "Getoond wordt de eerste code die de lezer vindt. Andere soorten barcodes worden niet gedecodeerd. Een link blijft op de pagina staan tot u op Link openen klikt, en de camera blijft uit tot u op Camera starten klikt.",
      "faqs": [
        {
          "question": "Is de QR-codescanner gratis?",
          "answer": "Ja. Een QR-code lezen met de camera of uit een afbeelding is gratis, en een account is niet nodig."
        },
        {
          "question": "Worden camerabeelden geüpload?",
          "answer": "Nee. Beelden na Camera starten en een gekozen PNG of JPG worden in dit tabblad gedecodeerd. Geen van beide wordt naar Tools Star Hub gestuurd."
        },
        {
          "question": "Waarom werd de website niet automatisch geopend?",
          "answer": "Automatisch naar een gescande URL gaan is onveilig. Controleer de tekst en gebruik dan Link openen als u die vertrouwt."
        },
        {
          "question": "Wat als de afbeelding meer dan één QR-code bevat?",
          "answer": "Deze lezer meldt de eerste code die hij kan decoderen. Snijd de afbeelding bij als u een bepaalde code nodig hebt."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "Cameratoegang wordt alleen gevraagd als u kiest om met de camera te scannen.",
      "Start camera": "Camera starten",
      "Stop camera": "Camera stoppen",
      "Or upload a QR image": "Of upload een QR-afbeelding",
      "Drag and drop a QR image here, or choose a file.": "Sleep een QR-afbeelding hierheen of kies een bestand.",
      "Image upload works even if the camera is blocked.": "Een afbeelding uploaden werkt ook als de camera geblokkeerd is.",
      "Scan result": "Scanresultaat",
      "Open link": "Link openen",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Beelden na Camera starten en een gekozen PNG of JPG worden in dit tabblad gedecodeerd. Geen van beide wordt naar Tools Star Hub gestuurd.",
      "This browser does not support camera access. Upload an image instead.": "Deze browser ondersteunt geen cameratoegang. Upload in plaats daarvan een afbeelding.",
      "Camera permission was denied. You can still upload an image.": "Cameratoestemming is geweigerd. U kunt nog steeds een afbeelding uploaden.",
      "No camera was found. Upload an image instead.": "Er is geen camera gevonden. Upload in plaats daarvan een afbeelding.",
      "The camera could not be started. Upload an image instead.": "De camera kon niet worden gestart. Upload in plaats daarvan een afbeelding.",
      "This browser could not read that image.": "Deze browser kon die afbeelding niet lezen.",
      "No QR code was found in that image.": "Er is geen QR-code gevonden in die afbeelding.",
      "That file could not be read as an image.": "Dat bestand kon niet als afbeelding worden gelezen."
    }
  },
  "password-generator": {
    "answer": "Een wachtwoordgenerator maakt willekeurige wachtwoorden van de tekensets die u kiest, met een cryptografische randomgenerator.",
    "content": {
      "about": "Maak een wachtwoord van 8 tot 64 tekens met de tekensoorten van uw keuze. Gebruik het als een nieuw account een gemengde reeks nodig heeft die u nog nergens hebt gebruikt. Het sterktelabel is een schatting op basis van lengte en setgrootte, en controleert niet of een site is gehackt.",
      "howTo": [
        "Kies een lengte van 8 tot 64 en de gewenste tekensoorten.",
        "Sluit desgewenst verwarrende tekens zoals O, 0, I, l en 1 uit.",
        "Klik op Genereren en kopieer het wachtwoord. Er wordt niets opgeslagen."
      ],
      "examples": [
        {
          "title": "16 gemengde tekens",
          "body": "Een wachtwoord van 16 tekens met hoofdletters, kleine letters, cijfers en symbolen heeft een grote tekenruimte. Het sterktelabel is een schatting op basis van lengte en setgrootte."
        },
        {
          "title": "Alleen letters",
          "body": "Als u cijfers en symbolen uitzet, wordt de set kleiner. De generator vereist nog steeds minstens één gekozen soort."
        }
      ],
      "explanation": "Elk teken wordt gekozen met crypto.getRandomValues(), niet met Math.random(). De generator neemt minstens één teken uit elke gekozen set en vult de rest aan uit de gecombineerde set met zuivere steekproeven. Het sterktelabel (Zwak / Redelijk / Sterk) wordt geschat met lengte × log2(setgrootte). Het is geen garantie tegen raden, hergebruik of een gelekte site.",
      "limitations": "De lengte moet een geheel getal van 8 tot 64 zijn, en minstens één tekensoort moet aan blijven. Het sterktelabel schat op basis van lengte en setgrootte. Het controleert geen hergebruik, phishing of gehackte sites. Verwarrende tekens kunnen worden uitgesloten; de rest van de symbolenlijst ligt vast.",
      "faqs": [
        {
          "question": "Is de wachtwoordgenerator gratis?",
          "answer": "Ja. Een wachtwoord van 8 tot 64 tekens maken is gratis, en een account is niet nodig."
        },
        {
          "question": "Worden wachtwoorden opgeslagen?",
          "answer": "Nee. Ze worden niet opgeslagen, gelogd, in de URL gezet of naar localStorage geschreven. Kopieer de waarde als u die nodig hebt."
        },
        {
          "question": "Betekent Sterk dat het niet te kraken is?",
          "answer": "Nee. De meter is een schatting op basis van lengte en tekensetgrootte. Hij houdt geen rekening met hergebruik, phishing of een gecompromitteerde dienst."
        },
        {
          "question": "Hoe lang moet een wachtwoord zijn?",
          "answer": "Langer is sterker. Veel beveiligingsgidsen raden voor belangrijke accounts minstens 12 tot 16 tekens aan, met een ander wachtwoord voor elke site."
        },
        {
          "question": "Is een online wachtwoordgenerator veilig?",
          "answer": "Deze maakt het wachtwoord in uw browser met crypto.getRandomValues en verstuurt of bewaart het niet. Bewaar het in een wachtwoordmanager, niet in een notitie."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "Van {0} tot {1} tekens.",
      "Uppercase letters": "Hoofdletters",
      "Lowercase letters": "Kleine letters",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Verwarrende tekens uitsluiten (O, 0, I, l, 1)",
      "Generated password": "Gemaakt wachtwoord",
      "Length: {0}": "Lengte: {0}",
      "Character set size: {0}": "Grootte tekenset: {0}",
      "Estimated entropy: {0} bits ({1})": "Geschatte entropie: {0} bits ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Deze meter is een schatting op basis van lengte en tekensetgrootte. Het is geen garantie voor veiligheid.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Wachtwoorden worden gemaakt met crypto.getRandomValues in uw browser. Ze worden niet opgeslagen, gelogd of naar een server gestuurd.",
      "Enter a password length.": "Voer een wachtwoordlengte in.",
      "Length must be a whole number.": "De lengte moet een geheel getal zijn.",
      "Choose a length from {0} to {1}.": "Kies een lengte van {0} tot {1}.",
      "Select at least one character type.": "Kies minstens één tekensoort.",
      "Length must be at least the number of selected character types.": "De lengte moet minstens gelijk zijn aan het aantal gekozen tekensoorten."
    }
  },
  "qr-code-generator-pro": {
    "answer": "De QR-codegenerator Pro maakt QR-codes in kleur voor URL’s, wifi, e-mail, telefoon, sms of contacten.",
    "content": {
      "about": "Maak een QR-code voor gewone tekst, wifi, e-mail, telefoon, sms of een vCard-contact, met instellingen voor kleur en foutcorrectie. Gebruik het als een telefoon via een scan met een netwerk moet verbinden of een contact moet opslaan. Een ontbrekende netwerknaam wordt geweigerd, en de gecodeerde tekst moet nog steeds binnen 1.200 tekens blijven.",
      "howTo": [
        "Kies een type: tekst/URL, wifi, e-mail, telefoon, sms of contact.",
        "Vul de velden voor dat type in. Ongeldige waarden worden geweigerd voordat er een code wordt getekend.",
        "Wijzig desgewenst kleuren, grootte, stille zone en foutcorrectie, maak de code en download een PNG."
      ],
      "examples": [
        {
          "title": "Wifi",
          "body": "Een WPA-netwerk met de naam Cafe wordt gecodeerd als WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Telefoon",
          "body": "Een nummer zoals +1 202 555 0100 wordt een tel:-inhoud zonder spaties."
        }
      ],
      "explanation": "Gestructureerde types worden omgezet naar de gangbare QR-tekstformaten (WIFI, mailto, tel, SMSTO, vCard 3.0). Er wordt dezelfde lokale QR-bibliotheek gebruikt als bij de gewone generator. Inhoud wordt niet opgeslagen, gelogd of in de pagina-URL gezet.",
      "limitations": "De types zijn gewone tekst, wifi, e-mail, telefoon, sms en een vCard 3.0-contact. Een ontbrekende netwerknaam, een e-mail die de eenvoudige controle niet doorstaat of een telefoonnummer met andere tekens dan cijfers en optioneel + ( ) wordt geweigerd voordat er een code wordt getekend. De gecodeerde tekst moet nog steeds binnen 1.200 tekens blijven.",
      "faqs": [
        {
          "question": "Is de QR-codegenerator Pro gratis?",
          "answer": "Ja. Een QR-code maken voor wifi, e-mail, telefoon, sms, een contact of tekst is gratis, en een account is niet nodig."
        },
        {
          "question": "Verschilt dit van de gewone QR-generator?",
          "answer": "Ja. De gewone tool codeert gewone tekst of een URL. Deze versie voegt gestructureerde types, kleuren en foutcorrectie-instellingen toe. De gewone tool blijft ongewijzigd."
        },
        {
          "question": "Worden wifi-wachtwoorden opgeslagen?",
          "answer": "Nee. Ze blijven op deze pagina tot u terugzet of vertrekt. Ze worden niet naar localStorage geschreven en niet naar een server gestuurd."
        },
        {
          "question": "Hoe maak ik een QR-code voor wifi?",
          "answer": "Kies Wifi, voer de netwerknaam, het wachtwoord en het beveiligingstype in en download de code. Telefoons die hem scannen, kunnen verbinden zonder het wachtwoord te typen."
        },
        {
          "question": "Kan ik de kleuren van een QR-code aanpassen?",
          "answer": "Ja, maar houd veel contrast, met een donker patroon op een lichte achtergrond, zodat camera’s hem blijven lezen. Test de code voordat u hem afdrukt."
        }
      ]
    },
    "ui": {
      "QR type": "QR-type",
      "Network name (SSID)": "Netwerknaam (SSID)",
      "Security": "Beveiliging",
      "Hidden network": "Verborgen netwerk",
      "Email": "E-mail",
      "Subject (optional)": "Onderwerp (optioneel)",
      "Body (optional)": "Berichttekst (optioneel)",
      "Phone number": "Telefoonnummer",
      "Message (optional)": "Bericht (optioneel)",
      "First name": "Voornaam",
      "Last name": "Achternaam",
      "Phone (optional)": "Telefoon (optioneel)",
      "Email (optional)": "E-mail (optioneel)",
      "Foreground": "Voorgrond",
      "Background": "Achtergrond",
      "Size": "Grootte",
      "Quiet zone": "Stille zone",
      "Error correction": "Foutcorrectie",
      "Generated QR code": "Gemaakte QR-code",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "De QR-code wordt in uw browser gemaakt. Wifi-wachtwoorden en andere velden worden niet opgeslagen en niet naar een server gestuurd.",
      "Foreground and background colors need to be different.": "Voorgrond- en achtergrondkleur moeten verschillen.",
      "Text / URL": "Tekst / URL",
      "Wi-Fi": "Wifi",
      "Phone": "Telefoon",
      "Contact": "Contact",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Geen wachtwoord",
      "Enter a hex color such as #336699.": "Voer een hexkleur in, zoals #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Gebruik hex met 3, 6 of 8 cijfers, met of zonder #.",
      "Enter a network name (SSID).": "Voer een netwerknaam (SSID) in.",
      "Enter the Wi-Fi password, or choose no password.": "Voer het wifi-wachtwoord in of kies Geen wachtwoord.",
      "Enter a valid email address.": "Voer een geldig e-mailadres in.",
      "Enter a phone number, with digits and optional + ( ).": "Voer een telefoonnummer in met cijfers en optioneel + ( ).",
      "Enter a first or last name for the contact.": "Voer een voor- of achternaam in voor het contact."
    }
  },
  "url-parser": {
    "answer": "Een URL-parser splitst één absolute URL op in protocol, hostnaam, poort, pad, fragment en elke queryparameter. De URL blijft in uw browser.",
    "content": {
      "about": "Plak één absolute URL en lees het protocol, de hostnaam, de poort, het pad, het fragment en de queryparameters af.",
      "howTo": [
        "Plak een volledige URL die met http of https begint.",
        "Klik op Ontleden."
      ],
      "features": [
        "Elke querysleutel op een eigen regel.",
        "Lege querywaarden blijven behouden.",
        "Het fragment wordt apart van het pad getoond."
      ],
      "examples": [
        {
          "title": "Een URL met poort en twee gelijke sleutels",
          "body": "https://example.com:8080/docs?topic=a&topic= houdt poort 8080 en twee topic-regels, de tweede met een lege waarde."
        }
      ],
      "explanation": "De pagina gebruikt de URL-parser van de browser. Dubbele querysleutels blijven aparte items. Een ontbrekend protocol of een relatief pad wordt geweigerd. De hostnaam is de waarde die de URL-parser teruggeeft, ook een geïnternationaliseerde naam in gecodeerde vorm.",
      "tips": [
        "Neem https:// of http:// op.",
        "Een hekje na de query begint het fragment, geen nieuwe parameter."
      ],
      "limitations": "Alleen absolute http- en https-URL’s worden ontleed. De URL wordt niet geopend en nergens naartoe gestuurd.",
      "faqs": [
        {
          "question": "Hoe wordt een URL ontleed?",
          "answer": "De URL-parser van de browser splitst protocol, hostnaam, poort, pad, fragment en elke queryparameter."
        },
        {
          "question": "Wat gebeurt er met dubbele querysleutels?",
          "answer": "Elke sleutel wordt vermeld. Ze worden niet samengevoegd tot één waarde."
        },
        {
          "question": "En een lege querywaarde?",
          "answer": "Een sleutel zonder iets na het isgelijkteken blijft behouden en wordt als leeg getoond."
        },
        {
          "question": "Waarom wordt een relatieve URL geweigerd?",
          "answer": "Een relatief pad heeft geen protocol of host en is dus geen absolute URL."
        },
        {
          "question": "Wordt de URL naar een server gestuurd?",
          "answer": "Nee. Het ontleden gebeurt in uw browser."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "De URL wordt in uw browser ontleed. Hij wordt niet naar een andere dienst gestuurd.",
      "Absolute URL": "Absoluut webadres",
      "Parse": "Ontleden",
      "Query parameters": "Queryparameters",
      "No query parameters.": "Geen queryparameters.",
      "(empty)": "(leeg)",
      "Protocol": "Protocol",
      "Hostname": "Hostnaam",
      "Port": "Poort",
      "Path": "Pad",
      "Fragment": "Fragment",
      "Enter an absolute URL.": "Voer een absolute URL in.",
      "Enter a URL of 100000 characters or fewer.": "Voer een URL van maximaal 100000 tekens in.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Voer een absolute URL met protocol in, zoals https://.",
      "That text is not a valid absolute URL.": "Die tekst is geen geldige absolute URL.",
      "Enter an http or https URL.": "Voer een http- of https-URL in."
    }
  },
  "robots-txt-generator": {
    "answer": "Een robots.txt-generator schrijft User-agent-, Allow- en Disallow-regels op basis van de regels die u invoert. Hij kan een sitemap-URL toevoegen. Hij publiceert niets en test geen live site.",
    "content": {
      "about": "Schrijf robots.txt-tekst op basis van een of meer user-agent-groepen en een optionele sitemap-URL.",
      "howTo": [
        "Voer een user-agent in.",
        "Voeg Allow- en Disallow-paden toe, één per regel.",
        "Voeg een sitemap-URL toe als u die wilt.",
        "Klik op Genereren."
      ],
      "features": [
        "Meerdere user-agent-groepen.",
        "Meerdere Allow- en Disallow-regels.",
        "Een optionele absolute sitemap-URL."
      ],
      "examples": [
        {
          "title": "Een privémap",
          "body": "User-agent * met Disallow: /admin vertelt crawlers paden onder /admin niet op te halen. Het bestand is alleen tekst."
        }
      ],
      "explanation": "Elke groep begint met User-agent, gevolgd door één Allow-regel per pad en één Disallow-regel per pad. Lege padregels worden overgeslagen. Een sitemap wordt alleen toegevoegd als het een absolute http- of https-URL is. De pagina uploadt het bestand niet en test geen live site.",
      "tips": [
        "Gebruik * voor alle crawlers.",
        "Zet elk pad op een eigen regel."
      ],
      "limitations": "Het resultaat is tekst om te kopiëren. Het publiceert geen regels en controleert niet wat een live site toestaat.",
      "faqs": [
        {
          "question": "Hoe schrijf je een robots.txt-bestand?",
          "answer": "Begin met een User-agent-regel en voeg daarna Allow- en Disallow-regels toe. Voeg een Sitemap-regel toe als u een absolute sitemap-URL hebt."
        },
        {
          "question": "Kan ik meer dan één user-agent gebruiken?",
          "answer": "Ja. Elke groep heeft een eigen user-agent en eigen regels."
        },
        {
          "question": "Wat gebeurt er met een leeg pad?",
          "answer": "Een lege regel wordt overgeslagen en maakt dus geen lege Allow- of Disallow-regel."
        },
        {
          "question": "Test dit mijn live site?",
          "answer": "Nee. Het maakt alleen de tekst. Het publiceert het bestand niet en vraagt uw site niet op."
        },
        {
          "question": "Welke sitemap-URL wordt geaccepteerd?",
          "answer": "Een absolute http- of https-URL. Een pad zonder protocol wordt geweigerd."
        },
        {
          "question": "Worden deze gegevens naar een server gestuurd?",
          "answer": "Nee. De user-agent-regels en paden worden in dit tabblad samengesteld. Ze worden niet geüpload, en de pagina vraagt uw site niet op."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Hier ontstaat robots.txt-tekst uit de regels die u invoert. Er wordt geen live site getest of gepubliceerd.",
      "Group {0} user-agent": "User-agent van groep {0}",
      "Allow paths, one per line": "Allow-paden, één per regel",
      "Disallow paths, one per line": "Disallow-paden, één per regel",
      "Remove group": "Groep verwijderen",
      "Add group": "Groep toevoegen",
      "Sitemap URL, optional": "Sitemap-URL, optioneel",
      "Add at least one user-agent group.": "Voeg minstens één user-agent-groep toe.",
      "Group {0} needs a user-agent.": "Groep {0} heeft een user-agent nodig.",
      "Enter a sitemap as an absolute http or https URL.": "Voer de sitemap in als absolute http- of https-URL."
    }
  },
  "password-strength-checker": {
    "answer": "Een wachtwoordsterktecontrole schat de bits op basis van de lengte en de tekensoorten die echt voorkomen. Het wachtwoord wordt niet geüpload en niet vergeleken met een lijst van gelekte wachtwoorden.",
    "content": {
      "about": "Typ een wachtwoord en krijg de beoordeling Zwak, Redelijk of Sterk. De schatting gebruikt de lengte en de tekensoorten die erin voorkomen. Er wordt niet gezocht in datalekken, en de pagina weet niet of een site het wachtwoord accepteert.",
      "howTo": [
        "Typ het wachtwoord. Een leeg vak wordt geweigerd.",
        "Klik op Controleren.",
        "Lees de beoordeling, de lengte, de geschatte bits en de gevonden tekensoorten af."
      ],
      "features": [
        "Hoofdletters, kleine letters, cijfers en de symbolenset tellen alleen mee als ze voorkomen.",
        "Elk ander teken, ook een spatie of een backtick, telt één op bij de voorraad voor elk afzonderlijk teken.",
        "Zwak is onder de 50 bits, Redelijk onder de 80 en Sterk 80 of meer."
      ],
      "examples": [
        {
          "title": "Een woord in kleine letters",
          "body": "password bestaat uit 8 kleine letters. De voorraad is 26, de schatting komt afgerond op 38 bits, en de beoordeling is Zwak."
        },
        {
          "title": "Letters, een cijfer en een symbool",
          "body": "Abcdefghijklm12! heeft 16 tekens met hoofdletters, kleine letters, cijfers en een symbool. De voorraad is 85, de schatting komt afgerond op 103 bits, en de beoordeling is Sterk."
        }
      ],
      "explanation": "De bits zijn de lengte maal de logaritme met grondtal 2 van de voorraad. De voorraad is 26 voor hoofdletters als er een A tot en met Z voorkomt, 26 voor kleine letters, 10 voor een cijfer en 23 voor een symbool uit !@#$%^&*()-_=+[]{};:,.?. Een teken buiten die sets telt niet als de hele symbolenset, maar als één. Dit is niet de wachtwoordgenerator, die een wachtwoord beoordeelt op de soorten die vóór het maken zijn gekozen.",
      "tips": [
        "Een langer wachtwoord met meerdere tekensoorten scoort hoger dan een kort woord.",
        "Gebruik de wachtwoordgenerator als u een nieuw wachtwoord wilt in plaats van een beoordeling."
      ],
      "limitations": "Tot 256 tekens. De pagina zoekt niet in datalekken en weet niet of een site het wachtwoord accepteert. Letters met accenten tellen als andere tekens, niet als A tot en met Z.",
      "faqs": [
        {
          "question": "Is de wachtwoordsterktecontrole gratis?",
          "answer": "Ja. U kunt hier een wachtwoord beoordelen zonder te betalen of een account aan te maken."
        },
        {
          "question": "Wordt het wachtwoord vergeleken met gelekte wachtwoorden?",
          "answer": "Nee. De beoordeling gaat alleen over de lengte en de tekensoorten van wat u typte."
        },
        {
          "question": "Waarom is een wachtwoord met alleen cijfers Zwak?",
          "answer": "Acht cijfers gebruiken een voorraad van 10. Dat is ongeveer 27 bits, onder de 50, dus de beoordeling is Zwak."
        },
        {
          "question": "Wordt het wachtwoord naar een server gestuurd?",
          "answer": "Nee. De controle draait in dit browsertabblad. Tools Star Hub stuurt het wachtwoord niet naar een server en slaat het niet op in lokale opslag."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} tekens, {1}, {2} bits",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "De beoordeling gebruikt de tekensoorten in het wachtwoord dat u typt. Het blijft in dit tabblad, wordt niet geüpload en niet vergeleken met een lijst van gelekte wachtwoorden.",
      "Show password": "Wachtwoord tonen",
      "Check": "Controleren",
      "Copy rating": "Beoordeling kopiëren",
      "Rating": "Beoordeling",
      "Estimated bits": "Geschatte bits",
      "Enter a password.": "Voer een wachtwoord in.",
      "Enter a password of {0} characters or fewer.": "Voer een wachtwoord van maximaal {0} tekens in.",
      "Uppercase": "Hoofdletters",
      "Lowercase": "Kleine letters",
      "Other": "Overig"
    }
  },
  "meta-tag-generator": {
    "answer": "Een metatag-generator schrijft HTML-tags voor titel, beschrijving, robots, canonical, Open Graph en Twitter. Hij haalt geen pagina op.",
    "content": {
      "about": "Vul een titel en de gewenste optionele tags in. De pagina schrijft HTML die u in de head van een pagina kunt plakken. Er wordt geen live URL opgehaald en niet gecontroleerd hoe een site de link deelt.",
      "howTo": [
        "Voer een titel in. Een lege titel wordt geweigerd.",
        "Voeg een beschrijving, een canonical-URL, robots-keuzes en de gewenste Open Graph- of Twitter-velden toe.",
        "Klik op Genereren en kopieer de HTML."
      ],
      "features": [
        "Een charset-tag, een titel en een robots-tag in elk resultaat.",
        "Optioneel beschrijving, canonical-link, Open Graph-tags en Twitter-tags.",
        "Aanhalingstekens en ampersands in de tekst worden ge-escaped."
      ],
      "examples": [
        {
          "title": "Een titel en een beschrijving",
          "body": "De titel Sample page en de beschrijving A short description of the page., met index en follow, geven een charset-tag, de titel, de beschrijving en een robots-tag met index, follow."
        },
        {
          "title": "Een ampersand in de titel",
          "body": "De titel A & B wordt in de title-tag geschreven als A &amp; B."
        }
      ],
      "explanation": "De HTML wordt samengesteld uit de ingevulde velden. Lege optionele velden worden weggelaten. Een canonical-URL, een Open Graph-afbeelding, een Open Graph-URL en een Twitter-afbeelding moeten absolute http- of https-URL’s zijn. De pagina vraagt die URL’s niet op.",
      "tips": [
        "Gebruik de Open Graph-velden hier als u de tags in uw eigen HTML wilt. Een live deelvoorbeeld is een andere controle."
      ],
      "limitations": "De titel mag maximaal 200 tekens lang zijn en de beschrijving maximaal 500. Het Open Graph-type is website, article of geen. De Twitter-kaart is summary, summary_large_image of geen. Een Twitter-titel zonder kaart wordt geweigerd.",
      "faqs": [
        {
          "question": "Is de metatag-generator gratis?",
          "answer": "Ja. U kunt de tags hier schrijven zonder te betalen of een account aan te maken."
        },
        {
          "question": "Laat dit zien hoe een link er op sociale media uitziet?",
          "answer": "Nee. Het schrijft alleen de tags en opent de URL niet."
        },
        {
          "question": "Welke robots-waarde wordt geschreven?",
          "answer": "De index-keuze en de follow-keuze, bijvoorbeeld index, follow of noindex, nofollow."
        },
        {
          "question": "Wordt de tekst naar een server gestuurd?",
          "answer": "Nee. De HTML wordt in dit browsertabblad gemaakt. Tools Star Hub stuurt die velden niet naar een server en slaat ze niet op in lokale opslag."
        }
      ]
    },
    "ui": {
      "Sample page": "Voorbeeldpagina",
      "A short description of the page.": "Een korte beschrijving van de pagina.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Hier ontstaat HTML voor de head van een pagina. Er wordt geen live URL opgehaald en niet gecontroleerd hoe een site de link deelt.",
      "Title": "Titel",
      "Description": "Beschrijving",
      "Canonical URL, optional": "Canonical-URL, optioneel",
      "Robots index": "Robots: index",
      "Robots follow": "Robots: follow",
      "Open Graph title, optional": "Open Graph-titel, optioneel",
      "Open Graph description, optional": "Open Graph-beschrijving, optioneel",
      "Open Graph image URL, optional": "URL van Open Graph-afbeelding, optioneel",
      "Open Graph URL, optional": "Open Graph-URL, optioneel",
      "Open Graph type": "Open Graph-type",
      "Twitter title, optional": "Twitter-titel, optioneel",
      "Copy HTML": "HTML kopiëren",
      "Head tags": "Head-tags",
      "None": "Geen",
      "Enter a {0} of {1} characters or fewer.": "{0}: maximaal {1} tekens.",
      "Enter {0} as an absolute http or https URL.": "{0}: voer een absolute http- of https-URL in.",
      "Enter a title.": "Voer een titel in.",
      "the canonical URL": "Canonical-URL",
      "Open Graph title": "Open Graph-titel",
      "Open Graph description": "Open Graph-beschrijving",
      "the Open Graph image URL": "URL van Open Graph-afbeelding",
      "the Open Graph URL": "Open Graph-URL",
      "Choose website, article, or no Open Graph type.": "Kies website, article of geen Open Graph-type.",
      "Choose a Twitter card of summary or summary_large_image.": "Kies als Twitter-kaart summary of summary_large_image.",
      "the Twitter image URL": "URL van Twitter-afbeelding",
      "Choose a Twitter card before adding Twitter text or an image.": "Kies een Twitter-kaart voordat u Twitter-tekst of een afbeelding toevoegt.",
      "title": "Titel",
      "description": "Beschrijving"
    }
  },
  "open-graph-preview": {
    "answer": "Een Open Graph-voorbeeld stuurt een pagina-URL naar deze site, leest de openbare titel en deeltags en slaat de pagina niet op. Privé- en niet-http-adressen worden geweigerd.",
    "content": {
      "about": "Voer een openbare http- of https-URL in. Voorbeeld controleren stuurt die URL naar deze site. De site haalt de pagina op en toont de titel, beschrijving, afbeelding en Twitter-kaart die ze vindt. De pagina wordt hier niet opgeslagen. Een privé- of lokaal adres wordt geweigerd voordat de pagina wordt gelezen.",
      "howTo": [
        "Voer een absolute http- of https-URL in.",
        "Klik op Voorbeeld controleren.",
        "Lees de kaart. Een geweigerd adres, een time-out of een niet-http-URL toont een korte foutmelding zonder pagina-inhoud."
      ],
      "features": [
        "Titel, beschrijving, afbeeldingsadres en Twitter-kaartvelden van de openbare pagina.",
        "Het adres na doorverwijzingen, zolang de doorverwijzing op een openbare http- of https-URL blijft.",
        "Een korte foutmelding als het adres privé is, het verzoek een time-out krijgt of het protocol geen http of https is."
      ],
      "examples": [
        {
          "title": "Een openbare pagina",
          "body": "https://example.com/ geeft de titel Example Domain terug. Die pagina heeft geen beschrijving, afbeelding of Twitter-kaart, dus die velden tonen Niet gevonden."
        },
        {
          "title": "Een lokaal adres",
          "body": "http://127.0.0.1/ en de decimale vorm http://2130706433/ tonen allebei Dat adres kan niet worden opgehaald."
        }
      ],
      "explanation": "De browser stuurt alleen de URL naar deze site. De site zoekt de host op, weigert een privé-, loopback-, link-local- of gereserveerd adres en controleert opnieuw na elke doorverwijzing. Ze leest maximaal 512 KiB van de uitgepakte pagina en geeft dan de tags terug. De ruwe pagina wordt niet teruggegeven en niet opgeslagen.",
      "tips": [
        "Gebruik de metatag-generator als u de tags zelf wilt schrijven. Deze pagina leest tags die al op een openbare URL staan."
      ],
      "limitations": "Alleen http en https. Een file-URL, een URL met gebruikersnaam en een privéadres worden geweigerd. Het verzoek stopt na 8 seconden. Een deelafbeelding kan vermeld staan, ook als de afbeeldingshost het voorbeeldplaatje blokkeert.",
      "faqs": [
        {
          "question": "Is het Open Graph-voorbeeld gratis?",
          "answer": "Ja. U kunt de deeltags van een openbare pagina controleren zonder te betalen of een account aan te maken. De URL wordt wel naar deze site gestuurd zodat de tags kunnen worden gelezen."
        },
        {
          "question": "Verlaat de URL dit apparaat?",
          "answer": "Ja. Voorbeeld controleren stuurt de URL naar deze site, die de openbare pagina ophaalt en de tags leest. De pagina wordt hier niet opgeslagen. Een privé- of niet-http-adres wordt geweigerd."
        },
        {
          "question": "Waarom werd een lokale URL geweigerd?",
          "answer": "Adressen zoals 127.0.0.1, een privénetwerk en de decimale vorm van een loopback-adres worden geweigerd voordat de pagina wordt gelezen."
        },
        {
          "question": "Hoe ziet een time-out eruit?",
          "answer": "De kaart wordt niet getoond. De pagina meldt dat het voorbeeldverzoek te lang duurde."
        }
      ]
    },
    "ui": {
      "Not found": "Niet gevonden",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Voorbeeld controleren stuurt de URL naar deze site. De site leest de titel en deeltags van de openbare pagina en slaat de pagina niet op. Een privéadres of een niet-http-URL wordt geweigerd.",
      "Page URL": "Pagina-URL",
      "Checking the page…": "Pagina wordt gecontroleerd…",
      "Image": "Afbeelding",
      "The image address was found, but it did not load.": "Het afbeeldingsadres is gevonden, maar de afbeelding laadde niet.",
      "Twitter image": "Twitter-afbeelding",
      "That page could not be previewed.": "Van die pagina kon geen voorbeeld worden gemaakt.",
      "Enter an http or https page URL.": "Voer een http- of https-pagina-URL in.",
      "Checking…": "Controleren…",
      "Check preview": "Voorbeeld controleren",
      "That address cannot be fetched.": "Dat adres kan niet worden opgehaald.",
      "The preview request timed out.": "Het voorbeeldverzoek duurde te lang.",
      "That page redirected too many times.": "Die pagina werd te vaak doorverwezen.",
      "That page is not HTML.": "Die pagina is geen HTML.",
      "Too many preview requests. Wait a minute and try again.": "Te veel voorbeeldverzoeken. Wacht een minuut en probeer het opnieuw.",
      "Send a JSON request with a url.": "Stuur een JSON-verzoek met een URL."
    }
  }
};

export default data;
