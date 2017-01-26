$(document).ready(function(){
    function btnSend() {
        console.log("Entrei");
        $.ajax({
            type: 'POST',
            url: 'http://localhost/SIR2Final/ws/loginws.php',
            dataType: 'json',
            data: {
                user: $('#inputUsername').val(),
                pass: $('#inputPassword').val()
            },
            success: function (response) {
                console.log(response[0].id);
                if(response[0].id==1){
                    window.location.replace("home.php");
                }else{
                    //nao entrou
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
        });
    }

    $('#loginBTN').click(function () {
        console.log("Entrei2");
        btnSend();
    })
    
    $('#loginBTNFacebook').click(function(){
       console.log("login pelo facebook..");
        login();
    });
        window.fbAsyncInit = function() {
        FB.init({
          appId      : '1092804917511677',
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
          
          FB.getLoginStatus(function(response){
              if(response.status === 'connected'){
                  document.getElementById('status').innerHTML = 'connected';
                  FB.api('/me','GET', {fields: 'first_name, last_name, name, id, picture.width(150).height(150), about'}, function(resp){
                        document.getElementById('name').innerHTML = resp.first_name;
                        document.getElementById('last_name').innerHTML = resp.last_name;
                        document.getElementById('pic').innerHTML = "<img src='" + resp.picture.data.url + "'>";
                        document.getElementById('email').innerHTML = resp.about;
                      console.log(resp);
                    });
              }else if(response.status === 'not_authorized'){
                  document.getElementById('status').innerHTML = 'not connected'
              }else{
                  document.getElementById('status').innerHTML = 'not connected to faceboook';
              }
          })
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
        
        function login(){
            FB.login(function(response){
                if(response.status === 'connected'){
                  document.getElementById('status').innerHTML = 'connected';
                   FB.api('/me','GET', {fields: 'first_name, last_name, name, id, picture.width(150).height(150)'}, function(resp){
                        document.getElementById('name').innerHTML = resp.first_name;
                        document.getElementById('last_name').innerHTML = resp.last_name;
                        document.getElementById('pic').innerHTML = "<img src='" + resp.picture.data.url + "'>";
                      console.log(resp);
                    });
                    
              }else if(response.status === 'not_authorized'){
                  document.getElementById('status').innerHTML = 'not connected'
              }else{
                  document.getElementById('status').innerHTML = 'not connected to faceboook';
              }
            });
        }
        
        function logout(){
            FB.logout(function(response){
                if(response.status === 'connected'){
                  document.getElementById('status').innerHTML = 'connected';
                   FB.api('/me','GET', {fields: 'first_name, last_name, name, id, picture.width(150).height(150)'}, function(resp){
                        document.getElementById('name').innerHTML = resp.first_name;
                        document.getElementById('last_name').innerHTML = resp.last_name;
                        document.getElementById('pic').innerHTML = "<img src='" + resp.picture.data.url + "'>";
                      console.log(resp);
                    });
                    
              }else if(response.status === 'not_authorized'){
                  document.getElementById('status').innerHTML = 'not connected'
              }else{
                  document.getElementById('status').innerHTML = 'not connected to faceboook';
              }
            })
        }
    
});