/**
 * Created by helde on 30/01/2017.
 */

$("#btnRemovePlaylist").click(function () {
    $.ajax({
        type: 'POST',
        url: '../ws/removePlaylist.php',
        dataType: 'json',
        data: {
            playlistID: playlistId,
        },
        success: function (response) {
            if (response.status==1) {
                window.location.replace("home.php");
            } else {
                console.log("Status2");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Erro");
            console.log(xhr);
        }
    });
});