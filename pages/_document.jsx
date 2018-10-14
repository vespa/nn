
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import 'normalize.css';
import '../sass/main.scss';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    return renderPage();
  }

  render() {
    return (
      <html lang="en">
        <title>Title</title>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
