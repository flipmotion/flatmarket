$(document).ready(function() {
	send();
	var form = $('[data-form="send"]');
	form.ajaxForm(function() { 
		// $('#call-modal3').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		
		// $(form).resetForm(function(){
		// 	$('#thx').modal('show');
		// });
	});
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top 
		}, 1000);
		return false;
	});
	var owlMain = $('[data-item="slider-main"]');
	owlMain.on('initialized.owl.carousel', function(event) {
		var items = event.item.count;
		var item = event.item.index + 1 ;
		var total = $('[data-item="total"]');
		var carrent = $('[data-item="carrent"]');
		total.html(items);
		carrent.html(item);
	});
	owlMain.owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
		dots: true,
	});
	owlMain.on('changed.owl.carousel', function(event) {
		var items = event.item.count;
		var item = event.item.index + 1;
		var total = $('[data-item="total"]');
		var carrent = $('[data-item="carrent"]');
		total.html(items);
		carrent.html(item);
	});
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	var owlMainT = $('[data-item="slider-item-two"]');
	var scroll_r = $(this).scrollTop();
	owlMainT.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		dotsContainer:'#navigation-slider',
		navText: [
			"<i class='my-arrow-left'></i>",
			"<i class='my-arrow-right'></i>"
		],
		dots: true,
	});
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});

	
	  $(document).click(function(event) {
		if ($(event.target).closest('[data-item="offcanvas-menu"]').length) {
			$('body').addClass('active');
			$('.my-offcanvas-trigger').addClass('active');
			$('[data-item="offcanvas-menu"]').addClass('active');
		}
		else {
			$('body').removeClass('active');
			$('a.my-offcanvas-trigger').removeClass('active');
			$('[data-item="offcanvas-menu"]').removeClass('active');
		}
		event.stopPropagation();
	  });
	
	$('.my-offcanvas-trigger').click(function(event){
		$('[data-item="offcanvas-menu"]').toggleClass('active');
		$('body').toggleClass('active');
		$(this).toggleClass('active');
		event.stopPropagation();
	});

	// var myMap;
	// ymaps.ready(init);
	// function init () {
	// 	myMap = new ymaps.Map('map', {
	// 		center: [55.770579, 37.6959459],
	// 		zoom: 12,
	// 		controls: []
	// 	}),
	// 	myMap.behaviors
	// 		.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
	// 		myPlacemark = new ymaps.Placemark([55.770579, 37.6559459], {
	// 			hintContent: [
	// 			''
	// 		].join(''),
	// 			balloonContentBody: [
	// 			'<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>пл. Свободы, 2г. Москва, Рязанский проспект д 2/23</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>8 (495) 105-95-03</strong></p><p><strong>8 (800) 505-16-03</strong></p><p>(Бесплатно по Росиии)</p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 08:00 до 17:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:shop@wood-game.ru">shop@wood-game.ru</a></p><\/div><\/div>'
	// 		].join('')
	// 		}, {
	// 			iconLayout: 'default#image',
	// 			iconImageHref: 'assets/img/pick-map.png',
	// 			iconImageSize: [102, 91],
	// 			iconImageOffset: [-38, -91]
	// 		});
	// 	myMap.geoObjects.add(myPlacemark);
	// }
	
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		//$('#dog-form').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		$('#call-modal').modal('hide');
		$('#call-modal2').modal('hide');
		$('#call-modal3').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
