$(function () {
	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btns slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btns slick-prev"></button>',
		infinite: false,
		
	});

	$('select').styler();

	$('.header__menu-btn').on('click', function(event) {
		event.preventDefault();
		$('.menu__list').slideToggle();
	});
});