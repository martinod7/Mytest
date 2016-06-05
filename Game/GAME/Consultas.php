<?php


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

$sql = "SELECT Usuario, highscore FROM Usuario ORDER BY highscore DESC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    echo "<table>";
    	echo "<tr>";
            echo "<th>#</th>";
            echo "<th></th>";
    		echo "<th>Usuario</th>";
    		echo "<th>Puntuació</th>";
    	echo "</tr>";
    	echo "</tr>";
    	$cont = 0;
    while($row = $result->fetch_assoc()) {
        $cont ++;
        echo "<tr><td>".$cont."</td><td><img src ='IMG/classprofile.png'></img></td><td>" . $row["Usuario"]. "</td><td>" . $row["highscore"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();

?>