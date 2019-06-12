/*
============================================
; Title:  3.1 Control Statement Switch Error
; Author: Chris Love - https://love2dev.com
; Date:   12 June 2019
; Modified by: Karie Funk
; Description: If errors are corrected will display
; correct day of week. 
;===========================================
*/

  

var my_day=new Date();

switch (my_day.getday()) 
   {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case :
        console.log("Today is Friday");
        break;
    
    case 6:
        console.log("Today is Saturday");
        break;
    
        default:
            console.log("value of i is not equal to any given days");
            break;
    
    }