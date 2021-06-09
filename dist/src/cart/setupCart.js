// global imports
// specific imports
import {
  getElement,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// selections
const cartItemCounterDOM = getElement('.navbar__toggle-cart-counter');
const cartTotalDOM = getElement('.cart__total');
const cartItemsDOM = getElement('.cart__items');

let cart = getLocalStorageItem('cart');

// export function
export const addToCart = (id) => {
  // may be we already have this product in the cart?
  let item = cart.find((cartitem) => cartitem.id === id);

  // if not:
  if (!item) {
    let product = findProduct(id);

    product = { ...product, amount: 1 };

    cart = [...cart, product];

    addToCartDOM(product);
  } else {
    // we already have an item in the cat
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart__item--amount')];
    const modifiedItem = items.find((item) => Number(item.dataset.id) === id);
    modifiedItem.textContent = amount;
  }

  displayCartItemsCount();
  displayCartTotal();
  setLocalStorageItem('cart', cart);
  openCart();
};

function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
}
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
}
function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
}
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

  cartTotalDOM.textContent = `Total: $${total.toFixed(2)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => addToCartDOM(cartItem));
}

function setupCartFunctionality() {
  cartItemsDOM.addEventListener('click', (e) => {
    const element = e.target;
    const id = Number(e.target.dataset.id);
    // we need a parent if we have an icon as a pressing area
    const parent = e.target.parentElement;
    const parentID = Number(parent.dataset.id);

    // **** remove product ****
    if (element.classList.contains('cart__item--remove-btn')) {
      removeItem(id);
      parent.parentElement.remove();
    }
    // **** increase product amount ****
    if (parent.classList.contains('cart__item--increase-btn')) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // **** decrease product amount ****
    if (parent.classList.contains('cart__item--decrease-btn')) {
      const newAmount = decreaseAmount(parentID);

      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    // display amount of items in the cart
    displayCartItemsCount();
    // display cart total price
    displayCartTotal();
    // refresh cart in local storage
    setLocalStorageItem('cart', cart);
  });
}

const init = () => {
  // display amount of items in the cart
  displayCartItemsCount();
  // display cart total price
  displayCartTotal();
  // add all items to the DOM
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};

init();
