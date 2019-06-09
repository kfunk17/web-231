/*
============================================
; Title: Assignment 1.5
; Author: Karie Funk
; Date: 04 June 2019
; Modified By: Karie Funk
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/ 

//First Name
var firstName = "Joey";
var firstName1 = "Chandler";
var firstName2 = "Phoebe";


//Last Name
var lastName = "Tribbiani";
var lastName1 = "Bing";
var lastName2 = "Buffay";

//Address
var address = "889 Myrtle Street";
var address1 = "123 Railroad Street";
var address2 = "768 Havelock Ln"; 

//Pay Rate
var n = 15.50;
var n1 = 20.00;
var n2 = 30.00;

var payRate = (n.toFixed(1));
var payRate1 = (n1.toFixed(1));
var payRate2 = (n2.toFixed(1));

//Hire Date
var hireDate = new Date(2012, 5, 10);
var hireDate1 = new Date(2000, 6, 8);
var hireDate2 = new Date(2015, 2, 3);

var hireDate_new = ((hireDate.getMonth() +1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear());
var hireDate_new1 = ((hireDate1.getMonth() +1) + "/" + hireDate1.getDate() + "/" + hireDate1.getFullYear());
var hireDate_new2 = ((hireDate2.getMonth() +1) + "/" + hireDate2.getDate() + "/" + hireDate2.getFullYear());


console.log(firstName + " " + lastName + " " + address + " "  + payRate + " " + " " + hireDate_new);
console.log(firstName1 + " " + lastName1 + " " + address1 + " " + payRate1 + " " + " " + hireDate_new1);
console.log(firstName2 + " " + lastName2 + " " + address2 + " " + payRate2 + " " + " " + hireDate_new2);

