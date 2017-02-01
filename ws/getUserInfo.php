<?php

    if (isset($_POST['userId'])) {
        $userId = $_POST['userId'];        

        include_once 'connection.php';

        $query = "SELECT `id`, `username`, `password`, `name`, `email`, `image` FROM `users` WHERE users.id = '$userId'";
        $res = $conn->query($query);
        
        $queryinfop = "select count(*) as numplaylists from playlist where playlist.owner = '$userId'";
        $res2 = $conn->query($queryinfop);
        
        $queryinfom = "select count(*) as nummusics from music where music.owner = '$userId'";
        $res3 = $conn->query($queryinfom);

        $rowNumber = mysqli_num_rows($res);
        $rowNumber2 = mysqli_num_rows($res2);
        $rowNumber3 = mysqli_num_rows($res3);

        if ($rowNumber>0) {
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }
            $arrayFinal = array('status'=>'1','playlists'=>$rows);
        } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }
        
        if ($rowNumber2>0) {
            while ($r = mysqli_fetch_assoc($res2)) {
                $rows[] = $r;
            }
            $arrayFinal = array('status'=>'1','playlists'=>$rows);
        } else {
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }
        
        if ($rowNumber3>0) {
            while ($r = mysqli_fetch_assoc($res3)) {
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