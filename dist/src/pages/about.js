// global imports
import '../cart/toggleCart.js';
import '../toggleSidebar.js';
import '../cart/setupCart.js';
import '../setupCopyright.js';

const questionTitles = document.querySelectorAll('.question__title');

questionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    //   .question__text-container
    const textContainer = title.nextElementSibling;

    if (textContainer.classList.contains('active-text')) {
      textContainer.classList.remove('active-text');
    } else {
      const text = textContainer.firstElementChild;

      const containerHeight = textContainer.getBoundingClientRect().height;
      const textHeight = text.getBoundingClientRect().height;

      containerHeight === 0
        ? (textContainer.style.height = `${textHeight}px`)
        : (textContainer.style.height = 0);
    }
  });
});
