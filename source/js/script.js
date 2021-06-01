new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
  centerSlides: true
});

/*
function someFunc() {
  // Выполняем действие, если ширина меньше
  var w = window.innerWidth;
  if (w < 1024) {
    new Swiper('.reviews__slider', {
      slidesPerView: 1
    });
  }
}
someFunc();
*/

var tableTitle1 = document.querySelector('.table__title--1');
var tableBody1 = document.querySelector('.price__table--1');
var tableArrow1 = document.querySelector('.table__arrow--1');

tableTitle1.addEventListener('click', function() {
  tableBody1.classList.toggle('price__table--active');
  tableArrow1.classList.toggle('table__arrow--green');
});
