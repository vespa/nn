
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import 'normalize.css';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    return renderPage();
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
          <title>Farfetch</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
