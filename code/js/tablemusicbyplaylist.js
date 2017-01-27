$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/SIR2FINAL/ws/getUserMusicbyPlayList.php',
        dataType: 'json',
        data: {
            playlistID: playlistId
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
        tableline3 = $("<th/>").append("Dono");
        tablehead = $("<thead/>"); 
        tablerow = $("<tr/>");
        tablerow.append(tablelinebotao).append(tablelineadiciona).append(tableline1).append(tableline3);
        tablehead.append(tablerow);
        $("#thumbnailPlaylistsHome2").append(tablehead);
        tablebody = $("<tbody/>");
        for(i = 0; i < musicas.length; i++){
            count++;
            //get info
            // 1 - criar table lines
            //create span add
            span = $("<span/>").addClass("glyphicon glyphicon-plus-sign");
            tableadd = $("<td/>").append($("<a/>").attr('href','http://www.google.com').append(span));
            //create play
            idmusicplaylist = "idmusica" + musicas[i].id;
            span2 = $("<span/>").addClass("glyphicon glyphicon-play-circle").attr('id', idmusicplaylist);
            mus = "ola("+musicas[i].id+")";
            buttonplay = $("<button/>").attr("type","button").addClass("btn btn-danger").attr("onclick",mus);
            tableplay = $("<td/>").append(buttonplay);
            //nomemusica
            musica = musicas[i].name;
            tableline1 = $("<td/>").append(musica);
            //dono
            dono = musicas[i].dono;
            tableline3 = $("<td/>").append(dono);
            
            // 2 - inserir as rows
            
            console.log(musica);
            tablerow = $("<tr/>");
            tablerow.append(tableadd).append(tableplay).append(tableline1).append(tableline3);
            tablebody.append(tablerow);
        }
        info = "Total de Musicas: "+ count;
        
        $("#infostatics").append(info);
        
        $("#thumbnailPlaylistsHome2").append(tablebody);
    }
    
    
    
});

function ola(musica){
    //aqui vou buscar as musicas pelo id
    source = "http://localhost/SIR2FINAL/ws/musicreader.php?musicID="+musica;
    $("#player").attr("src",source);
    console.log(musica);
    
}