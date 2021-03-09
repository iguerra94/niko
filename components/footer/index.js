import React, {useEffect} from 'react';

import styles from './footer.module.css';

const Footer = () => {
  useEffect(() => {
    document.querySelectorAll('a').forEach((anchorEl) => {
      anchorEl.addEventListener('click', (e) => {
        e.preventDefault();
      })
    })
  }, []);

  return (
    <footer className={styles["footer__container"]}>
      <div className={styles["footer__sections"]}>
        <div className={styles["footer__section"]}>
          <ul className={styles["footer__section-items"]}>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-pointer"]}`}>
                Buscar tienda
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-pointer"]}`}>
                Regístrate para recibir correos
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-pointer"]}`}>
                Electrónicos
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-pointer"]}`}>
                Hazte miembro
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-pointer"]}`}>
                Envíanos tus comentarios
              </span>
            </li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <ul className={styles["footer__section-items"]}>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-auto"]}`}>
                Obtener ayuda
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Estado del pedido
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Envío y entrega
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Devoluciones
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Opciones de pago
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Comunícate con nosotros
              </span>
            </li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <ul className={styles["footer__section-items"]}>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["text__uppercase"]} ${styles["color-white"]} ${styles["font-weight-black"]} ${styles["cursor-auto"]}`}>
                Acerca de nike
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Noticias
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Empleo
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Inversionistas
              </span>
            </li>
            <li className={styles["footer__section-item"]}>
              <span className={`${styles["color-grey"]} ${styles["font-weight-roman"]} ${styles["cursor-pointer"]}`}>
                Sostenibilidad
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer__social"]}>
        <ul className={styles["footer__social-items"]}>
          <li className={styles["footer__social-item"]} title="Twitter">
            <span className={styles["icon-twitter"]} />
          </li>
          <li className={styles["footer__social-item"]} title="Facebook">
            <span className={styles["icon-facebook"]} />
          </li>
          <li className={styles["footer__social-item"]} title="Youtube">
            <span className={styles["icon-youtube"]} />
          </li>
          <li className={styles["footer__social-item"]} title="Instagram">
            <span className={styles["icon-instagram"]} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;