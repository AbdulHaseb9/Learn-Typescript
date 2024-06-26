"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECMAfunc = void 0;
// we export this function using ECMA type
let ECMAfunc = () => {
    console.log("ECMA Type");
    console.log("we export this function and import on index file");
};
exports.ECMAfunc = ECMAfunc;
// we export this function using ECMA type
let Commonfunc = () => {
    console.log("Common JS");
    console.log("we export this function and import on index file");
};
exports.Commonfunc = Commonfunc;
