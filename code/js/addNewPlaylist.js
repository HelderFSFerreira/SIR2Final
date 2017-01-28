/**
 * Created by helde on 27/01/2017.
 */
$(document).ready(function(){

    $("#btnAddNewPlaylist").click(function (e) {
        console.log(useridphp);

        $.ajax({
            type: 'POST',
            url: '../ws/addNewPlaylist.php',
            dataType: 'json',
            data: {
                userId: useridphp,
                namePlaylist: $('#nameNewPlaylist').val(),
            },
            success: function (response) {
                console.log("Sucesso");
                console.log(response);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Erro");
                console.log(xhr);
            }
        });
    });

});