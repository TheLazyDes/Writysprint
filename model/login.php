<?php

$validusers=[["username" => "alysaa1", "name" =>"Alyssa Liu", "email"=> "itsalyssa@gmail.com", "password"=> "itslyssa", "streak"=> 2], 
            ["username"=>"mirabby", "name"=>"Anne Mirabel", "email"=> "itsmira@gmail.com", "password"=> "miraa123", "streak"=> 2]

];

function login($validusers, $inputusername, $inputpassword){
foreach ($validusers as $users){
    if ( $users["username"]==$inputusername&& $users["password"]){
        echo "You have successfully logged in <br>  <br>";
        setcookie("user", $users["username"], time() + 3600, '/');
        echo "cookie has been set";
    }
}
}

function signup( $validusers, $inputpassword, $inputusername, $inputemail, $inputname){
   foreach ($validusers as $users){
    if ( $users["username"]==$inputusername){
        echo "This account already exists";
        header("location: ../login.html");
        exit();
    }
    }
    $validusers[]= ["username"=> $inputusername, "name"=> $inputname, "email"=> $inputemail, "password" => $inputpassword, "streak" => 0];
    
    return $validusers;
    
    
    }



if($_SERVER["REQUEST_METHOD"]=="POST"){





$inputusername= $_POST["username"];
$inputpassword= $_POST["password"];
$inputemail= " ";
$inputname= " ";
$action=$_POST["action"];


if ($action=="Login"){
login($validusers, $inputusername, $inputpassword);
echo "Login complete";

}elseif ($action== "Signup"){
    $inputemail= $_POST["email"];
    $inputname= $_POST["name"];
    $validusers = signup($validusers, $inputpassword, $inputusername, $inputemail, $inputname);
    echo "SignUp complete <br>";
    echo "New username: " . $validusers[count($validusers)-1]["username"];
}else{
    header("Location: ../login.html");
    exit();
}





















}
else{
header("Location: ../login.html");
}


?>