import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Een AI-promptgenerator stelt een gestructureerde prompt samen uit het onderwerp, het doel, de doelgroep en het formaat die je invult. ‘Prompt genereren’ blijft in je browser. ‘Genereren met AI’ stuurt die velden via ToolStarHub naar de Gemini-API van Google.",
    "content": {
      "about": "De AI-promptgenerator maakt van de ingevulde velden een prompt die je kunt kopiëren. Een voorinstelling vult alleen het gebruik, de toon, het formaat, het detailniveau en een eerste instructie in. Het onderwerp vul je zelf in.",
      "howTo": [
        "Kies een voorinstelling of typ je eigen gebruik.",
        "Vul een onderwerp of een doel in. Minstens één daarvan is nodig.",
        "Stel doelgroep, toon, taal, formaat en gewenst detailniveau in.",
        "Klik op ‘Prompt genereren’ om hem in je browser samen te stellen, of op ‘Genereren met AI’ om Gemini hem te laten verfijnen.",
        "Gebruik ‘Wissen’ om het formulier leeg te maken."
      ],
      "features": [
        "Twaalf voorinstellingen voor artikelen, posts, scripts, producttekst, onderzoeksopzetten en programmeertaken.",
        "Een gestructureerde prompt met taak, doelgroep, toon, taal en formaat.",
        "Een regel die het model vraagt ontbrekende feiten niet te verzinnen.",
        "Kopiëren en wissen. Er wordt niets opgeslagen."
      ],
      "examples": [
        {
          "title": "Een blogartikel over leeftijd in schrikkeljaren",
          "body": "Voorinstelling: blogartikel. Onderwerp: hoe je de leeftijd berekent van iemand die op 29 februari is geboren. Doelgroep: mensen die een datumcalculator gebruiken. De prompt vraagt om een korte inleiding en geen opgeblazen slot."
        },
        {
          "title": "Een programmeertaak",
          "body": "Voorinstelling: programmeerprompt. Doel: een functie schrijven die een leeg paginabereik weigert. Extra instructie: TypeScript gebruiken en een falend voorbeeld tonen. De prompt vraagt naar de taal, de invoer en wat als klaar telt."
        }
      ],
      "explanation": "‘Prompt genereren’ zet je antwoorden in gelabelde regels achter elkaar. Zijn onderwerp en doel allebei leeg, dan stopt de tool en vraagt om een van de twee. ‘Genereren met AI’ stuurt die velden naar Gemini en geeft een verfijnde prompt terug.",
      "limitations": "‘Prompt genereren’ voegt alleen ingevulde velden samen en heeft een onderwerp of doel nodig. Een voorinstelling vult stijlvelden in, maar verzint geen onderwerp. ‘Genereren met AI’ verfijnt de prompt met Gemini. De pagina voert de prompt niet uit in een schrijfmodel.",
      "tips": [
        "Noem de lezers. ‘Kersverse ouders’ helpt meer dan ‘iedereen’.",
        "Zeg welke vorm het resultaat moet hebben: een lijst, een e-mail, een script.",
        "Zet bekende feiten in de extra instructies, zodat het model ze niet hoeft te raden."
      ],
      "faqs": [
        {
          "question": "Gebruikt deze tool AI?",
          "answer": "‘Prompt genereren’ bouwt de prompt op deze pagina. ‘Genereren met AI’ stuurt de velden via ToolStarHub naar de Gemini-API van Google en geeft een verfijnde prompt terug. Beide kun je in een ander model plakken."
        },
        {
          "question": "Wat als ik alleen het onderwerp weet?",
          "answer": "Een onderwerp is genoeg om te genereren. Voeg een doel toe zodra je weet wat lezers daarna moeten kunnen."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Prompt genereren’ blijft in dit tabblad en uploadt de velden niet. ‘Genereren met AI’ stuurt de velden via ToolStarHub naar de Gemini-API van Google en geeft een verfijnde prompt terug. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren."
        },
        {
          "question": "Wat maakt een goede AI-prompt?",
          "answer": "Zeg wat je wilt, voor wie het is, de toon, het formaat en de lengte. Een duidelijk doel en een voorbeeld van het resultaat helpen meestal meer dan extra bijvoeglijke naamwoorden."
        },
        {
          "question": "Kan ik de prompt in ChatGPT, Gemini of Claude gebruiken?",
          "answer": "Ja. Het resultaat is platte tekst die je in elke chatassistent kunt plakken. Verschillende modellen kunnen dezelfde prompt toch verschillend beantwoorden."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "‘Prompt genereren’ bouwt een prompt in je browser. ‘Genereren met AI’ stuurt de ingevulde velden via ToolStarHub naar de Gemini-API van Google en geeft een uitgewerkte prompt terug. De tekst wordt niet opgeslagen.",
      "Platform or use case": "Platform of gebruik",
      "Topic": "Onderwerp",
      "Goal": "Doel",
      "Audience": "Doelgroep",
      "Tone": "Toon",
      "Language": "Taal",
      "Output format": "Uitvoerformaat",
      "Level of detail": "Detailniveau",
      "Brief": "Kort",
      "Medium": "Gemiddeld",
      "High": "Hoog",
      "Additional instructions": "Extra instructies",
      "Generate prompt": "Prompt genereren",
      "Prompt": "Prompt",
      "AI prompt": "AI-prompt",
      "Blog article": "Blogartikel",
      "SEO article": "SEO-artikel",
      "Social media post": "Socialemediapost",
      "YouTube script": "YouTube-script",
      "YouTube thumbnail prompt": "Prompt voor YouTube-thumbnail",
      "Image generation": "Afbeeldingen genereren",
      "Video generation": "Video genereren",
      "Product description": "Productbeschrijving",
      "Email": "E-mail",
      "Marketing copy": "Marketingtekst",
      "Academic/research prompt": "Academische/onderzoeksprompt",
      "Coding prompt": "Programmeerprompt",
      "Add a topic or a goal before generating a prompt.": "Vul een onderwerp of doel in voordat je een prompt genereert."
    },
    "note": "‘Prompt genereren’ schrijft de prompt in het Engels, de taal die AI-modellen het nauwkeurigst volgen. Met het veld ‘Taal’ bepaal je in welke taal het antwoord komt. ‘Genereren met AI’ begrijpt ook Nederlandse invoer."
  },
  "prompt-to-image": {
    "answer": "Een prompt-naar-afbeeldingtool schrijft op basis van onderwerp en stijl een afbeeldingsprompt die je kunt kopiëren. De tool maakt de afbeelding niet. ‘Genereren met AI’ geeft alleen een uitgebreidere prompt terug.",
    "content": {
      "about": "De prompt-naar-afbeeldinggenerator schrijft een prompt voor een beeldmodel. Je beschrijft onderwerp, plek, licht en kadrering. De pagina tekent de afbeelding niet, omdat er geen beeld-API is gekoppeld.",
      "howTo": [
        "Kies een stijlvoorinstelling als je een beginpunt wilt.",
        "Beschrijf het onderwerp. Zonder onderwerp maakt de tool geen prompt.",
        "Voeg omgeving, licht, camera, kleuren, sfeer en beeldverhouding toe als die belangrijk zijn.",
        "Vul een negatieve prompt in voor wat niet in beeld mag.",
        "Klik op ‘Prompt maken’ en kopieer de prompt en de negatieve prompt apart."
      ],
      "features": [
        "Voorinstellingen voor foto, film, illustratie, product, portret, landschap, architectuur, fantasy, anime, 3D en thumbnails.",
        "Aparte kopieerknoppen voor de hoofdprompt en de negatieve prompt.",
        "Lege velden worden weggelaten, zodat er geen lege labels in de prompt staan."
      ],
      "examples": [
        {
          "title": "Een productfoto",
          "body": "Onderwerp: een roestvrijstalen drinkfles. Voorinstelling: productfotografie. Beeldverhouding: 1:1. Negatieve prompt: extra logo’s, mensen, rommelige tafel. Het resultaat is een studiobeschrijving, geen bestand."
        },
        {
          "title": "Een thumbnail",
          "body": "Onderwerp: iemand die een gemarkeerde pdf vasthoudt. Voorinstelling: YouTube-thumbnail. De compositie blijft ‘één onderwerp, ruimte voor een korte titel’. De titeltekst schrijf je nog steeds zelf."
        }
      ],
      "explanation": "Elk ingevuld veld wordt een korte zinsnede. Het onderwerp is verplicht, zodat de prompt iets specifieks beschrijft. Een voorinstelling verandert de stijl en een paar verwante velden, maar wist het onderwerp dat je al hebt getypt niet.",
      "limitations": "De pagina schrijft een prompt en desgewenst een negatieve prompt. Ze levert geen afbeeldingsbestand. Een onderwerp is verplicht. ‘Genereren met AI’ vraagt Gemini om een langere prompt, die je daarna in een beeldtool plakt.",
      "tips": [
        "Eén onderwerp is makkelijker te beschrijven dan een menigte.",
        "Benoem het licht. ‘Raamlicht’ en ‘felle middagzon’ geven heel andere beelden.",
        "Gebruik de negatieve prompt voor fouten die steeds terugkomen, zoals extra vingers of vervormde tekst."
      ],
      "faqs": [
        {
          "question": "Waarom is er geen afbeelding?",
          "answer": "Deze pagina schrijft een prompt en maakt geen afbeelding. ‘Genereren met AI’ vraagt Gemini om een uitgebreidere prompt. Plak die in een dienst die afbeeldingen maakt."
        },
        {
          "question": "Leest elk model de prompt op dezelfde manier?",
          "answer": "Nee. Modellen reageren verschillend op formuleringen. Zie het resultaat als een duidelijke briefing en pas het aan voor je tool."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Prompt maken’ blijft in deze browser en uploadt de briefing niet. ‘Genereren met AI’ stuurt de briefing via ToolStarHub naar de Gemini-API van Google en geeft een langere prompt terug. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren. De pagina maakt nog steeds geen afbeelding."
        },
        {
          "question": "Hoe schrijf ik een goede afbeeldingsprompt?",
          "answer": "Begin met het onderwerp en voeg dan omgeving, licht, camera- of kunststijl, kleurenpalet, sfeer en beeldverhouding toe. Wees specifiek over wat belangrijk is en laat de rest weg."
        },
        {
          "question": "Wat is een negatieve prompt?",
          "answer": "Een negatieve prompt somt op wat niet in beeld mag, zoals tekst, extra vingers of onscherpte. Niet elk beeldmodel leest er een."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "‘Prompt maken’ schrijft een afbeeldingsprompt in je browser. ‘Genereren met AI’ stuurt je briefing via ToolStarHub naar de Gemini-API van Google en geeft een rijkere afbeeldingsprompt terug. Deze pagina maakt geen afbeelding. De tekst wordt niet opgeslagen.",
      "Style presets": "Stijlvoorinstellingen",
      "Composition": "Compositie",
      "Colors": "Kleuren",
      "Quality and detail": "Kwaliteit en detail",
      "Things you want left out of the picture.": "Wat je niet in beeld wilt.",
      "Image prompt": "Afbeeldingsprompt",
      "AI image prompt": "AI-afbeeldingsprompt",
      "Photorealistic": "Fotorealistisch",
      "Cinematic": "Filmisch",
      "Illustration": "Illustratie",
      "Product photography": "Productfotografie",
      "Portrait": "Portret",
      "Landscape": "Landschap",
      "Architecture": "Architectuur",
      "Fantasy": "Fantasy",
      "Anime": "Anime",
      "3D render": "3D-render",
      "YouTube thumbnail": "YouTube-thumbnail",
      "Describe the subject before building the prompt.": "Beschrijf het onderwerp voordat je de prompt maakt."
    },
    "note": "De gemaakte prompt gebruikt Engelse labels, die beeldmodellen het best begrijpen. Je beschrijvingen kun je in elke taal typen."
  },
  "prompt-to-video": {
    "answer": "Een prompt-naar-videotool schrijft een shotbeschrijving die je in een videomodel kunt plakken. De tool rendert geen clip. ‘Genereren met AI’ geeft alleen de geschreven prompt terug.",
    "content": {
      "about": "De prompt-naar-videogenerator schrijft de beschrijving van één shot: wie of wat in beeld is, wat er beweegt, hoe de camera beweegt en hoe lang het shot duurt. Er wordt geen video gemaakt.",
      "howTo": [
        "Kies een voorinstelling als beginstijl, of laat de velden leeg en schrijf zelf.",
        "Vul een onderwerp of een actie in. Een van beide is verplicht.",
        "Beschrijf scène, camera, lens, licht, duur en beeldverhouding.",
        "Voeg geluid of dialoog alleen toe als het shot dat nodig heeft.",
        "Klik op ‘Prompt maken’ en kopieer de tekst. ‘Wissen’ zet het formulier terug, ook de standaardduur."
      ],
      "features": [
        "Voorinstellingen voor film, productreclame, sociale media, YouTube, documentaire, reizen, actie, mode, natuur, historische scènes en animatie.",
        "Een slotregel die het verzoek beperkt tot één doorlopend shot.",
        "Een aparte negatieve prompt voor beweging- of beeldfouten die je wilt vermijden."
      ],
      "examples": [
        {
          "title": "Een product in een baan",
          "body": "Onderwerp: een keramische mok. Actie: er stijgt stoom op. Voorinstelling: productreclame. De duur blijft 6 seconden. De prompt vraagt om een cirkelende camerabeweging en studiolicht."
        },
        {
          "title": "Een rustig reisshot",
          "body": "Onderwerp: een kustpad. Actie: iemand loopt van de camera weg. Voorinstelling: reizen. Zet het tijdstip in het veld omgeving, zodat het licht niet open blijft."
        }
      ],
      "explanation": "Videomodellen kunnen beter met één actie overweg dan met een reeks scènes. De generator houdt je zinsneden in een vaste volgorde en voegt ‘één doorlopend shot’ toe, zodat het verzoek geen storyboard wordt.",
      "limitations": "De generator beschrijft één doorlopend shot. Hij rendert of downloadt geen video. Je hebt een onderwerp of een actie nodig. Duur, camera en dialoog komen alleen in de prompt als je ze typt.",
      "tips": [
        "Zeg wat beweegt en wat stilstaat.",
        "Een duur als ‘5 seconden’ is nuttiger dan ‘kort’.",
        "Heb je dialoog nodig, schrijf de zin dan uit. Laat het model geen toespraak verzinnen."
      ],
      "faqs": [
        {
          "question": "Kan ik op deze pagina een video downloaden?",
          "answer": "Nee. Deze pagina rendert geen video. ‘Genereren met AI’ geeft alleen een geschreven shotprompt van Gemini terug. Kopieer die naar een videotool die je vertrouwt."
        },
        {
          "question": "Wat als ik alleen de actie beschrijf?",
          "answer": "Een actie is genoeg. Met een onderwerp erbij kun je je het shot makkelijker voorstellen."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Prompt maken’ schrijft het shot in dit tabblad. ‘Genereren met AI’ stuurt de shotvelden via ToolStarHub naar de Gemini-API van Google en geeft een geschreven prompt terug. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren. Er wordt geen videobestand gemaakt."
        },
        {
          "question": "Hoe schrijf ik een prompt voor een AI-video?",
          "answer": "Beschrijf één shot: het onderwerp, de actie, de omgeving, de camerabeweging, de lens, het licht en de lengte. Korte, concrete prompts werken meestal beter dan lange verhalen."
        },
        {
          "question": "Welke videomodellen kunnen deze prompts gebruiken?",
          "answer": "Het resultaat is platte tekst, dus je kunt het in elke tekst-naar-videotool plakken. Elk model volgt camera- en tijdsaanwijzingen op zijn eigen manier."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "‘Prompt maken’ schrijft een videoprompt in je browser. ‘Genereren met AI’ stuurt je briefing via ToolStarHub naar de Gemini-API van Google en geeft een shotprompt terug. Deze pagina maakt geen video. De tekst wordt niet opgeslagen.",
      "Video subject": "Videoonderwerp",
      "Scene": "Scène",
      "Action": "Actie",
      "Camera movement": "Camerabeweging",
      "Lens": "Lens",
      "Visual style": "Visuele stijl",
      "Duration": "Duur",
      "Audio or dialogue": "Geluid of dialoog",
      "Video prompt": "Videoprompt",
      "AI video prompt": "AI-videoprompt",
      "Cinematic": "Filmisch",
      "Product commercial": "Productreclame",
      "Social media": "Sociale media",
      "YouTube": "YouTube",
      "Documentary": "Documentaire",
      "Travel": "Reizen",
      "Fashion": "Mode",
      "Nature": "Natuur",
      "Historical": "Historisch",
      "Animation": "Animatie",
      "Add a subject or an action before building the prompt.": "Vul een onderwerp of actie in voordat je de prompt maakt."
    },
    "note": "De gemaakte prompt gebruikt Engelse labels, die videomodellen het best begrijpen. Je beschrijvingen kun je in elke taal typen."
  },
  "ai-article-detector": {
    "answer": "Deze pagina controleert schrijfpatronen zoals zinslengte en herhaalde formuleringen. Ook ‘Analyseren met AI’ is een analyse van schrijfpatronen. Ze beslist niet of een mens of een model de tekst heeft geschreven.",
    "content": {
      "about": "De AI-artikeldetector bekijkt de geplakte tekst en meldt de zinslengte, hoeveel die lengtes variëren, hoe breed de woordenschat is en welke korte formuleringen terugkomen. Het resultaat heet ‘analyse van schrijfpatronen’ en beweert niet meer dan dat.",
      "howTo": [
        "Plak minstens 40 woorden.",
        "Klik op ‘Tekst analyseren’ voor de controle in je browser, of op ‘Analyseren met AI’ voor een analyse van schrijfpatronen door Gemini.",
        "Lees de waarden en de opmerking eronder.",
        "Is het fragment te kort, dan zegt de pagina dat in plaats van het te beoordelen.",
        "‘Wissen’ haalt de tekst van de pagina."
      ],
      "features": [
        "Gemiddelde zinslengte met een variatie van laag, gemiddeld of gevarieerd.",
        "Een beoordeling van de woordenschat op basis van het aantal verschillende woorden.",
        "Formuleringen van vier woorden die drie keer of vaker voorkomen.",
        "Een korte lijst met clichés als die erin staan."
      ],
      "examples": [
        {
          "title": "Een tekst die zichzelf herhaalt",
          "body": "Komen dezelfde vier woorden in meerdere zinnen voor, dan staan ze met hun aantal in de lijst. Dat betekent dat de tekst zichzelf herhaalt, niet dat een model hem schreef."
        },
        {
          "title": "Een kort bijschrift",
          "body": "Twintig woorden is niet genoeg. De tool vraagt om 40 woorden, zodat één zin niet als patroon wordt gezien."
        }
      ],
      "explanation": "De zinsvariatie vergelijkt de spreiding van de zinslengtes met het gemiddelde. De woordenschat vergelijkt het aantal verschillende woorden met het totaal. Beide waarden verschuiven bij gewone redactie. Een zorgvuldige menselijke tekst kan gelijkmatig lijken, een gegenereerde tekst gevarieerd. Dat staat ook in het resultaat.",
      "limitations": "De controle in je browser heeft minstens 40 woorden nodig. Ze meldt zinslengte, breedte van de woordenschat en herhaalde formuleringen. Ze geeft geen percentage en geen oordeel dat een model de tekst schreef. ‘Analyseren met AI’ stuurt de tekst naar Gemini voor hetzelfde soort beschrijving.",
      "tips": [
        "Gebruik een hele alinea, geen kop.",
        "Zie herhaalde formuleringen als redactietips. Schrap ze als lezers ze zouden opmerken.",
        "Gebruik de beoordelingen niet om iemand te beschuldigen van het gebruik van een model."
      ],
      "faqs": [
        {
          "question": "Kan het zien of een tekst door AI is geschreven?",
          "answer": "Nee, niet met zekerheid. Patrooncontroles zitten er in beide richtingen naast. Het resultaat beschrijft de tekst; het is geen oordeel."
        },
        {
          "question": "Waarom is er geen percentage?",
          "answer": "Een percentage zou eruitzien als bewijs. ‘Tekst analyseren’ en ‘Analyseren met AI’ beschrijven allebei patronen. Geen van beide beweert te weten wie de tekst schreef."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Tekst analyseren’ telt de patronen in dit tabblad en uploadt de tekst niet. ‘Analyseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google voor een geschreven beschrijving. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren."
        },
        {
          "question": "Zijn AI-detectors betrouwbaar?",
          "answer": "Geen enkele detector kan bewijzen wie een tekst schreef. Scores op basis van patronen kunnen menselijke tekst markeren en bewerkte AI-tekst missen. Zie elk resultaat dus als aanleiding om na te lezen, niet als bewijs."
        },
        {
          "question": "Naar welke patronen kijkt deze tool?",
          "answer": "Hij meldt zinslengte, hoe gevarieerd de woordenschat is en herhaalde formuleringen, zodat je ziet waar een tekst vlak of herhalend klinkt."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "‘Tekst analyseren’ controleert patronen in je browser. ‘Analyseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google voor een analyse van schrijfpatronen. Geen van beide resultaten kan bepalen wie de tekst schreef. De tekst wordt niet opgeslagen.",
      "Article or draft": "Artikel of concept",
      "Paste at least 40 words.": "Plak minstens 40 woorden.",
      "Analyze writing": "Tekst analyseren",
      "Analyze with AI": "Analyseren met AI",
      "Avg. sentence": "Gem. zin",
      "{0} words": "{0} woorden",
      "Sentence variation": "Zinsvariatie",
      "Vocabulary": "Woordenschat",
      "Writing pattern analysis": "Analyse van schrijfpatronen",
      "No four-word phrase repeats three or more times.": "Geen enkele formulering van vier woorden komt drie keer of vaker voor.",
      "Familiar stock phrases found:": "Gevonden clichés:",
      "AI writing analysis": "AI-schrijfanalyse",
      "Paste some writing first.": "Plak eerst wat tekst.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Plak minstens 40 woorden. Een kort fragment laat geen patroon zien.",
      "Low": "Laag",
      "Moderate": "Gemiddeld",
      "Varied": "Gevarieerd",
      "Narrow": "Smal",
      "Mixed": "Gemengd",
      "Broad": "Breed",
      "\"{0}\" appears {1} times": "‘{0}’ komt {1} keer voor",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Dit zijn schrijfpatronen, geen bewijs van wie de tekst schreef. Vergelijkbare patronen komen voor in bewerkte menselijke teksten en in gegenereerde teksten. Een detector kan zich in beide richtingen vergissen."
    },
    "note": "De controle in je browser gebruikt Engelse woordenlijsten en clichés en werkt daarom het best met Engelse tekst. ‘Analyseren met AI’ werkt ook met Nederlandse tekst."
  },
  "ai-article-compressor": {
    "answer": "Een artikelcompressor maakt een tekst korter door opvulling en herhaalde zinnen te schrappen. ‘Comprimeren met AI’ vraagt Gemini de kern te bewaren. Controleer het resultaat voordat je het publiceert.",
    "content": {
      "about": "De AI-artikelcompressor maakt een lange tekst korter. Lichte compressie vervangt enkele omslachtige formuleringen en ruimt spaties op. Gemiddelde en sterke compressie schrappen ook herhaalde zinnen. Lees het resultaat: als er een zin verdwijnt, kan de betekenis verschuiven.",
      "howTo": [
        "Plak het artikel. Het moet minstens 12 woorden hebben.",
        "Kies lichte, gemiddelde of sterke compressie.",
        "Klik op ‘Artikel inkorten’ voor de regels in je browser, of op ‘Comprimeren met AI’ om Gemini te laten inkorten.",
        "Vergelijk de woordaantallen en kopieer de kortere versie als die nog zegt wat je bedoelde.",
        "‘Wissen’ maakt beide vakken leeg en zet het niveau terug op gemiddeld."
      ],
      "features": [
        "Drie niveaus, zodat een lichte ronde geen zinnen verwijdert.",
        "Woordaantallen voor en na.",
        "Vaste vervangingen, zoals ‘in order to’ naar ‘to’.",
        "Verwijderen van dubbele zinnen bij gemiddeld en sterk."
      ],
      "examples": [
        {
          "title": "Een omslachtige zin",
          "body": "‘In order to finish the form, you need to sign it’ wordt op elk niveau ‘to finish the form, you need to sign it’."
        },
        {
          "title": "Twee keer dezelfde zin",
          "body": "Gemiddeld en sterk houden de eerste en schrappen de latere exacte herhaling. Licht laat beide staan."
        }
      ],
      "explanation": "‘Artikel inkorten’ gebruikt een vaste lijst vervangingen. Sterke compressie slaat ook een latere zin over die met dezelfde zes woorden begint als een eerdere. ‘Comprimeren met AI’ vraagt Gemini het artikel op het gekozen niveau in te korten. Lees beide resultaten voordat je erop vertrouwt.",
      "limitations": "Lichte compressie vervangt een vaste lijst omslachtige formuleringen. Gemiddeld en sterk schrappen ook latere exacte herhalingen, en sterk kan een latere zin overslaan die met dezelfde zes woorden begint. De tekst moet minstens 12 woorden hebben. Bij het inkorten kan een zin verdwijnen die je wilde houden.",
      "tips": [
        "Begin met licht als het artikel al beknopt is.",
        "Gebruik sterk voor een rommelige eerste versie en zet belangrijke zinnen daarna terug.",
        "Dit is geen manier om te verbergen hoe een tekst tot stand kwam."
      ],
      "faqs": [
        {
          "question": "Komt de ingekorte tekst langs een AI-detector?",
          "answer": "Nee. De tool probeert dat niet en beweert ook niet dat het resultaat eruitziet alsof een bepaald soort schrijver het schreef."
        },
        {
          "question": "Blijft mijn boodschap behouden?",
          "answer": "‘Artikel inkorten’ houdt de meeste woorden en haalt wat opvulling en herhaling weg. ‘Comprimeren met AI’ vraagt Gemini de kern en belangrijke feiten te bewaren. Lees de kortere versie voordat je erop vertrouwt."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Artikel inkorten’ draait in dit tabblad en uploadt de tekst niet. ‘Comprimeren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google en geeft een kortere versie terug. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren."
        },
        {
          "question": "Hoe kort ik een artikel in zonder de betekenis te verliezen?",
          "answer": "Schrap eerst omslachtige formuleringen, dan herhaalde punten en daarna hele zinnen die niets toevoegen. Vergelijk het resultaat met het origineel voordat je het gebruikt."
        },
        {
          "question": "Welk compressieniveau kies ik?",
          "answer": "Licht vervangt alleen omslachtige formuleringen. Gemiddeld schrapt ook herhalingen. Sterk kan zinnen overslaan die hetzelfde beginnen, dus controleer dat zorgvuldiger."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "‘Artikel inkorten’ past vaste regels toe in je browser. ‘Comprimeren met AI’ stuurt het artikel via ToolStarHub naar de Gemini-API van Google en geeft een kortere versie terug. Het artikel wordt niet opgeslagen. Controleer het resultaat voordat je het publiceert.",
      "Article": "Artikel",
      "Compression": "Compressie",
      "Light compression": "Lichte compressie",
      "Medium compression": "Gemiddelde compressie",
      "Strong compression": "Sterke compressie",
      "Shorten article": "Artikel inkorten",
      "Compress with AI": "Comprimeren met AI",
      "Copy shorter draft": "Kortere versie kopiëren",
      "Shorter draft": "Kortere versie",
      "The shorter draft will appear here.": "De kortere versie verschijnt hier.",
      "AI shorter draft": "Kortere AI-versie",
      "Copy AI draft": "AI-versie kopiëren",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} woorden voor, {1} woorden na. Lees de kortere versie voordat je hem gebruikt.",
      "Paste an article first.": "Plak eerst een artikel.",
      "Paste a longer article. A few words is not enough to shorten.": "Plak een langer artikel. Een paar woorden is te weinig om in te korten.",
      "Nothing was left after compression. Try a lighter setting.": "Na het inkorten bleef er niets over. Probeer een lichter niveau."
    },
    "note": "‘Artikel inkorten’ werkt met een Engelse lijst formuleringen en verandert Nederlandse tekst daarom nauwelijks. ‘Comprimeren met AI’ werkt ook met Nederlandse tekst."
  },
  "ai-text-humanizer": {
    "answer": "Een AI-teksthumanizer vervangt clichés in je browser op basis van een vaste lijst. ‘Humaniseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google. De tool probeert geen AI-detector te omzeilen en beweert niet dat het resultaat eruitziet alsof een bepaald soort schrijver het schreef.",
    "content": {
      "about": "De AI-teksthumanizer vervangt een vaste lijst clichés door eenvoudigere formuleringen. ‘Tekst herschrijven’ doet dat in dit tabblad. ‘Humaniseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google en geeft een herschreven versie terug. De tekst wordt niet opgeslagen. Controleer het resultaat voordat je het gebruikt. Geen van beide resultaten is een manier om te verbergen hoe een tekst tot stand kwam.",
      "howTo": [
        "Plak de tekst. Die moet minstens 12 woorden en hoogstens 4.000 tekens hebben.",
        "Klik op ‘Tekst herschrijven’ voor de clichélijst in je browser, of op ‘Humaniseren met AI’ om Gemini te laten herschrijven.",
        "Controleer het resultaat. Na een verwijdering kan het volgende woord met een kleine letter blijven beginnen.",
        "Kopieer de herschreven versie als die nog zegt wat je bedoelde.",
        "‘Wissen’ maakt het vak en het lokale resultaat leeg."
      ],
      "features": [
        "Een vaste clichélijst, toegepast in je browser.",
        "Een apart resultaat voor ‘Humaniseren met AI’.",
        "Een limiet van 4.000 tekens voor beide knoppen.",
        "Geen verwijdering van zinnen of dubbele zinnen."
      ],
      "examples": [
        {
          "title": "Standaardopeningen",
          "body": "‘In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.’ wordt ‘here is the setup. you can use a short checklist.’"
        },
        {
          "title": "Een herhaalde zin",
          "body": "‘The form is short. The form is short. Please sign it before noon today and bring a pen.’ houdt beide kopieën. Deze ronde verwijdert geen herhaalde zinnen."
        }
      ],
      "explanation": "‘Tekst herschrijven’ loopt één keer door een vaste lijst. Na een verwijdering wordt niet opnieuw met een hoofdletter begonnen, en een typografische apostrof komt niet overeen. ‘Humaniseren met AI’ vraagt Gemini dezelfde feiten, namen en getallen te houden en de tekst niet tot een samenvatting in te korten. Controleer beide resultaten voordat je ze gebruikt.",
      "limitations": "‘Tekst herschrijven’ heeft minstens 12 woorden nodig, en beide knoppen hoogstens 4.000 tekens. De lokale ronde vervangt alleen formuleringen van de lijst. Een typografische apostrof komt niet overeen. De tool probeert geen AI-detector te omzeilen en beweert niet dat het resultaat eruitziet alsof een bepaald soort schrijver het schreef.",
      "tips": [
        "Controleer het resultaat voordat je het gebruikt. Na een verwijderde formulering kan het volgende woord met een kleine letter blijven beginnen.",
        "Een herhaalde zin blijft staan. Deze ronde verwijdert hem niet.",
        "Geen van beide resultaten is een manier om te verbergen hoe een tekst tot stand kwam."
      ],
      "faqs": [
        {
          "question": "Is de AI-teksthumanizer gratis?",
          "answer": "Ja. Je kunt hier een tekst herschrijven zonder te betalen of een account aan te maken. ‘Tekst herschrijven’ blijft in dit tabblad. ‘Humaniseren met AI’ stuurt de tekst wel via ToolStarHub naar de Gemini-API van Google."
        },
        {
          "question": "Omzeilt dit een AI-detector?",
          "answer": "Nee. De tool probeert dat niet en beweert ook niet dat het resultaat eruitziet alsof een bepaald soort schrijver het schreef."
        },
        {
          "question": "Blijft mijn boodschap behouden?",
          "answer": "‘Tekst herschrijven’ houdt alle woorden die niet op de clichélijst staan. ‘Humaniseren met AI’ krijgt de instructie dezelfde feiten, namen en getallen te houden en de tekst niet samen te vatten. Controleer het resultaat voordat je het gebruikt."
        },
        {
          "question": "Wordt mijn tekst naar een server gestuurd?",
          "answer": "‘Tekst herschrijven’ draait in dit tabblad en uploadt de tekst niet. ‘Humaniseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google en geeft een herschreven versie terug. ToolStarHub slaat die tekst niet op. Bij het gratis abonnement kan Google hem gebruiken om zijn producten te verbeteren."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "‘Tekst herschrijven’ gebruikt een vaste clichélijst in je browser. ‘Humaniseren met AI’ stuurt de tekst via ToolStarHub naar de Gemini-API van Google en geeft een herschreven versie terug. De tekst wordt niet opgeslagen. Controleer het resultaat voordat je het gebruikt. Geen van beide resultaten is een manier om te verbergen hoe een tekst tot stand kwam.",
      "Draft": "Concept",
      "Rewrite text": "Tekst herschrijven",
      "Humanize with AI": "Humaniseren met AI",
      "Copy rewritten draft": "Herschreven versie kopiëren",
      "Rewritten draft": "Herschreven versie",
      "The rewritten draft will appear here.": "De herschreven versie verschijnt hier.",
      "AI rewrite": "AI-herschrijving",
      "Copy AI rewrite": "AI-herschrijving kopiëren",
      "Paste a draft first.": "Plak eerst een tekst.",
      "That text is too long for this rewrite. Shorten it and try again.": "Die tekst is te lang voor deze herschrijving. Maak hem korter en probeer het opnieuw.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Plak een langere tekst. Een paar woorden is te weinig om te herschrijven.",
      "Nothing was left after the rewrite. Try different wording.": "Na het herschrijven bleef er niets over. Probeer andere formuleringen."
    },
    "note": "‘Tekst herschrijven’ werkt met een Engelse clichélijst en verandert Nederlandse tekst daarom nauwelijks. ‘Humaniseren met AI’ werkt ook met Nederlandse tekst."
  }
};

export default data;
