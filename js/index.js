$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});

$(document).ready(function() {
    $('.slider-about-us').slick({
  		arrows: true
    });

    $('.slider-main').slick({
  		autoplay: true
    });
	 $('.slider-quote').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		asNavFor: '.slider-quote-nav'
	});
	 
	$('.slider-quote-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-quote',
		dots: true,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		adaptiveHeight: true
	});
});