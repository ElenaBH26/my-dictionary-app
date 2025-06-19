import React, { useState } from "react";
import styles from './card.module.css';

function CardWords({word}) {

const [showTranslation, setShowTranslation] = useState(false);

const handleShowTranslation =  () => {setShowTranslation(true);
};


    return (
        <div className={styles.cardContainer}>
        <h2 className={styles.cardEnglish} >{word.english}</h2>
        <p className={styles.cardTranscription}>{word.transcription}</p>
        {showTranslation ? (
        <p className={styles.cardRussian}>{word.russian}</p>
        ) : (
            <button className={styles.showTranslationButton} onClick={handleShowTranslation}>
                Показать перевод
            </button>
        ) }
    </div>
    );
}

export default CardWords;