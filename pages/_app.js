import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";

// Create a global style component to reset body margin
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    font-family: 'SF Pro Display', sans-serif;
  }
  body::-webkit-scrollbar {
    display: none;
  }

`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
