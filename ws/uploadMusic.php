<?php
if(!empty($_FILES)){
    $i = 0;
    include_once 'connection.php';
    $user = $_POST['userlist'];
    foreach ($_FILES["music"]["error"] as $key => $error) {
        $namemusic = pathinfo($_FILES['music']['name'][$i], PATHINFO_FILENAME);
        //guardar a musica na base de dados
        $destino = "../music/" . $_FILES["music"]["name"][$i];
        if( move_uploaded_file( $_FILES["music"]["tmp_name"][$i], $destino )){
            $q = "INSERT INTO music (owner,name,namedisc,dateUpload)VALUES ('$user','$namemusic','$namemusic',NOW())";
            $conn->query($q); 
        }
        $i++;
    }
        header('Location: ../code/home.php');
    }else{
       header('Location: ../code/home.php');
    }
?>