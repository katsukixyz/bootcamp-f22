const colorWheel = [
  "silver",
  "lightcoral",
  "salmon",
  "tomato",
  "darksalmon",
  "coral",
  "lightsalmon",
  "sandybrown",
  "burlywood",
  "tan",
  "khaki",
  "greenyellow",
  "lightgreen",
  "skyblue",
  "lightsteelblue",
  "thistle",
  "plum",
  "violet",
  "hotpink",
];

let i = 0;

const square = document.getElementsByClassName("square")[0];
const colorButton = document.getElementById("change-color-button");

// Initial page load
square.style.backgroundColor = colorWheel[i];
colorButton.textContent = "Change to " + colorWheel[i + 1];

// Subsequent
colorButton.addEventListener("click", () => {
  i = (i + 1) % colorWheel.length;
  square.style.backgroundColor = colorWheel[i];
  colorButton.textContent =
    "Change to " + colorWheel[(i + 1) % colorWheel.length];
});
