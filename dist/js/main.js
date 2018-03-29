'use strict';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        var object = JSON.parse(xhr.responseText);
        console.log(object.presidents);

        for (var i = 0; i < object.presidents.length; i++) {
            console.log(object.presidents[i].first);
            console.log(object.presidents[i].last);
            console.log(object.presidents[i].served);
            console.log(object.vicepresidents[i].first);
            console.log(object.vicepresidents[i].last);
        }

        var myText = "";
        for (var i = 0; i < object.presidents.length; i++) {
            var x = i + 1;
            myText += '<br>President number ' + x + ' was: ' + object.presidents[i].first + '';
            myText += ' Last name: ' + object.presidents[i].last + ' ';
            myText += ' He served from ' + object.presidents[i].served + " with ";
            myText += object.vicepresidents[i].first + ' ';
            myText += object.vicepresidents[i].last;
        }

        document.getElementById('message').innerHTML = myText;
    }
};
//# sourceMappingURL=main.js.map