import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';

import { getElement } from './src/utils.js';

import fetchProducts from './src/fetchProducts.js';

const init = async () => {
  const products = await fetchProducts();
  console.log(products);
};

window.addEventListener('DOMContentLoaded', init);
