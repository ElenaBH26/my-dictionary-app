import React from "react";
import styles from './cardCorousel.module.css';


function CardCorousel({onPrev, onNext}) {
    return (
        <div className={styles.carousel}>
            <button onClick={onPrev}>Назад</button>
            <button onClick={onNext}>Вперед</button>
        </div>
    );
}

export default CardCorousel;