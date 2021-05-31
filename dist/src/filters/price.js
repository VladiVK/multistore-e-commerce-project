import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceDOM = getElement('.price-value');

  let maxPrice = store.map(({ price }) => price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice);

  priceInput.min = 0;
  priceInput.max = maxPrice;
  priceInput.value = maxPrice;

  priceDOM.textContent = `Value: $${maxPrice}`;

  priceInput.addEventListener('input', () => {
    const value = parseInt(priceInput.value);
    priceDOM.textContent = `Value: $${value}`;

    const newStore = store.filter(({ price }) => price <= value);

    if (newStore.length < 1) {
      const productsDOM = getElement('.products__container');
      productsDOM.innerHTML = `
        <h3 class="filter-error">
            Sorry, no products matched your search
        </h3>`;
    } else {
      display(newStore, getElement('.products__container'));
    }
  });
};
export default setupPrice;
