const iconMenu = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__nav');
if(iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	});

	document.addEventListener('click', (e) => {
		const click = e.composedPath().includes(iconMenu);
		if ( !click ) {
			iconMenu.classList.remove('_active');
			headerNav.classList.remove('_active');
		}
	})
}






