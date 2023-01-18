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

// Make moving figure down
let moveCellDraw = () => {
  for (let y = tetrisBoard.length - 1; y >= 0; y--) {
    for (let x = 0; x < tetrisBoard[y].length; x++) {
      if (tetrisBoard[y][x] === 1) {
        // console.log(tetrisBoard[y + 1]);
        tetrisBoard[y + 1][x] = 1;
        tetrisBoard[y][x] = 0;
      }
    }
  }
};

draw();

let startGame = () => {
  moveCellDraw();
  draw();
};

startGame()


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
