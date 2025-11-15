"use client";

import { useMemo, useState } from "react";
import styles from "./TarotReading.module.css";
import { tarotDeck, type TarotCard } from "@/data/cards";
import { spreads } from "@/data/spreads";
import {
  generateInterpretation,
  type DrawnCard,
  type GeneratedInterpretation,
} from "@/lib/interpretation";

const shuffle = <T,>(items: T[]): T[] => {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
};

const buildDraw = (spreadIndex: number): DrawnCard[] => {
  const spread = spreads[spreadIndex];
  const shuffled = shuffle(tarotDeck);
  return spread.positions.map((position, index) => {
    const card: TarotCard = shuffled[index];
    const isReversed = Math.random() < 0.35;
    return { card, isReversed, position };
  });
};

const formatCardId = (draw: DrawnCard, idx: number) =>
  `${draw.card.id}-${draw.position.id}-${idx}`;

const SpreadInfo = ({ index }: { index: number }) => {
  const spread = spreads[index];
  return (
    <section className={styles.spreadInfo}>
      <header className={styles.spreadHeader}>
        <h2>{spread.name}</h2>
        <span className={styles.spreadFocus}>{spread.focus}</span>
      </header>
      <p className={styles.spreadDescription}>{spread.description}</p>
      <div className={styles.positionsGrid}>
        {spread.positions.map((position) => (
          <article key={position.id} className={styles.positionCard}>
            <h3>{position.title}</h3>
            <p className={styles.positionQuestion}>{position.question}</p>
            <p className={styles.positionAdvice}>{position.advice}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const InterpretationView = ({
  interpretation,
}: {
  interpretation: GeneratedInterpretation;
}) => {
  return (
    <section className={styles.interpretation}>
      <header>
        <h2>{interpretation.headline}</h2>
      </header>
      <div className={styles.overview}>
        {interpretation.overview.map((sentence, idx) => (
          <p key={idx}>{sentence}</p>
        ))}
      </div>
      <div className={styles.positionInsights}>
        {interpretation.positionInsights.map((insight) => (
          <article key={insight.positionId} className={styles.insightCard}>
            <h3>{insight.title}</h3>
            <p>{insight.text}</p>
            <p className={styles.keywords}>
              Mots-clés : <span>{insight.keywords}</span>
            </p>
          </article>
        ))}
      </div>
      <footer className={styles.interpretationFooter}>
        <p>{interpretation.closing}</p>
        <p className={styles.ritual}>
          Rituel suggéré : <span>{interpretation.ritual}</span>
        </p>
      </footer>
    </section>
  );
};

const CardDisplay = ({ draw }: { draw: DrawnCard }) => {
  const orientationLabel = draw.isReversed ? "Renversée" : "Droite";
  const meaning = draw.isReversed ? draw.card.reversed : draw.card.upright;
  return (
    <article className={styles.tarotCard}>
      <header className={styles.cardHeader}>
        <span className={styles.cardName}>{draw.card.name}</span>
        <span className={styles.cardOrientation}>{orientationLabel}</span>
      </header>
      <div className={styles.cardBody}>
        <p className={styles.cardMeaning}>{meaning}</p>
        <p className={styles.cardKeywords}>
          <span className={styles.badge}>Mots-clés</span>
          {draw.card.keywords.join(" • ")}
        </p>
      </div>
      <footer className={styles.cardFooter}>
        <h4>{draw.position.title}</h4>
        <p>{draw.position.question}</p>
      </footer>
    </article>
  );
};

export const TarotReading = () => {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [draws, setDraws] = useState<DrawnCard[]>([]);
  const [interpretation, setInterpretation] =
    useState<GeneratedInterpretation | null>(null);

  const spread = useMemo(() => spreads[spreadIndex], [spreadIndex]);

  const handleDraw = () => {
    const result = buildDraw(spreadIndex);
    setDraws(result);
    const generated = generateInterpretation(spread, result, question);
    setInterpretation(generated);
  };

  const handleReset = () => {
    setDraws([]);
    setInterpretation(null);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroBadge}>Tarot de Marseille augmenté</span>
          <h1>Cartographie intuitive et intelligence narrative</h1>
          <p>
            Sélectionnez le tirage mariant le mieux votre intention, tirez les
            cartes et laissez l’intelligence narrative proposer une synthèse
            inspirante et actionable.
          </p>
        </div>
        <div className={styles.controls}>
          <label className={styles.label} htmlFor="spread-select">
            Choisissez votre tirage
          </label>
          <select
            id="spread-select"
            className={styles.select}
            value={spreadIndex}
            onChange={(event) => {
              const nextIndex = parseInt(event.target.value, 10);
              setSpreadIndex(nextIndex);
              handleReset();
            }}
          >
            {spreads.map((sp, index) => (
              <option key={sp.id} value={index}>
                {sp.name} ({sp.cards} cartes)
              </option>
            ))}
          </select>
          <label className={styles.label} htmlFor="question">
            Intention ou question (facultatif)
          </label>
          <textarea
            id="question"
            className={styles.textarea}
            placeholder="Exemple : Quelle posture adopter pour lancer mon projet avec sérénité ?"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows={3}
          />
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={handleDraw}>
              Tirer les cartes
            </button>
            <button type="button" className={styles.secondary} onClick={handleReset}>
              Réinitialiser
            </button>
          </div>
        </div>
      </header>

      <SpreadInfo index={spreadIndex} />

      {draws.length > 0 && (
        <section className={styles.results}>
          <header>
            <h2>Cartes révélées</h2>
            <p>
              Inspirez profondément, observez les symboles, puis laissez l’interprétation
              suggérer la prochaine étape.
            </p>
          </header>
          <div className={styles.cardsGrid}>
            {draws.map((draw, idx) => (
              <CardDisplay draw={draw} key={formatCardId(draw, idx)} />
            ))}
          </div>
        </section>
      )}

      {interpretation && <InterpretationView interpretation={interpretation} />}
    </div>
  );
};

export default TarotReading;
