/*
=================================================================
; Title:  Assignment 6.3
; Author: Karie Funk
; Date:   6 July 2019
; Description: Object Literals
;================================================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.3"));

console.log("");



//START PROGRAM

var ticket = {

  //PROPERTIES
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones",

  //GET METHOD
  get ticketInfo(){
    return "id: " + this.id + ", " + "name: " + this.name + ", " + "requestor: " + this.requestor;

 },

 //SET METHOD
 set ticketInfo(val) {
  this.ticket = val;


 }
}

//OUTPUT
console.log(ticket.ticketInfo);

//END PROGRAM




