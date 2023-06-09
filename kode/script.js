// --------------- for All ---------------
// const forbiddenKeys = ['c', 'u', 's', 'p'];
// const forbiddenKeyCodes = [123, 73, 74];

// document.addEventListener("contextmenu", e => {
// 	e.preventDefault();
// }, false);

// document.addEventListener("keydown", e => {
// 	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
// 		e.stopPropagation();
// 		e.preventDefault();
// 	};
// });

// --------------- header ---------------
const navbarMenu = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.burger');
const overlayMenu = document.querySelector('.overlay');

// Toggle Menu Function
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	navbarMenu.classList.toggle('active');
	overlayMenu.classList.toggle('active');
}

// Collapse SubMenu Function
navbarMenu.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
		e.preventDefault();
		const menuItemHasChildren = e.target.parentElement;

		// If menu-item-child is Expanded, then Collapse It
		if (menuItemHasChildren.classList.contains('active')) {
			collapseSubMenu();
		} else {
			// Collapse the Existing Expanded menu-item-child
			if (navbarMenu.querySelector('.menu-item-child.active')) {
				collapseSubMenu();
			}
			// Expanded the New menu-item-child
			menuItemHasChildren.classList.add('active');
			const subMenu = menuItemHasChildren.querySelector('.sub-menu');
			subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
		}
	}
});

function collapseSubMenu() {
	navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style');
	navbarMenu.querySelector('.menu-item-child.active').classList.remove('active');
}

// Fixed Resize Screen Function
window.addEventListener('resize', () => {
	if (this.innerWidth > 992) {
		// If navbarMenu is Open, then Close It
		if (navbarMenu.classList.contains('active')) {
			toggleMenu();
		}
		// If menu-item-child is Expanded, then Collapse It
		if (navbarMenu.querySelector('.menu-item-child.active')) {
			collapseSubMenu();
		}
	}
});
window.addEventListener('scroll', () => {
	navbarMenu.classList.remove('active');
	overlayMenu.classList.remove('active');
});

// --------------- bg-hero ---------------
var swiper = new Swiper(".mySwiper", {
	loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
});

// --------------- footer copyright ---------------
let date = new Date().getFullYear();
document.querySelector('.tahun').innerHTML = date;

const copyright = document.querySelector('.copyright');
const anakBaru = document.createElement('p');
anakBaru.innerHTML = 'Designed by : <a href="https://api.whatsapp.com/send/?phone=6285172355653&text=Assalamualaikum%20Pak%20Sholeh.%20" target="_blank">Sholeh Ridlo S.Pd.I</a>';
copyright.appendChild(anakBaru);
