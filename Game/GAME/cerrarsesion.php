<?php
		header("Location: Index.php");
	session_start();
	unset($_SESSION["nick"]);
	session_destroy();

	exit;
?>
