import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "CPS-Test — Klickgeschwindigkeitstest, Klicks pro Sekunde",
  quickAnswer:
    "Ein CPS-Test zählt, wie oft du in einer festen Zeit klickst, und teilt das durch die Sekunden: Das ergibt deine Klicks pro Sekunde. Normales Klicken mit einem Finger liegt oft bei etwa 6 bis 7 CPS, dem Wert, der am häufigsten als Durchschnitt genannt wird. Mit Jitter- und Butterfly-Klicken geht es höher.",
  headings: {
    about: "Was dieses Tool macht",
    howTo: "So funktioniert die Nutzung",
    examples: "Beispiele",
    features: "Wichtigste Funktionen",
    howItWorks: "Wie es funktioniert",
    tips: "Tipps",
    limitations: "Grenzen",
    faq: "Häufige Fragen",
    disclaimer: "Im {link} steht, was diese Tools nicht abdecken.",
    disclaimerLink: "Haftungsausschluss",
  },
  content: {
    about:
      "Miss deine Klickgeschwindigkeit in Klicks pro Sekunde (CPS). Wähle 1, 5, 10, 15, 30 oder 60 Sekunden und klicke oder tippe so schnell du kannst auf das Feld. Der Timer startet mit dem ersten Klick. Danach siehst du deinen CPS-Wert, eine Stufe von Schildkröte bis Blitz und deinen Bestwert für diese Dauer. Außerdem gibt es einen Rechtsklick- und einen Leertasten-Modus.",
    howTo: [
      "Wähle die Testdauer. 10 Sekunden ist der übliche Klicktest. 1 und 5 Sekunden messen kurze Sprints, 30 und 60 Sekunden die Ausdauer.",
      "Wähle, was zählt: Linksklicks, Rechtsklicks oder die Leertaste. Auf Handy oder Tablet lässt du Linksklicks eingestellt und tippst.",
      "Klicke oder tippe auf das Feld. Der erste Klick zählt mit und startet den Timer.",
      "Klicke weiter, bis der Timer bei 0 ist. Klicks pro Sekunde, Stufe und Bestwert erscheinen sofort. Mit Zurücksetzen fängst du neu an.",
    ],
    features: [
      "Sechs Testdauern: 1, 5, 10, 15, 30 und 60 Sekunden.",
      "Live-Timer, Klickzähler und Klicks pro Sekunde während des Klickens.",
      "Eine Stufe von Schildkröte (unter 5 CPS) bis Blitz (14 CPS oder mehr).",
      "Ein Bestwert pro Dauer und Modus, gespeichert in diesem Browser.",
      "Modi für Linksklick, Rechtsklick und Leertaste. Leertaste und Enter zählen in den Klickmodi nicht, und eine gedrückt gehaltene Taste wiederholt im Leertasten-Modus nie.",
      "Touch-Unterstützung mit genau einer Zählung pro Tipp.",
    ],
    examples: [
      {
        title: "Ein 10-Sekunden-Klicktest",
        body: "72 Klicks in 10 Sekunden ergeben 72 ÷ 10 = 7,2 CPS, also die Stufe Hase.",
      },
      {
        title: "Ein 1-Sekunden-Sprint",
        body: "9 Klicks in 1 Sekunde ergeben 9 CPS, die Stufe Pferd. Kurze Tests bringen meist mehr als lange, weil die Hand keine Zeit hat zu ermüden.",
      },
    ],
    explanation:
      "CPS ist die Zahl der gezählten Klicks geteilt durch die Testdauer in Sekunden. Die Dauer ist fest: Ein 10-Sekunden-Test teilt immer durch 10, auch wenn dein letzter Klick etwas früher kam. Jeder Druck zählt einmal: eine Maustaste, ein Tipp auf den Bildschirm oder die Leertaste im Leertasten-Modus. Eine gehaltene Taste, Enter und der Klick, der ein Kontextmenü öffnen würde, zählen nicht zusätzlich.",
    tips: [
      "Leg das Handgelenk auf den Tisch und klicke aus der Fingerspitze, nicht mit dem ganzen Arm.",
      "Wärm dich mit einem 5-Sekunden-Test auf, bevor du einen Bestwert über 10 Sekunden oder länger versuchst.",
      "Probiere Jitter- oder Butterfly-Klicken nur in kurzen Tests und hör auf, wenn Hand oder Handgelenk schmerzen.",
    ],
    limitations:
      "Das Ergebnis hängt von Maus, Touchscreen und Browser ab, daher lassen sich Werte verschiedener Geräte nicht direkt vergleichen. Eine Maus, die von selbst doppelklickt, treibt die Zählung hoch. Der Test kann nicht erkennen, ob ein Autoklicker oder ein Makro benutzt wurde. Bestwerte liegen im lokalen Speicher dieses Browsers; wer die Websitedaten löscht, löscht auch sie.",
    faqs: [
      {
        question: "Was ist ein CPS-Test?",
        answer:
          "Ein CPS-Test misst Klicks pro Sekunde. Du klickst eine feste Zeit lang so schnell du kannst, und die Klicks werden durch die Sekunden geteilt. Der 10-Sekunden-Klicktest ist die häufigste Variante.",
      },
      {
        question: "Was ist der durchschnittliche CPS-Wert?",
        answer:
          "Für normales Klicken mit einem Finger werden meist etwa 6 bis 7 CPS genannt. Das ist ein grober Richtwert, kein gemessener Standard. Hand, Maus und Testdauer verändern das Ergebnis.",
      },
      {
        question: "Sind 10 CPS gut?",
        answer:
          "Ja. 10 CPS über 10 Sekunden liegen über dem, was die meisten mit normalem Klicken schaffen, und ergeben hier die Stufe Pferd. Viele, die über 10 CPS kommen, nutzen Jitter- oder Butterfly-Klicken.",
      },
      {
        question: "Wie klicke ich schneller?",
        answer:
          "Lockere den Griff, leg das Handgelenk auf den Tisch und klicke aus dem Finger statt aus dem Arm. Übe in kurzen Tests und verfolge deinen Bestwert. Jitter- und Butterfly-Klicken können den CPS-Wert steigern, kosten aber Genauigkeit und belasten die Hand stärker.",
      },
      {
        question: "Was ist der Unterschied zwischen Jitter-Klicken und Butterfly-Klicken?",
        answer:
          "Beim Jitter-Klicken spannst du den Unterarm an, sodass ein Finger auf der Taste vibriert. Beim Butterfly-Klicken wechseln sich zwei Finger auf derselben Taste ab. Butterfly bringt oft mehr, aber manche Mäuse und manche Spielserver kommen damit schlecht zurecht.",
      },
      {
        question: "Werden meine Werte an einen Server gesendet?",
        answer:
          "Nein. Der Test läuft in diesem Browser-Tab. Bestwerte werden nur im lokalen Speicher dieses Browsers gespeichert, und Bestwerte löschen entfernt sie.",
      },
    ],
  },
};

export default page;
