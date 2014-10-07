$(document).ready(function(){

	$('.open_sli, #sitios_tab, #share_tab').on('click',function(){

		$('.contentbarra').addClass('animate_open').removeClass('animate_close'); 	//add anima open barra

		$('.select_category').delay(1000).animate({
			marginLeft:283															//slide tabs to open
		},800);

		$('.content_asidebarra').delay(1000).animate({								//anima sontent aside intro
			left:0
		},800,function(){

			$('.logobarra').animate({												//anima logo intro
				opacity:1,
				top:30
			},1500);

			$('.redesbarra').animate({												//anima logo intro
				opacity:1,
				bottom:70
			},1500);

			$('.content_sitesbarra').delay(1600).fadeIn();							//anima sites intro
		});

		$('.openbarra, .close_slide').fadeOut();														//hide open button
		$('.close_main').fadeIn();														//show close intro

	});

	$('.close_main').on('click',function(){		

		$('.logobarra').animate({
			opacity:0,
			top:-30
		},1000);

		$('.redesbarra').animate({
			opacity:0,
			bottom:-70
		},1000,function(){
			$('.content_asidebarra').animate({
				left:-283
			},800,function(){
				
				$('.contentbarra').removeClass('animate_open').addClass('animate_close');

			});
			$('.select_category').animate({
				marginLeft:0
			},800);
		});

		$('.content_sitesbarra').delay(1600).fadeOut();

		$('.openbarra, .close_slide').delay(1500).fadeIn();
		$('.close_main').fadeOut();

	});

	$('.close_slide p.slider').on('click', function(){

		$('.open_sli').fadeOut();
		$('.open_sli2').fadeIn();

		$('.contentbarra').addClass('animate_slider').removeClass('animate_slidel');

		$('.close_slide p.slider').delay(1000).fadeOut();
		$('.close_slide p.slidel').delay(1000).fadeIn();
	});

	$('.close_slide p.slidel, .open_sli2').on('click', function(){

		$('.contentbarra').addClass('animate_slidel').removeClass('animate_slider');

		$('.close_slide p.slider').delay(1000).fadeIn();
		$('.close_slide p.slidel').delay(1000).fadeOut(function(){
			$('.contentbarra').removeClass('animate_slidel animate_close');
			$('.open_sli2').hide();
			$('.open_sli').show();
		});
	});

	//tabs
	$('ul.pestanas li').on('click',function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.pestanas li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});