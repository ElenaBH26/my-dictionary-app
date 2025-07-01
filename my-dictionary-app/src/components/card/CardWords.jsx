import React, { useState, useEffect, useRef } from "react";
import styles from "./card.module.css";

function CardWords({ word, onWordsStudied }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef(null);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    onWordsStudied();
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardEnglish}>{word.english}</h2>
      <p className={styles.cardTranscription}>{word.transcription}</p>
      {showTranslation ? (
        <p className={styles.cardRussian}>{word.russian}</p>
      ) : (
        <button
          ref={buttonRef}
          className={styles.showTranslationButton}
          onClick={handleShowTranslation}
        >
          Показать перевод
        </button>
      )}
    </div>
  );
}

export default CardWords;
