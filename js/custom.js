$(document).ready(function(){	
	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$('body').toggleClass('no_scroll');
		$(this).toggleClass('open_menu');
		$(this).next(".navbar-collapse").toggleClass('navbar_animate');
		$(this).next(".navbar-collapse").removeClass('collapse collapsing show');
	});

	// nav scroll JS
	$(window).on('scroll',function(){
		var top = $(window).scrollTop();
		if(top){
			$('header').addClass('scrollnav');
		}
		else{
			$('header').removeClass('scrollnav');
		}
	});

	// got to page top js
	$(window).on('load scroll',function(){
		var	windowTop = $(window).scrollTop();
		if(windowTop > 600) {
			$('.pagetop').fadeIn();
		} else {
			$('.pagetop').fadeOut();
		}
	});
	$('.pagetop').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 800);
	});
});