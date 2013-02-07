<?php
header('Content-Type: image/gif;');

require_once('global-head-functions.php');

mysql_select_db("overshoulder", $con);

if(isset($_GET['x'])){
	mysql_query('insert into iframe values (NULL, "'.$_GET['x'].'", "'.$_GET['y'].'")');
}

require_once('global-footer-functions.php');?>

