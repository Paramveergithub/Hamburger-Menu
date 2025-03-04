let hamburger = document.querySelector('.hamburgerMenu');
let nav = document.querySelector('.nav');
let close = document.querySelector('.close');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.parentElement.classList.add('open-menu');
});

close.addEventListener('click', () => {
  nav.parentElement.classList.remove('open-menu');
});

nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

window.addEventListener('click', (e) => {
  nav.parentElement.classList.remove('open-menu');
});

window.addEventListener('scroll', (e) => {
  nav.parentElement.classList.remove('open-menu');
});