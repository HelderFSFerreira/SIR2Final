<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 30/01/2017
 * Time: 15:23
 */

include_once 'connection.php';

if (isset($_POST['username'])) {
    $userName = $_POST['username'];

    $query = "SELECT username from users WHERE username LIKE '$userName%'";
    $res = $conn->query($query);
    var_dump($res);

    $rowNumber = mysqli_num_rows($res);

    if ($rowNumber>0) {
        while ($r = mysqli_fetch_assoc($res)) {
            $rows[] = $r;
        }
        $arrayFinal = array('status'=>'1','users'=>$rows);
    } else {
        $status = array('status'=>'-1');
        $arrayFinal = $status;
    }
    header('Content-type: application/json');
    echo json_encode($arrayFinal);

}