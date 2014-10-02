<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	
	<link rel="stylesheet" href="css/main.css">

	<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300italic,300,400italic,500,500italic,700,700italic,900,900italic|Fjalla+One|Titillium+Web:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	
	<!-- bower:js -->
	<script src="../bower_components/jquery/dist/jquery.js"></script>
	<!-- endbower -->

</head>
<body>
<?php include 'svg_icons.php' ?>
<main class="content">
	
	<div class="content_aside">
		
		<div class="logo">
			
			<svg id="svg_logo" viewBox="0 0 607.298 564.523">
				<use xlink:href="#svg_logo"/>
			</svg>

		</div>
		<div class="redes">
			
			<ul>
				<li class="social_fb">
					<a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
				</li>
				<li class="social_tw">
					<a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
				</li>
				<li class="social_ig">
					<a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
				</li>
			</ul>

		</div>
		<div class="contacto"></div>

	</div>
	
	<div class="content_sites">
		<div id="tab-1" class="tab-content current">

			<h2>Categoria</h2>
			<ul>
				<li>sitio 01</li>
				<li>sitio 02</li>
				<li>sitio 03</li>
				<li>sitio 04</li>
				<li><a href="">link</a></li>
			</ul>
			
		</div>

		<div id="tab-2" class="tab-content">

			<h2>share</h2>

		</div>
	</div>

	<div id="btn_open-close">
		
		<div class="open">
			
			<svg id="svg_logo2" viewBox="0 0 2353.461 468.875">
				<use xlink:href="#svg_logo2"/>
			</svg>

		</div>

		<div class="close">
			<p><span>X</span></p>
		</div>
		
		<ul class="tabs">
			<li id="sitios_tab" class="tab-link current" data-tab="tab-1">SITIOS</li>
			<li id="share_tab" class="tab-link" data-tab="tab-2">SHARE</li>
		</ul>
	</div>

</main>

<script src="js/output.min.js"></script>
</body>
</html>