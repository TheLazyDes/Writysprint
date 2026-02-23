<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

if(!isset($_COOKIE['user'])){
    header("Location: /Writysprint/login.html");
    exit();
}
if(!isset($_COOKIE['streak'])){
    header("Location: /Writysprint/login.html");
    exit();
}



echo "<h2>WELCOME TO THE DASHBOARD!</h2>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <h3>Your streak</h3>
    <p id="streak-number" class="streak-number"></p></div>

    <div><h3>Time spent writing today</h3>
    <p class='streak-number'> </p>; 
   </div>



    <button > <a href="sprint.html">Start Sprint</a></button>
</body>

<script type="module" src="./subscripts/dash.js"></script>
</html>