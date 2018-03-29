'use strict';

var theData2 = '{"Jane":' + '{"age":"30",' + '"degree":{"physics":"Virginia","Math":"Utah"}},' + '"Jim":' + '{"age":"60","degree":"pharmacy"}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.Jane.degree.physics;
//# sourceMappingURL=main.js.map