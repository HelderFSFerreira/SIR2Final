<?php

if (isset($_POST['user']) && $_POST['pass'] && $_POST['name']) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $name = $_POST['name'];

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