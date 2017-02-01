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
        
        function login(){
            FB.login(function(response){
                //console.log("ola");$("#status").html("dada");
            });
        }

function logout(){
        FB.logout(function(response) {
            //console.log("fez logout");
        });
}


