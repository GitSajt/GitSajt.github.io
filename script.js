const menuBar = document.getElementById("menuBar");

menuBar.style.display = "none";

function OpenMenu() {
  menuBar.style.display = "block";
  document.documentElement.style.overflowY = "hidden";
}
function CloseMenu() {
  menuBar.style.display = "none";
  document.documentElement.style.overflowY = "auto";
}
