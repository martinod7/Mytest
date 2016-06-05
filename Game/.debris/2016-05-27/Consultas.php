<?php

function leaderBoard(){
	$servername = "localhost";
$username = "root";
$password = "pg16";
$dbname = "Runjump";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Usuario, highscore FROM Usuario";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    echo "<table border=1>";
    	echo "<tr>";
    		echo "<th>Usuario</th>";
    		echo "<th>Puntuació</th>";
    	echo "</tr>";
    	echo "</tr>";
    	
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Usuario"]. "</td><td>" . $row["highscore"]. "</td></tr> ";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
}
?>