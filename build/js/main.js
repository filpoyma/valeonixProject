const headerButton = document.querySelector('.header__button');
const headerMenu = document.querySelector('.header__menu')

headerButton.addEventListener('click',() => {
  headerButton.classList.toggle('header__button--active');
  headerMenu.classList.toggle('header__menu--active');
  document.body.classList.toggle('body--overflow')
} )





