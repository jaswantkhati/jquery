$("#submit").click(function() {
    var email = $("#email").val();
    var password = $("#pass").val();
    var conpassword = $("#conpass").val();
    var check = $("#check").is(':checked');

    if (email == "") {
        alert("please enter your email");
        $("#email").focus();
    } else if (password == "") {
        alert("please enter password");
        $("#pass").focus();
    } else if (conpassword == "" && conpassword != password) {
        alert("please enter currect password");
        $("#conpass").focus();
    } else if (check == false) {
        alert("Please Agree To Terms and Conditions.");
    } else {
        alert("sucess")
    }
    return false;
});