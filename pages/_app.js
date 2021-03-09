import '../styles/globals.css';

import Header from '../components/header';
import Footer from '../components/footer';

import { AppContextProvider } from "../context/MyContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContextProvider>
  );
}

export default MyApp
