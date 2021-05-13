import './test.js';

const baseURL = 'https://fakestoreapi.com/products';

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
