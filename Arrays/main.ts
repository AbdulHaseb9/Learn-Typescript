// Simple array that have only string values
let arr1: string[] = ["John", "Doe", "David"];
console.log("String Array", arr1);

// if we want multiple values in array we have to defined multiple types
let arr2: (string | number | boolean | undefined)[] = [
  "John",
  "Doe",
  "David",
  12,
  18,
  false,
  true,
  undefined,
];
console.log("Multiple Values Array", arr2);

//
//
//
// Types to Defined Array
// there are 3 types to defined array
// 1- By Normal Method
// 2- By Constructor
// 3- By Array Method

//
//
// 1- Normal Method
let normalArray: string[] = ["By", "Normal", "Array", "method"];
console.log(normalArray);

//
//
// 2- Constructor Method
let constructorArray: string[] = new Array(
  "By",
  "Constructor",
  "Array",
  "Method"
);
console.log(constructorArray);

//
//
// 3- Array Method
let arrayMethod: string[] = Array.of("By", "Array", "Method");
console.log(arrayMethod);
