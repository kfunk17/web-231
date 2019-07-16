/*
=======================================================================
; Title:  Assignment 7.2
; Author: Karie Funk
; Date:   15 July 2019
; Description: Created an employee constructor object.
;======================================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/



//START PROGRAM

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 7.2"));

console.log("");

//Created an employee constructor object with four (4) parameters/fields
function employee(id, firstName, lastName, title) {

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

}

//Populated an array with five (5) employee objects
var employees = [

  new employee(1, "Jimi", "Hendrix", "Psychedelic hard rock guitarist"),

  new employee(2, "David", "Gilmour", "Pink Floyd Guitarist"),

  new employee(3, "Mark", "Knopfler", "Dire Straits Guitarist"),

  new employee(4, "Randy", "Rhoads", "Ozzy Osbourne Guitarist"),

  new employee(5, "Stevie Ray", "Vaughan", "Blues guitarist")

];

//Looped over the array and output the results
let index = 0
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id, employees[x].firstName, employees[x].lastName, employees[x].title);
}


//END PROGRAM
