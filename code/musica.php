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
              <h1>Músicas - <small id="playlistname"></small></h1>
            </div> 
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