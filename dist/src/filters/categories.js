import { getElement, allCategoriesURL } from '../utils.js';
import { store } from '../store.js';
import fetchProducts from '../fetchProducts.js';
import display from '../displayProducts.js';

const categoriesDOM = getElement('.filters__categories');

const setupCategories = async (store) => {
  const allCategories = await fetchProducts(allCategoriesURL);
  if (allCategories) {
    const categories = ['all', ...allCategories];

    categoriesDOM.innerHTML = categories
      .map((category) => {
        return ` <button class="category-btn">${category}</button>`;
      })
      .join('');

    categoriesDOM.addEventListener('click', (e) => {
      const element = e.target;

      if (element.classList.contains('category-btn')) {
        let newStore = [];
        if (element.textContent === 'all') {
          newStore = [...store];
        } else {
          newStore = store.filter(
            (product) => product.category === element.textContent
          );
        }

        display(newStore, getElement('.products__container'));
      }
    });
  }
};

export default setupCategories;
