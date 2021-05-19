import { getElement } from '../utils.js';

const navbarToggleCart = getElement('.navbar__toggle-cart');
const cartOverlay = getElement('.cart__overlay');
const cartCloseBtn = getElement('.cart__close-btn');

navbarToggleCart.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
cartCloseBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

export const openCart = () => cartOverlay.classList.add('show');
