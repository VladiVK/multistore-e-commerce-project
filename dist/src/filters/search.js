import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const setupSearch = (store) => {
  const form = getElement('.input-form');
  const input = getElement('.search-input');
  form.addEventListener('keyup', () => {
    const value = input.value;
    if (value) {
      const newStore = store.filter((product) => {
        return product.title.toLowerCase().startsWith(value);
      });
      display(newStore, getElement('.products__container'));
      if (newStore.length < 1) {
        const productsDOM = getElement('.products__container');
        productsDOM.innerHTML = `
        <h3 class="filter-error">
            sorry, no products match your search
        </h3>`;
      }
    } else {
      // we have an empty input
      display(store, getElement('.products__container'));
    }
  });
};

export default setupSearch;
