<?php
require_once('global-head-functions.php');

mysql_select_db("overshoulder", $con);

if(isset($_POST['url'])){
	$url = $_POST['url'];
	
	$getUrl = mysql_query("select * from currentsite limit 1;");
	
	while($row = mysql_fetch_array($getUrl)){
		if($url != $row['url'])
			echo readfile($row['url']);
		else {
			echo FALSE;
		}
	}
}

require_once('global-footer-functions.php');
