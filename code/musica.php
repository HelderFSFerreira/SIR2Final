<?php
    include('header.php');
    var_dump($_GET['idplaylist']);
?> 
<script type="text/javascript">
        var playlistId = <? echo $_GET['idplaylist']; ?>;
        console.log("entrei");
</script>

<div class="container">

    <div class="panel panel-default">
      <div class="panel-body">
          <div class="page-header">
              <h1>Músicas - <small id="playlistname"></small></h1>
            </div> 
          <div class="panel panel-default">
            <table class="table" id="thumbnailPlaylistsHome2">
            </table>
        </div>
          <div id="infostatics"></div>
        </div>
    </div>
    
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
          <?php include('audio.php') ?>
      </div>
    </nav>
</div>

<script type="text/javascript">
        var playlistId = <?php echo $_GET['idplaylist']; ?>;
        console.log(playlistId);
</script>


<?php include('footer.php'); ?>