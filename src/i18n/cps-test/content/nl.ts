import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "CPS-test: kliksnelheid en klikken per seconde",
  quickAnswer:
    "Een CPS-test telt hoe vaak je klikt in een vaste tijd en deelt dat door het aantal seconden: je klikken per seconde. Gewoon klikken met één vinger komt vaak uit rond 6 à 7 CPS, het getal dat het vaakst als gemiddelde wordt genoemd. Met jitter- en butterfly-klikken kan het hoger.",
  headings: {
    about: "Wat deze tool doet",
    howTo: "Zo gebruik je het",
    examples: "Voorbeelden",
    features: "Belangrijkste functies",
    howItWorks: "Hoe het werkt",
    tips: "Tips",
    limitations: "Beperkingen",
    faq: "Veelgestelde vragen",
    disclaimer: "Lees de {link} voor wat deze tools niet dekken.",
    disclaimerLink: "disclaimer",
  },
  content: {
    about:
      "Test je kliksnelheid in klikken per seconde (CPS). Kies 1, 5, 10, 15, 30 of 60 seconden en klik of tik zo snel mogelijk op het vak. De timer start bij je eerste klik. Als de tijd om is, zie je je CPS, een niveau van Schildpad tot Bliksem en je record voor die duur. Er zijn ook modi voor rechtermuisklikken en de spatiebalk.",
    howTo: [
      "Kies de duur. 10 seconden is de gangbare kliktest. 1 en 5 seconden meten korte uitbarstingen, 30 en 60 seconden meten uithoudingsvermogen.",
      "Kies wat telt: linkermuisklikken, rechtermuisklikken of de spatiebalk. Op een telefoon of tablet laat je linkermuisklik staan en tik je.",
      "Klik of tik op het vak. De eerste klik telt mee en start de timer.",
      "Blijf klikken tot de timer op 0 staat. Je klikken per seconde, je niveau en je record verschijnen meteen. Met Opnieuw begin je overnieuw.",
    ],
    features: [
      "Zes testduren: 1, 5, 10, 15, 30 en 60 seconden.",
      "Live timer, klikteller en klikken per seconde tijdens het klikken.",
      "Een niveau van Schildpad (minder dan 5 CPS) tot Bliksem (14 CPS of meer).",
      "Een record per duur en per modus, bewaard in deze browser.",
      "Modi voor linkermuisklik, rechtermuisklik en spatiebalk. Spatie en Enter tellen niet in de klikmodi, en een ingedrukte toets herhaalt nooit in de spatiebalkmodus.",
      "Aanraakondersteuning met precies één telling per tik.",
    ],
    examples: [
      {
        title: "Een kliktest van 10 seconden",
        body: "72 klikken in 10 seconden is 72 ÷ 10 = 7,2 CPS, het niveau Konijn.",
      },
      {
        title: "Een uitbarsting van 1 seconde",
        body: "9 klikken in 1 seconde is 9 CPS, het niveau Paard. Korte tests scoren meestal hoger dan lange, omdat je hand geen tijd heeft om moe te worden.",
      },
    ],
    explanation:
      "CPS is het aantal getelde klikken gedeeld door de testduur in seconden. De duur ligt vast: een test van 10 seconden deelt altijd door 10, ook als je laatste klik iets eerder viel. Elke druk telt één keer: een muisknop, een tik op het scherm of een spatie in de spatiebalkmodus. Een ingedrukt gehouden toets, Enter en de klik die een contextmenu zou openen, tellen niet extra.",
    tips: [
      "Laat je pols op het bureau rusten en klik vanuit je vingertop, niet met je hele arm.",
      "Warm op met een test van 5 seconden voordat je een record op 10 seconden of langer probeert.",
      "Probeer jitter- of butterfly-klikken alleen in korte tests en stop als je hand of pols pijn doet.",
    ],
    limitations:
      "De uitslag hangt af van je muis, je touchscreen en je browser, dus scores van verschillende apparaten zijn niet direct vergelijkbaar. Een muis die uit zichzelf dubbelklikt, blaast de telling op. De test kan niet zien of er een autoclicker of macro is gebruikt. Records staan in de lokale opslag van deze browser; sitegegevens wissen haalt ze weg.",
    faqs: [
      {
        question: "Wat is een CPS-test?",
        answer:
          "Een CPS-test meet klikken per seconde. Je klikt zo snel mogelijk gedurende een vaste tijd, en het aantal klikken wordt gedeeld door de seconden. De kliktest van 10 seconden is de bekendste versie.",
      },
      {
        question: "Wat is de gemiddelde CPS?",
        answer:
          "Voor gewoon klikken met één vinger wordt meestal zo'n 6 à 7 CPS genoemd. Zie het als een ruwe richtlijn, niet als gemeten norm. Je hand, je muis en de testduur veranderen de uitslag.",
      },
      {
        question: "Is 10 CPS goed?",
        answer:
          "Ja. 10 CPS over 10 seconden ligt boven wat de meeste mensen met gewoon klikken halen en levert hier het niveau Paard op. Veel mensen die boven 10 CPS komen, gebruiken jitter- of butterfly-klikken.",
      },
      {
        question: "Hoe klik ik sneller?",
        answer:
          "Ontspan je grip, laat je pols op het bureau rusten en klik vanuit de vinger in plaats van de arm. Oefen in korte tests en houd je record bij. Jitter- en butterfly-klikken kunnen je CPS verhogen, maar kosten nauwkeurigheid en belasten je hand meer.",
      },
      {
        question: "Wat is het verschil tussen jitter-klikken en butterfly-klikken?",
        answer:
          "Bij jitter-klikken span je je onderarm aan zodat één vinger op de knop trilt. Bij butterfly-klikken wisselen twee vingers elkaar af op dezelfde knop. Butterfly scoort vaak hoger, maar sommige muizen en sommige gameservers gaan er slecht mee om.",
      },
      {
        question: "Worden mijn scores naar een server gestuurd?",
        answer:
          "Nee. De test draait in dit browsertabblad. Records worden alleen in de lokale opslag van deze browser bewaard, en Records wissen verwijdert ze.",
      },
    ],
  },
};

export default page;
