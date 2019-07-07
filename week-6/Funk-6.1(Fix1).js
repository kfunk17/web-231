/*
=======================================================================
; Title:  Assignment 6.1 (Error Fix Solution 1)
; Author: Nathan Liebhart
; Modified by: Karie Funk
; Date:   7 July 2019
; Description: This program demonstrates the
; use of object properties, but has two
; intentional mistakes. Mistakes have been corrected and program runs
; correctly.
;======================================================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.1 Justin Fix"));

console.log("");

// object person with its properties
var person = {
  firstName: 'Justin',
  lastName: 'Singleton',
  gender: 'male', //added missing comma after word
  birthday: 'date',
  eyeColor: 'brown',//added comma afte word
};
// print initial properties
//Put in + between properties and deleted commas
console.log(person.firstName + " " + person.lastName + " " + person.birthday + " " + person.eyeColor);
// delete wrong properties
delete person.birthday;
delete person.eyeColor;
// show what deleted properties look like
//Put in + between properties and deleted commas
console.log(person.firstName + " " + person.lastName + " " + person.birthday + " " + person.eyeColor);
// add correct properties
person.birthday = "02 October 1995";
person.eyeColor = "Green";
// print statement with correct properties
console.log(person.firstName + "" + person.lastName + " was born on " + person.birthday +
//added a + instead of , in between first name and last name
" and his eye color is " + person.eyeColor); //added a + sign between "was born on" and person.birthday

/*
--- EXPECTED OUTPUT ---
Justin Singleton date brown
Justin Singleton undefined undefined
Justin Singleton was born on 02 October 1995 and his eye color is Green
-----------------------
*/
