<?php

// Hardcoded users
$validusers = [
    ["username" => "alysaa1", "name" => "Alyssa Liu", "email"=> "itsalyssa@gmail.com", "password"=> "1234", "streak"=> 2], 
    ["username" => "mirabby", "name" => "Anne Mirabel", "email"=> "itsmira@gmail.com", "password"=> "miraa123", "streak"=> 2]
];

// LOGIN function
function login($validusers, $username, $password){
    foreach($validusers as $user){
        if($user['username'] === $username && $user['password'] === $password){
            // Set cookie
            setcookie("user", $user['username'], time() + 3600, '/');
            setcookie("streak", $user['streak'], time() + 3600, '/');
            header("Location: /Writysprint/dash.php");
            exit();
        }
    }
    // If no match, go back to login
    header("Location: /Writysprint/login.html");
    exit();
}

// SIGNUP function
function signup($validusers, $username, $password, $email, $name){
    foreach($validusers as $user){
        if($user['username'] === $username){
            // Username exists
            header("Location: /Writysprint/login.html");
            exit();
        }
    }
    // Add new user (only in memory)
    $validusers[] = [
        "username" => $username,
        "name" => $name,
        "email" => $email,
        "password" => $password,
        "streak" => 0
    ];

    // Log in the new user
    setcookie("user", $username, time() + 3600, '/');
    setcookie("streak", 0, time() + 3600, '/');
    header("Location: /Writysprint/dash.php");
    exit();
}

// MAIN
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $action = $_POST['action'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $email = $_POST['email'] ?? '';
    $name = $_POST['name'] ?? '';

    if($action === "Login"){
        login($validusers, $username, $password);
    } elseif($action === "Signup"){
        signup($validusers, $username, $password, $email, $name);
    } else {
        header("Location: /Writysprint/login.html");
        exit();
    }
} else {
    header("Location: /Writysprint/login.html");
    exit();
}