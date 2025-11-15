import { TarotCard, type Suit } from "@/data/cards";
import { Spread, SpreadPosition } from "@/data/spreads";

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: SpreadPosition;
}

export interface GeneratedInterpretation {
  headline: string;
  overview: string[];
  positionInsights: {
    positionId: string;
    title: string;
    text: string;
    keywords: string;
  }[];
  closing: string;
  ritual: string;
}

const suitTranslations: Record<string, string> = {
  bâtons: "feu créatif",
  coupes: "eau émotionnelle",
  épées: "air mental",
  deniers: "terre concrète",
};

const openingTemplates = [
  "L'énergie du tirage se structure autour d'un fil directeur {focus}.",
  "Ce tirage compose une fresque {focus} qui répond à votre intention.",
  "Votre question déclenche une lecture {focus}, façonnée par les cartes révélées.",
];

const majorArcanaInsights = [
  "La présence marquée des arcanes majeurs indique un tournant de destinée à honorer.",
  "Les arcanes majeurs dominent : l'enjeu convoque votre conscience profonde.",
  "Arcanes majeurs en force : un pacte intérieur cherche à être réaffirmé.",
  "Peu d'arcanes majeurs ici : le mouvement se joue dans les choix du quotidien.",
];

const reversedInsights = [
  "Les cartes renversées invitent à un recentrage intérieur avant de poser un geste visible.",
  "Les inversions signalent des mémoires ou résistances à apprivoiser avec douceur.",
  "Un faible nombre de cartes renversées souligne un potentiel déjà mûr : un recalibrage suffira.",
];

const ritualSuggestions = [
  "Écrivez la synthèse de ce tirage et glissez-la sous votre oreiller pour laisser l'intuition poursuivre le dialogue cette nuit.",
  "Créez un autel éphémère avec un objet par élément (feu, eau, air, terre) afin d'intégrer les enseignements des cartes.",
  "Programmez un moment de respiration consciente où vous visualisez chaque carte se dissoudre pour libérer l'espace du nouveau.",
  "Tracez la carte de synthèse dans un carnet et entourez-la de trois mots-clés issus du tirage : ce sera votre mantra des prochains jours.",
];

const sentenceVariations = [
  "Cette carte exprime {energy} et vous propose de {invitation}.",
  "Elle vous invite à {invitation}, en honorant {energy}.",
  "Le message souligne {energy} et vous encourage à {invitation}.",
  "Elle matérialise {energy} : {invitation}.",
];

const adjectiveByArcana: Record<string, string[]> = {
  major: [
    "initiatique",
    "fondateur",
    "irrévocable",
    "mythique",
  ],
  minor: [
    "progressif",
    "quotidien",
    "incarné",
    "pragmatique",
  ],
};

const invitationTemplates = [
  "aligner vos actions sur ce que votre cœur sait déjà",
  "poser un acte simple mais décisif",
  "vous accorder un rituel de présence à vous-même",
  "dialoguer avec les personnes concernées pour créer un terrain clair",
  "transformer une crainte en intention consciente",
  "retenir une image comme boussole des prochains jours",
];

const reversedInvitations = [
  "questionner un conditionnement qui limite votre liberté",
  "ralentir pour accueillir une vulnérabilité oubliée",
  "réparer un lien ou un engagement envers vous-même",
  "reconnaître un besoin essentiel encore ignoré",
  "revenir à une pratique qui nourrit votre paix intérieure",
];

const joinKeywords = (keywords: string[]): string =>
  keywords.length <= 1
    ? keywords.join("")
    : `${keywords.slice(0, -1).join(", ")} et ${keywords[keywords.length - 1]}`;

const randomPick = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const buildPositionText = (draw: DrawnCard): string => {
  const { card, isReversed, position } = draw;
  const baseEnergy = isReversed ? card.reversed : card.upright;
  const invitationSource = isReversed ? reversedInvitations : invitationTemplates;
  const template = randomPick(sentenceVariations);
  const energyDescriptor = `${card.arcana === "major" ? "un enseignement " : "une dynamique "}${
    randomPick(adjectiveByArcana[card.arcana])
  } autour de ${baseEnergy.toLowerCase()}`;
  const invitation = randomPick(invitationSource);
  return template
    .replace("{energy}", energyDescriptor)
    .replace("{invitation}", invitation) +
    ` Position « ${position.title} » : ${position.question}`;
};

const buildHeadline = (
  spread: Spread,
  majors: number,
  total: number,
  dominantSuit?: string,
): string => {
  const tone =
    majors / total >= 0.5
      ? "Tournant majeur à apprivoiser"
      : dominantSuit
      ? `Horizon ${suitTranslations[dominantSuit]}`
      : "Navigation équilibrée";
  return `${tone} – ${spread.name}`;
};

const detectDominantSuit = (draws: DrawnCard[]): Suit | undefined => {
  const counter: Record<string, number> = {};
  draws.forEach((draw) => {
    if (!draw.card.suit) return;
    counter[draw.card.suit] = (counter[draw.card.suit] || 0) + 1;
  });
  const entries = Object.entries(counter);
  if (!entries.length) return undefined;
  entries.sort((a, b) => b[1] - a[1]);
  const [suit, count] = entries[0];
  const second = entries[1];
  if (second && second[1] === count) return undefined;
  return suit as Suit;
};

const buildOverview = (
  spread: Spread,
  draws: DrawnCard[],
  question?: string,
): string[] => {
  const majors = draws.filter((draw) => draw.card.arcana === "major").length;
  const reversed = draws.filter((draw) => draw.isReversed).length;
  const dominantSuit = detectDominantSuit(draws);
  const opening = randomPick(openingTemplates).replace(
    "{focus}",
    spread.focus.toLowerCase(),
  );
  const questionLine = question
    ? `Intention posée : « ${question.trim()} ».`
    : "Intention libre : ressentez ce que les cartes éveillent.";
  const majorLine =
    majors === 0
      ? "Sans arcane majeur, ce tirage explore surtout votre quotidien concret : chaque geste compte."
      : randomPick(majorArcanaInsights);
  const reversedLine =
    reversed === 0
      ? "Aucune carte renversée : l'énergie circule avec fluidité, prête à se manifester."
      : randomPick(reversedInsights);
  const suitLine = dominantSuit
    ? `La tonalité dominante s'exprime via l'élément ${suitTranslations[dominantSuit]}, signe que cette dimension réclame une attention spéciale.`
    : "Les éléments sont équilibrés, invitant à une approche globale de la situation.";
  return [opening, questionLine, majorLine, suitLine, reversedLine];
};

export const generateInterpretation = (
  spread: Spread,
  draws: DrawnCard[],
  question?: string,
): GeneratedInterpretation => {
  const majors = draws.filter((draw) => draw.card.arcana === "major").length;
  const dominantSuit = detectDominantSuit(draws);
  const headline = buildHeadline(spread, majors, draws.length, dominantSuit);
  const overview = buildOverview(spread, draws, question);
  const positionInsights = draws.map((draw) => ({
    positionId: draw.position.id,
    title: draw.position.title,
    text: buildPositionText(draw),
    keywords: joinKeywords(draw.card.keywords),
  }));
  const closing =
    "Prenez quelques instants pour noter la phrase ou l’image qui résonne le plus : c’est votre ancre vibratoire.";
  const ritual = randomPick(ritualSuggestions);

  return {
    headline,
    overview,
    positionInsights,
    closing,
    ritual,
  };
};
