$(document).ready(function(){
    $("#profileuser").click(function(){
        callUserProfile();
        $("#usernavbar").addClass("active");
        $("#homenavbar").removeClass("active");
    });
    
    $("#homepage").click(function(){
        callHomefromPlaylist();
        $("#usernavbar").removeClass("active");
        $("#homenavbar").addClass("active");
    });
});

function callAjaxUser(){
        $.ajax({
            type: 'POST',
            url: '../ws/getUserInfo.php',
            dataType: 'json',
            data: {
                userId: useridphp
            },
            success: function (response) {
                genTemplateUser(response);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log("entrei aqui2");
                //console.log(xhr);
            }
        });
    }


function callUserProfile(){
    $("#root").empty();
    //genTemplateUser();
    callAjaxUser();
}

function getlistmusics(lista){
    $.ajax({
        type: 'POST',
        url: '../ws/getUserMusic.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
            if (response.status!="-1") {
                for( i = 0; i < response.playlists.length ;i++){
                    lista.append($("<ul/>").append(response.playlists[i].name).addClass("list-group-item"));
                }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          //console.log("entrei aqui2");
          ////console.log(xhr);
        }
    }); 
}

function getlistplaylists(play){
   $.ajax({
        type: 'POST',
        url: '../ws/getUserPlaylists.php',
        dataType: 'json',
        data: {
            userId: useridphp
        },
        success: function (response) {
            if (response.status!="-1") {
                for( i = 0; i < response.playlists.length ;i++){
                    play.append($("<ul/>").append(response.playlists[i].name).addClass("list-group-item"));
                }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log("entrei aqui2");
            //console.log(xhr);
        }
    });
}


function genTemplateUser(userinfo){
    //console.log(userinfo.playlists[2].nummusics);
    //console.log(userinfo.playlists[1].numplaylists);
    
    //container
    containeruser = $("<div/>").addClass("container");
    //paineis
    paneluserinfo = $("<div/>").addClass("panel panel-default");
    paneluserinfobody = $("<div/>").addClass("panel-body");
    //title
    pageuserinfoheader = $("<div/>").addClass("page-header").append($("<h2/>").append("User Profile"));
    //title 2
    pageinfostatics = $("<div/>").addClass("page-header").append($("<h3/>").append("Estatisticas"));
    //title musics
    pageinfomusicas = $("<div/>").addClass("page-header").append($("<h4/>").append("Musicas"));
    //title playlists
    pageinfoplaylists = $("<div/>").addClass("page-header").append($("<h4/>").append("Playlists"));
    //row
    rowuserinfo = $("<div>").addClass("row");
    //col1
    col1userinfo = $("<div/>").addClass("col-md-3");
    //col2
    col1userinfo2 = $("<div/>").addClass("col-md-9");
    //info user
    nameusertitle = $("<h4/>").append($("<b/>").append("Name: "));
    nameuser = $("<h4/>").append(nameusertitle.append(userinfo.playlists[0].name));
    
    nameusernametitle = $("<h4/>").append($("<b/>").append("Username: "));
    usernameuser = $("<h4/>").append(nameusernametitle.append(userinfo.playlists[0].username));
    
    namepasswordtitle = $("<h4/>").append($("<b/>").append("Password: "));
    userpassword = $("<h4/>").append(namepasswordtitle.append(userinfo.playlists[0].password));
    
    nameemailtitle = $("<h4/>").append($("<b/>").append("Email: "));
    useremail = $("<h4/>").append(nameemailtitle.append(userinfo.playlists[0].email));
    
    nameimagetitle = $("<h4/>").append($("<b/>").append("Foto: "));
    userimage = $("<h4/>").append($("<img/>").attr({src:userinfo.playlists[0].image,style: "width:200px; height:200px"}));
    
    //row 2
    rowuserinfo2 = $("<div>").addClass("row");
    //col1
    col1info = $("<div/>").addClass("col-md-6");
    //col2
    col2info = $("<div/>").addClass("col-md-6");
    
    //info musicas
    listhead = $("<li/>").addClass("list-group");
    getlistmusics(listhead);
    namemusicstitle = $("<h5/>").append($("<b/>").append("Num musicas: "));
    usermusic = $("<h4/>").append(namemusicstitle.append(userinfo.playlists[2].nummusics));
    //info playlists
    listplay = $("<li/>").addClass("list-group");
    getlistplaylists(listplay);
    nameplayliststitle = $("<h5/>").append($("<b/>").append("Num playlists: "));
    userplaylist = $("<h4/>").append(nameplayliststitle.append(userinfo.playlists[1].numplaylists));
    
    //appends
   
   col1userinfo.append(userimage);
   col1userinfo2.append(nameuser).append(usernameuser).append(userpassword).append(useremail);
    rowuserinfo.append(col1userinfo).append(col1userinfo2);
   
   col1info.append(pageinfomusicas).append(usermusic).append(listhead);
   col2info.append(pageinfoplaylists).append(userplaylist).append(listplay);
    rowuserinfo2.append(col1info).append(col2info);
    
   paneluserinfobody.append(pageuserinfoheader).append(rowuserinfo).append(pageinfostatics).append(rowuserinfo2);
    paneluserinfo.append(paneluserinfobody);
    containeruser.append(paneluserinfo);
    $("#root").append(containeruser);
    
}


