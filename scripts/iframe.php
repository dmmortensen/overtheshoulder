<?php
header('Content-Type: image/gif;');

echo readfile("../shoulder.gif");

require_once('global-head-functions.php');

mysql_select_db("overshoulder", $con);

if(isset($_GET['x'])){
	mysql_query('insert into mouseposition values (NULL, "'.$_GET['x'].'", "'.$_GET['y'].'", "0")');
}

if(isset($_GET['u'])){
	mysql_select_db("overshoulder", $con);
	mysql_query("TRUNCATE TABLE currentsite;");
	mysql_query("INSERT INTO currentsite VALUES (NULL, '".$_GET['u']."');");
}


require_once('global-footer-functions.php');?>

