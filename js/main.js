// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
  
    } // end if
} // end function

function display(numberOfRoom){
    console.log(numberOfRoom);
    document.getElementById('roomName').innerHTML = hotelInfo[numberOfRoom].name;
    document.getElementById('desc').innerHTML = hotelInfo[numberOfRoom].description;
    document.getElementById('photo').src = hotelInfo[numberOfRoom].photo;
}