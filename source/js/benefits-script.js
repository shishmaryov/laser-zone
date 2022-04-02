document.addEventListener("DOMContentLoaded", function(event) {
	var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 500,
	framesCount = 60;

var headerMobile = document.querySelector('.header__mobile');
var burger = document.querySelector('.header__burger');
var headerClose = document.querySelector('.header__close');

burger.addEventListener('click', function () {
	headerMobile.classList.add('header__mobile--active');
});

headerClose.addEventListener('click', function () {
	headerMobile.classList.remove('header__mobile--active');
});


var mapClose = document.querySelector('.modal-map__close');
var mapOverlay = document.querySelector('.modal-map__overlay');
var map = document.querySelector('.modal-map__wrapper');


elementsArray = document.querySelectorAll('.button--map');

elementsArray.forEach(function (elem) {
	elem.addEventListener('click', function () {
		map.classList.add('modal-map__wrapper--active');
		mapOverlay.classList.remove('modal-map__overlay');
		mapOverlay.classList.add('modal-map__overlay--active');
	});
});

mapClose.addEventListener('click', function () {
	map.classList.remove('modal-map__wrapper--active');
	mapOverlay.classList.add('modal-map__overlay');
	mapOverlay.classList.remove('modal-map__overlay--active');
});

let s = document.createElement("script"),
pageBody = document.querySelector('body');
s.type="text/javascript";
s.charset="UTF-8";
s.src = "https://w122053.yclients.com/widgetJS";
pageBody.append(s);
});
