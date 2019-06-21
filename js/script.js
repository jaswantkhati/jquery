$(document).ready(function() {
    var id = 0;
    $(".add").click(function() {
        $(".container").append(`<div id = ${id} class="main1"><input type="text"><button class="btn">Browse</button><select><option>Secondry image </option></select><span ><button id = ${id} class="remove">remove</button></span></div>`)
        id++;
        let loop = id;
        for (loop; loop > 0; loop--) {
            $(".remove").click(function(element) {
                $("#" + loop).remove()
            })
        }
    });
});