/*
Array methods are. functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
*/

// There are many array methods here are few methods

// push - start from 13 line
// pop - 20
// shift - 27
// unshift - 34

//
// push method example
let pusharray: string[] = ["push", "array"];
// push method add element on last index of our array and return new array length
pusharray.push("method", "one");
console.log("push array :", pusharray); // result of pusharray after console ["push", "array", "method", "one"]

//
// pop method example
let poparray: string[] = ["pop", "array"];
// pop method remove the last element from array and returns remove element
poparray.pop();
console.log("pop array :", poparray); // result of poparray after console ["pop"]

//
// shift method example
let shiftarray: string[] = ["shift", "array"];
// shift method Removes the first element from an array and returns it
shiftarray.shift();
console.log("shift array :", shiftarray); // result of shiftarray after console ["array"]

//
// unshiftarray method example
let unshiftarray: string[] = ["array"];
// unshiftarray method Inserts new elements at the start of an array, and returns the new length of the array.
unshiftarray.unshift("unshift");
console.log("unshift array :", unshiftarray); // result of unshiftarray after console ['unshift', 'array']
