import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";

// Create a global style component to reset body margin
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  body::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background-color: transparent;
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
