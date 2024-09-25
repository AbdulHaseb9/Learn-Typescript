// Void Type
//
// function that does not return any value is called void.
var sum = function (message) {
    console.log("Void - " + message);
};
sum("Type of this function is void");
var a = 10;
var b = "this is string";
var c = false;
//
// Type Literals
//
// Apply values rather than apply types to a variables or parameter
var var1 = "literals type";
var var2 = 33;
var var3 = "hello world";
//
// Type Inference
//
// Typescript automatically detect data type of variable when you not declared once it detect you cannot change value of this variable
var var4 = "this is string"; // inferred as string type
// now you cannot change type to number
// var4 = 44;
//
//
//
// Type Tuple
//
var var5 = [
    "string",
    true,
    88,
    undefined,
];
//
// Type Enum
//
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
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
var arr = "union";
