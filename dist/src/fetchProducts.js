import { baseURL } from './utils.js';

const fetchProducts = async () => {
  try {
    const response = await fetch(baseURL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchProducts;
