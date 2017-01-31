<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 31/01/2017
 * Time: 14:29
 */
if (isset($_POST['playlistID'])) {
    $playlistID = $_POST['playlistID'];

    include_once 'connection.php';

    $query = "SELECT id,username,name FROM users,playlistusers WHERE playlistusers.iduser=users.id AND playlistusers.idplaylist='$playlistID'";
    $res = $conn->query($query);

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

    echo json_encode($arrayFinal);
    header('Content-type: application/json');

}