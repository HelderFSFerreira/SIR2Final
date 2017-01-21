/**
 * Created by helde on 21/01/2017.
 */
$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIRFinal/ws/getUserPlaylists.php',
        dataType: 'json',
        data: {
            userId: userIdphp
        },
        success: function (response) {
            populateTable(response.playlists);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            console.log(xhr);
        }
    });

    function populateTable (playlists) {
        console.log(playlists);
        toHtml = "<tbody>";

        for (i=0;i<playlists.length;i++) {
            id = playlists[i].id;
            name = playlists[i].name;
            username = playlists[i].username;
            dateupload = playlists[i].datecreation;

            toHtml += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+username+"</td><td>"+dateupload+"</td></tr>";

        }
        toHtml+="</tbody>";
        $("#tablePlaylistsHome").append(toHtml);
        $("#tablePlaylistsHome").DataTable();
    }


});
