/*
$(document).ready(function(){
  $('.nav__link').click(function(e){
      if($(this).attr('href').indexOf('#') != -1){
      e.preventDefault();
            var href = $(this).attr('href').replace('#', '');
      if($('#'+href).length > 0){
              var tophref = $('body').find('#'+href).offset().top;
              $('html, body').animate({scrollTop: tophref}, 800);
      }
    }
    });
});
*/

// собираем все якоря; устанавливаем время анимации и количество кадров
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 60;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    var scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
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

var headerMobile = document.querySelector('.header__mobile');
var burger = document.querySelector('.header__burger');
var headerClose = document.querySelector('.header__close');

burger.addEventListener('click', function () {
  headerMobile.classList.add('.header__mobile--active');
});

headerClose.addEventListener('click', function () {
  headerMobile.classList.remove('.header__mobile--active');
});
