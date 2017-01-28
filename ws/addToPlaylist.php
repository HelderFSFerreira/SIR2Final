<?php
    if (isset($_POST['playlistid'])) {
        $userId = $_POST['userId'];        

        include_once 'connection.php';

        $query = "SELECT music.id,music.name,music.namedisc,users.username,music.dateupload FROM music,users WHERE users.id=music.owner AND music.owner='$userId'";
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