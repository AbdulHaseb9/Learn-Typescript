"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let value1 = parseInt(prompt("Enter First Value "));
let value2 = parseInt(prompt("Enter Second Value "));
let operator = prompt("select one operator(+ , - , x , /) ");
switch (operator) {
    case "+":
        console.log(`The answer of ${value1} ${operator} ${value2} = ${value1 + value2}`);
        break;
    case "-":
        console.log(`The answer of ${value1} ${operator} ${value2} = ${value1 - value2}`);
        break;
    case "x":
        console.log(`The answer of ${value1} ${operator} ${value2} = ${value1 * value2}`);
        break;
    case "/":
        console.log(`The answer of ${value1} ${operator} ${value2} = ${value1 / value2}`);
        break;
    default:
        console.log("please select correct operator");
        break;
}
