import React, {} from 'react';
import Head from 'next/head';

import {AppStateContext} from "../../context/MyContext";

import styles from './shopping-cart.module.css';

const ShoppingCart = () => {
  return (
    <div className="App">
      <Head>
        <title>Niko - Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppStateContext.Consumer>
        {
          ({products, setProducts}) => (
            <main className={styles["main__container"]}>
              <div className={styles["cart__container"]}>
                <div className={styles["cart__details"]}>
                  <div className={styles["cart__details-shipment-special-offer"]}>
                    <p className={styles["cart__details-shipment-special-offer-title"]}>Envío gratuito para miembros.</p>
                    <span className={styles["cart__details-shipment-special-offer-message"]}>Hazte miembro de Nike para disfrutar de envíos rápidos y gratuitos. <a className={styles["cart__details-shipment-special-offer-link"]}>Únete</a> o <a className={styles["cart__details-shipment-special-offer-link"]}>Inicia sesión</a></span>
                  </div>
                  <div className={styles["cart__items-details"]}>
                    <p className={styles["cart__items-details-title"]}>Bolsa de compra</p>
                    {
                      (products.currentCartItems.length > 0) ?
                      <ul className={styles["cart__items-list"]}>
                        {
                          products.currentCartItems.map((cartItem) => (
                            <li className={styles["cart__items-list-item"]}>
                              <img
                                src={cartItem.model_image_url}
                                className={styles["cart__item-product-image"]}
                              />
                              <div className={styles["cart__item-product-data-container"]}>
                                <div className={styles["cart__item-product-data"]}>
                                  <div className={`${styles["cart__item-product-data-row"]} ${styles["flex-row-justify-between"]}`}>
                                    <span className={styles["cart__item-product-title"]}>{cartItem.model_name}</span>
                                    <span className={styles["cart__item-product-price"]}>${cartItem.price}.00</span>
                                  </div>
                                  <div className={styles["cart__item-product-data-row"]}>
                                    <span className={styles["color-grey"]}>Calzado para {cartItem.model_gender.toLowerCase()}</span>
                                  </div>
                                  <div className={styles["cart__item-product-data-row"]}>
                                    <span className={styles["color-grey"]}>{cartItem.model_color}/{cartItem.model_color}</span>
                                  </div>
                                  <div className={`${styles["cart__item-product-data-row"]} ${styles["flex-row"]}`}>
                                    <div className={styles["cart__item-product-size-container"]}>
                                      <span className={styles["color-grey"]}>Talla/s</span>
                                      <span id={styles["cart__item-product-size"]}> {cartItem.sizes_selected.map(size => size.split("Cm ")[1]).join(", ")}</span>
                                    </div>
                                    <div className={styles["cart__item-product-quantity-container"]}>
                                      <span className={styles["color-grey"]}>Cantidad</span>
                                      <span id={styles["cart__item-product-quantity"]}> {cartItem.sizes_selected.length}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["cart__item-product-actions"]}>
                                  <p className={styles["cart__item-product-data-row"]}>
                                    <a className={styles["cart__item-product-action"]}>Mover a favoritos</a>
                                    <a className={styles["cart__item-product-action"]} onClick={() => {
                                      setProducts({
                                        currentFavoriteItems: [...products.currentFavoriteItems],
                                        currentCartItems: Array.from(products.currentCartItems).filter(product => product.product_id !== cartItem.product_id)
                                      })
                                    }}>Eliminar</a>
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))
                        }
                      </ul> :
                      <span>Aún no tienes items en esta lista :(</span>
                    }
                  </div>
                  <div className={styles["cart__shipment-details"]}>
                    <p className={styles["cart__shipment-details-title"]}>Envío</p>
                    <div className={styles["cart__shipment-details-data"]}>
                      <span className={styles["cart__shipment-details-date"]}>Llega el lun. 18 de ene.</span>
                      <div className={styles["cart__shipment-details-actions"]}>
                        <a className={styles["cart__shipment-details-action"]}>Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["cart__payment-summary"]}>
                  <div className={styles["cart__payment-summary-data"]}>
                    <p className={styles["cart__payment-summary-data-title"]}>Resumen</p>
                    <div className={styles["cart__payment-summary-data-item"]}>
                      <span className={styles["cart__payment-summary-data-item-description"]}>Subtotal</span>
                      <span className={styles["cart__payment-summary-data-item-amount"]}>
                        {(products.currentCartItems.length > 0) ?
                          `${products.currentCartItems[0].sizes_selected.length} x $${products.currentCartItems[0].price}` :
                          "$0"
                        }.00
                      </span>
                    </div>
                    <div className={styles["cart__payment-summary-data-item"]}>
                      <span className={styles["cart__payment-summary-data-item-description"]}>Gastos de envío y gestión estimados</span>
                      <span className={styles["cart__payment-summary-data-item-amount"]}>$0.00</span>
                    </div>
                    <div className={`${styles["cart__payment-summary-data-item"]} ${styles["cart__payment-summary-data-item-featured"]}`}>
                      <span className={styles["cart__payment-summary-data-item-description"]}>Total</span>
                      <span className={styles["cart__payment-summary-data-item-amount"]}>${
                        (products.currentCartItems.length > 0) ?
                          `${products.currentCartItems[0].sizes_selected.length * products.currentCartItems[0].price}` :
                          "0"
                        }.00</span>
                    </div>
                  </div>
                  <div className={styles["cart__summary-payment-options"]}>
                    <div className={styles["cart__summary-payment-option"]}>
                      <button className={`${styles["btn"]} ${styles["btn-dark"]}`}>Comprar como invitado</button>
                    </div>
                    <div className={styles["cart__summary-payment-option"]}>
                      <button className={`${styles["btn"]} ${styles["btn-dark"]}`}>Comprar como miembro</button>
                    </div>
                    <div className={styles["cart__summary-payment-option"]}>
                      <button className={`${styles["btn"]} ${styles["btn-light"]}`}>
                        <span className={styles["color__indigo"]}>Pay</span><span className={styles["color__turquoise"]}>pal</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["divider"]}></div>
              <div className={styles["favorites__container"]}>
                <p className={styles["favorites__title"]}>Favoritos</p>
                <span className={styles["favorites__message-user-logged-out"]}>
                  <span>¿Quieres ver tus favoritos?</span>
                  <span>
                    <a className={styles["favorites__message-user-logged-out-link"]}>Únete</a> o <a className={styles["favorites__message-user-logged-out-link"]}>Inicia sesión</a>
                  </span>
                </span>
              </div>
            </main>
          )
        }
      </AppStateContext.Consumer>
    </div>
  );
}

export default ShoppingCart;