var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 500,
  framesCount = 60;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    var scroller = setInterval(function () {
      var scrollBy = coordY / framesCount;
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
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



var headerMobile = document.querySelector('.header__mobile');
var burger = document.querySelector('.header__burger');
var headerClose = document.querySelector('.header__close');

burger.addEventListener('click', function () {
  headerMobile.classList.add('.header__mobile--active');
});

headerClose.addEventListener('click', function () {
  headerMobile.classList.remove('.header__mobile--active');
});



var mapButton = document.querySelector('.button--map');
var modalClose = document.querySelector('.modal__close');
var modalOverlay = document.querySelector('.modal__overlay');
var map = document.querySelector('.modal__wrapper--map');

mapButton.addEventListener('click', function () {
  map.classList.add('modal__wrapper--active');
  modalOverlay.classList.remove('modal__overlay');
  modalOverlay.classList.add('modal__overlay--active');
});

modalClose.addEventListener('click', function () {
  map.classList.remove('modal__wrapper--active');
  modalOverlay.classList.add('modal__overlay');
  modalOverlay.classList.remove('modal__overlay--active');
});
