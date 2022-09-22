const redText = document.getElementById("to-have-red-text");

redText.style.color = "red";

redText.addEventListener("click", (e) => {
  redText.textContent = "Bog";
});
