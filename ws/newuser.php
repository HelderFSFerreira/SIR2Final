<?php

if (isset($_GET['user']) && $_GET['pass'] && $_GET['name']) {
    $user = $_GET['user'];
    $pass = $_GET['pass'];
    $name = $_GET['name'];

    include_once 'connection.php';

    $query = "INSERT INTO users1 (username,password,name)VALUES ('$user','$pass','$name')";
    $res = $conn->query($query);

    if($res) {
        $rows = array('status'=>'1');
    } else {
        $rows = array('status'=>'-1');
    }

    header('Content-type: application/json');
    var_dump($rows);
}