<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 21/01/2017
 * Time: 15:30
 */
    if (isset($_POST['userId'])) {
        $userId = $_POST['userId'];

        include_once 'connection.php';

        $query = "SELECT playlist.id,playlist.name,users.username,playlist.datecreation FROM playlist,users WHERE users.id=playlist.owner AND playlist.owner='$userId'";
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
