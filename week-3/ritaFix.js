
/*
===========================================================
Title: Magic Eight Ball (FIXED VERSION)
Author: codecademy.com
Date: 13 June 2019
Modified By: Rita DeBraal
Modified and fixed by: Karie Funk
Description: Provide in the code a question that you would
             like the magic eight ball to answer.
============================================================
*/

// Variable declarations
var userName = '' // Purposely left blank to give a false
var userQuestion = 'Will I die?' // User (coder) provided question
var randomNumber = Math.floor(Math.random() * 6); // To get Eight Ball Answer with switch statement
var eightBall = '' // Not given a value to let switch statement provide instead

/*
 Ternary operators for a if...else statement
 If the user(coder) provides a name use it if not simply print Hello!
*/
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// Print user question affirmation
console.log(`You asked: ${userQuestion}`);

//ADDED IN (); TO EACH STRING (KF)
// Switch statement to answer question
switch(randomNumber) {
  case 0:
    eightBall = ('It is certain');    
  case 1:
    eightBall = ('It is decidedly so');
    break;
  case 2:
    eightBall = ('Reply hazy try again');
    break;
  case 3:
    eightBall = ('Cannot predict now');
    break;
  case 4:
    eightBall = ('Do not count on it');
    break;
  case 5:
    eightBall = ('My sources say no');
    break;
  case 6:
    eightBall = ('Outlook not so good');
    break;
  case 7:
    eightBall = ('Signs point to yes');
    break;
  default:
    eightBall = ('The great trash heap has spoken');
    break;
}

//ADDED ); AT END, WHICH WAS LEFT OUT (KF)
// Print Eight Ball answer
console.log(eightBall);