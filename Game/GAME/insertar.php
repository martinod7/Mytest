<?php

session_start();

echo $_GET['highscore'];
$usuario = $_SESSION["nick"];
$mysql = new mysqli("localhost","root","pg16","Runjump");
if($mysql->connect_errno){
	echo "string";
}
else{
	echo "ok";
}
$mysql->query("INSERT INTO Usuario (Usuario,highscore) VALUES ('".$usuario."',".$_GET['highscore'].") ON DUPLICATE KEY UPDATE highscore ='".$_GET['highscore']."'");

$retornar = $mysql -> query("SELECT * FROM Usuario WHERE Usuario = 'JODER'");


//echo json_encode($retornar);


?>