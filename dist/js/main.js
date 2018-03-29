'use strict';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.onload = function () {
    if (xhr.status === 200) {
        var object = JSON.parse(xhr.responseText);
        console.log(object);
    }
};
xhr.send();
//# sourceMappingURL=main.js.map