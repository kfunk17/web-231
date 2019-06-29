/*
=================================================================
; Title:  Assignment 5.1 reduce() example with two errors
; Author: MDN Web Docs
; Modified by: Karie Funk
; Date:   28 June 2019
; Description: Creating an reduce method in an array.
;================================================================
*/



//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 4.4"));

console.log("");

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// expected output: 10

// 2 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 2);
// expected output: 15
