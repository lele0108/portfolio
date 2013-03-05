<html>
  <head>
    <title>Jimmy Liu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="../css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300,700,800' rel='stylesheet' type='text/css'>
    <link href="//get.pictos.cc/fonts/3937/1" rel="stylesheet" type="text/css">
    <link href="../css/main.css" rel="stylesheet" media="screen">
    
  </head>
  <body>
  	<?php 
    
    $rand = array('4', '5', '5', '6', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'e');
    $color = '#'.$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)].$rand[rand(0,15)];
    $hi = array(Hi,Hola,Terve,Bonjour,Shalom,Sveikas,Talofa,Ohai,Konnichiwa,Tungjatjeta);
    
  ?>
  <body style="background: <?php echo $color; ?>;">
  	<div class="row-fluid">
  		<div class="span7 offset3">
	  		<h1><b>Name of Blog Post</b></h1>
	  		<h3>March 3, 2013</h3>
	  		<p>I think one of the things that really separates us from the higher primates is that we're tool builders. I read a study that measured 
	  			the efficiency of locomotion for various species on the planet. The Condor used the least amount of energy to move a kilometer. And humans
	  			 came in with a rather unimpressive showing about a third of the way down the list. It was not too proud of a showing for the crown of 
	  			 creation.</p>

	  		<p>I think one of the things that really separates us from the higher primates is that we're tool builders. I read a study that measured 
	  			the efficiency of locomotion for various species on the planet. The Condor used the least amount of energy to move a kilometer. And humans
	  			 came in with a rather unimpressive showing about a third of the way down the list. It was not too proud of a showing for the crown of 
	  			 creation.</p>
	  		<p><a href="#">&#8594; Next Article </a></p>
	  		<p><a href="../">Return Home</a></p>
	  		<br><br><br>
	  		
  		</div>
  	
  	</div> 
   	<script src="../js/bootstrap.min.js"></script>
  </body>

</html>