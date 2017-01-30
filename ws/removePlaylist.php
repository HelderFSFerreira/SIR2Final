<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 30/01/2017
 * Time: 10:23
 */
if (isset($_POST['playlistID'])) {
    $playlistID = $_POST['playlistID'];

    include_once 'connection.php';

    $query = "DELETE FROM playlist WHERE id='$playlistID'";

    if($res = $conn->query($query)){
        $status = array('status'=>'1');
        $arrayFinal = $status;
    }else{
        $status = array('status'=>'-1');
        $arrayFinal = $status;
    }

    echo json_encode($arrayFinal);
    header('Content-type: application/json');
}