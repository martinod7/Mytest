<?php
session_start();
mysql_connect("localhost","root","pg16");
mysql_select_db("Runjump");

$query = mysql_query("INSERT INTO Runjump (Usuario) VALUES ("  + $_GET['highscore']+");")

?>