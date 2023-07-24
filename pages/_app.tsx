import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

import { Handbag } from "phosphor-react";

import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button disabled>
          <span>1</span>
          <Handbag size={24} weight="bold" />
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
