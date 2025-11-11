let opening = localStorage.getItem("opening") || "dutch";

const media = window.matchMedia("(max-width: 960px)");

const title = document.getElementById("title");
const variant = document.getElementById("variant");
const comment = document.getElementById("comment");
const dutchSwitch = document.getElementById("dutch-switch");
const viennaSwitch = document.getElementById("vienna-switch");
//Imgs
const imgBoards = document.getElementsByClassName("board-container");
//Learn
const move = document.getElementById("move");
const buttonNext = document.getElementById("button-next");
const buttonPrev = document.getElementById("button-prev");

let counter = 0;
//Practice
const practiceAnswers = document.getElementById("answers");
const score = document.getElementById("score");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const skipContainer = document.getElementById("skip-container");
const skip = document.getElementById("skip-button");

let practiceCounter = 0;
let goodAnswersCounter = 0;

const startPos = "rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR";
const startState = replaceInt(startPos);

let pieceImages = {
  r: `Imgs/Pieces/${style}/bR.svg`,
  n: `Imgs/Pieces/${style}/bN.svg`,
  b: `Imgs/Pieces/${style}/bB.svg`,
  q: `Imgs/Pieces/${style}/bQ.svg`,
  k: `Imgs/Pieces/${style}/bK.svg`,
  p: `Imgs/Pieces/${style}/bP.svg`,
  R: `Imgs/Pieces/${style}/wR.svg`,
  N: `Imgs/Pieces/${style}/wN.svg`,
  B: `Imgs/Pieces/${style}/wB.svg`,
  Q: `Imgs/Pieces/${style}/wQ.svg`,
  K: `Imgs/Pieces/${style}/wK.svg`,
  P: `Imgs/Pieces/${style}/wP.svg`,
};

const boardContainer = document.getElementById("main-board-container-id");

let squareSize = 100;

function mediaChange() {
  squareSizeChange();
  reloadPosition();
}

function reloadPosition() {
  if (mode == "learn") {
    handleLearn();
  }
  if (mode == "practice") {
    setPosition(
      replaceInt(openings[opening][practiceCounter].fen),
      boardContainer
    );
  }
}

function squareSizeChange() {
  if (media.matches) {
    squareSize = 50;
  } else {
    squareSize = 100;
  }
}

function handleLearn() {
  comment.innerHTML = openings[opening].moves[counter][1];
  move.innerHTML = openings[opening].moves[counter][2];
  setPosition(replaceInt(openings[opening].moves[counter][0]), boardContainer);
}

if (media) {
  media.addEventListener("change", mediaChange);
}

if (buttonNext) {
  buttonNext.addEventListener("click", () => {
    if (counter < openings[opening].moves.length - 1) {
      counter += 1;
    }
    handleLearn();
  });
}

if (buttonPrev) {
  buttonPrev.addEventListener("click", () => {
    if (counter > 0) {
      counter -= 1;
    }
    handleLearn();
  });
}

document.addEventListener("keydown", (event) => {
  if (mode == "learn") {
    if (event.key === "ArrowRight") {
      if (counter < openings[opening].moves.length - 1) {
        counter += 1;
      }
      handleLearn();
    }
    if (event.key === "ArrowLeft") {
      if (counter > 0) {
        counter -= 1;
      }
      handleLearn();
    }
  }
});

if (skip) {
  skip.addEventListener("click", () => {
    nextQuestion();
    updateScore();
  });
}

if (ans1) {
  ans1.addEventListener("click", () => {
    answer(0);
  });
}

if (ans2) {
  ans2.addEventListener("click", () => {
    answer(1);
  });
}

if (ans3) {
  ans3.addEventListener("click", () => {
    answer(2);
  });
}

if (dutchSwitch) {
  dutchSwitch.addEventListener("click", () => {
    opening = "dutch";
    localStorage.setItem("opening", "dutch");
    resetOpening();
  });
}

if (viennaSwitch) {
  viennaSwitch.addEventListener("click", () => {
    opening = "vienna";
    localStorage.setItem("opening", "vienna");
    resetOpening();
  });
}

function resetOpening() {
  if (mode == "learn") {
    counter = 0;
    title.innerHTML = openings[opening].name;
    variant.innerHTML = openings[opening].variant;
    handleLearn();
  }
  if (mode == "practice") {
    practiceCounter = 0;
    goodAnswersCounter = 0;
    updateScore();
    setPage(practiceCounter);
  }
  if (mode == "img") {
    squareSize = 50;
    for (let i = 0; i < imgBoards.length; i++) {
      setPosition(replaceInt(imgPositions[i]), imgBoards[i]);
    }
  }
}

function replaceInt(str) {
  return (tmp = str.replace(/[1-8]/g, (n) => ".".repeat(Number(n))).split(""));
}

function setPosition(state, boardCont) {
  clearBoard(boardCont);
  state.forEach((symbol, index) => {
    if (symbol === ".") return;
    const x = index % 8;
    const y = Math.floor(index / 8);

    const piece = document.createElement("img");
    piece.src = pieceImages[symbol];
    piece.style.position = "absolute";
    piece.style.left = `${x * squareSize}px`;
    piece.style.top = `${y * squareSize}px`;
    piece.style.width = `${squareSize}px`;
    piece.style.height = `${squareSize}px`;

    boardCont.appendChild(piece);
  });
}

function clearBoard(boardCont) {
  boardCont
    .querySelectorAll("img:not(:first-child)")
    .forEach((i) => i.remove());
}

function updateScore() {
  let tmp = Math.min(practiceCounter + 1, practiceAnswers.children.length);
  score.innerHTML = String(tmp + "/" + practiceAnswers.children.length);
}

function setPage(practiceCounter) {
  skipContainer.style.display = "none";
  practiceAnswers.style.display = "flex";
  title.innerHTML = openings[opening][practiceCounter].name;
  variant.innerHTML = openings[opening][practiceCounter].variant;
  comment.innerHTML = openings[opening][practiceCounter].comment;
  for (let i = 0; i < practiceAnswers.children.length; i++) {
    practiceAnswers.children[i].innerHTML =
      openings[opening][practiceCounter].answers[i][0];
  }
  setPosition(
    replaceInt(openings[opening][practiceCounter].fen),
    boardContainer
  );
}

function showResult(i) {
  skipContainer.style.display = "flex";
  practiceAnswers.style.display = "none";
  comment.innerHTML = openings[opening][practiceCounter].answers[i][1];
}

function nextQuestion() {
  if (!(openings[opening].length == practiceCounter)) {
    setPage(practiceCounter);
  }
}

function answer(i) {
  if (!(openings[opening].length == practiceCounter)) {
    if (openings[opening][practiceCounter].answers[i][2]) {
      goodAnswersCounter += 1;
    }
    showResult(i);
    practiceCounter += 1;
  }
}

squareSizeChange();
resetOpening();
