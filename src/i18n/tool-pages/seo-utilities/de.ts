import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Ein UTM-Builder hängt Kampagnenparameter an eine URL, damit Sie Besucherquellen in Analysetools nachverfolgen können.",
    "content": {
      "about": "Fügen Sie einem Link utm_source, utm_medium und utm_campaign hinzu, dazu optional term und content. Marketer nutzen das, um einen Kampagnenlink zu kennzeichnen, bevor die URL in eine Anzeige oder eine E-Mail kommt. Ein leeres Feld wird weggelassen. Die Seite zählt keine Besuche und kürzt die Adresse nicht.",
      "howTo": [
        "Geben Sie die Website-URL ein, mit oder ohne https://.",
        "Füllen Sie Quelle, Medium und Kampagne aus. Term und Content sind optional.",
        "Kopieren Sie die erzeugte URL. Vorhandene Abfrageparameter des ursprünglichen Links bleiben erhalten."
      ],
      "examples": [
        {
          "title": "Ein einfacher Kampagnenlink",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Eine URL mit vorhandenen Parametern",
          "body": "https://example.com/page?ref=nav behält ref=nav und ergänzt die UTM-Felder daneben."
        }
      ],
      "explanation": "UTM-Parameter zeigen Analysetools, woher ein Besuch kam. utm_source ist die Plattform, utm_medium der Kanal und utm_campaign der Name der Aktion. utm_term und utm_content sind optional. Die Werte werden URL-codiert, damit Leerzeichen und Sonderzeichen gültig bleiben.",
      "limitations": "Eine leere Quelle, ein leeres Medium oder eine leere Kampagne wird weggelassen statt als leerer Parameter geschrieben. Die Seite kürzt die Adresse nicht und zählt keine Besuche. Text, der keine Website-URL ist, wird abgelehnt.",
      "faqs": [
        {
          "question": "Ist der UTM-Builder kostenlos?",
          "answer": "Ja. utm_source, utm_medium und utm_campaign an einen Link anzuhängen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Werden meine anderen Abfrageparameter überschrieben?",
          "answer": "Nein. Nur die UTM-Felder, die Sie ausfüllen, werden ergänzt oder aktualisiert. Andere Parameter bleiben unverändert."
        },
        {
          "question": "Ruft dieses Tool einen Tracking-Dienst auf?",
          "answer": "Nein. Es baut nur eine URL in Ihrem Browser. Getrackt wird erst später, wenn Sie den Link in einer Analyse-Umgebung verwenden."
        },
        {
          "question": "Was sind UTM-Parameter?",
          "answer": "UTM-Parameter sind Kennzeichnungen in einem Link, etwa utm_source, utm_medium und utm_campaign, die Analysetools verraten, woher ein Besuch kam."
        },
        {
          "question": "Welche UTM-Parameter sind Pflicht?",
          "answer": "Quelle, Medium und Kampagne sind das übliche Minimum. Term und Content sind optional und helfen, Keywords oder Anzeigenvarianten zu unterscheiden."
        }
      ]
    },
    "ui": {
      "Website URL": "Website-URL",
      "Existing query parameters are kept. UTM values are added or updated.": "Vorhandene Abfrageparameter bleiben erhalten. UTM-Werte werden ergänzt oder aktualisiert.",
      "Campaign source": "Kampagnenquelle",
      "Campaign medium": "Kampagnenmedium",
      "Campaign name": "Kampagnenname",
      "Campaign term (optional)": "Kampagnen-Term (optional)",
      "running shoes": "Laufschuhe",
      "Campaign content (optional)": "Kampagnen-Content (optional)",
      "Copy URL": "URL kopieren",
      "Enter a URL to generate a campaign link.": "Geben Sie eine URL ein, um einen Kampagnenlink zu erzeugen.",
      "Campaign URL": "Kampagnen-URL",
      "Enter a website URL.": "Geben Sie eine Website-URL ein.",
      "Enter a valid website URL.": "Geben Sie eine gültige Website-URL ein."
    }
  },
  "slug-generator": {
    "answer": "Ein Slug-Generator macht aus einem Titel eine kleingeschriebene Zeichenfolge mit Bindestrichen, die sich sicher in einer URL verwenden lässt.",
    "content": {
      "about": "Machen Sie aus einem Titel einen kleingeschriebenen Permalink mit Bindestrichen. Autoren nutzen das, wenn sie einen Beitrag benennen, bevor die Adresse ins CMS kommt. Akzente lateinischer Buchstaben werden entfernt, Zeichen wie 你好 bleiben erhalten. Das Ergebnis prüft nicht, ob die Adresse noch frei ist.",
      "howTo": [
        "Tippen oder fügen Sie einen Titel ein.",
        "Der Slug wird beim Tippen aktualisiert.",
        "Kopieren Sie den Slug oder leeren Sie das Feld."
      ],
      "examples": [
        {
          "title": "Ein Blogtitel",
          "body": "„How to Compress an Image Without Losing Quality“ wird zu how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Akzente und andere Schriften",
          "body": "Akzente lateinischer Buchstaben werden entfernt (Café → cafe). Zeichen wie 你好 bleiben erhalten, damit der Slug lesbar bleibt."
        }
      ],
      "explanation": "Der Generator kürzt Leerraum am Rand, trennt nach der Unicode-Normalisierung NFKD die kombinierenden Zeichen ab, schreibt lateinische Buchstaben klein, wandelt andere Trennzeichen in Bindestriche um und fasst Wiederholungen zusammen. Unicode-Buchstaben und -Ziffern bleiben erhalten, statt dass jedes nicht-englische Zeichen gelöscht wird. Das Ergebnis ist ein praktischer Permalink, keine garantiert eindeutige ID.",
      "limitations": "Akzente lateinischer Buchstaben werden entfernt, Zeichen wie 你好 bleiben. Das Ergebnis hat die Form eines Permalinks, beweist aber nicht, dass die Adresse frei ist. Manche Website-Baukästen löschen nicht-lateinische Buchstaben, diese Seite nicht.",
      "faqs": [
        {
          "question": "Ist der Slug-Generator kostenlos?",
          "answer": "Ja. Einen Titel in einen Permalink mit Bindestrichen umzuwandeln ist kostenlos, und Sie brauchen kein Konto."
        },
        {
          "question": "Passt das zu jedem CMS?",
          "answer": "Die meisten Websites akzeptieren kleingeschriebene Slugs mit Bindestrichen. Manche entfernen nicht-lateinische Buchstaben, dieses Tool behält sie, sofern es Buchstaben oder Ziffern sind."
        },
        {
          "question": "Wird meine Eingabe an einen Server gesendet?",
          "answer": "Nein. Der Titel wird in diesem Tab umgeschrieben. Er wird weder hochgeladen noch im lokalen Speicher abgelegt."
        },
        {
          "question": "Was ist ein URL-Slug?",
          "answer": "Ein Slug ist der lesbare Teil einer Webadresse, der eine Seite benennt, etwa brot-backen in example.com/blog/brot-backen."
        },
        {
          "question": "Was macht einen guten Slug für SEO aus?",
          "answer": "Halten Sie ihn kurz, kleingeschrieben und aussagekräftig, mit Bindestrichen zwischen den Wörtern. Verzichten Sie auf Datumsangaben und Füllwörter, wenn die Seite später aktualisiert werden könnte."
        }
      ]
    },
    "ui": {
      "Title or text": "Titel oder Text",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Akzente werden von lateinischen Buchstaben entfernt. Andere Zeichen, etwa chinesische, bleiben erhalten.",
      "Example": "Beispiel",
      "Copy slug": "Slug kopieren",
      "Generated slug": "Erzeugter Slug",
      "How to Compress an Image Without Losing Quality": "So komprimieren Sie ein Bild ohne Qualitätsverlust"
    }
  },
  "qr-code-generator": {
    "answer": "Ein QR-Code-Generator macht aus Text oder einer URL ein herunterladbares QR-Bild, das auf Ihrem Gerät entsteht.",
    "content": {
      "about": "Codieren Sie reinen Text oder eine URL als QR-Code im PNG-Format, bis zu 1.200 Zeichen. Nutzen Sie das für einen kurzen Link, den jemand scannen soll. Layouts für WLAN, E-Mail und Kontakte gibt es im QR-Code-Generator Pro. Eine lange Zeichenfolge ergibt ein dichtes Muster, das manche Kameras nicht erfassen.",
      "howTo": [
        "Fügen Sie Text oder eine vollständige URL ein, bei einem Weblink mit https://.",
        "Klicken Sie auf Erzeugen. Eine Vorschau und eine barrierefreie Beschreibung erscheinen.",
        "Laden Sie das PNG herunter und setzen Sie zurück, wenn Sie einen anderen Code brauchen."
      ],
      "examples": [
        {
          "title": "Eine Website",
          "body": "https://example.com wird zu einem QR-Code, der beim Scannen diese Adresse öffnet."
        },
        {
          "title": "Reiner Text",
          "body": "Eine kurze Notiz oder eine WLAN-Erinnerung lässt sich als Text codieren. Bleiben Sie unter 1.200 Zeichen, damit das Muster lesbar bleibt."
        }
      ],
      "explanation": "Ein QR-Code ist ein Matrix-Barcode. Dieses Tool erzeugt das Muster mit einer clientseitigen Bibliothek in Ihrem Browser. Der Text wird an keine QR-API gesendet. Sehr langer Inhalt ergibt einen dichten Code, den viele Kameras schwer lesen, deshalb ist die Länge begrenzt.",
      "limitations": "Codiert werden reiner Text oder eine URL mit höchstens 1.200 Zeichen. Layouts für WLAN, E-Mail und Kontakte gibt es im QR-Code-Generator Pro. Eine lange Zeichenfolge ergibt ein dichtes Muster, das manche Kameras nicht erfassen.",
      "faqs": [
        {
          "question": "Ist der QR-Code-Generator kostenlos?",
          "answer": "Ja. Ein QR-Bild aus Text oder einer URL in diesem Browser zu erstellen ist kostenlos und ohne Konto möglich."
        },
        {
          "question": "Wird der Text hochgeladen?",
          "answer": "Nein. Der QR-Code wird in Ihrem Browser erzeugt. Der Text wird an keinen Server gesendet."
        },
        {
          "question": "Kann jeder Scanner das PNG lesen?",
          "answer": "Die meisten Kameras lesen ein kontrastreiches PNG einer kurzen URL. Winzige Ausdrucke, wenig Licht oder sehr langer Text können scheitern."
        },
        {
          "question": "Laufen hier erstellte QR-Codes ab?",
          "answer": "Nein. Der Text oder Link steckt direkt im Muster, ohne Weiterleitungsdienst dazwischen. Der Code funktioniert also so lange, wie der Link selbst funktioniert."
        },
        {
          "question": "Wie erstelle ich einen QR-Code für eine Website?",
          "answer": "Fügen Sie die vollständige Adresse mit https:// ein, erzeugen Sie den Code, laden Sie das PNG herunter und testen Sie es vor dem Drucken mit einer Handykamera."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "Der QR-Code wird in Ihrem Browser erstellt. Halten Sie den Inhalt möglichst kurz.",
      "QR code for {0}": "QR-Code für {0}",
      "QR code for:": "QR-Code für:",
      "The QR code is generated in your browser. The text is not sent to a server.": "Der QR-Code wird in Ihrem Browser erzeugt. Der Text wird an keinen Server gesendet."
    }
  },
  "qr-code-scanner": {
    "answer": "Ein QR-Code-Scanner liest ein ausgewähltes QR-Bild und zeigt den decodierten Text lokal an.",
    "content": {
      "about": "Lesen Sie den ersten QR-Code von der Kamera oder aus einem PNG oder JPG. Nutzen Sie das, wenn Sie den Text sehen möchten, bevor Sie entscheiden, einen Link zu öffnen. Die Kamera bleibt aus, bis Sie auf Kamera starten klicken. Andere Barcode-Arten werden nicht decodiert.",
      "howTo": [
        "Klicken Sie nur auf Kamera starten, wenn Sie mit der Gerätekamera scannen möchten. Die Berechtigung wird erst in diesem Moment angefragt, nicht beim Laden der Seite.",
        "Halten Sie den Code ins Bild, bis ein Ergebnis erscheint, oder klicken Sie auf Kamera stoppen, um den Videostream freizugeben.",
        "Ist die Kamera blockiert, laden Sie stattdessen ein PNG oder JPG des Codes hoch.",
        "Kopieren Sie das Ergebnis. Bei einer http(s)-URL wird Link öffnen angeboten. Die Seite navigiert nicht von selbst."
      ],
      "examples": [
        {
          "title": "Scan mit der Kamera",
          "body": "Nach dem Start der Kamera werden die Bilder im Tab decodiert. Der Stream stoppt, sobald ein Code gefunden wird oder Sie auf Stoppen klicken."
        },
        {
          "title": "Bild hochladen",
          "body": "Ein Screenshot eines QR-Codes lässt sich auch dann decodieren, wenn die Kameraberechtigung verweigert wurde."
        }
      ],
      "explanation": "Zum Decodieren dient ein lokaler JavaScript-Leser, der Kamerabilder oder ein hochgeladenes Bild auswertet. Der Kamerazugriff beginnt erst, wenn Sie auf Kamera starten klicken. Die Spuren werden bei Stoppen, nach einem erfolgreichen Scan und beim Verlassen der Seite beendet. Eine erkannte URL wird zuerst angezeigt, das Öffnen ist ein eigener Schritt.",
      "limitations": "Angezeigt wird der erste Code, den der Leser findet. Andere Barcode-Arten werden nicht decodiert. Ein Link bleibt auf der Seite, bis Sie auf Link öffnen klicken, und die Kamera bleibt aus, bis Sie auf Kamera starten klicken.",
      "faqs": [
        {
          "question": "Ist der QR-Code-Scanner kostenlos?",
          "answer": "Ja. Einen QR-Code mit der Kamera oder aus einem Bild zu lesen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Werden Kamerabilder hochgeladen?",
          "answer": "Nein. Die Bilder nach Kamera starten und ein ausgewähltes PNG oder JPG werden in diesem Tab decodiert. Beides wird nicht an Tools Star Hub gesendet."
        },
        {
          "question": "Warum wurde die Website nicht automatisch geöffnet?",
          "answer": "Automatisch zu einer gescannten URL zu springen ist unsicher. Prüfen Sie den Text und nutzen Sie dann Link öffnen, wenn Sie ihm vertrauen."
        },
        {
          "question": "Was, wenn das Bild mehr als einen QR-Code enthält?",
          "answer": "Dieser Leser meldet den ersten Code, den er decodieren kann. Schneiden Sie das Bild zu, wenn Sie einen bestimmten Code brauchen."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "Der Kamerazugriff wird nur angefragt, wenn Sie mit der Kamera scannen möchten.",
      "Start camera": "Kamera starten",
      "Stop camera": "Kamera stoppen",
      "Or upload a QR image": "Oder ein QR-Bild hochladen",
      "Drag and drop a QR image here, or choose a file.": "Ziehen Sie ein QR-Bild hierher oder wählen Sie eine Datei.",
      "Image upload works even if the camera is blocked.": "Das Hochladen eines Bildes funktioniert auch bei blockierter Kamera.",
      "Scan result": "Scan-Ergebnis",
      "Open link": "Link öffnen",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Die Bilder nach Kamera starten und ein ausgewähltes PNG oder JPG werden in diesem Tab decodiert. Beides wird nicht an Tools Star Hub gesendet.",
      "This browser does not support camera access. Upload an image instead.": "Dieser Browser unterstützt keinen Kamerazugriff. Laden Sie stattdessen ein Bild hoch.",
      "Camera permission was denied. You can still upload an image.": "Die Kameraberechtigung wurde verweigert. Sie können trotzdem ein Bild hochladen.",
      "No camera was found. Upload an image instead.": "Es wurde keine Kamera gefunden. Laden Sie stattdessen ein Bild hoch.",
      "The camera could not be started. Upload an image instead.": "Die Kamera konnte nicht gestartet werden. Laden Sie stattdessen ein Bild hoch.",
      "This browser could not read that image.": "Dieser Browser konnte das Bild nicht lesen.",
      "No QR code was found in that image.": "In diesem Bild wurde kein QR-Code gefunden.",
      "That file could not be read as an image.": "Diese Datei ließ sich nicht als Bild lesen."
    }
  },
  "password-generator": {
    "answer": "Ein Passwort-Generator erstellt zufällige Passwörter aus den gewählten Zeichensätzen und nutzt dafür einen kryptografischen Zufallsgenerator.",
    "content": {
      "about": "Erzeugen Sie ein Passwort mit 8 bis 64 Zeichen aus den Zeichenarten Ihrer Wahl. Nutzen Sie das, wenn ein neues Konto eine gemischte Zeichenfolge braucht, die Sie noch nirgends verwendet haben. Die Stärkeangabe ist eine Schätzung aus Länge und Zeichensatzgröße und prüft nicht, ob eine Website gehackt wurde.",
      "howTo": [
        "Wählen Sie eine Länge von 8 bis 64 und die gewünschten Zeichenarten.",
        "Schließen Sie bei Bedarf verwechselbare Zeichen wie O, 0, I, l und 1 aus.",
        "Klicken Sie auf Erzeugen und kopieren Sie das Passwort. Nichts wird gespeichert."
      ],
      "examples": [
        {
          "title": "16 gemischte Zeichen",
          "body": "Ein Passwort mit 16 Zeichen aus Groß- und Kleinbuchstaben, Ziffern und Sonderzeichen hat einen großen Zeichenraum. Die Stärkeangabe ist eine Schätzung aus Länge und Zeichensatzgröße."
        },
        {
          "title": "Nur Buchstaben",
          "body": "Wenn Sie Ziffern und Sonderzeichen abschalten, wird der Zeichensatz kleiner. Mindestens eine Zeichenart muss weiterhin ausgewählt sein."
        }
      ],
      "explanation": "Jedes Zeichen wird mit crypto.getRandomValues() gewählt, nicht mit Math.random(). Der Generator nimmt aus jedem ausgewählten Satz mindestens ein Zeichen und füllt den Rest per unverzerrter Stichprobe aus dem Gesamtsatz. Die Stärkeangabe (Schwach / Mittel / Stark) wird aus Länge × log2(Zeichensatzgröße) geschätzt. Sie garantiert keinen Schutz vor Erraten, Wiederverwendung oder einem Datenleck.",
      "limitations": "Die Länge muss eine ganze Zahl von 8 bis 64 sein, und mindestens eine Zeichenart muss aktiv bleiben. Die Stärkeangabe ist eine Schätzung aus Länge und Zeichensatzgröße. Sie prüft weder Wiederverwendung noch Phishing noch gehackte Websites. Verwechselbare Zeichen lassen sich ausschließen, die übrige Sonderzeichenliste ist fest.",
      "faqs": [
        {
          "question": "Ist der Passwort-Generator kostenlos?",
          "answer": "Ja. Ein Passwort mit 8 bis 64 Zeichen zu erzeugen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Werden Passwörter gespeichert?",
          "answer": "Nein. Sie werden weder gespeichert noch protokolliert, in die URL geschrieben oder im localStorage abgelegt. Kopieren Sie den Wert, wenn Sie ihn brauchen."
        },
        {
          "question": "Heißt Stark, dass das Passwort nicht zu knacken ist?",
          "answer": "Nein. Die Anzeige ist eine Schätzung aus Länge und Zeichensatzgröße. Sie berücksichtigt weder Wiederverwendung noch Phishing noch einen kompromittierten Dienst."
        },
        {
          "question": "Wie lang sollte ein Passwort sein?",
          "answer": "Länger ist stärker. Viele Sicherheitsratgeber empfehlen für wichtige Konten mindestens 12 bis 16 Zeichen und für jede Website ein anderes Passwort."
        },
        {
          "question": "Ist ein Online-Passwort-Generator sicher?",
          "answer": "Dieser erstellt das Passwort mit crypto.getRandomValues in Ihrem Browser und sendet oder speichert es nicht. Bewahren Sie es in einem Passwort-Manager auf, nicht in einer Notiz."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "Von {0} bis {1} Zeichen.",
      "Uppercase letters": "Großbuchstaben",
      "Lowercase letters": "Kleinbuchstaben",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Verwechselbare Zeichen ausschließen (O, 0, I, l, 1)",
      "Generated password": "Erzeugtes Passwort",
      "Length: {0}": "Länge: {0}",
      "Character set size: {0}": "Zeichensatzgröße: {0}",
      "Estimated entropy: {0} bits ({1})": "Geschätzte Entropie: {0} Bit ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Diese Anzeige ist eine Schätzung aus Länge und Zeichensatzgröße. Sie ist keine Sicherheitsgarantie.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Passwörter werden mit crypto.getRandomValues in Ihrem Browser erstellt. Sie werden nicht gespeichert, protokolliert oder an einen Server gesendet.",
      "Enter a password length.": "Geben Sie eine Passwortlänge ein.",
      "Length must be a whole number.": "Die Länge muss eine ganze Zahl sein.",
      "Choose a length from {0} to {1}.": "Wählen Sie eine Länge von {0} bis {1}.",
      "Select at least one character type.": "Wählen Sie mindestens eine Zeichenart aus.",
      "Length must be at least the number of selected character types.": "Die Länge muss mindestens der Anzahl der gewählten Zeichenarten entsprechen."
    }
  },
  "qr-code-generator-pro": {
    "answer": "Der QR-Code-Generator Pro erstellt farbige QR-Codes für URLs, WLAN, E-Mail, Telefon, SMS oder Kontakte.",
    "content": {
      "about": "Erstellen Sie einen QR-Code für reinen Text, WLAN, E-Mail, Telefon, SMS oder einen vCard-Kontakt, mit Einstellungen für Farbe und Fehlerkorrektur. Nutzen Sie das, wenn ein Handy per Scan einem Netzwerk beitreten oder einen Kontakt speichern soll. Ein fehlender Netzwerkname wird abgelehnt, und der codierte Text darf weiterhin höchstens 1.200 Zeichen lang sein.",
      "howTo": [
        "Wählen Sie einen Typ: Text/URL, WLAN, E-Mail, Telefon, SMS oder Kontakt.",
        "Füllen Sie die Felder für diesen Typ aus. Ungültige Werte werden abgelehnt, bevor ein Code gezeichnet wird.",
        "Ändern Sie bei Bedarf Farben, Größe, Ruhezone und Fehlerkorrektur, erzeugen Sie dann den Code und laden Sie ein PNG herunter."
      ],
      "examples": [
        {
          "title": "WLAN",
          "body": "Ein WPA-Netzwerk namens Cafe wird als WIFI:T:WPA;S:Cafe;P:Password;; codiert."
        },
        {
          "title": "Telefon",
          "body": "Eine Nummer wie +1 202 555 0100 wird zu einem tel:-Inhalt ohne Leerzeichen."
        }
      ],
      "explanation": "Strukturierte Typen werden in die üblichen QR-Textformate umgewandelt (WIFI, mailto, tel, SMSTO, vCard 3.0). Erzeugt wird mit derselben lokalen QR-Bibliothek wie beim einfachen Generator. Inhalte werden weder gespeichert noch protokolliert oder in die Seiten-URL geschrieben.",
      "limitations": "Die Typen sind reiner Text, WLAN, E-Mail, Telefon, SMS und ein vCard-3.0-Kontakt. Ein fehlender Netzwerkname, eine E-Mail, die die einfache Prüfung nicht besteht, oder eine Telefonnummer mit anderen Zeichen als Ziffern und optional + ( ) wird abgelehnt, bevor ein Code gezeichnet wird. Der codierte Text darf weiterhin höchstens 1.200 Zeichen lang sein.",
      "faqs": [
        {
          "question": "Ist der QR-Code-Generator Pro kostenlos?",
          "answer": "Ja. QR-Codes für WLAN, E-Mail, Telefon, SMS, Kontakte oder Text zu erstellen ist kostenlos, ein Konto ist nicht nötig."
        },
        {
          "question": "Unterscheidet er sich vom einfachen QR-Generator?",
          "answer": "Ja. Das einfache Tool codiert reinen Text oder eine URL. Diese Version bietet zusätzlich strukturierte Typen, Farben und Einstellungen zur Fehlerkorrektur. Das einfache Tool bleibt unverändert."
        },
        {
          "question": "Werden WLAN-Passwörter gespeichert?",
          "answer": "Nein. Sie bleiben auf dieser Seite, bis Sie zurücksetzen oder die Seite verlassen. Sie werden weder im localStorage abgelegt noch an einen Server gesendet."
        },
        {
          "question": "Wie erstelle ich einen QR-Code für WLAN?",
          "answer": "Wählen Sie WLAN, geben Sie Netzwerkname, Passwort und Sicherheitstyp ein und laden Sie den Code herunter. Handys, die ihn scannen, können sich verbinden, ohne das Passwort einzutippen."
        },
        {
          "question": "Kann ich die Farben eines QR-Codes ändern?",
          "answer": "Ja, aber achten Sie auf starken Kontrast, mit dunklem Muster auf hellem Hintergrund, damit Kameras ihn weiterhin lesen können. Testen Sie den Code vor dem Drucken."
        }
      ]
    },
    "ui": {
      "QR type": "QR-Typ",
      "Network name (SSID)": "Netzwerkname (SSID)",
      "Security": "Sicherheit",
      "Hidden network": "Verstecktes Netzwerk",
      "Email": "E-Mail",
      "Subject (optional)": "Betreff (optional)",
      "Body (optional)": "Inhalt (optional)",
      "Phone number": "Telefonnummer",
      "Message (optional)": "Nachricht (optional)",
      "First name": "Vorname",
      "Last name": "Nachname",
      "Phone (optional)": "Telefon (optional)",
      "Email (optional)": "E-Mail (optional)",
      "Foreground": "Vordergrund",
      "Background": "Hintergrund",
      "Size": "Größe",
      "Quiet zone": "Ruhezone",
      "Error correction": "Fehlerkorrektur",
      "Generated QR code": "Erzeugter QR-Code",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "Der QR-Code wird in Ihrem Browser erzeugt. WLAN-Passwörter und andere Felder werden nicht gespeichert und an keinen Server gesendet.",
      "Foreground and background colors need to be different.": "Vorder- und Hintergrundfarbe müssen sich unterscheiden.",
      "Text / URL": "Text oder URL",
      "Wi-Fi": "WLAN",
      "Phone": "Telefon",
      "Contact": "Kontakt",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Kein Passwort",
      "Enter a hex color such as #336699.": "Geben Sie eine Hex-Farbe wie #336699 ein.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Verwenden Sie 3-, 6- oder 8-stelliges Hex, mit oder ohne #.",
      "Enter a network name (SSID).": "Geben Sie einen Netzwerknamen (SSID) ein.",
      "Enter the Wi-Fi password, or choose no password.": "Geben Sie das WLAN-Passwort ein oder wählen Sie Kein Passwort.",
      "Enter a valid email address.": "Geben Sie eine gültige E-Mail-Adresse ein.",
      "Enter a phone number, with digits and optional + ( ).": "Geben Sie eine Telefonnummer aus Ziffern und optional + ( ) ein.",
      "Enter a first or last name for the contact.": "Geben Sie einen Vor- oder Nachnamen für den Kontakt ein."
    }
  },
  "url-parser": {
    "answer": "Ein URL-Parser zerlegt eine absolute URL in Protokoll, Hostname, Port, Pfad, Fragment und jeden einzelnen Abfrageparameter. Die URL bleibt in Ihrem Browser.",
    "content": {
      "about": "Fügen Sie eine absolute URL ein und lesen Sie Protokoll, Hostname, Port, Pfad, Fragment und Abfrageparameter ab.",
      "howTo": [
        "Fügen Sie eine vollständige URL ein, die mit http oder https beginnt.",
        "Klicken Sie auf Zerlegen."
      ],
      "features": [
        "Jeder Abfrageschlüssel in einer eigenen Zeile.",
        "Leere Abfragewerte bleiben erhalten.",
        "Das Fragment wird getrennt vom Pfad angezeigt."
      ],
      "examples": [
        {
          "title": "Eine URL mit Port und zwei gleichen Schlüsseln",
          "body": "https://example.com:8080/docs?topic=a&topic= behält den Port 8080 und zwei topic-Zeilen, die zweite mit leerem Wert."
        }
      ],
      "explanation": "Die Seite nutzt den URL-Parser des Browsers. Doppelte Abfrageschlüssel bleiben getrennte Einträge. Ein fehlendes Protokoll oder ein relativer Pfad wird abgelehnt. Der Hostname ist der Wert, den der URL-Parser liefert, auch ein internationalisierter Name in seiner codierten Form.",
      "tips": [
        "Geben Sie https:// oder http:// mit an.",
        "Ein Rautezeichen nach der Abfrage leitet das Fragment ein, keinen weiteren Parameter."
      ],
      "limitations": "Nur absolute http- und https-URLs werden zerlegt. Die URL wird weder geöffnet noch irgendwohin gesendet.",
      "faqs": [
        {
          "question": "Wie wird eine URL zerlegt?",
          "answer": "Der URL-Parser des Browsers trennt Protokoll, Hostname, Port, Pfad, Fragment und jeden Abfrageparameter."
        },
        {
          "question": "Was passiert mit doppelten Abfrageschlüsseln?",
          "answer": "Jeder wird aufgeführt. Sie werden nicht zu einem Wert zusammengefasst."
        },
        {
          "question": "Und bei einem leeren Abfragewert?",
          "answer": "Ein Schlüssel ohne Inhalt nach dem Gleichheitszeichen bleibt erhalten und wird als leer angezeigt."
        },
        {
          "question": "Warum wird eine relative URL abgelehnt?",
          "answer": "Ein relativer Pfad hat weder Protokoll noch Host und ist daher keine absolute URL."
        },
        {
          "question": "Wird die URL an einen Server gesendet?",
          "answer": "Nein. Das Zerlegen geschieht in Ihrem Browser."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "Die URL wird in Ihrem Browser zerlegt. Sie wird an keinen anderen Dienst gesendet.",
      "Absolute URL": "Absolute Adresse",
      "Parse": "Zerlegen",
      "Query parameters": "Abfrageparameter",
      "No query parameters.": "Keine Abfrageparameter.",
      "(empty)": "(leer)",
      "Protocol": "Protokoll",
      "Hostname": "Hostname",
      "Port": "Port",
      "Path": "Pfad",
      "Fragment": "Fragment",
      "Enter an absolute URL.": "Geben Sie eine absolute URL ein.",
      "Enter a URL of 100000 characters or fewer.": "Geben Sie eine URL mit höchstens 100000 Zeichen ein.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Geben Sie eine absolute URL mit Protokoll ein, etwa https://.",
      "That text is not a valid absolute URL.": "Dieser Text ist keine gültige absolute URL.",
      "Enter an http or https URL.": "Geben Sie eine http- oder https-URL ein."
    }
  },
  "robots-txt-generator": {
    "answer": "Ein robots.txt-Generator schreibt User-agent-, Allow- und Disallow-Zeilen aus den Regeln, die Sie eingeben. Er kann eine Sitemap-URL ergänzen. Er veröffentlicht nichts und testet keine Live-Website.",
    "content": {
      "about": "Schreiben Sie robots.txt-Text aus einer oder mehreren User-agent-Gruppen und einer optionalen Sitemap-URL.",
      "howTo": [
        "Geben Sie einen User-agent ein.",
        "Fügen Sie Allow- und Disallow-Pfade hinzu, einen pro Zeile.",
        "Ergänzen Sie bei Bedarf eine Sitemap-URL.",
        "Klicken Sie auf Erzeugen."
      ],
      "features": [
        "Mehrere User-agent-Gruppen.",
        "Mehrere Allow- und Disallow-Zeilen.",
        "Eine optionale absolute Sitemap-URL."
      ],
      "examples": [
        {
          "title": "Ein privater Ordner",
          "body": "User-agent * mit Disallow: /admin weist Crawler an, Pfade unter /admin nicht abzurufen. Die Datei ist reiner Text."
        }
      ],
      "explanation": "Jede Gruppe beginnt mit User-agent, gefolgt von einer Allow-Zeile pro Pfad und einer Disallow-Zeile pro Pfad. Leere Pfadzeilen werden übersprungen. Eine Sitemap wird nur ergänzt, wenn sie eine absolute http- oder https-URL ist. Die Seite lädt die Datei nicht hoch und testet keine Live-Website.",
      "tips": [
        "Verwenden Sie * für alle Crawler.",
        "Schreiben Sie jeden Pfad in eine eigene Zeile."
      ],
      "limitations": "Das Ergebnis ist Text zum Kopieren. Es veröffentlicht keine Regeln und prüft nicht, was eine Live-Website erlaubt.",
      "faqs": [
        {
          "question": "Wie schreibt man eine robots.txt-Datei?",
          "answer": "Beginnen Sie mit einer User-agent-Zeile und fügen Sie dann Allow- und Disallow-Zeilen hinzu. Ergänzen Sie eine Sitemap-Zeile, wenn Sie eine absolute Sitemap-URL haben."
        },
        {
          "question": "Kann ich mehr als einen User-agent verwenden?",
          "answer": "Ja. Jede Gruppe hat ihren eigenen User-agent und eigene Regeln."
        },
        {
          "question": "Was passiert mit einem leeren Pfad?",
          "answer": "Eine leere Zeile wird übersprungen und erzeugt daher keine leere Allow- oder Disallow-Regel."
        },
        {
          "question": "Testet das meine Live-Website?",
          "answer": "Nein. Es erzeugt nur den Text. Es veröffentlicht die Datei nicht und ruft Ihre Website nicht auf."
        },
        {
          "question": "Welche Sitemap-URL wird akzeptiert?",
          "answer": "Eine absolute http- oder https-URL. Ein Pfad ohne Protokoll wird abgelehnt."
        },
        {
          "question": "Werden diese Angaben an einen Server gesendet?",
          "answer": "Nein. Die User-agent-Zeilen und Pfade werden in diesem Tab zusammengesetzt. Sie werden nicht hochgeladen, und die Seite ruft Ihre Website nicht auf."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Hier entsteht robots.txt-Text aus den Regeln, die Sie eingeben. Eine Live-Website wird weder getestet noch veröffentlicht.",
      "Group {0} user-agent": "User-agent der Gruppe {0}",
      "Allow paths, one per line": "Allow-Pfade, einer pro Zeile",
      "Disallow paths, one per line": "Disallow-Pfade, einer pro Zeile",
      "Remove group": "Gruppe entfernen",
      "Add group": "Gruppe hinzufügen",
      "Sitemap URL, optional": "Sitemap-URL, optional",
      "Add at least one user-agent group.": "Fügen Sie mindestens eine User-agent-Gruppe hinzu.",
      "Group {0} needs a user-agent.": "Gruppe {0} braucht einen User-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Geben Sie die Sitemap als absolute http- oder https-URL ein."
    }
  },
  "password-strength-checker": {
    "answer": "Ein Passwortstärke-Prüfer schätzt die Bits aus der Länge und den tatsächlich vorkommenden Zeichenarten. Er lädt das Passwort nicht hoch und gleicht es nicht mit einer Liste geleakter Passwörter ab.",
    "content": {
      "about": "Geben Sie ein Passwort ein und erhalten Sie die Bewertung Schwach, Mittel oder Stark. Die Schätzung nutzt die Länge und die Zeichenarten, die darin vorkommen. Sie sucht nicht nach Datenlecks und weiß nicht, ob eine Website das Passwort akzeptiert.",
      "howTo": [
        "Geben Sie das Passwort ein. Ein leeres Feld wird abgelehnt.",
        "Klicken Sie auf Prüfen.",
        "Lesen Sie Bewertung, Länge, geschätzte Bits und gefundene Zeichenarten ab."
      ],
      "features": [
        "Großbuchstaben, Kleinbuchstaben, Ziffern und der Sonderzeichensatz zählen nur, wenn sie vorkommen.",
        "Jedes andere Zeichen, auch ein Leerzeichen oder ein Backtick, erhöht den Vorrat um eins pro unterschiedlichem Zeichen.",
        "Schwach heißt unter 50 Bit, Mittel unter 80 und Stark 80 oder mehr."
      ],
      "examples": [
        {
          "title": "Ein kleingeschriebenes Wort",
          "body": "password besteht aus 8 Kleinbuchstaben. Der Vorrat ist 26, die Schätzung ergibt gerundet 38 Bit, die Bewertung ist Schwach."
        },
        {
          "title": "Buchstaben, eine Ziffer und ein Sonderzeichen",
          "body": "Abcdefghijklm12! hat 16 Zeichen mit Groß- und Kleinbuchstaben, Ziffern und einem Sonderzeichen. Der Vorrat ist 85, die Schätzung ergibt gerundet 103 Bit, die Bewertung ist Stark."
        }
      ],
      "explanation": "Die Bits sind die Länge mal der Zweierlogarithmus des Vorrats. Der Vorrat beträgt 26 für Großbuchstaben, wenn ein A bis Z vorkommt, 26 für Kleinbuchstaben, 10 für eine Ziffer und 23 für ein Sonderzeichen aus !@#$%^&*()-_=+[]{};:,.?. Ein Zeichen außerhalb dieser Sätze zählt nicht als ganzer Sonderzeichensatz, sondern als eins. Das ist nicht der Passwort-Generator, der ein Passwort nach den vor dem Erstellen gewählten Zeichenarten bewertet.",
      "tips": [
        "Ein längeres Passwort aus mehreren Zeichenarten wird besser bewertet als ein kurzes Wort.",
        "Nutzen Sie den Passwort-Generator, wenn Sie ein neues Passwort statt einer Bewertung möchten."
      ],
      "limitations": "Bis zu 256 Zeichen. Die Seite sucht nicht nach Datenlecks und weiß nicht, ob eine Website das Passwort akzeptiert. Buchstaben mit Akzent zählen als andere Zeichen, nicht als A bis Z.",
      "faqs": [
        {
          "question": "Ist der Passwortstärke-Prüfer kostenlos?",
          "answer": "Ja. Sie können hier ein Passwort bewerten, ohne zu bezahlen oder ein Konto anzulegen."
        },
        {
          "question": "Wird das Passwort mit geleakten Passwörtern verglichen?",
          "answer": "Nein. Die Bewertung beruht nur auf der Länge und den Zeichenarten Ihrer Eingabe."
        },
        {
          "question": "Warum ist ein Passwort nur aus Ziffern Schwach?",
          "answer": "Acht Ziffern nutzen einen Vorrat von 10. Das sind etwa 27 Bit, also unter 50, daher lautet die Bewertung Schwach."
        },
        {
          "question": "Wird das Passwort an einen Server gesendet?",
          "answer": "Nein. Die Prüfung läuft in diesem Browser-Tab. Tools Star Hub sendet das Passwort an keinen Server und speichert es nicht im lokalen Speicher."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} Zeichen, {1}, {2} Bit",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "Die Bewertung nutzt die Zeichenarten im eingegebenen Passwort. Es bleibt in diesem Tab, wird nicht hochgeladen und nicht mit einer Liste geleakter Passwörter verglichen.",
      "Show password": "Passwort anzeigen",
      "Check": "Prüfen",
      "Copy rating": "Bewertung kopieren",
      "Rating": "Bewertung",
      "Estimated bits": "Geschätzte Bits",
      "Enter a password.": "Geben Sie ein Passwort ein.",
      "Enter a password of {0} characters or fewer.": "Geben Sie ein Passwort mit höchstens {0} Zeichen ein.",
      "Uppercase": "Großbuchstaben",
      "Lowercase": "Kleinbuchstaben",
      "Other": "Andere"
    }
  },
  "meta-tag-generator": {
    "answer": "Ein Meta-Tag-Generator schreibt HTML-Tags für Titel, Beschreibung, Robots, Canonical, Open Graph und Twitter. Er ruft keine Seite ab.",
    "content": {
      "about": "Geben Sie einen Titel und die gewünschten optionalen Tags ein. Die Seite schreibt HTML, das Sie in den head-Bereich einer Seite einfügen können. Sie ruft keine Live-URL ab und prüft nicht, wie eine Website den Link teilt.",
      "howTo": [
        "Geben Sie einen Titel ein. Ein leerer Titel wird abgelehnt.",
        "Ergänzen Sie Beschreibung, Canonical-URL, Robots-Einstellungen und beliebige Open-Graph- oder Twitter-Felder.",
        "Klicken Sie auf Erzeugen und kopieren Sie das HTML."
      ],
      "features": [
        "Ein charset-Tag, ein Titel und ein robots-Tag in jedem Ergebnis.",
        "Optional Beschreibung, Canonical-Link, Open-Graph-Tags und Twitter-Tags.",
        "Anführungszeichen und kaufmännische Und-Zeichen im Text werden maskiert."
      ],
      "examples": [
        {
          "title": "Ein Titel und eine Beschreibung",
          "body": "Der Titel Sample page und die Beschreibung A short description of the page. ergeben mit index und follow ein charset-Tag, den Titel, die Beschreibung und ein robots-Tag mit index, follow."
        },
        {
          "title": "Ein Und-Zeichen im Titel",
          "body": "Der Titel A & B wird im title-Tag als A &amp; B geschrieben."
        }
      ],
      "explanation": "Das HTML wird aus den ausgefüllten Feldern zusammengesetzt. Leere optionale Felder werden weggelassen. Canonical-URL, Open-Graph-Bild, Open-Graph-URL und Twitter-Bild müssen absolute http- oder https-URLs sein. Die Seite ruft diese URLs nicht auf.",
      "tips": [
        "Nutzen Sie die Open-Graph-Felder hier, wenn Sie die Tags in Ihrem eigenen HTML brauchen. Eine Live-Vorschau beim Teilen ist eine andere Prüfung."
      ],
      "limitations": "Der Titel darf bis zu 200 Zeichen lang sein, die Beschreibung bis zu 500. Der Open-Graph-Typ ist website, article oder keiner. Die Twitter-Card ist summary, summary_large_image oder keine. Ein Twitter-Titel ohne Card wird abgelehnt.",
      "faqs": [
        {
          "question": "Ist der Meta-Tag-Generator kostenlos?",
          "answer": "Ja. Sie können die Tags hier schreiben, ohne zu bezahlen oder ein Konto anzulegen."
        },
        {
          "question": "Zeigt das, wie ein Link in sozialen Netzwerken aussieht?",
          "answer": "Nein. Es schreibt nur die Tags und öffnet die URL nicht."
        },
        {
          "question": "Welcher Robots-Wert wird geschrieben?",
          "answer": "Die Index-Auswahl und die Follow-Auswahl, etwa index, follow oder noindex, nofollow."
        },
        {
          "question": "Wird der Text an einen Server gesendet?",
          "answer": "Nein. Das HTML entsteht in diesem Browser-Tab. Tools Star Hub sendet diese Felder an keinen Server und speichert sie nicht im lokalen Speicher."
        }
      ]
    },
    "ui": {
      "Sample page": "Beispielseite",
      "A short description of the page.": "Eine kurze Beschreibung der Seite.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Hier entsteht HTML für den head-Bereich einer Seite. Es wird keine Live-URL abgerufen und nicht geprüft, wie eine Website den Link teilt.",
      "Title": "Titel",
      "Description": "Beschreibung",
      "Canonical URL, optional": "Canonical-URL, optional",
      "Robots index": "Robots: Index",
      "Robots follow": "Robots: Follow",
      "Open Graph title, optional": "Open-Graph-Titel, optional",
      "Open Graph description, optional": "Open-Graph-Beschreibung, optional",
      "Open Graph image URL, optional": "Open-Graph-Bild-URL, optional",
      "Open Graph URL, optional": "Open-Graph-URL, optional",
      "Open Graph type": "Open-Graph-Typ",
      "Twitter title, optional": "Twitter-Titel, optional",
      "Copy HTML": "HTML kopieren",
      "Head tags": "Head-Tags",
      "None": "Keine",
      "Enter a {0} of {1} characters or fewer.": "{0}: höchstens {1} Zeichen.",
      "Enter {0} as an absolute http or https URL.": "{0}: Geben Sie eine absolute http- oder https-URL ein.",
      "Enter a title.": "Geben Sie einen Titel ein.",
      "the canonical URL": "Canonical-URL",
      "Open Graph title": "Open-Graph-Titel",
      "Open Graph description": "Open-Graph-Beschreibung",
      "the Open Graph image URL": "Open-Graph-Bild-URL",
      "the Open Graph URL": "Open-Graph-URL",
      "Choose website, article, or no Open Graph type.": "Wählen Sie website, article oder keinen Open-Graph-Typ.",
      "Choose a Twitter card of summary or summary_large_image.": "Wählen Sie als Twitter-Card summary oder summary_large_image.",
      "the Twitter image URL": "Twitter-Bild-URL",
      "Choose a Twitter card before adding Twitter text or an image.": "Wählen Sie eine Twitter-Card, bevor Sie Twitter-Text oder ein Bild hinzufügen.",
      "title": "Titel",
      "description": "Beschreibung"
    }
  },
  "open-graph-preview": {
    "answer": "Eine Open-Graph-Vorschau sendet eine Seiten-URL an diese Website, liest den öffentlichen Titel und die Share-Tags und speichert die Seite nicht. Private und nicht-http-Adressen werden abgelehnt.",
    "content": {
      "about": "Geben Sie eine öffentliche http- oder https-URL ein. Vorschau prüfen sendet diese URL an diese Website. Die Website ruft die Seite ab und zeigt Titel, Beschreibung, Bild und Twitter-Card, die sie findet. Die Seite wird hier nicht gespeichert. Eine private oder lokale Adresse wird abgelehnt, bevor die Seite gelesen wird.",
      "howTo": [
        "Geben Sie eine absolute http- oder https-URL ein.",
        "Klicken Sie auf Vorschau prüfen.",
        "Lesen Sie die Karte. Bei einer abgelehnten Adresse, einer Zeitüberschreitung oder einer nicht-http-URL erscheint eine kurze Fehlermeldung ohne Seiteninhalt."
      ],
      "features": [
        "Titel, Beschreibung, Bildadresse und Twitter-Card-Felder der öffentlichen Seite.",
        "Die Adresse nach Weiterleitungen, sofern die Weiterleitung auf einer öffentlichen http- oder https-URL bleibt.",
        "Eine kurze Fehlermeldung, wenn die Adresse privat ist, die Anfrage zu lange dauert oder das Protokoll nicht http oder https ist."
      ],
      "examples": [
        {
          "title": "Eine öffentliche Seite",
          "body": "https://example.com/ liefert den Titel Example Domain. Diese Seite hat weder Beschreibung noch Bild noch Twitter-Card, daher zeigen diese Felder Nicht gefunden."
        },
        {
          "title": "Eine lokale Adresse",
          "body": "http://127.0.0.1/ und die Dezimalform http://2130706433/ zeigen beide Diese Adresse kann nicht abgerufen werden."
        }
      ],
      "explanation": "Der Browser sendet nur die URL an diese Website. Die Website löst den Host auf, lehnt private, Loopback-, Link-Local- und reservierte Adressen ab und prüft nach jeder Weiterleitung erneut. Sie liest höchstens 512 KiB der entpackten Seite und gibt dann die Tags zurück. Die Rohseite wird weder zurückgegeben noch gespeichert.",
      "tips": [
        "Nutzen Sie den Meta-Tag-Generator, wenn Sie die Tags selbst schreiben möchten. Diese Seite liest Tags, die bereits auf einer öffentlichen URL stehen."
      ],
      "limitations": "Nur http und https. Eine file-URL, eine URL mit Benutzername und eine private Adresse werden abgelehnt. Die Anfrage stoppt nach 8 Sekunden. Ein Share-Bild kann aufgeführt sein, auch wenn der Bild-Host das Vorschaubild blockiert.",
      "faqs": [
        {
          "question": "Ist die Open-Graph-Vorschau kostenlos?",
          "answer": "Ja. Sie können die Share-Tags einer öffentlichen Seite prüfen, ohne zu bezahlen oder ein Konto anzulegen. Die URL wird trotzdem an diese Website gesendet, damit die Tags gelesen werden können."
        },
        {
          "question": "Verlässt die URL dieses Gerät?",
          "answer": "Ja. Vorschau prüfen sendet die URL an diese Website, die die öffentliche Seite abruft und ihre Tags liest. Die Seite wird hier nicht gespeichert. Eine private oder nicht-http-Adresse wird abgelehnt."
        },
        {
          "question": "Warum wurde eine lokale URL abgelehnt?",
          "answer": "Adressen wie 127.0.0.1, ein privates Netzwerk und die Dezimalform einer Loopback-Adresse werden abgelehnt, bevor die Seite gelesen wird."
        },
        {
          "question": "Wie sieht eine Zeitüberschreitung aus?",
          "answer": "Die Karte wird nicht angezeigt. Die Seite meldet, dass die Vorschauanfrage zu lange gedauert hat."
        }
      ]
    },
    "ui": {
      "Not found": "Nicht gefunden",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Vorschau prüfen sendet die URL an diese Website. Die Website liest den Titel und die Share-Tags der öffentlichen Seite und speichert die Seite nicht. Eine private Adresse oder eine nicht-http-URL wird abgelehnt.",
      "Page URL": "Seiten-URL",
      "Checking the page…": "Seite wird geprüft…",
      "Image": "Bild",
      "The image address was found, but it did not load.": "Die Bildadresse wurde gefunden, das Bild ließ sich aber nicht laden.",
      "Twitter image": "Twitter-Bild",
      "That page could not be previewed.": "Diese Seite ließ sich nicht in der Vorschau anzeigen.",
      "Enter an http or https page URL.": "Geben Sie eine http- oder https-Seiten-URL ein.",
      "Checking…": "Wird geprüft…",
      "Check preview": "Vorschau prüfen",
      "That address cannot be fetched.": "Diese Adresse kann nicht abgerufen werden.",
      "The preview request timed out.": "Die Vorschauanfrage hat zu lange gedauert.",
      "That page redirected too many times.": "Diese Seite wurde zu oft weitergeleitet.",
      "That page is not HTML.": "Diese Seite ist kein HTML.",
      "Too many preview requests. Wait a minute and try again.": "Zu viele Vorschauanfragen. Warten Sie eine Minute und versuchen Sie es erneut.",
      "Send a JSON request with a url.": "Senden Sie eine JSON-Anfrage mit einer URL."
    }
  }
};

export default data;
