// global imports
// specific imports
import {
  getElement,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import addToCartDOM from './addToCartDOM.js';
// selections
const cartItemCounterDOM = getElement('.navbar__toggle-cart-counter');
const cartTotalDOM = getElement('.cart__total');
const cartItemsDOM = getElement('.cart__items');

let cart = getLocalStorageItem('cart');

function displayCartItemsCount() {
  const amount = cart.reduce((total, itemCount) => {
    return (total += itemCount.amount);
  }, 0);

  cartItemCounterDOM.textContent = amount;
}
function displayCartTotal() {
  const total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);

  cartTotalDOM.textContent = `Total: $${total}`;
}
function displayCartItemsDOM() {
  cart.forEach((cartItem) => addToCartDOM(cartItem));
}
export const addToCart = () => {}
const init = () => {
  // display amount of items in the cart
  displayCartItemsCount();
  // display cart total price
  displayCartTotal();
  // add all items to the DOM
  displayCartItemsDOM();
};

init();

