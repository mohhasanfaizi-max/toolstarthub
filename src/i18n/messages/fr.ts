import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Accueil",
      allTools: "Tous les outils",
      categories: "Catégories",
      guides: "Guides",
      popularTools: "Outils populaires",
      about: "À propos",
      howItWorks: "Fonctionnement",
      contact: "Contact",
      exploreTools: "Explorer les outils",
      mobileNav: "Mobile",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      openSearch: "Ouvrir la recherche",
      closeSearch: "Fermer la recherche",
    },
    theme: { toLight: "Passer au thème clair", toDark: "Passer au thème sombre" },
    language: { label: "Langue", current: "Langue : {name}", englishOnly: "En anglais uniquement" },
    search: {
      placeholder: "Rechercher un outil…",
      label: "Rechercher un outil",
      clear: "Effacer la recherche",
      suggestions: "Suggestions de recherche",
      noResults: "Aucun outil trouvé",
    },
    consent: {
      title: "Cookies de mesure d’audience",
      body: "Nous utilisons Google Analytics pour compter les visites, uniquement si vous l’acceptez. Les outils fonctionnent de la même façon dans les deux cas. Consultez la {link}.",
      privacyLink: "politique de confidentialité",
      accept: "Accepter",
      decline: "Refuser",
      settings: "Paramètres des cookies",
    },
    favorites: { add: "Ajouter {name} aux favoris", remove: "Retirer {name} des favoris" },
    card: { popular: "Populaire", new: "Nouveau", openTool: "Ouvrir l’outil" },
    categoryNames: {
      calculators: "Calculatrices",
      "text-tools": "Outils de texte",
      "developer-tools": "Outils pour développeurs",
      "image-tools": "Outils d’image",
      "seo-utilities": "SEO et utilitaires",
      "ai-tools": "Outils d’IA",
    },
    home: {
      filterAria: "Filtrer les outils",
      filters: {
        all: "Tous",
        pdf: "PDF",
        images: "Images",
        "text-tools": "Texte",
        "developer-tools": "Développeurs",
        calculators: "Calculatrices",
        "seo-utilities": "Utilitaires",
        "ai-tools": "IA",
      },
      noToolsInGroup: "Aucun outil dans ce groupe.",
    },
    catalog: {
      filterAria: "Filtrer les outils",
      filters: {
        all: "Tous",
        calculators: "Calculatrices",
        "image-tools": "Image",
        pdf: "PDF",
        "text-tools": "Texte",
        "developer-tools": "Développeurs",
        color: "Couleur",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "IA",
      },
      favorites: "Favoris",
      sort: "Trier",
      sortName: "Nom",
      sortNewest: "Plus récents",
      sortCategory: "Catégorie",
      recentlyUsed: "Utilisés récemment",
      recentEmpty: "Les outils que vous utilisez apparaîtront ici.",
      viewAll: "Tout afficher",
      searchResults: "Résultats de recherche",
      allTools: "Tous les outils",
      tools: "Outils",
      noFavorites: "Vous n’avez encore ajouté aucun outil en favori.",
      noToolsFound: "Aucun outil trouvé",
      noToolsCategory: "Aucun outil dans cette catégorie pour le moment.",
      countFavorites: { one: "{count} favori", other: "{count} favoris" },
      countResults: { one: "{count} résultat pour « {query} »", other: "{count} résultats pour « {query} »" },
      countOf: "{count} outils sur {total}",
    },
    tool: {
      loading: "Chargement de l’outil…",
      copy: "Copier",
      copied: "Copié",
      copyCss: "Copier le CSS",
      copyLink: "Copier le lien",
      linkCopied: "Lien copié",
      download: "Télécharger",
      dropPrompt: "Glissez-déposez une image ici ou choisissez un fichier.",
      selected: "Sélectionné : {name}",
      copySuccess: "{what} copié dans le presse-papiers.",
      copyFailed:
        "Copie automatique impossible. Le contenu ({what}) est sélectionné : appuyez sur Ctrl+C (ou Cmd+C sur Mac) pour le copier.",
    },
  },
  meta: {
    tagline: "Des outils en ligne gratuits qui fonctionnent, tout simplement",
    description:
      "Des outils en ligne rapides, gratuits et faciles pour les calculs, le texte, le développement, les images, le SEO et le quotidien. Aucune inscription.",
    toolsTitle: "Tous les outils",
    toolsDescription:
      "Parcourez des outils en ligne gratuits pour les calculs, le texte, le développement, les images, le SEO et les tâches du quotidien.",
    categoriesTitle: "Catégories",
    categoriesDescription:
      "Explorez Tools Star Hub par catégorie : calculatrices, outils de texte, outils pour développeurs, outils d’image et PDF, utilitaires SEO et outils d’IA.",
    categoryTitle: "{name} – outils en ligne gratuits",
    categoryShareAlt: "{name} – outils en ligne gratuits",
    toolShareAlt: "{name} – outil en ligne gratuit",
  },
  header: { primaryNav: "Navigation principale", logoHome: "Accueil {name}", skip: "Aller au contenu principal" },
  breadcrumbs: { label: "Fil d’Ariane", home: "Accueil", tools: "Outils", categories: "Catégories" },
  footer: {
    blurb: "Des outils en ligne rapides et simples pour les calculs, le texte, le développement, les images, le SEO et le quotidien.",
    tagline: "Rapide • Gratuit • Dans le navigateur • Sans inscription",
    explore: "Explorer",
    categories: "Catégories",
    legal: "Mentions légales",
    favorites: "Favoris",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    disclaimer: "Avertissement",
    languages: "Langues",
    rights: "© {year} {name}. Tous droits réservés.",
  },
  home: {
    h1: "Des outils en ligne gratuits pour les tâches du quotidien",
    intro:
      "Trouvez un outil, utilisez-le, obtenez un résultat. {name} est un endroit simple pour les PDF, les images, les calculs et le texte, sans compte.",
    popularLabel: "Populaires :",
    trust: ["Gratuit", "Sans inscription", "Rapide et simple", "Vos fichiers restent dans votre navigateur"],
    popularTitle: "Outils populaires",
    popularDescription: "Les outils les plus utilisés pour les fichiers, les images, le texte et les calculs du quotidien.",
    viewAllTools: "Voir tous les outils",
    catalogTitle: "Tout ce qu’il vous faut, au même endroit.",
    catalogDescription: "Filtrez les outils disponibles sur ce site. Chacun s’ouvre directement dans le navigateur.",
    categoriesTitle: "Parcourir par catégorie",
    categoriesDescription: "Calculatrices, texte, utilitaires pour développeurs, images et PDF, et outils pour sites web.",
    allCategories: "Toutes les catégories",
    whyTitle: "Pourquoi {name} ?",
    whyDescription: "Un ensemble d’utilitaires simples pour des tâches qui demanderaient sinon une application à part.",
    values: {
      fast: { title: "Rapide", note: "La plupart des outils fonctionnent dans le navigateur et affichent le résultat sur la même page." },
      free: { title: "Gratuit", note: "Les outils de ce site ne sont pas payants." },
      private: {
        title: "Confidentiel",
        note: "Les fichiers et le texte collé sont traités sur votre appareil. Les visites sont mesurées séparément, comme l’explique la politique de confidentialité.",
      },
      noAccount: { title: "Sans compte", note: "Ouvrez un outil et utilisez-le. Aucun compte n’est nécessaire." },
    },
    howTitle: "Comment ça marche",
    howDescription: "Trois étapes. Rien à installer.",
    steps: [
      { title: "Choisissez un outil", description: "Recherchez ou choisissez une calculatrice, un outil de fichiers ou un utilitaire pour développeurs." },
      { title: "Importez ou saisissez votre contenu", description: "Ajoutez le fichier, les nombres ou le texte demandés par l’outil." },
      { title: "Obtenez le résultat", description: "Copiez, téléchargez ou lisez le résultat sur la même page." },
    ],
    guidesTitle: "Guides pratiques",
    guidesDescription: "De courtes explications sur les tâches que les outils de ce site prennent en charge.",
    allGuides: "Tous les guides",
    pricingTitle: "Tarifs",
    pricingBody: "Les outils sont gratuits. Pas de compte, pas d’installation, pas d’abonnement payant.",
    ctaTitle: "Prêt à gagner du temps ?",
    ctaBody: "Découvrez la collection d’outils en ligne simples de {name}.",
    ctaPrimary: "Explorer tous les outils",
    ctaSecondary: "Essayer un outil",
  },
  toolsPage: {
    title: "Tous les outils",
    description:
      "Recherchez, filtrez par catégorie ou rouvrez un outil récent ou favori. Les nouveaux outils apparaissent ici dès leur ajout.",
  },
  categoriesPage: {
    title: "Catégories",
    description: "Choisissez une catégorie pour trouver plus vite le bon outil.",
    body: "Les calculatrices traitent les calculs du quotidien. Les outils de texte comptent et nettoient vos écrits. Les outils pour développeurs formatent, encodent et minifient. Les outils d’image couvrent aussi les tâches PDF comme la fusion, le découpage et l’extraction de texte. SEO et utilitaires regroupent liens de campagne, slugs, codes QR et mots de passe. Les outils d’IA créent des prompts et raccourcissent des brouillons dans le navigateur ; leurs boutons IA envoient le texte saisi au modèle Gemini de Google pour générer un résultat. Tous les autres outils fonctionnent dans votre navigateur.",
  },
  category: {
    cardCount: { one: "{count} outil", other: "{count} outils" },
    pageCount: { one: "{count} outil dans cette catégorie.", other: "{count} outils dans cette catégorie." },
    browse: "Voir les outils",
    starting: "Pour bien commencer",
    related: "Catégories associées",
    none: "Aucun outil dans cette catégorie pour le moment.",
  },
  toolPage: {
    whatIs: "Qu’est-ce que {name} ?",
    categorySr: "catégorie",
    relatedTools: "Outils associés",
    helpfulGuides: "Guides pratiques",
    englishContent:
      "Le guide détaillé de cet outil (mode d’emploi, exemples et FAQ) est pour l’instant disponible en anglais.",
    privacy: {
      browser:
        "Cet outil fonctionne dans votre navigateur. Les saisies, fichiers et valeurs générées restent sur cet appareil. Les favoris et outils récents, si vous les utilisez, n’enregistrent que des noms d’outils dans le stockage local — jamais de mots de passe, de documents ni de contenus QR.",
      gemini:
        "Les boutons de base fonctionnent dans votre navigateur. « Generate with AI », « Analyze with AI » et « Compress with AI » envoient le texte saisi à l’API Gemini de Google via ToolStarHub. Ce texte n’est pas enregistré ici. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits. Les favoris n’enregistrent que des noms d’outils.",
      humanizer:
        "« Rewrite text » reste dans votre navigateur. « Humanize with AI » envoie le texte saisi à l’API Gemini de Google via ToolStarHub. Ce texte n’est pas enregistré ici. Avec l’offre gratuite, Google peut l’utiliser pour améliorer ses produits. Les favoris n’enregistrent que des noms d’outils.",
      fetch:
        "« Check preview » envoie l’URL à ce site, qui consulte cette page publique et lit ses balises. La page n’est pas enregistrée ici. Les adresses privées ou non HTTP sont refusées. Les favoris n’enregistrent que des noms d’outils.",
      see: "Consultez la {link}.",
      link: "politique de confidentialité",
    },
  },
  categories: {
    calculators: {
      name: "Calculatrices",
      description: "Outils de calcul du quotidien",
      shortDescription: "Pourcentages, âge, unités et autres calculs du quotidien.",
      intro:
        "Ces calculatrices répondent à une question chiffrée précise : un pourcentage, une variation en pourcentage, un prix soldé, un pourboire, une taxe de vente, un âge, les jours ou jours ouvrés entre deux dates, une conversion d’unités, une estimation de prêt ou de crédit immobilier, un salaire, une surface, une moyenne GPA ou un nombre aléatoire dans un intervalle.",
      audience:
        "Utilisez-les quand un tableur serait superflu. Ce sont des aides au calcul. Les résultats concernant les prêts, les taxes et les salaires sont des estimations, et non des conseils financiers, fiscaux, médicaux ou techniques.",
    },
    "text-tools": {
      name: "Outils de texte",
      description: "Outils d’écriture et de traitement de texte",
      shortDescription: "Comptez, nettoyez, convertissez et formatez du texte dans le navigateur.",
      intro:
        "Les outils de texte comptent les mots et les caractères, changent la casse, recherchent et remplacent, suppriment les sauts de ligne, numérotent les lignes, retirent les lignes en double ou les espaces superflus, trient les lignes, comparent deux versions et génèrent du faux texte pour une mise en page.",
      audience:
        "Ils s’adressent aux rédacteurs, aux correcteurs et à toute personne qui nettoie un texte copié depuis un document ou un tableur. Le texte collé reste dans le navigateur.",
    },
    "developer-tools": {
      name: "Outils pour développeurs",
      description: "Formatez, encodez, minifiez et convertissez des données dans le navigateur",
      shortDescription: "Formatez du JSON, encodez des données, minifiez du code et convertissez du Markdown ou du HTML en local.",
      intro:
        "Les outils pour développeurs formatent le JSON, convertissent entre JSON et CSV, testent une expression régulière, hachent du texte en SHA-256 ou SHA-512, encodent et décodent Base64, URL et HTML, minifient HTML, CSS ou JavaScript, convertissent le Markdown et génèrent des UUID ou des horodatages Unix. Les outils de couleur convertissent l’hexadécimal en RGB, vérifient le contraste et créent des dégradés et des ombres CSS.",
      audience:
        "Ils sont faits pour ceux qui modifient du code ou des données et veulent un résultat sur la page sans installer de paquet. Les minificateurs et convertisseurs respectent les règles de chaque format : une entrée invalide est refusée plutôt que réécrite en silence.",
    },
    "image-tools": {
      name: "Outils d’image",
      description: "Outils d’image et de PDF dans le navigateur",
      shortDescription: "Compressez, convertissez et inspectez des images et des PDF sans les envoyer en ligne.",
      intro:
        "Les outils d’image compressent, redimensionnent, recadrent, convertissent et prélèvent les couleurs d’une image. Les outils PDF de cette catégorie fusionnent, divisent, compressent, comptent les pages, lisent ou suppriment les métadonnées, extraient le texte, transforment des pages en images JPG et créent un PDF à partir d’images ou de texte.",
      audience:
        "Les fichiers sont traités dans le navigateur. Un PDF numérisé peut ne contenir aucun texte sélectionnable. La compression et la conversion peuvent réduire la qualité : vérifiez le fichier téléchargé avant de remplacer l’original.",
    },
    "seo-utilities": {
      name: "SEO et utilitaires",
      description: "Liens, slugs, codes QR et mots de passe",
      shortDescription: "Créez des liens UTM et des slugs, générez ou scannez des codes QR et créez des mots de passe.",
      intro:
        "Ces utilitaires créent une URL de campagne, transforment un titre en slug d’URL, génèrent un code QR à partir d’un texte ou de données structurées, scannent un code QR avec la caméra ou une image et génèrent un mot de passe en local.",
      audience:
        "L’outil QR de base encode du texte brut ou une URL. QR Code Generator Pro ajoute le Wi-Fi, les contacts et le choix des couleurs. Le générateur de mots de passe crée une chaîne sur cet appareil. Ce n’est pas un gestionnaire de mots de passe.",
    },
    "ai-tools": {
      name: "Outils d’IA",
      description: "Générateurs de prompts et outils d’écriture, avec l’IA Gemini en option",
      shortDescription: "Créez des prompts, étudiez le style d’un texte et raccourcissez un brouillon, dans le navigateur ou avec l’IA Gemini.",
      intro:
        "Ces outils vous aident à rédiger un prompt, décrire une scène d’image ou de vidéo, analyser le style d’un texte ou raccourcir un long brouillon. Le bouton principal de chaque outil fonctionne dans votre navigateur. Les boutons IA (Generate, Analyze, Compress ou Humanize with AI) envoient le texte saisi au modèle Gemini de Google pour produire le résultat.",
      audience:
        "Utilisez le bouton du navigateur si vous ne voulez pas que votre texte quitte cet appareil, et un bouton IA si vous voulez que Gemini le réécrive ou le développe. Le texte envoyé à Gemini n’est pas enregistré sur ce site. Les outils de prompt renvoient du texte, pas des images ni des vidéos. Les outils d’écriture ne déterminent pas l’auteur d’un texte et ne garantissent pas qu’un brouillon raccourci passera un détecteur.",
    },
  },
};

export default messages;
