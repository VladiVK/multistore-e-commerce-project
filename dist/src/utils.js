// git rev-list --all --remotes --pretty

const baseURL = 'https://fakestoreapi.com/products';

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Please check "${selector}", no such element exist!`);
};

export { baseURL, getElement };
