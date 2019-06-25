/*
 Title: Discussion Board 3.1
 Author: Tania Rascia (www.digitalocean.com)
 Date: 17 June 2019
 Modified By: Wendy Portillo and fixed by Karie Funk
 Description: Practice simple arrays by creating an array literal,
 using indices to access array members and use methods like push,
 join, pop and shift to manipulate the array. I added three errors that will
 need to be corrected before the program will run.
 */



// Start program


// Create a new array named languages that contains at least 7 programming languages.
let languages = ['JavaScript','Python', 'Java', 'C#', 'PHP', 'Swift', 'Ruby'];

// console.log to display the number of elements in the array:
//the error was console.log(languageslength); I added the . in between languageslength
console.log(languages.length);

/* Use console.log to list the first element from the array using an index value. */
console.log(languages[0]);

/* Use console.log to list the last element from the array using an index value. */
//Corrected this from console.log(languages[languages.length 7]); console.log(languages.indexOf(7));
console.log(languages.indexOf(7));


/*
 Title: Discussion Board 3.1
 Author: JavaScript for Cats (http://jsforcats.com/#arrays)
 Date: 17 June 2019
 Modified By: Wendy Portillo
 Description: Practice simple arrays by creating an array literal,
 using indices to access array members and use methods like push,
 join, pop and shift to manipulate the array. I added three errors that will
 need to be corrected before the program will run.
 */


let myCatFriends = ["bill","tabby", "ceiling"];
//Added an ; to end of console.log(myCatFriends.push("super hip cat"));
console.log(myCatFriends.push("super hip cat"));
console.log(myCatFriends.length);
//Fixed console.log(myCatFriends (0)); to console.log(myCatFriends [0]);
console.log(myCatFriends [0]);
//Changed this to [3] instead of [4], since there was no fourth array.
console.log(myCatFriends [3]);
