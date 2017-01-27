<?php

if(isset($_GET['musicID'])){

    include_once 'connection.php';

    $musicID = $_GET['musicID'];
    $q = "select namedisc from music where music.id='$musicID'";
    $res = $conn->query($q);

    $r = mysqli_fetch_assoc($res);

    $namediscmusic = $r['namedisc'];

    $file = "../music/".$namediscmusic.".mp3";

    $mime_type = "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3";


    if(file_exists($file)){
        header('Content-type: {$mime_type}');
        header('Content-length: ' . filesize($file));
        //    header('Content-Disposition: filename="' . $filename);
        header('X-Pad: avoid browser bug');
        header('Cache-Control: no-cache');
        readfile($file);
    }else{
        echo "nomusc";
    }
    }