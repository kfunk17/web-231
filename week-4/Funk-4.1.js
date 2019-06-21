/*
=================================================================
; Title:  Assignment 4.1 Arrays
; Author: William Imoh https://scotch.io/tutorials
; Modified by: Karie Funk
; Date:   20 June 2019
; Description: Using array.map() example with two errors.
;================================================================
*/


//header
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.1"));


// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArraymap(makeSweeter);

console.log(sweetrArray);

// Result [4, 6, 8, 10, 70]

