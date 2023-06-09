import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        ></link>
        <meta
          property="og:image"
          content="https://kwdc.dev/resources/logo/kwdc_main_logo.png"
        />
        <meta property="og:title" content="KWDC" />
        <meta
          property="og:description"
          content="Together, we can make great things happen"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
