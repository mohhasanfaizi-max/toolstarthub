import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Un générateur de prompts IA assemble un prompt structuré à partir du sujet, de l’objectif, du public et du format que vous saisissez. « Générer le prompt » reste dans votre navigateur. « Générer avec l’IA » envoie ces champs à l’API Gemini de Google via ToolStarHub.",
    "content": {
      "about": "Le générateur de prompts IA transforme les champs remplis en un prompt que vous pouvez copier. Un préréglage ne remplit que l’usage, le ton, le format, le niveau de détail et une première consigne. C’est à vous d’indiquer le sujet.",
      "howTo": [
        "Choisissez un préréglage ou saisissez votre propre usage.",
        "Indiquez un sujet ou un objectif. L’un des deux est obligatoire.",
        "Précisez le public, le ton, la langue, le format et le niveau de détail souhaité.",
        "Cliquez sur « Générer le prompt » pour l’assembler dans votre navigateur, ou sur « Générer avec l’IA » pour que Gemini le peaufine.",
        "Utilisez « Effacer » pour réinitialiser le formulaire."
      ],
      "features": [
        "Douze préréglages pour articles, publications, scripts, fiches produit, plans de recherche et tâches de code.",
        "Un prompt structuré qui précise la tâche, le public, le ton, la langue et le format.",
        "Une ligne qui demande au modèle de ne pas inventer les faits manquants.",
        "Copier et effacer. Rien n’est enregistré."
      ],
      "examples": [
        {
          "title": "Un article de blog sur l’âge des personnes nées un 29 février",
          "body": "Préréglage : article de blog. Sujet : comment calculer l’âge d’une personne née le 29 février. Public : personnes qui utilisent un calculateur de dates. Le prompt demande une introduction courte et pas de conclusion gonflée."
        },
        {
          "title": "Une tâche de programmation",
          "body": "Préréglage : prompt de code. Objectif : écrire une fonction qui refuse une plage de pages vide. Consigne supplémentaire : utiliser TypeScript et montrer un exemple en échec. Le prompt demande le langage, les entrées et ce qui compte comme terminé."
        }
      ],
      "explanation": "« Générer le prompt » réunit vos réponses en lignes étiquetées. Si le sujet et l’objectif sont tous deux vides, l’outil s’arrête et vous demande l’un des deux. « Générer avec l’IA » envoie ces champs à Gemini et renvoie un prompt peaufiné.",
      "limitations": "« Générer le prompt » assemble uniquement les champs remplis et exige un sujet ou un objectif. Un préréglage remplit les champs de style mais n’invente pas de sujet. « Générer avec l’IA » peaufine le prompt avec Gemini. La page n’exécute pas le prompt dans un modèle de rédaction.",
      "tips": [
        "Nommez les lecteurs. « Jeunes parents » aide davantage que « tout le monde ».",
        "Dites à quoi doit ressembler le résultat : une liste, un e-mail, un script.",
        "Placez les faits connus dans les consignes supplémentaires pour que le modèle n’ait pas à les deviner."
      ],
      "faqs": [
        {
          "question": "Cet outil utilise-t-il l’IA ?",
          "answer": "« Générer le prompt » construit le prompt sur cette page. « Générer avec l’IA » envoie les champs à l’API Gemini de Google via ToolStarHub et renvoie un prompt peaufiné. Vous pouvez coller l’un ou l’autre dans un autre modèle."
        },
        {
          "question": "Et si je ne connais que le sujet ?",
          "answer": "Un sujet suffit pour générer. Ajoutez un objectif quand vous savez ce que les lecteurs doivent pouvoir faire ensuite."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Générer le prompt » reste dans cet onglet et n’envoie pas les champs. « Générer avec l’IA » envoie les champs à l’API Gemini de Google via ToolStarHub et renvoie un prompt peaufiné. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits."
        },
        {
          "question": "Qu’est-ce qu’un bon prompt IA ?",
          "answer": "Dites ce que vous voulez, pour qui, le ton, le format et la longueur. Un objectif clair et un exemple du résultat aident généralement plus que des adjectifs en plus."
        },
        {
          "question": "Puis-je utiliser le prompt dans ChatGPT, Gemini ou Claude ?",
          "answer": "Oui. Le résultat est du texte brut que vous pouvez coller dans n’importe quel assistant conversationnel. Des modèles différents peuvent toutefois répondre différemment au même prompt."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "« Générer le prompt » construit un prompt dans votre navigateur. « Générer avec l’IA » envoie les champs remplis à l’API Gemini de Google via ToolStarHub et renvoie un prompt rédigé. Le texte n’est pas enregistré.",
      "Platform or use case": "Plateforme ou usage",
      "Topic": "Sujet",
      "Goal": "Objectif",
      "Audience": "Public",
      "Tone": "Ton",
      "Language": "Langue",
      "Output format": "Format de sortie",
      "Level of detail": "Niveau de détail",
      "Brief": "Bref",
      "Medium": "Moyen",
      "High": "Élevé",
      "Additional instructions": "Consignes supplémentaires",
      "Generate prompt": "Générer le prompt",
      "Prompt": "Prompt",
      "AI prompt": "Prompt IA",
      "Blog article": "Article de blog",
      "SEO article": "Article SEO",
      "Social media post": "Publication sur les réseaux sociaux",
      "YouTube script": "Script YouTube",
      "YouTube thumbnail prompt": "Prompt de miniature YouTube",
      "Image generation": "Génération d’images",
      "Video generation": "Génération de vidéos",
      "Product description": "Description de produit",
      "Email": "E-mail",
      "Marketing copy": "Texte marketing",
      "Academic/research prompt": "Prompt académique/de recherche",
      "Coding prompt": "Prompt de code",
      "Add a topic or a goal before generating a prompt.": "Indiquez un sujet ou un objectif avant de générer un prompt."
    },
    "note": "« Générer le prompt » rédige le prompt en anglais, la langue que les modèles d’IA suivent le plus fidèlement. Le champ « Langue » fixe la langue de la réponse. « Générer avec l’IA » comprend aussi les saisies en français."
  },
  "prompt-to-image": {
    "answer": "Un outil prompt vers image rédige un prompt d’image à copier à partir du sujet et du style. Il ne crée pas l’image. « Générer avec l’IA » renvoie seulement un prompt plus détaillé.",
    "content": {
      "about": "Le générateur prompt vers image rédige un prompt pour un modèle d’image. Vous décrivez le sujet, le lieu, la lumière et le cadrage. La page ne dessine pas l’image, car aucune API d’image n’est connectée.",
      "howTo": [
        "Choisissez un préréglage de style si vous voulez un point de départ.",
        "Décrivez le sujet. Sans sujet, l’outil ne crée pas de prompt.",
        "Ajoutez le décor, la lumière, la caméra, les couleurs, l’ambiance et le format si ces détails comptent.",
        "Saisissez un prompt négatif pour ce qui doit rester hors de l’image.",
        "Cliquez sur « Créer le prompt », puis copiez séparément le prompt et le prompt négatif."
      ],
      "features": [
        "Préréglages photo, cinéma, illustration, produit, portrait, paysage, architecture, fantasy, anime, 3D et miniature.",
        "Des boutons de copie distincts pour le prompt principal et le prompt négatif.",
        "Les champs vides sont omis pour éviter des étiquettes vides dans le prompt."
      ],
      "examples": [
        {
          "title": "Une photo de produit",
          "body": "Sujet : une gourde en acier inoxydable. Préréglage : photographie de produit. Format : 1:1. Prompt négatif : logos supplémentaires, personnes, table encombrée. Le résultat est une description de studio, pas un fichier."
        },
        {
          "title": "Une miniature",
          "body": "Sujet : une personne tenant un PDF surligné. Préréglage : miniature YouTube. La composition reste « un seul sujet, de la place pour un titre court ». Le texte du titre, c’est toujours vous qui l’écrivez."
        }
      ],
      "explanation": "Chaque champ rempli devient une courte proposition. Le sujet est obligatoire pour que le prompt décrive quelque chose de précis. Un préréglage change le style et quelques champs liés, mais n’efface pas le sujet déjà saisi.",
      "limitations": "La page rédige un prompt et, si vous le souhaitez, un prompt négatif. Elle ne fournit pas de fichier image. Le sujet est obligatoire. « Générer avec l’IA » demande à Gemini un prompt plus long, que vous collez ensuite dans un outil d’image.",
      "tips": [
        "Un sujet unique est plus facile à décrire qu’une foule.",
        "Nommez la lumière. « Lumière de fenêtre » et « soleil dur de midi » donnent des images très différentes.",
        "Utilisez le prompt négatif pour les défauts récurrents, comme des doigts en trop ou un texte déformé."
      ],
      "faqs": [
        {
          "question": "Pourquoi n’y a-t-il pas d’image ?",
          "answer": "Cette page rédige un prompt et n’affiche aucune image. « Générer avec l’IA » demande à Gemini un prompt plus détaillé. Collez-le dans un service qui crée des images."
        },
        {
          "question": "Tous les modèles lisent-ils le prompt de la même façon ?",
          "answer": "Non. Les modèles réagissent différemment aux formulations. Considérez le résultat comme un brief clair et ajustez-le pour votre outil."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Créer le prompt » reste dans ce navigateur et n’envoie pas le brief. « Générer avec l’IA » envoie le brief à l’API Gemini de Google via ToolStarHub et renvoie un prompt plus long. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits. La page ne crée toujours pas d’image."
        },
        {
          "question": "Comment écrire un bon prompt d’image ?",
          "answer": "Commencez par le sujet, puis ajoutez le décor, la lumière, le style photo ou artistique, la palette de couleurs, l’ambiance et le format. Soyez précis sur ce qui compte et laissez le reste de côté."
        },
        {
          "question": "Qu’est-ce qu’un prompt négatif ?",
          "answer": "Un prompt négatif liste ce qui doit rester hors de l’image, comme du texte, des doigts en trop ou du flou. Tous les modèles d’image ne le lisent pas."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "« Créer le prompt » rédige un prompt d’image dans votre navigateur. « Générer avec l’IA » envoie votre brief à l’API Gemini de Google via ToolStarHub et renvoie un prompt d’image plus riche. Cette page ne crée pas d’image. Le texte n’est pas enregistré.",
      "Style presets": "Préréglages de style",
      "Composition": "Composition",
      "Colors": "Couleurs",
      "Quality and detail": "Qualité et détails",
      "Things you want left out of the picture.": "Ce qui doit rester hors de l’image.",
      "Image prompt": "Prompt d’image",
      "AI image prompt": "Prompt d’image IA",
      "Photorealistic": "Photoréaliste",
      "Cinematic": "Cinématographique",
      "Illustration": "Illustration",
      "Product photography": "Photographie de produit",
      "Portrait": "Portrait",
      "Landscape": "Paysage",
      "Architecture": "Architecture",
      "Fantasy": "Fantasy",
      "Anime": "Anime",
      "3D render": "Rendu 3D",
      "YouTube thumbnail": "Miniature YouTube",
      "Describe the subject before building the prompt.": "Décrivez le sujet avant de créer le prompt."
    },
    "note": "Le prompt créé utilise des étiquettes en anglais, que les modèles d’image comprennent le mieux. Vous pouvez saisir vos descriptions dans n’importe quelle langue."
  },
  "prompt-to-video": {
    "answer": "Un outil prompt vers vidéo rédige une description de plan à coller dans un modèle vidéo. Il ne produit pas de clip. « Générer avec l’IA » renvoie seulement le prompt écrit.",
    "content": {
      "about": "Le générateur prompt vers vidéo rédige la description d’un seul plan : qui ou quoi est à l’image, ce qui bouge, comment la caméra se déplace et combien de temps dure le plan. Il ne crée pas de vidéo.",
      "howTo": [
        "Choisissez un préréglage comme style de départ, ou laissez les champs vides et écrivez vous-même.",
        "Indiquez un sujet ou une action. L’un des deux est obligatoire.",
        "Décrivez la scène, la caméra, l’objectif, la lumière, la durée et le format.",
        "N’ajoutez du son ou des dialogues que si le plan en a besoin.",
        "Cliquez sur « Créer le prompt » et copiez le texte. « Effacer » réinitialise le formulaire, y compris la durée par défaut."
      ],
      "features": [
        "Préréglages cinéma, publicité produit, réseaux sociaux, YouTube, documentaire, voyage, action, mode, nature, scènes historiques et animation.",
        "Une ligne finale qui limite la demande à un seul plan continu.",
        "Un prompt négatif séparé pour les défauts de mouvement ou d’image à éviter."
      ],
      "examples": [
        {
          "title": "Un produit en orbite",
          "body": "Sujet : une tasse en céramique. Action : de la vapeur s’élève. Préréglage : publicité produit. La durée reste à 6 secondes. Le prompt demande un mouvement circulaire et un éclairage de studio."
        },
        {
          "title": "Un plan de voyage paisible",
          "body": "Sujet : un sentier côtier. Action : une personne s’éloigne de la caméra. Préréglage : voyage. Indiquez le moment de la journée dans le champ décor pour que la lumière ne reste pas vague."
        }
      ],
      "explanation": "Les modèles vidéo gèrent mieux une seule action qu’une suite de scènes. Le générateur garde vos propositions dans un ordre stable et ajoute « un seul plan continu » pour que la demande ne devienne pas un storyboard.",
      "limitations": "Le générateur décrit un seul plan continu. Il ne produit ni ne télécharge de vidéo. Il faut un sujet ou une action. La durée, la caméra et les dialogues ne sont inclus que si vous les saisissez.",
      "tips": [
        "Dites ce qui bouge et ce qui reste immobile.",
        "Une durée comme « 5 secondes » est plus utile que « court ».",
        "Si vous avez besoin d’un dialogue, écrivez la réplique. Ne demandez pas au modèle d’inventer un discours."
      ],
      "faqs": [
        {
          "question": "Puis-je télécharger une vidéo depuis cette page ?",
          "answer": "Non. Cette page ne produit pas de vidéo. « Générer avec l’IA » renvoie seulement un prompt de plan écrit par Gemini. Copiez-le dans un outil vidéo de confiance."
        },
        {
          "question": "Et si je ne décris que l’action ?",
          "answer": "Une action suffit. Ajouter un sujet rend le plan plus facile à imaginer."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Créer le prompt » rédige le plan dans cet onglet. « Générer avec l’IA » envoie les champs du plan à l’API Gemini de Google via ToolStarHub et renvoie un prompt écrit. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits. Aucun fichier vidéo n’est créé."
        },
        {
          "question": "Comment écrire un prompt pour une vidéo IA ?",
          "answer": "Décrivez un seul plan : le sujet, l’action, le décor, le mouvement de caméra, l’objectif, la lumière et la durée. Des prompts courts et concrets fonctionnent généralement mieux que de longues histoires."
        },
        {
          "question": "Quels modèles vidéo peuvent utiliser ces prompts ?",
          "answer": "Le résultat est du texte brut, vous pouvez donc le coller dans n’importe quel outil texte vers vidéo. Chaque modèle suit à sa manière les indications de caméra et de durée."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "« Créer le prompt » rédige un prompt vidéo dans votre navigateur. « Générer avec l’IA » envoie votre brief à l’API Gemini de Google via ToolStarHub et renvoie un prompt de plan. Cette page ne crée pas de vidéo. Le texte n’est pas enregistré.",
      "Video subject": "Sujet de la vidéo",
      "Scene": "Scène",
      "Action": "Action",
      "Camera movement": "Mouvement de caméra",
      "Lens": "Objectif",
      "Visual style": "Style visuel",
      "Duration": "Durée",
      "Audio or dialogue": "Son ou dialogue",
      "Video prompt": "Prompt vidéo",
      "AI video prompt": "Prompt vidéo IA",
      "Cinematic": "Cinématographique",
      "Product commercial": "Publicité produit",
      "Social media": "Réseaux sociaux",
      "YouTube": "YouTube",
      "Documentary": "Documentaire",
      "Travel": "Voyage",
      "Fashion": "Mode",
      "Nature": "Nature",
      "Historical": "Historique",
      "Animation": "Animation",
      "Add a subject or an action before building the prompt.": "Indiquez un sujet ou une action avant de créer le prompt."
    },
    "note": "Le prompt créé utilise des étiquettes en anglais, que les modèles vidéo comprennent le mieux. Vous pouvez saisir vos descriptions dans n’importe quelle langue."
  },
  "ai-article-detector": {
    "answer": "Cette page examine des schémas d’écriture comme la longueur des phrases et les tournures répétées. « Analyser avec l’IA » est aussi une analyse de schémas d’écriture. Elle ne décide pas si un humain ou un modèle a écrit le texte.",
    "content": {
      "about": "Le détecteur d’articles IA examine le brouillon collé et indique la longueur des phrases, l’écart entre ces longueurs, l’étendue du vocabulaire et les tournures courtes qui se répètent. Le résultat s’appelle « analyse des schémas d’écriture », et il ne prétend rien de plus.",
      "howTo": [
        "Collez au moins 40 mots.",
        "Cliquez sur « Analyser le texte » pour la vérification dans le navigateur, ou sur « Analyser avec l’IA » pour une analyse des schémas d’écriture par Gemini.",
        "Lisez les valeurs et la remarque en dessous.",
        "Si l’échantillon est trop court, la page le dit au lieu de lui attribuer une note.",
        "« Effacer » retire le texte de la page."
      ],
      "features": [
        "Longueur moyenne des phrases avec une variation faible, modérée ou variée.",
        "Une évaluation du vocabulaire selon le nombre de mots différents.",
        "Les tournures de quatre mots qui apparaissent trois fois ou plus.",
        "Une courte liste de formules toutes faites, s’il y en a."
      ],
      "examples": [
        {
          "title": "Un brouillon qui se répète",
          "body": "Si les mêmes quatre mots apparaissent dans plusieurs phrases, ils s’affichent avec leur nombre. Cela signifie que le brouillon se répète, pas qu’un modèle l’a écrit."
        },
        {
          "title": "Une courte légende",
          "body": "Vingt mots ne suffisent pas. L’outil demande 40 mots pour qu’une seule phrase ne passe pas pour un schéma."
        }
      ],
      "explanation": "La variation des phrases compare la dispersion des longueurs à la moyenne. Le vocabulaire compare les mots différents au total. Ces deux valeurs bougent avec une relecture normale. Un brouillon humain soigné peut paraître régulier, un texte généré peut paraître varié. Le résultat le rappelle.",
      "limitations": "La vérification dans le navigateur demande au moins 40 mots. Elle indique la longueur des phrases, l’étendue du vocabulaire et les tournures répétées. Elle ne donne ni pourcentage ni verdict selon lequel un modèle aurait écrit le brouillon. « Analyser avec l’IA » envoie le texte à Gemini pour le même type de description.",
      "tips": [
        "Utilisez un paragraphe entier, pas un titre.",
        "Voyez les tournures répétées comme des pistes de relecture. Supprimez-les si les lecteurs les remarqueraient.",
        "N’utilisez pas ces évaluations pour accuser quelqu’un d’avoir utilisé un modèle."
      ],
      "faqs": [
        {
          "question": "Peut-il dire si un texte a été écrit par une IA ?",
          "answer": "Non, pas avec certitude. Les vérifications de schémas se trompent dans les deux sens. Le résultat décrit le brouillon, ce n’est pas un verdict."
        },
        {
          "question": "Pourquoi n’y a-t-il pas de pourcentage ?",
          "answer": "Un pourcentage ressemblerait à une preuve. « Analyser le texte » et « Analyser avec l’IA » décrivent tous deux des schémas. Aucun ne prétend savoir qui a écrit le texte."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Analyser le texte » compte les schémas dans cet onglet et n’envoie pas le brouillon. « Analyser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub pour obtenir une description écrite. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits."
        },
        {
          "question": "Les détecteurs d’IA sont-ils fiables ?",
          "answer": "Aucun détecteur ne peut prouver qui a écrit un texte. Les scores fondés sur des schémas peuvent signaler un texte humain et manquer un texte IA retravaillé ; voyez tout résultat comme une invitation à relire, pas comme une preuve."
        },
        {
          "question": "Quels schémas cet outil examine-t-il ?",
          "answer": "Il indique la longueur des phrases, la variété du vocabulaire et les tournures répétées, pour que vous voyiez où un brouillon paraît plat ou répétitif."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "« Analyser le texte » vérifie des schémas dans votre navigateur. « Analyser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub pour une analyse des schémas d’écriture. Aucun des deux résultats ne peut déterminer qui a écrit le texte. Le brouillon n’est pas enregistré.",
      "Article or draft": "Article ou brouillon",
      "Paste at least 40 words.": "Collez au moins 40 mots.",
      "Analyze writing": "Analyser le texte",
      "Analyze with AI": "Analyser avec l’IA",
      "Avg. sentence": "Phrase moyenne",
      "{0} words": "{0} mots",
      "Sentence variation": "Variation des phrases",
      "Vocabulary": "Vocabulaire",
      "Writing pattern analysis": "Analyse des schémas d’écriture",
      "No four-word phrase repeats three or more times.": "Aucune tournure de quatre mots n’apparaît trois fois ou plus.",
      "Familiar stock phrases found:": "Formules toutes faites trouvées :",
      "AI writing analysis": "Analyse d’écriture IA",
      "Paste some writing first.": "Collez d’abord un texte.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Collez au moins 40 mots. Un court extrait ne révèle aucun schéma.",
      "Low": "Faible",
      "Moderate": "Modérée",
      "Varied": "Variée",
      "Narrow": "Restreint",
      "Mixed": "Mixte",
      "Broad": "Étendu",
      "\"{0}\" appears {1} times": "« {0} » apparaît {1} fois",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Ce sont des schémas d’écriture, pas une preuve de l’auteur. Des schémas similaires apparaissent dans des brouillons humains retravaillés et dans des textes générés. Un détecteur peut se tromper dans les deux sens."
    },
    "note": "La vérification dans le navigateur utilise des listes de mots et de formules en anglais ; elle convient donc surtout aux textes anglais. « Analyser avec l’IA » fonctionne aussi avec des textes en français."
  },
  "ai-article-compressor": {
    "answer": "Un compresseur d’articles raccourcit un brouillon en supprimant le remplissage et les phrases répétées. « Compresser avec l’IA » demande à Gemini de conserver l’idée principale. Relisez le résultat avant de le publier.",
    "content": {
      "about": "Le compresseur d’articles IA raccourcit un long brouillon. La compression légère remplace quelques tournures lourdes et nettoie les espaces. Les compressions moyenne et forte suppriment aussi les phrases répétées. Relisez le résultat : quand une phrase disparaît, le sens peut changer.",
      "howTo": [
        "Collez l’article. Il doit contenir au moins 12 mots.",
        "Choisissez une compression légère, moyenne ou forte.",
        "Cliquez sur « Raccourcir l’article » pour appliquer les règles dans le navigateur, ou sur « Compresser avec l’IA » pour que Gemini le raccourcisse.",
        "Comparez le nombre de mots et copiez le brouillon raccourci s’il dit encore ce que vous vouliez dire.",
        "« Effacer » vide les deux zones et remet le niveau sur moyen."
      ],
      "features": [
        "Trois niveaux, pour qu’un passage léger ne supprime aucune phrase.",
        "Le nombre de mots avant et après.",
        "Des remplacements fixes, par exemple « in order to » en « to ».",
        "La suppression des phrases en double aux niveaux moyen et fort."
      ],
      "examples": [
        {
          "title": "Une phrase lourde",
          "body": "« In order to finish the form, you need to sign it » devient « to finish the form, you need to sign it » à tous les niveaux."
        },
        {
          "title": "La même phrase deux fois",
          "body": "Les niveaux moyen et fort gardent la première occurrence et suppriment la répétition exacte qui suit. Le niveau léger garde les deux."
        }
      ],
      "explanation": "« Raccourcir l’article » utilise une liste fixe de remplacements. La compression forte ignore aussi une phrase ultérieure qui commence par les six mêmes mots qu’une phrase précédente. « Compresser avec l’IA » demande à Gemini de raccourcir l’article au niveau choisi. Relisez les deux résultats avant de vous y fier.",
      "limitations": "La compression légère remplace une liste fixe de tournures lourdes. Les niveaux moyen et fort suppriment aussi les répétitions exactes ultérieures, et le niveau fort peut ignorer une phrase qui commence par les six mêmes mots. Le brouillon doit contenir au moins 12 mots. La compression peut supprimer une phrase que vous vouliez garder.",
      "tips": [
        "Commencez par le niveau léger si l’article est déjà concis.",
        "Utilisez le niveau fort pour un premier jet brouillon, puis rétablissez les phrases importantes.",
        "Ce n’est pas un moyen de cacher comment un brouillon a été produit."
      ],
      "faqs": [
        {
          "question": "Le texte compressé échappe-t-il à un détecteur d’IA ?",
          "answer": "Non. L’outil n’essaie pas de le faire et ne prétend pas que le résultat ressemblera à l’écriture d’un type d’auteur particulier."
        },
        {
          "question": "Mon idée est-elle conservée ?",
          "answer": "« Raccourcir l’article » garde la plupart des mots et retire du remplissage et des répétitions. « Compresser avec l’IA » demande à Gemini de garder l’idée principale et les faits importants. Relisez le brouillon raccourci avant de vous y fier."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Raccourcir l’article » s’exécute dans cet onglet et n’envoie pas le brouillon. « Compresser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub et renvoie une version plus courte. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits."
        },
        {
          "question": "Comment raccourcir un article sans perdre le sens ?",
          "answer": "Supprimez d’abord les tournures lourdes, puis les points répétés, puis les phrases entières qui n’apportent rien. Comparez le résultat avec l’original avant de l’utiliser."
        },
        {
          "question": "Quel niveau de compression choisir ?",
          "answer": "Le niveau léger ne remplace que les tournures lourdes. Le niveau moyen supprime aussi les répétitions. Le niveau fort peut ignorer des phrases qui commencent de la même façon : vérifiez-le donc plus attentivement."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "« Raccourcir l’article » applique des règles fixes dans votre navigateur. « Compresser avec l’IA » envoie l’article à l’API Gemini de Google via ToolStarHub et renvoie un brouillon plus court. L’article n’est pas enregistré. Relisez le résultat avant de le publier.",
      "Article": "Article",
      "Compression": "Compression",
      "Light compression": "Compression légère",
      "Medium compression": "Compression moyenne",
      "Strong compression": "Compression forte",
      "Shorten article": "Raccourcir l’article",
      "Compress with AI": "Compresser avec l’IA",
      "Copy shorter draft": "Copier le brouillon raccourci",
      "Shorter draft": "Brouillon raccourci",
      "The shorter draft will appear here.": "Le brouillon raccourci s’affichera ici.",
      "AI shorter draft": "Brouillon raccourci par l’IA",
      "Copy AI draft": "Copier le brouillon IA",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} mots avant, {1} mots après. Relisez le brouillon raccourci avant de l’utiliser.",
      "Paste an article first.": "Collez d’abord un article.",
      "Paste a longer article. A few words is not enough to shorten.": "Collez un article plus long. Quelques mots ne suffisent pas pour raccourcir.",
      "Nothing was left after compression. Try a lighter setting.": "Il ne reste rien après la compression. Essayez un niveau plus léger."
    },
    "note": "« Raccourcir l’article » s’appuie sur une liste de tournures anglaises et modifie donc peu les textes en français. « Compresser avec l’IA » fonctionne aussi avec des textes en français."
  },
  "ai-text-humanizer": {
    "answer": "Un humaniseur de texte IA remplace des formules toutes faites dans votre navigateur à partir d’une liste fixe. « Humaniser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub. L’outil n’essaie pas de tromper un détecteur d’IA et ne prétend pas que le résultat ressemblera à l’écriture d’un type d’auteur particulier.",
    "content": {
      "about": "L’humaniseur de texte IA remplace une liste fixe de formules toutes faites par des tournures plus simples. « Réécrire le texte » le fait dans cet onglet. « Humaniser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub et renvoie une version réécrite. Le texte n’est pas enregistré. Relisez le résultat avant de l’utiliser. Aucun des deux résultats n’est un moyen de cacher comment un brouillon a été produit.",
      "howTo": [
        "Collez le brouillon. Il doit contenir au moins 12 mots et au plus 4 000 caractères.",
        "Cliquez sur « Réécrire le texte » pour la liste de formules dans le navigateur, ou sur « Humaniser avec l’IA » pour que Gemini le réécrive.",
        "Relisez le résultat. Après une suppression, le mot suivant peut rester en minuscule.",
        "Copiez la version réécrite si elle dit encore ce que vous vouliez dire.",
        "« Effacer » vide la zone et le résultat local."
      ],
      "features": [
        "Une liste fixe de formules toutes faites, appliquée dans votre navigateur.",
        "Un résultat séparé pour « Humaniser avec l’IA ».",
        "Une limite de 4 000 caractères pour les deux boutons.",
        "Aucune suppression de phrase ni de phrase en double."
      ],
      "examples": [
        {
          "title": "Des débuts de phrase stéréotypés",
          "body": "« In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist. » devient « here is the setup. you can use a short checklist. »"
        },
        {
          "title": "Une phrase répétée",
          "body": "« The form is short. The form is short. Please sign it before noon today and bring a pen. » garde les deux copies. Ce passage ne supprime pas les phrases répétées."
        }
      ],
      "explanation": "« Réécrire le texte » parcourt une liste fixe une seule fois. Il ne remet pas de majuscule après une suppression, et une apostrophe typographique ne correspond pas. « Humaniser avec l’IA » demande à Gemini de garder les mêmes faits, noms et chiffres et de ne pas réduire le brouillon à un résumé. Relisez les deux résultats avant de les utiliser.",
      "limitations": "« Réécrire le texte » exige au moins 12 mots, et les deux boutons au plus 4 000 caractères. Le passage local ne remplace que les tournures de la liste. Une apostrophe typographique ne correspond pas. L’outil n’essaie pas de tromper un détecteur d’IA et ne prétend pas que le résultat ressemblera à l’écriture d’un type d’auteur particulier.",
      "tips": [
        "Relisez le résultat avant de l’utiliser. Après une tournure supprimée, le mot suivant peut rester en minuscule.",
        "Une phrase répétée reste en place. Ce passage ne la supprime pas.",
        "Aucun des deux résultats n’est un moyen de cacher comment un brouillon a été produit."
      ],
      "faqs": [
        {
          "question": "L’humaniseur de texte IA est-il gratuit ?",
          "answer": "Oui. Vous pouvez réécrire un brouillon ici sans payer ni créer de compte. « Réécrire le texte » reste dans cet onglet. « Humaniser avec l’IA » envoie tout de même le brouillon à l’API Gemini de Google via ToolStarHub."
        },
        {
          "question": "Cela échappe-t-il à un détecteur d’IA ?",
          "answer": "Non. L’outil n’essaie pas de le faire et ne prétend pas que le résultat ressemblera à l’écriture d’un type d’auteur particulier."
        },
        {
          "question": "Mon idée est-elle conservée ?",
          "answer": "« Réécrire le texte » garde tous les mots absents de la liste de formules. « Humaniser avec l’IA » a pour consigne de garder les mêmes faits, noms et chiffres et de ne pas résumer le brouillon. Relisez le résultat avant de l’utiliser."
        },
        {
          "question": "Mon texte est-il envoyé à un serveur ?",
          "answer": "« Réécrire le texte » s’exécute dans cet onglet et n’envoie pas le brouillon. « Humaniser avec l’IA » envoie le brouillon à l’API Gemini de Google via ToolStarHub et renvoie une version réécrite. ToolStarHub n’enregistre pas ce texte. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "« Réécrire le texte » utilise une liste fixe de formules dans votre navigateur. « Humaniser avec l’IA » envoie le texte à l’API Gemini de Google via ToolStarHub et renvoie une version réécrite. Le texte n’est pas enregistré. Relisez le résultat avant de l’utiliser. Aucun des deux résultats n’est un moyen de cacher comment un brouillon a été produit.",
      "Draft": "Brouillon",
      "Rewrite text": "Réécrire le texte",
      "Humanize with AI": "Humaniser avec l’IA",
      "Copy rewritten draft": "Copier le brouillon réécrit",
      "Rewritten draft": "Brouillon réécrit",
      "The rewritten draft will appear here.": "Le brouillon réécrit s’affichera ici.",
      "AI rewrite": "Réécriture IA",
      "Copy AI rewrite": "Copier la réécriture IA",
      "Paste a draft first.": "Collez d’abord un brouillon.",
      "That text is too long for this rewrite. Shorten it and try again.": "Ce texte est trop long pour cette réécriture. Raccourcissez-le, puis réessayez.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Collez un brouillon plus long. Quelques mots ne suffisent pas pour réécrire.",
      "Nothing was left after the rewrite. Try different wording.": "Il ne reste rien après la réécriture. Essayez une autre formulation."
    },
    "note": "« Réécrire le texte » s’appuie sur une liste de formules anglaises et modifie donc peu les textes en français. « Humaniser avec l’IA » fonctionne aussi avec des textes en français."
  }
};

export default data;
