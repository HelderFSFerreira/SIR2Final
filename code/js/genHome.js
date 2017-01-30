$(document).ready(function(){
    genTemplateHome();
    callAjaxHome();
});


function callAjaxHome(){
    
    $("#btnAddNewPlaylist").on("click", function (e) {
    console.log("ola");
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
                    $('#nameNewPlaylist').val("");
                    repopulateTablePlaylists();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Erro");
                    console.log(xhr);
                }
            });
        }
    });
    
    $.ajax({
        type: 'POST',
        url: '../ws/getUserPlaylists.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
            populateTableplaylists(response.playlists);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("entrei aqui2");
            console.log(xhr);
        }
    });
    
    $.ajax({
        type: 'POST',
        url: '../ws/getUserMusic.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
            //console.log(response);
            if (response.status!="-1") {
                Populatetablemusics(response.playlists);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("entrei aqui2");
          //console.log(xhr);
        }
    });    
    
}




function genTemplateHome(){
    //container
    container = $("<div/>").addClass("container");
    //searchbox
    search = $("<input/>").attr({type:"search",id:"searchbox",onsearch: "myFunction()",placeholder: "Pesquisar.."}).addClass("form-control");
    //break
    paragrafo = $("<br/>");
    //painel
    painelplaylist = $("<div/>").addClass("panel panel-default");
    panelbody = $("<div/>").addClass("panel-body");
    paneltitle = $("<div/>").addClass("page-header");
    titlelist = $("<h2/>").html("As minhas Playlists");
    //thumbnails
    thumb = $("<div/>").addClass("row").attr("id","thumbnailPlaylistsHome");
    playlistnamebox = $("<input/>").attr({id:"nameNewPlaylist", type:"text", placeholder: "New Playlist Names"});
    btAddPlaylist = $("<button/>").addClass("btn btn-warning").attr({id:"btnAddNewPlaylist", type:"button"});
    btText = "Criar nova Playlist";
    spanbutton = $("<span/>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true");
    
    btAddPlaylist.append(spanbutton).append(btText);
    paneltitle.append(titlelist);
    panelbody.append(paneltitle).append(thumb).append(playlistnamebox).append(btAddPlaylist);
    painelplaylist.append(panelbody);
    container.append(search).append(paragrafo).append(painelplaylist);
    
    //container2 (minhas musicas)
    container2 = $("<div/>").addClass("container");
    //panel2
    panel2 = $("<div/>").addClass("panel panel-default");
    panelbody2 = $("<div/>").addClass("panel-body");
    paneltitle2 = $("<div/>").addClass("page-header");
    paneltitlemusic = $("<h2/>").html("As minhas Musicas");
    panel3 = $("<div/>").addClass("panel panel-default");
    tablecontent = $("<table/>").addClass("table").attr("id","musicas");
    //form
    formupload = $("<form/>").attr({action: "../ws/uploadMusic.php", method:"post", enctype:"multipart/form-data"});
    //inputs do form
    inputmusic = $("<input/>").attr({type:"file", multiple:"", name:"music[]"});
    inputmusichidden = $("<input/>").attr({type:"hidden", name:"userlist", value:useridphp});
    inputsubmition = $("<input/>").attr({type:"submit", value:"Submeter"}).addClass("btn btn-warning");
    
    formupload.append(inputmusic).append(inputmusichidden).append(inputsubmition);
    panel3.append(tablecontent);
    paneltitle2.append(paneltitlemusic);
    panelbody2.append(paneltitle2).append(panel3).append(formupload);
    panel2.append(panelbody2);
    container2.append(panel2);
    
    
    $("#root").append(container).append(container2);    
}

//Carrega playlists
function populateTableplaylists (playlists) {
    for(i = 0; i < playlists.length; i++){
        name = playlists[i].name;
        idplay = playlists[i].id;
        n = $("<option>").attr("value",idplay).html(name);
        $('#playlistsmodal').append(n);
        //1
        title = $("<h3/>").append(name);
        //2
        titlecentered = $("<center/>");
        //2.5
        caption = $("<div/>").addClass("caption");
        //3
        image = $("<img/>").attr("src","images/album1.jpg").css({"width":"171","height":"180"});
        //4
        dirname = "musica.php?idplaylist="+playlists[i].id;
        direction = $("<a/>").attr('href', dirname).addClass("thumbnail");
        //5
        content = $("<div/>").addClass("col-md-3").addClass("col-xs-6");

        caption.append(titlecentered.append(title));
        direction.append(image).append(caption);
        content.append(direction);
        $("#thumbnailPlaylistsHome").append(content);
    }
}


// carrega musicas
function Populatetablemusics (musics) {
    console.log("adadaqui");
    var count = 0;
    //make table header
    // 1 - criar table lines
    tablelinebotao = $("<th/>").append("Add");
    tablelineadiciona = $("<th/>").append("Play");
    tableline1 = $("<th/>").append("Musica");
    tableline3 = $("<th/>").append("Data");
    tablehead = $("<thead/>");
    tablerow = $("<tr/>");
    tablerow.append(tablelinebotao).append(tablelineadiciona).append(tableline1).append(tableline3);
    tablehead.append(tablerow);
    $("#musicas").append(tablehead);
    tablebody = $("<tbody/>");
    for(i = 0; i < musics.length; i++){
        console.log("aqui");
        count++;
        //get info
        // 1 - criar table lines
        //create span add
        plist = "setvalues("+musics[i].id+")";
        idmusicplaylist = "idmusica" + musics[i].id;
        span = $("<span/>").addClass("glyphicon glyphicon-plus-sign").attr('id', idmusicplaylist);
        buttonadd = $("<button/>").attr("type","button").addClass("btn btn-danger btn-xs").attr("onclick",plist).append(span).attr("data-toggle","modal").attr("data-target","#myModal");
        tableadd = $("<td/>").append(buttonadd);
        //create play
        mus = "play("+musics[i].id+")";
        span2 = $("<span/>").addClass("glyphicon glyphicon-play-circle").attr('id', idmusicplaylist);
        buttonplay = $("<button/>").attr("type","button").addClass("btn btn-danger btn-xs").attr("onclick",mus).append(span2);
        tableplay = $("<td/>").append(buttonplay);
        //nomemusica
        musica = musics[i].name;
        tableline1 = $("<td/>").append(musica);
        //dono
        date = musics[i].dateupload;
        tableline3 = $("<td/>").append(date);

        // 2 - inserir as rows

        tablerow = $("<tr/>");
        tablerow.append(tableadd).append(tableplay).append(tableline1).append(tableline3);
        tablebody.append(tablerow);
    }

    $("#musicas").append(tablebody);
    $("#musicas").DataTable();
}


function play(musica){
    //aqui vou buscar as musicas pelo id
    source = "../ws/musicreader.php?musicID="+musica;
    $("#player").attr("src",source);
    console.log(musica);
    
}

function setvalues(idmusica){
    $('#texto').html(idmusica);
    add = "adiciona("+idmusica+")";
    $('#buttaoadiciona').attr("onclick",add);
    
}

function adiciona(num){
    plista = $("#playlistsmodal>option:selected").val();
    $.ajax({
        type: 'POST',
        url: '../ws/addToPlaylist.php',
        dataType: 'json',
        data: {
            playlistid : plista,
            musicid : num
        },
        success: function (response) {
            console.log(response.status);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("aqui");
        }
    });
}

//add new playlist
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

