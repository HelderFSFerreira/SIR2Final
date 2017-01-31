$(document).ready(function(){
    function btnSend() {
        $.ajax({
            type: 'POST',
            url: '../ws/loginws.php',
            dataType: 'json',
            data: {
                user: $('#inputUsername').val(),
                pass: $('#inputPassword').val()
            },
            success: function (response) {
                console.log(response);
                if(response[0].id!=-1){
                    console.log("entrei aqui1");
                    window.location.replace("home.php");
                }else{
                    console.log("entrei aqui2");
                    //nao entrou
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
        });
        
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '1092804917511677',
              xfbml      : true,
              version    : 'v2.8'
            });
        
            FB.getLoginStatus(function(response){
                if(response.status === 'connected'){
                    $("#nomedouser").html("int");
                    $("#status").html("int");
                }else if(response.status === 'not_authorized'){
                    $("#nomedouser").html("not");
                    $("#status").html("not");
                }else{
                    $("#nomedouser").html("out");
                    $("#status").html("out");
                }
            });
          };



          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));        
        
    }
    
    

    $('#loginBTN').click(function () {
        btnSend();
    });
    
    $('#loginBTNFacebook').click(function(){
            FB.login(function(response){
                window.location.replace("home.php");
                $("#status").html("1231231");
            });
    });
    
});