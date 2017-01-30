<?php
    include('header.php');
    include ('modal.html');
?>  
<script src="js/genHome.js"></script>
<!--<script src="js/genMusic.js"></script>-->
  <script>
    var useridphp = <?php echo $userID;?>;
</script>  
<div id="root">

</div>   
 <button id="btn">click</button>
<script>
$("#btn").click(function(){
    alert("Ola");
})
</script>

<?php include('audio.php') ?>
<?php include('footer.php'); ?>