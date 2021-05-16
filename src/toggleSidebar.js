import { getElement } from './utils.js';

const navbarToggleBtn = getElement('.navbar__toggle-btn');
const sidebarOverlay = getElement('.sidebar-overlay');
const sidebarCloseBtn = getElement('.sidebar__close-btn');

navbarToggleBtn.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});

sidebarCloseBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});
