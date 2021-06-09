import { getElement } from './utils.js';

const element = getElement('.main-footer__title');
const setupCopyright = () => {
  const date = new Date().getFullYear();
  element.textContent = `${date} all rights reserved`;
};
setupCopyright();
