<!DOCTYPE html>
<html>
<head>
<!-- Carga de CSS, JS, Librerias -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css" media="screen" title="no title" charset="utf-8">
	<link rel="stylesheet" href="CSS/bootstrap.css" media="screen" title="no title" charset="utf-8">
	<script src="JS/phaser.js"></script>
	<script src="src/Boot.js"></script>
	<script src="src/Preloader.js"></script>
	<script src="src/StartMenu.js"></script>
	<script src="src/Opcions.js"></script>
	<script src="src/Credits.js"></script>
	<script src="src/Game.js"></script>
	<script src="src/Game_Over.js"></script>
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	
</head>
<body>
	<div id="padre">
	<div id="game_div"> 
		<script>
		//Creación del objeto juego y carga de los estados
		// Cada carga hace referencia a un js 
			(function() {
				var game = new Phaser.Game(800, 500, Phaser.AUTO, 'game_div'); 
				game.state.add('Boot', Runjump.Boot);
				game.state.add('Preloader', Runjump.Preloader);
				game.state.add('StartMenu', Runjump.StartMenu);
				game.state.add('Opcions', Runjump.Opcions);
				game.state.add('Credits', Runjump.Credits);
				game.state.add('Game', Runjump.Game);
				game.state.add('Game_Over', Runjump.Game_Over);
				game.state.start('Boot');
			})();
		</script>
	</div>
	<!-- Refresh del classificatorio cada vez que termina la partida-->
	<div id ="LeaderBoard">
		<script>
		$(document).ready(function(){
			setInterval(function(){
				$("#LeaderBoard").load("Consultas.php");

			},1000);
		});
		</script>
	
	</div>
	</div>
</body>
</html>