import React from 'react';

import Link from "next/link";

import styles from './header.module.css';

import { AppStateContext } from "../../context/MyContext";

const Header = () => {
  return (
    <header className={styles["header__container"]}>
      <Link href="/">
        <h1 className={styles["logo"]} />
      </Link>
      <nav className={styles["nav__container"]}>
        <div className={styles["nav__sections"]}>
          <ul className={styles["nav__sections-items"]}>
            <li className={styles["nav__sections-item"]}>Nuevos lanzamientos</li>
            <li className={styles["nav__sections-item"]}>Regalos</li>
            <li className={styles["nav__sections-item"]}>Hombre</li>
            <li className={styles["nav__sections-item"]}>Mujer</li>
            <li className={styles["nav__sections-item"]}>Niño/a</li>
            <li className={styles["nav__sections-item"]}>Rebajas</li>
            <li className={styles["nav__sections-item"]}>SNKRS</li>
          </ul>
        </div>
        <div className={styles["nav__actions"]}>
          <AppStateContext.Consumer>
            { products => (
              <ul className={styles["nav__actions-items"]}>
                <li className={styles["nav__actions-item"]}>
                  <div className={styles["search-box"]}>
                    <label className={styles["icon__wrapper"]} htmlFor="search-input" title="">
                      <span className={`${styles["icon"]} ${styles["icon-search"]}`} title="Search Product" />
                    </label>
                    <input type="text" id="search-input" className={styles["search-box__input"]} placeholder="Buscar" />
                  </div>
                </li>
                <li id={styles.favorites} className={styles["nav__actions-item"]}>
                  <span className={`${styles["icon"]} ${styles["icon-favorite"]}`} title="Ver favoritos" />
                  <div className={`${styles["favorites__num-items-container"]} ${(products.currentFavoriteItems.length === 0) ? styles.hidden : ""}`}>
                    <span id={styles["favorites__num-items"]}>
                      {
                        (products.currentFavoriteItems.length < 10) ? products.currentFavoriteItems.length : "9+"
                      }
                    </span>
                  </div>
                </li>
                <li id={styles.cart} className={styles["nav__actions-item"]}>
                  <Link href="/cart">
                    <span className={`${styles["icon"]} ${styles["icon-cart"]}`} title="Ver carrito de compra" />
                  </Link>
                  <div className={`${styles["cart__num-items-container"]} ${(products.currentCartItems.length === 0) ? styles.hidden : ""}`}>
                    <span id={styles["cart__num-items"]}>
                      {
                        (products.currentCartItems.length < 10) ? products.currentCartItems.length : "9+"
                      }
                    </span>
                  </div>
                </li>
              </ul>
            ) }
          </AppStateContext.Consumer>
        </div>
      </nav>
    </header>
  )
}

export default Header;