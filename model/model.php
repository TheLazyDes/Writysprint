<?php 


function makeStreak(){
        if (isset($_COOKIE['streak'])) {
            $streak = $_COOKIE['streak'];
        } else {
            $streak = 0;
        }


  setcookie("streak", $streak, time() + 3600, '/');
     
   return ++$streak;
}

/*function breakStreak(){
    if (date('Y-m-d') != date('Y-m-d', strtotime('+1 day'))){
        echo "You have broken your streak.";
    $streak = 0;
    echo "Your streak has been reset to $streak day(s).";
}
*/





if (isset($_POST['action'])) {

    if ($_POST['action'] === "makestreak") {
       echo makeStreak();
    }

}

?>