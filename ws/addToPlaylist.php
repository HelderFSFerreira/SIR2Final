<?php
    if (isset($_POST['playlistid']) && isset($_POST['musicid'])) {
        $musicid = $_POST['musicid'];
        $playlistid = $_POST['playlistid'];
        include_once 'connection.php';

        $query = "INSERT INTO musicplaylist ('idmusic', 'idplaylist') VALUES ('$musicid','$playlistid');";
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

?>