let style = localStorage.getItem("style") || "alpha";
let color = localStorage.getItem("color") || "green";

const html = document.documentElement;
const alphaSwitch = document.getElementById("alpha-switch");
const altSwitch = document.getElementById("alt-switch");
const greenSwitch = document.getElementById("green-switch");
const blueSwitch = document.getElementById("blue-switch");
const brownSwitch = document.getElementById("brown-switch");

const boards = document.getElementsByClassName("board");
const m_board = document.getElementById("main-board-id");

setTheme(false);

function setTheme(reload) {
  html.className = `${color}`;
  updateImgs(reload);
}

alphaSwitch.addEventListener("click", () => {
  style = "classic";
  localStorage.setItem("style", "alpha");
  setTheme(true);
});

altSwitch.addEventListener("click", () => {
  style = "cburnett";
  localStorage.setItem("style", "cburnett");
  setTheme(true);
});

greenSwitch.addEventListener("click", () => {
  color = "green";
  localStorage.setItem("color", "green");
  setTheme(false);
});

blueSwitch.addEventListener("click", () => {
  color = "blue";
  localStorage.setItem("color", "blue");
  setTheme(false);
});

brownSwitch.addEventListener("click", () => {
  color = "brown";
  localStorage.setItem("color", "brown");
  setTheme(false);
});

function updateImgs(reload) {
  for (let i = 0; i < boards.length; i++) {
    boards[i].src = `Imgs/Boards/${color}.png`;
  }
  if (m_board) {
    m_board.src = `Imgs/Boards/${color}.png`;
  }
  if (reload) {
    location.reload();
  }
}
