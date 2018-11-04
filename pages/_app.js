import NextApp, { Container as AppContainer } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  a {
    color: ${({ theme: { colors } }) => colors.action}
    font-weight: bold;
    text-decoration: none;
  }

  body, html {
    color: ${({ theme: { colors } }) => colors.dark}
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }

  h1 {
    font-size: 32px;
    line-height: 40px;

    @media (min-width: 576px) {
      font-size: 48px;
      line-height: 56px;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
  }
`;

const PageContainer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default class App extends NextApp {
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
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Navigation />

            <PageContainer>
              <Container>
                <Component {...pageProps} />
              </Container>
            </PageContainer>

            <Footer />

            <GlobalStyle />
          </Wrapper>
        </ThemeProvider>
      </AppContainer>
    );
  }
}
