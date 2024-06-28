import promptSync from "prompt-sync";

const prompt = promptSync();

let value1: number = parseInt(prompt("Enter First Value "));
let value2: number = parseInt(prompt("Enter Second Value "));
let operator: string = prompt("select one operator(+ , - , x , /) ");

switch (operator) {
  case "+":
    console.log(
      `The answer of ${value1} ${operator} ${value2} = ${value1 + value2}`
    );
    break;
  case "-":
    console.log(
      `The answer of ${value1} ${operator} ${value2} = ${value1 - value2}`
    );
    break;
  case "x":
    console.log(
      `The answer of ${value1} ${operator} ${value2} = ${value1 * value2}`
    );
    break;
  case "/":
    console.log(
      `The answer of ${value1} ${operator} ${value2} = ${value1 / value2}`
    );
    break;
  default:
    console.log("please select correct operator");
    break;
}
