let menuButton = document.querySelector('.header__side-bar');
let menuList = document.querySelector('.header__list');

menuButton.addEventListener('click', () => {
	let expanded = menuButton.getAttribute('aria-expanded') === 'true' || 'flase';
	menuButton.setAttribute('aria-expanded', !expanded);
	// menuButton.classList.toggle('menu__button--open');
	menuList.classList.toggle('header__list_open');
});