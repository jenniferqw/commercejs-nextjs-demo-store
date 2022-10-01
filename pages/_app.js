import App from 'next/app';
import React from 'react';
import '../style/scss/style.scss';
import { wrapper } from '../store';
import commerce from '../lib/commerce';
import collections from '../lib/collections';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Fetch data on load
    // Fetch categories
    const categoriesResponse = await commerce.categories.list();

    const { data: products } = await commerce.products.list();
    const { data: products } = await commerce.products.list();

    // Allows store tope: 'STORE_PRODUCTS', payload: products });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    }; be updated via the dispatch action
    ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories });
    ctx.store.dispatch({ ty
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
