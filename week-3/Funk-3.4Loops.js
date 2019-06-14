/*
============================================================
; Title:  Assignment 3.4 Loops
; Author: Karie Funk
; Date:   13 June 2019
; Description: Creating loops
;============================================================
*/

//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.4"));


//variable between 1 and 10

var number = 5;


/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */


function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}


//functions copied from 3.2, only changed values.

function match(x, y){

    if (x  === y) {
        return true;

      }
      else {

        return false;

      }
    }



//Mismatch function

  function logMismatch(x, y) {
    console.log(x + " and " + y + " do not match!");
  }



//Match function

  function logMatch(x, y) {
    console.log(x + " and" + y + " do match!");
  }


//For loop created with 10 iterations

for(i=0; i<10; i++) {
  var randNumber = randomNumber();


if(match(number, randNumber)) {
      logMatch(number, randNumber);
    } else {
      logMismatch(number, randNumber);
    }
  }

//End program




