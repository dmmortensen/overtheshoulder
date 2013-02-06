<?php

	require_once('global-head-functions.php');
	mysql_select_db("overshoulder", $con);
	
	$returnJSON;
	
	$result = mysql_query("SELECT * FROM mouseposition ORDER BY id DESC LIMIT 1");
	
	while($row=mysql_fetch_array($result)){
		$returnJSON = array('mouse_x' => $row['mouse_x'], 'mouse_y' => $row['mouse_y']);
	}
	
	echo json_encode($returnJSON);
	
	require_once('global-footer-functions.php');