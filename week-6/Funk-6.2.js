/*
=================================================================
; Title:  Assignment 6.2
; Karie Funk
; Date:   6 July 2019
; Description: try/catch/finally statement
;================================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.2"));

console.log("");

//START PROGRAM

try {

  var x = 0;

  var y = 2;

  var sum = y / x;

if (sum == Infinity) throw "oh well whatever never mind...";

  console.log(sum);

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause reached...");

}
