import '../cart/toggleCart.js';
import '../toggleSidebar.js';
import { getElement } from '../utils.js';
import { store } from '../store.js';
import display from '../displayProducts.js';
import setupSearch from '../filters/search.js';
import setupCategories from '../filters/categories.js';
import setupPrice from '../filters/price.js';

const loadingDOM = getElement('.page-loading');

display(store, getElement('.products__container'));
setupSearch(store);
setupCategories(store);
setupPrice(store);
loadingDOM.style.display = 'none';
