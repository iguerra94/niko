import React, {useEffect, useState} from 'react';

import {productSizeItemsData} from '../../config/product-size-data';
import {productItemsData} from '../../config/product-data';

import styles from './content.module.css';

function Content() {
  const [colorOptionSelected, setColorOptionSelected] = useState(null);
  const [productSizeItemsSelected, setProductSizeItemsSelected] = useState(productSizeItemsData.map((data) => data.selected));

  useEffect(() => {
    document.querySelectorAll('.product__sizes-item').forEach((itemEl) => {
      itemEl.addEventListener('click', (e) => {
        e.target.classList.toggle('selected');
      });
    });
  }, []);

  return (
    <main className={styles["content__container"]}>
      <div className={styles["product__container"]}>
        <div className={styles["product__images"]}>
          <div id={styles["product__image-1"]} className={styles["product__image"]} />
          <div id={styles["product__video-1"]} className={styles["product__image"]} />
          <div id={styles["product__image-2"]} className={styles["product__image"]} />
          <div id={styles["product__image-3"]} className={styles["product__image"]} />
        </div>
        <div className={styles["product__data-container"]}>
          <div className={styles["product__data"]}>
            <div className={styles["product__data-title"]}>
              <span className={styles["product__data-gender"]}>Calzado para hombre</span>
              <div className={styles["product__data-model-data"]}>
                <span className={styles["product__data-model-name"]}>Nike Air Force 1 '07</span>
                <span className={styles["product__data-model-price"]}>$1999</span>
              </div>
            </div>
            <div className={styles["product__data-color-option-images"]}>
              <div id={styles["product__data-color-option-image-1"]} className={`${styles["product__data-color-option-image"]} ${(colorOptionSelected === "product__data-color-option-image-1") ? styles["product-color-option-selected"] : ""}`} onClick={() => setColorOptionSelected("product__data-color-option-image-1")} />
              <div id={styles["product__data-color-option-image-2"]} className={`${styles["product__data-color-option-image"]} ${(colorOptionSelected === "product__data-color-option-image-2") ? styles["product-color-option-selected"] : ""}`} onClick={() => setColorOptionSelected("product__data-color-option-image-2")} />
            </div>
          </div>
          <div className={styles["product__sizes"]}>
            <div className={styles["product__sizes-title"]}>
              <span className={styles["product__sizes-title-principal"]}>Selecciona tu talla</span>
              <span className={styles["product__sizes-title-secondary"]}>Guía de tallas</span>
            </div>
            <div className={styles["product__sizes-items"]}>
              {
                productSizeItemsData.map(({size}, indexEl) => (
                  <button key={indexEl} className={`${styles["product__sizes-item"]} ${productSizeItemsSelected[indexEl] === true ? styles["product__sizes-item-selected"] : ""}`} onClick={() => setProductSizeItemsSelected(
                    productSizeItemsSelected.map((itemSelected, indexActual) => (
                      indexActual === indexEl ? !itemSelected : itemSelected
                    ))
                  )}>{size}</button>
                ))
              }
            </div>
          </div>
          <div className={styles["product__actions"]}>
            <button id={styles["btn-add-to-cart"]} className={styles["product__actions-item"]}>Agregar a la bolsa de compra</button>
            <button id={styles["btn-add-to-favorites"]} className={styles["product__actions-item"]} title="Añadir a favoritos">
              <span>Favoritos</span>
              <span id={styles["icon-favorite"]} className={styles["icon__small"]} />
            </button>
          </div>
          <div className={styles["product__shipment"]}>
            <span className={`${styles["font-weight-black"]} ${styles["color-black-1"]} ${styles["line-height-26px"]}`}>Envío</span>
            <span className={`${styles["font-weight-book"]} ${styles["color-black-1"]}`}>
              <p className={styles["line-height-26px"]}>Para obtener información de envío precisa</p>
              <p className={styles["line-height-26px"]}>
                <span className={`${styles["color-black-1"]} ${styles["text-decoration-underline"]} ${styles["cursor__pointer"]}`}>Editar ubicación</span>
              </p>
              <p className={styles["line-height-26px"]}>Básquetbol en el parque, barbacoas y sol de domingo. El resplandor sobrevive con el calzado Nike Air Force 1 ’07, un modelo clásico del básquetbol, este OG le da un toque novedoso al calzado de siempre: impecables capas de cuero con puntadas perfectas, en un blanco clásico con la cantidad perfecta de destellos para que brilles.</p>
              <br />
              <p className={styles["line-height-26px"]}>- Color que se muestra: Blanco/Blanco</p>
              <p className={styles["line-height-26px"]}>- Estilo: 315122-111</p>
            </span>
            <p className={styles["line-height-26px"]}>
              <span href="#" className={`${styles["font-weight-roman"]} ${styles["color-black-1"]} ${styles["text-decoration-underline"]} ${styles["cursor__pointer"]}`}>Ver datos del producto</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["products__main-trends-container"]}>
        <span className={styles["products__main-trends-title"]}>Principales tendencias</span>
        <div className={styles["products__main-trends-cards"]}>
          <div className={styles["products__main-trends-card-container"]}>
            <div className={styles["products__main-trends-card"]}>
              <div id={styles["product__card-image-1"]} title="Nike Air Force 1 High ‘07" className={styles["product__card-image"]} />
              <div className={styles["product__card-data"]}>
                <div className={styles["product__card-data-model-data"]}>
                  <p className={styles["product__card-data-model-name"]}>Nike Air Force 1 High ‘07</p>
                  <p className={styles["product__card-data-gender"]}>Calzado para hombre</p>
                </div>
                <span className={styles["product__card-data-model-price"]}>$2899</span>
              </div>
            </div>
          </div>
          <div className={styles["products__main-trends-card-container"]}>
            <div className={styles["products__main-trends-card"]}>
              <div id={styles["product__card-image-2"]} title="Air Jordan 1 Low" className={styles["product__card-image"]} />
              <div className={styles["product__card-data"]}>
              <div className={styles["product__card-data-model-data"]}>
                <p className={styles["product__card-data-model-name"]}>Air Jordan 1 Low</p>
                <p className={styles["product__card-data-gender"]}>Calzado para hombre</p>
              </div>
              <span className={styles["product__card-data-model-price"]}>$2399</span>
            </div>
            </div>
          </div>
          <div className={styles["products__main-trends-card-container"]}>
            <div className={styles["products__main-trends-card"]}>
              <div id={styles["product__card-image-3"]} title="Nike Air Force 1 ‘07 LV8" className={styles["product__card-image"]} />
              <div className={styles["product__card-data"]}>
                <div className={styles["product__card-data-model-data"]}>
                  <p className={styles["product__card-data-model-name"]}>Nike Air Force 1 ‘07 LV8</p>
                  <p className={styles["product__card-data-gender"]}>Calzado para hombre</p>
                </div>
                <span className={styles["product__card-data-model-price"]}>$2199</span>
              </div>
            </div>
          </div>
          <div className={styles["products__main-trends-card-container"]}>
            <div className={`${styles["products__main-trends-card"]} ${styles["mr-55px"]}`}>
              <div id={styles["product__card-image-4"]} title="Nike Air Force 1 React LX" className={styles["product__card-image"]} />
              <div className={styles["product__card-data"]}>
              <div className={styles["product__card-data-model-data"]}>
                <p className={styles["product__card-data-model-name"]}>Nike Air Force 1 React LX</p>
                <p className={styles["product__card-data-gender"]}>Calzado para hombre</p>
              </div>
              <span className={styles["product__card-data-model-price"]}>$2899</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;