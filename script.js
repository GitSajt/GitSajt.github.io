const menuBar = document.getElementById("menuBar");
menuBar.style.display = "none";

function loadMenu() {
  const content = document.getElementById("menuBar");
  const page = "menu.html";
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      content.innerHTML = xmlHttp.responseText;
    }
  };

  start = new Date().getTime();

  xmlHttp.open("GET", page, true); // true for asynchronous
  xmlHttp.send(null);
}
function loadFooter() {
  const content = document.getElementById("footer");
  const page = "footer.html";
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      content.innerHTML = xmlHttp.responseText;
    }
  };

  start = new Date().getTime();

  xmlHttp.open("GET", page, true); // true for asynchronous
  xmlHttp.send(null);
}

function loadNav() {
  const content = document.getElementById("top");
  const page = "navbar.html";
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      content.innerHTML = xmlHttp.responseText;
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
