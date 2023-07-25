import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";
import logo from "../assets/logo.svg";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        <link
          rel="shortcut icon"
          href="/logo.svg"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}
