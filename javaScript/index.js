
// ways to print in javascript
console.log("hello world");
// alert("me");  
//console API
console.warn("this is warning");
console.error("this is error warning")

// variable in javaScript
//container to store values
// var name1 = 12;
// var name2 = 13;
// console.log(name1 + name1)

let a = 22;
let b = 44;
let c = a + b;
console.log("number addition:: " + c);
let s1 = "20";
let s2 = "30";
let n = s1 + s2;
console.log("string addition:: " + n)
let d = new Date();
let today = "Today is: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
let time = "Time is: "+ d.getHours() + ":" + (d.getMinutes());
console.log("Today Date:: "+ today);
console.log("Today Time:: " +time);
// hello world
// this is warning
// this is error warning
// number addition:: 66
// string addition:: 2030
// Today Date:: today is: 3/24/2022
var val;
var datatype1 = typeof val;

var val = 0;
var datatype2 = typeof val;

var val = 10n;
var datatype2 = typeof val;

var val = true;
var datatype4 = typeof val;

var val = "lol";
var datatype5 = typeof val;

let datatype6 = typeof Symbol("id");

var datatype7 = typeof Math;

var datatype8 = typeof null;

let hello = function () {
    console.log.apply("say hello")
};

var dataType9 = typeof sayHello;
console.log(dataType9);
// hp@hp-HP-EliteBook-840-G3:~/Desktop/HTML,CSS/javaScript$ node newFile.js
// symbol