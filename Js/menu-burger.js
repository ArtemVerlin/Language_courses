const iconMenu = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__nav');
if(iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	});
}