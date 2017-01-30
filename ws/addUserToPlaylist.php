<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 30/01/2017
 * Time: 18:41
 */
if (isset($_POST['playlistID']) && isset($_POST['username'])) {

    $idPlaylist = $_POST['playlistID'];
    $userName = $_POST['username'];

    include_once 'connection.php';

    $query = "SELECT id from users WHERE username='$userName'";

    $res = $conn->query($query);

    $rowcont=mysqli_num_rows($res);
    
    if ($rowcont==1) {
        $r = mysqli_fetch_assoc($res);
        $idUser = $r["id"];

        $query = "INSERT INTO `playlistusers` (`idplaylist`, `iduser`) VALUES ('$idPlaylist', '$idUser')";
        $res = $conn->query($query);

        if($res) {
            $finalArray = array('status'=>'1');
        } else {
            $finalArray = array('status'=>'-1');
        }

    } else {
        $finalArray = array('status'=>'-1');
    }
    header('Content-type: application/json');
    echo json_encode($finalArray);
}