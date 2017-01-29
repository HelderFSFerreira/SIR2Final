/**
 * Created by helde on 21/01/2017.
 */
$(document).ready(function(){
    $.ajax({
        type: 'POST',
        url: '../ws/getUserMusic.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
          populateTable(response.playlists);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("entrei aqui2");
          //console.log(xhr);
        }
    });
});


function populateTable (musics) {

    console.log(musics[0]);
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

        console.log(musica);
        tablerow = $("<tr/>");
        tablerow.append(tableadd).append(tableplay).append(tableline1).append(tableline3);
        tablebody.append(tablerow);
    }
    info = "Total de Musicas: "+ count;

    $("#infostatics").append(info);

    $("#musicas").append(tablebody);
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

