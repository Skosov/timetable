<!DOCTYPE html>
<html lang="rus">
<head>
	<meta charset="UTF-8">
	<title>Расписание</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Расписание студента</h1>
		<div>
			<p>Выберите группу: </p>
			<select name="group_select" id="group_select" onchange="GetTable(this[this.selectedIndex].innerText)"></select>
		</div>
	</header>
	<div class="content">
		<div class="container">
			<div id="schedule">		
			</div>
		</div>
	</div>
<script src = "get_table.js"></script>
</body>
</html>