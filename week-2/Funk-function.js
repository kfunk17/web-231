/*
============================================
; Title: Assignment 2.4
; Author: Karie Funk
; Date: 11 June 2019
; Description: Creating Functions
;===========================================
*/

//header
var header = require('./Funk-header.js'); 
console.log(header.display("Karie", "Funk", "Week 2"));

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...

//function full name
function fullName(first, last) {
    return first + ' ' + last;
}

//function date
function dateWriter(year, month, day) {
    var nDate;
    nDate = new Date(year + "-" + month + "-" + day);
    return nDate.toLocaleDateString("en-US");
}

//function temperature
function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition);
}

//function age
function convertToInt(stringInteger) {
    return parseInt(stringInteger);
    }


//function savings goal
function convertToFloat(stringFloat){
    return parseFloat(stringFloat); 
    
}

// output 
console.log("Hello my name is " + fullName("Karie", "Funk") + "!\n"); 
console.log("Today's date is " + dateWriter(2019, 06, 10) + " and the current temperature is " + formatNumber(50.01, 1) + ".\n");
console.log("I am " + convertToInt("24") + " years old, and my savings account goal is " + convertToFloat("100000.00") + " dollars.");





// end program