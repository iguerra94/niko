import Head from 'next/head';

import styles from './shopping-cart.module.css';

const ShoppingCart = () => {
  return (
    <div className="App">
      <Head>
        <title>Niko - Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles["cart__container"]}>
        ShoppingCart Component
      </div>
    </div>
  );
}

export default ShoppingCart;