// global imports
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import '../toggleSidebar.js';
// specific imports
import { getElement, baseURL } from '../utils.js';
import { addToCart } from '../cart/setupCart.js';
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

const setupSingleProduct = async () => {};

window.addEventListener('DOMContentLoaded', async function () {
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

      pageTitleDOM.textContent = `Home / ${title}`;
      imgDOM.src = image;
      titleDOM.textContent = title;
      priceDOM.textContent = `$${price}`;
      descDOM.textContent = description;
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
});

cartBtn.addEventListener('click', () => {
  addToCart(productID);
});
