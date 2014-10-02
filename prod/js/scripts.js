$(document).ready(function(){

	$('.open').click(function(){
		$('.content').addClass('animate_open').removeClass('animate_close');
		$('.open').hide();
		$('.close').show();

		$('.content_aside').addClass('animate_aside-view').removeClass('animate_aside-hide');
		$('.logo, .redes').show().addClass('animate_logo');
	});

	$('.close').click(function(){
		$('.content').addClass('animate_close').removeClass('animate_open');
		$('.open').show();
		$('.close').hide();
		
		$('.content_aside').addClass('animate_aside-hide').removeClass('animate_aside-view');
	});
});