$(document).ready(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var password = $("#pass").val();
        var conpassword = $("#conpass").val();


        if (email == '') {
            $("#alert1").html("please fill this");
        } else {
            var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var value = regEx.test(email);
            if (value == false) {
                $("#alert1").html("**Enter a valid mail");
            } else {
                $("#alert1").html("**Sucess");
            }
        }
        if (password.length < 8 || password == '') {
            $("#alert2").html("**Enter a valid password");
        } else {
            $("#alert2").html("**Sucess");
        }
        if (conpassword != password || conpassword == '') {
            $("#alert3").html("**Your password is not  maching");
        } else {
            $("#alert3").html("**Sucess");
        }
        if ($("#check").is(":checked")) {
            $("#alert4").html('**Sucess');

        } else {
            $("#alert4").html('**Please Agree terms and conditions');
        }
        if ($("#alert1").text() == "**Sucess") {
            $("#alert1").css('color', 'green');
        }
        if ($("#alert2").text() == "**Sucess") {
            $("#alert2").css('color', 'green');
        }
        if ($("#alert3").text() == "**Sucess") {
            $("#alert3").css('color', 'green');
        }
        if ($("#alert4").text() == "**Sucess") {
            $("#alert4").css('color', 'green');
        }

    });
})