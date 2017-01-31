<?php

    if(isset($_POST['musicname']) && isset($_POST['musicid'])){
        $music = $_POST['musicname'];
        $musicid = $_POST['musicid'];

        include_once 'connection.php';


        $dir = "../music/".$music.".mp3";
        $q = "DELETE FROM `music` WHERE music.id = '$musicid'";
        
        if($res = $conn->query($q)){
            unlink($dir);
            $rows = array('status'=>'1');
        }else{
            $rows = array('status'=>'-1');
        }
        header('Content-type: application/json');
        echo json_encode($rows);
    }

?>
