<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 28/01/2017
 * Time: 00:22
 */

if (isset($_GET['userId']) AND isset($_GET['namePlaylist'])) {
    $userId = $_GET['userId'];
    $playlistName = $_GET['namePlaylist'];

    include_once 'connection.php';

    $query = "INSERT INTO `playlist`(`owner`, `name`, `datecreation`) VALUES ('$userId','$playlistName',NOW())";
    $res = $conn->query($query);

    if (!$res) {
        $rows = array('status'=>'-1');
    } else {
        $rows = array('status'=>'1');
    }

    echo json_encode($rows);
    header('Content-type: application/json');

}