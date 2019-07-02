/*
============================================
; Title: Assignment 1.4
; Author: Justin Singleton
; Modified by: Karie Funk
; Date: 01 July 2019
; Description: This program demonstrates the
; use of keyed collection arrays and has
; has been corrected. 
;===========================================
*/

// creation of grouping drinks
var drinks = new Map(); //Changed from Set() to Map()
// setting the grouping values and keys
drinks.set('Vodka', 'Lime');
drinks.set('Whiskey', 'Juice');
drinks.set('Gin', 'Coke');
drinks.set('Rum', 'Tonic');
drinks.set('Tequila', 'Redbull');

console.log("");
console.log("-- WRONG SET --");
console.log("");
// print values of drinks
for (var [key, value] of drinks) { //changed from drink to drinks
    console.log(key + " goes with " + value);
}
// changing values of drinks
drinks.set('Vodka', 'Redbull');
drinks.set('Whiskey', 'Coke');
drinks.set('Gin', 'Tonic');
drinks.set('Rum', 'Juice');
drinks.set('Tequila', 'Lime');

console.log("");
console.log("-- CORRECT SET --");
console.log("");
// printing corrected values of drinks
for (var [key, value] of drinks) { //changed from drink to drinks
    console.log(key + " goes with " + value);
}

/*
-----EXPECTED OUTPUT-----
-- WRONG SET --
Vodka goes with Lime
Whiskey goes with Juice
Gin goes with Coke
Rum goes with Tonic
Tequila goes with Redbull
-- CORRECT SET --
Vodka goes with Redbull
Whiskey goes with Coke
Gin goes with Tonic
Rum goes with Juice
Tequila goes with Lime
--------------------------
*/