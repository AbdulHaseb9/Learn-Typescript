/*
Array methods are. functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
*/

// There are many array methods here are few methods

// push - start from 13 line
// pop - 20
// shift - 27
// unshift - 34
// slice - 43
// splice - 57

//
// push method example
let pusharray: string[] = ["push", "array"];
// push method add element on last index of our array and return new array length
pusharray.push("method", "one");
// console.log("push array :", pusharray); // result of pusharray after console ["push", "array", "method", "one"]

//
// pop method example
let poparray: string[] = ["pop", "array"];
// pop method remove the last element from array and returns remove element
poparray.pop();
// console.log("pop array :", poparray); // result of poparray after console ["pop"]

//
// shift method example
let shiftarray: string[] = ["shift", "array"];
// shift method Removes the first element from an array and returns it
shiftarray.shift();
// console.log("shift array :", shiftarray); // result of shiftarray after console ["array"]

//
// unshiftarray method example
let unshiftarray: string[] = ["array"];
// unshiftarray method Inserts new elements at the start of an array, and returns the new length of the array.
unshiftarray.unshift("unshift");
// console.log("unshift array :", unshiftarray); // result of unshiftarray after console ['unshift', 'array']

//
// slice method example
let slicearray: string[] = ["slice", "array", "method", "example"];
// the slice() method return selected elements as a new array , and doesn't modified old array
let slicearraynew: string[] = slicearray.slice(1, 3);
// console.log("slice array :", slicearray); // Output ['slice', 'array', 'method', 'example']
// console.log("slice array after modified :", slicearraynew); // Output ['array', 'method']
//
// if we want last three elements of our array we can use slice method as give below
let lastslicearray: string[] = ["slice", "array", "method", "example"];
// the slice() method return selected elements as a new array , and doesn't modified old array
let lastslicearraynew: string[] = slicearray.slice(-3);
// console.log(lastslicearraynew); // Output ['array','method','example']

//
// splice method example
let splice: string[] = ["slice", "array", "method", "example"];
// the splice() method remove elements from original array and optional(add replace value from index give in arguments)
let splicenew: string[] = splice.splice(1, 3); // this splice method mean it will remove value from 1 index to 3 from our original array/splice and return remove values
// console.log(splice); // [ 'slice' ]
// console.log(splicenew); // [ 'array', 'method', 'example' ]
//
// if we want to replace value from specific index we can also use splice method
let replacesplice: string[] = ["replace", "slice", "method", "from", "array"];
// this will return deleted value and add values from specific index in original array
let replacesplicenew: string[] = replacesplice.splice(
  1,
  3,
  "it",
  "replace",
  "from",
  "original",
  "array"
);
// console.log(replacesplice); // Output [ 'replace' , 'it' , 'replace' , 'from' , 'original' , 'array' , 'array' ]
// console.log(replacesplicenew); // Output [ 'slice', 'method', 'from' ]
