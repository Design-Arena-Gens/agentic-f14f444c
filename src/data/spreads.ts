export interface SpreadPosition {
  id: string;
  title: string;
  question: string;
  advice: string;
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  cards: number;
  focus: string;
  positions: SpreadPosition[];
}

export const spreads: Spread[] = [
  {
    id: "quotidien",
    name: "Focus du jour",
    description:
      "Un tirage éclair pour capter l'énergie dominante de la journée et la meilleure façon de l'accompagner.",
    cards: 1,
    focus: "Clarté immédiate",
    positions: [
      {
        id: "essence",
        title: "Essence du moment",
        question:
          "Quelle énergie principale influence votre journée ou votre intention actuelle ?",
        advice:
          "Sentez comment cette carte invite à un micro-ajustement concret dès maintenant.",
      },
    ],
  },
  {
    id: "passe-present-futur",
    name: "Passé - Présent - Futur",
    description:
      "Une vision panoramique qui relie l’expérience passée, la dynamique actuelle et le potentiel à venir.",
    cards: 3,
    focus: "Narration temporelle",
    positions: [
      {
        id: "passe",
        title: "Passé",
        question:
          "Quel héritage ou quelle expérience récente influence la situation ?",
        advice:
          "Identifiez la leçon clé qui mérite d’être conservée en mémoire active.",
      },
      {
        id: "present",
        title: "Présent",
        question:
          "Quels sont les paramètres dominants qui composent le présent ?",
        advice:
          "Utilisez cette carte pour décrire la température émotionnelle et mentale actuelle.",
      },
      {
        id: "futur",
        title: "Futur en gestation",
        question:
          "Quelle tendance est en train de se dessiner si vous continuez sur cette lancée ?",
        advice:
          "Laissez cette carte suggérer le pas à accomplir pour influencer la suite.",
      },
    ],
  },
  {
    id: "tirage-en-croix",
    name: "Tirage en Croix",
    description:
      "Classique du tarot marseillais : un diagnostic stratégique et spirituel qui révèle enjeux, forces et trajectoire.",
    cards: 5,
    focus: "Analyse stratégique",
    positions: [
      {
        id: "pour",
        title: "Atout",
        question:
          "Quelle force ou appui vous porte vers l’objectif ou la résolution ?",
        advice:
          "Repérez ce qui est déjà fiable pour bâtir un levier solide.",
      },
      {
        id: "contre",
        title: "Défi",
        question:
          "Quel obstacle, frein ou angle mort demande à être observé ?",
        advice:
          "Apprenez à dialoguer avec ce frein plutôt qu’à le repousser.",
      },
      {
        id: "cle",
        title: "Clé de passage",
        question: "Quelle ressource libère la situation ou lève le verrou ?",
        advice:
          "Cette carte indique la qualité à activer consciemment.",
      },
      {
        id: "evolution",
        title: "Évolution",
        question:
          "Comment la dynamique est susceptible d'évoluer avec les données actuelles ?",
        advice:
          "Visualisez le mouvement et décidez s’il vous convient ou non.",
      },
      {
        id: "synthese",
        title: "Synthèse",
        question:
          "Quel message global retenir ? Comment l’âme vous invite à agir ?",
        advice:
          "Résumez l'histoire en une intention claire à poser par écrit.",
      },
    ],
  },
  {
    id: "croix-celtique",
    name: "Grande Croix Celtique",
    description:
      "Un tirage complet en dix cartes pour détailler la situation, ses racines, ses influences inconscientes et ses opportunités d’évolution.",
    cards: 10,
    focus: "Exploration profonde",
    positions: [
      {
        id: "situation",
        title: "Situation",
        question: "Quelle est la synthèse de la situation actuelle ?",
        advice:
          "Décrivez factuellement le contexte et votre rôle.",
      },
      {
        id: "defi",
        title: "Défi immédiat",
        question: "Quel élément vient croiser ou challenger la situation ?",
        advice:
          "Évaluez votre marge de manœuvre face à cet obstacle.",
      },
      {
        id: "conscient",
        title: "Conscient",
        question:
          "Quelles motivations conscientes orientent votre conduite ?",
        advice:
          "Clarifiez vos objectifs affichés sans filtre.",
      },
      {
        id: "inconscient",
        title: "Inconscient",
        question:
          "Quelle racine profonde ou influence cachée colore la situation ?",
        advice:
          "Accueillez les émotions et croyances que cette carte réveille.",
      },
      {
        id: "recent",
        title: "Passé proche",
        question:
          "Quel événement récent nourrit directement le présent ?",
        advice:
          "Identifiez la dynamique qui persiste encore.",
      },
      {
        id: "avenir-proche",
        title: "Avenir proche",
        question:
          "Quel tournant très prochain se dessine à court terme ?",
        advice:
          "Préparez une action concrète alignée.",
      },
      {
        id: "ressources",
        title: "Ressources",
        question:
          "Quels alliés, compétences ou soutiens sont disponibles ?",
        advice:
          "Notez comment les mobiliser dès maintenant.",
      },
      {
        id: "environnement",
        title: "Environnement",
        question:
          "Comment votre entourage ou le contexte extérieur répond ?",
        advice:
          "Cherchez les signaux faibles dans votre sphère sociale.",
      },
      {
        id: "espoirs",
        title: "Espoirs et craintes",
        question:
          "Qu'est-ce qui nourrit l'espérance ou la nervosité ?",
        advice:
          "Transformez la peur en intention constructive.",
      },
      {
        id: "destinee",
        title: "Destinée",
        question:
          "Quel résultat probable émerge si rien ne change ?",
        advice:
          "Décidez d'amplifier ou d'infléchir cette issue.",
      },
    ],
  },
  {
    id: "relationnel",
    name: "Harmonie Relationnelle",
    description:
      "Six cartes pour explorer une relation : vous, l’autre, le lien, les forces, les défis et le potentiel futur.",
    cards: 6,
    focus: "Cartographie des relations",
    positions: [
      {
        id: "vous",
        title: "Vous",
        question: "Quelle énergie apportez-vous dans la relation ?",
        advice:
          "Observez vos besoins et votre façon de donner.",
      },
      {
        id: "autre",
        title: "L’autre",
        question:
          "Quel est le vécu ou l’attitude de l’autre personne ?",
        advice:
          "Accueillez sa différence sans jugement.",
      },
      {
        id: "lien",
        title: "Le lien",
        question:
          "Quelle est l’essence du lien lorsqu’il fonctionne ?",
        advice:
          "Repérez ce qui mérite d’être nourri ensemble.",
      },
      {
        id: "forces",
        title: "Forces",
        question: "Quelles ressources solidifient la relation ?",
        advice:
          "Servez-vous-en comme base lors des moments sensibles.",
      },
      {
        id: "obstacles",
        title: "Obstacles",
        question: "Qu’est-ce qui fragilise le lien ou le fait douter ?",
        advice:
          "Nommez le défi pour le transformer ensemble.",
      },
      {
        id: "avenir",
        title: "Potentiel futur",
        question: "Que pourriez-vous co-créer si chacun s’implique ?",
        advice:
          "Projetez une intention partagée et réaliste.",
      },
    ],
  },
];

