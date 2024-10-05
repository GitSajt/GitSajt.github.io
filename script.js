const menuBar = document.getElementById("menuBar");
menuBar.style.display = "none";

function loadFooter() {
  const footer = document.getElementById("footer");
  const page = "footer.html";
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      footer.innerHTML = xmlHttp.responseText;
    }
  };

  start = new Date().getTime();

  xmlHttp.open("GET", page, true); // true for asynchronous
  xmlHttp.send(null);
}

function loadNav() {
  const nav = document.getElementById("top");
  const page = "navbar.html";
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      nav.innerHTML = xmlHttp.responseText;
    }
  };

  start = new Date().getTime();

  xmlHttp.open("GET", page, true); // true for asynchronous
  xmlHttp.send(null);
}

function OpenMenu() {
  menuBar.style.display = "block";
  document.documentElement.style.overflowY = "hidden";
}
function CloseMenu() {
  menuBar.style.display = "none";
  document.documentElement.style.overflowY = "auto";
}

loadFooter();
loadNav();
