<?php 

class Streak{

$streak= 0;

function makeStreak(){
    $streak++;
    echo "Your streak is now $streak day(s)!";
}

function breakStreak(){
    if (date('Y-m-d') != date('Y-m-d', strtotime('+1 day'))){
        echo "You have broken your streak.";
    $streak = 0;
    echo "Your streak has been reset to $streak day(s).";
}

function checkStreak($time){
if ($time < 60 ){
    echo "You cannot have a streak if you sprint for less than 60 seconds.";
}else{
    echo "You have a streak";
    makeStreak();
}



}}}

?>