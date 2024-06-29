// for loop

// this loop will console 2 table

let value1: number = 2;

for (let i = 1; i <= 10; i++) {
  //   console.log(`2 x ${i} = ${2 * i}`);
}

// loop and print the pattern

for (let i = 1; i <= 5; i++) {
  let lines: string = "";
  for (let j = 1; j <= i; j++) {
    lines += j;
  }
  console.log(lines);
}

// Output
//
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
