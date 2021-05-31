import '../cart/toggleCart.js';
import '../toggleSidebar.js';

import { store } from '../store.js';
import display from '../displayProducts.js';

import { getElement } from '../utils.js';

const loadingDOM = getElement('.page-loading');

display(store, getElement('.products__container'));
loadingDOM.style.display = 'none';
