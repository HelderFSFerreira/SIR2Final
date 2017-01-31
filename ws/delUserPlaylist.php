<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 31/01/2017
 * Time: 15:45
 */
if (isset($_POST['playlistID']) && isset($_POST['userID'])) {
    $playlistID = $_POST['playlistID'];
    $userID = $_POST['userID'];

    include_once 'connection.php';

    $query = "DELETE FROM playlistusers where idplaylist='$playlistID' AND iduser='$userID'";
    $res = $conn->query($query);

    if($res) {
        $rows = array('status'=>'1');
    } else {
        $rows = array('status'=>'-1');
    }
    header('Content-type: application/json');
    echo json_encode($rows);
}