const colorBox = document.querySelector("#colorBox");
const message = document.querySelector("#message");
const redButton = document.querySelector("#redButton");
const greenButton = document.querySelector("#greenButton");
const purpleButton = document.querySelector("#purpleButton");

let clicks = 0;

function changeColor(colorCode, colorName) {
  clicks = clicks + 1;
  colorBox.style.backgroundColor = colorCode;
  message.innerHTML = "The box is now " + colorName + "! Button clicks so far: " + clicks;
  console.log("Changed the box to " + colorName + ". Total clicks: " + clicks);
}

redButton.addEventListener("click", function() {
  changeColor("#b91c1c", "red");
});

greenButton.addEventListener("click", function() {
  changeColor("#047857", "green");
});

purpleButton.addEventListener("click", function() {
  changeColor("#7e22ce", "purple");
});