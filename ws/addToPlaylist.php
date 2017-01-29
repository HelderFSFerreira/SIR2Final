<?php
        
if (isset($_POST['playlistid']) AND isset($_POST['musicid'])) {
    $playlistid = $_POST['playlistid'];
    $musicid = $_POST['musicid'];

    include_once 'connection.php';

    $query = "INSERT INTO `musicplaylist`(`idmusic`, `idplaylist`) VALUES ('$musicid','$playlistid')";
    $res = $conn->query($query);

    if (!$res) {
        $rows = array('status'=>'-1');
    } else {
        $rows = array('status'=>'1');
    }

    header('Content-type: application/json');
    echo json_encode($rows);
}

?>