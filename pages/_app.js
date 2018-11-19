import NextApp, { Container as AppContainer } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }

  a {
    color: ${({ theme: { colors } }) => colors.action}
    font-weight: 600;
    text-decoration: none;
  }

  body, button, html {
    color: ${({ theme: { colors } }) => colors.dark}
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }

  button {
    background-color: ${({ theme: { colors } }) => colors.light}
    border: 0;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.06);
    font-weight: 600;
    height: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  }

  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }

  h1 {
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 40px;

    @media (min-width: 576px) {
      font-size: 48px;
      line-height: 56px;
    }
  }

  h2 {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 32px;
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
  }

  hr {
    border-color: #79AB6F;
    border-style: inherit;
    border-width: 1px;
  }

  input {
    height: 40px;
    padding: 0 8px;
  }

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;

    span {
      float: right;
      font-weight: normal;
    }
  }

  textarea {
    padding: 8px;
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
              <Component {...pageProps} />
            </PageContainer>

            <Footer />

            <GlobalStyle />
          </Wrapper>
        </ThemeProvider>
      </AppContainer>
    );
  }
}
