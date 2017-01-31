<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 28/01/2017
 * Time: 00:22
 */

if (isset($_POST['userId']) AND isset($_POST['namePlaylist'])) {
    $userId = $_POST['userId'];
    $playlistName = $_POST['namePlaylist'];

    include_once 'connection.php';

    $query = "INSERT INTO `playlist`(`owner`, `name`, `datecreation`) VALUES ('$userId','$playlistName',NOW())";
    $res = $conn->query($query);
    

    if (!$res) {
        $rows = array('status'=>'-1');
    } else {
        $rows = array('status'=>'1');
    }

    header('Content-type: application/json');
    echo json_encode($rows);
}