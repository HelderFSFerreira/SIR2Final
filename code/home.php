<?php
    include('header.php');
?>  
<script src="js/tablePlaylists.js"></script>
<script src="js/tableUsers.js"></script>

<div class="container">
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
          <br>
          <div class="panel panel-default">
              <div class="panel-body">
                  <div class="page-header">
                      <h1>As minhas músicas<small id="playlistname"></small></h1>
                    </div> 
                  <div class="panel panel-default">
                    <table class="table" id="thumbnailPlaylistsHome3">
                    </table>
                </div>
                  <div id="infostatics"></div>
                </div>
            </div>
          
          <script type="text/javascript">
            var useridphp = <?php echo json_encode($userID);?>;
          </script>
          
          <?php include('audio.php') ?>
          
        </div>
      </div>
</div>          
                    
<?php include('footer.php'); ?>