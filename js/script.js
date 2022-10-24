$(document).ready(function () {
	$('.media_menu').click(function () {
		$(this).toggleClass('active');
		$('.header-list  ul').toggleClass('active');
		$('.header-list ul').css('transiton', 'all 0.5s');
		if ($('.header-list ul').hasClass('active')) {
			$("body").css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'auto');

		}


	});
})