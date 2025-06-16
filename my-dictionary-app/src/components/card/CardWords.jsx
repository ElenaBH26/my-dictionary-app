import React from "react";
import styles from './card.module.css';

function CardWords({word}) {
    return (
        <div className={styles.cardContainer}>
        <h2 className={styles.cardEnglish} >{word.english}</h2>
        <p className={styles.cardTranscription}>{word.transcription}</p>
        <p className={styles.cardRussian}>{word.russian}</p>
    </div>
    );
}

export default CardWords;