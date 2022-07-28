
<?php $baza = mysqli_connect("localhost", "newuser", "password", "yangi15");
$tables =$baza->query( "SHOW TABLES IN yangi15");
$db="yangi15";