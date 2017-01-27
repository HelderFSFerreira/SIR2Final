<?php

    if (isset($_POST['playlistID'])) {
        $playlistId = $_POST['playlistID'];
        //$playlistId = 1;

        include_once 'connection.php';

        $query = "Select music.name, music.namedisc, playlist.name as playlistname, users.name as dono, music.owner, music.id from users, usersmusic, music, musicplaylist, playlist where music.id = musicplaylist.idmusic and playlist.id = musicplaylist.idplaylist and users.id = usersmusic.idusers and music.id = usersmusic.idmusic and playlist.id = '$playlistId'";
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