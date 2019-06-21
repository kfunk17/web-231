/*
=================================================================
; Title:  Assignment 4.2 Arrays
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   21 June 2019
; Description: Creating an array with fruits, that will
; output all fruits listed.
;================================================================
*/


//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.2"));

//Start Program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//function
function getFruit(arr) {
    for(var k = 0; k < arr.length; k++) {
      console.log(arr[k]);
    }
}

//Output from the getFruit function
getFruit(fruits);

//End Program
