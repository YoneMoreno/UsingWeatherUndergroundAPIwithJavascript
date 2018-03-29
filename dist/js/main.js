'use strict';

// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
    } // end if
}; // end function

function display(numberOfRoom) {
    console.log(numberOfRoom);
    document.getElementById('roomName').innerHTML = hotelInfo[numberOfRoom].name;
    document.getElementById('desc').innerHTML = hotelInfo[numberOfRoom].description;
    document.getElementById('photo').src = hotelInfo[numberOfRoom].photo;

    document.getElementById('weekday').innerHTML = hotelInfo[numberOfRoom].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[numberOfRoom].cost.weekend;

    details = "";
    for (var i = 0; i < hotelInfo[numberOfRoom].details.length; i++) {
        console.log(hotelInfo[numberOfRoom].details[i]);
        details += "<p>" + hotelInfo[numberOfRoom].details[i] + "</p>";
    }
    document.getElementById('details').innerHTML = details;
}
//# sourceMappingURL=main.js.map