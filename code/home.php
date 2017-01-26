<?php
    include('header.php');
?>  

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
          <div class="row">
              <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                  <img src="images/album2.jpg" alt="..." style="width:171px; height:180px;">
                    <div class="caption">
                        <center><h3>Nome da playlist</h3></center>
                    </div>
                </a>
              </div>
              <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                  <img src="images/album1.jpg" alt="..." style="width:171px; height:180px;">
                    <div class="caption">
                        <center><h3>Nome da playlist</h3></center>
                    </div>
                </a>
              </div>
              <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                  <img src="images/album2.jpg" alt="..." style="width:171px; height:180px;">
                    <div class="caption">
                        <center><h3>Nome da playlist</h3></center>
                    </div>
                </a>
              </div>
              <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                  <img src="images/album1.jpg" alt="..." style="width:171px; height:180px;">
                    <div class="caption">
                        <center><h3>Nome da playlist</h3></center>
                    </div>
                </a>
              </div>
              <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                  <img src="images/album2.jpg" alt="..." style="width:171px; height:180px;">
                    <div class="caption">
                        <center><h3>Nome da playlist</h3></center>
                    </div>
                </a>
              </div>
            </div>
            <button type="button" class="btn btn-warning" aria-label="Right Align">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Criar nova Playlist 
            </button>
        </div>
      </div>
</div>          
                    
<?php include('footer.php'); ?>