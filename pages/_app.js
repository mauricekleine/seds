import React from "react";
import App, { Container } from "next/app";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Page from "../components/Page";
import Wrapper from "../components/Wrapper";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
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
        <Wrapper>
          <Navigation />

          <Page>
            <Component {...pageProps} />
          </Page>

          <Footer />
        </Wrapper>

        <style global jsx>{`
          * {
            margin: 0;
          }
        `}</style>
      </Container>
    );
  }
}
