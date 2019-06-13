
/*
============================================
; Title:  Assignment 2.3 Function Properties
; Author: Professor Krasso 
; Date:   09 June 2019
; Modified by: Karie Funk
; Description: Creating a function property
;===========================================
*/

var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Week 2"));



// Function properties go here

myName.Karie = "Karie";

// Function

function myName() {
  return myName.Karie;
}

// Output
console.log('\n');
console.log("Hello " + myName() + " Funk");

