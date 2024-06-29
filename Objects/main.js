"use strict";
// Objects
let user = {
    username: "haseebsheikh",
    email: "haseebsheikh2380@gmail.com",
    password: "haseebsheikh2380",
};
// if you want to get any user value you can get it using
// console.log(user.username); - Output "haseebsheikh" // you can replace username to another value that you want from object
// objects methods
// Add values - line 21
// remove values - line 37
// find values - line 52
//
//
//
//
// used to add values in object
// if you want to add values in object you can used this method
user.address = "pakistan";
// now will ( address: 'pakistan' ) add in object
//
// console.log(user);
//
// Output
// {
//     username: 'haseebsheikh',
//     email: 'haseebsheikh2380@gmail.com',
//     password: 'haseebsheikh2380',
//     address: 'pakistan'
// }
//
// used to remove values from object
// if you want to remove values from object you can used this method
delete user.email;
// now will ( email: 'haseebsheikh2380@gmail.com' ) remove from object
//
// console.log(user);
//
// Output
// {
//     username: 'haseebsheikh',
//     password: 'haseebsheikh2380',
//     address: 'pakistan'
// }
//
// used to find values in object
// if you want to find values in object you can used this method
let haveusername = "username" in user;
// you can also console it directly without assigned it into variable
//
// console.log(haveusername);
//
// Output
// true
