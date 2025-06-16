import React from "react";
import styles from './header.module.css';
import logoHeader from '../../assets/img/logoHeader.png';

function HeaderTitle() {
    return (
        <header className={styles.headerContainer}>
            <img src={logoHeader} className={styles.logoHeader}  alt="logo" />
                <h1 className={styles.headerTitle}>
                    English Words
                </h1>
        </header>
    )
}

export default HeaderTitle;