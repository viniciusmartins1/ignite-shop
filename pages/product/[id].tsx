import * as s from "../../styles/pages/product";
import Image from "next/image";
import { stripe } from "../../lib/stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addProductToChart, productList } = useContext(ShoppingCartContext);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  useEffect(() => {
    if (productList.length) {
      const productIndex = productList.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex != -1) {
        setDisabledButton(true);
      }
    } else {
      setDisabledButton(false);
    }
  }, [productList]);

  function handleAddProductToCart() {
    addProductToChart({
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
    });
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <s.ProductContainer>
        <s.ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </s.ImageContainer>
        <s.ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProductToCart} disabled={disabledButton}>
            Colocar na sacola
          </button>
        </s.ProductDetails>
      </s.ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_OIXT7QwTt8Sj2N" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //1 hora
  };
};
