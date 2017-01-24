<?php
 $userId = $_GET['userId'];
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
        <script src="js/tablePlaylists.js"></script>
        
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
        <script src="mediaelement-master/src/js/player.js"></script>
        <link rel="stylesheet" href="mediaelement-master/src/css/mediaelementplayer.css" />
        
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
            .navbarcolor{
                background-color: darkslategrey;
            }
            .navbarbrand{
                color:white;
            }
            .navbarbrand:hover{
                color:lightgrey;
            }
            
            .playlistcontent{
                background-color: darkslategrey;
            }
            
            .playlistcontent h5{
                border-bottom: 2px solid darkgrey;
                padding-bottom: 5px;
            }
            .playlistcontent a{
                text-decoration: none;
                color:whitesmoke;
            }
            .playlistcontent a:hover{
                color:black;
            }            
            .playlistheader{
                background-color: grey;
                padding: 2px;
                padding-left: 15px;
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
        
        <!--
            cortar daqui para cima, e meter no header.php
        
-->
        
        <div class="container">
            <br><br>
            <center>
                <audio id="player" src="http://localhost/sirtestes/musicreader.php?music=musica" type="audio/mp3" controls="controls"></audio>
            </center>
            <br><br>
            
            <div class="well">
                <div class="row">
                    <div class="col-md-4">
                        <div class="panel panel-default">
                            <div class="playlistheader"><h4><b>Playlist</b></h4></div>
                            <div class="panel-body playlistcontent" id="tablePlaylistsHome">                            
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div class="media">
                                  <div class="media-left">
                                    <a href="#">
                                      <img class="media-object" src="images/background.jpg" style="width:64px;height:64px;" alt="...">
                                    </a>
                                  </div>
                                  <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    ...
                                  </div>
                                </div>
                                <div class="media">
                                  <div class="media-left">
                                    <a href="#">
                                      <img class="media-object" src="images/background.jpg" style="width:64px;height:64px;" alt="...">
                                    </a>
                                  </div>
                                  <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    ...
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="panel panel-default">
              <div class="panel-body">A Basic Panel<br><br><br><br><br></div>
            </div>
        </div>
        
<script type="text/javascript">
    var userIdphp =  <?php echo($userId); ?>;
</script>

    </body>
    
</html>