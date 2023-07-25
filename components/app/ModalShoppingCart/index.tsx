import { useContext, useEffect, useState } from "react";
import * as s from "./style";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";

export default function ModalShoppingCart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const [totalCart, setTotalCart] = useState<string>("");
  const cxt = useContext(ShoppingCartContext);

  useEffect(() => {
    if (cxt.productList.length) {
      const total = cxt.productList.reduce(
        (price: number, item) => price + item.price,
        0
      );
      const totalFormatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(total / 100);

      setTotalCart(totalFormatted);
    }
  }, [cxt.productList]);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const priceIdList = cxt.productList.map(
        (product) => product.defaultPriceId
      );

      const response = await axios.post("/api/checkout", {
        priceIdList,
      });

      const { checkoutUrl } = response.data;
      cxt.clearProductsFromCart();

      window.location.href = checkoutUrl;
    } catch (err) {
      //Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <s.ModalChart modalIsOpen={cxt.openModalCart}>
      <X size={24} weight="bold" onClick={cxt.toggleModalCart} />
      <h3>Sacola de compras</h3>
      <s.ProductItems>
        {cxt.productList.map((product) => (
          <li key={product.id}>
            <div>
              <Image src={product.imageUrl} alt="" width={80} height={80} />
            </div>
            <div>
              <p>{product.name}</p>
              <strong>{product.priceFormatted}</strong>
              <button onClick={() => cxt.removeProductFromChart(product.id)}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </s.ProductItems>
      <s.PaymmentContainer>
        <s.QuantityDetails>
          <p>Quantidade</p>
          <span>{`${cxt.productList.length} itens`}</span>
        </s.QuantityDetails>
        <s.TotalDetails>
          <span>Valor total</span>
          <p>{totalCart}</p>
        </s.TotalDetails>
      </s.PaymmentContainer>
      <s.CheckoutButton
        onClick={handleBuyProduct}
        disabled={isCreatingCheckoutSession}
      >
        Finalizar compra
      </s.CheckoutButton>
    </s.ModalChart>
  );
}
