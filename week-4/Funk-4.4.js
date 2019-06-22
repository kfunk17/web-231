
/*
=================================================================
; Title:  Assignment 4.4 Predicates
; Author: Karie Funk
; Date:   21 June 2019
; Description: Creating an original array, sorted array, and
; selected value with states.
;================================================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.4"));

console.log("");


//START PROGRAM
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

function get_value(arr, filterValue) {
  for (x = 0; x < states.length; x++) {
    if (arr[x] === filterValue) {
      console.log(arr[x]);
    }
  }
}




//OUTPUT
console.log("-- ORIGINAL ARRAY --")
for (l = 0; l < states.length; l++) {
  console.log(states[l])
}

//BREAK
console.log("");


//OUTPUT FOR SORTING
console.log("-- SORTED ARRAY --");

for (k = 0; k < states.length; k++) {
  states.sort();
  console.log(states[k])
}

//BREAK
console.log("");

//OUTPUT FOR SELECTED VALUE
console.log("-- SELECTED VALUE --");
get_value(states, "Iowa");

//END PROGRAM
