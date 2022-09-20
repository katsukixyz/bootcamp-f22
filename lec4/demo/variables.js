function let_example() {
  if (true) {
    let a = "bog";
  }
  return a;
}

console.log(let_example());

function var_example() {
  if (true) {
    var b = "bog";
  }
  return b;
}

console.log(var_example());
