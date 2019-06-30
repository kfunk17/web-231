/*
=================================================================
; Title:  Assignment 5.2
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   30 June 2019
; Description: Built-In functions
;================================================================
*/



//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 5.2"));

console.log("");

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//START PROGRAM
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

foods.forEach(function(food) {
 console.log(food);
});

//END PROGRAM
