<?php
session_start();
if (isset($_SESSION['userID'])) {
    header("location:home.php");
}
session_write_close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->
    <title>about.me Login Style - Bootsnipp.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/login.css" rel="stylesheet">
    <script src="//code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
    <script src="js/login.js"></script>
    
    <script>
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
        
    </script>
</head>
<body>
<div class="container">
    <div id="status"></div>
    <button onclick="login()">login</button>
    <button onclick="logout()">logout</button>
    
    <div class="row">
            
        <div class="main">
            <div id="name"></div>
            <div id="last_name"></div>
            <div id="pic"></div>
            <div id="email"></div>
            <div id="status"></div>
            <h3>Please Log In, or <a href="register.html">Sign Up</a></h3>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <!--<a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>-->
                    <button id="loginBTNFacebook" class="btn btn-lg btn-primary btn-block">Facebook</button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
                </div>
            </div>
            <div class="login-or">
                <hr class="hr-or">
                <span class="span-or">or</span>
            </div>

            <form role="form" id="form1">
                <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername" required="true">
                </div>
                <div class="form-group">
                    <a class="pull-right" href="#">Forgot password?</a>
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" required="true">
                </div>
                <div class="checkbox pull-right">
                    <label>
                        <input type="checkbox">
                        Remember me </label>
                </div>
                <input type="button" class="btn btn btn-primary" id="loginBTN" value="Login"/>
                
            </form>

        </div>

    </div>
</div>
</body>
</html>
