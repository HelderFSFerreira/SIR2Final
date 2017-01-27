/**
 * Created by helde on 21/01/2017.
 */
$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIR2Final/ws/getUserMusic.php',
        dataType: 'json',
        data: {
            userId: 1
        },
        success: function (response) {
          populateTable(response.musics);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("entrei aqui2");
          //console.log(xhr);
        }
    });

    function populateTable (musics) {
        console.log(musics);
      
    }


});
