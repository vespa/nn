import 'babel-polyfill';
import 'isomorphic-fetch';
import App, { Container } from 'next/app';
import React from 'react';
// import { Provider } from 'react-redux';
// import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  render() {
    // const { Component, pageProps, reduxStore } = this.props;
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
export default MyApp;
// export default withReduxStore(MyApp);
