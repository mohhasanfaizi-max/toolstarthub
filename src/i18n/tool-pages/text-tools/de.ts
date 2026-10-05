import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Ein Wortzähler zeigt für eingefügten Text die Anzahl der Wörter, Zeichen und Sätze sowie eine einfache Schätzung der Lesezeit.",
    "content": {
      "about": "Sehen Sie Wörter, Zeichen, Sätze, Absätze und eine ungefähre Lesezeit für den eingefügten Text. Wer eine Bildunterschrift, ein Abstract oder einen kurzen Beitrag prüft, sieht die Summen beim Tippen mitlaufen. Die Lesezeit geht von etwa 225 Wörtern pro Minute aus – eine Schätzung, keine gemessene Geschwindigkeit.",
      "howTo": [
        "Fügen Sie Text in das Feld ein oder tippen Sie ihn.",
        "Die Zahl der Wörter, Zeichen, Sätze und Absätze aktualisiert sich beim Tippen.",
        "Mit „Beispieltext“ testen Sie den Zähler, mit „Leeren“ leeren Sie das Feld, mit „Kopieren“ kopieren Sie Ihren Text."
      ],
      "examples": [
        {
          "title": "Ein kurzer Satz",
          "body": "„Hello world.“ ergibt 2 Wörter und 1 Satz."
        },
        {
          "title": "Leerzeilen",
          "body": "Text, der durch eine leere Zeile getrennt ist, zählt als zwei Absätze."
        }
      ],
      "explanation": "Wörter sind Gruppen von Zeichen ohne Leerzeichen. Zeichen sind Unicode-Codepunkte, daher zählen Buchstaben, Satzzeichen und die meisten Emojis jeweils als ein Zeichen. Sätze werden an . ! ? und … getrennt. Absätze sind nicht leere Blöcke zwischen Zeilenumbrüchen. Die Lesezeit rechnet mit etwa 225 Wörtern pro Minute.",
      "limitations": "Wörter sind Gruppen von Zeichen ohne Leerzeichen, Sätze werden an . ! ? und … getrennt. Sprachen ohne Leerzeichen zwischen Wörtern werden daher nicht sinnvoll in Wörter zerlegt. Die Lesezeit von etwa 225 Wörtern pro Minute ist eine Schätzung, keine gemessene Lesegeschwindigkeit. Der Zähler prüft weder Grammatik noch Urheberschaft.",
      "faqs": [
        {
          "question": "Ist der Wortzähler kostenlos?",
          "answer": "Ja. Das Zählen von Wörtern, Zeichen, Sätzen und Absätzen ist kostenlos, und Sie brauchen kein Konto."
        },
        {
          "question": "Wird mein Text hochgeladen?",
          "answer": "Nein. Gezählt wird in Ihrem Browser. Der Text wird weder an Tools Star Hub gesendet noch gespeichert."
        },
        {
          "question": "Wie werden zusätzliche Leerzeichen gezählt?",
          "answer": "Mehrere Leerzeichen hintereinander erzeugen keine zusätzlichen Wörter. Als Zeichen werden sie aber mitgezählt."
        },
        {
          "question": "Wie viele Wörter hat eine 5-minütige Rede?",
          "answer": "Das Sprechtempo schwankt, aber 130 bis 150 Wörter pro Minute sind eine gängige Faustregel. Eine 5-minütige Rede hat daher oft etwa 650 bis 750 Wörter."
        },
        {
          "question": "Wie wird die Lesezeit geschätzt?",
          "answer": "Die Wortzahl wird durch etwa 225 Wörter pro Minute geteilt. Das ist eine Schätzung für durchschnittliche Leser, keine gemessene Lesegeschwindigkeit."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Gezählt wird in Ihrem Browser. Nichts wird an einen Server gesendet.",
      "Paste or type text here...": "Text hier einfügen oder eingeben …",
      "Sample text": "Beispieltext",
      "Reading time": "Lesezeit",
      "0 min": "0 Min.",
      "{0} min": "{0} Min."
    }
  },
  "character-counter": {
    "answer": "Ein Zeichenzähler zählt beim Tippen Zeichen, Wörter und Zeilen – Leerzeichen sind in der Hauptsumme enthalten.",
    "content": {
      "about": "Zählen Sie Zeichen, Wörter und Zeilen, dazu eine eigene Summe ohne Leerzeichen. Praktisch, wenn ein Formular, ein Social-Media-Beitrag oder eine Meta-Beschreibung ein Zeichenlimit hat. Ein Emoji zählt als ein Zeichen, und anders als der Wortzähler teilt diese Seite den Text nicht in Sätze auf.",
      "howTo": [
        "Tippen Sie Text in das Feld oder fügen Sie ihn ein.",
        "Zeichen, Wörter und Zeilen werden sofort aktualisiert.",
        "Kopieren Sie die Zeichenzahl oder leeren Sie das Feld, wenn Sie fertig sind."
      ],
      "examples": [
        {
          "title": "Emoji und Buchstaben",
          "body": "„A😀“ sind 2 Zeichen: ein Buchstabe und ein Emoji."
        },
        {
          "title": "Zeilen",
          "body": "Ein Zeilenumbruch beginnt eine neue Zeile. Ein leeres Feld hat 0 Zeilen."
        }
      ],
      "explanation": "Zeichen werden als Unicode-Codepunkte gezählt. Leerzeichen sind in der Hauptsumme enthalten und in der Summe „ohne Leerzeichen“ nicht. Zeilen folgen den Zeilenumbrüchen im Feld, einschließlich einer leeren letzten Zeile.",
      "limitations": "Ein Zeichen ist ein Unicode-Codepunkt, daher zählt ein einzelnes Emoji als eins, auch wenn es aus mehreren Symbolen zusammengesetzt ist. Leerzeichen bleiben in der Hauptsumme und fallen in der Summe ohne Leerzeichen weg. Satzgrenzen werden hier nicht erkannt.",
      "faqs": [
        {
          "question": "Ist der Zeichenzähler kostenlos?",
          "answer": "Ja. Sie können Zeichen, Wörter und Zeilen beim Tippen zählen, ohne zu bezahlen oder ein Konto anzulegen."
        },
        {
          "question": "Verlässt der Text meinen Computer?",
          "answer": "Nein. Der Text bleibt in Ihrem Browser und wird an keinen Server gesendet."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Die Zählung entsteht in diesem Tab. Wenn Sie das Feld leeren, ist der Text von der Seite entfernt; im lokalen Speicher wird er nicht abgelegt."
        },
        {
          "question": "Zählen Leerzeichen als Zeichen?",
          "answer": "Ja, in der Hauptsumme. Der Zähler zeigt außerdem eine zweite Summe ohne Leerzeichen, die manche Formulare und Aufgaben verlangen."
        },
        {
          "question": "Wie viele Zeichen hat ein Emoji?",
          "answer": "Auf dieser Seite zählt ein einzelnes Emoji als ein Unicode-Zeichen. Manche Apps zählen bestimmte Emojis als zwei oder mehr, daher können deren Grenzen leicht abweichen."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Die Zahlen aktualisieren sich beim Tippen. Der Text bleibt in Ihrem Browser.",
      "Type or paste text...": "Text eingeben oder einfügen …",
      "Copy count": "Anzahl kopieren"
    }
  },
  "case-converter": {
    "answer": "Ein Groß-/Kleinschreibungs-Konverter wandelt Text in Großbuchstaben, Kleinbuchstaben, Titelschreibung, camelCase und ähnliche Formate um.",
    "content": {
      "about": "Wechseln Sie zwischen Großbuchstaben, Kleinbuchstaben, Titelschreibung, Satzschreibung, camelCase, PascalCase, snake_case und kebab-case. Entwickler, die Bezeichner umbenennen, und Redakteure, die eine Überschrift korrigieren, ändern die Schreibweise in einem Schritt. Die Satzschreibung folgt englischer Zeichensetzung und wendet keine Großschreibregeln anderer Sprachen an – deutsche Substantive werden also kleingeschrieben.",
      "howTo": [
        "Fügen Sie Text in das Feld ein.",
        "Wählen Sie eine Schreibweise. Die Ausgabe aktualisiert sich sofort.",
        "Kopieren Sie das Ergebnis oder leeren Sie beide Felder."
      ],
      "examples": [
        {
          "title": "Titelschreibung",
          "body": "„hello world“ wird zu „Hello World“. Jedes Wort beginnt mit einem Großbuchstaben."
        },
        {
          "title": "camelCase",
          "body": "„Hello world example“ wird zu helloWorldExample."
        }
      ],
      "explanation": "Groß- und Kleinbuchstaben nutzen die englische Locale. Die Titelschreibung macht den ersten Buchstaben jedes Wortes groß. Die Satzschreibung setzt den Text in Kleinbuchstaben und macht dann den Anfang des Textes sowie Buchstaben nach . ! ? oder … groß – eine einfache, am Englischen orientierte Regel, keine Grammatikprüfung für jede Sprache. camelCase, PascalCase, snake_case und kebab-case werden aus Gruppen von Buchstaben und Ziffern gebildet.",
      "limitations": "Die Satzschreibung folgt englischer Zeichensetzung, nicht den Großschreibregeln anderer Sprachen. camelCase, snake_case und kebab-case behalten Buchstaben- und Zifferngruppen und entfernen die Satzzeichen dazwischen.",
      "faqs": [
        {
          "question": "Ist der Konverter kostenlos?",
          "answer": "Ja. Der Wechsel zwischen Groß-, Klein-, Titelschreibung und den Code-Schreibweisen ist kostenlos und ohne Konto möglich."
        },
        {
          "question": "Funktioniert die Satzschreibung in jeder Sprache?",
          "answer": "Nein. Sie folgt einem einfachen englischen Zeichensetzungsmuster und wendet keine sprachspezifischen Regeln an."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Der eingefügte Text wird in diesem Tab umgewandelt. Er wird weder hochgeladen noch im lokalen Speicher abgelegt."
        },
        {
          "question": "Was ist der Unterschied zwischen Titelschreibung und Satzschreibung?",
          "answer": "Die Titelschreibung schreibt den ersten Buchstaben jedes Wortes groß, wie in einer englischen Überschrift. Die Satzschreibung schreibt nur den ersten Buchstaben jedes Satzes groß, wie im normalen Text."
        },
        {
          "question": "Was sind camelCase, snake_case und kebab-case?",
          "answer": "Das sind Benennungsstile aus dem Programmieren. camelCase verbindet Wörter mit Großbuchstaben (myVariableName), snake_case nutzt Unterstriche (my_variable_name) und kebab-case Bindestriche (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Text zum Umwandeln einfügen",
      "Case": "Schreibweise",
      "Result ({0})": "Ergebnis ({0})",
      "UPPERCASE": "GROSSBUCHSTABEN",
      "lowercase": "kleinbuchstaben",
      "Title Case": "Titelschreibung",
      "Sentence case": "Satzschreibung"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Ein Lorem-ipsum-Generator erzeugt Platzhalter-Absätze, -Sätze oder -Wörter für Layouts und Entwürfe.",
    "content": {
      "about": "Erzeugen Sie Platzhalter-Absätze, -Sätze oder -Wörter aus einer festen lateinischen Wortliste. Designer füllen damit Mockups, wenn der echte Text noch fehlt. Der erste Absatz beginnt mit der klassischen Eröffnungszeile; eine Anfrage endet bei 20 Absätzen, 50 Sätzen oder 500 Wörtern.",
      "howTo": [
        "Wählen Sie Absätze, Sätze oder Wörter.",
        "Legen Sie eine Menge innerhalb der angezeigten Grenzen fest und klicken Sie auf „Erzeugen“.",
        "Kopieren Sie den Text, erzeugen Sie neu oder setzen Sie auf die Standardwerte zurück."
      ],
      "examples": [
        {
          "title": "Drei Absätze",
          "body": "Der erste Absatz beginnt mit der klassischen Zeile „Lorem ipsum dolor sit amet…“ und geht mit gemischten Wörtern aus einer lokalen Wortliste weiter."
        },
        {
          "title": "Fünfzig Wörter",
          "body": "Gut geeignet als kurzer Platzhalter in einem Mockup."
        }
      ],
      "explanation": "Lorem ipsum ist verwürfeltes Latein, das als Blindtext dient, damit ein Layout ohne echten Text beurteilt werden kann. Dieser Generator nutzt eine lokale Wortliste und die kryptografisch starken Zufallswerte des Browsers. Er ruft keine externe API auf. Die Menge ist begrenzt, damit die Seite bedienbar bleibt.",
      "limitations": "Die Ausgabe ist lateinischer Platzhaltertext aus einer festen Wortliste – keine Übersetzung und kein Text für ein echtes Produkt. Absätze enden bei 20, Sätze bei 50 und Wörter bei 500.",
      "faqs": [
        {
          "question": "Ist der Lorem-ipsum-Generator kostenlos?",
          "answer": "Ja. Platzhalter-Absätze, -Sätze oder -Wörter zu erzeugen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Wird der Text aus dem Internet geladen?",
          "answer": "Nein. Die Wörter sind in dieser Seite gespeichert und werden in Ihrem Browser zusammengesetzt."
        },
        {
          "question": "Warum gibt es eine Obergrenze?",
          "answer": "Sehr große Blöcke können einen Tab einfrieren. Absätze enden bei 20, Sätze bei 50 und Wörter bei 500."
        },
        {
          "question": "Was bedeutet Lorem ipsum?",
          "answer": "Lorem ipsum ist durcheinandergewürfeltes Latein, das als Platzhaltertext dient. Es sieht aus wie echter Text, sodass man ein Layout beurteilen kann, ohne dass die Wörter ablenken."
        },
        {
          "question": "Wann sollte ich Platzhaltertext verwenden?",
          "answer": "Für Mockups, Vorlagen und Schrifttests. Ersetzen Sie ihn vor dem Livegang durch echten Text, denn Platzhalter sagen Besuchern nichts."
        }
      ]
    },
    "ui": {
      "Quantity": "Menge",
      "Enter a whole number from {0} to {1}.": "Bitte eine ganze Zahl von {0} bis {1} eingeben.",
      "Enter a quantity.": "Bitte eine Menge eingeben.",
      "Choose between {0} and {1} {2}.": "Wählen Sie zwischen {0} und {1} {2}.",
      "paragraphs": "Absätzen",
      "sentences": "Sätzen",
      "words": "Wörtern",
      "A secure random source is not available in this browser.": "In diesem Browser ist keine sichere Zufallsquelle verfügbar."
    }
  },
  "text-diff": {
    "answer": "Ein Textvergleich stellt Original und geänderten Text auf Ihrem Gerät gegenüber und markiert hinzugefügte, entfernte und unveränderte Zeilen oder Wörter.",
    "content": {
      "about": "Fügen Sie ein Original und eine Überarbeitung ein und vergleichen Sie sie zeilen- oder wortweise. Wer zwei Entwürfe desselben Absatzes prüft, nutzt den Zeilenmodus für ganze geänderte Zeilen und den Wortmodus, wenn ein Satz direkt bearbeitet wurde. Jede Seite muss unter 200.000 Zeichen und unter 4.000 Zeilen bzw. Wörtern bleiben.",
      "howTo": [
        "Fügen Sie links den Originaltext und rechts den geänderten Text ein.",
        "Wählen Sie Zeilen- oder Wortvergleich.",
        "Klicken Sie auf „Vergleichen“. Hinzugefügte, entfernte und unveränderte Blöcke sind beschriftet, nicht nur farbig markiert.",
        "Kopieren Sie den reinen Diff, wenn Sie ihn in einem anderen Editor brauchen. Leeren Sie danach beide Seiten."
      ],
      "examples": [
        {
          "title": "Zwei Fassungen eines Absatzes",
          "body": "Der Zeilenmodus hebt ganze geänderte Zeilen hervor. Der Wortmodus eignet sich besser, wenn ein Satz direkt bearbeitet wurde."
        },
        {
          "title": "Identische Texte",
          "body": "Stimmen beide Seiten überein, zeigt die Zusammenfassung nur unveränderten Inhalt und keine hinzugefügten oder entfernten Blöcke."
        }
      ],
      "explanation": "Der Vergleich der Token läuft in Ihrem Browser. Der Text wird nirgendwohin gesendet, und Entwürfe werden nicht im lokalen Speicher abgelegt. Unterschiede werden als React-Textknoten dargestellt, sodass Inhalte kein HTML einschleusen können. Sehr große Eingaben werden abgelehnt, damit der Tab reaktionsfähig bleibt.",
      "limitations": "Jede Seite muss je nach Modus unter 200.000 Zeichen und unter 4.000 Zeilen bzw. Wörtern bleiben. Die Ansicht beschriftet hinzugefügte, entfernte und unveränderte Blöcke. Sie führt keine Dateien zusammen und öffnet keine Word-Dokumente.",
      "faqs": [
        {
          "question": "Ist der Textvergleich kostenlos?",
          "answer": "Ja. Zwei Texte zeilen- oder wortweise zu vergleichen ist kostenlos, und Sie brauchen kein Konto."
        },
        {
          "question": "Wie vergleiche ich zwei Textdateien?",
          "answer": "Fügen Sie jede Fassung in ein Feld ein, wählen Sie Zeilen oder Wörter und klicken Sie auf „Vergleichen“. Das Ergebnis lässt sich als +/-–Ansicht kopieren."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Beide Felder werden in diesem Tab verglichen. Der Text wird weder an einen Server gesendet noch im lokalen Speicher gespeichert."
        },
        {
          "question": "Was ist ein Diff?",
          "answer": "Ein Diff ist eine Liste der Unterschiede zwischen zwei Fassungen eines Textes: was hinzugefügt, was entfernt wurde und was gleich geblieben ist."
        },
        {
          "question": "Soll ich den Zeilen- oder den Wortmodus nutzen?",
          "answer": "Den Zeilenmodus für Code, Listen und Dateien, in denen sich ganze Zeilen ändern. Den Wortmodus, wenn ein Satz an Ort und Stelle bearbeitet wurde."
        }
      ]
    },
    "ui": {
      "Original": "Original",
      "Modified": "Geändert",
      "Compare": "Vergleichen",
      "Copy diff": "Diff kopieren",
      "Both sides are empty.": "Beide Seiten sind leer.",
      "The two texts are the same.": "Die beiden Texte sind identisch.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Verglichener Text wird als reiner Text dargestellt, nicht als HTML. Die Farbe ist nur ein Hinweis; jeder Block ist zusätzlich als „Hinzugefügt“, „Entfernt“ oder „Unverändert“ beschriftet.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Beide Entwürfe werden in diesem Tab verglichen. Der Text wird an keinen Server gesendet.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Halten Sie jede Seite unter 200.000 Zeichen, damit der Vergleich flüssig bleibt.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Dieser Vergleich verarbeitet bis zu {0} {1}. Kürzen Sie die Eingabe oder teilen Sie sie auf.",
      "lines": "Zeilen",
      "words": "Wörter"
    }
  },
  "duplicate-line-remover": {
    "answer": "Ein Tool zum Entfernen doppelter Zeilen behält das erste Vorkommen jeder Zeile und streicht spätere Wiederholungen – optional mit Trimmen und ohne Beachtung der Groß-/Kleinschreibung.",
    "content": {
      "about": "Behalten Sie die erste Kopie jeder Zeile und streichen Sie die Wiederholungen, in der Reihenfolge des Einfügens. Nützlich für eine Verteilerliste oder ein Log, in dem dieselbe Zeile mehrfach vorkommt. Mit Vergleich ohne Groß-/Kleinschreibung und Trimmen werden apple und Apple zu einer Zeile, und die zuerst eingefügte Schreibweise bleibt erhalten.",
      "howTo": [
        "Fügen Sie mehrzeiligen Text ein. Die Eingabe bleibt unverändert, bis Sie das Tool ausführen.",
        "Optional: ohne Groß-/Kleinschreibung vergleichen, Leerzeichen vor dem Vergleich entfernen oder leere Zeilen streichen.",
        "Klicken Sie auf „Duplikate entfernen“. Das erste Vorkommen jeder Zeile bleibt in der ursprünglichen Reihenfolge erhalten.",
        "Kopieren oder laden Sie die eindeutige Liste herunter. Leeren Sie danach beide Felder."
      ],
      "examples": [
        {
          "title": "Eine Verteilerliste",
          "body": "apple, Apple, apple werden mit Trimmen und Vergleich ohne Groß-/Kleinschreibung zu einem einzigen apple – in der zuerst eingefügten Schreibweise."
        },
        {
          "title": "Leerzeilen",
          "body": "Aktivieren Sie „Leere Zeilen entfernen“, wenn Sie nur nicht leere, eindeutige Zeilen möchten. Sonst gilt eine leere Zeile als ganz normaler Wert."
        }
      ],
      "explanation": "Jede Zeile erhält anhand der Vergleichsoptionen einen Schlüssel. Beim ersten Auftreten eines Schlüssels bleibt die Zeile erhalten; spätere Wiederholungen werden als entfernte Duplikate gezählt. Die Reihenfolge der ersten Vorkommen bleibt bestehen.",
      "limitations": "Die erste passende Zeile bleibt in der eingefügten Reihenfolge erhalten. Die Optionen für Groß-/Kleinschreibung, Trimmen und leere Zeilen bestimmen, was als gleiche Zeile gilt. Spätere Wiederholungen werden gezählt und gestrichen. Mehr als 400.000 Zeichen werden abgelehnt. Das Eingabefeld selbst wird nicht überschrieben.",
      "faqs": [
        {
          "question": "Ist das Tool kostenlos?",
          "answer": "Ja. Doppelte Zeilen zu entfernen und die erste Kopie zu behalten ist kostenlos und ohne Anmeldung möglich."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Das Entfernen der Duplikate läuft in diesem Tab. Die Liste wird weder hochgeladen noch im lokalen Speicher abgelegt."
        },
        {
          "question": "Ändert es das ursprüngliche Feld?",
          "answer": "Nein. Die Eingabe bleibt so, wie Sie sie eingefügt haben. Die eindeutige Liste erscheint im Ergebnisfeld, nachdem Sie das Tool ausgeführt haben."
        },
        {
          "question": "Wie entferne ich Duplikate aus einer Liste?",
          "answer": "Fügen Sie die Liste mit einem Eintrag pro Zeile ein und starten Sie das Tool. Die erste Kopie jeder Zeile bleibt in der ursprünglichen Reihenfolge, spätere Wiederholungen fallen weg."
        },
        {
          "question": "Kann es Unterschiede bei Groß-/Kleinschreibung oder Leerzeichen ignorieren?",
          "answer": "Ja. Schalten Sie die Optionen für Groß-/Kleinschreibung und Leerzeichen ein, damit Zeilen wie Apple und apple oder Zeilen mit zusätzlichen Leerzeichen als gleich gelten."
        }
      ]
    },
    "ui": {
      "One line per row": "Eine Zeile pro Eintrag",
      "Case-insensitive match": "Ohne Groß-/Kleinschreibung vergleichen",
      "Trim spaces before comparing": "Leerzeichen vor dem Vergleich entfernen",
      "Remove empty lines": "Leere Zeilen entfernen",
      "First occurrence of each line is kept, in the original order.": "Das erste Vorkommen jeder Zeile bleibt in der ursprünglichen Reihenfolge erhalten.",
      "Unique lines": "Eindeutige Zeilen",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Wiederholte Zeilen werden in diesem Tab gestrichen. Die Liste wird nicht hochgeladen.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Halten Sie den Text unter 400.000 Zeichen, damit der Browser reaktionsfähig bleibt."
    }
  },
  "whitespace-remover": {
    "answer": "Ein Leerraum-Entferner trimmt Zeilen, fasst Leerzeichen zusammen, wandelt Tabs um und bereinigt Leerzeilen – je nach gewählten Optionen.",
    "content": {
      "about": "Bereinigen Sie überflüssige Leerzeichen, Tabs und Leerzeilen nur mit den Optionen, die Sie aktivieren. Praktisch für ein eingefügtes Log oder eine Liste mit verirrten Einrückungen. „Jede Zeile trimmen“ hat Vorrang vor den einzelnen Optionen für Anfang und Ende; bleiben diese Optionen aus, bleibt die Einrückung erhalten.",
      "howTo": [
        "Fügen Sie Text mit überflüssigen Leerzeichen, Tabs oder Leerzeilen ein.",
        "Wählen Sie nur die gewünschten Bereinigungen. Nichts passiert, bis Sie auf „Text bereinigen“ klicken.",
        "Prüfen Sie Zeilen- und Zeichenzahlen und kopieren oder laden Sie das Ergebnis herunter.",
        "Leeren Sie die Felder, um den Text zu verwerfen. Er wird nicht gespeichert."
      ],
      "examples": [
        {
          "title": "Eingerückte Log-Zeilen",
          "body": "Trimmen Sie jede Zeile – oder entfernen Sie nur führenden Leerraum, wenn Leerzeichen am Ende erhalten bleiben sollen."
        },
        {
          "title": "Gemischte Tabs und Leerzeichen",
          "body": "Wandeln Sie Tabs in 2 oder 4 Leerzeichen um und fassen Sie dann wiederholte Leerzeichen zusammen, wenn Sie ein Layout mit einfachen Leerzeichen möchten."
        }
      ],
      "explanation": "Jede Option ist ausdrücklich zu wählen. „Jede Zeile trimmen“ hat in diesem Durchgang Vorrang vor den einzelnen Kästchen für Anfang und Ende. „Leere Zeilen entfernen“ streicht jede leere Zeile; „Mehrere Leerzeilen zusammenfassen“ lässt eine leere Zeile zwischen Blöcken stehen.",
      "limitations": "Es werden nur die Optionen angewendet, die Sie aktivieren. „Jede Zeile trimmen“ hat in diesem Durchgang Vorrang vor den Kästchen für Anfang und Ende. „Leere Zeilen entfernen“ streicht jede leere Zeile, während das Zusammenfassen eine leere Zeile zwischen Blöcken behält. Mehr als 400.000 Zeichen werden abgelehnt.",
      "faqs": [
        {
          "question": "Ist der Leerraum-Entferner kostenlos?",
          "answer": "Ja. Überflüssige Leerzeichen, Tabs und Leerzeilen zu bereinigen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Die Bereinigung bleibt in diesem Tab. Der Text wird nirgendwohin gesendet und nicht im lokalen Speicher behalten."
        },
        {
          "question": "Zerstört das meine Einrückung?",
          "answer": "Nur wenn Sie Trimmen, das Entfernen am Zeilenanfang oder die Tab-Umwandlung aktivieren. Lassen Sie diese aus, bleibt die Einrückung erhalten."
        },
        {
          "question": "Wie entferne ich doppelte Leerzeichen aus einem Text?",
          "answer": "Schalten Sie die Option ein, die wiederholte Leerzeichen zusammenfasst. Mehrere Leerzeichen innerhalb einer Zeile werden dann zu einem."
        },
        {
          "question": "Wie lösche ich leere Zeilen?",
          "answer": "Mit „Leerzeilen entfernen“ fallen alle leeren Zeilen weg. Mit dem Zusammenfassen von Leerzeilen bleibt eine leere Zeile zwischen Absätzen stehen."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Bereinigungsoptionen",
      "Trim each line": "Jede Zeile trimmen",
      "Remove leading whitespace": "Leerraum am Zeilenanfang entfernen",
      "Remove trailing whitespace": "Leerraum am Zeilenende entfernen",
      "Collapse repeated spaces": "Wiederholte Leerzeichen zusammenfassen",
      "Convert tabs to spaces": "Tabs in Leerzeichen umwandeln",
      "Remove blank lines": "Leere Zeilen entfernen",
      "Collapse multiple blank lines": "Mehrere Leerzeilen zusammenfassen",
      "Trim entire document": "Gesamtes Dokument trimmen",
      "Tab width": "Tab-Breite",
      "2 spaces": "2 Leerzeichen",
      "4 spaces": "4 Leerzeichen",
      "Lines before": "Zeilen vorher",
      "Lines after": "Zeilen nachher",
      "Characters before": "Zeichen vorher",
      "Characters after": "Zeichen nachher",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Leerzeichen, Tabs und Leerzeilen werden in diesem Tab bereinigt. Der Text wird an keinen Server gesendet."
    }
  },
  "line-sorter": {
    "answer": "Ein Zeilensortierer ordnet mehrzeiligen Text alphabetisch, numerisch oder nach Länge – optional mit Entfernen von Duplikaten.",
    "content": {
      "about": "Sortieren Sie einen Eintrag pro Zeile von A bis Z, von Z bis A, nach einer führenden Zahl oder nach Länge. Praktisch, wenn eine Namensliste oder ein nummerierter Export ohne Tabellenkalkulation geordnet werden soll. Numerisch steht 10 nach 2, und eine Zeile ohne führende Zahl kommt nach den nummerierten Zeilen.",
      "howTo": [
        "Fügen Sie einen Eintrag pro Zeile ein.",
        "Wählen Sie A→Z, Z→A, numerische Reihenfolge oder Länge. Stellen Sie Groß-/Kleinschreibung, Trimmen, leere Zeilen und Duplikate nach Bedarf ein.",
        "Klicken Sie auf „Zeilen sortieren“. Gleiche Einträge behalten ihre ursprüngliche Reihenfolge zueinander.",
        "Kopieren oder laden Sie die sortierte Liste herunter."
      ],
      "examples": [
        {
          "title": "Namen",
          "body": "A→Z ohne Beachtung der Groß-/Kleinschreibung stellt ada und Ada nebeneinander; bei Gleichheit bleibt die zuerst eingefügte Schreibweise vorn."
        },
        {
          "title": "Nummerierte Zeilen",
          "body": "„Numerisch aufsteigend“ liest eine führende Zahl, daher folgt 10 auf 2. Zeilen ohne Zahl kommen nach den nummerierten Zeilen."
        }
      ],
      "explanation": "Die Sortierung ist stabil: Gelten zwei Zeilen als gleich, bleibt die früher eingegebene vorn. Die numerischen Modi lesen eine führende ganze Zahl oder Dezimalzahl. Das optionale Entfernen von Duplikaten nutzt denselben Vergleichsschlüssel wie Groß-/Kleinschreibung und Trimmen.",
      "limitations": "Die Modi sind A bis Z, Z bis A, numerisch aufsteigend, numerisch absteigend, kürzeste und längste zuerst. Gleiche Zeilen behalten ihre ursprüngliche Reihenfolge. Der numerische Modus liest eine führende Zahl; eine Zeile ohne Zahl kommt nach den nummerierten Zeilen. Mehr als 400.000 Zeichen werden abgelehnt.",
      "faqs": [
        {
          "question": "Ist der Zeilensortierer kostenlos?",
          "answer": "Ja. Eine Liste von Zeilen zu sortieren ist kostenlos und ohne Konto möglich."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Sortiert wird in diesem Tab. Die Zeilen werden weder an einen Server gesendet noch im lokalen Speicher gespeichert."
        },
        {
          "question": "Bleiben leere Zeilen erhalten?",
          "answer": "Ja, außer Sie wählen „Leere Zeilen ignorieren“. In den Buchstabenmodi werden sie als leere Zeichenfolgen sortiert."
        },
        {
          "question": "Wie sortiere ich eine Liste alphabetisch?",
          "answer": "Fügen Sie einen Eintrag pro Zeile ein und wählen Sie A bis Z oder Z bis A für die umgekehrte Reihenfolge. Gleiche Zeilen behalten ihre ursprüngliche Reihenfolge."
        },
        {
          "question": "Wie sortiere ich Zeilen nach Zahlen?",
          "answer": "Wählen Sie numerisch aufsteigend oder absteigend. Jede Zeile wird nach der Zahl an ihrem Anfang sortiert, sodass 2 vor 10 kommt."
        }
      ]
    },
    "ui": {
      "One item per line": "Ein Eintrag pro Zeile",
      "Numeric ascending": "Numerisch aufsteigend",
      "Numeric descending": "Numerisch absteigend",
      "Shortest → longest": "Kürzeste → längste",
      "Longest → shortest": "Längste → kürzeste",
      "Trim before comparing": "Vor dem Vergleich trimmen",
      "Ignore empty lines": "Leere Zeilen ignorieren",
      "Sort lines": "Zeilen sortieren",
      "Result lines": "Ergebniszeilen",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Die Zeilen werden in diesem Tab sortiert. Die Liste wird nicht an Tools Star Hub gesendet."
    }
  },
  "find-and-replace": {
    "answer": "Suchen und Ersetzen ändert den ersten oder jeden Treffer in eingefügtem Text. Die Beachtung der Groß-/Kleinschreibung lässt sich ein- oder ausschalten.",
    "content": {
      "about": "Fügen Sie Text ein, geben Sie den Suchbegriff und den Ersatz ein. Sie können den ersten oder jeden Treffer ändern und die Groß-/Kleinschreibung ignorieren.",
      "howTo": [
        "Fügen Sie den Originaltext ein.",
        "Geben Sie den Suchtext ein. Ein leeres Suchfeld wird abgelehnt.",
        "Geben Sie den Ersatz ein. Lassen Sie ihn leer, um die Treffer zu löschen.",
        "Wählen Sie „Ersten ersetzen“ oder „Alle ersetzen“ und schalten Sie „Groß-/Kleinschreibung beachten“ ein oder aus.",
        "Klicken Sie auf „Ersetzen“ und kopieren Sie dann das Ergebnis oder leeren Sie das Formular."
      ],
      "features": [
        "Erster Treffer oder jeder nicht überlappende Treffer.",
        "Suche mit Beachtung der Groß-/Kleinschreibung oder ohne – der Ersatz wird dabei immer genau so eingefügt, wie Sie ihn eingegeben haben.",
        "Eine Anzeige, wie viele Ersetzungen vorgenommen wurden."
      ],
      "examples": [
        {
          "title": "Einen wiederholten Namen korrigieren",
          "body": "Original: „Ana sent the file. ana sent the notes.“ Suchen: ana. Ersatz: Ana. Groß-/Kleinschreibung aus, „Alle ersetzen“. Beide Namen werden zu Ana, die Anzahl ist 2."
        },
        {
          "title": "Nur die erste Überschrift ändern",
          "body": "Ein Entwurf enthält dreimal „Draft“. „Ersten ersetzen“ ändert das erste Vorkommen und lässt die anderen beiden stehen. Die Anzahl ist 1."
        }
      ],
      "explanation": "Die Suche durchläuft den Originaltext von vorn. Nach einem Treffer beginnt die nächste Suche hinter diesem Treffer, ein eingefügter Ersatz wird also nicht erneut durchsucht. Der Modus ohne Groß-/Kleinschreibung vergleicht kleingeschriebene Kopien, ändert den umgebenden Text aber nicht.",
      "tips": [
        "Wenn Sie ein Muster wie „beliebige Zahl“ brauchen, nutzen Sie den Regex-Tester. Dieses Tool sucht genau die Zeichen, die Sie eingeben.",
        "Ein Ersatz, der den Suchtext enthält, wird unverändert eingefügt und im selben Durchgang nicht erneut ersetzt."
      ],
      "limitations": "Dies ist kein regulärer Ausdruck. Wortgrenzen werden nicht beachtet, und Text in Anführungszeichen wird nicht übersprungen. Überlappende Treffer werden nicht doppelt gezählt.",
      "faqs": [
        {
          "question": "Kann ich die Treffer löschen?",
          "answer": "Ja. Lassen Sie das Ersatzfeld leer. Jeder Treffer wird entfernt und zählt trotzdem als Ersetzung."
        },
        {
          "question": "Warum wurde ein kurzes Wort in einem längeren Wort geändert?",
          "answer": "Die Suche ist eine Zeichensuche. Wer „cat“ sucht, trifft auch den Anfang von „catalog“. Fügen Sie Leerzeichen hinzu, wenn Sie nur ganze Wörter wollen, oder nutzen Sie den Regex-Tester mit einer Wortgrenze."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Der Text und der Suchbegriff bleiben in diesem Tab. Sie werden an keinen Server gesendet."
        },
        {
          "question": "Wie ersetze ich ein Wort überall in einem Text?",
          "answer": "Geben Sie das gesuchte Wort und den Ersatz ein, wählen Sie „Alle ersetzen“ und kopieren Sie das Ergebnis. Schalten Sie die Groß-/Kleinschreibung ein, wenn sie eine Rolle spielt."
        },
        {
          "question": "Unterstützt Suchen und Ersetzen reguläre Ausdrücke?",
          "answer": "Nein. Es sucht genau den Text, den Sie eingeben. Für Mustersuchen testen Sie das Muster zuerst im Regex-Tester."
        }
      ]
    },
    "ui": {
      "Replacement": "Ersatz",
      "How many matches": "Welche Treffer",
      "Replace first": "Ersten ersetzen",
      "Replace all": "Alle ersetzen",
      "Case-sensitive": "Groß-/Kleinschreibung beachten",
      "{0} replacement.": "{0} Ersetzung.",
      "{0} replacements.": "{0} Ersetzungen.",
      "Paste the text you want to change.": "Fügen Sie den Text ein, den Sie ändern möchten.",
      "Enter the text to find.": "Geben Sie den Suchtext ein."
    }
  },
  "remove-line-breaks": {
    "answer": "„Zeilenumbrüche entfernen“ verbindet umbrochene Zeilen mit Leerzeichen, löscht die Umbrüche oder behält eine Leerzeile zwischen Absätzen.",
    "content": {
      "about": "Fügen Sie Text ein, der auf viele Zeilen umbrochen wurde. Sie können die Zeilen mit Leerzeichen verbinden, die Umbrüche löschen oder eine Leerzeile zwischen Absätzen behalten.",
      "howTo": [
        "Fügen Sie den Originaltext ein. Das Feld zeigt die Zeilenumbrüche weiterhin an.",
        "Wählen Sie eine Option: Umbrüche durch Leerzeichen ersetzen, Umbrüche entfernen oder Absatzumbrüche behalten.",
        "Klicken Sie auf „Text bereinigen“.",
        "Kopieren Sie den bereinigten Text oder leeren Sie beide Felder."
      ],
      "features": [
        "Das Original bleibt im ersten Feld, der bereinigte Text steht separat.",
        "Der Leerzeichen-Modus verbindet Zeilen und fasst wiederholte Leerzeichen zusammen.",
        "Der Absatz-Modus behält eine Leerzeile dort, wo bereits eine war."
      ],
      "examples": [
        {
          "title": "Eine umbrochene E-Mail",
          "body": "Drei kurze Zeilen eines Satzes werden zu einer Zeile mit einfachen Leerzeichen zwischen den Wörtern, wenn Sie „Zeilenumbrüche durch Leerzeichen ersetzen“ wählen."
        },
        {
          "title": "Zwei Absätze",
          "body": "Ein Block, eine Leerzeile, dann ein weiterer Block. „Absatzumbrüche behalten“ verbindet die Zeilen innerhalb jedes Blocks und lässt eine Leerzeile dazwischen."
        }
      ],
      "explanation": "Zeilenenden von Windows und älteren Macs gelten als derselbe Umbruch. Der Leerzeichen-Modus macht aus jeder Folge von Umbrüchen ein Leerzeichen und trimmt dann die Enden. Der Entfernen-Modus löscht die Umbrüche und kann dabei das letzte Wort einer Zeile mit dem ersten der nächsten verkleben. Der Absatz-Modus teilt zuerst an Leerzeilen und verbindet dann die Zeilen innerhalb jedes Absatzes.",
      "tips": [
        "Für Fließtext eignet sich der Leerzeichen-Modus. Nutzen Sie „Entfernen“ nur, wenn Umbrüche mitten in einem Token stehen, etwa in einer langen, auf mehrere Zeilen verteilten Zahl.",
        "Wenn ein Gedicht oder eine Liste ihre Zeilen behalten soll, wenden Sie dieses Tool nicht darauf an."
      ],
      "limitations": "Das Tool kann einen umbrochenen Satz nicht von einer Liste unterscheiden. Im Absatz-Modus gilt ein einzelner Zeilenumbruch als Umbruch innerhalb des Absatzes. Nur eine Leerzeile hält Absätze getrennt.",
      "faqs": [
        {
          "question": "Werden Leerzeichen innerhalb einer Zeile entfernt?",
          "answer": "Der Leerzeichen-Modus fasst wiederholte Leerzeichen und Tabs zusammen. Der Entfernen- und der Absatz-Modus lassen die Leerzeichen innerhalb einer Zeile unverändert."
        },
        {
          "question": "Was passiert, wenn ich nur Leerzeichen einfüge?",
          "answer": "Die Seite bittet Sie, Text einzufügen. Reiner Leerraum genügt nicht."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Der eingefügte Text wird in diesem Tab umgeschrieben. Er wird nicht hochgeladen."
        },
        {
          "question": "Wie entferne ich Zeilenumbrüche aus Text, der aus einem PDF kopiert wurde?",
          "answer": "Fügen Sie den Text ein und wählen Sie die Option, die Absätze erhält. Einfache Zeilenumbrüche innerhalb eines Absatzes werden zu Leerzeichen, Leerzeilen zwischen Absätzen bleiben."
        },
        {
          "question": "Was ist der Unterschied zwischen Ersetzen und Entfernen von Zeilenumbrüchen?",
          "answer": "Beim Ersetzen wird jeder Umbruch zu einem Leerzeichen, sodass die Wörter getrennt bleiben. Beim Entfernen verschwindet der Umbruch, und das Ende einer Zeile hängt direkt am Anfang der nächsten."
        }
      ]
    },
    "ui": {
      "Line breaks": "Zeilenumbrüche",
      "Replace line breaks with spaces": "Zeilenumbrüche durch Leerzeichen ersetzen",
      "Remove line breaks": "Zeilenumbrüche entfernen",
      "Keep paragraph breaks": "Absatzumbrüche behalten",
      "Cleaned text": "Bereinigter Text",
      "Paste some text first.": "Bitte zuerst Text einfügen."
    }
  },
  "add-line-numbers": {
    "answer": "„Zeilennummern hinzufügen“ setzt vor jede Zeile eine Nummer und ein Trennzeichen, ohne die Zeile selbst zu verändern.",
    "content": {
      "about": "Fügen Sie mehrere Zeilen ein und setzen Sie vor jede eine Nummer. Sie bestimmen die Startnummer und die Zeichen zwischen Nummer und Zeile.",
      "howTo": [
        "Fügen Sie den Text ein. Jede Zeile bleibt so, wie Sie sie geschrieben haben.",
        "Legen Sie die Startnummer fest. Üblich ist 1; auch ganze Zahlen unter 0 sind erlaubt.",
        "Legen Sie das Trennzeichen fest. Standard sind ein Punkt und ein Leerzeichen.",
        "Klicken Sie auf „Nummern hinzufügen“ und kopieren Sie dann die nummerierten Zeilen oder leeren Sie das Formular."
      ],
      "features": [
        "Der Zeilentext wird weder getrimmt noch umgeschrieben.",
        "Ein eigenes Trennzeichen, etwa \") \" oder ein Tab.",
        "Eine andere Startnummer als 1."
      ],
      "examples": [
        {
          "title": "Eine dreizeilige Liste",
          "body": "Die Zeilen „Erste Zeile“, „Zweite Zeile“ und „Dritte Zeile“ werden mit Start 1 und Trennzeichen „. “ zu „1. Erste Zeile“, „2. Zweite Zeile“ und „3. Dritte Zeile“."
        },
        {
          "title": "Eine Liste bei 10 fortsetzen",
          "body": "Mit Startnummer 10 und Trennzeichen \") \" wird aus der ersten eingefügten Zeile „10) “ plus die ursprüngliche Zeile."
        }
      ],
      "explanation": "Der Text wird an Zeilenumbrüchen geteilt. Jede Zeile erhält die Startnummer plus ihre Position, dann das Trennzeichen, dann die ursprünglichen Zeichen der Zeile. Auch leere Zeilen werden nummeriert, denn sie sind ebenfalls Zeilen.",
      "tips": [
        "Wenn der Text bereits Nummern hat, entfernen Sie diese zuerst, sonst steht vor jeder Zeile eine doppelte Nummer.",
        "Nutzen Sie einen Tab als Trennzeichen, wenn Sie das Ergebnis in eine Tabelle einfügen möchten."
      ],
      "limitations": "Ein abschließender Zeilenumbruch erzeugt eine leere letzte Zeile, die ebenfalls nummeriert wird. Automatische Umbrüche im Feld sind keine neuen Zeilen – nur echte Zeilenumbrüche zählen.",
      "faqs": [
        {
          "question": "Ändert das Rechtschreibung oder Abstände?",
          "answer": "Nein. Die Zeichen nach dem Trennzeichen sind die ursprüngliche Zeile."
        },
        {
          "question": "Kann ich bei 0 beginnen?",
          "answer": "Ja. 0 und negative ganze Zahlen sind erlaubt. Eine Dezimalzahl wie 1,5 nicht."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Die Zeilen und die Startnummer bleiben in diesem Tab. Sie werden an keinen Server gesendet."
        },
        {
          "question": "Wie nummeriere ich Zeilen in einem Text?",
          "answer": "Fügen Sie den Text ein, legen Sie Startnummer und Trennzeichen fest, etwa einen Punkt und ein Leerzeichen, fügen Sie dann die Nummern hinzu und kopieren Sie das Ergebnis."
        },
        {
          "question": "Werden leere Zeilen nummeriert?",
          "answer": "Ja. Jeder echte Zeilenumbruch beginnt eine neue nummerierte Zeile, auch leere Zeilen und eine leere letzte Zeile."
        }
      ]
    },
    "ui": {
      "Starting number": "Startnummer",
      "Separator": "Trennzeichen",
      "Placed between the number and the original line.": "Steht zwischen der Nummer und der ursprünglichen Zeile.",
      "Add numbers": "Nummern hinzufügen",
      "Numbered lines": "Nummerierte Zeilen",
      "Paste the lines you want to number.": "Fügen Sie die Zeilen ein, die nummeriert werden sollen.",
      "starting number": "Startnummer",
      "Enter a whole number for the starting line.": "Bitte eine ganze Zahl als Startnummer eingeben."
    }
  },
  "number-to-words": {
    "answer": "Ein Zahl-in-Worte-Konverter schreibt ganze Zahlen von -999.999.999 bis 999.999.999 auf Englisch aus. Er kann einfache englische Zahlwörter auch wieder in eine Zahl umwandeln.",
    "content": {
      "about": "Schreiben Sie eine ganze Zahl auf Englisch aus oder wandeln Sie einfache englische Zahlwörter zurück in eine Zahl. Der Bereich reicht von -999.999.999 bis 999.999.999.",
      "howTo": [
        "Wählen Sie „Zahl in Worte“ oder „Worte in Zahl“.",
        "Geben Sie die Zahl oder die Wörter ein.",
        "Klicken Sie auf „Umwandeln“."
      ],
      "features": [
        "Ganze Zahlen bis in die Millionen.",
        "Negative Zahlen und null.",
        "Rückwärts-Lesen einfacher englischer Zahlwörter."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "Auf Englisch: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "Der Konverter gliedert die Zahl in Millionen, Tausender und den Rest. Zehner und Einer von 21 bis 99 werden mit Bindestrich geschrieben. Das Wort „and“ wird nicht verwendet. Führende Nullen werden ignoriert, 007 ist also seven.",
      "tips": [
        "Schreiben Sie twenty-one mit Bindestrich oder als twenty one.",
        "Für negative Zahlen verwenden Sie minus."
      ],
      "limitations": "Dezimalzahlen, Milliarden und Formulierungen mit dem Wort „and“ werden nicht unterstützt. Die Ausgabe ist immer Englisch, nicht Deutsch.",
      "faqs": [
        {
          "question": "Wie schreibt man eine Zahl in Worten?",
          "answer": "Die Seite gliedert Millionen, Tausender und Hunderter und schreibt dann Zehner und Einer aus. 123 ist one hundred twenty-three."
        },
        {
          "question": "Welcher Bereich wird unterstützt?",
          "answer": "Ganze Zahlen von -999.999.999 bis 999.999.999."
        },
        {
          "question": "Was passiert mit führenden Nullen?",
          "answer": "Sie werden ignoriert. 007 ist seven."
        },
        {
          "question": "Lassen sich Dezimalzahlen umwandeln?",
          "answer": "Nein. Geben Sie eine ganze Zahl ein."
        },
        {
          "question": "Können Wörter wieder in eine Zahl umgewandelt werden?",
          "answer": "Ja, für einfache englische Wörter in diesem Bereich, etwa one hundred twenty-three oder minus twenty."
        },
        {
          "question": "Werden diese Zahlen an einen Server gesendet?",
          "answer": "Nein. Die Zahl oder die Wörter bleiben während der Umwandlung in diesem Tab. Sie werden nicht hochgeladen."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Ganze Zahlen von -999.999.999 bis 999.999.999. Die Wörter sind amerikanisches Englisch ohne das Wort „and“, etwa one hundred twenty-three. Führende Nullen werden ignoriert.",
      "Number to words": "Zahl in Worte",
      "Words to number": "Worte in Zahl",
      "Number words": "Zahlwörter (Englisch)",
      "Enter a whole number. Decimals are outside this converter.": "Bitte eine ganze Zahl eingeben. Dezimalzahlen werden nicht unterstützt.",
      "Enter a whole number using digits.": "Bitte eine ganze Zahl in Ziffern eingeben.",
      "This converter supports -999,999,999 through 999,999,999.": "Dieser Konverter unterstützt -999.999.999 bis 999.999.999.",
      "Enter number words.": "Bitte englische Zahlwörter eingeben.",
      "Enter number words after minus.": "Bitte nach minus englische Zahlwörter eingeben.",
      "This converter does not use the word and.": "Dieser Konverter verwendet das Wort „and“ nicht.",
      "\"{0}\" is not a supported number word.": "„{0}“ ist kein unterstütztes Zahlwort.",
      "That number is outside -999,999,999 through 999,999,999.": "Diese Zahl liegt außerhalb von -999.999.999 bis 999.999.999."
    },
    "note": "Dieses Tool schreibt und liest Zahlwörter nur auf Englisch. Bedienung und Hilfetexte sind übersetzt."
  },
  "morse-code": {
    "answer": "Ein Morsecode-Übersetzer wandelt Text aus A–Z und 0–9 in internationales Morse um oder liest Morsecode zurück in Text. Buchstaben werden durch Leerzeichen, Wörter durch einen Schrägstrich getrennt.",
    "content": {
      "about": "Wandeln Sie Buchstaben und Ziffern in internationalen Morsecode um oder Morsecode zurück in Text.",
      "howTo": [
        "Wählen Sie „Text in Morse“ oder „Morse in Text“.",
        "Geben Sie A–Z, 0–9 oder Morsecode aus Punkten, Strichen, Leerzeichen und / ein.",
        "Klicken Sie auf „Umwandeln“."
      ],
      "features": [
        "A–Z und 0–9.",
        "Leerzeichen zwischen Buchstaben und / zwischen Wörtern.",
        "Eine klare Fehlermeldung bei einem nicht unterstützten Zeichen."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO ist .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Jeder Buchstabe und jede Ziffer hat ein internationales Morsemuster. Ein Leerzeichen trennt Buchstaben, ein Schrägstrich trennt Wörter. Kleinbuchstaben werden als Großbuchstaben gelesen. Ein Zeichen außerhalb von A–Z und 0–9 stoppt die Umwandlung.",
      "tips": [
        "SOS schreibt man ... --- ...",
        "Lassen Sie zwischen Morsebuchstaben genau ein Leerzeichen."
      ],
      "limitations": "Satzzeichen und Buchstaben außerhalb von A–Z (etwa Ä, Ö, Ü oder ß) werden nicht umgewandelt. Ein unbekanntes Morsemuster wird abgelehnt.",
      "faqs": [
        {
          "question": "Wie schreibt man Text in Morsecode?",
          "answer": "Jeder Buchstabe wird zu seinem internationalen Morsemuster. Buchstaben werden durch ein Leerzeichen getrennt, Wörter durch /."
        },
        {
          "question": "Funktionieren Kleinbuchstaben?",
          "answer": "Ja. Kleinbuchstaben werden als Großbuchstaben gelesen."
        },
        {
          "question": "Was trennt Wörter?",
          "answer": "Ein Schrägstrich trennt Wörter. Ein Leerzeichen trennt Buchstaben innerhalb eines Wortes."
        },
        {
          "question": "Was passiert, wenn ich Satzzeichen eingebe?",
          "answer": "Die Seite nennt das nicht unterstützte Zeichen und rät keinen Code dafür."
        },
        {
          "question": "Wird der Text irgendwohin gesendet?",
          "answer": "Nein. Die Umwandlung läuft in Ihrem Browser."
        },
        {
          "question": "Werden die Eingaben an einen Server gesendet?",
          "answer": "Nein. Buchstaben und Morsemuster werden in diesem Tab umgewandelt und an keinen Server gesendet."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Internationales Morse für A–Z und 0–9. Buchstaben werden durch ein Leerzeichen getrennt, Wörter durch /. Nicht unterstützte Zeichen werden abgelehnt.",
      "Text to Morse": "Text in Morse",
      "Morse to text": "Morse in Text",
      "Morse code": "Morsecode",
      "Morse": "Morse",
      "Enter text to convert.": "Bitte Text zum Umwandeln eingeben.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "„{0}“ wird nicht unterstützt. Verwenden Sie A–Z und 0–9.",
      "Enter Morse code to convert.": "Bitte Morsecode zum Umwandeln eingeben.",
      "Morse code can use only dots, dashes, spaces, and /.": "Morsecode darf nur Punkte, Striche, Leerzeichen und / enthalten.",
      "A word separator is missing letters.": "Bei einem Worttrenner fehlen Buchstaben.",
      "\"{0}\" is not a supported Morse letter.": "„{0}“ ist kein unterstützter Morsebuchstabe."
    }
  },
  "roman-numeral-converter": {
    "answer": "Ein Konverter für römische Zahlen wandelt ganze Zahlen von 1 bis 3999 in die Standardschreibweise um und liest diese Zahlzeichen zurück in Zahlen. Werte über 3999 werden nicht unterstützt.",
    "content": {
      "about": "Wandeln Sie ganze Zahlen von 1 bis 3999 in römische Zahlen in Standardschreibweise um und diese wieder zurück in Zahlen.",
      "howTo": [
        "Wählen Sie „Zahl in römisch“ oder „Römisch in Zahl“.",
        "Geben Sie eine Zahl von 1 bis 3999 ein oder eine römische Zahl aus I, V, X, L, C, D und M.",
        "Klicken Sie auf „Umwandeln“."
      ],
      "features": [
        "Standard-Subtraktionsschreibweise.",
        "Umwandlung in beide Richtungen.",
        "Ablehnung von Zahlzeichen, die nicht der Standardform entsprechen."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 ist MCMXCIV."
        }
      ],
      "explanation": "Die Seite bildet Zahlen aus M, CM, D, CD, C, XC, L, XL, X, IX, V, IV und I. Eine römische Zeichenfolge wird nur akzeptiert, wenn sie die Standardform ihres Wertes ist. IIII, IC und IL werden abgelehnt. Zahlen über 3999, auch in Vinculum-Schreibweise, werden nicht unterstützt.",
      "tips": [
        "4 ist IV, nicht IIII.",
        "9 ist IX, nicht VIIII."
      ],
      "limitations": "Der Bereich ist 1 bis 3999. Null, negative und größere Zahlen werden abgelehnt.",
      "faqs": [
        {
          "question": "Wie wandelt man eine Zahl in eine römische Zahl um?",
          "answer": "Die Seite nutzt die Standard-Subtraktionsschreibweise. 4 ist IV, 9 ist IX, 40 ist XL und 3999 ist MMMCMXCIX."
        },
        {
          "question": "Welche Zahlen werden unterstützt?",
          "answer": "Ganze Zahlen von 1 bis 3999."
        },
        {
          "question": "Warum wird IIII abgelehnt?",
          "answer": "IIII ist nicht die Standardform von 4. Die Standardform ist IV."
        },
        {
          "question": "Lassen sich Zahlen über 3999 umwandeln?",
          "answer": "Nein. Erweiterte Schreibweisen für größere Zahlen werden nicht unterstützt."
        },
        {
          "question": "Kann eine römische Zahl zurück in eine Zahl umgewandelt werden?",
          "answer": "Ja, wenn es eine Standardform zwischen 1 und 3999 ist."
        },
        {
          "question": "Werden diese Zahlen an einen Server gesendet?",
          "answer": "Nein. Die Zahl oder das Zahlzeichen wird in diesem Tab umgewandelt und nicht hochgeladen."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Römische Zahlen in Standardschreibweise von 1 bis 3999. Zahlen über 3999, auch in Vinculum-Schreibweise, werden nicht unterstützt. Ungültige Folgen wie IIII werden abgelehnt.",
      "Number to Roman": "Zahl in römisch",
      "Roman to number": "Römisch in Zahl",
      "Roman numeral": "Römische Zahl",
      "Enter a whole number from 1 through 3999.": "Bitte eine ganze Zahl von 1 bis 3999 eingeben.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Dieser Konverter unterstützt 1 bis 3999. Zahlen über 3999 werden nicht unterstützt.",
      "Enter a Roman numeral.": "Bitte eine römische Zahl eingeben.",
      "Use only I, V, X, L, C, D, and M.": "Verwenden Sie nur I, V, X, L, C, D und M.",
      "\"{0}\" is not a valid Roman numeral.": "„{0}“ ist keine gültige römische Zahl."
    }
  },
  "text-repeater": {
    "answer": "Ein Textwiederholer kopiert ein Wort, eine Phrase oder eine Zeile 1- bis 200-mal – mit nichts, einem Leerzeichen oder einem Zeilenumbruch zwischen den Kopien.",
    "content": {
      "about": "Wiederholen Sie ein Wort, eine Phrase oder eine Zeile 1- bis 200-mal. Zwischen die Kopien kommt nichts, ein Leerzeichen oder ein Zeilenumbruch. Der Ausgangstext darf bis zu 5.000 Zeichen lang sein, das zusammengesetzte Ergebnis bis zu 100.000 Zeichen.",
      "howTo": [
        "Geben Sie den zu wiederholenden Text ein. Ein leeres Feld wird abgelehnt.",
        "Geben Sie eine ganze Zahl von 1 bis 200 ein.",
        "Wählen Sie nichts, ein Leerzeichen oder einen Zeilenumbruch zwischen den Kopien und klicken Sie auf „Wiederholen“."
      ],
      "features": [
        "Bei Anzahl 1 genau eine Kopie, ohne zusätzliches Trennzeichen.",
        "Leerzeichen oder Zeilenumbruch nur zwischen den Kopien, nicht nach der letzten.",
        "Eine Längengrenze, damit ein riesiges Ergebnis die Seite nicht füllt."
      ],
      "examples": [
        {
          "title": "Ein Wort dreimal",
          "body": "ha, Anzahl 3, mit Leerzeichen zwischen den Kopien, wird zu ha ha ha."
        },
        {
          "title": "Eine Zeile zweimal",
          "body": "Fertig, Anzahl 2, mit Zeilenumbruch zwischen den Kopien, ergibt Fertig in einer Zeile und Fertig in der nächsten."
        }
      ],
      "explanation": "Die Seite kopiert den Text so oft wie gewünscht und verbindet die Kopien mit dem gewählten Trennzeichen. Sie erzeugt keinen lateinischen Platzhaltertext und entfernt keine Duplikate.",
      "tips": [
        "Nutzen Sie einen Zeilenumbruch für eine Liste identischer Zeilen und ein Leerzeichen für eine einzige Zeile."
      ],
      "limitations": "Der Ausgangstext darf bis zu 5.000 Zeichen haben, die Anzahl bis zu 200 betragen und das Ergebnis bis zu 100.000 Zeichen lang sein. Ein längeres Ergebnis wird abgelehnt.",
      "faqs": [
        {
          "question": "Ist der Textwiederholer kostenlos?",
          "answer": "Ja. Sie können hier Text wiederholen, ohne zu bezahlen oder ein Konto anzulegen."
        },
        {
          "question": "Fügt die Anzahl 1 ein Trennzeichen hinzu?",
          "answer": "Nein. Eine Kopie ist genau der eingegebene Text, ohne Zusatz."
        },
        {
          "question": "Kann ich eine leere Zeile wiederholen?",
          "answer": "Ein leeres Feld wird abgelehnt. Eine Zeile, die nur Leerzeichen enthält, ist erlaubt, denn diese Leerzeichen sind Text."
        },
        {
          "question": "Wird der Text an einen Server gesendet?",
          "answer": "Nein. Die Kopien entstehen in diesem Browser-Tab. Tools Star Hub sendet den Text an keinen Server und speichert ihn nicht im lokalen Speicher."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Die Kopien entstehen in diesem Tab. Der Text wird an keinen Server gesendet.",
      "Text to repeat": "Zu wiederholender Text",
      "Repeat count": "Anzahl der Wiederholungen",
      "From 1 to 200.": "Von 1 bis 200.",
      "Between copies": "Zwischen den Kopien",
      "Nothing": "Nichts",
      "Space": "Leerzeichen",
      "New line": "Zeilenumbruch",
      "Enter the text to repeat.": "Bitte den zu wiederholenden Text eingeben.",
      "Keep the text under {0} characters.": "Halten Sie den Text unter {0} Zeichen.",
      "repeat count": "Anzahl der Wiederholungen",
      "Enter a whole number of repeats.": "Bitte eine ganze Zahl als Anzahl eingeben.",
      "Choose a repeat count from {0} to {1}.": "Wählen Sie eine Anzahl von {0} bis {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Diese Wiederholung ist zu lang für diese Seite. Verwenden Sie einen kürzeren Text oder eine kleinere Anzahl."
    }
  }
};

export default data;
