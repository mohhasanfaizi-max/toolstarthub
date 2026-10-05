import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Un générateur UTM ajoute des paramètres de campagne à une URL pour suivre l’origine du trafic dans vos outils d’analyse.",
    "content": {
      "about": "Ajoutez utm_source, utm_medium et utm_campaign à un lien, plus term et content en option. Les marketeurs s’en servent pour étiqueter un lien de campagne avant de le placer dans une annonce ou un e-mail. Un champ vide n’apparaît pas dans le lien, et cette page n’enregistre aucune visite et ne raccourcit pas l’adresse.",
      "howTo": [
        "Saisissez l’URL du site, avec ou sans https://.",
        "Remplissez la source, le support et la campagne. Term et content sont facultatifs.",
        "Copiez l’URL générée. Les paramètres de requête déjà présents dans le lien d’origine sont conservés."
      ],
      "examples": [
        {
          "title": "Un lien de campagne simple",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Une URL qui a déjà des paramètres",
          "body": "https://example.com/page?ref=nav conserve ref=nav et ajoute les champs UTM à côté."
        }
      ],
      "explanation": "Les paramètres UTM indiquent aux outils d’analyse d’où vient une visite. utm_source est la plateforme, utm_medium le canal et utm_campaign le nom de l’opération. utm_term et utm_content sont facultatifs. Les valeurs sont encodées pour l’URL afin que les espaces et les caractères spéciaux restent valides.",
      "limitations": "Une source, un support ou une campagne vide est omis au lieu d’être écrit comme paramètre vide. La page ne raccourcit pas l’adresse et n’enregistre aucune visite. Un texte qui n’est pas l’URL d’un site est refusé.",
      "faqs": [
        {
          "question": "Le générateur UTM est-il gratuit ?",
          "answer": "Oui. Ajouter utm_source, utm_medium et utm_campaign à un lien est gratuit, sans compte."
        },
        {
          "question": "Mes autres paramètres de requête seront-ils écrasés ?",
          "answer": "Non. Seuls les champs UTM que vous remplissez sont ajoutés ou mis à jour. Les autres paramètres restent tels quels."
        },
        {
          "question": "Cet outil appelle-t-il un service de suivi ?",
          "answer": "Non. Il construit seulement une URL dans votre navigateur. Le suivi a lieu plus tard, si vous utilisez le lien dans une configuration d’analyse."
        },
        {
          "question": "Que sont les paramètres UTM ?",
          "answer": "Les paramètres UTM sont des balises ajoutées à un lien, comme utm_source, utm_medium et utm_campaign, qui indiquent aux outils d’analyse d’où vient une visite."
        },
        {
          "question": "Quels paramètres UTM sont obligatoires ?",
          "answer": "La source, le support et la campagne sont le minimum habituel. Term et content sont facultatifs et aident à distinguer les mots-clés ou les versions d’annonce."
        }
      ]
    },
    "ui": {
      "Website URL": "URL du site",
      "Existing query parameters are kept. UTM values are added or updated.": "Les paramètres de requête existants sont conservés. Les valeurs UTM sont ajoutées ou mises à jour.",
      "Campaign source": "Source de la campagne",
      "Campaign medium": "Support de la campagne",
      "Campaign name": "Nom de la campagne",
      "Campaign term (optional)": "Terme de la campagne (facultatif)",
      "running shoes": "chaussures de course",
      "Campaign content (optional)": "Contenu de la campagne (facultatif)",
      "Copy URL": "Copier l’URL",
      "Enter a URL to generate a campaign link.": "Saisissez une URL pour générer un lien de campagne.",
      "Campaign URL": "URL de campagne",
      "Enter a website URL.": "Saisissez l’URL d’un site.",
      "Enter a valid website URL.": "Saisissez une URL de site valide."
    }
  },
  "slug-generator": {
    "answer": "Un générateur de slug transforme un titre en chaîne en minuscules, avec des tirets, utilisable sans risque dans une URL.",
    "content": {
      "about": "Transformez un titre en permalien en minuscules avec des tirets. Les rédacteurs s’en servent pour nommer un article avant de saisir l’adresse dans un CMS. Les accents latins sont retirés, des caractères comme 你好 sont conservés, et le résultat ne vérifie pas que l’adresse est libre.",
      "howTo": [
        "Saisissez ou collez un titre.",
        "Le slug se met à jour pendant la saisie.",
        "Copiez le slug ou videz le champ."
      ],
      "examples": [
        {
          "title": "Un titre de blog",
          "body": "« How to Compress an Image Without Losing Quality » devient how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Accents et autres écritures",
          "body": "Les accents latins sont retirés (Café → cafe). Des caractères comme 你好 sont conservés, pour que le slug reste lisible."
        }
      ],
      "explanation": "Le générateur supprime les espaces en début et fin, sépare les signes diacritiques après la normalisation Unicode NFKD, met les lettres latines en minuscules, remplace les autres séparateurs par des tirets et fusionne les répétitions. Il conserve les lettres et les chiffres Unicode au lieu d’effacer tout caractère non anglais. Le résultat est un permalien pratique, pas un identifiant garanti unique.",
      "limitations": "Les accents latins sont retirés, tandis que des caractères comme 你好 restent. Le résultat a la forme d’un permalien, mais ne prouve pas que l’adresse est libre. Certains créateurs de sites suppriment les lettres non latines ; pas cette page.",
      "faqs": [
        {
          "question": "Le générateur de slug est-il gratuit ?",
          "answer": "Oui. Transformer un titre en permalien avec des tirets est gratuit, et aucun compte n’est nécessaire."
        },
        {
          "question": "Cela convient-il à tous les CMS ?",
          "answer": "La plupart des sites acceptent les slugs en minuscules avec des tirets. Certains retirent les lettres non latines ; cet outil les garde lorsqu’il s’agit de lettres ou de chiffres."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le titre est réécrit dans cet onglet. Il n’est ni envoyé ni enregistré dans le stockage local."
        },
        {
          "question": "Qu’est-ce qu’un slug d’URL ?",
          "answer": "Un slug est la partie lisible d’une adresse web qui nomme une page, comme faire-du-pain dans example.com/blog/faire-du-pain."
        },
        {
          "question": "Qu’est-ce qu’un bon slug pour le SEO ?",
          "answer": "Gardez-le court, en minuscules et descriptif, avec des tirets entre les mots. Évitez les dates et les mots inutiles si la page risque d’être mise à jour."
        }
      ]
    },
    "ui": {
      "Title or text": "Titre ou texte",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Les accents sont retirés des lettres latines. Les autres caractères, comme le chinois, sont conservés.",
      "Example": "Exemple",
      "Copy slug": "Copier le slug",
      "Generated slug": "Slug généré",
      "How to Compress an Image Without Losing Quality": "Comment compresser une image sans perte de qualité"
    }
  },
  "qr-code-generator": {
    "answer": "Un générateur de code QR transforme un texte ou une URL en image QR téléchargeable, créée sur votre appareil.",
    "content": {
      "about": "Encodez un texte brut ou une URL sous forme de code QR au format PNG, jusqu’à 1 200 caractères. Utilisez-le pour un lien court que quelqu’un doit scanner. Les formats Wi-Fi, e-mail et contact se trouvent dans le générateur de code QR Pro, et une chaîne longue donne un motif dense que certains appareils photo ne lisent pas.",
      "howTo": [
        "Collez un texte ou une URL complète, avec https:// s’il s’agit d’un lien web.",
        "Appuyez sur Générer. Un aperçu et une description accessible apparaissent.",
        "Téléchargez le PNG, puis réinitialisez si vous avez besoin d’un autre code."
      ],
      "examples": [
        {
          "title": "Un site web",
          "body": "https://example.com devient un code QR qui ouvre cette adresse quand on le scanne."
        },
        {
          "title": "Texte brut",
          "body": "Une courte note ou un rappel Wi-Fi peut être encodé en texte. Restez sous 1 200 caractères pour que le motif reste lisible."
        }
      ],
      "explanation": "Un code QR est un code-barres matriciel. Cet outil construit le motif dans votre navigateur avec une bibliothèque côté client. Le texte n’est envoyé à aucune API de QR. Un contenu très long donne un code dense que beaucoup d’appareils photo lisent mal, c’est pourquoi la longueur est limitée.",
      "limitations": "Seuls un texte brut ou une URL sont encodés, et le texte doit faire 1 200 caractères au maximum. Les formats Wi-Fi, e-mail et contact se trouvent dans le générateur de code QR Pro. Une chaîne longue donne un motif dense que certains appareils photo ne lisent pas.",
      "faqs": [
        {
          "question": "Le générateur de code QR est-il gratuit ?",
          "answer": "Oui. Créer une image QR à partir d’un texte ou d’une URL dans ce navigateur est gratuit, sans compte."
        },
        {
          "question": "Le texte est-il envoyé ?",
          "answer": "Non. Le code QR est généré dans votre navigateur. Le texte n’est envoyé à aucun serveur."
        },
        {
          "question": "Tous les lecteurs liront-ils le PNG ?",
          "answer": "La plupart des appareils photo lisent un PNG bien contrasté d’une URL courte. Une impression minuscule, un faible éclairage ou un texte très long peuvent échouer."
        },
        {
          "question": "Les codes QR créés ici expirent-ils ?",
          "answer": "Non. Le texte ou le lien est enregistré directement dans le motif, sans service de redirection intermédiaire, donc le code fonctionne aussi longtemps que le lien lui-même."
        },
        {
          "question": "Comment créer un code QR pour un site web ?",
          "answer": "Collez l’adresse complète, avec https://, générez le code, téléchargez le PNG et testez-le avec l’appareil photo d’un téléphone avant de l’imprimer."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "Le code QR est créé dans votre navigateur. Gardez un contenu raisonnablement court.",
      "QR code for {0}": "Code QR pour {0}",
      "QR code for:": "Code QR pour :",
      "The QR code is generated in your browser. The text is not sent to a server.": "Le code QR est généré dans votre navigateur. Le texte n’est envoyé à aucun serveur."
    }
  },
  "qr-code-scanner": {
    "answer": "Un lecteur de code QR lit l’image QR que vous choisissez et affiche le texte décodé localement.",
    "content": {
      "about": "Lisez le premier code QR depuis l’appareil photo ou depuis un PNG ou un JPG. Utilisez-le quand vous voulez voir le texte avant de décider d’ouvrir un lien. L’appareil photo reste éteint jusqu’à ce que vous appuyiez sur Démarrer la caméra, et les autres types de codes-barres ne sont pas décodés.",
      "howTo": [
        "Appuyez sur Démarrer la caméra seulement si vous voulez scanner avec l’appareil photo. L’autorisation est demandée à ce moment-là, pas au chargement de la page.",
        "Gardez le code dans le cadre jusqu’à l’apparition d’un résultat, ou appuyez sur Arrêter la caméra pour libérer le flux.",
        "Si l’appareil photo est bloqué, importez plutôt un PNG ou un JPG du code.",
        "Copiez le résultat. S’il s’agit d’une URL http(s), Ouvrir le lien est proposé. La page ne navigue pas d’elle-même."
      ],
      "examples": [
        {
          "title": "Scan avec la caméra",
          "body": "Une fois la caméra démarrée, les images sont décodées dans l’onglet. Le flux s’arrête dès qu’un code est trouvé ou quand vous appuyez sur Arrêter."
        },
        {
          "title": "Import d’une image",
          "body": "Une capture d’écran d’un code QR peut être décodée même si l’accès à la caméra est refusé."
        }
      ],
      "explanation": "Le décodage utilise un lecteur JavaScript local sur les images de la caméra ou sur une image importée. L’accès à la caméra ne commence qu’après un clic sur Démarrer la caméra. Les pistes sont arrêtées sur Arrêter, après un scan réussi et quand vous quittez la page. Une URL détectée est d’abord affichée ; l’ouvrir est une action séparée.",
      "limitations": "Le code affiché est le premier que le lecteur trouve. Les autres types de codes-barres ne sont pas décodés. Un lien reste sur la page jusqu’à ce que vous appuyiez sur Ouvrir le lien, et la caméra reste éteinte jusqu’à ce que vous appuyiez sur Démarrer la caméra.",
      "faqs": [
        {
          "question": "Le lecteur de code QR est-il gratuit ?",
          "answer": "Oui. Lire un code QR avec la caméra ou depuis une image est gratuit, sans compte."
        },
        {
          "question": "Les images de la caméra sont-elles envoyées ?",
          "answer": "Non. Les images après Démarrer la caméra, et le PNG ou JPG que vous choisissez, sont décodés dans cet onglet. Rien n’est envoyé à Tools Star Hub."
        },
        {
          "question": "Pourquoi le site ne s’est-il pas ouvert automatiquement ?",
          "answer": "Ouvrir automatiquement une URL scannée n’est pas sûr. Vérifiez le texte, puis utilisez Ouvrir le lien si vous lui faites confiance."
        },
        {
          "question": "Et si l’image contient plusieurs codes QR ?",
          "answer": "Ce lecteur indique le premier code qu’il parvient à décoder. Recadrez l’image si vous avez besoin d’un code précis."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "L’accès à la caméra n’est demandé que si vous choisissez de scanner avec la caméra.",
      "Start camera": "Démarrer la caméra",
      "Stop camera": "Arrêter la caméra",
      "Or upload a QR image": "Ou importez une image QR",
      "Drag and drop a QR image here, or choose a file.": "Glissez-déposez une image QR ici, ou choisissez un fichier.",
      "Image upload works even if the camera is blocked.": "L’import d’image fonctionne même si la caméra est bloquée.",
      "Scan result": "Résultat du scan",
      "Open link": "Ouvrir le lien",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Les images après Démarrer la caméra, et le PNG ou JPG que vous choisissez, sont décodés dans cet onglet. Rien n’est envoyé à Tools Star Hub.",
      "This browser does not support camera access. Upload an image instead.": "Ce navigateur ne prend pas en charge l’accès à la caméra. Importez plutôt une image.",
      "Camera permission was denied. You can still upload an image.": "L’accès à la caméra a été refusé. Vous pouvez quand même importer une image.",
      "No camera was found. Upload an image instead.": "Aucune caméra trouvée. Importez plutôt une image.",
      "The camera could not be started. Upload an image instead.": "Impossible de démarrer la caméra. Importez plutôt une image.",
      "This browser could not read that image.": "Ce navigateur n’a pas pu lire cette image.",
      "No QR code was found in that image.": "Aucun code QR trouvé dans cette image.",
      "That file could not be read as an image.": "Ce fichier n’a pas pu être lu comme une image."
    }
  },
  "password-generator": {
    "answer": "Un générateur de mots de passe crée des mots de passe aléatoires à partir des jeux de caractères choisis, avec un générateur aléatoire cryptographique.",
    "content": {
      "about": "Générez un mot de passe de 8 à 64 caractères avec les types de caractères de votre choix. Utilisez-le quand un nouveau compte demande une chaîne variée que vous n’avez jamais réutilisée. L’indicateur de robustesse est une estimation à partir de la longueur et de la taille du jeu, et il ne vérifie pas si un site a été piraté.",
      "howTo": [
        "Choisissez une longueur de 8 à 64 et les types de caractères voulus.",
        "Excluez si besoin les caractères ambigus comme O, 0, I, l et 1.",
        "Appuyez sur Générer, puis copiez le mot de passe. Rien n’est enregistré."
      ],
      "examples": [
        {
          "title": "16 caractères variés",
          "body": "Un mot de passe de 16 caractères avec majuscules, minuscules, chiffres et symboles a un grand espace de caractères. L’indicateur de robustesse est une estimation à partir de la longueur et de la taille du jeu."
        },
        {
          "title": "Lettres seulement",
          "body": "Désactiver les chiffres et les symboles réduit le jeu. Le générateur exige toujours au moins un type sélectionné."
        }
      ],
      "explanation": "Chaque caractère est choisi avec crypto.getRandomValues(), pas Math.random(). Le générateur inclut au moins un caractère de chaque jeu sélectionné, puis complète à partir du jeu combiné par un tirage sans biais. L’indicateur (Faible / Moyen / Fort) est estimé par longueur × log2(taille du jeu). Ce n’est pas une garantie contre la devinette, la réutilisation ou une fuite de site.",
      "limitations": "La longueur doit être un nombre entier de 8 à 64, et au moins un type de caractères doit rester activé. L’indicateur estime la robustesse d’après la longueur et la taille du jeu. Il ne vérifie ni la réutilisation, ni le phishing, ni les sites piratés. Les caractères ambigus peuvent être exclus ; le reste de la liste de symboles est fixe.",
      "faqs": [
        {
          "question": "Le générateur de mots de passe est-il gratuit ?",
          "answer": "Oui. Générer un mot de passe de 8 à 64 caractères est gratuit, sans compte."
        },
        {
          "question": "Les mots de passe sont-ils enregistrés ?",
          "answer": "Non. Ils ne sont ni stockés, ni journalisés, ni placés dans l’URL, ni écrits dans le localStorage. Copiez la valeur si vous en avez besoin."
        },
        {
          "question": "Fort veut-il dire impossible à pirater ?",
          "answer": "Non. L’indicateur est une estimation à partir de la longueur et de la taille du jeu de caractères. Il ne tient compte ni de la réutilisation, ni du phishing, ni d’un service compromis."
        },
        {
          "question": "Quelle longueur doit faire un mot de passe ?",
          "answer": "Plus il est long, plus il est solide. Beaucoup de guides de sécurité conseillent au moins 12 à 16 caractères pour les comptes importants, avec un mot de passe différent pour chaque site."
        },
        {
          "question": "Un générateur de mots de passe en ligne est-il sûr ?",
          "answer": "Celui-ci crée le mot de passe dans votre navigateur avec crypto.getRandomValues et ne l’envoie ni ne l’enregistre. Conservez-le dans un gestionnaire de mots de passe plutôt que dans une note."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "De {0} à {1} caractères.",
      "Uppercase letters": "Lettres majuscules",
      "Lowercase letters": "Lettres minuscules",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Exclure les caractères ambigus (O, 0, I, l, 1)",
      "Generated password": "Mot de passe généré",
      "Length: {0}": "Longueur : {0}",
      "Character set size: {0}": "Taille du jeu de caractères : {0}",
      "Estimated entropy: {0} bits ({1})": "Entropie estimée : {0} bits ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Cet indicateur est une estimation à partir de la longueur et de la taille du jeu de caractères. Ce n’est pas une garantie de sécurité.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Les mots de passe sont créés avec crypto.getRandomValues dans votre navigateur. Ils ne sont ni stockés, ni journalisés, ni envoyés à un serveur.",
      "Enter a password length.": "Saisissez une longueur de mot de passe.",
      "Length must be a whole number.": "La longueur doit être un nombre entier.",
      "Choose a length from {0} to {1}.": "Choisissez une longueur de {0} à {1}.",
      "Select at least one character type.": "Sélectionnez au moins un type de caractères.",
      "Length must be at least the number of selected character types.": "La longueur doit être au moins égale au nombre de types de caractères sélectionnés."
    }
  },
  "qr-code-generator-pro": {
    "answer": "Le générateur de code QR Pro crée des codes QR en couleur pour des URL, le Wi-Fi, un e-mail, un téléphone, un SMS ou un contact.",
    "content": {
      "about": "Créez un code QR pour un texte brut, le Wi-Fi, un e-mail, un téléphone, un SMS ou un contact vCard, avec des réglages de couleur et de correction d’erreurs. Utilisez-le quand un téléphone doit rejoindre un réseau ou enregistrer un contact en scannant. Un nom de réseau manquant est refusé, et le texte encodé doit toujours tenir en 1 200 caractères.",
      "howTo": [
        "Choisissez un type : texte/URL, Wi-Fi, e-mail, téléphone, SMS ou contact.",
        "Remplissez les champs de ce type. Les valeurs invalides sont refusées avant que le code soit dessiné.",
        "Modifiez si besoin les couleurs, la taille, la zone de silence et la correction d’erreurs, puis générez et téléchargez un PNG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Un réseau WPA nommé Cafe est encodé ainsi : WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Téléphone",
          "body": "Un numéro comme +1 202 555 0100 devient un contenu tel: sans espaces."
        }
      ],
      "explanation": "Les types structurés sont convertis dans les formats texte QR habituels (WIFI, mailto, tel, SMSTO, vCard 3.0). La génération utilise la même bibliothèque QR locale que le générateur simple. Les contenus ne sont ni stockés, ni journalisés, ni placés dans l’URL de la page.",
      "limitations": "Les types sont le texte brut, le Wi-Fi, l’e-mail, le téléphone, le SMS et un contact vCard 3.0. Un nom de réseau manquant, un e-mail qui échoue à la vérification simple ou un numéro contenant autre chose que des chiffres et éventuellement + ( ) est refusé avant que le code soit dessiné. Le texte encodé doit toujours tenir en 1 200 caractères.",
      "faqs": [
        {
          "question": "Le générateur de code QR Pro est-il gratuit ?",
          "answer": "Oui. Créer un code QR Wi-Fi, e-mail, téléphone, SMS, contact ou texte est gratuit, sans compte."
        },
        {
          "question": "Est-il différent du générateur QR simple ?",
          "answer": "Oui. L’outil simple encode un texte brut ou une URL. Cette version ajoute des types structurés, des couleurs et des réglages de correction d’erreurs. L’outil simple reste inchangé."
        },
        {
          "question": "Les mots de passe Wi-Fi sont-ils enregistrés ?",
          "answer": "Non. Ils restent sur cette page jusqu’à ce que vous réinitialisiez ou partiez. Ils ne sont ni écrits dans le localStorage ni envoyés à un serveur."
        },
        {
          "question": "Comment créer un code QR pour le Wi-Fi ?",
          "answer": "Choisissez Wi-Fi, saisissez le nom du réseau, le mot de passe et le type de sécurité, puis téléchargez le code. Les téléphones qui le scannent peuvent se connecter sans taper le mot de passe."
        },
        {
          "question": "Puis-je changer les couleurs d’un code QR ?",
          "answer": "Oui, mais gardez un fort contraste, avec un motif foncé sur un fond clair, pour que les appareils photo puissent toujours le lire. Testez le code avant de l’imprimer."
        }
      ]
    },
    "ui": {
      "QR type": "Type de QR",
      "Network name (SSID)": "Nom du réseau (SSID)",
      "Security": "Sécurité",
      "Hidden network": "Réseau masqué",
      "Email": "E-mail",
      "Subject (optional)": "Objet (facultatif)",
      "Body (optional)": "Corps du message (facultatif)",
      "Phone number": "Numéro de téléphone",
      "Message (optional)": "Message (facultatif)",
      "First name": "Prénom",
      "Last name": "Nom",
      "Phone (optional)": "Téléphone (facultatif)",
      "Email (optional)": "E-mail (facultatif)",
      "Foreground": "Premier plan",
      "Background": "Arrière-plan",
      "Size": "Taille",
      "Quiet zone": "Zone de silence",
      "Error correction": "Correction d’erreurs",
      "Generated QR code": "Code QR généré",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "Le code QR est généré dans votre navigateur. Les mots de passe Wi-Fi et les autres champs ne sont ni stockés ni envoyés à un serveur.",
      "Foreground and background colors need to be different.": "Les couleurs de premier plan et d’arrière-plan doivent être différentes.",
      "Text / URL": "Texte / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Téléphone",
      "Contact": "Contact",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Sans mot de passe",
      "Enter a hex color such as #336699.": "Saisissez une couleur hexadécimale comme #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Utilisez un hexadécimal à 3, 6 ou 8 chiffres, avec ou sans #.",
      "Enter a network name (SSID).": "Saisissez un nom de réseau (SSID).",
      "Enter the Wi-Fi password, or choose no password.": "Saisissez le mot de passe Wi-Fi, ou choisissez Sans mot de passe.",
      "Enter a valid email address.": "Saisissez une adresse e-mail valide.",
      "Enter a phone number, with digits and optional + ( ).": "Saisissez un numéro de téléphone composé de chiffres et éventuellement de + ( ).",
      "Enter a first or last name for the contact.": "Saisissez un prénom ou un nom pour le contact."
    }
  },
  "url-parser": {
    "answer": "Un analyseur d’URL découpe une URL absolue en protocole, nom d’hôte, port, chemin, fragment et chaque paramètre de requête. L’URL reste dans votre navigateur.",
    "content": {
      "about": "Collez une URL absolue et lisez son protocole, son nom d’hôte, son port, son chemin, son fragment et ses paramètres de requête.",
      "howTo": [
        "Collez une URL complète qui commence par http ou https.",
        "Appuyez sur Analyser."
      ],
      "features": [
        "Chaque clé de requête sur sa propre ligne.",
        "Les valeurs de requête vides sont conservées.",
        "Le fragment est affiché séparément du chemin."
      ],
      "examples": [
        {
          "title": "Une URL avec un port et deux clés identiques",
          "body": "https://example.com:8080/docs?topic=a&topic= conserve le port 8080 et deux lignes topic, la seconde avec une valeur vide."
        }
      ],
      "explanation": "La page utilise l’analyseur d’URL du navigateur. Les clés de requête en double restent des entrées séparées. Un protocole manquant ou un chemin relatif est refusé. Le nom d’hôte est la valeur renvoyée par l’analyseur, y compris un nom internationalisé sous sa forme encodée.",
      "tips": [
        "Incluez https:// ou http://.",
        "Un dièse après la requête marque le fragment, pas un autre paramètre."
      ],
      "limitations": "Seules les URL absolues http et https sont analysées. L’URL n’est ni ouverte ni envoyée nulle part.",
      "faqs": [
        {
          "question": "Comment une URL est-elle analysée ?",
          "answer": "L’analyseur d’URL du navigateur sépare le protocole, le nom d’hôte, le port, le chemin, le fragment et chaque paramètre de requête."
        },
        {
          "question": "Que deviennent les clés de requête en double ?",
          "answer": "Chacune est listée. Elles ne sont pas fusionnées en une seule valeur."
        },
        {
          "question": "Et une valeur de requête vide ?",
          "answer": "Une clé sans rien après le signe égal est conservée et affichée comme vide."
        },
        {
          "question": "Pourquoi une URL relative est-elle refusée ?",
          "answer": "Un chemin relatif n’a ni protocole ni hôte, ce n’est donc pas une URL absolue."
        },
        {
          "question": "L’URL est-elle envoyée à un serveur ?",
          "answer": "Non. L’analyse se fait dans votre navigateur."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "L’URL est analysée dans votre navigateur. Elle n’est envoyée à aucun autre service.",
      "Absolute URL": "URL absolue",
      "Parse": "Analyser",
      "Query parameters": "Paramètres de requête",
      "No query parameters.": "Aucun paramètre de requête.",
      "(empty)": "(vide)",
      "Protocol": "Protocole",
      "Hostname": "Nom d’hôte",
      "Port": "Port",
      "Path": "Chemin",
      "Fragment": "Fragment",
      "Enter an absolute URL.": "Saisissez une URL absolue.",
      "Enter a URL of 100000 characters or fewer.": "Saisissez une URL de 100000 caractères au maximum.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Saisissez une URL absolue avec un protocole, comme https://.",
      "That text is not a valid absolute URL.": "Ce texte n’est pas une URL absolue valide.",
      "Enter an http or https URL.": "Saisissez une URL http ou https."
    }
  },
  "robots-txt-generator": {
    "answer": "Un générateur de robots.txt écrit des lignes User-agent, Allow et Disallow à partir des règles que vous saisissez. Il peut ajouter l’URL d’un sitemap. Il ne publie rien et ne teste pas un site en ligne.",
    "content": {
      "about": "Écrivez le texte d’un robots.txt à partir d’un ou plusieurs groupes user-agent et d’une URL de sitemap facultative.",
      "howTo": [
        "Saisissez un user-agent.",
        "Ajoutez les chemins Allow et Disallow, un par ligne.",
        "Ajoutez l’URL d’un sitemap si vous le souhaitez.",
        "Appuyez sur Générer."
      ],
      "features": [
        "Plusieurs groupes user-agent.",
        "Plusieurs lignes Allow et Disallow.",
        "Une URL de sitemap absolue facultative."
      ],
      "examples": [
        {
          "title": "Un dossier privé",
          "body": "User-agent * avec Disallow: /admin demande aux robots de ne pas explorer les chemins sous /admin. Le fichier est du texte seulement."
        }
      ],
      "explanation": "Chaque groupe commence par User-agent, puis une ligne Allow par chemin et une ligne Disallow par chemin. Les lignes de chemin vides sont ignorées. Un sitemap n’est ajouté que s’il s’agit d’une URL absolue http ou https. La page n’envoie pas le fichier et ne teste pas de site en ligne.",
      "tips": [
        "Utilisez * pour tous les robots.",
        "Mettez chaque chemin sur sa propre ligne."
      ],
      "limitations": "Le résultat est un texte à copier. Il ne publie aucune règle et ne vérifie pas ce qu’un site en ligne autorise.",
      "faqs": [
        {
          "question": "Comment écrire un fichier robots.txt ?",
          "answer": "Commencez par une ligne User-agent, puis ajoutez des lignes Allow et Disallow. Ajoutez une ligne Sitemap si vous avez une URL de sitemap absolue."
        },
        {
          "question": "Puis-je utiliser plusieurs user-agents ?",
          "answer": "Oui. Chaque groupe a son propre user-agent et ses propres règles."
        },
        {
          "question": "Que devient un chemin vide ?",
          "answer": "Une ligne vide est ignorée, elle ne crée donc pas de règle Allow ou Disallow vide."
        },
        {
          "question": "Cela teste-t-il mon site en ligne ?",
          "answer": "Non. L’outil génère seulement le texte. Il ne publie pas le fichier et n’interroge pas votre site."
        },
        {
          "question": "Quelle URL de sitemap est acceptée ?",
          "answer": "Une URL absolue http ou https. Un chemin sans protocole est refusé."
        },
        {
          "question": "Ces données sont-elles envoyées à un serveur ?",
          "answer": "Non. Les lignes user-agent et les chemins sont assemblés dans cet onglet. Ils ne sont pas envoyés, et la page n’interroge pas votre site."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Cet outil écrit le texte du robots.txt à partir des règles saisies. Il ne teste ni ne publie aucun site en ligne.",
      "Group {0} user-agent": "User-agent du groupe {0}",
      "Allow paths, one per line": "Chemins Allow, un par ligne",
      "Disallow paths, one per line": "Chemins Disallow, un par ligne",
      "Remove group": "Supprimer le groupe",
      "Add group": "Ajouter un groupe",
      "Sitemap URL, optional": "URL du sitemap, facultative",
      "Add at least one user-agent group.": "Ajoutez au moins un groupe user-agent.",
      "Group {0} needs a user-agent.": "Le groupe {0} a besoin d’un user-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Saisissez le sitemap sous forme d’URL absolue http ou https."
    }
  },
  "password-strength-checker": {
    "answer": "Un vérificateur de robustesse de mot de passe estime les bits à partir de la longueur et des types de caractères réellement présents. Il n’envoie pas le mot de passe et ne le compare pas à une liste de fuites.",
    "content": {
      "about": "Saisissez un mot de passe et obtenez une note Faible, Moyen ou Fort. L’estimation utilise la longueur et les types de caractères présents. Elle ne cherche pas dans les fuites de données et ne sait pas si un site acceptera le mot de passe.",
      "howTo": [
        "Saisissez le mot de passe. Un champ vide est refusé.",
        "Appuyez sur Vérifier.",
        "Lisez la note, la longueur, les bits estimés et les types de caractères trouvés."
      ],
      "features": [
        "Les majuscules, les minuscules, les chiffres et le jeu de symboles ne comptent que s’ils apparaissent.",
        "Tout autre caractère, y compris un espace ou un accent grave, ajoute un au réservoir pour chaque caractère distinct.",
        "Faible signifie moins de 50 bits, Moyen moins de 80, et Fort 80 ou plus."
      ],
      "examples": [
        {
          "title": "Un mot en minuscules",
          "body": "password compte 8 lettres minuscules. Le réservoir est de 26, l’estimation arrondie donne 38 bits, et la note est Faible."
        },
        {
          "title": "Des lettres, un chiffre et un symbole",
          "body": "Abcdefghijklm12! compte 16 caractères avec majuscules, minuscules, chiffres et un symbole. Le réservoir est de 85, l’estimation arrondie donne 103 bits, et la note est Fort."
        }
      ],
      "explanation": "Les bits valent la longueur multipliée par le logarithme en base 2 du réservoir. Le réservoir vaut 26 pour les majuscules si une lettre de A à Z apparaît, 26 pour les minuscules, 10 pour un chiffre et 23 pour un symbole de !@#$%^&*()-_=+[]{};:,.?. Un caractère hors de ces jeux ne compte pas comme le jeu de symboles entier : il ajoute un. Ce n’est pas le générateur de mots de passe, qui note un mot de passe d’après les types choisis avant sa création.",
      "tips": [
        "Un mot de passe plus long, avec plusieurs types de caractères, obtient une meilleure note qu’un mot court.",
        "Utilisez le générateur de mots de passe si vous voulez un nouveau mot de passe plutôt qu’une note."
      ],
      "limitations": "Jusqu’à 256 caractères. La page ne cherche pas dans les fuites et ne sait pas si un site acceptera le mot de passe. Les lettres accentuées comptent comme autres caractères, pas comme A à Z.",
      "faqs": [
        {
          "question": "Le vérificateur de robustesse est-il gratuit ?",
          "answer": "Oui. Vous pouvez noter un mot de passe ici sans payer ni créer de compte."
        },
        {
          "question": "Le mot de passe est-il comparé à des mots de passe divulgués ?",
          "answer": "Non. La note repose uniquement sur la longueur et les types de caractères saisis."
        },
        {
          "question": "Pourquoi un mot de passe composé uniquement de chiffres est-il Faible ?",
          "answer": "Huit chiffres utilisent un réservoir de 10. Cela fait environ 27 bits, moins de 50, donc la note est Faible."
        },
        {
          "question": "Le mot de passe est-il envoyé à un serveur ?",
          "answer": "Non. La vérification se fait dans cet onglet du navigateur. Tools Star Hub n’envoie pas le mot de passe à un serveur et ne l’enregistre pas dans le stockage local."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} caractères, {1}, {2} bits",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "La note utilise les types de caractères du mot de passe saisi. Il reste dans cet onglet, n’est pas envoyé et n’est pas comparé à une liste de fuites.",
      "Show password": "Afficher le mot de passe",
      "Check": "Vérifier",
      "Copy rating": "Copier la note",
      "Rating": "Note",
      "Estimated bits": "Bits estimés",
      "Enter a password.": "Saisissez un mot de passe.",
      "Enter a password of {0} characters or fewer.": "Saisissez un mot de passe de {0} caractères au maximum.",
      "Uppercase": "Majuscules",
      "Lowercase": "Minuscules",
      "Other": "Autres"
    }
  },
  "meta-tag-generator": {
    "answer": "Un générateur de balises meta écrit les balises HTML de titre, description, robots, canonique, Open Graph et Twitter. Il ne récupère aucune page.",
    "content": {
      "about": "Saisissez un titre et les balises facultatives voulues. La page écrit du HTML à coller dans le head d’une page. Elle ne récupère aucune URL en ligne et ne vérifie pas comment un site partagera le lien.",
      "howTo": [
        "Saisissez un titre. Un titre vide est refusé.",
        "Ajoutez une description, une URL canonique, les choix robots et les champs Open Graph ou Twitter voulus.",
        "Appuyez sur Générer, puis copiez le HTML."
      ],
      "features": [
        "Une balise charset, un titre et une balise robots dans chaque résultat.",
        "Description, lien canonique, balises Open Graph et balises Twitter en option.",
        "Les guillemets et les esperluettes du texte sont échappés."
      ],
      "examples": [
        {
          "title": "Un titre et une description",
          "body": "Le titre Sample page et la description A short description of the page., avec index et follow, donnent une balise charset, le titre, la description et une balise robots index, follow."
        },
        {
          "title": "Une esperluette dans le titre",
          "body": "Le titre A & B est écrit A &amp; B dans la balise title."
        }
      ],
      "explanation": "Le HTML est assemblé à partir des champs remplis. Les champs facultatifs vides sont omis. L’URL canonique, l’image Open Graph, l’URL Open Graph et l’image Twitter doivent être des URL absolues http ou https. La page n’interroge pas ces URL.",
      "tips": [
        "Utilisez les champs Open Graph ici quand vous voulez les balises dans votre propre HTML. Un aperçu de partage en ligne est une autre vérification."
      ],
      "limitations": "Le titre peut faire jusqu’à 200 caractères et la description jusqu’à 500. Le type Open Graph est website, article ou aucun. La carte Twitter est summary, summary_large_image ou aucune. Un titre Twitter sans carte est refusé.",
      "faqs": [
        {
          "question": "Le générateur de balises meta est-il gratuit ?",
          "answer": "Oui. Vous pouvez écrire les balises ici sans payer ni créer de compte."
        },
        {
          "question": "Cela montre-t-il l’aspect d’un lien sur un réseau social ?",
          "answer": "Non. L’outil écrit seulement les balises. Il n’ouvre pas l’URL."
        },
        {
          "question": "Quelle valeur robots est écrite ?",
          "answer": "Le choix index et le choix follow, par exemple index, follow ou noindex, nofollow."
        },
        {
          "question": "Le texte est-il envoyé à un serveur ?",
          "answer": "Non. Le HTML est construit dans cet onglet du navigateur. Tools Star Hub n’envoie pas ces champs à un serveur et ne les enregistre pas dans le stockage local."
        }
      ]
    },
    "ui": {
      "Sample page": "Page d’exemple",
      "A short description of the page.": "Une courte description de la page.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Cet outil écrit du HTML pour le head d’une page. Il ne récupère aucune URL en ligne et ne vérifie pas comment un site partagera le lien.",
      "Title": "Titre",
      "Description": "Description",
      "Canonical URL, optional": "URL canonique, facultative",
      "Robots index": "Robots : index",
      "Robots follow": "Robots : follow",
      "Open Graph title, optional": "Titre Open Graph, facultatif",
      "Open Graph description, optional": "Description Open Graph, facultative",
      "Open Graph image URL, optional": "URL de l’image Open Graph, facultative",
      "Open Graph URL, optional": "URL Open Graph, facultative",
      "Open Graph type": "Type Open Graph",
      "Twitter title, optional": "Titre Twitter, facultatif",
      "Copy HTML": "Copier le HTML",
      "Head tags": "Balises head",
      "None": "Aucun",
      "Enter a {0} of {1} characters or fewer.": "{0} : {1} caractères au maximum.",
      "Enter {0} as an absolute http or https URL.": "{0} : saisissez une URL absolue http ou https.",
      "Enter a title.": "Saisissez un titre.",
      "the canonical URL": "URL canonique",
      "Open Graph title": "Titre Open Graph",
      "Open Graph description": "Description Open Graph",
      "the Open Graph image URL": "URL de l’image Open Graph",
      "the Open Graph URL": "URL Open Graph",
      "Choose website, article, or no Open Graph type.": "Choisissez website, article ou aucun type Open Graph.",
      "Choose a Twitter card of summary or summary_large_image.": "Choisissez une carte Twitter summary ou summary_large_image.",
      "the Twitter image URL": "URL de l’image Twitter",
      "Choose a Twitter card before adding Twitter text or an image.": "Choisissez une carte Twitter avant d’ajouter du texte ou une image Twitter.",
      "title": "Titre",
      "description": "Description"
    }
  },
  "open-graph-preview": {
    "answer": "Un aperçu Open Graph envoie l’URL d’une page à ce site, lit le titre public et les balises de partage, et n’enregistre pas la page. Les adresses privées et non http sont refusées.",
    "content": {
      "about": "Saisissez une URL publique http ou https. Vérifier l’aperçu envoie cette URL à ce site. Le site récupère la page et affiche le titre, la description, l’image et la carte Twitter trouvés. La page n’est pas enregistrée ici. Une adresse privée ou locale est refusée avant la lecture de la page.",
      "howTo": [
        "Saisissez une URL absolue http ou https.",
        "Appuyez sur Vérifier l’aperçu.",
        "Lisez la carte. Une adresse refusée, un délai dépassé ou une URL non http affiche une courte erreur, sans contenu de page."
      ],
      "features": [
        "Les champs titre, description, adresse de l’image et carte Twitter de la page publique.",
        "L’adresse après redirections, lorsque la redirection reste sur une URL publique http ou https.",
        "Une courte erreur quand l’adresse est privée, que la requête expire ou que le protocole n’est ni http ni https."
      ],
      "examples": [
        {
          "title": "Une page publique",
          "body": "https://example.com/ renvoie le titre Example Domain. Cette page n’a ni description, ni image, ni carte Twitter, donc ces champs indiquent Introuvable."
        },
        {
          "title": "Une adresse locale",
          "body": "http://127.0.0.1/ et la forme décimale http://2130706433/ affichent toutes deux Cette adresse ne peut pas être récupérée."
        }
      ],
      "explanation": "Le navigateur envoie seulement l’URL à ce site. Le site résout l’hôte, refuse une adresse privée, de bouclage, lien-local ou réservée, et vérifie à nouveau après chaque redirection. Il lit au plus 512 Kio de la page décompressée, puis renvoie les balises. La page brute n’est ni renvoyée ni enregistrée.",
      "tips": [
        "Utilisez le générateur de balises meta pour écrire les balises vous-même. Cette page lit les balises déjà présentes sur une URL publique."
      ],
      "limitations": "Uniquement http et https. Une URL file, une URL avec nom d’utilisateur et une adresse privée sont refusées. La requête s’arrête après 8 secondes. Une image de partage peut être listée même si l’hôte de l’image bloque la vignette.",
      "faqs": [
        {
          "question": "L’aperçu Open Graph est-il gratuit ?",
          "answer": "Oui. Vous pouvez vérifier les balises de partage d’une page publique sans payer ni créer de compte. L’URL est tout de même envoyée à ce site pour que les balises puissent être lues."
        },
        {
          "question": "L’URL quitte-t-elle cet appareil ?",
          "answer": "Oui. Vérifier l’aperçu envoie l’URL à ce site, qui récupère la page publique et lit ses balises. La page n’est pas enregistrée ici. Une adresse privée ou non http est refusée."
        },
        {
          "question": "Pourquoi une URL locale a-t-elle été refusée ?",
          "answer": "Des adresses comme 127.0.0.1, un réseau privé et la forme décimale d’une adresse de bouclage sont refusées avant la lecture de la page."
        },
        {
          "question": "À quoi ressemble un délai dépassé ?",
          "answer": "La carte ne s’affiche pas. La page indique que la requête d’aperçu a expiré."
        }
      ]
    },
    "ui": {
      "Not found": "Introuvable",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Vérifier l’aperçu envoie l’URL à ce site. Le site lit le titre et les balises de partage de la page publique et n’enregistre pas la page. Une adresse privée ou une URL non http est refusée.",
      "Page URL": "URL de la page",
      "Checking the page…": "Vérification de la page…",
      "Image": "Image",
      "The image address was found, but it did not load.": "L’adresse de l’image a été trouvée, mais l’image ne s’est pas chargée.",
      "Twitter image": "Image Twitter",
      "That page could not be previewed.": "Impossible d’afficher l’aperçu de cette page.",
      "Enter an http or https page URL.": "Saisissez l’URL d’une page http ou https.",
      "Checking…": "Vérification…",
      "Check preview": "Vérifier l’aperçu",
      "That address cannot be fetched.": "Cette adresse ne peut pas être récupérée.",
      "The preview request timed out.": "La requête d’aperçu a expiré.",
      "That page redirected too many times.": "Cette page a été redirigée trop de fois.",
      "That page is not HTML.": "Cette page n’est pas du HTML.",
      "Too many preview requests. Wait a minute and try again.": "Trop de demandes d’aperçu. Patientez une minute et réessayez.",
      "Send a JSON request with a url.": "Envoyez une requête JSON avec une URL."
    }
  }
};

export default data;
