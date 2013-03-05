<html>
  <head>
    <title>Jimmy Liu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300,700,800' rel='stylesheet' type='text/css'>
    <link href="//get.pictos.cc/fonts/3937/1" rel="stylesheet" type="text/css">
    <link href="css/main.css" rel="stylesheet" media="screen">
    
  </head>
  <body>
  	<?php 
    
    $rand = array('4', '5', '5', '6', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'e');
    $color = '#'.$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)];
    $hi = array(Hi,Hola,Terve,Bonjour,Shalom,Sveikas,Talofa,Ohai,Konnichiwa,Tungjatjeta);
    
  ?>
  <body style="background: <?php echo $color; ?>;">
  	<div class="row-fluid">
  		<div class="span9 offset3">
	  		<h1><?php echo $hi[array_rand($hi)]; ?>, my name is <b>Jimmy Liu</b></h1>
	  		<p>I create beautiful and minimalistic designs</p>
	  		<p>I believe simplicity is the ultimate sophistication</p>
	  		<p>My favorite video games are Fez, Super Meat Boy, and Battlefield 3</p>
	  		<p>I'm currently working on a server project called <a href="http://vortexunit.com">VortexUnit</a></p>
	  		<p>Please feel free to <a href="mailto:sicong.liu98@gmail.com">say hi</a></p>
	  		<p>Find me on <a href="http://dribbble.com/jimmyliu">Dribbble</a>, <a href="http://twitter.com/jimmyliu">Twitter</a>, <a href="#">App.net</a> or <a href="http://				github.com/lele0108">GitHub</a></p>
	  		<br><br>
        <p>You should check out my <a href="blog">blog</a></p>
	  		
  		</div>
  	
  	</div> 
   	<script src="js/bootstrap.min.js"></script>
  </body>

</html>