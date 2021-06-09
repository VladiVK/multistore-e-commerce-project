import { addToCart } from './cart/setupCart.js';
import { openCart } from './cart/toggleCart.js';

const display = (products, elementDOM) => {
  elementDOM.innerHTML = products
    .map(({ id, title, price, image }) => {
      return `
        <article class="product">
                <div class="product-container">
                    <img class="product-img img" src="${image}" alt="${title}">
                    <div class="product-icons">
                        <a href="./product.html?id=${id}" class="product-icon">
                            <i class="fas fa-search"></i>
                        </a>
                        <button class="product-cart-btn product-icon" data-id="${id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <p class="product-name">${title}</p>
                    <h4 class="product-price">${price}</h4>
                </footer>
            </article>
        `;
    })
    .join('');

  // next step !!!!

  elementDOM.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains('product-cart-btn')) {
      const id = Number(parent.dataset.id);
      addToCart(id);

      //   open cart on page (optional)
      openCart();
    }
  });
};

export default display;
