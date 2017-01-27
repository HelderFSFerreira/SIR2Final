<?php

    if (isset($_POST['playlistID'])) {
        $playlistId = $_POST['playlistID'];
        //$playlistId = 1;

        include_once 'connection.php';

        $query = "Select music.name, music.namedisc, music.owner, music.id ,playlist.name as playlistname, users.name as dono 
from music, musicplaylist, playlist, users 
WHERE music.id = musicplaylist.idmusic 
AND musicplaylist.idplaylist = playlist.id
AND music.owner = users.id
and playlist.id = '$playlistId'";
        $res = $conn->query($query);

        $rowNumber = mysqli_num_rows($res);

        if ($rowNumber>0) {
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }
            $arrayFinal = array('status'=>'1','playlists'=>$rows);
        } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }

        echo json_encode($arrayFinal);
        header('Content-type: application/json');
    }