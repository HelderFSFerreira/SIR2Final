<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 21/01/2017
 * Time: 15:30
 */
    if (isset($_GET['userId'])) {
        $userId = $_GET['userId'];

        include_once 'connection.php';

        $query = "SELECT music.id,music.name,music.namedisc,users.username FROM music,users WHERE users.id=music.owner AND music.owner='$userId'";
        $res = $conn->query($query);

        $rowNumber = mysqli_num_rows($res);

        if ($rowNumber>0) {
            $status = array('status'=>'1');
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }
            $arrayFinal = array($status,'musics'=>$rows);
        } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }

        echo json_encode($arrayFinal);
        header('Content-type: application/json');
    }