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
        btnSend();
    });
    
});