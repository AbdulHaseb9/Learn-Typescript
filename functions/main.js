"use strict";
//
//
//
// This is called name function
function nameFunction() {
    let a = 89;
    let b = 39;
    return a + b;
}
console.log("Name function :", nameFunction());
//
//
//
// in this example we use arrow function
let arrowfunction1 = () => {
    let data = "2f";
    return data;
};
console.log("Arrow Function :", arrowfunction1());
//
//
// we use arguments and parameters in this function
//
// Example 1
//
// we defined parameters in starting paranthesis and we can give any name to prameters
let sumNumber = (value1, value2, value3) => {
    let sum = value1 + value2 * value3;
    return sum;
};
// we passed arguments where we call our function if we give 3 parameters we have to defined 3 arguments
console.log("Arguments and Parameters Function sum numbers:", sumNumber(86, 239, 22));
//
//
// Example 2
//
//
// In this example we sum 2 or more strings using parameters and arguments
//
let sumString = (string1, string2, string3) => {
    let sum = string1 + string2 + string3;
    return sum;
};
// we passed arguments where we call our function if we give 3 parameters we have to defined 3 arguments
console.log("Arguments and Parameters Function sum strings:", sumString("Abdul ", "Haseeb ", "Sheikh"));
//
//
// Example 2
//
//
// In this example we give default parameter value if we not give any argument value it takes default value and if we give it will replace default value to argument value
//
let defaultparameter = (string1 = "World ", string2 = "Health ", string3 = "Organization") => {
    let sum = string1 + string2 + string3;
    return sum;
};
// we passed arguments where we call our function if we give 3 parameters we have to defined 3 arguments
console.log("Default parameters value :", defaultparameter());
//
//
//
//
//
// Nested Functions
const nestfunc1 = () => {
    let num = 2 + 52;
    return num;
};
const nestfunc2 = () => {
    console.log("Nested function :", nestfunc1());
};
nestfunc2();
