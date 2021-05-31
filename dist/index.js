import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';

import { getElement, baseURL } from './src/utils.js';
import { store, setupStore, createFeaturedProducts } from './src/store.js';

import fetchProducts from './src/fetchProducts.js';
import display from './src/displayProducts.js';

const init = async () => {
  const products = await fetchProducts(baseURL);

  if (products) {
    // add our products to Store
    setupStore(products);
    const featured = createFeaturedProducts();
    display(featured, getElement('.featured-center'));
  }
  // console.log(products);
};

window.addEventListener('DOMContentLoaded', init);
