<?php

	$con = mysql_connect("localhost","dmort","qwerty");
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}