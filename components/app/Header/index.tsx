import { Handbag } from "phosphor-react";
import * as s from "./style";
import Image from "next/image";

import logoImg from "../../../assets/logo.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

export default function Header() {
  const { productList, toggleModalCart } = useContext(ShoppingCartContext);

  const quantityProducts = productList.length;
  console.log(quantityProducts);

  return (
    <s.Header>
      <Image src={logoImg} alt="" />
      <button disabled={!quantityProducts} onClick={toggleModalCart}>
        {!!quantityProducts && <span>{quantityProducts}</span>}
        <Handbag size={24} weight="bold" />
      </button>
    </s.Header>
  );
}
