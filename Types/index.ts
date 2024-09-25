// Void Type
//
// function that does not return any value is called void.
const sum = (message: string): void => {
  console.log("Void - " + message);
};

sum("Type of this function is void");

//
//
// Type Alias
//
// define type like a variable and reuse it

type varType = string | number | boolean;

let a: varType = 10;
let b: varType = "this is string";
let c: varType = false;

//
// Type Literals
//
// Apply values rather than apply types to a variables or parameter

let var1: "literals type" = "literals type";
let var2: 33 = 33;
let var3: 48 | "hello world" = "hello world";

//
// Type Inference
//
// Typescript automatically detect data type of variable when you not declared once it detect you cannot change value of this variable

let var4 = "this is string"; // inferred as string type

// now you cannot change type to number
// var4 = 44;
//
//

//
// Type Tuple
//

let var5: [string, boolean, number, undefined] = [
  "string",
  true,
  88,
  undefined,
];

//
// Type Enum
//

enum Color {
  Red,
  Green,
  Blue,
}

console.log("Enum  - " + Color[1]);
// when you give index it show value like green
console.log("Enum  - " + Color.Green);
// when you give value it show index like 1
//
//

//
// Type Union
//
// assign one or more type is union

const arr: string | boolean = "union";
// 
// 

//
//
// In TypeScript, the never type represents values that never occur. It's typically used for functions that:
//
// Never return because they throw an error

function apiEror(msg: string, code: number): never {
  throw {
    message: msg,
    code: code, 
  };
}

console.log(apiEror("Server Failed", 401));
