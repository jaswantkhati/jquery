$(document).ready(function() {
    $(".add").click(function() {
        $(".container").append('<div class="main2"><input type="text"><button class="btn">Browse</button><select><option>Secondry image </option></select><span class="remove1">remove</span></div>')
    });
    $(".remove").click(function() {
        $('.main').remove();
    });
    $(".remove1").click(function() {
        $('.main2').remove();
    });
});