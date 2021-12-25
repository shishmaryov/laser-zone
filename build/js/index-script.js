new Swiper('.promo__slider', {
	pagination: {
		clickable: true,
		el: '.swiper-pagination',
	},
	slidesPerView: 'auto',
	spaceBetween: 50,
	centerSlides: true
});



new Swiper('.reviews__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	slidesPerView: 'auto',
	spaceBetween: 50,
	centerSlides: true
});




document.querySelector('.table__title--1').addEventListener('click', function () {
	document.querySelector('.price__table--1').classList.toggle('price__table--active');
	document.querySelector('.table__arrow--1').classList.toggle('table__arrow--green');
});

document.querySelector('.table__title--2').addEventListener('click', function () {
	document.querySelector('.price__table--2').classList.toggle('price__table--active');
	document.querySelector('.table__arrow--2').classList.toggle('table__arrow--green');
});

document.querySelector('.table__title--3').addEventListener('click', function () {
	document.querySelector('.price__table--3').classList.toggle('price__table--active');
	document.querySelector('.table__arrow--3').classList.toggle('table__arrow--green');
});

document.querySelector('.table__title--4').addEventListener('click', function () {
	document.querySelector('.price__table--4').classList.toggle('price__table--active');
	document.querySelector('.table__arrow--4').classList.toggle('table__arrow--green');
});

document.querySelector('.table__title--5').addEventListener('click', function () {
	document.querySelector('.price__table--5').classList.toggle('price__table--active');
	document.querySelector('.table__arrow--5').classList.toggle('table__arrow--green');
});
