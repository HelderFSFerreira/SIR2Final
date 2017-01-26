/**
 * Created by helde on 16/01/2017.
 */
$(document).ready(function() {
    var msg = false;
    $.validator.addMethod(
        "uniqueUserName",
        function (value, element) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost/SIRFinal/ws/checkUserRegistered.php',
                dataType: 'json',
                data: {
                    user: value
                },
                success: function (response) {
                    if (response.status == 1) {
                        msg = true;
                    } else {
                        msg = false;
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                }
            });
            return msg;
        }
    )

    $('#form1').validate({
        rules: {
            password: {
                required: true,
                minlength: 3
            },
            username: {
                uniqueUserName: true,
            },
            confirm: {
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                uniqueUserName: "Username already taken",
            }
        }
    });

    $("#btnSubmit").click(function () {
        if ($('#form1').valid()) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost/SIRFinal/ws/newuser.php',
                dataType: 'json',
                data: {
                    user: $('#username').val(),
                    pass: $('#password').val(),
                    name: $('#name').val(),
                    email: $('#email').val()
                },
                success: function (response) {
                    console.log(response);
                    if (response.status == 1) {
                        console.log("Registou");
                        document.location.href = "../index.php";
                    } else {
                        console.log("NãoRegistou");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                    console.log(ajaxOptions);
                    console.log(thrownError);
                }
            });
        }
    });
});