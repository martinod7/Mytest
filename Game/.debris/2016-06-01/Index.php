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
	<script src="JS/Index.js"></script>-->
	<!-- <script src="Prueba.php"></script> -->
	
</head>
<body>
	<header>
		<div class="wrapper">
			<h1>The Pit<span class="color">.</span></h1>
			<nav>
				<ul>
					<li>
						<?php
							if(!empty($_SESSION["nick"])){
								echo $_SESSION["nick"]. "<a href='cerrarsesion.php' title = 'Tanca sessio'> Tanca sessió </a>";
								?>
									<script>
										function myFunction() {
    										setTimeout(function(){$(".primary-content").load("PlayGame.php"); }, 250);

										}
										myFunction();
									</script>
						<?php	}
							echo "<a href='Consultas.php' title = 'Consulta'> Consulta </a>"
						?>	
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div class="primary-content">
	<div class="card">
            <div class="photo"></div>
            <div class="banner"></div>
            <button class="contact" id="main-button">click to get in touch</button>

          <form class="email-form" action = " comprovacion.php" method = "post">
                <input id="name" type="text" placeholder="name" name = "username" required>
                <input id="email" type="text" placeholder="email">
                <button class="contact" type = "submit" name = "login">Inicia sessió</button>
          </form>
  </div>
		<!--<h2>Enter Username and Password</h2>
		
          <form class = "form-signin" role = "form" action = " comprovacion.php" method = "post">
            <h4 class = "form-signin-heading"></h4>
            <input type = "text" class = "form-control" name = "username" required></br>
            <input type = "password" class = "form-control" name = "password" required>
            <button class = "btn btn-lg btn-primary btn-block" type = "submit" name = "login">Login</button>
         </form>
		</div>-->
	<footer>
		<div class="wrapper">
			<div id="footer-info">
				
			</div>	
	</footer>
</body>
</html>