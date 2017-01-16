$(document).ready(function(){
    function btnSend() {
        console.log("Entrei");
        $.ajax({
            type: 'POST',
            url: 'http://localhost/ISFinal/ws/loginws.php',
            dataType: 'json',
            data: {
                user: $('#inputUsername').val(),
                pass: $('#inputPassword').val()
            },
            success: function (response) {
                console.log(response);
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
});