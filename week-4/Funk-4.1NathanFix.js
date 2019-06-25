/**
 * Title: Discussion Board 4.1
 * Author: Nathaniel Liebhart
 * Modified by: Karie Funk
 * Date: June 19th, 2019
 * Description: Application using an array method
 */

 // The goal of this program is to remove Phone from the array and place Mouse in its place.

// This is an array of animals, but one of the items isn't an animal
//Added in a comma between 'Dogs' and 'Cows'.
var animals = ['Cats', 'Dogs', 'Cows', 'Phone'];
// This method will take in 3 parameters in order to remove the item that doesn't belong and add in Mouse
//Below was animals.slice(3 ,1, 'Mouse'); which I corrected to animals.splice(3, 1, 'Mouse');
animals.splice(3, 1, 'Mouse');
// This will print the items within the array
console.log(animals);
