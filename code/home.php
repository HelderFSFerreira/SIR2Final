<?php
    include('header.php');
?>
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
                                <div class="media"></div>
                                  <div class="media-body">
                                    <h4 id="musicplaylistname" class="media-heading">Music playlist name</h4>
                                    <p id="musicname">Music name</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="panel panel-default">
              <div class="panel-body">
                <div id="name"></div>
            <div id="last_name"></div>
            <div id="pic"></div>
            <div id="email"></div>
            <div id="status"></div>
                
                </div>
            </div>
        </div>
        
<script type="text/javascript">
    var userIdphp =  <?php echo($_GET['userId']); ?>;
</script>

    </body>
    
</html>