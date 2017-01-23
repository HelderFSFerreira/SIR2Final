<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 23/01/2017
 * Time: 21:30
 */

if (isset($_POST['userId'])) {
    $userId = $_POST['userId'];

    include_once 'connection.php';

    $query = "SELECT music.id,music.owner,music.name,music.namedisc,music.dateUpload FROM usersmusic,music WHERE music.id=usersmusic.idmusic AND usersmusic.idusers='$userId'";
    $res = $conn->query($query);

    $rowNumber = mysqli_num_rows($res);

    if ($rowNumber>0) {
        $status = array('status'=>'1');
        while ($r = mysqli_fetch_assoc($res)) {
            $rows[] = $r;
        }
        $arrayFinal = array($status,'playlists'=>$rows);
    } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
    }

    echo json_encode($arrayFinal);
    header('Content-type: application/json');
}