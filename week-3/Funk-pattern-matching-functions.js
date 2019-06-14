/*
============================================================
; Title:  Assignment 3.2 Pattern Matching Functions
; Author: Karie Funk
; Date:   12 June 2019
; Description: Creating a function with if or else statements
;============================================================
*/

//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Week 3"));

//Create six local test variables with default values.

var testVar1 = "train";
var testVar2 = "car";
var testVar3 = "cat";
var testVar4 = "dog";
var testVar5 = "fish";
var testVar6 = "jeep";



//Match Function  
//If they match return true if they do not match return false. 

function match(day, time){

if (day === time) {
    return true;
   
  } 
  else {
      
    return false;
    
  }
}



//Mismatch 

function logMismatch(day, time) {
    console.log(day + " and " + time + " do not match!");
}



//Match

function logMath(day, time) {
    console.log(day + " and" + time + " do match!");
}

// Output from the match function
console.log(match("A", "B"));
console.log(match(2, 2));



//comparison of first and second variables
if (match(testVar1, testVar2)) {
	logMatch(testVar1, testVar2);
} else {
	logMismatch(testVar1, testVar2);
}

//comparison of third and fourth variables
if (match(testVar3, testVar4)) {
	logMatch(testVar3, testVar4);
} else {
	logMismatch(testVar3, testVar4);
}

//comparison of fifth and sixth variables
if (match(testVar5, testVar6)) {
	logMatch(testVar5, testVar6);
} else {
	logMismatch(testVar5, testVar6);
}