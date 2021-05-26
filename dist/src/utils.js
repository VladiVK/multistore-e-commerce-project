// git rev-list --all --remotes --pretty

const baseURL = 'https://fakestoreapi.com/products';

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Please check "${selector}", no such element exist!`);
};

const getLocalStorageItem = (item) => {
  const storageItem = localStorage.getItem(item);
  return storageItem ? JSON.parse(localStorage.getItem(item)) : [];
};
const setLocalStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export { baseURL, getElement, setLocalStorageItem, getLocalStorageItem };
