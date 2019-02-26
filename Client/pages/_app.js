import React from "react";
import App, { Container } from "next/app";
import NavMenu from "../components/NavMenu";
import { Container as BootstrapContainer } from "reactstrap";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NavMenu />
        <BootstrapContainer>
          <Component {...pageProps} />
        </BootstrapContainer>
      </Container>
    );
  }
}

export default MyApp;
