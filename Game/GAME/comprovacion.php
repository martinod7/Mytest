<?php
	session_start();

	if (isset($_POST['login'])) {
		
		$_SESSION['nick'] = $_REQUEST['username'];
		header('Location:Index.php');

		if($_REQUEST['username'] == "") {
			header('Location:Index.php');
		}
	}
?>