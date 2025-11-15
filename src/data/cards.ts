export type Arcana = "major" | "minor";

export type Suit = "bâtons" | "coupes" | "épées" | "deniers";

export interface TarotCard {
  id: string;
  name: string;
  arcana: Arcana;
  rank: string;
  number: number;
  suit?: Suit;
  keywords: string[];
  upright: string;
  reversed: string;
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const majorArcana: TarotCard[] = [
  {
    id: "le-bateleur",
    name: "Le Bateleur",
    arcana: "major",
    rank: "I",
    number: 1,
    keywords: ["initiative", "créativité", "opportunités"],
    upright:
      "Une impulsion créative naît. Vous avez tout le nécessaire pour transformer une idée en action concrète.",
    reversed:
      "Attention aux illusions et aux promesses non tenues. L'énergie se disperse si elle n'est pas canalisée.",
  },
  {
    id: "la-papesse",
    name: "La Papesse",
    arcana: "major",
    rank: "II",
    number: 2,
    keywords: ["intériorité", "connaissance", "mystère"],
    upright:
      "Le silence fertile favorise l'intuition. Fiez-vous à votre savoir intérieur et prenez le temps d'observer.",
    reversed:
      "Le monde intérieur est négligé ou mal compris. Méfiez-vous des secrets enfouis et des demi-vérités.",
  },
  {
    id: "limperatrice",
    name: "L’Impératrice",
    arcana: "major",
    rank: "III",
    number: 3,
    keywords: ["fertilité", "création", "communication"],
    upright:
      "La créativité foisonne et se traduit par des résultats tangibles. Les échanges sont fluides et nourrissants.",
    reversed:
      "La créativité est bloquée ou dispersée. Communication confuse, projets qui manquent de structure.",
  },
  {
    id: "lempereur",
    name: "L’Empereur",
    arcana: "major",
    rank: "IV",
    number: 4,
    keywords: ["stabilité", "structure", "autorité"],
    upright:
      "Une base solide se construit. Le sens des responsabilités permet de sécuriser la situation.",
    reversed:
      "Rigidité excessive ou autoritarisme. La structure devient cage si elle n'est pas assouplie.",
  },
  {
    id: "le-pape",
    name: "Le Pape",
    arcana: "major",
    rank: "V",
    number: 5,
    keywords: ["enseignement", "tradition", "conseil"],
    upright:
      "Une guidance bienveillante se présente. Les valeurs et rituels offrent un cadre rassurant.",
    reversed:
      "Dogmatisme et moralisation. La tradition étouffe l'élan personnel si le discernement est absent.",
  },
  {
    id: "lamoureux",
    name: "L’Amoureux",
    arcana: "major",
    rank: "VI",
    number: 6,
    keywords: ["choix", "relation", "engagement"],
    upright:
      "Un choix du cœur s'impose. L'harmonie naît lorsque la tête et le cœur coopèrent.",
    reversed:
      "Indécision ou dispersion. Le cœur hésite et la raison vacille, retardant l'engagement.",
  },
  {
    id: "le-chariot",
    name: "Le Chariot",
    arcana: "major",
    rank: "VII",
    number: 7,
    keywords: ["volonté", "victoire", "mouvement"],
    upright:
      "Une énergie conquérante vous pousse à avancer. Le contrôle conscient mène à la réussite.",
    reversed:
      "Perte de contrôle, direction floue. L'élan se disperse si la cohérence intérieure est absente.",
  },
  {
    id: "la-justice",
    name: "La Justice",
    arcana: "major",
    rank: "VIII",
    number: 8,
    keywords: ["équilibre", "vérité", "responsabilité"],
    upright:
      "Le discernement tranche avec justesse. Les conséquences sont assumées dans un esprit d'équité.",
    reversed:
      "Perception déséquilibrée ou injuste. Il est temps de réexaminer les faits et son propre rôle.",
  },
  {
    id: "lhermite",
    name: "L’Hermite",
    arcana: "major",
    rank: "IX",
    number: 9,
    keywords: ["retraite", "sagesse", "patience"],
    upright:
      "Un temps d'introspection permet de trouver sa propre lumière. Progresser lentement garantit la profondeur.",
    reversed:
      "Isolement subi ou fuite du monde. Le repli devient stérile s'il n'est pas relié à un sens.",
  },
  {
    id: "la-roue-de-fortune",
    name: "La Roue de Fortune",
    arcana: "major",
    rank: "X",
    number: 10,
    keywords: ["cycle", "destin", "opportunité"],
    upright:
      "Un tournant se présente; saisir le mouvement ouvre de nouvelles perspectives.",
    reversed:
      "Sensations de stagnation ou de fatalité. Le manque d'adaptation retarde l'évolution.",
  },
  {
    id: "la-force",
    name: "La Force",
    arcana: "major",
    rank: "XI",
    number: 11,
    keywords: ["courage", "maîtrise", "douceur"],
    upright:
      "La douceur maîtrisée dompte les peurs. Une force intérieure tranquille s'exprime.",
    reversed:
      "Impulsivité ou fragilité émotionnelle. Les réactions excessives affaiblissent la situation.",
  },
  {
    id: "le-pendu",
    name: "Le Pendu",
    arcana: "major",
    rank: "XII",
    number: 12,
    keywords: ["lâcher-prise", "vision", "pause"],
    upright:
      "Un changement de perspective révèle un sens inédit. Accepter l'attente ouvre un passage.",
    reversed:
      "Blocage, sacrifice inutile. Laisser-aller devient résignation si aucun sens n'est trouvé.",
  },
  {
    id: "larcane-sans-nom",
    name: "L’Arcane sans nom",
    arcana: "major",
    rank: "XIII",
    number: 13,
    keywords: ["transformation", "renouveau", "mutation"],
    upright:
      "Une page se tourne définitivement. La mue est profonde et prépare un renouveau.",
    reversed:
      "Résistance au changement, peur de perdre. Le passé retient si l'on refuse la mue nécessaire.",
  },
  {
    id: "temperance",
    name: "Tempérance",
    arcana: "major",
    rank: "XIV",
    number: 14,
    keywords: ["alchimie", "harmonie", "modération"],
    upright:
      "Les opposés se mêlent avec précision. Une coopération douce favorise l'équilibre.",
    reversed:
      "Déséquilibre énergétique. Trop ou pas assez : il faut retrouver un rythme juste.",
  },
  {
    id: "le-diable",
    name: "Le Diable",
    arcana: "major",
    rank: "XV",
    number: 15,
    keywords: ["désir", "attachement", "pouvoir"],
    upright:
      "Une pulsion puissante cherche à s'exprimer. Prendre conscience des liens permet de les sublimer.",
    reversed:
      "Emprise toxique ou dépendance. L'ombre domine lorsqu'elle n'est pas reconnue.",
  },
  {
    id: "la-maison-dieu",
    name: "La Maison Dieu",
    arcana: "major",
    rank: "XVI",
    number: 16,
    keywords: ["révélation", "rupture", "libération"],
    upright:
      "Un événement soudain libère une tension accumulée. Les structures obsolètes s'effondrent pour faire place.",
    reversed:
      "Crainte de perdre le contrôle. Retarder l'inévitable peut aggraver la secousse.",
  },
  {
    id: "letoile",
    name: "L’Étoile",
    arcana: "major",
    rank: "XVII",
    number: 17,
    keywords: ["espoir", "guidance", "pureté"],
    upright:
      "La confiance renaît, portée par une douceur apaisante. Une inspiration pure éclaire la voie.",
    reversed:
      "Doute intérieur, foi fragile. Se reconnecter à sa source est indispensable.",
  },
  {
    id: "lalune",
    name: "La Lune",
    arcana: "major",
    rank: "XVIII",
    number: 18,
    keywords: ["rêve", "sensibilité", "inconscient"],
    upright:
      "Les émotions profondes remontent. Accueillez l'imaginaire sans vous perdre dans l'illusion.",
    reversed:
      "Confusion émotionnelle, peur diffuse. Le brouillard se dissipe grâce à des repères concrets.",
  },
  {
    id: "lesoleil",
    name: "Le Soleil",
    arcana: "major",
    rank: "XIX",
    number: 19,
    keywords: ["joie", "clarité", "chaleur"],
    upright:
      "La réussite rayonne et les liens se renforcent. Une période lumineuse invite à partager.",
    reversed:
      "Excès d'optimisme ou ego surdimensionné. La clarté reste accessible si l'on revient à l'essentiel.",
  },
  {
    id: "le-jugement",
    name: "Le Jugement",
    arcana: "major",
    rank: "XX",
    number: 20,
    keywords: ["appel", "réveil", "réconciliation"],
    upright:
      "Une prise de conscience majeure survient. Le passé est réévalué pour initier une renaissance.",
    reversed:
      "Appel ignoré ou refusé. Rester figé empêche de répondre à la vocation intérieure.",
  },
  {
    id: "le-monde",
    name: "Le Monde",
    arcana: "major",
    rank: "XXI",
    number: 21,
    keywords: ["accomplissement", "harmonie", "ouverture"],
    upright:
      "Cycle accompli, expansion possible. L'unité intérieure se reflète dans le monde extérieur.",
    reversed:
      "Finalisation retardée, cercle incomplet. Il reste un détail à intégrer avant la célébration.",
  },
  {
    id: "le-mat",
    name: "Le Mat",
    arcana: "major",
    rank: "0",
    number: 0,
    keywords: ["quête", "audace", "liberté"],
    upright:
      "Une aventure commence, guidée par l'élan du cœur. La confiance ouvre des chemins inattendus.",
    reversed:
      "Errance et imprudence. L'élan spontané demande d'être ancré pour éviter la dispersion.",
  },
];

interface MinorTemplate {
  rank: string;
  number: number;
  name: string;
  keywords: string[];
  upright: string;
  reversed: string;
}

const minorArcanaBySuit: Record<Suit, MinorTemplate[]> = {
  bâtons: [
    {
      rank: "As",
      number: 1,
      name: "As de Bâtons",
      keywords: ["élan", "passion", "initiative"],
      upright:
        "Une étincelle d'inspiration incendie votre motivation. L'action créative est à portée de main.",
      reversed:
        "Énergie dispersée ou impatience. Le projet manque de direction ou d'ancrage.",
    },
    {
      rank: "Deux",
      number: 2,
      name: "Deux de Bâtons",
      keywords: ["planification", "projection", "prise de décision"],
      upright:
        "Vision et ambition s'alignent. Vous pesez les options avant d'élargir votre territoire.",
      reversed:
        "Hésitation à quitter la zone de confort. Les rêves restent abstraits sans action concrète.",
    },
    {
      rank: "Trois",
      number: 3,
      name: "Trois de Bâtons",
      keywords: ["expansion", "coopération", "anticipation"],
      upright:
        "Les premiers résultats apparaissent. Une collaboration fertile prépare un essor prometteur.",
      reversed:
        "Retards, attentes insatisfaisantes. Il faut ajuster la stratégie avant d'aller plus loin.",
    },
    {
      rank: "Quatre",
      number: 4,
      name: "Quatre de Bâtons",
      keywords: ["stabilité", "célébration", "communauté"],
      upright:
        "Une étape marquante est franchie; célébrer consolide les liens et l'élan commun.",
      reversed:
        "Discorde ou manque de reconnaissance. Sans gratitude, la dynamique collective s'érode.",
    },
    {
      rank: "Cinq",
      number: 5,
      name: "Cinq de Bâtons",
      keywords: ["challenge", "compétition", "émulation"],
      upright:
        "L'esprit de compétition stimule la créativité. Confronter les idées fait émerger le meilleur.",
      reversed:
        "Conflit stérile, ego en bataille. Les querelles épuisent le feu intérieur.",
    },
    {
      rank: "Six",
      number: 6,
      name: "Six de Bâtons",
      keywords: ["victoire", "reconnaissance", "visibilité"],
      upright:
        "Le succès est public et mérite d'être accueilli. Vous incarnez une inspiration collective.",
      reversed:
        "Reconnaissance retardée ou orgueil blessé. Ne confondez pas validation externe et valeur personnelle.",
    },
    {
      rank: "Sept",
      number: 7,
      name: "Sept de Bâtons",
      keywords: ["défense", "affirmation", "résilience"],
      upright:
        "Vous défendez votre position avec conviction. L'intégrité nourrit la persévérance.",
      reversed:
        "Fatigue ou découragement. Reconsidérez vos batailles pour préserver votre énergie.",
    },
    {
      rank: "Huit",
      number: 8,
      name: "Huit de Bâtons",
      keywords: ["rapidité", "synchronicité", "élan"],
      upright:
        "Les événements s'accélèrent, favorisant la fluidité. Restez aligné pour capter l'opportunité.",
      reversed:
        "Précipitation ou communications brouillées. Le manque de clarté ralentit l'avancée.",
    },
    {
      rank: "Neuf",
      number: 9,
      name: "Neuf de Bâtons",
      keywords: ["courage", "protection", "vigilance"],
      upright:
        "Même épuisé, vous tenez bon. La détermination protège l'espace conquis.",
      reversed:
        "Hypervigilance inutile. Il est temps de déléguer et d'économiser vos forces.",
    },
    {
      rank: "Dix",
      number: 10,
      name: "Dix de Bâtons",
      keywords: ["charge", "responsabilité", "achèvement"],
      upright:
        "La charge est lourde mais la ligne d'arrivée est proche. Redéfinissez vos priorités.",
      reversed:
        "Burn-out imminent. Libérez-vous des obligations qui n'ont plus de sens.",
    },
    {
      rank: "Valet",
      number: 11,
      name: "Valet de Bâtons",
      keywords: ["exploration", "audace", "messager"],
      upright:
        "Un signal d'aventure ou de formation apparait. La curiosité attise la flamme créative.",
      reversed:
        "Impulsivité ou instabilité. Clarifiez l'intention avant de vous disperser.",
    },
    {
      rank: "Cavalier",
      number: 12,
      name: "Cavalier de Bâtons",
      keywords: ["voyage", "audace", "charisme"],
      upright:
        "Mouvement soutenu, enthousiasme contagieux. Vous incarnez le changement attendu.",
      reversed:
        "Actions irréfléchies. L'impatience cause des détours coûteux.",
    },
    {
      rank: "Reine",
      number: 13,
      name: "Reine de Bâtons",
      keywords: ["rayonnement", "intuition", "influence"],
      upright:
        "Un leadership chaleureux s'affirme. Faire confiance à votre vision inspire les autres.",
      reversed:
        "Jalousie ou manipulation subtile. L'estime de soi vacille si la comparaison domine.",
    },
    {
      rank: "Roi",
      number: 14,
      name: "Roi de Bâtons",
      keywords: ["commandement", "vision", "entrepreneuriat"],
      upright:
        "Vision stratégique et courage d'agir. Vous canalisez le feu créatif avec maturité.",
      reversed:
        "Autoritarisme ou impatience. Un leadership brûlé par l'ego perd en clairvoyance.",
    },
  ],
  coupes: [
    {
      rank: "As",
      number: 1,
      name: "As de Coupes",
      keywords: ["ouverture", "amour", "intuition"],
      upright:
        "Un torrent émotionnel s'ouvre. Accueillez la vulnérabilité comme portail de guérison.",
      reversed:
        "Réserve émotionnelle, cœur refermé. Laisser couler les émotions est nécessaire.",
    },
    {
      rank: "Deux",
      number: 2,
      name: "Deux de Coupes",
      keywords: ["union", "résonance", "partage"],
      upright:
        "Une connexion authentique s'épanouit. Le dialogue cœur à cœur nourrit l'équilibre.",
      reversed:
        "Malentendu affectif, peur de s'ouvrir. Réajuster la communication devient vital.",
    },
    {
      rank: "Trois",
      number: 3,
      name: "Trois de Coupes",
      keywords: ["joie", "communion", "sœurce"],
      upright:
        "La célébration partagée ranime l'enthousiasme. Une communauté bienveillante vous entoure.",
      reversed:
        "Excès festifs ou isolement. Les émotions doivent être exprimées avec sincérité.",
    },
    {
      rank: "Quatre",
      number: 4,
      name: "Quatre de Coupes",
      keywords: ["repli", "saturation", "méditation"],
      upright:
        "Pause introspective nécessaire. Redécouvrez le désir véritable derrière l'ennui.",
      reversed:
        "Apathie, refus d'accueillir l'opportunité. Il est temps de rééveiller la gratitude.",
    },
    {
      rank: "Cinq",
      number: 5,
      name: "Cinq de Coupes",
      keywords: ["deuil", "regret", "sentiment perdu"],
      upright:
        "Le cœur se confronte à une perte. Honorer la tristesse ouvre l'accès aux ressources restantes.",
      reversed:
        "Acceptation progressive. Le regard commence à se tourner vers ce qui demeure.",
    },
    {
      rank: "Six",
      number: 6,
      name: "Six de Coupes",
      keywords: ["souvenir", "innocence", "gratitude"],
      upright:
        "La mémoire douce ramène une paix enfantine. Partager un souvenir nourrit l'harmonie.",
      reversed:
        "Nostalgie paralysante. Le passé doit inspirer sans emprisonner.",
    },
    {
      rank: "Sept",
      number: 7,
      name: "Sept de Coupes",
      keywords: ["rêves", "illusions", "multiplicité"],
      upright:
        "Plusieurs options chatoyantes apparaissent. Clarifiez vos priorités avant de choisir.",
      reversed:
        "Confusion dissipée, décision possible. Il est temps de matérialiser un rêve.",
    },
    {
      rank: "Huit",
      number: 8,
      name: "Huit de Coupes",
      keywords: ["quitte", "quête", "sens"],
      upright:
        "Vous abandonnez ce qui ne nourrit plus. Une recherche plus spirituelle s'amorce.",
      reversed:
        "Hésitation à partir, peur du vide. La stagnation émotionnelle s'installe.",
    },
    {
      rank: "Neuf",
      number: 9,
      name: "Neuf de Coupes",
      keywords: ["satisfaction", "abondance", "plaisir"],
      upright:
        "Un vœu profond se réalise. Savourez la gratitude sans culpabilité.",
      reversed:
        "Excès ou superficialité. La satisfaction se dissipe si l'on oublie le partage.",
    },
    {
      rank: "Dix",
      number: 10,
      name: "Dix de Coupes",
      keywords: ["félicité", "famille", "alignement"],
      upright:
        "Le bonheur relationnel rayonne. Les liens sont harmonieux et soutenants.",
      reversed:
        "Tensions familiales ou idéaux trop élevés. Il faut dialoguer pour restaurer l'harmonie.",
    },
    {
      rank: "Valet",
      number: 11,
      name: "Valet de Coupes",
      keywords: ["sensibilité", "messages", "créativité"],
      upright:
        "Un messager apporte une émotion authentique. L'imagination fertile incite à créer.",
      reversed:
        "Hypersensibilité ou immaturité émotionnelle. Protégez votre cœur tout en restant ouvert.",
    },
    {
      rank: "Cavalier",
      number: 12,
      name: "Cavalier de Coupes",
      keywords: ["quête", "romance", "idéalisme"],
      upright:
        "Un mouvement romantique ou artistique se met en route. L'intuition guide vos pas.",
      reversed:
        "Promesses inconsistantes, illusions. Gardez les pieds sur terre.",
    },
    {
      rank: "Reine",
      number: 13,
      name: "Reine de Coupes",
      keywords: ["empathie", "intériorité", "soin"],
      upright:
        "Une posture d'écoute et de guérison. Votre sensibilité inspire la confiance.",
      reversed:
        "Submersion émotionnelle. Prenez soin de vos limites affectives.",
    },
    {
      rank: "Roi",
      number: 14,
      name: "Roi de Coupes",
      keywords: ["sagesse émotionnelle", "équilibre", "guérison"],
      upright:
        "Maîtrise des émotions et compassion active. Vous créez un espace sécurisant.",
      reversed:
        "Manipulation affective ou froideur. Reconnectez-vous à votre coeur sans perdre la structure.",
    },
  ],
  épées: [
    {
      rank: "As",
      number: 1,
      name: "As d’Épées",
      keywords: ["clarté", "décision", "vérité"],
      upright:
        "Une idée perçante tranche l'obscurité. L'esprit gagne en lucidité et en précision.",
      reversed:
        "Confusion mentale, doutes. La vérité est brouillée par la peur ou la désinformation.",
    },
    {
      rank: "Deux",
      number: 2,
      name: "Deux d’Épées",
      keywords: ["blocage", "équilibre", "choix"],
      upright:
        "Pause stratégique : vous pesez les options avec calme pour garder l'équilibre intérieur.",
      reversed:
        "Décision retardée, tensions croissantes. Écoutez l'intuition pour rompre l'impasse.",
    },
    {
      rank: "Trois",
      number: 3,
      name: "Trois d’Épées",
      keywords: ["blessure", "vérité", "libération"],
      upright:
        "Une vérité tranchante blesse mais libère. Les larmes ouvrent un passage vers la guérison.",
      reversed:
        "Cicatrisation lente. Il est temps de retirer les épines en parler.",
    },
    {
      rank: "Quatre",
      number: 4,
      name: "Quatre d’Épées",
      keywords: ["repos", "retraite", "récupération"],
      upright:
        "Le repli conscient permet de restaurer les forces. La méditation protège votre paix.",
      reversed:
        "Agitation mentale, impossible détente. Votre corps réclame une pause réelle.",
    },
    {
      rank: "Cinq",
      number: 5,
      name: "Cinq d’Épées",
      keywords: ["conflit", "vainqueur solitaire", "fierté"],
      upright:
        "Une victoire au goût amer. Clarifiez vos motivations pour éviter les ruptures inutiles.",
      reversed:
        "Volonté de réconciliation. Renoncez aux jeux de pouvoir.",
    },
    {
      rank: "Six",
      number: 6,
      name: "Six d’Épées",
      keywords: ["transition", "voyage", "apaisement"],
      upright:
        "Vous traversez un passage délicat vers des eaux plus calmes. L'esprit se clarifie progressivement.",
      reversed:
        "Arrimage au passé, difficulté à partir. Cherchez le soutien qui facilitera la traversée.",
    },
    {
      rank: "Sept",
      number: 7,
      name: "Sept d’Épées",
      keywords: ["stratégie", "discrétion", "prudence"],
      upright:
        "La ruse ou l'intelligence tactique sont nécessaires. Agissez avec finesse et éthique.",
      reversed:
        "Secret dévoilé, culpabilité. La transparence restaure la confiance.",
    },
    {
      rank: "Huit",
      number: 8,
      name: "Huit d’Épées",
      keywords: ["limitation", "peur", "auto-censure"],
      upright:
        "Les pensées restrictives vous ligotent. Une ouverture est possible si vous changez de perspective.",
      reversed:
        "Libération progressive. Vous retirez les bandeaux en reprenant votre pouvoir.",
    },
    {
      rank: "Neuf",
      number: 9,
      name: "Neuf d’Épées",
      keywords: ["anxiété", "insomnie", "culpabilité"],
      upright:
        "Les inquiétudes nocturnes pèsent lourd. Confrontez la réalité pour apaiser l'esprit.",
      reversed:
        "Sortie du tunnel mental. Cherchez du soutien pour alléger la charge.",
    },
    {
      rank: "Dix",
      number: 10,
      name: "Dix d’Épées",
      keywords: ["fin brutale", "libération", "renouveau"],
      upright:
        "Un cycle difficile s'achève avec fracas. L'aube revient après la nuit la plus sombre.",
      reversed:
        "Guérison en cours. La crise a aggravé; acceptez l'aide pour reconstruire.",
    },
    {
      rank: "Valet",
      number: 11,
      name: "Valet d’Épées",
      keywords: ["vigilance", "analyse", "idée neuve"],
      upright:
        "Une curiosité mentale s'éveille. Observez et récoltez des informations avant d'agir.",
      reversed:
        "Ragots, impulsivité verbale. Disciplinez votre esprit pour éviter les frictions.",
    },
    {
      rank: "Cavalier",
      number: 12,
      name: "Cavalier d’Épées",
      keywords: ["impulsion", "militant", "clarité"],
      upright:
        "Une décision rapide s'impose. Vous tranchez avec courage et vigueur.",
      reversed:
        "Précipitation coupante. Ralentissez pour ne pas blesser inutilement.",
    },
    {
      rank: "Reine",
      number: 13,
      name: "Reine d’Épées",
      keywords: ["lucidité", "franchise", "indépendance"],
      upright:
        "Le discernement est affûté. Votre parole claire trace des limites justes.",
      reversed:
        "Sévérité ou froideur. La compassion doit tempérer la vérité.",
    },
    {
      rank: "Roi",
      number: 14,
      name: "Roi d’Épées",
      keywords: ["structure mentale", "justice", "intellect"],
      upright:
        "L'esprit dirige avec précision. Vous combinez logique et vision stratégique.",
      reversed:
        "Rigidité mentale, jugement hâtif. Écoutez les autres points de vue.",
    },
  ],
  deniers: [
    {
      rank: "As",
      number: 1,
      name: "As de Deniers",
      keywords: ["abondance", "manifestation", "stabilité"],
      upright:
        "Une opportunité concrète germe. Semez avec méthode pour récolter durablement.",
      reversed:
        "Potentiel gaspillé, retard matériel. Clarifiez votre rapport à la valeur.",
    },
    {
      rank: "Deux",
      number: 2,
      name: "Deux de Deniers",
      keywords: ["adaptation", "rythme", "priorités"],
      upright:
        "Vous jonglez habilement avec plusieurs réalités. Trouver le tempo juste garantit l'équilibre.",
      reversed:
        "Déséquilibre budgétaire ou temporel. Reprenez le contrôle de votre organisation.",
    },
    {
      rank: "Trois",
      number: 3,
      name: "Trois de Deniers",
      keywords: ["artisanat", "collaboration", "maîtrise"],
      upright:
        "Les compétences se combinent pour bâtir une œuvre solide. Reconnaissance mutuelle au programme.",
      reversed:
        "Malentendus dans le travail d'équipe. Clarifiez les rôles et attentes.",
    },
    {
      rank: "Quatre",
      number: 4,
      name: "Quatre de Deniers",
      keywords: ["sécurité", "attachement", "gestion"],
      upright:
        "Vous consolidez vos ressources avec prudence. L'épargne et la stabilité sont prioritaires.",
      reversed:
        "Rigidité matérielle, peur de perdre. Relâchez la prise pour que l'énergie circule.",
    },
    {
      rank: "Cinq",
      number: 5,
      name: "Cinq de Deniers",
      keywords: ["privation", "solidarité", "épreuve"],
      upright:
        "Une phase de manque appelle la solidarité. Cherchez les mains tendues autour de vous.",
      reversed:
        "Sortie progressive de la précarité. La gratitude attire l'abondance.",
    },
    {
      rank: "Six",
      number: 6,
      name: "Six de Deniers",
      keywords: ["générosité", "échange", "équité"],
      upright:
        "Un partage équilibré se met en place. Aider renforce autant que recevoir.",
      reversed:
        "Déséquilibre, dépendance. Reconsidérez vos engagements matériels.",
    },
    {
      rank: "Sept",
      number: 7,
      name: "Sept de Deniers",
      keywords: ["patience", "bilan", "germination"],
      upright:
        "Les résultats mûrissent lentement. Évaluez la progression et ajustez sans précipitation.",
      reversed:
        "Impatience ou découragement. Redéfinissez vos attentes et votre stratégie.",
    },
    {
      rank: "Huit",
      number: 8,
      name: "Huit de Deniers",
      keywords: ["apprentissage", "perfectionnement", "discipline"],
      upright:
        "Le travail appliqué porte ses fruits. Chaque geste répétitif affine votre maîtrise.",
      reversed:
        "Répétition stérile ou manque de motivation. Redonnez du sens à vos efforts.",
    },
    {
      rank: "Neuf",
      number: 9,
      name: "Neuf de Deniers",
      keywords: ["autonomie", "abondance", "plaisir"],
      upright:
        "Vous récoltez les bénéfices de vos efforts. Profitez avec conscience de votre autonomie.",
      reversed:
        "Dépendance matérielle ou syndrome de l'imposteur. Reconnaissez votre mérite.",
    },
    {
      rank: "Dix",
      number: 10,
      name: "Dix de Deniers",
      keywords: ["héritage", "pérennité", "famille"],
      upright:
        "Stabilité transgénérationnelle, patrimoine solide. La vision à long terme paie.",
      reversed:
        "Conflits familiaux autour de l'argent ou insécurité. Redéfinissez les valeurs communes.",
    },
    {
      rank: "Valet",
      number: 11,
      name: "Valet de Deniers",
      keywords: ["étude", "opportunité", "réalisme"],
      upright:
        "Une proposition concrète éveille votre curiosité. Investissez dans vos compétences.",
      reversed:
        "Procrastination ou manque de concentration. Canalisez votre énergie vers un but tangible.",
    },
    {
      rank: "Cavalier",
      number: 12,
      name: "Cavalier de Deniers",
      keywords: ["constance", "persévérance", "fiabilité"],
      upright:
        "Une avancée méthodique bâtit quelque chose de durable. Discipline et patience sont vos alliées.",
      reversed:
        "Rigidité, routine étouffante. Introduisez de la flexibilité pour rester motivé.",
    },
    {
      rank: "Reine",
      number: 13,
      name: "Reine de Deniers",
      keywords: ["sens pratique", "nourricière", "prospérité"],
      upright:
        "Une présence maternelle gère les ressources avec soin. Créez un cocon fertile.",
      reversed:
        "Surmenage ou manque pour soi. Rééquilibrez donner et recevoir.",
    },
    {
      rank: "Roi",
      number: 14,
      name: "Roi de Deniers",
      keywords: ["maîtrise matérielle", "gestion", "réussite"],
      upright:
        "Leadership pragmatique. Vous sécurisez les projets et assurez la prospérité collective.",
      reversed:
        "Avide ou matérialiste. La peur de manquer bloque la générosité.",
    },
  ],
};

const buildMinorCard = (suit: Suit, template: MinorTemplate): TarotCard => ({
  id: slugify(template.name),
  name: template.name,
  arcana: "minor",
  rank: template.rank,
  number: template.number,
  suit,
  keywords: template.keywords,
  upright: template.upright,
  reversed: template.reversed,
});

const minorArcana: TarotCard[] = (Object.keys(minorArcanaBySuit) as Suit[])
  .map((suit) => minorArcanaBySuit[suit].map((template) => buildMinorCard(suit, template)))
  .flat();

export const tarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];
