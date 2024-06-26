// we export this function using ECMA type
export let ECMAfunc = (): void => {
  console.log("ECMA Type");
  console.log("we export this function and import on index file");
};

// we export this function using ECMA type
let Commonfunc = (): void => {
  console.log("Common JS");
  console.log("we export this function and import on index file");
};

exports.Commonfunc = Commonfunc;
