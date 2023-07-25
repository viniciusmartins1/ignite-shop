import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <div>
          {products.map((product, index) => {
            return (
              <ImageContainer
                key={product.name}
                imagePosition={index === 0 ? "first" : "other"}
              >
                <Image src={product.imageUrl} alt="" height={110} width={128} />
              </ImageContainer>
            );
          })}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuu! <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const productList = session.line_items.data;

  return {
    props: {
      customerName,
      products: productList.map(({ price }) => {
        const product = price.product as Stripe.Product;
        return {
          name: product.name,
          imageUrl: product.images[0],
        };
      }),
    },
  };
};
