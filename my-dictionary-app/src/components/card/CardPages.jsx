import React, { useState, useEffect } from "react";
import CardWords from "./CardWords";
import CardCorousel from "../navigation/CardCorouselBtn";
import data from "../../data";
import styles from "./card.module.css";

function CardsPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [wordsStudied, setWordsStudied] = useState(0);

  const hadndlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const hadleWordsStudied = () => {
    setWordsStudied((prevCount) => prevCount + 1);
  };

  const currenWord = data[currentCardIndex];

  useEffect(() => {
    setWordsStudied(0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titleCardsPage}>Тренировка слов по карточкам</h2>
      <p className={styles.studiedWordDescr}>Изучено слов: {wordsStudied}</p>

      <CardCorousel onPrev={hadndlePrevCard} onNext={handleNextCard}>
        {currenWord && (
          <CardWords
            key={currenWord.id}
            word={currenWord}
            onWordsStudied={hadleWordsStudied}
          />
        )}
      </CardCorousel>
    </div>
  );
}

export default CardsPage;
