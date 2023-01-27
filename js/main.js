let main = document.querySelector(".main");
const scoreTetris = document.getElementById("score");
const levelTetris = document.getElementById("level");
const startTetris = document.getElementById("start");
const pauseTetris = document.getElementById("pause");
const gameOver = document.getElementById("game-over");
const bestScoreTetris = document.getElementById("best-score");
const chooseLevel = document.getElementById("startLevel");

//In future change whith tetrisBoard
const x = 10;
const y = 20;
let tetrisBoard = [];
for (let i = 0; i < y; i++) {
  tetrisBoard[i] = [];
  for (let j = 0; j < x; j++) {
    tetrisBoard[i][j] = 0;
  }
}

const j = {
  a: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  color: "red",
};

const i = {
  a: [
    [0, 2, 0, 0],
    [0, 2, 0, 0],
    [0, 2, 0, 0],
    [0, 2, 0, 0],
  ],
  color: "green",
};

const o = {
  a: [
    [3, 3, 0],
    [3, 3, 0],
    [0, 0, 0],
  ],
  color: "pink",
};

const l = {
  a: [
    [0, 4, 0],
    [0, 4, 0],
    [0, 4, 4],
  ],
  color: " blue",
};

const z = {
  a: [
    [5, 5, 0],
    [0, 5, 5],
    [0, 0, 0],
  ],
  color: "orange",
};

const t = {
  a: [
    [6, 6, 6],
    [0, 6, 0],
    [0, 0, 0],
  ],
  color: "purple",
};

const s = {
  a: [
    [0, 7, 7],
    [7, 7, 0],
    [0, 0, 0],
  ],
  color: "yellow",
};

const figures = { j, i, o, l, z, t, s };

// chooseLevel.addEventListener("click",(e) => {
//   e.target.innerHTML = "1";
//   currentLevel = 1;
//   levelTetris.innerHTML = currentLevel;
// });

let bestScore = 0;
let score = 0;
let gameTimer;
let currentLevel = 1;
let isPaused = true;
let possiblLevels = {
  1: { scoreForLine: 100, speed: 400, nextLevelScore: 100 },
  2: { scoreForLine: 150, speed: 350, nextLevelScore: 350 },
  3: { scoreForLine: 200, speed: 300, nextLevelScore: 400 },
  4: { scoreForLine: 250, speed: 250, nextLevelScore: 3000 },
  5: { scoreForLine: 300, speed: 200, nextLevelScore: 4000 },
  6: { scoreForLine: 350, speed: 150, nextLevelScore: 6000 },
  7: { scoreForLine: 400, speed: 100, nextLevelScore: 8000 },
  8: { scoreForLine: 450, speed: 70, nextLevelScore: 10000 },
  9: { scoreForLine: 500, speed: 50, nextLevelScore: 15000 },
  10: { scoreForLine: 550, speed: 30, nextLevelScore: Infinity },
};

let activeFigure = {
  x: 4,
  y: 0,
  color: "red",
  figure: getNewFigure(),
};

// draw
const draw = () => {
  let mainInnerHTML = "";
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        mainInnerHTML += `<div class="cell red" ></div>`;
      } else if (tetrisBoard[y][x] === 2) {
        mainInnerHTML += `<div class="cell blue" ></div>`;
      } else if (tetrisBoard[y][x] === 3) {
        mainInnerHTML += `<div class="cell orange" ></div>`;
      } else if (tetrisBoard[y][x] === 4) {
        mainInnerHTML += `<div class="cell purple" ></div>`;
      } else if (tetrisBoard[y][x] === 5) {
        mainInnerHTML += `<div class="cell yellow" ></div>`;
      } else if (tetrisBoard[y][x] === 6) {
        mainInnerHTML += `<div class="cell pink" ></div>`;
      } else if (tetrisBoard[y][x] === 7) {
        mainInnerHTML += `<div class="cell green" ></div>`;
      } else if (tetrisBoard[y][x] === 11) {
        mainInnerHTML += `<div class="cell red" ></div>`;
      } else if (tetrisBoard[y][x] === 12) {
        mainInnerHTML += `<div class="cell blue" ></div>`;
      } else if (tetrisBoard[y][x] === 13) {
        mainInnerHTML += `<div class="cell orange" ></div>`;
      } else if (tetrisBoard[y][x] === 14) {
        mainInnerHTML += `<div class="cell purple" ></div>`;
      } else if (tetrisBoard[y][x] === 15) {
        mainInnerHTML += `<div class="cell yellow" ></div>`;
      } else if (tetrisBoard[y][x] === 16) {
        mainInnerHTML += `<div class="cell pink" ></div>`;
      } else if (tetrisBoard[y][x] === 17) {
        mainInnerHTML += `<div class="cell green" ></div>`;
      } else if (tetrisBoard[y][x] === 11) {
        mainInnerHTML += `<div class="cell" style="background:${activeFigure.color}"></div>`;
      } else {
        mainInnerHTML += '<div class="cell"></div>';
      }
    }
  }
  main.innerHTML = mainInnerHTML;

  const checkBestScore = () => {
    if (localStorage.getItem("best-score") === null) {
      localStorage.setItem("best-score", score);
      bestScoreTetris.innerHTML = score;
    } else {
      bestScore = parseInt(localStorage.getItem("best-score"));
      bestScoreTetris.innerHTML = bestScore;
    }
  };
  checkBestScore();

  if (score > bestScore) {
    localStorage.setItem("best-score", score);
    document.getElementById("bestScore").innerHTML = score;
    bestScoreTetris.innerHTML = score;
  }
};

function removePrevActiveFigure() {
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 2) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 3) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 4) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 5) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 6) {
        tetrisBoard[y][x] = 0;
      } else if (tetrisBoard[y][x] === 7) {
        tetrisBoard[y][x] = 0;
      }
    }
  }
}

function addActiveFigure() {
  removePrevActiveFigure();
  for (let y = 0; y < activeFigure.figure.length; y++) {
    for (let x = 0; x < activeFigure.figure[y].length; x++) {
      if (activeFigure.figure[y][x]) {
        tetrisBoard[activeFigure.y + y][activeFigure.x + x] =
          activeFigure.figure[y][x];
      }
    }
  }
}

function rotateFigure() {
  const prevFigureState = activeFigure.figure;

  activeFigure.figure = activeFigure.figure[0].map((val, index) =>
    activeFigure.figure.map((row) => row[index]).reverse()
  );
  if (hasCollisions()) {
    activeFigure.figure = prevFigureState;
  }
}

function hasCollisions() {
  for (let y = 0; y < activeFigure.figure.length; y++) {
    for (let x = 0; x < activeFigure.figure[y].length; x++) {
      if (
        activeFigure.figure[y][x] &&
        (tetrisBoard[activeFigure.y + y] === undefined ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === undefined ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 11 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 12 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 13 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 14 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 15 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 16 ||
          tetrisBoard[activeFigure.y + y][activeFigure.x + x] === 17)
      ) {
        return true;
      }
    }
  }
  return false;
}

function removeFullLines() {
  let canRemoveFullLine = true;
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] < 10 ) {
        canRemoveFullLine = false;
        break;
      }
    }
    if (canRemoveFullLine) {
      tetrisBoard.splice(y, 1);
      tetrisBoard.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      score += 100;
    }
    canRemoveFullLine = true;
  }

  scoreTetris.innerHTML = score;
  if (score >= possiblLevels[currentLevel].nextLevelScore) {
    currentLevel++;
    levelTetris.innerHTML = currentLevel;
  }
}

function getNewFigure() {
  const possiblFigure = "jiolszt";
  const randomIdFigure = Math.floor(Math.random() * 7);

  return figures[possiblFigure[randomIdFigure]].a;
}

function fixFigure() {
  for (let y = tetrisBoard.length - 1; y >= 0; y--) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        tetrisBoard[y][x] = 11;
      } else if (tetrisBoard[y][x] === 2) {
        tetrisBoard[y][x] = 12;
      } else if (tetrisBoard[y][x] === 3) {
        tetrisBoard[y][x] = 13;
      } else if (tetrisBoard[y][x] === 4) {
        tetrisBoard[y][x] = 14;
      } else if (tetrisBoard[y][x] === 5) {
        tetrisBoard[y][x] = 15;
      } else if (tetrisBoard[y][x] === 6) {
        tetrisBoard[y][x] = 16;
      } else if (tetrisBoard[y][x] === 7) {
        tetrisBoard[y][x] = 17;
      }
    }
  }
  removeFullLines();
}

fixFigure();

function reset() {
  isPaused = true;
  clearTimeout(gameTimer);
  tetrisBoard = [];
  for (let i = 0; i < y; i++) {
    tetrisBoard[i] = [];
    for (let j = 0; j < x; j++) {
      tetrisBoard[i][j] = 0;
    }
  }
  draw();
  gameOver.style.display = "block";
}

document.onkeydown = function (e) {
  if (!isPaused) {
    if (e.code === "ArrowLeft") {
      activeFigure.x -= 1;
      if (hasCollisions()) {
        activeFigure.x += 1;
      }
    } else if (e.code === "ArrowRight") {
      activeFigure.x += 1;
      if (hasCollisions()) {
        activeFigure.x -= 1;
      }
    } else if (e.code === "ArrowDown") {
      moveFigureDown();
    } else if (e.code === "ArrowUp") {
      rotateFigure();
    }
    if (!isPaused) {
      addActiveFigure();
      draw();
    }
  }
};

startTetris.addEventListener("click", (e) => {
  e.target.innerHTML = "Start again";
  isPaused = false;
  gameTimer = setTimeout(startGame, possiblLevels[currentLevel].speed);
  gameOver.style.display = "none";
  score = 0;
  scoreTetris.innerHTML = score;
  currentLevel = 1;
  levelTetris.innerHTML = currentLevel;
});

pauseTetris.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Pause") {
    e.target.innerHTML = "End Puse";
    clearTimeout(gameTimer);
  } else {
    e.target.innerHTML = "Pause";
    gameTimer = setTimeout(startGame, possiblLevels[currentLevel].speed);
  }
  isPaused = !isPaused;
});

levelTetris.innerHTML = currentLevel;

function moveFigureDown() {
  activeFigure.y += 1;
  if (hasCollisions()) {
    activeFigure.y -= 1;
    fixFigure();
    activeFigure.figure = getNewFigure();
    activeFigure.x = 4;
    activeFigure.y = 0;
    if (hasCollisions()) {
      reset();
    }
  }
}

draw();

function startGame() {
  moveFigureDown();
  if (!isPaused) {
    addActiveFigure();
    draw();
  }
  gameTimer = setTimeout(startGame, possiblLevels[currentLevel].speed);
}
