import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Страница не найдена</h1>
      <p className={styles.notFoundMessage}>
        К сожалению, страница не найдена.
      </p>
      <Link to="/" className={styles.notFoundLink}>
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
