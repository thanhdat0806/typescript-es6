"use strict";
let isDone = false;
console.log(isDone);
let decimal = 6;
console.log(decimal);
let fullName = "Dat";
let age = 20;
let sentense = `
 Hello, my name is ${fullName}, age is ${age + 1}
`;
console.log(sentense);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
let c = color.green;
console.log(c);
