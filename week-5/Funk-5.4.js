/*
=================================================================
; Title:  Assignment 5.4
; Karie Funk
; Date:   1 July 2019
; Description: Filtering/Reducing Complex Data Structures
;================================================================
*/

//HEADER
var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 5.4"));

console.log("");


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

//TITLE 1
console.log('-- COMPOSER BY RATING --');

//CREATED A FILTERED LIST OF COMPOSERS BY RATING AND GENRE USING .MAP()
var lastName = composers.map(function (composer) {
  return composer.lastName
})
var rating = composers.map(function (composer) {
  return composer.rating
})
var genre = composers.map(function (composer) {
  return composer.genre
})

//CREATING OUTPUT FOR COMPOSER + RATING
lastName.forEach (function(comp) {
  console.log("Rating: " + rating.shift())
  console.log("Composer: " + comp + "\n")
  }
)

//TITLE 2
console.log('-- COMPOSER BY GENRE --');

//CREATING OUTPUT FOR COMPOSER + GENRE
lastName.forEach (function(comp) {
  console.log("Genre: " + genre.shift())
  console.log("Composer: " + comp + "\n")
  }
)
//END PROGRAM

