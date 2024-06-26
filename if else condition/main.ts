/*
    In this code we create user two users login method using if else condition in typescript 
*/

// user one login data
let username1: string = "abdulhaseb9";
let password1: string = "haseebsheikh99";
let otp1: number = 4044;

// user two login data
let username2: string = "sheikhhaseeb";
let password2: string = "sheikhhaseeb09";
let otp2: number = 1357;

if (username1 == "abdulhaseb9" && password1 == "haseebsheikh99") {
  if (otp1 == 4044) {
    console.log("User one Login Successfully");
  } else {
    console.log("invaild verification code of first user");
  }
} else if (username2 == "sheikhhaseeb" && password2 == "sheikhhaseeb09") {
  if (otp2 == 1357) {
    console.log("User two Login Successfully");
  } else {
    console.log("invaild verification code of second user");
  }
} else {
  console.log("user not found");
}
