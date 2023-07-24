import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import * as s from "../styles/pages/app";

import { Handbag } from "phosphor-react";

import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <s.Container>
      <s.Header>
        <Image src={logoImg} alt="" />
        <button disabled>
          <span>1</span>
          <Handbag size={24} weight="bold" />
        </button>
      </s.Header>
      <Component {...pageProps} />
      <s.ModalChart modalIsOpen="true">
        <h3>Sacola de compras</h3>
        <s.ProductItems>
          <li>
            {/* <Image */}
            <div></div>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 89,90</strong>
              <button>Remover</button>
            </div>
          </li>
          <li>
            {/* <Image */}
            <div></div>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 89,90</strong>
              <button>Remover</button>
            </div>
          </li>
        </s.ProductItems>
        <s.PaymmentContainer>
          <s.QuantityDetails>
            <p>Quantidade</p>
            <span>3 itens</span>
          </s.QuantityDetails>
          <s.TotalDetails>
            <span>Valor total</span>
            <p>R$ 270,00</p>
          </s.TotalDetails>
        </s.PaymmentContainer>
        <s.CheckoutButton>Finalizar compra</s.CheckoutButton>
      </s.ModalChart>
    </s.Container>
  );
}
