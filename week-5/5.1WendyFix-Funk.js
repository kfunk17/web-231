/*
============================================
 Title:  Discussion Board-5.1.js
 Author: Mozilla (developer.mozilla.org)
 Modified By: Wendy Portillo
 Date:   June 27, 2019
 Description: Simple program on how to use
       arrays and operators.
===========================================
*/
// Load additional JavaScript file

// Start program

// Create a map

var sayings = new Map(); //Added semicolon
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');//Added ' at end
sayings.set('elephant', 'toot');
sayings.set('3'); // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog'); //changed dele to delete
sayings.has('dog'); // false


for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"
sayings.clear();
sayings.size; // 0
// Set Object
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');//Fixed myset to mySet

mySet.has(1); // true
mySet.delete('foo');
mySet.size;

for (var [key, value] of sayings) { // CHANGED fr TO for
    console.log(key + ' goes ' + value);
}
// 1
// "some text"

sayings.clear();
sayings.size; // 0
// Set Object
var mySet = new Set();
mySet.add(1);
mySet.add('some text'); //Added ' to beginning
myset.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size;
for (let item of mySet) console.log(item);
// 1
// "some text"
