import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";
import ModalShoppingCart from "../components/app/ModalShoppingCart";
import { ShoppingCartContextProvider } from "../context/ShoppingCartContext";
import Header from "../components/app/Header";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <ModalShoppingCart />
      </Container>
    </ShoppingCartContextProvider>
  );
}
