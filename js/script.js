var portfolioIsotope = function() {         
	if ( $().isotope ) {           
		var $container = $('.portfolio_tabs');
		$container.imagesLoaded(function(){
			$container.isotope({
				itemSelector: '.item',
				transitionDuration: '1s'
			});
		});

		$('.portfolio_links li').on('click',function() {                           
			var selector = $(this).find("a").attr('data-filter');
			$('.porfolio_links li').removeClass('active');
			$(this).addClass('active');
			$container.isotope({ filter: selector });
			return false;
		});
	};
};


var googleMap = function() {
	if ( $().gmap3 ) {
		$("#googlemap").gmap3({
			map:{
				options:{
					zoom: 11,
					mapTypeId: 'arch_style',
					mapTypeControlOptions: {
						mapTypeIds: ['arch_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
					},
					scrollwheel: false
				}
			},
			getlatlng:{
				address:  "PO Box 97845 Baker st. 567, Los Angeles, California, United States",
				callback: function(results) {
					if ( !results ) return;
					$(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
					$(this).gmap3({
						marker:{
							latLng:results[0].geometry.location,
							options:{

							}
						}
					});
				}
			},
			styledmaptype:{
				id: "arch_style",
				options:{
					name: "Arch Map"
				}, 
				styles: [
				{
					"featureType": "landscape",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
					]
				},

				{
					"featureType": "poi",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 51
					},
					{
						"visibility": "simplified"
					}
					]
				},

				{
					"featureType": "road.highway",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
					]
				},

				{
					"featureType": "road.arterial",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 30
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 40
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "transit",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
					]
				},

				{
					"featureType": "administrative.province",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
					{
						"hue": "#edf0f4"
					},
					{
						"lightness": 17
					},
					{
						"saturation": -97
					}
					]
				}
				]                   
			},
		});
	}
}; 


portfolioIsotope();
googleMap();


$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	$('.scroll').css({'opacity':(( 300-scroll )/300)});

});



$(window).ready(function(){

	$(".scroll i").click(function() {
		$('html,body').animate({
			scrollTop: $(".about").offset().top - 100},
			'slow');
	});

	$('.menu_list').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

	$(".mob_menu_btn i").click(function(){
		$(".menu").slideToggle();
	});
});

var $container = $('body');
$container.imagesLoaded(function(){
	var typed6 = new Typed('.main_content div span', {
		strings: ['Web Developer'],
		typeSpeed: 0,
		backSpeed: 0,
		loop: false
	});
});



$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 300) {
		$(".top_menu").addClass("sticky");
	}else if(scroll <= 300 ){
		$(".top_menu").removeClass("sticky");
	}
});