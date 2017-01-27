$(document).ready(function(){
    $("#idmusica1").click(function() {
      alert( "Handler for .click() called." );
    });
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIR2FINAL/ws/getUserMusicbyPlayList.php',
        dataType: 'json',
        data: {
            playlistID: 1
        },
        success: function (response) {
            populateTable(response.playlists);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            //console.log(xhr);
        }
    });

    function populateTable (musicas) {
        $("#playlistname").append(musicas[0].playlistname);
        var count = 0;
        //make table header
        // 1 - criar table lines
        tablelinebotao = $("<th/>").append("Add");
        tablelineadiciona = $("<th/>").append("Play");
        tableline1 = $("<th/>").append("Musica");
        tableline2 = $("<th/>").append("Disco");
        tableline3 = $("<th/>").append("Dono");
        tablehead = $("<thead/>"); 
        tablerow = $("<tr/>");
        tablerow.append(tablelinebotao).append(tablelineadiciona).append(tableline1).append(tableline2).append(tableline3);
        tablehead.append(tablerow);
        $("#thumbnailPlaylistsHome2").append(tablehead);
        tablebody = $("<tbody/>");
        for(i = 0; i < musicas.length; i++){
            count++;
            //get info
            musica = musicas[i].name;
            disco = musicas[i].namedisc;
            dono = musicas[i].dono;
            
            // 1 - criar table lines
            //create span
            span = $("<span/>").addClass("glyphicon glyphicon-plus-sign");
            tablelinebotao = $("<td/>").append($("<a/>").attr('href','http://www.google.com').append(span));
            //create span2
            span2 = $("<span/>").addClass("glyphicon glyphicon-play-circle");        
            //tablelineadiciona = $("<td/>").append($("<a/>").attr('href','http://www.google.com').append(span2));
            idmusicplaylist = "idmusica" + musicas[i].id;
            tablelineadiciona = $("<td/>").attr('id', idmusicplaylist).append(span2);
            tableline1 = $("<td/>").append(musica);
            tableline2 = $("<td/>").append(disco);
            tableline3 = $("<td/>").append(dono);
            
            // 2 - inserir as rows
            
            console.log(musica);
            tablerow = $("<tr/>");
            tablerow.append(tablelinebotao).append(tablelineadiciona).append(tableline1).append(tableline2).append(tableline3);
            tablebody.append(tablerow);
        }
        info = "Total de Musicas: "+ count;
        
        $("#infostatics").append(info);
        
        $("#thumbnailPlaylistsHome2").append(tablebody);
    }
    
    
});