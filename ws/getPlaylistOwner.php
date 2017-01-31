<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 31/01/2017
 * Time: 17:31
 */
if (isset($_GET['playlistID'])) {
    $playlistID = $_GET['playlistID'];

    include_once 'connection.php';

    $query = "SELECT owner FROM `playlist` WHERE id='$playlistID'";
    $res = $conn->query($query);

    $rowcont=mysqli_num_rows($res);

    if ($rowcont==1) {
        $r = mysqli_fetch_assoc($res);
        $idOwner = $r['owner'];
        $rows = array('owner'=>$idOwner);
    } else {
        $rows = array('owner'=>'-1');
    }
    header('Content-type: application/json');
    echo json_encode($rows);
}