import React from "react";
import styles from './cardCorousel.module.css';


function CardCorousel({onPrev, onNext}) {
    return (
        <div className={styles.carouselContainer}>
            <button onClick={onPrev} className={`${styles.carouselBtn} ${styles.prevBtn}`}>&lt;</button>
            <button onClick={onNext}  className={`${styles.carouselBtn} ${styles.nextBtn}`}>&gt;</button>
        </div>
    );
}

export default CardCorousel;