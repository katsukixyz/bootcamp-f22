// PART 1: Array Element Manipulation - Square each element of the array. (Modify in-place)
function part1() {
  const arr = [0, 1, 2, 3, 4, 5];
  /*
  GOAL: [0, 1, 4, 9, 16, 25]
  */
  return arr;
}
console.log(part1());

// PART 2: Reshape Array - Make each element of the array arr its own array. (Return a new array)
function part2() {
  const arr = ["bits", "of", "good", "bootcamp", "fall", "2022"];
  /*
    GOAL: 
    [
        ['bits'],
        ['of'],
        ['good'],
        ['bootcamp'],
        ['fall'],
        ['2022']
    ]
    */
  return arr;
}
console.log(part2());

// PART 3: Cash Register - Add up the total price according to the list of prices below.
function part3() {
  const arr = ["tomato", "beef", "lettuce", "cheese", "onion", "strawberry"];
  // Prices:
  // onion, lettuce: 3
  // cheese: 3.5
  // tomato, strawberry: 4
  // beef: 5
  /*
  GOAL:
    22.5
  */
  return arr;
}
console.log(part3());

// PART 4: Name Organization - Get all elements of the array that have an even number of characters and return their lengths in a new array.
function part4() {
  const arr = [
    "katsuki",
    "alice",
    "sharath",
    "john", // 4
    "marissa",
    "rachel", // 6
    "stephanie",
    "claudia",
    "singer", // 6
    "chaeeun",
    "joyce",
    "simon",
    "vyshu",
    "natasha",
    "nick", // 4
    "gabrielle",
    "ila",
  ];
  //
  /*
  GOAL: [4, 6, 6, 4]
  */
  return arr;
}
console.log(part4());

// PART 5: Array to Object
function part5() {
  const arr = [0, 1, 2, 3, 4, 5];
  /*
    GOAL: 
    {
        0: "item_0",
        1: "item_1",
        2: "item_2",
        3: "item_3",
        4: "item_4",
        5: "item_5",
    }
    */
  return arr;
}

console.log(part5());
