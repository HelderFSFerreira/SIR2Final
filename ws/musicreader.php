<?php


if(isset($_GET['music'])){
    $dir = dirname($_SERVER['DOCUMENT_ROOT'])."/protected_content";
    
    $musica = $_GET['music'];
    
    $file = $musica.".mp3";
    
    $extension = "mp3";
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



?>