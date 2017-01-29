<?php
    include('header.php');
    include ('modal.html');
?> 
<script type="text/javascript">
        var playlistId = <? echo $_GET['idplaylist']; ?>;
        console.log("entrei");
</script>
<script src="js/tablemusicbyplaylist.js"></script>

<div class="container">

    <div class="panel panel-default">
      <div class="panel-body">
          <div class="page-header">
              <div class="row">
                <div class="col-md-1">
                    <img src="images/album2.jpg" style="width:80px; height:80px"/>
                </div><div class="col-md-8">
                    <h1>Playlist: <small id="playlistname"></small></h1>
                </div><div class="col-md-3">
                    <button type="button" class="btn btn-success" id="btnSharePlaylist">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Partilhar
                    </button>
                  <button type="button" class="btn btn-danger" id="btnSharePlaylist">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Remover
                    </button>
                </div>
              </div>      
            </div>
          <h3>Musicas</h3>
          <div class="panel panel-default">
            <table class="table" id="thumbnailPlaylistsHome2">
            </table>
        </div>
          <div id="infostatics"></div>
        </div>
    </div>
    
    
    <?php include('audio.php') ?>
      
</div>

<script type="text/javascript">
        var playlistId = <?php echo $_GET['idplaylist']; ?>;
        console.log(playlistId);
</script>


<?php include('footer.php'); ?>