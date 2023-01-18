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
let moveCellDraw = () => {
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

draw();

let startGame = () => {
  moveCellDraw();
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
