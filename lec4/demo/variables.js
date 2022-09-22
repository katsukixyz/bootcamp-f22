// function let_example() {
//   if (true) {
//     let a = "bog";
//   }
//   return a;
// }

// console.log(let_example());

// function var_example() {
//   if (true) {
//     var b = "bog";
//   }
//   return b;
// }

// console.log(var_example());
// [{ 0: 8 }, { 1: 10 }];

const arr = [8, 10, 22, 73, 45, 25];
// console.log(
//   arr.map((value, index) => {
//     const obj = {};
//     obj[index] = value;
//     return obj;
//   })
// );

const final = arr.reduce((prev, cur, index) => {
  // const obj = prev;
  prev[cur] = index;
  return prev;
}, {});

console.log(final);
