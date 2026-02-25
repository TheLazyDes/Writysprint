<?php 

if (isset($_COOKIE['streak'])) {
            $streak = $_COOKIE['streak'];

            if (isset($_COOKIE['date'])) {
                $currentDay = $_COOKIE['date'];
            } else {
                $currentDay = " ";
            }

            if (isset($_COOKIE['previousStreakDay'])) {
                $previousStreakDay = $_COOKIE['previousStreakDay'];
            } else {
                $previousStreakDay = " ";
            }
        } else {
            header("Location: /Writysprint/login.html");
        }


$dailyTimespent = 0;
$currentDay=" ";


function getStreak($streak){
return $streak;

}


function makeStreak($streak, $previousStreakDay){
    $currentDay= date("Y-m-d");
    if ($currentDay !== $previousStreakDay){
        $streak+=1;
        setcookie("streak", $streak, time() + 3600, '/');
         setcookie("previousStreakDay", $currentDay, time() + 3600, '/');
        $previousStreakDay=$currentDay;
        return $streak;

    }
    else{

         setcookie("streak", $streak, time() + 3600, '/');
        return $streak;
    }
    
        
    

  
     
   
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
       echo makeStreak($streak, $previousStreakDay);
    }
    else if($_POST['action']=== 'getstreak'){
        echo getStreak($streak);
    }

}

?>