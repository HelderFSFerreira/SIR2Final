<?php

if (isset($_POST['user']) && $_POST['pass'] && $_POST['name'] && $_POST['email']) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    include_once 'connection.php';

    $query = "INSERT INTO users (username,password,name,email)VALUES ('$user','$pass','$name','$email')";
    $res = $conn->query($query);

    if($res) {
        $rows = array('status'=>'1');
    } else {
        $rows = array('status'=>'-1');
    }

    header('Content-type: application/json');
    echo json_encode($rows);
}