// var variable value can be changed
// let variable can be used in scope
// const variable value cannot be changed and used in scope

// Initialize fullname variable and data type is string
var fullname: string = "Abdul Sheikh";

let age: number = 17;

const education: string = "Diploma in Software Engineering";

// here we change fullname value that already assign
fullname = "Abdul Haseeb Sheikh";

console.log(
  `My name is ${fullname} and i am ${age} years old , i done ${education}`
);

// also we can give multiple data type to variable see example below

// to this example variable we give boolean and string both data types and we can change there value to {boolean to string} && {String to boolean} this is called union types

var example: string | boolean = false;

example = "false";

console.log(example);

// here both boolean and string are rightt