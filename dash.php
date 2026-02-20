<?php
if(!isset($_COOKIE['user'])){
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
    <p>Your streak</p>
    <p class="streak-number"></p>

    <p>Time spent writing today</p>
    <p class="streak-time"></p>
</body>
</html>