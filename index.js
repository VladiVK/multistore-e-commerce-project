import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';

import { getElement } from './src/utils.js';

const init = async () => {
  try {
    const response = await fetch(baseURL);
    const products = await response.json();

    console.log(products);
  } catch (error) {
    console.log(error);
  }
};

// window.addEventListener('DOMContentLoaded', init);
