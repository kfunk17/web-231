/*
=================================================================
; Title:  Assignment 5.3
; Author: Richard Krasso
; Modified by: Karie Funk
; Date:   30 June 2019
; Description: Object Collections
;================================================================
*/



//HEADER
//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 5.3"));

console.log("");



/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//START PROGRAM
//ARRAY LIKE OBJECT COLLECTION OF COMPOSERS
var composers = [
	{
		firstName: "Ludwig van",
		lastName: "Beethoven",
		genre: "Classical",
		rating: 8
	},
	{
		firstName: "Wolfgang Anadeus",
		lastName: "Mozart",
		genre: "Classical",
		rating: 10
	},
	{
		firstName: "Johann Sebastian",
		lastName: "Bach",
		genre: "Classical",
		rating: 9
	},
	{
		firstName: "Joseph",
		lastName: "Haydn",
		genre: "Classical",
		rating: 6
	},
	{
		firstName: "Franz",
		lastName: "Schubert",
		genre: "Classical",
		rating: 5
	}
];

//TITLE
console.log('-- COMPOSERS --');

//CREATING OUTPUT
composers.forEach(function(composer){
	console.log(
		"Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
	);
});
//END PROGRAM
