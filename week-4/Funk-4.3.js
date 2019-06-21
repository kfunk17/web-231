/*
=================================================================
; Title:  Assignment 4.2 Arrays
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   21 June 2019
; Description: Creating a string array of five vehicles.
;================================================================
*/


//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.3"));

console.log("");

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

//START PROGRAM
//One dimensional array of vehicles
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//FUNCTION
function getValue(arr, val)  {
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === val)
       console.log(arr[k]);
  }
}

//OUTPUT
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}

//NEW LINE
console.log("");

console.log("-- SELECTED VALUE -- ");
getValue(vehicles, "Motorcycle");

console.log("-- SELECTED VALUE -- ");
getValue(vehicles, "Bus");

console.log("-- SELECTED VALUE -- ");
getValue(vehicles, "Car");

//END PROGRAM
