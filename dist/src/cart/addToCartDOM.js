import { getElement } from '../utils.js';

const cartItemsDOM = getElement('.cart__items');

const addToCartDOM = (product) => {
  const { id, price, title, image, amount } = product;

  const article = document.createElement('article');
  article.classList.add('cart__item');
  article.setAttribute('data-id', id);

  article.innerHTML = `
      <article class="cart__item">
        <img
            class="cart__item--img"
            src="${image}"
            alt="${title}"
        />

        <div>
          <h4 class="cart__item--name">${title}</h4>
          <p class="cart__item--price">$${price}</p>
          <button class="cart__item--remove-btn" data-id="${id}">remove</button>
        </div>

        <div>
          <button class="cart__item--increase-btn" data-id="${id}">
            <i class="fas fa-chevron-up"></i>
          </button>
          <p class="cart__item--amount" data-id="${id}">$${amount}</p>
          <button class="cart__item--decrease-btn" data-id="${id}">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </article>
    `;

  cartItemsDOM.appendChild(article);
};
export default addToCartDOM;
