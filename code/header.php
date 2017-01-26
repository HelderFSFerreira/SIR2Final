<?php
session_start();

if(!isset($_SESSION['user'])){
    //header("location:index.html");
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
        <script src="js/tableUsers.js"></script>
        <script src="js/login.js"></script>
        <script src="js/tablePlaylists.js"></script>
        
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
        <script src="mediaelement-master/src/js/player.js"></script>
        <link rel="stylesheet" href="mediaelement-master/src/css/mediaelementplayer.css" />
        <link rel="stylesheet" href="css/styles.css" />
        
        <script>
            $(document).ready(function(){
                $('audio,video').mediaelementplayer();
            });
        </script>
        
        <style>
            body{
                background-image: url('images/background.jpg');
                background-color: black;
                background-repeat: no-repeat;
                background-position: center;
                font-family: arial, sans-serif;
            }
        </style>
    </head>
    <body>
        
        <div class="container">
            <nav class="navbar navbar-light navbarcolor">
                <div class="container-fuild">
                    <a class="navbar-brand navbarbrand" href="#">Navbar</a>      
                </div>
                <div class="nav navbar-nav">
                    <li class="active"><a class="navbarbrand" href="#">Home</a></li>
                    <li><a class="navbarbrand" href="#">Page 1</a></li>
                    <li><a class="navbarbrand" href="#">Page 2</a></li>
                    <li><a class="navbarbrand" href="#">Page 3</a></li>   
                </div>
            </nav>
        </div>
        