/**
 * Created by helde on 27/01/2017.
 */
$(document).ready(function(){

    $("#btnAddNewPlaylist").click(function (e) {
        if ($('#nameNewPlaylist').val() != "") {
            $.ajax({
                type: 'POST',
                url: '../ws/addNewPlaylist.php',
                dataType: 'json',
                data: {
                    userId: useridphp,
                    namePlaylist: $('#nameNewPlaylist').val(),
                },
                success: function (response) {
                    repopulateTablePlaylists();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Erro");
                    console.log(xhr);
                }
            });
        }
    });
});

function repopulateTablePlaylists() {
    $.ajax({
        type: 'POST',
        url: '../ws/getUserPlaylists.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
            $("#thumbnailPlaylistsHome").empty();
            populateTableplaylists(response.playlists);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            console.log(xhr);
        }
    });
}