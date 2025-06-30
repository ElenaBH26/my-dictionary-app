import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import logoMenu from "../../assets/img/logoMenu.png";

function Menu() {
  return (
    <header className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <Link to="/" className={styles.logo}>
          <img src={logoMenu} className={styles.logoMenu} alt="logo" />
        </Link>
        <h1 className={styles.menuTitle}>English Words</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/" className={styles.navLink}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/game" className={styles.navLink}>
                Игра
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
