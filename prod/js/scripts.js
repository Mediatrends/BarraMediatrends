$(document).ready(function(){

	$('.open, #sitios_tab, #share_tab').click(function(){

		$('.content').addClass('animate_open').removeClass('animate_close'); 	//add anima open barra

		$('.select_category').delay(1000).animate({
			marginLeft:283															//slide tabs to open
		},800);

		$('.content_aside').delay(1000).animate({								//anima sontent aside intro
			left:0
		},800,function(){

			$('.logo').animate({												//anima logo intro
				opacity:1,
				top:30
			},1500);

			$('.redes').animate({												//anima logo intro
				opacity:1,
				bottom:70
			},1500);

			$('.content_sites').delay(1600).fadeIn();							//anima sites intro
		});

		$('.open').fadeOut();														//hide open button
		$('.close_main').fadeIn();														//show close intro

	});

	$('.close_main').click(function(){		

		$('.logo').animate({
			opacity:0,
			top:-30
		},1000);

		$('.redes').animate({
			opacity:0,
			bottom:-70
		},1000,function(){
			$('.content_aside').animate({
				left:-283
			},800,function(){
				
				$('.content').removeClass('animate_open').addClass('animate_close');

			});
			$('.select_category').animate({
				marginLeft:0
			},800);
		});

		$('.content_sites').delay(1600).fadeOut();

		$('.open').delay(1500).fadeIn();
		$('.close_main').fadeOut();

	});

	//tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	var vhref = $(location).attr('href');
	var vTitle = $(this).attr('title');

	//$('#spnTitle').text('<b>' + vTitle + '</b>');
	//$('#spnURL').text('<b>' + vhref + '</b>');
});