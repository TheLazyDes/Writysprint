<?php 

if (isset($_COOKIE['streak'])) {
            $streak = $_COOKIE['streak'];
        } else {
            $streak = 0;
        }

$timespent = 0;


function getStreak($streak){
return $streak;

}


function makeStreak($streak){
    
        
    $streak+=1;
    setcookie("streak", $streak, time() + 3600, '/');

  return $streak;
     
   
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
       echo makeStreak($streak);
    }
    else if($_POST['action']=== 'getstreak'){
        echo getStreak($streak);
    }

}

?>