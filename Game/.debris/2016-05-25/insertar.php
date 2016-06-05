<?php

session_start();

echo $_GET['highscore'];

$mysql = new mysqli("localhost","root","pg16","Runjump");
if($mysql->connect_errno){
	echo "string";
}
else{
	echo "ok";
}
$mysql->query("INSERT INTO Usuario VALUES ('ppo',".$_GET['highscore'].")");

?>