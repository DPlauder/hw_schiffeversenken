class GameboardView {
  constructor() {
    this.createGameboardView();
  }

  createGameboardView = () => {
    const container = document.getElementById("board");
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `${i}`;
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  };
  showShips = (gameboard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (gameboard[i][j] > 0) {
          let combined = parseInt(i.toString() + j.toString());
          const cell = document.getElementById(`${combined}`);
          cell.classList.add("ship");
        }
      }
    }
  };
  updateViewBoard = (gameboard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const combined = parseInt(i.toString() + j.toString());
        const cell = document.getElementById(`${combined}`);
        if (gameboard[i][j] === "T") {
          cell.classList.add("shipHit");
        }
        if (gameboard[i][j] === "X") {
          cell.classList.add("shipMiss");
        }
      }
    }
  };
}
export { GameboardView };
