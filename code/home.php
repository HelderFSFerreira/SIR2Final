<?php
    include('header.php');
    include ('modal.html');
?>  
<script src="js/genHome.js"></script>
<script src="js/genMusic.js"></script>
<script>
    var useridphp = <?php echo $userID;?>;
</script>     
<div id="root">


</div>          

<?php include('audio.php') ?>
<?php include('footer.php'); ?>