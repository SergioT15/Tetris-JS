let main = document.querySelector(".main");
let tetrisBoard = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//////////////////////////////////////////////
//In future change whith tetrisBoard
// let x = 10;
// let y = 20;
// let tetrisBoard = [];
// for (let i = 0; i < y; i++) {
//   tetrisBoard[i] = [];
//   for (let j = 0; j < x; j++) {
//     tetrisBoard[i][j] = 0;
//   }
// }
/////////////////////////////////////////////////

let speedGame = 300;

//draw
let draw = () => {
  let mainInnerHTML = "";
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        mainInnerHTML += '<div class="cell movingCell"></div>';
      } else {
        mainInnerHTML += '<div class="cell"></div>';
      }
    }
  }
  main.innerHTML = mainInnerHTML;
};
// Check can figure move down
let canFigureMoveDown = () => {
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        if (y === tetrisBoard.length - 1) {
          return false;
        }
      }
    }
  }
  return true;
};

// Make moving figure down
let moveCellDown = () => {
  if (canFigureMoveDown()) {
    for (let y = tetrisBoard.length - 1; y >= 0; y--) {
      for (let x = 0; x < tetrisBoard[y].length; x++) {
        if (tetrisBoard[y][x] === 1) {
          tetrisBoard[y + 1][x] = 1;
          tetrisBoard[y][x] = 0;
        }
      }
    }
  }
};

//Move figure left
function canFigureMoveLeft() {
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        if (x === 0 || tetrisBoard[y][x - 1] === 2) {
          return false;
        }
      }
    }
  }

  return true;
}

function moveFigureLeft() {
  if (canFigureMoveLeft()) {
    for (let y = tetrisBoard.length - 1; y >= 0; y--) {
      for (let x = 0; x < tetrisBoard[y].length; x++) {
        if (tetrisBoard[y][x] === 1) {
          tetrisBoard[y][x - 1] = 1;
          tetrisBoard[y][x] = 0;
        }
      }
    }
  }
}

function canFigureMoveRight() {
  for (let y = 0; y < tetrisBoard.length; y++) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        if (x === 9 || tetrisBoard[y][x + 1] === 2) {
          return false;
        }
      }
    }
  }

  return true;
}

function moveFigureRight() {
  if (canFigureMoveRight()) {
    for (let y = tetrisBoard.length - 1; y >= 0; y--) {
      for (let x = 9; x >= 0; x--) {
        if (tetrisBoard[y][x] === 1) {
          tetrisBoard[y][x + 1] = 1;
          tetrisBoard[y][x] = 0;
        }
      }
    }
  }
}

draw();

// Пробел		32
// курсор ←	ArrowLeft	37
// курсор ↑	ArrowUp	38
// курсор ↓	ArrowDown	40
// курсор →	ArrowRight	39
document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    moveFigureLeft();
  } else if (e.keyCode === 39) {
    moveFigureRight();
  } else if (e.keyCode === 40) {
    moveCellDown();
  }
  draw();
};

let startGame = () => {
  moveCellDown();
  draw();
};

setInterval(startGame, speedGame);

let j = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 0],
];

let i = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];

let o = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 0],
];

let l = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];

let z = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
];

let t = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
];

let s = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
];
