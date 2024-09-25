var data;
data = 10;
data = "hello World";
// let val: string = data;
// -
// -
// in this example you cannot assign it to variable but in any you can do it but prefered is to used unknown
// if you want to assign it you have to do it with if condition
if (typeof data === "string") {
    var val = data;
    console.log(val);
}
