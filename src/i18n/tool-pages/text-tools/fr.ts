import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Un compteur de mots indique le nombre de mots, de caractères et de phrases d’un texte collé, ainsi qu’une estimation simple du temps de lecture.",
    "content": {
      "about": "Affichez les mots, caractères, phrases, paragraphes et un temps de lecture approximatif pour le texte que vous collez. Pour vérifier une légende, un résumé ou un court message, les totaux se mettent à jour pendant la saisie. Le temps de lecture suppose environ 225 mots par minute : c’est une estimation, pas une vitesse mesurée.",
      "howTo": [
        "Collez ou tapez du texte dans la zone.",
        "Les nombres de mots, caractères, phrases et paragraphes se mettent à jour pendant la saisie.",
        "Utilisez « Texte d’exemple » pour essayer le compteur, « Effacer » pour vider la zone ou « Copier » pour copier votre texte."
      ],
      "examples": [
        {
          "title": "Une phrase courte",
          "body": "« Hello world. » compte 2 mots et 1 phrase."
        },
        {
          "title": "Lignes vides",
          "body": "Un texte séparé par une ligne vide compte comme deux paragraphes."
        }
      ],
      "explanation": "Les mots sont des groupes de caractères sans espace. Les caractères sont des points de code Unicode : lettres, ponctuation et la plupart des emoji comptent chacun pour un caractère. Les phrases sont découpées sur . ! ? et …. Les paragraphes sont des blocs non vides séparés par des retours à la ligne. Le temps de lecture se base sur environ 225 mots par minute.",
      "limitations": "Les mots sont des groupes de caractères sans espace, et les phrases sont découpées sur . ! ? et …. Le temps de lecture suppose environ 225 mots par minute : c’est une estimation, pas une vitesse de lecture mesurée. Le compteur ne vérifie pas la grammaire et n’identifie pas l’auteur.",
      "faqs": [
        {
          "question": "Le compteur de mots est-il gratuit ?",
          "answer": "Oui. Compter les mots, caractères, phrases et paragraphes est gratuit, sans compte."
        },
        {
          "question": "Mon texte est-il envoyé en ligne ?",
          "answer": "Non. Le comptage se fait dans votre navigateur. Le texte n’est ni envoyé à Tools Star Hub ni enregistré."
        },
        {
          "question": "Comment les espaces en trop sont-ils comptés ?",
          "answer": "Plusieurs espaces à la suite ne créent pas de mots supplémentaires. En revanche, ils comptent comme caractères."
        },
        {
          "question": "Combien de mots compte un discours de 5 minutes ?",
          "answer": "Le débit varie, mais 130 à 150 mots par minute est un repère courant. Un discours de 5 minutes compte donc souvent 650 à 750 mots environ."
        },
        {
          "question": "Comment le temps de lecture est-il estimé ?",
          "answer": "Le nombre de mots est divisé par environ 225 mots par minute. C’est une estimation pour un lecteur moyen, pas une vitesse de lecture mesurée."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Le comptage se fait dans votre navigateur. Rien n’est envoyé à un serveur.",
      "Paste or type text here...": "Collez ou tapez votre texte ici…",
      "Sample text": "Texte d’exemple",
      "Reading time": "Temps de lecture",
      "0 min": "0 min",
      "{0} min": "{0} min"
    }
  },
  "character-counter": {
    "answer": "Un compteur de caractères compte les caractères, les mots et les lignes pendant la saisie, espaces compris dans le total principal.",
    "content": {
      "about": "Comptez les caractères, les mots et les lignes, avec un total séparé sans les espaces. Utile quand un formulaire, une publication sur les réseaux sociaux ou une meta description a une limite de caractères. Un emoji compte pour un caractère, et contrairement au compteur de mots, cette page ne découpe pas le texte en phrases.",
      "howTo": [
        "Tapez ou collez du texte dans la zone.",
        "Les nombres de caractères, de mots et de lignes se mettent à jour immédiatement.",
        "Copiez le nombre de caractères ou videz la zone quand vous avez terminé."
      ],
      "examples": [
        {
          "title": "Emoji et lettres",
          "body": "« A😀 » compte 2 caractères : une lettre et un emoji."
        },
        {
          "title": "Lignes",
          "body": "Un retour à la ligne commence une nouvelle ligne. Une zone vide compte 0 ligne."
        }
      ],
      "explanation": "Les caractères sont comptés en points de code Unicode. Les espaces sont inclus dans le total principal et exclus du total « sans espaces ». Les lignes suivent les retours à la ligne de la zone, y compris une dernière ligne vide.",
      "limitations": "Un caractère correspond à un point de code Unicode : un emoji compte donc pour un, même s’il est composé de plusieurs symboles. Les espaces restent dans le total principal et disparaissent du total sans espaces. Les limites de phrases ne sont pas détectées ici.",
      "faqs": [
        {
          "question": "Le compteur de caractères est-il gratuit ?",
          "answer": "Oui. Vous pouvez compter caractères, mots et lignes pendant la saisie sans payer ni créer de compte."
        },
        {
          "question": "Le texte quitte-t-il mon ordinateur ?",
          "answer": "Non. Le texte reste dans votre navigateur et n’est envoyé à aucun serveur."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Les totaux sont calculés dans cet onglet. Vider la zone retire le texte de la page, et il n’est pas écrit dans le stockage local."
        },
        {
          "question": "Les espaces comptent-ils comme des caractères ?",
          "answer": "Oui, dans le total principal. Le compteur affiche aussi un second total sans espaces, que demandent certains formulaires et devoirs."
        },
        {
          "question": "Combien de caractères compte un emoji ?",
          "answer": "Sur cette page, un emoji seul compte pour un caractère Unicode. Certaines applications comptent certains emojis pour deux ou plus, leur limite peut donc différer légèrement."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Les totaux se mettent à jour pendant la saisie. Le texte reste dans votre navigateur.",
      "Type or paste text...": "Tapez ou collez du texte…",
      "Copy count": "Copier le total"
    }
  },
  "case-converter": {
    "answer": "Un convertisseur de casse transforme un texte en majuscules, minuscules, casse de titre, camelCase et autres styles similaires.",
    "content": {
      "about": "Passez un texte en majuscules, minuscules, casse de titre, casse de phrase, camelCase, PascalCase, snake_case ou kebab-case. Les développeurs qui renomment des identifiants et les rédacteurs qui corrigent un titre changent la casse en une seule étape. La casse de phrase suit la ponctuation anglaise et n’applique pas les règles de majuscules d’une autre langue.",
      "howTo": [
        "Collez du texte dans la zone.",
        "Choisissez une casse. Le résultat se met à jour immédiatement.",
        "Copiez le résultat ou videz les deux zones."
      ],
      "examples": [
        {
          "title": "Casse de titre",
          "body": "« hello world » devient « Hello World ». Chaque mot prend une majuscule."
        },
        {
          "title": "camelCase",
          "body": "« Hello world example » devient helloWorldExample."
        }
      ],
      "explanation": "Les majuscules et minuscules utilisent les règles de l’anglais. La casse de titre met en majuscule la première lettre de chaque mot. La casse de phrase passe le texte en minuscules, puis met une majuscule au début du texte et après . ! ? ou … — une règle simple, pensée pour l’anglais, et non un correcteur grammatical pour toutes les langues. camelCase, PascalCase, snake_case et kebab-case sont construits à partir des groupes de lettres et de chiffres.",
      "limitations": "La casse de phrase suit la ponctuation anglaise, pas les règles de majuscules des autres langues. camelCase, snake_case et kebab-case gardent les groupes de lettres et de chiffres et suppriment la ponctuation entre eux.",
      "faqs": [
        {
          "question": "Le convertisseur de casse est-il gratuit ?",
          "answer": "Oui. Passer un texte en majuscules, minuscules, casse de titre ou en styles de code est gratuit, sans compte."
        },
        {
          "question": "La casse de phrase fonctionne-t-elle dans toutes les langues ?",
          "answer": "Non. Elle suit un schéma de ponctuation anglais simple et n’applique pas de règles propres à chaque langue."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le texte collé est converti dans cet onglet. Il n’est ni envoyé ni écrit dans le stockage local."
        },
        {
          "question": "Quelle est la différence entre la casse titre et la casse phrase ?",
          "answer": "La casse titre met une majuscule à la première lettre de chaque mot, comme dans un titre anglais. La casse phrase ne met une majuscule qu’à la première lettre de chaque phrase, comme dans un texte normal."
        },
        {
          "question": "Que sont camelCase, snake_case et kebab-case ?",
          "answer": "Ce sont des conventions de nommage utilisées en programmation. camelCase relie les mots avec des majuscules (myVariableName), snake_case avec des tirets bas (my_variable_name) et kebab-case avec des traits d’union (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Collez le texte à convertir",
      "Case": "Casse",
      "Result ({0})": "Résultat ({0})",
      "UPPERCASE": "MAJUSCULES",
      "lowercase": "minuscules",
      "Title Case": "Casse De Titre",
      "Sentence case": "Casse de phrase"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Un générateur de lorem ipsum crée des paragraphes, phrases ou mots de remplissage pour des maquettes et des brouillons.",
    "content": {
      "about": "Générez des paragraphes, phrases ou mots de remplissage à partir d’une liste fixe de mots latins. Les designers s’en servent pour remplir une maquette quand le vrai texte n’est pas encore écrit. Le premier paragraphe commence par la phrase d’ouverture classique, et une demande s’arrête à 20 paragraphes, 50 phrases ou 500 mots.",
      "howTo": [
        "Choisissez paragraphes, phrases ou mots.",
        "Indiquez une quantité dans les limites affichées, puis cliquez sur « Générer ».",
        "Copiez le texte, générez à nouveau ou revenez aux valeurs par défaut."
      ],
      "examples": [
        {
          "title": "Trois paragraphes",
          "body": "Le premier paragraphe commence par la phrase classique « Lorem ipsum dolor sit amet… », puis continue avec des mots mélangés tirés d’une liste locale."
        },
        {
          "title": "Cinquante mots",
          "body": "Pratique pour un court texte de remplissage dans une maquette."
        }
      ],
      "explanation": "Le lorem ipsum est du latin brouillé utilisé comme faux texte, pour juger une mise en page sans le vrai contenu. Ce générateur utilise une liste de mots locale et les valeurs aléatoires cryptographiquement sûres du navigateur. Il n’appelle aucune API externe. La quantité est plafonnée pour que la page reste utilisable.",
      "limitations": "Le résultat est du latin de remplissage issu d’une liste fixe : ce n’est ni une traduction ni un texte pour un vrai produit. Les paragraphes s’arrêtent à 20, les phrases à 50 et les mots à 500.",
      "faqs": [
        {
          "question": "Le générateur de lorem ipsum est-il gratuit ?",
          "answer": "Oui. Générer des paragraphes, phrases ou mots de remplissage est gratuit, sans compte."
        },
        {
          "question": "Le texte est-il téléchargé depuis Internet ?",
          "answer": "Non. Les mots sont stockés dans cette page et assemblés dans votre navigateur."
        },
        {
          "question": "Pourquoi y a-t-il un maximum ?",
          "answer": "De très gros blocs peuvent figer un onglet. Les paragraphes s’arrêtent à 20, les phrases à 50 et les mots à 500."
        },
        {
          "question": "Que signifie lorem ipsum ?",
          "answer": "Le lorem ipsum est du latin brouillé utilisé comme texte de remplissage. Il ressemble à un vrai texte, ce qui permet de juger une mise en page sans que les lecteurs s’attardent sur les mots."
        },
        {
          "question": "Quand utiliser un texte de remplissage ?",
          "answer": "Pour les maquettes, les modèles et les tests de polices. Remplacez-le par le vrai texte avant la mise en ligne, car un texte de remplissage n’apprend rien aux visiteurs."
        }
      ]
    },
    "ui": {
      "Quantity": "Quantité",
      "Enter a whole number from {0} to {1}.": "Saisissez un nombre entier de {0} à {1}.",
      "Enter a quantity.": "Saisissez une quantité.",
      "Choose between {0} and {1} {2}.": "Choisissez entre {0} et {1} {2}.",
      "paragraphs": "paragraphes",
      "sentences": "phrases",
      "words": "mots",
      "A secure random source is not available in this browser.": "Aucune source aléatoire sécurisée n’est disponible dans ce navigateur."
    }
  },
  "text-diff": {
    "answer": "Un comparateur de texte confronte le texte d’origine et sa version modifiée sur votre appareil, et signale les lignes ou mots ajoutés, supprimés et inchangés.",
    "content": {
      "about": "Collez un original et une révision, puis comparez-les ligne par ligne ou mot par mot. Pour vérifier deux versions d’un même paragraphe, utilisez le mode lignes pour les lignes entières modifiées et le mode mots quand une phrase a été retouchée. Chaque côté doit rester sous 200 000 caractères et sous 4 000 lignes ou mots.",
      "howTo": [
        "Collez le texte d’origine à gauche et le texte modifié à droite.",
        "Choisissez la comparaison par lignes ou par mots.",
        "Cliquez sur « Comparer ». Les blocs ajoutés, supprimés et inchangés sont libellés, pas seulement colorés.",
        "Copiez le diff brut si vous en avez besoin dans un autre éditeur. Videz les deux côtés quand vous avez terminé."
      ],
      "examples": [
        {
          "title": "Deux versions d’un paragraphe",
          "body": "Le mode lignes met en évidence les lignes entières modifiées. Le mode mots convient mieux quand une phrase a été retouchée sur place."
        },
        {
          "title": "Textes identiques",
          "body": "Si les deux côtés sont identiques, le résumé n’affiche que du contenu inchangé, sans bloc ajouté ni supprimé."
        }
      ],
      "explanation": "La comparaison des segments se fait dans votre navigateur. Le texte n’est envoyé nulle part et les brouillons ne sont pas gardés dans le stockage local. Les différences sont affichées comme nœuds de texte React : le contenu ne peut donc pas injecter de HTML. Les entrées très volumineuses sont refusées pour que l’onglet reste réactif.",
      "limitations": "Selon le mode, chaque côté doit rester sous 200 000 caractères et sous 4 000 lignes ou mots. La vue libelle les blocs ajoutés, supprimés et inchangés. Elle ne fusionne pas de fichiers et n’ouvre pas de document Word.",
      "faqs": [
        {
          "question": "Le comparateur de texte est-il gratuit ?",
          "answer": "Oui. Comparer deux textes ligne par ligne ou mot par mot est gratuit, sans compte."
        },
        {
          "question": "Comment comparer deux fichiers texte ?",
          "answer": "Collez chaque version dans un panneau, choisissez Lignes ou Mots, puis cliquez sur « Comparer ». Vous pouvez copier une vue +/- du résultat."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Les deux panneaux sont comparés dans cet onglet. Le texte n’est ni envoyé à un serveur ni enregistré dans le stockage local."
        },
        {
          "question": "Qu’est-ce qu’un diff ?",
          "answer": "Un diff est la liste des différences entre deux versions d’un texte : ce qui a été ajouté, ce qui a été supprimé et ce qui n’a pas changé."
        },
        {
          "question": "Faut-il utiliser le mode ligne ou le mode mot ?",
          "answer": "Le mode ligne convient au code, aux listes et aux fichiers où des lignes entières changent. Le mode mot convient quand une phrase a été modifiée sur place."
        }
      ]
    },
    "ui": {
      "Original": "Original",
      "Modified": "Modifié",
      "Compare": "Comparer",
      "Copy diff": "Copier le diff",
      "Both sides are empty.": "Les deux côtés sont vides.",
      "The two texts are the same.": "Les deux textes sont identiques.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Le texte comparé est affiché en texte brut, pas en HTML. La couleur n’est qu’un indice : chaque bloc est aussi libellé Ajouté, Supprimé ou Inchangé.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Les deux versions sont comparées dans cet onglet. Le texte n’est envoyé à aucun serveur.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Gardez chaque côté sous 200 000 caractères pour que la comparaison reste fluide.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Cette comparaison gère jusqu’à {0} {1}. Raccourcissez le texte ou découpez-le.",
      "lines": "lignes",
      "words": "mots"
    }
  },
  "duplicate-line-remover": {
    "answer": "Un outil de suppression des lignes en double garde la première occurrence de chaque ligne et retire les répétitions suivantes, avec options de rognage et de casse.",
    "content": {
      "about": "Gardez la première occurrence de chaque ligne et retirez les répétitions, dans l’ordre où vous les avez collées. Utile pour une liste de diffusion ou un journal où la même ligne apparaît plusieurs fois. Avec la comparaison sans casse et le rognage, apple et Apple deviennent une seule ligne, et c’est la première graphie qui reste.",
      "howTo": [
        "Collez un texte sur plusieurs lignes. Il n’est pas modifié tant que vous ne lancez pas l’outil.",
        "Si besoin, ignorez la casse, supprimez les espaces avant la comparaison ou retirez les lignes vides.",
        "Cliquez sur « Supprimer les doublons ». La première occurrence de chaque ligne est conservée, dans l’ordre.",
        "Copiez ou téléchargez la liste unique. Videz les deux zones quand vous avez terminé."
      ],
      "examples": [
        {
          "title": "Une liste de diffusion",
          "body": "apple, Apple, apple avec rognage et comparaison sans casse donnent un seul apple, dans la première graphie collée."
        },
        {
          "title": "Lignes vides",
          "body": "Activez « Supprimer les lignes vides » si vous voulez uniquement des lignes uniques non vides. Sinon, une ligne vide est une valeur comme une autre."
        }
      ],
      "explanation": "Chaque ligne reçoit une clé selon les options de comparaison. La première fois qu’une clé apparaît, la ligne est gardée ; les répétitions suivantes sont comptées comme doublons supprimés. L’ordre des premières occurrences est conservé.",
      "limitations": "La première ligne correspondante est gardée, dans l’ordre de collage. Les options de casse, de rognage et de lignes vides déterminent ce qui compte comme la même ligne. Les répétitions suivantes sont comptées et retirées. Au-delà de 400 000 caractères, le texte est refusé. La zone de saisie elle-même n’est pas réécrite.",
      "faqs": [
        {
          "question": "L’outil est-il gratuit ?",
          "answer": "Oui. Supprimer les lignes répétées en gardant la première est gratuit, sans inscription."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le dédoublonnage se fait dans cet onglet. La liste n’est ni envoyée ni écrite dans le stockage local."
        },
        {
          "question": "La zone d’origine est-elle modifiée ?",
          "answer": "Non. La saisie reste telle que vous l’avez collée. La liste unique apparaît dans la zone de résultat après l’opération."
        },
        {
          "question": "Comment supprimer les doublons d’une liste ?",
          "answer": "Collez la liste avec un élément par ligne et lancez l’outil. La première occurrence de chaque ligne est gardée dans l’ordre d’origine et les répétitions suivantes sont supprimées."
        },
        {
          "question": "Peut-il ignorer les différences de casse ou d’espaces ?",
          "answer": "Oui. Activez les options de casse et de suppression des espaces pour que des lignes comme Apple et apple, ou des lignes avec des espaces en trop, soient considérées comme identiques."
        }
      ]
    },
    "ui": {
      "One line per row": "Une ligne par entrée",
      "Case-insensitive match": "Ignorer la casse",
      "Trim spaces before comparing": "Supprimer les espaces avant de comparer",
      "Remove empty lines": "Supprimer les lignes vides",
      "First occurrence of each line is kept, in the original order.": "La première occurrence de chaque ligne est conservée, dans l’ordre d’origine.",
      "Unique lines": "Lignes uniques",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Les lignes répétées sont retirées dans cet onglet. La liste n’est pas envoyée.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Gardez le texte sous 400 000 caractères pour que le navigateur reste réactif."
    }
  },
  "whitespace-remover": {
    "answer": "Un outil de suppression des espaces rogne les lignes, réduit les espaces, convertit les tabulations et nettoie les lignes vides selon les options choisies.",
    "content": {
      "about": "Nettoyez les espaces, tabulations et lignes vides en trop, uniquement avec les options que vous activez. Utile pour un journal collé ou une liste avec une indentation parasite. « Rogner chaque ligne » l’emporte sur les cases début et fin séparées, et laisser ces options désactivées conserve l’indentation.",
      "howTo": [
        "Collez un texte avec des espaces, tabulations ou lignes vides en trop.",
        "Sélectionnez uniquement les nettoyages voulus. Rien ne se passe avant de cliquer sur « Nettoyer le texte ».",
        "Vérifiez les nombres de lignes et de caractères, puis copiez ou téléchargez le résultat.",
        "Videz les zones pour abandonner le texte. Il n’est pas enregistré."
      ],
      "examples": [
        {
          "title": "Lignes de journal indentées",
          "body": "Rognez chaque ligne, ou supprimez seulement les espaces en début de ligne si vous devez garder ceux de fin."
        },
        {
          "title": "Tabulations et espaces mélangés",
          "body": "Convertissez les tabulations en 2 ou 4 espaces, puis réduisez les espaces répétés pour obtenir des espaces simples."
        }
      ],
      "explanation": "Chaque option est explicite. « Rogner chaque ligne » l’emporte sur les cases début et fin pour ce passage. « Supprimer les lignes vides » retire toutes les lignes vides ; réduire les lignes vides en laisse une seule entre les blocs.",
      "limitations": "Seules les options activées sont appliquées. « Rogner chaque ligne » l’emporte sur les cases début et fin pour ce passage. « Supprimer les lignes vides » retire toutes les lignes vides, tandis que la réduction en garde une entre les blocs. Au-delà de 400 000 caractères, le texte est refusé.",
      "faqs": [
        {
          "question": "L’outil est-il gratuit ?",
          "answer": "Oui. Nettoyer les espaces, tabulations et lignes vides en trop est gratuit, sans compte."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le nettoyage reste dans cet onglet. Le texte n’est envoyé nulle part et n’est pas gardé dans le stockage local."
        },
        {
          "question": "Mon indentation va-t-elle disparaître ?",
          "answer": "Seulement si vous activez le rognage, la suppression en début de ligne ou la conversion des tabulations. Laissez-les désactivés pour la garder."
        },
        {
          "question": "Comment supprimer les doubles espaces d’un texte ?",
          "answer": "Activez l’option qui fusionne les espaces répétés. Les suites d’espaces dans chaque ligne deviennent une seule espace."
        },
        {
          "question": "Comment supprimer les lignes vides ?",
          "answer": "Utilisez la suppression des lignes vides pour retirer toutes les lignes vides, ou la fusion des lignes vides pour garder une seule ligne vide entre les paragraphes."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Options de nettoyage",
      "Trim each line": "Rogner chaque ligne",
      "Remove leading whitespace": "Supprimer les espaces en début de ligne",
      "Remove trailing whitespace": "Supprimer les espaces en fin de ligne",
      "Collapse repeated spaces": "Réduire les espaces répétés",
      "Convert tabs to spaces": "Convertir les tabulations en espaces",
      "Remove blank lines": "Supprimer les lignes vides",
      "Collapse multiple blank lines": "Réduire les lignes vides multiples",
      "Trim entire document": "Rogner tout le document",
      "Tab width": "Largeur de tabulation",
      "2 spaces": "2 espaces",
      "4 spaces": "4 espaces",
      "Lines before": "Lignes avant",
      "Lines after": "Lignes après",
      "Characters before": "Caractères avant",
      "Characters after": "Caractères après",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Les espaces, tabulations et lignes vides sont nettoyés dans cet onglet. Le texte n’est envoyé à aucun serveur."
    }
  },
  "line-sorter": {
    "answer": "Un trieur de lignes classe un texte multiligne par ordre alphabétique, numérique ou par longueur, avec suppression facultative des doublons.",
    "content": {
      "about": "Triez une entrée par ligne de A à Z, de Z à A, selon un nombre en début de ligne ou par longueur. Utile pour ordonner une liste de noms ou un export numéroté sans tableur. En ordre numérique, 10 vient après 2, et une ligne sans nombre en tête passe après les lignes numérotées.",
      "howTo": [
        "Collez une entrée par ligne.",
        "Choisissez A→Z, Z→A, l’ordre numérique ou la longueur. Réglez la casse, le rognage, les lignes vides et les doublons selon vos besoins.",
        "Cliquez sur « Trier les lignes ». Les entrées égales gardent leur ordre relatif d’origine.",
        "Copiez ou téléchargez la liste triée."
      ],
      "examples": [
        {
          "title": "Noms",
          "body": "A→Z sans casse place ada et Ada côte à côte, en gardant en premier la graphie apparue d’abord quand elles sont égales."
        },
        {
          "title": "Lignes numérotées",
          "body": "« Numérique croissant » lit le nombre en tête : 10 vient donc après 2. Les lignes sans nombre passent après les lignes numérotées."
        }
      ],
      "explanation": "Le tri est stable : quand deux lignes sont égales, la première saisie reste devant. Les modes numériques lisent un entier ou un décimal en début de ligne. La suppression facultative des doublons utilise la même clé que la casse et le rognage.",
      "limitations": "Les modes sont A à Z, Z à A, numérique croissant, numérique décroissant, plus courte et plus longue. Les lignes égales gardent leur ordre d’origine. Le mode numérique lit un nombre en tête ; une ligne sans nombre passe après les lignes numérotées. Au-delà de 400 000 caractères, le texte est refusé.",
      "faqs": [
        {
          "question": "Le trieur de lignes est-il gratuit ?",
          "answer": "Oui. Trier une liste de lignes est gratuit, sans compte."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le tri se fait dans cet onglet. Les lignes ne sont ni envoyées à un serveur ni enregistrées dans le stockage local."
        },
        {
          "question": "Les lignes vides sont-elles conservées ?",
          "answer": "Oui, sauf si vous choisissez « Ignorer les lignes vides ». Dans les modes alphabétiques, elles sont triées comme des chaînes vides."
        },
        {
          "question": "Comment trier une liste par ordre alphabétique ?",
          "answer": "Collez un élément par ligne et choisissez A à Z, ou Z à A pour l’ordre inverse. Les lignes identiques gardent leur ordre d’origine."
        },
        {
          "question": "Comment trier des lignes par nombre ?",
          "answer": "Choisissez le tri numérique croissant ou décroissant. Chaque ligne est triée selon le nombre placé à son début, donc 2 vient avant 10."
        }
      ]
    },
    "ui": {
      "One item per line": "Une entrée par ligne",
      "Numeric ascending": "Numérique croissant",
      "Numeric descending": "Numérique décroissant",
      "Shortest → longest": "Plus courte → plus longue",
      "Longest → shortest": "Plus longue → plus courte",
      "Trim before comparing": "Rogner avant de comparer",
      "Ignore empty lines": "Ignorer les lignes vides",
      "Sort lines": "Trier les lignes",
      "Result lines": "Lignes du résultat",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Les lignes sont triées dans cet onglet. La liste n’est pas envoyée à Tools Star Hub."
    }
  },
  "find-and-replace": {
    "answer": "Rechercher et remplacer modifie la première occurrence ou toutes les occurrences dans le texte collé. Vous pouvez activer ou non le respect de la casse.",
    "content": {
      "about": "Collez un texte, saisissez ce qu’il faut chercher et le texte de remplacement. Vous pouvez modifier la première occurrence ou toutes, et ignorer la casse.",
      "howTo": [
        "Collez le texte d’origine.",
        "Saisissez le texte à chercher. Un champ de recherche vide est refusé.",
        "Saisissez le remplacement. Laissez-le vide pour supprimer les occurrences.",
        "Choisissez « Remplacer la première » ou « Remplacer tout », et activez ou non « Respecter la casse ».",
        "Cliquez sur « Remplacer », puis copiez le résultat ou videz le formulaire."
      ],
      "features": [
        "Première occurrence ou toutes les occurrences sans chevauchement.",
        "Recherche sensible à la casse ou non ; le remplacement est toujours inséré tel que vous l’avez tapé.",
        "Le nombre de remplacements effectués."
      ],
      "examples": [
        {
          "title": "Corriger un nom répété",
          "body": "Original : « Ana sent the file. ana sent the notes. » Rechercher : ana. Remplacement : Ana. Casse non respectée, « Remplacer tout ». Les deux noms deviennent Ana, et le total est 2."
        },
        {
          "title": "Modifier seulement le premier titre",
          "body": "Un brouillon contient trois fois « Draft ». « Remplacer la première » change la première et laisse les deux autres. Le total est 1."
        }
      ],
      "explanation": "La recherche parcourt le texte d’origine depuis le début. Après une occurrence, la recherche suivante reprend après celle-ci : un remplacement n’est donc pas recherché à nouveau. Le mode sans casse compare des copies en minuscules sans modifier le texte autour.",
      "tips": [
        "Pour un motif comme « n’importe quel nombre », utilisez le testeur de regex. Cet outil cherche exactement les caractères saisis.",
        "Un remplacement qui contient le texte recherché est inséré tel quel et n’est pas remplacé à nouveau dans le même passage."
      ],
      "limitations": "Ce n’est pas une expression régulière. Les limites de mots ne sont pas prises en compte et le texte entre guillemets n’est pas ignoré. Les occurrences qui se chevauchent ne sont pas comptées deux fois.",
      "faqs": [
        {
          "question": "Puis-je supprimer les occurrences ?",
          "answer": "Oui. Laissez le remplacement vide. Chaque occurrence est supprimée et compte quand même comme un remplacement."
        },
        {
          "question": "Pourquoi un mot court a-t-il changé à l’intérieur d’un mot plus long ?",
          "answer": "La recherche porte sur des caractères. Chercher « cat » trouve aussi le début de « catalog ». Ajoutez des espaces si vous voulez un mot entier, ou utilisez le testeur de regex avec une limite de mot."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le texte et la recherche restent dans cet onglet. Ils ne sont envoyés à aucun serveur."
        },
        {
          "question": "Comment remplacer un mot partout dans un texte ?",
          "answer": "Saisissez le mot à chercher et son remplacement, choisissez « Tout remplacer », puis copiez le résultat. Activez le respect de la casse si les majuscules comptent."
        },
        {
          "question": "Rechercher et remplacer prend-il en charge les expressions régulières ?",
          "answer": "Non. L’outil cherche exactement le texte saisi. Pour des motifs, testez d’abord le motif dans le testeur de regex."
        }
      ]
    },
    "ui": {
      "Replacement": "Remplacement",
      "How many matches": "Occurrences à remplacer",
      "Replace first": "Remplacer la première",
      "Replace all": "Remplacer tout",
      "Case-sensitive": "Respecter la casse",
      "{0} replacement.": "{0} remplacement.",
      "{0} replacements.": "{0} remplacements.",
      "Paste the text you want to change.": "Collez le texte à modifier.",
      "Enter the text to find.": "Saisissez le texte à chercher."
    }
  },
  "remove-line-breaks": {
    "answer": "Supprimer les sauts de ligne relie les lignes coupées par des espaces, supprime les sauts ou garde une ligne vide entre les paragraphes.",
    "content": {
      "about": "Collez un texte coupé sur de nombreuses lignes. Vous pouvez relier ces lignes par des espaces, supprimer les sauts ou garder une ligne vide entre les paragraphes.",
      "howTo": [
        "Collez le texte d’origine. La zone garde les sauts de ligne pour que vous les voyiez.",
        "Choisissez une option : remplacer les sauts de ligne par des espaces, les supprimer ou garder les sauts de paragraphe.",
        "Cliquez sur « Nettoyer le texte ».",
        "Copiez le texte nettoyé ou videz les deux zones."
      ],
      "features": [
        "L’original reste dans la première zone ; le texte nettoyé est à part.",
        "Le mode espaces relie les lignes et réduit les espaces répétés.",
        "Le mode paragraphes garde une ligne vide là où il y en avait déjà une."
      ],
      "examples": [
        {
          "title": "Un e-mail coupé",
          "body": "Trois lignes courtes d’une même phrase deviennent une seule ligne avec des espaces simples entre les mots si vous choisissez « Remplacer les sauts de ligne par des espaces »."
        },
        {
          "title": "Deux paragraphes",
          "body": "Un bloc, une ligne vide, puis un autre bloc. « Garder les sauts de paragraphe » relie les lignes de chaque bloc et laisse une ligne vide entre eux."
        }
      ],
      "explanation": "Les fins de ligne Windows et des anciens Mac sont traitées comme le même saut. Le mode espaces transforme chaque suite de sauts en un espace, puis rogne les extrémités. Le mode suppression efface les sauts et peut coller le dernier mot d’une ligne au premier de la suivante. Le mode paragraphes découpe d’abord sur les lignes vides, puis relie les lignes de chaque paragraphe.",
      "tips": [
        "Utilisez les espaces pour de la prose. Réservez la suppression aux sauts insérés au milieu d’un élément, comme un long nombre coupé sur plusieurs lignes.",
        "Si un poème ou une liste doit garder ses lignes, n’utilisez pas cet outil dessus."
      ],
      "limitations": "L’outil ne distingue pas une phrase coupée d’une liste. En mode paragraphes, un saut de ligne simple est traité comme une coupure. Seule une ligne vide sépare les paragraphes.",
      "faqs": [
        {
          "question": "Les espaces à l’intérieur d’une ligne sont-ils supprimés ?",
          "answer": "Le mode espaces réduit les espaces et tabulations répétés. Les modes suppression et paragraphes laissent les espaces déjà présents dans une ligne."
        },
        {
          "question": "Et si je ne colle que des espaces ?",
          "answer": "La page vous demande de coller du texte. Des espaces seuls ne suffisent pas."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Le texte collé est réécrit dans cet onglet. Il n’est pas envoyé."
        },
        {
          "question": "Comment supprimer les sauts de ligne d’un texte copié depuis un PDF ?",
          "answer": "Collez le texte et choisissez l’option qui conserve les paragraphes. Les sauts de ligne simples à l’intérieur d’un paragraphe deviennent des espaces, et les lignes vides entre paragraphes restent."
        },
        {
          "question": "Quelle différence entre remplacer et supprimer les sauts de ligne ?",
          "answer": "Remplacer transforme chaque saut en espace, les mots restent donc séparés. Supprimer efface le saut, ce qui colle la fin d’une ligne au début de la suivante."
        }
      ]
    },
    "ui": {
      "Line breaks": "Sauts de ligne",
      "Replace line breaks with spaces": "Remplacer les sauts de ligne par des espaces",
      "Remove line breaks": "Supprimer les sauts de ligne",
      "Keep paragraph breaks": "Garder les sauts de paragraphe",
      "Cleaned text": "Texte nettoyé",
      "Paste some text first.": "Collez d’abord du texte."
    }
  },
  "add-line-numbers": {
    "answer": "Ajouter des numéros de ligne place un numéro et un séparateur devant chaque ligne sans modifier la ligne elle-même.",
    "content": {
      "about": "Collez plusieurs lignes et placez un numéro devant chacune. Vous choisissez le numéro de départ et les caractères entre le numéro et la ligne.",
      "howTo": [
        "Collez le texte. Chaque ligne reste telle que vous l’avez tapée.",
        "Indiquez le numéro de départ. 1 est le départ habituel ; un entier inférieur à 0 est accepté.",
        "Indiquez le séparateur. Par défaut, un point et une espace.",
        "Cliquez sur « Ajouter les numéros », puis copiez les lignes numérotées ou videz le formulaire."
      ],
      "features": [
        "Le texte des lignes n’est ni rogné ni réécrit.",
        "Un séparateur personnalisé, comme \") \" ou une tabulation.",
        "Un numéro de départ autre que 1."
      ],
      "examples": [
        {
          "title": "Une liste de trois lignes",
          "body": "Les lignes « Première ligne », « Deuxième ligne » et « Troisième ligne » avec départ 1 et séparateur « . » deviennent « 1. Première ligne », « 2. Deuxième ligne » et « 3. Troisième ligne »."
        },
        {
          "title": "Continuer une liste à 10",
          "body": "Avec le numéro de départ 10 et le séparateur \") \", la première ligne collée devient « 10) » suivi de la ligne d’origine."
        }
      ],
      "explanation": "Le texte est découpé aux sauts de ligne. Chaque ligne reçoit le numéro de départ plus sa position, puis le séparateur, puis ses caractères d’origine. Les lignes vides sont aussi numérotées, car ce sont des lignes.",
      "tips": [
        "Si le texte contient déjà des numéros, retirez-les d’abord, sinon chaque ligne aura deux numéros.",
        "Utilisez une tabulation comme séparateur pour coller le résultat dans un tableur."
      ],
      "limitations": "Un saut de ligne final crée une dernière ligne vide, qui est numérotée. Les retours automatiques dans la zone ne sont pas de nouvelles lignes ; seuls les vrais sauts de ligne comptent.",
      "faqs": [
        {
          "question": "L’orthographe ou les espaces changent-ils ?",
          "answer": "Non. Les caractères après le séparateur sont la ligne d’origine."
        },
        {
          "question": "Puis-je commencer à 0 ?",
          "answer": "Oui. 0 et les entiers négatifs sont acceptés. Un décimal comme 1,5 ne l’est pas."
        },
        {
          "question": "Ma saisie est-elle envoyée à un serveur ?",
          "answer": "Non. Les lignes et le numéro de départ restent dans cet onglet. Ils ne sont envoyés à aucun serveur."
        },
        {
          "question": "Comment numéroter les lignes d’un texte ?",
          "answer": "Collez le texte, réglez le numéro de départ et le séparateur, par exemple un point et une espace, puis ajoutez les numéros et copiez le résultat."
        },
        {
          "question": "Les lignes vides sont-elles numérotées ?",
          "answer": "Oui. Chaque vrai saut de ligne commence une nouvelle ligne numérotée, y compris les lignes vides et une ligne vide finale."
        }
      ]
    },
    "ui": {
      "Starting number": "Numéro de départ",
      "Separator": "Séparateur",
      "Placed between the number and the original line.": "Placé entre le numéro et la ligne d’origine.",
      "Add numbers": "Ajouter les numéros",
      "Numbered lines": "Lignes numérotées",
      "Paste the lines you want to number.": "Collez les lignes à numéroter.",
      "starting number": "numéro de départ",
      "Enter a whole number for the starting line.": "Saisissez un nombre entier pour la première ligne."
    }
  },
  "number-to-words": {
    "answer": "Un convertisseur de nombres en lettres écrit en anglais les entiers de -999 999 999 à 999 999 999. Il peut aussi relire des nombres simples écrits en anglais.",
    "content": {
      "about": "Écrivez un entier en toutes lettres en anglais, ou retransformez des nombres simples écrits en anglais en chiffres. La plage va de -999 999 999 à 999 999 999.",
      "howTo": [
        "Choisissez nombre vers lettres ou lettres vers nombre.",
        "Saisissez le nombre ou les mots.",
        "Cliquez sur « Convertir »."
      ],
      "features": [
        "Entiers jusqu’aux millions.",
        "Nombres négatifs et zéro.",
        "Lecture inverse de mots anglais simples."
      ],
      "examples": [
        {
          "title": "1 234",
          "body": "En anglais : one thousand two hundred thirty-four."
        }
      ],
      "explanation": "Le convertisseur regroupe le nombre en millions, milliers et reste. Les dizaines et unités de 21 à 99 prennent un trait d’union. Le mot « and » n’est pas utilisé. Les zéros en tête sont ignorés : 007 donne seven.",
      "tips": [
        "Écrivez twenty-one avec un trait d’union, ou twenty one.",
        "Utilisez minus pour un nombre négatif."
      ],
      "limitations": "Les décimaux, les milliards et les formulations avec le mot « and » ne sont pas pris en charge. Le résultat est toujours en anglais, pas en français.",
      "faqs": [
        {
          "question": "Comment écrire un nombre en lettres ?",
          "answer": "La page regroupe millions, milliers et centaines, puis écrit les dizaines et les unités. 123 donne one hundred twenty-three."
        },
        {
          "question": "Quelle plage est prise en charge ?",
          "answer": "Les entiers de -999 999 999 à 999 999 999."
        },
        {
          "question": "Que deviennent les zéros en tête ?",
          "answer": "Ils sont ignorés. 007 donne seven."
        },
        {
          "question": "Peut-on convertir des décimaux ?",
          "answer": "Non. Saisissez un nombre entier."
        },
        {
          "question": "Peut-on retransformer des mots en nombre ?",
          "answer": "Oui, pour des mots anglais simples dans cette plage, comme one hundred twenty-three ou minus twenty."
        },
        {
          "question": "Ces nombres sont-ils envoyés à un serveur ?",
          "answer": "Non. Le nombre ou les mots restent dans cet onglet pendant la conversion. Ils ne sont pas envoyés."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Entiers de -999 999 999 à 999 999 999. Les mots suivent l’anglais américain, sans le mot « and », par exemple one hundred twenty-three. Les zéros en tête sont ignorés.",
      "Number to words": "Nombre vers lettres",
      "Words to number": "Lettres vers nombre",
      "Number words": "Nombre en lettres (anglais)",
      "Enter a whole number. Decimals are outside this converter.": "Saisissez un nombre entier. Les décimaux ne sont pas pris en charge.",
      "Enter a whole number using digits.": "Saisissez un nombre entier en chiffres.",
      "This converter supports -999,999,999 through 999,999,999.": "Ce convertisseur accepte de -999 999 999 à 999 999 999.",
      "Enter number words.": "Saisissez un nombre en lettres anglaises.",
      "Enter number words after minus.": "Saisissez des mots anglais après minus.",
      "This converter does not use the word and.": "Ce convertisseur n’utilise pas le mot « and ».",
      "\"{0}\" is not a supported number word.": "« {0} » n’est pas un mot de nombre pris en charge.",
      "That number is outside -999,999,999 through 999,999,999.": "Ce nombre est hors de la plage -999 999 999 à 999 999 999."
    },
    "note": "Cet outil écrit et lit les nombres en lettres uniquement en anglais. L’interface et l’aide sont traduites."
  },
  "morse-code": {
    "answer": "Un traducteur de code Morse convertit un texte en A–Z et 0–9 en Morse international, ou relit le Morse en texte. Les lettres sont séparées par des espaces et les mots par une barre oblique.",
    "content": {
      "about": "Convertissez lettres et chiffres en code Morse international, ou le Morse en texte.",
      "howTo": [
        "Choisissez texte vers Morse ou Morse vers texte.",
        "Saisissez A–Z, 0–9 ou du Morse composé de points, tirets, espaces et /.",
        "Cliquez sur « Convertir »."
      ],
      "features": [
        "A–Z et 0–9.",
        "Espaces entre les lettres et / entre les mots.",
        "Un message d’erreur clair pour un caractère non pris en charge."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO donne .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Chaque lettre et chaque chiffre a un motif Morse international. Une espace sépare les lettres, une barre oblique sépare les mots. Les minuscules sont lues comme des majuscules. Un caractère hors de A–Z et 0–9 arrête la conversion.",
      "tips": [
        "SOS s’écrit ... --- ...",
        "Laissez une espace entre les lettres Morse."
      ],
      "limitations": "La ponctuation et les lettres hors de A–Z (comme é, è ou ç) ne sont pas converties. Un motif Morse inconnu est refusé.",
      "faqs": [
        {
          "question": "Comment écrire un texte en Morse ?",
          "answer": "Chaque lettre devient son motif Morse international. Les lettres sont séparées par une espace, les mots par /."
        },
        {
          "question": "Les minuscules fonctionnent-elles ?",
          "answer": "Oui. Les minuscules sont lues comme des majuscules."
        },
        {
          "question": "Qu’est-ce qui sépare les mots ?",
          "answer": "Une barre oblique sépare les mots. Une espace sépare les lettres d’un même mot."
        },
        {
          "question": "Et si je tape de la ponctuation ?",
          "answer": "La page indique le caractère non pris en charge et ne devine pas de code."
        },
        {
          "question": "Le texte est-il envoyé quelque part ?",
          "answer": "Non. La conversion se fait dans votre navigateur."
        },
        {
          "question": "Les saisies sont-elles envoyées à un serveur ?",
          "answer": "Non. Les lettres et motifs Morse sont convertis dans cet onglet. Ils ne sont envoyés à aucun serveur."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Morse international pour A–Z et 0–9. Les lettres sont séparées par une espace, les mots par /. Les caractères non pris en charge sont refusés.",
      "Text to Morse": "Texte vers Morse",
      "Morse to text": "Morse vers texte",
      "Morse code": "Code Morse",
      "Morse": "Morse",
      "Enter text to convert.": "Saisissez du texte à convertir.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "« {0} » n’est pas pris en charge. Utilisez A–Z et 0–9.",
      "Enter Morse code to convert.": "Saisissez du code Morse à convertir.",
      "Morse code can use only dots, dashes, spaces, and /.": "Le code Morse ne peut contenir que des points, des tirets, des espaces et /.",
      "A word separator is missing letters.": "Il manque des lettres autour d’un séparateur de mots.",
      "\"{0}\" is not a supported Morse letter.": "« {0} » n’est pas une lettre Morse prise en charge."
    }
  },
  "roman-numeral-converter": {
    "answer": "Un convertisseur de chiffres romains transforme les entiers de 1 à 3999 en chiffres romains standard et relit ces chiffres en nombres. Les valeurs au-delà de 3999 ne sont pas prises en charge.",
    "content": {
      "about": "Convertissez les entiers de 1 à 3999 en chiffres romains standard, et ces chiffres en nombres.",
      "howTo": [
        "Choisissez nombre vers romain ou romain vers nombre.",
        "Saisissez un nombre de 1 à 3999, ou un chiffre romain avec I, V, X, L, C, D et M.",
        "Cliquez sur « Convertir »."
      ],
      "features": [
        "Notation soustractive standard.",
        "Conversion inverse.",
        "Refus des chiffres qui ne sont pas sous forme standard."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 donne MCMXCIV."
        }
      ],
      "explanation": "La page construit les chiffres à partir de M, CM, D, CD, C, XC, L, XL, X, IX, V, IV et I. Une chaîne romaine n’est acceptée que si elle est la forme standard de sa valeur. IIII, IC et IL sont refusés. Les chiffres au-delà de 3999, y compris la notation avec vinculum, ne sont pas pris en charge.",
      "tips": [
        "4 s’écrit IV, pas IIII.",
        "9 s’écrit IX, pas VIIII."
      ],
      "limitations": "La plage va de 1 à 3999. Zéro, les négatifs et les nombres plus grands sont refusés.",
      "faqs": [
        {
          "question": "Comment convertir un nombre en chiffres romains ?",
          "answer": "La page utilise la notation soustractive standard. 4 donne IV, 9 donne IX, 40 donne XL et 3999 donne MMMCMXCIX."
        },
        {
          "question": "Quels nombres sont pris en charge ?",
          "answer": "Les entiers de 1 à 3999."
        },
        {
          "question": "Pourquoi IIII est-il refusé ?",
          "answer": "IIII n’est pas la forme standard de 4. La forme standard est IV."
        },
        {
          "question": "Peut-on convertir au-delà de 3999 ?",
          "answer": "Non. Les notations étendues pour les grands nombres ne sont pas prises en charge."
        },
        {
          "question": "Peut-on retransformer un chiffre romain en nombre ?",
          "answer": "Oui, s’il s’agit d’un chiffre romain standard entre 1 et 3999."
        },
        {
          "question": "Ces nombres sont-ils envoyés à un serveur ?",
          "answer": "Non. Le nombre ou le chiffre romain est converti dans cet onglet. Il n’est pas envoyé."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Chiffres romains standard de 1 à 3999. Au-delà de 3999, y compris la notation avec vinculum, rien n’est pris en charge. Les suites invalides comme IIII sont refusées.",
      "Number to Roman": "Nombre vers romain",
      "Roman to number": "Romain vers nombre",
      "Roman numeral": "Chiffre romain",
      "Enter a whole number from 1 through 3999.": "Saisissez un nombre entier de 1 à 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Ce convertisseur accepte de 1 à 3999. Les chiffres au-delà de 3999 ne sont pas pris en charge.",
      "Enter a Roman numeral.": "Saisissez un chiffre romain.",
      "Use only I, V, X, L, C, D, and M.": "Utilisez uniquement I, V, X, L, C, D et M.",
      "\"{0}\" is not a valid Roman numeral.": "« {0} » n’est pas un chiffre romain valide."
    }
  },
  "text-repeater": {
    "answer": "Un répéteur de texte copie un mot, une expression ou une ligne de 1 à 200 fois, avec rien, une espace ou un saut de ligne entre les copies.",
    "content": {
      "about": "Répétez un mot, une expression ou une ligne de 1 à 200 fois. Mettez rien, une espace ou un saut de ligne entre les copies. Le texte source peut faire jusqu’à 5 000 caractères, et le résultat assemblé jusqu’à 100 000 caractères.",
      "howTo": [
        "Saisissez le texte à répéter. Une zone vide est refusée.",
        "Saisissez un nombre entier de 1 à 200.",
        "Choisissez rien, une espace ou un saut de ligne entre les copies, puis cliquez sur « Répéter »."
      ],
      "features": [
        "Une seule copie quand le nombre est 1, sans séparateur ajouté.",
        "Une espace ou un saut de ligne seulement entre les copies, pas après la dernière.",
        "Une limite de longueur pour qu’un résultat énorme ne remplisse pas la page."
      ],
      "examples": [
        {
          "title": "Un mot trois fois",
          "body": "ha, nombre 3, avec une espace entre les copies, donne ha ha ha."
        },
        {
          "title": "Une ligne deux fois",
          "body": "Prêt, nombre 2, avec un saut de ligne entre les copies, donne Prêt sur une ligne et Prêt sur la suivante."
        }
      ],
      "explanation": "La page copie le texte le nombre de fois demandé et relie les copies avec le séparateur choisi. Elle ne génère pas de faux latin et ne supprime pas les doublons.",
      "tips": [
        "Utilisez un saut de ligne pour une liste de lignes identiques, une espace pour tout garder sur une ligne."
      ],
      "limitations": "Le texte source peut faire jusqu’à 5 000 caractères, le nombre aller jusqu’à 200 et le résultat assemblé jusqu’à 100 000 caractères. Un résultat plus long est refusé.",
      "faqs": [
        {
          "question": "Le répéteur de texte est-il gratuit ?",
          "answer": "Oui. Vous pouvez répéter du texte ici sans payer ni créer de compte."
        },
        {
          "question": "Un nombre de 1 ajoute-t-il un séparateur ?",
          "answer": "Non. Une copie correspond exactement au texte tapé, sans ajout."
        },
        {
          "question": "Puis-je répéter une ligne vide ?",
          "answer": "Une zone vide est refusée. Une ligne qui ne contient que des espaces est acceptée, car ces espaces sont du texte."
        },
        {
          "question": "Le texte est-il envoyé à un serveur ?",
          "answer": "Non. Les copies sont créées dans cet onglet du navigateur. Tools Star Hub n’envoie pas ce texte à un serveur et ne l’enregistre pas dans le stockage local."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Les copies sont créées dans cet onglet. Le texte n’est envoyé à aucun serveur.",
      "Text to repeat": "Texte à répéter",
      "Repeat count": "Nombre de répétitions",
      "From 1 to 200.": "De 1 à 200.",
      "Between copies": "Entre les copies",
      "Nothing": "Rien",
      "Space": "Espace",
      "New line": "Saut de ligne",
      "Enter the text to repeat.": "Saisissez le texte à répéter.",
      "Keep the text under {0} characters.": "Gardez le texte sous {0} caractères.",
      "repeat count": "nombre de répétitions",
      "Enter a whole number of repeats.": "Saisissez un nombre entier de répétitions.",
      "Choose a repeat count from {0} to {1}.": "Choisissez un nombre de répétitions de {0} à {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Cette répétition est trop longue pour cette page. Utilisez un texte plus court ou un nombre plus petit."
    }
  }
};

export default data;
