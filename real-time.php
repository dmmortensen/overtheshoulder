<?php

	require_once('scripts/global-head-functions.php');
	
	if(isset($_POST['x'])){
		
		$x = $_POST['x'];
		$y = $_POST['y'];
		/* Connect to to MYSQL database */	
		mysql_select_db("overshoulder", $con);
		
		// mysql_query("CREATE TEMPORARY TABLE testtbl")
		// if(mysql_num_rows(mysql_query("select * from mouseposition"))>5){
			// mysql_query("TRUNCATE TABLE mouseposition");
		// }
		mysql_query("INSERT INTO mouseposition VALUES (NULL, '".$x."', '".$y."', '');");
	
	}
	
	if(isset($_POST['url'])){
		mysql_select_db("overshoulder", $con);
		mysql_query("TRUNCATE TABLE currentsite;");
		$insert = mysql_query("INSERT INTO currentsite VALUES (NULL, '".$_POST['url']."');");
		if(!$insert)
			echo mysql_error();
		echo "INSERT INTO currentsite VALUES (NULL, '".$_POST['url']."');";
	}
	
	require_once('scripts/global-footer-functions.php');