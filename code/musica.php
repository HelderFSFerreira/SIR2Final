<?php
    include('header.php');
    include('modal.html');
?>


<div class="container">

    <div class="panel panel-default">
      <div class="panel-body">
          <div class="page-header">
              <div class="row">
                <div class="col-md-1">
                    <img src="images/album2.jpg" style="width:80px; height:80px"/>
                </div>
                  <div class="col-md-8">
                    <h1>Playlist: <small id="playlistname"></small></h1>
<<<<<<< HEAD
                </div>
                  <div class="col-md-3">
                    <button type="button" class="btn btn-success" id="btnSharePlaylist">
=======
                </div><div class="col-md-3">
                    <button type="button" class="btn btn-success" id="btnSharePlaylist" data-toggle="modal" data-target="#myModal2">
>>>>>>> 02c8c4964c506c8cf0d8e30054f53095e9c83177
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Partilhar
                    </button>
                  <button type="button" class="btn btn-danger" id="btnRemovePlaylist">
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
    
    
    <?php include('audio.php') ?>
      
</div>
    </div>
</div>
<script src="js/removePlaylist.js"></script>

<script type="text/javascript">
        var playlistId = <?php echo $_GET['idplaylist']; ?>;
</script>


<?php include('footer.php'); ?>