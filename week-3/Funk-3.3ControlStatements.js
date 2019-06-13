/*
============================================================
; Title:  Assignment 3.3 Control Statements
; Author: Karie Funk
; Date:   13 June 2019
; Description: Creating switch statements from if else
;============================================================
*/

//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 3.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

//Multiway branch of if statements (replaced with switch statement)

let eventKeyCode = 13

switch (eventKeyCode) {
    case 13:
      console.log("The enter key was pressed.");
      break;
    case 16:
      console.log("The shift key was pressed.");
      break;
    case 32:
      console.log("The spacebar key was pressed.");
      break;
    case 8:
       console.log("The backspace / delete key was pressed.");
       break;
    default:
       console.log("Unrecognized key press");
       break;

}

//end program