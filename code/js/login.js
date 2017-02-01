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
                //console.log(response);
                if(response[0].id!=-1){
                    //console.log("entrei aqui1");
                    window.location.replace("home.php");
                }else{
                    //console.log("entrei aqui2");
                    //nao entrou
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr);
            }
        });
            
    }
        $('#loginBTN').click(function () {
        btnSend();
    });    

});
