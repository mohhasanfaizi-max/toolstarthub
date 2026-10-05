import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Ein KI-Prompt-Generator setzt aus Thema, Ziel, Zielgruppe und Format, die Sie eingeben, einen strukturierten Prompt zusammen. „Prompt erzeugen“ bleibt im Browser. „Mit KI erzeugen“ sendet diese Felder über ToolStarHub an die Gemini-API von Google.",
    "content": {
      "about": "Der KI-Prompt-Generator macht aus den ausgefüllten Feldern einen Prompt, den Sie kopieren können. Eine Vorlage füllt nur Einsatzzweck, Tonfall, Format, Detailgrad und eine erste Anweisung aus. Worum es inhaltlich geht, müssen Sie selbst angeben.",
      "howTo": [
        "Wählen Sie eine Vorlage oder tippen Sie Ihren eigenen Einsatzzweck ein.",
        "Geben Sie ein Thema oder ein Ziel an. Mindestens eines davon ist nötig.",
        "Legen Sie Zielgruppe, Tonfall, Sprache, Format und gewünschten Detailgrad fest.",
        "Klicken Sie auf „Prompt erzeugen“, um den Prompt im Browser zusammenzusetzen, oder auf „Mit KI erzeugen“, damit Gemini ihn überarbeitet.",
        "Mit „Leeren“ setzen Sie das Formular zurück."
      ],
      "features": [
        "Zwölf Vorlagen für Artikel, Beiträge, Skripte, Produkttexte, Recherchegliederungen und Programmieraufgaben.",
        "Ein strukturierter Prompt, der Aufgabe, Zielgruppe, Tonfall, Sprache und Format nennt.",
        "Eine Zeile, die das Modell anweist, fehlende Fakten nicht zu erfinden.",
        "Kopieren und Leeren. Nichts wird gespeichert."
      ],
      "examples": [
        {
          "title": "Ein Blogartikel über das Alter an Schalttagen",
          "body": "Vorlage: Blogartikel. Thema: wie man das Alter berechnet, wenn jemand am 29. Februar geboren ist. Zielgruppe: Menschen, die einen Datumsrechner nutzen. Der Prompt verlangt einen kurzen Einstieg und keinen aufgeblähten Schluss."
        },
        {
          "title": "Eine Programmieraufgabe",
          "body": "Vorlage: Programmier-Prompt. Ziel: eine Funktion schreiben, die einen leeren Seitenbereich ablehnt. Zusatzanweisung: TypeScript verwenden und ein fehlschlagendes Beispiel zeigen. Der Prompt fragt nach Sprache, Eingaben und dem, was als fertig gilt."
        }
      ],
      "explanation": "„Prompt erzeugen“ fügt Ihre Angaben zu beschrifteten Zeilen zusammen. Sind Thema und Ziel beide leer, bricht das Tool ab und bittet um eines davon. „Mit KI erzeugen“ sendet diese Felder an Gemini und gibt einen überarbeiteten Prompt zurück.",
      "limitations": "„Prompt erzeugen“ fügt nur die ausgefüllten Felder zusammen und braucht ein Thema oder ein Ziel. Eine Vorlage füllt Stilfelder, erfindet aber kein Thema. „Mit KI erzeugen“ überarbeitet den Prompt mit Gemini. Die Seite führt den Prompt nicht in einem Schreibmodell aus.",
      "tips": [
        "Nennen Sie die Leser. „Junge Eltern“ ist hilfreicher als „alle“.",
        "Sagen Sie, wie das Ergebnis aussehen soll: eine Liste, eine E-Mail, ein Skript.",
        "Schreiben Sie bekannte Fakten in die Zusatzanweisungen, damit das Modell sie nicht raten muss."
      ],
      "faqs": [
        {
          "question": "Nutzt dieses Tool KI?",
          "answer": "„Prompt erzeugen“ baut den Prompt auf dieser Seite. „Mit KI erzeugen“ sendet die Felder über ToolStarHub an die Gemini-API von Google und gibt einen überarbeiteten Prompt zurück. Beide Ergebnisse können Sie in ein anderes Modell einfügen."
        },
        {
          "question": "Was, wenn ich nur das Thema kenne?",
          "answer": "Ein Thema reicht zum Erzeugen. Ergänzen Sie ein Ziel, sobald Sie wissen, was die Leser danach können sollen."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Prompt erzeugen“ bleibt in diesem Tab und lädt die Felder nicht hoch. „Mit KI erzeugen“ sendet die Felder über ToolStarHub an die Gemini-API von Google und gibt einen überarbeiteten Prompt zurück. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen."
        },
        {
          "question": "Was macht einen guten KI-Prompt aus?",
          "answer": "Sagen Sie, was Sie wollen, für wen es ist, welchen Tonfall, welches Format und welche Länge. Ein klares Ziel und ein Beispiel für das Ergebnis helfen meist mehr als zusätzliche Adjektive."
        },
        {
          "question": "Kann ich den Prompt in ChatGPT, Gemini oder Claude verwenden?",
          "answer": "Ja. Das Ergebnis ist reiner Text, den Sie in jeden Chat-Assistenten einfügen können. Verschiedene Modelle können auf denselben Prompt trotzdem unterschiedlich antworten."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "„Prompt erzeugen“ baut einen Prompt in Ihrem Browser. „Mit KI erzeugen“ sendet die ausgefüllten Felder über ToolStarHub an die Gemini-API von Google und gibt einen ausgearbeiteten Prompt zurück. Der Text wird nicht gespeichert.",
      "Platform or use case": "Plattform oder Einsatzzweck",
      "Topic": "Thema",
      "Goal": "Ziel",
      "Audience": "Zielgruppe",
      "Tone": "Tonfall",
      "Language": "Sprache",
      "Output format": "Ausgabeformat",
      "Level of detail": "Detailgrad",
      "Brief": "Knapp",
      "Medium": "Mittel",
      "High": "Hoch",
      "Additional instructions": "Zusätzliche Anweisungen",
      "Generate prompt": "Prompt erzeugen",
      "Prompt": "Prompt",
      "AI prompt": "KI-Prompt",
      "Blog article": "Blogartikel",
      "SEO article": "SEO-Artikel",
      "Social media post": "Social-Media-Beitrag",
      "YouTube script": "YouTube-Skript",
      "YouTube thumbnail prompt": "YouTube-Thumbnail-Prompt",
      "Image generation": "Bilderzeugung",
      "Video generation": "Videoerzeugung",
      "Product description": "Produktbeschreibung",
      "Email": "E-Mail",
      "Marketing copy": "Werbetext",
      "Academic/research prompt": "Wissenschafts-/Recherche-Prompt",
      "Coding prompt": "Programmier-Prompt",
      "Add a topic or a goal before generating a prompt.": "Geben Sie ein Thema oder ein Ziel an, bevor Sie einen Prompt erzeugen."
    },
    "note": "„Prompt erzeugen“ schreibt den Prompt auf Englisch, weil KI-Modelle damit am zuverlässigsten arbeiten. Im Feld „Sprache“ legen Sie fest, in welcher Sprache die Antwort kommen soll. „Mit KI erzeugen“ versteht auch deutsche Eingaben."
  },
  "prompt-to-image": {
    "answer": "Ein Prompt-zu-Bild-Tool schreibt aus Motiv und Stil einen kopierbaren Bild-Prompt. Es erzeugt das Bild nicht. „Mit KI erzeugen“ liefert nur einen ausführlicheren Prompt.",
    "content": {
      "about": "Der Prompt-zu-Bild-Generator schreibt einen Prompt für ein Bildmodell. Sie beschreiben Motiv, Ort, Licht und Bildausschnitt. Die Seite zeichnet das Bild nicht, weil keine Bild-API angebunden ist.",
      "howTo": [
        "Wählen Sie eine Stilvorlage, wenn Sie einen Ausgangspunkt möchten.",
        "Beschreiben Sie das Motiv. Ohne Motiv erstellt das Tool keinen Prompt.",
        "Ergänzen Sie Umgebung, Licht, Kamera, Farben, Stimmung und Seitenverhältnis, soweit sie Ihnen wichtig sind.",
        "Tragen Sie einen Negativ-Prompt für Dinge ein, die nicht ins Bild sollen.",
        "Klicken Sie auf „Prompt erstellen“ und kopieren Sie Prompt und Negativ-Prompt getrennt."
      ],
      "features": [
        "Vorlagen für Foto, Kino, Illustration, Produkt, Porträt, Landschaft, Architektur, Fantasy, Anime, 3D und Thumbnails.",
        "Eigene Kopierknöpfe für den Haupt-Prompt und den Negativ-Prompt.",
        "Leere Felder werden weggelassen, damit keine leeren Beschriftungen im Prompt stehen."
      ],
      "examples": [
        {
          "title": "Eine Produktaufnahme",
          "body": "Motiv: eine Edelstahl-Trinkflasche. Vorlage: Produktfotografie. Seitenverhältnis: 1:1. Negativ-Prompt: zusätzliche Logos, Personen, unaufgeräumter Tisch. Das Ergebnis ist eine Studiobeschreibung, keine Datei."
        },
        {
          "title": "Ein Thumbnail",
          "body": "Motiv: eine Person, die ein markiertes PDF hält. Vorlage: YouTube-Thumbnail. Die Komposition bleibt „ein Motiv, Platz für einen kurzen Titel“. Den Titeltext schreiben Sie weiterhin selbst."
        }
      ],
      "explanation": "Jedes ausgefüllte Feld wird zu einem kurzen Satzteil. Das Motiv ist Pflicht, damit der Prompt etwas Bestimmtes beschreibt. Eine Vorlage ändert den Stil und einige verwandte Felder, löscht aber das bereits eingetippte Motiv nicht.",
      "limitations": "Die Seite schreibt einen Prompt und optional einen Negativ-Prompt. Sie liefert keine Bilddatei. Ein Motiv ist Pflicht. „Mit KI erzeugen“ bittet Gemini um einen längeren Prompt, den Sie dann in ein Bildtool einfügen.",
      "tips": [
        "Ein einzelnes Motiv lässt sich leichter beschreiben als eine Menschenmenge.",
        "Benennen Sie das Licht. „Fensterlicht“ und „harte Mittagssonne“ ergeben ganz andere Bilder.",
        "Nutzen Sie den Negativ-Prompt für Fehler, die immer wieder auftauchen, etwa zusätzliche Finger oder verzerrte Schrift."
      ],
      "faqs": [
        {
          "question": "Warum gibt es kein Bild?",
          "answer": "Diese Seite schreibt einen Prompt und rendert kein Bild. „Mit KI erzeugen“ bittet Gemini um einen ausführlicheren Prompt. Diesen fügen Sie in einen Dienst ein, der Bilder erstellt."
        },
        {
          "question": "Liest jedes Modell den Prompt gleich?",
          "answer": "Nein. Modelle gehen unterschiedlich mit Formulierungen um. Sehen Sie das Ergebnis als klares Briefing und passen Sie es an Ihr Tool an."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Prompt erstellen“ bleibt in diesem Browser und lädt das Briefing nicht hoch. „Mit KI erzeugen“ sendet das Briefing über ToolStarHub an die Gemini-API von Google und gibt einen längeren Prompt zurück. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen. Ein Bild erstellt die Seite trotzdem nicht."
        },
        {
          "question": "Wie schreibe ich einen guten Bild-Prompt?",
          "answer": "Beginnen Sie mit dem Motiv, ergänzen Sie dann Umgebung, Licht, Kamera- oder Kunststil, Farbpalette, Stimmung und Seitenverhältnis. Seien Sie bei dem, was zählt, genau und lassen Sie den Rest weg."
        },
        {
          "question": "Was ist ein Negativ-Prompt?",
          "answer": "Ein Negativ-Prompt listet Dinge auf, die nicht im Bild sein sollen, etwa Schrift, zusätzliche Finger oder Unschärfe. Nicht jedes Bildmodell liest einen."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "„Prompt erstellen“ schreibt einen Bild-Prompt in Ihrem Browser. „Mit KI erzeugen“ sendet Ihre Beschreibung über ToolStarHub an die Gemini-API von Google und gibt einen ausführlicheren Bild-Prompt zurück. Diese Seite erzeugt kein Bild. Der Text wird nicht gespeichert.",
      "Style presets": "Stilvorlagen",
      "Composition": "Komposition",
      "Colors": "Farben",
      "Quality and detail": "Qualität und Details",
      "Things you want left out of the picture.": "Dinge, die nicht im Bild sein sollen.",
      "Image prompt": "Bild-Prompt",
      "AI image prompt": "KI-Bild-Prompt",
      "Photorealistic": "Fotorealistisch",
      "Cinematic": "Filmisch",
      "Illustration": "Illustration",
      "Product photography": "Produktfotografie",
      "Portrait": "Porträt",
      "Landscape": "Landschaft",
      "Architecture": "Architektur",
      "Fantasy": "Fantasy",
      "Anime": "Anime",
      "3D render": "3D-Rendering",
      "YouTube thumbnail": "YouTube-Thumbnail",
      "Describe the subject before building the prompt.": "Beschreiben Sie das Motiv, bevor Sie den Prompt erstellen."
    },
    "note": "Der erstellte Prompt verwendet englische Feldbezeichnungen, die Bildmodelle am besten verstehen. Ihre Beschreibungen können Sie in jeder Sprache eintippen."
  },
  "prompt-to-video": {
    "answer": "Ein Prompt-zu-Video-Tool schreibt eine Einstellungsbeschreibung, die Sie in ein Videomodell einfügen können. Es rendert keinen Clip. „Mit KI erzeugen“ liefert nur den geschriebenen Prompt.",
    "content": {
      "about": "Der Prompt-zu-Video-Generator schreibt die Beschreibung einer einzelnen Einstellung: wer oder was im Bild ist, was sich bewegt, wie sich die Kamera bewegt und wie lange die Einstellung dauert. Er erzeugt kein Video.",
      "howTo": [
        "Wählen Sie eine Vorlage als Ausgangsstil oder lassen Sie die Felder leer und schreiben Sie selbst.",
        "Geben Sie ein Motiv oder eine Handlung an. Eines davon ist Pflicht.",
        "Beschreiben Sie Szene, Kamera, Objektiv, Licht, Dauer und Seitenverhältnis.",
        "Ergänzen Sie Ton oder Dialog nur, wenn die Einstellung Ton braucht.",
        "Klicken Sie auf „Prompt erstellen“ und kopieren Sie den Text. „Leeren“ setzt das Formular zurück, auch die Standarddauer."
      ],
      "features": [
        "Vorlagen für Kino, Werbespot, Social Media, YouTube, Doku, Reise, Action, Mode, Natur, historische Szenen und Animation.",
        "Eine Schlusszeile, die die Anfrage auf eine durchgehende Einstellung beschränkt.",
        "Ein eigener Negativ-Prompt für Bewegungs- und Bildfehler, die Sie vermeiden wollen."
      ],
      "examples": [
        {
          "title": "Ein Produkt im Orbit",
          "body": "Motiv: ein Keramikbecher. Handlung: Dampf steigt auf. Vorlage: Werbespot. Die Dauer bleibt bei 6 Sekunden. Der Prompt verlangt eine Kreisfahrt und Studiolicht."
        },
        {
          "title": "Eine ruhige Reiseaufnahme",
          "body": "Motiv: ein Küstenweg. Handlung: eine Person geht von der Kamera weg. Vorlage: Reise. Die Tageszeit tragen Sie im Feld Umgebung ein, damit das Licht nicht offen bleibt."
        }
      ],
      "explanation": "Videomodelle kommen mit einer einzelnen Handlung besser zurecht als mit einer Abfolge von Szenen. Der Generator hält Ihre Satzteile in fester Reihenfolge und ergänzt „eine durchgehende Einstellung“, damit kein Storyboard daraus wird.",
      "limitations": "Der Generator beschreibt eine durchgehende Einstellung. Er rendert kein Video und bietet keinen Download. Sie brauchen ein Motiv oder eine Handlung. Dauer, Kamera und Dialog kommen nur in den Prompt, wenn Sie sie eintippen.",
      "tips": [
        "Sagen Sie, was sich bewegt und was stillsteht.",
        "Eine Dauer wie „5 Sekunden“ hilft mehr als „kurz“.",
        "Wenn Sie Dialog brauchen, schreiben Sie den Satz aus. Lassen Sie das Modell keine Rede erfinden."
      ],
      "faqs": [
        {
          "question": "Kann ich auf dieser Seite ein Video herunterladen?",
          "answer": "Nein. Diese Seite rendert kein Video. „Mit KI erzeugen“ liefert nur einen geschriebenen Einstellungs-Prompt von Gemini. Kopieren Sie ihn in ein Videotool, dem Sie vertrauen."
        },
        {
          "question": "Was, wenn ich nur die Handlung beschreibe?",
          "answer": "Eine Handlung reicht. Mit einem Motiv lässt sich die Einstellung leichter vorstellen."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Prompt erstellen“ schreibt die Einstellung in diesem Tab. „Mit KI erzeugen“ sendet die Felder über ToolStarHub an die Gemini-API von Google und gibt einen geschriebenen Prompt zurück. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen. Eine Videodatei entsteht nicht."
        },
        {
          "question": "Wie schreibe ich einen Prompt für ein KI-Video?",
          "answer": "Beschreiben Sie eine Einstellung: Motiv, Handlung, Umgebung, Kamerabewegung, Objektiv, Licht und Länge. Kurze, konkrete Prompts funktionieren meist besser als lange Geschichten."
        },
        {
          "question": "Welche Videomodelle können diese Prompts nutzen?",
          "answer": "Das Ergebnis ist reiner Text, Sie können ihn also in jedes Text-zu-Video-Tool einfügen. Jedes Modell setzt Kamera- und Zeitangaben auf seine eigene Weise um."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "„Prompt erstellen“ schreibt einen Video-Prompt in Ihrem Browser. „Mit KI erzeugen“ sendet Ihre Beschreibung über ToolStarHub an die Gemini-API von Google und gibt einen Einstellungs-Prompt zurück. Diese Seite erzeugt kein Video. Der Text wird nicht gespeichert.",
      "Video subject": "Videomotiv",
      "Scene": "Szene",
      "Action": "Handlung",
      "Camera movement": "Kamerabewegung",
      "Lens": "Objektiv",
      "Visual style": "Visueller Stil",
      "Duration": "Dauer",
      "Audio or dialogue": "Ton oder Dialog",
      "Video prompt": "Video-Prompt",
      "AI video prompt": "KI-Video-Prompt",
      "Cinematic": "Filmisch",
      "Product commercial": "Werbespot",
      "Social media": "Social Media",
      "YouTube": "YouTube",
      "Documentary": "Dokumentation",
      "Travel": "Reise",
      "Fashion": "Mode",
      "Nature": "Natur",
      "Historical": "Historisch",
      "Animation": "Animation",
      "Add a subject or an action before building the prompt.": "Geben Sie ein Motiv oder eine Handlung an, bevor Sie den Prompt erstellen."
    },
    "note": "Der erstellte Prompt verwendet englische Feldbezeichnungen, die Videomodelle am besten verstehen. Ihre Beschreibungen können Sie in jeder Sprache eintippen."
  },
  "ai-article-detector": {
    "answer": "Diese Seite prüft Schreibmuster wie Satzlänge und wiederholte Wendungen. Auch „Mit KI analysieren“ ist eine Analyse von Schreibmustern. Ob ein Mensch oder ein Modell den Text geschrieben hat, entscheidet sie nicht.",
    "content": {
      "about": "Der KI-Artikel-Detektor untersucht den eingefügten Entwurf und meldet Satzlänge, wie stark diese Längen schwanken, wie breit der Wortschatz ist und welche kurzen Wendungen sich wiederholen. Das Ergebnis heißt „Analyse der Schreibmuster“ – mehr behauptet es nicht.",
      "howTo": [
        "Fügen Sie mindestens 40 Wörter ein.",
        "Klicken Sie auf „Text analysieren“ für die Prüfung im Browser oder auf „Mit KI analysieren“ für eine Schreibmuster-Analyse durch Gemini.",
        "Lesen Sie die Werte und den Hinweis darunter.",
        "Ist die Probe zu kurz, sagt die Seite das, statt sie zu bewerten.",
        "„Leeren“ entfernt den Text von der Seite."
      ],
      "features": [
        "Durchschnittliche Satzlänge mit der Einstufung gering, mittel oder abwechslungsreich.",
        "Eine Wortschatz-Einstufung nach der Zahl verschiedener Wörter.",
        "Wendungen aus vier Wörtern, die drei- oder mehrmals vorkommen.",
        "Eine kurze Liste von Floskeln, wenn welche vorkommen."
      ],
      "examples": [
        {
          "title": "Ein Entwurf, der sich wiederholt",
          "body": "Tauchen dieselben vier Wörter in mehreren Sätzen auf, erscheinen sie mit Anzahl in der Liste. Das heißt, der Entwurf wiederholt sich – nicht, dass ein Modell ihn geschrieben hat."
        },
        {
          "title": "Eine kurze Bildunterschrift",
          "body": "Zwanzig Wörter reichen nicht. Das Tool verlangt 40 Wörter, damit ein einzelner Satz nicht als Muster gilt."
        }
      ],
      "explanation": "Die Satzvariation vergleicht die Streuung der Satzlängen mit dem Durchschnitt. Der Wortschatz vergleicht verschiedene Wörter mit der Gesamtzahl. Beide Werte schwanken beim normalen Überarbeiten. Ein sorgfältiger menschlicher Entwurf kann gleichmäßig wirken, ein generierter abwechslungsreich. Das steht auch im Ergebnis.",
      "limitations": "Die Prüfung im Browser braucht mindestens 40 Wörter. Sie meldet Satzlänge, Wortschatzbreite und wiederholte Wendungen. Sie liefert weder einen Prozentwert noch das Urteil, dass ein Modell den Entwurf geschrieben hat. „Mit KI analysieren“ schickt den Text für dieselbe Art Beschreibung an Gemini.",
      "tips": [
        "Nehmen Sie einen ganzen Abschnitt, keine Überschrift.",
        "Behandeln Sie wiederholte Wendungen als Hinweis fürs Lektorat. Streichen Sie sie, wenn sie Lesern auffallen würden.",
        "Verwenden Sie die Einstufungen nicht, um jemandem die Nutzung eines Modells vorzuwerfen."
      ],
      "faqs": [
        {
          "question": "Kann das Tool erkennen, ob ein Text von einer KI stammt?",
          "answer": "Nein, nicht mit Sicherheit. Musterprüfungen liefern falsche Treffer in beide Richtungen. Das Ergebnis beschreibt den Entwurf, es ist kein Urteil."
        },
        {
          "question": "Warum gibt es keinen Prozentwert?",
          "answer": "Ein Prozentwert sähe aus wie ein Beweis. „Text analysieren“ und „Mit KI analysieren“ beschreiben beide Muster. Keines behauptet zu wissen, wer den Text geschrieben hat."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Text analysieren“ zählt die Muster in diesem Tab und lädt den Entwurf nicht hoch. „Mit KI analysieren“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google und erhält eine schriftliche Beschreibung. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen."
        },
        {
          "question": "Sind KI-Detektoren zuverlässig?",
          "answer": "Kein Detektor kann beweisen, wer einen Text geschrieben hat. Musterbasierte Werte können menschliche Texte markieren und überarbeitete KI-Texte übersehen. Sehen Sie jedes Ergebnis als Anlass zur Prüfung, nicht als Beweis."
        },
        {
          "question": "Auf welche Muster achtet dieses Tool?",
          "answer": "Es meldet Satzlänge, wie abwechslungsreich der Wortschatz ist und wiederholte Wendungen, damit Sie sehen, wo ein Entwurf eintönig oder repetitiv klingt."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "„Text analysieren“ prüft Muster in Ihrem Browser. „Mit KI analysieren“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google für eine Schreibmuster-Analyse. Keines der beiden Ergebnisse kann entscheiden, wer den Text geschrieben hat. Der Entwurf wird nicht gespeichert.",
      "Article or draft": "Artikel oder Entwurf",
      "Paste at least 40 words.": "Fügen Sie mindestens 40 Wörter ein.",
      "Analyze writing": "Text analysieren",
      "Analyze with AI": "Mit KI analysieren",
      "Avg. sentence": "Ø Satzlänge",
      "{0} words": "{0} Wörter",
      "Sentence variation": "Satzvariation",
      "Vocabulary": "Wortschatz",
      "Writing pattern analysis": "Analyse der Schreibmuster",
      "No four-word phrase repeats three or more times.": "Keine Wendung aus vier Wörtern kommt drei- oder mehrmals vor.",
      "Familiar stock phrases found:": "Gefundene Floskeln:",
      "AI writing analysis": "KI-Schreibanalyse",
      "Paste some writing first.": "Fügen Sie zuerst einen Text ein.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Fügen Sie mindestens 40 Wörter ein. Ein kurzer Ausschnitt zeigt kein Muster.",
      "Low": "Gering",
      "Moderate": "Mittel",
      "Varied": "Abwechslungsreich",
      "Narrow": "Schmal",
      "Mixed": "Gemischt",
      "Broad": "Breit",
      "\"{0}\" appears {1} times": "„{0}“ kommt {1}-mal vor",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Das sind Schreibmuster, kein Beweis dafür, wer den Text geschrieben hat. Ähnliche Muster tauchen in überarbeiteten menschlichen Entwürfen und in generierten Entwürfen auf. Ein Detektor kann sich in beide Richtungen irren."
    },
    "note": "Die Prüfung im Browser nutzt englische Wortlisten und Floskeln und passt daher am besten zu englischen Texten. „Mit KI analysieren“ funktioniert auch mit deutschen Texten."
  },
  "ai-article-compressor": {
    "answer": "Ein Artikel-Kompressor kürzt einen Entwurf, indem er Füllwörter und wiederholte Sätze streicht. „Mit KI kürzen“ bittet Gemini, die Kernaussage zu erhalten. Prüfen Sie das Ergebnis vor der Veröffentlichung.",
    "content": {
      "about": "Der KI-Artikel-Kompressor macht einen langen Entwurf kürzer. Leichte Kürzung ersetzt einige umständliche Wendungen und räumt Leerzeichen auf. Mittlere und starke Kürzung streichen außerdem wiederholte Sätze. Lesen Sie das Ergebnis: Wenn ein Satz wegfällt, kann sich die Bedeutung verschieben.",
      "howTo": [
        "Fügen Sie den Artikel ein. Er braucht mindestens 12 Wörter.",
        "Wählen Sie leichte, mittlere oder starke Kürzung.",
        "Klicken Sie auf „Artikel kürzen“ für die Regeln im Browser oder auf „Mit KI kürzen“, damit Gemini kürzt.",
        "Vergleichen Sie die Wortzahlen und kopieren Sie den kürzeren Entwurf, wenn er noch sagt, was Sie meinten.",
        "„Leeren“ leert beide Felder und stellt die Stufe wieder auf mittel."
      ],
      "features": [
        "Drei Stufen, damit ein leichter Durchgang keine Sätze löscht.",
        "Wortzahlen vorher und nachher.",
        "Feste Ersetzungen, etwa „in order to“ zu „to“.",
        "Entfernen doppelter Sätze bei mittel und stark."
      ],
      "examples": [
        {
          "title": "Ein umständlicher Satz",
          "body": "„In order to finish the form, you need to sign it“ wird auf jeder Stufe zu „to finish the form, you need to sign it“."
        },
        {
          "title": "Derselbe Satz zweimal",
          "body": "Mittel und stark behalten die erste Fassung und streichen die spätere exakte Wiederholung. Leicht lässt beide stehen."
        }
      ],
      "explanation": "„Artikel kürzen“ nutzt eine feste Liste von Ersetzungen. Die starke Kürzung überspringt zusätzlich einen späteren Satz, der mit denselben sechs Wörtern beginnt wie ein früherer. „Mit KI kürzen“ bittet Gemini, den Artikel auf der gewählten Stufe zu kürzen. Lesen Sie beide Ergebnisse, bevor Sie sich darauf verlassen.",
      "limitations": "Die leichte Kürzung ersetzt eine feste Liste umständlicher Wendungen. Mittel und stark streichen zusätzlich spätere exakte Wiederholungen, und stark kann einen späteren Satz überspringen, der mit denselben sechs Wörtern beginnt. Der Entwurf braucht mindestens 12 Wörter. Beim Kürzen kann ein Satz verschwinden, den Sie noch wollten.",
      "tips": [
        "Beginnen Sie mit leicht, wenn der Artikel schon knapp ist.",
        "Nutzen Sie stark für einen groben Rohtext und stellen Sie wichtige Sätze danach wieder her.",
        "Das ist kein Mittel, um zu verschleiern, wie ein Entwurf entstanden ist."
      ],
      "faqs": [
        {
          "question": "Umgeht der gekürzte Text einen KI-Detektor?",
          "answer": "Nein. Das Tool versucht das nicht und behauptet auch nicht, dass das Ergebnis nach einer bestimmten Art von Autor aussieht."
        },
        {
          "question": "Bleibt meine Aussage erhalten?",
          "answer": "„Artikel kürzen“ behält die meisten Wörter und entfernt etwas Füllstoff und Wiederholungen. „Mit KI kürzen“ bittet Gemini, Kernaussage und wichtige Fakten zu erhalten. Lesen Sie den kürzeren Entwurf, bevor Sie sich darauf verlassen."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Artikel kürzen“ läuft in diesem Tab und lädt den Entwurf nicht hoch. „Mit KI kürzen“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google und gibt eine kürzere Fassung zurück. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen."
        },
        {
          "question": "Wie kürze ich einen Artikel, ohne den Sinn zu verlieren?",
          "answer": "Streichen Sie zuerst umständliche Wendungen, dann wiederholte Punkte, dann ganze Sätze, die nichts hinzufügen. Vergleichen Sie das Ergebnis vor der Verwendung mit dem Original."
        },
        {
          "question": "Welche Kürzungsstufe sollte ich wählen?",
          "answer": "Leicht ersetzt nur umständliche Wendungen. Mittel streicht zusätzlich Wiederholungen. Stark kann Sätze überspringen, die gleich beginnen – prüfen Sie das Ergebnis daher genauer."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "„Artikel kürzen“ wendet feste Regeln in Ihrem Browser an. „Mit KI kürzen“ sendet den Artikel über ToolStarHub an die Gemini-API von Google und gibt einen kürzeren Entwurf zurück. Der Artikel wird nicht gespeichert. Prüfen Sie das Ergebnis, bevor Sie es veröffentlichen.",
      "Article": "Artikel",
      "Compression": "Kürzung",
      "Light compression": "Leichte Kürzung",
      "Medium compression": "Mittlere Kürzung",
      "Strong compression": "Starke Kürzung",
      "Shorten article": "Artikel kürzen",
      "Compress with AI": "Mit KI kürzen",
      "Copy shorter draft": "Kürzeren Entwurf kopieren",
      "Shorter draft": "Kürzerer Entwurf",
      "The shorter draft will appear here.": "Der kürzere Entwurf erscheint hier.",
      "AI shorter draft": "KI-Kurzfassung",
      "Copy AI draft": "KI-Entwurf kopieren",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} Wörter vorher, {1} Wörter nachher. Lesen Sie den kürzeren Entwurf, bevor Sie ihn verwenden.",
      "Paste an article first.": "Fügen Sie zuerst einen Artikel ein.",
      "Paste a longer article. A few words is not enough to shorten.": "Fügen Sie einen längeren Artikel ein. Ein paar Wörter reichen zum Kürzen nicht.",
      "Nothing was left after compression. Try a lighter setting.": "Nach der Kürzung ist nichts übrig geblieben. Versuchen Sie eine leichtere Stufe."
    },
    "note": "„Artikel kürzen“ arbeitet mit einer englischen Wendungsliste und kürzt deutsche Texte daher kaum. „Mit KI kürzen“ funktioniert auch mit deutschen Texten."
  },
  "ai-text-humanizer": {
    "answer": "Ein KI-Text-Humanizer ersetzt Floskeln im Browser anhand einer festen Liste. „Mit KI umschreiben“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google. Das Tool versucht nicht, einen KI-Detektor zu umgehen, und behauptet nicht, dass das Ergebnis nach einer bestimmten Art von Autor aussieht.",
    "content": {
      "about": "Der KI-Text-Humanizer ersetzt eine feste Liste von Floskeln durch schlichtere Formulierungen. „Text umschreiben“ erledigt das in diesem Tab. „Mit KI umschreiben“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google und gibt eine umgeschriebene Fassung zurück. Der Text wird nicht gespeichert. Prüfen Sie das Ergebnis, bevor Sie es verwenden. Keines der beiden Ergebnisse ist ein Mittel, um zu verschleiern, wie ein Entwurf entstanden ist.",
      "howTo": [
        "Fügen Sie den Entwurf ein. Er braucht mindestens 12 Wörter und höchstens 4.000 Zeichen.",
        "Klicken Sie auf „Text umschreiben“ für die Floskelliste im Browser oder auf „Mit KI umschreiben“, damit Gemini den Text überarbeitet.",
        "Prüfen Sie das Ergebnis. Nach einer Streichung kann das nächste Wort kleingeschrieben bleiben.",
        "Kopieren Sie die umgeschriebene Fassung, wenn sie noch sagt, was Sie meinten.",
        "„Leeren“ leert das Feld und das lokale Ergebnis."
      ],
      "features": [
        "Eine feste Floskelliste, angewendet im Browser.",
        "Ein separates Ergebnis von „Mit KI umschreiben“.",
        "Eine Grenze von 4.000 Zeichen für beide Schaltflächen.",
        "Keine Satzlöschung und kein Entfernen doppelter Sätze."
      ],
      "examples": [
        {
          "title": "Floskelhafte Einstiege",
          "body": "„In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.“ wird zu „here is the setup. you can use a short checklist.“"
        },
        {
          "title": "Ein wiederholter Satz",
          "body": "„The form is short. The form is short. Please sign it before noon today and bring a pen.“ bleibt mit beiden Kopien stehen. Dieser Durchgang streicht keinen wiederholten Satz."
        }
      ],
      "explanation": "„Text umschreiben“ geht eine feste Liste einmal durch. Nach einer Streichung wird nicht neu großgeschrieben, und ein typografischer Apostroph passt nicht. „Mit KI umschreiben“ bittet Gemini, dieselben Fakten, Namen und Zahlen zu behalten und den Entwurf nicht zu einer Zusammenfassung zu kürzen. Prüfen Sie beide Ergebnisse vor der Verwendung.",
      "limitations": "Für „Text umschreiben“ braucht der Entwurf mindestens 12 Wörter, für beide Schaltflächen höchstens 4.000 Zeichen. Der lokale Durchgang ersetzt nur Wendungen von der Liste. Ein typografischer Apostroph passt nicht. Das Tool versucht nicht, einen KI-Detektor zu umgehen, und behauptet nicht, dass das Ergebnis nach einer bestimmten Art von Autor aussieht.",
      "tips": [
        "Prüfen Sie das Ergebnis vor der Verwendung. Nach einer gestrichenen Wendung kann das nächste Wort kleingeschrieben bleiben.",
        "Ein wiederholter Satz bleibt stehen. Dieser Durchgang löscht ihn nicht.",
        "Keines der beiden Ergebnisse ist ein Mittel, um zu verschleiern, wie ein Entwurf entstanden ist."
      ],
      "faqs": [
        {
          "question": "Ist der KI-Text-Humanizer kostenlos?",
          "answer": "Ja. Sie können hier einen Entwurf umschreiben, ohne zu bezahlen oder ein Konto anzulegen. „Text umschreiben“ bleibt in diesem Tab. „Mit KI umschreiben“ sendet den Entwurf trotzdem über ToolStarHub an die Gemini-API von Google."
        },
        {
          "question": "Umgeht das einen KI-Detektor?",
          "answer": "Nein. Das Tool versucht das nicht und behauptet auch nicht, dass das Ergebnis nach einer bestimmten Art von Autor aussieht."
        },
        {
          "question": "Bleibt meine Aussage erhalten?",
          "answer": "„Text umschreiben“ behält alle Wörter, die nicht auf der Floskelliste stehen. „Mit KI umschreiben“ wird angewiesen, dieselben Fakten, Namen und Zahlen zu behalten und den Entwurf nicht zusammenzufassen. Prüfen Sie das Ergebnis vor der Verwendung."
        },
        {
          "question": "Wird mein Text an einen Server gesendet?",
          "answer": "„Text umschreiben“ läuft in diesem Tab und lädt den Entwurf nicht hoch. „Mit KI umschreiben“ sendet den Entwurf über ToolStarHub an die Gemini-API von Google und gibt eine umgeschriebene Fassung zurück. ToolStarHub speichert diesen Text nicht. In der kostenlosen Stufe kann Google ihn zur Verbesserung seiner Produkte nutzen."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "„Text umschreiben“ nutzt eine feste Floskelliste in Ihrem Browser. „Mit KI umschreiben“ sendet den Text über ToolStarHub an die Gemini-API von Google und gibt eine umgeschriebene Fassung zurück. Der Text wird nicht gespeichert. Prüfen Sie das Ergebnis vor der Verwendung. Keines der beiden Ergebnisse ist ein Mittel, um zu verschleiern, wie ein Entwurf entstanden ist.",
      "Draft": "Entwurf",
      "Rewrite text": "Text umschreiben",
      "Humanize with AI": "Mit KI umschreiben",
      "Copy rewritten draft": "Umgeschriebenen Entwurf kopieren",
      "Rewritten draft": "Umgeschriebener Entwurf",
      "The rewritten draft will appear here.": "Der umgeschriebene Entwurf erscheint hier.",
      "AI rewrite": "KI-Umschreibung",
      "Copy AI rewrite": "KI-Umschreibung kopieren",
      "Paste a draft first.": "Fügen Sie zuerst einen Entwurf ein.",
      "That text is too long for this rewrite. Shorten it and try again.": "Dieser Text ist für diese Umschreibung zu lang. Kürzen Sie ihn und versuchen Sie es erneut.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Fügen Sie einen längeren Entwurf ein. Ein paar Wörter reichen zum Umschreiben nicht.",
      "Nothing was left after the rewrite. Try different wording.": "Nach dem Umschreiben ist nichts übrig geblieben. Versuchen Sie andere Formulierungen."
    },
    "note": "„Text umschreiben“ arbeitet mit einer englischen Floskelliste und verändert deutsche Texte daher kaum. „Mit KI umschreiben“ funktioniert auch mit deutschen Texten."
  }
};

export default data;
