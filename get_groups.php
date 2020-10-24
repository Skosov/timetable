<?php
	include 'libs/db_connect.php';
	if (!$conn->connect_error)
	{
	$result = $conn->query("SELECT * FROM `groups`;");

	$arr = [];
    $inc = 0;
            while ($row = $result->fetch_assoc()) {
                # code...
                $jsonArrayObject = (array('id' => $row["id"], 'name' => $row["name"], 'Specialty' => $row["Specialty"]));
                $arr[$inc] = $jsonArrayObject;
                $inc++;
            }
            $json_array = json_encode($arr);
            echo $json_array;
	}
	else {
    die("Connection failed: " . $conn->connect_error);
	}


	$conn->close();



