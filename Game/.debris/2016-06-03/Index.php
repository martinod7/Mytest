<?php 
	ob_start();
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Run Jump Demo</title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css" media="screen" title="no title" charset="utf-8">
	<link rel="stylesheet" href="CSS/bootstrap.css" media="screen" title="no title" charset="utf-8">
	<script src="JS/phaser.js"></script>
	<script src="src/Boot.js"></script>
	<script src="src/Preloader.js"></script>
	<script src="src/StartMenu.js"></script>
	<script src="src/Game.js"></script>
	<script src="src/Game_Over.js"></script>
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="JS/animaciones.js"></script>
	<script src="JS/Index.js"></script>	
</head>
<body>
	<header>
		<div class="wrapper">
			<nav>
				<ul>
					<li>
						<?php
							if(!empty($_SESSION["nick"])){
								echo "<a href='cerrarsesion.php' title = 'Tanca sessio'><h1 class='Puta'>Benvingut cadet <i><i></h1></a>"; //.$_SESSION["nick"]. 
								?>
									<script>
										function myFunction() {
    										setTimeout(function(){$(".primary-content").load("PlayGame.php"); }, 250); // Una vez registrado, carga del archivo

										}
										myFunction();
									</script>
						<?php	}
							//echo "<a href='Consultas.php' title = 'Consulta'> Consulta </a>"
						?>	
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div class="primary-content">
		<div id="logo"> 
  <h1><i>REGISTRE</i></h1>
</div> 
<!-- Formulario de Registro-->
<section class="stark-login">
  <form action=" comprovacion.php" method="post">	
    <div id="fade-box">
      <input type="text" name="username" id="username" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
         <button  type = "submit" name = "login">Jugar</button> 
    </div>
  </form>
</section>   
	<footer>
		<div class="wrapper">
			<div id="footer-info">
				
			</div>	
	</footer>
</body>
</html>