<?php
session_start();

if(isset($_SESSION['userID'])){
    $userID = $_SESSION['userID'];
} else {
    header("location:index.php");
}

session_write_close();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Main Page</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">
        <script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
        <script src="js/login.js"></script>
        <script src="js/bootstrap-confirmation.min.js"></script>
        <script src="js/mediaplayer.js"></script>

        <!-- JQuery UI -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <link src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
        

        <script src="mediaelement-master/src/js/player.js"></script>
        <!--<link rel="stylesheet" href="mediaelement-master/src/css/mediaelementplayer.css" />-->
        <link rel="stylesheet" href="css/styles.css" />
        
        <script src="mediaelement-master/build/mediaelement-and-player.min.js"></script>

    <link rel="stylesheet" href="mediaelement-master/build/mediaelementplayer.min.css" />

       
    </head>
    <body>
        
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <a href="home.php" class="navbar-left"><img src="images/icon.png" style="width:50px; height:50px;"></a><a class="navbar-brand" href="home.php"> NHIT MUSIC </a>
                </div>
                <div class="nav navbar-nav">
                    <ul class="nav navbar-nav">
                        <li class="active"><a class="navbarbrand" href="home.php">Home</a></li>
                        <li><a class="navbarbrand" href="home.php">Musicas</a></li> 
                        <li><a class="navbarbrand" href="home.php">Playlists</a></li>
                        <li><a class="navbarbrand" href="">Perfil</a></li> 
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="navbarbrand" href="logout.php">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        