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

        $query = "SELECT playlist.id, playlist.name, users.username, playlist.datecreation FROM playlist,users WHERE users.id=playlist.owner AND playlist.owner='$userId'";
        $res = $conn->query($query);
        $query2 = "SELECT playlist.id, playlist.name, users.username, playlist.owner, playlist.datecreation  FROM playlist,playlistusers,users WHERE playlist.id=playlistusers.idplaylist 
AND users.id=playlist.owner
AND playlistusers.iduser = '$userId'";
        $res2 = $conn->query($query2);

        $rowNumber = mysqli_num_rows($res);
        $rowNumber2 = mysqli_num_rows($res2);

        if ($rowNumber>0) {
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }
            if($rowNumber2>0){
                while($r2 = mysqli_fetch_assoc($res2)){
                    $rows[] = $r2;
                }
            }
            $arrayFinal = array('status'=>'1','playlists'=>$rows);
        } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }

        echo json_encode($arrayFinal);
        header('Content-type: application/json');
    }
