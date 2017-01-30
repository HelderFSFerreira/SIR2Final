function callAjaxMusic(){
    $.ajax({
        type: 'POST',
        url: '../ws/getUserMusicbyPlayList.php',
        dataType: 'json',
        data: {
            playlistID: playlistId
        },
        success: function (response) {
            if(response.status != "-1"){
                populateTable(response.playlists);
            }else{
                $("#thumbnailPlaylistsHome2").append($("<tbody/>").append($("<tr/>").append("Playlist vazia..")));
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            //console.log(xhr);
        }
    });
}


function genTemplateMusic(){
    $(".root").append("ola");
}


function populateTable (musicas) {
        $("#playlistname").append(musicas[0].playlistname);
        var count = 0;
        //make table header
        // 1 - criar table lines
        tablelineadiciona = $("<th/>").append("Play");
        tableline1 = $("<th/>").append("Musica");
        tableline2 = $("<th/>").append("Dono");
        tablelinebotao = $("<th/>").append("Remove");
        tablehead = $("<thead/>");
        tablerow = $("<tr/>");
        tablerow.append(tablelineadiciona).append(tableline1).append(tableline2).append(tablelinebotao);
        tablehead.append(tablerow);
        $("#thumbnailPlaylistsHome2").append(tablehead);
        tablebody = $("<tbody/>");
        for(i = 0; i < musicas.length; i++){
            count++;
            //get info
            // 1 - criar table lines
            //create span add
            plist = "remove("+musicas[i].id+")";
            idmusicplaylist = "idmusica" + musicas[i].id;
            span = $("<span/>").addClass("glyphicon glyphicon-remove-circle").attr('id', idmusicplaylist);
            buttonadd = $("<button/>").attr("type","button").addClass("btn btn-danger btn-xs").attr("onclick",plist).append(span);
            tableremove = $("<td/>").append(buttonadd);
            //create play
            span2 = $("<span/>").addClass("glyphicon glyphicon-play-circle").attr('id', idmusicplaylist);
            mus = "ola("+musicas[i].id+")";
            buttonplay = $("<button/>").attr("type","button").addClass("btn btn-default btn-xs").attr("onclick",mus).append(span2);
            tableplay = $("<td/>").append(buttonplay);
            //nomemusica
            musica = musicas[i].name;
            tableline1 = $("<td/>").append(musica);
            //dono
            dono = musicas[i].dono;
            tableline2 = $("<td/>").append(dono);

            // 2 - inserir as rows

            console.log(musica);
            tablerow = $("<tr/>");
            tablerow.append(tableplay).append(tableline1).append(tableline2).append(tableremove);
            tablebody.append(tablerow);
        }
        info = "Total de Musicas: "+ count;

        $("#infostatics").append(info);

        $("#thumbnailPlaylistsHome2").append(tablebody);
        $("#thumbnailPlaylistsHome2").DataTable();
    }


function ola(musica){
    //aqui vou buscar as musicas pelo id
    source = "../ws/musicreader.php?musicID="+musica;
    $("#player").attr("src",source);
    console.log(musica);
    
}

function remove(idmusica){
    $.ajax({
        type: 'POST',
        url: '../ws/removeFromPlaylist.php',
        dataType: 'json',
        data: {
            playlistID: playlistId,
            musicaID : idmusica
        },
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            //console.log(xhr);
        }
    });
    
}
