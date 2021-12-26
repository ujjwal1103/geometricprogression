console.log("geometric Progration");
var n = parseInt(prompt("Nth term which we have to find"));
var a = parseInt(prompt("first term of the series"));
var r = parseInt(prompt("common ratio between two terms"));

var nth_term;
nth_term = ( a *(Math.pow(r, n - 1)));
alert(nth_term);
