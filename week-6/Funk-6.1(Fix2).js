/*
============================================
 Title:  Discussion Board-6.1.js
 Author: TutorialsPoint(tutorialspoint.com)
 Modified By: Wendy Portillo
 Fixed By: Karie Funk
 Date:   July 2, 2019
 Description: Objects and Built-In Objects
===========================================
*/


// Start program
// Array like object containing composers
var composers = [
	{
    firstName: "Ludwig",
    lastName: "van Beethoven",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johann",
    lastName: "Sebastian Bach",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Richard",
    lastName: "Wagner ",
    genre: "Classic",
    rating: "10"
  }, //added missing } before comma
  {
    firstName: "Wolfgang",
    lastName: "Amadeus Mozart",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classic",
    rating: 10 //deleted ' after 10
  }
]
composers.forEach(function(composer){
  console.log(composer)
})

