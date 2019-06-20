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
            if (regEx.test(email) == false) {
                $("#alert1").html("**Enter a valid mail");
            } else {
                $("#alert1").html("true");
                $("#alert1").css('color', '#339966');
            }
        }
        if (password.length < 8 || password == '') {
            $("#alert2").html("**Enter a valid password");
        } else {
            $("#alert2").html("true");
            $("#alert2").css('color', '#339966');
        }
        if (conpassword != password || conpassword == '') {
            $("#alert3").html("**Your password is not  maching");
        } else {
            $("#alert3").html("true");
            $("#alert3").css('color', '#339966');
        }
        if ($("#check").is(":checked")) {
            $("#alert4").html('true');
            $("#alert4").css('color', '#339966');
        } else {
            $("#alert4").html('**Please Agree terms and conditions');
        }
    });
})