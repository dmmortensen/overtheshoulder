<?php

	require_once('scripts/global-head-functions.php');
	
	if(isset($_POST['x'])){
		
		$x = $_POST['x'];
		$y = $_POST['y'];
	/* Connect to to MYSQL database */	
	mysql_select_db("overshoulder", $con);
	
	mysql_query("INSERT INTO mouseposition VALUES (NULL, '".$x."', '".$y."', '');");
	
	}
	
	require_once('scripts/global-footer-functions.php');