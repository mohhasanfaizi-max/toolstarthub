import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "Test CPS : vitesse de clic et clics par seconde",
  quickAnswer:
    "Un test CPS compte combien de fois vous cliquez pendant une durée fixe, puis divise par le nombre de secondes pour obtenir vos clics par seconde. Le clic normal avec un doigt tourne souvent autour de 6 à 7 CPS, le chiffre le plus cité comme moyenne. Le jitter click et le butterfly click peuvent aller plus haut.",
  headings: {
    about: "Ce que fait cet outil",
    howTo: "Mode d'emploi",
    examples: "Exemples",
    features: "Fonctions principales",
    howItWorks: "Comment ça marche",
    tips: "Conseils",
    limitations: "Limites",
    faq: "Questions fréquentes",
    disclaimer: "Consultez l'{link} pour savoir ce que ces outils ne couvrent pas.",
    disclaimerLink: "avertissement",
  },
  content: {
    about:
      "Mesurez votre vitesse de clic en clics par seconde (CPS). Choisissez 1, 5, 10, 15, 30 ou 60 secondes, puis cliquez ou touchez la zone le plus vite possible. Le chrono démarre au premier clic. À la fin, vous voyez votre CPS, un niveau de Tortue à Éclair et votre record pour cette durée. Des modes clic droit et barre d'espace sont aussi proposés.",
    howTo: [
      "Choisissez la durée. 10 secondes est le test de clic classique. 1 et 5 secondes mesurent les rafales courtes ; 30 et 60 secondes mesurent l'endurance.",
      "Choisissez ce qui compte : clic gauche, clic droit ou barre d'espace. Sur téléphone ou tablette, gardez le clic gauche et touchez l'écran.",
      "Cliquez ou touchez la zone. Le premier clic compte et lance le chrono.",
      "Continuez à cliquer jusqu'à ce que le chrono atteigne 0. Vos clics par seconde, votre niveau et votre record s'affichent aussitôt. Appuyez sur Réinitialiser pour recommencer.",
    ],
    features: [
      "Six durées : 1, 5, 10, 15, 30 et 60 secondes.",
      "Chrono, nombre de clics et clics par seconde en direct pendant que vous cliquez.",
      "Un niveau de Tortue (moins de 5 CPS) à Éclair (14 CPS ou plus).",
      "Un record enregistré dans ce navigateur pour chaque durée et chaque mode.",
      "Modes clic gauche, clic droit et barre d'espace. Espace et Entrée ne comptent pas dans les modes clic, et une touche maintenue ne se répète jamais en mode barre d'espace.",
      "Prise en charge du tactile, avec un seul comptage par toucher.",
    ],
    examples: [
      {
        title: "Un test de clic de 10 secondes",
        body: "72 clics en 10 secondes donnent 72 ÷ 10 = 7,2 CPS, soit le niveau Lapin.",
      },
      {
        title: "Une rafale d'une seconde",
        body: "9 clics en 1 seconde donnent 9 CPS, le niveau Cheval. Les tests courts donnent souvent un meilleur score que les longs, car la main n'a pas le temps de se fatiguer.",
      },
    ],
    explanation:
      "Le CPS correspond au nombre de clics comptés divisé par la durée du test en secondes. La durée est fixe : un test de 10 secondes divise toujours par 10, même si votre dernier clic arrive un peu avant la fin. Chaque appui compte une fois : un bouton de souris, un toucher sur l'écran ou la touche Espace en mode barre d'espace. Une touche maintenue, Entrée et le clic qui ouvrirait un menu contextuel n'ajoutent rien.",
    tips: [
      "Posez le poignet sur le bureau et cliquez du bout du doigt, pas avec tout le bras.",
      "Échauffez-vous avec un test de 5 secondes avant de viser un record sur 10 secondes ou plus.",
      "Essayez le jitter click ou le butterfly click seulement sur des tests courts, et arrêtez si la main ou le poignet fait mal.",
    ],
    limitations:
      "Le résultat dépend de la souris, de l'écran tactile et du navigateur : les scores de deux appareils différents ne se comparent pas directement. Une souris qui double-clique toute seule gonfle le comptage. Le test ne peut pas savoir si un autoclicker ou une macro a été utilisé. Les records sont stockés dans le stockage local de ce navigateur ; effacer les données du site les supprime.",
    faqs: [
      {
        question: "Qu'est-ce qu'un test CPS ?",
        answer:
          "Un test CPS mesure les clics par seconde. Vous cliquez le plus vite possible pendant une durée fixe, puis le total est divisé par le nombre de secondes. Le test de clic de 10 secondes est la version la plus courante.",
      },
      {
        question: "Quel est le CPS moyen ?",
        answer:
          "Pour un clic normal avec un doigt, on cite le plus souvent environ 6 à 7 CPS. C'est un repère approximatif, pas une norme mesurée. Votre main, votre souris et la durée du test changent le résultat.",
      },
      {
        question: "10 CPS, c'est bien ?",
        answer:
          "Oui. 10 CPS sur 10 secondes, c'est au-dessus de ce que la plupart des gens atteignent en clic normal, et cela donne ici le niveau Cheval. Beaucoup de ceux qui dépassent 10 CPS utilisent le jitter click ou le butterfly click.",
      },
      {
        question: "Comment cliquer plus vite ?",
        answer:
          "Relâchez la prise, posez le poignet sur le bureau et cliquez avec le doigt plutôt qu'avec le bras. Entraînez-vous sur des tests courts et suivez votre record. Le jitter click et le butterfly click peuvent augmenter votre CPS, mais ils coûtent en précision et sollicitent davantage la main.",
      },
      {
        question: "Quelle différence entre le jitter click et le butterfly click ?",
        answer:
          "Avec le jitter click, vous contractez l'avant-bras pour qu'un doigt vibre sur le bouton. Avec le butterfly click, deux doigts alternent sur le même bouton. Le butterfly donne souvent plus de CPS, mais certaines souris et certains serveurs de jeu le gèrent mal.",
      },
      {
        question: "Mes scores sont-ils envoyés à un serveur ?",
        answer:
          "Non. Le test s'exécute dans cet onglet du navigateur. Les records sont enregistrés uniquement dans le stockage local de ce navigateur, et Effacer les records les supprime.",
      },
    ],
  },
};

export default page;
