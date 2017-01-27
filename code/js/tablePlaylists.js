$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIR2Final/ws/getUserPlaylists.php',
        dataType: 'json',
        data: {
            userId: useridphp
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
        for(i = 0; i < playlists.length; i++){
            name = playlists[i].name;
            //1 
            title = $("<h3/>").append(name);
            //2
            titlecentered = $("<center/>");
            //2.5
            caption = $("<div/>").addClass("caption");
            //3
            image = $("<img/>").attr("src","images/album1.jpg").css({"width":"171","height":"180"});
            //4
            direction = $("<a/>").attr('href','www.google.com').addClass("thumbnail");
            //5
            content = $("<div/>").addClass("col-md-3").addClass("col-xs-6");
            
            caption.append(titlecentered.append(title));
            direction.append(image).append(caption);
            content.append(direction);
            $("#thumbnailPlaylistsHome").append(content);
        }
    }
});
