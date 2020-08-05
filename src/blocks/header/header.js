export default function() {
	const menuButton = document.querySelector('.header__humburger');
	const headerList = document.querySelector('.header__list');
	const headerTopBlock = document.querySelector('.header__top-block');

	menuButton.addEventListener('click', () => {
		headerTopBlock.classList.toggle('header__top-block_open');
		headerList.classList.toggle('header__list_open');
	});
}