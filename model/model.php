<?php 
        if (!isset($_COOKIE['streak'])) {
    $streak = 0;
} else {
    $streak = (int)$_COOKIE['streak'];
}

$previousStreakDay = $_COOKIE['previousStreakDay'] ?? null;
$currentDay = date("Y-m-d");



$dailyTimespent = 0;



function getStreak($streak){
return $streak;

}


function makeStreak($streak, $previousStreakDay){
    $currentDay = date("Y-m-d");

    if ($previousStreakDay === date('Y-m-d', strtotime('-1 day'))){
        $streak += 1;
        setcookie("streak", $streak, time() + 3600, '/');
        setcookie("previousStreakDay", $currentDay, time() + 3600, '/');
        $previousStreakDay=$currentDay;
        return $streak;
    } else if($previousStreakDay === $currentDay) {

}else{
    $streak=0;
}
 setcookie("streak", $streak, time() + 3600, '/');
    setcookie("previousStreakDay", $currentDay, time() + 3600, '/');

return  $streak; 
}






if (isset($_POST['action'])) {

    if ($_POST['action'] === "makestreak") {
       echo makeStreak($streak, $previousStreakDay);
    }
    else if($_POST['action']=== 'getstreak'){
        echo getStreak($streak);
    }

}

?>