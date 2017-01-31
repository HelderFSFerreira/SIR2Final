var playlist;
function callMusicTemplate(id){
    genTemplateMusic();
    callAjaxMusic(id);
    playlist=id;    
    verifica(id,useridphp);
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
    imgplay = $("<img/>").attr({src:"images/album2.jpg", style:"width:80px; height:80px",id:"imageplay"});
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
    titlemusicas = $("<h2/>").html("Musicas");
    //botao voltar
    btbackspan = $("<span/>").addClass("glyphicon glyphicon-arrow-left");
    textbuttonback = "  Voltar";
    btbacktoplost = $("<button/>").addClass("btn btn-default").attr({type:"button",id:"btbacktoplaylist",onclick:"callHomefromPlaylist()"}).append(btbackspan).append(textbuttonback);
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
    
    panelmbody.append(btbacktoplost).append(panelmheader).append(titlemusicas).append(panelmmusicas);
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
    source = "../ws/musicreader.php?musicID="+musica;
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

var speak=0;


$('#userToShare').on('focus', function() {
    $(this).autocomplete({
        source: function(request, response) {
            $.ajax({
                type: 'POST',
                url: '../ws/getAllUsernames.php',
                dataType: 'json',
                data: {
                    username: $('#userToShare').val(),
                },
                success: function(data) {
                    if (data.status!=-1) {
                        var arrayUsers = [];
                        data.users.forEach(function (res) {
                            arrayUsers.push(res.username);
                        });
                    }
                    console.log(arrayUsers);
                    response(arrayUsers);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(thrownError);
                }
            });
        },
        select: function (a, b) {
            console.log(a);
            console.log(b);
        }
    });
});

$('#addUserShare').click(function () {
    if ($('#userToShare').val()!="") {
        $.ajax({
            type: 'POST',
            url: '../ws/addUserToPlaylist.php',
            dataType: 'json',
            data: {
                playlistID: playlist,
                username: $('#userToShare').val(),
            },
            success: function(data) {
                refillTableUsersShared();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log($('#userToShare').val());
                console.log(playlist);
                console.log(xhr);
            }
        });
    }
});

$('#myModal2').on('shown.bs.modal', function (e) {
    refillTableUsersShared();
});

$('#myModal2').on('hidden.bs.modal', function (e) {
    $("#tableUsersSharedPlaylist > tbody").html("");
});

function fillTableUsersShared(users) {

    toHtml = "<tbody>";

    for (var i=0;i<users.length;i++) {
        id = users[i].id;
        name = users[i].name;
        username = users[i].username;

        toHtml += "<tr><td>"+id+"</td><td>"+username+"</td><td>"+name+"</td>";
        fctRemove = "removeSharedUser("+id+")";
        botao = "<td><button type='button' class='btn btn-danger btn-xs' onclick='"+fctRemove+"'><span class='glyphicon glyphicon-remove-circle'></span></td></tr>"
        toHtml += botao;
    }
    toHtml+="</tbody>";
    $("#tableUsersSharedPlaylist").append(toHtml);
    $("#tableUsersSharedPlaylist").DataTable();
}

function removeSharedUser(usrid) {
    console.log("Entrei");
    $.ajax({
        type: 'POST',
        url: '../ws/delUserPlaylist.php',
        dataType: 'json',
        data: {
            playlistID: playlist,
            userID: usrid,
        },
        success: function(data) {
            refillTableUsersShared();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
            console.log(playlist);
        }
    });
}

function refillTableUsersShared() {
    $.ajax({
        type: 'POST',
        url: '../ws/getUsersWithPlaylistShared.php',
        dataType: 'json',
        data: {
            playlistID: playlist,
        },
        success: function(data) {
            $("#tableUsersSharedPlaylist > tbody").html("");
            if (data.status==1) {
                fillTableUsersShared(data.users);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
            console.log(playlist);
        }
    });
}

function verifica(idpla, idus){
    $.ajax({
        type: 'POST',
        url: '../ws/getPlaylistOwner.php',
        dataType: 'json',
        data: {
            playlistID: idpla,
        },
        success: function(data) {
            dat = parseInt(data.owner);
            if(dat != idus){
                console.log("aqui");
                $("#btnRemovePlaylist").attr("disabled","true").hide();
                $("#btnSharePlaylist").attr("disabled","true").hide();
            }else{
                
            }/*
            btnRemovePlaylist
            btnSharePlaylist*/
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("erro!");
        }
    });
    
}