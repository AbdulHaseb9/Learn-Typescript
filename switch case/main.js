"use strict";
/*
  In this code we get user marks and show them grade according to marks using switch case
*/
let marks = 86;
switch (true) {
    case marks >= 40 && marks <= 60:
        console.log("Your Grade is C");
        console.log("You need to be improved");
        break;
    case marks > 60 && marks <= 70:
        console.log("Your Grade is B");
        console.log("You can improved");
        break;
    case marks > 70 && marks <= 85:
        console.log("Your Grade is A");
        console.log("Your grade is excellent");
        break;
    case marks > 85:
        console.log("Your Grade is A+");
        console.log("Your grade is superb");
        break;
    default:
        console.log("You failed");
        break;
}
