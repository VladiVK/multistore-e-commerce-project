// global imports
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import '../toggleSidebar.js';
// specific imports
import { getElement, baseURL } from '../utils.js';
// selections

const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product__center');
const pageTitleDOM = getElement('.page-hero__title');
const imgDOM = getElement('.single-product__img');
const titleDOM = getElement('.single-product__title');
const priceDOM = getElement('.single-product__price');
const descDOM = getElement('.single-product__desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

const setupSingleProduct = async () => {
  let urlID = window.location.search; //?id=1
  urlID = urlID.replace('?id=', '');

  try {
    const response = await fetch(`${baseURL}/${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      const { id, title, price, description, image } = product;
      productID = id;
      // document title
      document.title = `${title} | Multistore`;
      // page title
      pageTitleDOM.textContent = `Home / ${title}`;
      // setup HTML content
      centerDOM.innerHTML = `
        <img
          class="single-product__img img"
          src="${image}"
          alt="${title}"
        />
        <article class="single-product__info">
          <div>
            <h2 class="single-product__title">${title}</h2>

            <p class="single-product__price">$${price}</p>
            <p class="single-product__desc">${description}</p>
            <button class="addToCartBtn btn" data-id="${id}">add to cart</button>
          </div>
        </article>
      `;
      // pageTitleDOM.textContent = `Home / ${title}`;
      // imgDOM.src = image;
      // titleDOM.textContent = title;
      // priceDOM.textContent = `$${price}`;
      // descDOM.textContent = description;
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
        <div>
            <h3 class="error">sorry, something went wrong</h3>
            <button class="btn">back home</button>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
  // hide loading
  loading.style.display = 'none';
};

window.addEventListener('DOMContentLoaded', setupSingleProduct);
