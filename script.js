window.onload = function() {
    var json = [{
        "firstName": "jaswant",
        "lastName": "Khati",
        "DOB": "8 may 2000"
    }];

    document.getElementById("data1").innerHTML = json[0].firstName;
    document.getElementById("data2").innerText = json[0].lastName;
    document.getElementById("data3").innerText = json[0].DOB;
};