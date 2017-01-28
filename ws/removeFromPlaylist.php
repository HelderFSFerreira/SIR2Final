<?php
    if (isset($_POST['playlistID']) && isset($_POST['musicaID'])) {
        $playlist = $_POST['playlistID'];     
        $music = $_POST['musicaID'];

        include_once 'connection.php';

        $query = "DELETE FROM musicplaylist WHERE musicplaylist.idplaylist = '$playlist' AND musicplaylist.idmusic = '$music';";
        
        if($res = $conn->query($query)){
            $status = array('status'=>'1');
            $arrayFinal = $status;    
        }else{
            $status = array('status'=>'-1');
            $arrayFinal = $status;
        }
        
        echo json_encode($arrayFinal);
        header('Content-type: application/json');
    }

?>