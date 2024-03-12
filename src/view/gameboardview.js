class GameboardView {
  constructor(boardName) {
    this.parent = document.getElementById(boardName);
    this.createGameboardView();
    this.createSidebar();
  }

  createSidebar = () => {
    const sideBar = document.getElementById("sideBar");
    sideBar.classList.add("sideBar");
  };
  createGameboardView = () => {
    //const container = document.getElementById(`${this.parent}`);
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `${i}`;
      cell.classList.add("cell");
      this.parent.appendChild(cell);
    }
    return;
  };
  showShips = (gameboard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (gameboard[i][j] > 0) {
          let combined = parseInt(i.toString() + j.toString());
          const cell = this.parent.children[combined];
          cell.classList.add("ship");
        }
      }
    }
  };
  updateViewBoard = (gameboard) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const combined = parseInt(i.toString() + j.toString());
        const cell = this.parent.children[combined];
        if (gameboard[i][j] === "T") {
          cell.classList.add("shipHit");
        }
        if (gameboard[i][j] === "X") {
          cell.classList.add("shipMiss");
        }
      }
    }
  };
  showClicked(id) {
    document.getElementById(id).classList.add("clickedCell");
  }
  removeClicked() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("clickedCell");
    });
  }
}
export { GameboardView };
