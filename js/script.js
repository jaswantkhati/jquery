$(document).ready(function() {
    $(".add").click(function() {
        $(".container").append('<div class="main"><input type="text"><button class="btn">Browse</button><select><option>Secondry image </option></select></div>')
    });
    $(".remove").click(function() {
        $('.main').remove();
    });
});