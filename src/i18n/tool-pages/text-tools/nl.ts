import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Een woordenteller toont het aantal woorden, tekens en zinnen van geplakte tekst, plus een eenvoudige schatting van de leestijd.",
    "content": {
      "about": "Bekijk woorden, tekens, zinnen, alinea’s en een globale leestijd voor de tekst die u plakt. Wie een bijschrift, samenvatting of kort bericht controleert, ziet de totalen meelopen tijdens het typen. De leestijd gaat uit van ongeveer 225 woorden per minuut: een schatting, geen gemeten snelheid.",
      "howTo": [
        "Plak of typ tekst in het vak.",
        "Het aantal woorden, tekens, zinnen en alinea’s wordt bijgewerkt terwijl u typt.",
        "Gebruik ‘Voorbeeldtekst’ om de teller te proberen, ‘Wissen’ om het vak leeg te maken of ‘Kopiëren’ om uw tekst te kopiëren."
      ],
      "examples": [
        {
          "title": "Een korte zin",
          "body": "‘Hello world.’ telt 2 woorden en 1 zin."
        },
        {
          "title": "Lege regels",
          "body": "Tekst die door een lege regel wordt gescheiden, telt als twee alinea’s."
        }
      ],
      "explanation": "Woorden zijn groepen tekens zonder spatie. Tekens zijn Unicode-codepunten, dus letters, leestekens en de meeste emoji tellen elk als één teken. Zinnen worden gesplitst op . ! ? en …. Alinea’s zijn niet-lege blokken tussen regeleinden. De leestijd rekent met ongeveer 225 woorden per minuut.",
      "limitations": "Woorden zijn groepen tekens zonder spatie en zinnen worden gesplitst op . ! ? en …. De leestijd van ongeveer 225 woorden per minuut is een schatting, geen gemeten leessnelheid. De teller controleert geen grammatica en stelt geen auteur vast.",
      "faqs": [
        {
          "question": "Is de woordenteller gratis?",
          "answer": "Ja. Woorden, tekens, zinnen en alinea’s tellen is gratis, en u hebt geen account nodig."
        },
        {
          "question": "Wordt mijn tekst geüpload?",
          "answer": "Nee. Het tellen gebeurt in uw browser. De tekst wordt niet naar Tools Star Hub gestuurd en niet opgeslagen."
        },
        {
          "question": "Hoe worden extra spaties geteld?",
          "answer": "Meerdere spaties achter elkaar leveren geen extra woorden op. Ze tellen wel als tekens."
        },
        {
          "question": "Hoeveel woorden heeft een toespraak van 5 minuten?",
          "answer": "Het spreektempo verschilt, maar 130 tot 150 woorden per minuut is een gangbare vuistregel. Een toespraak van 5 minuten heeft dus vaak zo’n 650 tot 750 woorden."
        },
        {
          "question": "Hoe wordt de leestijd geschat?",
          "answer": "Het aantal woorden wordt gedeeld door ongeveer 225 woorden per minuut. Het is een schatting voor een gemiddelde lezer, geen gemeten leessnelheid."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Het tellen gebeurt in uw browser. Er wordt niets naar een server gestuurd.",
      "Paste or type text here...": "Plak of typ hier tekst…",
      "Sample text": "Voorbeeldtekst",
      "Reading time": "Leestijd",
      "0 min": "0 min",
      "{0} min": "{0} min"
    }
  },
  "character-counter": {
    "answer": "Een tekenteller telt tekens, woorden en regels terwijl u typt; spaties tellen mee in het hoofdtotaal.",
    "content": {
      "about": "Tel tekens, woorden en regels, met een apart totaal zonder spaties. Handig wanneer een formulier, socialmediabericht of metabeschrijving een tekenlimiet heeft. Eén emoji telt als één teken, en anders dan de woordenteller splitst deze pagina de tekst niet in zinnen.",
      "howTo": [
        "Typ of plak tekst in het vak.",
        "Het aantal tekens, woorden en regels wordt direct bijgewerkt.",
        "Kopieer het aantal tekens of maak het vak leeg als u klaar bent."
      ],
      "examples": [
        {
          "title": "Emoji en letters",
          "body": "‘A😀’ is 2 tekens: één letter en één emoji."
        },
        {
          "title": "Regels",
          "body": "Een regeleinde begint een nieuwe regel. Een leeg vak heeft 0 regels."
        }
      ],
      "explanation": "Tekens worden geteld als Unicode-codepunten. Spaties tellen mee in het hoofdtotaal en niet in het totaal ‘zonder spaties’. Regels volgen de regeleinden in het vak, inclusief een lege laatste regel.",
      "limitations": "Een teken is één Unicode-codepunt, dus één emoji telt als één, ook als hij uit meerdere symbolen bestaat. Spaties blijven in het hoofdtotaal en vallen weg in het totaal zonder spaties. Zinsgrenzen worden hier niet herkend.",
      "faqs": [
        {
          "question": "Is de tekenteller gratis?",
          "answer": "Ja. U kunt tekens, woorden en regels tellen terwijl u typt, zonder te betalen of een account aan te maken."
        },
        {
          "question": "Verlaat de tekst mijn computer?",
          "answer": "Nee. De tekst blijft in uw browser en wordt niet naar een server gestuurd."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De tellingen ontstaan in dit tabblad. Als u het vak leegmaakt, verdwijnt de tekst van de pagina, en hij wordt niet in lokale opslag bewaard."
        },
        {
          "question": "Tellen spaties als tekens?",
          "answer": "Ja, in het hoofdtotaal. De teller toont ook een tweede totaal zonder spaties, waar sommige formulieren en opdrachten om vragen."
        },
        {
          "question": "Hoeveel tekens is een emoji?",
          "answer": "Op deze pagina telt één emoji als één Unicode-teken. Sommige apps tellen bepaalde emoji als twee of meer, dus hun limiet kan iets afwijken."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "De tellingen worden bijgewerkt terwijl u typt. De tekst blijft in uw browser.",
      "Type or paste text...": "Typ of plak tekst…",
      "Copy count": "Aantal kopiëren"
    }
  },
  "case-converter": {
    "answer": "Een hoofdlettertool zet tekst om naar hoofdletters, kleine letters, titelnotatie, camelCase en vergelijkbare stijlen.",
    "content": {
      "about": "Wissel tekst tussen hoofdletters, kleine letters, titelnotatie, zinsnotatie, camelCase, PascalCase, snake_case en kebab-case. Ontwikkelaars die namen in code wijzigen en redacteuren die een kop corrigeren, passen de notatie in één stap aan. Zinsnotatie volgt Engelse interpunctie en past geen hoofdletterregels van andere talen toe.",
      "howTo": [
        "Plak tekst in het vak.",
        "Kies een notatie. De uitvoer wordt direct bijgewerkt.",
        "Kopieer het resultaat of maak beide vakken leeg."
      ],
      "examples": [
        {
          "title": "Titelnotatie",
          "body": "‘hello world’ wordt ‘Hello World’. Elk woord krijgt een hoofdletter."
        },
        {
          "title": "camelCase",
          "body": "‘Hello world example’ wordt helloWorldExample."
        }
      ],
      "explanation": "Hoofdletters en kleine letters volgen de Engelse regels. Titelnotatie zet de eerste letter van elk woord in hoofdletter. Zinsnotatie zet alles in kleine letters en geeft daarna het begin van de tekst en letters na . ! ? of … een hoofdletter — een eenvoudige regel voor het Engels, geen grammaticacontrole voor elke taal. camelCase, PascalCase, snake_case en kebab-case worden opgebouwd uit groepen letters en cijfers.",
      "limitations": "Zinsnotatie volgt Engelse interpunctie, niet de hoofdletterregels van andere talen. camelCase, snake_case en kebab-case behouden groepen letters en cijfers en laten de leestekens ertussen weg.",
      "faqs": [
        {
          "question": "Is de hoofdlettertool gratis?",
          "answer": "Ja. Wisselen tussen hoofdletters, kleine letters, titelnotatie en de codenotaties is gratis en zonder account."
        },
        {
          "question": "Werkt zinsnotatie in elke taal?",
          "answer": "Nee. Ze volgt een eenvoudig Engels interpunctiepatroon en past geen taalspecifieke regels toe."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De geplakte tekst wordt in dit tabblad omgezet. Hij wordt niet geüpload en niet in lokale opslag bewaard."
        },
        {
          "question": "Wat is het verschil tussen titelnotatie en zinsnotatie?",
          "answer": "Titelnotatie geeft elk woord een hoofdletter, zoals in een Engelse kop. Zinsnotatie geeft alleen de eerste letter van elke zin een hoofdletter, zoals in gewone tekst."
        },
        {
          "question": "Wat zijn camelCase, snake_case en kebab-case?",
          "answer": "Dat zijn naamgevingsstijlen uit programmeercode. camelCase verbindt woorden met hoofdletters (myVariableName), snake_case met underscores (my_variable_name) en kebab-case met koppeltekens (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Plak tekst om om te zetten",
      "Case": "Notatie",
      "Result ({0})": "Resultaat ({0})",
      "UPPERCASE": "HOOFDLETTERS",
      "lowercase": "kleine letters",
      "Title Case": "Titelnotatie",
      "Sentence case": "Zinsnotatie"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Een lorem-ipsumgenerator maakt opvulalinea’s, -zinnen of -woorden voor lay-outs en concepten.",
    "content": {
      "about": "Genereer opvulalinea’s, -zinnen of -woorden uit een vaste lijst Latijnse woorden. Ontwerpers vullen er een mock-up mee als de echte tekst nog niet klaar is. De eerste alinea begint met de klassieke openingszin, en een aanvraag stopt bij 20 alinea’s, 50 zinnen of 500 woorden.",
      "howTo": [
        "Kies alinea’s, zinnen of woorden.",
        "Stel een aantal in binnen de getoonde grenzen en klik op ‘Genereren’.",
        "Kopieer de tekst, genereer opnieuw of zet de standaardwaarden terug."
      ],
      "examples": [
        {
          "title": "Drie alinea’s",
          "body": "De eerste alinea begint met de klassieke zin ‘Lorem ipsum dolor sit amet…’ en gaat verder met geschudde woorden uit een lokale woordenlijst."
        },
        {
          "title": "Vijftig woorden",
          "body": "Handig als korte opvultekst in een mock-up."
        }
      ],
      "explanation": "Lorem ipsum is door elkaar gehusseld Latijn dat als opvultekst dient, zodat een lay-out zonder echte tekst te beoordelen is. Deze generator gebruikt een lokale woordenlijst en de cryptografisch sterke willekeurige waarden van de browser. Er wordt geen externe API aangeroepen. Het aantal is begrensd zodat de pagina bruikbaar blijft.",
      "limitations": "De uitvoer is Latijnse opvultekst uit een vaste woordenlijst, geen vertaling en geen tekst voor een echt product. Alinea’s stoppen bij 20, zinnen bij 50 en woorden bij 500.",
      "faqs": [
        {
          "question": "Is de lorem-ipsumgenerator gratis?",
          "answer": "Ja. Opvulalinea’s, -zinnen of -woorden genereren is gratis, en er is geen account nodig."
        },
        {
          "question": "Wordt de tekst van internet gedownload?",
          "answer": "Nee. De woorden staan in deze pagina en worden in uw browser samengesteld."
        },
        {
          "question": "Waarom is er een maximum?",
          "answer": "Heel grote blokken kunnen een tabblad laten vastlopen. Alinea’s stoppen bij 20, zinnen bij 50 en woorden bij 500."
        },
        {
          "question": "Wat betekent lorem ipsum?",
          "answer": "Lorem ipsum is door elkaar gehaald Latijn dat als opvultekst dient. Het lijkt op echte tekst, zodat je een lay-out kunt beoordelen zonder dat lezers op de woorden letten."
        },
        {
          "question": "Wanneer gebruik ik opvultekst?",
          "answer": "Voor mock-ups, sjablonen en lettertypetests. Vervang het door echte tekst voordat een pagina live gaat, want opvultekst zegt bezoekers niets."
        }
      ]
    },
    "ui": {
      "Quantity": "Aantal",
      "Enter a whole number from {0} to {1}.": "Voer een geheel getal in van {0} tot {1}.",
      "Enter a quantity.": "Voer een aantal in.",
      "Choose between {0} and {1} {2}.": "Kies tussen {0} en {1} {2}.",
      "paragraphs": "alinea’s",
      "sentences": "zinnen",
      "words": "woorden",
      "A secure random source is not available in this browser.": "Er is in deze browser geen veilige bron voor willekeurige waarden beschikbaar."
    }
  },
  "text-diff": {
    "answer": "Een tekstvergelijker zet de originele en gewijzigde tekst op uw apparaat naast elkaar en markeert toegevoegde, verwijderde en ongewijzigde regels of woorden.",
    "content": {
      "about": "Plak een origineel en een herziene versie en vergelijk ze per regel of per woord. Wie twee concepten van dezelfde alinea controleert, gebruikt de regelmodus voor volledig gewijzigde regels en de woordmodus als een zin ter plekke is aangepast. Elke kant moet onder 200.000 tekens en onder 4.000 regels of woorden blijven.",
      "howTo": [
        "Plak de originele tekst links en de gewijzigde tekst rechts.",
        "Kies vergelijken per regel of per woord.",
        "Klik op ‘Vergelijken’. Toegevoegde, verwijderde en ongewijzigde blokken krijgen een label, niet alleen een kleur.",
        "Kopieer de platte diff als u die in een andere editor nodig hebt. Maak daarna beide kanten leeg."
      ],
      "examples": [
        {
          "title": "Twee versies van een alinea",
          "body": "De regelmodus markeert volledige regels die zijn gewijzigd. De woordmodus werkt beter als een zin ter plekke is aangepast."
        },
        {
          "title": "Identieke teksten",
          "body": "Als beide kanten gelijk zijn, toont de samenvatting alleen ongewijzigde inhoud en geen toegevoegde of verwijderde blokken."
        }
      ],
      "explanation": "De vergelijking gebeurt in uw browser. De tekst wordt nergens heen gestuurd en concepten worden niet in lokale opslag bewaard. Verschillen worden weergegeven als React-tekstknooppunten, dus inhoud kan geen HTML injecteren. Heel grote invoer wordt geweigerd zodat het tabblad responsief blijft.",
      "limitations": "Afhankelijk van de modus moet elke kant onder 200.000 tekens en onder 4.000 regels of woorden blijven. De weergave labelt toegevoegde, verwijderde en ongewijzigde blokken. Bestanden worden niet samengevoegd en Word-documenten worden niet geopend.",
      "faqs": [
        {
          "question": "Is de tekstvergelijker gratis?",
          "answer": "Ja. Twee teksten per regel of per woord vergelijken is gratis, en u hebt geen account nodig."
        },
        {
          "question": "Hoe vergelijk ik twee tekstbestanden?",
          "answer": "Plak elke versie in een paneel, kies Regels of Woorden en klik op ‘Vergelijken’. U kunt een +/- weergave van het resultaat kopiëren."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. Beide panelen worden in dit tabblad vergeleken. De tekst wordt niet naar een server gestuurd en niet in lokale opslag bewaard."
        },
        {
          "question": "Wat is een diff?",
          "answer": "Een diff is een lijst van de verschillen tussen twee versies van een tekst: wat is toegevoegd, wat is verwijderd en wat hetzelfde bleef."
        },
        {
          "question": "Gebruik ik de regel- of de woordmodus?",
          "answer": "De regelmodus voor code, lijsten en bestanden waarin hele regels veranderen. De woordmodus als een zin ter plekke is bewerkt."
        }
      ]
    },
    "ui": {
      "Original": "Origineel",
      "Modified": "Gewijzigd",
      "Compare": "Vergelijken",
      "Copy diff": "Diff kopiëren",
      "Both sides are empty.": "Beide kanten zijn leeg.",
      "The two texts are the same.": "De twee teksten zijn gelijk.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Vergeleken tekst wordt als platte tekst getoond, niet als HTML. Kleur is alleen een hint; elk blok heeft ook het label Toegevoegd, Verwijderd of Ongewijzigd.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Beide concepten worden in dit tabblad vergeleken. De tekst wordt niet naar een server gestuurd.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Houd elke kant onder 200.000 tekens zodat de vergelijking vlot blijft.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Deze vergelijking verwerkt maximaal {0} {1}. Kort de invoer in of splits hem.",
      "lines": "regels",
      "words": "woorden"
    }
  },
  "duplicate-line-remover": {
    "answer": "Een tool voor dubbele regels houdt de eerste keer dat een regel voorkomt en schrapt latere herhalingen, met opties voor spaties en hoofdletters.",
    "content": {
      "about": "Houd de eerste kopie van elke regel en schrap de herhalingen, in de volgorde waarin u ze plakte. Handig voor een mailinglijst of log waarin dezelfde regel vaker voorkomt. Met hoofdletterongevoelig vergelijken en trimmen worden apple en Apple één regel, en de eerste schrijfwijze blijft staan.",
      "howTo": [
        "Plak tekst met meerdere regels. De invoer verandert pas als u de tool uitvoert.",
        "Vergelijk eventueel hoofdletterongevoelig, verwijder spaties vóór het vergelijken of laat lege regels weg.",
        "Klik op ‘Dubbele verwijderen’. De eerste keer dat elke regel voorkomt, blijft in volgorde staan.",
        "Kopieer of download de unieke lijst. Maak daarna beide vakken leeg."
      ],
      "examples": [
        {
          "title": "Een mailinglijst",
          "body": "apple, Apple, apple worden met trimmen en hoofdletterongevoelig vergelijken één apple, in de eerst geplakte schrijfwijze."
        },
        {
          "title": "Lege regels",
          "body": "Zet ‘Lege regels verwijderen’ aan als u alleen unieke, niet-lege regels wilt. Anders is een lege regel een gewone waarde."
        }
      ],
      "explanation": "Elke regel krijgt een sleutel op basis van de vergelijkingsopties. De eerste keer dat een sleutel voorkomt, blijft de regel staan; latere herhalingen tellen als verwijderde dubbele regels. De volgorde van de eerste voorkomens blijft behouden.",
      "limitations": "De eerste overeenkomende regel blijft staan, in de geplakte volgorde. De opties voor hoofdletters, trimmen en lege regels bepalen wat als dezelfde regel telt. Latere herhalingen worden geteld en geschrapt. Meer dan 400.000 tekens wordt geweigerd. Het invoervak zelf wordt niet herschreven.",
      "faqs": [
        {
          "question": "Is de tool gratis?",
          "answer": "Ja. Herhaalde regels verwijderen en de eerste kopie houden is gratis, zonder aanmelding."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. Het ontdubbelen gebeurt in dit tabblad. De lijst wordt niet geüpload en niet in lokale opslag bewaard."
        },
        {
          "question": "Verandert het oorspronkelijke vak?",
          "answer": "Nee. De invoer blijft zoals u hem plakte. De unieke lijst verschijnt in het resultaatvak nadat u de bewerking hebt uitgevoerd."
        },
        {
          "question": "Hoe verwijder ik dubbele items uit een lijst?",
          "answer": "Plak de lijst met één item per regel en start de tool. De eerste kopie van elke regel blijft in de oorspronkelijke volgorde staan en latere herhalingen vallen weg."
        },
        {
          "question": "Kan het verschillen in hoofdletters of spaties negeren?",
          "answer": "Ja. Zet de opties voor hoofdletters en spaties aan, zodat regels als Apple en apple, of regels met extra spaties, als gelijk tellen."
        }
      ]
    },
    "ui": {
      "One line per row": "Eén regel per item",
      "Case-insensitive match": "Hoofdletterongevoelig vergelijken",
      "Trim spaces before comparing": "Spaties verwijderen vóór vergelijken",
      "Remove empty lines": "Lege regels verwijderen",
      "First occurrence of each line is kept, in the original order.": "De eerste keer dat elke regel voorkomt, blijft staan in de oorspronkelijke volgorde.",
      "Unique lines": "Unieke regels",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Herhaalde regels worden in dit tabblad geschrapt. De lijst wordt niet geüpload.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Houd de tekst onder 400.000 tekens zodat de browser responsief blijft."
    }
  },
  "whitespace-remover": {
    "answer": "Een witruimteverwijderaar trimt regels, voegt spaties samen, zet tabs om en ruimt lege regels op volgens de gekozen opties.",
    "content": {
      "about": "Ruim overbodige spaties, tabs en lege regels op met alleen de opties die u aanzet. Handig voor een geplakt log of een lijst met verdwaalde inspringing. ‘Elke regel trimmen’ gaat voor op de aparte vakjes voor begin en einde, en als u die opties uit laat, blijft de inspringing behouden.",
      "howTo": [
        "Plak tekst met overbodige spaties, tabs of lege regels.",
        "Kies alleen de opschoonacties die u wilt. Er gebeurt niets tot u op ‘Tekst opschonen’ klikt.",
        "Bekijk het aantal regels en tekens en kopieer of download het resultaat.",
        "Maak de vakken leeg om de tekst weg te gooien. Hij wordt niet opgeslagen."
      ],
      "examples": [
        {
          "title": "Ingesprongen logregels",
          "body": "Trim elke regel, of verwijder alleen witruimte aan het begin als u spaties aan het einde wilt houden."
        },
        {
          "title": "Gemengde tabs en spaties",
          "body": "Zet tabs om naar 2 of 4 spaties en voeg daarna herhaalde spaties samen als u enkele spaties wilt."
        }
      ],
      "explanation": "Elke optie is expliciet. ‘Elke regel trimmen’ gaat in die ronde voor op de vakjes voor begin en einde. ‘Lege regels verwijderen’ schrapt elke lege regel; lege regels samenvoegen laat één lege regel tussen blokken staan.",
      "limitations": "Alleen de opties die u aanzet, worden toegepast. ‘Elke regel trimmen’ gaat in die ronde voor op de vakjes voor begin en einde. ‘Lege regels verwijderen’ schrapt elke lege regel, terwijl samenvoegen er één tussen blokken laat staan. Meer dan 400.000 tekens wordt geweigerd.",
      "faqs": [
        {
          "question": "Is de witruimteverwijderaar gratis?",
          "answer": "Ja. Overbodige spaties, tabs en lege regels opruimen is gratis, en er is geen account nodig."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. Het opschonen blijft in dit tabblad. De tekst wordt nergens heen gestuurd en niet in lokale opslag bewaard."
        },
        {
          "question": "Gaat mijn inspringing verloren?",
          "answer": "Alleen als u trimmen, verwijderen aan het regelbegin of tab-omzetting aanzet. Laat die uit om de inspringing te houden."
        },
        {
          "question": "Hoe verwijder ik dubbele spaties uit tekst?",
          "answer": "Zet de optie aan die herhaalde spaties samenvoegt. Reeksen spaties binnen elke regel worden dan één spatie."
        },
        {
          "question": "Hoe verwijder ik lege regels?",
          "answer": "Gebruik ‘lege regels verwijderen’ om alle lege regels weg te halen, of ‘lege regels samenvoegen’ om één lege regel tussen alinea’s te houden."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Opschoonopties",
      "Trim each line": "Elke regel trimmen",
      "Remove leading whitespace": "Witruimte aan regelbegin verwijderen",
      "Remove trailing whitespace": "Witruimte aan regeleinde verwijderen",
      "Collapse repeated spaces": "Herhaalde spaties samenvoegen",
      "Convert tabs to spaces": "Tabs omzetten naar spaties",
      "Remove blank lines": "Lege regels verwijderen",
      "Collapse multiple blank lines": "Meerdere lege regels samenvoegen",
      "Trim entire document": "Heel document trimmen",
      "Tab width": "Tabbreedte",
      "2 spaces": "2 spaties",
      "4 spaces": "4 spaties",
      "Lines before": "Regels vooraf",
      "Lines after": "Regels achteraf",
      "Characters before": "Tekens vooraf",
      "Characters after": "Tekens achteraf",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Spaties, tabs en lege regels worden in dit tabblad opgeschoond. De tekst wordt niet naar een server gestuurd."
    }
  },
  "line-sorter": {
    "answer": "Een regelsorteerder zet tekst met meerdere regels op alfabet, op getal of op lengte, met optioneel verwijderen van dubbele regels.",
    "content": {
      "about": "Sorteer één item per regel van A naar Z, van Z naar A, op een getal aan het begin of op lengte. Handig als een namenlijst of genummerde export op volgorde moet zonder spreadsheet. Numeriek komt 10 na 2, en een regel zonder getal aan het begin komt na de genummerde regels.",
      "howTo": [
        "Plak één item per regel.",
        "Kies A→Z, Z→A, numerieke volgorde of lengte. Stel hoofdletters, trimmen, lege regels en dubbele regels naar wens in.",
        "Klik op ‘Regels sorteren’. Gelijke items behouden hun oorspronkelijke onderlinge volgorde.",
        "Kopieer of download de gesorteerde lijst."
      ],
      "examples": [
        {
          "title": "Namen",
          "body": "A→Z hoofdletterongevoelig zet ada en Ada naast elkaar; bij gelijkheid blijft de eerst ingevoerde schrijfwijze voorop."
        },
        {
          "title": "Genummerde regels",
          "body": "‘Numeriek oplopend’ leest een getal aan het begin, dus 10 komt na 2. Regels zonder getal komen na de genummerde regels."
        }
      ],
      "explanation": "Het sorteren is stabiel: als twee regels gelijk zijn, blijft de eerder ingevoerde voorop. De numerieke modi lezen een geheel of decimaal getal aan het begin. Het optioneel ontdubbelen gebruikt dezelfde vergelijkingssleutel als de opties voor hoofdletters en trimmen.",
      "limitations": "De modi zijn A tot Z, Z tot A, numeriek oplopend, numeriek aflopend, kortste en langste eerst. Gelijke regels houden hun oorspronkelijke volgorde. De numerieke modus leest een getal aan het begin; een regel zonder getal komt na de genummerde regels. Meer dan 400.000 tekens wordt geweigerd.",
      "faqs": [
        {
          "question": "Is de regelsorteerder gratis?",
          "answer": "Ja. Een lijst met regels sorteren is gratis en zonder account."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. Het sorteren gebeurt in dit tabblad. De regels worden niet naar een server gestuurd en niet in lokale opslag bewaard."
        },
        {
          "question": "Blijven lege regels behouden?",
          "answer": "Ja, tenzij u ‘Lege regels negeren’ kiest. In de lettermodi worden ze als lege tekenreeksen gesorteerd."
        },
        {
          "question": "Hoe sorteer ik een lijst alfabetisch?",
          "answer": "Plak één item per regel en kies A tot Z, of Z tot A voor omgekeerde volgorde. Gelijke regels houden hun oorspronkelijke volgorde."
        },
        {
          "question": "Hoe sorteer ik regels op getal?",
          "answer": "Kies numeriek oplopend of aflopend. Elke regel wordt gesorteerd op het getal aan het begin, dus 2 komt vóór 10."
        }
      ]
    },
    "ui": {
      "One item per line": "Eén item per regel",
      "Numeric ascending": "Numeriek oplopend",
      "Numeric descending": "Numeriek aflopend",
      "Shortest → longest": "Kortste → langste",
      "Longest → shortest": "Langste → kortste",
      "Trim before comparing": "Trimmen vóór vergelijken",
      "Ignore empty lines": "Lege regels negeren",
      "Sort lines": "Regels sorteren",
      "Result lines": "Resultaatregels",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "De regels worden in dit tabblad gesorteerd. De lijst wordt niet naar Tools Star Hub gestuurd."
    }
  },
  "find-and-replace": {
    "answer": "Zoeken en vervangen wijzigt de eerste of elke overeenkomst in geplakte tekst. U kunt hoofdlettergevoeligheid aan- of uitzetten.",
    "content": {
      "about": "Plak tekst, typ wat u zoekt en typ de vervanging. U kunt de eerste of elke overeenkomst wijzigen en hoofdletters negeren.",
      "howTo": [
        "Plak de originele tekst.",
        "Typ de tekst die u zoekt. Een leeg zoekveld wordt geweigerd.",
        "Typ de vervanging. Laat die leeg als u de overeenkomsten wilt verwijderen.",
        "Kies ‘Eerste vervangen’ of ‘Alles vervangen’ en zet ‘Hoofdlettergevoelig’ aan of uit.",
        "Klik op ‘Vervangen’ en kopieer daarna het resultaat of maak het formulier leeg."
      ],
      "features": [
        "De eerste overeenkomst of elke niet-overlappende overeenkomst.",
        "Hoofdlettergevoelig zoeken of niet; de vervanging wordt altijd precies zo ingevoegd als u hem typte.",
        "Een telling van het aantal vervangingen."
      ],
      "examples": [
        {
          "title": "Een herhaalde naam corrigeren",
          "body": "Origineel: ‘Ana sent the file. ana sent the notes.’ Zoeken: ana. Vervanging: Ana. Hoofdlettergevoelig uit, ‘Alles vervangen’. Beide namen worden Ana, en de telling is 2."
        },
        {
          "title": "Alleen de eerste kop wijzigen",
          "body": "Een concept bevat drie keer ‘Draft’. ‘Eerste vervangen’ wijzigt de eerste en laat de andere twee staan. De telling is 1."
        }
      ],
      "explanation": "De zoekactie loopt de originele tekst vanaf het begin door. Na een overeenkomst begint de volgende zoekactie erachter, dus een ingevoegde vervanging wordt niet opnieuw doorzocht. De hoofdletterongevoelige modus vergelijkt kopieën in kleine letters, maar wijzigt de omringende tekst niet.",
      "tips": [
        "Als u een patroon als ‘elk getal’ nodig hebt, gebruik dan de regex-tester. Deze tool zoekt precies de tekens die u typt.",
        "Een vervanging die de zoektekst bevat, wordt ongewijzigd ingevoegd en in dezelfde ronde niet opnieuw vervangen."
      ],
      "limitations": "Dit is geen reguliere expressie. Woordgrenzen worden niet herkend en tekst tussen aanhalingstekens wordt niet overgeslagen. Overlappende overeenkomsten worden niet dubbel geteld.",
      "faqs": [
        {
          "question": "Kan ik de overeenkomsten verwijderen?",
          "answer": "Ja. Laat de vervanging leeg. Elke overeenkomst wordt verwijderd en telt toch als vervanging."
        },
        {
          "question": "Waarom veranderde een kort woord binnen een langer woord?",
          "answer": "De zoekactie zoekt op tekens. Wie ‘cat’ zoekt, vindt ook het begin van ‘catalog’. Voeg spaties toe als u alleen het hele woord wilt, of gebruik de regex-tester met een woordgrens."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De tekst en de zoekterm blijven in dit tabblad. Ze worden niet naar een server gestuurd."
        },
        {
          "question": "Hoe vervang ik een woord overal in een tekst?",
          "answer": "Vul het te zoeken woord en de vervanging in, kies ‘Alles vervangen’ en kopieer het resultaat. Zet hoofdlettergevoelig zoeken aan als hoofdletters ertoe doen."
        },
        {
          "question": "Ondersteunt zoeken en vervangen reguliere expressies?",
          "answer": "Nee. Het zoekt precies de tekst die je typt. Test een patroon eerst in de regex-tester als je op patronen wilt zoeken."
        }
      ]
    },
    "ui": {
      "Replacement": "Vervanging",
      "How many matches": "Welke overeenkomsten",
      "Replace first": "Eerste vervangen",
      "Replace all": "Alles vervangen",
      "Case-sensitive": "Hoofdlettergevoelig",
      "{0} replacement.": "{0} vervanging.",
      "{0} replacements.": "{0} vervangingen.",
      "Paste the text you want to change.": "Plak de tekst die u wilt wijzigen.",
      "Enter the text to find.": "Typ de tekst die u zoekt."
    }
  },
  "remove-line-breaks": {
    "answer": "Regeleinden verwijderen voegt afgebroken regels samen met spaties, verwijdert de regeleinden of houdt een lege regel tussen alinea’s.",
    "content": {
      "about": "Plak tekst die over veel regels is afgebroken. U kunt die regels samenvoegen met spaties, de regeleinden verwijderen of een lege regel tussen alinea’s houden.",
      "howTo": [
        "Plak de originele tekst. Het vak houdt de regeleinden zichtbaar.",
        "Kies één optie: regeleinden vervangen door spaties, ze verwijderen of alinea-einden behouden.",
        "Klik op ‘Tekst opschonen’.",
        "Kopieer de opgeschoonde tekst of maak beide vakken leeg."
      ],
      "features": [
        "Het origineel blijft in het eerste vak; de opgeschoonde tekst staat apart.",
        "De spatiemodus voegt regels samen en voegt herhaalde spaties samen.",
        "De alineamodus houdt een lege regel waar er al een was."
      ],
      "examples": [
        {
          "title": "Een afgebroken e-mail",
          "body": "Drie korte regels van één zin worden één regel met enkele spaties tussen de woorden als u ‘Regeleinden vervangen door spaties’ kiest."
        },
        {
          "title": "Twee alinea’s",
          "body": "Een blok, een lege regel en nog een blok. ‘Alinea-einden behouden’ voegt de regels binnen elk blok samen en laat één lege regel ertussen."
        }
      ],
      "explanation": "Regeleinden van Windows en oude Macs worden als hetzelfde regeleinde behandeld. De spatiemodus maakt van elke reeks regeleinden één spatie en trimt daarna de uiteinden. De verwijdermodus schrapt de regeleinden en kan het laatste woord van een regel aan het eerste van de volgende plakken. De alineamodus splitst eerst op lege regels en voegt daarna de regels binnen elke alinea samen.",
      "tips": [
        "Gebruik spaties voor lopende tekst. Gebruik verwijderen alleen als de regeleinden midden in een geheel staan, zoals een lang getal verdeeld over regels.",
        "Gebruik deze tool niet op een gedicht of lijst die zijn regels moet houden."
      ],
      "limitations": "De tool kan een afgebroken zin niet van een lijst onderscheiden. In de alineamodus geldt een enkel regeleinde als afbreking. Alleen een lege regel houdt alinea’s gescheiden.",
      "faqs": [
        {
          "question": "Worden spaties binnen een regel verwijderd?",
          "answer": "De spatiemodus voegt herhaalde spaties en tabs samen. De verwijder- en alineamodus laten de spaties binnen een regel staan."
        },
        {
          "question": "Wat als ik alleen spaties plak?",
          "answer": "De pagina vraagt u tekst te plakken. Alleen witruimte is niet genoeg."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De geplakte tekst wordt in dit tabblad herschreven. Hij wordt niet geüpload."
        },
        {
          "question": "Hoe verwijder ik regeleinden uit tekst die uit een pdf is gekopieerd?",
          "answer": "Plak de tekst en kies de optie die alinea’s bewaart. Enkele regeleinden binnen een alinea worden spaties, en lege regels tussen alinea’s blijven staan."
        },
        {
          "question": "Wat is het verschil tussen regeleinden vervangen en verwijderen?",
          "answer": "Vervangen maakt van elk regeleinde een spatie, zodat woorden gescheiden blijven. Verwijderen haalt het regeleinde weg, waardoor het eind van een regel aan het begin van de volgende plakt."
        }
      ]
    },
    "ui": {
      "Line breaks": "Regeleinden",
      "Replace line breaks with spaces": "Regeleinden vervangen door spaties",
      "Remove line breaks": "Regeleinden verwijderen",
      "Keep paragraph breaks": "Alinea-einden behouden",
      "Cleaned text": "Opgeschoonde tekst",
      "Paste some text first.": "Plak eerst wat tekst."
    }
  },
  "add-line-numbers": {
    "answer": "Regelnummers toevoegen zet een nummer en een scheidingsteken vóór elke regel zonder de regel zelf te wijzigen.",
    "content": {
      "about": "Plak meerdere regels en zet vóór elke regel een nummer. U kiest het startnummer en de tekens tussen het nummer en de regel.",
      "howTo": [
        "Plak de tekst. Elke regel blijft zoals u hem typte.",
        "Stel het startnummer in. Meestal is dat 1; een geheel getal onder 0 mag ook.",
        "Stel het scheidingsteken in. Standaard is dat een punt en een spatie.",
        "Klik op ‘Nummers toevoegen’ en kopieer de genummerde regels of maak het formulier leeg."
      ],
      "features": [
        "De regeltekst wordt niet getrimd of herschreven.",
        "Een eigen scheidingsteken, zoals \") \" of een tab.",
        "Een ander startnummer dan 1."
      ],
      "examples": [
        {
          "title": "Een lijst van drie regels",
          "body": "De regels ‘Eerste regel’, ‘Tweede regel’ en ‘Derde regel’ worden met start 1 en scheidingsteken ‘. ’ ‘1. Eerste regel’, ‘2. Tweede regel’ en ‘3. Derde regel’."
        },
        {
          "title": "Een lijst vanaf 10 voortzetten",
          "body": "Met startnummer 10 en scheidingsteken \") \" wordt de eerste geplakte regel ‘10) ’ plus de oorspronkelijke regel."
        }
      ],
      "explanation": "De tekst wordt gesplitst op regeleinden. Elke regel krijgt het startnummer plus zijn positie, dan het scheidingsteken en dan de oorspronkelijke tekens. Ook lege regels worden genummerd, want het zijn nog steeds regels.",
      "tips": [
        "Heeft de tekst al nummers, verwijder die dan eerst, anders staan er twee nummers op elke regel.",
        "Gebruik een tab als scheidingsteken als u het resultaat in een spreadsheet wilt plakken."
      ],
      "limitations": "Een regeleinde aan het einde maakt een lege laatste regel, en die wordt genummerd. Automatische terugloop in het vak telt niet als nieuwe regel; alleen echte regeleinden tellen.",
      "faqs": [
        {
          "question": "Verandert dit de spelling of spaties?",
          "answer": "Nee. De tekens na het scheidingsteken zijn de oorspronkelijke regel."
        },
        {
          "question": "Kan ik bij 0 beginnen?",
          "answer": "Ja. 0 en negatieve gehele getallen zijn toegestaan. Een decimaal getal zoals 1,5 niet."
        },
        {
          "question": "Wordt mijn invoer naar een server gestuurd?",
          "answer": "Nee. De regels en het startnummer blijven in dit tabblad. Ze worden niet naar een server gestuurd."
        },
        {
          "question": "Hoe nummer ik regels in een tekst?",
          "answer": "Plak de tekst, stel het startnummer en het scheidingsteken in, bijvoorbeeld een punt en een spatie, voeg de nummers toe en kopieer het resultaat."
        },
        {
          "question": "Worden lege regels genummerd?",
          "answer": "Ja. Elk echt regeleinde begint een nieuwe genummerde regel, ook lege regels en een lege laatste regel."
        }
      ]
    },
    "ui": {
      "Starting number": "Startnummer",
      "Separator": "Scheidingsteken",
      "Placed between the number and the original line.": "Staat tussen het nummer en de oorspronkelijke regel.",
      "Add numbers": "Nummers toevoegen",
      "Numbered lines": "Genummerde regels",
      "Paste the lines you want to number.": "Plak de regels die u wilt nummeren.",
      "starting number": "startnummer",
      "Enter a whole number for the starting line.": "Voer een geheel getal in voor de eerste regel."
    }
  },
  "number-to-words": {
    "answer": "Een getal-naar-woordenconverter schrijft gehele getallen van -999.999.999 tot en met 999.999.999 in het Engels uit. Hij kan ook eenvoudige Engelse getalwoorden terug omzetten naar een getal.",
    "content": {
      "about": "Schrijf een geheel getal in het Engels uit, of zet eenvoudige Engelse getalwoorden terug om naar een getal. Het bereik is -999.999.999 tot en met 999.999.999.",
      "howTo": [
        "Kies getal naar woorden of woorden naar getal.",
        "Voer het getal of de woorden in.",
        "Klik op ‘Omzetten’."
      ],
      "features": [
        "Gehele getallen tot in de miljoenen.",
        "Negatieve getallen en nul.",
        "Omgekeerd lezen van eenvoudige Engelse woorden."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "In het Engels: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "De converter deelt het getal op in miljoenen, duizendtallen en de rest. Tientallen en eenheden van 21 tot en met 99 krijgen een koppelteken. Het woord ‘and’ wordt niet gebruikt. Voorloopnullen worden genegeerd, dus 007 is seven.",
      "tips": [
        "Schrijf twenty-one met koppelteken, of als twenty one.",
        "Gebruik minus voor een negatief getal."
      ],
      "limitations": "Decimale getallen, miljarden en formuleringen met het woord ‘and’ vallen buiten deze converter. De uitvoer is altijd Engels, niet Nederlands.",
      "faqs": [
        {
          "question": "Hoe schrijf je een getal in woorden?",
          "answer": "De pagina deelt op in miljoenen, duizendtallen en honderdtallen en schrijft dan de tientallen en eenheden uit. 123 is one hundred twenty-three."
        },
        {
          "question": "Welk bereik wordt ondersteund?",
          "answer": "Gehele getallen van -999.999.999 tot en met 999.999.999."
        },
        {
          "question": "Wat gebeurt er met voorloopnullen?",
          "answer": "Die worden genegeerd. 007 is seven."
        },
        {
          "question": "Kunnen decimale getallen worden omgezet?",
          "answer": "Nee. Voer een geheel getal in."
        },
        {
          "question": "Kunnen woorden terug naar een getal?",
          "answer": "Ja, voor eenvoudige Engelse woorden binnen dit bereik, zoals one hundred twenty-three of minus twenty."
        },
        {
          "question": "Worden deze getallen naar een server gestuurd?",
          "answer": "Nee. Het getal of de woorden blijven tijdens het omzetten in dit tabblad. Ze worden niet geüpload."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Gehele getallen van -999.999.999 tot en met 999.999.999. De woorden zijn Amerikaans-Engels zonder het woord ‘and’, zoals one hundred twenty-three. Voorloopnullen worden genegeerd.",
      "Number to words": "Getal naar woorden",
      "Words to number": "Woorden naar getal",
      "Number words": "Getal in woorden (Engels)",
      "Enter a whole number. Decimals are outside this converter.": "Voer een geheel getal in. Decimale getallen worden niet ondersteund.",
      "Enter a whole number using digits.": "Voer een geheel getal in cijfers in.",
      "This converter supports -999,999,999 through 999,999,999.": "Deze converter ondersteunt -999.999.999 tot en met 999.999.999.",
      "Enter number words.": "Voer Engelse getalwoorden in.",
      "Enter number words after minus.": "Voer na minus Engelse getalwoorden in.",
      "This converter does not use the word and.": "Deze converter gebruikt het woord ‘and’ niet.",
      "\"{0}\" is not a supported number word.": "‘{0}’ is geen ondersteund getalwoord.",
      "That number is outside -999,999,999 through 999,999,999.": "Dat getal valt buiten -999.999.999 tot en met 999.999.999."
    },
    "note": "Deze tool schrijft en leest getalwoorden alleen in het Engels. De bediening en uitleg zijn vertaald."
  },
  "morse-code": {
    "answer": "Een morsecodevertaler zet tekst met A–Z en 0–9 om naar internationale morse of leest morse terug als tekst. Letters worden gescheiden door spaties en woorden door een schuine streep.",
    "content": {
      "about": "Zet letters en cijfers om naar internationale morsecode, of morse terug naar tekst.",
      "howTo": [
        "Kies tekst naar morse of morse naar tekst.",
        "Voer A–Z, 0–9 of morse van punten, strepen, spaties en / in.",
        "Klik op ‘Omzetten’."
      ],
      "features": [
        "A–Z en 0–9.",
        "Spaties tussen letters en / tussen woorden.",
        "Een duidelijke foutmelding bij een niet-ondersteund teken."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO is .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Elke letter en elk cijfer heeft één internationaal morsepatroon. Een spatie scheidt letters, een schuine streep scheidt woorden. Kleine letters worden als hoofdletters gelezen. Een teken buiten A–Z en 0–9 stopt de omzetting.",
      "tips": [
        "SOS schrijf je als ... --- ...",
        "Laat één spatie tussen morseletters."
      ],
      "limitations": "Leestekens en letters buiten A–Z (zoals ë of é) worden niet omgezet. Een onbekend morsepatroon wordt geweigerd.",
      "faqs": [
        {
          "question": "Hoe schrijf je tekst in morsecode?",
          "answer": "Elke letter wordt zijn internationale morsepatroon. Letters worden gescheiden door een spatie en woorden door /."
        },
        {
          "question": "Werken kleine letters?",
          "answer": "Ja. Kleine letters worden als hoofdletters gelezen."
        },
        {
          "question": "Wat scheidt woorden?",
          "answer": "Een schuine streep scheidt woorden. Een spatie scheidt letters binnen een woord."
        },
        {
          "question": "Wat als ik leestekens typ?",
          "answer": "De pagina noemt het niet-ondersteunde teken en gokt er geen code voor."
        },
        {
          "question": "Wordt de tekst ergens heen gestuurd?",
          "answer": "Nee. De omzetting gebeurt in uw browser."
        },
        {
          "question": "Worden de gegevens naar een server gestuurd?",
          "answer": "Nee. Letters en morsepatronen worden in dit tabblad omgezet. Ze worden niet naar een server gestuurd."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Internationale morse voor A–Z en 0–9. Letters worden gescheiden door een spatie, woorden door /. Niet-ondersteunde tekens worden geweigerd.",
      "Text to Morse": "Tekst naar morse",
      "Morse to text": "Morse naar tekst",
      "Morse code": "Morsecode",
      "Morse": "Morse",
      "Enter text to convert.": "Voer tekst in om om te zetten.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "‘{0}’ wordt niet ondersteund. Gebruik A–Z en 0–9.",
      "Enter Morse code to convert.": "Voer morsecode in om om te zetten.",
      "Morse code can use only dots, dashes, spaces, and /.": "Morsecode mag alleen punten, strepen, spaties en / bevatten.",
      "A word separator is missing letters.": "Bij een woordscheiding ontbreken letters.",
      "\"{0}\" is not a supported Morse letter.": "‘{0}’ is geen ondersteunde morseletter."
    }
  },
  "roman-numeral-converter": {
    "answer": "Een Romeinse-cijferconverter zet gehele getallen van 1 tot en met 3999 om naar standaard Romeinse cijfers en leest die terug als getallen. Waarden boven 3999 worden niet ondersteund.",
    "content": {
      "about": "Zet gehele getallen van 1 tot en met 3999 om naar standaard Romeinse cijfers, en die cijfers terug naar getallen.",
      "howTo": [
        "Kies getal naar Romeins of Romeins naar getal.",
        "Voer een getal van 1 tot en met 3999 in, of een Romeins cijfer met I, V, X, L, C, D en M.",
        "Klik op ‘Omzetten’."
      ],
      "features": [
        "Standaard aftreknotatie.",
        "Omzetting in beide richtingen.",
        "Weigering van cijfers die niet in standaardvorm zijn."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 is MCMXCIV."
        }
      ],
      "explanation": "De pagina bouwt cijfers uit M, CM, D, CD, C, XC, L, XL, X, IX, V, IV en I. Een Romeinse reeks wordt alleen geaccepteerd als die de standaardvorm van zijn waarde is. IIII, IC en IL worden geweigerd. Cijfers boven 3999, ook met vinculumnotatie, worden niet ondersteund.",
      "tips": [
        "4 is IV, niet IIII.",
        "9 is IX, niet VIIII."
      ],
      "limitations": "Het bereik is 1 tot en met 3999. Nul, negatieve en grotere getallen worden geweigerd.",
      "faqs": [
        {
          "question": "Hoe zet je een getal om naar een Romeins cijfer?",
          "answer": "De pagina gebruikt de standaard aftreknotatie. 4 is IV, 9 is IX, 40 is XL en 3999 is MMMCMXCIX."
        },
        {
          "question": "Welke getallen worden ondersteund?",
          "answer": "Gehele getallen van 1 tot en met 3999."
        },
        {
          "question": "Waarom wordt IIII geweigerd?",
          "answer": "IIII is niet de standaardvorm van 4. De standaardvorm is IV."
        },
        {
          "question": "Kunnen getallen boven 3999 worden omgezet?",
          "answer": "Nee. Uitgebreide notatie voor grotere getallen wordt niet ondersteund."
        },
        {
          "question": "Kan een Romeins cijfer terug naar een getal?",
          "answer": "Ja, als het een standaard Romeins cijfer van 1 tot en met 3999 is."
        },
        {
          "question": "Worden deze getallen naar een server gestuurd?",
          "answer": "Nee. Het getal of Romeinse cijfer wordt in dit tabblad omgezet. Het wordt niet geüpload."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Standaard Romeinse cijfers van 1 tot en met 3999. Cijfers boven 3999, ook met vinculumnotatie, worden niet ondersteund. Ongeldige reeksen zoals IIII worden geweigerd.",
      "Number to Roman": "Getal naar Romeins",
      "Roman to number": "Romeins naar getal",
      "Roman numeral": "Romeins cijfer",
      "Enter a whole number from 1 through 3999.": "Voer een geheel getal in van 1 tot en met 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Deze converter ondersteunt 1 tot en met 3999. Cijfers boven 3999 worden niet ondersteund.",
      "Enter a Roman numeral.": "Voer een Romeins cijfer in.",
      "Use only I, V, X, L, C, D, and M.": "Gebruik alleen I, V, X, L, C, D en M.",
      "\"{0}\" is not a valid Roman numeral.": "‘{0}’ is geen geldig Romeins cijfer."
    }
  },
  "text-repeater": {
    "answer": "Een tekstherhaler kopieert een woord, zin of regel 1 tot 200 keer, met niets, een spatie of een nieuwe regel tussen de kopieën.",
    "content": {
      "about": "Herhaal een woord, zin of regel 1 tot 200 keer. Zet niets, een spatie of een nieuwe regel tussen de kopieën. De brontekst mag tot 5.000 tekens lang zijn en het samengevoegde resultaat tot 100.000 tekens.",
      "howTo": [
        "Voer de tekst in die u wilt herhalen. Een leeg vak wordt geweigerd.",
        "Voer een geheel getal van 1 tot 200 in.",
        "Kies niets, een spatie of een nieuwe regel tussen de kopieën en klik op ‘Herhalen’."
      ],
      "features": [
        "Eén kopie bij aantal 1, zonder extra scheidingsteken.",
        "Een spatie of nieuwe regel alleen tussen kopieën, niet na de laatste.",
        "Een lengtegrens zodat een enorm resultaat de pagina niet vult."
      ],
      "examples": [
        {
          "title": "Een woord drie keer",
          "body": "ha, aantal 3, met een spatie tussen de kopieën, wordt ha ha ha."
        },
        {
          "title": "Een regel twee keer",
          "body": "Klaar, aantal 2, met een nieuwe regel tussen de kopieën, wordt Klaar op de ene regel en Klaar op de volgende."
        }
      ],
      "explanation": "De pagina kopieert de tekst zo vaak als gevraagd en voegt de kopieën samen met het gekozen scheidingsteken. Er wordt geen Latijnse opvultekst gegenereerd en er worden geen dubbele regels verwijderd.",
      "tips": [
        "Gebruik een nieuwe regel voor een lijst met identieke regels en een spatie als alles op één regel moet."
      ],
      "limitations": "De brontekst mag tot 5.000 tekens zijn, het aantal tot 200 en het samengevoegde resultaat tot 100.000 tekens. Een langer resultaat wordt geweigerd.",
      "faqs": [
        {
          "question": "Is de tekstherhaler gratis?",
          "answer": "Ja. U kunt hier tekst herhalen zonder te betalen of een account aan te maken."
        },
        {
          "question": "Voegt aantal 1 een scheidingsteken toe?",
          "answer": "Nee. Eén kopie is precies de tekst die u typte, zonder toevoeging."
        },
        {
          "question": "Kan ik een lege regel herhalen?",
          "answer": "Een leeg vak wordt geweigerd. Een regel met alleen spaties mag wel, want die spaties zijn tekst."
        },
        {
          "question": "Wordt de tekst naar een server gestuurd?",
          "answer": "Nee. De kopieën worden in dit browsertabblad gemaakt. Tools Star Hub stuurt die tekst niet naar een server en bewaart hem niet in lokale opslag."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "De kopieën worden in dit tabblad gemaakt. De tekst wordt niet naar een server gestuurd.",
      "Text to repeat": "Te herhalen tekst",
      "Repeat count": "Aantal herhalingen",
      "From 1 to 200.": "Van 1 tot 200.",
      "Between copies": "Tussen kopieën",
      "Nothing": "Niets",
      "Space": "Spatie",
      "New line": "Nieuwe regel",
      "Enter the text to repeat.": "Voer de tekst in die u wilt herhalen.",
      "Keep the text under {0} characters.": "Houd de tekst onder {0} tekens.",
      "repeat count": "aantal herhalingen",
      "Enter a whole number of repeats.": "Voer een geheel aantal herhalingen in.",
      "Choose a repeat count from {0} to {1}.": "Kies een aantal herhalingen van {0} tot {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Deze herhaling is te lang voor deze pagina. Gebruik een kortere tekst of een kleiner aantal."
    }
  }
};

export default data;
