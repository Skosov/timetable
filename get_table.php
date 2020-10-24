<?php

include 'libs/db_connect.php';


if (!$conn->connect_error)
	{
$group_name = $_GET['group'];
$result = $conn->query( "SELECT schedule.id, days.day, mode.lesson_number, mode.begin, mode.end, disciplines.discipline, lesson.type, subgroup.subgroup, teachers.name, tow.ToW, halls.number from `schedule` join `days` on schedule.day_id = days.id join `disciplines` on schedule.disc_id = disciplines.id join `groups` on schedule.group_id = groups.id join `halls` on schedule.Hall_id = halls.number  join `lesson` on schedule.lesson = lesson.id join `mode` on schedule.mode_id = mode.lesson_number join `subgroup` on schedule.subgroup = subgroup.id join `teachers` on schedule.id_teacher = teachers.id join `tow` on schedule.ToW_id = tow.id where groups.name = $group_name order by days.id, mode.begin");


	 $arr = [];
     $inc = 0;
            while ($row = $result->fetch_assoc()) {
                # code...
                $jsonArrayObject = (array(
                	'id' => $row["id"],
                	'day' => $row["day"],
                	'lesson_number' => $row["lesson_number"],
                	'begin' => $row["begin"],
                	'end' => $row["end"],
                	'discipline' => $row["discipline"],
                	'type' => $row["type"],
                	'name' => $row["name"],
                	'subgroup' => $row["subgroup"],
                	'ToW' => $row["ToW"],
                	'number' => $row["number"]
                ));
                $arr[$inc] = $jsonArrayObject;
                $inc++;
            }
            $json_array = json_encode($arr);
    echo $json_array;
   /* $filename = 'my.json';
    file_put_contents($filename, $json_array);*/



}


else {
    die("Connection failed: " . $conn->connect_error);
	}


	$conn->close();

 ?>