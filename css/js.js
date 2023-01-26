const l = {
  a: [
    [0, {figure: 'o'}, 0],
    [0, {figure: 'o'}, 0],
    [0, {figure: 'o', class: 'bc-orange'}, {}],
  ],
  color: " blue",
};



if (tetrisBoard[y][x] === 1) {
  const cell = tetrisBoard[y][x];

  mainInnerHTML += `<div class="cell" style="background:${activeFigure.color}"></div>`;
}
