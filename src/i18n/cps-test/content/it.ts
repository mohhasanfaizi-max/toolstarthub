import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "Test CPS — Test di velocità di clic, clic al secondo",
  quickAnswer:
    "Un test CPS conta quante volte clicchi in un tempo fisso e divide per i secondi, così ottieni i clic al secondo. Il clic normale con un dito si aggira spesso sui 6-7 CPS, il valore citato più spesso come media. Jitter click e butterfly click possono andare oltre.",
  headings: {
    about: "Cosa fa questo strumento",
    howTo: "Come si usa",
    examples: "Esempi",
    features: "Funzioni principali",
    howItWorks: "Come funziona",
    tips: "Consigli",
    limitations: "Limiti",
    faq: "Domande frequenti",
    disclaimer: "Leggi il {link} per sapere cosa non coprono questi strumenti.",
    disclaimerLink: "disclaimer",
  },
  content: {
    about:
      "Misura la tua velocità di clic in clic al secondo (CPS). Scegli 1, 5, 10, 15, 30 o 60 secondi, poi clicca o tocca il riquadro il più velocemente possibile. Il timer parte al primo clic. Alla fine vedi il tuo CPS, un livello da Tartaruga a Fulmine e il tuo record per quella durata. Ci sono anche la modalità clic destro e la modalità barra spaziatrice.",
    howTo: [
      "Scegli la durata. 10 secondi è il test di clic più comune. 1 e 5 secondi misurano gli scatti brevi, 30 e 60 secondi la resistenza.",
      "Scegli cosa conta: clic sinistro, clic destro o barra spaziatrice. Su telefono o tablet lascia il clic sinistro e tocca lo schermo.",
      "Clicca o tocca il riquadro. Il primo clic conta e avvia il timer.",
      "Continua a cliccare finché il timer arriva a 0. Clic al secondo, livello e record compaiono subito. Premi Azzera per ricominciare.",
    ],
    features: [
      "Sei durate: 1, 5, 10, 15, 30 e 60 secondi.",
      "Timer, numero di clic e clic al secondo aggiornati dal vivo mentre clicchi.",
      "Un livello da Tartaruga (meno di 5 CPS) a Fulmine (14 CPS o più).",
      "Un record salvato in questo browser per ogni durata e modalità.",
      "Modalità clic sinistro, clic destro e barra spaziatrice. Spazio e Invio non contano nelle modalità clic, e tenere premuto il tasto non ripete mai nella modalità barra spaziatrice.",
      "Supporto touch con un solo conteggio per tocco.",
    ],
    examples: [
      {
        title: "Un test di clic da 10 secondi",
        body: "72 clic in 10 secondi fanno 72 ÷ 10 = 7,2 CPS, il livello Coniglio.",
      },
      {
        title: "Uno scatto da 1 secondo",
        body: "9 clic in 1 secondo fanno 9 CPS, il livello Cavallo. I test brevi di solito danno punteggi più alti di quelli lunghi, perché la mano non fa in tempo a stancarsi.",
      },
    ],
    explanation:
      "Il CPS è il numero di clic contati diviso per la durata del test in secondi. La durata è fissa: un test da 10 secondi divide sempre per 10, anche se l'ultimo clic arriva un po' prima della fine. Ogni pressione conta una volta: un tasto del mouse, un tocco sullo schermo o la barra spaziatrice nella modalità dedicata. Un tasto tenuto premuto, Invio e il clic che aprirebbe il menu contestuale non aggiungono nulla.",
    tips: [
      "Appoggia il polso sulla scrivania e clicca con la punta del dito, non con tutto il braccio.",
      "Fai riscaldamento con un test da 5 secondi prima di puntare a un record da 10 secondi o più.",
      "Prova il jitter click o il butterfly click solo nei test brevi e fermati se ti fa male la mano o il polso.",
    ],
    limitations:
      "Il risultato dipende da mouse, touchscreen e browser, quindi i punteggi di dispositivi diversi non sono direttamente confrontabili. Un mouse che fa doppio clic da solo gonfia il conteggio. Il test non può sapere se è stato usato un autoclicker o una macro. I record restano nella memoria locale di questo browser; cancellare i dati del sito li elimina.",
    faqs: [
      {
        question: "Che cos'è un test CPS?",
        answer:
          "Un test CPS misura i clic al secondo. Clicchi il più velocemente possibile per un tempo fisso e il totale viene diviso per i secondi. Il test di clic da 10 secondi è la versione più diffusa.",
      },
      {
        question: "Qual è il CPS medio?",
        answer:
          "Per il clic normale con un dito si cita di solito un valore di circa 6-7 CPS. Prendilo come indicazione di massima, non come standard misurato. La mano, il mouse e la durata del test cambiano il risultato.",
      },
      {
        question: "10 CPS è un buon risultato?",
        answer:
          "Sì. 10 CPS su 10 secondi è sopra quello che la maggior parte delle persone ottiene con il clic normale e qui vale il livello Cavallo. Molti di quelli che superano i 10 CPS usano il jitter click o il butterfly click.",
      },
      {
        question: "Come posso cliccare più velocemente?",
        answer:
          "Allenta la presa, appoggia il polso sulla scrivania e clicca con il dito invece che con il braccio. Allenati con test brevi e tieni d'occhio il tuo record. Jitter click e butterfly click possono alzare il CPS, ma riducono la precisione e affaticano di più la mano.",
      },
      {
        question: "Che differenza c'è tra jitter click e butterfly click?",
        answer:
          "Nel jitter click irrigidisci l'avambraccio così che un dito vibri sul tasto. Nel butterfly click due dita si alternano sullo stesso tasto. Il butterfly spesso rende di più, ma alcuni mouse e alcuni server di gioco non lo gestiscono bene.",
      },
      {
        question: "I miei punteggi vengono inviati a un server?",
        answer:
          "No. Il test funziona in questa scheda del browser. I record sono salvati solo nella memoria locale di questo browser, e Cancella i record li elimina.",
      },
    ],
  },
};

export default page;
