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

const findProduct = (id) => store.find((product) => product.id === id);

const allCategories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

const createFeaturedProducts = () => {
  const electronics = store.find((elem) => elem.category === 'electronics');
  const jeweley = store.find((elem) => elem.category === 'jewelery');
  const women = store.find((elem) => elem.category === "women's clothing");
  return [electronics, jeweley, women];
};

export {
  store,
  setupStore,
  findProduct,
  allCategories,
  createFeaturedProducts,
};
