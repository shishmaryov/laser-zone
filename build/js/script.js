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

var tableTitle2 = document.querySelector('.table__title--2');
var tableBody2 = document.querySelector('.price__table--2');
var tableArrow2 = document.querySelector('.table__arrow--2');

tableTitle2.addEventListener('click', function() {
  tableBody2.classList.toggle('price__table--active');
  tableArrow2.classList.toggle('table__arrow--green');
});

var tableTitle3 = document.querySelector('.table__title--3');
var tableBody3 = document.querySelector('.price__table--3');
var tableArrow3 = document.querySelector('.table__arrow--3');

tableTitle3.addEventListener('click', function() {
  tableBody3.classList.toggle('price__table--active');
  tableArrow3.classList.toggle('table__arrow--green');
});

var tableTitle4 = document.querySelector('.table__title--4');
var tableBody4 = document.querySelector('.price__table--4');
var tableArrow4 = document.querySelector('.table__arrow--4');

tableTitle4.addEventListener('click', function() {
  tableBody4.classList.toggle('price__table--active');
  tableArrow4.classList.toggle('table__arrow--green');
});

var tableTitle5 = document.querySelector('.table__title--5');
var tableBody5 = document.querySelector('.price__table--5');
var tableArrow5 = document.querySelector('.table__arrow--5');

tableTitle5.addEventListener('click', function() {
  tableBody5.classList.toggle('price__table--active');
  tableArrow5.classList.toggle('table__arrow--green');
});
