var playlist;
function callMusicTemplate(id){
    genTemplateMusic();
    callAjaxMusic(id);
}

function callAjaxMusic(playlistid){
    $.ajax({
        type: 'POST',
        url: '../ws/getUserMusicbyPlayList.php',
        dataType: 'json',
        data: {
            playlistID: playlistid
        },
        success: function (response) {
            if(response.status != "-1"){
                populateTable(response.playlists);
                playlist = playlistid;
            }else{
                $("#thumbnailPlaylistsHome2").append($("<tbody/>").append($("<tr/>").append("Playlist vazia..")));
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            //console.log(xhr);
        }
    });
    
    
    $("#btnRemovePlaylist").click(function () {
        $.ajax({
            type: 'POST',
            url: '../ws/removePlaylist.php',
            dataType: 'json',
            data: {
                playlistID: playlistid,
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
}


function genTemplateMusic(){
    $("#root").empty();
    
    //container
    container = $("<div/>").addClass("container");
    //panel
    panelm = $("<div/>").addClass("panel panel-default");
    panelmbody = $("<div/>").addClass("panel-body");
    panelmheader = $("<div/>").addClass("page-header");
    //inside panelheader
    colunas = $("<div/>").addClass("row");
    //col1
    col1 = $("<div/>").addClass("col-md-1");
    imgplay = $("<img/>").attr({src:"images/album2.jpg", style:"width:80px; height:80px"});
    //col2
    col2 = $("<div/>").addClass("col-md-8");
    titleplist = $("<h1/>").html("PlayList:");
    smalltitle = $("<small/>").attr("id","playlistname");
    //col3
    col3 = $("<div/>").addClass("col-md-3");
    btnpartilha = $("<button/>").attr({type:"button",id:"btnSharePlaylist","data-toggle":"modal","data-target":"#myModal2"}).addClass("btn btn-success");
    btsharespan = $("<span/>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true");
    btsharetext = "Partilhar";
    btnremover = $("<button/>").attr({type:"button",id:"btnRemovePlaylist"}).addClass("btn btn-danger");
    btremovespan = $("<span/>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true");
    btremovetext = "Remover";
    //title number two
    titlemusicas = $("<h3/>").html("Musicas");
    //div musicas lista
    panelmmusicas = $("<div/>").addClass("panel panel-default");
    tablemusicas = $("<table/>").addClass("table").attr("id","thumbnailPlaylistsHome2");
    
    
    col1.append(imgplay);
    titleplist.append(smalltitle);
    col2.append(titleplist);
    btnpartilha.append(btsharespan).append(btsharetext);
    btnremover.append(btremovespan).append(btremovetext);
    col3.append(btnpartilha).append(btnremover);
    colunas.append(col1).append(col2).append(col3);
    panelmheader.append(colunas);
    panelmmusicas.append(tablemusicas);
    
    panelmbody.append(panelmheader).append(titlemusicas).append(panelmmusicas);
    panelm.append(panelmbody);
    
    container.append(panelm);
    
    //Musicas partilhadas
    
    $("#root").append(container);
}


function populateTable (musicas, pla) {
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
    var playerId = $('#player').closest('.mejs__container').attr('id');
    var player = mejs.players[playerId];
    source = "http://localhost/SIR2FINAL/ws/musicreader.php?musicID="+musica;
    player.setSrc(source);
    player.play();    
}

function remove(idmusica){
    $.ajax({
        type: 'POST',
        url: '../ws/removeFromPlaylist.php',
        dataType: 'json',
        data: {
            playlistID: playlist,
            musicaID : idmusica
        },
        success: function (response) {
            callMusicTemplate(playlist);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            //console.log(xhr);
        }
    });
    
}
