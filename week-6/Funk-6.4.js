/*
=======================================================================
; Title:  Assignment 6.4
; Author: Karie Funk
; Date:   6 July 2019
; Description: A nested literal object inside of literal object with a
; ticket and person being the example.
;======================================================================
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.4"));

console.log("");


//OBJECT LITERAL TICKET WITH PROPERTIES OF TICKET
var ticket = {

  id: 48,
  name: "Brad Kool",
  dateCreated: new Date(),
  priority: 2,
  personId: 86,


   //NESTED OBJECT LITERAL PERSON WITH PROPERTIES OF PERSON
   person: {

     id: 86,
     firstName: "Brad",
     lastName: "Kool",
     jobTitle: "Web Designer",

     }

};


//OUTPUT
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated.toLocaleDateString('en-US') + " and assigned to employee "
+ ticket.person.firstName + " " + ticket.person.lastName + " " + "(" + ticket.person.jobTitle + ").");

//END PROGRAM
