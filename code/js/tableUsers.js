/**
 * Created by helde on 21/01/2017.
 */
$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIRFinal/ws/getUserMusic.php',
        dataType: 'json',
        data: {
            userId: userIdphp
        },
        success: function (response) {
          populateTable(response.musics);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("entrei aqui2");
            console.log(xhr);
        }
    });

    function populateTable (musics) {
      toHtml = "<tbody>";

      for (i=0;i<musics.length;i++) {
        id = musics[i].id;
        name = musics[i].name;
        namedisk = musics[i].namedisc;
        username = musics[i].username;

        toHtml += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+namedisk+"</td><td>"+username+"</td></tr>";

      }
      toHtml+="</tbody>";
      $("#tableUsersHome").append(toHtml);
      $("#tableUsersHome" ).DataTable();
    }


});
