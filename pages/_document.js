import NextDocument, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Ubuntu:500"
            rel="stylesheet"
          />

          {styleTags}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}
