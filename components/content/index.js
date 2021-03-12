import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import {AppStateContext} from "../../context/MyContext";

import {productItemsData} from '../../config/product-data';
import {productSizeItemsData} from '../../config/product-size-data';
import {productCartItemsData} from '../../config/product-cart-data';

import styles from './content.module.css';

function Content() {
  const [productSizeItemsSelected, setProductSizeItemsSelected] = useState(productItemsData[0].sizes_available);
  const [productData, setProductData] = useState(productCartItemsData[0]);

  useEffect(() => {
    setProductData({
      ...productData,
      "product_id": productItemsData[0].product_id,
      "model_name": productItemsData[0].model_name,
      "price": productItemsData[0].price,
      "model_image_url": productItemsData[0].image_urls.model_black,
      "model_color": "Negro",
      "model_gender": "Hombre",
      "sizes_selected": Object.entries(productSizeItemsSelected).filter(size => size[1] === true).map(size => size[0])
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
              <span className={styles["product__data-gender"]}>Calzado para {productData.model_gender ? productData.model_gender.toLowerCase() : "---"}</span>
              <div className={styles["product__data-model-data"]}>
                <span className={styles["product__data-model-name"]}>Nike Air Force 1 '07</span>
                <span className={styles["product__data-model-price"]}>${productData.price}</span>
              </div>
            </div>
            <div className={styles["product__data-color-option-images"]}>
              <fieldset className={styles["product__data-color-option-images-fieldset"]}>
                <label className={styles["product__data-color-option-images-label"]}>
                  <input className={styles["input__radio"]} type="radio" checked={productData.model_color === "Blanco"} onChange={(e) => {
                    setProductData({
                      ...productData,
                      "model_color": e.target.checked ? "Blanco" : "Negro",
                      "model_image_url": e.target.checked ? productItemsData[0].image_urls.model_white : productItemsData[0].image_urls.model_black
                    });
                  }} />
                  <div id={styles["product__data-color-option-image-1"]} className={styles["product__data-color-option-image"]} />
                </label>
                <label className={styles["product__data-color-option-images-label"]}>
                  <input className={styles["input__radio"]} type="radio" checked={productData.model_color === "Negro"} onChange={(e) => {
                    setProductData({
                      ...productData,
                      "model_color": e.target.checked ? "Negro" : "Blanco",
                      "model_image_url": e.target.checked ? productItemsData[0].image_urls.model_black : productItemsData[0].image_urls.model_white
                    });
                  }} />
                  <div id={styles["product__data-color-option-image-2"]} className={styles["product__data-color-option-image"]} />
                </label>
              </fieldset>
            </div>
            <div className={styles["product__data-gender-options"]}>
              <span className={styles["product__data-gender-options-title"]}>Selecciona el género</span>
              <fieldset className={styles["product__data-gender-options-fieldset"]}>
                <label className={styles["product__data-gender-option-label"]}>
                  <input className={styles["input__radio"]} type="radio" checked={productData.model_gender === "Hombre"} onChange={(e) => {
                    setProductData({
                      ...productData,
                      "model_gender": e.target.checked ? "Hombre" : "Mujer"
                    });
                  }} />
                  <span className={styles["product__data-gender-option-text"]}>Hombre</span>
                </label>
                <label className={styles["product__data-gender-option-label"]}>
                  <input className={styles["input__radio"]} type="radio" checked={productData.model_gender === "Mujer"} onChange={(e) => {
                    setProductData({
                      ...productData,
                      "model_gender": e.target.checked ? "Mujer" : "Hombre"
                    });
                  }} />
                  <span className={styles["product__data-gender-option-text"]}>Mujer</span>
                </label>
              </fieldset>
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
                  <button
                    key={indexEl}
                    disabled={!Object.keys(productSizeItemsSelected).includes(size)}
                    title={!Object.keys(productSizeItemsSelected).includes(size) ? "No disponible": ""}
                    className={`${styles["product__sizes-item"]} ${productSizeItemsSelected[size] === true ? styles["product__sizes-item-selected"] : ""}`}
                    onClick={() => {
                      productSizeItemsSelected[size] = !productSizeItemsSelected[size];
                      setProductSizeItemsSelected(productSizeItemsSelected);
                      setProductData({
                        ...productData,
                        "sizes_selected": Object.entries(productSizeItemsSelected).filter(size => size[1] === true).map(size => size[0])
                      });
                    }}>{size}</button>
                ))
              }
            </div>
          </div>
          <AppStateContext.Consumer>
            {
              ({products, setProducts}) => (
                <div className={styles["product__actions"]}>
                  <Link href="/cart">
                    <button
                      id={styles["btn-add-to-cart"]}
                      className={styles["product__actions-item"]}
                      disabled={
                        Array.from(products.currentCartItems).filter(product => product.product_id === productData.product_id).length === 0 &&
                        productData.sizes_selected.length === 0
                      }
                      onClick={() => {
                        if (productData.sizes_selected.length > 0) {
                          const cartItemsUpdated = Array.from(products.currentCartItems).filter(product => product.product_id !== productData.product_id);
                          setProducts({
                            currentFavoriteItems: [...products.currentFavoriteItems],
                            currentCartItems: [...cartItemsUpdated, productData]
                          });
                        }
                      }}>
                      <span>{products.currentCartItems.filter(product => product.product_id === productData.product_id).length === 0 ? "Agregar a la bolsa de compra": "Agregado a la bolsa de compra"}</span>
                      <span
                        id={styles["icon-check"]}
                        className={`
                          ${products.currentCartItems.filter(product => product.product_id === productData.product_id).length > 0 ? styles["icon-check"] : ""}
                          ${styles["icon__small"]}
                        `}
                        />
                      </button>
                  </Link>

                  <button
                    id={styles["btn-add-to-favorites"]}
                    className={styles["product__actions-item"]}
                    onClick={() => {
                      if (Array.from(products.currentFavoriteItems).filter(product => product.product_id === productData.product_id).length === 0) {
                        const productDataObj = {
                          "product_id": productData.product_id,
                          "model_image_url": productData.model_image_url,
                          "model_name": productData.model_name,
                          "model_gender": productData.model_gender,
                          "model_color": productData.model_color,
                          "price": productData.price,
                        };
                        setProducts({
                          currentFavoriteItems: [...products.currentFavoriteItems, productDataObj],
                          currentCartItems: [...products.currentCartItems]
                        })
                      } else {
                        setProducts({
                          currentFavoriteItems: Array.from(products.currentFavoriteItems).filter(product => product.product_id !== productData.product_id),
                          currentCartItems: [...products.currentCartItems]
                        })
                      }
                    }}>
                    <span>{products.currentFavoriteItems.filter(product => product.product_id === productData.product_id).length === 0 ? "Añadir a Favoritos": "Añadido a Favoritos"}</span>
                    <span
                      id={styles["icon-favorite"]}
                      className={`
                        ${products.currentFavoriteItems.filter(product => product.product_id === productData.product_id).length === 0 ? styles["icon-favorite-outline"]: styles["icon-favorite"]}
                        ${styles["icon__small"]}
                      `}
                      />
                  </button>
                </div>
              )
            }
          </AppStateContext.Consumer>
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