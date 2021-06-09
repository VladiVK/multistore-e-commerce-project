import fetchProducts from './fetchProducts.js';
import { getLocalStorageItem, setLocalStorageItem } from './utils.js';

// store: products or []
let store = getLocalStorageItem('store');

const setupStore = (products) => {
  store = products.map((product) => {
    const { id, title, price, category, image } = product;
    return {
      id,
      title,
      price,
      category,
      image,
    };
  });

  setLocalStorageItem('store', store);
};

const findProduct = (id) => {
  return store.find((product) => product.id === Number(id));
};

const createFeaturedProducts = () => {
  const electronics = store.find((elem) => elem.category === 'electronics');
  const jeweley = store.find((elem) => elem.category === 'jewelery');
  const women = store.find((elem) => elem.category === "women's clothing");
  const men = store.find((elem) => elem.category === "men's clothing");
  return [electronics, jeweley, women, men];
};

export { store, setupStore, findProduct, createFeaturedProducts };
