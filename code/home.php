<?php
    include('header.php');
?>  
<script src="js/tablePlaylists.js"></script>
<script src="js/tableUsers.js"></script>

<div class="container">
    <br><br>
    <center><audio id="player" src="http://localhost/sirtestes/musicreader.php?music=musica" type="audio/mp3" controls="controls"></audio></center>
    <br><br>
    <input type="search" class="form-control" id="searchbox" onsearch="myFunction()" placeholder="Pesquisar...">
    <br>
    <div class="panel panel-default">
      <div class="panel-body">
          <div class="page-header">
              <h1>As minhas playlists</h1>
            </div>         
          <div class="row" id="thumbnailPlaylistsHome">
            </div>
            <button type="button" class="btn btn-warning" aria-label="Right Align">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Criar nova Playlist 
            </button>
          
          <div class="tablePlaylistsHome">
            
          </div>
          <script type="text/javascript">
            var useridphp = <?php echo json_encode($userID);?>;
          </script>
          
          
        </div>
      </div>
</div>          
                    
<?php include('footer.php'); ?>