$(document).ready(function(){

	$('.open, #sitios_tab, #share_tab').click(function(){
		$('.content').addClass('animate_open').removeClass('animate_close');

		$('.tabs').animate({
			left:283
		},500);

		$('.content_aside').delay(1000).animate({
			left:0
		},800,function(){
			$('.logo').animate({
				opacity:1,
				top:30
			},1500);
			$('.redes').animate({
				opacity:1,
				bottom:70
			},1500);

			$('.content_sites').delay(1600).fadeIn();
		});

		$('.open').hide();
		$('.close').show();

	});

	$('.close').click(function(){		

		$('.logo').animate({
			opacity:0,
			top:-30
		},1500);

		$('.redes').animate({
			opacity:0,
			bottom:-70
		},1500,function(){
			$('.content_aside').animate({
				left:-283
			},800,function(){
				
				$('.content').removeClass('animate_open').addClass('animate_close');
				$('.tabs').animate({
					left:148
				},500);

			});
		});

		$('.open').show();
		$('.close').hide();

	});

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});