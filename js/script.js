$(document).ready(function() {
    $("#btn").click(function() {
        alert("Button is clicked")
    });
    $("#btn").hover(function() {
        $(this).append($("<span>## </span>"));

    });
    $(".txt").focus(function() {
        alert("handler for focus");

    });
    $(".btn2").mouseover(function() {
        $(this).append($("<span>## </span>"));
    });
    $(".btn2").mouseover(function() {
        $(this).append($("<span>**</span>"));
    });
    $("#id-checkbox").click(function(e) {
        $("#output-box").html("Sorry! <code>preventDefault()</code> won't let you check this!<br>");
        e.preventDefault();
    });
})